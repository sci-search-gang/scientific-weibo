
/* Creates a uppercase hex number with at least length digits from a given number */
function fixedHex(number, length){
    var str = number.toString(16).toUpperCase();
    while(str.length < length)
        str = "0" + str;
    return str;
}

/* Creates a unicode literal based on the string */
function unicodeLiteral(str){
    var i;
    var result = "";
    for( i = 0; i < str.length; ++i){
        if(str.charCodeAt(i) > 126 || str.charCodeAt(i) < 32)
            result += "\\u" + fixedHex(str.charCodeAt(i),4);
        else
            result += str[i];
    }
    return result;
}

// for colating results
// Dealing with unicode:
//   var patt = new RegExp('\\u' + "昆明".charCodeAt(0).toString(16));
//   patt.test("昆明");
var collater = {
    regexify : function(str) {
        var rx = "";
        for (var i = 0; i < str.length; i++) {
            rx += unicodeLiteral(str.charAt(i));
            rx += "\\s*";
        }
        return rx;
    },

    collate : function(resultsArray, searchStr) {
        console.log("collating with search string: " + searchStr);
        var hits = new Array();
        var regexified = this.regexify(searchStr);
        console.log("patt: " + regexified);
        var patt = new RegExp(regexified);
        for (var j = 0; j < resultsArray.length; j++) {
            var results = resultsArray[j];
            console.log("resultsArray[j]");
            console.log(resultsArray[j]);
            for (var i = 0; i < results.length; i++) {
                console.log("output text: " + results[i].text);
                if (patt.test(results[i].text)) {
                    hits.push(results[i]);
                }
            }
        }
        console.log("collated hits: " + hits);
        return hits;
    }
}

// for displaying results
var resulter = {
    resultify : function(results) {
        var all = "<div>";
        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            all += "\n<div class='res'><a href=''>"+r.text+"</href></div>\n";
        }
        return all + "</div>";
    }
}

// Source/AppKey id for account using this.
var appKey = 202088835;
// Number of sub-results for each sub-query that then get merged.
var weiboQueryCount = 100;
// Number of queries waiting for a query to return.
// TODO: fix hack. Global vars are not cool.
var pendingQueries = 0;

// Return the weibo query from the URL; returns empty string or null when the
// current url is not a weibo search result.
var getWeiboQueryFromUrl = function(url_str) {
  var n=url_str.search("&");
  if (n==-1) {
    n=url_str.length;
  }
  var keyword_len=n-25;
  var keyword=url_str.slice(25,25+keyword_len);
  return keyword;
};

// Break a query into alternative queries that are less likely to be clocked.
var makeAlternativeQueries = function(keyword) {
  keyword_len=keyword.length
  var keyword1=keyword.slice(0,keyword_len-1);
  var keyword2=keyword.slice(1,keyword_len);
  var keyword3=keyword.substr(0,keyword_len-2) + ' ' + keyword.substr(keyword_len-2,1) + ' ' + keyword.substr(keyword_len-1,1);
  var keyword4=keyword.substr(0,keyword_len-2) + '+' + keyword.substr(keyword_len-2,1) + ' ' + keyword.substr(keyword_len-1,1);
  return [keyword1,keyword2,keyword3,keyword4];
};

//
var mergeResults = function (alternativeResults, queryString) {
    var mergedResults = collater.collate(alternativeResults, queryString);
    console.log(mergedResults);
    return mergedResults;
    //  alternativeResults[0];
};

var displayResults = function (results) {
  // TODO: nicely display results
  var resultsHtml = resulter.resultify(results);
  $("<div style='width:500px;height:400px; border:1px solid black;  background-color:white; box-shadow:10px 10px 10px black; position:fixed; top: 150px; left:150px; z-index:99999'><h1 style='margin:150px'>" + resultsHtml + "</h1></div>").appendTo("body");
};

//
var mergeAndShowResults = function (results, queryString) {
  var results = mergeResults(results, queryString);
  displayResults(results);
};

// Callback to parse weibo data
var handleWeiboResult = function (data) {
  console.log("HandleWeiboResult called");
  return data;
}

// Make a Weibo query and add the resul to
// Example: doWeiboQueryRequest("昆明", results);
var doWeiboQueryRequest = function(localQuery, gloablQuery, results) {
  console.log("doWeiboQueryRequest(" + localQuery + ")");
  (function($) {
    var url = "http://api.t.sina.com.cn/statuses/search.json?"
      + "source=" + appKey
      + "&q=" + encodeURIComponent(localQuery)
      + "&count=" + weiboQueryCount
      + "&page=1";
    console.log("doWeiboQueryRequest url = " + url);
    $.ajax({
       type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'handleWeiboResult',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
          console.log(json);
          results.push(json.data);
          pendingQueries--;
          if (pendingQueries == 0) {
            mergeAndShowResults(results, gloablQuery);
          }
        },
        error: function(e) {
          console.log("failed result for query: " + localQuery);
          pendingQueries--;
          console.log(e.message);
        }
    });
  })(jQuery);
};

var doScientificWeiboFromString = function (queryString) {
  var quieries = makeAlternativeQueries(queryString);
  var results = [];
  pendingQueries = quieries.length;
  for (i = 0; i < quieries.length; i++) {
    doWeiboQueryRequest(quieries[i], queryString, results);
  }
};

// Main function to do Scientific Weibo Search from a (typically failed) results
// of weibo query.
var doScientificWeibo = function () {
  var queryString = getWeiboQueryFromUrl(window.get_url());
  if (!queryString) {
    alert("This only works on for weibo-search result pages.");
    return;
  }
  doScientificWeiboFromString(queryString);
};

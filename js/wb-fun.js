// Source/AppKey id for account using this.
var appKey = 202088835;
// Number of sub-results for each sub-query that then get merged.
var weiboQueryCount = 20;

// Return the weibo query from the URL; returns empty string or null when the
// current url is not a weibo search result.
var getWeiboQueryFromUrl = function() {
  return window.location.href;
};

// Number of queries waiting for a query to return.
// TODO: FIX THSI HACK.
var pendingQueries = 0;

var mergeResults = function (alternativeResults, queryString) {
    // TODO: merge results!
    return alternativeResults[0];
};

var displayResults = function (results) {
  // TODO: nicely display results
  console.log(results);
};

//
var mergeAndShowResults = function (results, queryString) {
  var results = mergeResults(results, queryString);
  displayResults(results);
};

// Callback to parse weibo data
var handleWeiboResult = function (data) {
  return data;
}

// Make a Weibo query and add the resul to
// Example: doWeiboQueryRequest("昆明", results);
var doWeiboQueryRequest = function(queryString, results) {
  (function($) {
    var url = "http://api.t.sina.com.cn/statuses/search.json?"
      + "source=" + appKey
      + "&q=" + queryString
      + "&count=" + weiboQueryCount;
    $.ajax({
       type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'handleWeiboResult',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
          console.log(json);
          results.push(json);
          pendingQueries--;
          if (pendingQueries == 0) {
            mergeAndShowResults(results, queryString);
          }
        },
        error: function(e) {
           console.log(e.message);
        }
    });
  })(jQuery);
};

// Main function to do Scientific Weibo Search from a (typically failed) results
// of weibo query.
var doScientificWeibo = function () {
  var queryString = getWeiboQueryFromUrl(window.get_url());
  if (!queryString) {
    alert("This only works on for weibo-search result pages.");
    return;
  }
  var quieries = makeAlternativeQueries(query_string);
  var results = [];
  pendingQueries = quieries.length;
  for (i = 0; i < quieries.length; i++) {
    doWeiboQueryRequest(quieries[i], results);
  }
};


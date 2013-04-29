
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

var collater = {
    regexify : function(str) {
        var rx = "";
        for (var i = 0; i < str.length; i++) {
            var lit = unicodeLiteral(str.charAt(i));
            rx += "\\s*";
            rx += lit;
            rx += "\\s*";            
        }
        return rx;
    },

    // TODO: remove any duplicates
    // TODO: merge-sort to make the order best-results first
    collate : function(resultsArray, searchStr) {
        var hits = new Array();
        var regexified = this.regexify(searchStr);
        var patt = new RegExp(regexified);
        for (var j = 0; j < resultsArray.length; j++) {
            var results = resultsArray[j];
            for (var i = 0; i < results.length; i++) {
                if (patt.test(results[i].text)) {
                    hits.push(results[i]);
                }
            }
        }
        return hits;
    }
}

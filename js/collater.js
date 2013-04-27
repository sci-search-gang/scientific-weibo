var collater = {
    regexify : function(str) {
        var rx = "";
        for (var i = 0; i < str.length; i++) {
            var curChar = str.charAt(i);
            rx += "\\s*";
            rx += curChar;
            //rx += "&#12290;";
            //rx += "\\u12290+";
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

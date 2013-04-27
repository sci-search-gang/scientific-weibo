var collater = {
    collate : function(resultsArray, searchStr) {
        var hits = new Array();
        var patt = new RegExp(searchStr);
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

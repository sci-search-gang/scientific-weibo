var resulter = {
    resultify : function(results) {
        var all = "<div>";
        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            all += "\n<div class='res'><a href=''>"+r.text+"</href></div>\n";
        }
        return all;
    }
}

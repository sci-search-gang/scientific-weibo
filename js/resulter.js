var resulter = {
    resultify : function(results) {
        var all = "<div>";
        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            all += "\n<div><a href='http://weibo.com/"+r.user.id+"'>"+r.text+"</href></div><br><br>\n";
        }
        return all;
    }
}

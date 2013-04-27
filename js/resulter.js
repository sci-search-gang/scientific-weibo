var resulter = {
    resultify : function(results) {
        var all = "<dl class='feed_list'>";
        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            //all += "\n<div><a href='http://weibo.com/"+r.user.id+"'>"+r.text+"</href></div><br><br>\n";
            all +="<p class='info content'><a href='http://weibo.com/"+r.user.id+"'>"+r.text+"</a></p>";
        }
        if (results.length == 0) {
            all += "No matching results!";
        }
        all+="</dl>"
        return all;
    }
}

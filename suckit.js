javascript : (function (e, a, g, h, f, c, b, d) {
    if (!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
        c = a.createElement("script");
        c.type = "text/javascript";
        c.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
        c.onload = c.onreadystatechange = function () {
            if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                h((f = e.jQuery).noConflict(1), b = 1);
                f(c).remove()
            }
        };
        a.documentElement.childNodes[0].appendChild(c)
    }
})(window, document, "1.3.2", function ($, L) {

    $("<div style='width:500px;height:400px; border:1px solid black;  background-color:white; box-shadow:10px 10px 10px black; position:fixed; top: 150px; left:150px; z-index:99999'><h1 style='margin:150px'>Suck It Censorship</h1></div>").appendTo("body");
});
//cruched to bookmarklet becomes: javascript:(function()%7Bjavascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f%3De.jQuery)%7C%7Cg>f.fn.jquery%7C%7Ch(f))%7Bc%3Da.createElement("script")%3Bc.type%3D"text/javascript"%3Bc.src%3D"http://ajax.googleapis.com/ajax/libs/jquery/"%2Bg%2B"/jquery.min.js"%3Bc.onload%3Dc.onreadystatechange%3Dfunction()%7Bif(!b%26%26(!(d%3Dthis.readyState)%7C%7Cd%3D%3D"loaded"%7C%7Cd%3D%3D"complete"))%7Bh((f%3De.jQuery).noConflict(1),b%3D1)%3Bf(c).remove()%7D%7D%3Ba.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,"1.3.2",function(%24,L)%7B%24("<div style%3D%27width:500px%3Bheight:400px%3B border:5px solid black%3B  background-color:white%3B box-shadow:10px 10px 10px black%3B position:fixed%3B top: 150px%3B left:150px%3B z-index:99999%27><h1 style%3D%27margin:150px%27>Suck It Censorship</h1></div>").appendTo("body")%3B%7D)%3B%7D)()%3B

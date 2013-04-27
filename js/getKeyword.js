function getKeyword(){
var url_str=window.location.href
var n=url_str.search("&");
if (n==-1)
  {
  n=url_str.length;
  }
var keyword_len=n-25;
var keyword=url_str.slice(25,25+keyword_len);
return keyword;
}

function parseKeyword(keyword) {
keyword_len=keyword.length
var keyword1=keyword.slice(0,keyword_len-1);
var keyword2=keyword.slice(1,keyword_len);
var keyword3=keyword.substr(0,keyword_len-2) + ' ' + keyword.substr(keyword_len-2,1) + ' ' + keyword.substr(keyword_len-1,1);
var keyword4=keyword.substr(0,keyword_len-2) + '+' + keyword.substr(keyword_len-2,1) + ' ' + keyword.substr(keyword_len-1,1);
return [keyword1,keyword2,keyword3,keyword4];
}

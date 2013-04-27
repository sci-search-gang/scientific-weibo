About
======
A javascript bookmarklet to allow access to blocked search results on Sina Weibo. 

Running
=======

Go to http://scientificweibo.tumblr.com and follow the instructions there.

Background
==========

Sina Weibo is the so-called Chinese Twitter. When you search for certain "sensitive" keywords 
(eg 昆明+PX), Weibo states that due to government policy they cannot show you any search results. 
However, oftentimes posts which contain the term still do exist and have not been deleted from the 
site. By truncating your search keyword (昆明+P or 明+PX), you can often find relevant posts that 
contain your original blocked keyword or a close variation of it.

This tool aims to be a simple-to-install and use bookmarklet that 

1. quickly performs that search behind the scenes;

2. identifies the most likely to be relevant search results;

3. presents them to the user.

Latest dump of info: https://pad.riseup.net/p/weibo-fun


Building
========

To create a bookmarklet from this javascript, just place the code inside `<a>` tag as an href

As an alternative, you can also use bookmarklet crunchinators like this one: http://ted.mielczarek.org/code/mozilla/bookmarklet.html

Post the resulting link on any, and users can then drag it their bookmark bar for future use. 

More about bookmarklets here: http://en.wikipedia.org/wiki/Bookmarklet

Visual
============
image TK

Contributing
============

We welcome any and all contributions. To help just fork the repository and issue a pull request. 

Some next steps are: 

1. Fit the code in to 2000 characters with no external loading so it can be distributed more easily. 

2. Browser extension versions, for more flexibility than just the bookmarklet.


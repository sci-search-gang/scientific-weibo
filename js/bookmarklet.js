var ScientificWeiboSearch = function () {
  // TODO: show user that we are loading
  this.to_load = {
    'https://raw.github.com/sci-search-gang/scientific-weibo/master/js/scientific_weibo.js': 1,
    'http://code.jquery.com/jquery-1.9.1.js': 1
  };
  this.loaded = [];
};

ScientificWeiboSearch.prototype.startloading = function () {
  var self = this;
  var s = document.createElement('style');
  s.innerHTML = '#results { width:500px; border:1px solid black; background-color:white; box-shadow:5px 5px 5px black; position:absolute; top: 150px; left:150px; z-index:99999; } .res { margin-top:2px; border-bottom: 1px solid #eee; }';
  document.getElementsByTagName('head')[0].appendChild(s);
  for(var s in this.to_load) {
    var e=document.createElement('script');
    e.setAttribute('src',s);
    e.onload = function () {
      self.loaded.push(s);
      self.to_load[s] = undefined;
      self.run();
      console.log("loaded:" + s);
    }
    document.getElementsByTagName('head')[0].appendChild(e);
  }
};

ScientificWeiboSearch.prototype.run = function () {
  console.log(Object.keys(this.loaded));
  if (Object.keys(this.to_load).length == this.loaded.length) {
    console.log("running!");
    doScientificWeibo($('.searchInp_form')[0].value);
  }
};

window.scientific_weibo_search = new ScientificWeiboSearch();
window.scientific_weibo_search.startloading();

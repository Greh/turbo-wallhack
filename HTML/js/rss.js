/* rss.js */
var pubDate = function () {};

var template = function (item) {
	return '<li class="news-item clearfix span4">'
			+'<div class="news-date"> <span class="month">May</span> <span class="day">16</span> </div>'
			+'<div class="share-widget"> <a href="#"><i class="iconf-facebook"></i></a> <a href="#"><i class="iconf-twitter"></i> </a> </div>'
			+'<br class="clearfix">'
			+'<div class="news-entry">'
				+'<h3 class="entry-title">'+item.title+'</h3>'
				+'<div class="entry-image"> <img src="images/photos/780x475-01.jpg" alt="News Image"> </div>'
				+'<div class="entry-content">'
					+'<p>'+item.contentSnippet+'</p>'
					+'<a href="'+item.link+'">Read full story <i class="iconf-angle-right"></i> </a>'
				+'</div>'
			+'</div>'
			+'</li>';
};


$.get('http://ajax.googleapis.com/ajax/services/feed/load?hl=ja&output=json-in-script&q=http://blog.pydx.org/rss&v=1.0',
	function (data) {
		// console.log(data.responseData.feed.entries);
		$('#news .news-items').append(template(data.responseData.feed.entries[0]));
	}, 
	'jsonp');
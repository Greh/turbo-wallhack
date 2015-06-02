/* rss.js */
var pubDate = function (dateString) {
	// "Sat, 16 May 2015 13:29:19 -0700"
	var dateArr = dateString.split(' '); // split by space delimiter
	return {
		day: dateArr[1],
		month: dateArr[2]
	};
};

var createSnippet = function (content, len) { // len = # of words
	return jQuery(content).text().split(' ').slice(0, len-1).join(' ') + ' ...';
};

var template = function (item) {
	var date = pubDate(item.publishedDate);
	return '<li class="news-item clearfix span4">'
			+'<div class="news-date"> <span class="month">'+date.month+'</span> <span class="day">'+date.day+'</span> </div>'
			// +'<div class="share-widget"> <a href="#"><i class="iconf-facebook"></i></a> <a href="#"><i class="iconf-twitter"></i> </a> </div>'
			+'<br class="clearfix">'
			+'<div class="news-entry">'
				+'<h3 class="entry-title">'+item.title+'</h3>'
				// +'<div class="entry-image"> <img src="images/photos/780x475-01.jpg" alt="News Image"> </div>'
				+'<div class="entry-content">'
					+'<p>'+createSnippet(item.content, 75)+'</p>'
					+'<a href="'+item.link+'">Read full story <i class="iconf-angle-right"></i> </a>'
				+'</div>'
			+'</div>'
			+'</li>';
};


$.get('http://ajax.googleapis.com/ajax/services/feed/load?hl=ja&output=json-in-script&q=http://blog.pydx.org/rss&v=1.0&num=3',
	function (data) {
		// console.log(data.responseData.feed.entries);
		$.each(data.responseData.feed.entries, function (i,item) {
			// console.log(item);
			$('#news .news-items').append(template(item));
		});
	}, 
	'jsonp');
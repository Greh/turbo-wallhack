/* rss.js */

$.get('http://ajax.googleapis.com/ajax/services/feed/load?hl=ja&output=json-in-script&q=http://blog.pydx.org/rss&v=1.0',
	function (data) {
		console.log(data.responseData);
	}, 'jsonp');
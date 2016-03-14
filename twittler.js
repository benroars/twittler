
var showUserTweets = function(anchor){
	var user = $(anchor).text().slice(1);
//`	console.log(user);
	var $tweets = $('.tweets');
	$tweets.html('');

	for(var i in streams.users[user]){
		var $tweet = $('<div></div>');
		$tweet.text(': ' + streams.users[user][i].message);
        var $user = $('<a href="#" onClick="showUserTweets(this);"></a>');
        var $time = $('<span class="time"></span>');
        $time.text(moment(streams.users[user][i].created_at).fromNow());
       // console.log(moment(streams.users[user][i].created_at).fromNow());
        $time.appendTo($tweet);
        $user.text('@' + user);
        $user.prependTo($tweet);
        $tweet.appendTo($tweets);
	}
}

$(document).ready(function(){

	var $tweets = $('.tweets'); //where we want to add the new tweets

	var addNewTweets = function() {
		$tweets.html('');
		var index = streams.home.length - 1;
		while(index >= 0){
			var tweet = streams.home[index];
          	var $tweet = $('<div></div>');
          	$tweet.text(': ' + tweet.message);
          	var $user = $('<a href="#" onClick="showUserTweets(this);"></a>');
          	var $time = $('<span class="time"></span>');
        	$time.text(moment(tweet.created_at).fromNow());
        	$time.appendTo($tweet);
          	$user.text('@' + tweet.user);
          	$user.prependTo($tweet);
          	$tweet.appendTo($tweets);
          	index -= 1;
		}
	}

	$('#showtweet').on('click', function(event) {
		addNewTweets();
	});

	//setInterval(addNewTweets, 1500);

	WebFontConfig = {
      google: { families: [ 'Open+Sans:400,800:latin' ] }
    };
    (function() {
      var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })(); 
});








//var addNewTweets = function() {
//		if(streams.home.length > initialLength){
//			var index = streams.home.length - 1;
//			var count = 0;
//			while(index >= initialLength){
//				var tweet = streams.home[index];
  //        		var $tweet = $('<div></div>');
    //      		var $user = $('<a href="#"></a>');
     //     		$user.text('@' + tweet.user)
      //    		$tweet.text('@' + tweet.user + ': ' + tweet.message);
       //   		$tweet.prependTo($tweets).hide();
        //  		$tweet.slideDown();
         // 		index -= 1;
          //		count += 1;
			//}
			//initialLength += count;
	//	}
//	}
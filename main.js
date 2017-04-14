
// grab the element in HTML document
// var feed = document.getElementById('feed');
// now using jQuery
var feed = $('#feed');

// store feedparents here because of ordering, variable 'feed' first then can grab parent of feed
// store parent element to reference it
var feedsParent = feed.parent().get(0);

// remove whats inside the element (child elements)
// feed.parentNode.removeChild(feed);
// now using jQuery
// feed.parent().remove(feed);
feedsParent.remove();

// using prepend, add new image to the feed
// feedsParent.prepend("http://static.wixstatic.com/media/2659a8_35292960ee6c4a9bb1aafe1059255296.jpg_256");

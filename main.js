
// grab the element in HTML document
// var feed = document.getElementById('feed');
// now using jQuery
var feed = $('#feed');

// store feedparents here because of ordering, variable 'feed' first then can grab parent of feed
// store parent element to reference it
var feedsParent = feed.parent();

// remove whats inside the element (child elements)
// feed.parentNode.removeChild(feed);
// now using jQuery
feed.parent().remove();
// feedsParent.remove();

// using prepend, add new image to the feed
var motivation = '<img src="https://static.planetminecraft.com/files/resource_media/screenshot/1233/nike_just_do_it_3286309_thumb.jpg">';

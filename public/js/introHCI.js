'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

$('.likeBtn').click(function() { 
	console.log("WEEEE!");
	var timeSincePageLoad = Math.round(performance.now());
	ga('send', 'event', 'like', 'click');
	ga('send', 'timing', 'likes', 'click', timeSincePageLoad);
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}
var currentUrl = window.location.href;
var onGoogle = /google/i;
var evalGoogle = onGoogle.test(currentUrl);

if (evalGoogle) {
    alert("You are on a Google Webpage!")
} else {
    alert("You are NOT on a Google Webpage!")
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) { 
      var findGoogle = firstHref.search(url/google);

    chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);


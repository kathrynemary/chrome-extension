var currentUrl = window.location.href;
var onGoogle = /google/i;
var evalGoogle = onGoogle.test(currentUrl);
    
var hasSearch = /search/i; 
var evalSearch = hasSearch.test(currentUrl);

if (evalGoogle) {
    if (evalSearch) {
        var exclamation = "You searched!"
    } else {
        var exclamation = "Can't find a search. :/"
    };
     
    alert(exclamation);
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) { 
      var findGoogle = firstHref.search(url/google);

    chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);


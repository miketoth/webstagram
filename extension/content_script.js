console.log("I have loaded!");

$('body').addClass('stop-it');

var port = chrome.runtime.connect({name: "webstagram"});
port.postMessage({message: "loaded"});
//
//chrome.runtime.sendMessage({message: "loaded"}, function(response)
//{
//    console.log("Got response from EventPage");
//});



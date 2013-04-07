// ok this file needs a lot of work.

var savedPort = null;
chrome.runtime.onConnect.addListener(function(port)
{
   console.assert(port.name == "webstagram");
    port.onMessage.addListener(function(msg)
    {
       savedPort = port;
       if (msg.message == "loaded")
            init();
    });
});

//chrome.runtime.onMessage.addListener(
//    function(request, sender, sendResponse)
//    {
//        if (request.message == "loaded")
//        {
//            init();
//        }
//    });

$(document).ready(function()
{
    // inject matrix javascript and CSS
    $('#matrixStyle').click(function()
    {
        setFilter('matrix');
    });

    // repeat for geocities. This could be abstracted :(
    $("#geocityStyle").click(function()
    {
        setFilter('geocities');
    });

    $("#twentiesStyle").click(function()
    {
        setFilter('twenties');
    });

    $("#discoStyle").click(function()
    {
        setFilter('disco');
    });

    $("#noStyle").click(function()
    {
        setFilter('none');
    });
})

function init()
{
    console.log("init()");
//    // Adding a class to the body so the plugins don't screw up our links
//    $("body").addClass("stop-it");

    // Loads proper filter on load
    chrome.storage.local.get('filter', function(e)
    {
        console.log("get storage");
        var f = e['filter'];

        if (f == 'matrix')
            loadFilter('matrix.css', 'matrix.js');

        else if (f == 'geocities')
           loadFilter('geocities.css', 'geocities.js');

        else if (f == 'twenties')
            loadFilter('twenties.css', 'twenties.js');

        else if (f == 'disco')
            loadFilter('disco.css', 'disco.js');
    });
}

function setFilter(f)
{
    console.log("Filter Set: " + f);
    chrome.storage.local.set({'filter': f});
    chrome.tabs.executeScript(null, { 'code' : "document.location.reload(true);"}, function()
    {
        console.log("Script Executed");
    });
}

function loadFilter(c, j)
{
    console.log("Filter Loading: " + c + " " + j);

    // first CSS
    chrome.tabs.insertCSS(null, { 'file' : c }, function()
    {
        // then javascript
        chrome.tabs.executeScript(null, { 'file' : j}, function()
        {
            console.log("Script Executed");
        });
    });
}
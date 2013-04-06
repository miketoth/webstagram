// ok this file needs a lot of work.

console.log("before iffe");



        chrome.tabs.onUpdated.addListener(function (tabId, cInfo, tab) {
            console.log("is update being called");
            if(cInfo.status == "complete"){
                init();
            }
        });

        function init(){
        // Adding a class to the body so the plugins don't screw up our links
            $("body").addClass("stop-it");

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

            // inject matrix javascript and CSS
            $('#matrixStyle').click(function()
            {
                setFilter('matrix');

                // // first CSS
                // chrome.tabs.insertCSS(null, { file : "matrix.css" }, function()
                // {
                //     // then javascript
                //     chrome.tabs.executeScript(null, { file : "matrix.js"}, function()
                //     {
                //         console.log("finished matrix");
                //     });
                // });
            });

            // repeat for geocities. This could be abstracted :(
            $("#geocityStyle").click(function()
            {
                setFilter('geocities');
                // chrome.tabs.insertCSS(null, { file : "geocities.css" }, function()
                // {
                //     chrome.tabs.executeScript(null, { file: "geocities.js" }, function()
                //     {
                //             console.log("finished geocities");
                //     });
                // });
            });

            $("#twentiesStyle").click(function()
            {
                setFilter('twenties');
                // chrome.tabs.insertCSS(null, { file : "twenties.css" }, function()
                // {
                //     chrome.tabs.executeScript(null, { file: "twenties.js" }, function()
                //     {
                //         console.log("finished twenties");
                //     });
                // });
            });

            $("#discoStyle").click(function()
            {
                setFilter('disco');
                // chrome.tabs.insertCSS(null, { file : "disco.css" }, function()
                // {
                //     chrome.tabs.executeScript(null, { file: "disco.js" }, function()
                //     {
                //         console.log("finished disco");
                //     });
                // });
            });
        }
        
        function setFilter(f)
        {
            chrome.storage.local.set({'filter': f});
            document.location.reload(false);
        }
        
        function loadFilter(c, j)
        {
            // first CSS
            chrome.tabs.insertCSS(null, { 'file' : c }, function() 
            {
                // then javascript
                chrome.tabs.executeScript(null, { 'file' : j}, function()
                {
                    console.log("finished matrix");
                });
            });
        }
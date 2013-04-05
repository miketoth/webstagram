// ok this file needs a lot of work.

    $(document).ready(function () {

        $("body").addClass("stop-it");

        // inject matrix javascript and CSS
        $('#matrixStyle').click(function() {

          //  location.reload(true);

                // first CSS
                chrome.tabs.insertCSS(null, {
                    file : "matrix.css"
                }, function() {

                    // then javascript
                    chrome.tabs.executeScript(null, { file : "matrix.js"
                    }, function(){
                        console.log("finished matrix");
                    });
                });
        });

        // repeat for geocities. This could be abstracted :(
        $("#geocityStyle").click(function() {

        //    location.reload(true);

            chrome.tabs.insertCSS(null, {
                file : "geocities.css"
            }, function() {
                chrome.tabs.executeScript(null, {
                    file: "geocities.js"
                }, function() {
                        console.log("finished geocities");
                });
            });
        });

        $("#twentiesStyle").click(function() {

          //  location.reload(true);

            chrome.tabs.insertCSS(null, {
                file : "twenties.css"
            }, function() {
                chrome.tabs.executeScript(null, {
                    file: "twenties.js"
                }, function() {
                    console.log("finished twenties");
                });
            });
        });

        $("#discoStyle").click(function() {

         //   location.reload(true);

            chrome.tabs.insertCSS(null, {
                file : "disco.css"
            }, function() {
                chrome.tabs.executeScript(null, {
                    file: "disco.js"
                }, function() {
                    console.log("finished disco");
                });
            });
        });
    });
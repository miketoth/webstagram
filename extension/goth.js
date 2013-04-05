
    $(document).ready(function()
    {
      console.log("Style: Swag!");

    // before the CSS is loaded, check out the CSS on the page and put it into an array.
    // Not sure where to go from there but ill cross that bridge when i get there
    var allDOMElements = $('*');
    //console.log(allDOMElements);
    
    // now that I have this big ol array. I can iterate through it an assign a predefined set of 
    // "Goth" filters to it. This way we only have to make a list of colors, etc and we will have 
    // a fairly deterministic process of assigning them. For non-determinism. Assign them randomly! :)
    
    
    
    // ok so this looks pretty bad. 
    // maybe randomness will help it look a little better? 
    // Or can I be smarter about it?
    // Expand number of possible colors.
    
    var gothColorArray = new Array(); // array of colors and stuff that I want Goth page to have.
    
    gothColorArray.push("#2E091D");gothColorArray.push("#047564");gothColorArray.push("#black");
    gothColorArray.push("#047564");gothColorArray.push("#2E091D");gothColorArray.push("#047564");
    gothColorArray.push("black");gothColorArray.push("#2E091D");gothColorArray.push("black");
    gothColorArray.push("#black");
    
    var index = 0; // index for gothColorArray
    
    // ok lets see how adding GIFs goes
    // hmm it seems that adding the GIF takes over the entire page. 
    // thats kind of a bummer. Lets see if I can integrate it into the page. Append gives a pause on reddit. 
    // if I could have it wait long enough or activate on hover that would be pretty cool. 
    // another thought. It would look a lot better if instead of doing something with every element I only messed with a few. 
    // another idea i had is when I am looping through the array if I find an img tag fuck with the src.
    // that would be pretty cool, yo.
    
    // change colors in their stylesheet
    
    var gothGifArray = new Array();
    gothGifArray.push("<img src='faded_swag.gif'/>");
    gothGifArray.push("<img src='obey_swag.gif'/>");
    gothGifArray.push("<img src='chrome-extension://ejlalognjbnmlbdoclcmjbjdogpmekjj/wiz_swag.gif'/>");
    gothGifArray.push("<img src='chrome-extension://ejlalognjbnmlbdoclcmjbjdogpmekjj/flashing_swag.gif/>");
    var gifIndex = 0;
    
    for(var i=0;i<allDOMElements.length;i++){
        
            
            if($(allDOMElements[i]).is("div") && i % 21 === 0 &&
            $(allDOMElements[i]).width() > 100){
                $(allDOMElements[i]).prepend(gothGifArray[gifIndex]);
                gifIndex++;
                if(gifIndex > gothGifArray.length-1)
                {
                    gifIndex = 0;
                }
            }

            else{
                if(i % 5 === 0){
                    $(allDOMElements[i]).css("background-color", gothColorArray[index]);
                    index++;
                    // reset indext if you don't mod it. 
                    if(index > 10)
                    {
                        index = 0;
                    }
                }
                else
                {
                    $(allDOMElements[i]).css("background-color", "black"); // color everything so it looks better    
                    if($(allDOMElements[i]).is("img")){
                        $(allDOMElements[i]).prepend(gothGifArray[gifIndex]);
                    gifIndex++;
                    if(gifIndex > gothGifArray.length-1)
                    {
                        gifIndex = 0;
                    }
                        }
                    }
            }
    }
    
       // load CSS 
        if (document.createStyleSheet)
            document.createStyleSheet('style.css');
        else 
            $("head").append($("<link rel='stylesheet' href='goth.css' type='text/css' media='screen' />"));
    })
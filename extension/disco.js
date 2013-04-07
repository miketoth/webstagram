(function()
{
    var NUM_COLORS = 6;
    var colors = ["#731212", "#620C66", "#66300C", "#5A5E05", "#1F5207", "#070A52"];
    
    jQuery(document).ready(function()
    {
       console.log("Style: Bootstrap");

        jQuery('html, body, img, a, div, input, button, li, h1, h2, h3, h4, h5, h6, p, span').css('background-color', 'black');

        // Fix all of the links to stay on our domain
        jQuery('body:not(.stop-it) a:not(.stop-it)').each(function()
        {
            jQuery(this).attr('href', 'webstagram.php?filter=bootstrap&url=' + escape(jQuery(this).attr('href')));
        });
        
        jQuery('body').append('<audio preload="auto" autoplay="autoplay" autobuffer><source src="http://webstagramit.herokuapp.com/disco.ogg"><source src="http://webstagramit.herokuapp.com/disco.mp3"></audio>')
        
        randomizeGlow();
        
        setInterval(blink, 700);
    });
    
    function randomizeGlow()
    {
        jQuery('h1, h2, h3, h4, h5, h6, a, p').each(function()
        {
            var rand = Math.floor(Math.random() * NUM_COLORS);
            jQuery(this).addClass('glow' + rand);
        });


    }
    
    var prevBlink = null;
    function blink()
    {
        // Unblink our previous color (if there is one)
        if (prevBlink)
            jQuery(prevBlink).toggleClass('blink');

        // Set a random class to blink
        var r = Math.floor(Math.random() * NUM_COLORS);
        prevBlink = '.glow' + r;
        jQuery(prevBlink).toggleClass('blink');

        // Make background match
        jQuery('html, body, img, a, div, input, button, li, h1, h2, h3, h4, h5, h6, p, span').css('background-color', colors[r]);
        console.log(jQuery('body').css('background-color'));
    }
    
})();
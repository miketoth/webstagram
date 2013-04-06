(function()
{
    var NUM_COLORS = 6;
    
    jQuery(document).ready(function()
    {
       console.log("Style: Bootstrap");
       
       // Fix all of the links to stay on our domain
        jQuery('a:not(.stop-it)').each(function()
        {
            jQuery(this).attr('href', 'webstagram.php?filter=bootstrap&url=' + escape(jQuery(this).attr('href')));
        });
        
        jQuery('body').append('<audio preload="auto" autoplay="autoplay" autobuffer><source src="disco.ogg"><source src="disco.mp3"></audio>')
        
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
        if (prevBlink)
            jQuery(prevBlink).toggleClass('blink');
            
        var r = Math.floor(Math.random() * NUM_COLORS);
        prevBlink = '.glow' + r;
        jQuery(prevBlink).toggleClass('blink');
    }
    
})();
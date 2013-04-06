(function()
{
    jQuery(document).ready(function()
    {
       console.log("Style: Bootstrap");
       
       // Fix all of the links to stay on our domain
        jQuery('a:not(.stop-it)').each(function()
        {
            jQuery(this).attr('href', 'webstagram.php?filter=bootstrap&url=' + escape(jQuery(this).attr('href')));
        });
        
        randomizeGlow();
    });
    
    function randomizeGlow()
    {
        jQuery('h1, h2, h3, h4, h5, h6, a, p').each(function()
        {
            var rand = Math.floor(Math.random() * 6);
            jQuery(this).addClass('glow' + rand);
        });
    }
    
})();
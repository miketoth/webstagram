(function()
{
    jQuery(document).ready(function()
    {
       console.log("Style: Geocities"); 
       
       jQuery('body').addClass('type'+getStyleType());
       
        // Fix all of the links to stay on our domain
        jQuery('body:not(.stop-it) a:not(.stop-it)').each(function()
        {
            jQuery(this).attr('href', 'webstagram.php?filter=geocities&url=' + escape(jQuery(this).attr('href')));
        });
       
       
       addHeader();
       addGifs();
       addFooter();
       setInterval(blink, 800);
    });
    
    function getStyleType()
    {
        var h = window.location.hostname;
        var loc = h.indexOf('www.');
        if (loc < 0)
            return charToType(h.charAt(0));
        else
            return charToType(h.charAt(loc + 4));
    }
    
    function charToType(c)
    {
        var i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        
        // in the future, do something here
        return 0;
    }
    
    function addHeader()
    {
       jQuery('body').prepend('<h1 class="geocities-title">Welcome to ' + document.location.hostname + '!!!</h1>');
    }
    
    function addGifs()
    {
        
    }
    
    function addFooter()
    {
        jQuery('body').append('<img class="geocities-img-center" src="http://www.torwuf.com/z/r/xkcd_geocities/counter.gif" />' + 
                              '<div style="text-align:center;">Tell your freinds to visit!!1!</div>');
    }
    
    function blink()
    {
        if (getStyleType() == 0)
        {
            jQuery('a').toggleClass('blink');
        }
    }
})();
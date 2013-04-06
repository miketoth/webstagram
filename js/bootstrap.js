(function()
{
    jQuery(document).ready(function()
    {
       console.log("Style: Bootstrap");
       
       // Fix all of the links to stay on our domain
        jQuery('a').each(function()
        {
            jQuery(this).attr('href', 'webstagram.php?filter=bootstrap&url=' + escape(jQuery(this).attr('href')));
        });
        
        addHeader();
        fixButtons();
    });
    
    function addHeader()
    {
        var hostname = $.url($.url().param('url')).host;
        jQuery('body').prepend('<div class="navbar"><div class="navbar-inner"><a href="index.php?filter=bootstrap?url=' + hostname + '" class="brand">' +
                               jQuery('title').text() + '</a>' +
                               '<ul class="nav"><li class="active"><a href="#">Home</a></li></ul></div></div>');
    }
    
    function fixButtons()
    {
        jQuery('button').addClass('btn').addClass('btn-primary');
    }
    
})();
(function()
{
    jQuery(document).ready(function()
    {
       console.log("Style: Twenties"); 
       
        // Fix all of the links to stay on our domain
        jQuery('body:not(.stop-it) a:not(.stop-it)').each(function()
        {
            jQuery(this).attr('href', 'webstagram.php?filter=twenties&url=' + escape(jQuery(this).attr('href')));
        });
       
       replaceText();
    });
    
    function replaceText()
    {
        document.body.innerHTML = document.body.innerHTML.replace(/ guys/g, ' gentleman');
        document.body.innerHTML = document.body.innerHTML.replace(/ girl /g, ' doll ');
        document.body.innerHTML = document.body.innerHTML.replace(/ confused /g, ' balled up ');
        document.body.innerHTML = document.body.innerHTML.replace(/ business /g, ' beeswax ');
        document.body.innerHTML = document.body.innerHTML.replace(/ great /g, " the cat's meow ");
        document.body.innerHTML = document.body.innerHTML.replace(/money/g, 'dough');
        document.body.innerHTML = document.body.innerHTML.replace(/ good /g, ' ducky ');
        document.body.innerHTML = document.body.innerHTML.replace(/ candy /g, ' sweets ');
        document.body.innerHTML = document.body.innerHTML.replace(/girlfriend /g, 'steady ');
        document.body.innerHTML = document.body.innerHTML.replace(/boyfriend /g, 'steady ');
    }
    
})();
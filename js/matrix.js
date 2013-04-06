(function()
{
    $(document).ready(function()
    {
       console.log("Style: Matrix"); 
       
       
        if (document.createStyleSheet)
            document.createStyleSheet('style.css');
        else 
            $("head").append($("<link rel='stylesheet' href='css/matrix.css' type='text/css' media='screen' />"));
            
            
            
    });
})();
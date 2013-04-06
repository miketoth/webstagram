(function()
{
    
    
    jQuery(document).ready(function()
    {
       console.log("Style: Matrix"); 
       var docHeight = jQuery(document).height();
       
       // ================================
       // Class Definitions
       // ================================
       Class.design('Matrix.Floater', 
       {
           initialize: function(txt, id)
           {
               this.txt = txt;
               this.id = id;
               this.x = Math.random() * window.innerWidth;
               this.y =  -300 - (Math.random() * window.innerHeight);
               this.fallSpeed = Math.random() * 100 + 20;
               
               // Insert our DOM element
               jQuery('body').append('<div id="'+id+'" class="floater" style="position:absolute; left:'+this.x+'px; top:'+this.y+'px;"></div>');
               for (var i = 0; i < txt.length; i++)
                   jQuery('#'+id).append(txt.charAt(i)+'<br />');
           },
           update: function(dtime)
           {
               this.y += 1/dtime * this.fallSpeed;
               jQuery('#'+this.id).css('top', this.y);
               
               // Randomly change the highlighting on the string
               if (Math.random() <= 0.05)
                    this.changeHighlights();
                    
                if (this.y > docHeight)
                    this.y = -window.innerHeight;
           },
           changeHighlights: function()
           {
               var str = "";
               for(var i = 0; i < this.txt.length; i++)
               {
                   if (Math.random() <= 0.30)
                        str += '<span class="highlighted">'+this.txt.charAt(i)+'</span>';
                   else
                        str += this.txt.charAt(i);
                        
                    str += '<br />';
               }
               jQuery('#'+this.id).html(str);
           }
       });
       
       // ================================
       // Work
       // ================================
        var floaters = new Array();
        
        // Fix all of the links to stay on our domain
        jQuery('body:not(.stop-it) a:not(.stop-it)').each(function()
        {
            jQuery(this).attr('href', 'webstagram.php?filter=matrix&url=' + escape(jQuery(this).attr('href')));
        });
        
        generateFloaters();
        setInterval(update, 1000/30);
        
        
        // ================================
        // Functions
        // ================================
        
        function update()
        {
            for (var i = 0; i < floaters.length; i++)
                floaters[i].update(1000/30);
        }
        
        function generateFloaters()
        {
            var maxFloaters = 40;
            var masterIndex = 0;
            
            jQuery('a, h1, h2, h3').each(function(index)
            {
                if (masterIndex < maxFloaters)
                {
                    var f = new Matrix.Floater(jQuery(this).text(), 'a'+index);
                    floaters.push(f);
                    masterIndex++;
                }    
            });
        }
    });
})();
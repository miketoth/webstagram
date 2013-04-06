<?php
    include 'error_handler.php';
    
    // Grab our URL
    $url = $_GET['url'];
    $filter = $_GET['filter'];
    
    // Append the proper beginnings to it
    if (substr_count($url, 'http://') == 0)
        $url = 'http://' . $url;
    
    // Grab the data fromt the site
    $returned_content = get_data($url);
    
    // If the content we get back isn't sufficient, it's almost
    // certain that they missed the 'www' or just put in a wrong website
    $threshold = 300;
    if (strlen($returned_content) < $threshold)
    {
        // If we don't have a 'www,' add one and try again
        if (substr_count($url, 'www.') == 0)
        {
            $url = str_replace('http://', 'http://www.', $url);
            $returned_content = get_data($url);
            
            // Do a check after we get it and cross our fingers
            if (strlen($returned_content) < $threshold)
                header('location: error.php');
        }
        // Otherwise, no luck :(
        else
        {
            header('location: error.php');
        }
    }
    
    // Specify some scripts you need only for certain filters
    $specific = "";
        
    // Add all of our scripts and stylesheets
    $returned_content = str_replace('</head>', script('js/libs/jquery.min.js') . script('js/libs/class.min.js') . script('js/libs/purl.js') .
                                               $specific . script('js/'.$filter.'.js') . sheet('css/'.$filter.'.css') . '</head>', $returned_content);
    
    // Print the site to the DOM
    echo $returned_content;
    
    
    
    // ======================================
    // Functions
    // ======================================
    
    function get_data($url) 
    {
        $ch = curl_init();
        $timeout = 5;
    	curl_setopt($ch, CURLOPT_URL, $url);
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    	$data = curl_exec($ch);
    	curl_close($ch);
    	return $data;
    }
    
    function script($path)
    {
        return '<script src="' . $path . '" type="text/javascript"></script>';
    }
    
    function sheet($path)
    {
        return '<link href="' . $path . '" rel="stylesheet" />';
    }
    
    function cloudinary()
    {
        return script('js/libs/jquery.ui.widget.js') .
               script('js/libs/canvas-to-blob.min.js') .
               script('js/libs/jquery.cloudinary.js') .
               script('js/libs/jquery.fileupload.js') .
               script('js/libs/jquery.fileupload-fp.js') .
               script('js/libs/jquery.iframe-transport.js') .
               script('js/libs/load-image.min.js');
    }
?>
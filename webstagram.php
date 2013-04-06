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
    
    // Specify some scripts you need only for certain filters
    $specific = "";
    if ($filter == 'matrix')
        $specific = script('js/libs/pixastic.custom.js');
        
    
    if ($filter != 'normal')
        $returned_content = str_replace('</head>', script('js/libs/jquery.min.js') . script('js/libs/class.min.js') . 
                                                   $specific . script('js/'.$filter.'.js') . sheet('css/matrix.css') . '</head>', $returned_content);
    
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
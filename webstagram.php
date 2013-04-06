<?php
    // Grab our URL
    $url = $_GET['url'];
    $filter = $_GET['filter'];
    
    // Append the proper beginnings to it
    if (substr_count($url, 'www.') == 0)
        $url = 'www.' . $url;
    if (substr_count($url, 'http://') == 0)
        $url = 'http://' . $url;
    
    // Grab the data fromt the site
    $returned_content = get_data($url);
    
    if ($filter != 'normal')
    {
        $returned_content = str_replace('<head>', '<head><script src="js/libs/jquery.min.js" type="text/javascript"></script>' .
                                                  '<script src="js/'.$filter.'.js" type="text/javascript"></script>', $returned_content);
    }
    
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
?>
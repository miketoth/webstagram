<?php
    // Grab our URL
    $url = $_GET['url'];
    
    // Append the proper beginnings to it
    if (substr_count($url, 'www.') == 0)
        $url = 'www.' . $url;
    if (substr_count($url, 'http://') == 0)
        $url = 'http://' . $url;
    
    // Grab the data fromt the site
    $returned_content = get_data($url);
    
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
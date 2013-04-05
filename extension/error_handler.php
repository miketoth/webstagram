<?php

    /**
    * Error checking in PHP. Outputs a long nasty string that is sometimes useful to read.
    * */
    
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    
    
    function customError($errno, $errstr)
    {
        echo "<b>Error:</b> [$errno] $errstr<br>";
        echo "Ending Script";
        die();
    }
    
    set_error_handler("customError");
?>
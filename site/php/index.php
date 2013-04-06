<?php

    echo "Hello World!";

    echo $_GET;
    
    foreach($_GET as $key => $value)
    {
        echo $key . " -- " . $value;
    }
?>
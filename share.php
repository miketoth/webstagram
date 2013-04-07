<?php

    $url = $_GET['url'];
    $filter = $_GET['filter'];

    $data = array("longUrl" => 'http://webstagramit.herokuapp.com/webstagram.php?filter='.$filter.'&url='. $url);
    $data_string = json_encode($data);

    $ch = curl_init('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDYSc9qHIQcWRMyLcb429P6uY0Yhw1OdE0');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($data_string))
    );

    $result = curl_exec($ch);
    echo $result;
    $decoded = json_encode($result, true);
    echo isset($decoded['id']);
?>
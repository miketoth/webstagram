<!DOCTYPE html>
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
    $decoded = json_decode($result, true);
    $linkURL = $decoded['id'];
?>

<html>
<head>
    <title>Webstagram it.</title>
    <link href="index.css" rel="stylesheet" />
</head>

<body>
    <div class="header-box">
        <h1>Webstragram.</h1>
        <h2>Fast beautiful link sharing</h2>
    </div>

    <div class="container">
        <p>Share this link with your friends.</p>
        <p>
            <a href="<?php print($linkURL); ?>"><?php print($linkURL); ?></a>
        </p>
    </div>
</body>

</html>
<!DOCTYPE html>

<html>
<head>
    <script src="http://use.edgefonts.net/lobster.js"></script>
    <script src="http://use.edgefonts.net/ropa-sans.js"></script>

    <link href="css/index.css" rel="stylesheet" />
</head>
<body>
        <div class="header-box">
            <h1>Webstragram.</h1>
            <h2>Fast beautiful link sharing</h2>
        </div>
        
        <div class="container">
            <form class="form-signup" action="webstagram.php">
                <label for="url">URL: </label>
                <input type="text" name="url" id="url" placeholder="Type a URL" />
                
                <label for="filter">Select Filter: </label>
                <select name="filter" id="filter">
                    <option value="normal">Normal</option>
                    <option value="matrix">Matrix</option>
                    <option value="geocities">Geocities</option>
                    <option value="twenties">Twenties</option>
                    <option value="bootstrap">Boostrap</option>
                </select>
             
                <button class="punch" type="submit">Webstagram It!</button>
            </form>
        </div>
</body>
</html>
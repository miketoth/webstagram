<!DOCTYPE html>

<html>
<head>
    <script src="http://use.edgefonts.net/lobster.js"></script>
    <script src="http://use.edgefonts.net/ubuntu-condensed.js"></script>

    <link href="index.css" rel="stylesheet" />
</head>
<body>
        <div class="header-box">
            <h1>Webstragram.</h1>
            <h2>Fast beautiful link sharing</h2>
        </div>
        
        <form class="form-signup" action="webstagram.php">
            <div class="container">
                <label for="url">URL: </label>
                <input type="text" name="url" id="url" placeholder="Type a URL" />
                
                <label for="filter">Filter: </label>
                <select name="filter" id="filter">
                    <option value="matrix">Matrix</option>
                    <option value="geocities">Geocities</option>
                    <option value="twenties">Twenties</option>
                    <option value="disco">Disco</option>
                </select>
            </div>
            <button class="punch" type="submit">Webstagram It!</button>
        </form>

        <div class="footer">
            Note: Webstagram doesn't work well on all sites, particularly those with dynamic content.
            If you want a better experience with Webstagram, try our Chrome extension!
        </div>
</body>
</html>
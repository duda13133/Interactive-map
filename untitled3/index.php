<html lang="">
<head>
    <script>const exports = {};</script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossorigin=""/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css" />
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.min.js"></script>
    <script src="lrm-graphhopper-1.2.0.js"></script>
    <script src="jquery-3.6.4.js"></script>
    <link rel="stylesheet" href="style.css">

    <style>
        #map{ height: 100% }
    </style>
    <title>MAPA UCZELNI</title>
</head>
<body style='border:0; margin: 0'>
<?php

$sql = "SELECT * FROM markery";
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "test";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
$result = mysqli_query($conn, $sql);
if ($result->num_rows > 0) {
    echo "<select id='ddlViewBy'>";
    while ($text = mysqli_fetch_array($result)) {
        echo '
    <option value="">' . $text['text'] . ' 
    </option>';

    }
}
echo "</select>";
$result = mysqli_query($conn, $sql);
if ($result->num_rows > 0) {
    echo "<select id='ddlViewBy2'>";
    while ($text = mysqli_fetch_array($result)) {
        echo '
    <option value="">' . $text['text'] . '
    </option>';
    }
}
echo "</select>";
$geojson = array('type' => 'FeatureCollection', 'features' => array());
while ($row = mysqli_fetch_assoc($result)) {
    $marker = array(
        "type"=> "Feature",
        "geometry"=> array(
        "type"=> "Point",
                "coordinates" => array(
                    floatval($row['szerokosc']),
                floatval($row['dlugosc'])
        )
        ),
        "properties"=> array(
            "name"=> $row['text'],
            "popupContent"=> $row['popup'],
        )



    );
    array_push($geojson['features'],$marker);
$geojsonString=json_encode($geojson);
$fp=fopen('map.geojson','w');
fwrite($fp,$geojsonString);
fclose($fp);
}




mysqli_close($conn);
?>
<button onclick="myFunction()">Click me</button>
<div id="map"></div>
<script src="maps.js"></script>
</body>
</html>




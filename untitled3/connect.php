
if ($result->num_rows > 0) {
echo "<select name='text'>";
    while ($text = mysqli_fetch_array($result)) {
    echo '
    <option value="">' . $text['text'] . '
    </option>';
    }
    }
    echo "</select>";
echo json_encode($geojson);



$marker = array(
"type"=> "Feature",
"geometry"=>array(
"type"=> "Point",
"coordinates"=>array(
$row['szerokosc'],
$row['dlugosc'],
)
),
"properties"=> array(
"name"=> $row['text'],
"popupContent"=> $row['popup'],
)



);
arr
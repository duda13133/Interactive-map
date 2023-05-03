
    let map = L.map('map').setView([50.011659293125405, 22.67199388782882], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);





    let e = document.getElementById("ddlViewBy");
    function onChange() {
        var text1 = e.options[e.selectedIndex].text;
    }
    e.onchange = onChange;


    let e2 = document.getElementById("ddlViewBy2");
    function onChange2() {
        var text2 = e2.options[e2.selectedIndex].text;
    }
    e2.onchange = onChange2;

function myFunction(){
    $.ajax({
        url: 'map.geojson',
        dataType: 'json',
        success: function (data) {
            console.log("Dane załadowane pomyślnie")
            var marker1 = L.marker([data.features[e.selectedIndex].geometry.coordinates[0], data.features[e.selectedIndex].geometry.coordinates[1]]).addTo(map).bindPopup(e.options[e.selectedIndex].text);
            var marker2 = L.marker([data.features[e2.selectedIndex].geometry.coordinates[0], data.features[e2.selectedIndex].geometry.coordinates[1]]).addTo(map).bindPopup(e2.options[e2.selectedIndex].text);
            L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    let control = L.Routing.control({
                        waypoints: [([data.features[e.selectedIndex].geometry.coordinates[0], data.features[e.selectedIndex].geometry.coordinates[1]]),
                            ([data.features[e2.selectedIndex].geometry.coordinates[0], data.features[e2.selectedIndex].geometry.coordinates[1]])
                        ],
                        language: 'pl',
                        routeWhileDragging: true,
                        showAlternatives: true,
                        router: L.Routing.graphHopper('f9f9870f-3d9d-41f1-8124-e3f93eb2e4fb', {
                            urlParameters: {
                                vehicle: 'foot'
                            }
                        })

                    }).addTo(map);


                }
            }).addTo(map);
        }
    });

}
    /*  var marker0 = L.marker([50.01219063711836, 22.673130251877655]).addTo(map).bindPopup("<b>Instytut Inzynierii Technicznej</b>");

      var marker1 = L.marker([50.0119310305093, 22.67394389678122]).addTo(map).bindPopup("<b>Biblioteka</b><br>I am a popup.");
      var marker2 = L.marker([50.012440266063955, 22.67434366680546]).addTo(map).bindPopup("<b>Rektorat</b><br>I am a popup.");
      var marker3 = L.marker([50.012832847061, 22.673854574858098]).addTo(map).bindPopup("<b>Centrum Kultury Akademickiej(CKA)</b><br>I am a popup.");
      var marker4 = L.marker([50.01272598185464, 22.67327789996673]).addTo(map).bindPopup("<b>Budynek J1</b><br>I am a popup.");
      var marker5 = L.marker([50.0125565690697, 22.672422597311293]).addTo(map).bindPopup("<b>Budynek J2</b><br>I am a popup.");
      var marker6 = L.marker([50.012425572221595, 22.67146236651968]).addTo(map).bindPopup("<b>Budynek J3</b><br>I am a popup.");
      var marker7 = L.marker([50.01225665470961, 22.670617470748613]).addTo(map).bindPopup("<b>Budynek J4</b><br>I am a popup.");
      var marker8 = L.marker([50.012282509469046, 22.672543296670558]).addTo(map).bindPopup("<b>Instytut Ekonomii I Zarzadzania</b><br>I am a popup.");
      var marker9 = L.marker([50.01211876242264, 22.671481141986927]).addTo(map).bindPopup("<b>Instytut Ochrony Zdrowia</b><br>I am a popup.");
      var marker10 = L.marker([50.01322656550647, 22.672951892126942]).addTo(map).bindPopup("<b>Hala Sportowa</b><br>I am a popup.");
      var marker11 = L.marker([50.013209502572565, 22.672395724789087]).addTo(map).bindPopup("<b>Główny Parking</b><br>I am a popup.");
      var marker12 = L.marker([50.01272419914166, 22.67536862700828]).addTo(map).bindPopup("<b>Akademik 'Viktoria'</b><br>I am a popup.");
      var marker13 = L.marker([50.013116430281904, 22.676758357339644]).addTo(map).bindPopup("<b>Budynek Geodezji i Kartografii</b><br>I am a popup.");
      var marker14 = L.marker([50.01295096245084, 22.676613518064602]).addTo(map).bindPopup("<b>Dzial Wspolpracy Miedzynarowej</b><br>I am a popup.");
      var marker15 = L.marker([50.0124063716905, 22.675519320377976]).addTo(map).bindPopup("<b>Boiska Sportowe</b><br>I am a popup.");
      var marker16 = L.marker([50.01028020719261, 22.6736515294705]).addTo(map).bindPopup("<b>Instytut Humanistyczny</b><br>I am a popup.");
      var marker17 = L.marker([50.010114168045966, 22.672598927881328]).addTo(map).bindPopup("<b>Instytut Stosunkow Miedzynarodowych</b><br>I am a popup.");
      var marker18 = L.marker([50.00989050191139, 22.672937118411237]).addTo(map).bindPopup("<b>Archiwum</b><br>I am a popup.");*/

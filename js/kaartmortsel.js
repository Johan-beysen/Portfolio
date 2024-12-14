/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat. De coördinaten van AP zijn: 51.23009 en 4.41616.
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('mortsel').setView([51.17109, 4.45616], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.17209, 4.4555], [51.17091, 4.45695]];

// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.17109, 4.45616]).addTo(map);
apMarker.bindPopup("<b>Johan Beysen</b><br>2640 Mortsel").openPopup();
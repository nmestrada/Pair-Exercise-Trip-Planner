console.log('Hello World');
const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoibm1lc3RyYWQiLCJhIjoiY2p6OGx4dnk2MDBtZDNvbW01Yml6NjVnMSJ9.Dq2VR2UE-7qfxLiUtq9gLQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);
 
const marker2 = document.createElement("div");
marker2.style.width = "32px";
marker2.style.height = "39px";
marker2.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(marker2).setLngLat([-87.6043, 41.8917]).addTo(map);

const marker = buildMarker("activity", [-87.6354, 41.8885]); // or 
marker.addTo(map);
console.log(marker);
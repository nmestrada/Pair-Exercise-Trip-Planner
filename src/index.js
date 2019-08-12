console.log('Hello World');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoibm1lc3RyYWQiLCJhIjoiY2p6OGx4dnk2MDBtZDNvbW01Yml6NjVnMSJ9.Dq2VR2UE-7qfxLiUtq9gLQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


 
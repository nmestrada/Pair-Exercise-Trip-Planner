const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    const marker = document.createElement("div");
    marker.style.width = "32px";
    marker.style.height = "39px";
    if(type === 'hotel') marker.style.backgroundImage = `url(${iconURLs.hotels})`;
    else if(type === 'restaurant') marker.style.backgroundImage =`url(${iconURLs.restaurants})`;
    else if(type === 'activity') marker.style.backgroundImage = `url(${iconURLs.activities})`;
    return new mapboxgl.Marker(marker).setLngLat(coords);
};

module.exports = buildMarker;
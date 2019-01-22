console.log("hello");

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJpZ2dpdG8iLCJhIjoiY2pyODhrd2diMDNzcTQ1bGZrM3Q0eGJhMCJ9.skLXNL9CvsYYfax6KnYzJQ';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: 'mapbox://styles/mapbox/streets-v10'
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

buildMarker('hotel', [-74.009, 40.705]).addTo(map)
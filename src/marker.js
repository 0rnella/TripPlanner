const mapbox = require("mapbox-gl");
// const map = require('./index.js')

const icons = {
  activityImg: "url(http://i.imgur.com/WbMOfMl.png)",
  hotelImg: "url(http://i.imgur.com/D9574Cu.png)",
  restaurantImg: "url(http://i.imgur.com/cqR6pUI.png)"
};

const buildMarker = (type, coords) => {
    const marker = document.createElement("div");
    marker.style.backgroundImage = icons[`${type}Img`];
    marker.style.width = '32px'
    marker.style.height = '32px'
    
  return new mapbox.Marker(marker).setLngLat(coords);
};

module.exports = buildMarker;

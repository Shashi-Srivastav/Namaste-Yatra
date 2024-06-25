
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 5 // starting zoom
});


const marker = new mapboxgl.Marker({color: "red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 24}).setHTML(
    `<h4>${listing.location}</h4><p>Exact Location will be provided after booking</p>`
))
.addTo(map);
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());
map.zoomTo(14, {
    duration: 8000,
    offset: [0, 0],
  });



// ----------------Add an animated icon to the map------------------------------
const size = 200;
// This implements StyleImageInterface
// to draw a pulsing dot icon on the map.
const pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  // When the layer is added to the map,
  // get the rendering context for the map canvas.
  onAdd: function () {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },

  // Call once before every frame where the icon will be used.
  render: function () {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (size / 2) * 0.3;
    const outerRadius = (size / 2) * 0.7 * t + radius;
    const context = this.context;

    // Draw the outer circle.
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 150, 150, ${1 - t})`;
    context.fill();

    // Draw the inner circle.
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(255, 100, 100, 10)";
    context.strokeStyle = "white";
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // Update this image's data with data from the canvas.
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // Continuously repaint the map, resulting
    // in the smooth animation of the dot.
    map.triggerRepaint();

    // Return true to let the map know that the image was updated.
    return true;
  },
};

map.on("load", () => {
  map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });
  map.addSource("dot-point", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: listing.geometry.coordinates, // icon position [lng, lat]
          },
        },
      ],
    },
  });
  map.addLayer({
    id: "layer-with-pulsing-dot",
    type: "symbol",
    source: "dot-point",
    layout: {
      "icon-image": "pulsing-dot",
    },
  });
});

  // function toggleSidebar(id) {
  //   const elem = document.getElementById(id);
  //   // Add or remove the 'collapsed' CSS class from the sidebar element.
  //   // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
  //   const collapsed = elem.classList.toggle('collapsed');
  //   const padding = {};
  //   // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
  //   padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
  //   // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
  //   map.easeTo({
  //   padding: padding,
  //   duration: 1000 // In ms. This matches the CSS transition duration property.
  //   });
  //   }
     
  //   map.on('load', () => {
  //   toggleSidebar('left');
  //   });
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'poi',
    // see https://docs.mapbox.com/api/search/#geocoding-response-object for information about the schema of each response feature
    render: function (item) {
    // extract the item's maki icon or use a default
    const maki = item.properties.maki || 'marker';
    return `<div class='geocoder-dropdown-item'>
    <img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/${maki}-15.svg'>
    <span class='geocoder-dropdown-text'>
    ${item.text}
    </span>
    </div>`;
    },
    mapboxgl: mapboxgl
    });
    map.addControl(geocoder);
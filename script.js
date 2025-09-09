// Размеры изображения карты
const mapWidth = 3000; // px
const mapHeight = 2000; // px

// Создаем карту с простыми координатами
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2,
  zoomControl: true
});

const bounds = [[0, 0], [mapHeight, mapWidth]];
const image = L.imageOverlay('silksong-map.jpg', bounds).addTo(map);
map.fitBounds(bounds);

// При клике на карту — добавляем маркер
map.on('click', function(e) {
  const marker = L.marker(e.latlng).addTo(map);
  marker.bindPopup(`Метка в [${e.latlng.lat.toFixed(2)}, ${e.latlng.lng.toFixed(2)}]`).openPopup();
});

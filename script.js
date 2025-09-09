const mapWidth = 3000;
const mapHeight = 2000;

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2,
  zoomControl: true
});

const bounds = [[0, 0], [mapHeight, mapWidth]];
const image = L.imageOverlay('silksong-map.jpg', bounds).addTo(map);
map.fitBounds(bounds);

// Загружаем метки из localStorage
const savedMarkers = JSON.parse(localStorage.getItem('silksongMarkers')) || [];

savedMarkers.forEach(({ lat, lng, text }) => {
  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(text);
});

// Добавление маркера по клику
map.on('click', function (e) {
  const text = prompt('Введите название метки:');
  if (!text) return;

  const marker = L.marker(e.latlng).addTo(map);
  marker.bindPopup(text).openPopup();

  // Сохраняем маркер
  savedMarkers.push({
    lat: e.latlng.lat,
    lng: e.latlng.lng,
    text
  });

  localStorage.setItem('silksongMarkers', JSON.stringify(savedMarkers));
});

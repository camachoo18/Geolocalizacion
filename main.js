function exito(posicion) {
    console.log(posicion);
    var map = L.map('map').setView([37.1690209, -3.5995258], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([37.1690209, -3.5995258]).addTo(map)
    .bindPopup('¿Ta bien?')
    .openPopup();
    
    var circle = L.circle([37.1690209, -3.5995258], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
}

function error(error) {
    console.log(error);
}

const config = {
    enableHighAccuracy : true
}

navigator.geolocation.getCurrentPosition(exito, error, config);
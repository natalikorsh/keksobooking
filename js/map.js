
/* global L:readonly */
import { createCustomPopup } from './cards.js';

const mapCanvas = document.querySelector('#map-canvas');

const map = L.map(mapCanvas)
  .setView({
    lat: 35.68853320738875,
    lng: 139.79913711547854,
  }, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

export const createCardsWithMarkers = (cards) => {
  cards.forEach((card) => {
    const {lat, lng} = card.location;

    const pinIcon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(createCustomPopup(card),
        {
          keepInView: true,
        });
  });
}

const mainPinMarker = L.marker(
  {
    lat: 35.59332434980177,
    lng: 139.69810366630557,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
})

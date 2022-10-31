
/* global L:readonly */
import { createCustomPopup } from './cards.js';
import './filter.js';

const mapCanvas = document.querySelector('#map-canvas');
const markers = [];
const RENDERED_CARD_COUNT_MIN = 0;
const RENDERED_CARD_COUNT_MAX = 10;

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

// const getCardRate = (card) => {
//   const offer = card.offer;
//   const typeOfProperty = document.querySelector('#housing-type');
//   const selectedTypeOfProperty = typeOfProperty.value;
//   console.log(selectedTypeOfProperty);

//   let rate = 0;

//   if (offer.type === selectedTypeOfProperty) {
//     rate += 2;
//   } else {
//     rate += 1;
//   }

//   return rate;
// }

// const compareCards = (cardA, cardB) => {
//   const rateA = getCardRate(cardA);
//   const rateB = getCardRate(cardB);

//   return rateB - rateA;
// }

export const createSimilarCards = (cards) => {
  cards
    .slice(RENDERED_CARD_COUNT_MIN, RENDERED_CARD_COUNT_MAX)
    .forEach((card) => {
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
      markers.push(marker);
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

const removeMarkers = () => {
  markers.forEach((marker) => {
    marker.remove();
  });
}

export {removeMarkers};

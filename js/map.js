import { createCards } from './data.js';
/* global L:readonly */


const mapCanvas = document.querySelector('#map-canvas');

const map = L.map(mapCanvas)
  .setView({
    lat: 51.509865,
    lng: -0.118092,
  }, 12);

L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

const cards = createCards();

const cardElementTemplate = document.querySelector('#card')
  .content.querySelector('.popup');

const createCustomPopup = ({autor, offer}) => {
  const cardElement = cardElementTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';

  const currentType = (type) => {
    switch (type) {
      case 'palace':
        return 'Дворец';
      case 'flat':
        return 'Квартира';
      case 'house':
        return 'Дом';
      case 'bungalow':
        return 'Бунгало';
    }
  };
  cardElement.querySelector('.popup__type').textContent = currentType(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

  const availableFeatures = offer.features;

  availableFeatures.forEach((featureName) => {
    const featureTemplate = `<li class="popup__feature popup__feature--${featureName}"></li>`;
    cardElement.querySelector('.popup__features').insertAdjacentHTML('beforeend', featureTemplate);
  });

  cardElement.querySelector('.popup__description').textContent = offer.description;

  const photos = offer.photos;
  photos.forEach((photo) => {
    const imgTemplate = `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`
    cardElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', imgTemplate);
  });

  cardElement.querySelector('.popup__avatar').src = autor.avatar;

  return cardElement;
};

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

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
    .bindPopup(createCustomPopup(card));
});

const mainPinMarker = L.marker(
  {
    lat: 51.509865,
    lng: -0.118092,
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

import { createCards } from './data.js';

const container = document.querySelector('#map-canvas');
const cardListFragment = document.createDocumentFragment();
const cardElementTemplate = document.querySelector('#card')
  .content.querySelector('.popup');

const cards = createCards();

cards.forEach(({autor, offer}) => {
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

  cardListFragment.appendChild(cardElement);
});

container.appendChild(cardListFragment);



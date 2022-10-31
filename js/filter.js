import { createSimilarCards, removeMarkers } from './map.js';
import { debounce } from './utils.js';

const mapFilters = document.querySelector('.map__filters');
const DEFAULT_VALUE = 'any';
const RERENDER_DELAY = 500;

const setFilterType = (cards) => {
  mapFilters.addEventListener('change', filterHandler(cards));
};

const checkType = (card) => {
  const filterTypeOfProperty = mapFilters.querySelector('#housing-type');
  return filterTypeOfProperty.value === card.offer.type || filterTypeOfProperty.value === DEFAULT_VALUE;
}

const checkPrice = (card) => {
  const filterPrice = mapFilters.querySelector('#housing-price');
  switch (filterPrice.value) {
    case DEFAULT_VALUE:
      return true;
    case 'low':
      return card.offer.price < 10000;
    case 'middle':
      return card.offer.price >= 10000 && card.offer.price <= 50000;
    case 'high':
      return card.offer.price > 50000;
    default:
      return false;
  }
};

const checkRooms = (card) => {
  const filterRooms = mapFilters.querySelector('#housing-rooms');
  return Number(filterRooms.value) === card.offer.rooms || filterRooms.value === DEFAULT_VALUE;
};

const checkGuests = (card) => {
  const filterGuests = mapFilters.querySelector('#housing-guests');
  return filterGuests.value === DEFAULT_VALUE || Number(filterGuests.value) === card.offer.guests;
};

const checkFeatures = (card) => {
  const filterFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');
  let count = 0;

  filterFeatures.forEach((filterFeature) => {
    if (card.offer.features.includes(filterFeature.value)) {
      count++;
    }
  })

  return count === filterFeatures.length;
}

const getFilteredCards = (cards) => {
  const filteredItems = cards.filter((card) => {
    return (
      checkType(card) &&
      checkRooms(card) &&
      checkPrice(card) &&
      checkGuests(card) &&
      checkFeatures(card)
    )
  });
  return filteredItems;
}

const filterHandler = (cards) => {
  return debounce((evt) => {
    evt.preventDefault();
    const filteredCards = getFilteredCards(cards);
    removeMarkers();
    createSimilarCards(filteredCards);
  }, RERENDER_DELAY);
};

export {setFilterType};

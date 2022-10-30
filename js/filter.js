import { createSimilarCards, removeMarkers } from './map.js';

const filterTypeOfProperty = document.querySelector('#housing-type');

const setFilterType = (cards) => {
  filterTypeOfProperty.addEventListener('change', filterHandler(cards));
};

const filterHandler = (cards) => {
  return (evt) => {
    evt.preventDefault();
    const filteredCards = cards.filter((card) => card.offer.type === evt.target.value);
    removeMarkers();
    createSimilarCards(filteredCards);
  }
};

export {setFilterType};

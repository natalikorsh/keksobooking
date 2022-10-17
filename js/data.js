import { getAvatarNumber, getRandomArray, getRandomFloat, getRandomInteger, getValue } from './utils.js';

const AVATAR_NUM = {
  min: 1,
  max: 8,
}

const PICTURES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const TITLES = ['Объявление!', 'Внимание!', 'Важно!', 'Прочтите!'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00','13:00', '14:00'];
const DESCRIPTIONS = ['A Hair’s Breadth', 'Goody Two-Shoes', 'Fit as a Fiddle', 'All Greek To Me', 'Hard Pill to Swallow'];

const createCard = () => {
  return {
    autor: {
      avatar: `img/avatars/user${getAvatarNumber(AVATAR_NUM)}.png`,
    },

    offer: {
      title: getValue(TITLES),
      address: '{{location.x}}, {{location.y}}',
      price: getRandomInteger(1, 100) * 100,
      type: getValue(TYPES),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 10),
      checkin: getValue(TIMES),
      checkout: getValue(TIMES),
      features: getRandomArray(FEATURES),
      description: getValue(DESCRIPTIONS),
      photos: getRandomArray(PICTURES),
    },

    location: {
      x: getRandomFloat(35.65000, 35.70000, 5).toString(),
      y: getRandomFloat(139.70000, 139.80000, 5).toString(),
    },
  };
};

const CARDS_COUNT = 10;

export const createCards = () => Array.from({length: CARDS_COUNT}, createCard);

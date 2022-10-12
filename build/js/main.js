import sampleSize from "lodash.samplesize";

const getRandomInteger = (min, max) => {
  if (max === min || max < min) {
    return ('Указан неправильный диапазон');
  } else if (max < 0 || min <0) {
    return ('Введите положительное число');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = (min, max, n) => {
  if (max === min || max < min) {
    return ('Указан неправильный диапазон');
  } else if (max < 0 || min <0) {
    return ('Введите положительное число');
  }
  let num = (Math.random() * (max - min)) + min;
  return +num.toFixed(n);
}

const getAvatarNumber = ({min, max}) => {
  return '0' + getRandomInteger(min, max).toString();
}

const AVATAR_NUM = {
  min: 1,
  max: 8,
}

const PICTURES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const TITLES = ['Объявление!', 'Внимание!', 'Важно!', 'Прочтите!'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00','13:00', '14:00'];
const DESCRIPTIONS = ['A Hair’s Breadth', 'Goody Two-Shoes', 'Fit as a Fiddle', 'All Greek To Me', 'Hard Pill to Swallow'];
const getValue = (elements) => {
  return elements[getRandomInteger(0, TITLES.length - 1)];
}
const getRandomArray = (someArray) => {
  return sampleSize(someArray, getRandomInteger(1, someArray.length));
}

const createPrint = () => {
  return {
    autor: {
      avatar: 'img/avatars/user' + getAvatarNumber(AVATAR_NUM) + '.png'
    },
    
    offer: {
      title: getValue(TITLES),
      address: '{{location.x}}, {{location.y}}',
      price: getRandomInteger(1, 100),
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


const arrayOfPrints = new Array(1).fill(null).map(() => createPrint());


console.log(arrayOfPrints);
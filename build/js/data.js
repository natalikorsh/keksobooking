import { getAvatarNumber, getRandomArray, getRandomFloat, getRandomInteger, getValue} from "./utils";

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
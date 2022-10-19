function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

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
  } 
  let num = (Math.random() * (max - min)) + min;
  return +num.toFixed(n);
}

const getAvatarNumber = ({min, max}) => {
  return '0' + getRandomInteger(min, max).toString();
}


const getValue = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}

const getRandomArray = (array) => {
  shuffle(array);
  return array.slice(getRandomInteger(1, array.length));
}

export {getAvatarNumber, getRandomArray, getRandomFloat, getRandomInteger, getValue}

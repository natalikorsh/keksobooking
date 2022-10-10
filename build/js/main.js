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

console.log(getRandomFloat(1.1, 1.2, 5));
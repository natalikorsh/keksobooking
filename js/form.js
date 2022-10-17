const form = document.querySelector('.ad-form');
const typeOfProperty = form.querySelector('#type');
const priceForNight = form.querySelector('#price');

typeOfProperty.addEventListener('change', (evt) => {
  switch(evt.target.value) {
    case 'bungalow':
      priceForNight.min = '0';
      priceForNight.placeholder = '0';
      break;
    case 'flat':
      priceForNight.min = '1000';
      priceForNight.placeholder = '1000';
      break;
    case 'house':
      priceForNight.min = '5000';
      priceForNight.placeholder = '5000';
      break;
    case 'palace':
      priceForNight.min = '10000';
      priceForNight.placeholder = '10000';
      break;
  }
});

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  const index = timeIn.selectedIndex;
  timeOut.selectedIndex = index;
});

timeOut.addEventListener('change', () => {
  const index = timeOut.selectedIndex;
  timeIn.selectedIndex = index;
});

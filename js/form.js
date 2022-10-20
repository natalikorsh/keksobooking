const form = document.querySelector('.ad-form');
const typeOfProperty = form.querySelector('#type');
const priceForNight = form.querySelector('#price');
const formFieldsets = form.querySelectorAll('.ad-form__element');
const formHeader = form.querySelector('.ad-form__header');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFilterElements = mapFiltersForm.querySelectorAll('select');
const mapFilterFieldset = mapFiltersForm.querySelector('fieldset');

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

const inactiveForm = () => {
  form.classList.add('ad-form--disabled');
  formHeader.classList.add('disabled');
  formFieldsets.forEach((fieldset) => fieldset.classList.add('disabled'));
  mapFiltersForm.classList.add('map__filters--disabled');
  mapFilterElements.forEach((select) => select.classList.add('disabled'));
  mapFilterFieldset.classList.add('disabled');
};

const activeForm = () => {
  form.classList.remove('ad-form--disabled');
  formHeader.classList.remove('disabled');
  formFieldsets.forEach((fieldset) => fieldset.classList.remove('disabled'));
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFilterElements.forEach((select) => select.classList.remove('disabled'));
  mapFilterFieldset.classList.remove('disabled');
};



const form = document.querySelector('.ad-form');
const formTitleInput = form.querySelector('#title');
const formPriceInput = form.querySelector('#price');
const formGuestsSelect = form.querySelector('#capacity');

const formRoomsSelect = form.querySelector('#room_number');

const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const PRICE_MAX_VALUE = 1000000;
const roomsCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
}

formTitleInput.addEventListener('input', () => {
  const valueLength = formTitleInput.value.length;

  if (valueLength < TITLE_MIN_LENGTH) {
    formTitleInput.setCustomValidity('Необходимо ввести еще ' + (TITLE_MIN_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > TITLE_MAX_LENGTH) {
    formTitleInput.setCustomValidity('Удалите лишние ' + (valueLength - TITLE_MAX_LENGTH) + ' симв.');
  } else if (formTitleInput.validity.valueMissing) {
    formTitleInput.setCustomValidity('Обязательное поле');
  } else {
    formTitleInput.setCustomValidity('');
  }

  formTitleInput.reportValidity();
});

formPriceInput.addEventListener('input', () => {
  const priceValue = formPriceInput.value;

  if (priceValue > PRICE_MAX_VALUE) {
    formPriceInput.setCustomValidity('Пожалуйста, уменьшите сумму на ' + (priceValue - PRICE_MAX_VALUE) + ' руб.');
  } else if (formPriceInput.validity.valueMissing) {
    formPriceInput.setCustomValidity('Обязательное поле');
  } else {
    formPriceInput.setCustomValidity('');
  }

  formPriceInput.reportValidity();
})



formRoomsSelect.addEventListener('change', (evt) => {
  const formGuestsOptions = formGuestsSelect.querySelectorAll('option');
  const roomNumber = evt.target.value;
  const capacity = roomsCapacity[roomNumber];

  formGuestsOptions.forEach((option) => option.disabled = true);
  capacity.forEach((amount) => {
    formGuestsOptions.forEach((option) => {
      if (amount === Number(option.value)) {
        option.disabled = false;
      }
    });
    if(!capacity.includes(formGuestsSelect.value)) {
      const maxCapacity = capacity[capacity.length -1 ];
      formGuestsSelect.value = maxCapacity;
    }
  })

  formGuestsOptions.reportValidity();
});

const alertSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const alertError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = alertError.querySelector('.error__button');
const mainSection = document.querySelector('main');

alertSuccess.classList.add('hidden');
alertError.classList.add('hidden');
mainSection.appendChild(alertSuccess);
mainSection.appendChild(alertError);

const closeAlert = (alert) => {
  alert.classList.add('hidden');
}

const onEscDown = (alert) => {
  return (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      alert.removeEventListener('click', onClick(alert));
      document.removeEventListener('keydown', onEscDown(alert));
      closeAlert(alert);
    }
    if (alert === alertError) {
      errorButton.removeEventListener('click', onClick(alertError));
    }
  }
}

const onClick = (alert) => {
  return (evt) => {
    evt.preventDefault();
    closeAlert(alert);
  }
}

const showAlert = (alert) => {
  alert.classList.remove('hidden');
  document.addEventListener('keydown', onEscDown(alert));
  alert.addEventListener('click', onClick(alert));

}

const showAlertSuccess = () => {
  showAlert(alertSuccess);
}

const showAlertError = () => {
  showAlert(alertError);
  errorButton.addEventListener('click', onClick(alertError));
}

export {closeAlert, showAlertError, showAlertSuccess};

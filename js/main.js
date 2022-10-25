import './cards.js';
import './user-form.js';
import './map.js';
import './data.js';
import './form-validity.js';
import './api.js';
import { createCardsWithMarkers } from './map.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './user-form.js';
import { showAlertSuccess } from './user-modal.js';
import './user-modal.js';


getData((cards) => {
  createCardsWithMarkers(cards);
});

setUserFormSubmit(showAlertSuccess);


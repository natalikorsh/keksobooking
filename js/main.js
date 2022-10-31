import './cards.js';
import './user-form.js';
import './map.js';
import './data.js';
import './form-validity.js';
import './api.js';
import { createSimilarCards } from './map.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './user-form.js';
import { showAlertSuccess } from './user-modal.js';
import './user-modal.js';
import { setFilterType } from './filter.js';



getData((cards) => {
  createSimilarCards(cards);
  setFilterType(cards);
});

setUserFormSubmit(showAlertSuccess);


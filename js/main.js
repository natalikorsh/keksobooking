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

const RENDERED_CARD_COUNT_MIN = 0;
const RENDERED_CARD_COUNT_MAX = 10;

getData((cards) => {
  const renderedCards = cards.slice(RENDERED_CARD_COUNT_MIN, RENDERED_CARD_COUNT_MAX);
  createSimilarCards(renderedCards);
  setFilterType(renderedCards);
});

setUserFormSubmit(showAlertSuccess);


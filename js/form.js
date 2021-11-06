
import {showAlert} from './gfun.js';

const chSuccess = document.querySelector('#success').content;
const chError = document.querySelector('#error').content;

const DataDisableForm = function () {
  const dataForm = document.querySelector('.ad-form');
  const dataMap = document.querySelector('.map__filters');
  const dataMapChildCollection = dataMap.childNodes;
  const dataMapChildMas = Array.prototype.slice.call(dataMapChildCollection);
  dataMap.classList.add('map__filters--disabled');
  dataForm.classList.add('ad-form--disabled');
  const dataAttribude = dataForm.querySelectorAll('fieldset');
  dataAttribude.forEach((element) => {
    if (element.disabled !== undefined) {
      element.disabled = true;
    }
  });
  dataMapChildMas.forEach((element) => {
    if (element.disabled !== undefined) {
      element.disabled = true;
    }
  });

};
// DataDisableForm();

const setUserData = (onSuccess, onError, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        document.querySelector('.ad-form__reset').click();
        onSuccess();
      } else {
        onError('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

const setUserFormSubmit = () => {
  document.querySelector('.ad-form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    setUserData(
      () => showAlert(chSuccess),
      () => showAlert(chError),
      new FormData(evt.target),
    );
  });
};
setUserFormSubmit();

import { URL_DATA, DataDisableForm } from './form.js';
import { showAlert } from './gfun.js';

const error = document.querySelector('#error').content;
const showError = error.querySelector('.error__message');

const getData = (onSuccess) => {
  try {
    fetch(URL_DATA).
      then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          DataDisableForm();
          showError.textContent = 'Ошибка загрузки данных';
          showAlert(error);
        }
      }).
      then(onSuccess);
  } catch (e) {
    DataDisableForm();
    showError.textContent = 'Ошибка загрузки данных';
    showAlert(error);
  }
};
export { getData };

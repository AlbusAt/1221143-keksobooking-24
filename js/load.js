import {createCustomPopup, parserData} from './form.js';
import {getDataFiltr} from './similarelem.js';
fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisement) => {
    parserData(advertisement);
  });
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
export {setUserData, parserData};

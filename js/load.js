import { URL_DATA } from './form.js';

const getData = (onSuccess) => {
  fetch(URL_DATA).
    then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).
    then(onSuccess);
};
export {getData};

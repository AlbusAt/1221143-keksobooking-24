import {createCustomPopup, parserData} from './form.js';
import './gconst.js';
import './gmass.js';
import './gfun.js';
//import './similarelem.js';
import './form.js';
import './user-modal.js';
import './user-form.js';
fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisement) => {
    parserData(advertisement);
  });


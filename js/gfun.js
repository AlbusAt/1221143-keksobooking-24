/* eslint-disable no-undef */

import {AVATARS,TYPE,CHECK_IN, CHECK_OUT, FEAT, PHOTOS} from './gmass.js';
import {LAT_FROM, LAT_BEFORE, LNG_FROM, LNG_BEFORE} from './gconst.js';


//const _ = require('lodash');

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandomElements = (element) => element[_.random( 0, element.length - 1 )];
const author = {
  avatar: getRandomElements(AVATARS),
};

const offer = {
  title: 'Keksobook',
  address: _.random(LAT_FROM, LNG_BEFORE),
  price: _.random(2000, 9000),
  type: getRandomElements(TYPE),
  rooms: _.random(1,5),
  guests: _.random(1,6),
  checkin: getRandomElements(CHECK_IN),
  checkout: getRandomElements(CHECK_OUT),
  features: getRandomElements(FEAT),
  description: 'Большой дом',
  photos: getRandomElements(PHOTOS),
};
const location = {
  lat: _.random(LAT_FROM,LAT_BEFORE),
  lng: _.random(LNG_FROM, LNG_BEFORE),
};


export {offer, author};


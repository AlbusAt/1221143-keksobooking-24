import {avatars,TYPE,CHECK_IN, CHECK_OUT, FEAT, PHOTOS, AVATARS} from './gmass.js';
import {LAT_FROM, LAT_BEFORE, LNG_FROM, LNG_BEFORE} from './gconst.js';
// eslint-disable-next-line no-undef
const _ = require('lodash');

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandomElements = (element) => element[_.random( 0, element.length - 1 )];
const printAutor = () => { getRandomElements(AVATARS); };

const offers = {
  title: 'Keksobook',
  address: (35.67983, 139.78313),
  price: _.random(0,100),
  type: getRandomElements(TYPE),
  guests: _.random(0,15),
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
export {getRandomPositiveFloat, getRandomElements, printAutor,offers,location};


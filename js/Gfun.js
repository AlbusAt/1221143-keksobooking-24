import {avatars,Type,CheckIn, CheckOut, Feat, PhoTos} from './Gmass.js';
import {LAT_FROM, LAT_BEFORE, LNG_FROM, LNG_BEFORE} from './gtConst.js';
// eslint-disable-next-line no-undef
const _ = require('lodash');

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandomElements = (element) => element[_.random( 0, element.length - 1 )];
const PrintAutor = () => { getRandomElements(avatars); };

const offers = {
  title: 'Keksobook',
  address: (35.67983, 139.78313),
  price: _.random(0,100),
  type: getRandomElements(Type),
  guests: _.random(0,15),
  checkin: getRandomElements(CheckIn),
  checkout: getRandomElements(CheckOut),
  features: getRandomElements(Feat),
  description: 'Большой дом',
  photos: getRandomElements(PhoTos),
};
const location = {
  lat: _.random(LAT_FROM,LAT_BEFORE),
  lng: _.random(LNG_FROM, LNG_BEFORE),
};
export {getRandomPositiveFloat, getRandomElements, PrintAutor,offers,location};


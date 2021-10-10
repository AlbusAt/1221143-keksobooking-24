import {avatar,Type,CheckIn, CheckOut, Feat, PhoTos} from './Gmass.js';
const _ = require('lodash');

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandom = (element) => element[_.random( 0, element.length - 1 )];
const autor = () => { getRandom(avatar); };

const offer = {
  title: 'Keksobook',
  address: (35.67983, 139.78313),
  price: _.random(0,100),
  type: getRandom(Type),
  guests: _.random(0,15),
  checkin: getRandom(CheckIn),
  checkout: getRandom(CheckOut),
  features: getRandom(Feat),
  description: 'Большой дом',
  photos: getRandom(PhoTos),
};
const location = {
  lat: _.random(35.65000,35.70000),
  lng: _.random(139.70000, 139.80000),
};
export {getRandomPositiveFloat, getRandom, autor,offer,location};

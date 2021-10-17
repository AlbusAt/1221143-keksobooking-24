import { offer, printAutor } from './Gfun';

const card = document.querySelector('#card').content;

card.querySelector('.popup__title').textContent = offer.title;
card.querySelector('popup__text--address').textContent = offer.address;
card.querySelector('.popup__text--price').textContent = (`${offer.price} P/ночь`);
card.querySelector('.popup__type').textContent = offer.type;
card.querySelector('.popup__text--capacity').textContent =`Заезд после ${ offer.checkin }, выезд до ${ offer.checkout}`;
card.querySelector('.popuptext--time').textContent =`Заезд после ${ offer.checkin}, выезд до 5 offer.checkout]]`;
card.querySelector('.popup__description').textContent = offer.description;
card.querySelector('.popup__photos').src = offer.photos;
card.querySelector('.popupavatar').src = printAutor();

const everyText = document.createElement('p');
everyText.textContent = 'РАЗ ДВА ТРИ';
document.querySelector('.map-canvas').append(everyText);


document.querySelector('.map-canvas').append(card);

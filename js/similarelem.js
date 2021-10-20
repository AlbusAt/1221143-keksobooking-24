import { offer, author } from './gfun.js';

const card = document.querySelector('#card').content;


card.querySelector('.popup__title').textContent = offer.title;
card.querySelector('.popup__text--address').textContent = offer.address;
card.querySelector('.popup__text--price').textContent = (`${offer.price} P/ночь`);
card.querySelector('.popup__type').textContent = offer.type;
card.querySelector('.popup__text--capacity').textContent =`${offer.rooms}, комнаты для ${ offer.guests} гостей`;
card.querySelector('.popup__text--time').textContent =`Заезд после ${ offer.checkin}, выезд до ${offer.checkout}`;
card.querySelector('.popup__description').textContent = offer.description;
card.querySelector('.popup__photo').src = offer.photos;
card.querySelector('.popup__avatar').src = author.avatar;
document.querySelector('#map-canvas').append(card);

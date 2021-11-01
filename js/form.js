import {author, location, showAlert} from './gfun.js';
import { getValueFilter } from './similarelem.js';
import { setUserData } from './load.js';
const formSumbit = document.querySelector('.ad-form__submit');
const onSuccess = document.querySelector('#success').content;
const OnError = document.querySelector('#error').content;
const DataDisableForm = function () {
  const dataForm = document.querySelector('.ad-form');
  const dataMap = document.querySelector('.map__filters');
  const dataMapChildCollection = dataMap.childNodes;
  const dataMapChildMas = Array.prototype.slice.call(dataMapChildCollection);
  dataMap.classList.add('map__filters--disabled');
  dataForm.classList.add('ad-form--disabled');
  const dataAttribude = dataForm.querySelectorAll('fieldset');
  dataAttribude.forEach((element) => {
    if (element.disabled !== undefined) {
      element.disabled = true;
    }
  });
  dataMapChildMas.forEach((element) => {
    if (element.disabled !== undefined) {
      element.disabled = true;
    }
  });

};
// DataDisableForm();
const map = L.map('map-canvas')
  .setView({
    lat: location.lat,
    lng: location.lng,
  }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: location.lat,
    lng: location.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const createCustomPopup = (data) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  popupElement.querySelector('.popup__avatar').src = data.author.avatar;
  popupElement.querySelector('.popup__title').textContent = data.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = data.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = data.offer.price;
  popupElement.querySelector('.popup__type').textContent = data.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  if (data.offer.features !== undefined) {
    for (const element of data.offer.features) {
      const li = document.createElement('li');
      li.classList.add('popup__feature', `popup__feature--${element}`);
      popupElement.querySelector('.popup__features').append(li);
    }
  }
  popupElement.querySelector('.popup__description').textContent = data.offer.description;
  if (data.offer.photos !== undefined) {
    for (const element of data.offer.photos) {
      const img = document.createElement('img');
      img.width = 45;
      img.height = 40;
      img.alt = 'Фотография жилья';
      img.src = element;
      popupElement.querySelector('.popup__photos').append(img);
    }
  }
  return popupElement;
};
const parserData = (data) => {
  data = data.slice(0,10);
  for (const element of data) {
    const {lat,lng} = element.location;
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker.addTo(map);
    marker.bindPopup(createCustomPopup(element));
  }
};

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const getCoordinates =  Object.values(evt.target.getLatLng());
  document.querySelector('#address').value = `${getCoordinates[0].toFixed(5)}, ${getCoordinates[1].toFixed(5)}`;
});
const setUserFormSubmit = () => {
  document.querySelector('.ad-form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    setUserData(
      () => showAlert(onSuccess),
      () => showAlert(OnError),
      new FormData(evt.target),
    );
  });
};
setUserFormSubmit();
export {createCustomPopup, parserData};

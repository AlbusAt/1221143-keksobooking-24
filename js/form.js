import {location} from './gfun.js';
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

const points = [
  {
    title: 'Футура',
    lat: 35.61854,
    lng: 139.64996,
  },
  {
    title: 'Шаверма',
    lat: 35.68067,
    lng: 139.81189,
  },
];
const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);

  //popupElement.querySelector('.popup__title').textContent = point.title;
  //popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};
points.forEach((point) => {
  const {lat,lng} = point;
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
  marker.bindPopup(createCustomPopup(point));
});

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const getCoordinates =  Object.values(evt.target.getLatLng());
  document.querySelector('#address').value = `${getCoordinates[0].toFixed(5)}, ${getCoordinates[1].toFixed(5)}`;
});

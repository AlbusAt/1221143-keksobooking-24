import { location } from './gfun.js';
import { getData } from './load.js';
import { debounce } from './utils/debounce.js';

const formElement = document.querySelector('form[name="filter-form"]');
const typeFilterElement = formElement.querySelector('select[name="housing-type"]');
const priceFilterElement = formElement.querySelector('select[name="housing-price"]');
const roomsNumberFilterElement = formElement.querySelector('select[name="housing-rooms"]');
const guestsNumberFilterElement = formElement.querySelector('select[name="housing-guests"]');
const featuresFilterElementList = formElement.querySelectorAll('input[name="features"]');
const formSubmit = document.querySelector('.ad-form__submit');
const formReset = document.querySelector('.ad-form__reset');

const SLICE_SIZE = 10;
const DEFAULT_DEBOUNCE = 500;
const DEFAULT_TYPE_FILTER_VALUE = 'any';
const DEFAULT_PRICE_FILTER_VALUE = 'any';
const DEFAULT_ROOMS_NUMBER_FILTER_VALUE = 'any';
const DEFAULT_GUESTS_NUMBER_FILTER_VALUE = 'any';

let filters = [];

const PRICE_FILTER_RANGE = {
  low: {
    from: 0,
    to: 10000,
  },
  middle: {
    from: 10000,
    to: 50000,
  },
  high: {
    from: 50000,
  },
};


const map = L.map('map-canvas').setView({lat: location.lat, lng: location.lng}, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

let DEFAULT_MAIN_POINT = null;

function addMainPoint () {
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  DEFAULT_MAIN_POINT = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  DEFAULT_MAIN_POINT.addTo(map);
  DEFAULT_MAIN_POINT.on('moveend', (evt) => {
    const getCoordinates =  Object.values(evt.target.getLatLng());
    document.querySelector('#address').value = `${getCoordinates[0].toFixed(5)}, ${getCoordinates[1].toFixed(5)}`;
  });
}

function setMainPoint () {
  if (DEFAULT_MAIN_POINT !== null) {
    DEFAULT_MAIN_POINT.remove();
    addMainPoint();
  } else {addMainPoint();}
}

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

const storeMarkers = [];

function removeMarkers () {
  for (const element of storeMarkers) {
    element.remove();
  }
}

const loadMarker = (data) => {
  data = data.slice(0, SLICE_SIZE);
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
    storeMarkers.push(marker);
    marker.addTo(map);
    marker.bindPopup(createCustomPopup(element));
  }
};

function addFilter (markers) {
  if (typeFilterElement.value !== DEFAULT_TYPE_FILTER_VALUE) {
    markers = markers.filter((marker) => (marker.offer.type) ? marker.offer.type === typeFilterElement.value : false);
  }
  const priceCurrentType = PRICE_FILTER_RANGE[priceFilterElement.value];
  if (priceFilterElement.value !== DEFAULT_PRICE_FILTER_VALUE && priceCurrentType) {
    markers = markers.filter((marker) => {
      if (!marker.offer.price) {
        return false;
      }
      const priceValue = Number(marker.offer.price);
      if (priceValue >= priceCurrentType.from) {
        if (priceCurrentType.to) {
          if (priceValue < priceCurrentType.to) {
            return true;
          }
        } else {
          return true;
        }
      }
      return false;
    });
  }
  if (roomsNumberFilterElement.value !== DEFAULT_ROOMS_NUMBER_FILTER_VALUE) {
    const roomsNumber = Number(roomsNumberFilterElement.value);
    markers = markers.filter((marker) => {
      if (!marker.offer.rooms) {
        return false;
      }
      return Number(marker.offer.rooms) === roomsNumber;
    });
  }
  if (guestsNumberFilterElement.value !== DEFAULT_GUESTS_NUMBER_FILTER_VALUE) {
    const guestsNumber = Number(guestsNumberFilterElement.value);
    markers = markers.filter((marker) => {
      if (typeof marker.offer.guests === 'undefined') {
        return false;
      }
      return Number(marker.offer.guests) === guestsNumber;
    });
  }
  let filteredCards = markers;
  featuresFilterElementList.forEach((featuresFilterElement) => {
    if (featuresFilterElement.checked) {
      filteredCards = filteredCards.filter((marker) => {
        if (!marker.offer.features) {
          return false;
        }
        return marker.offer.features.includes(featuresFilterElement.value);
      });
    }
  });
  return filteredCards;
}

const loadMap = () => {
  const filterData = addFilter(filters);
  removeMarkers();
  loadMarker(filterData);
};


const generateCommonMarkers = (data) => {
  addMainPoint();
  filters = data;
  loadMap();
};


function getClosePopup () {
  map.closePopup();
}

function gds () {
  typeFilterElement.value = DEFAULT_TYPE_FILTER_VALUE;
  priceFilterElement.value = DEFAULT_PRICE_FILTER_VALUE;
  roomsNumberFilterElement.value = DEFAULT_ROOMS_NUMBER_FILTER_VALUE;
  guestsNumberFilterElement.value = DEFAULT_GUESTS_NUMBER_FILTER_VALUE;
  loadMap();
  setMainPoint();
}


formReset.addEventListener('click', getClosePopup);
formSubmit.addEventListener('click', getClosePopup);

formReset.addEventListener('click', gds);
formSubmit.addEventListener('click', gds);

formElement.addEventListener('change', debounce(loadMap, DEFAULT_DEBOUNCE));

getData(generateCommonMarkers);

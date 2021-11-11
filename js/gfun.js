
const LAT_FROM = 35.65000;
const LAT_BEFORE = 35.70000;
const LNG_FROM = 139.70000;
const LNG_BEFORE = 139.80000;


const location = {
  lat: _.random(LAT_FROM,LAT_BEFORE),
  lng: _.random(LNG_FROM, LNG_BEFORE),
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('section');
  const messageServer  = message.cloneNode(true);
  document.body.appendChild(alertContainer).appendChild(messageServer);
  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
    }
  };

  document.addEventListener('keydown',() => {
    onPopupEscKeydown;
    alertContainer.style.display = 'none';
  });

  document.addEventListener('click', () => {
    alertContainer.style.display = 'none';
  });

};

export {
  location,
  showAlert
};

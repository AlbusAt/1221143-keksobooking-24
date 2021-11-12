const userInputTitle = document.querySelector('#title');
const userInputPrice = document.querySelector('#price');
const userRooms = document.querySelector('#room_number');
const userTypeHouse = document.querySelector('#type');
const userCapacity = document.querySelector('#capacity');
const userTimeIn = document.querySelector('#timein');
const userTimeOut = document.querySelector('#timeout');
const userInputRoomNumber = userCapacity.querySelectorAll('option');
const blockUserAvatar = document.querySelector('.ad-form-header__preview img');
const blockUserPhoto = document.querySelector('.ad-form__photo');
const inputAvatar = document.querySelector('#avatar');
const inputPhoto = document.querySelector('#images');


const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const PRICE_HOUSE_BUNGALOW = 0;
const PRICE_HOUSE_FLAT = 1000;
const PRICE_HOUSE_HOTEL = 3000;
const PRICE_HOUSE_HOUSE = 5000;
const PRICE_HOUSE_PALACE = 10000;

const NULL_ROOM_NUMBER = '0';
const ONE_ROOM_NUMBER = '1';
const TWO_ROOM_NUMBER = '2';
const THREE_ROOM_NUMBER = '3';
const ANY_ROOM_NUMBER = '100';
const USER_IMG_HEIGHT = 70;
const USER_IMG_WIDTH = 75;

const MAX_TYPE_PRICE = 1000000;
const MIN_HOUSING_PRICES = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

userInputTitle.addEventListener('input', () => {
  const valueLength = userInputTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    userInputTitle.setCustomValidity((`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`));
  } else if (valueLength > MAX_TITLE_LENGTH) {
    userInputTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    userInputTitle.setCustomValidity('');
  }

  userInputTitle.reportValidity();
});

function onChangeRoomNumber () {
  userCapacity.value = NaN;
  const value = document.querySelector('#room_number').value;
  if (value === ONE_ROOM_NUMBER) {
    userInputRoomNumber.forEach((element) => {
      if (element.value === TWO_ROOM_NUMBER || element.value === THREE_ROOM_NUMBER || element.value === NULL_ROOM_NUMBER) {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === TWO_ROOM_NUMBER) {
    userInputRoomNumber.forEach((element) => {
      if (element.value === THREE_ROOM_NUMBER || element.value === NULL_ROOM_NUMBER) {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === THREE_ROOM_NUMBER) {
    userInputRoomNumber.forEach((element) => {
      if (element.value === NULL_ROOM_NUMBER) {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === ANY_ROOM_NUMBER) {
    userInputRoomNumber.forEach((element) => {
      if (element.value === ONE_ROOM_NUMBER || element.value === TWO_ROOM_NUMBER || element.value === THREE_ROOM_NUMBER) {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
}

function onChangeTypeHouse () {
  const valueType = document.querySelector('#type').value;
  switch (valueType) {
    case 'bungalow':
      userInputPrice.placeholder = PRICE_HOUSE_BUNGALOW;
      break;
    case 'flat':
      userInputPrice.placeholder = PRICE_HOUSE_FLAT;
      break;
    case 'hotel':
      userInputPrice.placeholder = PRICE_HOUSE_HOTEL;
      break;
    case 'house':
      userInputPrice.placeholder = PRICE_HOUSE_HOUSE;
      break;
    case 'palace':
      userInputPrice.placeholder = PRICE_HOUSE_PALACE;
      break;
  }
}

userInputPrice.addEventListener('input', () => {
  const valuePrice = userInputPrice.value;
  if (valuePrice > MAX_TYPE_PRICE) {
    userInputPrice.setCustomValidity('Цена не должна превышать 1 000 000');
  } else {
    userInputPrice.setCustomValidity('');
  }
  userInputPrice.reportValidity();
});

function onChangeTimeIn () {
  const value = document.querySelector('#timein').value;
  switch (value) {
    case '12:00':
      document.querySelector('#timeout').value = '12:00';
      break;
    case '13:00':
      document.querySelector('#timeout').value = '13:00';
      break;
    case '14:00':
      document.querySelector('#timeout').value = '14:00';
      break;
  }
}

function onChangeTimeOut () {
  const value = document.querySelector('#timeout').value;
  switch (value) {
    case '12:00':
      document.querySelector('#timein').value = '12:00';
      break;
    case '13:00':
      document.querySelector('#timein').value = '13:00';
      break;
    case '14:00':
      document.querySelector('#timein').value = '14:00';
      break;
  }
}

function addUserAvatar () {
  const file = inputAvatar.files[0];
  blockUserAvatar.src = URL.createObjectURL(file);
}

function addUserPhoto () {
  const file = inputPhoto.files[0];
  const addForImgUserPhoto = document.createElement('img');
  addForImgUserPhoto.width = USER_IMG_WIDTH;
  addForImgUserPhoto.height = USER_IMG_HEIGHT;
  addForImgUserPhoto.src = URL.createObjectURL(file);
  blockUserPhoto.append(addForImgUserPhoto);
}


userTypeHouse.addEventListener('change', () => {
  userInputPrice.min = MIN_HOUSING_PRICES[userTypeHouse.value];
  userInputPrice.placeholder = MIN_HOUSING_PRICES[userTypeHouse.value];
  userInputPrice.reportValidity();
});
inputAvatar.addEventListener('change', addUserAvatar);
inputPhoto.addEventListener('change', addUserPhoto);
userTimeOut.addEventListener('change', onChangeTimeOut);
userTimeIn.addEventListener('change', onChangeTimeIn);
userTypeHouse.addEventListener('change', onChangeTypeHouse);
userRooms.addEventListener('change', onChangeRoomNumber);

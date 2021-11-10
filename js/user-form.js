
const userInputAddress = document.querySelector('#address');
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
  if (value === '1') {
    userInputRoomNumber.forEach((element) => {
      if (element.value === '2' || element.value === '3' || element.value === '0') {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === '2') {
    userInputRoomNumber.forEach((element) => {
      if (element.value === '3' || element.value === '0') {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === '3') {
    userInputRoomNumber.forEach((element) => {
      if (element.value === '0') {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === '100') {
    userInputRoomNumber.forEach((element) => {
      if (element.value === '1' || element.value === '2' || element.value === '3') {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
}

function onChangePriceHouse () {
  const value = document.querySelector('#type').value;
  switch (value) {
    case 'bungalow':
      userInputPrice.value = 0;
      break;
    case 'flat':
      userInputPrice.value = 1000;
      break;
    case 'hotel':
      userInputPrice.value = 3000;
      break;
    case 'house':
      userInputPrice.value = 5000;
      break;
    case 'palace':
      userInputPrice.value = 10000;
      break;
  }
}

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

function adUserAvatar () {
  const file = inputAvatar.files[0];
  blockUserAvatar.src = URL.createObjectURL(file);
}

function adUserPhoto () {
  const file = inputPhoto.files[0];
  const adForImgUserPhoto = document.createElement('img');
  adForImgUserPhoto.width = 75;
  adForImgUserPhoto.height = 70;
  adForImgUserPhoto.src = URL.createObjectURL(file);
  blockUserPhoto.append(adForImgUserPhoto);
}

inputAvatar.addEventListener('change', adUserAvatar);
inputPhoto.addEventListener('change', adUserPhoto);
userInputPrice.addEventListener('input', () => { userInputPrice.reportValidity(); }); //Сократил для визуальной красоты
userTimeOut.addEventListener('change', onChangeTimeOut);
userTimeIn.addEventListener('change', onChangeTimeIn);
userTypeHouse.addEventListener('change', onChangePriceHouse);
userRooms.addEventListener('change', onChangeRoomNumber);
onChangeRoomNumber();



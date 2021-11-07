
const UserInputAddress = document.querySelector('#address');
const UserInputTitle = document.querySelector('#title');
const UserInputPrice = document.querySelector('#price');
const UserRooms = document.querySelector('#room_number');
const UserTypeHouse = document.querySelector('#type');
const UserCapacity = document.querySelector('#capacity');
const UserTimeIn = document.querySelector('#timein');
const UserTimeOut = document.querySelector('#timeout');
const UserInputRoomNumber = UserCapacity.querySelectorAll('option');
const BlockUserAvatar = document.querySelector('.ad-form-header__preview img');
const BlockUserPhoto = document.querySelector('.ad-form__photo');
const InputAvatar = document.querySelector('#avatar');
const InputPhoto = document.querySelector('#images');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

UserInputTitle.addEventListener('input', () => {
  const valueLength = UserInputTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    UserInputTitle.setCustomValidity((`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`));
  } else if (valueLength > MAX_TITLE_LENGTH) {
    UserInputTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    UserInputTitle.setCustomValidity('');
  }

  UserInputTitle.reportValidity();
});


function onChangeRoomNumber () {
  UserCapacity.value = NaN;
  const value = document.querySelector('#room_number').value;
  if (value === '1') {
    UserInputRoomNumber.forEach((element) => {
      if (element.value === '2' || element.value === '3' || element.value === '0') {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === '2') {
    UserInputRoomNumber.forEach((element) => {
      if (element.value === '3' || element.value === '0') {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === '3') {
    UserInputRoomNumber.forEach((element) => {
      if (element.value === '0') {
        element.disabled = true;
      } else {element.disabled = false;}
    });
  }
  if (value === '100') {
    UserInputRoomNumber.forEach((element) => {
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
      UserInputPrice.value = 0;
      break;
    case 'flat':
      UserInputPrice.value = 1000;
      break;
    case 'hotel':
      UserInputPrice.value = 3000;
      break;
    case 'house':
      UserInputPrice.value = 5000;
      break;
    case 'palace':
      UserInputPrice.value = 10000;
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
  const file = InputAvatar.files[0];
  BlockUserAvatar.src = URL.createObjectURL(file);
}

function adUserPhoto () {
  const file = InputPhoto.files[0];
  const adForImgUserPhoto = document.createElement('img');
  adForImgUserPhoto.width = 75;
  adForImgUserPhoto.height = 70;
  adForImgUserPhoto.src = URL.createObjectURL(file);
  BlockUserPhoto.append(adForImgUserPhoto);
}

InputAvatar.addEventListener('change', adUserAvatar);
InputPhoto.addEventListener('change', adUserPhoto);
UserInputPrice.addEventListener('input', () => { UserInputPrice.reportValidity(); }); //Сократил для визуальной красоты
UserTimeOut.addEventListener('change', onChangeTimeOut);
UserTimeIn.addEventListener('change', onChangeTimeIn);
UserTypeHouse.addEventListener('change', onChangePriceHouse);
UserRooms.addEventListener('change', onChangeRoomNumber);
onChangeRoomNumber();



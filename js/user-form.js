import {MAX_TITLE_LENGTH, MIN_TITLE_LENGTH} from './gconst.js';
const userInputTitle = document.querySelector('#title');
const userInputPrice = document.querySelector('#price');
const UserRooms = document.querySelector('#room_number');
const UserCapacity = document.querySelector('#capacity');
const userInputRoomNumber = UserCapacity.querySelectorAll('option');

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
userInputPrice.addEventListener('input', () => {
  userInputPrice.reportValidity();
});
function onChangeRoomNumber () {
  UserCapacity.value = NaN;
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
UserRooms.addEventListener('change', onChangeRoomNumber);
onChangeRoomNumber();

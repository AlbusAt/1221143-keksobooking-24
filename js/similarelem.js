const TypeOfFilters = document.querySelectorAll('.map__filter');
const TypeHouseFilter = document.querySelector('#housing-type');
const TypePriceFilter = document.querySelector('#housing-price');
const TypeRoomsFilter = document.querySelector('#housing-rooms');
const TypeGuestsFilter = document.querySelector('#housing-guests');
const TypeFeaturesFilter = document.querySelector('#housing-features');
const OptionsHouse = TypeHouseFilter.querySelectorAll('option');

TypeHouseFilter.addEventListener('change', () => {
  const valueHouse = TypeHouseFilter.value;
});
TypePriceFilter.addEventListener('change', () => {
  const valuePrice = TypePriceFilter.value;
});
TypeRoomsFilter.addEventListener('change', () => {
  const valueRooms = TypeRoomsFilter.value;
});
TypeGuestsFilter.addEventListener('change', () => {
  const valueGuests = TypeGuestsFilter.value;
});
TypeFeaturesFilter.addEventListener('change', () => {
  const valueFeatures = TypeFeaturesFilter.value;
});
const getDataFiltr = (() => {});
export {getDataFiltr};

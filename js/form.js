//const indexChildField = 0;
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
DataDisableForm();

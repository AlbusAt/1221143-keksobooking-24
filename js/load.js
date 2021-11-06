const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data').
    then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).
    then(onSuccess);
};
export {getData};

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
const avatar = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const Type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CheckIn = [
  '12:00',
  '13:00',
  '14:00',
];
const CheckOut = [
  '12:00',
  '13:00',
  '14:00',
];
const Feat = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PhoTos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const getRandom = (element) => {
  return element[_.random(0,element.length - 1)];
};
const autor = () => { avatars: getRandom(avatar) };
const offer = {
  title: 'Keksobook',
  address: (35.67983, 139.78313),
  price: Math.random(0,100),
  type: getRandom(Type),
  guests: Math.random(0,15),
  checkin: getRandom(CheckIn),
  checkout: getRandom(CheckOut),
  features: getRandom(Feat),
  description: "Большой дом",
  photos: getRandom(PhoTos),
};
const location = {
  lat: random(35.65000,35.70000),
  lng: random(139.70000, 139.80000),
};
const AD_One = Array.from({length: 2}, autor);
const AD_Two = Array.from({length: 11}, offer);
const AD_Tree = Array.from({length: 3}, location);

let getRandNumber = function (min,max,floatPoint) { // число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
  rand_num = min + Math.random() * (max + 1 - min);
  if (min >= max) {
    return "Заданы некорректные параметры!"
  }
  return rand_num.toFixed(floatPoint) // округление до n-ых знаков после запятой
}
alert( getRandNumber(1, 50, 1) );


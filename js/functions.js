// Длинна строки
// eslint-disable-next-line no-unused-vars
const isLess = (string, length) => string.length <= length;


// Полиндром
// eslint-disable-next-line no-unused-vars
function isPolindrom(string) {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
}


// Извлечение числа из строки
// eslint-disable-next-line no-unused-vars
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

// Функция, которая принимает три параметра: исходную строку,
// минимальную длину и строку с добавочными символами — и возвращает исходную строку,
// дополненную указанными символами до заданной длины.
// eslint-disable-next-line no-unused-vars
const myPadSrart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

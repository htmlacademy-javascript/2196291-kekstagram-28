import {
  PICTURE_COUNT,
  AVATAR_COUNT,
  LIKE_MIN_COUNT,
  LIKE_MAX_COUNT,
  MAX_COMMENT_INDEX,
  MAX_COMMENT_COUNT,
  COMMENT_MESSEGE,
  DESCRIPTIONS,
  NAMES
} from './setup-const.js';


//генерация рамдомного ID элемента
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// функция по поиску случайного элемента в массиве
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// функция создает массив комментариев
const createComment = () => {
  const randomAvatarIndex = getRandomInteger(1, AVATAR_COUNT); //создает аватар

  return {
    id: getRandomInteger(1, MAX_COMMENT_INDEX),
    avatar: `img/avatar-${randomAvatarIndex}.svg`,
    message: getRandomArrayElement(COMMENT_MESSEGE), // случайное сообщение из массива MESSEGE
    name: getRandomArrayElement(NAMES), // случайное Имя из массива NAMES
  };
};


// функция создает объекты
function createPicture(pictureId) {
  const randomLikeIndex = getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT); // рамдомное колличество лайков

  return {
    id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    like: randomLikeIndex,
    comments: Array.from({ length: getRandomInteger(1, MAX_COMMENT_COUNT) }, createComment),
  };
}


const similarPicture = () => new Array(PICTURE_COUNT).fill().map((_, index) => createPicture(index + 1));


export { similarPicture };

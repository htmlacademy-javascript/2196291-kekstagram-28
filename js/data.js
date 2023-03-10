import { getRandomInteger } from './random-function.js';
import { PICTURE_COUNT } from './setup-const.js';
import { AVATAR_COUNT } from './setup-const.js';
import { LIKE_MIN_COUNT } from './setup-const.js';
import { LIKE_MAX_COUNT } from './setup-const.js';
import { MAX_COMMENT_INDEX } from './setup-const.js';
import { MAX_COMMENT_COUNT } from './setup-const.js';
import { COMMENT_MESSEGE } from './setup-const.js';
import { DESCRIPTIONS } from './setup-const.js';
import { NAMES } from './setup-const.js';

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
const createPicture = (pictureId) => {
  const randomLikeIndex = getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT); // рамдомное колличество лайков

  return {
    id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS), // случайное описание фото из массива DESCRIPTIONS
    like: randomLikeIndex, // колличество лайков
    comments: Array.from({ length: getRandomInteger(1, MAX_COMMENT_COUNT) }, createComment),

  };
};


const similarPicture = () => new Array(PICTURE_COUNT).fill().map((_, index) => createPicture(index + 1));

similarPicture();

export { similarPicture };

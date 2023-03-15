import { similarPicture } from './data.js';

// находим шаблон
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

// находим контейнер для изображений
const pictureContainer = document.querySelector('.pictures');


const createThumbnails = similarPicture();

// создаем фрагмент для изображений
const pictureFragment = document.createDocumentFragment();

// создаем миниатюры
createThumbnails.forEach(({ url, like, comments }) => {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__likes').textContent = like;
  userPicture.querySelector('.picture__comments').textContent = comments.length;

  pictureFragment.appendChild(userPicture);
});

pictureContainer.appendChild(pictureFragment);

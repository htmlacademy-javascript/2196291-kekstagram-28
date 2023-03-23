import { renderBigPicture } from './big-picture.js';
const getTemplatePicture = () => document.querySelector('#picture').content.querySelector('.picture');


const createUserPicture = ({ url, like, comments, id, description }) => {
  const userPicture = getTemplatePicture().cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__likes').textContent = like;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.dataset.userPictureId = id;
  userPicture.addEventListener('click', () => {
    renderBigPicture({ url, description, like, comments });
  });
  return userPicture;
};

const addThumbnailsToContainer = (pictures, container) => {
  const userPictures = pictures.map(({ url, like, comments, id }) => createUserPicture({ url, like, comments, id }));
  container.append(...userPictures);
};

export { addThumbnailsToContainer };

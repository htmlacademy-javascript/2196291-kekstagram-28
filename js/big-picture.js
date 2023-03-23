/*Отрисовка полноразмерного изображения*/
const bigPicture = document.querySelector('.big-picture__preview');
const bigPicturesContainer = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');


const renderComment = (({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const createCommentsList = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.map((comment) => {
    commentsListFragment.append(renderComment(comment));
  });
  commentsContainer.append(commentsListFragment);
};

const renderBigPicture = ({ url, description, like, comments }) => {
  bigPicturesContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = like;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption p').textContent = description;

  commentsContainer.innerHTML = '';
  createCommentsList(comments);
};


export { renderBigPicture };

//открытие закрытие большого изображения
const bigPicturesContainer = document.querySelector('.big-picture');
const closeBigPicture = bigPicturesContainer.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserBigPicture();
  }
};

function closeUserBigPicture() {
  bigPicturesContainer.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeBigPicture.addEventListener('click', () => {
  bigPicturesContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');

    closeUserBigPicture();
  }
});

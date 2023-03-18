import { similarPicture } from './data.js';
import { addThumbnailsToContainer } from './rendering.js';

const pictures = similarPicture();
const pictureContainer = document.querySelector('.pictures');

addThumbnailsToContainer(pictures, pictureContainer);

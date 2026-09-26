import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

const handleSubmit = event => {
  event.preventDefault();

  const inputValue = event.currentTarget.elements['search-text'].value.trim();

  if (!inputValue) {
    iziToast.warning({
      message: 'Please fill in the input field',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(inputValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        hideLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
        });
      } else {
        hideLoader();
        createGallery(hits);
        form.reset();
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
      form.reset();
    });
};

form.addEventListener('submit', handleSubmit);

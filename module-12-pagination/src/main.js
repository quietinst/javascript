import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const PER_PAGE = 15;

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

const fetchAndRender = async (shouldScroll = false) => {
  hideLoadMoreButton();
  showLoader();
  try {
    const { hits, totalHits: currentTotalHits } = await getImagesByQuery(
      currentQuery,
      currentPage
    );

    totalHits = currentTotalHits;
    hideLoader();

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(hits);

    if (currentPage * PER_PAGE >= totalHits) {
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }

    if (shouldScroll) {
      window.scrollBy({
        top: gallery.firstElementChild.getBoundingClientRect().height * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  }
};

const handleSubmit = async event => {
  event.preventDefault();

  const inputValue = form.elements['search-text'].value.trim();

  if (!inputValue) {
    iziToast.warning({
      message: 'Please fill in the input field',
      position: 'topRight',
    });
    return;
  }

  currentQuery = inputValue;
  currentPage = 1;
  clearGallery();
  form.reset();
  fetchAndRender(false);
};

const handleClick = () => {
  currentPage += 1;
  fetchAndRender(true);
};

form.addEventListener('submit', handleSubmit);
loadMoreButton.addEventListener('click', handleClick);

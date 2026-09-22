import '../css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const createPromise = (state, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};

const handleSubmit = event => {
  event.preventDefault();
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;
  createPromise(state, delay)
    .then(value =>
      iziToast.success({
        message: value,
        position: 'topRight',
        timeout: 5000,
      })
    )
    .catch(error =>
      iziToast.error({
        message: error,
        position: 'topRight',
        timeout: 5000,
      })
    );
};

form.addEventListener('submit', handleSubmit);

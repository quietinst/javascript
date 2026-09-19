import '../css/styles.css';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function getStoredFormData() {
  try {
    return (
      JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {
        email: '',
        message: '',
      }
    );
  } catch {
    return { email: '', message: '' };
  }
}

const formData = getStoredFormData();

function renderFormData() {
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

renderFormData();

form.addEventListener('input', event => {
  const inputName = event.target.name;
  const inputValue = event.target.value.trim();
  switch (inputName) {
    case 'email':
      formData.email = inputValue;
      break;
    case 'message':
      formData.message = inputValue;
      break;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});

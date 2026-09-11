'use strict';

const loginForm = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }
  form.reset();
  console.log({ email, password });
};

loginForm.addEventListener('submit', handleSubmit);

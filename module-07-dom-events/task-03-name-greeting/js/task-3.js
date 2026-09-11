'use strict';

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const handleInput = event => {
  const value = event.target.value.trim();
  if (value) {
    output.textContent = value;
  } else {
    output.textContent = 'Anonymous';
  }
};

input.addEventListener('input', handleInput);

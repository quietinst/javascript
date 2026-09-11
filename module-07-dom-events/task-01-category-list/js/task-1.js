'use strict';

const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
  const heading = category.querySelector('h2').textContent;
  const listLength = category.querySelector('ul').children.length;
  console.log(`Category: ${heading}`);
  console.log(`Elements: ${listLength}`);
});

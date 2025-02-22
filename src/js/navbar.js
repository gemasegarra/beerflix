import renderBeersDOM from './beers.js';
import storage from './storage.js';
import './ui.js';

const { setItem, getItem } = storage('lStorage');
export const STORAGE_TYPE = 'lStorage';

export const INPUT_STORAGE_ID = 'input';

const searchForm = document.querySelector('#search-box');
const searchInput = document.querySelector('#search-beer');
const filterForm = document.querySelector('#filter-box');
const filterInput = document.querySelector('#filter');

searchInput.value = getItem(INPUT_STORAGE_ID);
filterInput.value = getItem(INPUT_STORAGE_ID);

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  if (searchInput.validity.valid) {
    renderBeersDOM(searchInput.value);
    setItem(INPUT_STORAGE_ID, searchInput.value)
  }
});

filterForm.addEventListener('submit', e => {
  e.preventDefault();
  if (filterInput.validity.valid) {
    renderBeersDOM(filterInput.value);
    setItem(INPUT_STORAGE_ID, filterInput.value)
  }
});

// localStorage input is removed when clicking on logo button
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  localStorage.removeItem(INPUT_STORAGE_ID)
});



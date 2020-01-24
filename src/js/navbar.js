import renderBeersDOM from './beers.js';
import storage from './storage.js';

const { setItem, getItem } = storage('lStorage');
export const STORAGE_TYPE = 'lStorage';

export const SEARCH_INPUT_STORAGE_ID = 'search-input';
export const FILTER_INPUT_STORAGE_ID = 'filter-input'

const searchForm = document.querySelector('#search-box');
const searchInput = document.querySelector('#search-beer');
const filterForm = document.querySelector('#filter-box');
const filterInput = document.querySelector('#filter');

searchInput.value = getItem(SEARCH_INPUT_STORAGE_ID);
filterInput.value = getItem(FILTER_INPUT_STORAGE_ID);

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  if (searchInput.validity.valid) {
    console.log('Get beer named', searchInput.value)
    renderBeersDOM(searchInput.value);
    setItem(SEARCH_INPUT_STORAGE_ID, searchInput.value)
  }
});


filterForm.addEventListener('submit', e => {
  e.preventDefault();
  if (filterInput.validity.valid) {
    console.log(filterInput.value)
    renderBeersDOM(filterInput.value);
    setItem(FILTER_INPUT_STORAGE_ID, filterInput.value)
  }
});

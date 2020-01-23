import renderBeersDOM from './beers.js';


const searchForm = document.querySelector('#search-box');
const searchInput = document.querySelector('#search-beer');
const filterForm = document.querySelector('#filter-box');
const filterInput = document.querySelector('#filter');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  if (searchInput.validity.valid) {
    console.log('Get beer named', searchInput.value)
    renderBeersDOM(searchInput.value);
  }
});

filterForm.addEventListener('submit', e => {
  e.preventDefault();
  if (filterInput.validity.valid) {
    console.log(filterInput.value)
    renderBeersDOM(filterInput.value);

  }
});
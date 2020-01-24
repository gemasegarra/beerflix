import renderBeersDOM from './beers.js';
import renderDetail from './detailed-card.js'
import './navbar.js';
import storage from './storage.js';
import { STORAGE_TYPE, SEARCH_INPUT_STORAGE_ID, FILTER_INPUT_STORAGE_ID } from './navbar.js';

const { getItem } = storage(STORAGE_TYPE);


page('/', () => {
  renderBeersDOM(SEARCH_INPUT_STORAGE_ID != null ? getItem(SEARCH_INPUT_STORAGE_ID) : getItem(FILTER_INPUT_STORAGE_ID)); 
  console.log('Route /')
});

page('/detail/:id', (ctx) => {
  console.log('Detail');
  const { params: { id } } = ctx;
  renderDetail(id);
});




page();
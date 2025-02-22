import renderBeersDOM from './beers.js';
import renderDetail from './detailed-card.js'
import './navbar.js';
import storage from './storage.js';
import { STORAGE_TYPE, INPUT_STORAGE_ID } from './navbar.js';

const { getItem } = storage(STORAGE_TYPE);


page('/', () => {
  renderBeersDOM(getItem(INPUT_STORAGE_ID));
});

page('/detail/:id', (ctx) => {
  const { params: { id } } = ctx;
  renderDetail(id);
});




page();
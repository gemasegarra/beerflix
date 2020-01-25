import api from './api.js'

const { getBeers } = api();

const beerTemplate = beer => {
  return `
  <div class="beercard">
  <div class="beer-card">
  <div class="image-container">
    <img class="beer-pic" src="${beer.image}" alt='bottle-pic'/>
  </div>
  <div class="description">
    <h1 class="title-section" id="beer-name">${beer.name}</h1>
    <p class="description">${beer.description}</p>
    <p class="year">First brewed: ${beer.firstBrewed}. 
    </p>
    <p class="likebutton">Add to favourites: <button class="heart-button" id="heart"><i class="far fa-heart"></i></button></p>
    <p class="show-more-info">For more info click <a href="/detail/${beer.beerId}"> here!</a></p>
  </div>
</div>
</div>
`};

const renderBeers = (element, items) => {
  const htmlBeers = items.map(function (beer) {
    return beerTemplate(beer);
  }).join('');
  const comments = document.querySelector('#details');
  const mainSection = document.querySelector('main');
  element.innerHTML = htmlBeers;
  comments.innerHTML = "";
  mainSection.innerHTML = "";
}

const renderBeersDOM = async text => {
  try {
    const beers = await getBeers(text);
    const beerSection = document.querySelector('#beerlist')
    renderBeers(beerSection, beers)
  } catch (err) {
    console.log(err)
  }
};

export default renderBeersDOM;
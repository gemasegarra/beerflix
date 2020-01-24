import api from './api.js';

const detailedTemplate = ({beerId, name, image, description, firstBrewed, brewersTips, contributedBy, likes, price}) => {
  return `
  <div class="beercard">
  <div class="beer-card" id="${beerId}">
  <div class="image-container">
    <img class="beer-pic" src="${image}" alt='bottle-pic'/>
  </div>
  <div class="description">
    <h1 class="title-section" id="beer-name">${name}</h1>
    <p class="description">${description}</p>
    <p class="year">First brewed: ${firstBrewed}</p>
    <p class="brewersTips">Brewer tip: ${brewersTips}</p>
    <p class="contributedBy">Contributed by ${contributedBy}</p>
    <p class="likes">${likes} ❤️</p>
    <p class="price">Price ${price} 💵</p>
  </div>
</div>
</div> 
</div>
`
};

const { getDetails } = api()

const renderDetail = async id => {
  try { 
    console.log('prueba')
    const detail = await getDetails(id);
    const template = detailedTemplate(detail);
    const mainSection = document.querySelector('main');
    mainSection.innerHTML = template;
  }
  catch (err) {
    console.error(err);
  }
};

export default renderDetail;

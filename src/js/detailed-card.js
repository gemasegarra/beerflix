import api from './api.js';

const detailedTemplate = ({ beerId, name, image, description, firstBrewed, brewersTips, contributedBy, likes, price }) => {
  return `
  <div class="detail-section">
  <div class="card" id="${beerId}">
  <div class="img-container">
    <img class="beer-pic" src="${image}" alt='bottle-pic'/>
  </div>
  <div class="description">
    <h1 class="title-section" id="beer-name">${name}</h1>
    <p class="description">${description}</p>
    <p class="year">First brewed: ${firstBrewed}</p>
    <p class="brewersTips">Brewer tip: '${brewersTips}'</p>
    <p class="contributedBy">Contributed by ${contributedBy}</p>
    <p class="likebutton">Add like! <button class="heart-button" id="heart"><i class="far fa-heart"></i></button></p>
    <p class="likes">${likes} ❤️</p>
    <p class="price">Price ${price} 💵</p>
</div>
</div> 
</div>
`
};

/* const commentTemplate = ({ comment, date }) => {
  return `<div class="container" id="comments">
    <p>${comment}</p>
    <p>${date}</p>
  </div> `
} */ // ! not working yet

const commentsFormTemplate = `
<div id="detail" class="comment-content">
<div class="container">
<h2>Comments:</h2>
<div id="commentslist">
</div>
</div>
<form id="comment-form" method="POST" class="comment-form" novalidate>
<div class="comment-input">
  <input required id="comment" placeholder="Write your comment here!" class="input" type="text">
</div>
<button type="submit" class="button-s">Add comment</button>
</form>
</div>
</div>`
// ! not functional yet

const { getDetails } = api();
const { addLike } = api();


const renderDetail = async id => {
  try {
    const detail = await getDetails(id);
    const template = detailedTemplate(detail);
    const mainSection = document.querySelector('main');
    const comments = document.querySelector('#details');
    const beerList = document.querySelector('#beerlist');
    beerList.innerHTML = "";
    comments.innerHTML = commentsFormTemplate;
    mainSection.innerHTML = template;
    const likeButton = document.querySelector('#heart');
    likeButton.addEventListener('click', async () => {
      await addLike(id);
      await renderDetail(id);
    });
  }
  catch (err) {
    console.error(err);
  }
};

export default renderDetail;

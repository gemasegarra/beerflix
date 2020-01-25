function scrolling() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('arrow-button').style.display = 'block';
  }
  else {
    document.getElementById('arrow-button').style.display = 'none';
  }
};

window.onscroll = function () {
  scrolling()
};
const button = document.querySelector('#arrow-button');
function goUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
button.addEventListener('click', goUp)


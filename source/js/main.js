const header = document.querySelector('.page-header');

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if(scrollDistance >= 1) {
    header.classList.add('page-header--fixed');
  } else{
    header.classList.remove('page-header--fixed');
  }
});

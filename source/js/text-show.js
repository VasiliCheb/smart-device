const aboutCompanyBlock = document.querySelector('.about-company');
const aboutCompanyToggle = aboutCompanyBlock.querySelector('.about-company__button');

const getTextShow = () => {

  if (aboutCompanyToggle) {
    aboutCompanyToggle.addEventListener('click', () => {
      aboutCompanyBlock.classList.toggle('about-company--opened');
    });
  } else {
    return;
  }
}

getTextShow();

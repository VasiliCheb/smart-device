const body = document.querySelector('.page__body');
const header = body.querySelector('.page-header');
const aboutCompanyBlock = body.querySelector('.about-company');
const aboutCompanyToggle = aboutCompanyBlock.querySelector('.about-company__button');

const modal = body.querySelector('.modal--close');
const modalOpenedButton = header.querySelector('.page-header__button');
const modalClosedButton = modal.querySelector('.modal__button-close');
const inputName = body.querySelector('#modal-user-name');
const pageMain = body.querySelector('.page-main');
const footer = body.querySelector('.page-footer');


body.classList.remove('page__body--nojs');


//фиксация Шапки при начале скролла
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if(scrollDistance >= 1) {
    header.classList.add('page-header--fixed');
  } else{
    header.classList.remove('page-header--fixed');
  }
});


//Модальное окно
getOpenedModal = () => {
  modal.style.display = "block";
  body.classList.add('page__body--noscroll');
  inputName.focus();
  header.setAttribute('inert', '');
  pageMain.setAttribute('inert', '');
  footer.setAttribute('inert', '');

  getClosetModal = () => {
    modal.style.display = "none";
    body.classList.remove('page__body--noscroll');
    header.removeAttribute("inert");
    pageMain.removeAttribute("inert");
    footer.removeAttribute("inert");
    modalOpenedButton.focus();
  }
}

modalOpenedButton.onclick = () => {
  getOpenedModal();
}

modalClosedButton.onclick = () => {
  getClosetModal();
}

window.onclick = (evt) => {
  if (evt.target == modal) {
    getClosetModal();
  }
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    getClosetModal();
  }
});


//открытие текста в блоке about-сompany
if (aboutCompanyToggle) {
  aboutCompanyToggle.addEventListener('click', () => {
    aboutCompanyBlock.classList.toggle('about-company--opened');
  });
}


//аккордион разделов в футере
class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item--show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item--show') : null;
        }
      }
      elHeader.parentElement.classList.toggle('accordion__item--show');
    });
  }
}

new ItcAccordion('.accordion', {
  alwaysOpen: false
});

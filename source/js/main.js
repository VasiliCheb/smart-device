const body = document.querySelector('.page__body');
const header = body.querySelector('.page-header');
const aboutCompanyBlock = body.querySelector('.about-company');
const aboutCompanyToggle = aboutCompanyBlock.querySelector('.about-company__button');


body.classList.remove('page__body--nojs');

/*фиксация шапки при начале скролла*/
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if(scrollDistance >= 1) {
    header.classList.add('page-header--fixed');
  } else{
    header.classList.remove('page-header--fixed');
  }
});


/*открытие текста в блоке about-сompany*/
if (aboutCompanyToggle) {
  aboutCompanyToggle.addEventListener('click', () => {
    aboutCompanyBlock.classList.toggle('about-company--opened');
  });
}

/*аккордион разделов в футере*/
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

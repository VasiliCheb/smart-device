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

const inputTel = body.querySelectorAll('.form__field--tel input')


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
const getOpenedModal = () => {
  modal.style.display = "block";
  body.classList.add('page__body--noscroll');
  inputName.focus();
  header.setAttribute('inert', '');
  pageMain.setAttribute('inert', '');
  footer.setAttribute('inert', '');
}

const getClosetModal = () => {
  modal.style.display = "none";
  body.classList.remove('page__body--noscroll');
  header.removeAttribute("inert");
  pageMain.removeAttribute("inert");
  footer.removeAttribute("inert");
  modalOpenedButton.focus();
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

//Маска input телефона в формате: +7(
window.addEventListener("DOMContentLoaded", () => {
  [].forEach.call(inputTel,(input) => {
    let keyCode;
    function mask(evt) {
      evt.keyCode && (keyCode = evt.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) evt.preventDefault();
      let matrix = "+7(___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, (a) => {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 4 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substring(0, this.value.length).replace(/_+/g, (a) => {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 4 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (evt.type == "blur" && this.value.length < 4)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

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

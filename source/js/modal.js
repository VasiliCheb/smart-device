const body = document.querySelector('.page__body');
const modal = body.querySelector('.modal--close');
const header = body.querySelector('.page-header');
const modalOpenedButton = header.querySelector('.page-header__button');
const modalClosedButton = modal.querySelector('.modal__button-close');
const inputName = body.querySelector('#modal-user-name');
const pageMain = body.querySelector('.page-main');
const footer = body.querySelector('.page-footer');

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

const getModalWindow = () => {
  if (modal) {

    if (modalOpenedButton) {
      modalOpenedButton.onclick = () => {
        getOpenedModal();
      }
    }

    if (modalClosedButton) {
      modalClosedButton.onclick = () => {
        getClosetModal();
      }
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

  } else {
    return;
  }
}

getModalWindow();

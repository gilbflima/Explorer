export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  visible() {
    Modal.wrapper.classList.add('visible')
  },
  invisible() {
    Modal.wrapper.classList.remove('visible')
  }
}
Modal.buttonClose.onclick = () => {
  Modal.invisible()
}
window.addEventListener('keydown', event => {
  if (event.key === 'Escape'){
    Modal.invisible()
  }
})
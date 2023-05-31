export const AlertError = {
  element: document.querySelector('.alert-error'),
  visible(){
    AlertError.element.classList.add('visible')
  },
  invisible(){
    AlertError.element.classList.remove('visible')
  }
}
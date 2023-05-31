import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber (weight) || notANumber (height)

  if (weightOrHeightIsNotANumber) {
    AlertError.visible()
    return;
  }
  
  AlertError.invisible()

  const result = IMC (weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.visible()
}
inputHeight.oninput = () => AlertError.invisible()
inputWeight.oniput = () => AlertError.invisible()
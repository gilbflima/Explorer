//Variables
const buttonTry = document.querySelector("#buttonTry")
const buttonAgain = document.querySelector("#buttonAgain")
let numberMatch = Math.ceil(Math.random()*10)//Application (choosing the number)
let attempts = 1
//callback functions
function handleTryClick(event){
  event.preventDefault()//prevent the default - send the formulary

  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value) == numberMatch){
    document.querySelector(".screen1").classList.add("show")
    document.querySelector(".screen2").classList.remove("show")

    document
      .querySelector(".screen2 h2")
      .innerText = (`You guessed right with ${attempts} chances.`)
  }
  inputNumber.value = ""
  attempts++
}
function handleAgainClick(){
  document.querySelector(".screen2").classList.add("show")
  document.querySelector(".screen1").classList.remove("show")
  attempts = 1
  numberMatch = Math.ceil(Math.random()*10)
}
//EventListener
buttonTry.addEventListener('click', handleTryClick)
buttonAgain.addEventListener('click', handleAgainClick)
const numberMatch = Math.ceil(Math.random()*10)
let attempts = 0
function handleClick(event){
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")
  attempts++
  console.log(attempts)
}
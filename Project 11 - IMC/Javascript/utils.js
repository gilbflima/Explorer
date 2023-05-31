export function notANumber (value){
  return isNaN(value) || value.trim() ==""
}
export function IMC (weight, height) {
  return (weight/((height/100)**2)).toFixed(2)
}
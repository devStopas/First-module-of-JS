
function subtraction(numberOne, numberTwo) {
  return numberTwo - numberOne
 }
  ​
const calculator = function() {
  let operator = '-'
  let total = Number()
  if (operator === '-') {
    total = subtraction(1, 2)
    console.log(`La resta es: ${total}`);
  } else if (operator === '+') {
    total = addition(1, 2)
    console.log(`La suma es: ${total}`);
  } else {
    console.error('Operador no soportado');
  }
  return undefined
}
  ​
var total = calculator(4,5,"-")


// 'Holi a todos'
// ['Holi','a','todos']
// 1-Holi 2-a 3-todos 
// 1-H      2-A     3-T
// 1-Hola   2-A     3-Todos
// ['Holi','A','Todos']
// 'Holi A Todos'

const capitalize = function (phrase) {
  let wordArray = phrase.split(' ')
  for (index in wordArray) {
      let word = wordArray[index]
      let letterCapitalize = word[0].toUpperCase()
      let wordCapitalize = `${letterCapitalize}${word.slice(1)}`
      wordArray[index] = wordCapitalize
  }
  return wordArray.join(' ')
}

console.log()

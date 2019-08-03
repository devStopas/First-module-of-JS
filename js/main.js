if ((3 === '3') || ( 3 === 3 )) {
  console.log('Si se va a ejecutar');
}

//
/*

var height = 100;

if ((height < 150) && (height >= 100)) {
  console.log('Pitufo');
} else if ((height > 170) && (height < 200)) {
  console.log('jirafa');
} else if ((height >= 150) && (height <= 170)) {
  console.log('ok');
} else {
  console.log('No seas payaso');
}
*/
// Lengt (property) return the lengt of string "Cantidad de caracteres que entrega"

var number = 1 

while( number === 1){
  console.log('si')
  number++
}

//

var name = 'David'
var lastName = 'Cermeño Moranchel'
var birthDate = '14-11-1996'
var gender = 'Hombre'
var birthCity = 'DF'

var abbreviationName = (
 lastName.substring(0, 2) +
 lastName.charAt(lastName.indexOf(' ') + 1) +
 name.charAt(0)
)
var year = birthDate.slice(-2)
var month = birthDate.slice(3, 5)
var day = birthDate.slice(0, 2)
var abbreviationGender = gender.charAt(0)


var curp = `${abbreviationName}${year}${month}${day}${abbreviationGender}${birthCity}`


//New exercise 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var i = 0


while(i < array.length){
  console.log(array[i] ** 2)
  i++
}

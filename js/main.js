//let numbers = [1,2,3,4,5,6,7,8,9,]

//numbers.map((numbers) => console.log(numbers % 2 === 0))

//numbers.forEach(item => {
//  (item % 2 === 0) ? console.log('Es par') : console.log('No es par')
//})

let phrase = ['avion','casa','Arturo','nop','lol','perro',]
let result = phrase.filter((phrase) => phrase[0] == 'a' || phrase[0] == 'A')

console.log(result)

//Retornar el total de cada uno de los elementos del {array} al cuadrado
let numbers = [1,2,3,4,5]

// inline
[2,2,3,4,5].reduce((initial, current) =>  initial + current**2, 0)

// explicit
[2,2,3,4,5].reduce((initial, current) => {
    console.log(initial, current**2)
    return initial + current**2
}, 0)   
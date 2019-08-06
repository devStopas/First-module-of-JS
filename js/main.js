//var name = "rotceH"
//var index = 5
//var normalicedName = ''
//
//do{
//  normalicedName = normalicedName + name[index]
//    index-- 
//} while (index >= 0)
//
//console.log (normalicedName)


/*  
L    I   
6 - (5 + 1) = 0 - H
6 - (4 + 1) = 1 - e
6 - (3 + 1) = 2 - c
6 - (2 + 1) = 3 - t
6 - (1 + 1) = 4 - o
6 - (0 + 1) = 5 - r
*/

//COMO SABER SI UNA PALABRA TIENE MAS DE 3 VOCALES C: 

var word = 'Palabra'
const VOWELS = ['a', 'e', 'i', 'o', 'u']
var vowelsCounter = 0

for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
    let currentLetter = word[wordIndex]
    for (let vowelIndex = 0; vowelIndex < VOWELS.length; vowelIndex++) {
        if (currentLetter === VOWELS[vowelIndex]) {
            vowelsCounter++
        }
    }
}

if (vowelsCounter >= 3) {
    console.log(`Tiene ${vowelsCounter} vocales`);
} else {
    console.error('Tiene muy pocas vocales');
}

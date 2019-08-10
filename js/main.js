/* 
Carro 

color : rojo 
capacidad : 5 personas
puertas : 

*/

//var carObj ={
//    color: 'red',
//    capacity: '5 people',
//    brand: 'Ford',
//    model: '2001',
//    doors: '4',
//    type: 'automatic'
//} 
//
//for (let auto in carObj){
//    console.table()
//}
//
//var coursesArray = [
//    {
//        'name' : 'History',
//        'courseGrade' : 8.1
//    },
//    {
//        'name' : 'Sciences',
//        'courseGrade' : 10
//    },
//    {
//        'name' : 'Geography',
//        'courseGrade' : 9.1
//    },
//    {
//        'name' : 'Math',
//        'courseGrade' : 7.5
//    },
//    {
//        'name' : 'Languages',
//        'courseGrade' : 9.6
//    },
//]
//var result = coursesArray.reduce((total, {grade} ) => total + grade, 0) / coursesArray.length

var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};
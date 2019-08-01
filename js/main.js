console.log('hellow word from file')
console.log(17 * 12 * 30)

/* TENEMOS UNA MEMORIA DE 4 GB CUANTAS FOTOS CABEN*/

var memori = 1024 /* gb */
var capacity = 4 
var image = 3 

console.log(memori * capacity / image )

/*TENEMOS 22 CUBICULOS EN CADA CUBICULO PODEMOS METER 3 CARROS Y 2 CAMIONETAS 
  - CUANTOS CUBICULOS LLENAMOS COMPLETOS 
  - CUANTAS CAMIONETAS SOBRAN
  - CUANTOS CARROS SOBRAN

camionetas = 57
carros = 130
*/

var cars = 130
var carsInside = 3
var trucks = 57
var trucksInside = 2
var cubicles = 22

console.log(cars - carsInside * cubicles )
console.log(trucks -trucksInside * cubicles) 
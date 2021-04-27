/* Typed
var test =27;
var name = "Jonnathan";
var text = false;
*/

/* Primitives
1.Number
2.String
3.Booleano
4.Undefined
5.Symbol
6.Null
*/

/*Tipos de datos por referencia
Arrays
Objetos
Funciones
Fechas
Todo lo que se pueda almacenar
*/

/*TypeScript*/

//-->Primitives
//string
const name = "Fernanda Trujillo";
console.log(typeof name);

//numbers 
const age = 27.7;
console.log(typeof age);

//boolean
const isMan = false; //true
console.log(typeof isMan);

//null
const car = null;
console.log(typeof car);

//let undefined
const example = undefined;
console.log(typeof example);

//symbol
const probeSymbol = Symbol();
console.log(typeof probeSymbol);

//-->Tipos de datos por referencia
//arrays
const sports = ['futbol', 'basketball', 'tennis'];
console.log(typeof sports);

//object
const info = {
  name : "Jonnathan",
  city : "Pasto",
  phone : 3187443454
}
console.log(typeof info);

//date
const dateToday = new Date();
console.log(dateToday);
console.log(typeof dateToday);
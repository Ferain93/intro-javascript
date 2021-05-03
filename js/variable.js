// var, let y const (tanto let como const viene de ECMAScript 6 es la que actualmente se usa)

//*var ->puede tomar varios valores con el mismo nombre en cascada
var name = "Ferain";
console.log (name);

//start variable
var number;
number = 5;
console.log (number);

//we can use number letters  _ and $ pero no recomendable porque asi con $ se inicializan variables en php. No se pueden usar numeros al inicio de las variables

//Recomendaciones
var firstName = 'Lu'; //Camel Case
var first_name = 'Fer'; //Underscore
var FirstName = "Jonth" //Pascal Case

//shif+alt+a -> Comentar en vsc 

//*let -> casi igual que var pero tiene un alcance diferente, es necesario para bloques de codigo como el de for
let nameLet = "Ferain13";
console.log (nameLet);

//start variable
let numberLet;
numberLet = 555;
console.log (numberLet);

//scope o el alcance de la variable -> cuando se utilizan bloques de codigo y se necesitan variables locales unicamente que existan allí, se utiliza let, ya que var tiene el problema de que generaliza las variables de los codigos por fuera de los bloques o ciclos

//*const -> no se puede reasignar, debe siempre asignarse su valor
const name_const = "Ferain555";
console.log (name_const);

//start variable -> no se puede en const
const number_const = 5000;
console.log (number_const);

//const para objetos ->si se pueden reasignar 
const person ={
  name: 'Fernan Webs',
  age: 35
}
console.log(person);
person.name = "Lu Almohadas"
person.age = 27
console.log (person)
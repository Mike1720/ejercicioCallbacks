// * Resolver los siguientes ejercicios de callbacks (tendrás puntos extra si creas una página con botones desde la cuál ejecutar cada uno de los ejercicios para probarlos).

//             ! FUNCION 1
// * 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.


//             ! FUNCION 2
// // 2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

// let string = "hola mundo";   //
// let number = 15;             //
// let booleano = true;         //
// let objeto = {};             //
// let array = [];              //

// const typeOfVariable = (variable, callback) => {
//     let type = typeof variable
//     return callback(variable, type)
// };
// const print = (variable, type) => {
//     return `el tipo de variable para ${variable} es ${type}`
// };

// let resultado1 = typeOfVariable(string, print)
// let resultado2 = typeOfVariable(number, print)
// let resultado3 = typeOfVariable(booleano, print)
// let resultado4 = typeOfVariable(objeto, print)
// let resultado5 = typeOfVariable(array, print)

// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);
// console.log(resultado4);
// console.log(resultado5);

//             ! FUNCION 3
// // 3.- Crear una función que reciba como argumentos, dos números y un callback. Según el callback que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números, la multiplicación de los dos números o división.

// const calculate = (a, b, callback) => callback(a, b);

// const sum = (a, b) => a + b;
// const substract = (a, b) => a - b;
// const multiplcation = (a, b) => a * b;
// const divide = (a, b) => a / b

// calculate(15, 8, sum)
// calculate(15, 8, substract)
// calculate(15, 8, multiplcation)
// calculate(15,8,divide)

//             ! FUNCION 4
// // 4.- Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas. OrdenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO

// const printString = (string, callback) => callback(string)
// const toCapitalLetter = (string) => string.toUpperCase();
// const toLowerCase = (string) => string.toLowerCase()

// printString("hola", toCapitalLetter)
// printString("mundo", toLowerCase)

//             ! FUNCION 5
// // 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

// let array1 = [15, 130, 102, 205, 120];

// const iteration = (array, callback) => {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= 120) {
//             newArray.push(array[i]);
//         };
//     };
//     return callback(newArray);
// };
// const print = (array) => {
//     return `los numeros mayores a 2 horas son ${array}`;
// };
// console.log(iteration(array1, print));

// const moreThanTwo = (array) => {
//     let numbers = array.filter(number => number > 120);
//     return numbers
// };
// moreThanTwo(array)
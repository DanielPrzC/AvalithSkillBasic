const stringA = "Rojo,Verde,Amarillo,Azul";
const stringB = "Sergio";
const stringC = "Damian";
const stringD = "Mi nombre es Damian y tengo 28 años";
// -------
let tamanioA = 0;
let cantidadLetraR = 0;
let nombreCompleto = "";
let fraseOtroNombre = "";
let posicionNombre = null;
let arregloParseado = [];

// Answers ---------------------------------------------------- //

/* Tamaño del string A */
tamanioA = stringA.length;

/* Cuantas letras R (Mayuscula o minuscula) hay en el string A */
cantidadLetraR = stringA.match(/r/ig).length;

/* Formar el nombre completo a partir de los strings B y C */
nombreCompleto = `${stringB} ${stringC}`;

/* Cambiar el nombre 'Damian' del string D con el nombre del string B */
fraseOtroNombre = stringD.replace(stringC, stringB);

/* Posicion de 'Damian' en el string D */
posicionNombre = stringD.indexOf(stringC);

/* Arreglo formado a partir del string A */
arregloParseado = stringA.split(",");

// ------------------------------------------------------------ //

console.log(tamanioA);
console.log(cantidadLetraR);
console.log(nombreCompleto);
console.log(fraseOtroNombre);
console.log(posicionNombre);
console.log(arregloParseado);

const original = ["Rojo", "Verde", "Azul", "Amarillo"];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

// Answers ---------------------------------------------------- //

/* Indice de la ubicacion en el arreglo de 'Amarillo' */
indiceAmarillo = original.indexOf("Amarillo"); 

/* Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula) */
cantidadColoresConA = original.reduce((count, current) => {
  if (current.toLowerCase().includes("a")) {
    count++;
  }
  return count;
}, 0);

/* El arreglo original sin el valor 'Azul' */
arregloSinAzul = original.filter((color) => {
  return color !== "Azul";
});

/* El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre. */
ordenadoPorCantidadLetras = original.sort((first, last) => {
  return first.length - last.length;
});

/* El arreglo original con un nuevo color al inicio del mismo. */
arregloConNuevoColorInicio = ["Violeta", ...original];

/* El arreglo original con un nuevo color al final del mismo. */
arregloConNuevoColorFin = [...original, "Violeta"];

// ------------------------------------------------------------ //

console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);

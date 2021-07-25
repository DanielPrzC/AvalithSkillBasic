const original = {
  a: 1,
  b: 2,
  c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

// Answers ---------------------------------------------------- //

let { b, ...noB } = original;

sinB = noB;

let { c } = original;

valorDeC = c;

// ------------------------------------------------------------ //

console.log(sinB);
console.log(valorDeC);

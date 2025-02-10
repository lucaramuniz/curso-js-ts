// indice        0  1  2  3  4  5  6  7  8  9
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros[0]);
const primeiroNumero = numeros[0];

// indice                    0  1  2  3  4  5  6  7  8  9
const numerosCentesimos = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

//...resto ...spread
const [primeiroCentesimo, ...resto] = numerosCentesimos;
console.log(primeiroCentesimo);
console.log(resto);

const numerosKeys = [
  //    0
  // 0  1  2
  [1, 2, 3],
  //    1
  // 0  1  2
  [4, 5, 6],
  //    2
  // 0  1  2
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numerosKeys;
console.log(lista1[0]);

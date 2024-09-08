/**
 * aritmeticos:
 * + adição / concatenação
 * - subtração
 * / divisão
 * * multiplicação
 */

//adição
const adict1 = 1;
const adict2 = 2;
console.log("Resultado da Adição:", adict1 + adict2); // adição

//subtração
const subt1 = 1;
const subt2 = 2;
console.log("Resultado da Subtração:", subt1 - subt2); // subtração

//multiplicação
const multip1 = 1;
const multip2 = 2;
console.log("Resultado da Multiplicação:", adict1 * adict2); // multiplicação

//divisão
const div1 = 1;
const div2 = 2;
console.log("Resultado da Divisão:", adict1 / adict2); // divisão

//Diferenciais

//concatenação
const concat1 = "5";
const concat2 = 1000;
console.log("Resultado da Concatenação:", concat1 + concat2); //união

//Exponeliação
const expo1 = 1;
const expo2 = 2;
console.log("Resultado do Expoente:", expo1 ** expo2); // expoente

//Resto da Divisão
const resto1 = 1;
const resto2 = 2;
console.log("Resultado do Resto da Divisão:", resto1 & resto2); //resto

/*Operação Precendencia de Orde
 * Primeiro: ()
 * Segundo: operador mais forte
 */
const ordem1 = 1;
const ordem2 = 2;
const ordem3 = 3;
const ordem4 = 4;
const ordem5 = 100;
console.log(
  "Resultado da Ordenação:",
  ordem1 + (ordem2 * ordem3) / ordem4 ** ordem5
); //ordenação

//Contador | incremento

let cont = 1;
cont++;
console.log("Resultado da Incrementação do Contador:", cont);

//Contador | Decremento
let decr = 10;
decr--;
console.log("Resultado da Decrementação do Contador:", decr);

//Contador | Incremento +1

const passo = 20;
let contador1 = 1;
contador1 = contador1 + passo;
console.log("Resultado do Incremento do Soma do Contador:", contador1);

//Contador | Incremento +1 (Simplificado)
let contador2 = 0;
contador2 += 1;
console.log(
  "Resultado do Incremento da Soma do Contador (Simplificado):",
  contador2
);

//Contador | Incremento *1 (Simplificado)
let contador3 = 10;
contador3 *= 2;
console.log(
  "Resultado do Incremento da Multiplicação do Contador (Simplificado):",
  contador3
);

//NaN - Not a Number
const nan1 = 10;
const nan2 = "Luiz";
console.log("Resultado do NaN:", nan1 * nan2);

//Convertendo o NaN para um Number
const covernan1 = 10;
const covernan2 = parseInt("5");
/* parseFloat("5.2"); para conversão decimal 
   parseInt(""); para conversão inteiro
   usar Number() para strings fornecerá apenas o typeof da variável e não conversão
*/
console.log("Resultado da Conversão de NaN:", covernan1 * covernan2);

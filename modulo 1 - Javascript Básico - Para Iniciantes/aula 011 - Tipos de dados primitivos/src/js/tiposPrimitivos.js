// string, number, undefined, null, boolean, symbol

const nome = "Carlos"; //string = texto
const num1 = 20; //int number = numero inteiro
const num2 = 20.86; // float number = numero flutuante / decimal
let nomeAluno; // undefined = sem registro pra memoria
let sobrenomeAluno = null; // nulo = sem registro pra memoria
const aprovado = true; // booleano true = logico verdadeiro
const reprovado = false; // boolean false = logico falso
console.log(typeof nome, nome); // checar o tipo da variavel, imprimir o valor
//ao imprimir valores de NULL indica que ele é um objeto, entretanto ele não é um objeto e sim um valor do objeto não definido
let a1 = 2;
const b1 = a1;
a1 = 2.1;
console.log(a1, b1);

a2 = [1, 2];
b2 = a2;
b2.push(3);
console.log(a2, b2);

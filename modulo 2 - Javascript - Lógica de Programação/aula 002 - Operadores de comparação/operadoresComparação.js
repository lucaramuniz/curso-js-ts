/*Operadores de Comparação
    > Maior Que
    >= Maior que ou igual a
    < Menor Que
    <= Menor que ou igual a
    == Igualdade (valor) * Não utilizável *
    === Igualdade estrita (valor e tipo)
    != Diferente (valor) * Não utilizável
    !== Diferente estrito (valor e tipo)
*/


console.log(10>5); //true
console.log(10>=5); //true
console.log(10>=11); //false

console.log(10<11); //true
console.log(10<=10); //true
console.log(12<=11); //false


/* com operadores de comparação SEJA igual ou diferente

dará TRUE pois o operador comparativo igualdade não restrito (==)
não saberá idenfiticará
que são tipos diferentes, apesar de mesmo valores
*/
const var1 = 10;
const var2 = '10';
const resultado1 = var1 == var2;
console.log(resultado1);

/* correção de números
dará FALSE pois o operador comparativo diferente (!==)
saberá idenfiticará
que são tipos diferentes, apesar de mesmo valores
*/
const var3 = 10; //number
const var4 = '10'; //string
const resultado2 =  var3 !== var4;
console.log(resultado2); 





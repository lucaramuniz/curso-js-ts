/* 1 Regra
    Não é possivel declarar constantes com valores reservados do motor do javascript
    ex:
    const let;
    const console;
    const if;

   2 Regra
    constantes precisam de nomes semânticos
    sequer criar constantes iniciando com números
    se possível criar constantes funcionais com letras minúsculas
    e não conter espaços ou traços
    modelo camelCase

   3 Regra
    Constantes e estrutura Case-sensitive

   4 Regra
    Não é possivel redefinidir a constante, sequer o valor dela


   5 Regra
    Não use VAR use CONST
*/

const nome = "Levi";
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
console.log(conta);

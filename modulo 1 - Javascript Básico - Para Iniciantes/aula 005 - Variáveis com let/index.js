let nome_1 = "henrique"; //variavel declarada com valor string
let nome_2; // variavel com valor indefinido
console.log(nome_1, "nasceu em 1984");
console.log("em 2000", nome_1, "conheceu maria");
console.log(nome_1, "casou-se com maria em 2012");
console.log("maria teve 1 filho com", nome_1, "em 2015");
console.log("o filho de", nome_1, "se chama eduardo");

//redefinição de valor da variavel string, recebendo um novo valor
let nome_3;
nome_3 = "joao";
console.log(nome_3);

nome_3 = "henrique";
console.log(nome_3);

/* 1 Regra
    Não é possivel declarar variaveis com valores reservados do motor do javascript
    ex:
    let let;
    let console;
    let if;
*/

/* 2 Regra
    variaveis precisam de nomes semânticos
    sequer criar com variáveis iniciando com números
    se possível criar variáveis funcionais com letras minúsculas
    e não conter espaços ou traços
    modelo camelCase
*/
let nomeCompletoDoCliente = "pedro";
console.log(nomeCompletoDoCliente);

/* 3 Regra
    Variaveis e estrutura Case-sensitive */

let nomeCliente = "Levi";
console.log(nomeCliente);
let nomecliente = "levi";
console.log(nomecliente);

/* 4 Regra
    Não é possivel redefinidir a variável, apenas o valor dela
*/

/*5 Regra
    Não use VAR use LET
*/

function saudacao(parametroNome){
    // console.log(`Bom dia, ${parametroNome}!`);
    return `Bom dia, ${parametroNome}!`;
};
saudacao("Rennan de Almeida");
const variavel = saudacao("Maurilio dos Anjos");
console.log(variavel)


function soma(x,y){
    const somaResultado = x + y;
    return somaResultado;
};
const resultado = soma(2,3);
console.log(resultado);


const raiz = function(n){return n ** 0.5;};
console.log(raiz(9));

const raizQuadrada = n => n ** 0.5;
console.log(raizQuadrada(9));

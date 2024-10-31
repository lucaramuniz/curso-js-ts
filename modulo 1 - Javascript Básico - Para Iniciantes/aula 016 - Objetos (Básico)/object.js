const pessoa_semFuncao = {
    nome: "luiz",
    sobreNome: "carvalho",
    idade: 24
}

console.log(pessoa_semFuncao.sobreNome);

function pessoa_comFuncao (nome, sobreNome, idade){
    return {nome, sobreNome, idade}
}

const pessoaID = pessoa_comfuncao("Andrew", "Xel", 22);
console.log(pessoaID.nome, pessoaID.idade);


const pessoa_comMetodo = {
    nome: "luiz",
    sobreNome: "carvalho",
    idade: 24,
    fala(){
        console.log(`ola mundo, ${this.nome} ${this.sobreNome}`);
        console.log(`a minha idade atual é ${this.idade}!`)
    },
    incrementaIdade(){
        this.idade++;
    }
}

pessoa_comMetodo.fala();
pessoa_comMetodo.incrementaID();
pessoa_comMetodo.fala();
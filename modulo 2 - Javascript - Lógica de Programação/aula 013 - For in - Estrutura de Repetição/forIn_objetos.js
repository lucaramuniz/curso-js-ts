//for in com objeto - ler as chaves do objeto
const pessoa = {
    nome: "Lucas",
    sobrenome: "Santos",
    idade: 30,
  };
  console.log(pessoa.nome);
  console.log(pessoa["sobrenome"]);
  
  const chaves = "nome";
  console.log(pessoa[chaves]);
  
  for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
  
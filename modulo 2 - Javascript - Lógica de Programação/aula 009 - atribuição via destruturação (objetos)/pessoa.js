const pessoa = {
    nome: "Lucas",
    sobrenome: "Santos",
    idade: 30,
    endereco: {
      rua: "Rua Compassion",
      numero: 320,
    },
  };
  //const { nome, sobrenome, idade } = pessoa;
  //const { nome = "", sobrenome, idade } = pessoa;
  //const { nome: accountName, sobrenome, idade } = pessoa;
  
  //console.log(accountName, sobrenome, idade);
  const {
    nome,
    endereco: { rua: R = "rua padre alfredo", numero },
    endereco,
    ...spread
  } = pessoa;
  console.log(R, numero, endereco, spread);
  
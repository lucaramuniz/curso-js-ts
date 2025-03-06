//try serve para tentar executar um bloco de código, caso ocorra um erro, o catch é executado
//o catch recebe um parâmetro que é o erro que ocorreu

try {
    console.log(naoExisto);
  } catch (error) {
    console.log("variável naoExisto não existe");
    //console.log(error);
  }
  
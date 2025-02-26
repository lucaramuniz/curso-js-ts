const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

//Lembre-se: sempre atualizar a variavel de controle (i) com a adição (++)
while (i < numeros.length) {
  let numero = numeros[i];
  /*
  exemplo 1: explicação - 
  o i++ está antes deo continue e break, tendo em vista não precisar acrescentar mais dois i++ nos IF onde tem
  o break e continue
  */
  i++;

  if (numero === 2) {
    console.log("Pulei o número 2");
    //exemplo 2: inserir SEMPRE o i++ do continue
    //i++;
    continue;
  }

  if (numero === 7) {
    console.log("Alerta!: 7 encontrado, foi descartado...");
    //exemplo 2: inserir SEMPRE o i++ do break
    //i++;
    break;
  }
  console.log(numero);
  /*exemplo 2: explicação -
  neste exemplo o terceiro i++ está no firnal do codigo, porém deve-se ter outros i++; nos IFs antes do continue e break 
  */
  //i++;
}

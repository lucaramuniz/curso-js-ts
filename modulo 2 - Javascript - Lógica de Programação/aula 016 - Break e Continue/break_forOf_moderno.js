const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue;
  }

  if (numero === 7) {
    console.log("Alerta!: 7 encontrado, foi descartado...");
    break;
  }
  console.log(numero);
}

// ---- outro exemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("Exemplo pulando o número 2");
for (let pulando2 of numeros) {
  if (pulando2 === 2) {
    console.log("Pulei o número 2");
    continue;
  }
  console.log(pulando2);
}

console.log("\nOutro número pulando numero 2 e 5");
for (let pulando2e5 of numeros) {
  if (pulando2e5 === 2 || pulando2e5 === 5) {
    if (pulando2e5 == 2) {
      console.log("Pulei o número 2");
    } else if (pulando2e5 === 5) {
      console.log("Pulei o número 5");
    }
    continue;
  }
  console.log(pulando2e5);
}

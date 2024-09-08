const nome = "Lucas",
  sobreNome = "Muniz",
  idade = 24,
  peso = 54,
  alturaEmM = 1.8;
let imc, anoNascimento;
imc = peso / (alturaEmM ^ 2);
anoNascimento = 2024 - idade;
console.log(`${nome} ${sobreNome}, tem, ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

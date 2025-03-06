//exemplo
function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("x e y precisam ser números");
    }
    //precisa do return para retornar o valor da soma
    return x + y;
  }
  
  console.log(`o valor é: ${soma(1, 2)}`);
  
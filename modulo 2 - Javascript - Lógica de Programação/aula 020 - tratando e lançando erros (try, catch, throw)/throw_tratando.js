function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new TypeError("x e y precisam ser números\n Logs do Erro:\n");
      //throw new Error("x e y precisam ser números");
      //throw new ReferenceErrorError("x e y precisam ser números");
    }
    //precisa do return para retornar o valor da soma
    return x + y;
  }
  try {
    console.log(`o valor é: ${soma(1, 2)}`);
    console.log(`o valor é: ${soma("1", 2)}`);
  } catch (error) {
    console.log(
      "Sua aplicação está dando erro, por favor entre em contato com o suporte"
    );
    console.log(error);
  }
  
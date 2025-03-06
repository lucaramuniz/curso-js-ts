function retornaHora(data) {
    if (data && !(data instanceof Date)) {
      //console.log("Não é uma instância de Date.");
      throw new TypeError("Esperando instância de Date.");
    }
    if (!data) {
      data = new Date();
    }
    return data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      //hour12: false,
    });
  }
  
  try {
    const data = new Date("01-01-1970 12:58:12");
    const hora = retornaHora(11);
    console.log("são exatamente:", hora);
  } catch (e) {
    //tratar erro
    console.log("Erro:\n", e);
  } finally {
    console.log("\n\nTenha um bom dia.");
  }
  
  //retornaHora("Hora");
  //retornaHora(new Date());
  
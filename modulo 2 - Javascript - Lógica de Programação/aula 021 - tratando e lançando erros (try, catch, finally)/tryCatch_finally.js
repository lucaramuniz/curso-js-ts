try {
    //console.log(a);
    console.log("abri arquivo");
    console.log("manipulei arquivo e gerou erro");
    console.log("fechei arquivo");
    try {
      console.log(b);
    } catch (error) {
      console.log("deu erro");
    } finally {
      console.log("FINALLY: outro finally executando");
    }
  } catch (error) {
    console.log("tratando erro");
  } finally {
    console.log("FINALLY: fechando arquivo");
  }
  
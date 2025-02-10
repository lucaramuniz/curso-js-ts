const elementos = [
    { tag: "h1", texto: "Lorem ipsum dolor sit amet"},
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
  ];
  
  const container = document.querySelector(".container");
  //const div = document.createElement("div");
  
  for (let i = 0; i < elementos.length; i++) {
    //console.log(elementos[i].tag);
    let { tag, texto } = elementos[i];
    let tagCreate = document.createElement(tag);
    //tagCreate.innerHTML = texto;
    let textoCreate = document.createTextNode(texto);
    tagCreate.appendChild(textoCreate);
    //div.appendChild(tagCreate);
    //console.log(tag);
    container.appendChild(tagCreate);
  }
  //container.appendChild(div);
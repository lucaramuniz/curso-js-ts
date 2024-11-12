const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("Evento previnido");
  // setResultado("Olá Mundo");
});

function criaP() {
  const p = document.createElement("p");
  return p;
}
function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  //const p = document.createElement("p");
  // p.classList.add("paragrafo-resultado");
  // p.innerHTML = "qualquer coisa";
  const p = criaP();
  resultado.appendChild(p);
}

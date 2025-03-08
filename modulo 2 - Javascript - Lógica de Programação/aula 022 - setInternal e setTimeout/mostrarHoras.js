function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
      hour12: false
    });
  }

//console.log(mostrarHora());
const horario = setInterval(function() {
  console.log(mostrarHora());
}, 1000);

setTimeout(function(){
  clearInterval(horario);
},3000);

setTimeout(function(){
  console.log('Olá mundo!');
}, 5000);
function Aleatorio(min, max) {
    const Aleatorio = Math.random() * (max - min) + min;
    return Math.floor(Aleatorio);
  }
  const min = 1;
  const max = 50;
  let numeroAleatorio = Aleatorio(min, max);
  //console.log(numeroAleatorio);
  
  while (numeroAleatorio !== 10) {
    numeroAleatorio = Aleatorio(min, max);
    console.log(numeroAleatorio);
  }
  
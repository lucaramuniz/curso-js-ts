<<<<<<< HEAD
function Aleatorio(min, max) {
    const Aleatorio = Math.random() * (max - min) + min;
    return Math.floor(Aleatorio);
  }
  const min = 1;
  const max = 50;
  let numeroAleatorio = Aleatorio(min, max);
  //console.log(numeroAleatorio);
  
  while (numeroAleatorio !== 10) {
    // numeroAleatorio = Aleatorio(min, max);
    console.log(numeroAleatorio);
    }
do {
    numeroAleatorio = Aleatorio(min,max);
    console.log(numeroAleatorio);
} while(numeroAleatorio !==10);
  
=======
function Aleatorio(min, max) {
    const Aleatorio = Math.random() * (max - min) + min;
    return Math.floor(Aleatorio);
  }
  const min = 1;
  const max = 50;
  let numeroAleatorio = 10;
  //let numeroAleatorio = Aleatorio(min,max)
  //console.log(numeroAleatorio);
  
  while (numeroAleatorio !== 10) {
    // numeroAleatorio = Aleatorio(min, max);
    console.log(numeroAleatorio);
    }


do {
    // numeroAleatorio = Aleatorio(min,max);
    console.log(numeroAleatorio);
} while(numeroAleatorio !==10);
  
>>>>>>> dc79b294ee0c1a1818508c2f39f09a38f10640a0
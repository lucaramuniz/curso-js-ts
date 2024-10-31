function identidade(){
    const form = window.document.querySelector('.form');
    const resultado = window.document.querySelector('.resultado');
    const pessoas = [];

    //antiga forma
/*    form.onsubmit = function(event){
        event.preventDefault();
        window.alert(1);
        console.log("Foi enviado!");
    };
*/
    //forma atual
//    let cont = 1;
    function receptEventForm(event){
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

/*
    console.log(nome.value, sobrenome.value, peso.value, altura.value);
    event.preventDefault();
        console.log(`${cont} Form não foi enviado!`);
        cont++;
*/    
}
    form.addEventListener("submit", receptEventForm);

}
identidade();
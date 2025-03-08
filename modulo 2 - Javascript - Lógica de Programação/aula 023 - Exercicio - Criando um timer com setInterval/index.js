const elements = [
    {tag : "h1", text: "Timer"},
    {tag : "p", text: "00:00:00", id : "timer", class: "watch"},
    {tag : "button",text: "iniciar", id: "start", class: "start"},
    {tag : "button",text: "parar", id: "stop", class:"stop"},
    {tag : "button",text: "resetar", id: "reset", class:"reset"},    
]

const container = document.querySelector(".container");
const div = document.createElement("div");
for (let i =0;i<elements.length;i++){
    let {tag, text, class:className, onclick} = elements[i];
    let createTag  = document.createElement(tag);
    if (text) {
        createTag.textContent = text;
    }
    //caso implementar, necessario inserir id na let {} = elements[i];
    // if (id) {
    //    createTag.id = id;
    // }
    
    if (className) {
     createTag.className = className;
    }
    
    div.appendChild(createTag);
    // createTag.innerHTML=text;
    // let createTextNode = document.createTextNode(text);
    // div.appendChild(createTag);
    //createTag.appendChild(createTextNode);
    //container.appendChild(createTag);


    
}

//codigo inteligente
// elements.forEach(elementConfig => {
//     const element = document.createElement(elementConfig.tag);
  
//     if (elementConfig.text) {
//       element.textContent = elementConfig.text;
//     }
  
//     if (elementConfig.id) {
//       element.id = elementConfig.id;
//     }
  
//     if (elementConfig.class) {
//       element.className = elementConfig.class;
//     }
  
//     if (elementConfig.onclick) {
//       element.onclick = new Function(elementConfig.onclick);
//     }
  
//     div.appendChild(element);
//   });
  
container.appendChild(div);

function configTimer(){
    function showTimer(seconds){
        let date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-Br',{
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    const watch = document.querySelector(".watch");
    // const start = document.querySelector(".start");
    // const stop = document.querySelector(".stop");
    // const reset = document.querySelector(".reset");
    let seconds = 0;
    let timer;
    
    function startTimer(){
        timer = setInterval(() => {
            seconds++;
            watch.innerHTML = showTimer(seconds);
        }, 1000);
    }
    document.addEventListener('click',function(e) {
        const el = e.target;
        if(el.classList.contains('start')){
            watch.classList.remove("paused")
            clearInterval(timer);
            startTimer();
        }
        if(el.classList.contains('stop')){
            clearInterval(timer);
            watch.classList.add("paused");
        }
        if(el.classList.contains('reset')){
            watch.classList.remove("paused")
            clearInterval(timer);
            watch.innerHTML = '00:00:00'
            seconds = 0;
        }
        
    })
    
    // start.addEventListener('click',function(event){
    //     watch.classList.remove("paused")
    //     clearInterval(timer);
    //     startTimer();
    // });
    
    // stop.addEventListener('click',function(event){
    //     clearInterval(timer);
    //     watch.classList.add("paused");
    
    // });
    // reset.addEventListener('click',function(event){
    //     clearInterval(timer);
    //     watch.innerHTML = '00:00:00'
    //     seconds = 0;
    // });
}
configTimer();
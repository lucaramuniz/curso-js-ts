const elements = [
    {tag : "h1", text: "Lista de Tarefas"},
    {tag : "p", text: "", type:'text'},
    {tag : "input",text: "", class: "input-tarefa"},
    {tag : "button",text: "Adicionar uma tarefa", class:"btn-tarefa"},
    {tag : "ul", text:"", class:"tarefas"},
]

const container = document.querySelector(".container");

const div = document.createElement("div");
let pElement; // Variável para armazenar o elemento <p>

for (let i = 0; i < elements.length; i++) {
    let { tag, text, class: className, type } = elements[i];
    let createTag = document.createElement(tag);
    if (text) {
        createTag.textContent = text;
    }
    if (className) {
        createTag.className = className;
    }
    if (type) {
        createTag.type = type;
    }

    if (tag === 'p') { 
        pElement = createTag; // Guarda o elemento <p> na variável
        div.appendChild(pElement); // Adiciona o <p> ao div
    } else if (pElement) {
        pElement.appendChild(createTag); // Adiciona os elementos seguintes ao <p>
    } else {
        div.appendChild(createTag); // Adiciona o <h1> ao div
    }
}

container.appendChild(div);

const tarefaInput = document.querySelector(".input-tarefa");
const tarefaBtn = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");


function liCria() {
    const li = document.createElement('li');
    return li;
    
}
tarefaInput.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!tarefaInput.value) return;
        tarefaCria(tarefaInput.value);
        tarefaInput.value = '';
    }
})
function botaoCriaApagar(li) {
    li.innertext += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.classList.add('Apagar');
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esse topico')
    li.appendChild(botaoApagar);
}

function tarefaLimpa(textoInput) {
    tarefaInput.value = '';
    tarefaInput.focus();
    
}

function tarefaCria(textoInput) {
    const li = liCria();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    tarefaLimpa();
    botaoCriaApagar(li);
}
tarefaBtn.addEventListener('click',()=>{if(!tarefaInput.value) return;tarefaCria(tarefaInput.value);
    tarefaInput.value = '';});

document.addEventListener('click',(e)=>{
    const el = e.target;

});

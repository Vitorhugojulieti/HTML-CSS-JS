//componentes para criar task
btnNewTask = document.querySelector('#btnNewTask');
formTask = document.querySelector('#formTask');
inputTask = document.querySelector('#fieldTask');
//container tasks
containerTasks = document.querySelector('.tasks-content');
//btn exclui todas
btnClearAll = document.querySelector('#btnClear');
//msg erro componente
spanMessage = document.querySelector('.message');
//total tasks componente
spanTotal = document.querySelector('#totalTasks');


//evitando envio de formulario
formTask.addEventListener("submit", (e)=>{
    e.preventDefault();
})

//recebendo dados do input e criando nova task
btnNewTask.addEventListener("click",()=>{
    let valueInput = inputTask.value;

    //validando se não está vazio ou null
    if(valueInput == '' || valueInput == null){
        spanMessage.classList.remove('green');
        spanMessage.innerText = "Campo vazio!";
    }else{
        let task = document.createElement('div');
        task.setAttribute("onClick", "checkTask(this)");
        task.setAttribute("id", idGenerate());
        task.className = 'task border-radius-15 display-flex flex-between-x flex-center-y';
        task.innerHTML =  `<i class="fa-regular fa-square text-black"></i>
        <h2 class="text-normal">${valueInput}</h2>
        <button onclick="removeTask(${idGenerate()})"><i class="fa-solid fa-trash-can text-black"></i></button>`;

        containerTasks.appendChild(task);
        spanMessage.classList.add('green');
        spanMessage.innerText = "Tarefa adicionada!";
        inputTask.value = '';
        countTask();
    }
})

//funcao para dar check na task
function checkTask(task){
    let i = task.children[0];

    //metodo indexOf retorna a posicao de uma string dentro da outra, nao exisitindo retorna -1
    if(task.className.indexOf("complete") != -1){
        task.classList.remove('complete');
        i.classList.add('fa-square');
        i.classList.remove('fa-square-check');
        countTask();
        spanMessage.innerText = "";
    }else{
        task.classList.add('complete');
        i.classList.remove('fa-square');
        i.classList.add('fa-square-check');
        countTask();
        spanMessage.innerText = "";
    }
}


//funcao para gerar id para task
function idGenerate(){
    let tasks = document.querySelectorAll('.task');
    lastTask = tasks[tasks.length -1];

    if(tasks.length != 0){
        return parseInt(lastTask.getAttribute('id')) +1;
    }else{
        return 1;
    }
    
}


//funcao para excluir task
function removeTask(id){
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(element => {
        if(element.getAttribute('id') == id){
            containerTasks.removeChild(element);
        }
    });

    countTask();
}

function removeAll(){
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(element => {
        containerTasks.removeChild(element);
    });
    countTask();
}

function countTask(){
    spanTotal.innerText = (document.querySelectorAll('.task').length - document.querySelectorAll('.complete').length);
}
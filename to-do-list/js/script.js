//componentes para criar task
const btnNewTask = document.querySelector('#btnNewTask');
const formTask = document.querySelector('#formTask');
const inputTask = document.querySelector('#fieldTask');
//container tasks
const containerTasks = document.querySelector('.tasks-content');
//btn exclui todas
const btnClearAll = document.querySelector('#btnClear');
//msg erro componente
const spanMessage = document.querySelector('.message');
//total tasks componente
const spanTotal = document.querySelector('#totalTasks');

//funcao para setar mensagem
function setMessage(msg = null, color){
    console.log('passoi');

    if(msg === null){
        spanMessage.innerText = '';
    }else{
        spanMessage.innerText = msg;
        if(color == 1){
            spanMessage.classList.remove('red');
            spanMessage.classList.add('green');
        }else{
            spanMessage.classList.remove('green');
            spanMessage.classList.add('red');
        }
    }
}

//evitando envio de formulario
formTask.addEventListener("submit", (e)=>{
    e.preventDefault();
})

//recebendo dados do input e criando nova task
function createTask(value = null){

    let valueInput;

    if(value === null){
        valueInput = inputTask.value;
    }else{
        valueInput = value;
    }

    //validando se não está vazio ou null
    if(valueInput == '' || valueInput == null){
        setMessage('Campo vazio!',2);
    }else{
        let task = document.createElement('div');
        task.setAttribute("onClick", "checkTask(this)");
        task.setAttribute("id", idGenerate());
        task.className = 'task border-radius-15 display-flex flex-between-x flex-center-y';
        task.innerHTML =  `<i class="fa-regular fa-square text-black"></i>
        <h2 class="text-normal">${valueInput}</h2>
        <button onclick="removeTask(${idGenerate()})"><i class="fa-solid fa-trash-can text-black"></i></button>`;

        containerTasks.appendChild(task);
        inputTask.value='';
        setMessage('Tarefa adicionada!',1);
        countTask();
        saveTasks();
    }
}

//funcao para dar check na task
function checkTask(task){
    let i = task.children[0];

    //metodo indexOf retorna a posicao de uma string dentro da outra, nao exisitindo retorna -1
    if(task.className.indexOf("complete") != -1){
        task.classList.remove('complete');
        i.classList.add('fa-square');
        i.classList.remove('fa-square-check');
        countTask();
        // setMessage();
    }else{
        task.classList.add('complete');
        i.classList.remove('fa-square');
        i.classList.add('fa-square-check');
        countTask();
        // setMessage();
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

    setMessage('Tarefa removida!',1);
    countTask();
    saveTasks();
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

//trabalhando com localStorage

//funcao para salvar em localStorage
function saveTasks(){
    let tasks = document.querySelectorAll('.task');
    let tasksContent = [];

    tasks.forEach(task =>{
        tasksContent.push(task.innerText);
    });
    localStorage.setItem('tasks', JSON.stringify(tasksContent));
}

//funcao para buscar tasks no localStorage
function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task =>{
        createTask(task);
    })
}
getTasks();
setMessage();
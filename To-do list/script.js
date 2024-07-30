// loading screen 
var loader = document.getElementById("loading-screen");
var wrap = document.getElementById("wrapper");

function timing(){
loader.style.display = "none"
}
setTimeout(timing,3000);

setTimeout(() =>{
wrap.style.display = "block"
},3000);

//typing just do it text
function typing(){
    var typed = new Typed(".typing",{
        strings : ["Get Started"],
        typeSpeed :150,
        backSpeed :150,
        looped : "true"
    })
}
setTimeout(typing,2800);


const standardTheme = document.querySelector('.standard-theme');
const lightTheme = document.querySelector('.light-theme');
const darkerTheme = document.querySelector('.darker-theme');



function changeTheme(color) {

    // to change theme of background
    wrap.classList.remove("standard")
    document.body.className = color;
    

    // to change theme of input field
    document.querySelector('input').className = `${color}-input`;


    // to change theme of all the buttons
    document.querySelectorAll('button').forEach(button => {
        Array.from(button.classList).some(item => {
            if (item === 'check-btn') {
              button.className = `check-btn ${color}-button`;  
            } else if (item === 'delete-btn') {
                button.className = `delete-btn ${color}-button`; 
            } else if (item === 'todo-btn') {
                button.className = `todo-btn ${color}-button`;
            }
            else if (item === 'form_btn') {
                button.className = `form_btn ${color}-button`;
            }
        });
    });

    document.getElementById('priority').className = `${color}-button`;
}


standardTheme.addEventListener('click', () => changeTheme('standard'));
lightTheme.addEventListener('click', () => changeTheme('light'));
darkerTheme.addEventListener('click', () => changeTheme('darker'));



//working of todo app

const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("taskList");
const priorityInput = document.getElementById("priority");


const taskList = document.getElementById("taskList");
const submitBtn = document.getElementById("submitBtn");
const editTaskBtn = document.getElementById("editTask");

const priorityColors = {
    High: "task-priority-High",
    Medium: "task-priority-Medium",
    Low: "task-priority-Low",
    Completed: "task-completed",
};

const priorityValues = {
    High: 3,
    Medium: 2,
    Low: 1,
};


editTaskBtn.addEventListener("click", (e) => {
    handleEditClick(e);
});

submitBtn.addEventListener("click", (e) => {
    addItem(e);
});

taskList.addEventListener("click", handleItemClick);


function pushNotifytaskerror() {
    new Notify({
        status: 'error',
        title: 'No task',
        text: 'Please enter a task',
    })
}

function pushNotifyPriorityerror() {
    new Notify({
        status: 'error',
        title: 'No priority',
        text: 'Please set the priority for the task',
    })
}

function addItem(e) {
    e.preventDefault();
    
    const newTaskTitle = document.getElementById("task-input").value;
    const priority = document.getElementById("priority").value;

    //form validation code
    if (!newTaskTitle) {
        pushNotifytaskerror();
      return false;
    }

    if (!priority) {
        pushNotifyPriorityerror();
      return false;
    }
  
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add(`task-priority-${priority}`);
    listContainer.appendChild(li);

    let div1 = document.createElement("div");
    div1.classList.add("result-content");
    
    let input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.id = "task-check";
    input1.name = "task-checkk"
    div1.appendChild(input1);

    let label = document.createElement("label");
    label.id = "result-desc";
    label.for = "task-checkk"
    label.innerHTML=`${newTaskTitle}`;
    div1.appendChild(label);
    savelocal1(label.innerHTML);

    let delIcon = document.getElementById("del-icon");
    let iconDiv = document.getElementById("loricon");
    const cloneDel = delIcon.cloneNode(true);
    iconDiv.appendChild(cloneDel);
    let delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.id = "trash-btn";
    delBtn.appendChild(delIcon);
    
    div1.appendChild(delBtn);

    let editIcon = document.getElementById("edit-icon");
    let cloneEdit = editIcon.cloneNode(true);
    iconDiv.appendChild(cloneEdit);
    let editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.id = "edit-btn";
    editBtn.appendChild(editIcon);
    
    div1.appendChild(editBtn);
    

    li.appendChild(div1);

    let div2 = document.createElement("div");
    div2.id ="task-priority-div";
    div2.style.position ="realtive";
    div2.style.height = "100%";
    div2.style.width = "100%";

    let para2 = document.createElement("p");
    para2.id = "task-priority";
    para2.innerHTML=`${priority}`;
    div2.appendChild(para2);
    li.appendChild(div2);
    savelocal2(para2.innerHTML);

    //clearing input and priority field after displaying task
    document.getElementById("task-input").value="";
    document.getElementById("priority").value = "";

}

function handleItemClick(event){
    const item = event.target;

    if(item.id==="trash-btn"){
    const butt = item.parentElement.parentElement;
    butt.remove();
    }

    if(item.id==="del-icon"){
        const butt = item.parentElement.parentElement.parentElement;
        butt.remove();
    }

    if(item.id==="edit-btn"){
        const parentdiv = item.parentElement;
        document.getElementById("task-input").value = parentdiv.childNodes[1].innerHTML;
        console.log(parentdiv.childNodes);

        const parentdiv2 = item.parentElement.parentElement;
        document.getElementById("priority").value = parentdiv2.childNodes[1].childNodes[0].innerHTML;
        console.log(parentdiv2.childNodes);

        parentdiv2.remove();
    }

    if(item.id==="edit-icon"){

        const parentdiv2 = item.parentElement.parentElement;
        document.getElementById("task-input").value = parentdiv2.childNodes[1].innerHTML;
        console.log(parentdiv2.childNodes);

        const parentdiv = item.parentElement.parentElement.parentElement;
        document.getElementById("priority").value = parentdiv.childNodes[1].childNodes[0].innerHTML;
        console.log(parentdiv.childNodes);

        parentdiv.remove();
    }    
}


function savelocal1(todo){
    //Check: if item/s are there;
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function savelocal2(todo){
    //Check: if item/s are there;
    let todos2;
    if(localStorage.getItem('todos2') === null) {
        todos2 = [];
    }
    else {
        todos2 = JSON.parse(localStorage.getItem('todos2'));
    }

    todos2.push(todo);
    localStorage.setItem('todos2', JSON.stringify(todos2));
}


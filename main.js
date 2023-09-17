const tasks = document.getElementById('tasks-container');
const  addTask = document.querySelector('.add-task');
const  input = document.getElementById('entered-task');


//adding event to addTask
addTask.addEventListener('click', () => {
    
    //creating a div element for new tasks
    let taskBox = document.createElement('div');
    let taskText= document.createElement('div');
    taskBox.classList.add('task-box');
    taskText.classList.add('task-text');
    let newTask = document.createElement('input');

    
    

    //creating a check button
    let btns = document.createElement('div');
    function addButton() {
        
        //creating a check button
        let checkBtn = document.createElement("button");
        checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkBtn.classList.add('check-btn');
        btns.appendChild(checkBtn)
        checkBtn.addEventListener('click', function () {
            newTask.style.textDecoration = "line-through";
        });

        

        //creating a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; 
        deleteBtn.classList.add('delete-btn');
        btns.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => { taskBox.remove() })
    };

    addButton()
   
    //confirming if input contain a value
    if (input.value == "") {
        alert('Enter a Task')
        
    }else {
        taskText.appendChild(newTask)
        taskBox.appendChild(taskText)
        taskBox.appendChild(btns)
        tasks.appendChild(taskBox)
        newTask.value = input.value
    }

    //editting task
    newTask.addEventListener('click', ()=> {
        btns.innerHTML = ''
        newTask.style.textDecoration = "none";

        //creating editting button
        let editBtn = document.createElement('button');
        editBtn.innerText = '+'
        editBtn.classList.add('add-task')
        btns.appendChild(editBtn)
        
        //adding event to edit button
        editBtn.addEventListener('click', ()=> { 
            btns.innerHTML = ""
            addButton() 
         });
        
        
    })

    //increasing input width
    let len = newTask.value
    input.value = '';
    if (len.length > 7) {
        newTask.style.width = '120px';
    }
})
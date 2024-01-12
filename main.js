const tasks = document.getElementById("tasks-container");
const addTask = document.querySelector(".add-task");
const input = document.getElementById("entered-task");

//adding event to addTask
addTask.addEventListener("click", addItem);

let storedData = JSON.parse(localStorage.getItem("storedTask")) || [];

window.addEventListener('load', ()=> {
    console.log(storedData.length);
    console.log(localStorage.getItem("storedTask").length);
    storedData.length === 0 ? '' : displayTask()
})

//  still having issue when load
function addItem() {
   

    //confirming if input contain a value

    if (input.value == "") {
        alert("Enter a Task");
    } else {
        // localStorage.removeItem('storedTask');
        let lastest = input.value;
        storedData.push(lastest);
        localStorage.setItem("storedTask", JSON.stringify(storedData));

        console.log(storedData);
        displayTask();

        
    }

   
}

//  creating a check button
      let btns = document.createElement("div");
      function addButton(item1, item2, item3) {
        //creating a check button
        let checkBtn = document.createElement("button");
        checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkBtn.classList.add("check-btn");
        item3.appendChild(checkBtn);
        checkBtn.addEventListener("click", function () {
          item1.style.textDecoration = "line-through";
        });

        //creating a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteBtn.classList.add("delete-btn");
        item3.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            item2.remove();
            storedData = storedData.filter(del => del !== item1.value)
            storedData.length < 1 ? localStorage.removeItem('storedTask') : ''
            
            console.log(storedData)
          
        });
      }


function displayTask() {
    //  let storedData = JSON.parse(localStorage.getItem("storedTask")) || [];

    tasks.hasChildNodes ? (tasks.innerHTML = "") : "";
    storedData.forEach((task) => {

        //creating a div element for new tasks
        let taskBox = document.createElement("div");
        let taskText = document.createElement("div");
        let newTask = document.createElement("input");
        let btns = document.createElement("section");

        taskBox.classList.add("task-box");
        taskText.classList.add("task-text");

        
        addButton(newTask, taskBox, btns)


        newTask.value = task;

        // appending Element
        taskText.appendChild(newTask);
        taskText.appendChild(btns);
        console.log(storedData);
        taskBox.appendChild(taskText);
        tasks.appendChild(taskBox);


        //editting task
        newTask.addEventListener("click", () => {
            btns.innerHTML = "";
            newTask.style.textDecoration = "none";
    
            //creating editting button
            let editBtn = document.createElement("button");
            editBtn.innerText = "+";
            editBtn.classList.add("add-task");
            btns.appendChild(editBtn);
    
            //adding event to edit button
            editBtn.addEventListener("click", () => {
                btns.innerHTML = "";
                addButton(newTask, taskBox, btns)
                ;
            });
        });
    
        //increasing input width
        let len = newTask.value;
        input.value = "";
        if (len.length > 7) {
            newTask.style.width = "120px";
        }
    });

}

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

// window.onload = displayTask()


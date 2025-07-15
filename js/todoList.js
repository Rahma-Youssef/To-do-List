let taskInput = document.querySelector('#task-input');
let addBtn = document.querySelector('#addBtn');
let updateBtn = document.querySelector('#updateBtn');
let tasksDiv = document.querySelector('#tasks').innerHTML;



let ArrayOfTasks = []

if (localStorage.getItem("Tasks") != null) {

    ArrayOfTasks = JSON.parse(localStorage.getItem("Tasks"))

    showTask()
}

addBtn.addEventListener('click', addTask);

function addTask() {
    let task = {
        name: taskInput.value
    }

    ArrayOfTasks.push(task)

    localStorage.setItem("Tasks", JSON.stringify(ArrayOfTasks))

    showTask()
    clear()

}

function showTask() {

    let tasksDiv = ""

    for (let i = 0; i < ArrayOfTasks.length; i++) {

        tasksDiv += `
         <tr>
             <td class="fw-semibold">${i + 1}</td>
             <td class="fw-medium">${ArrayOfTasks[i].name}</td>
             <td><i class="fa-solid fa-pen-nib fs-5 text-warning" onclick="preUpdate(${i})"></i></td>
             <td><i class="fa-solid fa-trash-can fs-5 text-danger" onclick="deleteTask(${i})" ></i></td>
        </tr>           
    `
 
    }
           document.querySelector('#tasks').innerHTML = tasksDiv
}


function deleteTask(index) {
    ArrayOfTasks.splice(index , 1);
    localStorage.setItem("Tasks", JSON.stringify(ArrayOfTasks));

    showTask();
}


function clear() {
    taskInput.value = ""
}

let mainindex;

function preUpdate(index) {
    taskInput.value = ArrayOfTasks[index].name

    addBtn.classList.add("d-none")
    updateBtn.classList.replace("d-none", "d-block")

    mainindex = index
}

updateBtn.addEventListener('click', updateTask);

function updateTask() {
    let task = {
        name: taskInput.value
    }

    ArrayOfTasks.splice(mainindex, 1, task)
    localStorage.setItem("Tasks", JSON.stringify(ArrayOfTasks))

    updateBtn.classList.add("d-none")
    addBtn.classList.replace("d-none", "d-block")

    showTask()
    clear()
}












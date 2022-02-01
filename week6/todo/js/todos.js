// constants for the Dom elements
const list = document.getElementById('taskList');
const form = document.getElementById('form');
const newTask = document.getElementById('newTask');
const addButton = document.getElementById('add-btn');
const activeButton = document.getElementById('active-btn');
const allButton = document.getElementById('all-btn');
const completedButton = document.getElementById('completed-btn');
const taskStatus = document.getElementById('status');
const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
let tasks = localStorage.getItem("tasks") !== null ? localStorageTasks : [];

//event listeners
addButton.addEventListener("click", addTask);
allButton.addEventListener("click", showAll)
activeButton.addEventListener("click", showActive);
completedButton.addEventListener("click", showCompleted);

function addListItemHTML(task) {
    const taskListItem = document.createElement("li");
    taskListItem.innerHTML = `<input type="checkbox" id="status" ${task.completed === true ? "checked" : ""
        } onclick="updateTask(${task.id})"/>
      <label class="labelForCheck" for="idinput">${task.content
        }</label> <button class="delete-btn" onclick="removeTask(${task.id
        })">X</button>`
    list.appendChild(taskListItem)
}
//changes button color
function init() {
    list.innerHTML = "";
    tasks.forEach(addListItemHTML);
    countTasksLeft()
    crossoutCompleted()
    document.getElementById("completed-btn").style.border = '0';
    document.getElementById("active-btn").style.border = '0';
    document.getElementById("all-btn").style.border = 'medium solid #36454F';
}

//saves to local storage
function localStorageSave() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage);
    countTasksLeft(addListItemHTML);
}

//changes color when selected and active
function showActive() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === false);
    filteredTasks.forEach(addListItemHTML);
   
    document.getElementById("active-btn").style.border = 'medium solid #36454F';
    document.getElementById("completed-btn").style.border = '0';
    document.getElementById("all-btn").style.border = '0';


  
}
//shows every item
function showAll() {
    init();
}
//shows just the completed list
function showCompleted() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === true);
    filteredTasks.forEach(addListItemHTML);

    document.getElementById("completed-btn").style.border = 'medium solid #36454F';
    document.getElementById("active-btn").style.border = '0';
    document.getElementById("all-btn").style.border = '0';
   



}
// render
function updateTask(id) {
    const tasksIndex = tasks.map((transaction) => transaction.id);
    const index = tasksIndex.indexOf(id);
    tasks[index].completed = !tasks[index].completed;
   
    localStorageSave();
    init();
}
//remove old
function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    localStorageSave();
    init();
}
//add new
function addTask(event) {
    event.preventDefault();
    const task = {
        id: Date.now(),
        content: newTask.value,
        completed: false,
    };
    tasks.push(task);
    console.log(`tasks variable is ${tasks}`);
    newTask.value = "";
    console.log(`task variable is ${task}`);
    addListItemHTML(task);
    localStorageSave();
    countTasksLeft();
}

//for counter
function countTasksLeft() {
    document.getElementById("tasks-left").innerText = `${tasks.filter((task) => task.completed === false).length} Tasks Left` ;

}

//crosses out
function crossoutCompleted(){
   
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   checkboxes.forEach(element => {
       element.style.textDecoration = 'line-through';
       
   });
}


init()
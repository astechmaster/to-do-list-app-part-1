// Gating a User name
// const user = prompt("Enter your name") || "user";
const user = "user";

// Function to load Old Task Lists from localStorage
function loadOldTaskList() {
  let allTasks = JSON.parse(localStorage.getItem(user)) || [];
  if (allTasks.length) {
    allTasks.forEach((element, index) => {
      addTodoItem(element, index);
    });
  }
}

// Function to add a new task item (For showing in DOM)
function addTodoItem(task, index) {
  let todoList = document.getElementById("todoLists");
  let newTodoList = document.createElement("li");
  newTodoList.textContent = task;
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteTask(index);
  });
  newTodoList.appendChild(deleteButton);
  todoList.appendChild(newTodoList);
}

// Function to add a new task
function addTodo() {
  var todoInput = document.getElementById("todoInput").value;
  if (todoInput.trim() !== "") {
    var todoLists = JSON.parse(localStorage.getItem(user)) || [];
    todoLists.push(todoInput);
    saveTodoTasks(todoLists);
    addTodoItem(todoInput, todoLists.length - 1);
    document.getElementById("todoInput").value = "";
  }
}

// Function to save Todo Tasks to localStorage
function saveTodoTasks(task) {
  localStorage.setItem(user, JSON.stringify(task));
}

// Function to delete a task
function deleteTask(index) {
  var tasks = JSON.parse(localStorage.getItem(user)) || [];
  tasks.splice(index, 1);
  saveTodoTasks(tasks);
  renderTasks();
}
// Function to render todos
function renderTasks() {
  var todoList = document.getElementById("todoLists");
  todoList.innerHTML = "";
  loadOldTaskList();
}

// Load load Old Task List when the page loads
loadOldTaskList();

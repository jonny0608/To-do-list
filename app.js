let tasks = [];
let completed = [];

document.getElementById("taskInput").focus();

document.getElementById("taskInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task !== "") {
    tasks.push(task);
    completed.push(false);
    input.value = "";
    input.focus();
    displayTasks();
  }
}

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.className = "list-group-item";

    if (completed[i] === true) {
      li.classList.add("completed");
    }

    let span = document.createElement("span");
    span.className = "task-text";
    span.innerHTML = tasks[i];

    let button = document.createElement("button");
    button.className = "btn btn-success btn-sm";
    button.innerHTML = "✔";

    button.onclick = function() {
      tasks.splice(i, 1);
      completed.splice(i, 1);
      displayTasks();
    };

    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
  }

  updateCount();
}

function updateCount() {
  let done = 0;

  for (let i = 0; i < completed.length; i++) {
    if (completed[i] === true) {
      done++;
    }
  }

  document.getElementById("taskCount").innerHTML = done + "/" + tasks.length + " done";
}

function resetTasks() {
  tasks = [];
  completed = [];
  displayTasks();
}
let tasks = []; // Empty array to hold tasks

document.getElementById("addTaskBtn").addEventListener('click', function () {
    // get the value of the input field
    let taskInput = document.getElementById("taskInput").value;
    // check if input field is empty
    if (taskInput) {
        //add the task to the array
        tasks.push(taskInput);
        // clear the input field 
        document.getElementById("taskInput").value = "";
        //update task list display
        displayTasks();
    }
});

function displayTasks() {
    //select the task list from HTMl
    let taskList = document.getElementById("taskList");
    //clear existing tasks
    taskList.innerHTML = '';
    //loop through each task in the array and create a list item for each
    tasks.forEach((task, index) => {
        //Create a new list element for each task (li)
        let li = document.createElement('li');

        //add styling 
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        );
        //set the inner HTML of the list item to the task text
        li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'>✓</button>`;
        //append the list item to the task list in HTML
        taskList.appendChild(li);
    })


    //append the list item to the task list in HTML

}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

document.getElementById("clearTasksBtn").addEventListener('click', function () {
    tasks = [];
    displayTasks();
});

// remove Task on click of the check mark button add a counter o tasks completed and display it on the page.


let completedTasks = 0;
const completedTasks = taskCount;
const display = document.getElementById("taskCount");

document.getElementById("removeTask").addEventListener('click', () => {
    taskCount++;
    display.textContent = `Tasks Completed: ${completedTasks}`;
});
console.log(`Tasks Completed: ${completedTasks}`);

//Have to fix the counter for completed task and the remember to add the counter for the total number of tasks.
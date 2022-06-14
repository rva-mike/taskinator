
//  DOM object reference 
var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);













//OLD COMMENTS FOR REFERENCE


// Then we'll add the following event listener and also change the text of the new task item dynamically, using the textContent property we used previously to note, "This is a new task."


// // Create a new task item.
// // Style the new task item.
// // Add the text.
// // Append this element to the task list.
// var createTaskHandler = function () {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(listItemEl);
// };

// buttonEl.addEventListener("click", createTaskHandler);




// var buttonEl = document.querySelector("#save-task");
// console.log(buttonEl);



// buttonEl.addEventListener("click", function() {
//     alert("button clicked");
//   });
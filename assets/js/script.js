
//  DOM object reference 
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);













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
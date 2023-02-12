document.getElementById("goBack").addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/index.html";
});

const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const Newtaskinp = document.getElementById("new-task");
const clearbutt = document.getElementById("clearall");

document.getElementById("sub").addEventListener("click",function(){

    console.log("success");
    const Task = Newtaskinp.value;
    Newtaskinp.value = "";

    const TaskItem = document.createElement("div");
    TaskItem.classList.add("task-item"); //creates separate element of div containing a label and a checkbox which has a special list property like an arraylist

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    TaskItem.appendChild(checkbox); //appends a checkbox inside of the task item 

    const taskLabel = document.createElement("label");
    taskLabel.textContent = Task;
    TaskItem.appendChild(taskLabel); //appends a label which has textcontent/value of inputed task 

    taskList.appendChild(TaskItem); //then appends the package of task item to tasklist so as to make separate tasks and make editing simple

});

clearbutt.addEventListener("click", function() {
    while (taskList.hasChildNodes) {
      taskList.removeChild(taskList.firstChild);
    }
  });

  // new things which i learned - createElement function has arguement of html element type 
  // appendchild is used to add things to one particular element and makes the constant beforehand it's parent node which will come in handy later
  // removeChild clears all the child nodes of a parent node
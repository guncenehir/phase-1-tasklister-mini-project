document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", function(e){
    e.preventDefault();
    //have the new task input
    const newTask = document.getElementById("new-task-description").value
    const taskItem = document.createElement("li");
    taskItem.innerText = newTask;
    taskList.appendChild(taskItem);
    //clearing the input area (grab the form and reset)
    taskForm.reset();
    /*instead of creating li we can do this
    taskList.innerHTML += `<li>${newTask}</li>` 
    */
   const deleteButton = document.createElement("button");
   deleteButton.innerText = "delete";
   taskItem.appendChild(deleteButton);
  });
  taskList.addEventListener("click", function(e){
      if(e.target.tagName === "button"){
      e.target.parentNode.remove();
    }
  });

});

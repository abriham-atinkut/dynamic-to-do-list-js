document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");

  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Entry task!");
    } else {
      const list = document.createElement("li");
      list.innerHTML = taskText;
      const toDoListButton = document.createElement("button");
      // classList.add
      toDoListButton.classList = "remove-btn";
      toDoListButton.addEventListener("click", (event) => {
        // checks if element is clicked
        if (event.target.classList.contains("remove-btn")) {
          // to find the nearest ancestor
          const listItemToRemove = event.target.closest("li");
          if (listItemToRemove) {
            // directly removes selected element
            listItemToRemove.remove();
          }
        }
      });
      //   append li-button or remove-button in todo list
      list.appendChild(toDoListButton);
      //   append list in ul or todo list is append in unorder list
      taskList.appendChild(list);
      toDoListButton.textContent = "Remove";
      taskInput.value = "";
    }
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addButton.click(); // Trigger buttons's click  event
    }
  });
});

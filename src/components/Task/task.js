export function createTask(title, description, dueDate, priority) {
 const taskId = Date.now(); 
 const task = {
  id: taskId,
    title,
    description,
    dueDate,
    priority,
  };
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  const taskString = JSON.stringify(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//

export const main = document.querySelector(".main");

export const openDialogBtn = document.createElement("button");
openDialogBtn.textContent = "Add Task";
openDialogBtn.classList.add("openDialogBtn");
main.appendChild(openDialogBtn);


 const addTaskBtn = document.getElementById("addTask");
  addTaskBtn.addEventListener("click", addTask);


// modalAddTask
export function addTask() {
  const { value: titleValue } = document.getElementById("project-title"); // лучше сразу доставать value destructuring
  const { value: descriptionValue } = document.getElementById("description"); 
  const { value:dueDateValue} = document.getElementById("due-date");
  const { value:priorityValue} = document.getElementById("priority");
 
  ////TODO
  /**
   *
   * move to separate function
   *
   **/

  const taskCard = document.createElement("div");
  taskCard.classList.add("taskCard");
  main.appendChild(taskCard);

  let task = createTask(
    titleValue,
    descriptionValue,
    dueDateValue,
    priorityValue
  );

  taskCard.innerHTML = `<div class='taskCard'>
      <div class='checkbox'><input type="checkbox" id="myCheckbox">
    </div>
      <div class='task'><div class='title'>${titleValue}</div>
      <div class='description'>${descriptionValue}</div>
      <div class='dueDate'>${dueDateValue}</div>
        <div class='priority'>
          Priority: ${priorityValue}
        </div>
         </div>`;
}

//addTaskBtn.addEventListener("click", addTask); // лучше повесить там же внутри  addTaskBtn а index.js использовать как центральная точка инициализации приложения. вся логика должна быть внутри своих компонентов.

// const taskDialog = document..,.,

// export function closeDialog() {
//   const closeButton = document.getElementById("closeButton");
//   closeButton.addEventListener("click", function () {
//     taskDialog.close();
//   });
// }

openDialogBtn.addEventListener("click", () => {
  const openDialog = document.getElementById("taskDialog");
  openDialog.showModal();
});

//??? global variable

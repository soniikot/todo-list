import "./style.css";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/utils";

//add task to local storage
export function createTask(title, description, dueDate, priority) {
  const taskId = Date.now();
  let taskProject = getFromLocalStorage("currentProject");
  const task = {
    id: taskId,
    Project: taskProject,
    title,
    description,
    dueDate,
    priority,
  };
  let tasks = getFromLocalStorage("tasks") || [];
  tasks.push(task);
  const taskString = JSON.stringify(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return task;
}

//open modal with task form
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
  const { value: dueDateValue } = document.getElementById("due-date");
  const { value: priorityValue } = document.getElementById("priority");
  let task = createTask(
    titleValue,
    descriptionValue,
    dueDateValue,
    priorityValue
  );
  showTask(task);
}

function showTask(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("taskCard");
  main.appendChild(taskCard);

  taskCard.innerHTML = `<div class='taskCard'>
      <div class='checkbox'><input type="checkbox" id="myCheckbox">
    </div>
      <div class='task'><div class='title'>${task.title}</div>
      <div class='description'>${task.description}</div>
      <div class='dueDate'>${task.dueDate}</div>
        <div class='priority'>
          Priority: ${task.priority}
        </div>
         </div>`;
}

//this function close the TaskModal
export function closeModal() {
  const closeButton = document.getElementById("closeButton");
  const openDialog = document.getElementById("taskDialog");
  closeButton.addEventListener("click", function () {
    openDialog.close();
  });
}
closeModal(); //not sure how to make eventlistener work without calling this funciton

openDialogBtn.addEventListener("click", () => {
  const openDialog = document.getElementById("taskDialog");
  openDialog.showModal();
});

//populate select in task modal
function populateSelect() {
  const selectProject = document.getElementById("project");
  const projects = getFromLocalStorage("projects");
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.id; // Use the 'id' property as the value
    option.textContent = project.name; // Use the 'name' property as the text
    selectProject.appendChild(option);
  });
}

populateSelect();

export function createTaskList() {
  const tasks = getFromLocalStorage("tasks");
  console.log(tasks);
  tasks.forEach((task) => showTask(task));
}

import "./style.css";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/utils";

export function createTask(title, description, dueDate, priority) {
  const taskId = Date.now();
  const taskProject = getFromLocalStorage("currentProject");
  let status = false;
  const task = {
    id: taskId,
    project: taskProject,
    title,
    description,
    dueDate,
    priority,
    status,
  };
  let tasks = getFromLocalStorage("tasks") || [];
  tasks.push(task);
  const taskString = JSON.stringify(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return task;
}

//open modal with task form

export const main = document.querySelector(".main");
export const taskBox = document.querySelector(".taskbox");

export const openDialogBtn = document.createElement("button");
openDialogBtn.textContent = "Add Task";
openDialogBtn.classList.add("openDialogBtn");
main.appendChild(openDialogBtn);

const addTaskBtn = document.getElementById("addTask");
addTaskBtn.addEventListener("click", addTask);

export function addTask() {
  const { value: titleValue } = document.getElementById("project-title");
  const { value: descriptionValue } = document.getElementById("description");
  const { value: dueDateValue } = document.getElementById("due-date");
  const { value: priorityValue } = document.getElementById("priority");
  const { value: projectValue } = getFromLocalStorage("currentProject");
  const { value: statusValue } = "not done";

  let task = createTask(
    titleValue,
    descriptionValue,
    dueDateValue,
    priorityValue,
    projectValue,
    statusValue
  );
  showTask(task);
}

export function showTask(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("taskCard");
  taskBox.appendChild(taskCard);

  taskCard.innerHTML = `<div class='taskCard'>
      <div class='checkboxWrapper'><input type='checkbox' id='${task.id}'">
    </div>
      <div class='task'><div class='title'>${task.title}</div>
      <div class='description'>${task.description}</div>
      <div class='dueDate'>${task.dueDate}</div>
        <div class='priority'>
          Priority: ${task.priority}
        </div>
        <button class='deleteTaskBtn' id='deleteTask'>x</button>
         </div>`;

  const checkbox = taskCard.querySelector(
    ".checkboxWrapper input[type='checkbox'"
  );
  const tasks = getFromLocalStorage("tasks");

  const taskId = task.id;

  checkbox.addEventListener("change", () => {
    const currentTask = tasks.find((task) => task.id == taskId);
    if (currentTask.status == false) {
      currentTask.status = true;
    } else {
      currentTask.status == false;
    }
    console.log(tasks);
    const index = tasks.findIndex((task) => task.id === currentTask.id);
    tasks[index] = currentTask;
    console.log(tasks);
    setToLocalStorage("tasks", tasks);
  });

  taskCard.querySelector(".deleteTaskBtn").addEventListener("click", () => {
    const filteredRemovedProjectList = tasks.filter(
      (task) => task.id !== taskId
    );
    setToLocalStorage("tasks", filteredRemovedProjectList);
    taskBox.removeChild(taskCard);
  });
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
export function updateChoosenProjectInModal() {
  const projectP = document.querySelector("#projectP");

  projectP.textContent = getFromLocalStorage("currentProject");
}
updateChoosenProjectInModal();

export function createTaskList() {
  while (taskBox.firstChild) {
    taskBox.removeChild(taskBox.firstChild);
  }
  const tasks = getFromLocalStorage("tasks");

  tasks.forEach((task) => showTask(task));
}

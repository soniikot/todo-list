import "./style.css";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/utils";

export function createTask(title, description, dueDate, priority) {
  const taskId = Date.now();
  const taskProject = getFromLocalStorage("currentProject");
  let status = "";
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
  const { value: status } = "";

  let task = createTask(
    titleValue,
    descriptionValue,
    dueDateValue,
    priorityValue,
    projectValue,
    statusValue
    //not sure how status works here
  );
  showTask(task);
}

export function showTask(task) {
  const { id, project, title, description, dueDate, priority, status } = task;
  const taskCard = document.createElement("div");
  taskCard.classList.add("taskCard");
  taskBox.appendChild(taskCard);

  taskCard.innerHTML = `<div class='taskCard'>
      <div class='checkboxWrapper'><input type='checkbox'${
        task.status ? "checked" : ""
      } id='${id}'">
    </div>
      <div class='task'><div class='title'>${title}</div>
      <div class='description'>${description}</div>
      <div class='priorityWrapper'>
      <div class='dueDate'>${dueDate}</div>
        <div class='priority'>
          Priority: ${priority}
        </div>
        <button class='deleteTaskBtn' id='deleteTask'>x</button>
        </div>
        </div>`;

  const checkbox = taskCard.querySelector(
    ".checkboxWrapper input[type='checkbox'"
  );

  const tasks = getFromLocalStorage("tasks");

  const taskId = task.id;
  //function updateCheckBoxStatus(){}
  //i could make it into separate function, but then i need to
  //reach taskcard one more time. what would be better?
  checkbox.addEventListener("change", () => {
    const currentTask = tasks.find((task) => task.id == taskId);
    if (currentTask.status == "") {
      currentTask.status = "checked";
    } else if (currentTask.status == "checked") {
      currentTask.status = "";
    }

    const index = tasks.findIndex((task) => task.id === currentTask.id);
    tasks[index] = currentTask;
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

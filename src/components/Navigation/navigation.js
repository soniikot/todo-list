import "./style.css";
import { setToLocalStorage, getFromLocalStorage } from "../../utils/utils";
import { showTask, taskBox, updateChoosenProjectInModal } from "../Task/task";
import { createAllProjectBtn } from "./components/createAllProjectBtn";
import { createSingleProjectBtn } from "./components/createSingleProjectBtn";

const newProjectBtn = document.getElementById("newProjectBtn");
const newProjectInput = document.getElementById("newProjectTitle");

const projectButtonWrapper = document.querySelector(".projectArray");

export function createNavigation() {
  createAllProjectBtn();
  addCurrentProjectTitle();
  createSingleProjectBtn();
}

export function addCurrentProjectTitle() {
  updateChoosenProjectInModal();
  const main = document.querySelector(".main");
  const title = document.createElement("h1");
  title.textContent = "";

  title.textContent = getFromLocalStorage("currentProject");
  title.id = "projectTitle";

  let h1Link;

  main.childNodes.forEach((elem) => {
    if (elem.id === "projectTitle") {
      h1Link = elem;
    }
  });

  h1Link && main.removeChild(h1Link);

  main.insertBefore(title, main.firstChild);
}

export function showCurrentProjectTasks() {
  const tasks = getFromLocalStorage("tasks");
  const currentProject = getFromLocalStorage("currentProject");

  while (taskBox.firstChild) {
    taskBox.removeChild(taskBox.firstChild);
  }

  const filteredTasks = tasks.filter((task) => task.project == currentProject);

  filteredTasks.forEach((task) => showTask(task));
}

export function addProject() {
  const newProject = {
    id: newProjectInput.value,
    name: newProjectInput.value,
  };

  const projects = getFromLocalStorage("projects");

  projects.push(newProject);

  setToLocalStorage("projects", projects);

  const newProjectbutton = document.createElement("button");

  newProjectbutton.classList.add("projectBtn");

  newProjectbutton.textContent = newProjectInput.value;

  newProjectbutton.id = newProjectInput.value;

  projectButtonWrapper.appendChild(newProjectbutton);

  newProjectbutton.addEventListener("click", () => {
    localStorage.setItem(
      "currentProject",
      JSON.stringify(newProjectInput.value)
    );
    addCurrentProjectTitle();
  });

  addRemoveProjectButton(newProjectbutton);
}

export function addRemoveProjectButton(projectButton) {
  const removeButton = document.createElement("button");

  projectButtonWrapper.appendChild(removeButton);

  removeButton.innerHTML = "x";

  removeButton.addEventListener("click", () => {
    projectButtonWrapper.removeChild(projectButton);

    projectButtonWrapper.removeChild(removeButton);

    const projects = getFromLocalStorage("projects");

    const projectId = projectButton.id;

    const filteredRemovedProjectList = projects.filter(
      (project) => project.id !== projectId
    );

    setToLocalStorage("projects", filteredRemovedProjectList);
  });

  newProjectBtn.disabled = true;
  newProjectInput.addEventListener("change", activateNewProjectBtn);

  function activateNewProjectBtn() {
    if (newProjectInput.value === "") {
      newProjectBtn.disabled = true;
    } else {
      newProjectBtn.disabled = false;
    }
  }

  newProjectBtn.addEventListener("click", addProject);
}

// observer pattern
//

// class
// MobX

// export var functionName = () => {
//   return {}
// }

// export function functionName2() {
//   return {}
// }

// hoisting
// var, fn declarations, class

// export function newFunction(string){
//   console.log(string);
// }
// newFunction('123')

// export const newFunction1 = (string) =>{
//   console.log(string)
// }

// newFunction1('hello')

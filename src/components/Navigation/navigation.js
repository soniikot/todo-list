import "./style.css";
import { setToLocalStorage, getFromLocalStorage } from "../../utils/utils";
import { DEFAULT_PROJECTS } from "../constants/constants";
import { showTask, taskBox, createTaskList } from "../Task/task";
const newProjectBtn = document.getElementById("newProjectBtn");
const newProjectInput = document.getElementById("newProjectTitle");

setToLocalStorage("currentProject", "all projects");

const projectsString = localStorage.getItem("projects");

const projects = JSON.parse(projectsString);

if (!projectsString) {
  setToLocalStorage("projects", DEFAULT_PROJECTS);
}

const projectButtonWrapper = document.querySelector(".projectArray");

//create projects button from project array
export function createNavigation() {
  createAllProjectBtn();
  addCurrentProjectTitle();
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectButton = document.createElement("button");

    projectButton.classList.add("projectBtn");

    projectButton.id = project.id;

    projectButton.textContent = project.name;

    projectButtonWrapper.appendChild(projectButton);

    projectButton.addEventListener("click", () => {
      localStorage.setItem("currentProject", JSON.stringify(project.id));
      addCurrentProjectTitle();
      showCurrentProjectTasks();
    });

    addRemoveProjectButton(projectButton);
  }
}

//project title
function addCurrentProjectTitle() {
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

function showCurrentProjectTasks() {
  const tasks = getFromLocalStorage("tasks");
  const currentProject = getFromLocalStorage("currentProject");
  while (taskBox.firstChild) {
    taskBox.removeChild(taskBox.firstChild);
  }
  const filteredTasks = tasks.filter((task) => task.project == currentProject);

  filteredTasks.forEach((task) => showTask(task));
}
function createAllProjectBtn() {
  const projectButton = document.createElement("button");

  projectButton.classList.add("allProjectBtn");

  projectButton.textContent = "All projects";

  projectButtonWrapper.appendChild(projectButton);

  projectButton.addEventListener("click", () => {
    setToLocalStorage("currentProject", " all projects");
    addCurrentProjectTitle();
    createTaskList();
  });
}

//add new project to projectArray
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

//remove project from project
function addRemoveProjectButton(projectButton) {
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

  //enable or disable add new project Btn
  newProjectBtn.disabled = true;
  newProjectInput.addEventListener("change", stateHandle);

  function stateHandle() {
    if (newProjectInput.value === "") {
      newProjectBtn.disabled = true;
    } else {
      newProjectBtn.disabled = false;
    }
  }

  newProjectBtn.addEventListener("click", addProject);
}

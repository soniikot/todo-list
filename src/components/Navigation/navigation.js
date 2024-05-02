import "./style.css";
import { setToLocalStorage, getFromLocalStorage } from "../../utils/utils";
import { DEFAULT_PROJECTS } from "../constants/constants";

const newProjectBtn = document.getElementById("newProjectBtn");
const newProjectInput = document.getElementById("newProjectTitle");

setToLocalStorage("currentProject", "all projects");

//TODO
/**
 * const
 **/
const projectsString = localStorage.getItem("projects");

const projects = JSON.parse(projectsString);

if (!projectsString) {
  localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
}
console.log(projects.length);

const projectButtonWrapper = document.querySelector(".projectArray");

//add project button from project array

export function createNavigation() {
  createAllProjectBtn();
  addCurrentProjectTitle();
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectButton = document.createElement("button");

    projectButton.classList.add("ProjectBtn");

    projectButton.id = project.id;

    projectButton.textContent = project.name;

    projectButtonWrapper.appendChild(projectButton);

    projectButton.addEventListener("click", () => {
      localStorage.setItem("currentProject", JSON.stringify(project.id));
      addCurrentProjectTitle();
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

  main.appendChild(title);
}

function createAllProjectBtn() {
  const projectButton = document.createElement("button");

  projectButton.classList.add("allProjectBtn");

  projectButton.textContent = "All projects";

  projectButtonWrapper.appendChild(projectButton);

  projectButton.addEventListener("click", () => {
    setToLocalStorage("currentProject", " all projects");
    addCurrentProjectTitle();
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

  const button = document.createElement("button");

  button.classList.add("projectBtn");

  button.textContent = newProjectInput.value;

  button.id = newProjectInput.value;

  projectButtonWrapper.appendChild(button);

  addRemoveProjectButton(button);
  createNavigation();
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

import "./style.css";
import { setToLocalStorage } from "../../utils/utils";
import { DEFAULT_PROJECTS } from "../constants/constants";

// nano id/

setToLocalStorage("currentProject", "all projects");
const storedProjectsString = localStorage.getItem("projects");

if (!storedProjectsString) {
  localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
}

const projects = JSON.parse(storedProjectsString);

const projectButtonWrapper = document.getElementById("projectArray");
//make sure that the first item from project can not be deleted
//add project button from proect array

export function createNavigation() {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectButton = document.createElement("button");

    projectButton.classList.add("projectBtn");

    projectButton.id = project.id;

    projectButton.textContent = project.name;

    projectButtonWrapper.appendChild(projectButton);

    projectButton.addEventListener("click", () => {
      //showAllProjects();

      // navigate to
      //  .../project/id:
      // window.location.assign('')

      // window.location.pathname('/')

      localStorage.setItem("currentProject", JSON.stringify(project.id));
    });

    addRemoveProjectButton(projectButton);
  }
}

//add new project to projectArray
export function addProject() {
  projects.push(newProjectTitle.value);

  localStorage.setItem("projects", JSON.stringify(projects));

  const button = document.createElement("button");

  button.classList.add("projectBtn");

  //

  button.textContent = newProjectTitle.value;

  projectButtonWrapper.appendChild(button);

  addRemoveProjectButton(button);
}

//remove project from project
function addRemoveProjectButton(projectButton) {
  const removeButton = document.createElement("button");

  projectButtonWrapper.appendChild(removeButton);

  removeButton.innerHTML = "x";

  removeButton.addEventListener("click", () => {
    projectButtonWrapper.removeChild(projectButton);
    projectButtonWrapper.removeChild(removeButton);

    const projectId = projectButton.id;

    const filteredRemovedProjectList = projects.filter(
      (project) => project.id !== projectId
    );

    //TODO
    /**
     * utils for setlocalstorage
     **/
    setToLocalStorage(projects, filteredRemovedProjectList);
  });

  //enable or disable add new project Btn
  const newProjectBtn = document.getElementById("newProjectBtn");
  const input = document.getElementById("newProjectTitle");
  newProjectBtn.disabled = true;
  input.addEventListener("change", stateHandle);

  function stateHandle() {
    if (input.value === "") {
      newProjectBtn.disabled = true; //button remains disabled
    } else {
      newProjectBtn.disabled = false; //button is enabled
    }
  }
  newProjectBtn.addEventListener("click", addProject);
}

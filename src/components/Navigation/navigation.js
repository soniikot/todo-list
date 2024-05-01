import "./style.css";
import { setToLocalStorage } from "../../utils/utils";
import { DEFAULT_PROJECTS } from "../constants/constants";

setToLocalStorage("currentProject", "all projects");

const projectsString = localStorage.getItem("projects");

const projects = JSON.parse(projectsString) 

if (!projectsString) {
  localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
}
console.log(projects.length);


const projectButtonWrapper = document.querySelector(".projectArray");

//add project button from project array

export function createNavigation() {
  createAllProjectBtn();
  
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectButton = document.createElement("button");

    projectButton.classList.add("ProjectBtn");

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
function createAllProjectBtn() {
  const projectButton = document.createElement("button");

  projectButton.classList.add("allProjectBtn");

  projectButton.textContent = "All projects";

  projectButtonWrapper.appendChild(projectButton);
}

//add new project to projectArray
export function addProject() {
  const newProject={
    id:newProjectTitle.value,
    name:newProjectTitle.value, 
  }
    projects.push(newProject);
console.log(projects);
  localStorage.setItem("projects", JSON.stringify(projects));
  
  
 

  const button = document.createElement("button");

  button.classList.add("projectBtn");

  

  button.textContent = newProjectTitle.value;

 projectButtonWrapper.appendChild(button);

  addRemoveProjectButton(button);

};
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
console.log(filteredRemovedProjectList);
    //TODO
    /**
     * utils for setlocalstorage
     **/
    localStorage.setItem('projects', JSON.stringify(filteredRemovedProjectList));
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

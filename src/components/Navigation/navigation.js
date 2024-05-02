import "./style.css";
import { setToLocalStorage } from "../../utils/utils";
import { DEFAULT_PROJECTS } from "../constants/constants";
import { parse } from "date-fns";

setToLocalStorage("currentProject", "all projects");

<<<<<<< HEAD
let projectsString = localStorage.getItem("projects");

let projects = JSON.parse(projectsString);
=======
const projectsString = localStorage.getItem("projects");

const projects = JSON.parse(projectsString) 
>>>>>>> 80ca3d3a88e89c1b6aa3533fa851c7242e3bf594

if (!projectsString) {
  localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
}
console.log(projects.length);
<<<<<<< HEAD
=======

>>>>>>> 80ca3d3a88e89c1b6aa3533fa851c7242e3bf594

const projectButtonWrapper = document.querySelector(".projectArray");

//add project button from project array

export function createNavigation() {
  createAllProjectBtn();
<<<<<<< HEAD

=======
  
>>>>>>> 80ca3d3a88e89c1b6aa3533fa851c7242e3bf594
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
<<<<<<< HEAD
  const newProject = {
    id: newProjectTitle.value,
    name: newProjectTitle.value,
  };
  projectsString = localStorage.getItem("projects");
  projects = JSON.parse(projectsString);
  projects.push(newProject);
  console.log(projects);
=======
  const newProject={
    id:newProjectTitle.value,
    name:newProjectTitle.value, 
  }
    projects.push(newProject);
console.log(projects);
>>>>>>> 80ca3d3a88e89c1b6aa3533fa851c7242e3bf594
  localStorage.setItem("projects", JSON.stringify(projects));
  
  
 

  const button = document.createElement("button");

  button.classList.add("projectBtn");

<<<<<<< HEAD
=======
  

>>>>>>> 80ca3d3a88e89c1b6aa3533fa851c7242e3bf594
  button.textContent = newProjectTitle.value;

 projectButtonWrapper.appendChild(button);

  addRemoveProjectButton(button);
<<<<<<< HEAD
}
=======

};
>>>>>>> 80ca3d3a88e89c1b6aa3533fa851c7242e3bf594
//remove project from project
function addRemoveProjectButton(projectButton) {
  const removeButton = document.createElement("button");

  projectButtonWrapper.appendChild(removeButton);

  removeButton.innerHTML = "x";

  removeButton.addEventListener("click", () => {
    projectButtonWrapper.removeChild(projectButton);
    projectButtonWrapper.removeChild(removeButton);
    projectsString = localStorage.getItem("projects");
    projects = JSON.parse(projectsString);
    const projectId = projectButton.id;
    console.log(projectId);
    const filteredRemovedProjectList = projects.filter(
      (project) => project.id !== projectId
    );
console.log(filteredRemovedProjectList);
    //TODO
    /**
     * utils for setlocalstorage
     **/
<<<<<<< HEAD
    localStorage.setItem(
      "projects",
      JSON.stringify(filteredRemovedProjectList)
    );
=======
    localStorage.setItem('projects', JSON.stringify(filteredRemovedProjectList));
>>>>>>> 80ca3d3a88e89c1b6aa3533fa851c7242e3bf594
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

const projects = ["all project", "health", "work"];

const menuContainer = document.getElementById("projectArray");
//add projectbutton from project array
export function createNavigation() {
  for (let i = 0; i < projects.length; i++) {
    const projectButton = document.createElement("button");
    projectButton.classList.add("projectBtn");

    projectButton.textContent = projects[i];
    menuContainer.appendChild(projectButton);
    projectButton.addEventListener("click", () => {
      //showAllProjects();
    });

    removeProject(projectButton);
  }
}

//add new project to projectArray
export function addProject() {
  projects.push(newProjectTitle.value);
  localStorage.setItem("projects", JSON.stringify(projects));
  const button = document.createElement("button");
  button.classList.add("projectBtn");
  button.textContent = newProjectTitle.value;
  menuContainer.appendChild(button);
  removeProject(button);
}
//remove project from project
function removeProject(button) {
  const removeButton = document.createElement("button");
  menuContainer.appendChild(removeButton);
  removeButton.innerHTML = "x";
  removeButton.addEventListener("click", () => {
    menuContainer.removeChild(button);
    menuContainer.removeChild(removeButton);

    // remove project from array?

    const projectName = button.textContent;
    const index = projects.indexOf(projectName);
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
  });
}
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

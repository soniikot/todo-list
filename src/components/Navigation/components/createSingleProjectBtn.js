import { highlightCurrentProject } from "../handleUiInteraction";
import {
  addCurrentProjectTitle,
  addRemoveProjectButton,
  showCurrentProjectTasks,
} from "../navigation";

const projectsString = localStorage.getItem("projects");
const projects = JSON.parse(projectsString);

const projectButtonWrapper = document.querySelector(".projectArray");

export function createSingleProjectBtn() {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectButton = document.createElement("button"); // ./components/projectButton + x
    //?I tried put I am not sure if it makes sense because
    // there is another function connected from this module, so I need to import it back and forth"?
    projectButton.classList.add("projectBtn");
    projectButton.id = project.id;
    projectButton.textContent = project.name;
    projectButtonWrapper.appendChild(projectButton);

    projectButton.addEventListener("click", () => {
      localStorage.setItem("currentProject", JSON.stringify(project.id));
      addCurrentProjectTitle();
      showCurrentProjectTasks();
    });

    highlightCurrentProject();
    addRemoveProjectButton(projectButton);
  }
}

export function createAllProjectBtn() {
  const projectButtonWrapper = document.querySelector(".projectArray");
  const projectButton = document.createElement("button");

  projectButton.classList.add("allProjectBtn");
  projectButton.classList.add("active");

  projectButton.textContent = "All projects";

  projectButtonWrapper.appendChild(projectButton);

  projectButton.addEventListener("click", () => {
    setToLocalStorage("currentProject", " all projects");
    addCurrentProjectTitle();
    createTaskList();
  });
}

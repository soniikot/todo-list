let projects = ["all tasks", "house", "work", "health"];
// лучше использовать const

const menuContainer = document.getElementById("projectArray");

export function createNavigation() {
  let firstButton = true;
  //const
  for (let i = 0; i < projects.length; i++) {
    const projectButton = document.createElement("button");
    projectButton.classList.add("projectBtn");
    projectButton.textContent = projects[i];

    if (firstButton) {
      projectButton.classList.add("highlight"); // Add a class to highlight the first button
      firstButton = false; // Update the variable to track the first button
    }

    menuContainer.appendChild(projectButton);
    projectButton.addEventListener("click", () => {
      alert("i am clicked");
    });

    removeProject(projectButton);
  }
}

export function addProject() {
  projects.push(newProjectTitle.value);

  const button = document.createElement("button");
  button.classList.add("projectBtn");
  button.textContent = newProjectTitle.value;
  menuContainer.appendChild(button);
  removeProject(button);
}

function removeProject(button) {
  const removeButton = document.createElement("button");
  menuContainer.appendChild(removeButton);
  removeButton.innerHTML = "x";
  removeButton.addEventListener("click", () => {
    menuContainer.removeChild(button);
    menuContainer.removeChild(removeButton);
  });
}

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

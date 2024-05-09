import "./style.css";
import { createNavigation } from "./components/Navigation/navigation";
import {} from "./components/Task/task";
import { createTaskList } from "./components/Task/task";
import { setToLocalStorage } from "./utils/utils";
import { DEFAULT_PROJECTS } from "./components/constants/constants";

function renderApp() {
  setToLocalStorage("currentProject", "all projects");

  const projectsString = localStorage.getItem("projects");

  if (!projectsString) {
    setToLocalStorage("projects", DEFAULT_PROJECTS);
  }

  createNavigation();
  createTaskList();
}

// const projects = JSON.parse(localStorage.getItem("projects"));

// function retriveFromLocalStorage() {
//   const myStringProjects = localStorage.getItem("projects");
//   const restoredProjects = JSON.stringify(myStringProjects);
//   return restoredProjects
// }

//<script defer
//
// renderApp()
window.addEventListener("load", renderApp);

/*
setItem(): Adds key and value to localStorage
getItem(): Retrieves/gets items from localStorage
removeItem(): Removes an item from localStorage
clear(): Clears all data from localStorage
key(): Passes a number to retrieve the key of a localStorage

*/

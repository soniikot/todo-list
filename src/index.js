import "./style.css";
import { createNavigation } from "./components/Navigation/navigation";
import {} from "./components/Task/task";

//TODO
/**
 * настроить formatter++
 * тест не отформатирован и не выровнен++
 *
 *
 * привести в порядок
 * folders++
 * function names & file names consistency!
 *
 *
 *
  {
 projects: [{
 id: skdflj2342,
 name: 'house'
 }],
 *
 tasks: [
 {
 title,
 description,
 dueDate,
 priority
 project: id
 },]
 }
 *
 *
 * 
 * main deploy
 * 
 * development
 *  
 * "feature/localStorage" => PR development comments
 * 
 * 
 */

function renderApp() {
  createNavigation();
  retriveFromLocalStorage();
  // createTaskList()
}
function retriveFromLocalStorage() {
  const myStringProjects = localStorage.getItem("projects");
  const restoredProjects = JSON.stringify(myStringProjects);
}
window.addEventListener("load", renderApp);

const projects = JSON.parse(localStorage.getItem("projects"));

/*
setItem(): Adds key and value to localStorage
getItem(): Retrieves/gets items from localStorage
removeItem(): Removes an item from localStorage
clear(): Clears all data from localStorage
key(): Passes a number to retrieve the key of a localStorage

*/

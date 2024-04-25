import './style.css';
import { createNavigation } from "./components/Navigation/navigation";
import {} from "./components/Task/task";

//TODO
/**
 * настроить formatter
 * тест не отформатирован и не выровнен
 *
 *
 * привести в порядок
 * folders
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
 **/

// const mydata = JSON.parse({});

// localStorage.setItem("myData", mydata);

// const myStringData = localStorage.getItem("myData");

// const restoredData = JSON.stringify(myStringData);

function renderApp() {
  createNavigation();
  // createTaskList()
}

window.addEventListener("load", renderApp);
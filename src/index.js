import './style.css';
import { createNavigation, addProject, newProjectBtn, chooseProject } from './navigation';
import { addTask, openDialog, addTaskBtn, openDialogBtn} from './task';
import { closeDialog } from './closeButton';

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
    * {
    * projects: [{
    * id: skdflj2342,
    * name: 'house'
    * }],
    * 
    * tasks: [
    * {
    * title, 
    * description,
    * dueDate,
    * priority
    * project: id
    * },]
    * }
    * 
    * 
    **/

const mydata = JSON.parse( {} )

localStorage.setItem("myData", mydata);

const myStringData = localStorage.getItem("myData");

const restoredData = JSON.stringify( myStringData );



closeDialog(); // зачем ?



    openDialogBtn.addEventListener("click", () => { // тоже самое - перенести внутрь компонента
      taskDialog.showModal();
     
    });
    

function renderApp() {
    createNavigation()
    // createTaskList()

}


window.addEventListener("load", renderApp);


//вынести в navigation

const input = document.getElementById('newProjectTitle');
newProjectBtn.disabled = true;
input.addEventListener("change", stateHandle);

function stateHandle() {
    if (input.value === "") {
        newProjectBtn.disabled = true; //button remains disabled
    } else {
        newProjectBtn.disabled = false; //button is enabled
    }
}
newProjectBtn.addEventListener('click', addProject);

//chooseProject();


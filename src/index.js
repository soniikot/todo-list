import './style.css';
import { createProject, addProject, newProjectBtn,highlightGeneral } from './navigation';
import { addTask, openDialog, addTaskBtn, openDialogBtn} from './task';
import { closeDialog } from './closeButton';

closeDialog();
addTaskBtn.addEventListener ('click', addTask )
window.addEventListener('load',highlightGeneral);


    openDialogBtn.addEventListener("click", () => {
      taskDialog.showModal();
     
    });
    




window.addEventListener('load', createProject);

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



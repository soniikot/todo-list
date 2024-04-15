import './style.css';
import { createProject, addProject, newProjectBtn } from './navigation'; 






window.addEventListener('load', createProject);
newProjectBtn.addEventListener('click', addProject);


function createTask (title, description, dueDate,priority){
  
  return {
    title, description, dueDate,priority
  }
}

const toDo = createTask('finishTodoList', 'Project for TOP', 'none','high');

console.log(toDo)
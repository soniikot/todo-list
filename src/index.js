import './style.css';
import { createProject, addProject, newProjectBtn } from './navigation';
import {createTask, addTask, createTaskBtn, displayTheTask} from './task';

createTaskBtn.addEventListener ('click', addTask )







window.addEventListener('load', createProject);
newProjectBtn.addEventListener('click', addProject);



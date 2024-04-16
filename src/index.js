import './style.css';
import { createProject, addProject, newProjectBtn } from './navigation';
import {main} from './task';









window.addEventListener('load', createProject);
newProjectBtn.addEventListener('click', addProject);



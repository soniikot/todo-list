let projects=['house','work','health'];
let menuContainer = document.createElement("div"); 
export function createProject(){



for(let i=0; i<projects.length; i++){ 
  let button = document.createElement("button"); 
  button.textContent = projects[i];
  button.classList.add('menueButtons');
  menuContainer.appendChild(button); 
}

document.getElementById("projectArray").appendChild(menuContainer); 

}

export function addProject(){
  projects.push(newProjectTitle.value);
  menuContainer.innerHTML = '';
createProject();
 }


export const newProjectBtn = document.getElementById('newProjectBtn');





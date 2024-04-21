let projects=['house','work','health'];

const menuContainer = document.getElementById("projectArray")
export function createProject(){

for(let i=0; i<projects.length; i++){ 
 const button = document.createElement("button");
 button.classList.add('projectBtn'); 
  button.textContent = projects[i];
  menuContainer.appendChild(button); 
  removeProject(button);

 
};




}

export function addProject(){
  projects.push(newProjectTitle.value);
  
  const button = document.createElement("button");
  button.classList.add('projectBtn'); 
   button.textContent = newProjectTitle.value;
   menuContainer.appendChild(button); 
   removeProject(button)

 }

function removeProject(button){
 const removeButton = document.createElement("button");
 menuContainer.appendChild(removeButton);
removeButton.innerHTML='x'; 
removeButton.addEventListener('click', () => {
  menuContainer.removeChild(button);
  menuContainer.removeChild(removeButton);


});
}



export const newProjectBtn = document.getElementById('newProjectBtn');


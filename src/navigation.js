let projects=[ 'all tasks','house','work','health'];

const menuContainer = document.getElementById("projectArray")
export function createProject(){

  let firstButton = true;
for(let i=0; i<projects.length; i++){ 
 const projectButton = document.createElement("button");
 projectButton.classList.add('projectBtn'); 
 projectButton.textContent = projects[i];

 if (firstButton) {
  projectButton.classList.add('highlight'); // Add a class to highlight the first button
  firstButton = false; // Update the variable to track the first button
}
 
  menuContainer.appendChild(projectButton); 
  projectButton.addEventListener('click', ()=>{
    alert('i am clicked');
  });
     
  removeProject(projectButton);
 

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


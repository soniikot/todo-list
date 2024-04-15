let projects=['house','work','health'];
let ul = document.createElement("ul"); 
export function createProject(){



for(let i=0; i<projects.length; i++){ 
  let li = document.createElement("li"); 
  li.textContent = projects[i];
  ul.appendChild(li); 
}

document.getElementById("projectArray").appendChild(ul); 

}

export function addProject(){
  projects.push(newProjectTitle.value);
ul.innerHTML = '';
createProject();
 }


export const newProjectBtn = document.getElementById('newProjectBtn');






/*
function addProject(input.value){
  projects.push(input);
   console.log(projects)
 }
 

   
   const newProjectButton =document.getElementById('newProjectBtn');
   newProjectButton.addEventListener("click", () => {
       addProject();
     });
     */
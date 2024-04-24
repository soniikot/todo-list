export function createTask (title, description, dueDate,priority){
  
    return {
      title, description, dueDate,priority
    }
  }
  
  
  
  export const main = document.querySelector('.main')
  


export const openDialogBtn= document.createElement('button');
openDialogBtn.textContent='Add Task';
openDialogBtn.classList.add('openDialogBtn')
main.appendChild(openDialogBtn);



export function openDialog(){
  const openDialog= document.getElementById("taskDialog");
}


export const addTaskBtn = document.getElementById('addTask');


 

  export function addTask(){

    
   let title = document.getElementById("project-title");
   let description = document.getElementById("description");
   let dueDate = document.getElementById("due-date");
   let priority = document.getElementById("priority");
   
   const taskCard = document.createElement("div");
      taskCard.classList.add("taskCard");
      main.appendChild(taskCard);
      let task=createTask(title.value, description.value,dueDate.value,priority.value);
      taskCard.innerHTML=`<div class='taskCard'>
      <div class='checkbox'><input type="checkbox" id="myCheckbox">
    </div>
      <div class='task'><div class='title'>${task.title}</div>
      <div class='descriprion'>${task.description}</div>
      <div class='dueDate'>${task.dueDate}</div>
        <div class='priority'>
          Priority: ${task.priority}
        </div>
        
         </div>`
          

  }


 

    
 
     
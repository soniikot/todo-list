export function createTask (title, description, dueDate,priority){
  
    return {
      title, description, dueDate,priority
    }
  }
  
  const toDo = createTask('finishTodoList', 'Project for TOP', 'none','high');
  
  export const main = document.querySelector('.main')
  


export const openDialogBtn= document.createElement('button');
openDialogBtn.textContent='Add Task';
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
      taskCard.textContent = `Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}`;

  }


 

    
 
     
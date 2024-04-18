export function createTask (title, description, dueDate,priority){
  
    return {
      title, description, dueDate,priority
    }
  }
  
  const toDo = createTask('finishTodoList', 'Project for TOP', 'none','high');
  
  export const main = document.querySelector('.main')
  main.innerHTML=`<form id="addProject">
       
         <label for ='project-title'>Next task</label>
        <input type="text" id="project-title" >
        <label for ='description'>Description</label>
        <input type="textarea" id="description">
        <label for ='due-date'>Due date</label>
        <input type='date' id="due-date">
        <label for="priority">Priority</label>
<select id="priority" name="priority">
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
 
</select>
</form>`


export const createTaskBtn = document.createElement('button');
createTaskBtn.textContent='Add Task'
main.appendChild(createTaskBtn);


 

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


 

    
 
     
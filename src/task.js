export function createTask (title, description, dueDate,priority,project){
  
    return {
      title, description, dueDate,priority,project
    }
  }
  
  const toDo = createTask('finishTodoList', 'Project for TOP', 'none','high','home');
  
  export const main = document.querySelector('.main')
  main.innerHTML=`<form id="addProject">
       
         <label for ='project-title'>Next task</label>
        <input type="text" id="project-title" >
        <label for ='description'>Description</label>
        <input type="textarea" id="description">
        <label for ='due-date'>Due date</label>
        <input type='date' id="due-date">
        <label for="priority">Priority</label>
<select id="cars" name="cars">
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
 
</select>
</form>`


const createTaskBtn = document.createElement('button');
createTaskBtn.textContent='Add Task'
main.appendChild(createTaskBtn);
export function showTask(){
createTaskBtn.addEventListener('click', createTask);
console.log(task);
}
  console.log(toDo)


  
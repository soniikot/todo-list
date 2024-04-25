export function createTask (title, description, dueDate,priority){
  
  // save to local storage 

  

  // no need to return
    return {
      title, description, dueDate,priority
    }
  }
  
  //
  
  export const main = document.querySelector('.main')
  


export const openDialogBtn= document.createElement('button');
openDialogBtn.textContent='Add Task';
openDialogBtn.classList.add('openDialogBtn')
main.appendChild(openDialogBtn);



export function openDialog(){ // вообще не используется
  const openDialog= document.getElementById("taskDialog");
}


export const addTaskBtn = document.getElementById('addTask');


 // таски нигде в localstorage не сохраняются? 

// modalAddTask
  export function addTask(){

    
   let { value: titleValue } = document.getElementById("project-title"); // лучше сразу доставать value destructuring
   let description = document.getElementById("description"); // сходу писать const чтобы по ошибке не перезаписать переменную
   let dueDate = document.getElementById("due-date");
   let priority = document.getElementById("priority");
   
    
    ////TODO 
    /**
      * move to separate function
      **/
   const taskCard = document.createElement("div");
      taskCard.classList.add("taskCard");
      main.appendChild(taskCard);
      
    
    let task = createTask(
        titleValue,
        description.value,
        dueDate.value,
        priority.value
    );
    
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
    

addTaskBtn.addEventListener( 'click', addTask ) // лучше повесить там же внутри  addTaskBtn а index.js использовать как центральная точка инициализации приложения. вся логика должна быть внутри своих компонентов.


 

    
 
     
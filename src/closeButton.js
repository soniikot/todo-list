export function closeDialog(){
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function (){
    taskDialog.close();
})
}
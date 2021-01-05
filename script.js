//assign var to input
//assign var to buttons

const input = document.getElementById("itemBox");
const list = document.getElementById("itemList");
const submitBtn =  document.getElementById("addHere");
const completeBtn = document.getElementById("complete");
const deleteBtn = document.getElementById("delete");

//add click function to all buttons
submitBtn.addEventListener('click',addTask);
completeBtn.addEventListener('click',lineThroughTask);
deleteBtn.addEventListener('click',removeTask);

//write functions for event listeners
//create element on the page - visible on browswer after being entered
function addTask (){
   
}//take information from input and display in browser

function lineThroughTask(){

}

function removeTask(){

}
//element should be appearing from the list
//need to delete unwanted items
//need to strike through completed items
//assign var to input
//assign var to buttons

const submitBtn =  document.getElementById("addHere");
const input = document.getElementById("itemBox");
const list = document.querySelector("itemList");

//event listeners for buttons
submitBtn.addEventListener('click',addTask);
list.addEventListener('click',lineThroughTask);
list.addEventListener('click',removeTask);


//create element on the page - visible on browswer after being entered
function addTask (){
const input = document.createElement("itemList");
document.createTextNode(input.value);
list.appendChild("");
var x = document.createElement("list");
x.setAttribute("type", "checkbox");
}

function lineThroughTask(){


function removeTask(){

}
//element should be appearing from the list
//need to delete unwanted items
//need to strike through completed items
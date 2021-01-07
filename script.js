//assign var to input
//assign var to buttons

const submitBtn =  document.getElementById("addHere");
const input = document.getElementById("itemBox");
const list = document.querySelector("itemList");

//event listeners for buttons
submitBtn.addEventListener('click',addTask);
list.addEventListener('click',lineThroughTask);



//create element on the page - visible on browswer after being entered
function addTask (){
const input = document.createElement("itemList");
localStorage.setItem(input,JSON.stringify(input.value));
localStorage.getItem("itemList")
document.createTextNode("itemList");
JSON.parse(input.value);

}

function lineThroughTask(){

}


//element should be appearing from the list
//need to delete unwanted items
//need to strike through 
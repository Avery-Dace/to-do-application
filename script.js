//assign var to input
//assign var to button

const itemBOX = document.getElementById("itemBox");
const addHere =  document.getElementById("addHere");

//add click function to button; save to local storage

addHere.onclick = function (){
const addHere = addHere.value;  

console.log(addHere);
}

addHere();
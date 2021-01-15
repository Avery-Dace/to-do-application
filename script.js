const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const check = "completeCircle";
const uncheck = "completeCircle";
const lineThru = "crossOut"

function addItem(toDo,id,done ){

    const Done = done ? check : uncheck;
    conse Line = done ? lineThru: "";

    const text = `<li class="item">
            <i class="completeCircle ${Done}" job="complete" id="${id}"></i>
            <p class="text ${LINE}"> ${todo}</p>
            <i class="deleteCircle" job="delete" id="${id}></i>
    </li>`

    const position = "beforeEnd";
list.insertAdjacentElement(psition, text);
    }

addToDo("Study"); 

document.addEventListener("keyup", function(event)){
if(event.keyCode == 13)
const toDo= input.value;
    if(toDo){
        addToDo(toDo, id, false, false);
        List.push(
            {
            name:toDo,
            id: id,
            done: false,
            trash: false}
        );
        input.value ="";
        id++;
    }
}

let List = [];
let id = 0;

List =[{},{}, ...];

List[0]
{
    name: "Avery",
    id: 0,
    done:false,
    trash:false
}

List[1]
{
    name: "Dace"
    id:1,
    done:true,
    trash:false
}
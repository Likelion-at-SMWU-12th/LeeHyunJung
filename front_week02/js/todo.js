const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); 
const contentinput = document.querySelector(".content");
const dateinput = document.querySelector(".date");

const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo, newDate){
    const li = document.createElement("li");
    li.classList.add("todo-item");
    const span = document.createElement("span");
    // li.appendChild(span);
    span.innerText = `${newTodo} (기한: ${newDate})`;
    const button = document.createElement("button");
    button.innerText = "✅";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = contentinput.value;
    const newDate = dateinput.value;
    contentinput.value = "";
    dateinput.value = "";
    paintTodo(newTodo, newDate);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
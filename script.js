import checkComplete from "./Components/checkComplete.js";
import deleteIcon from "./Components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    
    const taskContext = document.createElement("div");
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContext.appendChild(checkComplete());
    taskContext.appendChild(titleTask);
    
    //task.innerHTML = content;
    task.appendChild(taskContext);
    task.appendChild(deleteIcon());

    list.appendChild(task);

};

//Arrows functions o funciones anonimas
btn.addEventListener("click", createTask);









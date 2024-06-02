window.addEventListener('load', () => {
    let form = document.querySelector('#taskForm');
    let input = document.querySelector('#newTaskInput');
    let tasks = document.querySelector('#tasks');
    let submitButton = document.querySelector('#taskSubmit');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let task = input.value ;
        if(!task){
            window.alert("Please fill out a task");
            return ;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const content_el = document.createElement("div"); 
        content_el.classList.add("content");
        
        task_el.appendChild(content_el); 

        const taskInput_el = document.createElement("input");
        taskInput_el.classList.add("text");
        taskInput_el.type = "text";
        taskInput_el.value = task ;
        taskInput_el.setAttribute("readonly", "readonly");

        content_el.appendChild(taskInput_el);

        const taskActions_el = document.createElement("div");
        taskActions_el.classList.add("actions");

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("edit");
        taskEdit.innerHTML = "Edit";

        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete");
        taskDelete.innerHTML = "Delete";

        taskActions_el.appendChild(taskEdit);
        taskActions_el.appendChild(taskDelete);
        
        task_el.appendChild(taskActions_el);

        tasks.appendChild(task_el);

        input.value = "";

        taskEdit.addEventListener('click', () => {
            if(taskEdit.innerText.toLowerCase() == "edit"){
                taskInput_el.removeAttribute("readonly");
                taskInput_el.focus();
                taskEdit.innerText = "Save";
            } else {
                taskInput_el.setAttribute("readonly", "readonly");
                taskEdit.innerText = "Edit";
            }
        });

        taskDelete.addEventListener('click', () => {
            tasks.removeChild(task_el);
        });
    });

    submitButton.addEventListener('click', () =>{
        form.dispatchEvent(new Event('submit', {
            bubbles : true,
            cancelable: true
        }));
    });
});



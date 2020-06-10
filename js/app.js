document.getElementById('formtask').addEventListener('submit', saveTask);

function saveTask(e){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title, //title: title,
        description
    };

    if(localStorage.getItem('tasks') === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    e.preventDefault();
}

function getTasks(){
    let tasks =JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = '';
    for(let i=0;i<tasks.length;i++){
        let title = tasks[i].title;
        alert(title);
        let description = tasks[i].description;
        tasksView.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p> ${title} - ${description}</p>
                <a class="btn btn-danger ml-5">Delete</a>
            </div>
        </div>`
    }
}

getTasks();
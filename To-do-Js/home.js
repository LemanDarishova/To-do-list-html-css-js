document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.querySelector('.task-list ul');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const checkIcon = document.createElement('i');
        checkIcon.className = 'fa-regular fa-circle';
        checkIcon.addEventListener('click', () => {
            toggleCheckIcon(checkIcon);
        });

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'bx bx-trash';
        deleteIcon.addEventListener('click', () => {
            li.remove();
        });

        const iconsContainer = document.createElement('div');
        iconsContainer.appendChild(checkIcon);
        iconsContainer.appendChild(deleteIcon);

        li.appendChild(iconsContainer);
        taskList.appendChild(li);
    }

    function toggleCheckIcon(icon) {
        if (icon.classList.contains('fa-circle')) {
            icon.classList.remove('fa-circle');
            icon.classList.add('fa-circle-check');
        } else {
            icon.classList.remove('fa-circle-check');
            icon.classList.add('fa-circle');
        }
    }
});

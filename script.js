const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.innerHTML = '&times;';

    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

   
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);


    taskList.appendChild(listItem);


    taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

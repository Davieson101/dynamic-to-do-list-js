document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        removeButton.onclick = () => {
          taskList.removeChild(listItem);
        };
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
      } else {
        alert("Please enter a task.");
      }
    };
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });

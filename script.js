const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask(taskText) {
    taskText = taskText.trim();
    if (taskText === '') {
        console.warn('Task cannot be empty. Please enter some text.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'task-item flex items-center bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition duration-150';
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.className = 'task-text flex-grow text-gray-800 text-lg cursor-pointer';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
   
    // Add classes for styling (margin-left, padding, text color, background color, rounded shape, transition)
    deleteButton.className = 'delete-btn ml-4 p-2 text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 rounded-full transition duration-150 transform hover:scale-110';
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(deleteButton);
    
    taskTextSpan.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // 6. Add event listener to delete the task
    // When the delete button is clicked, remove the entire listItem from the taskList (<ul>)
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // 7. Finally, add the newly created list item to the main task list (<ul>) in the DOM
    taskList.appendChild(listItem);

    // Clear the input field after a task has been added
    taskInput.value = '';
    // Set focus back to the input field so the user can quickly type the next task
    taskInput.focus();
}

// Event Listener for the "Add Task" button click
// When the button is clicked, call the addTask function with the current input value
addTaskBtn.addEventListener('click', () => {
    addTask(taskInput.value);
});

// Event Listener for the Enter key press in the input field
// Allows users to add tasks by pressing Enter, improving usability
taskInput.addEventListener('keypress', (event) => {
    // Check if the pressed key is 'Enter'
    if (event.key === 'Enter') {
        addTask(taskInput.value); // Add the task
    }
});

// Optional: Add some default tasks when the page loads for a better first experience
window.onload = function() {
    addTask('Plan weekly groceries 🛒');
    addTask('Call Jane about project 📞');
    addTask('Read "Dune" 📖');
};


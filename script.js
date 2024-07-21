// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim(); // Get the task input value

    if (taskText === '') return; // If taskText is empty, do nothing

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn'); // Add class to the button
    removeButton.onclick = function() {
        taskList.removeChild(li); // Remove the li element from taskList
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = '';
}

// Attach Event Listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

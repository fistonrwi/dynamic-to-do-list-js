document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // // Retrieve and trim the value from the task input field
        // const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new li element and set its textContent to taskText
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the li element
        taskItem.appendChild(removeButton);

        // Append the li to the taskList
        taskList.appendChild(taskItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Ensure the addTask function is invoked on DOMContentLoaded
    addTask();
});

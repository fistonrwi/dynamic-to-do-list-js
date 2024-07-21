document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' to avoid re-saving
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Check if taskText is not empty
        if (!taskText.trim()) {
            alert('Please enter a task!');
            return;
        }

        // Create a new li element and set its textContent to taskText
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Use classList.add() to add class

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            // Remove the task item from the DOM
            taskList.removeChild(taskItem);

            // Remove the task from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append the remove button to the li element
        taskItem.appendChild(removeButton);

        // Append the li to the taskList
        taskList.appendChild(taskItem);

        // Update Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', () => {
        addTask(taskInput.value.trim());
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});

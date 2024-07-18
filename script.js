// script.js

// Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage
    loadTasks();

    // Add Task Function
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new remove button element
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Attach event listener to remove button
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(taskText);
        };

        // Append remove button to list item
        li.appendChild(removeBtn);

        // Append list item to task list
        taskList.appendChild(li);

        // Store task in localStorage
        storeTaskInLocalStorage(taskText);

        // Clear the input field
        taskInput.value = '';
    }

    // Load Tasks from localStorage
    function loadTasks() {
        const tasks = getTasksFromLocalStorage();
        tasks.forEach(function (task) {
            const li = document.createElement('li');
            li.textContent = task;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            removeBtn.onclick = function () {
                taskList.removeChild(li);
                removeTaskFromLocalStorage(task);
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // Store Task in localStorage
    function storeTaskInLocalStorage(task) {
        const tasks = getTasksFromLocalStorage();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove Task from localStorage
    function removeTaskFromLocalStorage(task) {
        const tasks = getTasksFromLocalStorage();
        const filteredTasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }

    // Get Tasks from localStorage
    function getTasksFromLocalStorage() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    // Attach event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener to input field for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

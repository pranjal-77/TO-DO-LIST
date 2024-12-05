document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDate = document.getElementById('task-date').value;
    const taskTime = document.getElementById('task-time').value;

    if (taskName && taskDate && taskTime) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${taskName} - ${taskDescription} (Due: ${taskDate} at ${taskTime})`;
        taskList.appendChild(listItem);

        // Clear the input fields after adding the task
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('task-date').value = '';
        document.getElementById('task-time').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
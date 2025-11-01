let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const filter = document.getElementById('filter-select')?.value || 'all';
    const search = document.getElementById('search-input')?.value.toLowerCase() || '';

    const filtered = tasks.filter(task => {
        const matchesFilter = filter === 'all' ||
                              (filter === 'active' && !task.completed) ||
                              (filter === 'completed' && task.completed);
        const matchesSearch = task.text.toLowerCase().includes(search);
        return matchesFilter && matchesSearch;
    });

    filtered.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.draggable = true;
        if (task.completed) li.classList.add('completed');

        const taskInfo = document.createElement('div');
        taskInfo.className = 'task-info';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.dataset.index = index;

        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        const taskDate = document.createElement('span');
        taskDate.className = 'task-date';
        taskDate.textContent = task.date || '';

        taskInfo.appendChild(checkbox);
        taskInfo.appendChild(taskText);
        taskInfo.appendChild(taskDate);

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.dataset.index = index;
        editBtn.textContent = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.dataset.index = index;
        deleteBtn.textContent = 'Delete';

        taskActions.appendChild(editBtn);
        taskActions.appendChild(deleteBtn);

        li.appendChild(taskInfo);
        li.appendChild(taskActions);

        taskList.appendChild(li);
    });
}

export function addTask(text, date) {
    tasks.push({ text, date, completed: false });
    saveTasks();
    renderTasks();
}

export function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

export function toggleTask(index, completed) {
    tasks[index].completed = completed;
    saveTasks();
    renderTasks();
}

export function editTask(index, newText, newDate) {
    tasks[index].text = newText;
    tasks[index].date = newDate;
    saveTasks();
    renderTasks();
}

export function getTasks() {
    return tasks;
}

export function setTasks(newTasks) {
    tasks = newTasks;
    saveTasks();
    renderTasks();
}
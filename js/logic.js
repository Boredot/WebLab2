import { addTask, deleteTask, toggleTask, editTask, renderTasks, getTasks, setTasks } from './tasks.js';

export function setupEventListeners() {
    document.getElementById('task-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const text = document.getElementById('task-input').value.trim();
        const date = document.getElementById('date-input').value;

        if (!text) return;
        addTask(text, date);

        document.getElementById('task-input').value = '';
        document.getElementById('date-input').value = ''
    });

    document.getElementById('task-list').addEventListener('click', (e) => {
        const index = e.target.dataset.index;

        if (e.target.classList.contains('delete-btn')) {
            deleteTask(index);
        }

        if (e.target.type === 'checkbox') {
            toggleTask(index, e.target.checked);
        }

        if (e.target.classList.contains('edit-btn')) {
            const tasks = getTasks();
            const task = tasks[index];
            const newText = prompt('Input new task:', task.text);
            if (newText !== null) {
                const newDate = prompt('Input new date (YYYY-MM-DD):', task.date);
                if (newDate !== null) {
                    editTask(index, newText.trim(), newDate);
                }
            }
        }
    });

    document.getElementById('filter-select').addEventListener('change', () => {
        renderTasks();
    });

    document.getElementById('search-input').addEventListener('input', () => {
        renderTasks();
    });

    document.getElementById('sort-btn').addEventListener('click', () => {
        const tasks = getTasks();
        tasks.sort((a, b) => new Date(a.date || '2100-01-01') - new Date(b.date || '2100-01-01'));
        setTasks(tasks);
    });
}
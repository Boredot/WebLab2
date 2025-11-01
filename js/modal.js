import { editTask } from './tasks.js';

export function openEditModal(index, task) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const title = document.createElement('h3');
    title.textContent = 'Edit task';
    modal.appendChild(title);

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = task.text;
    textInput.placeholder = 'New task name';
    modal.appendChild(textInput);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = task.date || '';
    modal.appendChild(dateInput);

    const actions = document.createElement('div');
    actions.className = 'modal-actions';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.textContent = 'Cancel';

    actions.appendChild(saveBtn);
    actions.appendChild(cancelBtn);
    modal.appendChild(actions);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    saveBtn.addEventListener('click', () => {
        editTask(index, textInput.value.trim(), dateInput.value);
        document.body.removeChild(overlay);
    });

    cancelBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}
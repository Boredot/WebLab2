export function createForm() {
    const form = document.createElement('form');
    form.id = 'task-form';

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.id = 'task-input';
    taskInput.placeholder = 'Input task name';
    taskInput.required = true;

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'date-input';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';

    form.appendChild(taskInput);
    form.appendChild(dateInput);
    form.appendChild(submitBtn);

    return form;
}
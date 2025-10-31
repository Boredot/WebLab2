import { createForm } from './dom.js';

export function createAppUI() {
    const body = document.body;

    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'BTQ To-Do';
    header.appendChild(title);
    body.appendChild(header);

    const main = document.createElement('main');
    body.appendChild(main);

    const form = createForm();
    main.appendChild(form);

    const controlsDiv = document.createElement('div');
    controlsDiv.id = 'controls';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search-input';
    searchInput.placeholder = 'Search by task name';

    const filterSelect = document.createElement('select');
    filterSelect.id = 'filter-select';

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'All';
    filterSelect.appendChild(allOption);

    const activeOption = document.createElement('option');
    activeOption.value = 'active';
    activeOption.textContent = 'Active';
    filterSelect.appendChild(activeOption);

    const completedOption = document.createElement('option');
    completedOption.value = 'completed';
    completedOption.textContent = 'Completed';
    filterSelect.appendChild(completedOption);

    const sortBtn = document.createElement('button');
    sortBtn.id = 'sort-btn';
    sortBtn.textContent = 'Sort by date';

    controlsDiv.appendChild(searchInput);
    controlsDiv.appendChild(filterSelect);
    controlsDiv.appendChild(sortBtn);
    main.appendChild(controlsDiv);

    const taskList = document.createElement('ul');
    taskList.id = 'task-list';
    main.appendChild(taskList);

    const footer = document.createElement('footer');
    const footerText1 = document.createElement('p');
    footerText1.textContent = 'Semyon Shevchenko';
    const footerText2 = document.createElement('p');
    footerText2.textContent = 'tg:@boredot';
    const footerText3 = document.createElement('p');
    footerText3.textContent = '409886@niuitmo.ru';
    footer.appendChild(footerText1);
    footer.appendChild(footerText2);
    footer.appendChild(footerText3);
    body.appendChild(footer);
}
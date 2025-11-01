import { setupEventListeners } from './js/logic.js';
import { createAppUI } from './js/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    createAppUI();
    setupEventListeners();
});
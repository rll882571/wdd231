import { initializeHome } from './home.js';
import { initializeDirectory } from './directory.js';
import { initializeTestPage } from './test.js'; // 1. IMPORTA A NOVA FUNÇÃO

// Lógica para decidir qual função rodar
const path = window.location.pathname;

if (path.includes("index.html") || path.endsWith("/")) {
    initializeHome();
} else if (path.includes("directory.html")) {
    initializeDirectory();
} else if (path.includes("test.html")) { // 2. ADICIONA A CONDIÇÃO PARA A PÁGINA DE TESTE
    initializeTestPage();
}
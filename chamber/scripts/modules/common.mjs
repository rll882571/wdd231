// ==========================
// MENU HAMBURGER
// ==========================
export function initializeCommon() {
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

// Verifica se os dois elementos existem na página antes de adicionar o evento
if (navButton && navBar) {
  navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');  
    navBar.classList.toggle('show');
  });
}
}
// --- SCRIPT PARA O FOOTER ---

// Seleciona o <span> para o ano atual
const currentYearSpan = document.getElementById("currentyear");
// Cria um objeto de data e pega o ano completo
const currentYear = new Date().getFullYear();
// Insere o ano no HTML
currentYearSpan.textContent = currentYear;

// Seleciona o <p> para a data de modificação
const lastModifiedParagraph = document.getElementById("lastModified");
// Pega a data da última modificação do documento
const lastModifiedDate = document.lastModified;
// Insere o texto e a data no HTML
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
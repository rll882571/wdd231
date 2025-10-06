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

const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show'); 
  navBar.classList.toggle('show');
});


// last modified and current year.
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('currentyear');
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
  const lastModifiedEl = document.getElementById('lastModified');
  const lastModified = document.lastModified;
  lastModifiedEl.textContent = `Last modified: ${lastModified}`;
});
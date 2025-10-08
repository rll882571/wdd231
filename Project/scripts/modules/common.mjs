// ==========================
// COMMON FUNCTIONALITY
// ==========================

// Menu Hamburger
function initializeCommon() {
    const navButton = document.querySelector('#nav-button');
    const navBar = document.querySelector('#nav-bar');

    if (navButton && navBar) {
        navButton.addEventListener('click', () => {
            navButton.classList.toggle('show');  
            navBar.classList.toggle('show');
        });
    }
    
    // Footer year and last modified
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        const lastModifiedDate = document.lastModified;
        lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCommon);
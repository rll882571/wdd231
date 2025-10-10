// ==========================
// COMMON FUNCTIONALITY (Header + Footer)
// ==========================
function initializeCommon() {
    const navButton = document.querySelector('#nav-button');
    const navBar = document.querySelector('#nav-bar');

    if (navButton && navBar) {
        navButton.addEventListener('click', () => {
            navButton.classList.toggle('show');
            navBar.classList.toggle('show');
        });
    }

    // Footer: ano atual e última modificação
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
    if (lastModifiedParagraph)
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}

// ==========================
// DISCOVER PAGE FUNCTIONALITY
// ==========================
const url = 'data/discover.json';
const gallery = document.querySelector('#discover-gallery');
const visitMessage = document.querySelector('#visit-message');

// Busca os dados JSON
async function getDiscoverData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data.places);
}

// Exibe os lugares
function displayPlaces(places) {
    places.forEach(place => {
        const card = document.createElement('section');
        card.classList.add('place-card');

        const title = document.createElement('h2');
        title.textContent = place.name;

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = place.image;
        img.alt = place.name;
        img.loading = 'lazy';
        figure.appendChild(img);

        const address = document.createElement('address');
        address.textContent = place.address;

        const description = document.createElement('p');
        description.textContent = place.description;

        const button = document.createElement('button');
        button.textContent = "Learn More";

        card.append(title, figure, address, description, button);
        gallery.appendChild(card);
    });
}

// ==========================
// VISITOR MESSAGE
// ==========================
function showVisitMessage() {
    const lastVisit = Number(localStorage.getItem('lastVisit')) || 0;
    const now = Date.now();
    const msInDay = 86400000;
    let message = "";

    if (lastVisit === 0) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((now - lastVisit) / msInDay);
        if (daysBetween < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysBetween} days ago.`;
        }
    }

    visitMessage.textContent = message;
    localStorage.setItem('lastVisit', now);
}

// ==========================
// INITIALIZE ALL
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    initializeCommon();
    getDiscoverData();
    showVisitMessage();
});

document.addEventListener('DOMContentLoaded', () => {

    // --- PARTE 1: LÓGICA DA MENSAGEM DE VISITA (localStorage) ---

    const visitMessageElement = document.querySelector("#visit-message");
    const lastVisit = localStorage.getItem("lastVisitDate");
    const now = Date.now();

    if (!lastVisit) {
        // Primeira visita do usuário
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = parseInt(lastVisit, 10);
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            // Menos de um dia desde a última visita
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else {
            // Mais de um dia
            const dayText = daysDiff === 1 ? "day" : "days"; // Trata o singular/plural
            visitMessageElement.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        }
    }

    // Armazena a data da visita atual para a próxima vez
    localStorage.setItem("lastVisitDate", now.toString());


    // --- PARTE 2: CARREGAR OS CARDS DA GALERIA DO JSON ---

    const galleryElement = document.querySelector("#discover-gallery");
    const dataUrl = 'data/discover.json'; // Caminho para o seu arquivo JSON

    async function getPlacesData() {
        try {
            const response = await fetch(dataUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // A sua grid CSS foi feita para 8 itens (a-h). Se houver mais, pegamos apenas os 8 primeiros.
            displayPlaces(data.places.slice(0, 8)); 
        } catch (error) {
            console.error("Failed to fetch places data:", error);
            galleryElement.innerHTML = "<p>Sorry, we couldn't load the discovery items at this time.</p>";
        }
    }

    const displayPlaces = (places) => {
        places.forEach((place, index) => {
            // Cria os elementos do card
            let card = document.createElement('div');
            card.className = 'place-card';
            // Atribui a área do grid dinamicamente
            card.style.gridArea = String.fromCharCode(97 + index); // 97 é 'a' em ASCII. a, b, c...

            let title = document.createElement('h2');
            let figure = document.createElement('figure');
            let image = document.createElement('img');
            let address = document.createElement('address');
            let description = document.createElement('p');
            let button = document.createElement('button');

            // Preenche os elementos com os dados do JSON
            title.textContent = place.name;
            address.textContent = place.address;
            description.textContent = place.description;
            button.textContent = 'Learn More';

            // Configura os atributos da imagem
            image.setAttribute('src', `images/${place.image}`);
            image.setAttribute('alt', `Image of ${place.name}`);
            image.setAttribute('width', '300'); // Conforme a instrução 
            image.setAttribute('height', '200'); // Conforme a instrução 
            image.setAttribute('loading', 'lazy');

            // Monta a estrutura do card
            figure.appendChild(image);
            card.appendChild(title);
            card.appendChild(figure);
            card.appendChild(description);
            card.appendChild(address);
            card.appendChild(button);

            // Adiciona o card completo à galeria
            galleryElement.appendChild(card);
        });
    }

    // Inicia o processo
    getPlacesData();
});
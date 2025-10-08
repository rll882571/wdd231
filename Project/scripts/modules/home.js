// ==========================
// LÓGICA DA PÁGINA INICIAL (HOME)
// ==========================
export function initializeHome() {
    // ==========================
    // CHAMBER CARDS (home-grid2) - Membros em Destaque
    // ==========================
    const container2 = document.getElementById('home-grid2');
    if (container2) {
        fetch('./data/members.json')
            .then(resp => resp.json())
            .then(data => {
                const highLevelMembers = data.companies.filter(company =>
                    company.membership_level === 2 || company.membership_level === 3
                );

                for (let i = highLevelMembers.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [highLevelMembers[i], highLevelMembers[j]] = [highLevelMembers[j], highLevelMembers[i]];
                }

                const spotlights = highLevelMembers.slice(0, 3);

                spotlights.forEach(company => {
                    const card = document.createElement('section');
                    card.classList.add('card');
                    card.innerHTML = `
                      <div class="business-info">
                        <h2>${company.name}</h2>
                        <p class="tag-line">${company.services[0]}</p>
                        <div class="details">
                          <div class="image-placeholder">
                            <img src="./images/${company.image_filename}" alt="${company.name}" 
                                 style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">
                          </div>
                          <div class="contact-details">
                            <p><strong>PHONE:</strong> ${company.phone}</p>
                            <p><strong>URL:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                          </div>
                        </div>
                      </div>
                    `;
                    container2.appendChild(card);
                });
            })
            .catch(err => console.error('Erro ao carregar JSON para destaques:', err));
    }


    // ==========================
    // SESSÕES DINÂMICAS (home-grid)
    // ==========================
    const homeGrid = document.getElementById("home-grid");
    if (homeGrid) {
        // SESSÃO 1: EVENTS
        const eventsSection = document.createElement("section");
        eventsSection.id = "events";
        eventsSection.classList.add("card");
        eventsSection.innerHTML = `
          <h2>Test Calendar</h2>
          <p>English Proficiency Test: October 25th, 9:00 AM.</p>
          <p>Advanced Grammar Quiz: November 5th, 2:00 PM.</p>
        `;
        homeGrid.appendChild(eventsSection);

        // SESSÃO 2: QUOTE OF THE DAY
        const quoteSection = document.createElement("section");
        quoteSection.id = "quote-day";
        quoteSection.classList.add("card");
        quoteSection.innerHTML = `
            <h2>Quote of the Day</h2>
            <p id="quote-text" style="font-style: italic;">Loading quote...</p>
            <em id="quote-author"></em>
        `;
        homeGrid.appendChild(quoteSection);


        // SESSÃO 3: WORD OF THE DAY
        const wordSection = document.createElement("section");
        wordSection.id = "word-day";
        wordSection.classList.add("card");
        wordSection.innerHTML = `
            <h2>Word of the Day</h2>
            <h3 id="word-title" style="text-transform: capitalize;">Loading word...</h3>
            <p id="word-definition"></p>
        `;
        homeGrid.appendChild(wordSection);

        // ==========================
        // FUNÇÕES DE API
        // ==========================

        async function fetchQuote() {
            const quoteText = document.getElementById('quote-text');
            const quoteAuthor = document.getElementById('quote-author');
            try {
                const response = await fetch('https://api.quotable.io/random');
                if (!response.ok) throw new Error('Failed to fetch quote.');
                const data = await response.json();
                quoteText.textContent = `"${data.content}"`;
                quoteAuthor.textContent = `— ${data.author}`;
            } catch (error) {
                console.error("Quote API Error:", error);
                quoteText.textContent = "Could not retrieve a quote at this time.";
            }
        }

        async function fetchWordOfTheDay() {
            const wordTitle = document.getElementById('word-title');
            const wordDefinition = document.getElementById('word-definition');
            try {
                const wordResponse = await fetch('https://random-word-api.herokuapp.com/word');
                if (!wordResponse.ok) throw new Error('Failed to fetch random word.');
                const wordData = await wordResponse.json();
                const randomWord = wordData[0];

                const defResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
                if (!defResponse.ok) {
                     return fetchWordOfTheDay();
                }
                const defData = await defResponse.json();
                wordTitle.textContent = defData[0].word;
                wordDefinition.textContent = defData[0].meanings[0].definitions[0].definition;

            } catch (error) {
                console.error("Word API Error:", error);
                wordTitle.textContent = "Resilience";
                wordDefinition.textContent = "The capacity to recover quickly from difficulties; toughness.";
            }
        }
        
        // --- NOVA FUNÇÃO DE DEPOIMENTOS ---
        async function fetchTestimonials() {
            try {
                const response = await fetch('data/testimonials.json');
                if (!response.ok) throw new Error('Failed to fetch testimonials');
                const data = await response.json();

                data.testimonials.forEach(testimonial => {
                    const card = document.createElement('section');
                    // Adiciona a classe 'card' para pegar o estilo base, e uma específica
                    card.classList.add('card', 'testimonial-card'); 

                    card.innerHTML = `
                        <img src="images/${testimonial.photo}" alt="Photo of ${testimonial.name}" loading="lazy" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 10px auto; display: block;">
                        <h3>${testimonial.name}</h3>
                        <p style="font-style: italic;">"${testimonial.quote}"</p>
                        <p><strong>${testimonial.improvement}</strong></p>
                    `;
                    // Adiciona o card diretamente ao homeGrid
                    homeGrid.appendChild(card);
                });
            } catch (error) {
                console.error("Testimonial Error:", error);
            }
        }


        // Chama todas as funções para popular a grid
        fetchQuote();
        fetchWordOfTheDay();
        fetchTestimonials();
    }
}
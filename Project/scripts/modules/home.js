// ==========================
// HOME PAGE FUNCTIONALITY
// ==========================

function initializeHome() {
    const homeGrid = document.getElementById('home-grid');
    const homeGrid2 = document.getElementById('home-grid2');
    
    if (homeGrid) {
        createTopCards(homeGrid);
    }
    
    if (homeGrid2) {
        createTestimonialCards(homeGrid2);
    }
}

function createTopCards(container) {
    // Card 1: Next Tests
    const testsSection = document.createElement("section");
    testsSection.id = "tests";
    testsSection.classList.add("card");
    testsSection.innerHTML = `
        <h2>Next Tests</h2>
        <p><strong>TOEFL Practice Test:</strong> October 15, 2023</p>
        <p><strong>IELTS Simulation:</strong> October 22, 2023</p>
        <p><strong>General English Assessment:</strong> October 29, 2023</p>
    `;
    container.appendChild(testsSection);

    // Card 2: Quote of the Day
    const quoteSection = document.createElement("section");
    quoteSection.id = "quote";
    quoteSection.classList.add("card");
    quoteSection.innerHTML = `
        <h2>Quote of the Day</h2>
        <div id="quote-display">
            <p id="quote-text">Loading quote...</p>
            <p id="quote-author"></p>
        </div>
    `;
    container.appendChild(quoteSection);
    
    // Fetch quote from API
    fetchQuoteOfTheDay();

    // Card 3: Word of the Day
    const wordSection = document.createElement("section");
    wordSection.id = "word";
    wordSection.classList.add("card");
    wordSection.innerHTML = `
        <h2>Word of the Day</h2>
        <div id="word-display">
            <p id="word-text">Loading word...</p>
            <p id="word-definition"></p>
        </div>
    `;
    container.appendChild(wordSection);
    
    // Fetch word from API
    fetchWordOfTheDay();
}

function createTestimonialCards(container) {
    fetch('./data/testimonials.json')
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.json();
        })
        .then(data => {
            // Clear any existing content
            container.innerHTML = '';
            
            data.testimonials.forEach(testimonial => {
                const card = document.createElement('section');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="testimonial-info">
                        <h2>${testimonial.name}</h2>
                        <div class="details">
                            <div class="image-placeholder">
                                <img src="./images/${testimonial.photo}" alt="${testimonial.name}" 
                                     style="width: 100px; height: 100px; object-fit: cover; border-radius: 5px;"
                                     loading="lazy">
                            </div>
                            <div class="testimonial-details">
                                <p class="quote">"${testimonial.quote}"</p>
                                <p class="improvement"><strong>${testimonial.improvement}</strong></p>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Error loading testimonials:', err);
            container.innerHTML = '<p>Error loading testimonials. Please try again later.</p>';
        });
}

function fetchQuoteOfTheDay() {
    // Using a free quotes API
    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const quoteText = document.getElementById('quote-text');
            const quoteAuthor = document.getElementById('quote-author');
            
            if (quoteText && quoteAuthor) {
                quoteText.textContent = `"${data.content}"`;
                quoteAuthor.textContent = `- ${data.author}`;
            }
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            const quoteText = document.getElementById('quote-text');
            const quoteAuthor = document.getElementById('quote-author');
            
            if (quoteText && quoteAuthor) {
                quoteText.textContent = '"The limits of my language are the limits of my world."';
                quoteAuthor.textContent = '- Ludwig Wittgenstein';
            }
        });
}

function fetchWordOfTheDay() {
    // Fallback approach since most word APIs require keys
    const words = [
        { word: "proficient", definition: "competent or skilled in doing or using something" },
        { word: "comprehensive", definition: "complete; including all or nearly all elements or aspects of something" },
        { word: "articulate", definition: "having or showing the ability to speak fluently and coherently" },
        { word: "fluent", definition: "able to express oneself easily and articulately" },
        { word: "vocabulary", definition: "the body of words used in a particular language" }
    ];
    
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const wordText = document.getElementById('word-text');
    const wordDefinition = document.getElementById('word-definition');
    
    if (wordText && wordDefinition) {
        wordText.textContent = randomWord.word;
        wordDefinition.textContent = randomWord.definition;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeHome);
const words = [
    {
        english: "Apple",
        portuguese: "maçã"
    },
    {
        english: "Dog",
        portuguese: "cachorro"
    },
    {
        english: "House",
        portuguese: "casa"
    },
    {
        english: "Book",
        portuguese: "livro"
    },
    {
        english: "Water",
        portuguese: "água"
    }
];

let currentIndex = 0;

const englishWord = document.getElementById("englishWord");
const recordBtn = document.getElementById("recordBtn");
const result = document.getElementById("result");
const statusText = document.getElementById("status");
const nextBtn = document.getElementById("nextBtn");

function loadWord() {
    englishWord.textContent = words[currentIndex].english;
    result.textContent = "";
    statusText.textContent = "Clique para responder";
}

loadWord();

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Seu navegador não suporta reconhecimento de voz.");
} else {

    const recognition = new SpeechRecognition();

    recognition.lang = "pt-BR";

    recordBtn.addEventListener("click", () => {

        recognition.start();

        statusText.textContent = "🎙 Ouvindo...";
    });

    recognition.onresult = (event) => {

        const transcript =
            event.results[0][0].transcript.toLowerCase().trim();

        statusText.textContent =
            "Você falou: " + transcript;

        const correctAnswer =
            words[currentIndex].portuguese.toLowerCase();

        if (transcript === correctAnswer) {

            result.innerHTML = "✅ Correto!";
            result.style.color = "#7bed9f";

        } else {

            result.innerHTML =
                `❌ Errado!<br>Resposta: ${correctAnswer}`;

            result.style.color = "#ff6b81";
        }
    };

    recognition.onerror = () => {
        statusText.textContent =
            "Erro no reconhecimento de voz.";
    };
}

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    loadWord();
});
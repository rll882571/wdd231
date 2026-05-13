const words = [
    {
        english: "once",
        portuguese: "uma vez"
    },
    {
        english: "there was",
        portuguese: "havia"
    },
    {
        english: "Young men",
        portuguese: "jovem"
    },
    {
        english: "lived",
        portuguese: "morava"
    },
    {
        english: "his",
        portuguese: "dele"
    },
{
        english: "small",
        portuguese: "pequena"
    },
{
        english: "at the foot",
        portuguese: "no pé"
    },
{
        english: "foggy",
        portuguese: "nevoada"
    },
{
        english: "mountain",
        portuguese: "montanha"
    },
{
        english: "were",
        portuguese: "eram"
    },
{
        english: "poor",
        portuguese: "pobre"
    },
{
        english: "their",
        portuguese: "deles"
    },
{
        english: "way",
        portuguese: "maneira/jeito/caminho"
    },
{
        english: "make",
        portuguese: "fazer"
    },
{
        english: "made",
        portuguese: "fez"
    },
{
        english: "of making",
        portuguese: "de fazer"
    },
{
        english: "was",
        portuguese: "era/foi/estava/tinha(idade)"
    },
{
        english: "sell",
        portuguese: "vender"
    },
{
        english: "sold",
        portuguese: "vendeu"
    },
{
        english: "was selling",
        portuguese: "era vender/estava vendendo"
    },
{
        english: "one morning",
        portuguese: "certa manha"
    },
{
        english: "his mother",
        portuguese: "a mãe dele"
    },
{
        english: "wake up",
        portuguese: "acordar"
    },
{
        english: "woke up",
        portuguese: "acordou"
    },
{
        english: "him",
        portuguese: "ele"
    },
{
        english: "early",
        portuguese: "cedo"
    },
{
        english: "late",
        portuguese: "tarde"
    },
{
        english: "go",
        portuguese: "ir"
    },
{
        english: "went",
        portuguese: "foi"
    },
{
        english: "at least",
        portuguese: "no minimo"
    },
{
        english: "less",
        portuguese: "menos"
    },
{
        english: "shout",
        portuguese: "gritar"
    },
{
        english: "half",
        portuguese: "meio/metade"
    },
{
        english: "meet",
        portuguese: "encontar/conhecer"
    },
{
        english: "met",
        portuguese: "conheceu/encontrou"
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
const frases = [
    "Once",
    "there was",
    "a young man",
    "named",
    "He lived",
    "with his mother",
    "on a",
    "small farm",
    "at the foot",
    "of the Foggy Mountains",
    "Jack and his mother",
    "were",
    "very poor",
    "Their",
    "only way",
    "making Money",
    "Their only way of making Money",
    "was",
    "selling",
    "from cow",
    "Their only way of making money was selling the milk from their cow",
    "One morning",
    "Jack's mother",
    "woke up",
    "him",
    "early",
    "Jack's mother woke him up early",
    "It was",
    "still",
    "outside",
    "It was still dark",
    "outside. She was crying",
    "wake up",
    "Go to the Market",
    "sell",
    "our cow",
    "But why",
    "asked",
    "yawning",
    "to fix",
    "our house",
    "There are",
    "holes",
    "in the roof",
    "The",
    "Windows",
    "broken",
    "The windows are broken",
    "we have no front door",
    "Winter",
    "coming",
    "soon",
    "Winter is coming soon",
    "If",
    "If we don't fix the house",
    "cold",
    "the cold will kill us!",
    "packed",
    "his bag",
    "fetched",
    "from the barn",
    "As",
    "he was walking",
    "out the gate",
    "As he was walking out the gate",
    "heard",
    "shout",
    "She",
    "Worth",
    "She is Worth",
    "gold coins",
    "at least",
    "She is worth at least five gold coins",
    "Don’t sell her for less",
    "less",
    "When",
    "half way",
    "When Jack was half way to the Market",
    "met",
    "an old man",
    "he met an old man",
    "When Jack was half way to the market, he met an old man",
    "Good morning, my boy",
    "said",
    "the old man",
    "Where",
    "Where are you going today?",
    "sir",
    "Good morning, sir",
    "replied",
    "I'm going to the Market",
    "Her name is",
    "I'm going to the market to sell my cow. Her name is",
    "beautiful cow",
    "She is a beautiful cow",
    "said the man",
    "I will buy",
    "give",
    "deal",
    "I will buy Bess, and I will",
    "give you a very good deal",
    "How much",
    "pay",
    "How much will you pay for her?",
    "I won’t",
    "take",
    "I won’t take",
    "less than five gold coins",
    "I won’t take less than five gold coins!",
    "said Jack",
    "I don't have five gold coins",
    "whispered the man",
    "these",
    "five black beans",
    "These beans are magic",
    "They are",
    "more than gold",
    "They are worth more than gold",
    "If you take these beans",
    "you will be",
    "richer than",
    "the",
    "richest man",
    "in the world",
    "thought",
    "about",
    "Jack thought about his mother",
    "how happy",
    "would",
    "she",
    "she would be if they were rich",
    "They could fix the roof",
    "the Windows",
    "and the front door",
    "Maybe",
    "a new cow",
    "they could buy",
    "You’ve got a deal",
    "Give me the beans",
    "very excited",
    "Jack was very excited",
    "ran",
    "home",
    "showed",
    "He ran home and showed his mother the beans",
    "But",
    "instead of",
    "being happy",
    "furious",
    "she was furious",
    "But instead of being happy"
];

let indexAtual = 0;
let acertos = 0;
let ultimaTranscricao = "";

// Compatibilidade com navegador
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (!SpeechRecognition) {
    alert("Seu navegador não suporta reconhecimento de voz 😢 (use Google Chrome)");
} else {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
}

// Elementos da tela
const btnGravar = document.getElementById('btn-gravar');
const btnProxima = document.getElementById('btn-proxima');
const displayFrase = document.getElementById('frase-alvo');
const displayTranscricao = document.getElementById('transcricao-box');
const progressBar = document.getElementById('progress-bar');
const statusPergunta = document.getElementById('status-pergunta');

// Atualiza interface
function atualizarInterface() {
    displayFrase.textContent = frases[indexAtual];
    statusPergunta.textContent = `Frase ${indexAtual + 1} de ${frases.length}`;
    progressBar.style.width = `${((indexAtual + 1) / frases.length) * 100}%`;
    displayTranscricao.textContent = "Aguardando gravação...";
    displayTranscricao.style.color = "#666";
    btnProxima.disabled = true;
    ultimaTranscricao = "";
}

// Botão gravar
btnGravar.onclick = () => {
    if (!recognition) return;

    try {
        recognition.start();
        displayTranscricao.textContent = "Ouvindo...";
    } catch (e) {
        console.log("Já está gravando...");
    }
};

// Resultado do reconhecimento
if (recognition) {
    recognition.onresult = (event) => {
        ultimaTranscricao = event.results[0][0].transcript;
        displayTranscricao.textContent = `Você disse: "${ultimaTranscricao}"`;
        btnProxima.disabled = false;
    };

    recognition.onerror = (event) => {
        displayTranscricao.textContent = "Erro ao reconhecer voz 😢";
        btnProxima.disabled = true;
    };

    recognition.onend = () => {
        // Pode adicionar comportamento ao finalizar gravação, se quiser
    };
}

// Botão próxima
btnProxima.onclick = () => {
    if (!ultimaTranscricao) return;

    const falado = ultimaTranscricao
        .toLowerCase()
        .replace(/[.,?!]/g, "")
        .trim();

    const original = frases[indexAtual]
        .toLowerCase()
        .replace(/[.,?!]/g, "")
        .trim();

    // Comparação mais flexível
    if (falado.includes(original) || original.includes(falado)) {
        acertos++;
    }

    indexAtual++;

    if (indexAtual < frases.length) {
        atualizarInterface();
    } else {
        document.getElementById('modal-resultado').classList.remove('hidden');
        document.getElementById('pontuacao-final').textContent =
            `Você acertou ${acertos} de ${frases.length} frases!`;
    }
};

// Iniciar quiz
atualizarInterface();

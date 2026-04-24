const frases = [
   "Once there was a young man named Jack",
    "He lived with his mother on a small farm",
    "Jack and his mother were very poor",
    "Go to the market today and sell our cow",
    "We need money to fix our house",
    "If we don't fix the house the cold will kill us",
    "She is worth at least five gold coins",
    "Don't sell her for less",
    "Where are you going today",
    "I am going to the market to sell my cow",
    "I will buy Bess and I will give you a very good deal",
    "These beans are magic beans",
    "They are worth more than gold",
    "You will be richer than the richest man in the world",
    "Give me the beans",
    "You traded our only cow for a handful of beans",
    "She took the beans and threw them out the window",
    "They no longer had a cow",
    "There was a giant green beanstalk",
    "The beans really are magic"
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
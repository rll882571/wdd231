// 1. Banco de Dados dos Exercícios
const exercicios = [
    { audio: "audios/once.mp3", resposta: "Once" },
    { audio: "audios/there.mp3", resposta: "There" },
    { audio: "audios/was.mp3", resposta: "Was" },
    { audio: "audios/a.mp3", resposta: "A" },
    { audio: "audios/young.mp3", resposta: "Young" },
    { audio: "audios/man.mp3", resposta: "Man" },
    { audio: "audios/name.mp3", resposta: "Name" },
    { audio: "audios/he.mp3", resposta: "He" },
    { audio: "audios/live.mp3", resposta: "Live" },
    { audio: "audios/with.mp3", resposta: "With" },
    { audio: "audios/his.mp3", resposta: "His" },
    { audio: "audios/mother.mp3", resposta: "Mother" },
    { audio: "audios/on.mp3", resposta: "On" },
    { audio: "audios/small.mp3", resposta: "Small" },
    { audio: "audios/farm.mp3", resposta: "Farm" },
    { audio: "audios/at.mp3", resposta: "At" },
    { audio: "audios/foot.mp3", resposta: "Foot" },
    { audio: "audios/foggy.mp3", resposta: "Foggy" },
    { audio: "audios/mountains.mp3", resposta: "Mountains" },
    { audio: "audios/his_2.mp3", resposta: "His" },
    { audio: "audios/were.mp3", resposta: "Were" },
    { audio: "audios/very.mp3", resposta: "Very" },
    { audio: "audios/poor.mp3", resposta: "Poor" }
];

// 2. Variáveis de Estado
let indexAtual = 0;
let acertos = 0;
let ultimaTranscricao = "";
const audioPlayer = new Audio();

// 3. Configuração do Reconhecimento de Voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
} else {
    alert("Seu navegador não suporta reconhecimento de voz. Tente o Google Chrome.");
}

// 4. Elementos do DOM
const btnOuvir = document.getElementById('btn-ouvir');
const btnGravar = document.getElementById('btn-gravar');
const btnProxima = document.getElementById('btn-proxima');
const displayTranscricao = document.getElementById('transcricao-box');
const progressBar = document.getElementById('progress-bar');
const statusPergunta = document.getElementById('status-pergunta');

// 5. Funções de Lógica
function tocarAudio() {
    audioPlayer.src = exercicios[indexAtual].audio;
    audioPlayer.play().catch(e => console.error("Erro ao tocar áudio:", e));
}

function atualizarInterface() {
    // Atualiza progresso visual
    const progresso = ((indexAtual + 1) / exercicios.length) * 100;
    progressBar.style.width = `${progresso}%`;
    statusPergunta.textContent = `Palavra ${indexAtual + 1} de ${exercicios.length}`;
    
    // Reseta textos
    displayTranscricao.textContent = "Clique em 'Ouvir Palavra'";
    displayTranscricao.style.color = "#666";
    btnProxima.disabled = true;
    ultimaTranscricao = "";

    // Toca o áudio automaticamente após um pequeno delay
    setTimeout(tocarAudio, 800);
}

// 6. Eventos de Clique
btnOuvir.onclick = () => tocarAudio();

btnGravar.onclick = () => {
    if (!recognition) return;
    try {
        recognition.start();
        displayTranscricao.textContent = "Ouvindo...";
        displayTranscricao.style.color = "var(--accent)";
    } catch (e) {
        console.log("Reconhecimento já ativo.");
    }
};

// 7. Processamento do Resultado da Voz
if (recognition) {
    recognition.onresult = (event) => {
        ultimaTranscricao = event.results[0][0].transcript;
        displayTranscricao.textContent = `Você disse: "${ultimaTranscricao}"`;
        displayTranscricao.style.color = "var(--primary)";
        btnProxima.disabled = false;
    };

    recognition.onerror = () => {
        displayTranscricao.textContent = "Erro ao capturar voz. Tente novamente.";
        displayTranscricao.style.color = "red";
    };
}

// 8. Botão Próxima / Verificar
btnProxima.onclick = () => {
    const falado = ultimaTranscricao.toLowerCase().trim().replace(/[.,?!]/g, "");
    const correto = exercicios[indexAtual].resposta.toLowerCase().trim().replace(/[.,?!]/g, "");

    // Verificação simples (você pode usar .includes() se quiser ser mais flexível)
    if (falado === correto) {
        acertos++;
    }

    indexAtual++;

    if (indexAtual < exercicios.length) {
        atualizarInterface();
    } else {
        finalizarTreino();
    }
};

function finalizarTreino() {
    const modal = document.getElementById('modal-resultado');
    const pontuacaoTexto = document.getElementById('pontuacao-final');
    
    modal.classList.remove('hidden');
    pontuacaoTexto.textContent = `Você acertou ${acertos} de ${exercicios.length} palavras!`;
}

// Início do App
atualizarInterface();
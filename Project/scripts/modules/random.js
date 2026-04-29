// 1. Configurações da ElevenLabs - USE SUA CHAVE AQUI
const API_KEY = "sk_2f650b3196aca4ee39ec79c3546e67089bce5a3f67908215"; 
const VOICE_ID = "hpp4J3VqNfWAUOO0d1Us"; // Voz "Rachel" (Feminina/Natural)

const bancoDeDadosCompleto = [
    { texto: "Once", portugues: "Uma vez" },
    { texto: "There Was", portugues: "Havia / Tinha" },
    { texto: "Young", portugues: "Jovem" },
    { texto: "Live", portugues: "Viver / Morar" },
    { texto: "Lived", portugues: "Viveu / Morou" },
    { texto: "With", portugues: "Com" },
    { texto: "His", portugues: "Dele" },
    { texto: "Mother", portugues: "Mãe" },
    { texto: "On a Small Farm", portugues: "Em um apequena fazenda" },
    { texto: "At Foot", portugues: "pé" },
    { texto: "Mountain", portugues: "Montanha" },
    { texto: "Were", portugues: "Eram / Estavam" },
    { texto: "Very", portugues: "Muito" },
    { texto: "Poor", portugues: "Pobre" },
    { texto: "They were very Poor", portugues: "Eles eram muito pobres" },
    { texto: "Money", portugues: "Dinheiro" },
    { texto: "Making", portugues: "Fazendo" },
    { texto: "Way", portugues: "Caminho / Jeito" },
    { texto: "Their only way of making money", portugues: "A ulnima maneira deles fazerem dinheiro" }
];

let palavrasDisponiveis = [...bancoDeDadosCompleto];
let acertos = 0;
let rodadaAtual = 0;
const totalRodadas = bancoDeDadosCompleto.length; 
let opcoesDaRodada = [];
let indiceCorreto = null;
let escolhaUsuario = null;
const audioPlayer = new Audio();

const displayPalavra = document.getElementById('palavra-alvo');
const botoesAudio = document.querySelectorAll('.btn-audio-play');
const btnVerificar = document.getElementById('btn-verificar');
const progressBar = document.getElementById('progress-bar');

// --- FUNÇÃO PARA CHAMAR A API DA ELEVENLABS ---
async function falarComElevenLabs(texto) {
    try {
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
            method: "POST",
            headers: {
                "xi-api-key": API_KEY, // A ElevenLabs usa esse cabeçalho específico
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: texto,
                model_id: "eleven_multilingual_v2",
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75
                }
            })
        });

        if (!response.ok) {
            const erroData = await response.json();
            console.error("Detalhes do erro:", erroData);
            throw new Error("Erro na API da ElevenLabs.");
        }

        const blob = await response.blob();
        const urlAudio = URL.createObjectURL(blob);
        audioPlayer.src = urlAudio;
        audioPlayer.play();
    } catch (error) {
        console.error("Erro ElevenLabs:", error);
        alert("Ops! Verifique se a chave está ativa ou se o limite gratuito acabou.");
    }
}

function iniciarRodada() {
    escolhaUsuario = null;
    btnVerificar.disabled = true;
    botoesAudio.forEach(btn => btn.classList.remove('active'));

    const indexAleatorio = Math.floor(Math.random() * palavrasDisponiveis.length);
    const palavraCorreta = palavrasDisponiveis[indexAleatorio];
    palavrasDisponiveis.splice(indexAleatorio, 1);

    let outrasOpcoes = bancoDeDadosCompleto
        .filter(p => p.texto !== palavraCorreta.texto)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    opcoesDaRodada = [palavraCorreta, ...outrasOpcoes].sort(() => 0.5 - Math.random());
    indiceCorreto = opcoesDaRodada.findIndex(p => p.texto === palavraCorreta.texto);
    
    displayPalavra.textContent = palavraCorreta.portugues;
    document.getElementById('status-pergunta').textContent = `Pergunta ${rodadaAtual + 1} de ${totalRodadas}`;
    progressBar.style.width = `${(rodadaAtual / totalRodadas) * 100}%`;
}

botoesAudio.forEach((btn, index) => {
    btn.onclick = () => {
        falarComElevenLabs(opcoesDaRodada[index].texto);
        botoesAudio.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        escolhaUsuario = index;
        btnVerificar.disabled = false;
    };
});

btnVerificar.onclick = () => {
    if (escolhaUsuario === indiceCorreto) {
        acertos++;
    } else {
        alert(`Incorreto! A resposta certa era o botão ${indiceCorreto + 1}`);
    }
    rodadaAtual++;
    if (rodadaAtual < totalRodadas) iniciarRodada();
    else finalizarJogo();
};

function finalizarJogo() {
    document.getElementById('modal-resultado').classList.remove('hidden');
    document.getElementById('pontuacao-final').textContent = `Treino concluído! Você acertou ${acertos} de ${totalRodadas}.`;
}

iniciarRodada();
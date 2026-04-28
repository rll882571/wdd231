const bancoDeDadosCompleto = [
    { audio: "audios/once.mp3", portugues: "Uma vez" },
    { audio: "audios/there.mp3", portugues: "Lá / Ali" },
    { audio: "audios/was.mp3", portugues: "Era / Estava" },
    { audio: "audios/young.mp3", portugues: "Jovem" },
    { audio: "audios/live.mp3", portugues: "Viver / Morar" },
    { audio: "audios/with.mp3", portugues: "Com" },
    { audio: "audios/his.mp3", portugues: "Dele" },
    { audio: "audios/mother.mp3", portugues: "Mãe" },
    { audio: "audios/on.mp3", portugues: "Em / Sobre" },
    { audio: "audios/small.mp3", portugues: "Pequeno" },
    { audio: "audios/farm.mp3", portugues: "Fazenda" },
    { audio: "audios/at.mp3", portugues: "Em / No" },
    { audio: "audios/foot.mp3", portugues: "Pé / Base" },
    { audio: "audios/mountain.mp3", portugues: "Montanha" },
    { audio: "audios/were.mp3", portugues: "Eram / Estavam" },
    { audio: "audios/very.mp3", portugues: "Muito" },
    { audio: "audios/poor.mp3", portugues: "Pobre" },
    { audio: "audios/money.mp3", portugues: "Dinheiro" },
    { audio: "audios/making.mp3", portugues: "Fazendo" },
    { audio: "audios/way.mp3", portugues: "Caminho / Jeito" }
];

// Criamos uma cópia da lista que vamos "esvaziar" para não repetir
let palavrasDisponiveis = [...bancoDeDadosCompleto];

let acertos = 0;
let rodadaAtual = 0;
const totalRodadas = 10; 
let opcoesDaRodada = [];
let indiceCorreto = null;
let escolhaUsuario = null;
const audioPlayer = new Audio();

const displayPalavra = document.getElementById('palavra-alvo');
const botoesAudio = document.querySelectorAll('.btn-audio-play');
const btnVerificar = document.getElementById('btn-verificar');
const progressBar = document.getElementById('progress-bar');

function iniciarRodada() {
    escolhaUsuario = null;
    btnVerificar.disabled = true;
    botoesAudio.forEach(btn => btn.classList.remove('active'));

    // 1. Sorteia a palavra CORRETA da lista de disponíveis para NÃO repetir
    const indexAleatorio = Math.floor(Math.random() * palavrasDisponiveis.length);
    const palavraCorreta = palavrasDisponiveis[indexAleatorio];

    // 2. Remove a palavra escolhida da lista de disponíveis
    palavrasDisponiveis.splice(indexAleatorio, 1);

    // 3. Pega outras 4 palavras aleatórias da lista COMPLETA para preencher os botões (distratores)
    let outrasOpcoes = bancoDeDadosCompleto
        .filter(p => p.audio !== palavraCorreta.audio) // Garante que não pega a correta de novo
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    // 4. Junta a correta com as outras e embaralha a posição nos 5 botões
    opcoesDaRodada = [palavraCorreta, ...outrasOpcoes].sort(() => 0.5 - Math.random());
    
    // 5. Descobre em qual botão a correta caiu
    indiceCorreto = opcoesDaRodada.findIndex(p => p.audio === palavraCorreta.audio);
    
    displayPalavra.textContent = palavraCorreta.portugues;
    document.getElementById('status-pergunta').textContent = `Pergunta ${rodadaAtual + 1} de ${totalRodadas}`;
    progressBar.style.width = `${(rodadaAtual / totalRodadas) * 100}%`;
}

botoesAudio.forEach((btn, index) => {
    btn.onclick = () => {
        audioPlayer.src = opcoesDaRodada[index].audio;
        audioPlayer.play();
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
        alert(`A resposta certa era o áudio ${indiceCorreto + 1}`);
    }

    rodadaAtual++;
    
    // Se ainda houver rodadas e palavras disponíveis
    if (rodadaAtual < totalRodadas && palavrasDisponiveis.length > 0) {
        iniciarRodada();
    } else {
        finalizarJogo();
    }
};

function finalizarJogo() {
    document.getElementById('modal-resultado').classList.remove('hidden');
    document.getElementById('pontuacao-final').textContent = `Fim! Você acertou ${acertos} de ${rodadaAtual}.`;
}

iniciarRodada();
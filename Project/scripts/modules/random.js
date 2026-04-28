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

// 1. Pilha de descarte para evitar repetição
let palavrasDisponiveis = [...bancoDeDadosCompleto];

let acertos = 0;
let rodadaAtual = 0;
// 2. DINÂMICO: O total de rodadas agora é o tamanho da sua lista de palavras
const totalRodadas = bancoDeDadosCompleto.length; 

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

    // Sorteia e remove a correta da lista de disponíveis
    const indexAleatorio = Math.floor(Math.random() * palavrasDisponiveis.length);
    const palavraCorreta = palavrasDisponiveis[indexAleatorio];
    palavrasDisponiveis.splice(indexAleatorio, 1);

    // Pega 4 distratores da lista original (que não sejam a correta)
    let outrasOpcoes = bancoDeDadosCompleto
        .filter(p => p.audio !== palavraCorreta.audio)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    // Embaralha as 5 opções nos botões
    opcoesDaRodada = [palavraCorreta, ...outrasOpcoes].sort(() => 0.5 - Math.random());
    indiceCorreto = opcoesDaRodada.findIndex(p => p.audio === palavraCorreta.audio);
    
    displayPalavra.textContent = palavraCorreta.portugues;
    
    // Atualiza status e barra de progresso (Page Audit: Navigation & Wayfinding)
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
        alert(`Resposta incorreta. O áudio certo era o número ${indiceCorreto + 1}`);
    }

    rodadaAtual++;
    
    if (rodadaAtual < totalRodadas) {
        iniciarRodada();
    } else {
        finalizarJogo();
    }
};

function finalizarJogo() {
    progressBar.style.width = "100%";
    document.getElementById('modal-resultado').classList.remove('hidden');
    document.getElementById('pontuacao-final').textContent = `Concluído! Você acertou ${acertos} de ${totalRodadas} palavras.`;
}

iniciarRodada();
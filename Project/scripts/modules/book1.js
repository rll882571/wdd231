// --- CONFIGURAÇÕES ---
// Substitua pela sua chave da ElevenLabs
const API_KEY_ELEVEN = "sk_2f650b3196aca4ee39ec79c3546e67089bce5a3f67908215"; 
const VOICE_ID = "hpp4J3VqNfWAUOO0d1Us"; // Voz "Rachel"

// --- BANCO DE DADOS COM PROMPTS DE IMAGEM ---
const bancoDeDadosCompleto = [
    { 
        texto: "I like money", 
        portugues: "Eu gosto de dinheiro",
        imagePrompt: "A person holding stacks of cash and gold coins, wealthy lifestyle, realistic photo" 
    },
    { 
        texto: "You like Ice cream", 
        portugues: "Você gosta de sorvete",
        imagePrompt: "A delicious strawberry ice cream cone with sprinkles, close-up, realistic"
    },
    { 
        texto: "He likes me", 
        portugues: "Ele gosta de mim",
        imagePrompt: "A friendly man smiling and pointing towards the camera, joyful expression"
    },
    { 
        texto: "She likes you", 
        portugues: "Ela gosta de você",
        imagePrompt: "A happy woman making a heart shape with her hands looking at camera"
    },
    { 
        texto: "I liked it", 
        portugues: "Eu gostei",
        imagePrompt: "A human hand giving a big thumbs up, approval gesture, clean background"
    },
    { 
        texto: "You liked chocolate", 
        portugues: "Você gostou de chocolate",
        imagePrompt: "A premium dark chocolate bar being unwrapped, studio lighting, delicious"
    },
    { 
        texto: "He likes to drink coke", 
        portugues: "Ele gosta de beber coca",
        imagePrompt: "A cold aluminum can of cola with ice cubes and condensation, refreshing"
    },
    { 
        texto: "She likes wine", 
        portugues: "Ela gosta de vinho",
        imagePrompt: "A glass of red wine being held at a dinner table, elegant atmosphere"
    },
    { 
        texto: "We like to speak English", 
        portugues: "Gostamos de falar inglês",
        imagePrompt: "People chatting happily with a small USA flag on the table, language learning"
    },
    { 
        texto: "We eat meat", 
        portugues: "Nós comemos carne",
        imagePrompt: "A juicy grilled steak on a wooden board, gourmet photography"
    },
    { 
        texto: "She eats apples", 
        portugues: "Ela come maçãs",
        imagePrompt: "A fresh crunchy red apple being bitten by a person, close-up"
    },
    { 
        texto: "He eats ham", 
        portugues: "Ele come presunto",
        imagePrompt: "Slices of pink deli ham on a white plate, breakfast style"
    },
    { 
        texto: "I eat bread", 
        portugues: "Eu como pão",
        imagePrompt: "Freshly baked artisan bread loaf, crusty, sliced on a table"
    },
    { 
        texto: "You eat cheese", 
        portugues: "Você come queijo",
        imagePrompt: "A piece of yellow swiss cheese with holes, realistic textures"
    },
    { 
        texto: "I eat hamburger", 
        portugues: "Eu como hambúrguer",
        imagePrompt: "A huge cheeseburger with lettuce and tomato, fast food style"
    },
    { 
        texto: "She ate sausage", 
        portugues: "Ela comeu salsicha",
        imagePrompt: "Grilled sausages on a plate with steam, realistic food photo"
    },
    { 
        texto: "he eats chicken", 
        portugues: "Ele come frango",
        imagePrompt: "A roasted golden chicken on a platter, cooked to perfection"
    },
    { 
        texto: "You eat fries", 
        portugues: "Você come batatas fritas",
        imagePrompt: "A portion of salty golden french fries in a red cup"
    },
    { 
        texto: "I ate potato", 
        portugues: "Eu comi batata",
        imagePrompt: "A pile of raw organic brown potatoes, earthy texture"
    }
];

// --- VARIÁVEIS DE ESTADO ---
let palavrasDisponiveis = [...bancoDeDadosCompleto];
let acertos = 0;
let rodadaAtual = 0;
const totalRodadas = 10; // Você pode ajustar para bancoDeDadosCompleto.length se quiser todas
let opcoesDaRodada = [];
let indiceCorreto = null;
let escolhaUsuario = null;
const audioPlayer = new Audio();

// --- ELEMENTOS DOM ---
const imgPergunta = document.getElementById('imagem-pergunta');
const txtCarregando = document.getElementById('carregando-imagem');
const botoesAudio = document.querySelectorAll('.btn-audio-play');
const btnVerificar = document.getElementById('btn-verificar');
const progressBar = document.getElementById('progress-bar');
const statusTexto = document.getElementById('status-pergunta');

// --- FUNÇÃO DE ÁUDIO (ELEVENLABS) ---
async function falarComElevenLabs(texto) {
    try {
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
            method: "POST",
            headers: {
                "xi-api-key": API_KEY_ELEVEN,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: texto,
                model_id: "eleven_multilingual_v2",
                voice_settings: { stability: 0.5, similarity_boost: 0.75 }
            })
        });

        if (!response.ok) throw new Error("Erro na API de Áudio");

        const blob = await response.blob();
        const urlAudio = URL.createObjectURL(blob);
        audioPlayer.src = urlAudio;
        audioPlayer.play();
    } catch (error) {
        console.error(error);
        alert("Erro ao carregar áudio. Verifique sua chave ElevenLabs.");
    }
}

// --- FUNÇÃO DE IMAGEM (POLLINATIONS - GRÁTIS) ---
function obterLinkImagem(prompt) {
    const seed = Math.floor(Math.random() * 1000); // Garante que a imagem mude sempre
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&nologo=true&seed=${seed}&model=flux`;
}

// --- LÓGICA DO JOGO ---
async function iniciarRodada() {
    if (rodadaAtual >= totalRodadas || palavrasDisponiveis.length === 0) {
        finalizarJogo();
        return;
    }

    escolhaUsuario = null;
    btnVerificar.disabled = true;
    botoesAudio.forEach(btn => btn.classList.remove('active'));
    
    // UI de carregamento
    imgPergunta.style.display = 'none';
    txtCarregando.style.display = 'block';
    txtCarregando.textContent = "Gerando imagem mágica...";

    // Sorteio da palavra correta
    const indexAleatorio = Math.floor(Math.random() * palavrasDisponiveis.length);
    const palavraCorreta = palavrasDisponiveis[indexAleatorio];
    palavrasDisponiveis.splice(indexAleatorio, 1);

    // Sorteio das opções de áudio (1 correta + 4 erradas)
    let outrasOpcoes = bancoDeDadosCompleto
        .filter(p => p.texto !== palavraCorreta.texto)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    opcoesDaRodada = [palavraCorreta, ...outrasOpcoes].sort(() => 0.5 - Math.random());
    indiceCorreto = opcoesDaRodada.findIndex(p => p.texto === palavraCorreta.texto);
    
    // Atualiza progresso
    statusTexto.textContent = `Pergunta ${rodadaAtual + 1} de ${totalRodadas}`;
    progressBar.style.width = `${(rodadaAtual / totalRodadas) * 100}%`;

    // Carrega imagem
    imgPergunta.src = obterLinkImagem(palavraCorreta.imagePrompt);
    imgPergunta.onload = () => {
        txtCarregando.style.display = 'none';
        imgPergunta.style.display = 'block';
    };
}

// Eventos dos botões de áudio
botoesAudio.forEach((btn, index) => {
    btn.onclick = () => {
        falarComElevenLabs(opcoesDaRodada[index].texto);
        botoesAudio.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        escolhaUsuario = index;
        btnVerificar.disabled = false;
    };
});

// Evento do botão verificar
btnVerificar.onclick = () => {
    if (escolhaUsuario === indiceCorreto) {
        acertos++;
    } else {
        alert(`Ops! O áudio correto era o número ${indiceCorreto + 1}`);
    }
    
    rodadaAtual++;
    iniciarRodada();
};

function finalizarJogo() {
    document.getElementById('modal-resultado').classList.remove('hidden');
    document.getElementById('pontuacao-final').textContent = `Fim do treino! Você acertou ${acertos} de ${totalRodadas}.`;
}

// Início imediato
iniciarRodada();
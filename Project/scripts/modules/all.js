// ADICIONADO: Variável global para guardar o nome do aluno logado
let currentStudentName = null;

// ADICIONADO: "Banco de dados" simples de alunos
// Adicione seus alunos aqui (login, nome completo, senha)
const studentDatabase = {
    // 👇 ALUNOS CADASTRADOS (login / nome / senha) 👇
    
    "yanne": { name: "Yanne", password: "123" },
    "luiz": { name: "Luiz", password: "456" },
    "sophia": { name: "Sophia", password: "789" }
    "davi": { name: "Davi", password: "2025" }
    
    // 👆 Fim da lista de alunos 👆
    // (Lembre-se: o último aluno não tem vírgula no final)
};

// ADICIONADO: Função de Login
function handleLogin() {
    let username = prompt("Digite seu usuário:");
    // Se o usuário cancelar, o loop continua
    if (username === null) return false; 
    
    let password = prompt("Digite sua senha:");
    // Se o usuário cancelar, o loop continua
    if (password === null) return false; 

    if (studentDatabase[username] && studentDatabase[username].password === password) {
        currentStudentName = studentDatabase[username].name; // Armazena o nome globalmente
        alert(`Bem-vindo(a), ${currentStudentName}!`); // Popup de boas-vindas
        return true;
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
        return false;
    }
}


// --- Início das suas funções originais ---

let currentTestQuestions = [];

// --- FUNÇÃO 1: CRIAR O CABEÇALHO --- (Sem alterações)
function createHeader(mainElement) {
    const headerHTML = `
        <div class="titulo">
            <h1>Simulado preparatório para a prova de Inglês</h1>
            <h3>Prova Final - 2025</h3>
        </div>
        <hr class="first">
        <div class="aluno">
            <p>ALUNO</p>
            <hr class="second">
        </div>
        <div class="sede">
            <p>SEDE</p>
            <hr class="quarto">
        </div>
        <div class="tur">
            <p>TURMA</p>
            <hr class="quinto">
        </div>
        <div class="scores">
            <p class="score-display">TOTAL SCORES</p>
            <hr class="sexto">
        </div>
        <div class="turma">
            <p>N°</p>
            <hr class="third">
        </div>
        <div class="header-container">
            <div class="grade-box">
                <p class="grade-display">NOTA</p>
                <p class="resultado">Resultado</p>
            </div>
        </div>
    `;
    mainElement.insertAdjacentHTML('afterbegin', headerHTML);
}

// --- FUNÇÃO 2: SORTEAR E CONSTRUIR AS QUESTÕES --- (Sem alterações)
function buildTest(mainElement, submitContainer) {
    const shuffledBank = [...questionBank].sort(() => Math.random() - 0.5);
    currentTestQuestions = shuffledBank.slice(0, 10);

    currentTestQuestions.forEach((questionData, index) => {
        let questionHTML = '';

        questionHTML += `<div class="test-paper" data-question-id="${questionData.id}">`;
        questionHTML += `
            <div class="question-header">
                <div class="question">
                    <p>${questionData.questionText.replace('1.', `${index + 1}.`).replace(/^\d+/, `${index + 1}`)}</p>
                </div>
                <button class="hint-btn" data-question-id="${questionData.id}">
                    Dica
                </button>
            </div>
        `;

        if (questionData.type === 'mc') {
            questionHTML += '<div class="options">';
            questionData.options.forEach(option => {
                questionHTML += `
                    <div class="option" data-answer="${option.letter}">
                        <p>${option.text}</p>
                    </div>
                `;
            });
            questionHTML += '</div>';
        } else if (questionData.type === 'fill-verb') {
            questionHTML += '<div class="options-fill-verb">';
            questionData.lines.forEach(line => {
                questionHTML += `<div class="option">`; 
                questionHTML += `<p class="line-text">${line.text}</p>`;
                questionHTML += `<div class="verb-choices">`;
                line.verbs.forEach(verb => {
                    questionHTML += `<span class="verb-option">${verb}</span>`;
                });
                questionHTML += `</div></div>`;
            });
            questionHTML += '</div>';
        }

        questionHTML += '</div>';
        mainElement.insertBefore(document.createRange().createContextualFragment(questionHTML), submitContainer);
    });

    document.querySelectorAll('.test-paper .question p').forEach((p, index) => {
        p.innerHTML = p.innerHTML.trim().replace(/^\d+\.\s*/, '');
        p.innerHTML = `${index + 1}. ${p.innerHTML}`;
    });
}

// --- FUNÇÃO 3: ADICIONAR LÓGICA DE CLIQUE NAS OPÇÕES --- (Sem alterações)
function attachOptionListeners() {
    const allQuestions = document.querySelectorAll('.test-paper');
    
    allQuestions.forEach(questionElement => {
        const questionId = questionElement.dataset.questionId;
        const questionData = currentTestQuestions.find(q => q.id === questionId);
        if (!questionData) return; 

        if (questionData.type === 'mc') {
            const options = questionElement.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        } else if (questionData.type === 'fill-verb') {
            const lines = questionElement.querySelectorAll('.option'); 
            lines.forEach(line => {
                const verbsInLine = line.querySelectorAll('.verb-option');
                verbsInLine.forEach(verb => {
                    verb.addEventListener('click', function() {
                        verbsInLine.forEach(v => v.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });
            });
        }
    });
}

// --- FUNÇÃO 4: LÓGICA DE CORREÇÃO (MODIFICADA) ---
function attachSubmitLogic() {
    const submitBtn = document.getElementById('submit-btn');
    const scoreDisplay = document.querySelector('.score-display');
    const gradeDisplay = document.querySelector('.grade-box .resultado');

    if (!submitBtn) return;

    submitBtn.addEventListener('click', function() {
        
        // ADICIONADO: Pega o nome automático da variável global (definida no login)
        if (!currentStudentName) {
            alert("Erro: Aluno não logado. Atualize a página e faça o login novamente.");
            return;
        }
        const studentName = currentStudentName;


        // ADICIONADO: Pega o nome da prova automaticamente da variável TEST_SUBJECT_NAME
        // (que foi definida no gengitivoq.js)
        const testName = (typeof TEST_SUBJECT_NAME !== 'undefined') ? TEST_SUBJECT_NAME : document.querySelector('.titulo h1').textContent;

        
        // O resto da função de correção continua igual...

        let totalScore = 0;
        let isAllAnswered = true;
        let incorrectQuestions = []; // Esta array agora vai guardar os IDs (q1, q2...)
        const allQuestionElements = document.querySelectorAll('.test-paper');
        
        allQuestionElements.forEach((questionElement, index) => { 
            const questionId = questionElement.dataset.questionId;
            const questionData = currentTestQuestions.find(q => q.id === questionId);
            if (!questionData) return;

            if (questionData.type === 'mc') {
                const selectedOption = questionElement.querySelector('.option.selected');
                if (!selectedOption) {
                    isAllAnswered = false;
                } else {
                    const selectedAnswer = selectedOption.dataset.answer;
                    if (selectedAnswer === questionData.correctAnswer) {
                        totalScore += 1;
                    } else {
                        incorrectQuestions.push(questionData.id); // <--- MODIFICADO (agora usa o ID)
                    }
                }
            } else if (questionData.type === 'fill-verb') {
                const lines = questionElement.querySelectorAll('.option');
                let answeredLines = 0;
                let correctCount = 0;
                
                lines.forEach((line, lineIndex) => {
                    const selectedVerb = line.querySelector('.verb-option.selected');
                    if (selectedVerb) {
                        answeredLines++;
                        const selectedText = selectedVerb.textContent.trim();
                        if (selectedText === questionData.correctAnswer[lineIndex]) {
                            correctCount++;
                        }
                    }
                });
                
                if (correctCount !== lines.length) {
                    incorrectQuestions.push(questionData.id); // <--- MODIFICADO (agora usa o ID)
                }

                if (answeredLines < lines.length) isAllAnswered = false;
                totalScore += correctCount * (1.0 / lines.length); 
            }
        });

        if (!isAllAnswered) {
            alert("Por favor, responda todas as questões e todos os itens antes de enviar!");
            return;
        }

        this.disabled = true;
        this.style.opacity = 0.6;
        this.style.cursor = 'not-allowed';
        const originalButtonText = this.textContent;
        this.textContent = "ENVIANDO NOTA...";

        const finalScore = parseFloat(totalScore.toFixed(1));
        scoreDisplay.textContent = `TOTAL SCORES: ${finalScore}/10`;
        gradeDisplay.textContent = finalScore;
        gradeDisplay.style.color = '#0055ff';
        gradeDisplay.classList.add('final-score');
        document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
        
        // Agora esta string será "q1, q3_special, q7"
        const incorrectQuestionsString = incorrectQuestions.length > 0 ? incorrectQuestions.join(', ') : "Nenhum erro";

        const formspreeUrl = 'https://formspree.io/f/xwpwbojk';

        fetch(formspreeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            // Os campos 'nome' e 'nomeProva' são automáticos
            // 'questoesErradas' agora envia os IDs
            body: JSON.stringify({
                nome: studentName,
                nomeProva: testName,
                nota: finalScore,
                questoesErradas: incorrectQuestionsString,
                data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
            })
        })
        .then(response => {
            if (response.ok) return response.json();
            return response.json().then(data => {
                console.error("O Formspree retornou um erro:", data.errors || data);
                throw new Error('Falha no envio para o Formspree');
            });
        })
        .then(data => console.log("Nota enviada com sucesso para o Formspree!", data))
        .catch(error => {
            console.error("Erro de rede ao enviar para o Formspree:", error);
            alert("Houve um erro de rede ao tentar salvar sua nota. Sua nota é " + finalScore);
        })
        .finally(() => {
            this.textContent = originalButtonText;
            
            // ATENÇÃO: A mensagem de ALERTA para o aluno ainda usa o NÚMERO DA ORDEM (index + 1)
            // Isso é o ideal, pois o aluno vê a prova como "Questão 1, 2, 3...", e não "q1, q7".
            // Para fazer isso, precisamos recriar a lista de erros visuais (apenas para o alerta).
            
            let incorrectQuestionNumbers = [];
            allQuestionElements.forEach((questionElement, index) => {
                const questionId = questionElement.dataset.questionId;
                // Verifica se o ID desta questão está na lista de IDs errados
                if (incorrectQuestions.includes(questionId)) {
                    incorrectQuestionNumbers.push(index + 1); // Adiciona o número da ordem (1, 2, 3...)
                }
            });

            if (incorrectQuestionNumbers.length > 0) {
                // O alerta para o aluno usa os números 1, 2, 3...
                const message = "Você errou a(s) questão(ões): " + incorrectQuestionNumbers.join(', ');
                setTimeout(() => alert(message), 100);
            } else {
                setTimeout(() => alert("Parabéns! Você acertou todas as 10 questões!"), 100);
            }
        });

        document.querySelectorAll('.option, .verb-option').forEach(el => {
            el.style.pointerEvents = 'none';
        });
    });
}

// --- FUNÇÃO 5: LÓGICA DO MODAL (AULA COMPLETA) --- (Sem alterações)
function attachModalLogic() {
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const videoContainer = document.getElementById('video-container');
    const helpButton = document.getElementById('full-class-btn'); 

    if (!modal || !closeBtn || !videoContainer || !helpButton) return; 

    helpButton.addEventListener('click', () => {
        const videoURL = helpButton.dataset.videoUrl;
        if (!videoURL) return;
        
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', videoURL);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.classList.add('youtube-iframe');

        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
        modal.style.display = 'block';
    });

    function closeModal() {
        modal.style.display = 'none';
        videoContainer.innerHTML = ''; 
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) closeModal();
    });
}

// --- FUNÇÃO 6: LÓGICA DO DIÁLOGO DE DICAS --- (Sem alterações)
function attachHintLogic() {
    const hintDialog = document.getElementById('hint-dialog');
    const closeHintBtn = document.getElementById('close-hint-dialog');
    const allHintBtns = document.querySelectorAll('.hint-btn'); 
    const hintText = document.getElementById('hint-text');
    const hintCounter = document.getElementById('hint-counter');
    const prevHintBtn = document.getElementById('prev-hint');
    const nextHintBtn = document.getElementById('next-hint');

    if (!hintDialog || !closeHintBtn || !allHintBtns.length || !hintText || !hintCounter || !prevHintBtn || !nextHintBtn) {
        console.error("Elementos do diálogo de dicas não encontrados.");
        return;
    }

    let activeHints = [];
    let currentHintIndex = 0;

    function showHint(index) {
        if (!activeHints[index]) return;
        hintText.textContent = activeHints[index];
        hintCounter.textContent = `${index + 1} / ${activeHints.length}`;
        prevHintBtn.disabled = (index === 0);
        nextHintBtn.disabled = (index === activeHints.length - 1);
    }

    allHintBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const questionId = btn.dataset.questionId; 
            const questionData = currentTestQuestions.find(q => q.id === questionId);

            if (!questionData || !questionData.hints || questionData.hints.length === 0) {
                activeHints = ["Nenhuma dica disponível para esta questão."];
            } else {
                activeHints = questionData.hints;
            }
            
            currentHintIndex = 0;
            showHint(currentHintIndex);
            hintDialog.showModal();
        });
    });

    closeHintBtn.addEventListener('click', () => hintDialog.close());

    prevHintBtn.addEventListener('click', () => {
        if (currentHintIndex > 0) {
            currentHintIndex--;
            showHint(currentHintIndex);
        }
    });

    nextHintBtn.addEventListener('click', () => {
        if (currentHintIndex < activeHints.length - 1) { 
            currentHintIndex++;
            showHint(currentHintIndex);
        }
    });

    hintDialog.addEventListener('click', (event) => {
        if (event.target === hintDialog) hintDialog.close();
    });
}

// --- INICIALIZAÇÃO (MODIFICADO) ---
document.addEventListener('DOMContentLoaded', () => {

    // ADICIONADO: 1. Força o login antes de carregar a prova
    let loggedIn = false;
    while (!loggedIn) {
        // A função handleLogin() mostra os prompts e valida
        if (handleLogin()) {
            loggedIn = true;
        }
        // Se o login falhar (usuário/senha errada ou cancelou), 
        // o loop continua pedindo o login.
    }
    
    // 2. Se o login foi feito (loggedIn = true), continue carregando a prova
    const main = document.getElementById('main');
    const submitContainer = document.querySelector('.submit-container');

    if (!main || !submitContainer) {
        console.error("Elemento '#main' ou '.submit-container' não encontrado. Abortando.");
        return;
    }
    
    // 3. Carrega o resto do script
    createHeader(main);
    buildTest(main, submitContainer);
    attachOptionListeners();
    attachSubmitLogic(); // Usa a lógica de submit modificada
    attachModalLogic();
    attachHintLogic();
});

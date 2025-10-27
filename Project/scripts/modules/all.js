let currentTestQuestions = [];

// --- FUNÇÃO 1: CRIAR O CABEÇALHO ---
function createHeader(mainElement) {
    const headerHTML = `
        <div class="titulo">
            <h1>Prova de Inglês</h1>
            <h3>Prova Final - DATA:2025</h3>
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

// --- FUNÇÃO 2: SORTEAR E CONSTRUIR AS QUESTÕES ---
function buildTest(mainElement, submitContainer) {
    
    // 1. Embaralha o 'questionBank' (que veio do questoes.js)
    const shuffledBank = [...questionBank].sort(() => Math.random() - 0.5);
    
    // 2. Pega as 10 primeiras
    currentTestQuestions = shuffledBank.slice(0, 10);
    
    // 3. Construir o HTML para cada questão
    currentTestQuestions.forEach((questionData, index) => {
        let questionHTML = '';
        
        questionHTML += `<div class="test-paper" data-question-id="${questionData.id}">`;
        
        // O cabeçalho da questão com o botão "Dica" à direita
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
                questionHTML += `</div>`; 
                questionHTML += `</div>`;
            });
            questionHTML += '</div>';
        }
        
        questionHTML += '</div>'; // fecha .test-paper
        
        mainElement.insertBefore(document.createRange().createContextualFragment(questionHTML), submitContainer);
    });

    // Renumera as perguntas
    document.querySelectorAll('.test-paper .question p').forEach((p, index) => {
        p.innerHTML = p.innerHTML.trim().replace(/^\d+\.\s*/, '');
        p.innerHTML = `${index + 1}. ${p.innerHTML}`;
    });
}

// --- FUNÇÃO 3: ADICIONAR LÓGICA DE CLIQUE NAS OPÇÕES ---
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

// --- FUNÇÃO 4: ADICIONAR LÓGICA DE CORREÇÃO (SUBMIT) ---
function attachSubmitLogic() {
    const submitBtn = document.getElementById('submit-btn');
    const scoreDisplay = document.querySelector('.score-display');
    const gradeDisplay = document.querySelector('.grade-box .resultado');

    if (!submitBtn) return; // Segurança

    submitBtn.addEventListener('click', function() {
        let totalScore = 0;
        let isAllAnswered = true;
        let incorrectQuestions = [];
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
                        incorrectQuestions.push(index + 1);
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
                    incorrectQuestions.push(index + 1);
                }

                if (answeredLines < lines.length) isAllAnswered = false;
                totalScore += correctCount * (1.0 / lines.length); 
            }
        });

        if (!isAllAnswered) {
            alert("Por favor, responda todas as questões e todos os itens antes de enviar!");
            return;
        }

        const finalScore = parseFloat(totalScore.toFixed(1));
        scoreDisplay.textContent = `TOTAL SCORES: ${finalScore}/10`;
        gradeDisplay.textContent = finalScore;
        gradeDisplay.style.color = '#0055ff';
        gradeDisplay.classList.add('final-score');
        document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
        
        if (incorrectQuestions.length > 0) {
            const message = "Você errou a(s) questão(ões): " + incorrectQuestions.join(', ');
            setTimeout(() => {
                alert(message);
            }, 100);
        } else {
             setTimeout(() => {
                 alert("Parabéns! Você acertou todas as 10 questões!");
             }, 100);
        }

        this.disabled = true;
        this.style.opacity = 0.6;
        this.style.cursor = 'not-allowed';

        document.querySelectorAll('.option, .verb-option').forEach(el => {
            el.style.pointerEvents = 'none';
        });
    });
}

// --- FUNÇÃO 5: LÓGICA DO MODAL (AULA COMPLETA) ---
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
        if (event.target == modal) {
            closeModal();
        }
    });
}

// =========================================================
// --- FUNÇÃO 6: LÓGICA DO DIÁLOGO DE DICAS (CORRIGIDA) ---
// =========================================================
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

    // --- MUDANÇA PRINCIPAL ---
    // Removemos o 'const hints' fixo daqui.
    // Estas variáveis agora guardam o estado ATUAL do diálogo
    let activeHints = [];
    let currentHintIndex = 0;

    // Função para atualizar o conteúdo do diálogo
    // Ela vai usar as variáveis 'activeHints' e 'currentHintIndex'
    function showHint(index) {
        if (!activeHints[index]) return; // Segurança

        hintText.textContent = activeHints[index];
        hintCounter.textContent = `${index + 1} / ${activeHints.length}`;
        
        // Desabilita/Habilita botões de navegação
        prevHintBtn.disabled = (index === 0);
        nextHintBtn.disabled = (index === activeHints.length - 1);
    }

    // Adiciona listener para CADA botão "Dica"
    allHintBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Pega o ID da questão direto do botão
            const questionId = btn.dataset.questionId; 
            
            // 2. Acha a questão correspondente no array de questões da prova
            const questionData = currentTestQuestions.find(q => q.id === questionId);

            // 3. Verifica se a questão e as dicas existem
            if (!questionData || !questionData.hints || questionData.hints.length === 0) {
                console.error(`Nenhuma dica encontrada para a questão ${questionId}`);
                // Mostra uma dica padrão se falhar
                activeHints = ["Nenhuma dica disponível para esta questão."];
            } else {
                // 4. DEFINE as dicas ativas para serem as dicas DESSA questão
                activeHints = questionData.hints;
            }
            
            // 5. Reseta o contador e mostra a primeira dica
            currentHintIndex = 0;
            showHint(currentHintIndex);
            hintDialog.showModal(); // Abre o <dialog>
        });
    });

    // Botão "Fechar" dentro do diálogo
    closeHintBtn.addEventListener('click', () => {
        hintDialog.close(); 
    });

    // Navegação "Anterior"
    prevHintBtn.addEventListener('click', () => {
        if (currentHintIndex > 0) {
            currentHintIndex--;
            showHint(currentHintIndex);
        }
    });

    // Navegação "Próxima"
    nextHintBtn.addEventListener('click', () => {
        // Usa activeHints.length para saber o limite
        if (currentHintIndex < activeHints.length - 1) { 
            currentHintIndex++;
            showHint(currentHintIndex);
        }
    });

    // Opcional: fechar ao clicar fora da caixa
    hintDialog.addEventListener('click', (event) => {
        if (event.target === hintDialog) {
            hintDialog.close();
        }
    });
}


// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    
    const main = document.getElementById('main');
    const submitContainer = document.querySelector('.submit-container');

    if (!main || !submitContainer) {
        console.error("Elemento '#main' ou '.submit-container' não encontrado. Abortando.");
        return;
    }
    
    // 1. Cria o cabeçalho
    createHeader(main);
    
    // 2. Constrói as questões (agora insere antes do submitContainer)
    buildTest(main, submitContainer);
    
    // 3. Adiciona cliques
    attachOptionListeners();
    
    // 4. Adiciona lógica do submit
    attachSubmitLogic();
    
    // 5. Adiciona lógica do modal de vídeo (botão único)
    attachModalLogic();

    // 6. Adiciona lógica do novo modal de dicas (AGORA CORRIGIDA)
    attachHintLogic();
});
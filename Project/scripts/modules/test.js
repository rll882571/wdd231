// ==========================
// ARQUIVO: scripts/main.js
// ==========================
//
// Este arquivo contém APENAS a lógica do quiz.
// Ele DEPENDE que o 'questoes.js' seja carregado primeiro no HTML.

// Guarda as 10 perguntas sorteadas para este teste
let currentTestQuestions = [];

// --- FUNÇÃO 1: CRIAR O CABEÇALHO ---
function createHeader(mainElement) {
    const headerHTML = `
        <div class="titulo">
            <h1>AVALIAÇÃO CONTINUA 1 - 7º - AVANÇADO</h1>
            <h3>INGLÊS - 3ª ETAPA - DATA: 04/06/2025</h3>
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
        
        // Cabeçalho da questão
        questionHTML += `
            <div class="question-header">
                <div class="question">
                    <p>${questionData.questionText.replace('1.', `${index + 1}.`).replace(/^\d+/, `${index + 1}`)}</p>
                </div>
                ${questionData.videoUrl ? 
                `<button class="help-btn-question" data-video-url="${questionData.videoUrl}">
                    help?
                 </button>` : ''}
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
                // .innerHTML para o texto da linha
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

    // Renumera as perguntas (Ajuste fino para garantir que o número 1. 2. etc. esteja correto)
    document.querySelectorAll('.test-paper .question p').forEach((p, index) => {
        // Remove qualquer número antigo e poe o novo
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

    submitBtn.addEventListener('click', function() {
        let totalScore = 0;
        let isAllAnswered = true;
        
        const allQuestionElements = document.querySelectorAll('.test-paper');
        
        allQuestionElements.forEach((questionElement) => {
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
        
        this.disabled = true;
        this.style.opacity = 0.6;
        this.style.cursor = 'not-allowed';
    });
}

// --- FUNÇÃO 5: LÓGICA DO MODAL ---
function attachModalLogic() {
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const helpButtons = document.querySelectorAll('.help-btn-question'); 
    const videoContainer = document.getElementById('video-container');

    if (!modal || !closeBtn) return; // Segurança

    helpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoURL = button.dataset.videoUrl;
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
    
    // 2. Constrói as questões
    buildTest(main, submitContainer);
    
    // 3. Adiciona cliques
    attachOptionListeners();
    
    // 4. Adiciona lógica do submit
    attachSubmitLogic();
    
    // 5. Adiciona lógica do modal
    attachModalLogic();
});

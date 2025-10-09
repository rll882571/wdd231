// ==========================
// TEST PAGE FUNCTIONALITY
// ==========================

function initializeTestPage() {
    // --- PARTE 1: LÓGICA PARA EMBARALHAR AS QUESTÕES ---

    function shuffleQuestions() {
        const main = document.getElementById('main');
        const questions = Array.from(document.querySelectorAll('.test-paper'));
        const submitContainer = document.querySelector('.submit-container');

        if (!submitContainer) return; 

        // 1. Marcar o índice original e remover do DOM
        questions.forEach((question, index) => {
            question.dataset.originalIndex = index;
            question.remove(); 
        });

        // 2. Embaralhar o array
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        
        // 3. Re-anexar as perguntas em ordem aleatória
        questions.forEach(question => {
            main.insertBefore(question, submitContainer);
        });

        // 4. Renumerar as perguntas
        const reorderedQuestions = document.querySelectorAll('.test-paper');
        reorderedQuestions.forEach((question, index) => {
            const questionTextElement = question.querySelector('.question p');
            if (questionTextElement) {
                questionTextElement.textContent = questionTextElement.textContent.replace(/^\d+\.\s*/, `${index + 1}. `);
            }
        });
    }

    shuffleQuestions();

    // --- PARTE 2: LÓGICA DE SELEÇÃO DAS RESPOSTAS (Ajustado para a Q3) ---

    const questionsNodeList = document.querySelectorAll('.test-paper');
    questionsNodeList.forEach((question) => {
        const originalIndex = question.dataset.originalIndex; 
        
        // **LÓGICA CORRIGIDA PARA Q3** (originalIndex '2')
        if (originalIndex === '2') {
            // Seleciona as 5 linhas da questão. IMPORTANTE: O HTML PRECISA
            // usar a classe '.option' para cada linha, não '.options'.
            const linesInQ3 = question.querySelectorAll('.option'); 
            
            linesInQ3.forEach(line => {
                const verbs = line.querySelectorAll('.verb-option');
                verbs.forEach(verb => {
                    verb.addEventListener('click', function() {
                        // **A CHAVE:** Desseleciona todos os verbos APENAS nesta LINHA (line/verbs),
                        // mantendo a seleção nas outras linhas intacta.
                        verbs.forEach(v => v.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });
            });
        } else { // Questões de múltipla escolha padrão
            const options = question.querySelector('.options').querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    // Desseleciona todas as opções nesta QUESTÃO (comportamento padrão)
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        }
    });

    // --- PARTE 3: LÓGICA DE CORREÇÃO AO CLICAR EM "ENVIAR" (Ajustado para a Q3) ---

    const submitBtn = document.getElementById('submit-btn');
    const scoreDisplay = document.querySelector('.score-display');
    const gradeDisplay = document.querySelector('.grade-box .resultado');

    // Mapeamento das respostas corretas
    const correctAnswersQ3 = ["have seen", "has worked", "hasn't done", "traveled", "lived"]; // 5 itens
    const otherCorrectAnswers = { 
        0: "C", 1: "C", 3: "D", 4: "A", 
        5: "D", 6: "D", 7: "B", 8: "B", 
        9: "B" 
    };

    submitBtn.addEventListener('click', function() {
        let totalScore = 0;
        let isAllAnswered = true;
        
        questionsNodeList.forEach((question) => {
            const originalIndex = question.dataset.originalIndex;
            
            if (originalIndex === '2') { // Questão 3 (5 sub-itens)
                // **SELETOR CORRIGIDO:** Seleciona corretamente as 5 linhas
                const linesInQ3 = question.querySelectorAll('.option'); 
                let answeredLines = 0;
                let correctCount = 0;
                
                linesInQ3.forEach((line, lineIndex) => {
                    const selectedVerb = line.querySelector('.verb-option.selected');
                    
                    if (selectedVerb) {
                        answeredLines++;
                        if (selectedVerb.textContent.trim() === correctAnswersQ3[lineIndex]) {
                            correctCount++;
                        }
                    }
                });
                
                // Calcula a pontuação
                totalScore += correctCount * 0.2; 
                
                if (answeredLines < 5) isAllAnswered = false;
                
            } else { // Questões de múltipla escolha (1 ponto)
                const selectedOption = question.querySelector('.option.selected');
                
                if (!selectedOption) {
                    isAllAnswered = false;
                } else {
                    const selectedAnswer = selectedOption.dataset.answer;
                    if (otherCorrectAnswers[originalIndex] && selectedAnswer === otherCorrectAnswers[originalIndex]) {
                        totalScore += 1;
                    }
                }
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
        
        this.disabled = true;
        this.style.opacity = 0.6;
        this.style.cursor = 'not-allowed';
    });


    // --- PARTE 4: LÓGICA DO MODAL DE VÍDEO (Sem alterações) ---

    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const helpButtons = document.querySelectorAll('.help-btn-question');
    const videoContainer = document.getElementById('video-container');

    helpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoURL = button.dataset.videoUrl;
            
            if (!videoURL) {
                console.error("Botão de ajuda não possui o atributo 'data-video-url'.");
                return;
            }
            
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

document.addEventListener('DOMContentLoaded', initializeTestPage);
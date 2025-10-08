// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    // --- PARTE 1: LÓGICA PARA EMBARALHAR AS QUESTÕES ---

    function shuffleQuestions() {
        const main = document.querySelector('main'); // 🔹 Era 'header', agora é 'main'
        const submitContainer = document.querySelector('.submit-container');
        const questions = Array.from(document.querySelectorAll('.test-paper'));

        // Salva a posição original das questões
        questions.forEach((question, index) => {
            question.dataset.originalIndex = index;
        });

        // Embaralha as questões
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        // Reinsere as questões embaralhadas dentro do MAIN
        questions.forEach(question => {
            main.appendChild(question);
        });

        // Reinsere o botão ENVIAR no final
        main.appendChild(submitContainer);

        // Atualiza numeração (1., 2., 3....)
        const reorderedQuestions = document.querySelectorAll('.test-paper');
        reorderedQuestions.forEach((question, index) => {
            const questionTextElement = question.querySelector('.question p');
            if (questionTextElement) {
                questionTextElement.textContent = questionTextElement.textContent.replace(/^\d+\.\s*/, `${index + 1}. `);
            }
        });
    }

    shuffleQuestions(); // Chama a função para embaralhar


    // --- PARTE 2: LÓGICA DE SELEÇÃO DAS RESPOSTAS ---

    const questionsNodeList = document.querySelectorAll('.test-paper');
    questionsNodeList.forEach((question) => {
        const originalIndex = question.dataset.originalIndex;
        if (originalIndex === '2') {
            // Questão com múltiplos verbos (Q3)
            const linesInQ3 = question.querySelectorAll('.option');
            linesInQ3.forEach(line => {
                const verbs = line.querySelectorAll('.verb-option');
                verbs.forEach(verb => {
                    verb.addEventListener('click', function() {
                        verbs.forEach(v => v.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });
            });
        } else {
            // Questões de múltipla escolha normal
            const options = question.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        }
    });


    // --- PARTE 3: LÓGICA DE CORREÇÃO AO CLICAR EM "ENVIAR" ---

    const submitBtn = document.getElementById('submit-btn');
    const scoreDisplay = document.querySelector('.score-display');
    const gradeDisplay = document.querySelector('.grade-box .resultado');

    submitBtn.addEventListener('click', function() {
        let totalScore = 0;
        let isAllAnswered = true;

        const correctAnswersQ3 = ["have seen", "has worked", "hasn't done", "traveled", "lived"];
        const otherCorrectAnswers = { 
            0: "C", 1: "C", 3: "D", 4: "A", 
            5: "D", 6: "D", 7: "B", 8: "B", 9: "B" 
        };

        questionsNodeList.forEach((question) => {
            const originalIndex = question.dataset.originalIndex;
            if (originalIndex === '2') {
                const linesInQ3 = question.querySelectorAll('.option');
                let answeredLines = 0;
                linesInQ3.forEach((line, lineIndex) => {
                    const selectedVerb = line.querySelector('.verb-option.selected');
                    if (selectedVerb) {
                        answeredLines++;
                        if (selectedVerb.textContent.trim() === correctAnswersQ3[lineIndex]) {
                            totalScore += 0.2;
                        }
                    }
                });
                if (answeredLines < 5) isAllAnswered = false;
            } else {
                const selectedOption = question.querySelector('.option.selected');
                if (!selectedOption) {
                    isAllAnswered = false;
                } else {
                    const selectedAnswer = selectedOption.dataset.answer;
                    if (selectedAnswer === otherCorrectAnswers[originalIndex]) {
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


    // --- PARTE 4: LÓGICA DO MODAL DE VÍDEO ---

    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const helpButtons = document.querySelectorAll('.help-btn-question');
    const videoContainer = document.getElementById('video-container');

    helpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoURL = button.dataset.videoUrl; // Pega o URL do atributo do botão

            if (!videoURL) {
                console.error("Botão de ajuda não possui o atributo 'data-video-url'.");
                return;
            }
            
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', videoURL);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');

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
        if (event.target === modal) {
            closeModal();
        }
    });
});

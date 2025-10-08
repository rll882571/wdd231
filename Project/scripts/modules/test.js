// ==========================
// TEST PAGE FUNCTIONALITY
// ==========================

// Para manter o padrão, vamos encapsular toda a lógica em uma função.
// Ela será chamada após o DOM ser carregado.
function initializeTestPage() {
    // --- PARTE 1: LÓGICA PARA EMBARALHAR AS QUESTÕES ---

    function shuffleQuestions() {
        // Mudança importante: A main deve ser o container para as perguntas para não misturar com o header.
        // Se as perguntas estiverem no <main>, precisamos selecioná-las e reordená-las lá.
        const main = document.getElementById('main');
        // Se todas as perguntas e o submit-container estiverem DENTRO do <main>,
        // o correto é reordená-los DENTRO do <main>.
        // No seu HTML, as perguntas e o submit-container estão DENTRO do <main>.
        // Vamos usar o <main> como o container principal para a ordenação, e não o <header>.
        
        // No seu HTML de test.html, a estrutura está assim:
        // <main id="main">
        //    ... outros divs (titulo, aluno, etc)
        //    <div class="test-paper"> ... </div>
        //    <div class="test-paper"> ... </div>
        //    ...
        //    <div class="submit-container"> ... </div>
        // </main>
        
        // Devido ao HTML ter muitos elementos antes da primeira pergunta (titulo, aluno, scores, etc.), 
        // a maneira mais segura de embaralhar é:
        // 1. Pegar APENAS os elementos .test-paper.
        // 2. Embaralhá-los.
        // 3. Reinserir eles na ordem misturada, mantendo os elementos fixos do topo.

        const fixedElementsContainer = main; // O 'main' é o container
        const questions = Array.from(document.querySelectorAll('.test-paper'));
        const submitContainer = document.querySelector('.submit-container');

        // Se o submit container não for encontrado, a função não deve prosseguir
        if (!submitContainer) return; 

        // 1. Marcar o índice original e remover do DOM (para reordenar)
        questions.forEach((question, index) => {
            question.dataset.originalIndex = index;
            question.remove(); // Remove para re-inserir na nova ordem
        });

        // 2. Embaralhar o array
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        
        // 3. Encontrar o ponto de inserção. Vamos inserir antes do 'submit-container'
        // ou no final do 'main' se o submit-container não for o último.
        
        // Encontra o último elemento fixo (e.g., o último div de grade/info) que está antes das perguntas.
        // No seu HTML, a última div antes de .test-paper é .header-container.
        const headerContainer = document.querySelector('.header-container');
        let insertionPoint = headerContainer ? headerContainer.nextElementSibling : null;

        // Limpa o espaço onde as perguntas estavam se a reordenação for feita
        // de forma mais manual.

        // Vamos re-anexar as perguntas em ordem aleatória:
        questions.forEach(question => {
            // Insere a pergunta antes do submitContainer
            main.insertBefore(question, submitContainer);
        });

        // 4. Renumerar as perguntas
        const reorderedQuestions = document.querySelectorAll('.test-paper');
        reorderedQuestions.forEach((question, index) => {
            const questionTextElement = question.querySelector('.question p');
            if (questionTextElement) {
                // Remove a numeração antiga e adiciona a nova (ex: 1. -> N. )
                // Nota: Assumimos que o texto da pergunta original começa com 'N. ' ou apenas um texto.
                // O regex remove '1. ' '2. ' '3. ' etc.
                questionTextElement.textContent = questionTextElement.textContent.replace(/^\d+\.\s*/, `${index + 1}. `);
            }
        });
    }

    shuffleQuestions(); // Chama a função para embaralhar

    // --- PARTE 2: LÓGICA DE SELEÇÃO DAS RESPOSTAS ---

    const questionsNodeList = document.querySelectorAll('.test-paper');
    questionsNodeList.forEach((question) => {
        // Note que o índice original ('data-original-index') é crucial para identificar a Q3.
        const originalIndex = question.dataset.originalIndex; 
        
        // O originalIndex '2' corresponde à 3ª questão (índice 0, 1, 2)
        if (originalIndex === '2') { // Questão 3 (com seleção de verbo)
            const linesInQ3 = question.querySelectorAll('.option');
            linesInQ3.forEach(line => {
                const verbs = line.querySelectorAll('.verb-option');
                verbs.forEach(verb => {
                    verb.addEventListener('click', function() {
                        // Desseleciona todos os verbos nesta LINHA (option)
                        verbs.forEach(v => v.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });
            });
        } else { // Questões de múltipla escolha padrão
            const options = question.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    // Desseleciona todos as opções nesta QUESTÃO (.test-paper)
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

    // Mapeamento das respostas corretas usando o ÍNDICE ORIGINAL:
    // Q1 (Original Index 0) -> C
    // Q2 (Original Index 1) -> C
    // Q4 (Original Index 3) -> D
    // Q5 (Original Index 4) -> A
    // Q6 (Original Index 5) -> D
    // Q7 (Original Index 6) -> D
    // Q8 (Original Index 7) -> B
    // Q9 (Original Index 8) -> B
    // Q10 (Original Index 9) -> B
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
                const linesInQ3 = question.querySelectorAll('.q3-line');
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
                
                // Calcula a pontuação para Q3 (1 ponto total / 5 itens = 0.2 por item)
                totalScore += correctCount * 0.2; 
                
                if (answeredLines < 5) isAllAnswered = false;
                
            } else { // Questões de múltipla escolha (1 ponto)
                const selectedOption = question.querySelector('.option.selected');
                
                if (!selectedOption) {
                    isAllAnswered = false;
                } else {
                    const selectedAnswer = selectedOption.dataset.answer;
                    // Verifica se o índice original está no mapa e se a resposta é correta
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
        
        // Desabilita o botão após a submissão
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
            const videoURL = button.dataset.videoUrl; // Pega o URL do atributo data-video-url
            
            if (!videoURL) {
                console.error("Botão de ajuda não possui o atributo 'data-video-url'.");
                return;
            }
            
            // Cria o iframe do YouTube
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', videoURL); 
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            iframe.classList.add('youtube-iframe'); // Adiciona uma classe para estilização (opcional)

            // Limpa o container e insere o novo iframe
            videoContainer.innerHTML = '';
            videoContainer.appendChild(iframe);

            modal.style.display = 'block';
        });
    });

    function closeModal() {
        modal.style.display = 'none';
        // Interrompe o vídeo ao fechar o modal limpando o container
        videoContainer.innerHTML = ''; 
    }

    closeBtn.addEventListener('click', closeModal);

    // Fecha o modal se clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

}

// Inicializa quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', initializeTestPage);
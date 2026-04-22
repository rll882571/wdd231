// ==========================================
// 1. VARIÁVEIS GLOBAIS E BANCOS (50 QUESTÕES)
// ==========================================
let currentStudentName = null;
let currentTestQuestions = [];

const studentDatabase = {
    "yanne": { name: "Yanne", password: "123" },
    "luiz": { name: "Luiz", password: "456" },
    "sophia": { name: "Sophia", password: "789" },
    "davi": { name: "Davi", password: "2025" },
    "aluno": { name: "Ester da TUF", password: "2025" },
    "master": { name: "Bora tirar 10! Luigi", password: "2025" }
};

// CAP 3: PAST PROGRESSIVE
const bankPastProgressive = [
    { id: "pp-1", type: "mc", questionText: "At 8 PM last night, I ________ (watch) a movie with my family.", options: [{letter:"A", text:"watched"}, {letter:"B", text:"was watching"}, {letter:"C", text:"were watching"}, {letter:"D", text:"am watching"}], correctAnswer: "B", hints: ["Ação em progresso no passado."] },
    { id: "pp-2", type: "mc", questionText: "The students ________ (not study) when the principal entered the room.", options: [{letter:"A", text:"wasn't studying"}, {letter:"B", text:"weren't studying"}, {letter:"C", text:"didn't study"}, {letter:"D", text:"wasn't study"}], correctAnswer: "B", hints: ["Students = plural (they)."] },
    { id: "pp-3", type: "mc", questionText: "What ________ you ________ (do) when the power went out?", options: [{letter:"A", text:"did / do"}, {letter:"B", text:"was / doing"}, {letter:"C", text:"were / doing"}, {letter:"D", text:"was / do"}], correctAnswer: "C", hints: ["Estrutura de pergunta: Were + you + ing?"] },
    { id: "pp-4", type: "short-answer", questionText: "While it ________ (rain), we stayed inside the house.", correctAnswer: "was raining", hints: ["Past continuous do verbo Rain."] },
    { id: "pp-5", type: "mc", questionText: "They ________ (play) basketball while she ________ (read) a book.", options: [{letter:"A", text:"were playing / was reading"}, {letter:"B", text:"was playing / were reading"}, {letter:"C", text:"played / read"}, {letter:"D", text:"playing / reading"}], correctAnswer: "A", hints: ["Duas ações simultâneas no passado."] },
    { id: "pp-6", type: "mc", questionText: "I ________ (have) a beautiful dream when the alarm clock rang.", options: [{letter:"A", text:"had"}, {letter:"B", text:"was having"}, {letter:"C", text:"were having"}, {letter:"D", text:"have"}], correctAnswer: "B", hints: ["Ação interrompida."] },
    { id: "pp-7", type: "short-answer", questionText: "Negative form: She ________ (not/work) yesterday at 5 PM.", correctAnswer: "was not working", hints: ["Pode usar a contração 'wasn't working'."] },
    { id: "pp-8", type: "mc", questionText: "Why ________ she ________ (cry) when I saw her?", options: [{letter:"A", text:"did / cry"}, {letter:"B", text:"were / crying"}, {letter:"C", text:"was / crying"}, {letter:"D", text:"is / crying"}], correctAnswer: "C", hints: ["She pede o auxiliar WAS."] },
    { id: "pp-9", type: "mc", questionText: "We ________ (cook) dinner when the guests arrived.", options: [{letter:"A", text:"were cooking"}, {letter:"B", text:"was cooking"}, {letter:"C", text:"cooked"}, {letter:"D", text:"was cook"}], correctAnswer: "A", hints: ["We = plural."] },
    { id: "pp-10", type: "short-answer", questionText: "Interrogative: ________ they ________ (wait) for the bus?", correctAnswer: "Were they waiting", hints: ["Inicie com a letra maiúscula."] }
];

// CAP 4: INDEFINITE PRONOUNS
const bankIndefinite = [
    { id: "ip-1", type: "mc", questionText: "I'm sure I left my keys ________ in this room.", options: [{letter:"A", text:"anywhere"}, {letter:"B", text:"somewhere"}, {letter:"C", text:"nowhere"}, {letter:"D", text:"everywhere"}], correctAnswer: "B", hints: ["Afirmativa: algum lugar."] },
    { id: "ip-2", type: "mc", questionText: "Does ________ know the answer to this question?", options: [{letter:"A", text:"someone"}, {letter:"B", text:"no one"}, {letter:"C", text:"anyone"}, {letter:"D", text:"everyone"}], correctAnswer: "C", hints: ["Em perguntas usamos ANY."] },
    { id: "ip-3", type: "mc", questionText: "The party was boring. ________ danced.", options: [{letter:"A", text:"Somebody"}, {letter:"B", text:"Nobody"}, {letter:"C", text:"Anybody"}, {letter:"D", text:"Everybody"}], correctAnswer: "B", hints: ["Sentido negativo: ninguém."] },
    { id: "ip-4", type: "mc", questionText: "I've looked ________, but I can't find my dog.", options: [{letter:"A", text:"everywhere"}, {letter:"B", text:"somewhere"}, {letter:"C", text:"anywhere"}, {letter:"D", text:"nowhere"}], correctAnswer: "A", hints: ["Procurou em todos os lugares."] },
    { id: "ip-5", type: "short-answer", questionText: "There is ________ (nada) to do in this town.", correctAnswer: "nothing", hints: ["Pense em 'nada'."] },
    { id: "ip-6", type: "mc", questionText: "________ told me that you were moving to Canada.", options: [{letter:"A", text:"Anyone"}, {letter:"B", text:"No one"}, {letter:"C", text:"Someone"}, {letter:"D", text:"Anything"}], correctAnswer: "C", hints: ["Alguém me contou."] },
    { id: "ip-7", type: "mc", questionText: "I don't need ________ from the supermarket.", options: [{letter:"A", text:"nothing"}, {letter:"B", text:"anything"}, {letter:"C", text:"something"}, {letter:"D", text:"everything"}], correctAnswer: "B", hints: ["Negativa pede ANY."] },
    { id: "ip-8", type: "short-answer", questionText: "Can ________ (alguém) help me with this box?", correctAnswer: "someone", hints: ["Ofertas/Pedidos: Some."] },
    { id: "ip-9", type: "mc", questionText: "The room was empty. There was ________ there.", options: [{letter:"A", text:"anybody"}, {letter:"B", text:"somebody"}, {letter:"C", text:"nobody"}, {letter:"D", text:"everybody"}], correctAnswer: "C", hints: ["Vazio = Ninguém."] },
    { id: "ip-10", type: "mc", questionText: "You can sit ________ you want.", options: [{letter:"A", text:"anywhere"}, {letter:"B", text:"somewhere"}, {letter:"C", text:"nowhere"}, {letter:"D", text:"everywhere"}], correctAnswer: "A", hints: ["Qualquer lugar."] }
];

// CAP 5: ARTICLES
const bankArticles = [
    { id: "art-1", type: "mc", questionText: "My father is ________ architect.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X"}], correctAnswer: "B", hints: ["Som de vogal."] },
    { id: "art-2", type: "mc", questionText: "I want to travel to ________ United States.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X"}], correctAnswer: "C", hints: ["Países plurais: THE."] },
    { id: "art-3", type: "mc", questionText: "________ water in that bottle is very cold.", options: [{letter:"A", text:"A"}, {letter:"B", text:"An"}, {letter:"C", text:"The"}, {letter:"D", text:"X"}], correctAnswer: "C", hints: ["Água específica."] },
    { id: "art-4", type: "mc", questionText: "I love ________ Brazilian food.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X"}], correctAnswer: "D", hints: ["Geral: sem artigo."] },
    { id: "art-5", type: "short-answer", questionText: "He is ________ (an/a) honest person.", correctAnswer: "an", hints: ["H mudo."] },
    { id: "art-6", type: "mc", questionText: "Paris is ________ capital of France.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X"}], correctAnswer: "C", hints: ["Única."] },
    { id: "art-7", type: "mc", questionText: "She has ________ cat and ________ dog.", options: [{letter:"A", text:"a / a"}, {letter:"B", text:"an / an"}, {letter:"C", text:"the / the"}], correctAnswer: "A", hints: ["Consoantes."] },
    { id: "art-8", type: "short-answer", questionText: "I saw ________ UFO last night.", correctAnswer: "a", hints: ["Som de 'YU'."] },
    { id: "art-9", type: "mc", questionText: "________ Moon looks beautiful tonight.", options: [{letter:"A", text:"A"}, {letter:"B", text:"An"}, {letter:"C", text:"The"}], correctAnswer: "C", hints: ["Corpo celeste único."] },
    { id: "art-10", type: "mc", questionText: "Would you like ________ cup of tea?", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}], correctAnswer: "A", hints: ["Uma qualquer."] }
];

// CAP 6: PAST PERFECT
const bankPastPerfect = [
    { id: "ppf-1", type: "mc", questionText: "The train ________ (leave) when I arrived.", options: [{letter:"A", text:"has left"}, {letter:"B", text:"had left"}, {letter:"C", text:"was left"}], correctAnswer: "B", hints: ["Ação anterior ao passado."] },
    { id: "ppf-2", type: "mc", questionText: "I recognized him because I ________ (see) him before.", options: [{letter:"A", text:"saw"}, {letter:"B", text:"had seen"}, {letter:"C", text:"have seen"}], correctAnswer: "B", hints: ["Had + V3."] },
    { id: "ppf-3", type: "short-answer", questionText: "They ________ (finish) the report before noon.", correctAnswer: "had finished", hints: ["Past Perfect de Finish."] },
    { id: "ppf-4", type: "mc", questionText: "She failed because she ________ (not/study).", options: [{letter:"A", text:"hadn't studied"}, {letter:"B", text:"didn't study"}], correctAnswer: "A", hints: ["Causa anterior."] },
    { id: "ppf-5", type: "mc", questionText: "________ you ________ (eat) before you left?", options: [{letter:"A", text:"Had / eaten"}, {letter:"B", text:"Did / eat"}], correctAnswer: "A", hints: ["Pergunta no Past Perfect."] },
    { id: "ppf-6", type: "short-answer", questionText: "I ________ (visit) China before I moved here.", correctAnswer: "had visited", hints: ["Had + Particípio."] },
    { id: "ppf-7", type: "mc", questionText: "The house was dirty. They ________ (not/clean) it.", options: [{letter:"A", text:"hadn't cleaned"}, {letter:"B", text:"haven't cleaned"}], correctAnswer: "A", hints: ["Negativa."] },
    { id: "ppf-8", type: "mc", questionText: "After we ________ (finish), we went out.", options: [{letter:"A", text:"had finished"}, {letter:"B", text:"were finishing"}], correctAnswer: "A", hints: ["Sequência."] },
    { id: "ppf-9", type: "short-answer", questionText: "I ________ (never/be) there until today.", correctAnswer: "had never been", hints: ["Never entre o Had e o Been."] },
    { id: "ppf-10", type: "mc", questionText: "The class ________ (already/start) when I arrived.", options: [{letter:"A", text:"had already started"}, {letter:"B", text:"has started"}], correctAnswer: "A", hints: ["Already."] }
];

// CAP 7: CAUSATIVE VERBS
const bankCausative = [
    { id: "cau-1", type: "mc", questionText: "I had the plumber ________ (fix) the leak.", options: [{letter:"A", text:"to fix"}, {letter:"B", text:"fix"}], correctAnswer: "B", hints: ["HAVE + person + base."] },
    { id: "cau-2", type: "mc", questionText: "She got her sister ________ (help) her.", options: [{letter:"A", text:"help"}, {letter:"B", text:"to help"}], correctAnswer: "B", hints: ["GET + person + TO."] },
    { id: "cau-3", type: "mc", questionText: "The teacher made them ________ (rewrite) the essay.", options: [{letter:"A", text:"rewrite"}, {letter:"B", text:"to rewrite"}], correctAnswer: "A", hints: ["MAKE + person + base."] },
    { id: "cau-4", type: "short-answer", questionText: "I need to get my hair ________ (cut).", correctAnswer: "cut", hints: ["Particípio."] },
    { id: "cau-5", type: "mc", questionText: "My parents let me ________ (go) out.", options: [{letter:"A", text:"to go"}, {letter:"B", text:"go"}], correctAnswer: "B", hints: ["LET + base."] },
    { id: "cau-6", type: "mc", questionText: "I'll have him ________ (call) you.", options: [{letter:"A", text:"call"}, {letter:"B", text:"to call"}], correctAnswer: "A", hints: ["HAVE + base."] },
    { id: "cau-7", type: "short-answer", questionText: "We had our house ________ (paint).", correctAnswer: "painted", hints: ["Particípio."] },
    { id: "cau-8", type: "mc", questionText: "Help me ________ (carry) this.", options: [{letter:"A", text:"carry"}, {letter:"B", text:"to carry"}, {letter:"C", text:"both"}], correctAnswer: "C", hints: ["Help é flexível."] },
    { id: "cau-9", type: "mc", questionText: "They made him ________ (stay).", options: [{letter:"A", text:"to stay"}, {letter:"B", text:"stay"}], correctAnswer: "B", hints: ["Base form."] },
    { id: "cau-10", type: "mc", questionText: "I got the car ________ (repair).", options: [{letter:"A", text:"repair"}, {letter:"B", text:"repaired"}], correctAnswer: "B", hints: ["Objeto + Particípio."] }
];

// ==========================================
// 2. FUNÇÕES DE SUPORTE E LOGIN
// ==========================================
function handleLogin() {
    let username = prompt("Digite seu usuário:");
    if (!username) return false; 
    let password = prompt("Digite sua senha:");
    if (!password) return false; 

    if (studentDatabase[username] && studentDatabase[username].password === password) {
        currentStudentName = studentDatabase[username].name;
        alert(`Bem-vindo(a), ${currentStudentName}!`);
        return true;
    }
    alert("Usuário ou senha incorretos.");
    return false;
}

function getRandom(array, num) {
    if (!array || array.length === 0) return [];
    return [...array].sort(() => 0.5 - Math.random()).slice(0, num);
}

// ==========================================
// 3. CONSTRUÇÃO DA PÁGINA (CABEÇALHO ORIGINAL)
// ==========================================
function createHeader(mainElement) {
    const headerHTML = `
        <div class="titulo">
            <h1>Simulado Preparatório - Temas Finais</h1>
            <h3>Prova de Inglês - 2026</h3>
        </div>
        <hr class="first">
        <div class="aluno"><p>ALUNO</p><hr class="second"></div>
        <div class="sede"><p>SEDE</p><hr class="quarto"></div>
        <div class="tur"><p>TURMA</p><hr class="quinto"></div>
        <div class="scores"><p class="score-display">TOTAL SCORES</p><hr class="sexto"></div>
        <div class="turma"><p>N°</p><hr class="third"></div>
        <div class="header-container">
            <div class="grade-box">
                <p class="grade-display">NOTA</p>
                <p class="resultado">Resultado</p>
            </div>
        </div>
    `;
    mainElement.insertAdjacentHTML('afterbegin', headerHTML);
}

function buildTest(mainElement, submitContainer) {
    // Sorteando 2 de cada banco para gerar um teste de 10 questões equilibrado
    currentTestQuestions = [
        ...getRandom(bankPastProgressive, 2),
        ...getRandom(bankIndefinite, 2),
        ...getRandom(bankArticles, 2),
        ...getRandom(bankPastPerfect, 2),
        ...getRandom(bankCausative, 2)
    ];

    currentTestQuestions.forEach((questionData, index) => {
        let questionHTML = `
            <div class="test-paper" data-question-id="${questionData.id}">
                <div class="question-header">
                    <div class="question">
                        <p><b>${index + 1}.</b> ${questionData.questionText}</p>
                    </div>
                    <button class="hint-btn" data-question-id="${questionData.id}">Dica</button>
                </div>`;

        if (questionData.type === 'mc') {
            questionHTML += '<div class="options">';
            questionData.options.forEach(option => {
                questionHTML += `<div class="option" data-answer="${option.letter}"><p>${option.text}</p></div>`;
            });
            questionHTML += '</div>';
        } else if (questionData.type === 'short-answer') {
            questionHTML += `
                <div class="write-answer">
                    <input type="text" class="answer-input" placeholder="Sua resposta aqui...">
                </div>`;
        }
        questionHTML += '</div>';
        mainElement.insertBefore(document.createRange().createContextualFragment(questionHTML), submitContainer);
    });
}

// ==========================================
// 4. LÓGICA DE EVENTOS E SUBMIT
// ==========================================
function attachListeners() {
    document.addEventListener('click', (e) => {
        const option = e.target.closest('.option');
        if (option) {
            const container = option.closest('.options');
            container.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        }

        if (e.target.classList.contains('hint-btn')) {
            const qId = e.target.dataset.questionId;
            const qData = currentTestQuestions.find(q => q.id === qId);
            if (qData && qData.hints) {
                alert("Dicas:\n- " + qData.hints.join('\n- '));
            }
        }
    });
}

function attachSubmitLogic() {
    const submitBtn = document.getElementById('submit-btn');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', function() {
        let totalScore = 0;
        let isAllAnswered = true;
        const allQuestionElements = document.querySelectorAll('.test-paper');

        allQuestionElements.forEach((questionElement) => {
            const qId = questionElement.dataset.questionId;
            const qData = currentTestQuestions.find(q => q.id === qId);

            if (qData.type === 'mc') {
                const sel = questionElement.querySelector('.option.selected');
                if (!sel) isAllAnswered = false;
                else if (sel.dataset.answer === qData.correctAnswer) totalScore += 1;
            } 
            else if (qData.type === 'short-answer') {
                const input = questionElement.querySelector('.answer-input');
                const val = input.value.trim().toLowerCase();
                if (val === "") isAllAnswered = false;
                else if (val === qData.correctAnswer.toLowerCase()) totalScore += 1;
            }
        });

        if (!isAllAnswered) {
            alert("Por favor, responda todas as questões!");
            return;
        }

        document.querySelector('.resultado').textContent = totalScore;
        document.querySelector('.score-display').textContent = `TOTAL SCORES: ${totalScore}/10`;
        alert(totalScore >= 7 ? "Parabéns! Ótimo resultado." : "Continue estudando!");
        this.disabled = true;
    });
}

// ==========================================
// 5. INÍCIO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    if (handleLogin()) {
        const main = document.getElementById('main');
        const submit = document.querySelector('.submit-container');
        createHeader(main);
        buildTest(main, submit);
        attachListeners();
        attachSubmitLogic();
    } else {
        location.reload();
    }
});

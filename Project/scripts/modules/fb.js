// ==========================================
// 1. VARIÁVEIS GLOBAIS E BANCOS
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

const bankInterpWrite = [
    {
    id: "gram-have-has-fill-q4",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Have vs. Has</b><br>
        <i>Read and type the correct form of "have" or "has" to complete the sentences:</i><br><br>
        
        <b>a)</b> I <input type="text" class="answer-input" data-ans-idx="0" style="width: 80px !important; display: inline-block;" placeholder="..."> never been to London.<br><br>

        <b>b)</b> She <input type="text" class="answer-input" data-ans-idx="1" style="width: 80px !important; display: inline-block;" placeholder="..."> already finished her homework.<br><br>

        <b>c)</b> They <input type="text" class="answer-input" data-ans-idx="2" style="width: 80px !important; display: inline-block;" placeholder="..."> seen that movie before.<br><br>

        <b>d)</b> He <input type="text" class="answer-input" data-ans-idx="3" style="width: 80px !important; display: inline-block;" placeholder="..."> worked here for five years.<br><br>

        <b>e)</b> We <input type="text" class="answer-input" data-ans-idx="4" style="width: 80px !important; display: inline-block;" placeholder="..."> just eaten lunch.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>📺 <b>Study Support:</b> <a href="https://www.youtube.com/watch?v=ENZ0-KRAcp0" target="_blank">Watch the explanation video</a></small>
        </div>
    `,
    correctAnswers: ["have", "has", "have", "has", "have"],
    hints: [
        "Dica: 'I, You, We, They' usam HAVE.",
        "Dica: 'He, She, It' (3ª pessoa) usam HAS."
    ]
    },
    {
    id: "gram-have-has-fill-q5",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Have vs. Has - Practice II</b><br>
        <i>Complete the sentences by typing "have" or "has":</i><br><br>
        
        <b>a)</b> You <input type="text" class="answer-input" data-ans-idx="0" style="width: 80px !important; display: inline-block;" placeholder="..."> studied a lot this week.<br><br>

        <b>b)</b> It <input type="text" class="answer-input" data-ans-idx="1" style="width: 80px !important; display: inline-block;" placeholder="..."> started to rain.<br><br>

        <b>c)</b> My parents <input type="text" class="answer-input" data-ans-idx="2" style="width: 80px !important; display: inline-block;" placeholder="..."> traveled to Europe twice.<br><br>

        <b>d)</b> She <input type="text" class="answer-input" data-ans-idx="3" style="width: 80px !important; display: inline-block;" placeholder="..."> lost her keys again!<br><br>

        <b>e)</b> I <input type="text" class="answer-input" data-ans-idx="4" style="width: 80px !important; display: inline-block;" placeholder="..."> just called you.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>📺 <b>Study Support:</b> <a href="https://www.youtube.com/watch?v=ENZ0-KRAcp0" target="_blank">Watch the explanation video</a></small>
        </div>
    `,
    correctAnswers: ["have", "has", "have", "has", "have"],
    hints: [
        "A: 'You' always takes HAVE.",
        "B: 'It' is 3rd person singular.",
        "C: 'My parents' = They.",
        "D: 'She' is 3rd person singular.",
        "E: 'I' always takes HAVE."
    ]
},
    {
    id: "gram-perf-cont-q8-fill",
    type: "short-answer",
    questionText: `
        <b>Grammar: Present Perfect Continuous</b><br>
        <i>Complete the sentence with the correct form of the verb in parentheses (<b>have/has + been + verb-ing</b>):</i><br><br>
        
        I <input type="text" class="answer-input" style="width: 220px !important; display: inline-block;" placeholder="type your answer here..."> (study) English for five years, and I still study every day.
    `,
    correctAnswer: "have been studying",
    hints: [
        "Dica: Para 'I', use HAVE + BEEN + o verbo com ING.",
        "A estrutura indica uma ação que começou no passado e continua até hoje."
    ]
},
{
    id: "gram-perf-cont-q13-fill",
    type: "short-answer",
    questionText: `
        <b>Grammar: Present Perfect Continuous (Evidence)</b><br>
        <i>Look at the context and type the correct form of the verb (<b>have/has + been + verb-ing</b>):</i><br><br>
        
        Look at her hands! She <input type="text" class="answer-input" style="width: 180px !important; display: inline-block;" placeholder="type here..."> (work) in the garden.
    `,
    correctAnswer: "has been working",
    hints: [
        "Dica: Para 'She', usamos HAS + BEEN + o verbo com ING.",
        "Usamos essa estrutura quando há uma evidência presente de uma ação que acabou de acontecer ou que continua acontecendo."
    ]
}
   
];

const bankInterpMC = [
    {
        id: "int-mc-w1-true-false",
        type: "short-answer-double", 
        questionText: `
            <b>2. Write (T) for True or (F) for False according to the text:</b><br><br>
            <b>a)<input type="text" class="answer-input" style="width: 50px !important;" data-ans-idx="0"></b> Natural wonders are created by humans.<br>
            <b>b)<input type="text" class="answer-input" style="width: 50px !important;" data-ans-idx="1"></b> Humans can help in the preservation.<br>
            <b>c)<input type="text" class="answer-input" style="width: 50px !important;" data-ans-idx="2"></b> Not naturally occurring.<br>
            <b>d)<input type="text" class="answer-input" style="width: 50px !important;" data-ans-idx="3"></b> Showcase the power of nature.
        `,
        correctAnswers: ["F", "T", "F", "T"],
        hints: ["A: Did humans create them?", "B: Check 'preservation'.", "C: Sentence 1.", "D: Power of nature?"]
    },
    {
    id: "int-mc-methods-tf-custom",
    type: "short-answer-double",
    questionText: `
        <b>Texto base:</b><br>
        <i>"There are many methods for proofreading. Often, the most effective for you might not be the most effective for someone else. Printing out a hard copy is good because words appear different on the page than on the screen. You can also read backwards or change font colors to help your brain spot errors. Reading aloud is a great way to find missing words, and the symbols used in this process are called 'editing marks'."</i>
        <br><br>
        <b>2. Write (T) for True or (F) for False according to the text:</b>
        <br><br>
        <b>a) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="0"></b> The same proofreading method works perfectly for everyone.
        <br><br>
        <b>b) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="1"></b> Reading aloud helps you identify words that might be missing.
        <br><br>
        <b>c) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="2"></b> 'Editing marks' are the symbols used to identify errors.
        <br><br>
        <b>d) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="3"></b> Words look exactly the same on the screen as they do on a printed page.
    `,
    correctAnswers: ["F", "T", "T", "F"],
    hints: [
        "A: Check the first paragraph about effectiveness.",
        "B: Look at the 'Read aloud' section.",
        "C: What are the symbols called?",
        "D: Does the text say they appear different or the same?"
    ]
},
{
    id: "myth-gods-fill",
    type: "short-answer-double",
    questionText: `
        <b>Greek Mythology - Complete the sentences with the correct God:</b><br>
        <div style="border: 1px solid #000; padding: 10px; text-align: center; margin-bottom: 15px; background-color: #f9f9f9;">
            Apollo | Athena | Hades | Aphrodite | Zeus | Ares | Demeter
        </div>
        
        <b>a)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> was known as the king of the gods on Mount Olympus.
        <br><br>
        <b>b)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> was the god of war and battles.
        <br><br>
        <b>c)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> was the goddess of agriculture and harvest.
        <br><br>
        <b>d)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> was known for her wisdom and intelligence.
        <br><br>
        <b>e)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="4"> was the god connected to music and the sun.
        <br><br>
        <b>f)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="5"> ruled the world of the dead.
        <br><br>
        <b>g)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="6"> was the goddess of love and beauty.
    `,
    correctAnswers: ["Zeus", "Ares", "Demeter", "Athena", "Apollo", "Hades", "Aphrodite"],
    hints: [
        "A: Lightning bolt/King",
        "B: War",
        "C: Plants/Harvest",
        "D: Wisdom/Owl",
        "E: Sun/Music",
        "F: Underworld",
        "G: Love"
    ]
}
];


const bankGrammar1 = [{
        id: "int-mc-text-victoria",
        type: "mc",
        questionText: `
            <b>Reading Comprehension:</b><br><br>
            <i>"Victoria Falls is considered to be the world's largest waterfall based on the amount of falling water – every second, some 33,000 cubic feet (935 cubic meters) of water fall over. Still water levels are not constant, and they particularly rise during the flood season from February to May."</i>
            <br><br>
            <b>According to the text, when do the water levels typically rise?</b>`,
        options: [
            { letter: "A", text: "a) From January to March" },
            { letter: "B", text: "b) During the dry season" },
            { letter: "C", text: "c) From February to May" },
            { letter: "D", text: "d) Every single day of the year" }
        ],
        correctAnswer: "C",
        hints: ["Look for the months mentioned at the end of the text."]
    },
    {
    id: "int-mc-myth-gods",
    type: "mc",
    questionText: `
        <b>Reading Comprehension - Greek Mythology:</b><br><br>
        <i>"Mount Olympus was the home of the twelve main gods. Among them, <b>Zeus</b> was the most powerful, ruling as the king. His brother, <b>Hades</b>, did not live on Olympus, as he ruled the dark world of the dead. Meanwhile, <b>Athena</b> was admired by the Greeks not for her strength in war, like Ares, but for her great wisdom and intelligence."</i>
        <br><br>
        <b>According to the text, what is the main difference between Athena and Ares?</b>`,
    options: [
        { letter: "A", text: "Athena lived on Mount Olympus, but Ares lived in the underworld." },
        { letter: "B", text: "Ares was the king of the gods, while Athena was a simple goddess." },
        { letter: "C", text: "Athena was known for her wisdom, whereas Ares was known for war." },
        { letter: "D", text: "Ares was more powerful than Zeus, according to the Greek myths." }
    ],
    correctAnswer: "C",
    hints: ["Compare what the text says about Athena's intelligence and Ares' strength."]
},
    {
        id: "int-mc-text-reef",
        type: "mc",
        questionText: `
            <b>Reading Comprehension:</b><br><br>
            <i>"The Great Barrier Reef is visible from outer space. Over 1500 different species of fish, and a great number of turtles, sharks and seahorses can regularly be seen in the reef."</i>
            <br><br>
            <b>What can be said about the Great Barrier Reef's visibility?</b>`,
        options: [
            { letter: "A", text: "a) It can only be seen with a microscope." },
            { letter: "B", text: "b) It is visible from outer space." },
            { letter: "C", text: "c) It is too small to be seen from planes." },
            { letter: "D", text: "d) It can only be seen by 1500 species of fish." }
        ],
        correctAnswer: "B",
        hints: ["Check the very first sentence of the text."]
    }];
const bankGrammar2 = [{
    id: "gram-was-were-fill",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Complete the sentences with "was" or "were":</b><br><br>
        
        <b>a)</b> The students <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="0"> in the classroom yesterday morning.
        <br><br>
        <b>b)</b> My parents <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="1"> at home last night.
        <br><br>
        <b>c)</b> The teacher <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="2"> at school yesterday.
        <br><br>
        <b>d)</b> We <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="3"> at the park yesterday afternoon.
        <br><br>
        <b>e)</b> My brother <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="4"> very tired yesterday.
        <br><br>
        <b>f)</b> The children <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="5"> at the playground after school.
        <br><br>
        <b>g)</b> I <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="6"> at the library yesterday afternoon.
    `,
    correctAnswers: ["were", "were", "was", "were", "was", "were", "was"],
    hints: [
        "Singular (I, He, She, It) -> WAS",
        "Plural (You, We, They) -> WERE",
        "Dica: 'Students', 'Parents' e 'Children' são plural!"
    ]
},
{
    id: "gram-was-were-v2",
    type: "short-answer-double",
    questionText: `
        <b>Grammar Practice: Past of To Be (Was / Were)</b><br><br>
        <i>Fill in the blanks with the correct form of the verb:</i><br><br>
        
        <b>a)</b> Sarah <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="0"> very happy with her birthday gift.
        <br><br>
        <b>b)</b> The dogs <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="1"> barking at the mailman this morning.
        <br><br>
        <b>c)</b> You <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="2"> the best student in the English class.
        <br><br>
        <b>d)</b> It <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="3"> very cold in London last week.
        <br><br>
        <b>e)</b> Paul and Mary <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="4"> at the cinema on Saturday.
        <br><br>
        <b>f)</b> The weather <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="5"> perfect for a beach day.
        <br><br>
        <b>g)</b> My friends and I <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="6"> excited about the trip.
    `,
    correctAnswers: ["was", "were", "were", "was", "were", "was", "were"],
    hints: [
        "A: Sarah = She",
        "B: Dogs = They (plural)",
        "C: Remember: You always uses 'were'",
        "G: 'My friends and I' = We"
    ]
}
];
const bankOthers = [{
        id: "gram-past-reg-1",
        type: "mc",
        questionText: "Last night, Sarah ________ her homework early to watch a movie.",
        options: [
            { letter: "A", text: "finish" },
            { letter: "B", text: "finishing" },
            { letter: "C", text: "finished" },
            { letter: "D", text: "finishes" }
        ],
        correctAnswer: "C",
        hints: ["Para verbos regulares no passado, geralmente adicionamos 'ed' ao final."]
    },
    {
        id: "gram-past-reg-2",
        type: "mc",
        questionText: "They ________ soccer in the park for two hours yesterday.",
        options: [
            { letter: "A", text: "played" },
            { letter: "B", text: "plays" },
            { letter: "C", text: "playing" },
            { letter: "D", text: "play" }
        ],
        correctAnswer: "A",
        hints: ["A palavra 'yesterday' indica que a ação já aconteceu. Use o final 'ed'."]
    },
    {
        id: "gram-past-reg-3",
        type: "mc",
        questionText: "The chef ________ a delicious dinner for the guests last Sunday.",
        options: [
            { letter: "A", text: "cooks" },
            { letter: "B", text: "cooked" },
            { letter: "C", text: "cooking" },
            { letter: "D", text: "cook" }
        ],
        correctAnswer: "B",
        hints: ["O verbo 'cook' é regular. Como a frase está no passado, qual a terminação correta?"]
    },
    {
    id: "gram-past-reg-3",
    type: "mc",
    questionText: "Yesterday, I ________ a delicious pizza for lunch.",
    options: [
        { letter: "A", text: "eat" },
        { letter: "B", text: "eated" },
        { letter: "C", text: "ate" },
        { letter: "D", text: "eating" }
    ],
    correctAnswer: "C",
    hints: ["O verbo 'eat' é irregular. O passado dele muda a escrita e não termina em 'ed'."]
}
];
// BANCO 6: Escrita de Verbos (Presente -> Passado)
const bankGrammarWrite = [
    {
        id: "gram-write-verbs-1",
        type: "short-answer-double",
        questionText: `
            <b>Complete with the Past Simple form of the verbs:</b><br><br>
            
            <b>a) WORK:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> (Regular)
            <br><br>
            <b>b) WATCH:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> (Regular)
            <br><br>
            <b>c) GO:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> (Irregular)
            <br><br>
            <b>d) CLEAN:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> (Regular)
            <br><br>
            <b>e) EAT:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="4"> (Irregular)
        `,
        correctAnswers: ["worked", "watched", "went", "cleaned", "ate"],
        hints: ["A e B: +ED", "C: Palavra nova (W...)", "D: +ED", "E: Muda a ordem (A...)"]
    }
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
// 3. CONSTRUÇÃO DA PÁGINA
// ==========================================
function createHeader(mainElement) {
    const headerHTML = `
        <div class="titulo">
            <h1>Simulado preparatório para a prova de Inglês</h1>
            <h3>Prova Final - 2025</h3>
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
    // Agora o código não trava pois bankGrammar1 existe
    currentTestQuestions = [
        ...getRandom(bankInterpWrite, 1),
        ...getRandom(bankInterpMC, 3),
        ...getRandom(bankGrammar1, 2),
        ...getRandom(bankGrammar2, 2),
        ...getRandom(bankOthers, 2)
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
                    <input type="text" class="answer-input" placeholder="Escreva sua resposta aqui...">
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
        // Lógica de Seleção de Múltipla Escolha
        const option = e.target.closest('.option');
        if (option) {
            const container = option.closest('.options');
            container.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        }

        // Lógica do Botão de Dica (HINTS)
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
        let incorrectQuestions = [];
        const allQuestionElements = document.querySelectorAll('.test-paper');

        allQuestionElements.forEach((questionElement, index) => {
            const qId = questionElement.dataset.questionId;
            const qData = currentTestQuestions.find(q => q.id === qId);

            if (qData.type === 'mc') {
                const sel = questionElement.querySelector('.option.selected');
                if (!sel) isAllAnswered = false;
                else if (sel.dataset.answer === qData.correctAnswer) totalScore += 1;
                else incorrectQuestions.push(index + 1);
            } 
            else if (qData.type === 'short-answer') {
                const input = questionElement.querySelector('.answer-input');
                const val = input.value.trim().toLowerCase();
                if (val === "") isAllAnswered = false;
                else if (val === qData.correctAnswer.toLowerCase()) totalScore += 1;
                else incorrectQuestions.push(index + 1);
            }
            else if (qData.type === 'short-answer-double') {
                const inputs = questionElement.querySelectorAll('.answer-input');
                let correctCount = 0;
                let anyEmpty = false;

                inputs.forEach((input, i) => {
                    const val = input.value.trim().toLowerCase();
                    if (val === "") anyEmpty = true;
                    // Comparação simples (pode precisar de regex para ser menos rígida)
                    if (val === qData.correctAnswers[i].toLowerCase()) correctCount++;
                });

                if (anyEmpty) isAllAnswered = false;
                totalScore += (correctCount === qData.correctAnswers.length) ? 1 : (correctCount * (1 / qData.correctAnswers.length));
                if (correctCount < qData.correctAnswers.length) incorrectQuestions.push(index + 1);
            }
        });

        if (!isAllAnswered) {
            alert("Por favor, responda todas as questões!");
            return;
        }

        const finalScore = parseFloat(totalScore.toFixed(1));
        document.querySelector('.resultado').textContent = finalScore;
        document.querySelector('.resultado').style.color = '#0055ff';
        document.querySelector('.score-display').textContent = `TOTAL SCORES: ${finalScore}/10`;

        alert(incorrectQuestions.length > 0 ? `Revisar questões: ${incorrectQuestions.join(', ')}` : "Excelente! Nota 10!");
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
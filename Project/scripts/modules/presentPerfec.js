const questionBank = [
    
    {
        id: "q1", // Você pode mudar o ID se precisar
        type: "mc",
        questionText: `
            <img src="images/present3.png" alt="Charlie Brown Comic" loading="lazy" style="width: 280px;">
            <br><br>
            Na tirinha, a pergunta "<b>Have you ever known...</b>" usa o Present Perfect para:
        `,
        options: [
            { letter: "A", text: "(A) Perguntar sobre uma experiência de vida (em qualquer ponto até agora)." },
            { letter: "B", text: "(B) Perguntar sobre uma ação que acabou de acontecer." },
            { letter: "C", text: "(C) Perguntar sobre uma ação que começou no passado e continua." },
            { letter: "D", text: "(D) Perguntar sobre um evento específico que aconteceu ontem." },
            { letter: "E", text: "(E) Perguntar sobre um resultado visível no presente." }
        ],
        correctAnswer: "A", // A resposta correta é 'A'
        videoUrl: ""
    },
    {
        id: "q2", // Você pode mudar o ID se precisar
        type: "mc",
        questionText: `
            <img src="images/present5.jpg" alt="London Comic" loading="lazy" style="width: 300px;">
            <br><br>
            Analise a imagem. A mulher diz que está em Londres "<b>Since Monday</b>" (Desde Segunda). A placa na torre do relógio indica que hoje é "<b>FRIDAY</b>" (Sexta-feira).
            <br><br>
            Qual frase também está correta?
        `,
        options: [
            { letter: "A", text: "(A) She has been in London for five days." }, // Correta (Seg, Ter, Qua, Qui, Sex)
            { letter: "B", text: "(B) She has been in London since five days." },
            { letter: "C", text: "(C) She has been in London for Monday." },
            { letter: "D", text: "(D) She arrived in London for Friday." },
            { letter: "E", text: "(E) She has been in London since Friday." }
        ],
        correctAnswer: "A", // A resposta correta é 'A'
        videoUrl: ""
    },
    {
        id: "q3", // Você pode mudar o ID se precisar
        type: "mc",
        questionText: `
            <img src="images/present1.png" alt="Earl Comic" loading="lazy" style="width: 400px;">
            <br><br>
            Na tirinha, a mulher pergunta "<b>Where've you been, Earl?</b>" (Onde você esteve?).
            <br><br>
            Ela usa o Present Perfect ("have been") porque:
        `,
        options: [
            { letter: "A", text: "(A) Ela quer saber sobre uma ação que ele fez ontem." },
            { letter: "B", text: "(B) Ela quer saber sobre uma ação passada recente, pois ele acabou de voltar." },
            { letter: "C", text: "(C) Ela quer saber sobre uma experiência de vida geral dele." },
            { letter: "D", text: "(D) Ela quer saber o que ele está fazendo agora." },
            { letter: "E", text: "(E) Ela quer saber sobre uma ação que ainda não terminou." }
        ],
        correctAnswer: "B", // A resposta correta é 'B'
        videoUrl: ""
    },
    {
    id: "q4",
    type: "fill-verb", 
    questionText: "Read and choose the correct form of 'have' or 'has' to complete the sentence.",
    lines: [
        { text: "(A) I ______ never been to London.", verbs: ["have", "has"] },
        { text: "(B) She ______ already finished her homework.", verbs: ["has", "have"] },
        { text: "(C) They ______ seen that movie before.", verbs: ["has", "have"] },
        { text: "(D) He ______ worked here for five years.", verbs: ["have", "has"] },
        { text: "(E) We ______ just eaten lunch.", verbs: ["have", "has"] }
    ],
    correctAnswer: ["have", "has", "have", "has", "have"],
    videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0"
},
{
    id: "q5",
    type: "fill-verb", 
    questionText: "Choose the correct form of 'have' or 'has' to complete each sentence.",
    lines: [
        { text: "(A) You ______ studied a lot this week.", verbs: ["have", "has"] },
        { text: "(B) It ______ started to rain.", verbs: ["has", "have"] },
        { text: "(C) My parents ______ traveled to Europe twice.", verbs: ["has", "have"] },
        { text: "(D) She ______ lost her keys again!", verbs: ["has", "have"] },
        { text: "(E) I ______ just called you.", verbs: ["has", "have"] }
    ],
    correctAnswer: ["have", "has", "have", "has", "have"],
    videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0"
},
{
    id: "q6",
    type: "fill-verb", 
    questionText: "Complete the sentences using 'have' or 'has'.",
    lines: [
        { text: "(A) We ______ never seen such a beautiful sunset.", verbs: ["have", "has"] },
        { text: "(B) He ______ been very busy lately.", verbs: ["has", "have"] },
        { text: "(C) They ______ bought a new car.", verbs: ["have", "has"] },
        { text: "(D) She ______ never tried sushi before.", verbs: ["has", "have"] },
        { text: "(E) I ______ finished reading the book.", verbs: ["has", "have"] }
    ],
    correctAnswer: ["have", "has", "have", "has", "have"],
    videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0"
},
{
    id: "q7",
    type: "fill-verb", 
    questionText: "Fill in the blanks with 'have' or 'has'.",
    lines: [
        { text: "(A) My friends ______ been to the concert.", verbs: ["have", "has"] },
        { text: "(B) The dog ______ eaten its food.", verbs: ["has", "have"] },
        { text: "(C) We ______ talked about this before.", verbs: ["have", "has"] },
        { text: "(D) He ______ already gone to work.", verbs: ["has", "have"] },
        { text: "(E) I ______ done all my homework.", verbs: ["have", "has"] }
    ],
    correctAnswer: ["have", "has", "have", "has", "have"],
    videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0"
},
{
    id: "q8",
    type: "fill-verb", 
    questionText: "Choose between 'have' and 'has' to complete the sentences.",
    lines: [
        { text: "(A) She ______ just woken up.", verbs: ["has", "have"] },
        { text: "(B) They ______ finished their exams.", verbs: ["has", "have"] },
        { text: "(C) It ______ been a long day.", verbs: ["have", "has"] },
        { text: "(D) We ______ seen that TV show before.", verbs: ["have", "has"] },
        { text: "(E) He ______ never visited that museum.", verbs: ["has", "have"] }
    ],
    correctAnswer: ["has", "have", "has", "have", "has"],
    videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0"
},
{
    id: "q9",
    type: "fill-verb", 
    questionText: "Read and choose the correct verb form (past or past participle) to complete the sentence.",
    lines: [
        { text: "(A) I have ______ my wallet at home.", verbs: ["forgot", "forgotten"] },
        { text: "(B) She has ______ a new song recently.", verbs: ["written", "wrote"] },
        { text: "(C) They have ______ the car already.", verbs: ["washed", "wash"] },
        { text: "(D) He has ______ all the cookies.", verbs: ["ate", "eaten"] },
        { text: "(E) We have ______ that movie before.", verbs: ["saw", "seen"] }
    ],
    correctAnswer: ["forgotten", "written", "washed", "eaten", "seen"],
    videoUrl: "https://www.youtube.com/embed/Ljv0N0xGdF0"
},
{
    id: "q10",
    type: "fill-verb", 
    questionText: "Choose the correct form of the verb to complete the sentence.",
    lines: [
        { text: "(A) She has never ______ such a beautiful view.", verbs: ["saw", "seen"] },
        { text: "(B) They have ______ the match already.", verbs: ["won", "win"] },
        { text: "(C) I have ______ this book twice.", verbs: ["read", "readed"] },
        { text: "(D) He has ______ his leg.", verbs: ["broke", "broken"] },
        { text: "(E) We have ______ to Paris twice.", verbs: ["gone", "went"] }
    ],
    correctAnswer: ["seen", "won", "read", "broken", "gone"],
    videoUrl: "https://www.youtube.com/embed/Ljv0N0xGdF0"
},
{
    id: "q11",
    type: "fill-verb", 
    questionText: "Complete the sentences choosing the correct verb form (simple past or past participle).",
    lines: [
        { text: "(A) She has ______ her keys again.", verbs: ["lost", "lose"] },
        { text: "(B) They have ______ the project successfully.", verbs: ["finished", "finish"] },
        { text: "(C) I have ______ that place before.", verbs: ["been", "was"] },
        { text: "(D) He has ______ his homework already.", verbs: ["did", "done"] },
        { text: "(E) We have ______ this topic many times.", verbs: ["discussed", "discuss"] }
    ],
    correctAnswer: ["lost", "finished", "been", "done", "discussed"],
    videoUrl: "https://www.youtube.com/embed/Ljv0N0xGdF0"
},
{
    id: "q12",
    type: "fill-verb", 
    questionText: "Choose the correct verb form (past or participle) to complete the sentences.",
    lines: [
        { text: "(A) I have ______ a lot this week.", verbs: ["worked", "work"] },
        { text: "(B) She has ______ to her grandmother today.", verbs: ["spoke", "spoken"] },
        { text: "(C) They have ______ breakfast already.", verbs: ["ate", "eaten"] },
        { text: "(D) He has ______ late every day this week.", verbs: ["come", "came"] },
        { text: "(E) We have ______ this lesson before.", verbs: ["studied", "study"] }
    ],
    correctAnswer: ["worked", "spoken", "eaten", "come", "studied"],
    videoUrl: "https://www.youtube.com/embed/Ljv0N0xGdF0"
},
{
    id: "q13",
    type: "fill-verb", 
    questionText: "Select the correct verb form (simple past or past participle) to fill in the blanks.",
    lines: [
        { text: "(A) She has ______ me many times.", verbs: ["helped", "help"] },
        { text: "(B) I have ______ my phone somewhere.", verbs: ["lost", "lose"] },
        { text: "(C) He has ______ all the milk.", verbs: ["drank", "drunk"] },
        { text: "(D) They have ______ very hard this year.", verbs: ["worked", "work"] },
        { text: "(E) We have ______ some great people here.", verbs: ["met", "meet"] }
    ],
    correctAnswer: ["helped", "lost", "drunk", "worked", "met"],
    videoUrl: "https://www.youtube.com/embed/Ljv0N0xGdF0"
},
{
    id: "q14",
    type: "mc",
    questionText: "1. __________ you ever visited another country?",
    options: [
        { letter: "A", text: "(A) Do" },
        { letter: "B", text: "(B) Have" },
        { letter: "C", text: "(C) Are" },
        { letter: "D", text: "(D) Has" }
    ],
    hint: "Use 'have' for I, you, we, they in Present Perfect questions.",
    correctAnswer: "B"
},
{
    id: "q15",
    type: "mc",
    questionText: "2. __________ she finished her project yet?",
    options: [
        { letter: "A", text: "(A) Have" },
        { letter: "B", text: "(B) Does" },
        { letter: "C", text: "(C) Has" },
        { letter: "D", text: "(D) Is" }
    ],
    hint: "Use 'has' with he, she, or it in the Present Perfect.",
    correctAnswer: "C"
},
{
    id: "q16",
    type: "mc",
    questionText: "3. __________ they ever eaten Japanese food?",
    options: [
        { letter: "A", text: "(A) Have" },
        { letter: "B", text: "(B) Has" },
        { letter: "C", text: "(C) Are" },
        { letter: "D", text: "(D) Do" }
    ],
    hint: "With 'they', the correct auxiliary in Present Perfect is 'have'.",
    correctAnswer: "A"
},
{
    id: "q17",
    type: "mc",
    questionText: "4. __________ your brother already left for work?",
    options: [
        { letter: "A", text: "(A) Have" },
        { letter: "B", text: "(B) Has" },
        { letter: "C", text: "(C) Is" },
        { letter: "D", text: "(D) Did" }
    ],
    hint: "‘Your brother’ is singular → use ‘has’.",
    correctAnswer: "B"
},
{
    id: "q18",
    type: "mc",
    questionText: "5. __________ we done everything we needed to do?",
    options: [
        { letter: "A", text: "(A) Has" },
        { letter: "B", text: "(B) Have" },
        { letter: "C", text: "(C) Are" },
        { letter: "D", text: "(D) Do" }
    ],
    hint: "Use 'have' for the subject 'we' in Present Perfect questions.",
    correctAnswer: "B"
},
{
    id: "q19",
    type: "mc",
    questionText: `
        Questão 19:
        <br>
        Sobre o uso do tempo verbal "Present Perfect" em inglês, analise as afirmações abaixo e assinale a opção que contém apenas a(s) afirmativa(s) correta(s):
        <br><br>
        I. É usado para falar sobre ações que começaram no passado e continuam até o presente.<br>
        II. É usado para descrever experiências de vida sem especificar quando aconteceram.<br>
        III. É usado apenas para ações que terminaram em um tempo definido no passado.<br>
        IV. É formado com o verbo auxiliar "have" ou "has" + particípio passado.<br>
        V. É usado para descrever ações futuras planejadas.
    `,
    options: [
        { letter: "A", text: "(A) Apenas as afirmações I, II e IV estão corretas.", isCorrect: true, rationale: "Essas são as funções principais do Present Perfect. As demais (III e V) se referem a outros tempos verbais." },
        { letter: "B", text: "(B) Apenas as afirmações I e III estão corretas.", isCorrect: false, rationale: "A III está incorreta, pois o Present Perfect não usa tempos definidos." },
        { letter: "C", text: "(C) Apenas as afirmações II e V estão corretas.", isCorrect: false, rationale: "A V está incorreta, pois o Present Perfect não indica futuro planejado." },
        { letter: "D", text: "(D) Todas as afirmações estão corretas.", isCorrect: false, rationale: "A III e a V estão erradas, tornando a alternativa incorreta." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica (Q19): O Present Perfect conecta o passado e o presente, sem dizer quando algo aconteceu."
    ]
},
{
    id: "q20",
    type: "mc",
    questionText: `
        Questão 20:
        <br>
        Sobre o uso do "Present Perfect", analise as afirmações e assinale a opção correta:
        <br><br>
        I. É comum usar "ever" e "never" com o Present Perfect para falar de experiências.<br>
        II. Usa-se "ago" frequentemente com o Present Perfect.<br>
        III. O Present Perfect é formado com "was" ou "were" + verbo base.<br>
        IV. É usado para ações recentes, especialmente com "just".<br>
        V. Expressa ações que começaram e terminaram no passado com tempo específico.
    `,
    options: [
        { letter: "A", text: "(A) Apenas as afirmações I e IV estão corretas.", isCorrect: true, rationale: "‘Ever’, ‘never’ e ‘just’ são expressões comuns com o Present Perfect." },
        { letter: "B", text: "(B) Apenas a afirmação II está correta.", isCorrect: false, rationale: "‘Ago’ é usado com o Simple Past, não com o Present Perfect." },
        { letter: "C", text: "(C) Apenas as afirmações II e V estão corretas.", isCorrect: false, rationale: "Ambas se aplicam ao Simple Past, não ao Present Perfect." },
        { letter: "D", text: "(D) Todas as afirmações estão corretas.", isCorrect: false, rationale: "Somente I e IV estão corretas; as demais descrevem outros tempos." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica (Q20): Palavras como ‘just’, ‘already’, ‘ever’ e ‘never’ indicam uso do Present Perfect."
    ]
},
{
    id: "q21",
    type: "mc",
    questionText: `
        Questão 21:
        <br>
        Em relação à estrutura e uso do Present Perfect, analise as afirmativas:
        <br><br>
        I. É formado por “have/has” + particípio passado.<br>
        II. Indica ações que acabaram de acontecer.<br>
        III. É usado com expressões como “since” e “for” para indicar duração.<br>
        IV. Usa “did” como auxiliar nas perguntas.<br>
        V. É usado para descrever fatos futuros.
    `,
    options: [
        { letter: "A", text: "(A) Apenas as afirmações I, II e III estão corretas.", isCorrect: true, rationale: "Essas três afirmativas refletem o uso correto do Present Perfect." },
        { letter: "B", text: "(B) Apenas as afirmações I e IV estão corretas.", isCorrect: false, rationale: "A IV está incorreta, pois o auxiliar é ‘have/has’, não ‘did’." },
        { letter: "C", text: "(C) Apenas a afirmação V está correta.", isCorrect: false, rationale: "O Present Perfect não fala de futuro, mas de passado conectado ao presente." },
        { letter: "D", text: "(D) Todas as afirmações estão corretas.", isCorrect: false, rationale: "As afirmativas IV e V estão erradas." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica (Q21): Use ‘since’ e ‘for’ com o Present Perfect para mostrar a duração de algo."
    ]
},
{
    id: "q22",
    type: "mc",
    questionText: `
        Questão 22:
        <br>
        Analise as sentenças e marque a alternativa que melhor descreve o uso correto do Present Perfect.
        <br><br>
        I. He has finished his homework. → Ação recente.<br>
        II. She has been to Japan. → Experiência de vida.<br>
        III. They have lived here for ten years. → Ação contínua desde o passado.<br>
        IV. We have gone to the party yesterday. → Tempo definido incorreto.<br>
        V. I have seen that movie last week. → Correto, pois fala de tempo passado.
    `,
    options: [
        { letter: "A", text: "(A) Apenas I, II e III estão corretas.", isCorrect: true, rationale: "As três primeiras usam corretamente o Present Perfect. As IV e V estão erradas por usarem tempo definido." },
        { letter: "B", text: "(B) Apenas IV e V estão corretas.", isCorrect: false, rationale: "Essas sentenças são incorretas porque usam expressões de tempo específico (‘yesterday’, ‘last week’)." },
        { letter: "C", text: "(C) Todas as afirmações estão corretas.", isCorrect: false, rationale: "As IV e V estão incorretas gramaticalmente." },
        { letter: "D", text: "(D) Apenas as afirmações II e IV estão corretas.", isCorrect: false, rationale: "A IV está errada por usar ‘yesterday’." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica (Q22): Evite expressões de tempo específico (‘yesterday’, ‘last week’) com o Present Perfect."
    ]
},
{
    id: "q23",
    type: "mc",
    questionText: `
        Questão 23:
        <br>
        Sobre o uso do Present Perfect e Simple Past, leia as afirmações e escolha a alternativa correta:
        <br><br>
        I. O Present Perfect é usado quando o tempo exato não é importante.<br>
        II. O Simple Past é usado quando há uma referência clara de tempo no passado.<br>
        III. O Present Perfect nunca usa o verbo “have” como auxiliar.<br>
        IV. O Simple Past pode ser usado com “since” e “for”.<br>
        V. O Present Perfect pode indicar continuidade de uma ação até o presente.
    `,
    options: [
        { letter: "A", text: "(A) Apenas as afirmações I, II e V estão corretas.", isCorrect: true, rationale: "Essas afirmativas refletem corretamente a diferença entre Present Perfect e Simple Past." },
        { letter: "B", text: "(B) Apenas as afirmações I e III estão corretas.", isCorrect: false, rationale: "A III está incorreta, pois o Present Perfect sempre usa ‘have/has’." },
        { letter: "C", text: "(C) Apenas a afirmação IV está correta.", isCorrect: false, rationale: "‘Since’ e ‘for’ não são usados com o Simple Past." },
        { letter: "D", text: "(D) Todas as afirmações estão corretas.", isCorrect: false, rationale: "A III e IV estão incorretas." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica (Q23): Present Perfect = sem tempo definido; Simple Past = tempo definido."
    ]
}


];
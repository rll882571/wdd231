const questionBank = [

    // Pergunta 1
    {
        id: "q1",
        type: "mc",
        questionText: `
            Read the sentences below and choose the option that shows only correct uses of the Simple Past and Past Continuous tenses.
            <br><br>
            I. I was watching TV when the phone rang.<br>
            II. She cooked dinner when her friends were arriving.<br>
            III. They were playing soccer when it started to rain.<br>
            IV. He was reading a book when I called him.<br>
            V. We were went to the park yesterday.
        `,
        options: [
            { letter: "A", text: "(A) Only I, III and IV are correct." },
            { letter: "B", text: "(B) Only II and IV are correct." },
            { letter: "C", text: "(C) Only I, II and III are correct." },
            { letter: "D", text: "(D) Only I, II, III and IV are correct." },
            { letter: "E", text: "(E) All of them are correct." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q1): Quando o 'when' está no meio da frase, o que vem antes do 'when' o verbo é com ING e o que vem depois é Simple Past (ED).", // Corrigido: está, ING
            "Dica 2 (Q1): Depois de 'was' e 'were' o verbo precisa estar com ING.", // Corrigido: estar, ING
            "Dica 3 (Q1): 'Was' significa 'estava', é usado no singular. 'Were' também é 'estava', mas é usado no plural." // Corrigido: também, singular
        ]
    },

    // Pergunta 2 (Dicas originais mantidas)
    {
        id: "q2",
        type: "mc",
        questionText: "Which sentence uses the Past Continuous correctly?",
        options: [
            { letter: "A", text: "(A) She was cook dinner when I arrived." },
            { letter: "B", text: "(B) He was sleeping when the alarm went off." },
            { letter: "C", text: "(C) We was studying for the test last night." },
            { letter: "D", text: "(D) I were going to the gym yesterday." },
            { letter: "E", text: "(E) They was play soccer all afternoon." }
        ],
        correctAnswer: "B",
        videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0",
        hints: [ 
            "Dica 1 (Q2): Lorem ipsum dolor sit amet.",
            "Dica 2 (Q2): Consectetur adipiscing elit.",
            "Dica 3 (Q2): Sed do eiusmod tempor incididunt."
        ]
    },

    // Pergunta 3 (Dicas originais mantidas)
    {
        id: "q3_special",
        type: "fill-verb",
        questionText: "Read and choose the correct verb form (Simple Past or Past Continuous).",
        lines: [
            { text: "(A) I ... (watch) a movie when my mom called.", verbs: ["watched", "was watching"] },
            { text: "(B) They ... (play) basketball all afternoon yesterday.", verbs: ["played", "were playing"] },
            { text: "(C) She ... (sleep) when the dog barked.", verbs: ["slept", "was sleeping"] },
            { text: "(D) He ... (see) an accident on his way to work.", verbs: ["was seeing", "saw"] },
            { text: "(E) We ... (walk) to school when it started to rain.", verbs: ["walked", "were walking"] }
        ],
        correctAnswer: ["was watching", "played", "was sleeping", "saw", "were walking"],
        videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0",
        hints: [ 
            "Dica 1 (Q3): Ut labore et dolore magna aliqua.",
            "Dica 2 (Q3): Ut enim ad minim veniam.",
            "Dica 3 (Q3): Quis nostrud exercitation ullamco laboris."
        ]
    },

    // Pergunta 4
    {
        id: "q4",
        type: "mc",
        questionText: `
            About the use of the Past Continuous, it is correct to say that:
            <br><br>
            I. It is used to describe an action that was in progress at a specific moment in the past.<br>
            II. It can describe two actions happening at the same time in the past.<br>
            III. It is used for completed actions in the past with no focus on duration.<br>
            IV. It is formed with the verb “to be” (was/were) + verb + ing.<br>
            V. It is always used with time expressions like “yesterday” and “last week”.
        `,
        options: [
            { letter: "A", text: "(A) I, II and IV are correct." },
            { letter: "B", text: "(B) I, III and V are correct." },
            { letter: "C", text: "(C) II, IV and V are correct." },
            { letter: "D", text: "(D) Only IV is correct." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q4): O Past Continuous é usado para descrever ações que estavam acontecendo. Ex: I was playing (eu estava jogando).", // Corrigido: Past Continuous, acontecendo
            "Dica 2 (Q4): O Past Continuous pode ser usado para descrever duas ações que estavam acontecendo ao mesmo tempo, lembre de usar o 'while' (enquanto).", // Corrigido: Past Continuous, acontecendo
            "Dica 3 (Q4): Cuidado com a palavra 'always' (sempre), geralmente a opção não vai estar certa." // Corrigido: estar
        ]
    },

    // Pergunta 5
    {
        id: "q5",
        type: "mc",
        questionText: `
            <img src="images/rg.jpg" alt="Comic" loading="lazy" style="width: 280px; height: 180px;">
            <br><br>
            In the comic, the the drive says: “I wasnt texting while driving.”  
            What does the use of Past Continuous show?
        `,
        options: [
            { letter: "A", text: "(A) A completed action that happened before another." },
            { letter: "B", text: "(B) One action in progress interrupted by another." },
            { letter: "C", text: "(C) Two actions happening exactly at the same time in the present." },
            { letter: "D", text: "(D) A plan for the future." },
            { letter: "E", text: "(E) Two actions happening exactly at the same time in the past." }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q5): O Past Continuous não é usado para ações futuras.", // Corrigido: Past Continuous
            "Dica 2 (Q5): O Past Continuous é usado para falar sobre ações no passado e não no presente.", // Corrigido: Past Continuous
            "Dica 3 (Q5): Use o 'while' para falar que duas coisas estavam acontecendo ao mesmo tempo."
        ]
    },

    // Pergunta 6
    {
        id: "q6",
        type: "mc",
        questionText: `
            When we use the Past Continuous with “while” and “when”, what is usually true?
        `,
        options: [
            { letter: "A", text: "(A) 'While' introduces the shorter action, and 'when' the longer one." },
            { letter: "B", text: "(B) 'When' introduces the longer action, and 'while' the shorter one." },
            { letter: "C", text: "(C) 'While' usually introduces the action in progress, and 'when' introduces the action that interrupted it." },
            { letter: "D", text: "(D) Both words can be used interchangeably without changing meaning." },
            { letter: "E", text: "(E) None of the above." }
        ],
        correctAnswer: "C",
        videoUrl: "https://www.youtube.com/embed/mW4INGFLBhA",
        hints: [ 
            "Dica 1 (Q6): 'While' significa 'enquanto' e 'when' significa 'quando'.", // Corrigido: 'enquanto'
            "Dica 2 (Q6): 'When' é usado para interromper uma ação.",
            "Dica 3 (Q6): 'While' é usado quando uma ação estava em progresso."
        ]
    },

    // Pergunta 7
    {
        id: "q7",
        type: "mc",
        questionText: "Which sentence shows two simultaneous actions in the past?",
        options: [
            { letter: "A", text: "(A) I was reading while he was cooking." },
            { letter: "B", text: "(B) I read a book when he cooked dinner." },
            { letter: "C", text: "(C) I watched TV after he arrived." },
            { letter: "D", text: "(D) He was sleeping when I called him." },
            { letter: "E", text: "(E) We played soccer yesterday." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q7): Quando você quer indicar que duas ações estavam acontecendo ao mesmo tempo, use o 'while'.", // Corrigido: você
            "Dica 2 (Q7): Siga a primeira dica.",
            "Dica 3 (Q7): Sem mais dicas."
        ]
    },

    // Pergunta 8
    {
        id: "q8",
        type: "mc",
        questionText: `
            Choose the correct sentence:
        `,
        options: [
            { letter: "A", text: "(A) She was study when her mom got home." },
            { letter: "B", text: "(B) She was studying when her mom got home." },
            { letter: "C", text: "(C) She studied when her mom was getting home." },
            { letter: "D", text: "(D) She studies when her mom gets home." },
            { letter: "E", text: "(E) She has studying when her mom got home." }
        ],
        correctAnswer: "B",
        videoUrl: "https://www.youtube.com/embed/MgYPm9kjQSw",
        hints: [ 
            "Dica 1 (Q8): Depois de 'was' e 'were' o verbo tem que ter ING. Ex: I was playing (Eu estava jogando).", // Corrigido: Depois, ING, jogando
            "Dica 2 (Q8): I/he/she/it se usa com 'was'. We/they/you se usa com 'were'.", // Corrigido
            "Dica 3 (Q8): Quando o 'when' está no meio da frase, o que vem antes dele deve estar com ING no verbo e o que vem depois é o Simple Past (ed)." // Corrigido: está, ING, Simple Past
        ]
    },

    // Pergunta 9
    {
        id: "q9",
        type: "mc",
        questionText: "Which time expression is commonly used with the Simple Past?",
        options: [
            { letter: "A", text: "(A) while" },
            { letter: "B", text: "(B) yesterday" },
            { letter: "C", text: "(C) when" },
            { letter: "D", text: "(D) always" },
            { letter: "E", text: "(E) since" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q9): 'While' não se usa no Simple Past, só no Past Continuous Progressive.", // Corrigido: Simple Past, Past Continuous Progressive
            "Dica 2 (Q9): 'Always' geralmente não será usado no passado dessa forma.", // Corrigido
            "Dica 3 (Q9): 'Since' (desde) não é usado no Simple Past, mas sim no Present Perfect." // Corrigido: Simple Past
        ]
    },

    // Pergunta 10
    {
        id: "q10",
        type: "mc",
        questionText: "Choose the correct option: While I ______, my brother ______ a sandwich.",
        options: [
            { letter: "A", text: "(A) was studied / made" },
            { letter: "B", text: "(B) studied / was making" },
            { letter: "C", text: "(C) was studying / was making" },
            { letter: "D", text: "(D) was studying / made" },
            { letter: "E", text: "(E) study / makes" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q10): Quando você usa o 'while' (enquanto), use: sujeito + was/were + verbo com ING.", // Corrigido: você, ING
            "Dica 2 (Q10): 'While' é usado para informar que duas ações estavam acontecendo ao mesmo tempo.", // Corrigido: informar
            "Dica 3 (Q10): Não se usa 'while' com verbos no Simple Past." // Corrigido: Simple Past
        ]
    },
    {
        id: "q11",
        type: "mc",
        questionText: "Complete: ______ you study for the test yesterday?",
        options: [
            { letter: "A", text: "(A) Was" },
            { letter: "B", text: "(B) Were" },
            { letter: "C", text: "(C) Did" },
            { letter: "D", text: "(D) Do" },
            { letter: "E", text: "(E) Does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q11): 'Was/were' significa 'estava'. O verbo depois deles precisa de ING. Se não tiver, está errado.", // Corrigido: está, ING
            "Dica 2 (Q11): 'Do/does' são usados para perguntas no presente.",
            "Dica 3 (Q11): 'Did' é usado para perguntas no Simple Past. Ele vem antes do sujeito e não é usado com verbos com ING." // Corrigido: Simple Past, ING
        ]
    },
    {
        id: "q12",
        type: "mc",
        questionText: "Choose the correct option: Where ______ you last night?",
        options: [
            { letter: "A", text: "(A) did" },
            { letter: "B", text: "(B) were" },
            { letter: "C", text: "(C) was" },
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) are" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q12): 'Were' (estava) é usado com 'you', 'we', 'they' ou nomes no plural.",
            "Dica 2 (Q12): 'Do' é usado no presente.",
            "Dica 3 (Q12): 'Are' (está) é usado no presente." // Corrigido: está
        ]
    },
     {
        id: "q13",
        type: "mc",
        questionText: "Complete the question: What ______ she doing when you called her?",
        options: [
            { letter: "A", text: "(A) did" },
            { letter: "B", text: "(B) were" },
            { letter: "C", text: "(C) was" },
            { letter: "D", text: "(D) is" },
            { letter: "E", text: "(E) are" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q13): O 'did' é usado para perguntas que não têm ING no verbo principal.", // Corrigido: ING
            "Dica 2 (Q13): 'Is/are' significa 'é' ou 'está', e vêm no início da pergunta no presente.", // Corrigido: significa, está
            "Dica 3 (Q13): O 'were' ou 'was' vem antes do sujeito quando é uma pergunta no Past Continuous Progressive." // Corrigido: Past Continuous Progressive
        ]
    },
     {
        id: "q14",
        type: "mc",
        questionText: "Choose the correct sentence:",
        options: [
            { letter: "A", text: "(A) Did you was at home yesterday?" },
            { letter: "B", text: "(B) Were you at home yesterday?" },
            { letter: "C", text: "(C) Did you were at home yesterday?" },
            { letter: "D", text: "(D) Was you at home yesterday?" },
            { letter: "E", text: "(E) Do you were at home yesterday?" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q14): 'Did' e 'was/were' na mesma pergunta não combinam.",
            "Dica 2 (Q14): 'Do' é usado em perguntas no presente.", // Corrigido: perguntas
            "Dica 3 (Q14): Sem mais dicas."
        ]
    },
    {
        id: "q15",
        type: "mc",
        questionText: "Complete: He ______ playing soccer when he ______ his ankle.",
        options: [
            { letter: "A", text: "(A) was / hurt" },
            { letter: "B", text: "(B) did / hurts" },
            { letter: "C", text: "(C) were / hurting" },
            { letter: "D", text: "(D) was / hurts" },
            { letter: "E", text: "(E) did / hurted" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q15): O que vem antes do 'when' (quando) precisa ter ING no verbo e o que vem depois, Simple Past. Alguns verbos no Simple Past são irregulares e não têm ED.", // Corrigido: when, ING, Simple Past
            "Dica 2 (Q15): 'Did' e 'was/were' não combinam juntos.", // Corrigido: combinam
            "Dica 3 (Q15): 'Hurted' não existe. O passado é 'hurt'."
        ]
    },
    {
        id: "q16",
        type: "mc",
        questionText: "Choose the correct question for the answer: 'Yes, I went to the party.'",
        options: [
            { letter: "A", text: "(A) Were you go to the party?" },
            { letter: "B", text: "(B) Did you go to the party?" },
            { letter: "C", text: "(C) Was you going to the party?" },
            { letter: "D", text: "(D) Did you went to the party?" },
            { letter: "E", text: "(E) Were you gone to the party?" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q16): Você precisa usar o mesmo padrão na resposta e na pergunta. Se a resposta não tem ING no verbo, então na pergunta não vai ter.", // Corrigido: Você, ING
            "Dica 2 (Q16): Quando usar o 'did', o verbo principal fica normal (no infinitivo, sem 'to').", // Corrigido
            "Dica 3 (Q16): Go (ir), Went (fui/foi)."
        ]
    },
    {
        id: "q17",
        type: "mc",
        questionText: "Complete: What ______ you doing at 9 p.m. yesterday?",
        options: [
            { letter: "A", text: "(A) did" },
            { letter: "B", text: "(B) were" },
            { letter: "C", text: "(C) was" },
            { letter: "D", text: "(D) are" },
            { letter: "E", text: "(E) did were" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q17): Verbos com ING precisam do 'was' ou 'were'.", // Corrigido: ING
            "Dica 2 (Q17): Não esqueça! Se for I/he/she/it ou um nome singular (Maria, Roberto), usar o 'was'.",
            "Dica 3 (Q17): Não esqueça! Se for you/we/they ou um nome plural (Maria and João, children), usar o 'were'." // Corrigido: children
        ]
    },
    {
        id: "q18",
        type: "mc",
        questionText: "Choose the correct question: ______ you watch the movie last weekend?",
        options: [
            { letter: "A", text: "(A) Were" },
            { letter: "B", text: "(B) Did" },
            { letter: "C", text: "(C) Was" },
            { letter: "D", text: "(D) Do" },
            { letter: "E", text: "(E) Does" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q18): Se não tiver ING no verbo, não use 'was' nem 'were'.", // Corrigido: ING
            "Dica 2 (Q18): 'Do/does' é para o presente.",
            "Dica 3 (Q18): Use 'was' quando o sujeito for I/he/she/it ou um nome singular."
        ]
    },
    {
        id: "q19",
        type: "mc",
        questionText: "Complete: We ______ having dinner when the lights ______ out.",
        options: [
            { letter: "A", text: "(A) did / go" },
            { letter: "B", text: "(B) were / went" },
            { letter: "C", text: "(C) was / gone" },
            { letter: "D", text: "(D) were / go" },
            { letter: "E", text: "(E) did / goes" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q19): 'Did' e verbo com ING não combinam.", // Corrigido: ING
            "Dica 2 (Q19): Use 'were' quando o sujeito for 'you', 'we', 'they' ou no plural.",
            "Dica 3 (Q19): O passado de 'go' é 'went'."
        ]
    },
    {
        id: "q20",
        type: "mc",
        questionText: "Choose the correct option: ______ you sleeping when I called?",
        options: [
            { letter: "A", text: "(A) Was" },
            { letter: "B", text: "(B) Were" },
            { letter: "C", text: "(C) Did" },
            { letter: "D", text: "(D) Do" },
            { letter: "E", text: "(E) Does" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q20): 'Did' e verbo com ING não combinam.", // Corrigido: ING
            "Dica 2 (Q20): 'Does/do' são para o presente.",
            "Dica 3 (Q20): 'Was' é usado com I/he/she/it ou nome singular, tipo 'cachorro' (the dog was)."
        ]
    },
    // Pergunta 21 (ID duplicado corrigido)
    {
        id: "q21", 
        type: "mc",
        questionText: `
            <img src="images/rg.jpg" alt="Comic" loading="lazy" style="width: 280px; height: 180px;">
            <br><br>
            In the comic, what is the main tense used in the driver's statement: “I wasnt texting while driving.”  
            
        `,
        options: [
            { letter: "A", text: "(A) Simple past." },
            { letter: "B", text: "(B) Present perfect." },
            { letter: "C", text: "(C) Future." },
            { letter: "D", text: "(D) To be continous in the past." }, // (D) Past Continuous
            { letter: "E", text: "(E) To be in the present." } // (E) Present Continuous
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1 (Q21): Não estamos estudando o futuro.",
            "Dica 2 (Q21): Não estamos estudando o presente.",
            "Dica 3 (Q21): O Simple Past não tem ING." // Corrigido: Simple Past, ING
        ]
    },
    
];
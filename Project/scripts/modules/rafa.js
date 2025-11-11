const questionBank = [

    // ### TÓPICO 1: MODALS FOR PREDICTIONS ###

    // Pergunta 1: Identificar certeza (Will)
    {
        id: "q1",
        type: "mc",
        questionText: "Which modal verb do we use for predictions we feel **certain** about?",
        options: [
            { letter: "A", text: "(A) May" },
            { letter: "B", text: "(B) Might" },
            { letter: "C", text: "(C) Will" },
            { letter: "D", text: "(D) Should" }
        ],
        correctAnswer: "C",
        videoUrl: "" 
    },

    // Pergunta 2: Identificar possibilidade (May/Might)
    {
        id: "q2",
        type: "mc",
        questionText: "Which modal verbs do we use for predictions that are **possible**, but we are **not sure**?",
        options: [
            { letter: "A", text: "(A) Will and Won't" },
            { letter: "B", text: "(B) May and Might" },
            { letter: "C", text: "(C) Will and May" },
            { letter: "D", text: "(D) Won't and Might" }
        ],
        correctAnswer: "B",
        videoUrl: "" 
    },

    // Pergunta 3: Contexto (Certeza - Won't)
    {
        id: "q3",
        type: "mc",
        questionText: "Complete: He didn't study at all. I am sure he ______ pass the exam.",
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) may" },
            { letter: "C", text: "(C) might" },
            { letter: "D", text: "(D) won't" }
        ],
        correctAnswer: "D",
        videoUrl: ""
    },

    // Pergunta 4: Contexto (Possibilidade - May)
    {
        id: "q4",
        type: "mc",
        questionText: "Complete: 'Are you going to the party?' / 'I'm not sure. I ______ go, it depends on the weather.'",
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) won't" },
            { letter: "C", text: "(C) may" },
            { letter: "D", text: "(D) am" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 5: Contexto (Evidência forte - Will)
    {
        id: "q5",
        type: "mc",
        questionText: "Complete: Look at those dark clouds! It ______ rain very soon.",
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) might" },
            { letter: "C", text: "(C) may" },
            { letter: "D", text: "(D) is" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 6: Diferença (Will vs Might)
    {
        id: "q6",
        type: "mc",
        questionText: `
            What is the difference between these two sentences?
            <br><br>
            (1) "She **will** be here at 8:00."
            <br>
            (2) "She **might** be here at 8:00."
        `,
        options: [
            { letter: "A", text: "(A) (1) is a possibility, (2) is a certainty." },
            { letter: "B", text: "(B) (1) is a certainty, (2) is a possibility." },
            { letter: "C", text: "(C) Both mean the same thing (certainty)." },
            { letter: "D", text: "(D) Both mean the same thing (possibility)." }
        ],
        correctAnswer: "B",
        videoUrl: "" 
    },

    // Pergunta 7: Contexto (Possibilidade - Might)
    {
        id: "q7",
        type: "mc",
        questionText: "Complete: In 50 years, people ______ live on Mars, but scientists are not sure if it's possible.",
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) won't" },
            { letter: "C", text: "(C) might" },
            { letter: "D", text: "(D) are" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 8: Análise de regras
    {
    id: "q8",
    type: "mc",
    questionText: `
        Analyze the statements about modal predictions:
        <br><br>
        I. "Won't" is used for a certain negative prediction.<br>
        II. "May" and "Might" are used for possible predictions.<br>
        III. "Will" is used for possible predictions.<br>
        IV. We use "May" when we are 100% sure.
    `,
    options: [
        { letter: "A", text: "(A) Only I and II are correct." },
        { letter: "B", text: "(B) Only III and IV are correct." },
        { letter: "C", text: "(C) Only I and III are correct." },
        { letter: "D", text: "(D) Only II and IV are correct." }
    ],
    correctAnswer: "A",
    videoUrl: ""
},

    // Pergunta 9 (Tipo "fill-verb")
    {
        id: "q9_special",
        type: "fill-verb", 
        questionText: "Choose the best modal verb based on the certainty level.",
        lines: [
            { text: "(A) (100% Sure) The meeting ... start at 9am.", verbs: ["will", "may"] },
            { text: "(B) (50% Sure) I ... go to the cinema tonight, I haven't decided.", verbs: ["might", "won't"] },
            { text: "(C) (100% Sure / Negative) If we leave now, we ... be late.", verbs: ["won't", "may"] },
            { text: "(D) (50% Sure) Take an umbrella. It ... rain later.", verbs: ["might", "will"] }
        ],
        correctAnswer: ["will", "might", "won't", "might"],
        videoUrl: "" 
    },

    // Pergunta 10: Contexto (Won't)
    {
        id: "q10",
        type: "mc",
        questionText: "Complete: Don't worry, the dog is friendly. It ______ bite you.",
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) may" },
            { letter: "C", text: "(C) won't" },
            { letter: "D", text: "(D) might" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // ### TÓPICO 2: FIRST CONDITIONAL ###

    // Pergunta 11: Identificar o uso
    {
        id: "q11", 
        type: "mc",
        questionText: "When do we use the First Conditional?",
        options: [
            { letter: "A", text: "(A) To talk about impossible situations in the present." },
            { letter: "B", text: "(B) To talk about general truths and habits." },
            { letter: "C", text: "(C) To talk about the result of a possible situation in the present or future." },
            { letter: "D", text: "(D) To talk about a finished action in the past." }
        ],
        correctAnswer: "C",
        videoUrl: "" 
    },

    // Pergunta 12: Identificar a estrutura (Cláusula IF)
    {
        id: "q12", 
        type: "mc",
        questionText: "In the First Conditional, what tense do we use in the 'if' clause (the condition)?",
        options: [
            { letter: "A", text: "(A) Simple Present" },
            { letter: "B", text: "(B) Simple Future (will)" },
            { letter: "C", text: "(C) Simple Past" },
            { letter: "D", text: "(D) Present Perfect" }
        ],
        correctAnswer: "A",
        videoUrl: "" 
    },

    // Pergunta 13: Identificar a estrutura (Cláusula de Resultado)
    {
        id: "q13", 
        type: "mc",
        questionText: "In the First Conditional, what form do we use in the main clause (the result)?",
        options: [
            { letter: "A", text: "(A) Simple Present" },
            { letter: "B", text: "(B) will / won't + base verb" },
            { letter: "C", text: "(C) would / wouldn't + base verb" },
            { letter: "D", text: "(D) Simple Past" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 14: Completar (Resultado)
    {
        id: "q14", 
        type: "mc",
        questionText: "Complete the sentence: If it rains tomorrow, we ______ the picnic.",
        options: [
            { letter: "A", text: "(A) cancel" },
            { letter: "B", text: "(B) canceled" },
            { letter: "C", text: "(C) will cancel" },
            { letter: "D", text: "(D) would cancel" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 15: Completar (Condição)
    {
        id: "q15", 
        type: "mc",
        questionText: "Complete the sentence: You will miss the bus if you ______ hurry.",
        options: [
            { letter: "A", text: "(A) don't" },
            { letter: "B", text: "(B) won't" },
            { letter: "C", text: "(C) didn't" },
            { letter: "D", text: "(D) wouldn't" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 16: Completar (Negativo 'won't')
    {
        id: "q16", 
        type: "mc",
        questionText: "Complete the sentence: If he doesn't study, he ______ pass the exam.",
        options: [
            { letter: "A", text: "(A) doesn't" },
            { letter: "B", text: "(B) won't" },
            { letter: "C", text: "(C) didn't" },
            { letter: "D", text: "(D) will" }
        ],
        correctAnswer: "B",
        videoUrl: "" 
    },

    // Pergunta 17: Completar (Ordem invertida) - CORRIGIDA
    {
        id: "q17", 
        type: "mc",
        questionText: "Complete the sentence: I'll earn lots of money if I ______ a good job.",
        options: [
            { letter: "A", text: "(A) get" },
            { letter: "B", text: "(B) will get" },
            { letter: "C", text: "(C) got" }, // <-- CORRIGIDO AQUI
            { letter: "D", text: "(D) am getting" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 18: Análise de regras
    {
    id: "q18", 
    type: "mc",
    questionText: `
        Analyze the statements about the First Conditional:
        <br><br>
        I. The 'if' clause uses the simple present tense.<br>
        II. The main clause (result) uses 'will' or 'won't'.<br>
        III. The 'if' clause can come before or after the main clause.<br>
        IV. We use it to talk about situations that are impossible.
    `,
    options: [
        { letter: "A", text: "(A) Only I and II are correct." },
        { letter: "B", text: "(B) Only III and IV are correct." },
        { letter: "C", text: "(C) Only I, II, and III are correct." },
        { letter: "D", text: "(D) All are correct." }
    ],
    correctAnswer: "C",
    videoUrl: ""
},

    // Pergunta 19 (Tipo "fill-verb")
    {
        id: "q19_special", 
        type: "fill-verb", 
        questionText: "Choose the correct verb form for each clause.",
        lines: [
            { text: "(A) If she (work) hard, she (get) the promotion.", verbs: ["works / will get", "will work / gets"] },
            { text: "(B) We (not go) to the beach if it (rain).", verbs: ["don't go / will rain", "won't go / rains"] },
            { text: "(C) What (you / do) if you (miss) the bus?", verbs: ["will you do / miss", "do you do / will miss"] }
        ],
        correctAnswer: ["works / will get", "won't go / rains", "will you do / miss"],
        videoUrl: "" 
    },

    // Pergunta 20: Escolher a frase correta
    {
        id: "q20", 
        type: "mc",
        questionText: "Which sentence is grammatically correct?",
        options: [
            { letter: "A", text: "(A) If you will call me, I will pick you up." },
            { letter: "B", text: "(B) If you call me, I will pick you up." },
            { letter: "C", text: "(C) If you call me, I pick you up." },
            { letter: "D", text: "(D) If you would call me, I will pick you up." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    }
    
];
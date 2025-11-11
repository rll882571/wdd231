const questionBank = [

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
    }
    
];
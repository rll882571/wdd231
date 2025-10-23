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
        videoUrl: ""
    },

    // Pergunta 2
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
        videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0"
    },

    // Pergunta 3 (especial — escolha de verbos)
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
        videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0"
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
        videoUrl: ""
    },

    // Pergunta 5
    {
        id: "q5",
        type: "mc",
        questionText: `
            <img src="images/question.png" alt="Comic" loading="lazy">
            <br><br>
            In the comic, the boy says: “I was walking to school when I saw a cat.”  
            What does the use of Past Continuous + Simple Past show?
        `,
        options: [
            { letter: "A", text: "(A) A completed action that happened before another." },
            { letter: "B", text: "(B) One action in progress interrupted by another." },
            { letter: "C", text: "(C) Two actions happening exactly at the same time in the present." },
            { letter: "D", text: "(D) A plan for the future." },
            { letter: "E", text: "(E) A routine that happens every day." }
        ],
        correctAnswer: "B",
        videoUrl: ""
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
        videoUrl: "https://www.youtube.com/embed/mW4INGFLBhA"
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
        videoUrl: ""
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
        videoUrl: "https://www.youtube.com/embed/MgYPm9kjQSw"
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
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
        videoUrl: ""
    }
    
];

const questionBank = [

    // Pergunta 1: Definição de 'Wildfire'
    {
        id: "q1",
        type: "mc",
        questionText: "Based on the vocabulary list, what is the correct meaning of <b>'Wildfire'</b>?",
        options: [
            { letter: "A", text: "(A) To take air into your lungs and let it out again." },
            { letter: "B", text: "(B) A large fire that spreads quickly through forests or grasslands." },
            { letter: "C", text: "(C) The bright, hot part of a fire that you can see." },
            { letter: "D", text: "(D) To get away from a dangerous place or situation." },
            { letter: "E", text: "(E) A very strong storm with powerful winds that moves in a circle." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },

    
    // Pergunta 2: Definição de 'Cyclone'
    {
        id: "q2",
        type: "mc",
        questionText: "Which definition matches the word <b>'Cyclone'</b>?",
        options: [
            { letter: "A", text: "(A) Something that happens suddenly or without warning." },
            { letter: "B", text: "(B) To stop something from happening." },
            { letter: "C", text: "(C) A very strong storm with powerful winds that moves in a circle." },
            { letter: "D", text: "(D) A large fire that spreads quickly through forests." },
            { letter: "E", text: "(E) The bright, hot part of a fire." }
        ],
        correctAnswer: "C", 
        videoUrl: "" 
    },

    // Pergunta 3: Definição de 'Breathe'
    {
        id: "q3",
        type: "mc", 
        questionText: "What is the meaning of the verb <b>'Breathe'</b>?",
        options: [
            { letter: "A", text: "(A) To get away from a dangerous place." },
            { letter: "B", text: "(B) To focus on something carefully." },
            { letter: "C", text: "(C) To say what you think will happen in the future." },
            { letter: "D", text: "(D) To take air into your lungs and let it out again." },
            { letter: "E", text: "(E) To stop something from happening." }
        ],
        correctAnswer: "D", 
        videoUrl: "" 
    },

    // Pergunta 4: Definição de 'To predict'
    {
        id: "q4",
        type: "mc",
        questionText: "The action <b>'To predict'</b> means:",
        options: [
            { letter: "A", text: "(A) To focus on something carefully or notice it." },
            { letter: "B", text: "(B) To get away from a dangerous situation." },
            { letter: "C", text: "(C) To stop something from happening." },
            { letter: "D", text: "(D) To say what you think will happen in the future." },
            { letter: "E", text: "(E) To happen suddenly without warning." }
        ],
        correctAnswer: "D", 
        videoUrl: ""
    },

    // Pergunta 5: Definição de 'Flames'
    {
        id: "q5",
        type: "mc",
        questionText: "What are <b>'Flames'</b>?",
        options: [
            { letter: "A", text: "(A) A large fire in a forest." },
            { letter: "B", text: "(B) A strong storm with winds in a circle." },
            { letter: "C", text: "(C) The bright, hot part of a fire that you can see." },
            { letter: "D", text: "(D) People who survive a disaster." },
            { letter: "E", text: "(E) A sudden shaking of the ground." }
        ],
        correctAnswer: "C", 
        videoUrl: "" 
    },

    // Pergunta 6: Definição de 'To prevent'
    {
        id: "q6",
        type: "mc",
        questionText: "What does the verb <b>'To prevent'</b> mean?",
        options: [
            { letter: "A", text: "(A) To tell everyone what will happen." },
            { letter: "B", text: "(B) To stop something from happening." },
            { letter: "C", text: "(C) To look at something carefully." },
            { letter: "D", text: "(D) To get away from danger." },
            { letter: "E", text: "(E) To destroy many buildings." }
        ],
        correctAnswer: "B", 
        videoUrl: "" 
    },

    // Pergunta 7: Definição de 'To pay attention to'
    {
        id: "q7",
        type: "mc",
        questionText: "If you <b>'To pay attention to'</b> something, you...",
        options: [
            { letter: "A", text: "(A) ...stop it from happening." },
            { letter: "B", text: "(B) ...say it will happen in the future." },
            { letter: "C", text: "(C) ...focus on it carefully or notice it." },
            { letter: "D", text: "(D) ...get away from it quickly." },
            { letter: "E", text: "(E) ...survive it." }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },

    // Pergunta 8: Definição de 'Escape'
    {
        id: "q8",
        type: "mc",
        questionText: "What is the meaning of <b>'Escape'</b>?",
        options: [
            { letter: "A", text: "(A) To take air into your lungs." },
            { letter: "B", text: "(B) To do something with attention and caution." },
            { letter: "C", text: "(C) To be destroyed by a disaster." },
            { letter: "D", text: "(D) To get away from a dangerous place or situation." },
            { letter: "E", text: "(E) The bright, hot part of a fire." }
        ],
        correctAnswer: "D", 
        videoUrl: ""
    },

    // Pergunta 9: Definição de 'Unexpected'
    {
        id: "q9", 
        type: "mc",
        questionText: "Which definition matches the word <b>'Unexpected'</b>?",
        options: [
            { letter: "A", text: "(A) Something that happens suddenly or without warning." },
            { letter: "B", text: "(B) Something that is very strong and powerful." },
            { letter: "C", text: "(C) Something that destroys many buildings." },
            { letter: "D", text: "(D) Something that you do with caution." },
            { letter: "E", text: "(E) Something that you can predict." }
        ],
        correctAnswer: "A", 
        videoUrl: "" 
    },

    // Pergunta 10: Definição de 'Carefully'
    {
        id: "q10",
        type: "mc",
        questionText: "If you do something <b>'Carefully'</b>, you do it...",
        options: [
            { letter: "A", text: "(A) ...suddenly and without warning." },
            { letter: "B", text: "(B) ...in a way that moves in a circle." },
            { letter: "C", text: "(C) ...in a way that spreads quickly." },
            { letter: "D", text: "(D) ...in a way that shows attention and caution." },
            { letter: "E", text: "(E) ...in a way that destroys buildings." }
        ],
        correctAnswer: "D", 
        videoUrl: ""
    },
    
    // Pergunta 11: Fill-in-the-blank (Earthquake)
    {
        id: "q11",
        type: "mc",
        questionText: "Complete the sentence: The ---------- happened early in the morning, when most people were still asleep.",
        options: [
            { letter: "A", text: "(A) Cyclone" },
            { letter: "B", text: "(B) Wildfire" },
            { letter: "C", text: "(C) Earthquake" },
            { letter: "D", text: "(D) Collapse" },
            { letter: "E", text: "(E) Survivors" }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },

    // Pergunta 12: Fill-in-the-blank (Terrible)
    {
        id: "q12",
        type: "mc",
        questionText: "Complete the sentence: It was a <b>'...'</b> disaster that destroyed many buildings.",
        options: [
            { letter: "A", text: "(A) shaking" },
            { letter: "B", text: "(B) unexpected" },
            { letter: "C", text: "(C) terrible" },
            { letter: "D", text: "(D) carefully" },
            { letter: "E", text: "(E) breathing" }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },

    // Pergunta 13: Fill-in-the-blank (Shaking)
    {
        id: "q13",
        type: "mc",
        questionText: "Complete the sentence: The ground started <b>'...'</b> violently, and people ran outside in fear.",
        options: [
            { letter: "A", text: "(A) collapsing" },
            { letter: "B", text: "(B) striking" },
            { letter: "C", text: "(C) warning" },
            { letter: "D", text: "(D) shaking" },
            { letter: "E", text: "(E) escaping" }
        ],
        correctAnswer: "D", 
        videoUrl: ""
    },

    // Pergunta 14: Fill-in-the-blank (Collapse)
    {
        id: "q14",
        type: "mc",
        questionText: "Complete the sentence: Some houses began to <b>'...'</b> because they were not strong enough.",
        options: [
            { letter: "A", text: "(A) collapse" },
            { letter: "B", text: "(B) predict" },
            { letter: "C", text: "(C) breathe" },
            { letter: "D", text: "(D) escape" },
            { letter: "E", text: "(E) strike" }
        ],
        correctAnswer: "A", 
        videoUrl: ""
    },

    // Pergunta 15: Fill-in-the-blank (Warnings)
    {
        id: "q15",
        type: "mc",
        questionText: "Complete the sentence: The government sent <b>'...'</b> on TV and radio to alert everyone.",
        options: [
            { letter: "A", text: "(A) survivors" },
            { letter: "B", text: "(B) flames" },
            { letter: "C", text: "(C) warnings" },
            { letter: "D", text: "(D) cyclones" },
            { letter: "E", text: "(E) earthquakes" }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },

    // Pergunta 16: Fill-in-the-blank (Struck)
    {
        id: "q16",
        type: "mc",
        questionText: "Complete the sentence: The city was <b>'...'</b> by a powerful natural disaster last night.",
        options: [
            { letter: "A", text: "(A) struck" },
            { letter: "B", text: "(B) prevented" },
            { letter: "C", text: "(C) breathed" },
            { letter: "D", text: "(D) collapsed" },
            { letter: "E", text: "(E) paid attention to" }
        ],
        correctAnswer: "A", 
        videoUrl: ""
    },

    // Pergunta 17: Fill-in-the-blank (Unexpected)
    {
        id: "q17",
        type: "mc",
        questionText: "Complete the sentence: Many people said the event was completely <b>'...'</b> – no one saw it coming.",
        options: [
            { letter: "A", text: "(A) terrible" },
            { letter: "B", text: "(B) carefully" },
            { letter: "C", text: "(C) unexpected" },
            { letter: "D", text: "(D) shaking" },
            { letter: "E", text: "(E) predicted" }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },

    // Pergunta 18: Fill-in-the-blank (Survivors)
    {
        id: "q18",
        type: "mc",
        questionText: "Complete the sentence: The <b>'...'</b> were rescued by emergency teams hours after the disaster.",
        options: [
            { letter: "A", text: "(A) flames" },
            { letter: "B", text: "(B) survivors" },
            { letter: "C", text: "(C) warnings" },
            { letter: "D", text: "(D) cyclones" },
            { letter: "E", text: "(E) earthquakes" }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },

    // Pergunta 19: Criativa (Conceitual - Causa e Efeito)
    {
        id: "q19",
        type: "mc",
        questionText: "Which two actions are opposites? (Qual ação é o oposto da outra?)",
        options: [
            { letter: "A", text: "(A) To predict vs. To warn" },
            { letter: "B", text: "(B) To escape vs. To survive" },
            { letter: "C", text: "(C) To collapse vs. To shake" },
            { letter: "D", text: "(D) To prevent (impedir) vs. To strike (atacar/atingir)" },
            { letter: "E", text: "(E) To breathe vs. To pay attention" }
        ],
        correctAnswer: "D", // Prevenir é tentar parar algo, 'strike' é o evento acontecendo.
        videoUrl: ""
    },

    // Pergunta 20: Criativa (Conceitual - Relação)
    {
        id: "q20",
        type: "mc",
        questionText: "If a meteorologist helps <b>'predict'</b> a cyclone, the government can issue <b>'warnings'</b> to help people <b>'escape'</b> and <b>'prevent'</b> a...",
        options: [
            { letter: "A", text: "(A) ...terrible disaster." },
            { letter: "B", text: "(B) ...shaking ground." },
            { letter: "C", text: "(C) ...wildfire." },
            { letter: "D", text: "(D) ...collapse." },
            { letter: "E", text: "(E) ...flame." }
        ],
        correctAnswer: "A", // O objetivo de tudo isso é prevenir um 'desastre terrível'.
        videoUrl: ""
    },
    
    // Pergunta 21: Criativa (Identificação de Categoria)
    {
        id: "q21",
        type: "mc",
        questionText: "Which word from the list is an <b>Adjective</b> used to describe a very bad event?",
        options: [
            { letter: "A", text: "(A) Survivors" },
            { letter: "B", text: "(B) Collapse" },
            { letter: "C", text: "(C) Terrible" },
            { letter: "D", text: "(D) Earthquake" },
            { letter: "E", text: "(E) Carefully" } // Carefully é advérbio
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },

    // Pergunta 22: Criativa (Relação entre palavras)
    {
        id: "q22",
        type: "mc",
        questionText: "<b>'Wildfire'</b>, <b>'Cyclone'</b>, and <b>'Earthquake'</b> are all examples of:",
        options: [
            { letter: "A", text: "(A) Ways to breathe." },
            { letter: "B", text: "(B) People who were rescued." },
            { letter: "C", text: "(C) Things that are unexpected." }, // Podem ser, mas não é a definição principal
            { letter: "D", text: "(D) Natural Disasters." },
            { letter: "E", text: "(E) Actions you take to escape." }
        ],
        correctAnswer: "D", 
        videoUrl: ""
    }
    
];
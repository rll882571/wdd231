const questionBank = [

    // Pergunta 1
    {
        id: "q1",
        type: "mc",
        questionText: `
            Read the sentences and choose the option that uses the <b>Present Perfect</b> correctly.
            <br><br>
            I. I have finished my homework.<br>
            II. She has been to Paris twice.<br>
            III. They have saw that movie many times.<br>
            IV. He have just arrived home.
        `,
        options: [
            { letter: "A", text: "(A) Only I and II are correct." },
            { letter: "B", text: "(B) Only II and III are correct." },
            { letter: "C", text: "(C) Only I, II and IV are correct." },
            { letter: "D", text: "(D) Only III and IV are correct." },
            { letter: "E", text: "(E) All sentences are correct." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 2
    {
        id: "q2",
        type: "mc",
        questionText: "Which sentence shows the correct use of the <b>Present Perfect Continuous</b>?",
        options: [
            { letter: "A", text: "(A) She has studying English for three years." },
            { letter: "B", text: "(B) He have been work all day." },
            { letter: "C", text: "(C) They has been waiting for you since 2 p.m." },
            { letter: "D", text: "(D) I have been learning Spanish lately." },
            { letter: "E", text: "(E) We been watching that series all week." }
        ],
        correctAnswer: "D",
        videoUrl: "https://www.youtube.com/embed/yB7r7VFpN1Y"
    },

    // Pergunta 3 — fill-verb
    {
        id: "q3_special",
        type: "fill-verb",
        questionText: "Complete each sentence using the correct form of the verb (Present Perfect or Present Perfect Continuous).",
        lines: [
            { text: "(A) She ... (study) French for two years.", verbs: ["has studied", "has been studying"] },
            { text: "(B) I ... (finish) my project already.", verbs: ["have finished", "have been finishing"] },
            { text: "(C) They ... (wait) for the bus since 8 o’clock.", verbs: ["have waited", "have been waiting"] },
            { text: "(D) He ... (read) that book three times.", verbs: ["has read", "has been reading"] },
            { text: "(E) We ... (work) here since 2019.", verbs: ["have worked", "have been working"] }
        ],
        correctAnswer: ["has been studying", "have finished", "have been waiting", "has read", "have worked"],
        videoUrl: "https://www.youtube.com/embed/yB7r7VFpN1Y"
    },

    // Pergunta 4
    {
        id: "q4",
        type: "mc",
        questionText: `
            Choose the correct explanation about the difference between Present Perfect and Present Perfect Continuous:
        `,
        options: [
            { letter: "A", text: "(A) Both are used only for actions that happened in the past and are finished." },
            { letter: "B", text: "(B) The Present Perfect focuses on the result; the Continuous focuses on the duration." },
            { letter: "C", text: "(C) The Continuous is used only with 'since' and the Perfect only with 'for'." },
            { letter: "D", text: "(D) There is no difference between them." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 5 (COM IMAGEM)
    {
        id: "q5",
        type: "mc",
        questionText: `
            <img src="images/question.png" alt="Comic" loading="lazy">
            <br><br>
            Choose the sentence that emphasizes the <b>duration</b> of an unfinished action.
        `,
        options: [
            { letter: "A", text: "(A) I have written three emails today." },
            { letter: "B", text: "(B) I have been writing emails all morning." },
            { letter: "C", text: "(C) I wrote three emails yesterday." },
            { letter: "D", text: "(D) I have finished writing the emails." },
            { letter: "E", text: "(E) I have to write emails now." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 6 (COM IMAGEM)
    {
        id: "q6",
        type: "mc",
        questionText: `
            <img src="images/question.png" alt="Diagram" loading="lazy">
            <br><br>
            Which sentence is correct about the use of <b>since</b> and <b>for</b>?
        `,
        options: [
            { letter: "A", text: "(A) We use 'for' with specific dates and 'since' with periods of time." },
            { letter: "B", text: "(B) We use 'since' with starting points and 'for' with durations." },
            { letter: "C", text: "(C) Both words have the same meaning and use." },
            { letter: "D", text: "(D) 'Since' is used only in negative sentences." },
            { letter: "E", text: "(E) 'For' is used only with the Present Perfect Continuous." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 7
    {
        id: "q7",
        type: "mc",
        questionText: "Choose the sentence that shows a finished result of an action:",
        options: [
            { letter: "A", text: "(A) She has painted the room." },
            { letter: "B", text: "(B) She has been painting the room for hours." },
            { letter: "C", text: "(C) She paints the room every week." },
            { letter: "D", text: "(D) She is painting the room now." },
            { letter: "E", text: "(E) She will paint the room tomorrow." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 8
    {
        id: "q8",
        type: "mc",
        questionText: `
            Complete the sentence: It ______ all morning, and the streets are still wet.
        `,
        options: [
            { letter: "A", text: "(A) has rained" },
            { letter: "B", text: "(B) has been raining" },
            { letter: "C", text: "(C) rains" },
            { letter: "D", text: "(D) was raining" },
            { letter: "E", text: "(E) is raining" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 9
    {
        id: "q9",
        type: "mc",
        questionText: `
            Which sentence is <b>incorrect</b>?
        `,
        options: [
            { letter: "A", text: "(A) They have been studying since morning." },
            { letter: "B", text: "(B) She has lived here for ten years." },
            { letter: "C", text: "(C) I have been knowing her for a long time." },
            { letter: "D", text: "(D) We have worked together for years." },
            { letter: "E", text: "(E) He has been playing the guitar all day." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 10
    {
        id: "q10",
        type: "mc",
        questionText: `
            Choose the correct option: I ______ my car, that’s why my hands are dirty.
        `,
        options: [
            { letter: "A", text: "(A) have washed" },
            { letter: "B", text: "(B) have been washing" },
            { letter: "C", text: "(C) wash" },
            { letter: "D", text: "(D) washed" },
            { letter: "E", text: "(E) am washing" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 11
    {
        id: "q11",
        type: "mc",
        questionText: "Which sentence focuses on how long an action has continued?",
        options: [
            { letter: "A", text: "(A) I have cleaned my room." },
            { letter: "B", text: "(B) I have been cleaning my room for two hours." },
            { letter: "C", text: "(C) I cleaned my room yesterday." },
            { letter: "D", text: "(D) I am cleaning my room." },
            { letter: "E", text: "(E) I will clean my room later." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 12
    {
        id: "q12",
        type: "mc",
        questionText: `
            Which of these actions is probably <b>still happening</b>?
        `,
        options: [
            { letter: "A", text: "(A) She has written five letters today." },
            { letter: "B", text: "(B) She has been writing letters all morning." },
            { letter: "C", text: "(C) She wrote letters yesterday." },
            { letter: "D", text: "(D) She was writing letters yesterday morning." },
            { letter: "E", text: "(E) She writes letters every Monday." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 13
    {
        id: "q13",
        type: "mc",
        questionText: `
            Complete: He ______ in London since 2015.
        `,
        options: [
            { letter: "A", text: "(A) has lived" },
            { letter: "B", text: "(B) has been living" },
            { letter: "C", text: "(C) lived" },
            { letter: "D", text: "(D) was living" },
            { letter: "E", text: "(E) lives" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 14
    {
        id: "q14",
        type: "mc",
        questionText: `
            Choose the correct sentence:
        `,
        options: [
            { letter: "A", text: "(A) We have been known each other for years." },
            { letter: "B", text: "(B) We have known each other for years." },
            { letter: "C", text: "(C) We are known each other for years." },
            { letter: "D", text: "(D) We were knowing each other for years." },
            { letter: "E", text: "(E) We knows each other for years." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 15
    {
        id: "q15",
        type: "mc",
        questionText: `
            Choose the option that expresses <b>an unfinished action with focus on duration</b>:
        `,
        options: [
            { letter: "A", text: "(A) I have read five books this month." },
            { letter: "B", text: "(B) I have been reading a very long book." },
            { letter: "C", text: "(C) I read that book last week." },
            { letter: "D", text: "(D) I have finished that book." },
            { letter: "E", text: "(E) I will read that book soon." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 16
    {
        id: "q16",
        type: "mc",
        questionText: `
            Which of these shows a <b>temporary situation</b>?
        `,
        options: [
            { letter: "A", text: "(A) I have worked here since 2010." },
            { letter: "B", text: "(B) I have been working here for a few months." },
            { letter: "C", text: "(C) I work here every day." },
            { letter: "D", text: "(D) I worked here last year." },
            { letter: "E", text: "(E) I am going to work here soon." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 17
    {
        id: "q17",
        type: "mc",
        questionText: `
            Choose the correct completion: She ______ tired because she ______ all day.
        `,
        options: [
            { letter: "A", text: "(A) is / has worked" },
            { letter: "B", text: "(B) is / has been working" },
            { letter: "C", text: "(C) was / worked" },
            { letter: "D", text: "(D) has been / is working" },
            { letter: "E", text: "(E) will be / has worked" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 18
    {
        id: "q18",
        type: "mc",
        questionText: `
            Complete: How long ______ you ______ English?
        `,
        options: [
            { letter: "A", text: "(A) have / studied" },
            { letter: "B", text: "(B) have / been studying" },
            { letter: "C", text: "(C) did / study" },
            { letter: "D", text: "(D) were / studying" },
            { letter: "E", text: "(E) are / studying" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 19
    {
        id: "q19",
        type: "mc",
        questionText: `
            Choose the sentence that describes an <b>action that started in the past and continues now</b>:
        `,
        options: [
            { letter: "A", text: "(A) I have lived here since 2010." },
            { letter: "B", text: "(B) I lived here since 2010." },
            { letter: "C", text: "(C) I was living here since 2010." },
            { letter: "D", text: "(D) I have been live here since 2010." },
            { letter: "E", text: "(E) I have been live since 2010." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 20
    {
        id: "q20",
        type: "mc",
        questionText: `
            Which sentence focuses on the result of an action rather than the activity itself?
        `,
        options: [
            { letter: "A", text: "(A) She has cleaned the kitchen." },
            { letter: "B", text: "(B) She has been cleaning the kitchen." },
            { letter: "C", text: "(C) She cleans the kitchen every day." },
            { letter: "D", text: "(D) She will clean the kitchen later." },
            { letter: "E", text: "(E) She is cleaning the kitchen right now." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    }

];

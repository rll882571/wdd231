const questionBank = [

    
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
            { letter: "D", text: "(D) Only III and IV are correct." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 2 (Original q6)
    {
        id: "q2",
        type: "mc",
        questionText: `
            Which sentence is correct about the use of <b>since</b> and <b>for</b>?
        `,
        options: [
            { letter: "A", text: "(A) We use 'for' with specific dates and 'since' with periods of time." },
            { letter: "B", text: "(B) We use 'since' with starting points and 'for' with durations." },
            { letter: "C", text: "(C) Both words have the same meaning and use." },
            { letter: "D", text: "(D) 'Since' is used only in negative sentences." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 3 (Original q7)
    {
        id: "q3",
        type: "mc",
        questionText: "__________ you __________ caviar, Helen?",
        options: [
            { letter: "A", text: "(A) Has … ate" },
            { letter: "B", text: "(B) Have … ate" },
            { letter: "C", text: "(C) Have … eaten" },
            { letter: "D", text: "(D) Has … eaten" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 4 
    {
        id: "q4",
        type: "mc",
        questionText: `
            Which sentence is <b>incorrect</b>?
        `,
        options: [
            { letter: "A", text: "(A) They have been studying since morning." },
            { letter: "B", text: "(B) She has lived here for ten years." },
            { letter: "C", text: "(C) I have been knowing her for a long time." }, // Stative verb 'know'
            { letter: "D", text: "(D) We have worked together for years." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 5 
    {
        id: "q5",
        type: "mc",
        questionText: `
            Complete: He ______ in London since 2015.
        `,
        options: [
            { letter: "A", text: "(A) has lived" },
            { letter: "B", text: "(B) has been living" },
            { letter: "C", text: "(C) lived" },
            { letter: "D", text: "(D) was living" }
        ],
        // Ambas A e B são gramaticalmente possíveis, mas 'has lived' (A)
        // é a forma simples (Present Perfect) que o gabarito original pedia.
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 6 (Original q14 - Stative Verb)
    {
        id: "q6",
        type: "mc",
        questionText: `
            (Ibmec-RJ/2011)

Global Thinking in the 21st Century

At the end of the 20th century, the world changed in important ways. Until recently nations acted independently. Each did its business and tried to solve its problems alone. But now, the economy is worldwide and communications technologies have connected people all over the globe. Many problems are global too, and can no longer be solved by individual nations.

Environmental destruction is one of these problems. As the world’s population has grown and technology has developed, the environment has suffered. Some nations have begun to try to stop the pollution and the environmental destruction. But the environment is global – the atmosphere, the oceans, and many forms of life are all connected. Thus, the solutions require global thinking.

The problem of ocean pollution is a good example. Since all the oceans of the world are connected. Pollution does not stay where it begins. It spreads out from every river and every harbor and affects bodies of water everywhere.

For centuries, people have used the oceans as a dumping place. Many cities take tons of garbage out to sea and dump it there. Five million plastic containers are thrown into the world’s oceans every day! Aside from plastics, many other dangerous substances are dumped in oceans.

Some people believe that oceans are so large that chemicals and waste will disappear. However, many things, such as chemicals and plastics, stay in the water and create problems.

Another global pollution problem concerns the atmosphere. Until recently, chlorofluorocarbons (CFCs) were used around the world in manufacturing refrigerators. Scientists discovered that these CFCs were destroying the ozone layer in the atmosphere and this layer helps protect the earth from the sun’s rays. Without this layer, most forms of life on earth – including humans – probable would not be able to live.

CFCs will soon be completely banned in the United States and in most developed countries while many other countries still use CFCs in manufacturing. Among these are some of the most populous on earth, such as India and China, which need to change their refrigerator factories to non-CPC processes. But they may not be able to make this change alone and will need help from the industrialized countries. This is what global thinking means – working together for solutions.

Some examples of the use of the present perfect were extracted from the text (…communications technologies have connected people all over the globe,… the environment has suffered, Some nations have begun to try…, … people have used the oceans as a dumping place). This verb tense was used because:
        `,
        options: [
            { letter: "A", text: "(A) the development process is happening at the time of speech" },
            { letter: "B", text: "(B) the development process is in the past" },
            { letter: "C", text: "(C) the development process is widespread" },
            { letter: "D", text: "(D) the development process is on-going." }
        ],
        correctAnswer: "D",
        videoUrl: ""
    },

    // Pergunta 7 
    {
        id: "q7",
        type: "mc",
        questionText: `
            Complete the sentence (use the present perfect):

           Where i's the book I gave you? What _____________ with it?
        `,
        options: [
            { letter: "A", text: "(A) are you doing" },
            { letter: "B", text: "(B) had you do" },
            { letter: "C", text: "(C) have you done" },
            { letter: "D", text: "(D) have you been doing" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 8 (Original q20)
    {
        id: "q8",
        type: "mc",
        questionText: `
            Food wastage

One third of all food produced (1.3 billion tons) is never consumed. This food wastage represents a missed opportunity to improve global food security in a world where one in 8 is hungry. Producing this food also uses up precious natural resources that we need to feed the planet. Each year, food that is produced but not eaten guzzles up a volume of water equivalent to the annual flow of Russia’s Volga River. Producing this food also adds 3.3 billion tons of greenhouse gases to the atmosphere, with consequences for the climate and, ultimately, for food production.

Choose the alternative that presents a possible correct interrogative form of the sentence below.

“In recent years, the price of food products has been very unstable.”
        `,
        options: [
            { letter: "A", text: "(A) Does the price of food products has been very unstable in recent years?" },
            { letter: "B", text: "(B) Is the price of food products has been very unstable in recent years?" },
            { letter: "C", text: "(C) In recent years, did the price of food products has been very unstable?" },
            { letter: "D", text: "(D) Have the price of food, in recent years, been very unstable?" },
            { letter: "E", text: "(E) In recent years, has the price of food products been very unstable?" }

        ],
        correctAnswer: "E",
        videoUrl: ""
    },

    // --- 3 Perguntas (Just/Already/Yet) ---

    // Pergunta 9 (NOVA - 'just')
    {
        id: "q9",
        type: "mc",
        questionText: `
            Complete the sentence: "I'm not hungry, thanks. I ______ lunch."
        `,
        options: [
            { letter: "A", text: "(A) have already" },
            { letter: "B", text: "(B) have yet had" },
            { letter: "C", text: "(C) have just had" },
            { letter: "D", text: "(D) didn't have yet" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 10 (NOVA - 'already')
    {
        id: "q10",
        type: "mc",
        questionText: `
            Which sentence correctly uses <b>already</b> to show something happened sooner than expected?
        `,
        options: [
            { letter: "A", text: "(A) Have you finished already? That was fast!" },
            { letter: "B", text: "(B) I haven't finished already." },
            { letter: "C", text: "(C) I have finished already the report." },
            { letter: "D", text: "(D) She has seen that movie already?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 11 (NOVA - 'yet')
    {
        id: "q11",
        type: "mc",
        questionText: `
            Complete the dialogue: <br>
            A: "Is John here?" <br>
            B: "No, he ______."
        `,
        options: [
            { letter: "A", text: "(A) hasn't arrived yet" },
            { letter: "B", text: "(B) has arrived yet" },
            { letter: "C", text: "(C) has just arrived" },
            { letter: "D", text: "(D) hasn't arrived already" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // --- 9 Novas Perguntas Adicionais (PP) ---

    // Pergunta 12 (NOVA - 'ever' for experience)
    {
        id: "q12",
        type: "mc",
        questionText: `
            Complete the question: "______ you ______ seen a ghost?"
        `,
        options: [
            { letter: "A", text: "(A) Did / ever" },
            { letter: "B", text: "(B) Have / ever" },
            { letter: "C", text: "(C) Do / ever" },
            { letter: "D", text: "(D) Are / ever" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 13 (NOVA - 'never' for experience)
    {
        id: "q13",
        type: "mc",
        questionText: `
            Which sentence means "I don't have this experience"?
        `,
        options: [
            { letter: "A", text: "(A) I have never tried sushi." },
            { letter: "B", text: "(B) I haven't tried sushi yet." },
            { letter: "C", text: "(C) I didn't try sushi." },
            { letter: "D", text: "(D) I already tried sushi." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 14 (NOVA - 'gone' vs 'been')
    {
        id: "q14",
        type: "mc",
        questionText: `
            A: "Where is Maria?" <br>
            B: "She ______ to the supermarket. She'll be back in an hour."
        `,
        options: [
            { letter: "A", text: "(A) has been" },
            { letter: "B", text: "(B) has gone" },
            { letter: "C", text: "(C) went" },
            { letter: "D", text: "(D) did go" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 15 (NOVA - 'gone' vs 'been')
    {
        id: "q15",
        type: "mc",
        questionText: `
            A: "You look tanned!" <br>
            B: "Thanks! I ______ to the beach."
        `,
        options: [
            { letter: "A", text: "(A) have gone" },
            { letter: "B", text: "(B) went" },
            { letter: "C", text: "(C) have been" },
            { letter: "D", text: "(D) had been" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 16 (NOVA - Past Simple vs Present Perfect)
    {
        id: "q16",
        type: "mc",
        questionText: `
            Which sentence is <b>incorrect</b> because it uses a finished time expression?
        `,
        options: [
            { letter: "A", text: "(A) I have seen that movie." },
            { letter:"B", text: "(B) I have seen him today." },
            { letter: "C", text: "(C) I have seen him yesterday." },
            { letter: "D", text: "(D) He has just seen the movie." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 17 (NOVA - Past Participle)
    {
        id: "q17",
        type: "mc",
        questionText: `
            Complete the sentence: "Oh no! Someone ______ the window."
        `,
        options: [
            { letter: "A", text: "(A) has broke" },
            { letter: "B", text: "(B) have broken" },
            { letter: "C", text: "(C) has broken" },
            { letter: "D", text: "(D) breaked" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 18 (NOVA - Unfinished time period)
    {
        id: "q18",
        type: "mc",
        questionText: `
            "I ______ three cups of coffee this morning." (It is still morning)
        `,
        options: [
            { letter: "A", text: "(A) drank" },
            { letter: "B", text: "(B) have drunk" },
            { letter: "C", text: "(C) have been drinking" },
            { letter: "D", text: "(D) drink" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    
    {
        id: "q19",
        type: "mc",
        questionText: `
            Complete: "They ______ a new car."
        `,
        options: [
            { letter: "A", text: "(A) have buyed" },
            { letter: "B", text: "(B) has bought" },
            { letter: "C", text: "(C) have bought" },
            { letter: "D", text: "(D) has buyed" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 20 (NOVA - Past Simple vs Present Perfect)
    {
        id: "q20",
        type: "mc",
        questionText: `
            Choose the correct option: "Leonardo da Vinci ______ the Mona Lisa."
        `,
        options: [
            // A pessoa já morreu (ação finalizada em tempo finalizado).
            { letter: "A", text: "(A) has painted" },
            { letter: "B", text: "(B) painted" },
            { letter: "C", text: "(C) has been painting" },
            { letter: "D", text: "(D) paint" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    }
];
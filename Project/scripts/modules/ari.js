const questionBank = [
    {
        id: "q1",
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
        correctAnswer: "A",
        videoUrl: ""
    },
    {
        id: "q2",
        type: "mc",
        questionText: `
            <img src="images/present5.jpg" alt="London Comic" loading="lazy" style="width: 300px;">
            <br><br>
            Analise a imagem. A mulher diz que está em Londres "<b>Since Monday</b>" (Desde Segunda). A placa na torre do relógio indica que hoje é "<b>FRIDAY</b>" (Sexta-feira).
            <br><br>
            Qual frase também está correta?
        `,
        options: [
            { letter: "A", text: "(A) She has been in London for five days." },
            { letter: "B", text: "(B) She has been in London since five days." },
            { letter: "C", text: "(C) She has been in London for Monday." },
            { letter: "D", text: "(D) She arrived in London for Friday." },
            { letter: "E", text: "(E) She has been in London since Friday." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },
    {
        id: "q3",
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
        correctAnswer: "B",
        videoUrl: ""
    },
    {
        id: "q4",
        type: "fill-verb", 
        questionText: "Read and choose the correct form of 'have' or 'has' to complete the sentence.",
        lines: [
            { text: "(A) I ______ never been to London.", verbs: ["have", "has"] },
            { text: "(B) She ______ already finished her homework.", verbs: ["has", "have"] },
            { text: "(C) They ______ seen that movie before.", verbs: ["have", "has"] },
            { text: "(D) He ______ worked here for five years.", verbs: ["has", "have"] },
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
            { text: "(C) My parents ______ traveled to Europe twice.", verbs: ["have", "has"] },
            { text: "(D) She ______ lost her keys again!", verbs: ["has", "have"] },
            { text: "(E) I ______ just called you.", verbs: ["have", "has"] }
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
            { text: "(E) I ______ finished reading the book.", verbs: ["have", "has"] }
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
        type: "mc",
        questionText: `
            Question 8:<br>
            Choose the correct option:<br>
            I ______ English for five years, and I still study every day.
        `,
        options: [
            { letter: "A", text: "(A) have studied" },
            { letter: "B", text: "(B) have been studying" },
            { letter: "C", text: "(C) studied" },
            { letter: "D", text: "(D) am studying" }
        ],
        correctAnswer: "B",
        hints: ["Dica: 'for five years' + ação contínua → Present Perfect Continuous."]
    },
    {
        id: "q9",
        type: "mc",
        questionText: `
            Question 9:<br>
            Choose the correct sentence:
        `,
        options: [
            { letter: "A", text: "(A) She has been reading that book all afternoon." },
            { letter: "B", text: "(B) She has read that book all afternoon." },
            { letter: "C", text: "(C) She reads that book all afternoon." },
            { letter: "D", text: "(D) She was reading that book all afternoon." }
        ],
        correctAnswer: "A",
        hints: ["Dica: A ação começou no passado e continua agora → use 'has been + ing'."]
    },
    {
        id: "q10",
        type: "mc",
        questionText: `
            Question 10:<br>
            I ______ three letters this morning.
        `,
        options: [
            { letter: "A", text: "(A) have written" },
            { letter: "B", text: "(B) have been writing" },
            { letter: "C", text: "(C) am writing" },
            { letter: "D", text: "(D) wrote" }
        ],
        correctAnswer: "A",
        hints: ["Dica: Foco no resultado (3 cartas prontas) → Present Perfect simples."]
    },
    {
        id: "q11",
        type: "mc",
        questionText: `
            Question 11:<br>
            They ______ TV since 8 p.m.
        `,
        options: [
            { letter: "A", text: "(A) have watched" },
            { letter: "B", text: "(B) have been watching" },
            { letter: "C", text: "(C) watched" },
            { letter: "D", text: "(D) are watching" }
        ],
        correctAnswer: "B",
        hints: ["Dica: 'since' + ação contínua → Present Perfect Continuous."]
    },
    {
        id: "q13",
        type: "mc",
        questionText: `
            Question 13:<br>
            Look at her hands! She ______ the garden.
        `,
        options: [
            { letter: "A", text: "(A) has worked" },
            { letter: "B", text: "(B) has been working" },
            { letter: "C", text: "(C) worked" },
            { letter: "D", text: "(D) works" }
        ],
        correctAnswer: "B",
        hints: ["Dica: Evidência de uma atividade recente → Present Perfect Continuous."]
    },
    {
        id: "q14",
        type: "mc",
        questionText: `
            Question 14:<br>
            We ______ this TV series before. Let's watch something new!
        `,
        options: [
            { letter: "A", text: "(A) have seen" },
            { letter: "B", text: "(B) have been seeing" },
            { letter: "C", text: "(C) saw" },
            { letter: "D", text: "(D) are seeing" }
        ],
        correctAnswer: "A",
        hints: ["Dica: Foco na experiência de vida → Present Perfect simples."]
    },
    {
        id: "q15",
        type: "mc",
        questionText: `
            <img src="images/past_simple1.png" alt="Timeline" loading="lazy" style="width: 280px;">
            <br><br>
            Na frase "<b>I visited my grandmother last Sunday</b>", o uso do Past Simple indica:
        `,
        options: [
            { letter: "A", text: "(A) Uma ação que começou no passado e continua até hoje." },
            { letter: "B", text: "(B) Uma ação concluída em um tempo específico no passado." },
            { letter: "C", text: "(C) Uma ação que está acontecendo agora." },
            { letter: "D", text: "(D) Uma experiência de vida sem data definida." },
            { letter: "E", text: "(E) Um hábito que eu pretendo ter no futuro." }
        ],
        correctAnswer: "B",
        hints: ["Dica: 'Last Sunday' marca um tempo definido e já finalizado."]
    },
    {
        id: "q16",
        type: "mc",
        questionText: `
            Analise a pergunta: "<b>Did you watch the game yesterday?</b>"
            <br><br>
            Qual é a forma correta da resposta curta negativa?
        `,
        options: [
            { letter: "A", text: "(A) No, I don't." },
            { letter: "B", text: "(B) No, I haven't." },
            { letter: "C", text: "(C) No, I didn't." },
            { letter: "D", text: "(D) No, I not watched." },
            { letter: "E", text: "(E) No, I wasn't." }
        ],
        correctAnswer: "C",
        hints: ["Dica: Se a pergunta começa com 'Did', o auxiliar da resposta deve ser 'did' ou 'didn't'."]
    },
    {
        id: "q17",
        type: "mc",
        questionText: `
            Qual das alternativas abaixo apresenta apenas verbos **irregulares** no passado?
        `,
        options: [
            { letter: "A", text: "(A) Played, Worked, Watched" },
            { letter: "B", text: "(B) Arrived, Lived, Stopped" },
            { letter: "C", text: "(C) Went, Ate, Bought" },
            { letter: "D", text: "(D) Studied, Cried, Tried" },
            { letter: "E", text: "(E) Walked, Talked, Liked" }
        ],
        correctAnswer: "C",
        hints: ["Dica: Verbos regulares terminam em -ed. Os irregulares mudam de forma completamente."]
    },
    {
        id: "q18",
        type: "fill-verb", 
        questionText: "Complete the sentences using the correct Past Simple form (Regular vs Irregular).",
        lines: [
            { text: "(A) They ______ (go) to the beach last weekend.", verbs: ["went", "goed"] },
            { text: "(B) She ______ (study) hard for the exam yesterday.", verbs: ["studied", "studyed"] },
            { text: "(C) I ______ (see) a great movie last night.", verbs: ["saw", "seed"] },
            { text: "(D) We ______ (eat) pizza for dinner.", verbs: ["ate", "eated"] },
            { text: "(E) He ______ (finish) his work early.", verbs: ["finished", "finish"] }
        ],
        correctAnswer: ["went", "studied", "saw", "ate", "finished"],
        videoUrl: "https://www.youtube.com/embed/mwh_MdS1pWE"
    },
    {
        id: "q19",
        type: "fill-verb", 
        questionText: "Choose the correct negative form in the Past Simple.",
        lines: [
            { text: "(A) I ______ sleep well last night.", verbs: ["didn't", "don't"] },
            { text: "(B) They ______ find their keys.", verbs: ["didn't", "weren't"] },
            { text: "(C) She ______ like the soup.", verbs: ["didn't", "doesn't"] },
            { text: "(D) We ______ go to the party.", verbs: ["didn't", "not went"] },
            { text: "(E) You ______ call me.", verbs: ["didn't", "haven't"] }
        ],
        correctAnswer: ["didn't", "didn't", "didn't", "didn't", "didn't"],
        videoUrl: "https://www.youtube.com/embed/mwh_MdS1pWE"
    },
    {
        id: "q20",
        type: "mc",
        questionText: `
            Question 20:<br>
            Identify the mistake in the sentence:<br>
            "<b>She didn't bought the dress because it was too expensive.</b>"
        `,
        options: [
            { letter: "A", text: "(A) O erro está em 'expensive'." },
            { letter: "B", text: "(B) O erro está em 'didn't bought' (deveria ser 'didn't buy')." },
            { letter: "C", text: "(C) O erro está em 'was' (deveria ser 'is')." },
            { letter: "D", text: "(D) O erro está em 'dress'." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Após o auxiliar 'didn't', o verbo principal deve permanecer na forma base."]
    },
    {
        id: "q21",
        type: "mc",
        questionText: `
            Question 21:<br>
            Which sentence is grammatically correct?
        `,
        options: [
            { letter: "A", text: "(A) Did you saw my dog?" },
            { letter: "B", text: "(B) I was go to the park yesterday." },
            { letter: "C", text: "(C) They lived in Brazil in 2010." },
            { letter: "D", text: "(D) We didn't played soccer." }
        ],
        correctAnswer: "C",
        hints: ["Dica: 'Lived' é o passado regular de 'live'. Lembre-se que em perguntas com 'Did' não usamos o verbo no passado."]
    }
];
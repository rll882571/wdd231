const questionBank = [

    // --- BLOCO 1: QUESTÕES ADAPTADAS (AGORA COM 5 OPÇÕES) ---

    // Pergunta 1 
    {
        id: "q1",
        type: "mc",
        questionText: `
            Complete the sentence:
            I ______ going to travel next week.
        `,
        options: [
            { letter: "A", text: "(A) are" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) am" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O sujeito 'I' sempre usa 'am'.",
            "Dica 2: 'Be going to' fala de planos já feitos.",
            "Dica 3: Quando o plano já existe, usamos 'am/is/are + going to'."
        ]
    },

    {
        id: "q2",
        type: "mc",
        questionText: `
            Complete the sentence:
            You ______ going to start a new project today.
        `,
        options: [
            { letter: "A", text: "(A) am" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) are" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'You' sempre combina com 'are'.",
            "Dica 2: 'Going to' indica algo planejado.",
            "Dica 3: 'Do/does' não são usados para formar futuro."
        ]
    },

    {
        id: "q3",
        type: "mc",
        questionText: `
            Complete the sentence:
            Neymar ______ going to play tomorrow.
        `,
        options: [
            { letter: "A", text: "(A) are" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) am" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Neymar = 'he'.",
            "Dica 2: 'He' sempre usa 'is'.",
            "Dica 3: 'Is going to' mostra um plano já definido."
        ]
    },

    {
        id: "q4",
        type: "mc",
        questionText: `
            Complete the sentence:
            Maria ______ going to visit her family next month.
        `,
        options: [
            { letter: "A", text: "(A) am" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) are" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Maria = 'she'.",
            "Dica 2: 'She' sempre usa 'is'.",
            "Dica 3: A expressão 'going to' indica um plano futuro."
        ]
    },

    {
        id: "q5",
        type: "mc",
        questionText: `
            Complete the sentence:
            Neymar and Maria ______ going to watch a movie tonight.
        `,
        options: [
            { letter: "A", text: "(A) am" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) are" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Dois nomes = sujeito plural.",
            "Dica 2: Sujeitos plurais usam 'are'.",
            "Dica 3: 'Are going to' indica plano conjunto."
        ]
    },

    {
        id: "q6",
        type: "mc",
        questionText: `
            Complete the sentence:
            The children ______ going to sleep early today.
        `,
        options: [
            { letter: "A", text: "(A) is" },
            { letter: "B", text: "(B) am" },
            { letter: "C", text: "(C) are" }, 
            { letter: "D", text: "(D) does" },
            { letter: "E", text: "(E) do" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Children' é plural.",
            "Dica 2: Palavras plurais sempre usam 'are'.",
            "Dica 3: 'Going to' mostra intenção futura."
        ]
    },

    {
        id: "q7",
        type: "mc",
        questionText: `
            Complete the sentence:
            The computer ______ going to update automatically.
        `,
        options: [
            { letter: "A", text: "(A) are" },
            { letter: "B", text: "(B) am" },
            { letter: "C", text: "(C) is" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'The computer' = 'it'.",
            "Dica 2: 'It' sempre usa 'is'.",
            "Dica 3: A forma correta é 'is going to'."
        ]
    },

    {
        id: "q8",
        type: "mc",
        questionText: `
            Complete the sentence:
            The book ______ going to fall off the table.
        `,
        options: [
            { letter: "A", text: "(A) am" },
            { letter: "B", text: "(B) are" },
            { letter: "C", text: "(C) is" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'The book' também é 'it'.",
            "Dica 2: Objetos singulares usam 'is'.",
            "Dica 3: 'Is going to' mostra previsão do que vai acontecer."
        ]
    },

    {
        id: "q9",
        type: "mc",
        questionText: `
            Complete the sentence:
            We ______ going to paint the house tomorrow.
        `,
        options: [
            { letter: "A", text: "(A) am" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) are" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'We' é pronome plural — usa 'are'.",
            "Dica 2: 'Be going to' indica um plano futuro combinado.",
            "Dica 3: 'Do/does' não formam futuro com 'going to'."
        ]
    },

    {
        id: "q10",
        type: "mc",
        questionText: `
            Complete the sentence:
            Ana and you ______ going to join the class tonight.
        `,
        options: [
            { letter: "A", text: "(A) am" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) are" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Dois sujeitos ligados por 'and' formam um sujeito plural.",
            "Dica 2: Sujeitos plurais exigem 'are' com 'going to'.",
            "Dica 3: 'Ana and you' = 'you both' (plural)."
        ]
    },

    {
        id: "q11",
        type: "mc",
        questionText: `
            Complete the sentence:
            It ______ going to rain this afternoon.
        `,
        options: [
            { letter: "A", text: "(A) are" },
            { letter: "B", text: "(B) am" },
            { letter: "C", text: "(C) is" }, 
            { letter: "D", text: "(D) do" },
            { letter: "E", text: "(E) does" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'It' (clima/it neutro) usa 'is'.",
            "Dica 2: Previsões meteorológicas frequentemente usam 'is going to'.",
            "Dica 3: Lembre-se: 'am' só com 'I', 'is' com he/she/it, 'are' com we/you/they."
        ]
    },

    
    {
    id: "q12",
    type: "mc",
    questionText: `
        Complete the sentence:
        ________ you going to study for the test tonight?
    `,
    options: [
        { letter: "A", text: "(A) is" },
        { letter: "B", text: "(B) am" },
        { letter: "C", text: "(C) are" },
        { letter: "D", text: "(D) do" },
        { letter: "E", text: "(E) does" }
    ],
    correctAnswer: "C",
    videoUrl: "",
    hints: [
        "Dica 1: Em perguntas com 'you', usamos 'are' no começo.",
        "Dica 2: A ordem da frase interrogativa é 'Are + sujeito + going to...?'",
        "Dica 3: 'Do/does' não formam futuro com 'going to'."
    ]
    } ,
    
    // Pergunta 13
    {
    id: "q13",
    type: "mc",
    questionText: `
        Complete the sentence:
        ________ Maria going to cook dinner today?
    `,
    options: [
        { letter: "A", text: "(A) are" },
        { letter: "B", text: "(B) am" },
        { letter: "C", text: "(C) is" },
        { letter: "D", text: "(D) do" },
        { letter: "E", text: "(E) does" }
    ],
    correctAnswer: "C",
    videoUrl: "",
    hints: [
        "Dica 1: Maria = she, então usamos 'is'.",
        "Dica 2: A estrutura correta é 'Is + Maria + going to...?'.",
        "Dica 3: 'Are' é usado somente com sujeitos plurais ou 'you'."
    ]
  },

    // Pergunta 14
    {
    id: "q14",
    type: "mc",
    questionText: `
        Complete the sentence:
        ________ Neymar and Lucas going to travel next month?
    `,
    options: [
        { letter: "A", text: "(A) am" },
        { letter: "B", text: "(B) is" },
        { letter: "C", text: "(C) are" },
        { letter: "D", text: "(D) do" },
        { letter: "E", text: "(E) does" }
    ],
    correctAnswer: "C",
    videoUrl: "",
    hints: [
        "Dica 1: Dois nomes formam um sujeito plural.",
        "Dica 2: Perguntas no plural começam com 'are'.",
        "Dica 3: 'Is' só é usado para he/she/it (singular)."
    ]
   },

    // Pergunta 15
    {
        id: "q15",
        type: "mc",
        questionText: `Which sentence expresses a plan or intention (not a promise)?`,
        options: [
            { letter: "A", text: "(A) I promise I will call you tonight." },
            { letter: "B", text: "(B) I am going to study medicine next year." },
            { letter: "C", text: "(C) I will always love this song." },
            { letter: "D", text: "(D) I think it will snow tomorrow." },
            { letter: "E", text: "(E) I'll have the steak, please." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pergunta pede por um 'plan' (plano) ou 'intention' (intenção).",
            "Dica 2: 'Be going to' é a estrutura principal para falar de planos.",
            "Dica 3: As outras opções mostram promessas (A), fatos (C), opiniões (D) ou decisões do momento (E)."
        ]
    },

    // Pergunta 16
    {
    id: "q15",
    type: "mc",
    questionText: `
        Complete the sentence:
        ________ the children going to visit the museum?
    `,
    options: [
        { letter: "A", text: "(A) am" },
        { letter: "B", text: "(B) is" },
        { letter: "C", text: "(C) are" },
        { letter: "D", text: "(D) do" },
        { letter: "E", text: "(E) does" }
    ],
    correctAnswer: "C",
    videoUrl: "",
    hints: [
        "Dica 1: 'Children' é plural.",
        "Dica 2: Sujeitos plurais exigem 'are' em perguntas.",
        "Dica 3: Estrutura interrogativa: 'Are + subject + going to...?'"
    ]
  },


    {
        id: "q18_fill_verb_will",
        type: "fill-verb",
        questionText: "Read the situations and choose the correct future form (Will or Be Going To).",
        lines: [
            { text: "(A) I've already bought the tickets. I ... (travel) to Japan next month.", verbs: ["will travel", "am going to travel"] },
            { text: "(B) Oh no, I spilled the milk! I ... (clean) it up right now.", verbs: ["will clean", "am going to clean"] },
            { text: "(C) Look at those dark clouds! It ... (rain) very soon.", verbs: ["will rain", "is going to rain"] }
        ],
        correctAnswer: ["am going to travel", "will clean", "is going to rain"],
        videoUrl: "",
        hints: [ 
            "Dica 1: Use 'Be Going To' para planos feitos com antecedência (A) ou previsões com evidência (C).",
            "Dica 2: Use 'Will' para decisões rápidas e espontâneas (B).",
            "Dica 3: 'I've bought the tickets' é um plano. 'I spilled the milk' é uma surpresa. 'Dark clouds' é uma evidência."
        ]
    },

    {
    id: "q20",
    type: "mc",
    questionText: `
        Questão 25:
        <br>
        Sobre o uso do auxiliar modal "Will" para formar o futuro em inglês, analise as afirmações abaixo e assinale a opção que contém apenas a(s) afirmativa(s) correta(s):
        <br><br>
        I. é usado para falar sobre planos<br>
        II. usado para falar sobre predições baseadas em evidecias<br>
        III. uma decisão feita antes do momento da fala<br>
        IV. para falar sobre o passado<br>
        V. fazer promessas
    `,
    options: [
        { letter: "A", text: "(A) Apenas as afirmações I, II e III estão corretas.", isCorrect: false, rationale: "As afirmações I, II e III são incorretas. Essas ações geralmente usam 'going to', não 'will'." },
        { letter: "B", text: "(B) Apenas a afirmação V está correta.", isCorrect: true, rationale: "O 'Will' é a forma correta de expressar promessas e ofertas." },
        { letter: "C", text: "(C) Apenas as afirmações I e V estão corretas.", isCorrect: false, rationale: "A afirmação I ('falar sobre planos') é incorreta, pois planos e intenções pré-determinadas usam 'going to'." },
        { letter: "D", text: "(D) Apenas as afirmações IV e V estão corretas.", isCorrect: false, rationale: "A afirmação IV ('falar sobre o passado') está incorreta. 'Will' é um auxiliar do futuro." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: [
        "Dica 1 (Q25): Lembre-se que o uso do 'Will' é ideal para o que é espontâneo (decisões no momento da fala) ou incerto, e para fazer promessas, em contraste com o 'Going To' que é para planos e evidências."
    ]
   },

    // Pergunta 21 (Placeholder - MC Simples)
    {
    id: "q21_goingto_garfield",
    type: "mc",
    questionText: `
        Question 21:
        <br>
        Observe the Garfield comic strip. In the first speech bubble, Jon says: "I'm going kite flying!".
        <br><br>
        Which of the options below BEST describes the use of the structure "be going to" in this sentence, according to the context of the comic strip?
        <br><br>
        <div style="text-align: center;">
        <img src="images/garff.jpg" alt="Garfield kite flying comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
        </div>
    `,
    options: [
        { letter: "A", text: "(A) A prediction about the future based on Jon's opinion." },
        { letter: "B", text: "(B) A plan or intention that Jon had prior to the moment of speaking." },
        { letter: "C", text: "(C) A spontaneous decision that Jon made at the moment of speaking." },
        { letter: "D", text: "(D) A promise that Jon is making to Garfield." },
        { letter: "E", text: "(E) A known fact about the weather or the day." }
    ],
    correctAnswer: "B", 
    videoUrl: "",
    hints: [ 
        "Hint 1: Observe Jon's attitude in the first panel. He is already holding the kite, indicating he had this idea beforehand.",
        "Hint 2: The structure 'be going to' is often used to express actions that have already been planned.",
        "Hint 3: Compare this with the uses of 'will', which are usually for on-the-spot decisions or promises."
    ]
    },
    {
    id: "q26",
    type: "mc",
    questionText: `
        Questão 25:
        <br>
        Sobre o uso do auxiliar modal "Will" para formar o futuro em inglês, analise as afirmações abaixo e assinale a opção que contém apenas a(s) afirmativa(s) correta(s):
        <br><br>
        I. é usado para falar sobre planos<br>
        II. usado para falar sobre predições baseadas em evidecias<br>
        III. uma decisão feita no momento da fala<br>
        IV. para falar sobre o passado<br>
        V. fazer promessas
    `,
    options: [
        { letter: "A", text: "(A) Apenas a afirmação V está correta.", isCorrect: false, rationale: "A afirmação III ('decisão feita no momento da fala') também está correta para o uso de 'Will'." },
        { letter: "B", text: "(B) Apenas as afirmações III e V estão corretas.", isCorrect: true, rationale: "As afirmações III ('decisão feita no momento da fala') e V ('fazer promessas') são os usos corretos do 'Will' dentre as opções listadas. As demais se referem a 'going to' ou a outros tempos verbais." },
        { letter: "C", text: "(C) Apenas as afirmações I, III e V estão corretas.", isCorrect: false, rationale: "A afirmação I ('falar sobre planos') é incorreta, pois planos e intenções pré-determinadas usam 'going to'." },
        { letter: "D", text: "(D) Apenas as afirmações II, III e V estão corretas.", isCorrect: false, rationale: "A afirmação II ('predições baseadas em evidecias') é incorreta, pois predições baseadas em evidências claras usam 'going to'." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: [
        "Dica 1 (Q25): Lembre-se que o uso do 'Will' é ideal para o que é espontâneo (decisões no momento da fala - III) e para fazer promessas (V)."
    ]
},
{
    id: "q27",
    type: "mc",
    questionText: `
        Questão 25:
        <br>
        Sobre o uso do auxiliar modal "Will" para formar o futuro em inglês, analise as afirmações abaixo e assinale a opção que contém apenas a(s) afirmativa(s) correta(s):
        <br><br>
        I. é usado para falar sobre planos<br>
        II. usado para falar sobre predições baseadas em opniões<br>
        III. uma decisão feita no momento da fala<br>
        IV. para falar sobre o passado<br>
        V. fazer promessas
    `,
    options: [
        { letter: "A", text: "(A) Apenas as afirmações III e V estão corretas.", isCorrect: false, rationale: "A afirmação II ('predições baseadas em opiniões') também está correta para o uso de 'Will'." },
        { letter: "B", text: "(B) Apenas as afirmações I, III e V estão corretas.", isCorrect: false, rationale: "A afirmação I ('falar sobre planos') é incorreta, pois planos e intenções pré-determinadas usam 'going to'." },
        { letter: "C", text: "(C) Apenas as afirmações II, III e V estão corretas.", isCorrect: true, rationale: "As afirmações II ('predições baseadas em opiniões'), III ('decisão feita no momento da fala') e V ('fazer promessas') são os usos corretos e principais do 'Will'." },
        { letter: "D", text: "(D) Apenas as afirmações III, IV e V estão corretas.", isCorrect: false, rationale: "A afirmação IV ('para falar sobre o passado') é incorreta. 'Will' é um auxiliar do futuro." }
    ],
    correctAnswer: "C",
    videoUrl: "",
    hints: [
        "Dica 1 (Q25): Os três usos principais do 'Will' são: Promessas, Decisões Espontâneas (no momento da fala) e Predições baseadas em Opiniões/Palpites."
    ]
},
{
    id: "q28",
    type: "mc",
    questionText: `
        Questão 25:
        <br>
        Sobre o uso do auxiliar modal "Will" para formar o futuro em inglês, analise as afirmações abaixo. Assinale a opção que inclui todas as afirmativas corretas:
        <br><br>
        I. é usado para falar sobre fatos que são considerados certos ou inevitáveis no futuro.<br>
        II. usado para falar sobre predições baseadas em opniões<br>
        III. uma decisão feita no momento da fala<br>
        IV. usado para fazer ofertas de ajuda ou convites.<br>
        V. fazer promessas<br>
        VI. Um fato conhecido.
    `,
    options: [
        { letter: "A", text: "(A) Apenas as afirmações I, III e V estão corretas.", isCorrect: false, rationale: "As afirmações II, IV e VI também representam usos válidos do 'Will' no futuro." },
        { letter: "B", text: "(B) Apenas as afirmações II, III, V e VI estão corretas.", isCorrect: false, rationale: "As afirmações I ('fatos certos') e IV ('ofertas') também são usos corretos e válidos do auxiliar 'Will'." },
        { letter: "C", text: "(C) Apenas as afirmações I, II, III e IV estão corretas.", isCorrect: false, rationale: "As afirmações V ('promessas') e VI ('fato conhecido') também são usos válidos e importantes do 'Will'." },
        { letter: "D", text: "(D) Todas as afirmações (I, II, III, IV, V e VI) estão corretas.", isCorrect: true, rationale: "Todas as afirmações listadas são consideradas usos gramaticalmente corretos do 'Will' no futuro, incluindo promessas, decisões espontâneas e previsões/fatos." }
    ],
    correctAnswer: "D",
    videoUrl: "",
    hints: [
        "Dica 1 (Q25): Lembre-se dos seis principais papéis do 'Will': Promessa, Decisão Espontânea, Oferta, Pedido, Previsão (opinião) e Fato Certo."
    ]
},
{
    id: "q29",
    type: "mc",
    questionText: `
        Question 25:
        <br>
        Regarding the use of the modal auxiliary "Will" to form the future tense in English, analyze the statements below and choose the option that contains only the correct statement(s):
        <br><br>
        I. it is used to talk about plans<br>
        II. used to talk about predictions based on evidence<br>
        III. a decision made at the moment of speaking<br>
        IV. to talk about the past<br>
        V. to make promises
    `,
    options: [
        { letter: "A", text: "(A) Only statement V is correct.", isCorrect: false, rationale: "Statement III ('a decision made at the moment of speaking') is also correct for the use of 'Will'." },
        { letter: "B", text: "(B) Only statements III and V are correct.", isCorrect: true, rationale: "Statements III ('a decision made at the moment of speaking') and V ('to make promises') are the correct uses of 'Will' among the listed options. The others refer to 'going to' or other verb tenses." },
        { letter: "C", text: "(C) Only statements I, III, and V are correct.", isCorrect: false, rationale: "Statement I ('to talk about plans') is incorrect, as predetermined plans and intentions use 'going to'." },
        { letter: "D", text: "(D) Only statements II, III, and V are correct.", isCorrect: false, rationale: "Statement II ('predictions based on evidence') is incorrect, as predictions based on clear evidence use 'going to'." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: [
        "Hint 1 (Q25): Remember that the use of 'Will' is ideal for what is spontaneous (decisions at the moment of speaking - III) and for making promises (V)."
    ]
},
{
    id: "q30",
    type: "mc",
    questionText: `
        Question 25:
        <br>
        Regarding the use of the modal auxiliary "Will" to form the future tense in English, analyze the statements below. Choose the option that includes ALL the correct statements:
        <br><br>
        I. it is used to talk about facts considered certain or inevitable in the future.<br>
        II. used to talk about predictions based on opinions<br>
        III. a decision made at the moment of speaking<br>
        IV. used to make offers of help or invitations.<br>
        V. to make promises<br>
        VI. A known fact.
    `,
    options: [
        { letter: "A", text: "(A) Only statements I, III, and V are correct.", isCorrect: false, rationale: "Statements II, IV, and VI are also valid uses of 'Will'." },
        { letter: "B", text: "(B) Only statements II, III, V, and VI are correct.", isCorrect: false, rationale: "Statements I ('certain facts') and IV ('offers') are also correct and valid uses of the auxiliary 'Will'." },
        { letter: "C", text: "(C) Only statements I, II, III, and IV are correct.", isCorrect: false, rationale: "Statements V ('promises') and VI ('known fact') are also valid and important uses of 'Will'." },
        { letter: "D", text: "(D) All statements (I, II, III, IV, V, and VI) are correct.", isCorrect: true, rationale: "All listed statements are considered grammatically correct uses of 'Will' for the future, including promises, spontaneous decisions, offers, predictions based on opinion, and certain facts in the future." }
    ],
    correctAnswer: "D",
    videoUrl: "",
    hints: [
        "Hint 1 (Q25): Remember the six main roles of 'Will': Promise, Spontaneous Decision, Offer, Invitation/Request, Prediction (opinion), and Certain Fact."
    ]
},
{
    id: "q31",
    type: "mc",
    questionText: `
        Questão 26:
        <br>
        Sobre o uso da estrutura "be going to" para formar o futuro em inglês, analise as afirmações abaixo e assinale a opção que contém apenas a(s) afirmativa(s) correta(s):
        <br><br>
        I. é usado para falar sobre planos ou intenções previamente definidos.<br>
        II. usado para falar sobre predições baseadas em evidências visíveis.<br>
        III. uma decisão feita no momento da fala.<br>
        IV. usado para fazer promessas.<br>
        V. é usado para descrever rotinas no presente.
    `,
    options: [
        { letter: "A", text: "(A) Apenas a afirmação I está correta.", isCorrect: false, rationale: "A afirmação II ('predições baseadas em evidências') também é um uso correto da estrutura 'be going to'." },
        { letter: "B", text: "(B) Apenas as afirmações I e II estão corretas.", isCorrect: true, rationale: "As afirmações I (Planos/Intenções) e II (Predições baseadas em evidências) são os dois principais e corretos usos da estrutura 'be going to'. As demais se referem a outros auxiliares ou tempos verbais." },
        { letter: "C", text: "(C) Apenas as afirmações I, III e IV estão corretas.", isCorrect: false, rationale: "As afirmações III ('decisão na hora') e IV ('promessas') são usos incorretos para 'be going to', sendo típicas do auxiliar 'Will'." },
        { letter: "D", text: "(D) Todas as afirmações estão corretas.", isCorrect: false, rationale: "As afirmações III, IV e V são incorretas para o uso da estrutura 'be going to'." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: [
        "Dica 1 (Q26): O 'Going to' foca em um futuro que já está decidido, planejado ou que você tem evidência clara de que vai acontecer."
    ]
},
{
    id: "q32",
    type: "mc",
    questionText: `
        Question 22:
        <br>
        Analyze the speech bubble from the comic strip where Calvin says: "I don't think I'll go to school today."
        <br><br>
        The main function of the auxiliary verb "Will" in this specific sentence is to express:
        <br><br>
        <div style="text-align: center;">
        <img src="images/marvin.jpg" alt="Calvin and Hobbes comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
        </div>
    `,
    options: [
        { letter: "A", text: "(A) A spontaneous decision made at the moment of speaking." },
        { letter: "B", text: "(B) A predetermined future plan or intention." },
        { letter: "C", text: "(C) A prediction based on the speaker's personal opinion." },
        { letter: "D", text: "(D) An offer of help or an invitation." },
        { letter: "E", "text": "(E) A strong promise about a future action." }
    ],
    correctAnswer: "C", 
    videoUrl: "",
    hints: [ 
        "Hint 1: The phrase 'I don't think...' often signals that the speaker is expressing a belief or a guess, not a fixed plan or a sudden decision.",
        "Hint 2: 'Will' is the auxiliary used for predictions based on what someone thinks or believes.",
        "Hint 3: 'Going to' is typically used for fixed plans and predictions based on evidence."
    ]
},
{
    id: "q16",
    type: "mc",
    questionText: `
        Complete the sentence:
        ________ the dog going to bark all night?
    `,
    options: [
        { letter: "A", text: "(A) are" },
        { letter: "B", text: "(B) am" },
        { letter: "C", text: "(C) is" },
        { letter: "D", text: "(D) do" },
        { letter: "E", text: "(E) does" }
    ],
    correctAnswer: "C",
    videoUrl: "",
    hints: [
        "Dica 1: 'The dog' é singular → usa 'is'.",
        "Dica 2: A pergunta fica: 'Is the dog going to...?'",
        "Dica 3: 'Are' seria usado com plural ('dogs', 'they')."
    ]
 },

{
    id: "q34",
    type: "mc",
    questionText: `
        What is the best way to complete the sentence? <br>
        They ______ going to watch a movie tonight.
    `,
    options: [
        { letter: "A", text: "(A) am" },
        { letter: "B", text: "(B) is" },
        { letter: "C", text: "(C) are" },
        { letter: "D", text: "(D) be" },
        { letter: "E", text: "(E) none" }
    ],
    correctAnswer: "C",
    videoUrl: "",
    hints: [
        "Dica 1: O sujeito 'they' é plural.",
        "Dica 2: Para sujeitos plurais, use 'are'.",
        "Dica 3: Você está quase lá!"
    ]
},

{
    id: "q34",
    type: "mc",
    questionText: `
        What is the best way to complete the sentence? <br>
        I think it ______ rain tomorrow.
    `,
    options: [
        { letter: "A", text: "(A) will" },
        { letter: "B", text: "(B) am" },
        { letter: "C", text: "(C) are" },
        { letter: "D", text: "(D) is" },
        { letter: "E", text: "(E) going" }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica 1: Use 'will' para previsões sem evidência.",
        "Dica 2: Não há verbo to be antes de 'will'.",
        "Dica 3: Boa sorte!"
    ]
},

{
    id: "q35",
    type: "mc",
    questionText: `
        What is the best way to complete the sentence? <br>
        We ______ probably visit grandma this weekend.
    `,
    options: [
        { letter: "A", text: "(A) will" },
        { letter: "B", text: "(B) is" },
        { letter: "C", text: "(C) are" },
        { letter: "D", text: "(D) am" },
        { letter: "E", text: "(E) none" }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica 1: O advérbio 'probably' combina bem com 'will'.",
        "Dica 2: 'Will' indica uma decisão ou suposição.",
        "Dica 3: Você está arrasando!"
    ]
}

];
const questionBank = [

    // --- BLOCO 1: QUESTÕES ADAPTADAS (AGORA COM 5 OPÇÕES) ---

    // Pergunta 1 
    {
        id: "q1-willGoing",
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
        id: "q2-willGoing",
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
        id: "q3-willGoing",
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
        id: "q4-willGoing",
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
        id: "q5-willGoing",
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
        id: "q6-willGoing",
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
        id: "q7-willGoing",
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
        id: "q8-willGoing",
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
        id: "q9-willGoing",
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
        id: "q10-willGoing",
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
        id: "q11-willGoing",
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
    id: "q12-willGoing",
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
    id: "q13-willGoing",
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
    id: "q14-willGoing",
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
        id: "q15-willGoing",
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
        id: "q16-willGoing",
        type: "mc",
        questionText: `
            Look at those dark clouds! It ___ rain in a few minutes.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) is going to" },
            { letter: "C", text: "(C) might" },
            { letter: "D", text: "(D) will be" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Use 'going to' quando há evidências no presente.",
            "Dica 2: Nuvens escuras indicam previsão baseada em evidência.",
            "Dica 3: 'Will' seria usado para opinião, não evidência."
        ]
    },

    {
        id: "q17-willGoing",
        type: "mc",
        questionText: `
            The phone is ringing. I ___ answer it.
        `,
        options: [
            { letter: "A", text: "(A) am going to" },
            { letter: "B", text: "(B) will" },
            { letter: "C", text: "(C) am about to" },
            { letter: "D", text: "(D) will be" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Use 'will' para decisões feitas no momento da fala.",
            "Dica 2: O telefone tocar é algo inesperado.",
            "Dica 3: 'Going to' exige plano prévio, que não existe aqui."
        ]
    },

    {
        id: "q18-willGoing",
        type: "mc",
        questionText: `
            Carla bought tickets yesterday; she ___ fly to Lisbon next Friday.
        `,
        options: [
            { letter: "A", text: "(A) will fly" },
            { letter: "B", text: "(B) is going to fly" },
            { letter: "C", text: "(C) flies" },
            { letter: "D", text: "(D) is about to fly" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: 'Bought tickets' = plano já decidido antes.",
            "Dica 2: 'Going to' é usado para planos organizados.",
            "Dica 3: 'Will' seria usado para previsão ou decisão instantânea."
        ]
    },

    {
        id: "q19-willGoing",
        type: "mc",
        questionText: `
            You look exhausted. I ___ carry your suitcase.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) am" },
            { letter: "C", text: "(C) am going to" },
            { letter: "D", text: "(D) will be" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: 'Will' é usado para ofertas espontâneas.",
            "Dica 2: O falante acabou de decidir ajudar.",
            "Dica 3: Não havia plano prévio, então não usamos 'going to'."
        ]
    },

    {
        id: "q20-willGoing",
        type: "mc",
        questionText: `
            Watch out! The glass ___ fall off the edge any second now.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) is going to" },
            { letter: "C", text: "(C) might" },
            { letter: "D", text: "(D) was about to" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O copo já está prestes a cair — evidência clara.",
            "Dica 2: 'Going to' é usado quando algo parece prestes a acontecer.",
            "Dica 3: 'Will' não é usado quando há evidência física presente."
        ]
    },

    {
        id: "q21-willGoing",
        type: "mc",
        questionText: `
            I don’t think they ___ win the match tonight.
        `,
        options: [
            { letter: "A", text: "(A) are going to" },
            { letter: "B", text: "(B) will" },
            { letter: "C", text: "(C) might" },
            { letter: "D", text: "(D) are about to" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Quando expressamos opinião, usamos 'will'.",
            "Dica 2: Não há plano ou evidência — é só uma previsão pessoal.",
            "Dica 3: 'Going to' seria para algo baseado em evidências presentes."
        ]
    },

    {
        id: "q22-willGoing",
        type: "mc",
        questionText: `
            We’ve decided: we ___ paint the living room this weekend.
        `,
        options: [
            { letter: "A", text: "(A) are going to" },
            { letter: "B", text: "(B) will" },
            { letter: "C", text: "(C) will be" },
            { letter: "D", text: "(D) will have" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: A decisão já foi tomada antes da fala.",
            "Dica 2: 'Going to' = planos ou intenções já decididos.",
            "Dica 3: 'Will' é para decisões no momento."
        ]
    },

    {
        id: "q23-willGoing",
        type: "mc",
        questionText: `
            It’s very hot in here. I ___ open the window.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) will be" },
            { letter: "C", text: "(C) am" },
            { letter: "D", text: "(D) was going to" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: 'Will' é usado para ações decididas espontaneamente.",
            "Dica 2: Abrir a janela é uma reação imediata ao calor.",
            "Dica 3: 'Going to' exigiria um plano prévio."
        ]
    },

    {
        id: "q24-willGoing",
        type: "mc",
        questionText: `
            Diego has packed his bags; he ___ leave at dawn.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) is going to" },
            { letter: "C", text: "(C) leaves" },
            { letter: "D", text: "(D) will be" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Ele já fez as malas — evidência concreta.",
            "Dica 2: 'Going to' indica plano prévio.",
            "Dica 3: 'Will' seria apenas previsão."
        ]
    },

    {
        id: "q25-willGoing",
        type: "mc",
        questionText: `
            Don’t worry, I ___ help you with your homework later.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) am going to" },
            { letter: "C", text: "(C) will be helping" },
            { letter: "D", text: "(D) am helping" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: Ofertas usam 'will'.",
            "Dica 2: A decisão é tomada no momento.",
            "Dica 3: 'Going to' exige planejamento anterior."
        ]
    },

    {
        id: "q26-willGoing",
        type: "mc",
        questionText: `
            According to the official forecast, it ___ snow tomorrow morning.
        `,
        options: [
            { letter: "A", text: "(A) might" },
            { letter: "B", text: "(B) will" },
            { letter: "C", text: "(C) is about to" },
            { letter: "D", text: "(D) could" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Previsões oficiais usam 'will'.",
            "Dica 2: Indica certeza futura baseada em dados.",
            "Dica 3: 'Going to' não é usado sem evidência visual."
        ]
    },

    {
        id: "q27-willGoing",
        type: "mc",
        questionText: `
            Maria and João ___ get married in September; the invitations are out.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) are going to" },
            { letter: "C", text: "(C) will be getting" },
            { letter: "D", text: "(D) were going to" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Convites enviados = plano concreto.",
            "Dica 2: 'Going to' expressa planos definidos.",
            "Dica 3: 'Will' é previsão, não plano real."
        ]
    },

    {
        id: "q28-willGoing",
        type: "mc",
        questionText: `
            I’m sure you ___ love this movie.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) might" },
            { letter: "C", text: "(C) could" },
            { letter: "D", text: "(D) are about to" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: Previsões baseadas em certeza usam 'will'.",
            "Dica 2: O falante está confiante.",
            "Dica 3: 'Going to' não combina com opinião pessoal forte."
        ]
    },

    {
        id: "q29-willGoing",
        type: "mc",
        questionText: `
            Paulo hasn’t studied at all; he ___ fail the exam.
        `,
        options: [
            { letter: "A", text: "(A) is going to" },
            { letter: "B", text: "(B) will" },
            { letter: "C", text: "(C) might" },
            { letter: "D", text: "(D) is" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: Falta de estudo = evidência.",
            "Dica 2: Evidências usam 'going to'.",
            "Dica 3: 'Will' seria opinião sem base."
        ]
    },

    {
        id: "q30-willGoing",
        type: "mc",
        questionText: `
            I forgot my wallet. I guess I ___ borrow some money from you.
        `,
        options: [
            { letter: "A", text: "(A) am going to" },
            { letter: "B", text: "(B) will borrow" },
            { letter: "C", text: "(C) will be" },
            { letter: "D", text: "(D) am" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Decisão tomada na hora usa 'will'.",
            "Dica 2: Nada foi planejado antes.",
            "Dica 3: 'Going to' exigiria intenção prévia."
        ]
    },

    {
        id: "q31-willGoing",
        type: "mc",
        questionText: `
            They’ve booked the hall; the conference ___ start at 9 a.m. sharp.
        `,
        options: [
            { letter: "A", text: "(A) will start" },
            { letter: "B", text: "(B) is going to start" },
            { letter: "C", text: "(C) starts" },
            { letter: "D", text: "(D) is starting" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Evento programado = 'going to'.",
            "Dica 2: Já está tudo organizado.",
            "Dica 3: 'Will' seria previsão, não plano concreto."
        ]
    },

    {
        id: "q32-willGoing",
        type: "mc",
        questionText: `
            “Do you want tea or coffee?” – “I think I ___ have tea, please.”
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) am going to" },
            { letter: "C", text: "(C) will be" },
            { letter: "D", text: "(D) am" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: Escolhas feitas na hora usam 'will'.",
            "Dica 2: Não houve planejamento prévio.",
            "Dica 3: 'Going to' seria uma decisão antecipada."
        ]
    },

    {
        id: "q33-willGoing",
        type: "mc",
        questionText: `
            That car is speeding! It ___ crash into the barrier.
        `,
        options: [
            { letter: "A", text: "(A) will" },
            { letter: "B", text: "(B) is going to" },
            { letter: "C", text: "(C) might" },
            { letter: "D", text: "(D) was about to" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: A situação mostra evidência clara.",
            "Dica 2: 'Going to' é para eventos prestes a acontecer.",
            "Dica 3: 'Will' não é usado com evidência presente."
        ]
    },

    {
        id: "q34-willGoing",
        type: "mc",
        questionText: `
            My parents just called; they ___ arrive at 8 p.m. on the dot.
        `,
        options: [
            { letter: "A", text: "(A) will arrive" },
            { letter: "B", text: "(B) are going to arrive" },
            { letter: "C", text: "(C) arrive" },
            { letter: "D", text: "(D) will be arriving" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Eles já informaram o horário.",
            "Dica 2: 'Going to' = plano confirmado.",
            "Dica 3: 'Will' seria previsão sem confirmação."
        ]
    },

    {
        id: "q35-willGoing",
        type: "mc",
        questionText: `
            I’ve already made a resolution: next year I ___ learn Japanese.
        `,
        options: [
            { letter: "A", text: "(A) am going to" },
            { letter: "B", text: "(B) will" },
            { letter: "C", text: "(C) will be" },
            { letter: "D", text: "(D) am" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: Resoluções = decisões prévias.",
            "Dica 2: 'Going to' expressa intenção planejada.",
            "Dica 3: 'Will' seria para decisão no momento."
        ]
    },
    {
    id: "q36-willGoing",
    type: "mc",
    questionText: `
        <img src="images/fafa.jpg" alt="Garfield comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
        <br><br>
        Based on the comic strip, Jon tells Garfield he is going out with Liz. 
        Jon's use of the future expresses that he:
    `,
    options: [
        { letter: "A", text: "(A) made a spontaneous decision about going out." },
        { letter: "B", text: "(B) had already planned his date before talking to Garfield." },
        { letter: "C", text: "(C) is asking Garfield for permission to leave." },
        { letter: "D", text: "(D) wants Garfield to join him on the date." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: [
        "Dica 1: Jon já está arrumado, indicando um plano feito antes da fala.",
        "Dica 2: O futuro planejado normalmente usa 'going to' ou sinais de preparação prévia.",
        "Dica 3: 'Will' é usado para decisões espontâneas, o que não acontece na tirinha."
    ]
},
{
    id: "q37-willGoing",
    type: "mc",
    questionText: `
        <img src="images/fafa.jpg" alt="Garfield comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
        <br><br>
        In the last panel, Jon leaves and Garfield happily stays with the food.
        This suggests that:
    `,
    options: [
        { letter: "A", text: "(A) Jon will go to the party alone because Garfield isn’t interested." },
        { letter: "B", text: "(B) Garfield is going to enjoy staying home more than going out." },
        { letter: "C", text: "(C) Jon has many friends to meet later." },
        { letter: "D", text: "(D) Garfield will help Jon prepare for the evening." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: [
        "Dica 1: Garfield abraça a comida e demonstra felicidade em ficar em casa.",
        "Dica 2: 'Going to' indica previsão baseada em evidência visível.",
        "Dica 3: Garfield claramente prefere ficar em casa em vez de acompanhar Jon."
    ]
},
{
    id: "q38-willGoing",
    type: "mc",
    questionText: `
        <img src="images/papa.png" alt="Garfield comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
        <br><br>
        In the sentence “I’ll be sleepy later”, which type of future should be used and why?
    `,
    options: [
        { letter: "A", text: "(A) 'Will', because Jon is making a spontaneous prediction about the future." },
        { letter: "B", text: "(B) 'Going to', because Jon planned his nap a long time ago." },
        { letter: "C", text: "(C) Present continuous, because the future action is a fixed arrangement." },
        { letter: "D", text: "(D) 'Will', because the action is happening right now." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: [
        "Dica 1: 'Will' é usado para previsões feitas no momento da fala.",
        "Dica 2: Jon percebe que ficará com sono mais tarde e faz uma previsão espontânea.",
        "Dica 3: 'Going to' seria usado se houvesse um plano prévio — mas não há."
    ]
},
{
    id: "39-willGoing",
    type: "mc",
    questionText: `
        <img src="images/papa.jpg" alt="Garfield comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
        <br><br>
        According to the comic strip, Jon decides to take a nap because:
    `,
    options: [
        { letter: "A", text: "(A) Garfield told him to sleep." },
        { letter: "B", text: "(B) he thinks he is going to feel sleepy soon." },
        { letter: "C", text: "(C) he already slept during the morning." },
        { letter: "D", text: "(D) his computer recommended a nap." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: [
        "Dica 1: Jon diz 'I’d better take a preemptive nap'.",
        "Dica 2: 'Preemptive' significa fazer algo antes que aconteça.",
        "Dica 3: Ele acha que VAI ficar com sono em breve, então se prepara."
    ]
},
{
  id: "q26-willGoing",
  type: "mc",
  questionText: `
      <br>
      A tirinha ilustra duas visões contraditórias sobre o futuro: "The future will be great!" e "The future will be awful!". O auxiliar modal "Will", destacado nas frases, é essencial para formar o futuro em inglês.
      <br><br>
      Considerando o uso gramatical do "Will", analise as afirmações abaixo e assinale a opção que contém apenas a(s) afirmativa(s) correta(s):
      <br><br>
      <img src="images/dada.png" alt="Garfield comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
      <br>
      <br>
      I. É usado para expressar predições gerais sobre o futuro, geralmente baseadas em opiniões, crenças ou no que se pensa, como nas frases da tirinha.<br>
      II. É a forma correta para falar sobre planos e intenções pré-determinadas (por exemplo, planos de viagem já agendados).<br>
      III. É o auxiliar modal utilizado para expressar uma decisão feita no momento da fala (decisão espontânea).<br>
      IV. É a forma utilizada para fazer promessas ou oferecer ajuda.
  `,
  options: [
      { letter: "A", text: "(A)Apenas as afirmações I, III e IV estão corretas.", isCorrect: true, rationale: "O 'Will' é usado para predições/opiniões (I), decisões espontâneas (III) e promessas/ofertas (IV). A afirmação II é incorreta, pois planos pré-determinados usam 'Going to'." },
      { letter: "B", text: "(B)Apenas as afirmações I, II e IV estão corretas.", isCorrect: false, rationale: "A afirmação II é incorreta. Planos e intenções pré-determinadas usam 'Going to' ou Present Continuous." },
      { letter: "C", text: "(C)Apenas as afirmações I e III estão corretas.", isCorrect: false, rationale: "A afirmação IV também está correta." },
      { letter: "D", text: "(D)Apenas a afirmação IV está correta.", isCorrect: false, rationale: "As afirmações I e III também estão corretas." },
      { letter: "E", text: "(E) Todas estão falsas" }
      
  ],
  correctAnswer: "A",
  videoUrl: "",
  hints: [
      "Dica 1 (Q26): O uso de 'Will' é ideal para o que é espontâneo ou baseado em opinião. Planos já decididos e predições com evidência usam 'Going to'."
  ]
},
{
  id: "q27-willGoing",
  type: "mc",
  questionText: `
      Questão 27:
      <br>
      Na tirinha, Patty Pimentinha expressa um desejo imediato: "Will you buy me a balloon, Chuck?". Charlie Brown, por sua vez, age de forma espontânea. Se, antes de irem à feira, Charlie Brown já tivesse decidido que compraria balões para todos os seus amigos, a forma de expressar essa intenção seria diferente.
      <br><br>
      Considerando o contexto da tirinha e a nuances dos auxiliares de futuro "Will" e "Going to", qual das alternativas abaixo melhor descreve a intenção dos personagens e a gramática correta em situações similares?
      <br><br>
      <img src="images/dada.png" alt="Garfield comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
      <br>
      <br>
      I. A pergunta de Patty ("Will you buy...?") usa "Will" corretamente para fazer um pedido espontâneo, pois ela não havia planejado essa solicitação antes.<br>
      II. A ação de Charlie Brown de entregar o balão logo em seguida é um exemplo de decisão tomada no momento da fala, perfeitamente expressa com "Will" se ele tivesse dito: "I will buy you a balloon."<br>
      III. Se Charlie Brown tivesse um plano pré-existente de comprar balões, ele usaria "Going to", por exemplo: "I'm going to buy balloons for my friends today." (Estou indo comprar balões para meus amigos hoje).<br>
      IV. A frase "We're having fun, aren't we, Chuck?" (Estamos nos divertindo, não estamos, Chuck?) mostra o uso de "Will" para descrever um evento futuro.
  `,
  options: [
      { letter: "A", text: "Apenas I, II e III estão corretas.", isCorrect: true, rationale: "As afirmações I (pedido espontâneo com Will), II (decisão no momento com Will) e III (planos pré-existentes com Going to) estão corretas. A IV está errada pois usa Present Continuous, não Will." },
      { letter: "B", text: "Apenas I e II estão corretas.", isCorrect: false, rationale: "A afirmação III também está correta ao explicar o uso de 'Going to' para planos." },
      { letter: "C", text: "Apenas II, III e IV estão corretas.", isCorrect: false, rationale: "A afirmação IV está incorreta. 'We're having fun' é Present Continuous, não futuro com 'Will'." },
      { letter: "D", text: "Apenas I, III e IV estão corretas.", isCorrect: false, rationale: "A afirmação IV está incorreta. 'We're having fun' é Present Continuous, não futuro com 'Will'." }
  ],
  correctAnswer: "A",
  videoUrl: "",
  hints: [
      "Dica 1 (Q27): Pense na 'espontaneidade' versus 'planejamento prévio' para distinguir 'Will' de 'Going to'."
  ]
},
{
  id: "q2-willGoing",
  type: "mc",
  questionText: `
     
      <br>
      Na tirinha, o personagem em luto declara: "I'll never forget his last words." (Eu nunca esquecerei suas últimas palavras).
      <br><br>
      O uso do auxiliar modal "Will" na forma contraída "I'll" (I + Will) não se restringe à simples formação do futuro, mas veicula um sentido específico, essencial para a comunicação expressa.
      <br><br>
      Neste contexto, a escolha do "Will", em detrimento de "Going to", justifica-se pela sua função de:
      <br><br>
      <img src="images/fefe.png" alt="Garfield comic strip" style="max-width: 100%; height: auto; margin-top: 10px;">
  `,
  options: [
      { letter: "A", text: "(A) Expressar uma predição feita no momento da fala, baseada em evidências visíveis no presente, como o choro e a cena do cemitério.", isCorrect: false, rationale: "Predições baseadas em evidências visíveis geralmente usam 'Going to'. A lembrança é subjetiva." },
      { letter: "B", text: "(B)Indicar uma intenção ou plano rigorosamente estabelecido e agendado pelo falante antes da morte do amigo.", isCorrect: false, rationale: "Planos pré-estabelecidos usam 'Going to' ou Present Continuous." },
      { letter: "C", text: "(C)Assinalar uma promessa, ligada à opinião ou crença do falante sobre um estado futuro.", isCorrect: true, rationale: "O 'Will' é o auxiliar correto para promessas e intenções subjetivas, como um compromisso emocional de nunca esquecer." },
      { letter: "D", text: "(D)Descrever um fato futuro que ocorrerá inevitavelmente, independentemente da vontade ou emoção do personagem.", isCorrect: false, rationale: "Embora 'Will' possa indicar fatos, a intenção de NUNCA esquecer é totalmente dependente da vontade e emoção do personagem, não uma fatalidade externa." },
      { letter: "E", text: "(E)Reportar uma decisão espontânea tomada por um dos personagens, indicando uma ação imediata a ser realizada.", isCorrect: false, rationale: "Embora 'Will' seja usado para decisões espontâneas, a frase é uma promessa de estado mental futuro ('never forget'), não uma ação imediata." }
  ],
  correctAnswer: "C",
  videoUrl: "",
  hints: [
      "Dica 1 (Q29): Nas provas de inglês do ENEM, foque na função comunicativa do modal (promessa, predição, plano) e não apenas na regra isolada."
  ]
}



];
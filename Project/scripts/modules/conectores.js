const questionBank = [

    // --- BLOCO 1: QUESTÕES DA IMAGEM ADAPTADAS (AGORA COM 5 OPÇÕES) ---

    // Pergunta 1 (da imagem 1a)
    {
        id: "q1",
        type: "mc",
        questionText: `It was raining, ______ I took an umbrella.`,
        options: [
            { letter: "A", text: "(A) so" },
            { letter: "B", text: "(B) though" },
            { letter: "C", text: "(C) whether" },
            { letter: "D", text: "(D) and" },
            { letter: "E", text: "(E) but" } // 'but' é um conector comum de contraste
        ],
        correctAnswer: "A",
        videoUrl: "", // Pode adicionar um vídeo sobre "Connectors"
        hints: [ 
            "Dica 1: 'so' expressa uma consequência. (Estava chovendo, ENTÃO/POR ISSO eu peguei...)",
            "Dica 2: 'though' expressa um contraste. (EMBORA estivesse chovendo...)",
            "Dica 3: A segunda frase ('I took an umbrella') é o resultado/consequência da primeira."
        ]
    },

    // Pergunta 2 (da imagem 1b)
    {
        id: "q2",
        type: "mc",
        questionText: `I like swimming. I don't want to go to the pool today, ______.`,
        options: [
            { letter: "A", text: "(A) so" },
            { letter: "B", text: "(B) though" },
            { letter: "C", text: "(C) and" },
            { letter: "D", text: "(D) whether" },
            { letter: "E", text: "(E) because" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1: A primeira frase ('I like swimming') é uma ideia positiva.",
            "Dica 2: A segunda frase ('I don't want to go...') é uma ideia contrastante.",
            "Dica 3: Use 'though' (entretanto, no entanto) para contrastar duas ideias."
        ]
    },

    // Pergunta 3 (da imagem 1c)
    {
        id: "q3",
        type: "mc",
        questionText: `She needed some help in school, ______ she asked her friend.`,
        options: [
            { letter: "A", text: "(A) and" },
            { letter: "B", text: "(B) though" },
            { letter: "C", text: "(C) whether" },
            { letter: "D", text: "(D) but" },
            { letter: "E", text: "(E) so" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [ 
            "Dica 1: Qual é a relação entre 'precisar de ajuda' e 'pedir a um amigo'?",
            "Dica 2: Pedir ao amigo é a consequência de precisar de ajuda.",
            "Dica 3: Use 'so' para expressar o resultado ou a consequência de algo."
        ]
    },

    // Pergunta 4 (da imagem 1d)
    {
        id: "q4",
        type: "mc",
        questionText: `David loves basketball, ______ he plays really well.`,
        options: [
            { letter: "A", text: "(A) so" },
            { letter: "B", text: "(B) though" },
            { letter: "C", text: "(C) whether" },
            { letter: "D", text: "(D) and" },
            { letter: "E", text: "(E) because" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: A primeira frase é 'David loves basketball'.",
            "Dica 2: A segunda frase é 'he plays really well'.",
            "Dica 3: Use 'and' para adicionar uma ideia ou acrescentar informação. (Ele ama E joga bem)."
        ]
    },

    // Pergunta 5 (da imagem 1e)
    {
        id: "q5",
        type: "mc",
        questionText: `I would like to know ______ it's a true story.`,
        options: [
            { letter: "A", text: "(A) and" },
            { letter: "B", text: "(B) so" },
            { letter: "C", text: "(C) though" },
            { letter: "D", text: "(D) because" },
            { letter: "E", text: "(E) whether" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [ 
            "Dica 1: A frase expressa uma dúvida ('I would like to know...').",
            "Dica 2: A dúvida é 'SE é uma história verdadeira' (ou não).",
            "Dica 3: Use 'whether' para expressar dúvida ('se... ou não...')."
        ]
    },

    // Pergunta 6 (da imagem 1f)
    {
        id: "q6",
        type: "mc",
        questionText: `______ I liked the T-shirt, I decided not to buy it.`,
        options: [
            { letter: "A", text: "(A) So" },
            { letter: "B", text: "(B) And" },
            { letter: "C", text: "(C) Whether" },
            { letter: "D", text: "(D) Though" },
            { letter: "E", text: "(E) Because" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: A primeira ideia é 'I liked the T-shirt' (positiva).",
            "Dica 2: A segunda ideia é 'I decided not to buy it' (negativa/contraste).",
            "Dica 3: Use 'Though' (Embora) para contrastar duas ideias."
        ]
    },

    // --- BLOCO 2: NOVAS QUESTÕES (MESMO TÓPICO) ---

    // Pergunta 7 (Regra: and)
    {
        id: "q7",
        type: "mc",
        questionText: `He speaks English ______ French.`,
        options: [
            { letter: "A", text: "(A) so" },
            { letter: "B", text: "(B) though" },
            { letter: "C", text: "(C) and" },
            { letter: "D", text: "(D) whether" },
            { letter: "E", text: "(E) but" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [ 
            "Dica 1: A frase está listando duas habilidades.",
            "Dica 2: Use 'and' para acrescentar uma ideia ou item a outro.",
            "Dica 3: Ele fala uma coisa E outra."
        ]
    },

    // Pergunta 8 (Regra: so)
    {
        id: "q8",
        type: "mc",
        questionText: `I was hungry, ______ I made myself a sandwich.`,
        options: [
            { letter: "A", text: "(A) whether" },
            { letter: "B", text: "(B) and" },
            { letter: "C", text: "(C) though" },
            { letter: "D", text: "(D) so" },
            { letter: "E", text: "(E) or" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: 'Eu estava com fome.'",
            "Dica 2: 'Eu fiz um sanduíche.'",
            "Dica 3: Fazer o sanduíche foi a consequência de estar com fome. Use 'so'."
        ]
    },

    // Pergunta 9 (Regra: whether)
    {
        id: "q9",
        type: "mc",
        questionText: `I don't know ______ he went swimming (or not).`,
        options: [
            { letter: "A", text: "(A) so" },
            { letter: "B", text: "(B) whether" },
            { letter: "C", text: "(C) and" },
            { letter: "D", text: "(D) though" },
            { letter: "E", text: "(E) because" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1: A frase expressa dúvida ('I don't know...').",
            "Dica 2: A parte '(or not)' é uma grande pista.",
            "Dica 3: Use 'whether' para expressar dúvida entre duas possibilidades (se... ou não)."
        ]
    },
    
    // Pergunta 10 (Regra: though)
    {
        id: "q10",
        type: "mc",
        questionText: `______ it rained a lot, we enjoyed our school trip.`,
        options: [
            { letter: "A", text: "(A) Though" },
            { letter: "B", text: "(B) And" },
            { letter: "C", text: "(C) Whether" },
            { letter: "D", text: "(D) So" },
            { letter: "E", text: "(E) If" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1: A primeira ideia é 'rained a lot' (negativa).",
            "Dica 2: A segunda ideia é 'we enjoyed our trip' (positiva).",
            "Dica 3: Use 'Though' (Embora) para contrastar duas ideias opostas."
        ]
    },
    
    // Pergunta 11 (Mistura)
    {
        id: "q11",
        type: "mc",
        questionText: `He is rich ______ famous, ______ he is not happy.`,
        options: [
            { letter: "A", text: "(A) so / whether" },
            { letter: "B", text: "(B) and / though" },
            { letter: "C", text: "(C) though / so" },
            { letter: "D", text: "(D) whether / and" },
            { letter: "E", text: "(E) and / so" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1: A primeira parte 'rich ______ famous' está acrescentando ideias. Use 'and'.",
            "Dica 2: A segunda parte '...famous, ______ he is not happy' está contrastando ideias.",
            "Dica 3: A opção 'but' não está disponível, então use 'though' para o contraste."
        ]
    },

    // Pergunta 12 (Mistura)
    {
        id: "q12",
        type: "mc",
        questionText: `She studied hard, ______ she passed the test.`,
        options: [
            { letter: "A", text: "(A) though" },
            { letter: "B", text: "(B) whether" },
            { letter: "C", text: "(C) and" },
            { letter: "D", text: "(D) so" },
            { letter: "E", text: "(E) or" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: 'She studied hard' (Ela estudou muito) é a causa.",
            "Dica 2: 'she passed the test' (ela passou na prova) é o resultado/consequência.",
            "Dica 3: Use 'so' para mostrar o resultado de uma ação."
        ]
    },
    
    // Pergunta 13 (Mistura)
    {
        id: "q13",
        type: "mc",
        questionText: `He asked me ______ I wanted pizza ______ pasta.`,
        options: [
            { letter: "A", text: "(A) whether / or" },
            { letter: "B", text: "(B) though / and" },
            { letter: "C", text: "(C) so / or" },
            { letter: "D", text: "(D) whether / so" },
            { letter: "E", text: "(E) and / though" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1: A frase expressa uma dúvida ou uma escolha ('He asked me...').",
            "Dica 2: Use 'whether' para introduzir a dúvida ('se' eu queria).",
            "Dica 3: Use 'or' para apresentar a segunda opção da escolha."
        ]
    },

    // Pergunta 14 (Mistura)
    {
        id: "q14",
        type: "mc",
        questionText: `The car is old, ______ it runs well.`,
        options: [
            { letter: "A", text: "(A) so" },
            { letter: "B", text: "(B) and" },
            { letter: "C", text: "(C) whether" },
            { letter: "D", text: "(D) though" },
            { letter: "E", text: "(E) because" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: 'The car is old' (O carro é velho) - ideia 1.",
            "Dica 2: 'it runs well' (ele funciona bem) - ideia 2.",
            "Dica 3: As ideias são opostas/contrastantes. Use 'though'."
        ]
    },

    // Pergunta 15 (Mistura)
    {
        id: "q15",
        type: "mc",
        questionText: `We were tired ______ we continued walking.`,
        options: [
            { letter: "A", text: "(A) though" },
            { letter: "B", text: "(B) so" },
            { letter: "C", text: "(C) and" },
            { letter: "D", text: "(D) whether" },
            { letter: "E", text: "(E) but" } // 'but' e 'though' são similares aqui.
        ],
        correctAnswer: "A", // Aceitaria "E" também, mas "though" está no capítulo.
        videoUrl: "",
        hints: [ 
            "Dica 1: 'We were tired' (Estávamos cansados) - ideia 1.",
            "Dica 2: 'we continued walking' (nós continuamos andando) - ideia 2.",
            "Dica 3: As ideias são contrastantes. Use 'though' (embora) ou 'but' (mas)."
        ]
    },


    // --- BLOCO 3: QUESTÕES PLACEHOLDER (PARA VOCÊ EDITAR) ---

    // Pergunta 16 (Placeholder - Imagem)
    {
        id: "q16",
        type: "mc",
        questionText: `
            
            <img src="images/conec.png" alt="Comic" loading="lazy" style="width: 280px; height: 180px;">
            <br><br>
            Qual pavavra expressa contraste?
        `,
        options: [
            { letter: "A", text: "(A) Opção A" },
            { letter: "B", text: "(B) Opção B" },
            { letter: "C", text: "(C) Opção C" },
            { letter: "D", text: "(D) Opção D" },
            { letter: "E", text: "(E) Opção E" }
        ],
        correctAnswer: "A", // Mude a resposta correta
        videoUrl: "",
        hints: [ 
            "Dica 1: Esta é uma questão placeholder.",
            "Dica 2: Lembre-se de editar esta questão.",
            "Dica 3: Você pode trocar a imagem e o texto."
        ]
    },
    
    // Pergunta 17 (Placeholder - Fill-verb)
    {
        id: "q17_fill_verb",
        type: "fill-verb",
        questionText: "Read and choose the correct connector.",
        lines: [
            { text: "(A) I was late, ... I missed the bus.", verbs: ["so", "though"] },
            { text: "(B) He studied a lot, ... he failed the exam.", verbs: ["so", "though"] },
            { text: "(C) I don't know ... he is coming or not.", verbs: ["whether", "and"] }
        ],
        correctAnswer: ["so", "though", "whether"],
        videoUrl: "",
        hints: [ 
            "Dica 1: 'so' = consequência.",
            "Dica 2: 'though' = contraste.",
            "Dica 3: 'whether' = dúvida / 'se'."
        ]
    },

    // Pergunta 18 (Placeholder - Imagem)
     {
        id: "q18", 
        type: "mc",
        questionText: `
            
            <img src="images/rg.jpg" alt="Comic" loading="lazy" style="width: 280px; height: 180px;">
            <br><br>
            [Edite o texto da pergunta da imagem aqui]
        `,
        options: [
            { letter: "A", text: "(A) Opção A" },
            { letter: "B", text: "(B) Opção B" },
            { letter: "C", text: "(C) Opção C" },
            { letter: "D", text: "(D) Opção D" },
            { letter: "E", text: "(E) Opção E" }
        ],
        correctAnswer: "D", // Mude a resposta correta
        videoUrl: "",
        hints: [ 
            "Dica 1: Esta é uma questão placeholder.",
            "Dica 2: Lembre-se de editar esta questão.",
            "Dica 3: Você pode trocar a imagem e o texto."
        ]
    },

    // Pergunta 19 (Placeholder - MC Simples)
    {
        id: "q19_placeholder_mc",
        type: "mc",
        questionText: "(PLACEHOLDER - EDITE DEPOIS) [Edite o texto da pergunta aqui]",
        options: [
            { letter: "A", text: "(A) Opção A" },
            { letter: "B", text: "(B) Opção B" },
            { letter: "C", text: "(C) Opção C" },
            { letter: "D", text: "(D) Opção D" },
            { letter: "E", text: "(E) Opção E" }
        ],
        correctAnswer: "B", // Mude a resposta correta
        videoUrl: "",
        hints: [ 
            "Dica 1: Esta é uma questão placeholder.",
            "Dica 2: Lembre-se de editar esta questão.",
            "Dica 3: Troque pelo novo conteúdo."
        ]
    },

    // Pergunta 20 (Placeholder - MC Simples)
    {
        id: "q20_placeholder_mc2",
        type: "mc",
        questionText: "(PLACEHOLDER - EDITE DEPOIS) [Edite o texto da pergunta aqui]",
        options: [
            { letter: "A", text: "(A) Opção A" },
            { letter: "B", text: "(B) Opção B" },
            { letter: "C", text: "(C) Opção C" },
            { letter: "D", text: "(D) Opção D" },
            { letter: "E", text: "(E) Opção E" }
        ],
        correctAnswer: "B", // Mude a resposta correta
        videoUrl: "",
        hints: [ 
            "Dica 1: Esta é uma questão placeholder.",
            "Dica 2: Lembre-se de editar esta questão.",
            "Dica 3: Troque pelo novo conteúdo."
        ]
    }
];
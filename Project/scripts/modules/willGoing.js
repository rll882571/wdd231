const questionBank = [

    // --- BLOCO 1: QUESTÕES ADAPTADAS (AGORA COM 5 OPÇÕES) ---

    // Pergunta 1 
    {
        id: "q1",
        type: "mc",
        questionText: `
            A: Why are you buying sugar, eggs, and butter? <br>
            B: Because I ______ a cake.
        `,
        options: [
            { letter: "A", text: "(A) will bake" },
            { letter: "B", text: "(B) am going to bake" },
            { letter: "C", text: "(C) am baking" }, 
            { letter: "D", text: "(D) will be bake" },
            { letter: "E", text: "(E) baked" }
        ],
        correctAnswer: "B",
        videoUrl: "", 
        hints: [ 
            "Dica 1: 'Will' é para decisões tomadas no momento da fala.",
            "Dica 2: 'Be going to' é para planos feitos ANTES do momento da fala.",
            "Dica 3: Comprar ingredientes mostra que isso foi um plano, não uma decisão do momento."
        ]
    },

    // Pergunta 2
    {
        id: "q2",
        type: "mc",
        questionText: `
            A: I'm so sleepy and I still have some work to do. <br>
            B: Don't worry, I ______ you a cup of coffee.
        `,
        options: [
            { letter: "A", text: "(A) will get" },
            { letter: "B", text: "(B) am going to get" },
            { letter: "C", text: "(C) am getting" },
            { letter: "D", text: "(D) getting" },
            { letter: "E", text: "(E) will be get" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1: 'Be going to' é para planos (você não sabia que a pessoa estava com sono).",
            "Dica 2: 'Will' é usado para uma oferta ou decisão feita no momento, como uma reação.",
            "Dica 3: Oferecer café é uma reação/decisão do momento."
        ]
    },

    // Pergunta 3
    {
        id: "q3",
        type: "mc",
        questionText: `
            A: I can't hear the TV! <br>
            B: OK, I ______ it up.
        `,
        options: [
            { letter: "A", text: "(A) am going to turn" },
            { letter: "B", text: "(B) am turning" },
            { letter: "C", text: "(C) turned" },
            { letter: "D", text: "(D) will turn" },
            { letter: "E", text: "(E) will turning" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pessoa está reagindo a um problema ('I can't hear!').",
            "Dica 2: Use 'Will' para decisões rápidas tomadas no momento da fala.",
            "Dica 3: Isso não foi um plano; foi uma reação."
        ]
    },

    // Pergunta 4
    {
        id: "q4",
        type: "mc",
        questionText: `
            A: Are you looking forward to your next trip to South America? <br>
            B: Yes, I am! It's all set! I ______ Chile, Uruguay, and Argentina.
        `,
        options: [
            { letter: "A", text: "(A) will visit" },
            { letter: "B", text: "(B) visit" },
            { letter: "C", text: "(C) visited" },
            { letter: "D", text: "(D) am going to visit" },
            { letter: "E", text: "(E) will visiting" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: A expressão 'It's all set!' (Está tudo certo/combinado!) é a chave.",
            "Dica 2: Use 'Be going to' para planos que já foram elaborados ou decididos.",
            "Dica 3: Como já está 'tudo certo', é um plano, não uma decisão do momento."
        ]
    },

    // Pergunta 5
    {
        id: "q5",
        type: "mc",
        questionText: `
            A: What are your plans after graduation? <br> 
            B: After I graduate, I ______ Medical School and become a doctor.
        `,
        options: [
            { letter: "A", text: "(A) will attend" },
            { letter: "B", text: "(B) am going to attend" },
            { letter: "C", text: "(C) attending" },
            { letter: "D", text: "(D) attend" },
            { letter: "E", text: "(E) will be attend" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pergunta é sobre 'plans' (planos).",
            "Dica 2: Use 'Be going to' para falar sobre planos futuros e intenções.",
            "Dica 3: 'Will' seria usado para uma opinião (I think I'll...) ou uma decisão do momento."
        ]
    },
    
    // Pergunta 6
    {
        id: "q6",
        type: "mc",
        questionText: `
            A: ______ they going to do it by themselves? <br>
            B: No, they ______.
        `,
        options: [
            { letter: "A", text: "(A) Are / aren't" },
            { letter: "B", text: "(B) Will / won't" },
            { letter: "C", text: "(C) Are / won't" },
            { letter: "D", text: "(D) Will / aren't" },
            { letter: "E", text: "(E) Do / don't" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pergunta usa 'going to'.",
            "Dica 2: Perguntas com 'be going to' usam o verbo 'to be' (am, is, are) como auxiliar.",
            "Dica 3: A resposta curta deve usar o mesmo auxiliar da pergunta (Are...? / ...aren't)."
        ]
    },

    // Pergunta 7
    {
        id: "q7",
        type: "mc",
        questionText: `
            A: ______ he go alone? <br>
            B: Yes, he ______.
        `,
        options: [
            { letter: "A", text: "(A) Is / is" },
            { letter: "B", text: "(B) Will / will" },
            { letter: "C", text: "(C) Is / will" },
            { letter: "D", text: "(D) Will / is" },
            { letter: "E", text: "(E) Does / does" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1: A resposta é '...he will'.",
            "Dica 2: A resposta curta (Yes, he will) mostra qual auxiliar foi usado na pergunta.",
            "Dica 3: 'Is' seria usado com 'going to' (Is he going to...?)."
        ]
    },

    // Pergunta 8
    {
        id: "q8",
        type: "mc",
        questionText: `
            A: ______ you going to travel with Sam? <br>
            B: Yes, I ______.
        `,
        options: [
            { letter: "A", text: "(A) Will / will" },
            { letter: "B", text: "(B) Are / will" },
            { letter: "C", text: "(C) Do / do" },
            { letter: "D", text: "(D) Are / am" },
            { letter: "E", text: "(E) Will / am" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pergunta usa 'going to'. O verbo 'to be' para 'you' é 'are'.",
            "Dica 2: A resposta curta para 'Are you...?' é 'Yes, I am' ou 'No, I'm not'.",
            "Dica 3: A pergunta e a resposta devem usar a mesma estrutura (nesse caso, 'be going to')."
        ]
    },
    
    // Pergunta 9
    {
        id: "q9",
        type: "mc",
        questionText: `Look at those dark clouds! It ______ soon.`,
        options: [
            { letter: "A", text: "(A) will rain" },
            { letter: "B", text: "(B) rains" },
            { letter: "C", text: "(C) is raining" },
            { letter: "D", text: "(D) rained" },
            { letter: "E", text: "(E) is going to rain" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pessoa está vendo 'dark clouds' (nuvens escuras). Isso é uma evidência.",
            "Dica 2: Use 'Be going to' para previsões baseadas em evidências/dados concretos.",
            "Dica 3: 'Will rain' seria uma opinião (ex: I think it will rain)."
        ]
    },

    // Pergunta 10
    {
        id: "q10",
        type: "mc",
        questionText: `Don't worry, in 20 years, technology ______ even more advanced.`,
        options: [
            { letter: "A", text: "(A) is going to be" },
            { letter: "B", text: "(B) is" },
            { letter: "C", text: "(C) will be" },
            { letter: "D", text: "(D) was" },
            { letter: "E", text: "(E) going to be" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [ 
            "Dica 1: Isso é uma previsão geral sobre o futuro, um fato esperado.",
            "Dica 2: Use 'Will' para falar sobre fatos conhecidos ou gerais sobre o futuro.",
            "Dica 3: 'Is going to be' implicaria uma evidência presente, mas isso é uma previsão distante."
        ]
    },

    // Pergunta 11
    {
        id: "q11",
        type: "mc",
        questionText: `I promise! I ______ your secret to anyone.`,
        options: [
            { letter: "A", text: "(A) am not going to tell" },
            { letter: "B", text: "(B) won't tell" },
            { letter: "C", text: "(C) don't tell" },
            { letter: "D", text: "(D) didn't tell" },
            { letter: "E", text: "(E) am not telling" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [ 
            "Dica 1: A frase começa com 'I promise...' (Eu prometo...).",
            "Dica 2: Use 'Will' (ou a negativa 'won't') para fazer promessas.",
            "Dica 3: 'Am not going to tell' é usado para um plano/intenção, não uma promessa."
        ]
    },

    // Pergunta 12
    {
        id: "q12",
        type: "mc",
        questionText: `I think our team ______ the championship this year.`,
        options: [
            { letter: "A", text: "(A) is winning" },
            { letter: "B", text: "(B) wins" },
            { letter: "C", text: "(C) won" },
            { letter: "D", text: "(D) is going to win" },
            { letter: "E", text: "(E) will win" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [ 
            "Dica 1: A frase começa com 'I think...' (Eu acho...).",
            "Dica 2: Use 'Will' para previsões baseadas em opinião pessoal.",
            "Dica 3: 'Is going to win' implicaria uma evidência forte (ex: 'They are playing perfectly!')."
        ]
    },
    
    // Pergunta 13
    {
        id: "q13",
        type: "mc",
        questionText: `He saved money all year. He ______ a new car next month.`,
        options: [
            { letter: "A", text: "(A) will buy" },
            { letter: "B", text: "(B) buys" },
            { letter: "C", text: "(C) is going to buy" },
            { letter: "D", text: "(D) bought" },
            { letter: "E", text: "(E) will buying" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [ 
            "Dica 1: A frase 'He saved money all year' (Ele economizou o ano todo) mostra preparação.",
            "Dica 2: Use 'Be going to' para planos elaborados antes do momento da fala.",
            "Dica 3: 'Will buy' seria uma decisão repentina."
        ]
    },

    // Pergunta 14
    {
        id: "q14",
        type: "mc",
        questionText: `A: The phone is ringing! B: I ______ it!`,
        options: [
            { letter: "A", text: "(A) am getting" },
            { letter: "B", text: "(B) am going to get" },
            { letter: "C", text: "(C) got" },
            { letter: "D", text: "(D) will get" },
            { letter: "E", text: "(E) get" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pessoa (B) está reagindo ao fato do telefone estar tocando.",
            "Dica 2: Use 'Will' para decisões tomadas no momento da fala (decisões rápidas).",
            "Dica 3: 'Am going to get' implicaria que a pessoa já sabia que ia atender (um plano)."
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
        id: "q16",
        type: "mc",
        questionText: `A: It's hot in here. B: You're right. I ______ the window.`,
        options: [
            { letter: "A", text: "(A) am opening" },
            { letter: "B", text: "(B) am going to open" },
            { letter: "C", text: "(C) will open" },
            { letter: "D", text: "(D) open" },
            { letter: "E", text: "(E) opened" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [ 
            "Dica 1: A pessoa está reagindo a um fato ('It's hot').",
            "Dica 2: Use 'Will' para decisões rápidas e voluntárias feitas no momento.",
            "Dica 3: 'Am going to open' significaria que ela já tinha o plano de abrir a janela."
        ]
    },


    // --- BLOCO 2: PLACEHOLDERS (COM QUESTÃO 18 CORRIGIDA) ---

    // Pergunta 17 (Placeholder - Imagem)
    {
        id: "q17_placeholder_img",
        type: "mc",
        questionText: `
            (PLACEHOLDER - EDITE DEPOIS)
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
        correctAnswer: "A", // Mude a resposta correta
        videoUrl: "",
        hints: [ 
            "Dica 1: Esta é uma questão placeholder.",
            "Dica 2: Lembre-se de editar esta questão.",
            "Dica 3: Você pode trocar a imagem e o texto."
        ]
    },
    
    // --- MUDANÇA AQUI ---
    // Pergunta 18 (Adaptada para o formato "fill-verb" com a nova gramática)
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

    // Pergunta 19 (Placeholder - Imagem)
     {
        id: "q19_placeholder_img2", 
        type: "mc",
        questionText: `
            (PLACEHOLDER - EDITE DEPOIS)
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

    // Pergunta 20 (Placeholder - MC Simples)
    {
        id: "q20_placeholder_mc",
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

    // Pergunta 21 (Placeholder - MC Simples)
    {
        id: "q21_placeholder_mc2",
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
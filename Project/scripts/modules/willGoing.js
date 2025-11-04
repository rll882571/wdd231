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
            What is the best way to complete the sentence? <br>
            I ______ for my exames tomorrow.
        `,
        options: [
            { letter: "A", text: "(A) am going to study" },
            { letter: "B", text: "(B) is going to study" },
            { letter: "C", text: "(C) are going to study" },
            { letter: "D", text: "(D) am going study" },
            { letter: "E", text: "(E) am go to study" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [ 
            "Dica 1: Cada sujeito tem um to be",
            "Dica 2: is é para o sujeito he, she ou it",
            "Dica 3: Você consegue!"
        ]
    },

    
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
            What is the best way to complete the sentence? <br>
            They ______ their grandparents next month.
        `,
        options: [
             { letter: "A", text: "(A) am going to visit" },
            { letter: "B", text: "(B) is going to visit" },
            { letter: "C", text: "(C) are going to visit" },
            { letter: "D", text: "(D) am going visit" },
            { letter: "E", text: "(E) will to visit" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [ 
            "Dica 1: Presta atenção no sujeito",
            "Dica 2: 'They' pede o verbo 'to be' na forma 'are'",
            "Dica 3: is é para o sujeito he, she ou it"
        ]
    },

    // Pergunta 7
    {
        id: "q7",
        type: "mc",
        questionText: `
            What is the correct sntence?
        `,
        options: [
            { letter: "A", text: "(A) She will visiting her mother" }, 
            { letter: "B", text: "(B) I am going  travel next month" },
            { letter: "C", text: "(C) I think I am going to help you" },
            { letter: "D", text: "(D) You will played soccer" },
            { letter: "E", text: "(E) Neymar will probably go to USA" }
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
        id: "q19", 
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
}
];
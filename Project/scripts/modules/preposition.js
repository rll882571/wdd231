const questionBank = [

    // --- BLOCO 1: Questões Focadas em 'IN' vs 'AT' (Locais Gerais vs. Pontos/Atividades) ---

    // Pergunta 1: Local de Residência (Ponto)
    {
        id: "q1-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            A: Where's John?
            B: He's not here. I think he's already ______ home.
        `,
        options: [
            { letter: "A", text: "(A) in" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) at" }, 
            { letter: "D", text: "(D) into" },
            { letter: "E", text: "(E) by" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Home' geralmente usa 'at' (at home).",
            "Dica 2: 'At' é usado para atividades ou localizações gerais/pontos (como trabalho, casa, faculdade).",
            "Dica 3: Exceção: 'In the house' (dentro da casa), mas 'at home' (local geral)."
        ]
    },

    // Pergunta 2: Local de Trabalho (Atividade/Ponto)
    {
        id: "q2-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            She is very busy. She is still ______ work.
        `,
        options: [
            { letter: "A", text: "(A) in" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) at" }, 
            { letter: "D", text: "(D) over" },
            { letter: "E", text: "(E) near" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Work' geralmente usa 'at' (at work).",
            "Dica 2: 'At' é usado para descrever o estado de estar engajado em uma atividade ou local como um ponto (at school, at university).",
            "Dica 3: 'In' seria usado para o prédio: 'in the office'."
        ]
    },

    // Pergunta 3: Local Fechado/Espaço Limitado (Área)
    {
        id: "q3-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            It's raining outside. The cat is sleeping ______ the box.
        `,
        options: [
            { letter: "A", text: "(A) at" },
            { letter: "B", text: "(B) in" },
            { letter: "C", text: "(C) on" }, 
            { letter: "D", text: "(D) by" },
            { letter: "E", text: "(E) out" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: 'Box' (caixa) é um recipiente, um espaço fechado.",
            "Dica 2: 'In' é usado para locais fechados ou áreas (in the city, in the world).",
            "Dica 3: Pense em 'dentro de' — é a função primária do 'in'."
        ]
    },

    // Pergunta 4: Grande Cidade/País (Área)
    {
        id: "q4-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            The largest city ______ the world is Tokyo.
        `,
        options: [
            { letter: "A", text: "(A) at" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) in" }, 
            { letter: "D", text: "(D) into" },
            { letter: "E", text: "(E) by" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'World' (mundo) é uma área muito grande.",
            "Dica 2: Usamos 'in' para cidades, países, e grandes áreas geográficas.",
            "Dica 3: 'At' seria para um ponto específico no mapa, não para a área geral."
        ]
    },

    // Pergunta 5: Evento/Encontro Social (Ponto/Atividade)
    {
        id: "q5-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            There weren't many people ______ the party last night.
        `,
        options: [
            { letter: "A", text: "(A) in" },
            { letter: "B", text: "(B) inside" },
            { letter: "C", text: "(C) on" }, 
            { letter: "D", text: "(D) at" },
            { letter: "E", text: "(E) near" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: 'Party' (festa) é um evento/encontro social. O local é visto como um ponto de referência.",
            "Dica 2: 'At' é usado para eventos: 'at a concert', 'at a football match', 'at a party'.",
            "Dica 3: Poderia ser 'in the room where the party was', mas 'at the party' é o mais comum."
        ]
    },

    // --- BLOCO 2: Questões Focadas em 'ON' (Superfície, Transporte Público, Andares) ---

    // Pergunta 6: Superfície
    {
        id: "q6-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            I put my phone ______ the table before leaving.
        `,
        options: [
            { letter: "A", text: "(A) in" },
            { letter: "B", text: "(B) at" },
            { letter: "C", text: "(C) on" }, 
            { letter: "D", text: "(D) to" },
            { letter: "E", text: "(E) inside" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Table' (mesa) é uma superfície.",
            "Dica 2: 'On' é usado quando algo toca uma superfície (on the floor, on the wall).",
            "Dica 3: Pense em 'sobre a mesa'."
        ]
    },

    // Pergunta 7: Transporte Público (com exceção de carro/táxi)
    {
        id: "q7-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            We were late because the train we were ______ broke down.
        `,
        options: [
            { letter: "A", text: "(A) in" },
            { letter: "B", text: "(B) at" },
            { letter: "C", text: "(C) on" }, 
            { letter: "D", text: "(D) over" },
            { letter: "E", text: "(E) inside" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Train' (trem) é um meio de transporte público grande onde você pode caminhar.",
            "Dica 2: Usamos 'on' para transportes públicos (on a bus, on a plane, on a train).",
            "Dica 3: 'In' seria usado apenas para 'car' ou 'taxi'."
        ]
    },

    // Pergunta 8: Andares de Edifícios
    {
        id: "q8-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            My apartment is ______ the second floor of the building.
        `,
        options: [
            { letter: "A", text: "(A) at" },
            { letter: "B", text: "(B) in" },
            { letter: "C", text: "(C) on" }, 
            { letter: "D", text: "(D) above" },
            { letter: "E", text: "(E) under" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Second floor' (segundo andar) é uma superfície/nível.",
            "Dica 2: Usamos 'on' para andares: 'on the ground floor', 'on the first floor', etc.",
            "Dica 3: Não confunda com 'in the building'."
        ]
    },

    // --- BLOCO 3: Casos Específicos e Mistos ---

    // Pergunta 9: Veículo Pequeno/Privado
    {
        id: "q9-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            She read a book ______ the car while waiting for her friend.
        `,
        options: [
            { letter: "A", text: "(A) at" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) in" }, 
            { letter: "D", text: "(D) by" },
            { letter: "E", text: "(E) into" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Car' (carro) é um veículo pequeno onde você se senta.",
            "Dica 2: Use 'in' para carro e táxi (in a car, in a taxi).",
            "Dica 3: Você não pode andar (walk) livremente em um carro."
        ]
    },

    // Pergunta 10: Ponto de Referência (Esquina)
    {
        id: "q10-prepositions",
        type: "mc",
        questionText: `
            Complete a frase:
            Let's meet ______ the corner of the street at 8 o'clock.
        `,
        options: [
            { letter: "A", text: "(A) in" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) at" }, 
            { letter: "D", text: "(D) over" },
            { letter: "E", text: "(E) inside" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Corner' (esquina) é um ponto específico.",
            "Dica 2: 'At' é usado para pontos exatos e endereços (at the door, at the station, at the corner).",
            "Dica 3: Exceção: em Inglês Britânico, 'on the corner' também é comum."
        ]
    },
    {
        id: "q11-preps",
        type: "fill-verb", 
        questionText: "Read and choose the correct preposition (IN, AT, or ON) to complete each sentence.",
        lines: [
            { text: "(A) We are going to meet ... the station.", verbs: ["at", "in"] },
            { text: "(B) The weather is terrible ... the world today.", verbs: ["on", "in"] },
            { text: "(C) I usually listen to the news ... the radio.", verbs: ["on", "at"] },
            { text: "(D) Are you still ... work, or are you ... home?", verbs: ["at", "in"] },
            { text: "(E) My favorite painting is ... the wall.", verbs: ["in", "on"] }
        ],
        correctAnswer: ["at", "in", "on", "at", "at", "on"], // Múltiplas respostas na D
        videoUrl: "https://www.youtube.com/embed/Q4q4U4e68eQ" 
    },

    // Pergunta 12: Foco em Transporte e Andares
    {
        id: "q12-preps",
        type: "fill-verb", 
        questionText: "Read and choose the correct preposition (IN, AT, or ON) for each means of transport or level.",
        lines: [
            { text: "(A) The bus leaves soon; we need to get ... the bus now.", verbs: ["in", "on"] },
            { text: "(B) She was stuck ... a taxi for two hours due to traffic.", verbs: ["in", "on"] },
            { text: "(C) The meeting room is ... the third floor.", verbs: ["at", "on"] },
            { text: "(D) Did you see the sign ... the door?", verbs: ["in", "on"] },
            { text: "(E) You can find a good map ... the back of the book.", verbs: ["in", "on"] }
        ],
        correctAnswer: ["on", "in", "on", "on", "in"],
        videoUrl: "https://www.youtube.com/embed/2u3j-eL635M" 
    },

    // Pergunta 13: Foco em Eventos e Pontos Específicos
    {
        id: "q13-preps",
        type: "fill-verb", 
        questionText: "Read and choose the correct preposition (IN, AT, or ON) considering the context of events and places.",
        lines: [
            { text: "(A) There was a beautiful speech ... the wedding.", verbs: ["at", "in"] },
            { text: "(B) The kids are playing ... the garden.", verbs: ["at", "in"] },
            { text: "(C) The movie is already ... the cinema (theatre).", verbs: ["at", "on"] },
            { text: "(D) Let's meet ... the corner of Park Street.", verbs: ["at", "in"] },
            { text: "(E) The keys are ... my car.", verbs: ["on", "in"] }
        ],
        correctAnswer: ["at", "in", "at", "at", "in"],
        videoUrl: "https://www.youtube.com/embed/Rk0g207G3A0" 
    },
    {
        id: "q14",
        type: "mc",
        questionText: `
            Sobre o uso das preposições IN, AT e ON, analise as afirmações:
            <br><br>
            I. IN é a preposição correta para continentes, países, e grandes cidades (ex: *in London*).<br>
            II. AT é usado para endereços específicos e pontos de encontro (ex: *at the corner*).<br>
            III. ON é a preposição usada para transportes pessoais pequenos, como carro e táxi (ex: *on a car*).<br>
            IV. Usamos IN para indicar que a pessoa está participando de um evento social (ex: *in the party*).
        `,
        options: [
            { letter: "A", text: "(A) I e II estão corretas." },
            { letter: "B", text: "(B) I, II e IV estão corretas." },
            { letter: "C", text: "(C) Apenas a II está correta." },
            { letter: "D", text: "(D) II, III e IV estão corretas." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica: A afirmação III e IV contêm erros comuns. Lembre-se da regra para veículos privados e eventos/atividades."
        ]
    },

    // Pergunta 15: Foco no Uso do ON
    {
        id: "q15",
        type: "mc",
        questionText: `
            Qual opção lista APENAS as aplicações corretas para a preposição ON?
            <br><br>
            I. Para indicar que algo está em uma superfície de contato (ex: *on the table*).<br>
            II. Para descrever andares de edifícios (ex: *on the first floor*).<br>
            III. Para mídias eletrônicas (ex: *on TV, on the internet*).<br>
            IV. Para veículos onde é possível ficar em pé ou andar (ex: *on a train, on a bus*).
        `,
        options: [
            { letter: "A", text: "(A) I e IV." },
            { letter: "B", text: "(B) I, II e III." },
            { letter: "C", text: "(C) I, II, III e IV." },
            { letter: "D", text: "(D) Apenas II e IV." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica: Pense no ON como a preposição da 'superfície', seja ela física (chão, mesa) ou abstrata (mídia, andar)."
        ]
    },

    // Pergunta 16: Foco no Uso do IN
    {
        id: "q16",
        type: "mc",
        questionText: `
            Em relação ao uso da preposição IN, quais afirmações estão corretas?
            <br><br>
            I. É usada para espaços delimitados ou fechados, como caixas, quartos, ou jardins (ex: *in the garden*).<br>
            II. É usada para países, continentes e grandes áreas geográficas (ex: *in the world*).<br>
            III. É usada para veículos privados, como carro e táxi (ex: *in a taxi*).<br>
            IV. É usada para a mídia impressa, como jornais e revistas (ex: *in the newspaper*).
        `,
        options: [
            { letter: "A", text: "(A) Apenas I, II e III." },
            { letter: "B", text: "(B) I, II, III e IV." },
            { letter: "C", text: "(C) Apenas III e IV." },
            { letter: "D", text: "(D) Apenas I e II." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica: A preposição IN é a mais abrangente, cobrindo grandes áreas, recipientes e veículos pequenos."
        ]
    },

    // Pergunta 17: Foco no Uso do AT e Exceções
    {
        id: "q17",
        type: "mc",
        questionText: `
            Assinale a opção que contém a(s) afirmação(ões) correta(s) sobre a preposição AT:
            <br><br>
            I. É usada para atividades e locais de propósito (ex: *at school, at work*).<br>
            II. A expressão correta para local de residência é *at home*.<br>
            III. É usada para locais de transporte vistos como pontos de referência (ex: *at the airport*).<br>
            IV. É usada para eventos e reuniões sociais (ex: *at the concert, at a wedding*).
        `,
        options: [
            { letter: "A", text: "(A) Apenas I, II e III." },
            { letter: "B", text: "(B) Apenas II, III e IV." },
            { letter: "C", text: "(C) I, II, III e IV." },
            { letter: "D", text: "(D) Apenas I e IV." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica: O AT é o 'ponto' — seja um ponto no mapa, um ponto de encontro, ou um ponto de atividade."
        ]
    },
    {
        id: "q18",
        type: "mc",
        questionText: `
            Analyze the following statements regarding the prepositions AT and IN. Which option contains the INCORRECT statement(s) and provides the best reason why?
            <br><br>
            I. The correct phrase for expressing location at a residence is "in home".<br>
            II. We use AT for locations viewed as points or specific activities (e.g., *at the doctor's, at the cinema*).<br>
            III. We use IN for large geographic areas (e.g., *in Brazil, in Asia*).<br>
            IV. The correct preposition for events and parties is IN (e.g., *They were in a wedding*).
        `,
        options: [
            { letter: "A", text: "(A) Only III is incorrect because AT must be used for countries." },
            { letter: "B", text: "(B) I and IV are incorrect. 'Home' should be AT and events should be AT." },
            { letter: "C", text: "(C) I and II are incorrect. The correct phrases are 'on home' and 'in the doctor's'." },
            { letter: "D", text: "(D) Only I is incorrect because the correct phrase is 'on home'." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint: Remember that 'home' and social events are typically treated as points or activities."
        ]
    },

    // Pergunta 19: Foco no ON (Surfaces and Media)
    {
        id: "q19",
        type: "mc",
        questionText: `
            Which statement about the preposition ON is FALSE?
            <br><br>
            I. ON is used for any surface of contact (e.g., *on the floor, on the ceiling*).<br>
            II. ON is the correct preposition for electronic media (e.g., *on the radio, on the internet*).<br>
            III. ON is used for vehicle types where you are confined to a seat and cannot walk (e.g., *on a car*).<br>
            IV. ON is always used when referring to a building level (e.g., *on the ground floor*).
        `,
        options: [
            { letter: "A", text: "(A) Statement II is false; we use IN for all types of media." },
            { letter: "B", text: "(B) Statement IV is false because floors are considered large areas and require IN." },
            { letter: "C", text: "(C) Statement III is false; confined vehicles like cars and taxis require IN." },
            { letter: "D", text: "(D) Statement I is false because 'ceiling' is an exception and requires 'at'." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint: The main distinction for transport is the ability to stand up and walk around."
        ]
    },

    // Pergunta 20: Foco no Contraste IN vs. ON vs. AT
    {
        id: "q20",
        type: "mc",
        questionText: `
            Which of the following example sentences uses the preposition INCORRECTLY?
            <br><br>
            I. "I will meet you AT the café on the corner."<br>
            II. "The article about the floods was published ON the newspaper."<br>
            III. "They are traveling IN a huge airplane."<br>
            IV. "Your keys are ON the table in the kitchen."
        `,
        options: [
            { letter: "A", text: "(A) Sentence I, because 'café' requires IN." },
            { letter: "B", text: "(B) Sentence II, because print media requires IN." },
            { letter: "C", text: "(C) Sentence III, because large public transport requires ON." },
            { letter: "D", text: "(D) Both II and III are incorrect, for the reasons mentioned above." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint: Remember the rules for large vs. small transport and for print media vs. electronic media."
        ]
    }
    
];
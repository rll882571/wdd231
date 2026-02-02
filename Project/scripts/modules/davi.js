const questionBank = [

    // --- BLOCO 1: QUESTÕES ADAPTADAS (AGORA COM 5 OPÇÕES) ---

    // Pergunta 1 
    {
        id: "q1",
        type: "mc",
        questionText: `
            <b>Vocabulary: Essential Question Words</b>
            <br><br>
            Nas provas de inglês é super importante saber dessas 7 palavras, sabendo elas você poderá ir melhor pois entenderá as perguntas mais facilmente. 
            <br><br>
            Question: Sobre o uso dessas palavras, o que cada uma significa corretamente?
        `,
        options: [
            { letter: "A", text: "(A) What (o que/qual), When (quando), Where (onde), How (como), Why (por que), Who (quem) e Which (qual - para escolha)." },
            { letter: "B", text: "(B) What (quem), When (onde), Where (por que), How (quando), Why (qual), Who (como) e Which (onde)." },
            { letter: "C", text: "(C) What (como), When (qual), Where (quem), How (onde), Why (quando), Who (por que) e Which (quem)." },
            { letter: "D", text: "(D) What (onde), When (por que), Where (como), How (quem), Why (onde), Who (quando) e Which (por que)." },
            { letter: "E", text: "(E) What (quando), When (como), Where (qual), How (por que), Why (quem), Who (onde) e Which (como)." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Hint 1: Lembre-se que 'Where' refere-se a lugar e 'When' refere-se a tempo.",
            "Hint 2: 'Who' é sempre usado para pessoas e 'Why' para razões/motivos."
        ]
    },
    {
        id: "q2",
        type: "mc",
        questionText: `
            <b>Vocabulary: Essential Question Words</b>
            <br><br>
            Nas provas de inglês é super importante saber dessas 7 palavras, sabendo elas você poderá ir melhor pois entenderá as perguntas mais facilmente. 
            <br><br>
            Question: Sobre o uso dessas palavras, o que cada uma significa corretamente?
        `,
        options: [
            { letter: "A", text: "(A) What (onde), When (por que), Where (como), How (quem), Why (onde), Who (quando) e Which (por que)." },
            { letter: "B", text: "(B) What (quem), When (onde), Where (por que), How (quando), Why (qual), Who (como) e Which (onde)." },
            { letter: "C", text: "(C) What (o que/qual), When (quando), Where (onde), How (como), Why (por que), Who (quem) e Which (qual - para escolha)." },
            { letter: "D", text: "(D) What (como), When (qual), Where (quem), How (onde), Why (quando), Who (por que) e Which (quem)." },
            { letter: "E", text: "(E) What (quando), When (como), Where (qual), How (por que), Why (quem), Who (onde) e Which (como)." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Lembre-se que 'Where' refere-se a lugar e 'When' refere-se a tempo.",
            "Hint 2: 'Who' é sempre usado para pessoas e 'Why' para razões/motivos."
        ]
    },

    // --- QUESTÃO 2b (GLOBAL POLITICS) ---
    {
        id: "q3",
        type: "mc",
        questionText: `
             Quando uma pergunta em inglês inicia com a palavra <b>"When"</b>, ela está direcionando sua busca para um tipo específico de informação no texto. 
            <br><br>
            Question: O que você deve procurar no texto para encontrar a resposta correta para uma pergunta iniciada com "When"?
        `,
        options: [
            { letter: "A", text: "(A) Datas, horários, anos ou períodos do dia." },
            { letter: "B", text: "(B) Locais, países, cidades ou nomes de ruas." },
            { letter: "C", text: "(C) Nomes de pessoas, cargos ou personagens." },
            { letter: "D", text: "(D) O motivo ou a razão de algo ter acontecido (explicações)." },
            { letter: "E", text: "(E) Quantidades, valores em dinheiro ou medidas." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Hint 1: 'When' em português significa 'Quando'.",
            "Hint 2: Pense em elementos que indicam tempo ou cronologia."
        ]
    },

    // --- QUESTÃO 5 (LATIN AMERICA OIL PRODUCTION) ---
    {
        id: "q4",
        type: "mc",
        questionText: `
            <b>Exam Strategy: Scanning the Text</b>
            <br><br>
            Dica de Prova: Se a pergunta do exame começa com <b>"Where"</b>, o examinador quer que você localize uma informação específica no texto.
            <br><br>
            Question: Ao ler uma pergunta que inicia com "Where", em quais elementos do texto você deve focar para encontrar a resposta?
        `,
        options: [
            { letter: "A", text: "(A) Em datas, séculos ou períodos históricos." },
            { letter: "B", text: "(B) Em nomes de pessoas, empresas ou autoridades." },
            { letter: "C", text: "(C) Em nomes de lugares, cidades, países, instituições ou posições (ex: dentro, fora, em cima)." },
            { letter: "D", text: "(D) Na explicação de como um processo funciona (o passo a passo)." },
            { letter: "E", text: "(E) Em estatísticas, porcentagens ou valores monetários." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: 'Where' significa 'Onde' em português.",
            "Hint 2: Foque em substantivos próprios que indicam localidades ou preposições de lugar."
        ]
    },

    // --- QUESTÃO 9 (INDIGENOUS POPULATION - MATCH) ---
    {
        id: "q5",
        type: "mc",
        questionText: `
             Quando a pergunta começa com a palavra <b>"Who"</b>, o foco da sua leitura deve mudar para identificar agentes ou pessoas no texto.
            <br><br>
            Question: Ao encontrar uma pergunta iniciada por "Who", que tipo de informação você deve buscar para responder corretamente?
        `,
        options: [
            { letter: "A", text: "(A) O nome de um lugar ou uma região geográfica." },
            { letter: "B", text: "(B) Uma data específica ou um período de tempo." },
            { letter: "C", text: "(C) O nome de uma pessoa, um grupo de pessoas, uma profissão ou quem realizou uma ação." },
            { letter: "D", text: "(D) A razão pela qual algo aconteceu (causa)." },
            { letter: "E", text: "(E) O modo como algo foi feito (método)." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: 'Who' significa 'Quem' em português.",
            "Hint 2: Procure por nomes próprios de pessoas ou substantivos que indiquem ocupações (ex: teacher, scientist, doctor)."
        ]
    },

    // --- QUESTÃO 3a (DEFINITION -> MC) ---
    {
        id: "q6",
        type: "mc",
        questionText: `
             Quando uma pergunta começa com <b>"Why"</b>, o examinador quer saber o motivo, a causa ou a razão de algo ter acontecido.
            <br><br>
            Question: Ao ler uma pergunta que inicia com "Why", que tipo de estrutura ou informação você deve buscar no texto para encontrar a resposta?
        `,
        options: [
            { letter: "A", text: "(A) Uma lista de nomes de cidades ou países envolvidos." },
            { letter: "B", text: "(B) Uma explicação ou justificativa, frequentemente acompanhada de palavras como 'because', 'due to' ou 'since'." },
            { letter: "C", text: "(C) O horário exato ou a data em que o evento ocorreu." },
            { letter: "D", text: "(D) A descrição física de um objeto ou personagem." },
            { letter: "E", text: "(E) Um valor numérico indicando a quantidade de pessoas." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: 'Why' significa 'Por que' em português.",
            "Hint 2: Foque em frases que explicam a origem ou a razão de um problema ou acontecimento mencionado."
        ]
    },

    // --- QUESTÃO 4a (COMMODITY - DEFINITION -> MC) ---
    {
        id: "q7",
        type: "mc",
        questionText: `
            <b>Exam Strategy: Scanning the Text</b>
            <br><br>
            Dica de Prova: Quando a pergunta começa com <b>"How"</b>, o foco está no método, no processo ou na maneira como algo foi realizado.
            <br><br>
            Question: Ao encontrar uma questão iniciada por "How", o que você deve identificar no texto para responder corretamente?
        `,
        options: [
            { letter: "A", text: "(A) A localização exata de um evento ou objeto." },
            { letter: "B", text: "(B) O nome do autor ou da pessoa citada na frase." },
            { letter: "C", text: "(C) A descrição de um processo, o modo como algo funciona ou a maneira como uma ação foi concluída." },
            { letter: "D", text: "(D) Apenas o ano em que o fato principal aconteceu." },
            { letter: "E", text: "(E) A lista de materiais necessários para uma construção." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: 'How' significa 'Como' em português.",
            "Hint 2: Procure por advérbios (palavras terminadas em -ly) ou frases que expliquem o 'passo a passo' de uma situação."
        ]
    },

    // --- QUESTÃO 6b (PREPOSITION OF PLACE) ---
    {
        id: "q8",
        type: "mc",
        questionText: `
            <b>Reading Comprehension: Islamic Beliefs</b>
            <br><br>
            A prova agora vai focar na religião Islâmica. Leia o texto a seguir e responda:
            <br><br>
            <i>"Muslims believe that Islam was revealed over 1,400 years ago in Mekkah, Arabia through a man called Muhammad. Muhammad is believed by Muslims to be the latest prophet sent by God (Allah). Jesus (Isa), Moses (Musa) and Abraham (Ibrahim) are other respected prophets."</i>
            <br><br>
            <b>Question:</b> According to the text, who are the other respected prophets mentioned in addition to Muhammad?
        `,
        options: [
            { letter: "A", text: "(A) Only Jesus (Isa)." },
            { letter: "B", text: "(B) Jesus (Isa), Moses (Musa) and Abraham (Ibrahim)." },
            { letter: "C", text: "(C) Only Muhammad and Allah." },
            { letter: "D", text: "(D) Makkah and Arabia." },
            { letter: "E", text: "(E) No other prophets are mentioned." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: A pergunta usa 'Who' (Quem), então procure por nomes de pessoas no final do primeiro parágrafo.",
            "Hint 2: O texto lista três nomes específicos entre parênteses como profetas respeitados."
        ]
    },

    // --- QUESTÃO 6c (PREPOSITION OF PLACE) ---
    {
        id: "q9",
        type: "mc",
        questionText: `
            <b>Reading Comprehension: The Five Pillars</b>
            <br><br>
            A prova vai focar na religião Islâmica. Leia o texto a seguir e responda:
            <br><br>
            <i>"The Five Pillars of Islam are an important part of Muslim life. They are five things that a Muslim must do so they can live a good and responsible life. They include: The declaration of faith (Shahada); Praying five times a day (Salat); Giving money to charity (Zakah); Fasting during the month of Ramadan (Sawm); A pilgrimage to Makkah at least once in a lifetime (Hajj)."</i>
            <br><br>
            <b>Question:</b> According to the text, what is "Zakah"?
        `,
        options: [
            { letter: "A", text: "(A) Praying five times a day." },
            { letter: "B", text: "(B) Fasting during the month of Ramadan." },
            { letter: "C", text: "(C) Giving money to charity." },
            { letter: "D", text: "(D) A pilgrimage to Makkah." },
            { letter: "E", text: "(E) The declaration of faith." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure pela palavra 'Zakah' na lista dos cinco pilares.",
            "Hint 2: O termo está associado a ajudar os necessitados através de contribuições financeiras."
        ]
    },

    // --- QUESTÃO 7b (PREPOSITION OF TIME) ---
    {
        id: "q10",
        type: "mc",
        questionText: `
            <b>Reading Comprehension: Islamic Practices</b>
            <br><br>
            A prova vai focar na religião Islâmica. Leia o texto a seguir e responda:
            <br><br>
            <i>"The Five Pillars of Islam are an important part of Muslim life... They include: Fasting during the month of Ramadan (Sawm); A pilgrimage to Makkah at least once in a lifetime (Hajj)."</i>
            <br><br>
            <b>Question:</b> According to the text, where must a Muslim go for the pilgrimage (Hajj) at least once in their lifetime?
        `,
        options: [
            { letter: "A", text: "(A) To Arabia through a man called Muhammad." },
            { letter: "B", text: "(B) To Mekkah (Makkah)." },
            { letter: "C", text: "(C) To a mosque five times a day." },
            { letter: "D", text: "(D) To the month of Ramadan." },
            { letter: "E", text: "(E) To Jerusalem (Isa)." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: A pergunta usa 'Where' (Onde), então foque no local mencionado junto ao termo 'Hajj'.",
            "Hint 2: O texto diz que a peregrinação é para uma cidade específica pelo menos uma vez na vida."
        ]
    },
    {
        id: "q11",
        type: "mc",
        questionText: `
            <b>Reading Comprehension: Muslim Life</b>
            <br><br>
            A prova vai focar na religião Islâmica. Leia o texto a seguir e responda:
            <br><br>
            <i>"The Five Pillars of Islam are an important part of Muslim life... They include: The declaration of faith (Shahada); Praying five times a day (Salat); Giving money to charity (Zakah)..."</i>
            <br><br>
            <b>Question:</b> According to the text, how many times a day must a Muslim pray (Salat)?
        `,
        options: [
            { letter: "A", text: "(A) Only once in a lifetime." },
            { letter: "B", text: "(B) Five times a day." },
            { letter: "C", text: "(C) Every hour." },
            { letter: "D", text: "(D) Three times a week." },
            { letter: "E", text: "(E) Only during the month of Ramadan." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: A pergunta usa 'How many' (Quantos), indicando que a resposta é um número.",
            "Hint 2: Procure pela palavra 'Salat' na lista e veja o número associado à frequência das orações."
        ]
    },

    // --- QUESTÃO 7d (PREPOSITION OF TIME) ---
    {
        id: "q12",
        type: "mc",
        questionText: `
            <b>Reading Comprehension: Islamic Concept</b>
            <br><br>
            A prova vai focar na religião Islâmica. Leia o texto da imagem e responda:
            <br><br>
            <i>"Islam, a religion followed by millions around the world, holds fundamental beliefs that provide a guiding framework for its followers."</i>
            <br><br>
            <b>Question:</b> According to the text, what is Islam?
        `,
        options: [
            { letter: "A", text: "(A) A type of prayer followed by millions." },
            { letter: "B", text: "(B) A religion followed by millions around the world." },
            { letter: "C", text: "(C) A prophet sent to guide people." },
            { letter: "D", text: "(D) A commandment to treat others kindly." },
            { letter: "E", text: "(E) A book about world history." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: O texto começa definindo o que o Islão é antes de falar sobre os seguidores.",
            "Hint 2: Procure pela palavra 'religion' logo no início da frase."
        ]
    },
    {
        id: "q13",
        type: "mc",
        questionText: `
            <b>Reading Comprehension: Attributes of Allah</b>
            <br><br>
            A prova vai focar na religião Islâmica. Leia o texto da imagem e responda:
            <br><br>
            <i>"Allah is the God worshipped by Muslims. He is believed to be loving, merciful, and all-powerful."</i>
            <br><br>
            <b>Question:</b> According to the text, what are the characteristics of Allah?
        `,
        options: [
            { letter: "A", text: "(A) He has partners and children." },
            { letter: "B", text: "(B) He only listens to specific people." },
            { letter: "C", text: "(C) He is believed to be loving, merciful, and all-powerful." },
            { letter: "D", text: "(D) He is a prophet from Mekkah." },
            { letter: "E", text: "(E) He is a framework for millions." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure pelos adjetivos usados logo após mencionar quem é Allah.",
            "Hint 2: O texto destaca três qualidades principais: amoroso, misericordioso e todo-poderoso."
        ]
    },

    // --- QUESTÃO 3e (DEFINITION -> MC) ---
    {
        id: "q14",
        type: "mc",
        questionText: `
            <b>Vocabulary and Context: Islamic Beliefs</b>
            <br><br>
            A prova vai focar na religião Islâmica. Analise a primeira imagem (texto com lacunas) e responda:
            <br><br>
            <i>"Muslims express their love through __________, following commandments, and treating others kindly."</i>
            <br><br>
            <b>Question:</b> De acordo com as opções do quadro na imagem, qual palavra preenche corretamente a lacuna acima?
        `,
        options: [
            { letter: "A", text: "(A) Religion" },
            { letter: "B", text: "(B) Allah" },
            { letter: "C", text: "(C) God" },
            { letter: "D", text: "(D) Prayer" },
            { letter: "E", text: "(E) Prophet" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: A frase fala sobre como os muçulmanos expressam seu amor.",
            "Hint 2: Olhe para as palavras no topo da primeira imagem: prayer, Allah, religion, God."
        ]
    },
    {
        id: "q15",
        type: "mc",
        questionText: `
            <b>Infographic Analysis: The Grand Mosque</b>
            <br><br>
            Analise o infográfico "The pilgrimage to Mecca" e responda:
            <br><br>
            <b>Question:</b> De acordo com as informações sobre a "Grand Mosque", quantas pessoas ela pode acomodar (hold) e qual a altura de cada minarete (minaret)?
        `,
        options: [
            { letter: "A", text: "(A) 2 million people and 50m high." },
            { letter: "B", text: "(B) More than 1.5 million people and 90m high." },
            { letter: "C", text: "(C) 368,000 people and 15m high." },
            { letter: "D", text: "(D) 49 people and 90m high." },
            { letter: "E", text: "(E) 1.5 million people and 15m high." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: Procure os números na seção que descreve a 'Grand Mosque' no desenho central.",
            "Hint 2: A capacidade está no texto com a seta preta e a altura está indicada ao lado de uma das torres (minarets)."
        ]
    },
    {
        id: "q16",
        type: "mc",
        questionText: `
            <b>Infographic Analysis: Hajj Rituals</b>
            <br><br>
            Analise o mapa do ritual no infográfico e responda:
            <br><br>
            <b>Question:</b> O que os peregrinos (pilgrims) fazem no "Mount Arafat" (ponto 3 do mapa)?
        `,
        options: [
            { letter: "A", text: "(A) They throw rocks at three pillars." },
            { letter: "B", text: "(B) They pick up 49 rocks." },
            { letter: "C", text: "(C) They circle the Kaaba seven times." },
            { letter: "D", text: "(D) They pray from noon to dusk, where Muhammad preached his last sermon." },
            { letter: "E", text: "(E) They stop to pray and read the Koran." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: Localize o número 3 no mapa da parte inferior da imagem.",
            "Hint 2: O texto ao lado do Mount Arafat menciona uma oração do meio-dia ao entardecer e o último sermão do profeta."
        ]
    }

];
const questionBank = [
    
    // Pergunta 1: WHO (Pessoa)
    {
        id: "q1",
        type: "mc",
        questionText: `
            Complete the sentence:
            "A surgeon is a doctor ______ performs operations in a hospital."
        `,
        options: [
            { letter: "A", text: "(A) which" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) who" }, 
            { letter: "D", text: "(D) where" },
            { letter: "E", text: "(E) what" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'a doctor' (pessoa).",
            "Dica 2: É usado para pessoas no papel de sujeito ou objeto da oração relativa.",
            "Dica 3: Em português, seria 'que' ou 'quem'."
        ]
    },

    // Pergunta 2: WHICH / THAT (Coisa)
    {
        id: "q2",
        type: "mc",
        questionText: `
            Complete the sentence:
            "This is the novel ______ won the Booker Prize last year."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) whom" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) where" },
            { letter: "E", text: "(E) which" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'the novel' (coisa).",
            "Dica 2: Tanto 'which' quanto 'that' seriam aceitáveis, mas 'which' é a opção de escolha.",
            "Dica 3: Nunca use 'who' para objetos inanimados."
        ]
    },

    // Pergunta 3: WHOSE (Posse)
    {
        id: "q3",
        type: "mc",
        questionText: `
            Complete the sentence:
            "I met a person ______ dog is famous for surfing."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) which" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) that" },
            { letter: "E", text: "(E) where" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome substitui 'the person's dog' (posse).",
            "Dica 2: Sempre precede um substantivo ('dog' neste caso).",
            "Dica 3: Em português, a tradução é 'cujo(a)'."
        ]
    },

    // Pergunta 4: THAT (Pessoa/Coisa) - General purpose
    {
        id: "q4",
        type: "mc",
        questionText: `
            Complete the sentence:
            "The movie ______ we watched yesterday was terrible."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) which" }, 
            { letter: "D", text: "(D) what" },
            { letter: "E", text: "(E) whom" }
        ],
        correctAnswer: "C", // 'that' não é uma opção, então 'which' é a melhor alternativa para coisa.
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'The movie' (coisa).",
            "Dica 2: Neste caso, o pronome é o objeto da oração e poderia ser omitido (The movie we watched...)",
            "Dica 3: Não pode ser 'who' nem 'whose'."
        ]
    },

    // Pergunta 5: WHO (Pessoa/Contexto da frase 6-2 do livro)
    {
        id: "q5",
        type: "mc",
        questionText: `
            Identify the correct relative pronoun to complete the sentence:
            "She is an artist ______ sculptures are famous."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) which" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) whom" },
            { letter: "E", text: "(E) that" }
        ],
        correctAnswer: "C", // Baseado no exercício 6, ponto 1
        videoUrl: "",
        hints: [
            "Dica 1: A frase original seria: 'She is an artist. Her sculptures are famous.'",
            "Dica 2: Você precisa indicar que as esculturas pertencem à artista (posse).",
            "Dica 3: O pronome deve ser seguido por um substantivo ('sculptures')."
        ]
    },

    // Pergunta 6: WHICH (Coisa/Frase 6-3 do livro)
    {
        id: "q6",
        type: "mc",
        questionText: `
            The relative pronoun 'which' in "Cubism is an old-fashioned style of art. My dad loves it." combines the sentences and refers to:
        `,
        options: [
            { letter: "A", text: "(A) My dad (person)" },
            { letter: "B", text: "(B) Style of art (thing)" },
            { letter: "C", text: "(C) Old-fashioned (adjective)" }, 
            { letter: "D", text: "(D) Cubism (person)" },
            { letter: "E", text: "(E) Loves (verb)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome 'which' só é usado para coisas ou ideias.",
            "Dica 2: 'Cubism' é um estilo de arte (coisa/ideia).",
            "Dica 3: O objetivo é modificar o substantivo 'style of art'."
        ]
    },

    // Pergunta 7: WHOSE (Coisa - Raro, mas possível - Posse)
    {
        id: "q7",
        type: "mc",
        questionText: `
            Identify the pronoun that indicates possession for the non-human subject:
            "The ancient castle, ______ roof was damaged by the storm, needs urgent repairs."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) that" },
            { letter: "C", text: "(C) which" }, 
            { letter: "D", text: "(D) whose" },
            { letter: "E", text: "(E) what" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: A frase substitui 'The castle's roof' (o telhado do castelo).",
            "Dica 2: 'Whose' pode ser usado tanto para pessoas quanto para coisas, contanto que indique posse.",
            "Dica 3: É a única opção que pode vir seguida diretamente pelo substantivo 'roof'."
        ]
    },

    // Pergunta 8: THAT (Coisa - Opcional em orações restritivas)
    {
        id: "q8",
        type: "mc",
        questionText: `
            In the sentence, "The tools ______ you bought are broken," the pronoun can be omitted because it is:
        `,
        options: [
            { letter: "A", text: "(A) the subject of the relative clause." },
            { letter: "B", text: "(B) indicating possession." },
            { letter: "C", text: "(C) referring to a person." }, 
            { letter: "D", text: "(D) the object of the relative clause." },
            { letter: "E", text: "(E) a non-restrictive clause." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: A oração relativa é 'you bought' (você comprou).",
            "Dica 2: O pronome aqui seria 'that' ou 'which', e ele é o objeto do verbo 'bought'.",
            "Dica 3: Pronomes relativos no papel de objeto podem ser omitidos em orações restritivas ('The tools you bought...')."
        ]
    },

    // Pergunta 9: WHO (Pessoa/Sujeito)
    {
        id: "q9",
        type: "mc",
        questionText: `
            Complete the sentence:
            "I admire my boss, ______ is always calm under pressure."
        `,
        options: [
            { letter: "A", text: "(A) which" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) what" }, 
            { letter: "D", text: "(D) who" },
            { letter: "E", text: "(E) that" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'my boss' (pessoa).",
            "Dica 2: O pronome atua como sujeito do verbo 'is' na oração relativa.",
            "Dica 3: A vírgula indica que esta é uma oração não-restritiva, onde 'that' não é recomendado."
        ]
    },

    // Pergunta 10: WHICH (Coisa - Oração não-restritiva)
    {
        id: "q10",
        type: "mc",
        questionText: `
            Complete the sentence:
            "My bicycle, ______ cost a fortune, was stolen last night."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) that" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) where" },
            { letter: "E", text: "(E) which" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'My bicycle' (coisa).",
            "Dica 2: A frase está entre vírgulas (oração não-restritiva), o que elimina a possibilidade de usar 'that'.",
            "Dica 3: Deve ser um pronome para coisa que possa ser usado após uma vírgula."
        ]
    },
    {
        id: "q1",
        type: "mc",
        questionText: `
            Analyze the sentences below and identify which ones use the relative pronoun **WHO** correctly:
            <br><br>
            I. The writer who won the prize is British.<br>
            II. I know a place who sells the best coffee.<br>
            III. My sister, who lives in Spain, is visiting us.<br>
            IV. People who enjoy reading are usually curious.
        `,
        options: [
            { letter: "A", text: "(A) I, II and IV are correct.", isCorrect: false, rationale: "II is incorrect. 'Who' is used for people, not places. The correct pronoun for 'place' is 'where' or 'that/which'." },
            { letter: "B", text: "(B) I, III and IV are correct.", isCorrect: true, rationale: "Sentences I, III, and IV correctly use 'who' to refer to people ('writer', 'sister', 'people'). Sentence II uses 'who' incorrectly for a place." },
            { letter: "C", text: "(C) I and III are correct.", isCorrect: false, rationale: "IV is also correct." }, 
            { letter: "D", text: "(D) All sentences are correct.", isCorrect: false, rationale: "Sentence II is incorrect because it uses 'who' for a place." },
            { letter: "E", text: "(E) Only I is correct.", isCorrect: false, rationale: "III and IV are also correct." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Lembre-se que WHO é usado exclusivamente para pessoas.",
            "Dica 2: Procure qual sentença usa WHO para algo que não seja uma pessoa.",
            "Dica 3: Na frase II, o antecedente é 'a place' (lugar/coisa)."
        ]
    },

    // Q2: WHICH / THAT (Coisa) - Mantida
    {
        id: "q2",
        type: "mc",
        questionText: `
            Complete the sentence:
            "This is the novel ______ won the Booker Prize last year."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) whom" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) where" },
            { letter: "E", text: "(E) which" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'the novel' (coisa).",
            "Dica 2: Tanto 'which' quanto 'that' seriam aceitáveis, mas 'which' é a opção de escolha.",
            "Dica 3: Nunca use 'who' para objetos inanimados."
        ]
    },

    // Q3: WHOSE (Posse) - Mantida
    {
        id: "q3",
        type: "mc",
        questionText: `
            I met a person ______ dog is famous for surfing.
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) which" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) that" },
            { letter: "E", text: "(E) where" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome substitui 'the person's dog' (posse).",
            "Dica 2: Sempre precede um substantivo ('dog' neste caso).",
            "Dica 3: Em português, a tradução é 'cujo(a)'."
        ]
    },

    // NOVO Q4: Análise de Regras - Uso de THAT em orações não-restritivas
    {
        id: "q4",
        type: "mc",
        questionText: `
            Analyze the sentences below and identify which ones use the relative pronoun **THAT** incorrectly:
            <br><br>
            I. The movie that we watched yesterday was terrible.<br>
            II. My best friend, that is a lawyer, lives downtown.<br>
            III. The book, that cost $50, is already sold out.<br>
            IV. That is the key that opens the main door.
        `,
        options: [
            { letter: "A", text: "(A) I and IV are incorrect.", isCorrect: false, rationale: "I and IV are correct. They are restrictive clauses." },
            { letter: "B", text: "(B) II and III are incorrect.", isCorrect: true, rationale: "Sentences II and III are non-restrictive (have commas). 'That' cannot be used after a comma; 'who' (II) and 'which' (III) should be used." },
            { letter: "C", text: "(C) I, II and III are incorrect.", isCorrect: false, rationale: "I is correct." }, 
            { letter: "D", text: "(D) All sentences are correct.", isCorrect: false, rationale: "II and III are incorrect because of the commas." },
            { letter: "E", text: "(E) Only II is incorrect.", isCorrect: false, rationale: "III is also incorrect." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: A regra mais importante para 'THAT' é: ele NUNCA é usado após uma vírgula para introduzir uma informação extra.",
            "Dica 2: As frases II e III possuem vírgulas, indicando orações não-restritivas.",
            "Dica 3: Para as frases II e III, os pronomes corretos seriam 'who' e 'which', respectivamente."
        ]
    },

    // Q5: WHOSE (Posse) - Mantida
    {
        id: "q5",
        type: "mc",
        questionText: `
            Identify the correct relative pronoun to complete the sentence:
            "She is an artist ______ sculptures are famous."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) which" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) whom" },
            { letter: "E", text: "(E) that" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: A frase original seria: 'She is an artist. Her sculptures are famous.'",
            "Dica 2: Você precisa indicar que as esculturas pertencem à artista (posse).",
            "Dica 3: O pronome deve ser seguido por um substantivo ('sculptures')."
        ]
    },

    // Q6: WHICH (Coisa/Estilo) - Mantida
    {
        id: "q6",
        type: "mc",
        questionText: `
            The relative pronoun 'which' in "Cubism is an old-fashioned style of art. My dad loves it." combines the sentences and refers to:
        `,
        options: [
            { letter: "A", text: "(A) My dad (person)" },
            { letter: "B", text: "(B) Style of art (thing)" },
            { letter: "C", text: "(C) Old-fashioned (adjective)" }, 
            { letter: "D", text: "(D) Cubism (person)" },
            { letter: "E", text: "(E) Loves (verb)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome 'which' só é usado para coisas ou ideias.",
            "Dica 2: 'Cubism' é um estilo de arte (coisa/ideia).",
            "Dica 3: O objetivo é modificar o substantivo 'style of art'."
        ]
    },

    // Q7: WHOSE (Posse - Coisa) - Mantida
    {
        id: "q7",
        type: "mc",
        questionText: `
            Identify the pronoun that indicates possession for the non-human subject:
            "The ancient castle, ______ roof was damaged by the storm, needs urgent repairs."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) that" },
            { letter: "C", text: "(C) which" }, 
            { letter: "D", text: "(D) whose" },
            { letter: "E", text: "(E) what" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: A frase substitui 'The castle's roof' (o telhado do castelo).",
            "Dica 2: 'Whose' pode ser usado tanto para pessoas quanto para coisas, contanto que indique posse.",
            "Dica 3: É a única opção que pode vir seguida diretamente pelo substantivo 'roof'."
        ]
    },

    // NOVO Q8: Análise de Regras - Omissão do Pronome Relativo
    {
        id: "q8",
        type: "mc",
        questionText: `
            Analyze the sentences below and identify where the relative pronoun (**who/that/which**) is correctly omitted (left out):
            <br><br>
            I. The girl I saw was waiting for a bus.<br>
            II. The camera which is on the table is mine.<br>
            III. The money you spent was mine.<br>
            IV. The man whose car broke down called a tow truck.
        `,
        options: [
            { letter: "A", text: "(A) Only II is correct.", isCorrect: false, rationale: "In II, the pronoun 'which' is the subject of 'is' and cannot be omitted. I and III are correct." },
            { letter: "B", text: "(B) I and III are correct.", isCorrect: true, rationale: "In I and III, the pronouns (that/whom/which) are the object of the relative clause and can be omitted. In II, the pronoun is the subject, and in IV, 'whose' cannot be omitted." },
            { letter: "C", text: "(C) I, II and III are correct.", isCorrect: false, rationale: "In II, the pronoun is the subject and must be kept." }, 
            { letter: "D", text: "(D) II and IV are correct.", isCorrect: false, rationale: "Neither II nor IV allows for omission." },
            { letter: "E", text: "(E) All sentences allow omission.", isCorrect: false, rationale: "The pronoun cannot be omitted in II (subject) and IV (whose)." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome só pode ser omitido se for o OBJETO do verbo da oração relativa.",
            "Dica 2: Na I ('I saw her') e III ('you spent it'), o pronome seria o objeto, logo pode ser omitido.",
            "Dica 3: Na II ('which is...'), o pronome é o sujeito ('it is...') e na IV, 'whose' nunca pode ser omitido."
        ]
    },

    // NOVO Q10: Análise de Regras - WHICH vs. WHOSE vs. WHO
    {
        id: "q10",
        type: "mc",
        questionText: `
            Analyze the combination of the relative pronoun and the word immediately following it. Which pronoun is used correctly?
            <br><br>
            I. The movie, which cost a fortune...<br>
            II. The artist, whose is very famous...<br>
            III. The boy, who parents are rich...<br>
            IV. The book, which cover is green...
        `,
        options: [
            { letter: "A", text: "(A) Only I is correct.", isCorrect: true, rationale: "I is correct: 'which' is followed by a verb ('cost'). II is wrong: 'whose' is followed by a verb; it should be 'who is'. III is wrong: 'who' is followed by a noun; it should be 'whose'. IV is wrong: 'which' is followed by a noun; it should be 'whose'." },
            { letter: "B", text: "(B) I and IV are correct.", isCorrect: false, rationale: "IV is incorrect. 'which' cannot be followed by a noun showing possession; use 'whose'." },
            { letter: "C", text: "(C) II and III are correct.", isCorrect: false, rationale: "Both II and III are incorrect uses." }, 
            { letter: "D", text: "(D) All sentences are correct.", isCorrect: false, rationale: "II, III, and IV are incorrect." },
            { letter: "E", text: "(E) None of the sentences are correct.", isCorrect: false, rationale: "I is correct." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: 'WHOSE' DEVE ser seguido por um substantivo que está sendo possuído (ex: whose cover).",
            "Dica 2: 'WHO' e 'WHICH' são geralmente seguidos por um verbo ou um sujeito + verbo (exceto quando omitidos).",
            "Dica 3: Analise o que vem depois do pronome em cada caso: I (verbo), II (verbo), III (substantivo), IV (substantivo)."
        ]
    },
    
    // Q9: WHO (Pessoa/Sujeito) - Mantida (Mudança de posição)
    {
        id: "q9",
        type: "mc",
        questionText: `
            Complete the sentence:
            "I admire my boss, ______ is always calm under pressure."
        `,
        options: [
            { letter: "A", text: "(A) which" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) what" }, 
            { letter: "D", text: "(D) who" },
            { letter: "E", text: "(E) that" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'my boss' (pessoa).",
            "Dica 2: O pronome atua como sujeito do verbo 'is' na oração relativa.",
            "Dica 3: A vírgula indica que esta é uma oração não-restritiva, onde 'that' não é recomendado."
        ]
    },

    // NOVO Q15: Análise de Regras - WHOSE vs WHO vs THAT
    {
        id: "q15",
        type: "mc",
        questionText: `
            Analyze the sentences and choose the option that correctly explains the function of the relative pronoun being used (or omitted):
            <br><br>
            I. The student, whose essay was the best, got an A. (**Whose** indicates possession)<br>
            II. The car that is parked outside is new. (**That** refers to a person)<br>
            III. The man I spoke to was friendly. (The pronoun is the subject, and it is omitted)<br>
            IV. The idea which you presented was brilliant. (**Which** refers to a thing)
        `,
        options: [
            { letter: "A", text: "(A) I and IV are correct.", isCorrect: true, rationale: "I and IV are correct. II is wrong because 'that' refers to a car (thing). III is wrong because the pronoun is the object of 'spoke to' (I spoke to *him*), not the subject." },
            { letter: "B", text: "(B) I, II and IV are correct.", isCorrect: false, rationale: "II is incorrect." },
            { letter: "C", text: "(C) II and III are correct.", isCorrect: false, rationale: "Both II and III are incorrect explanations." }, 
            { letter: "D", text: "(D) All are correct.", isCorrect: false, rationale: "II and III have incorrect explanations." },
            { letter: "E", text: "(E) Only I is correct.", isCorrect: false, rationale: "IV is also correct." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: Analise a função: I - 'whose' mostra posse? II - 'that' se refere a 'carro' (coisa)? III - O pronome é o sujeito ou objeto? IV - 'which' se refere a 'ideia' (coisa)?",
            "Dica 2: 'That' nunca se refere a pessoa (na II). O sujeito é 'I' na frase relativa na III, logo o pronome é o objeto, não o sujeito.",
            "Dica 3: O pronome 'whose' (I) é seguido por um substantivo ('essay') e 'which' (IV) se refere à 'idea'."
        ]
    },
    
    // Q11: WHO (Pessoa) - Mantida
    {
        id: "q11",
        type: "mc",
        questionText: `
            Select the correct pronoun for the person referred to:
            "The teacher ______ gave us the assignment is very strict."
        `,
        options: [
            { letter: "A", text: "(A) which" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) who" }, 
            { letter: "D", text: "(D) what" },
            { letter: "E", text: "(E) where" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'The teacher' é uma pessoa.",
            "Dica 2: O pronome é o sujeito do verbo 'gave'.",
            "Dica 3: Somente 'who' (ou 'that') pode se referir a pessoas."
        ]
    },

    // Q12: WHICH (Coisa/Ideia) - Mantida
    {
        id: "q12",
        type: "mc",
        questionText: `
            Complete the sentence:
            "Reading helps you learn new vocabulary, ______ is important for academic writing."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) that" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) where" },
            { letter: "E", text: "(E) which" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere à ideia de aprender vocabulário, e não a uma pessoa.",
            "Dica 2: Use 'which' para se referir a toda a oração anterior, e não a um único substantivo.",
            "Dica 3: Como há uma vírgula, 'that' está incorreto."
        ]
    },

    // Q13: WHOSE (Posse) - Mantida
    {
        id: "q13",
        type: "mc",
        questionText: `
            The novelist ______ books I love is visiting the city next month.
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) which" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) whom" },
            { letter: "E", text: "(E) that" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: A relação é: 'os livros do(a) novelista'.",
            "Dica 2: 'Whose' é o único pronome que indica posse.",
            "Dica 3: O pronome é seguido pelo substantivo 'books'."
        ]
    },

    // Q14: THAT (Coisa - Restritiva) - Mantida
    {
        id: "q14",
        type: "mc",
        questionText: `
            Choose the pronoun that is typically preferred for defining or identifying things in a restrictive clause (no commas):
            "The phone ______ has the best camera is often the most expensive."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) whom" }, 
            { letter: "D", text: "(D) that" },
            { letter: "E", text: "(E) where" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: 'The phone' é uma coisa.",
            "Dica 2: O pronome está definindo qual telefone (função restritiva).",
            "Dica 3: Em orações restritivas, 'that' é frequentemente preferido a 'which' para coisas."
        ]
    },

    // Q16: WHICH (Coisa) - Mantida
    {
        id: "q16",
        type: "mc",
        questionText: `
            Which relative pronoun is **incorrectly** used in the following sentence?
            "The painting, **who** was bought for a million dollars, is now on display."
        `,
        options: [
            { letter: "A", text: "(A) The verb 'was bought' is passive." },
            { letter: "B", text: "(B) The pronoun is the subject of the clause." },
            { letter: "C", text: "(C) The antecedent 'The painting' is a thing, not a person." }, 
            { letter: "D", text: "(D) The clause is non-restrictive (has commas)." },
            { letter: "E", text: "(E) The use of a million dollars is too specific." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome 'who' é exclusivo para pessoas.",
            "Dica 2: O substantivo modificado ('painting') não é uma pessoa.",
            "Dica 3: O pronome correto deveria ser 'which'."
        ]
    },

    // Q17: WHO (Pessoa) - Mantida
    {
        id: "q17",
        type: "mc",
        questionText: `
            "Mr. Smith is the man ______ lives next door."
        `,
        options: [
            { letter: "A", text: "(A) which" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) who" }, 
            { letter: "D", text: "(D) where" },
            { letter: "E", text: "(E) what" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: 'Mr. Smith' é uma pessoa.",
            "Dica 2: O pronome é o sujeito do verbo 'lives'.",
            "Dica 3: Não pode ser omitido neste caso porque é o sujeito."
        ]
    },

    // Q18: WHOSE (Posse) - Mantida
    {
        id: "q18",
        type: "mc",
        questionText: `
            Complete the sentence:
            "The company, ______ logo is a stylized bird, is expanding globally."
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) that" },
            { letter: "C", text: "(C) whose" }, 
            { letter: "D", text: "(D) which" },
            { letter: "E", text: "(E) where" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: A relação é 'o logo da empresa'.",
            "Dica 2: O pronome é seguido pelo substantivo 'logo'.",
            "Dica 3: 'Whose' indica posse, mesmo para objetos inanimados ('company')."
        ]
    },

    // Q19: WHICH (Coisa) - Mantida
    {
        id: "q19",
        type: "mc",
        questionText: `
            In a job description, an employer might write: "We are looking for skills **that** are relevant to the modern market." If we replace 'that' with another pronoun, which one would be correct?
        `,
        options: [
            { letter: "A", text: "(A) who" },
            { letter: "B", text: "(B) whose" },
            { letter: "C", text: "(C) whom" }, 
            { letter: "D", text: "(D) where" },
            { letter: "E", text: "(E) which" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome se refere a 'skills' (coisa).",
            "Dica 2: 'That' e 'which' são intercambiáveis (em orações restritivas) quando se referem a coisas.",
            "Dica 3: O pronome deve ser usado para coisas, não pessoas."
        ]
    },

    // Q20: Função do Pronome Relativo - Mantida
    {
        id: "q20",
        type: "mc",
        questionText: `
            What is the primary function of a **Relative Pronoun** in a sentence?
        `,
        options: [
            { letter: "A", text: "(A) To turn the sentence into a question." },
            { letter: "B", text: "(B) To separate the subject from the verb." },
            { letter: "C", text: "(C) To act as a coordinating conjunction." }, 
            { letter: "D", text: "(D) To introduce a relative clause that modifies a noun (antecedent)." },
            { letter: "E", text: "(E) To replace the main verb with an auxiliary verb." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O pronome sempre está ligado a um substantivo anterior (antecedente).",
            "Dica 2: Ele introduz a parte da frase que adiciona informação ao antecedente.",
            "Dica 3: Lembre-se: Ele 'relaciona' informações."
        ]
    }
];

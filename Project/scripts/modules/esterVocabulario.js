const questionBank = [
    
    // Pergunta 1: ancient (Definição)
    {
        id: "q1",
        type: "mc",
        questionText: `
            Which of the following adjectives best defines something that belongs to the very distant past and is no longer in existence?
        `,
        options: [
            { letter: "A", text: "(A) enormous" },
            { letter: "B", text: "(B) tiny" },
            { letter: "C", text: "(C) ancient" }, 
            { letter: "D", text: "(D) smart" },
            { letter: "E", text: "(E) brand new" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O termo se refere a algo muito, muito velho, como as civilizações.",
            "Dica 2: Esta palavra é frequentemente associada a história e arqueologia.",
            "Dica 3: Em português, a tradução é 'antigo'."
        ]
    },

    // Pergunta 2: brand new (Aplicação)
    {
        id: "q2",
        type: "mc",
        questionText: `
            Complete the sentence with the most appropriate adjective:
            "After waiting a month, she finally drove her ______ car home from the dealership."
        `,
        options: [
            { letter: "A", text: "(A) strange" },
            { letter: "B", text: "(B) enormous" },
            { letter: "C", text: "(C) brand new" }, 
            { letter: "D", text: "(D) old fashioned" },
            { letter: "E", text: "(E) successful" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: A frase descreve a compra de um carro que acabou de sair da concessionária.",
            "Dica 2: O adjetivo significa que algo é totalmente novo, nunca usado.",
            "Dica 3: Em português, a expressão equivalente é 'novinho em folha'."
        ]
    },

    // Pergunta 3: delicate (Definição/Aplicação)
    {
        id: "q3",
        type: "mc",
        questionText: `
            Which adjective should be used to describe a piece of antique china that is easily broken or damaged?
        `,
        options: [
            { letter: "A", text: "(A) smart" },
            { letter: "B", text: "(B) enormous" },
            { letter: "C", text: "(C) brand new" }, 
            { letter: "D", text: "(D) delicate" },
            { letter: "E", text: "(E) enjoyable" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O objeto requer muito cuidado ao ser manuseado.",
            "Dica 2: A palavra implica fragilidade ou sensibilidade.",
            "Dica 3: Em português, o adjetivo é 'delicado'."
        ]
    },

    // Pergunta 4: enjoyable (Aplicação)
    {
        id: "q4",
        type: "mc",
        questionText: `
            Fill in the blank:
            "The comedy show was so ______ that we laughed until our stomachs hurt."
        `,
        options: [
            { letter: "A", text: "(A) tiny" },
            { letter: "B", text: "(B) strange" },
            { letter: "C", text: "(C) enormous" }, 
            { letter: "D", text: "(D) enjoyable" },
            { letter: "E", text: "(E) old fashioned" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O show de comédia causou uma reação positiva (risadas).",
            "Dica 2: O adjetivo descreve algo que proporciona prazer ou satisfação.",
            "Dica 3: A palavra é formada pelo verbo 'enjoy' (aproveitar) mais o sufixo 'able'."
        ]
    },

    // Pergunta 5: enormous (Definição)
    {
        id: "q5",
        type: "mc",
        questionText: `
            Which adjective means extremely large or huge in size or amount?
        `,
        options: [
            { letter: "A", text: "(A) tiny" },
            { letter: "B", text: "(B) strange" },
            { letter: "C", text: "(C) enormous" }, 
            { letter: "D", text: "(D) delicate" },
            { letter: "E", text: "(E) original" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Pense em sinônimos como 'giant' ou 'massive'.",
            "Dica 2: O oposto desta palavra é 'tiny'.",
            "Dica 3: Em português, a tradução é 'enorme'."
        ]
    },

    // Pergunta 6: old fashioned (Aplicação)
    {
        id: "q6",
        type: "mc",
        questionText: `
            Choose the adjective that describes something dated or no longer in general use:
            "My grandmother still uses a rotary phone, which looks quite ______ next to my smartphone."
        `,
        options: [
            { letter: "A", text: "(A) ancient" },
            { letter: "B", text: "(B) old fashioned" },
            { letter: "C", text: "(C) original" }, 
            { letter: "D", text: "(D) brand new" },
            { letter: "E", text: "(E) successful" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O telefone de disco é um objeto de outra época.",
            "Dica 2: A expressão significa 'fora de moda' ou 'antiquado'.",
            "Dica 3: A palavra 'old' é a chave, mas precisa de 'fashioned' para o sentido completo."
        ]
    },

    // Pergunta 7: original (Definição/Aplicação)
    {
        id: "q7",
        type: "mc",
        questionText: `
            A painting that is the first copy, created by the artist himself, is best described as the ______ artwork.
        `,
        options: [
            { letter: "A", text: "(A) smart" },
            { letter: "B", text: "(B) strange" },
            { letter: "C", text: "(C) successful" }, 
            { letter: "D", text: "(D) recycled" },
            { letter: "E", text: "(E) original" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Dica 1: O adjetivo significa que algo é a primeira versão ou a fonte de algo.",
            "Dica 2: Não é uma cópia, mas sim a peça autêntica.",
            "Dica 3: A tradução para o português é a mesma: 'original'."
        ]
    },

    // Pergunta 8: recycled (Aplicação)
    {
        id: "q8",
        type: "mc",
        questionText: `
            To promote sustainability, the company started selling notebooks made of ______ paper.
        `,
        options: [
            { letter: "A", text: "(A) delicate" },
            { letter: "B", text: "(B) recycled" },
            { letter: "C", text: "(C) brand new" }, 
            { letter: "D", text: "(D) enormous" },
            { letter: "E", text: "(E) ancient" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O contexto é a promoção da sustentabilidade.",
            "Dica 2: O adjetivo refere-se a materiais que foram processados para serem usados novamente.",
            "Dica 3: Em português, a palavra é 'reciclado'."
        ]
    },

    // Pergunta 9: smart (Definição)
    {
        id: "q9",
        type: "mc",
        questionText: `
            Which word refers to a person who is clever, quick-witted, and shows good judgment?
        `,
        options: [
            { letter: "A", text: "(A) tiny" },
            { letter: "B", text: "(B) old fashioned" },
            { letter: "C", text: "(C) smart" }, 
            { letter: "D", text: "(D) strange" },
            { letter: "E", text: "(E) recycled" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Este adjetivo também pode descrever tecnologia avançada, como 'smartphone'.",
            "Dica 2: O termo está relacionado à inteligência e esperteza.",
            "Dica 3: Em português, pode ser traduzido como 'inteligente' ou 'esperto'."
        ]
    },

    // Pergunta 10: strange (Aplicação)
    {
        id: "q10",
        type: "mc",
        questionText: `
            Complete the sentence:
            "After the lights went out, we heard a ______ noise coming from the attic."
        `,
        options: [
            { letter: "A", text: "(A) enormous" },
            { letter: "B", text: "(B) brand new" },
            { letter: "C", text: "(C) successful" }, 
            { letter: "D", text: "(D) strange" },
            { letter: "E", text: "(E) enjoyable" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: A frase cria um cenário de mistério ou algo incomum.",
            "Dica 2: O adjetivo significa 'incomum', 'esquisito' ou 'anormal'.",
            "Dica 3: Pense em sinônimos como 'weird' ou 'odd'."
        ]
    },
    {
        id: "q11",
        type: "mc",
        questionText: `
            Which adjective describes a person or endeavor that achieves fame, wealth, or a desired outcome?
        `,
        options: [
            { letter: "A", text: "(A) delicate" },
            { letter: "B", text: "(B) smart" },
            { letter: "C", text: "(C) successful" }, 
            { letter: "D", text: "(D) tiny" },
            { letter: "E", text: "(E) strange" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: A palavra está relacionada ao alcance de um objetivo.",
            "Dica 2: É o adjetivo derivado do substantivo 'success' (sucesso).",
            "Dica 3: Em português, a tradução é 'bem-sucedido'."
        ]
    },

    // Pergunta 12: tiny (Aplicação)
    {
        id: "q12",
        type: "mc",
        questionText: `
            Fill in the blank:
            "Despite being a massive dog breed, the puppy was just a ______ creature when we brought him home."
        `,
        options: [
            { letter: "A", text: "(A) enormous" },
            { letter: "B", text: "(B) old fashioned" },
            { letter: "C", text: "(C) ancient" }, 
            { letter: "D", text: "(D) tiny" },
            { letter: "E", text: "(E) enjoyable" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O contexto contrasta o tamanho futuro do cão com seu tamanho no presente.",
            "Dica 2: O adjetivo significa 'muito pequeno' ou 'minúsculo'.",
            "Dica 3: É o oposto de 'enormous'."
        ]
    },

    // Pergunta 13: ancient (Revisão/Aplicação)
    {
        id: "q13",
        type: "mc",
        questionText: `
            The archaeologist studied the writings from the ______ Roman Empire.
        `,
        options: [
            { letter: "A", text: "(A) brand new" },
            { letter: "B", text: "(B) tiny" },
            { letter: "C", text: "(C) ancient" }, 
            { letter: "D", text: "(D) successful" },
            { letter: "E", text: "(E) enormous" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O contexto envolve arqueologia e impérios do passado.",
            "Dica 2: O Império Romano é um tema histórico e muito antigo.",
            "Dica 3: Não confunda com 'old fashioned', que se refere a algo meramente desatualizado."
        ]
    },

    // Pergunta 14: brand new (Revisão/Definição)
    {
        id: "q14",
        type: "mc",
        questionText: `
            If an object is described as **'brand new'**, it means the object is:
        `,
        options: [
            { letter: "A", text: "(A) extremely large." },
            { letter: "B", text: "(B) easily damaged." },
            { letter: "C", text: "(C) a copy of the first version." }, 
            { letter: "D", text: "(D) completely new and unused." },
            { letter: "E", text: "(E) old and out of fashion." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: Lembre-se que o termo implica a condição mais recente possível.",
            "Dica 2: É o oposto de 'old fashioned' ou 'ancient'.",
            "Dica 3: Pense no momento em que algo é comprado e usado pela primeira vez."
        ]
    },

    // Pergunta 15: delicate (Revisão/Aplicação)
    {
        id: "q15",
        type: "mc",
        questionText: `
            The butterfly's wings were so thin and ______ that we avoided touching them.
        `,
        options: [
            { letter: "A", text: "(A) smart" },
            { letter: "B", text: "(B) delicate" },
            { letter: "C", text: "(C) enormous" }, 
            { letter: "D", text: "(D) strange" },
            { letter: "E", text: "(E) successful" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O contexto é a fragilidade das asas de uma borboleta.",
            "Dica 2: O adjetivo refere-se à facilidade com que algo pode ser quebrado.",
            "Dica 3: É uma característica que exige cuidado (care)."
        ]
    },

    // Pergunta 16: enormous (Revisão/Aplicação)
    {
        id: "q16",
        type: "mc",
        questionText: `
            The blue whale is an animal of ______ size, making it the largest creature on Earth.
        `,
        options: [
            { letter: "A", text: "(A) tiny" },
            { letter: "B", text: "(B) original" },
            { letter: "C", text: "(C) enormous" }, 
            { letter: "D", text: "(D) old fashioned" },
            { letter: "E", text: "(E) enjoyable" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: A baleia-azul é o maior animal que existe.",
            "Dica 2: O adjetivo significa 'extremamente grande'.",
            "Dica 3: Use a palavra que indica que o tamanho é incomum."
        ]
    },

    // Pergunta 17: original (Revisão/Definição)
    {
        id: "q17",
        type: "mc",
        questionText: `
            The opposite of a 'copy' or 'imitation' is a/an ______ piece.
        `,
        options: [
            { letter: "A", text: "(A) recycled" },
            { letter: "B", text: "(B) old fashioned" },
            { letter: "C", text: "(C) original" }, 
            { letter: "D", text: "(D) brand new" },
            { letter: "E", text: "(E) ancient" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: A palavra se refere à autenticidade da obra.",
            "Dica 2: Algo que é 'original' não é derivado de nada.",
            "Dica 3: Pense em 'o primeiro de seu tipo'."
        ]
    },

    // Pergunta 18: recycled (Revisão/Definição)
    {
        id: "q18",
        type: "mc",
        questionText: `
            Materials that are collected and reprocessed for new use are best described as:
        `,
        options: [
            { letter: "A", text: "(A) brand new" },
            { letter: "B", text: "(B) original" },
            { letter: "C", text: "(C) smart" }, 
            { letter: "D", text: "(D) recycled" },
            { letter: "E", text: "(E) delicate" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O conceito está ligado à economia circular e ao meio ambiente.",
            "Dica 2: A palavra tem o prefixo 're-' (de novo) e 'cycle' (ciclo).",
            "Dica 3: Pense no processo de reaproveitamento de lixo."
        ]
    },

    // Pergunta 19: smart (Revisão/Aplicação)
    {
        id: "q19",
        type: "mc",
        questionText: `
            She solved the complex math problem quickly, demonstrating how ______ she is.
        `,
        options: [
            { letter: "A", text: "(A) strange" },
            { letter: "B", text: "(B) old fashioned" },
            { letter: "C", text: "(C) smart" }, 
            { letter: "D", text: "(D) tiny" },
            { letter: "E", text: "(E) enjoyable" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O contexto é a resolução rápida de um problema complexo.",
            "Dica 2: O adjetivo descreve a capacidade mental e o raciocínio rápido.",
            "Dica 3: Pense em sinônimos como 'clever' ou 'intelligent'."
        ]
    },

    // Pergunta 20: strange (Revisão/Definição)
    {
        id: "q20",
        type: "mc",
        questionText: `
            What is the meaning of the adjective **strange**?
        `,
        options: [
            { letter: "A", text: "(A) Able to achieve success." },
            { letter: "B", text: "(B) Extremely small in size." },
            { letter: "C", text: "(C) Unusual, surprising, or difficult to understand." }, 
            { letter: "D", text: "(D) Very old and from a distant past." },
            { letter: "E", text: "(E) Recently manufactured or purchased." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Pense em algo que não é comum ou esperado.",
            "Dica 2: A palavra descreve a qualidade de ser esquisito ou bizarro.",
            "Dica 3: O oposto seria 'familiar' ou 'common'."
        ]
    }
];
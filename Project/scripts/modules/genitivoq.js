const questionBank = [

    // Pergunta 1: Uso Correto do Genitive Case
    {
        id: "q1",
        type: "mc",
        questionText: `
            Read the sentences below and choose the option that shows only correct uses of the <b>Genitive Case ('s)</b>, based on the rules for people, animals, and names.
            <br><br>
            I. The <b>dogs's</b> tails are wagging. (As caudas dos cães)<br>
            II. My <b>sister's</b> book is on the table. (O livro da minha irmã)<br>
            III. The <b>childrens'</b> toys were scattered everywhere. (Os brinquedos das crianças)<br>
            IV. <b>James'</b> coat is too small for him. (O casaco do James - nome próprio singular terminado em 's')<br>
            V. I found my <b>mother-in-law's</b> keys. (As chaves da minha sogra - substantivo composto)
        `,
        options: [
            { letter: "A", text: "(A) Only II, IV and V are correct." },
            { letter: "B", text: "(B) Only I, III and V are correct." },
            { letter: "C", text: "(C) Only II and IV are correct." },
            { letter: "D", text: "(D) Only I, II, III and IV are correct." },
            { letter: "E", text: "(E) All of them are correct." }
        ],
        correctAnswer: "A", // II (singular 's), IV (James' - aceitando James's ou James'), V (mother-in-law's). I (dogs's -> dogs'), III (childrens' -> children's).
        videoUrl: ""
    },

    
    // Pergunta 2: Singular vs Plural terminado em S
    {
        id: "q2",
        type: "mc",
        questionText: "Which sentence correctly applies the Genitive Case rule for a plural noun ending in <b>-s</b>?",
        options: [
            { letter: "A", text: "(A) The <b>dogs's</b> food is gone." },
            { letter: "B", text: "(B) The <b>teacher's</b> lounge is closed." },
            { letter: "C", text: "(C) The <b>students'</b> grades were excellent." },
            { letter: "D", text: "(D) The <b>man's</b> car is fast." },
            { letter: "E", text: "(E) <b>Mary's</b> cousins visited." }
        ],
        correctAnswer: "C", // Students (plural ending in S) receives only the apostrophe: students'
        videoUrl: "https://www.youtube.com/watch?v=omrRxiU9jX8" 
    },

    // Pergunta 3 (Special Type - Preenchimento de Lacunas)
    {
        id: "q3_special",
        type: "fill-verb", 
        questionText: "Complete as frases abaixo, aplicando corretamente o <b>Genitive Case ('s)</b> ao substantivo em <b>negrito</b>, escolhendo a forma correta.",
        lines: [
            { text: "(A) O carro da <b>Mary</b> é azul.", verbs: ["Mary's", "Marys'"] },
            { text: "(B) As bonecas das <b>meninas</b> (girls) estão novas.", verbs: ["girls'", "girl's"] },
            { text: "(C) A casa do <b>boss</b> (chefe, singular, termina em S).", verbs: ["boss's", "boss'"] }, // Segundo a regra do livro: boss's
            { text: "(D) O livro de <b>Lucas</b> (nome bíblico/clássico).", verbs: ["Lucas'", "Lucas's"] }, // Nomes bíblicos/clássicos terminados em S
            { text: "(E) As cores da <b>bandeira</b> (flag, objeto) são vibrantes.", verbs: ["flag's", "flag's", "flag of the"] } // The flag's colors (aceitando a forma 'of' ou 's, embora 's seja usado mais para pessoas/animais)
        ],
        correctAnswer: ["Mary's", "girls'", "boss's", "Lucas'", "flag's"], 
        videoUrl: "https://www.youtube.com/watch?v=omrRxiU9jX8" 
    },

    // Pergunta 4: Uso do caso genitivo (Propriedade)
    {
    id: "q4",
    type: "mc",
    questionText: `
        Sobre o uso do <b>Genitive Case ('s)</b>, é correto afirmar que:
        <br><br>
        I. Ele é usado principalmente para expressar posse de <b>pessoas</b> e <b>animais</b>.<br>
        II. Em muitos casos, pode substituir a construção com a preposição <b>'of'</b>.<br>
        III. Ele <b>nunca</b> pode ser usado para nomes próprios no singular que terminam em 's'.<br>
        IV. O correto para substantivos compostos é colocar o <b>'s</b> no primeiro substantivo (ex: <b>mother's-in-law</b> house).
    `,
    options: [
        { letter: "A", text: "(A) Apenas I e II estão corretas." },
        { letter: "B", text: "(B) Apenas II e III estão corretas." },
        { letter: "C", text: "(C) I, III e IV estão corretas." },
        { letter: "D", text: "(D) Apenas I, II e IV estão corretas." }
    ],
    correctAnswer: "A", // I e II estão corretas. III e IV estão incorretas.
    videoUrl: ""
},

    // Pergunta 6: Possessivo em substantivo composto
    {
        id: "q6",
        type: "mc",
        questionText: `
            Quando comparamos as formas possessivas: (1) <b>brother-in-law's</b> car e (2) <b>brothers-in-law's</b> cars, qual é a diferença de aplicação da regra?
        `,
        options: [
            { letter: "A", text: "(A) (1) é plural e (2) é singular." },
            { letter: "B", text: "(B) (1) e (2) são plurais, mas apenas (1) está correto." },
            { letter: "C", text: "(C) (1) é singular (Genitivo em substantivo composto), e (2) está incorreto (o plural deve ser em 'brothers', não no Genitivo)." },
            { letter: "D", text: "(D) (1) e (2) são singulares (Genitivo em nome composto), e (2) está incorreto." },
            { letter: "E", text: "(E) (1) está correto (posse de um cunhado), e (2) está correto (posse de múltiplos cunhados)." }
        ],
        correctAnswer: "E", 
        videoUrl: "https://www.youtube.com/watch?v=omrRxiU9jX8" 
    },

    // Pergunta 7: Nomes Plurais terminados em S
    {
        id: "q7",
        type: "mc",
        questionText: "Qual frase usa o Genitive Case corretamente para um nome próprio plural terminado em <b>-s</b> (Ex: The Johnsons - a família Johnson)?",
        options: [
            { letter: "A", text: "(A) The <b>Johnsons's</b> house is big." },
            { letter: "B", text: "(B) The <b>Johnsons'</b> house is big." },
            { letter: "C", text: "(C) The <b>Johnson's</b> house is big." },
            { letter: "D", text: "(D) The <b>Johnsons</b> house is big." },
            { letter: "E", text: "(E) The <b>Johnson</b> house is big." }
        ],
        correctAnswer: "B", // Plural (Johnsons) recebe apenas o apóstrofo: Johnsons'
        videoUrl: ""
    },

    // Pergunta 8: Substantivo singular terminado em S
    {
        id: "q8",
        type: "mc",
        questionText: `
            Choose the correct option for the possessive form of the singular noun <b>'waitress'</b> (que termina em -s):
        `,
        options: [
            { letter: "A", text: "(A) The waitress's uniform is clean." },
            { letter: "B", text: "(B) The waitresses' uniform is clean." },
            { letter: "C", text: "(C) The waitress' uniform is clean." },
            { letter: "D", text: "(D) Apenas A está correta, segundo o livro didático." },
            { letter: "E", text: "(E) Tanto A quanto C são aceitas, mas A segue a regra do livro." }
        ],
        correctAnswer: "E", // Ambas são aceitas na prática, mas a regra do livro (The boss's car) favorece a 's.
        videoUrl: ""
    },

    // Pergunta 9: Reescrevendo frase (Genitive Case)
    {
    id: "q9", // ID original q9 (Nomes Clássicos/Bíblicos) foi substituído por uma questão nova sobre frase.
    type: "mc",
    questionText: "Qual é a forma correta de reescrever a frase 'The mother of my friend is tall' utilizando o <b>Genitive Case</b>?",
    options: [
        { letter: "A", text: "(A) My friend's mother is tall." },
        { letter: "B", text: "(B) The friend mother's is tall." },
        { letter: "C", text: "(C) The mother's friend is tall." },
        { letter: "D", text: "(D) My friends' mother is tall." }
    ],
    correctAnswer: "A", 
    videoUrl: "" 
    },

    // Pergunta 10: Substantivos Plurais Irregulares
    {
        id: "q10",
        type: "mc",
        questionText: "Qual opção mostra o Genitive Case correto para os plurais irregulares <b>'men'</b> (homens) e <b>'children'</b> (crianças)?",
        options: [
            { letter: "A", text: "(A) men's / childrens'" },
            { letter: "B", text: "(B) men' / children's" },
            { letter: "C", text: "(C) men's / children's" },
            { letter: "D", text: "(D) mens' / childrens'" },
            { letter: "E", text: "(E) men' / children'" }
        ],
        correctAnswer: "C", // Plurais irregulares recebem 's: men's, children's
        videoUrl: ""
    },
    
    // Pergunta 11: Substantivo Composto
    {
        id: "q11",
        type: "mc",
        questionText: "Qual a forma correta do Genitive Case para o substantivo composto <b>'father-in-law'</b> (sogro)?",
        options: [
            { letter: "A", text: "(A) father's-in-law" },
            { letter: "B", text: "(B) fathers-in-law's" },
            { letter: "C", text: "(C) father-in-law's" },
            { letter: "D", text: "(D) father-in-laws'" },
            { letter: "E", text: "(E) fathers'-in-law" }
        ],
        correctAnswer: "C", // Substantivos compostos recebem 's no final: father-in-law's
        videoUrl: ""
    },

    // Pergunta 12: Genitive Case Simples
    {
        id: "q12",
        type: "mc",
        questionText: "Complete: The <b>doctor</b> (singular) prescription was very clear.",
        options: [
            { letter: "A", text: "(A) doctors'" },
            { letter: "B", text: "(B) doctors" },
            { letter: "C", "text": "(C) doctor's" },
            { letter: "D", "text": "(D) doctor" },
            { letter: "E", "text": "(E) doctor-in-law's" }
        ],
        correctAnswer: "C", // Singular recebe 's: doctor's
        videoUrl: ""
    },

    // Pergunta 13: Possessivo (singular)
    {
        id: "q13",
        type: "mc",
        questionText: "Qual frase está correta?",
        options: [
            { letter: "A", text: "(A) The <b>dogs'</b> toys were scattered." },
            { letter: "B", text: "(B) The <b>dog's</b> toys were scattered." },
            { letter: "C", text: "(C) The <b>dogs's</b> toys were scattered." },
            { letter: "D", text: "(D) The <b>dog</b> toys were scattered." },
            { letter: "E", text: "(E) The <b>dog of</b> toys were scattered." }
        ],
        correctAnswer: "B", // O cão é singular: dog's
        videoUrl: ""
    },

    // Pergunta 14: Possessivo (plural)
    {
        id: "q14",
        type: "mc",
        questionText: "Choose the correct option for the possessive form of the plural noun <b>'students'</b>:",
        options: [
            { letter: "A", text: "(A) students's" },
            { letter: "B", text: "(B) students'" },
            { letter: "C", text: "(C) student's" },
            { letter: "D", text: "(D) student" },
            { letter: "E", text: "(E) students" }
        ],
        correctAnswer: "B", // Plural terminado em S recebe apenas ': students'
        videoUrl: ""
    },

    // Pergunta 15: Nomes Clássicos/Bíblicos
    {
        id: "q15",
        type: "mc",
        questionText: "Complete a frase usando a regra para nomes bíblicos: <b>Jesus</b> disciples followed him.",
        options: [
            { letter: "A", text: "(A) Jesus's" },
            { letter: "B", text: "(B) Jesus" },
            { letter: "C", text: "(C) Jesus'" },
            { letter: "D", text: "(D) Jesus of" },
            { letter: "E", text: "(E) Jesuses'" }
        ],
        correctAnswer: "C", // Nomes bíblicos/clássicos terminados em S recebem apenas ': Jesus'
        videoUrl: ""
    },

    // Pergunta 16: Uso principal (Pessoas/Animais)
    {
        id: "q16",
        type: "mc",
        questionText: "Qual a principal função do Genitive Case ('s) em inglês?",
        options: [
            { letter: "A", text: "(A) Indicar tempo e lugar." },
            { letter: "B", text: "(B) Expressar posse, principalmente de pessoas e animais." },
            { letter: "C", text: "(C) Formar o plural de todos os substantivos." },
            { letter: "D", text: "(D) Substituir o verbo 'to be' em todas as frases." },
            { letter: "E", text: "(E) Indicar posse de objetos inanimados." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },

    // Pergunta 17: Equivalência com 'of'
    {
        id: "q17",
        type: "mc",
        questionText: "Qual das opções é equivalente a <b>'The room of my mother'</b>?",
        options: [
            { letter: "A", text: "(A) The mother's room." },
            { letter: "B", text: "(B) The mothers' room." },
            { letter: "C", text: "(C) The mother room." },
            { letter: "D", text: "(D) My mother's room." },
            { letter: "E", text: "(E) The mother of room." }
        ],
        correctAnswer: "D", // Mary's room (the room of Mary)
        videoUrl: ""
    },

    // Pergunta 18: Plural não terminado em S
    {
        id: "q18",
        type: "mc",
        questionText: "Complete: The <b>women</b> (plural irregular) locker room is on the second floor.",
        options: [
            { letter: "A", text: "(A) womens'" },
            { letter: "B", text: "(B) women's" },
            { letter: "C", text: "(C) womens's" },
            { letter: "D", text: "(D) women'" },
            { letter: "E", text: "(E) woman's" }
        ],
        correctAnswer: "B", // Plural irregular recebe 's: women's
        videoUrl: ""
    },

    // Pergunta 19: Genitivo em Inanimados Evitados
    {
    id: "q19",
    type: "mc",
    questionText: "Qual das frases abaixo usa o Genitive Case (<b>'s</b>) em uma situação onde ele é **geralmente evitado** ou a construção com <b>'of'</b> é a mais recomendada?",
    options: [
        { letter: "A", text: "(A) <b>My father's</b> new car is fast. (Pessoa)" },
        { letter: "B", text: "(B) <b>The Earth's</b> atmosphere is important. (Corpo Celeste/Exceção)" },
        { letter: "C", text: "(C) <b>The day's</b> news was shocking. (Tempo/Exceção)" },
        { letter: "D", text: "(D) <b>The chair's</b> leg is broken. (Objeto inanimado simples)" },
        { letter: "E", text: "(E) <b>The children's</b> toys are everywhere. (Plural irregular)" }
    ],
    correctAnswer: "D", // Para objetos inanimados simples como 'chair' (cadeira), a forma 'The leg of the chair' é a preferida, evitando o 's.
    videoUrl: ""
    },

    // Pergunta 20: Substantivo Composto
    {
        id: "q20",
        type: "mc",
        questionText: "Escolha a forma correta do Genitive Case para o substantivo composto <b>'editor-in-chief'</b> (editor-chefe).",
        options: [
            { letter: "A", text: "(A) editor's-in-chief" },
            { letter: "B", text: "(B) editor-in-chiefs'" },
            { letter: "C", text: "(C) editor-in-chief's" },
            { letter: "D", text: "(D) editors-in-chief's" },
            { letter: "E", text: "(E) editor's-in-chiefs'" }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },
    
    // Pergunta 22: Revisão de Regras - Plural
    {
        id: "q22",
        type: "mc",
        questionText: `
            Analise as aplicações do Genitive Case em substantivos plurais:
            <br><br>
            I. Plurais terminados em 's' recebem apenas <b>'</b> (Ex: The <b>boys'</b> toys).<br>
            II. Plurais irregulares recebem <b>'s</b> (Ex: The <b>men's</b> hats).<br>
            III. O plural do Genitive Case sempre usa 's.<br>
            IV. A frase 'The students' books' significa 'Os livros dos estudantes' (múltiplos estudantes).
        `,
        options: [
            { letter: "A", text: "(A) Apenas I, II e IV estão corretas." },
            { letter: "B", text: "(B) Apenas I e IV estão corretas." },
            { letter: "C", text: "(C) Apenas III e IV estão corretas." },
            { letter: "D", text: "(D) Todas estão corretas." }
        ],
        correctAnswer: "A", 
        videoUrl: ""
    },

    // Pergunta 23: Regras Específicas
    {
        id: "q23",
        type: "mc",
        questionText: `
            Sobre regras específicas do Genitive Case, é correto afirmar que:
            <br><br>
            I. Nomes próprios singulares terminados em 's' (ex: James) podem aceitar tanto <b>'</b> quanto <b>'s</b> (James' ou James's).<br>
            II. Nomes clássicos ou bíblicos terminados em 's' (ex: Moses) recebem <b>apenas '</b>. (Moses')<br>
            III. Substantivos compostos recebem <b>'s</b> apenas no último elemento (ex: sister-in-law's).<br>
            IV. O Genitive Case ('s) é a única forma de indicar posse em inglês.
        `,
        options: [
            { letter: "A", text: "(A) I, II e IV estão corretas." },
            { letter: "B", text: "(B) I, II e III estão corretas." },
            { letter: "C", text: "(C) Apenas II e IV estão corretas." },
            { letter: "D", text: "(D) Todas estão corretas." }
        ],
        correctAnswer: "B", // IV está incorreta (também usamos 'of')
        videoUrl: ""
    },

    // Pergunta 24: Diferença de Símbolos
    {
        id: "q24",
        type: "mc",
        questionText: `
            Avaliando o uso do apóstrofo e 's', qual opção está <b>incorreta</b>?
            <br><br>
            I. <b>Mary's</b> (Posse: O de Mary)<br>
            II. <b>Marys'</b> (Plural possessivo de 'Marys' - gramaticalmente incorreto, 'Mary' não é um plural regular)<br>
            III. <b>The cat's</b> (Posse: O do gato)<br>
            IV. <b>The cats'</b> (Posse: O dos gatos - múltiplos gatos)<br>
        `,
        options: [
            { letter: "A", text: "(A) Apenas II está incorreta." },
            { letter: "B", text: "(B) Apenas I e IV estão corretas." },
            { letter: "C", text: "(C) I, III e IV estão corretas." },
            { letter: "D", text: "(D) Todas estão corretas." }
        ],
        correctAnswer: "A", // 'Mary's é posse singular, 'Marys' não existe para posse. 'Marys' só existiria como um nome de família plural 'The Marys'.
        videoUrl: ""
    },
    
    // Pergunta 25: Nomes Singulares em S
    {
        id: "q25",
        type: "mc",
        questionText: `
            Sobre substantivos singulares terminados em 's', como <b>'boss'</b>, é correto afirmar que:
            <br><br>
            I. O livro didático indica que eles devem receber <b>'s</b> (boss's).<br>
            II. A forma com <b>apenas '</b> (boss') também é aceita por muitos falantes e estilos.<br>
            III. O uso do Genitive Case com 'boss' só é possível se o substantivo não for animado.
        `,
        options: [
            { letter: "A", text: "(A) Apenas I e II estão corretas." },
            { letter: "B", text: "(B) I, II e III estão corretas." },
            { letter: "C", text: "(C) Apenas III está correta." },
            { letter: "D", text: "(D) Apenas II e III estão corretas." }
        ],
        correctAnswer: "A", // O Genitive Case é para animado e inanimado em alguns casos (ex: A day's work), mas a regra principal é para pessoas/animais. O item III está incorreto.
        videoUrl: ""
    },

    // Pergunta 26: Uso de 's para Contração
    {
        id: "q26",
        type: "mc",
        questionText: `
            Em qual frase o 's <b>não</b> está sendo usado para o Genitive Case (posse)?
        `,
        options: [
            { letter: "A", text: "(A) That's a new car. (It is / Has)" },
            { letter: "B", text: "(B) Mary's car is new." },
            { letter: "C", text: "(C) The alligator's wings are strong." },
            { letter: "D", text: "(D) The girls' shoes are clean." }
        ],
        correctAnswer: "A", // "That's" é uma contração de "That is" ou "That has", não posse.
        videoUrl: ""
    },

    // Pergunta 27: Genitivo em Inanimados Evitados/Exceções
    {
    id: "q27",
    type: "mc",
    questionText: `
        Sobre as regras de uso do Genitive Case, analise as afirmações sobre os casos em que <b>não</b> se usa (ou se evita o uso) do <b>'s</b> para posse:
        <br><br>
        I. Para a maioria dos <b>objetos inanimados</b>, a construção com <b>'of'</b> é geralmente a mais recomendada. (Ex: 'The door of the car').<br>
        II. O Genitive Case <b>nunca</b> deve ser usado para indicar posse de <b>lugares</b> ou <b>países</b>.<br>
        III. Em substantivos compostos (Ex: mother-in-law), o <b>'s</b> deve ser colocado em todos os elementos do composto (Ex: 'mother's-in-law's house').<br>
        IV. O Genitive Case ('s) é comumente usado em expressões de <b>tempo</b> e <b>medidas</b> (Ex: 'A day's work'), sendo uma exceção à regra dos inanimados.
    `,
    options: [
        { letter: "A", text: "(A) Apenas I e IV estão corretas." },
        { letter: "B", text: "(B) Apenas I, II e III estão corretas." },
        { letter: "C", text: "(C) Apenas II e III estão corretas." },
        { letter: "D", text: "(D) Todas estão incorretas." }
    ],
    correctAnswer: "A", 
    videoUrl: ""
    }
    
];
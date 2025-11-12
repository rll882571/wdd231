const questionBank = [

    // ----------------------------------------------------------------------
    // BLOCO 1: QUESTÕES EM PORTUGUÊS (REGRAS GRAMATICAIS - 5 QUESTÕES)
    // ----------------------------------------------------------------------

    {
        id: "q1-superlative",
        type: "mc",
        questionText: "1. O que expressam os adjetivos no grau superlativo em inglês?",
        options: [
            { letter: "A", text: "(A) Comparação entre duas pessoas ou coisas." },
            { letter: "B", text: "(B) A qualidade em seu grau mais alto, o extremo." },
            { letter: "C", text: "(C) Igualdade entre duas pessoas ou objetos." },
            { letter: "D", text: "(D) Ações que ocorrem no presente." }
        ],
        hint: "Pense no sentido de 'o mais' em português, como 'o mais alto', 'o mais bonito'.",
        correctAnswer: "B"
    },

    {
        id: "q2-superlative",
        type: "mc",
        questionText: "2. Qual é a forma correta para formar o superlativo de adjetivos curtos (com uma sílaba)?",
        options: [
            { letter: "A", text: "(A) Adicionar 'er' ao final." },
            { letter: "B", text: "(B) Adicionar 'est' ao final e usar 'the' antes do adjetivo." },
            { letter: "C", text: "(C) Usar 'more' antes do adjetivo." },
            { letter: "D", text: "(D) Repetir o adjetivo duas vezes." }
        ],
        hint: "Exemplo: tall → the tallest.",
        correctAnswer: "B"
    },

    {
        id: "q3-superlative",
        type: "mc",
        questionText: "3. Como se forma o superlativo de adjetivos longos (com duas ou mais sílabas)?",
        options: [
            { letter: "A", text: "(A) Adicionando 'est' ao final." },
            { letter: "B", text: "(B) Colocando 'more' antes do adjetivo." },
            { letter: "C", text: "(C) Colocando 'the most' antes do adjetivo." },
            { letter: "D", text: "(D) Colocando 'the least' antes do adjetivo." }
        ],
        hint: "Exemplo: beautiful → the most beautiful.",
        correctAnswer: "C"
    },

    {
        id: "q4-superlative",
        type: "mc",
        questionText: "4. Qual é o superlativo irregular de 'good'?",
        options: [
            { letter: "A", text: "(A) The goodest." },
            { letter: "B", text: "(B) The better." },
            { letter: "C", text: "(C) The best." },
            { letter: "D", text: "(D) The most good." }
        ],
        hint: "Lembre-se: good → better (comparativo) → ? (superlativo).",
        correctAnswer: "C"
    },

    {
        id: "q5-superlative",
        type: "mc",
        questionText: "5. Em qual opção o adjetivo está corretamente no superlativo?",
        options: [
            { letter: "A", text: "(A) The most tall boy in the class." },
            { letter: "B", text: "(B) The tallest boy in the class." },
            { letter: "C", text: "(C) The more tall boy in the class." },
            { letter: "D", text: "(D) The tall boyer in the class." }
        ],
        hint: "Para adjetivos curtos, usamos 'the' + adjetivo + 'est'.",
        correctAnswer: "B"
    },

    // ----------------------------------------------------------------------
    // BLOCO 2: QUESTÕES EM INGLÊS (USO DOS SUPERLATIVES - 18 QUESTÕES)
    // ----------------------------------------------------------------------

    {
        id: "q6-superlative",
        type: "mc",
        questionText: "6. This is __________ movie I’ve ever seen!",
        options: [
            { letter: "A", text: "(A) the badest" },
            { letter: "B", text: "(B) the worse" },
            { letter: "C", text: "(C) the worst" },
            { letter: "D", text: "(D) the most bad" }
        ],
        hint: "‘Bad’ has an irregular superlative form.",
        correctAnswer: "C"
    },

    {
        id: "q7-superlative",
        type: "mc",
        questionText: "7. Mount Everest is __________ mountain in the world.",
        options: [
            { letter: "A", text: "(A) the highest" },
            { letter: "B", text: "(B) the most high" },
            { letter: "C", text: "(C) the more high" },
            { letter: "D", text: "(D) highest" }
        ],
        hint: "For short adjectives, add -est.",
        correctAnswer: "A"
    },

    {
        id: "q8-superlative",
        type: "mc",
        questionText: "8. That exam was __________ of all!",
        options: [
            { letter: "A", text: "(A) the difficultest" },
            { letter: "B", text: "(B) the most difficult" },
            { letter: "C", text: "(C) the more difficult" },
            { letter: "D", text: "(D) the difficulter" }
        ],
        hint: "‘Difficult’ is a long adjective.",
        correctAnswer: "B"
    },

    {
        id: "q9-superlative",
        type: "mc",
        questionText: "9. He is __________ player in the team.",
        options: [
            { letter: "A", text: "(A) the best" },
            { letter: "B", text: "(B) the most good" },
            { letter: "C", text: "(C) the goodest" },
            { letter: "D", text: "(D) the better" }
        ],
        hint: "Irregular form of 'good'.",
        correctAnswer: "A"
    },

    {
        id: "q10-superlative",
        type: "mc",
        questionText: "10. Today is __________ day of the week.",
        options: [
            { letter: "A", text: "(A) the more cold" },
            { letter: "B", text: "(B) the coldest" },
            { letter: "C", text: "(C) the colder" },
            { letter: "D", text: "(D) the most cold" }
        ],
        hint: "‘Cold’ is a short adjective.",
        correctAnswer: "B"
    },

    {
        id: "q11-superlative",
        type: "mc",
        questionText: "11. My house is __________ one in the neighborhood.",
        options: [
            { letter: "A", text: "(A) the most big" },
            { letter: "B", text: "(B) the biggest" },
            { letter: "C", text: "(C) the more big" },
            { letter: "D", text: "(D) biggest" }
        ],
        hint: "‘Big’ doubles the consonant before -est.",
        correctAnswer: "B"
    },

    {
        id: "q12-superlative",
        type: "mc",
        questionText: "12. That was __________ trip of my life!",
        options: [
            { letter: "A", text: "(A) the amazingest" },
            { letter: "B", text: "(B) the most amazing" },
            { letter: "C", text: "(C) the amazinger" },
            { letter: "D", text: "(D) most amazing" }
        ],
        hint: "Use 'the most' with long adjectives.",
        correctAnswer: "B"
    },

    {
        id: "q13-superlative",
        type: "mc",
        questionText: "13. December is usually __________ month of the year.",
        options: [
            { letter: "A", text: "(A) the colder" },
            { letter: "B", text: "(B) the most cold" },
            { letter: "C", text: "(C) the coldest" },
            { letter: "D", text: "(D) the more cold" }
        ],
        hint: "Short adjective → add -est.",
        correctAnswer: "C"
    },

    {
        id: "q14-superlative",
        type: "mc",
        questionText: "14. That was __________ test in the whole semester.",
        options: [
            { letter: "A", text: "(A) the easiest" },
            { letter: "B", text: "(B) the most easy" },
            { letter: "C", text: "(C) the more easy" },
            { letter: "D", text: "(D) the easyest" }
        ],
        hint: "‘Easy’ changes 'y' to 'i' before -est.",
        correctAnswer: "A"
    },

    {
        id: "q15-superlative",
        type: "mc",
        questionText: "15. Of all my friends, Lisa is __________.",
        options: [
            { letter: "A", text: "(A) the most funny" },
            { letter: "B", text: "(B) the funniest" },
            { letter: "C", text: "(C) the more funny" },
            { letter: "D", text: "(D) the funniest one" }
        ],
        hint: "‘Funny’ → change 'y' to 'i' before -est.",
        correctAnswer: "B"
    },

    {
        id: "q16-superlative",
        type: "mc",
        questionText: "16. This book is __________ than the movie, but the movie is __________ of all versions.",
        options: [
            { letter: "A", text: "(A) better / the best" },
            { letter: "B", text: "(B) good / the goodest" },
            { letter: "C", text: "(C) more good / most good" },
            { letter: "D", text: "(D) the better / the more good" }
        ],
        hint: "‘Good’ and ‘bad’ have irregular comparative and superlative forms.",
        correctAnswer: "A"
    },

    {
        id: "q17-superlative",
        type: "mc",
        questionText: "17. Of all the cars, that one is __________.",
        options: [
            { letter: "A", text: "(A) the most expensive" },
            { letter: "B", text: "(B) the expensivest" },
            { letter: "C", text: "(C) the more expensive" },
            { letter: "D", text: "(D) expensivest" }
        ],
        hint: "‘Expensive’ → long adjective → use 'the most'.",
        correctAnswer: "A"
    },

    {
        id: "q18-superlative",
        type: "mc",
        questionText: "18. This is __________ restaurant in the city.",
        options: [
            { letter: "A", text: "(A) the better" },
            { letter: "B", text: "(B) the best" },
            { letter: "C", text: "(C) the most good" },
            { letter: "D", text: "(D) the goodest" }
        ],
        hint: "Irregular form of 'good'.",
        correctAnswer: "B"
    },

    {
        id: "q19-superlative",
        type: "mc",
        questionText: "19. Sarah is __________ person I know.",
        options: [
            { letter: "A", text: "(A) the most kind" },
            { letter: "B", text: "(B) the kindest" },
            { letter: "C", text: "(C) the more kind" },
            { letter: "D", text: "(D) kindest" }
        ],
        hint: "Short adjective ending in consonant → just add -est.",
        correctAnswer: "B"
    },

    {
        id: "q20-superlative",
        type: "mc",
        questionText: "20. Of all subjects, Math is __________ for me.",
        options: [
            { letter: "A", text: "(A) the hardest" },
            { letter: "B", text: "(B) the most hard" },
            { letter: "C", text: "(C) the hardiest" },
            { letter: "D", text: "(D) the more hard" }
        ],
        hint: "Short adjective → add -est.",
        correctAnswer: "A"
    },

    {
        id: "q21-superlative",
        type: "mc",
        questionText: "21. Today was __________ day of my life!",
        options: [
            { letter: "A", text: "(A) the happiest" },
            { letter: "B", text: "(B) the most happy" },
            { letter: "C", text: "(C) the happyest" },
            { letter: "D", text: "(D) happiest" }
        ],
        hint: "Adjectives ending in 'y' → change 'y' to 'i' + -est.",
        correctAnswer: "A"
    },

    {
        id: "q22-superlative",
        type: "mc",
        questionText: "22. Of all the students, Maria is __________ at drawing.",
        options: [
            { letter: "A", text: "(A) the better" },
            { letter: "B", text: "(B) the best" },
            { letter: "C", text: "(C) the most good" },
            { letter: "D", text: "(D) the goodest" }
        ],
        hint: "Remember: good → better → the best.",
        correctAnswer: "B"
    },

    {
        id: "q23-superlative",
        type: "mc",
        questionText: "23. Of all my cousins, Pedro is __________.",
        options: [
            { letter: "A", text: "(A) the taller" },
            { letter: "B", text: "(B) the tallest" },
            { letter: "C", text: "(C) the most tall" },
            { letter: "D", text: "(D) tallest" }
        ],
        hint: "Short adjective → add -est + 'the'.",
        correctAnswer: "B"
    },
    // Q24: Superlative error - missing "the"
{
    id: "q24-superlative",
    type: "mc",
    questionText: "A frase está errada: 'Mount Everest is highest mountain in the world.' Por que está errada?",
    options: [
        { letter: "A", text: "(A) Faltou o artigo 'the' antes do superlativo." },
        { letter: "B", text: "(B) O superlativo deveria ser 'more high'." },
        { letter: "C", text: "(C) A palavra 'mountain' está no plural." },
        { letter: "D", text: "(D) O verbo está incorreto." }
    ],
    hint: "Lembre-se de que usamos 'the' antes de superlativos.",
    correctAnswer: "A"
},

// Q25: Superlative error - wrong form "more" instead of "-est"
{
    id: "q25-superlative",
    type: "mc",
    questionText: "A frase está errada: 'This is the more expensive phone in the store.' Por que está errada?",
    options: [
        { letter: "A", text: "(A) Deveria ser 'the most expensive' porque o adjetivo tem mais de duas sílabas." },
        { letter: "B", text: "(B) Deveria ser 'the expensivest'." },
        { letter: "C", text: "(C) Deveria ser 'the more expensiver'." },
        { letter: "D", text: "(D) O artigo 'the' não deve ser usado aqui." }
    ],
    hint: "Adjetivos longos (duas sílabas ou mais) usam 'most' no superlativo.",
    correctAnswer: "A"
},

// Q26: Superlative error - using 'most' with a short adjective
{
    id: "q26-superlative",
    type: "mc",
    questionText: "A frase está errada: 'John is the most tall student in the class.' Por que está errada?",
    options: [
        { letter: "A", text: "(A) Adjetivos curtos usam '-est', não 'most'." },
        { letter: "B", text: "(B) Faltou o artigo 'the' antes de 'most'." },
        { letter: "C", text: "(C) A palavra 'student' está errada." },
        { letter: "D", text: "(D) O adjetivo 'tall' não tem forma superlativa." }
    ],
    hint: "Para adjetivos curtos, usamos '-est' no final, como 'tallest'.",
    correctAnswer: "A"
}


];

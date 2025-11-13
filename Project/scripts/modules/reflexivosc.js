const questionBank = [

    // Pergunta 1
    {
        id: "q1",
        type: "mc",
        questionText: `
            Read the sentences below and choose the option that shows only correct uses of Reflexive Pronouns.
            <br><br>
            I. He taught herself to play the guitar.<br>
            II. She looked at herself in the mirror.<br>
            III. We enjoyed ourselves at the party.<br>
            IV. They bought themselves some new shoes.<br>
            V. Please, help myself to some cookies.
        `,
        options: [
            { letter: "A", text: "(A) Only II, III and IV are correct." },
            { letter: "B", text: "(B) Only I and V are correct." },
            { letter: "C", text: "(C) Only I, II and III are correct." },
            { letter: "D", text: "(D) Only I, II, III and IV are correct." },
            { letter: "E", text: "(E) All of them are correct." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    
    {
        id: "q2",
        type: "mc",
        questionText: "Which sentence uses the reflexive pronoun correctly?",
        options: [
            { letter: "A", text: "(A) She bought himself a new dress." },
            { letter: "B", text: "(B) He cut himself while shaving." },
            { letter: "C", text: "(C) They blame theirselves for the mistake." },
            { letter: "D", text: "(D) I saw me in the reflection." },
            { letter: "E", text: "(E) The cat washed it." }
        ],
        correctAnswer: "B",
        videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0" 
    },

    // Pergunta 3 
    {
        id: "q3",
        type: "fill-verb", 
        questionText: "Read and choose the correct reflexive pronoun to complete the sentence.",
        lines: [
            { text: "(A) I taught ... to speak English.", verbs: ["myself", "me"] },
            { text: "(B) The children behaved ... very well.", verbs: ["themselves", "theyselves"] },
            { text: "(C) She accidentally hurt ... with the knife.", verbs: ["her", "herself"] },
            { text: "(D) He built the house all by ... .", verbs: ["myself", "himself"] },
            { text: "(E) We should be proud of ... for finishing the project.", verbs: ["we", "ourselves"] }
        ],
        correctAnswer: ["myself", "themselves", "herself", "himself", "ourselves"],
        videoUrl: "https://www.youtube.com/embed/ENZ0-KRAcp0" 
    },

    // Pergunta 4
    {
    id: "q4",
    type: "mc",
    questionText: `
        Sobre o uso dos pronomes reflexivos, é correto afirmar que:
        <br><br>
        I. Eles são usados quando o sujeito e o objeto do verbo são a mesma pessoa ou coisa.<br>
        II. Eles podem ser usados para adicionar ênfase ao sujeito.<br>
        III. "Theirselves" e "hisself" são formas padrão corretas.<br>
        IV. Eles são usados após preposições quando o objeto é o mesmo que o sujeito (ex: "He spoke to himself").<br>
        V. Eles são sempre opcionais e podem ser removidos sem alterar o significado.
    `,
    options: [
        { letter: "A", text: "(A) I, II e IV estão corretas." },
        { letter: "B", text: "(B) I, III e V estão corretas." },
        { letter: "C", text: "(C) II, IV e V estão corretas." },
        { letter: "D", text: "(D) Apenas a III está correta." }
    ],
    correctAnswer: "A",
    videoUrl: ""
},

    // Pergunta 5
    {
        id: "q5",
        type: "mc",
        questionText: `
            <img src="images/mi.jpg" alt="Comic" loading="lazy" style="width: 280px; height: 180px;">
            <br><br>
            Leia o trecho da música e marque a marque a afirmação correta.
        `,
        options: [
            { letter: "A", text: "(A) Ela diz que prefere ficar sozinha do que estar com alguém, pois não gosta de se relacionar com outras pessoas." },
            { letter: "B", text: "(B) Ela diz que pode comprar flores para si mesma, conversar com si mesma por horas e sair para dançar sozinha." },
            { letter: "C", text: "(C) It is the object of the verb 'drove'." },
            { letter: "D", text: "(D) Ela diz que não se importa com o que os outros pensam dela, pois é uma pessoa independente e livre." },
            { letter: "E", text: "(E) Ela diz que espera que lhe deem flores, que lhe deem atenção e que a convidem para sair e dançar." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 6
    {
        id: "q6",
        type: "mc",
        questionText: `
            When comparing "He hurt himself" (1) and "He himself built the house" (2), what is the difference?
        `,
        options: [
            { letter: "A", text: "(A) There is no difference; both are emphatic." },
            { letter: "B", text: "(B) There is no difference; both are reflexive." },
            { letter: "C", text: "(C) (1) is reflexive (subject = object), and (2) is emphatic (adds emphasis)." },
            { letter: "D", text: "(D) (1) is emphatic, and (2) is reflexive." },
            { letter: "E", text: "(E) Both are grammatically incorrect." }
        ],
        correctAnswer: "C",
        videoUrl: "https://www.youtube.com/embed/mW4INGFLBhA" 
    },

    // Pergunta 7
    {
        id: "q7",
        type: "mc",
        questionText: "Which sentence correctly uses a plural reflexive pronoun?",
        options: [
            { letter: "A", text: "(A) We taught ourselves to code." },
            { letter: "B", text: "(B) They blame theirselves for the loss." },
            { letter: "C", text: "(C) You (plural) should be proud of yourself." },
            { letter: "D", text: "(D) We bought usselves new coats." },
            { letter: "E", text: "(E) The cats (plural) cleaned itself." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 8
    {
        id: "q8",
        type: "mc",
        questionText: `
            Choose the correct sentence:
        `,
        options: [
            { letter: "A", text: "(A) The computer will update it automatically." },
            { letter: "B", text: "(B) The computer will update itself automatically." },
            { letter: "C", text: "(C) The computer will update hisself automatically." },
            { letter: "D", text: "(D) The computer will update itselves automatically." },
            { letter: "E", text: "(E) The computer will update himself automatically." }
        ],
        correctAnswer: "B",
        videoUrl: "https://www.youtube.com/embed/MgYPm9kjQSw" 
    },

    // Pergunta 9
    {
        id: "q9",
        type: "mc",
        questionText: "Which pronoun is an incorrect or non-standard form?",
        options: [
            { letter: "A", text: "(A) myself" },
            { letter: "B", text: "(B) themselves" },
            { letter: "C", text: "(C) ourselves" },
            { letter: "D", text: "(D) hisself" },
            { letter: "E", text: "(E) itself" }
        ],
        correctAnswer: "D",
        videoUrl: ""
    },

    // Pergunta 10
    {
        id: "q10",
        type: "mc",
        questionText: "Choose the correct option: She looked at ______ in the mirror.",
        options: [
            { letter: "A", text: "(A) her" },
            { letter: "B", text: "(B) hers" },
            { letter: "C", text: "(C) herself" },
            { letter: "D", text: "(D) itself" },
            { letter: "E", text: "(E) she" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },
    
    // Pergunta 11
    {
        id: "q11",
        type: "mc",
        questionText: "Complete: Did you (one person) teach ______ to play the piano?",
        options: [
            { letter: "A", text: "(A) you" },
            { letter: "B", text: "(B) your" },
            { letter: "C", text: "(C) yourself" },
            { letter: "D", text: "(D) yourselves" },
            { letter: "E", text: "(E) me" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 12
    {
        id: "q12",
        type: "mc",
        questionText: "Complete: You (group of students) must finish the work ______.",
        options: [
            { letter: "A", text: "(A) your" },
            { letter: "B", text: "(B) yourselves" },
            { letter: "C", text: "(C) yourself" },
            { letter: "D", text: "(D) them" },
            { letter: "E", text: "(E) they" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

     // Pergunta 13
    {
        id: "q13",
        type: "mc",
        questionText: "Complete: They bought ______ a new car.",
        options: [
            { letter: "A", text: "(A) them" },
            { letter: "B", text: "(B) their" },
            { letter: "C", text: "(C) themselves" },
            { letter: "D", text: "(D) theirselves" },
            { letter: "E", text: "(E) they" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

     // Pergunta 14
    {
        id: "q14",
        type: "mc",
        questionText: "Choose the correct sentence:",
        options: [
            { letter: "A", text: "(A) He introduced me to his boss." },
            { letter: "B", text: "(B) He introduced himself to his boss." },
            { letter: "C", text: "(C) He introduced him to his boss." },
            { letter: "D", text: "(D) He introduced hisself to his boss." },
            { letter: "E", text: "(E) He introduced he to his boss." }
        ],
        correctAnswer: "B",
        videoUrl: "https://youtu.be/R3C6zv6ay_4?si=L-naf26hdbPrL3qL"
    },

    // Pergunta 15
    {
        id: "q15",
        type: "mc",
        questionText: "Complete: We really enjoyed ______ at the concert last night.",
        options: [
            { letter: "A", text: "(A) ourselves" },
            { letter: "B", text: "(B) us" },
            { letter: "C", text: "(C) our" },
            { letter: "D", text: "(D) themselves" },
            { letter: "E", text: "(E) usselves" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 16
    {
        id: "q16",
        type: "mc",
        questionText: "Choose the correct question for the answer: 'Yes, I made it myself.'",
        options: [
            { letter: "A", text: "(A) Did you made it?" },
            { letter: "B", text: "(B) Did you make it yourself?" },
            { letter: "C", text: "(C) Did you make it you?" },
            { letter: "D", text: "(D) Did yourself make it?" },
            { letter: "E", text: "(E) Did you make it themselves?" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 17
    {
        id: "q17",
        type: "mc",
        questionText: "Complete: I cut ______ while I was cooking dinner.",
        options: [
            { letter: "A", text: "(A) me" },
            { letter: "B", text: "(B) myself" },
            { letter: "C", text: "(C) I" },
            { letter: "D", text: "(D) my" },
            { letter: "E", text: "(E) meself" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 18
    {
        id: "q18",
        type: "mc",
        questionText: "C(Unesp) Complete the sentence correctly: I can't wash ________ if I don't have any water.",
        options: [
            { letter: "A", text: "(A) himself" },
            { letter: "B", text: "(B) myself" },
            { letter: "C", text: "(C) me" },
            { letter: "D", text: "(D) myselves" },
            { letter: "E", text: "(E) herself" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 19
    {
        id: "q19",
        type: "mc",
        questionText: "Complete: The cat is cleaning ______ with its tongue.",
        options: [
            { letter: "A", text: "(A) it" },
            { letter: "B", text: "(B) itself" },
            { letter: "C", text: "(C) himself" },
            { letter: "D", text: "(D) its" },
            { letter: "E", text: "(E) itselfs" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 20
    {
        id: "q20",
        type: "mc",
        questionText: "(UFMA) Complete with the right pronoun: Behave ________ !",
        options: [
            { letter: "A", text: "(A) you" },
            { letter: "B", text: "(B) yourself" },
            { letter: "C", text: "(C) me" },
            { letter: "D", text: "(D) herself" },
            { letter: "E", text: "(E) himself" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },
    
    // Pergunta 21 (ID corrigido)
    {
        id: "q21", // CORRIGIDO
        type: "mc",
        questionText: `
            <img src="images/garf.png" alt="Comic" loading="lazy" style="width: 280px; height: 180px;">
            <br><br>
            In the sentence “You look a little overinflated yourself”, the word “yourself” is:
        `,
        options: [
            { letter: "A", text: "(A) um pronome reflexivo e refere-se ao personagem Benny." },
            { letter: "B", text: "(B) um pronome recíproco e refere-se aos dois personagens, Benny e Garfield." },
            { letter: "C", text: "(C) um pronome relativo e refere-se ao personagem Garfield." },
            { letter: "D", text: "(D) um pronome reflexivo e refere-se ao personagem Garfield." },
            { letter: "E", text: "(E) um pronome relativo e refere-se ao personagem Benny." }
        ],
        correctAnswer: "D",
        videoUrl: ""
    },
    
    // Pergunta 22
    {
        id: "q22",
        type: "mc",
        questionText: `
            Analise as diferentes funções dos pronomes reflexivos nas frases abaixo:
            <br><br>
            I. Em "I built the house by myself", o pronome indica que a ação foi feita "sozinho, sem ajuda".<br>
            II. Em "I myself built the house", o pronome é usado para dar "ênfase" ao sujeito (Eu mesmo, pessoalmente).<br>
            III. Em "I hurt myself", o pronome indica que a ação do verbo recaiu sobre o próprio sujeito.<br>
            IV. Em "I built this for myself", o significado é o mesmo de "by myself" (sozinho).
        `,
        options: [
            { letter: "A", text: "(A) Apenas I, II e III estão corretas." },
            { letter: "B", text: "(B) Apenas I e IV estão corretas." },
            { letter: "C", text: "(C) Apenas III e IV estão corretas." },
            { letter: "D", text: "(D) Todas estão corretas." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 23
    {
        id: "q23",
        type: "mc",
        questionText: `
            Sobre as regras de uso dos pronomes reflexivos, é correto afirmar que:
            <br><br>
            I. Eles nunca são usados após preposições (como 'with' ou 'for').<br>
            II. Em inglês, verbos como "relax" (relaxar) e "concentrate" (concentrar) geralmente não pedem um pronome reflexivo. (Ex: "I need to relax", e não "I need to relax myself").<br>
            III. "Theirselves" (para 'they') e "hisself" (para 'he') são formas gramaticalmente corretas e muito usadas.<br>
            IV. Eles são usados em expressões idiomáticas fixas, como "Behave yourself!" (Comporte-se!).
        `,
        options: [
            { letter: "A", text: "(A) I, II e IV estão corretas." },
            { letter: "B", text: "(B) II, III e IV estão corretas." },
            { letter: "C", text: "(C) Apenas II e IV estão corretas." },
            { letter: "D", text: "(D) Apenas I e III estão corretas." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 24
    {
        id: "q24",
        type: "mc",
        questionText: `
            Avaliando o uso de pronomes reflexivos, quais afirmações são verdadeiras?
            <br><br>
            I. A expressão "Help yourself" é um convite educado para alguém se servir (pegar comida, bebida).<br>
            II. "Yourself" é usado para "you" (singular - você), e "yourselves" é usado para "you" (plural - vocês).<br>
            III. Quando o sujeito e o objeto são diferentes, não podemos usar um pronome reflexivo. (Ex: "She cooked dinner for him", e não "...for himself").<br>
            IV. O pronome correto para "We" (nós) é "ourself".
        `,
        options: [
            { letter: "A", text: "(A) I, II e III são verdadeiras." },
            { letter: "B", text: "(B) II e IV são verdadeiras." },
            { letter: "C", text: "(C) I, III e IV são verdadeiras." },
            { letter: "D", text: "(D) Apenas I e II são verdadeiras." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },
     // Não esqueça da vírgula depois da q24

    // Pergunta 25
    {
        id: "q25",
        type: "mc",
        questionText: `
            Sobre os usos dos pronomes reflexivos, é correto afirmar que:
            <br><br>
            I. O uso 'Reflexivo' ocorre quando o sujeito e o objeto da ação são a mesma pessoa (ex: "I cut myself").<br>
            II. O uso 'Enfático' serve para dar ênfase ao sujeito ou objeto e pode ser removido da frase sem quebrar a gramática (ex: "I myself did it").<br>
            III. A frase "She bought herself a new book" é um exemplo de uso 'Enfático'.<br>
            IV. O uso 'Reflexivo' é sempre opcional na frase.
        `,
        options: [
            { letter: "A", text: "(A) Apenas I e II estão corretas." },
            { letter: "B", text: "(B) I, II e III estão corretas." },
            { letter: "C", text: "(C) Apenas III e IV estão corretas." },
            { letter: "D", text: "(D) Todas estão corretas." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 26
    {
        id: "q26",
        type: "mc",
        questionText: `
            Avaliando as formas e usos dos pronomes reflexivos, analise as afirmações:
            <br><br>
            I. A expressão "by oneself" (ex: "by myself") é uma forma idiomática que significa "sozinho" ou "sem ajuda".<br>
            II. As palavras "hisself" (para 'he') e "theirselves" (para 'they') são formas gramaticais corretas e aceitas.<br>
            III. "Themselves" é o pronome reflexivo correto para o sujeito "They".<br>
            IV. "Yourself" (singular) e "Yourselves" (plural) são usados para o sujeito "You".
        `,
        options: [
            { letter: "A", text: "(A) I, II e III estão corretas." },
            { letter: "B", text: "(B) Apenas II e III estão corretas." },
            { letter: "C", text: "(C) I, III e IV estão corretas." },
            { letter: "D", text: "(D) Apenas I e IV estão corretas." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 27
    {
        id: "q27",
        type: "mc",
        questionText: `
            Sobre regras específicas dos pronomes reflexivos, é correto afirmar que:
            <br><br>
            I. O pronome reflexivo correto para o sujeito "It" é "itself".<br>
            II. Verbos como "relax" e "concentrate" (relaxar, concentrar) geralmente NÃO precisam de pronome reflexivo em inglês (ex: "I need to relax").<br>
            III. A frase "He spoke to himself" (Ele falou consigo mesmo) é um exemplo de uso 'Reflexivo' após uma preposição.<br>
            IV. O pronome reflexivo para "We" (nós) é "ourself".
        `,
        options: [
            { letter: "A", text: "(A) I, II e III estão corretas." },
            { letter: "B", text: "(B) I e IV estão corretas." },
            { letter: "C", text: "(C) Apenas II, III e IV estão corretas." },
            { letter: "D", text: "(D) Todas estão corretas." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    }
    
];
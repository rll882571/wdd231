

const questionBank = [

    // Pergunta 1
    {
        id: "q1",
        type: "mc",
        questionText: `
            Read the sentences below and choose the option that shows only correct uses of the structure:
            <br><br>
            <b>Subject + modal + have + Past Participle</b>
            <br><br>
            I. She must have gone to school.<br>
            II. They might have finish the homework.<br>
            III. He could have seen that movie.<br>
            IV. We should have studied more.<br>
            V. She must had gone early.
        `,
        options: [
            { letter: "A", text: "(A) Only I, III and IV are correct." },
            { letter: "B", text: "(B) Only II and V are correct." },
            { letter: "C", text: "(C) Only I, II and III are correct." },
            { letter: "D", text: "(D) Only I, III, IV and V are correct." },
            { letter: "E", text: "(E) All of them are correct." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 2
    {
        id: "q2",
        type: "mc",
        questionText: `
            Sobre o uso de <b>"must have"</b>, qual explicação está correta?
        `,
        options: [
            { letter: "A", text: "(A) Usado para indicar uma possibilidade incerta, sem evidências claras." },
            { letter: "B", text: "(B) Usado para expressar uma habilidade no passado que não foi realizada." },
            { letter: "C", text: "(C) Usado para indicar quase certeza (90-100%), baseado em evidências lógicas." },
            { letter: "D", text: "(D) Usado para falar de planos futuros." },
            { letter: "E", text: "(E) Usado para dar permissão no presente." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 3
    {
        id: "q3",
        type: "fill-verb",
        questionText: "Complete the sentences with the correct option (must have / may have / might have / could have).",
        lines: [
            { text: "(A) Sarah is not answering her phone, and her car is not in the driveway. She ___ gone out.", verbs: ["must have", "might have"] },
            { text: "(B) I can’t find my wallet anywhere. I ___ left it at the restaurant, but I’m not sure.", verbs: ["may have", "must have"] },
            { text: "(C) He trained very hard for the competition. He ___ won if he had participated.", verbs: ["could have", "must have"] },
            { text: "(D) The lights are off and the door is locked. They ___ gone to bed already.", verbs: ["must have", "might have"] },
            { text: "(E) She didn’t come to class today. She ___ forgotten about the test, but we don’t know.", verbs: ["might have", "must have"] }
        ],
        correctAnswer: ["must have", "may have", "could have", "must have", "might have"],
        videoUrl: ""
    },

    // Pergunta 4
    {
        id: "q4",
        type: "mc",
        questionText: `
            Sobre o uso de <b>"could have"</b>, qual explicação está correta?
        `,
        options: [
            { letter: "A", text: "(A) Usado para indicar uma certeza absoluta baseada em evidências." },
            { letter: "B", text: "(B) Usado para indicar uma possibilidade ou algo que poderia ter acontecido, mas não sabemos se aconteceu." },
            { letter: "C", text: "(C) Usado para indicar uma obrigação no passado." },
            { letter: "D", text: "(D) Usado para falar de planos confirmados no futuro." },
            { letter: "E", text: "(E) Usado para dar permissão no presente." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 5
    {
        id: "q5",
        type: "mc",
        imageUrl: "images/img1.png",
        questionText: `
            In the comic, Calvin uses reasoning to solve a math problem and says the answer "must be" correct.
            <br><br>
            What does this use of "must" express?
        `,
        options: [
            { letter: "A", text: "(A) A weak possibility with no clear evidence." },
            { letter: "B", text: "(B) A strong logical conclusion based on evidence." },
            { letter: "C", text: "(C) A past ability that was not used." },
            { letter: "D", text: "(D) A future plan or intention." },
            { letter: "E", text: "(E) A permission in the present." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 6
    {
        id: "q6",
        type: "mc",
        imageUrl: "images/img2.png",
        questionText: `
            In the comic, Garfield says: "I could have bought a pizza!".
            <br><br>
            What does this use of "could have" express?
        `,
        options: [
            { letter: "A", text: "(A) A certain action that already happened." },
            { letter: "B", text: "(B) A strong logical conclusion based on evidence." },
            { letter: "C", text: "(C) A possibility or alternative that did not happen." },
            { letter: "D", text: "(D) A future plan." },
            { letter: "E", text: "(E) A present obligation." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 7
    {
        id: "q7",
        type: "mc",
        questionText: `
            Leia os contextos e escolha a alternativa que utiliza os modais de forma correta para cada situação:
            <br><br>
            I. Você vê que o chão está todo molhado e o céu está cinza (Conclusão lógica).<br>
            II. Seu amigo não veio à aula e você não sabe o porquê (Suposição incerta).<br>
            III. Você quase caiu da escada, mas se segurou (Algo que era possível, mas não ocorreu).<br>
        `,
        options: [
            { letter: "A", text: "(A) I- It must have rained; II- He might have forgotten; III- I could have fallen!" },
            { letter: "B", text: "(B) I- It could have rained; II- He must have forgotten; III- I may have fallen!" },
            { letter: "C", text: "(C) I- It must have rained; II- He might has forgotten; III- I could have fell!" },
            { letter: "D", text: "(D) I- It might have rained; II- He could have forgotten; III- I must have fallen!" },
            { letter: "E", text: "(E) I- It must have rain; II- He might have forgot; III- I could have fall!" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 8
    {
        id: "q8",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"beneficial"</b>?
        `,
        options: [
            { letter: "A", text: "(A) prejudicial." },
            { letter: "B", text: "(B) benéfico." },
            { letter: "C", text: "(C) perigoso." },
            { letter: "D", text: "(D) difícil." },
            { letter: "E", text: "(E) caro." }
        ],
        correctAnswer: "B",
        videoUrl: "https://www.youtube.com/embed/MgYPm9kjQSw"
    },

    // Pergunta 9
    {
        id: "q9",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"crucial"</b>?
        `,
        options: [
            { letter: "A", text: "(A) opcional." },
            { letter: "B", text: "(B) importante / essencial." },
            { letter: "C", text: "(C) pequeno." },
            { letter: "D", text: "(D) lento." },
            { letter: "E", text: "(E) barato." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 10
    {
        id: "q10",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"destroy"</b>?
        `,
        options: [
            { letter: "A", text: "(A) construir." },
            { letter: "B", text: "(B) proteger." },
            { letter: "C", text: "(C) destruir." },
            { letter: "D", text: "(D) limpar." },
            { letter: "E", text: "(E) organizar." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 11 (Note: This is identical to Question 10)
    {
        id: "q11",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"destroy"</b>?
        `,
        options: [
            { letter: "A", text: "(A) construir." },
            { letter: "B", text: "(B) proteger." },
            { letter: "C", text: "(C) destruir." },
            { letter: "D", text: "(D) limpar." },
            { letter: "E", text: "(E) organizar." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 12
    {
        id: "q12",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"disgusting"</b>?
        `,
        options: [
            { letter: "A", text: "(A) delicioso." },
            { letter: "B", text: "(B) bonito." },
            { letter: "C", text: "(C) agradável." },
            { letter: "D", text: "(D) nojento." },
            { letter: "E", text: "(E) limpo." }
        ],
        correctAnswer: "D",
        videoUrl: ""
    },

    // Pergunta 13
    {
        id: "q13",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"sting"</b>?
        `,
        options: [
            { letter: "A", text: "(A) picar (como inseto)." },
            { letter: "B", text: "(B) correr." },
            { letter: "C", text: "(C) dormir." },
            { letter: "D", text: "(D) comer." },
            { letter: "E", text: "(E) cair." }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 14
    {
        id: "q14",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"slimy"</b>?
        `,
        options: [
            { letter: "A", text: "(A) seco." },
            { letter: "B", text: "(B) áspero." },
            { letter: "C", text: "(C) viscoso / gosmento." },
            { letter: "D", text: "(D) duro." },
            { letter: "E", text: "(E) leve." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 15
    {
        id: "q15",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"poisonous"</b>?
        `,
        options: [
            { letter: "A", text: "(A) saudável." },
            { letter: "B", text: "(B) perigoso." },
            { letter: "C", text: "(C) venenoso." },
            { letter: "D", text: "(D) doce." },
            { letter: "E", text: "(E) limpo." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 16
    {
        id: "q16",
        type: "mc",
        questionText: `
            Qual a melhor tradução para a palavra <b>"ecosystem"</b>?
        `,
        options: [
            { letter: "A", text: "(A) atmosfera." },
            { letter: "B", text: "(B) ecossistema." },
            { letter: "C", text: "(C) floresta." },
            { letter: "D", text: "(D) planeta." },
            { letter: "E", text: "(E) natureza." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 17
    {
        id: "q17",
        type: "mc",
        questionText: `
            Choose the correct word to complete the sentence:
            <br><br>
            This decision is ______ for the success of the project.
        `,
        options: [
            { letter: "A", text: "(A) slimy" },
            { letter: "B", text: "(B) disgusting" },
            { letter: "C", text: "(C) crucial" },
            { letter: "D", text: "(D) sting" },
            { letter: "E", text: "(E) poisonous" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 18
    {
        id: "q18",
        type: "mc",
        questionText: `
            Choose the correct word to complete the sentence:
            <br><br>
            The hurricane can ______ entire cities if it is strong enough.
        `,
        options: [
            { letter: "A", text: "(A) destroy" },
            { letter: "B", text: "(B) sting" },
            { letter: "C", text: "(C) slimy" },
            { letter: "D", text: "(D) crucial" },
            { letter: "E", text: "(E) ecosystem" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 19
    {
        id: "q19",
        type: "mc",
        questionText: `
            Choose the correct word to complete the sentence:
            <br><br>
            The food smelled so bad that it was absolutely ______.
        `,
        options: [
            { letter: "A", text: "(A) slimy" },
            { letter: "B", text: "(B) disgusting" },
            { letter: "C", text: "(C) crucial" },
            { letter: "D", text: "(D) ecosystem" },
            { letter: "E", text: "(E) sting" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 20
    {
        id: "q20",
        type: "mc",
        questionText: `
            Choose the correct word to complete the sentence:
            <br><br>
            Be careful! That bee can ______ you if you get too close.
        `,
        options: [
            { letter: "A", text: "(A) destroy" },
            { letter: "B", text: "(B) slimy" },
            { letter: "C", text: "(C) sting" },
            { letter: "D", text: "(D) crucial" },
            { letter: "E", text: "(E) ecosystem" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 21
    {
        id: "q21",
        type: "mc",
        questionText: `
            Choose the correct word to complete the sentence:
            <br><br>
            The frog’s skin felt cold and ______.
        `,
        options: [
            { letter: "A", text: "(A) disgusting" },
            { letter: "B", text: "(B) slimy" },
            { letter: "C", text: "(C) crucial" },
            { letter: "D", text: "(D) destroy" },
            { letter: "E", text: "(E) ecosystem" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 22
    {
        id: "q22",
        type: "mc",
        questionText: `
            Choose the correct word to complete the sentence:
            <br><br>
            Some mushrooms are ______, so you should never eat them.
        `,
        options: [
            { letter: "A", text: "(A) slimy" },
            { letter: "B", text: "(B) crucial" },
            { letter: "C", text: "(C) poisonous" },
            { letter: "D", text: "(D) sting" },
            { letter: "E", text: "(E) destroy" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 23
    {
        id: "q23",
        type: "mc",
        questionText: `
            Choose the correct word to complete the sentence:
            <br><br>
            Climate change can seriously affect the entire ______.
        `,
        options: [
            { letter: "A", text: "(A) ecosystem" },
            { letter: "B", text: "(B) sting" },
            { letter: "C", text: "(C) slimy" },
            { letter: "D", text: "(D) disgusting" },
            { letter: "E", text: "(E) crucial" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 24
    {
        id: "q24",
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

    // Pergunta 25
    {
        id: "q25",
        type: "mc",
        questionText: `
            O uso do prefixo <b>"un-"</b> antes das palavras geralmente indica:
        `,
        options: [
            { letter: "A", text: "(A) Repetição de uma ação." },
            { letter: "B", text: "(B) O oposto ou negação." },
            { letter: "C", text: "(C) Uma ação no passado." },
            { letter: "D", text: "(D) Intensidade." },
            { letter: "E", text: "(E) Algo positivo." }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 26
    {
        id: "q26",
        type: "mc",
        questionText: `
            O uso do prefixo <b>"mis-"</b> antes das palavras geralmente indica:
        `,
        options: [
            { letter: "A", text: "(A) Algo feito corretamente." },
            { letter: "B", text: "(B) O oposto exato." },
            { letter: "C", text: "(C) Algo feito de forma errada ou incorreta." },
            { letter: "D", text: "(D) Algo no futuro." },
            { letter: "E", text: "(E) Intensidade." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 27
    {
        id: "q27",
        type: "mc",
        questionText: `
            Assinale a alternativa que melhor explica a diferença entre <b>"un-"</b> e <b>"mis-"</b>:
        `,
        options: [
            { letter: "A", text: "(A) Ambos indicam passado." },
            { letter: "B", text: "(B) "un-" indica erro e "mis-" indica negação." },
            { letter: "C", text: "(C) "un-" indica negação/oposto e "mis-" indica erro ou ação incorreta." },
            { letter: "D", text: "(D) Ambos indicam futuro." },
            { letter: "E", text: "(E) Não há diferença entre eles." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 28
    {
        id: "q28",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            You study abroad, ______?
        `,
        options: [
            { letter: "A", text: "(A) don't you?" },
            { letter: "B", text: "(B) do you?" },
            { letter: "C", text: "(C) aren't you?" },
            { letter: "D", text: "(D) didn't you?" },
            { letter: "E", text: "(E) won't you?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 29
    {
        id: "q29",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            She is your sister, ______?
        `,
        options: [
            { letter: "A", text: "(A) is she?" },
            { letter: "B", text: "(B) isn't she?" },
            { letter: "C", text: "(C) doesn't she?" },
            { letter: "D", text: "(D) wasn't she?" },
            { letter: "E", text: "(E) aren't she?" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 30
    {
        id: "q30",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            They went to the party, ______?
        `,
        options: [
            { letter: "A", text: "(A) didn't they?" },
            { letter: "B", text: "(B) did they?" },
            { letter: "C", text: "(C) don't they?" },
            { letter: "D", text: "(D) weren't they?" },
            { letter: "E", text: "(E) aren't they?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 31
    {
        id: "q31",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            He can drive, ______?
        `,
        options: [
            { letter: "A", text: "(A) can't he?" },
            { letter: "B", text: "(B) can he?" },
            { letter: "C", text: "(C) doesn't he?" },
            { letter: "D", text: "(D) isn't he?" },
            { letter: "E", text: "(E) won't he?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 32
    {
        id: "q32",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            You aren’t tired, ______?
        `,
        options: [
            { letter: "A", text: "(A) aren't you?" },
            { letter: "B", text: "(B) are you?" },
            { letter: "C", text: "(C) do you?" },
            { letter: "D", text: "(D) don't you?" },
            { letter: "E", text: "(E) were you?" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 33
    {
        id: "q33",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            She has finished her homework, ______?
        `,
        options: [
            { letter: "A", text: "(A) hasn't she?" },
            { letter: "B", text: "(B) has she?" },
            { letter: "C", text: "(C) doesn't she?" },
            { letter: "D", text: "(D) didn't she?" },
            { letter: "E", text: "(E) isn't she?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 34
    {
        id: "q34",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            We will travel tomorrow, ______?
        `,
        options: [
            { letter: "A", text: "(A) won't we?" },
            { letter: "B", text: "(B) will we?" },
            { letter: "C", text: "(C) don't we?" },
            { letter: "D", text: "(D) aren't we?" },
            { letter: "E", text: "(E) didn't we?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 35
    {
        id: "q35",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            He doesn’t like coffee, ______?
        `,
        options: [
            { letter: "A", text: "(A) does he?" },
            { letter: "B", text: "(B) doesn't he?" },
            { letter: "C", text: "(C) did he?" },
            { letter: "D", text: "(D) isn't he?" },
            { letter: "E", text: "(E) won't he?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 36
    {
        id: "q36",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            I am late, ______?
        `,
        options: [
            { letter: "A", text: "(A) aren't I?" },
            { letter: "B", text: "(B) am I?" },
            { letter: "C", text: "(C) don't I?" },
            { letter: "D", text: "(D) isn't I?" },
            { letter: "E", text: "(E) won't I?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 37
    {
        id: "q37",
        type: "mc",
        questionText: `
            Choose the correct question tag:
            <br><br>
            Let’s go to the park, ______?
        `,
        options: [
            { letter: "A", text: "(A) shall we?" },
            { letter: "B", text: "(B) will we?" },
            { letter: "C", text: "(C) do we?" },
            { letter: "D", text: "(D) don't we?" },
            { letter: "E", text: "(E) aren't we?" }
        ],
        correctAnswer: "A",
        videoUrl: ""
    },

    // Pergunta 38
    {
        id: "q38",
        type: "mc",
        questionText: `
            Which of the following words/expressions express <b>contrast</b>?
        `,
        options: [
            { letter: "A", text: "(A) both / too" },
            { letter: "B", text: "(B) alike / in the same way" },
            { letter: "C", text: "(C) although / but / on the other hand / unlike" },
            { letter: "D", text: "(D) too / both / alike" },
            { letter: "E", text: "(E) in the same way / too" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 39
    {
        id: "q39",
        type: "mc",
        questionText: `
            Which of the following words/expressions express <b>similarity or comparison</b>?
        `,
        options: [
            { letter: "A", text: "(A) although / but" },
            { letter: "B", text: "(B) unlike / on the other hand" },
            { letter: "C", text: "(C) alike / both / in the same way / too" },
            { letter: "D", text: "(D) but / too" },
            { letter: "E", text: "(E) although / both" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 40
    {
        id: "q40",
        type: "mc",
        questionText: `
            Choose the best word to complete the sentence:
            <br><br>
            I like pizza, ______ I don’t like hamburgers.
        `,
        options: [
            { letter: "A", text: "(A) both" },
            { letter: "B", text: "(B) too" },
            { letter: "C", text: "(C) but" },
            { letter: "D", text: "(D) alike" },
            { letter: "E", text: "(E) in the same way" }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // Pergunta 41
    {
        id: "q41",
        type: "mc",
        questionText: `
            Choose the best word to complete the sentence:
            <br><br>
            My brother and I are very ______. We have the same personality.
        `,
        options: [
            { letter: "A", text: "(A) but" },
            { letter: "B", text: "(B) alike" },
            { letter: "C", text: "(C) although" },
            { letter: "D", text: "(D) unlike" },
            { letter: "E", text: "(E) on the other hand" }
        ],
        correctAnswer: "B",
        videoUrl: ""
    },

    // Pergunta 42
    {
        id: "q42",
        type: "mc",
        questionText: `
            Choose the best word to complete the sentence:
            <br><br>
            She is very organized. ______, her sister is messy.
        `,
        options: [
            { letter: "A", text: "(A) In the same way" },
            { letter: "B", text: "(B) Too" },
            { letter: "C", text: "(C) Both" },
            { letter: "D", text: "(D) On the other hand" },
            { letter: "E", text: "(E) Alike" }
        ],
        correctAnswer: "D",
        videoUrl: ""
    }
    
];


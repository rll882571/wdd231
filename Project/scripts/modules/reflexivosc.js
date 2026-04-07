const questionBank = [
    // --- GRAMMAR: MODAL VERBS IN THE PAST (Questions 1-7) ---
    {
        id: "q1",
        type: "mc",
        questionText: `Read the sentences below and choose the option that shows only correct uses of the structure: <strong>Subject + modal + have + Past Participle</strong>
        <br><br>
        I. She must have gone to school.<br>
        II. They might have finish the homework.<br>
        III. He could have seen that movie.<br>
        IV. We should have studied more.<br>
        V. She must had gone early.`,
        options: [
            { letter: "A", text: "(A) Only I, III and IV are correct.", isCorrect: true, rationale: "Correct! II is wrong (should be 'finished') and V is wrong (should be 'have', not 'had')." },
            { letter: "B", text: "(B) Only II and V are correct.", isCorrect: false, rationale: "Incorrect. 'Finish' lacks -ed and 'had' cannot be used after a modal." },
            { letter: "C", text: "(C) Only I, II and III are correct.", isCorrect: false, rationale: "Incorrect. Sentence II has a grammar error in the main verb." },
            { letter: "D", text: "(D) Only I, III, IV and V are correct.", isCorrect: false, rationale: "Incorrect. Sentence V uses 'had', which is never used directly after a modal." },
            { letter: "E", text: "(E) All of them are correct.", isCorrect: false, rationale: "Incorrect. There are structural errors in II and V." }
        ],
        correctAnswer: "A",
        hints: ["Dica: O verbo principal deve estar no Particípio Passado (geralmente -ed ou irregular) e o auxiliar é SEMPRE 'have'."]
    },
    {
        id: "q2",
        type: "mc",
        questionText: `Sobre o uso de <strong>"must have"</strong>, qual explicação está correta?`,
        options: [
            { letter: "A", text: "(A) Usado para indicar uma possibilidade incerta.", isCorrect: false },
            { letter: "B", text: "(B) Usado para expressar uma habilidade no passado.", isCorrect: false },
            { letter: "C", text: "(C) Usado para indicar quase certeza (90-100%), baseado em evidências lógicas.", isCorrect: true, rationale: "Exato! 'Must have' é para conclusões lógicas fortes sobre o passado." },
            { letter: "D", text: "(D) Usado para falar de planos futuros.", isCorrect: false },
            { letter: "E", text: "(E) Usado para dar permissão no presente.", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Se você vê o chão molhado e diz 'it must have rained', você tem quase certeza."]
    },
    {
        id: "q3",
        type: "mc",
        questionText: `Complete as lacunas com a melhor opção: <br>
        (A) Sarah is not answering... She ___________ gone out. <br>
        (B) I can’t find my wallet... I ___________ left it at the restaurant, but I’m not sure.`,
        options: [
            { letter: "A", text: "(A) must have / might have", isCorrect: true },
            { letter: "B", text: "(B) might have / must have", isCorrect: false },
            { letter: "C", text: "(C) could have / should have", isCorrect: false },
            { letter: "D", text: "(D) should have / must have", isCorrect: false },
            { letter: "E", text: "(E) must have / should have", isCorrect: false }
        ],
        correctAnswer: "A",
        hints: ["Dica: 'Not sure' é o gatilho para May/Might."]
    },
    {
        id: "q4",
        type: "mc",
        questionText: `Sobre o uso de <strong>"could have"</strong>, qual explicação está correta?`,
        options: [
            { letter: "A", text: "(A) Usado para indicar uma certeza absoluta.", isCorrect: false },
            { letter: "B", text: "(B) Usado para indicar uma possibilidade ou algo que poderia ter acontecido, mas não ocorreu.", isCorrect: true },
            { letter: "C", text: "(C) Usado para indicar uma obrigação no passado.", isCorrect: false },
            { letter: "D", text: "(D) Usado para falar de planos confirmados.", isCorrect: false },
            { letter: "E", text: "(E) Usado para expressar um hábito no presente.", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: 'Eu poderia ter ido' = I could have gone."]
    },
    {
        id: "q5",
        type: "mc",
        questionText: `In a comic, a character says the answer <strong>"must have"</strong> correct. What does this use express? <br><br> <img src="images/img1.png" alt="Comic" style="width: 280px;">`,
        options: [
            { letter: "A", text: "(A) A weak possibility.", isCorrect: false },
            { letter: "B", text: "(B) A strong logical conclusion based on evidence.", isCorrect: true },
            { letter: "C", text: "(C) A past ability.", isCorrect: false },
            { letter: "D", text: "(D) A future plan.", isCorrect: false },
            { letter: "E", text: "(E) A polite request.", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: Se ele resolveu um problema, a conclusão dele é baseada em lógica."]
    },
    {
        id: "q6",
        type: "mc",
        questionText: `In a comic, Garfield says: <strong>"I could have bought a pizza!"</strong>. What does this express? <br><br> <img src="images/img2.png" alt="Garfield" style="width: 280px;">`,
        options: [
            { letter: "A", text: "(A) A certain action.", isCorrect: false },
            { letter: "B", text: "(B) A strong logical conclusion.", isCorrect: false },
            { letter: "C", text: "(C) A possibility or alternative that did not happen.", isCorrect: true },
            { letter: "D", text: "(D) A future plan.", isCorrect: false },
            { letter: "E", text: "(E) An obligation.", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Ele está lamentando uma oportunidade perdida."]
    },
    {
        id: "q7",
        type: "mc",
        questionText: `Escolha a alternativa correta para os contextos: <br> I. Chão molhado. II. Amigo não veio (incerteza). III. Quase caiu.`,
        options: [
            { letter: "A", text: "(A) I- must have rained; II- might have forgotten; III- I could have fallen!", isCorrect: true },
            { letter: "B", text: "(B) I- could have rained; II- must have forgotten; III- I may have fallen!", isCorrect: false },
            { letter: "C", text: "(C) I- must have rained; II- might has forgotten; III- I could have fell!", isCorrect: false },
            { letter: "D", text: "(D) I- should have rained; II- can have forgotten; III- I must have fallen!", isCorrect: false },
            { letter: "E", text: "(E) I- might have rained; II- should have forgotten; III- I would have fallen!", isCorrect: false }
        ],
        correctAnswer: "A",
        hints: ["Dica: Atente-se ao particípio: Rained, Forgotten, Fallen."]
    },

    // --- VOCABULARY: DEFINITIONS (Questions 8-15) ---
    {
        id: "q8",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Beneficial</strong>?`,
        options: [
            { letter: "A", text: "(A) prejudicial", isCorrect: false },
            { letter: "B", text: "(B) benéfico", isCorrect: true },
            { letter: "C", text: "(C) perigoso", isCorrect: false },
            { letter: "D", text: "(D) difícil", isCorrect: false },
            { letter: "E", text: "(E) barulhento", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: Cognato muito parecido com o português."]
    },
    {
        id: "q9",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Crucial</strong>?`,
        options: [
            { letter: "A", text: "(A) opcional", isCorrect: false },
            { letter: "B", text: "(B) importante/essencial", isCorrect: true },
            { letter: "C", text: "(C) pequeno", isCorrect: false },
            { letter: "D", text: "(D) lento", isCorrect: false },
            { letter: "E", text: "(E) descartável", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: Algo que decide o sucesso de algo."]
    },
    {
        id: "q10",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Destroy</strong>?`,
        options: [
            { letter: "A", text: "(A) construir", isCorrect: false },
            { letter: "B", text: "(B) proteger", isCorrect: false },
            { letter: "C", text: "(C) destruir", isCorrect: true },
            { letter: "D", text: "(D) limpar", isCorrect: false },
            { letter: "E", text: "(E) organizar", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Causar dano total."]
    },
    {
        id: "q11",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Disgusting</strong>?`,
        options: [
            { letter: "A", text: "(A) delicioso", isCorrect: false },
            { letter: "B", text: "(B) bonito", isCorrect: false },
            { letter: "C", text: "(C) agradável", isCorrect: false },
            { letter: "D", text: "(D) nojento", isCorrect: true },
            { letter: "E", text: "(E) engraçado", isCorrect: false }
        ],
        correctAnswer: "D",
        hints: ["Dica: Reação a algo com cheiro ou gosto horrível."]
    },
    {
        id: "q12",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Sting</strong>?`,
        options: [
            { letter: "A", text: "(A) picar (inseto)", isCorrect: true },
            { letter: "B", text: "(B) correr", isCorrect: false },
            { letter: "C", text: "(C) dormir", isCorrect: false },
            { letter: "D", text: "(D) comer", isCorrect: false },
            { letter: "E", text: "(E) voar", isCorrect: false }
        ],
        correctAnswer: "A",
        hints: ["Dica: O que uma abelha ou escorpião faz."]
    },
    {
        id: "q13",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Slimy</strong>?`,
        options: [
            { letter: "A", text: "(A) seco", isCorrect: false },
            { letter: "B", text: "(B) áspero", isCorrect: false },
            { letter: "C", text: "(C) viscoso/gosmento", isCorrect: true },
            { letter: "D", text: "(D) duro", isCorrect: false },
            { letter: "E", text: "(E) quente", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Pense na pele de um sapo ou em uma lesma."]
    },
    {
        id: "q14",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Poisonous</strong>?`,
        options: [
            { letter: "A", text: "(A) saudável", isCorrect: false },
            { letter: "B", text: "(B) perigoso", isCorrect: false },
            { letter: "C", text: "(C) venenoso", isCorrect: true },
            { letter: "D", text: "(D) doce", isCorrect: false },
            { letter: "E", text: "(E) colorido", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Se você comer, pode passar mal."]
    },
    {
        id: "q15",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Ecosystem</strong>?`,
        options: [
            { letter: "A", text: "(A) atmosfera", isCorrect: false },
            { letter: "B", text: "(B) ecossistema", isCorrect: true },
            { letter: "C", text: "(C) floresta", isCorrect: false },
            { letter: "D", text: "(D) planeta", isCorrect: false },
            { letter: "E", text: "(E) cidade", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: O conjunto de seres vivos e ambiente."]
    },

    // --- VOCABULARY: COMPLETION (Questions 16-22) ---
    {
        id: "q16",
        type: "mc",
        questionText: `This decision is ______ for the success of the project.`,
        options: [
            { letter: "A", text: "(A) poisonous", isCorrect: false },
            { letter: "B", text: "(B) slimy", isCorrect: false },
            { letter: "C", text: "(C) crucial", isCorrect: true },
            { letter: "D", text: "(D) disgusting", isCorrect: false },
            { letter: "E", text: "(E) beneficial", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Essencial para o sucesso."]
    },
    {
        id: "q17",
        type: "mc",
        questionText: `The hurricane can ______ entire cities if it is strong enough.`,
        options: [
            { letter: "A", text: "(A) destroy", isCorrect: true },
            { letter: "B", text: "(B) protect", isCorrect: false },
            { letter: "C", text: "(C) build", isCorrect: false },
            { letter: "D", text: "(D) clean", isCorrect: false },
            { letter: "E", text: "(E) save", isCorrect: false }
        ],
        correctAnswer: "A",
        hints: ["Dica: Furacões causam destruição."]
    },
    {
        id: "q18",
        type: "mc",
        questionText: `The food smelled so bad that it was absolutely ______.`,
        options: [
            { letter: "A", text: "(A) delicious", isCorrect: false },
            { letter: "B", text: "(B) disgusting", isCorrect: true },
            { letter: "C", text: "(C) healthy", isCorrect: false },
            { letter: "D", text: "(D) spicy", isCorrect: false },
            { letter: "E", text: "(E) sweet", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: Smelled bad = cheiro ruim."]
    },
    {
        id: "q19",
        type: "mc",
        questionText: `Be careful! That bee can ______ you if you get too close.`,
        options: [
            { letter: "A", text: "(A) help", isCorrect: false },
            { letter: "B", text: "(B) call", isCorrect: false },
            { letter: "C", text: "(C) sting", isCorrect: true },
            { letter: "D", text: "(D) carry", isCorrect: false },
            { letter: "E", text: "(E) kiss", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Cuidado com a abelha!"]
    },
    {
        id: "q20",
        type: "mc",
        questionText: `The frog’s skin felt cold and ______.`,
        options: [
            { letter: "A", text: "(A) dry", isCorrect: false },
            { letter: "B", text: "(B) slimy", isCorrect: true },
            { letter: "C", text: "(C) furry", isCorrect: false },
            { letter: "D", text: "(D) soft", isCorrect: false },
            { letter: "E", text: "(E) hot", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: Pele de sapo costuma ser gosmenta."]
    },
    {
        id: "q21",
        type: "mc",
        questionText: `Some mushrooms are ______, so you should never eat them.`,
        options: [
            { letter: "A", text: "(A) tasty", isCorrect: false },
            { letter: "B", text: "(B) safe", isCorrect: false },
            { letter: "C", text: "(C) poisonous", isCorrect: true },
            { letter: "D", text: "(D) cheap", isCorrect: false },
            { letter: "E", text: "(E) cooked", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Não coma cogumelos desconhecidos!"]
    },
    {
        id: "q22",
        type: "mc",
        questionText: `Climate change can seriously affect the entire ______.`,
        options: [
            { letter: "A", text: "(A) ecosystem", isCorrect: true },
            { letter: "B", text: "(B) kitchen", isCorrect: false },
            { letter: "C", text: "(C) computer", isCorrect: false },
            { letter: "D", text: "(D) backpack", isCorrect: false },
            { letter: "E", text: "(E) library", isCorrect: false }
        ],
        correctAnswer: "A",
        hints: ["Dica: Mudanças climáticas afetam a natureza toda."]
    },

    // --- GRAMMAR: REFLEXIVE & PREFIXES (Questions 23-26) ---
    {
        id: "q23",
        type: "mc",
        questionText: `Sobre os <strong>pronomes reflexivos</strong>, é correto afirmar que:`,
        options: [
            { letter: "A", text: "(A) São usados apenas com o verbo 'to be'.", isCorrect: false },
            { letter: "B", text: "(B) 'Theirselves' é a forma correta do plural.", isCorrect: false },
            { letter: "C", text: "(C) Verbos como 'relax' não costumam pedir reflexivo e 'Behave yourself!' é comum.", isCorrect: true },
            { letter: "D", text: "(D) Nunca podem ser usados após preposições.", isCorrect: false },
            { letter: "E", text: "(E) Só existem no singular.", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Behave yourself!"]
    },
    {
        id: "q24",
        type: "mc",
        questionText: `O uso do prefixo <strong>"un-"</strong> geralmente indica:`,
        options: [
            { letter: "A", text: "(A) Algo feito duas vezes.", isCorrect: false },
            { letter: "B", text: "(B) O oposto ou negação.", isCorrect: true },
            { letter: "C", text: "(C) Uma ação futura.", isCorrect: false },
            { letter: "D", text: "(D) Tamanho pequeno.", isCorrect: false },
            { letter: "E", text: "(E) Lugar distante.", isCorrect: false }
        ],
        correctAnswer: "B",
        hints: ["Dica: Happy -> Unhappy."]
    },
    {
        id: "q25",
        type: "mc",
        questionText: `O uso do prefixo <strong>"mis-"</strong> geralmente indica:`,
        options: [
            { letter: "A", text: "(A) Excesso de algo.", isCorrect: false },
            { letter: "B", text: "(B) Algo feito de forma correta.", isCorrect: false },
            { letter: "C", text: "(C) Algo feito de forma errada ou incorreta.", isCorrect: true },
            { letter: "D", text: "(D) O início de um processo.", isCorrect: false },
            { letter: "E", text: "(E) Uma profissão.", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Understand -> Misunderstand."]
    },
    {
        id: "q26",
        type: "mc",
        questionText: `Diferença entre <strong>"un-"</strong> e <strong>"mis-"</strong>:`,
        options: [
            { letter: "A", text: "(A) Não existe diferença de uso.", isCorrect: false },
            { letter: "B", text: "(B) Un é para verbos e Mis para adjetivos apenas.", isCorrect: false },
            { letter: "C", text: "(C) 'un-' indica negação e 'mis-' indica erro/ação incorreta.", isCorrect: true },
            { letter: "D", text: "(D) Mis é usado apenas no passado.", isCorrect: false },
            { letter: "E", text: "(E) Un significa 'muito' e Mis significa 'pouco'.", isCorrect: false }
        ],
        correctAnswer: "C",
        hints: ["Dica: Unlucky vs Mistake."]
    },

    // --- QUESTION TAGS (Questions 27-36) ---
    {
        id: "q27",
        type: "mc",
        questionText: `You study abroad, ______?`,
        options: [
            { letter: "A", text: "(A) don't you?", isCorrect: true },
            { letter: "B", text: "(B) do you?", isCorrect: false },
            { letter: "C", text: "(C) aren't you?", isCorrect: false },
            { letter: "D", text: "(D) didn't you?", isCorrect: false },
            { letter: "E", text: "(E) won't you?", isCorrect: false }
        ],
        correctAnswer: "A"
    },
    {
        id: "q28",
        type: "mc",
        questionText: `She is your sister, ______?`,
        options: [
            { letter: "A", text: "(A) is she?", isCorrect: false },
            { letter: "B", text: "(B) isn't she?", isCorrect: true },
            { letter: "C", text: "(C) she is?", isCorrect: false },
            { letter: "D", text: "(D) doesn't she?", isCorrect: false },
            { letter: "E", text: "(E) won't she?", isCorrect: false }
        ],
        correctAnswer: "B"
    },
    {
        id: "q29",
        type: "mc",
        questionText: `They went to the party, ______?`,
        options: [
            { letter: "A", text: "(A) didn't they?", isCorrect: true },
            { letter: "B", text: "(B) don't they?", isCorrect: false },
            { letter: "C", text: "(C) did they?", isCorrect: false },
            { letter: "D", text: "(D) weren't they?", isCorrect: false },
            { letter: "E", text: "(E) haven't they?", isCorrect: false }
        ],
        correctAnswer: "A"
    },
    {
        id: "q30",
        type: "mc",
        questionText: `He can drive, ______?`,
        options: [
            { letter: "A", text: "(A) can't he?", isCorrect: true },
            { letter: "B", text: "(B) can he?", isCorrect: false },
            { letter: "C", text: "(C) doesn't he?", isCorrect: false },
            { letter: "D", text: "(D) couldn't he?", isCorrect: false },
            { letter: "E", text: "(E) won't he?", isCorrect: false }
        ],
        correctAnswer: "A"
    },
    {
        id: "q31",
        type: "mc",
        questionText: `You aren’t tired, ______?`,
        options: [
            { letter: "A", text: "(A) aren't you?", isCorrect: false },
            { letter: "B", text: "(B) are you?", isCorrect: true },
            { letter: "C", text: "(C) you are?", isCorrect: false },
            { letter: "D", text: "(D) do you?", isCorrect: false },
            { letter: "E", text: "(E) don't you?", isCorrect: false }
        ],
        correctAnswer: "B"
    },
    {
        id: "q32",
        type: "mc",
        questionText: `She has finished her homework, ______?`,
        options: [
            { letter: "A", text: "(A) hasn't she?", isCorrect: true },
            { letter: "B", text: "(B) has she?", isCorrect: false },
            { letter: "C", text: "(C) doesn't she?", isCorrect: false },
            { letter: "D", text: "(D) didn't she?", isCorrect: false },
            { letter: "E", text: "(E) isn't she?", isCorrect: false }
        ],
        correctAnswer: "A"
    },
    {
        id: "q33",
        type: "mc",
        questionText: `We will travel tomorrow, ______?`,
        options: [
            { letter: "A", text: "(A) won't we?", isCorrect: true },
            { letter: "B", text: "(B) will we?", isCorrect: false },
            { letter: "C", text: "(C) don't we?", isCorrect: false },
            { letter: "D", text: "(D) aren't we?", isCorrect: false },
            { letter: "E", text: "(E) can't we?", isCorrect: false }
        ],
        correctAnswer: "A"
    },
    {
        id: "q34",
        type: "mc",
        questionText: `He doesn’t like coffee, ______?`,
        options: [
            { letter: "A", text: "(A) does he?", isCorrect: true },
            { letter: "B", text: "(B) doesn't he?", isCorrect: false },
            { letter: "C", text: "(C) likes he?", isCorrect: false },
            { letter: "D", text: "(D) is he?", isCorrect: false },
            { letter: "E", text: "(E) did he?", isCorrect: false }
        ],
        correctAnswer: "A"
    },
    {
        id: "q35",
        type: "mc",
        questionText: `I am late, ______?`,
        options: [
            { letter: "A", text: "(A) aren't I?", isCorrect: true },
            { letter: "B", text: "(B) am not I?", isCorrect: false },
            { letter: "C", text: "(C) am I?", isCorrect: false },
            { letter: "D", text: "(D) don't I?", isCorrect: false },
            { letter: "E", text: "(E) won't I?", isCorrect: false }
        ],
        correctAnswer: "A"
    },
    {
        id: "q36",
        type: "mc",
        questionText: `Let’s go to the park, ______?`,
        options: [
            { letter: "A", text: "(A) shall we?", isCorrect: true },
            { letter: "B", text: "(B) won't we?", isCorrect: false },
            { letter: "C", text: "(C) don't we?", isCorrect: false },
            { letter: "D", text: "(D) let us?", isCorrect: false },
            { letter: "E", text: "(E) will we?", isCorrect: false }
        ],
        correctAnswer: "A"
    },

    // --- CONNECTORS & CONTRAST (Questions 37-41) ---
    {
        id: "q37",
        type: "mc",
        questionText: `Which of the following words/expressions express <strong>contrast</strong>?`,
        options: [
            { letter: "A", text: "(A) and / also", isCorrect: false },
            { letter: "B", text: "(B) because / so", isCorrect: false },
            { letter: "C", text: "(C) although / but / on the other hand", isCorrect: true },
            { letter: "D", text: "(D) first / then", isCorrect: false },
            { letter: "E", text: "(E) too / like", isCorrect: false }
        ],
        correctAnswer: "C"
    },
    {
        id: "q38",
        type: "mc",
        questionText: `Which of the following express <strong>similarity</strong>?`,
        options: [
            { letter: "A", text: "(A) but / however", isCorrect: false },
            { letter: "B", text: "(B) in the same way / alike / both", isCorrect: true },
            { letter: "C", text: "(C) unlike / whereas", isCorrect: false },
            { letter: "D", text: "(D) although", isCorrect: false },
            { letter: "E", text: "(E) because", isCorrect: false }
        ],
        correctAnswer: "B"
    },
    {
        id: "q39",
        type: "mc",
        questionText: `"I like pizza, ______ I don’t like hamburgers."`,
        options: [
            { letter: "A", text: "(A) and", isCorrect: false },
            { letter: "B", text: "(B) also", isCorrect: false },
            { letter: "C", text: "(C) but", isCorrect: true },
            { letter: "D", text: "(D) because", isCorrect: false },
            { letter: "E", text: "(E) so", isCorrect: false }
        ],
        correctAnswer: "C"
    },
    {
        id: "q40",
        type: "mc",
        questionText: `"My brother and I are very ______. We have the same personality."`,
        options: [
            { letter: "A", text: "(A) different", isCorrect: false },
            { letter: "B", text: "(B) alike", isCorrect: true },
            { letter: "C", text: "(C) unlike", isCorrect: false },
            { letter: "D", text: "(D) messy", isCorrect: false },
            { letter: "E", text: "(E) angry", isCorrect: false }
        ],
        correctAnswer: "B"
    },
    {
        id: "q41",
        type: "mc",
        questionText: `"She is very organized. ______, her sister is messy."`,
        options: [
            { letter: "A", text: "(A) Too", isCorrect: false },
            { letter: "B", text: "(B) Alike", isCorrect: false },
            { letter: "C", text: "(C) Also", isCorrect: false },
            { letter: "D", text: "(D) On the other hand", isCorrect: true },
            { letter: "E", text: "(E) Because", isCorrect: false }
        ],
        correctAnswer: "D"
    },
    {
        id: "q42",
        type: "mc",
        questionText: `Qual a melhor tradução para a palavra <strong>"destroy"</strong>?`,
        options: [
            { letter: "A", text: "(A) criar", isCorrect: false },
            { letter: "B", text: "(B) ajudar", isCorrect: false },
            { letter: "C", text: "(C) destruir", isCorrect: true },
            { letter: "D", text: "(D) pintar", isCorrect: false },
            { letter: "E", text: "(E) escutar", isCorrect: false }
        ],
        correctAnswer: "C"
    }
];

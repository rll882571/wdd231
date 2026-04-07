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
            { letter: "A", text: "(A) Usado para indicar uma possibilidade incerta.", isCorrect: false, rationale: "Para incerteza, usamos might ou may." },
            { letter: "B", text: "(B) Usado para expressar uma habilidade no passado.", isCorrect: false, rationale: "Para habilidade usamos could." },
            { letter: "C", text: "(C) Usado para indicar quase certeza (90-100%), baseado em evidências lógicas.", isCorrect: true, rationale: "Exato! 'Must have' é para conclusões lógicas fortes sobre o passado." },
            { letter: "D", text: "(D) Usado para falar de planos futuros.", isCorrect: false, rationale: "Modais seguidos de 'have' focam no passado." },
            { letter: "E", text: "(E) Usado para dar permissão no presente.", isCorrect: false, rationale: "Permissão usa can ou may." }
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
            { letter: "A", text: "(A) must have / might have", isCorrect: true, rationale: "A primeira é uma conclusão lógica forte, a segunda é uma incerteza ('not sure')." },
            { letter: "B", text: "(B) might have / must have", isCorrect: false, rationale: "Invertido." },
            { letter: "C", text: "(C) could have / should have", isCorrect: false, rationale: "Não se encaixa no contexto de suposição." },
            { letter: "D", text: "(D) should have / must have", isCorrect: false, rationale: "Should have indica arrependimento ou conselho passado." }
        ],
        correctAnswer: "A",
        hints: ["Dica: 'Not sure' é o gatilho para May/Might."]
    },
    {
        id: "q4",
        type: "mc",
        questionText: `Sobre o uso de <strong>"could have"</strong>, qual explicação está correta?`,
        options: [
            { letter: "A", text: "(A) Usado para indicar uma certeza absoluta.", isCorrect: false, rationale: "Certeza absoluta no passado usa 'must have'." },
            { letter: "B", text: "(B) Usado para indicar uma possibilidade ou algo que poderia ter acontecido, mas não sabemos ou não ocorreu.", isCorrect: true, rationale: "Correto! Expressa potencial passado ou incerteza." },
            { letter: "C", text: "(C) Usado para indicar uma obrigação no passado.", isCorrect: false, rationale: "Obrigação usa 'had to'." },
            { letter: "D", text: "(D) Usado para falar de planos confirmados.", isCorrect: false, rationale: "Incorreto." }
        ],
        correctAnswer: "B",
        hints: ["Dica: 'Eu poderia ter ido' = I could have gone."]
    },
    {
        id: "q5",
        type: "mc",
        questionText: `In a comic, a character says the answer <strong>"must have"</strong> correct. What does this use express?`,
        <img src="images/img1.png" alt="Charlie Brown Comic" loading="lazy" style="width: 280px;">
        options: [
            { letter: "A", text: "(A) A weak possibility.", isCorrect: false, rationale: "Must indica força." },
            { letter: "B", text: "(B) A strong logical conclusion based on evidence.", isCorrect: true, rationale: "Correto. O personagem usou raciocínio (evidência) para chegar à conclusão." },
            { letter: "C", text: "(C) A past ability.", isCorrect: false, rationale: "Habilidade usa could." },
            { letter: "D", text: "(D) A future plan.", isCorrect: false, rationale: "Must be é presente/conclusão." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Se ele resolveu um problema, a conclusão dele é baseada em lógica."]
    },
    {
        id: "q6",
        type: "mc",
        questionText: `In a comic, Garfield says: <strong>"I could have bought a pizza!"</strong>. What does this express?`,
            <img src="images/img2.png" alt="Charlie Brown Comic" loading="lazy" style="width: 280px;">
        options: [
            { letter: "A", text: "(A) A certain action.", isCorrect: false, rationale: "Se fosse certo, ele diria 'I bought'." },
            { letter: "B", text: "(B) A strong logical conclusion.", isCorrect: false, rationale: "Isso seria 'must have'." },
            { letter: "C", text: "(C) A possibility or alternative that did not happen.", isCorrect: true, rationale: "Perfeito. Ele teve a chance, mas não comprou." },
            { letter: "D", text: "(D) A future plan.", isCorrect: false, rationale: "Refere-se a algo que ele não fez no passado." }
        ],
        correctAnswer: "C",
        hints: ["Dica: Ele está lamentando uma oportunidade perdida."]
    },
    {
        id: "q7",
        type: "mc",
        questionText: `Escolha a alternativa correta para os contextos: <br>
        I. Chão molhado/Céu cinza. <br>
        II. Amigo não veio (não sabe o porquê). <br>
        III. Quase caiu, mas se segurou.`,
        options: [
            { letter: "A", text: "(A) I- must have rained; II- might have forgotten; III- I could have fallen!", isCorrect: true, rationale: "I (Certeza lógica), II (Incerteza), III (Possibilidade que não ocorreu)." },
            { letter: "B", text: "(B) I- could have rained; II- must have forgotten; III- I may have fallen!", isCorrect: false, rationale: "Incorreto. A primeira pede conclusão forte." },
            { letter: "C", text: "(C) I- must have rained; II- might has forgotten; III- I could have fell!", isCorrect: false, rationale: "Erros gramaticais em 'has' e 'fell'." }
        ],
        correctAnswer: "A",
        hints: ["Dica: Atente-se ao particípio: Rain -> Rained, Forget -> Forgotten, Fall -> Fallen."]
    },

    // --- VOCABULARY: DEFINITIONS (Questions 8-15) ---
    {
        id: "q8",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Beneficial</strong>?`,
        options: [
            { letter: "A", text: "(A) prejudicial" },
            { letter: "B", text: "(B) benéfico", isCorrect: true },
            { letter: "C", text: "(C) perigoso" },
            { letter: "D", text: "(D) difícil" }
        ],
        correctAnswer: "B",
        hints: ["Dica: Cognato muito parecido com o português."]
    },
    {
        id: "q9",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Crucial</strong>?`,
        options: [
            { letter: "A", text: "(A) opcional" },
            { letter: "B", text: "(B) importante/essencial", isCorrect: true },
            { letter: "C", text: "(C) pequeno" },
            { letter: "D", text: "(D) lento" }
        ],
        correctAnswer: "B",
        hints: ["Dica: Algo que decide o sucesso de algo."]
    },
    {
        id: "q10",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Destroy</strong>?`,
        options: [
            { letter: "A", text: "(A) construir" },
            { letter: "B", text: "(B) proteger" },
            { letter: "C", text: "(C) destruir", isCorrect: true },
            { letter: "D", text: "(D) limpar" }
        ],
        correctAnswer: "C",
        hints: ["Dica: Causar dano total."]
    },
    {
        id: "q11",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Disgusting</strong>?`,
        options: [
            { letter: "A", text: "(A) delicioso" },
            { letter: "B", text: "(B) bonito" },
            { letter: "C", text: "(C) agradável" },
            { letter: "D", text: "(D) nojento", isCorrect: true }
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
            { letter: "B", text: "(B) correr" },
            { letter: "C", text: "(C) dormir" },
            { letter: "D", text: "(D) comer" }
        ],
        correctAnswer: "A",
        hints: ["Dica: O que uma abelha ou escorpião faz."]
    },
    {
        id: "q13",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Slimy</strong>?`,
        options: [
            { letter: "A", text: "(A) seco" },
            { letter: "B", text: "(B) áspero" },
            { letter: "C", text: "(C) viscoso/gosmento", isCorrect: true },
            { letter: "D", text: "(D) duro" }
        ],
        correctAnswer: "C",
        hints: ["Dica: Pense na pele de um sapo ou em uma lesma."]
    },
    {
        id: "q14",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Poisonous</strong>?`,
        options: [
            { letter: "A", text: "(A) saudável" },
            { letter: "B", text: "(B) perigoso" },
            { letter: "C", text: "(C) venenoso", isCorrect: true },
            { letter: "D", text: "(D) doce" }
        ],
        correctAnswer: "C",
        hints: ["Dica: Se você comer, pode passar mal ou morrer."]
    },
    {
        id: "q15",
        type: "mc",
        questionText: `Qual a melhor tradução para: <strong>Ecosystem</strong>?`,
        options: [
            { letter: "A", text: "(A) atmosfera" },
            { letter: "B", text: "(B) ecossistema", isCorrect: true },
            { letter: "C", text: "(C) floresta" },
            { letter: "D", text: "(D) planeta" }
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
            { letter: "C", text: "(C) crucial", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Essencial para o sucesso."]
    },
    {
        id: "q17",
        type: "mc",
        questionText: `The hurricane can ______ entire cities if it is strong enough.`,
        options: [
            { letter: "A", text: "(A) destroy", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: Furacões causam destruição."]
    },
    {
        id: "q18",
        type: "mc",
        questionText: `The food smelled so bad that it was absolutely ______.`,
        options: [
            { letter: "B", text: "(B) disgusting", isCorrect: true }
        ],
        correctAnswer: "B",
        hints: ["Dica: Smelled bad = cheiro ruim."]
    },
    {
        id: "q19",
        type: "mc",
        questionText: `Be careful! That bee can ______ you if you get too close.`,
        options: [
            { letter: "C", text: "(C) sting", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Cuidado com a abelha!"]
    },
    {
        id: "q20",
        type: "mc",
        questionText: `The frog’s skin felt cold and ______.`,
        options: [
            { letter: "B", text: "(B) slimy", isCorrect: true }
        ],
        correctAnswer: "B",
        hints: ["Dica: Pele de sapo costuma ser gosmenta."]
    },
    {
        id: "q21",
        type: "mc",
        questionText: `Some mushrooms are ______, so you should never eat them.`,
        options: [
            { letter: "C", text: "(C) poisonous", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Não coma cogumelos desconhecidos!"]
    },
    {
        id: "q22",
        type: "mc",
        questionText: `Climate change can seriously affect the entire ______.`,
        options: [
            { letter: "A", text: "(A) ecosystem", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: Mudanças climáticas afetam a natureza toda."]
    },

    // --- GRAMMAR: REFLEXIVE & PREFIXES (Questions 23-26) ---
    {
        id: "q23",
        type: "mc",
        questionText: `Sobre os <strong>pronomes reflexivos</strong>, é correto afirmar que:
        <br>I. Nunca usados após preposições.<br>II. Verbos como 'relax' não costumam pedir reflexivo.<br>III. 'Theirselves' está correto.<br>IV. Usados em 'Behave yourself!'.`,
        options: [
            { letter: "C", text: "(C) Apenas II e IV estão corretas.", isCorrect: true, rationale: "I é falsa (usa-se 'by myself'), III é falsa ('themselves' é o correto)." }
        ],
        correctAnswer: "C",
        hints: ["Dica: Reflexivos em inglês são menos comuns que em português em verbos de rotina."]
    },
    {
        id: "q24",
        type: "mc",
        questionText: `O uso do prefixo <strong>"un-"</strong> geralmente indica:`,
        options: [
            { letter: "B", text: "(B) O oposto ou negação", isCorrect: true }
        ],
        correctAnswer: "B",
        hints: ["Dica: Happy -> Unhappy."]
    },
    {
        id: "q25",
        type: "mc",
        questionText: `O uso do prefixo <strong>"mis-"</strong> geralmente indica:`,
        options: [
            { letter: "C", text: "(C) Algo feito de forma errada", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Understand -> Misunderstand."]
    },
    {
        id: "q26",
        type: "mc",
        questionText: `Diferença entre <strong>"un-"</strong> e <strong>"mis-"</strong>:`,
        options: [
            { letter: "C", text: "(C) 'un-' indica negação/oposto e 'mis-' indica erro ou ação incorreta.", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Unlucky (sem sorte) vs Mistake (erro)."]
    },

    // --- QUESTION TAGS (Questions 27-36) ---
    {
        id: "q27",
        type: "mc",
        questionText: `You study abroad, ______?`,
        options: [
            { letter: "A", text: "(A) don't you?", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: Frase positiva no Simple Present pede auxiliar negativo."]
    },
    {
        id: "q28",
        type: "mc",
        questionText: `She is your sister, ______?`,
        options: [
            { letter: "B", text: "(B) isn't she?", isCorrect: true }
        ],
        correctAnswer: "B",
        hints: ["Dica: Verbo To Be positivo vira negativo na tag."]
    },
    {
        id: "q29",
        type: "mc",
        questionText: `They went to the party, ______?`,
        options: [
            { letter: "A", text: "(A) didn't they?", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: 'Went' está no passado, use o auxiliar do passado."]
    },
    {
        id: "q30",
        type: "mc",
        questionText: `He can drive, ______?`,
        options: [
            { letter: "A", text: "(A) can't he?", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: Repita o modal 'can' na forma negativa."]
    },
    {
        id: "q31",
        type: "mc",
        questionText: `You aren’t tired, ______?`,
        options: [
            { letter: "B", text: "(B) are you?", isCorrect: true }
        ],
        correctAnswer: "B",
        hints: ["Dica: Frase negativa pede tag positiva."]
    },
    {
        id: "q32",
        type: "mc",
        questionText: `She has finished her homework, ______?`,
        options: [
            { letter: "A", text: "(A) hasn't she?", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: Use o auxiliar 'has' do Present Perfect."]
    },
    {
        id: "q33",
        type: "mc",
        questionText: `We will travel tomorrow, ______?`,
        options: [
            { letter: "A", text: "(A) won't we?", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: Will vira Won't."]
    },
    {
        id: "q34",
        type: "mc",
        questionText: `He doesn’t like coffee, ______?`,
        options: [
            { letter: "A", text: "(A) does he?", isCorrect: true }
        ],
        correctAnswer: "A",
        hints: ["Dica: doesn't -> does."]
    },
    {
        id: "q35",
        type: "mc",
        questionText: `I am late, ______?`,
        options: [
            { letter: "A", text: "(A) aren't I?", isCorrect: true, rationale: "Exceção clássica do inglês. 'Am I not' é raro, usa-se 'aren't I'." }
        ],
        correctAnswer: "A",
        hints: ["Dica: Cuidado com a pegadinha do 'I am'!"]
    },
    {
        id: "q36",
        type: "mc",
        questionText: `Let’s go to the park, ______?`,
        options: [
            { letter: "A", text: "(A) shall we?", isCorrect: true, rationale: "Sugestões com 'Let's' usam sempre 'shall we?'." }
        ],
        correctAnswer: "A",
        hints: ["Dica: Let's = Shall we."]
    },

    // --- CONNECTORS & CONTRAST (Questions 37-41) ---
    {
        id: "q37",
        type: "mc",
        questionText: `Which of the following words/expressions express <strong>contrast</strong>?`,
        options: [
            { letter: "C", text: "(C) although / but / on the other hand / unlike", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Procure palavras que mostram diferenças."]
    },
    {
        id: "q38",
        type: "mc",
        questionText: `Which of the following express <strong>similarity or comparison</strong>?`,
        options: [
            { letter: "C", text: "(C) alike / both / in the same way / too", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Procure palavras que mostram coisas iguais."]
    },
    {
        id: "q39",
        type: "mc",
        questionText: `"I like pizza, ______ I don’t like hamburgers."`,
        options: [
            { letter: "C", text: "(C) but", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Gosto de uma coisa, NÃO gosto de outra."]
    },
    {
        id: "q40",
        type: "mc",
        questionText: `"My brother and I are very ______. We have the same personality."`,
        options: [
            { letter: "B", text: "(B) alike", isCorrect: true }
        ],
        correctAnswer: "B",
        hints: ["Dica: Alike = parecidos."]
    },
    {
        id: "q41",
        type: "mc",
        questionText: `"She is very organized. ______, her sister is messy."`,
        options: [
            { letter: "D", text: "(D) On the other hand", isCorrect: true }
        ],
        correctAnswer: "D",
        hints: ["Dica: Organizada vs Bagunçada."]
    },

    // --- FINAL VOCAB (Question 42) ---
    {
        id: "q42",
        type: "mc",
        questionText: `Qual a melhor tradução para a palavra <strong>"destroy"</strong>?`,
        options: [
            { letter: "C", text: "(C) destruir", isCorrect: true }
        ],
        correctAnswer: "C",
        hints: ["Dica: Sinônimo de arruinar."]
    }
];

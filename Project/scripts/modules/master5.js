const questionBank = [

    // --- TEXTO 1: Regras de Afixos em Inglês (Estrutura: q1-master) ---

    {
        id: "q1-master",
        type: "mc",
        questionText: `
            Texto 1: O Poder Transformador de Afixos na Língua Inglesa
            <br><br>
            Os afixos (Prefixos e Sufixos) são fundamentais para formar novas palavras em inglês e alterar sua função gramatical.
            <br><br>
            Regras Chave para o Inglês:
            <ul>
                <li>O Prefixo vem *antes* do radical e, tipicamente, altera o **significado**. Por exemplo, **un-** e **dis-** indicam o oposto (negativo), como em *unethical*. O prefixo **re-** indica **repetição**, como em *retake*.</li>
                <li>O Sufixo vem *depois* do radical e tem a função primária de mudar a **classe gramatical** (Part of Speech).</li>
            </ul>

            Funções de Sufixos Comuns (Baseado no Material):
            <ul>
                <li>O sufixo <strong>-tion</strong> cria Substantivos (Noun), como em <strong>introduction</strong>.</li>
                <li>Sufixos como -fy e -ize criam Verbos (Verb), como em simplify e emphasize.</li>
                <li>Sufixos como -ous e -able** criam Adjetivos (Adjective), como em generous e comfortable.</li>
                <li>O sufixo **-ly** cria **Advérbios** (Adverb), como em *normally*.</li>
            </ul>

            <br><br>
            Pergunta: Qual é o principal efeito do **Sufixo** na palavra 'comfortable'?
        `,
        options: [
            { letter: "A", text: "(A) Ele altera o significado, indicando negação." },
            { letter: "B", text: "(B) Ele transforma a palavra em um Adjetivo (Adjective)." },
            { letter: "C", text: "(C) Ele transforma a palavra em um Advérbio (Adverb)." },
            { letter: "D", text: "(D) Ele indica a necessidade de usar uma citação (citation)." },
            { letter: "E", text: "(E) Ele adiciona o sentido de repetição." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O sufixo '-able' é mencionado como um criador de qual classe de palavra?"
        ]
    },
    {
        id: "q2-master",
        type: "mc",
        questionText: `
            Pergunta: Qual é o significado do prefixo **mis-** quando adicionado a uma palavra, como em **misbehave**?
        `,
        options: [
            { letter: "A", text: "(A) Novamente (again)." },
            { letter: "B", text: "(B) Oposto de (opposite of)." },
            { letter: "C", text: "(C) Antes de (before)." },
            { letter: "D", text: "(D) Erradamente ou de forma incorreta (wrongly or not)." },
            { letter: "E", text: "(E) Abaixo de (under)." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: Pense no que significa 'misbehave' (comportar-se mal)."
        ]
    },
    {
        id: "q3-master",
        type: "mc",
        questionText: `
            Pergunta: Se você quer expressar o oposto de 'ethical' (ético), qual prefixo de **negação** (negative) deve ser adicionado para formar 'unethical'?
        `,
        options: [
            { letter: "A", text: "(A) re-" },
            { letter: "B", text: "(B) dis-" },
            { letter: "C", text: "(C) mis-" },
            { letter: "D", text: "(D) un-" },
            { letter: "E", text: "(E) pre-" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Dica 1: O prefixo é o mesmo usado em palavras como 'unhappy' (infeliz)."
        ]
    },
    {
        id: "q4-master",
        type: "mc",
        questionText: `
            Pergunta: Qual sufixo deve ser usado para formar o Verbo 'Simplify' a partir do adjetivo 'Simple'?
        `,
        options: [
            { letter: "A", text: "(A) -tion" },
            { letter: "B", text: "(B) -ous" },
            { letter: "C", text: "(C) -fy" },
            { letter: "D", text: "(D) -ly" },
            { letter: "E", text: "(E) -able" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O sufixo deve criar um Verbo."
        ]
    },
    {
        id: "q5-master",
        type: "mc",
        questionText: `
            Pergunta: Qual é a classe gramatical (Part of Speech) da palavra 'normally', formada pelo sufixo -ly?
        `,
        options: [
            { letter: "A", text: "(A) Adjetivo (Adjective)." },
            { letter: "B", text: "(B) Advérbio (Adverb)." },
            { letter: "C", text: "(C) Substantivo (Noun)." },
            { letter: "D", text: "(D) Verbo (Verb)." },
            { letter: "E", text: "(E) Preposição (Preposition)." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: O sufixo -ly geralmente transforma adjetivos em..."
        ]
    },

    // --- CENÁRIOS DE USO DE SUFIXOS ---

    {
        id: "q6-master",
        type: "mc",
        questionText: `
            Cenário: Você precisa dar nome ao ato de 'introduzir'. Você tem o verbo 'Introduce' e precisa transformá-lo em um Substantivo (Noun).
            <br><br>
            Pergunta: Qual sufixo de substantivo é usado para formar a palavra 'Introduction'?
        `,
        options: [
            { letter: "A", text: "(A) -ly" },
            { letter: "B", text: "(B) -ize" },
            { letter: "C", text: "(C) -tion" },
            { letter: "D", text: "(D) -fy" },
            { letter: "E", text: "(E) -able" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Este é um sufixo muito comum que nomeia ações."
        ]
    },
    {
        id: "q7-master",
        type: "mc",
        questionText: `
            Cenário: Você tem o adjetivo 'Normal' e precisa formar um Advérbio (Adverb) para modificar um verbo.
            <br><br>
            Pergunta: O sufixo que cria advérbios de modo, como em 'Normally', é -ly. Qual é a Part of Speech da palavra base (root word)?
        `,
        options: [
            { letter: "A", text: "(A) Verbo (Verb)." },
            { letter: "B", text: "(B) Adjetivo (Adjective)." },
            { letter: "C", text: "(C) Substantivo (Noun)." },
            { letter: "D", text: "(D) Preposição (Preposition)." },
            { letter: "E", text: "(E) Advérbio (Adverb)." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Quase todos os Advérbios de modo terminados em -ly são formados a partir de..."
        ]
    },
    {
        id: "q8-master",
        type: "mc",
        questionText: `
            Cenário: O professor atribui uma tarefa que você deve 'retake' (refazer).
            <br><br>
            Pergunta: Qual o significado do prefixo **re-** em 'retake', conforme as regras?
        `,
        options: [
            { letter: "A", text: "(A) Não ou oposto (Not or opposite)." },
            { letter: "B", text: "(B) Errado (Wrong)." },
            { letter: "C", text: "(C) Novamente ou de volta (Again or back)." },
            { letter: "D", text: "(D) Antes (Before)." },
            { letter: "E", text: "(E) Entre (Between)." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Pense em 'repeat' (repetir)."
        ]
    },
    {
        id: "q9-master",
        type: "mc",
        questionText: `
            Cenário: Você precisa descrever uma pessoa com muita 'generosity' (generosidade), usando o adjetivo 'generous'.
            <br><br>
            Pergunta: Qual sufixo é usado para criar o adjetivo 'generous'?
        `,
        options: [
            { letter: "A", text: "(A) -ize" },
            { letter: "B", text: "(B) -ly" },
            { letter: "C", text: "(C) -ous" },
            { letter: "D", text: "(D) -tion" },
            { letter: "E", text: "(E) -fy" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Este sufixo significa 'cheio de' ou 'possuindo a qualidade'."
        ]
    },
    {
        id: "q10-master",
        type: "mc",
        questionText: `
            Cenário: Você precisa descrever um objeto que **pode ser** confortado, usando o adjetivo 'comfortable'.
            <br><br>
            Pergunta: Qual sufixo de adjetivo, com o sentido de 'capaz de' ou 'possível de', é usado para formar a palavra 'comfortable'?
        `,
        options: [
            { letter: "A", text: "(A) -ize" },
            { letter: "B", text: "(B) -tion" },
            { letter: "C", text: "(C) -ous" },
            { letter: "D", text: "(D) -fy" },
            { letter: "E", text: "(E) -able" }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Dica 1: Pense em 'readable' (legível) ou 'drinkable' (potável)."
        ]
    },
    {
        id: "q11-master",
        type: "mc",
        questionText: `
            <strong>Texto Base: Posse (Possession)</strong>
            <br><br>
            A foto detalha o uso do <strong>Possessive 's</strong> para indicar posse.
            <br><br>
            <strong>Regra:</strong> Usamos <strong>'s</strong> depois de substantivos singulares e nomes próprios comuns que terminam em *qualquer letra, exceto 's'* (ex: Steve's, Carlos's). Para substantivos singulares terminados em 's' (ex: Chris), há variação (Chris' ou Chris's).
            <br><br>
            <strong>Pergunta:</strong> Qual é a forma correta de indicar que a caneta pertence a **'Lisa'** (nome singular)?
        `,
        options: [
            { letter: "A", text: "(A) The Lisa pen is new." },
            { letter: "B", text: "(B) The Lisas pen is new." },
            { letter: "C", text: "(C) The Lisa's pen is new." },
            { letter: "D", text: "(D) The pen of Lisa is new." },
            { letter: "E", text: "(E) The Lisa pen is new's." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O 's deve ser usado após nomes singulares para indicar posse."
        ]
    },
    {
        id: "q12-master",
        type: "mc",
        questionText: `
            <strong>Regra:</strong> Para nomes plurais irregulares (como <strong>children, men, women</strong>), que não terminam em '-s', o possessivo é formado adicionando-se <strong>'s</strong>.
            <br><br>
            <strong>Pergunta:</strong> Como você indicaria que a roupa pertence aos **'men'** (homens)?
        `,
        options: [
            { letter: "A", text: "(A) mens' clothes" },
            { letter: "B", text: "(B) men's clothes" },
            { letter: "C", text: "(C) men clothes's" },
            { letter: "D", text: "(D) the men of clothes" },
            { letter: "E", text: "(E) clothes of mens" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: 'men' é um plural irregular. Adicione 's."
        ]
    },
    {
        id: "q13-master",
        type: "mc",
        questionText: `
            <strong>Regra:</strong> Para substantivos no plural que **já terminam em '-s'** (ex: students), utiliza-se apenas o apóstrofo (<strong>'</strong>) após o 's' para indicar posse.
            <br><br>
            <strong>Pergunta:</strong> Qual forma indica corretamente que os livros pertencem a **'three teachers'** (três professores)?
        `,
        options: [
            { letter: "A", text: "(A) three teachers's books" },
            { letter: "B", text: "(B) three teacher's books" },
            { letter: "C", text: "(C) three teachers' books" },
            { letter: "D", text: "(D) three teachers books" },
            { letter: "E", text: "(E) three teacher books" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O plural 'teachers' já termina em 's'. Apenas o apóstrofo é necessário."
        ]
    },
    {
        id: "q14-master",
        type: "mc",
        questionText: `
            <strong>Regra:</strong> A foto indica que se usa um apóstrofo (<strong>'</strong>) após nomes clássicos ou literários que terminam em '-s', como em **Dickens' novels** ou **Achilles' adventures**.
            <br><br>
            <strong>Pergunta:</strong> Como você indica corretamente que a obra pertence a **'Socrates'**?
        `,
        options: [
            { letter: "A", text: "(A) Socrates's work" },
            { letter: "B", text: "(B) Socrates' work" },
            { letter: "C", text: "(C) Socratives' work" },
            { letter: "D", text: "(D) Socrates works'" },
            { letter: "E", text: "(E) Socratiess' work" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: Para nomes clássicos ou muito longos terminados em 's', é comum usar apenas o apóstrofo."
        ]
    },
    {
        id: "q15-master",
        type: "mc",
        questionText: `
            <strong>Contexto:</strong> O texto da foto alerta sobre <strong>Plágio</strong>: "When you use someone else's exact words or ideas... and present them as your own, you are plagiarizing."
            <br><br>
            <strong>Pergunta:</strong> A frase "The words belong to somebody else because they were written by that person" na seção Possessive 's explica qual conceito em relação à posse de palavras?
        `,
        options: [
            { letter: "A", text: "(A) A importância dos adjetivos possessivos." },
            { letter: "B", text: "(B) Que ideias não podem ter posse." },
            { letter: "C", text: "(C) O conceito de autoria e posse intelectual (quem escreveu, possui)." },
            { letter: "D", text: "(D) A regra para nomes plurais irregulares." },
            { letter: "E", text: "(E) A forma de escrever o possessivo para nomes singulares." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O trecho está ligado ao aviso de plágio."
        ]
    },

    // --- POSSESSIVE ADJECTIVES AND PRONOUNS (q16 - q20) ---

    {
        id: "q16-master",
        type: "mc",
        questionText: `
            <strong>Regra:</strong> O texto diferencia <strong>Possessive Adjectives</strong> e <strong>Possessive Pronouns</strong>. O adjetivo possessivo (ex: **my, your, their**) sempre vem **antes de um substantivo**.
            <br><br>
            <strong>Pergunta:</strong> Qual adjetivo possessivo completa corretamente a frase: "I lost my keys. Where is <strong>____</strong> car?" (O carro pertence a 'I').
        `,
        options: [
            { letter: "A", text: "(A) my" },
            { letter: "B", text: "(B) mine" },
            { letter: "C", text: "(C) our" },
            { letter: "D", text: "(D) ours" },
            { letter: "E", text: "(E) theirs" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Dica 1: O adjetivo precisa vir antes do substantivo 'car'."
        ]
    },
    {
        id: "q17-master",
        type: "mc",
        questionText: `
            <strong>Regra:</strong> O <strong>Pronome Possessivo</strong> (ex: **mine, yours, theirs**) substitui o substantivo para evitar repetição e é usado **sem o substantivo** logo após.
            <br><br>
            <strong>Pergunta:</strong> Qual pronome possessivo completa corretamente a frase: "That coat is not my coat. It is <strong>____</strong>." (O casaco pertence a 'you').
        `,
        options: [
            { letter: "A", text: "(A) your" },
            { letter: "B", text: "(B) yours" },
            { letter: "C", text: "(C) his" },
            { letter: "D", text: "(D) her" },
            { letter: "E", text: "(E) its" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Dica 1: A palavra deve substituir 'your coat' no final da frase."
        ]
    },
    {
        id: "q18-master",
        type: "mc",
        questionText: `
            <strong>Regra:</strong> A palavra <strong>'their'</strong> (Adjetivo Possessivo) e <strong>'theirs'</strong> (Pronome Possessivo) referem-se a "eles/elas" (they).
            <br><br>
            <strong>Pergunta:</strong> Qual frase usa o adjetivo possessivo <strong>'their'</strong> corretamente?
        `,
        options: [
            { letter: "A", text: "(A) The car is their." },
            { letter: "B", text: "(B) They like theirs house." },
            { letter: "C", text: "(C) Their house is large." },
            { letter: "D", text: "(D) The house is their's." },
            { letter: "E", text: "(E) This is theirs." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: O adjetivo possessivo deve ser seguido pelo substantivo que ele modifica ('house')."
        ]
    },
    {
        id: "q19-master",
        type: "mc",
        questionText: `
            <strong>Contexto:</strong> O texto na seção 'Possessive adjectives and possessive pronouns' afirma: "The words belong to the other person. They are <strong>theirs</strong>."
            <br><br>
            <strong>Pergunta:</strong> Qual opção tem o pronome possessivo <strong>'ours'</strong> (nosso) usado corretamente?
        `,
        options: [
            { letter: "A", text: "(A) This is ours new project." },
            { letter: "B", text: "(B) Where is ours paper?" },
            { letter: "C", text: "(C) This project is ours." },
            { letter: "D", text: "(D) Ours team is the best." },
            { letter: "E", text: "(E) It is ours house." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Pronomes possessivos (ours, yours, theirs) nunca são seguidos por um substantivo."
        ]
    },
    {
        id: "q20-master",
        type: "mc",
        questionText: `
            <strong>Contexto:</strong> A foto reforça a ética acadêmica: "However, using content that is not <strong>yours</strong> without giving the author credit is problematic for many reasons."
            <br><br>
            <strong>Pergunta:</strong> Por que o texto usa o pronome possessivo <strong>'yours'</strong> (seu/sua) nesta frase, em vez do adjetivo possessivo 'your'?
        `,
        options: [
            { letter: "A", text: "(A) Porque 'content' (conteúdo) é um substantivo singular." },
            { letter: "B", text: "(B) Porque 'yours' é mais formal do que 'your'." },
            { letter: "C", text: "(C) Porque 'yours' (o seu/sua) está substituindo 'your content', evitando repetição após o 'not'." },
            { letter: "D", text: "(D) Porque 'your' não pode vir no final da frase." },
            { letter: "E", text: "(E) Porque a palavra 'content' deve ser pluralizada." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Dica 1: Lembre-se que pronomes possessivos (yours) são usados sozinhos."
        ]
    }
];
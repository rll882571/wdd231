const questionBankAnimalFarm = [

    // --- BLOCO 2: QUESTÕES SOBRE "ANIMAL FARM" (Texto de George Orwell) ---

    // Pergunta 21: A Condição dos Animais
    {
        id: "q21",
        type: "mc",
        questionText: `
            De acordo com o discurso de Major, qual é a condição de vida dos animais?
        `,
        options: [
            { letter: "A", text: "(A) Vivem em conforto e trabalham pouco, morrendo de velhice.", isCorrect: false, rationale: "O texto afirma o oposto: 'vivemos na miséria, trabalhamos como condenados e morremos jovens'." },
            { letter: "B", text: "(B) Recebem o suficiente para se manterem vivos e vivem como escravos.", isCorrect: true, rationale: "O texto diz que recebem 'apenas o suficiente para nos manter vivos' e que 'vivemos como escravos'." },
            { letter: "C", text: "(C) Produzem muito e a maior parte é distribuída igualmente entre eles.", isCorrect: false, rationale: "A maior parte é roubada pelos humanos ('roubam quase todos os produtos do nosso trabalho')." },
            { letter: "D", text: "(D) Morrem jovens por causa da falta de trabalho e excesso de comida.", isCorrect: false, rationale: "Morrem jovens devido à miséria e ao trabalho excessivo ('trabalhamos como condenados')." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Procure pelas palavras 'miséria' e 'escravos' no primeiro parágrafo."]
    },

    // Pergunta 22: O Inimigo Principal
    {
        id: "q22",
        type: "mc",
        questionText: `
            Quem é identificado por Major como <strong>o único inimigo real</strong> dos animais?
        `,
        options: [
            { letter: "A", text: "(A) O trabalho excessivo e a miséria.", isCorrect: false, rationale: "Esses são sintomas, não a causa principal." },
            { letter: "B", text: "(B) As expressões de tempo vagas no futuro.", isCorrect: false, rationale: "Esta opção refere-se ao tema do bloco anterior de questões, não ao texto de Animal Farm." },
            { letter: "C", text: "(C) O Homem.", isCorrect: true, rationale: "O texto afirma explicitamente: 'O Homem é o único inimigo real que temos'." },
            { letter: "D", text: "(D) O porco que se queixa de sua idade.", isCorrect: false, rationale: "Major, o porco, está fazendo o discurso e diz que não se queixa." }
        ],
        correctAnswer: "C",
        hints: ["Dica: O inimigo é aquele que 'consome sem produzir'."]
    },

    // Pergunta 23: O Motivo da Miséria
    {
        id: "q23",
        type: "mc",
        questionText: `
            Qual é a causa direta, segundo o texto, da 'condição miserável' dos animais?
        `,
        options: [
            { letter: "A", text: "(A) A inabilidade de apanhar coelhos.", isCorrect: false, rationale: "Esta é uma inabilidade do Homem, não a causa da miséria dos animais." },
            { letter: "B", text: "(B) O fato de viverem sem força para se manterem de pé.", isCorrect: false, rationale: "Essa é uma consequência do trabalho, não a causa." },
            { letter: "C", text: "(C) O roubo de quase todos os produtos do trabalho animal pelos humanos.", isCorrect: true, rationale: "O texto diz: 'Porque os seres humanos roubam quase todos os produtos do nosso trabalho'." },
            { letter: "D", text: "(D) O uso incorreto do Future Continuous.", isCorrect: false, rationale: "Esta opção não tem relação com o texto de Animal Farm." }
        ],
        correctAnswer: "C",
        hints: ["Dica: A resposta está na linha que começa com 'Por que estamos nesta condição miserável?'"]
    },

    // Pergunta 24: Definição do Homem
    {
        id: "q24",
        type: "mc",
        questionText: `
            Qual das seguintes descrições <strong>NÃO</strong> é usada para caracterizar o Homem no texto?
        `,
        options: [
            { letter: "A", text: "(A) É a única criatura que consome sem produzir.", isCorrect: false, rationale: "Correto, essa descrição é usada." },
            { letter: "B", text: "(B) É muito forte para lavrar por si próprio.", isCorrect: true, rationale: "Incorreto. O texto diz que ele é 'demasiado fraco para lavrar por si próprio'." },
            { letter: "C", text: "(C) É o senhor de todos os animais.", isCorrect: false, rationale: "Correto, essa descrição é usada ('ele é o senhor de todos os animais')." },
            { letter: "D", text: "(D) Não dá leite nem põe ovos.", isCorrect: false, rationale: "Correto, essa descrição é usada." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Releia a seção que lista o que o Homem não consegue fazer, como dar leite ou lavrar."]
    },

    // Pergunta 25: O que o Homem faz com o trabalho animal
    {
        id: "q25",
        type: "mc",
        questionText: `
            O que o Homem faz com o alimento produzido pelos animais, exceto o mínimo necessário?
        `,
        options: [
            { letter: "A", text: "(A) Distribui em excesso para criar uma reserva para o inverno.", isCorrect: false, rationale: "Ele não distribui em excesso." },
            { letter: "B", text: "(B) Guarda o resto para si mesmo.", isCorrect: true, rationale: "O texto diz: 'O resto, ele guarda para si'." },
            { letter: "C", text: "(C) Usa para pagar outros humanos por trabalho extra.", isCorrect: false, rationale: "Não há menção a isso." },
            { letter: "D", text: "(D) Alimenta outros animais de estimação que não trabalham.", isCorrect: false, rationale: "Não há menção a isso." }
        ],
        correctAnswer: "B",
        hints: ["Dica: O texto usa a palavra 'resto' no final para descrever o que acontece com a maior parte da produção."]
    },

    // Pergunta 26: A Regra de Ouro (Aviso Final)
    {
        id: "q26",
        type: "mc",
        questionText: `
            Qual é a regra de ouro final que Major deixa como aviso aos outros animais?
        `,
        options: [
            { letter: "A", text: "(A) Não reclamar da própria condição de vida.", isCorrect: false, rationale: "Major afirma que não reclama de *sua* condição, mas isso não é o aviso final." },
            { letter: "B", text: "(B) Continuar trabalhando até não ter mais força para se manter de pé.", isCorrect: false, rationale: "Essa é a descrição da vida atual, não o aviso." },
            { letter: "C", text: "(C) Tudo o que andar sobre quatro pernas ou tiver asas é inimigo.", isCorrect: false, rationale: "Essa parte é a definição de *amigo*." },
            { letter: "D", text: "(D) Tudo o que andar sobre duas pernas é inimigo; o resto é amigo.", isCorrect: true, rationale: "O texto diz: 'tudo o que andar sobre duas pernas é vosso inimigo. Tudo o que andar sobre quatro pernas, ou tiver asas, é amigo'." }
        ],
        correctAnswer: "D",
        hints: ["Dica: A regra se baseia no número de membros utilizados para a locomoção."]
    },

    // Pergunta 27: Idade e Perspectiva de Major
    {
        id: "q27",
        type: "mc",
        questionText: `
            Qual é a idade de Major e qual a sua perspectiva de futuro imediato?
        `,
        options: [
            { letter: "A", text: "(A) 10 anos e ele viverá por muito tempo.", isCorrect: false, rationale: "Ele tem 12 anos e diz que 'em breve morrerei'." },
            { letter: "B", text: "(B) 12 anos e ele se queixa da longevidade.", isCorrect: false, rationale: "Ele tem 12 anos e diz que 'não grumble' (não se queixa)." },
            { letter: "C", text: "(C) 12 anos e ele sabe que morrerá em breve.", isCorrect: true, rationale: "O texto diz: 'Eu sou um porco de 12 anos. Em breve morrerei'." },
            { letter: "D", text: "(D) Não é mencionada, mas ele está pronto para a revolução.", isCorrect: false, rationale: "Sua idade é mencionada explicitamente." }
        ],
        correctAnswer: "C",
        hints: ["Dica: O último parágrafo revela a sua idade e seu destino iminente."]
    },

    // Pergunta 28: Propósito do Discurso
    {
        id: "q28",
        type: "mc",
        questionText: `
            Com base no tom e no conteúdo do excerto, qual é o principal objetivo do discurso de Major?
        `,
        options: [
            { letter: "A", text: "(A) Descrever o uso do Future Continuous na fazenda.", isCorrect: false, rationale: "Não é sobre gramática." },
            { letter: "B", text: "(B) Informar os animais sobre sua velhice e morte.", isCorrect: false, rationale: "A velhice é secundária; o principal é o chamado à ação." },
            { letter: "C", text: "(C) Conscientizar os animais sobre sua opressão e incitá-los à ação contra o Homem.", isCorrect: true, rationale: "O discurso é uma chamada revolucionária (Camaradas, vivemos na miséria...). " },
            { letter: "D", text: "(D) Justificar por que o Homem não consegue dar leite ou pôr ovos.", isCorrect: false, rationale: "Isso é apenas um detalhe na descrição da inutilidade do Homem." }
        ],
        correctAnswer: "C",
        hints: ["Dica: O uso da palavra 'Camaradas' e a identificação do 'inimigo' indicam um propósito político."]
    },

    // Pergunta 29: Sinônimo de "Escravos"
    {
        id: "q29",
        type: "mc",
        questionText: `
            A palavra <strong>'escravos'</strong>, usada para descrever os animais, indica que eles:
        `,
        options: [
            { letter: "A", text: "(A) São donos de si mesmos e trabalham por escolha própria.", isCorrect: false, rationale: "Escravos não trabalham por escolha, mas sob coerção." },
            { letter: "B", text: "(B) Estão em uma situação de servidão e exploração forçada.", isCorrect: true, rationale: "O conceito de escravidão implica trabalho forçado e falta de liberdade." },
            { letter: "C", "text": "(C) São livres para viajar, desde que voltem antes da meia-noite.", isCorrect: false, rationale: "Não há menção à liberdade de viajar." },
            { letter: "D", "text": "(D) Recebem um salário justo por todo o trabalho que produzem.", isCorrect: false, rationale: "O texto diz que a produção é roubada e recebem 'apenas o suficiente'." }
        ],
        correctAnswer: "B",
        hints: ["Dica: O que significa 'escravo' no contexto de trabalho e liberdade?"]
    },

    // Pergunta 30: Ironia
    {
        id: "q30",
        type: "mc",
        questionText: `
            Existe uma forte ironia na afirmação de Major sobre o Homem: "Ele é a única criatura que consome sem produzir". Por quê?
        `,
        options: [
            { letter: "A", text: "(A) Porque os animais também consomem sem produzir o tempo todo.", isCorrect: false, rationale: "Os animais no texto estão constantemente produzindo com seu trabalho." },
            { letter: "B", text: "(B) Porque o Homem se considera superior por ser o 'senhor' dos animais.", isCorrect: true, rationale: "A ironia é que a criatura que se coloca no topo (senhor) não tem as habilidades básicas de sobrevivência ou produção das quais ele se beneficia." },
            { letter: "C", text: "(C) Porque a ironia é um tempo verbal do futuro contínuo.", isCorrect: false, rationale: "Sem relação com o texto." },
            { letter: "D", text: "(D) Porque o Homem pode correr rápido o suficiente para apanhar coelhos.", isCorrect: false, rationale: "O texto diz que ele não consegue correr rápido o suficiente." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Considere a contradição entre o status de 'senhor' e sua incapacidade de se sustentar."]
    },

    // Pergunta 31: O Uso da Expressão "Comrades"
    {
        id: "q31",
        type: "mc",
        questionText: `
            No início, Major se dirige aos animais como <strong>"Camaradas"</strong>. Qual é a conotação desse termo no contexto de uma fábula política?
        `,
        options: [
            { letter: "A", text: "(A) Indica uma relação de negócios estritamente formal.", isCorrect: false, rationale: "É um termo de igualdade e luta política, não de negócios." },
            { letter: "B", text: "(B) Sugere um chamado à revolução e à solidariedade entre iguais.", isCorrect: true, rationale: "Camarada (Comrade) é um termo associado ao comunismo/socialismo, simbolizando união e igualdade na luta." },
            { letter: "C", text: "(C) É um sinônimo para 'escravos' ou 'trabalhadores forçados'.", isCorrect: false, rationale: "Tem conotação de luta, não de servidão." },
            { letter: "D", text: "(D) Refere-se a animais que têm apenas duas pernas.", isCorrect: false, rationale: "O discurso é dirigido a todos os animais." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Pense no significado político de 'camarada' em movimentos sociais."]
    },

    // Pergunta 32: Sentimento de Major sobre sua morte
    {
        id: "q32",
        type: "mc",
        questionText: `
            Na frase "Pela minha parte, eu não me queixo. Eu sou um porco de 12 anos. Em breve morrerei", Major demonstra um sentimento de:
        `,
        options: [
            { letter: "A", text: "(A) Desespero e raiva por sua morte iminente.", isCorrect: false, rationale: "Ele diz que 'não se queixa' ('do not grumble')." },
            { letter: "B", text: "(B) Aceitação e urgência em transmitir sua mensagem.", isCorrect: true, rationale: "A aceitação ('não me queixo') é seguida pela urgência ('Mas eu vos aviso...')." },
            { letter: "C", text: "(C) Alívio por estar escapando do trabalho forçado.", isCorrect: false, rationale: "Embora seja um alívio, a ênfase é na mensagem que ele deve passar." },
            { letter: "D", text: "(D) Indiferença total sobre o futuro da fazenda.", isCorrect: false, rationale: "Ele dá um aviso crucial, mostrando grande interesse no futuro." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Analise a transição de 'não me queixo' para 'Mas eu vos aviso...'"]
    },

    // Pergunta 33: Função da Imagem do Moinho
    {
        id: "q33",
        type: "mc",
        questionText: `
            (Observando a imagem anexa) Qual é o possível simbolismo da imagem de um moinho de vento (windmill) no contexto do livro "Animal Farm"?
        `,
        options: [
            { letter: "A", text: "(A) Representa a liberdade e a simplicidade da vida no campo.", isCorrect: false, rationale: "No livro, o moinho se torna um símbolo de trabalho árduo e das promessas não cumpridas." },
            { letter: "B", text: "(B) Simboliza o progresso, as promessas de futuro e o esforço constante dos animais.", isCorrect: true, rationale: "No livro, a construção do moinho (embora não esteja diretamente no trecho) é o foco do trabalho exaustivo, representando progresso prometido e sacrifício." },
            { letter: "C", text: "(C) É o ponto onde os humanos e animais se reúnem em paz.", isCorrect: false, rationale: "O moinho é construído pelos animais para seu próprio benefício (energia)." },
            { letter: "D", text: "(D) É a principal causa da miséria dos animais.", isCorrect: false, rationale: "O homem é a causa, não o moinho (que ainda não foi construído neste trecho)." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Pense nos grandes projetos de engenharia que prometem um futuro melhor, mas exigem sacrifício."]
    },

    // Pergunta 34: O Uso da Retórica
    {
        id: "q34",
        type: "mc",
        questionText: `
            A pergunta de Major: "Por que estamos nesta condição miserável?" é um exemplo de:
        `,
        options: [
            { letter: "A", text: "(A) Uma promessa de Simple Future.", isCorrect: false, rationale: "Não é gramatical." },
            { letter: "B", text: "(B) Uma pergunta retórica, cuja resposta ele próprio já conhece.", isCorrect: true, rationale: "O orador faz a pergunta e imediatamente a responde ('Porque os seres humanos roubam...'), para focar a atenção na resposta." },
            { letter: "C", text: "(C) Um sinal de que Major está confuso e busca ajuda.", isCorrect: false, rationale: "O discurso é claro e focado." },
            { letter: "D", text: "(D) Um erro de concordância verbal na tradução.", isCorrect: false, rationale: "A tradução está correta." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Ele pergunta, mas já sabe a resposta. Qual o nome dessa técnica?"]
    },

    // Pergunta 35: Propósito de Devolver o "Mínimo"
    {
        id: "q35",
        type: "mc",
        questionText: `
            O Homem 'devolve [aos animais] o bare minimum [mínimo] para prevenir a starvation [fome]'. Qual é o principal propósito disso?
        `,
        options: [
            { letter: "A", text: "(A) Demonstrar a benevolência e caridade do Homem.", isCorrect: false, rationale: "O contexto é de exploração." },
            { letter: "B", text: "(B) Garantir que os animais permaneçam vivos e capazes de trabalhar.", isCorrect: true, rationale: "Se morrerem de fome, não haverá mais quem produza. O mínimo garante a continuidade da exploração." },
            { letter: "C", text: "(C) Seguir as regras de bem-estar animal impostas pela sociedade.", isCorrect: false, rationale: "O foco é na exploração, não na regra." },
            { letter: "D", text: "(D) Proporcionar um nível de vida confortável e digno aos trabalhadores.", isCorrect: false, rationale: "O texto usa as palavras 'miséria' e 'escravos'." }
        ],
        correctAnswer: "B",
        hints: ["Dica: O Homem precisa dos animais vivos para que continuem produzindo para ele."]
    },

    // Pergunta 36: Sentido de "Grumble"
    {
        id: "q36",
        type: "mc",
        questionText: `
            No contexto: "For myself, I do not **grumble**." A melhor tradução para 'grumble' é:
        `,
        options: [
            { letter: "A", text: "(A) Correr.", isCorrect: false, rationale: "Grinir, resmungar, queixar." },
            { letter: "B", text: "(B) Cantar.", isCorrect: false, rationale: "Grinir, resmungar, queixar." },
            { letter: "C", text: "(C) Queixar-se ou resmungar.", isCorrect: true, rationale: "Queixar-se/resmungar é o significado de 'grumble' no contexto de descontentamento." },
            { letter: "D", text: "(D) Dormir.", isCorrect: false, rationale: "Grinir, resmungar, queixar." }
        ],
        correctAnswer: "C",
        hints: ["Dica: A frase demonstra a atitude resignada, mas não passiva, de Major sobre sua situação pessoal."]
    },

    // Pergunta 37: Vocabulário - "Plow"
    {
        id: "q37",
        type: "mc",
        questionText: `
            Na descrição da incapacidade do Homem: "ele é demasiado fraco para **plow** por si próprio". O termo 'plow' significa:
        `,
        options: [
            { letter: "A", text: "(A) Ordenhar.", isCorrect: false, rationale: "Plow é lavrar/arar." },
            { letter: "B", text: "(B) Lavrar ou arar a terra.", isCorrect: true, rationale: "Este é o significado do verbo 'plow'." },
            { letter: "C", text: "(C) Construir.", isCorrect: false, rationale: "Plow é lavrar/arar." },
            { letter: "D", text: "(D) Cozinhar.", isCorrect: false, rationale: "Plow é lavrar/arar." }
        ],
        correctAnswer: "B",
        hints: ["Dica: É uma atividade rural fundamental, geralmente feita por bois ou cavalos, que demonstra a dependência do Homem em relação aos animais."]
    },

    // Pergunta 38: Tema da "Exploração"
    {
        id: "q38",
        type: "mc",
        questionText: `
            O excerto trata o tema da exploração. Qual frase melhor encapsula essa exploração?
        `,
        options: [
            { letter: "A", text: "(A) 'Tomorrow at 9 PM, I will sleep.'", isCorrect: false, rationale: "Frase gramatical sem relação com o tema." },
            { letter: "B", text: "(B) 'O Homem é a única criatura que consome sem produzir.'", isCorrect: true, rationale: "Essa frase resume o sistema de exploração, onde uma parte se beneficia do trabalho da outra sem contribuir." },
            { letter: "C", text: "(C) 'Eu sou um porco de 12 anos.'", isCorrect: false, rationale: "É apenas uma informação sobre Major." },
            { letter: "D", text: "(D) 'Eles will be travel to Spain.'", isCorrect: false, rationale: "Frase gramatical sem relação com o tema." }
        ],
        correctAnswer: "B",
        hints: ["Dica: Procure pela frase que define o Homem em relação ao seu consumo."]
    },

    // Pergunta 39: O Significado de "Friend" (Amigo)
    {
        id: "q39",
        type: "mc",
        questionText: `
            No aviso final, "Tudo o que andar sobre quatro pernas, ou tiver asas, é **amigo**", Major está definindo como aliados:
        `,
        options: [
            { letter: "A", text: "(A) Apenas os humanos que ajudam na colheita.", isCorrect: false, rationale: "Humanos têm duas pernas." },
            { letter: "B", text: "(B) Todos os seres que não são exploradores, ou seja, os animais.", isCorrect: true, rationale: "O código é que seres de 4 pernas ou asas (animais) são os companheiros/aliados na luta contra o Homem (2 pernas)." },
            { letter: "C", text: "(C) Os porcos e cavalos, excluindo as galinhas e coelhos.", isCorrect: false, rationale: "Galinhas (asas) e coelhos (4 pernas) também estão incluídos." },
            { letter: "D", text: "(D) Apenas seres que vivem na miséria e morrem jovens.", isCorrect: false, rationale: "A definição é baseada na locomoção, não na condição." }
        ],
        correctAnswer: "B",
        hints: ["Dica: O inimigo é o de duas pernas. O amigo é o restante."]
    },

    // Pergunta 40: A Conclusão Imediata do Discurso
    {
        id: "q40",
        type: "mc",
        questionText: `
            Apesar de não se queixar da própria morte, por que Major se sente compelido a dar seu aviso ("But I warn you...")?
        `,
        options: [
            { letter: "A", text: "(A) Para expressar sua raiva por ter sido um porco de 12 anos.", isCorrect: false, rationale: "Ele não se queixa." },
            { letter: "B", text: "(B) Para garantir que o mal (o Homem) seja reconhecido e combatido por gerações futuras.", isCorrect: true, rationale: "O aviso é para que a luta continue após sua morte, focando no inimigo comum." },
            { letter: "C", text: "(C) Para praticar seu inglês e o Future Continuous.", isCorrect: false, rationale: "Não é sobre gramática." },
            { letter: "D", text: "(D) Para pedir uma ração de comida extra antes de morrer.", isCorrect: false, rationale: "O foco é ideológico." }
        ],
        correctAnswer: "B",
        hints: ["Dica: A parte mais importante do discurso é o legado que ele deixa para a revolução."]
    },
];


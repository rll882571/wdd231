const questionBank = [

    // --- BLOCO 1: QUESTÕES DE SIGNIFICADO (RENOMEADAS E RE-ORDENADAS) ---

    // Palavra 1: KEEP
    {
        id: "q1-vocabulario",
        type: "mc",
        questionText: `Qual é o significado principal da palavra "KEEP" em inglês?`,
        options: [
            { letter: "A", text: "(A) Andar" },
            { letter: "B", text: "(B) Comer" },
            { letter: "C", text: "(C) Guardar, Manter" },
            { letter: "D", text: "(D) Falar" },
            { letter: "E", text: "(E) Ler" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: ["Dica 1: Pense na frase 'Keep the change'."]
    },

    // Palavra 2: TRACK
    {
        id: "q2-vocabulario",
        type: "mc",
        questionText: `Qual o significado de "TRACK" no contexto de "keep on track"?`,
        options: [
            { letter: "A", text: "(A) Música" },
            { letter: "B", text: "(B) Cor, Rastro, Caminho" },
            { letter: "C", text: "(C) Brilho" },
            { letter: "D", text: "(D) Canto" },
            { letter: "E", "text": "(E) Jogo" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: ["Dica 1: Pense em 'pista de corrida'."]
    },

    // Palavra 3: FULFILL
    {
        id: "q3-vocabulario",
        type: "mc",
        questionText: `O verbo "FULFILL" significa:`,
        options: [
            { letter: "A", text: "(A) Cair" },
            { letter: "B", text: "(B) Prometer" },
            { letter: "C", text: "(C) Desistir" },
            { letter: "D", text: "(D) Realizar, Cumprir" },
            { letter: "E", "text": "(E) Adiar" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: Relacionado à 'realização de um sonho'."]
    },

    // Palavra 4: DREAM
    {
        id: "q4-vocabulario",
        type: "mc",
        questionText: `A palavra "DREAM" se refere a qual conceito?`,
        options: [
            { letter: "A", text: "(A) Pesadelo" },
            { letter: "B", text: "(B) Sono" },
            { letter: "C", text: "(C) Lanche" },
            { letter: "D", text: "(D) Sonho" },
            { letter: "E", "text": "(E) Desejo" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: É o que você tem quando dorme ou o que você almeja."]
    },

    // Palavra 5: UNFOLDED
    {
        id: "q5-vocabulario",
        type: "mc",
        questionText: `O passado de "unfold", "UNFOLDED", significa:`,
        options: [
            { letter: "A", text: "(A) Fechado" },
            { letter: "B", text: "(B) Escondido" },
            { letter: "C", text: "(C) Desdobrado, Revelado" },
            { letter: "D", text: "(D) Dobrado" },
            { letter: "E", "text": "(E) Empurrado" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: ["Dica 1: O prefixo 'un-' tem sentido de negação ou inversão (como em 'undo')."]
    },

    // Palavra 6: REACH
    {
        id: "q6-vocabulario",
        type: "mc",
        questionText: `O verbo "REACH" significa:`,
        options: [
            { letter: "A", text: "(A) Caiu" },
            { letter: "B", text: "(B) Olhar" },
            { letter: "C", text: "(C) Chamar" },
            { letter: "D", text: "(D) Alcançar, Chegar a" },
            { letter: "E", "text": "(E) Voltar" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: Pense em 'reach the goal' (alcançar o objetivo)."]
    },

    // Palavra 7: GOALS
    {
        id: "q7-vocabulario",
        type: "mc",
        questionText: `Qual é o significado de "GOALS"?`,
        options: [
            { letter: "A", text: "(A) Jogos" },
            { letter: "B", text: "(B) Viagens" },
            { letter: "C", text: "(C) Regras" },
            { letter: "D", text: "(D) Metas, Objetivos" },
            { letter: "E", "text": "(E) Chutes" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: No futebol, é o mesmo que gol; em inglês, é usado para objetivos de vida."]
    },

    // Palavra 8: SKIP
    {
        id: "q8-vocabulario",
        type: "mc",
        questionText: `O verbo "SKIP" significa:`,
        options: [
            { letter: "A", text: "(A) Estudar" },
            { letter: "B", text: "(B) Sentar" },
            { letter: "C", text: "(C) Pular, Omitir, Pular uma etapa" },
            { letter: "D", text: "(D) Correr" },
            { letter: "E", "text": "(E) Ficar" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: ["Dica 1: Pense em 'pular a propaganda' (skip ad)."]
    },

    // Palavra 9: SCHOOL
    {
        id: "q9-vocabulario",
        type: "mc",
        questionText: `A palavra "SCHOOL" (escola) significa:`,
        options: [
            { letter: "A", text: "(A) Faculdade" },
            { letter: "B", text: "(B) Livro" },
            { letter: "C", text: "(C) Sala" },
            { letter: "D", text: "(D) Escola" },
            { letter: "E", "text": "(E) Trabalho" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: É o lugar onde se estuda, especialmente o ensino fundamental e médio."]
    },

    // Palavra 10: FOTOS (Photos)
    {
        id: "q10-vocabulario",
        type: "mc",
        questionText: `Qual é a palavra em inglês que tem o mesmo significado de "FOTOS" em português?`,
        options: [
            { letter: "A", text: "(A) Frames" },
            { letter: "B", text: "(B) Pictures, Photos" },
            { letter: "C", text: "(C) Videos" },
            { letter: "D", text: "(D) Drawings" },
            { letter: "E", "text": "(E) Stories" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: ["Dica 1: O termo é uma abreviação de 'photographs'."]
    },

    // Palavra 11: SNAP
    {
        id: "q11-vocabulario",
        type: "mc",
        questionText: `O substantivo "SNAP" pode significar:`,
        options: [
            { letter: "A", text: "(A) Olhar rapidamente" },
            { letter: "B", text: "(B) Estalo, Encaixe, Foto instantânea" },
            { letter: "C", text: "(C) Escorregar" },
            { letter: "D", text: "(D) Ligar" },
            { letter: "E", "text": "(E) Desenhar" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: ["Dica 1: Relacionado a algo rápido, como 'snap a photo'."]
    },

    // Palavra 12: DRAW
    {
        id: "q12-vocabulario",
        type: "mc",
        questionText: `Qual é o significado principal do verbo "DRAW"?`,
        options: [
            { letter: "A", text: "(A) Andar" },
            { letter: "B", text: "(B) Puxar, Desenhar" },
            { letter: "C", text: "(C) Vender" },
            { letter: "D", text: "(D) Correr" },
            { letter: "E", "text": "(E) Escrever" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: ["Dica 1: Na expressão 'draw attention', significa 'puxar/atrair a atenção'."]
    },

    // Palavra 13: ATTENTION
    {
        id: "q13-vocabulario",
        type: "mc",
        questionText: `A palavra "ATTENTION" (atenção) significa:`,
        options: [
            { letter: "A", text: "(A) Opinião" },
            { letter: "B", text: "(B) Respeito" },
            { letter: "C", text: "(C) Atenção" },
            { letter: "D", text: "(D) Ajuda" },
            { letter: "E", "text": "(E) Serviço" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: ["Dica 1: É o ato de focar a mente em algo."]
    },

    // Questão Extra (14ª de Significado - sobre a expressão)
    {
        id: "q14-vocabulario",
        type: "mc",
        questionText: `Qual palavra está mais relacionada ao ato de "focar em um objetivo"?`,
        options: [
            { letter: "A", text: "(A) Skip" },
            { letter: "B", text: "(B) Snap" },
            { letter: "C", text: "(C) Keep on track" },
            { letter: "D", text: "(D) Unfolded" },
            { letter: "E", "text": "(E) Fotos" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: ["Dica 1: Pense em 'manter o rumo'."]
    },

    // --- BLOCO 2: QUESTÕES DE CONTEXTO (RENOMEADAS E RE-ORDENADAS) ---

    // Palavra 15: KEEP
    {
        id: "q15-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "You need to ______ your promises to build trust." (Você precisa ______ suas promessas para construir confiança.)`,
        options: [
            { letter: "A", text: "(A) fulfill" },
            { letter: "B", text: "(B) skip" },
            { letter: "C", text: "(C) dream" },
            { letter: "D", text: "(D) keep" }, 
            { letter: "E", text: "(E) snap" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: O verbo é usado no sentido de 'manter' ou 'cumprir' promessas."]
    },

    // Palavra 16: ON
    {
        id: "q16-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "Please leave the package ______ the table." (Por favor, deixe o pacote ______ a mesa.)`,
        options: [
            { letter: "A", text: "(A) draw" },
            { letter: "B", text: "(B) reach" },
            { letter: "C", text: "(C) goals" },
            { letter: "D", text: "(D) on" }, 
            { letter: "E", text: "(E) track" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: É uma preposição usada para indicar que algo está 'sobre' uma superfície."]
    },

    // Palavra 17: TRACK
    {
        id: "q17-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "We are finally back on ______ after a difficult week." (Nós finalmente voltamos ao ______ depois de uma semana difícil.)`,
        options: [
            { letter: "A", text: "(A) goals" },
            { letter: "B", text: "(B) keep" },
            { letter: "C", text: "(C) fulfill" },
            { letter: "D", text: "(D) snap" },
            { letter: "E", text: "(E) track" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: A expressão 'back on track' significa 'voltar ao caminho/curso normal'."]
    },

    // Palavra 18: FULFILL
    {
        id: "q18-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "She worked hard to ______ her potential and dreams." (Ela trabalhou duro para ______ seu potencial e sonhos.)`,
        options: [
            { letter: "A", text: "(A) draw" },
            { letter: "B", text: "(B) photos" },
            { letter: "C", text: "(C) keep" },
            { letter: "D", text: "(D) fulfill" }, 
            { letter: "E", text: "(E) reach" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: O verbo significa 'realizar' ou 'cumprir'."]
    },

    // Palavra 19: DREAM
    {
        id: "q19-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "It was always her ______ to travel around the world." (Sempre foi o seu ______ viajar ao redor do mundo.)`,
        options: [
            { letter: "A", text: "(A) school" },
            { letter: "B", text: "(B) track" },
            { letter: "C", text: "(C) goals" },
            { letter: "D", text: "(D) skip" },
            { letter: "E", text: "(E) dream" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: A palavra se refere a uma grande aspiração ou desejo."]
    },

    // Palavra 20: UNFOLDED
    {
        id: "q20-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "The mystery slowly ______ as the detective found more clues." (O mistério lentamente ______ à medida que o detetive encontrava mais pistas.)`,
        options: [
            { letter: "A", text: "(A) attention" },
            { letter: "B", text: "(B) keep" },
            { letter: "C", text: "(C) unfolded" }, 
            { letter: "D", text: "(D) reach" },
            { letter: "E", text: "(E) fulfill" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: ["Dica 1: O verbo significa que o mistério foi 'revelado' ou 'desdobrado' com o tempo."]
    },

    // Palavra 21: REACH
    {
        id: "q21-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "How long will it take to ______ the top of the mountain?" (Quanto tempo levará para ______ o topo da montanha?)`,
        options: [
            { letter: "A", text: "(A) school" },
            { letter: "B", text: "(B) photos" },
            { letter: "C", text: "(C) draw" },
            { letter: "D", text: "(D) dream" },
            { letter: "E", text: "(E) reach" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: O verbo é usado no sentido de 'chegar a' ou 'alcançar'."]
    },

    // Palavra 22: GOALS
    {
        id: "q22-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "Setting realistic ______ is the first step to success." (Definir ______ realistas é o primeiro passo para o sucesso.)`,
        options: [
            { letter: "A", text: "(A) skip" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) goals" }, 
            { letter: "D", text: "(D) track" },
            { letter: "E", text: "(E) reach" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: ["Dica 1: A palavra se refere às 'metas' que você deseja atingir."]
    },

    // Palavra 23: SKIP
    {
        id: "q23-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "I usually ______ breakfast when I'm running late." (Eu geralmente ______ o café da manhã quando estou atrasado.)`,
        options: [
            { letter: "A", text: "(A) attention" },
            { letter: "B", text: "(B) draw" },
            { letter: "C", text: "(C) fulfill" },
            { letter: "D", text: "(D) keep" },
            { letter: "E", text: "(E) skip" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: O verbo significa 'pular' ou 'omitir'."]
    },

    // Palavra 24: SCHOOL
    {
        id: "q24-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "Students must attend ______ to learn the basics." (Os estudantes devem frequentar a ______ para aprender o básico.)`,
        options: [
            { letter: "A", text: "(A) dream" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) snap" },
            { letter: "D", text: "(D) unfolded" },
            { letter: "E", text: "(E) school" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: É o local de ensino."]
    },

    // Palavra 25: FOTOS (Photos)
    {
        id: "q25-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "Can you show me the ______ you took on vacation?" (Você pode me mostrar as ______ que tirou nas férias?)`,
        options: [
            { letter: "A", text: "(A) keep" },
            { letter: "B", text: "(B) draw" },
            { letter: "C", text: "(C) track" },
            { letter: "D", text: "(D) attention" },
            { letter: "E", text: "(E) photos (fotos)" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: A palavra se refere a imagens capturadas por uma câmera."]
    },

    // Palavra 26: SNAP
    {
        id: "q26-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "The twig made a loud ______ when I stepped on it." (O galho fez um barulho alto de ______ quando eu pisei nele.)`,
        options: [
            { letter: "A", text: "(A) unfolded" },
            { letter: "B", text: "(B) goals" },
            { letter: "C", text: "(C) reach" },
            { letter: "D", text: "(D) skip" },
            { letter: "E", text: "(E) snap" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: A palavra pode se referir a um 'estalo' ou a um som de quebra seca."]
    },

    // Palavra 27: DRAW
    {
        id: "q27-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "He used bright colors to ______ everyone's attention." (Ele usou cores brilhantes para ______ a atenção de todos.)`,
        options: [
            { letter: "A", text: "(A) school" },
            { letter: "B", text: "(B) on" },
            { letter: "C", text: "(C) fulfill" },
            { letter: "D", text: "(D) dream" },
            { letter: "E", text: "(E) draw" } 
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: ["Dica 1: No contexto de 'draw attention', o verbo significa 'atrair' ou 'chamar'."]
    },

    // Palavra 28: ATTENTION
    {
        id: "q28-vocabulario",
        type: "mc",
        questionText: `Qual palavra melhor completa a frase: "The speaker paused to get the audience's ______." (O palestrante parou para conseguir a ______ da plateia.)`,
        options: [
            { letter: "A", text: "(A) photos" },
            { letter: "B", text: "(B) keep" },
            { letter: "C", text: "(C) track" },
            { letter: "D", text: "(D) attention" }, 
            { letter: "E", text: "(E) reach" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: ["Dica 1: A palavra se refere ao foco ou interesse de alguém."]
    }
];
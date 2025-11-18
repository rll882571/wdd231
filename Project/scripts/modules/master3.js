const questionBank = [

    // --- TEXTO 1: Fraude Acadêmica e Integridade ---

    {
        id: "q1-fraude",
        type: "mc",
        questionText: `
            <b>Texto 1: Integridade e Fraude Acadêmica</b>
            <br><br>
            A fraude acadêmica, comumente chamada de "cola" ou "batota", engloba qualquer ato que um estudante comete para obter vantagem injusta em uma avaliação. Isso vai além do plágio e inclui uma série de comportamentos desonestos que comprometem a integridade do ambiente de aprendizado.
            <br><br>
            <b>Formas Comuns de Fraude:</b>
            <ul>
                <li><b>Cópia em Testes:</b> Olhar a prova de um colega ou permitir que ele olhe a sua.</li>
                <li><b>Uso de Materiais Não Autorizados:</b> Usar notas, dispositivos eletrônicos (como celulares) ou "colas" escondidas durante uma prova onde isso é explicitamente proibido.</li>
                <li><b>Colaboração Indevida:</b> Trabalhar em conjunto em tarefas que deveriam ser individuais, a menos que a colaboração seja permitida pelo instrutor.</li>
                <li><b>Falsificação de Dados:</b> Inventar ou alterar dados em experimentos, pesquisas ou relatórios.</li>
                <li><b>Representação:</b> Fazer com que outra pessoa faça uma avaliação em seu lugar.</li>
            </ul>

            <b>Por Que a Fraude é um Problema?</b>
            A fraude é antiética e destrói o propósito fundamental da educação, que é o aprendizado. Ao trapacear, o estudante engana a si mesmo sobre seu nível de conhecimento, o que pode levar a lacunas críticas de aprendizado que se manifestarão mais tarde na carreira profissional. Além disso, a fraude desvaloriza o esforço dos estudantes honestos, criando um campo de jogo desigual e minando a confiança no sistema educacional.

            <b>Consequências Séries:</b>
            As consequências da fraude acadêmica são frequentemente severas. As instituições de ensino superior e escolas têm políticas rigorosas que podem resultar em:
            <ol>
                <li><b>Punições Acadêmicas:</b> Nota zero na tarefa ou na disciplina (reprovação).</li>
                <li><b>Punições Disciplinares:</b> Suspensão temporária ou, nos casos mais graves, a expulsão permanente da instituição.</li>
                <li><b>Dano à Reputação:</b> A anotação de "desonestidade acadêmica" no histórico do estudante pode afetar futuras aplicações para empregos ou para outras universidades.</li>
            </ol>
            Para manter a integridade acadêmica, é fundamental que os estudantes conheçam as regras, gerenciem seu tempo de estudo de forma eficaz e compreendam que o valor real está no aprendizado, não apenas na nota.

            <br><br>
            <b>Pergunta:</b> Qual é o propósito fundamental da educação que a fraude acadêmica, segundo o texto, destrói?
        `,
        options: [
            { letter: "A", text: "(A) O foco na obtenção de prêmios e reconhecimentos." },
            { letter: "B", text: "(B) A criação de um ambiente de competição acirrada entre os alunos." },
            { letter: "C", text: "(C) O propósito fundamental da educação, que é o aprendizado." },
            { letter: "D", text: "(D) A necessidade de aplicar para empregos ou outras universidades." },
            { letter: "E", text: "(E) A utilização de dispositivos eletrônicos em sala de aula." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O texto menciona o principal objetivo de ir à escola."
        ]
    },
    {
        id: "q2-fraude",
        type: "mc",
        questionText: `
            <b>Pergunta:</b> De acordo com o texto, o que é a "Representação" como forma de fraude?
        `,
        options: [
            { letter: "A", text: "(A) Falsificar dados em um relatório de laboratório." },
            { letter: "B", text: "(B) Olhar a prova de um colega durante o exame." },
            { letter: "C", text: "(C) Usar um celular para pesquisar uma fórmula proibida." },
            { letter: "D", text: "(D) Fazer com que outra pessoa realize uma avaliação em seu lugar." },
            { letter: "E", text: "(E) Trabalhar em grupo em uma tarefa individual." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: Pense em quem está realizando a atividade acadêmica."
        ]
    },
    {
        id: "q3-fraude",
        type: "mc",
        questionText: `
            <b>Pergunta:</b> Qual é uma das consequências disciplinares graves mencionadas para a fraude acadêmica?
        `,
        options: [
            { letter: "A", text: "(A) Receber elogios públicos por ser esperto." },
            { letter: "B", text: "(B) Ter um curso extra de verão obrigatório." },
            { letter: "C", text: "(C) Expulsão permanente da instituição." },
            { letter: "D", text: "(D) Ser obrigado a fazer uma prova oral." },
            { letter: "E", text: "(E) Ter que reescrever apenas a conclusão do trabalho." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure a punição mais severa na lista de consequências."
        ]
    },
    {
        id: "q4-fraude",
        type: "mc",
        questionText: `
            <b>Pergunta:</b> Por que a fraude acadêmica desvaloriza o esforço dos estudantes honestos?
        `,
        options: [
            { letter: "A", text: "(A) Porque aumenta o número de tarefas." },
            { letter: "B", text: "(B) Porque dificulta a realização de testes online." },
            { letter: "C", text: "(C) Porque a fraude cria um campo de jogo desigual e mina a confiança no sistema." },
            { letter: "D", text: "(D) Porque apenas trabalhos individuais são valorizados." },
            { letter: "E", text: "(E) Porque os alunos honestos são automaticamente promovidos." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Pense em 'justiça' e 'igualdade' de condições."
        ]
    },
    {
        id: "q5-fraude",
        type: "mc",
        questionText: `
            <b>Pergunta:</b> Qual é o fator que o texto sugere que pode levar a 'lacunas críticas de aprendizado'?
        `,
        options: [
            { letter: "A", text: "(A) A leitura de muitos livros didáticos." },
            { letter: "B", text: "(B) O estudante enganar a si mesmo sobre seu nível de conhecimento ao trapacear." },
            { letter: "C", text: "(C) O uso excessivo de notas de rodapé." },
            { letter: "D", text: "(D) A colaboração permitida em projetos em grupo." },
            { letter: "E", text: "(E) A dificuldade em encontrar fontes confiáveis." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: As lacunas surgem quando o aluno não domina o conteúdo."
        ]
    },

    // --- CENÁRIOS DE JULGAMENTO ÉTICO ---

    {
        id: "q6-cenario",
        type: "mc",
        questionText: `
            <b>Cenário:</b> Você está fazendo uma prova individual e seu colega, sentado ao lado, está com dificuldades. Ele discretamente aponta para uma questão e você mostra a resposta com os dedos debaixo da mesa.
            <br><br>
            <b>Pergunta:</b> Isso é considerado fraude acadêmica? Por quê?
        `,
        options: [
            { letter: "A", text: "(A) Não, porque a resposta não estava escrita; foi apenas um gesto. (Incorreto)" },
            { letter: "B", text: "(B) Não, porque ele não copiou diretamente de suas anotações. (Incorreto)" },
            { letter: "C", text: "(C) Sim, é 'Cópia em Testes', pois envolve fornecer ajuda não autorizada para obter uma vantagem injusta. (Correto)" },
            { letter: "D", text: "(D) Sim, mas apenas o colega está trapaceando, não você. (Incorreto)" },
            { letter: "E", text: "(E) Não, porque a comunicação não foi verbal. (Incorreto)" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Pense no conceito de 'colaboração não autorizada' durante uma avaliação."
        ]
    },
    {
        id: "q7-cenario",
        type: "mc",
        questionText: `
            <b>Cenário:</b> O professor atribuiu um trabalho de pesquisa individual. Você e um colega decidem dividir o trabalho: você pesquisa a Seção A e ele pesquisa a Seção B. Depois, vocês combinam as duas partes em um único documento e o entregam como seu próprio trabalho.
            <br><br>
            <b>Pergunta:</b> Isso é considerado fraude acadêmica? Por quê?
        `,
        options: [
            { letter: "A", text: "(A) Não, desde que você tenha reescrito o texto do seu colega, está tudo bem. (Incorreto)" },
            { letter: "B", text: "(B) Sim, é 'Colaboração Indevida', pois o trabalho deveria ser individual e foi dividido para reduzir o esforço. (Correto)" },
            { letter: "C", text: "(C) Não, porque ambos fizeram algum trabalho e contribuíram com conteúdo original. (Incorreto)" },
            { letter: "D", text: "(D) Sim, mas apenas se o professor descobrir que vocês conversaram sobre o tema. (Incorreto)" },
            { letter: "E", text: "(E) Não, a menos que o professor tenha proibido explicitamente a divisão de tópicos. (Incorreto)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: A natureza 'individual' do trabalho é o ponto-chave."
        ]
    },
    {
        id: "q8-cenario",
        type: "mc",
        questionText: `
            <b>Cenário:</b> Durante um teste de múltipla escolha sem consulta, seu celular toca no bolso. Você o ignora, mas um colega seu que está com dificuldades saca o dele para rapidamente pesquisar a resposta de uma questão antes que o professor perceba.
            <br><br>
            <b>Pergunta:</b> O ato do seu colega é considerado fraude? Por quê?
        `,
        options: [
            { letter: "A", text: "(A) Não, pois ele apenas usou o celular para 'verificar' a resposta, não para copiá-la de alguém. (Incorreto)" },
            { letter: "B", text: "(B) Não, a menos que ele tenha sido pego pelo professor no ato. (Incorreto)" },
            { letter: "C", text: "(C) Sim, é 'Uso de Materiais Não Autorizados' (dispositivo eletrônico) para obter uma vantagem no teste. (Correto)" },
            { letter: "D", text: "(D) Sim, mas é apenas um aviso, não uma fraude formal. (Incorreto)" },
            { letter: "E", text: "(E) Não, porque a regra se aplica apenas a anotações em papel. (Incorreto)" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Pense em quais ferramentas são permitidas em um exame sem consulta."
        ]
    },
    {
        id: "q9-cenario",
        type: "mc",
        questionText: `
            <b>Cenário:</b> Um aluno realiza um experimento de ciências e os resultados não confirmam sua hipótese. Com medo de receber uma nota baixa, ele sutilmente altera alguns números na tabela de dados para que os resultados pareçam corretos e confirmem sua previsão.
            <br><br>
            <b>Pergunta:</b> Isso constitui fraude acadêmica? Por quê?
        `,
        options: [
            { letter: "A", text: "(A) Não, porque o objetivo final era fazer o experimento dar certo, o que é permitido. (Incorreto)" },
            { letter: "B", text: "(B) Sim, é 'Falsificação de Dados', o que é uma forma clara de desonestidade para influenciar a nota. (Correto)" },
            { letter: "C", text: "(C) Não, a menos que ele tenha plagiado a conclusão de outro relatório. (Incorreto)" },
            { letter: "D", text: "(D) Sim, mas apenas se ele tivesse inventado o experimento inteiro, não apenas alterado os números. (Incorreto)" },
            { letter: "E", text: "(E) Não, porque é comum que dados de experimentos sejam ligeiramente ajustados. (Incorreto)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: A integridade dos dados e resultados é crucial em pesquisas e experimentos."
        ]
    },
    {
        id: "q10-cenario",
        type: "mc",
        questionText: `
            <b>Cenário:</b> Um professor pede um ensaio de 1000 palavras sobre um tema. Você já escreveu um ensaio similar na disciplina do ano passado e, sem pedir permissão, envia o mesmo trabalho com apenas a data e o título alterados.
            <br><br>
            <b>Pergunta:</b> Isso é considerado fraude acadêmica? Por quê?
        `,
        options: [
            { letter: "A", text: "(A) Não, porque o trabalho é de sua autoria e, portanto, pode ser reutilizado. (Incorreto)" },
            { letter: "B", text: "(B) Sim, é uma forma de 'Autoplágio' ou submissão múltipla, pois você está apresentando o mesmo trabalho para obter crédito em duas disciplinas diferentes. (Correto)" },
            { letter: "C", text: "(C) Não, desde que você cite corretamente o trabalho original. (Incorreto)" },
            { letter: "D", text: "(D) Sim, mas apenas se o tema das duas disciplinas for exatamente o mesmo. (Incorreto)" },
            { letter: "E", "text": "(E) Não, porque o trabalho já foi avaliado e aprovado anteriormente. (Incorreto)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: Pense no conceito de 'reuso' de seu próprio trabalho sem autorização."
        ]
    },
];
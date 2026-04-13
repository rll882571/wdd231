// ==========================================
// BANCOS DE DADOS - 50 QUESTÕES TOTAIS
// ==========================================

// 1. CAP 3: PAST PROGRESSIVE (10 Questões)
const bankPastProgressive = [
    { id: "pp-1", type: "mc", questionText: "At 8 PM last night, I ________ (watch) a movie with my family.", options: [{letter:"A", text:"watched"}, {letter:"B", text:"was watching"}, {letter:"C", text:"were watching"}, {letter:"D", text:"am watching"}], correctAnswer: "B", hints: ["Ação em progresso no passado."] },
    { id: "pp-2", type: "mc", questionText: "The students ________ (not study) when the principal entered the room.", options: [{letter:"A", text:"wasn't studying"}, {letter:"B", text:"weren't studying"}, {letter:"C", text:"didn't study"}, {letter:"D", text:"wasn't study"}], correctAnswer: "B", hints: ["Students = plural (they)."] },
    { id: "pp-3", type: "mc", questionText: "What ________ you ________ (do) when the power went out?", options: [{letter:"A", text:"did / do"}, {letter:"B", text:"was / doing"}, {letter:"C", text:"were / doing"}, {letter:"D", text:"was / do"}], correctAnswer: "C", hints: ["Estrutura de pergunta: Were + you + ing?"] },
    { id: "pp-4", type: "short-answer", questionText: "Complete: While it ________ (rain), we stayed inside.", correctAnswer: "was raining", hints: ["Past continuous do verbo Rain."] },
    { id: "pp-5", type: "mc", questionText: "They ________ (play) basketball while she ________ (read).", options: [{letter:"A", text:"were playing / was reading"}, {letter:"B", text:"was playing / were reading"}, {letter:"C", text:"played / read"}, {letter:"D", text:"playing / reading"}], correctAnswer: "A", hints: ["Duas ações simultâneas no passado."] },
    { id: "pp-6", type: "mc", questionText: "I ________ (have) a beautiful dream when the alarm clock rang.", options: [{letter:"A", text:"had"}, {letter:"B", text:"was having"}, {letter:"C", text:"were having"}, {letter:"D", text:"have"}], correctAnswer: "B", hints: ["Ação interrompida."] },
    { id: "pp-7", type: "short-answer", questionText: "Negative form: She ________ (not/work) yesterday at 5 PM.", correctAnswer: "was not working", hints: ["Pode usar a contração 'wasn't working'."] },
    { id: "pp-8", type: "mc", questionText: "Why ________ she ________ (cry) when I saw her?", options: [{letter:"A", text:"did / cry"}, {letter:"B", text:"were / crying"}, {letter:"C", text:"was / crying"}, {letter:"D", text:"is / crying"}], correctAnswer: "C", hints: ["She pede o auxiliar WAS."] },
    { id: "pp-9", type: "mc", questionText: "We ________ (cook) dinner when the guests arrived.", options: [{letter:"A", text:"were cooking"}, {letter:"B", text:"was cooking"}, {letter:"C", text:"cooked"}, {letter:"D", text:"was cook"}], correctAnswer: "A", hints: ["We = plural."] },
    { id: "pp-10", type: "short-answer", questionText: "Interrogative: ________ they ________ (wait) for the bus?", correctAnswer: "Were they waiting", hints: ["Inicie com a letra maiúscula."] }
];

// 2. CAP 4: INDEFINITE PRONOUNS (10 Questões)
const bankIndefinite = [
    { id: "ip-1", type: "mc", questionText: "I'm sure I left my keys ________ in this room.", options: [{letter:"A", text:"anywhere"}, {letter:"B", text:"somewhere"}, {letter:"C", text:"nowhere"}, {letter:"D", text:"everywhere"}], correctAnswer: "B", hints: ["Afirmativa: algum lugar."] },
    { id: "ip-2", type: "mc", questionText: "Does ________ know the answer to this question?", options: [{letter:"A", text:"someone"}, {letter:"B", text:"no one"}, {letter:"C", text:"anyone"}, {letter:"D", text:"everyone"}], correctAnswer: "C", hints: ["Perguntas usamos ANY."] },
    { id: "ip-3", type: "mc", questionText: "The party was boring. ________ danced.", options: [{letter:"A", text:"Somebody"}, {letter:"B", text:"Nobody"}, {letter:"C", text:"Anybody"}, {letter:"D", text:"Everybody"}], correctAnswer: "B", hints: ["Sentido negativo: ninguém."] },
    { id: "ip-4", type: "mc", questionText: "I've looked ________, but I can't find my dog.", options: [{letter:"A", text:"everywhere"}, {letter:"B", text:"somewhere"}, {letter:"C", text:"anywhere"}, {letter:"D", text:"nowhere"}], correctAnswer: "A", hints: ["Procurou em todos os lugares."] },
    { id: "ip-5", type: "short-answer", questionText: "Complete: There is ________ (nada) to do in this town.", correctAnswer: "nothing", hints: ["Pense em 'nada'."] },
    { id: "ip-6", type: "mc", questionText: "________ told me that you were moving to Canada.", options: [{letter:"A", text:"Anyone"}, {letter:"B", text:"No one"}, {letter:"C", text:"Someone"}, {letter:"D", text:"Anything"}], correctAnswer: "C", hints: ["Alguém me contou."] },
    { id: "ip-7", type: "mc", questionText: "I don't need ________ from the supermarket.", options: [{letter:"A", text:"nothing"}, {letter:"B", text:"anything"}, {letter:"C", text:"something"}, {letter:"D", text:"everything"}], correctAnswer: "B", hints: ["Frase negativa pede ANY."] },
    { id: "ip-8", type: "short-answer", questionText: "Complete: Can ________ (alguém) help me with this box?", correctAnswer: "someone", hints: ["Em pedidos, usamos SOME mesmo em perguntas."] },
    { id: "ip-9", type: "mc", questionText: "The room was empty. There was ________ there.", options: [{letter:"A", text:"anybody"}, {letter:"B", text:"somebody"}, {letter:"C", text:"nobody"}, {letter:"D", text:"everybody"}], correctAnswer: "C", hints: ["Se estava vazio, não tinha ninguém."] },
    { id: "ip-10", type: "mc", questionText: "You can sit ________ you want.", options: [{letter:"A", text:"anywhere"}, {letter:"B", text:"somewhere"}, {letter:"C", text:"nowhere"}, {letter:"D", text:"everywhere"}], correctAnswer: "A", hints: ["Qualquer lugar."] }
];

// 3. CAP 5: ARTICLES (10 Questões)
const bankArticles = [
    { id: "art-1", type: "mc", questionText: "My father is ________ architect.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X (no article)"}], correctAnswer: "B", hints: ["Architect começa com som de vogal."] },
    { id: "art-2", type: "mc", questionText: "I want to travel to ________ United States next year.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X (no article)"}], correctAnswer: "C", hints: ["Países no plural ou com 'States/Republic' usam THE."] },
    { id: "art-3", type: "mc", questionText: "________ water in that bottle is very cold.", options: [{letter:"A", text:"A"}, {letter:"B", text:"An"}, {letter:"C", text:"The"}, {letter:"D", text:"X (no article)"}], correctAnswer: "C", hints: ["Água específica (a daquela garrafa)."] },
    { id: "art-4", type: "mc", questionText: "I love ________ Brazilian food.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X (no article)"}], correctAnswer: "D", hints: ["Conceitos gerais não usam artigo."] },
    { id: "art-5", type: "short-answer", questionText: "Article: He is ________ honest person.", correctAnswer: "an", hints: ["Cuidado! 'Honest' tem H mudo."] },
    { id: "art-6", type: "mc", questionText: "Paris is ________ capital of France.", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X (no article)"}], correctAnswer: "C", hints: ["Unicidade: só existe uma capital."] },
    { id: "art-7", type: "mc", questionText: "She has ________ cat and ________ dog.", options: [{letter:"A", text:"a / a"}, {letter:"B", text:"an / an"}, {letter:"C", text:"the / the"}, {letter:"D", text:"X / X"}], correctAnswer: "A", hints: ["Consonantal sounds."] },
    { id: "art-8", type: "short-answer", questionText: "Article: I saw ________ UFO last night.", correctAnswer: "a", hints: ["UFO tem som de 'Y' (consoante)."] },
    { id: "art-9", type: "mc", questionText: "________ Moon looks beautiful tonight.", options: [{letter:"A", text:"A"}, {letter:"B", text:"An"}, {letter:"C", text:"The"}, {letter:"D", text:"X (no article)"}], correctAnswer: "C", hints: ["Corpos celestes únicos usam THE."] },
    { id: "art-10", type: "mc", questionText: "Would you like ________ cup of tea?", options: [{letter:"A", text:"a"}, {letter:"B", text:"an"}, {letter:"C", text:"the"}, {letter:"D", text:"X (no article)"}], correctAnswer: "A", hints: ["Uma xícara qualquer."] }
];

// 4. CAP 6: PAST PERFECT (10 Questões)
const bankPastPerfect = [
    { id: "ppf-1", type: "mc", questionText: "The train ________ (leave) when I arrived at the station.", options: [{letter:"A", text:"has left"}, {letter:"B", text:"had left"}, {letter:"C", text:"was left"}, {letter:"D", text:"leaves"}], correctAnswer: "B", hints: ["Passado do passado: Had + Particípio."] },
    { id: "ppf-2", type: "mc", questionText: "I recognized him because I ________ (see) him before.", options: [{letter:"A", text:"saw"}, {letter:"B", text:"had seen"}, {letter:"C", text:"have seen"}, {letter:"D", text:"was seeing"}], correctAnswer: "B", hints: ["Ação anterior ao reconhecimento."] },
    { id: "ppf-3", type: "short-answer", questionText: "Complete: They ________ (finish) the report before the deadline.", correctAnswer: "had finished", hints: ["Use o auxiliar HAD."] },
    { id: "ppf-4", type: "mc", questionText: "She failed the test because she ________ (not/study).", options: [{letter:"A", text:"hadn't studied"}, {letter:"B", text:"haven't studied"}, {letter:"C", text:"didn't studied"}, {letter:"D", text:"wasn't study"}], correctAnswer: "A", hints: ["Negativa no Past Perfect."] },
    { id: "ppf-5", type: "mc", questionText: "________ you ________ (eat) breakfast before you went to work?", options: [{letter:"A", text:"Had / eaten"}, {letter:"B", text:"Have / eat"}, {letter:"C", text:"Did / ate"}, {letter:"D", text:"Was / eating"}], correctAnswer: "A", hints: ["Pergunta no Past Perfect."] },
    { id: "ppf-6", type: "short-answer", questionText: "Complete: By the time I was 20, I ________ (visit) 5 countries.", correctAnswer: "had visited", hints: ["Ação completada até um ponto no passado."] },
    { id: "ppf-7", type: "mc", questionText: "The house was dirty because they ________ (not/clean) it for weeks.", options: [{letter:"A", text:"didn't clean"}, {letter:"B", text:"hadn't cleaned"}, {letter:"C", text:"weren't cleaning"}, {letter:"D", text:"haven't cleaned"}], correctAnswer: "B", hints: ["Causa no passado anterior."] },
    { id: "ppf-8", type: "mc", questionText: "After we ________ (finish) dinner, we went for a walk.", options: [{letter:"A", text:"finish"}, {letter:"B", text:"have finished"}, {letter:"C", text:"had finished"}, {letter:"D", text:"were finishing"}], correctAnswer: "C", hints: ["Primeiro jantou, depois passeou."] },
    { id: "ppf-9", type: "short-answer", questionText: "Complete: I ________ (never/be) to Japan until last year.", correctAnswer: "had never been", hints: ["Use o advérbio 'never' entre o had e o been."] },
    { id: "ppf-10", type: "mc", questionText: "The teacher ________ (already/start) the class when I walked in.", options: [{letter:"A", text:"had already started"}, {letter:"B", text:"already started"}, {letter:"C", text:"was already starting"}, {letter:"D", text:"has already started"}], correctAnswer: "A", hints: ["Already reforça que a ação já tinha ocorrido."] }
];

// 5. CAP 7: CAUSATIVE VERBS (10 Questões)
const bankCausative = [
    { id: "cau-1", type: "mc", questionText: "I had the plumber ________ (fix) the leak.", options: [{letter:"A", text:"to fix"}, {letter:"B", text:"fix"}, {letter:"C", text:"fixing"}, {letter:"D", text:"fixed"}], correctAnswer: "B", hints: ["HAVE + person + base form."] },
    { id: "cau-2", type: "mc", questionText: "She got her sister ________ (help) her with the project.", options: [{letter:"A", text:"help"}, {letter:"B", text:"to help"}, {letter:"C", text:"helping"}, {letter:"D", text:"helped"}], correctAnswer: "B", hints: ["GET + person + TO + verb."] },
    { id: "cau-3", type: "mc", questionText: "The teacher made the students ________ (rewrite) the essay.", options: [{letter:"A", text:"rewrite"}, {letter:"B", text:"to rewrite"}, {letter:"C", text:"rewriting"}, {letter:"D", text:"rewrote"}], correctAnswer: "A", hints: ["MAKE + person + base form (obrigação)."] },
    { id: "cau-4", type: "short-answer", questionText: "Complete: I need to get my hair ________ (cut).", correctAnswer: "cut", hints: ["Causativo passivo: GET + object + V3 (particípio)."] },
    { id: "cau-5", { id: "cau-5", type: "mc", questionText: "My parents let me ________ (go) to the party.", options: [{letter:"A", text:"to go"}, {letter:"B", text:"go"}, {letter:"C", text:"going"}, {letter:"D", text:"gone"}], correctAnswer: "B", hints: ["LET + person + base form."] },
    { id: "cau-6", type: "mc", questionText: "I'll have my assistant ________ (call) you tomorrow.", options: [{letter:"A", text:"call"}, {letter:"B", text:"to call"}, {letter:"C", text:"calling"}, {letter:"D", text:"called"}], correctAnswer: "A", hints: ["Have (causativo ativo)."] },
    { id: "cau-7", type: "short-answer", questionText: "Complete: We had our house ________ (paint) last week.", correctAnswer: "painted", hints: ["A casa foi pintada (particípio)."] },
    { id: "cau-8", type: "mc", questionText: "Can you help me ________ (carry) these bags?", options: [{letter:"A", text:"carry"}, {letter:"B", text:"to carry"}, {letter:"C", text:"both A and B"}, {letter:"D", text:"carrying"}], correctAnswer: "C", hints: ["O verbo HELP aceita com ou sem 'TO'."] },
    { id: "cau-9", type: "mc", questionText: "The doctor made him ________ (stay) in bed.", options: [{letter:"A", text:"to stay"}, {letter:"B", text:"stay"}, {letter:"C", text:"stayed"}, {letter:"D", text:"staying"}], correctAnswer: "B", hints: ["Make = obrigar."] },
    { id: "cau-10", type: "mc", questionText: "I got the computer ________ (repair) by a professional.", options: [{letter:"A", text:"repair"}, {letter:"B", text:"to repair"}, {letter:"C", text:"repaired"}, {letter:"D", text:"repairing"}], correctAnswer: "C", hints: ["Get + objeto + particípio."] }
];

// ==========================================
// LÓGICA DE SORTEIO E INTEGRAÇÃO (Simulando o build)
// ==========================================

function buildFinalTest() {
    // Sorteando 2 de cada banco para um teste de 10 questões, por exemplo:
    const finalSelection = [
        ...getRandom(bankPastProgressive, 2),
        ...getRandom(bankIndefinite, 2),
        ...getRandom(bankArticles, 2),
        ...getRandom(bankPastPerfect, 2),
        ...getRandom(bankCausative, 2)
    ];
    
    console.log("Teste gerado com sucesso!");
    return finalSelection;
}

// Reutilizando sua função getRandom
function getRandom(array, num) {
    if (!array || array.length === 0) return [];
    return [...array].sort(() => 0.5 - Math.random()).slice(0, num);
}

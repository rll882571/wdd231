const questionBank = [
    
    {
    id: "q1",
    type: "mc",
    questionText: `
        Questão 1:
        <br>
        Sobre o uso das "Question Tags" em inglês, analise as afirmações abaixo e assinale a opção que contém apenas a(s) afirmativa(s) correta(s):
        <br><br>
        I. As "Question Tags" são usadas para confirmar informações ou buscar concordância do ouvinte.<br>
        II. Elas sempre repetem o verbo principal da frase na forma afirmativa.<br>
        III. Quando a frase é afirmativa, a tag é negativa.<br>
        IV. Quando a frase é negativa, a tag é afirmativa.<br>
        V. São usadas apenas em perguntas formais.
    `,
    options: [
        { letter: "A", text: "(A) Apenas I, III e IV estão corretas.", isCorrect: true, rationale: "Essas afirmativas representam o uso correto das Question Tags." },
        { letter: "B", text: "(B) Apenas I e II estão corretas.", isCorrect: false, rationale: "A II está incorreta, pois a tag usa o verbo auxiliar, não o verbo principal." },
        { letter: "C", text: "(C) Apenas II e V estão corretas.", isCorrect: false, rationale: "A II e a V estão incorretas — question tags são usadas em conversas informais." },
        { letter: "D", text: "(D) Todas as afirmações estão corretas.", isCorrect: false, rationale: "As afirmações II e V estão erradas." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q1): Em frases afirmativas, a tag é negativa — e vice-versa!"]
},
{
    id: "q2",
    type: "mc",
    questionText: `
        
        <br>
        Analise as sentenças e identifique quais estão com as question tags corretas:
        <br><br>
        I. She’s your teacher, isn’t she?<br>
        II. They don’t like pizza, do they?<br>
        III. He plays football, doesn’t he?<br>
        IV. You are tired, aren’t you?<br>
        V. You didn’t went to school, did you?
    `,
    options: [
        { letter: "A", text: "(A) I, II, III e IV estão corretas.", isCorrect: true, rationale: "A V está incorreta, pois o verbo ‘didn’t went’ está errado — deveria ser ‘didn’t go’." },
        { letter: "B", text: "(B) Todas estão corretas.", isCorrect: false, rationale: "Há erro gramatical na V." },
        { letter: "C", text: "(C) Apenas II e IV estão corretas.", isCorrect: false, rationale: "I e III também estão corretas." },
        { letter: "D", text: "(D) Apenas I e V estão corretas.", isCorrect: false, rationale: "A V está incorreta." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q2): Observe o tempo verbal antes de formar a tag — use o mesmo auxiliar!"]
},
{
    id: "q3",
    type: "mc",
    questionText: `
        Questão 3:
        <br>
        Sobre a formação das "Question Tags", marque a opção correta:
        <br><br>
        I. Quando há o verbo “am” na frase afirmativa, a tag correta é “aren’t I?”.<br>
        II. Quando há “I am not”, a tag é “am I?”.<br>
        III. Em frases com “let’s”, usa-se “shall we?” na tag.<br>
        IV. A tag de “nobody” ou “someone” geralmente é negativa.<br>
        V. Se não há auxiliar na frase, usa-se “do/does/did” conforme o tempo.
    `,
    options: [
        { letter: "A", text: "(A) Todas as afirmações estão corretas.", isCorrect: true, rationale: "Essas são todas as regras de formação específicas das question tags." },
        { letter: "B", text: "(B) Apenas I, II e III estão corretas.", isCorrect: false, rationale: "A IV e V também estão corretas." },
        { letter: "C", text: "(C) Apenas II e IV estão corretas.", isCorrect: false, rationale: "As outras também estão certas." },
        { letter: "D", text: "(D) Apenas III e V estão corretas.", isCorrect: false, rationale: "Há mais sentenças verdadeiras além dessas." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q3): ‘Am I not?’ é formal — prefira ‘Aren’t I?’ em conversas."]
},
{
    id: "q4",
    type: "mc",
    questionText: `
        Questão 4:
        <br>
        Identifique a opção que contém apenas sentenças com *question tags* incorretas:
        <br><br>
        I. You like coffee, aren’t you?<br>
        II. He can swim, can he?<br>
        III. They’re late, are they?<br>
        IV. You don’t eat meat, do you?<br>
        V. We finished early, didn’t we?
    `,
    options: [
        { letter: "A", text: "(A) I, II e III estão incorretas.", isCorrect: true, rationale: "A I e II usam o verbo errado; a III deveria ser ‘aren’t they?’" },
        { letter: "B", text: "(B) I e V estão incorretas.", isCorrect: false, rationale: "A V está correta (‘didn’t we?’)." },
        { letter: "C", text: "(C) Apenas II e IV estão incorretas.", isCorrect: false, rationale: "A IV está correta." },
        { letter: "D", text: "(D) Todas estão corretas.", isCorrect: false, rationale: "Há erros nas três primeiras." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q4): O auxiliar da tag deve combinar com o da frase principal."]
},
{
    id: "q5",
    type: "mc",
    questionText: `
        Questão 5:
        <br>
        Analise as afirmações sobre o uso de pronomes nas question tags:
        <br><br>
        I. O pronome da tag sempre concorda com o sujeito da frase principal.<br>
        II. Se o sujeito for um substantivo, o pronome deve substituí-lo na tag.<br>
        III. É possível repetir o nome do sujeito em vez do pronome.<br>
        IV. Em frases com “there is”, a tag usa “isn’t there?”.<br>
        V. Em frases com “someone” ou “everybody”, a tag costuma usar “they”.
    `,
    options: [
        { letter: "A", text: "(A) Apenas I, II, IV e V estão corretas.", isCorrect: true, rationale: "A III está incorreta — o pronome é obrigatório na tag." },
        { letter: "B", text: "(B) Apenas I e III estão corretas.", isCorrect: false, rationale: "A III está errada." },
        { letter: "C", text: "(C) Todas estão corretas.", isCorrect: false, rationale: "A III é incorreta." },
        { letter: "D", text: "(D) Apenas II e IV estão corretas.", isCorrect: false, rationale: "A V também está correta." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q5): O sujeito da tag sempre vira um pronome!"]
},
{
    id: "q6",
    type: "mc",
    questionText: `
        Questão 6:
        <br>
        Escolha a opção que apresenta a regra **incorreta** sobre question tags:
        <br><br>
        I. Se a frase é afirmativa, a tag é afirmativa também.<br>
        II. O auxiliar “do” é usado quando o verbo principal não tem auxiliar.<br>
        III. O verbo principal deve concordar em tempo e número com o auxiliar da tag.<br>
        IV. O sujeito é sempre repetido na tag, mas na forma pronominal.<br>
        V. “Let’s” usa a tag “shall we?”.
    `,
    options: [
        { letter: "A", text: "(A) Apenas I está incorreta.", isCorrect: true, rationale: "A frase afirmativa pede tag negativa, não afirmativa." },
        { letter: "B", text: "(B) Todas estão incorretas.", isCorrect: false, rationale: "Somente I está errada." },
        { letter: "C", text: "(C) Apenas II e III estão incorretas.", isCorrect: false, rationale: "Essas estão certas." },
        { letter: "D", text: "(D) Nenhuma está correta.", isCorrect: false, rationale: "Há várias corretas." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q6): Frase afirmativa = tag negativa; frase negativa = tag afirmativa."]
},
{
    id: "q7",
    type: "mc",
    questionText: `
        Questão 7:
        <br>
        Sobre o uso de question tags em diferentes tempos verbais, analise:
        <br><br>
        I. He has finished, hasn’t he?<br>
        II. She didn’t call, did she?<br>
        III. You will come, won’t you?<br>
        IV. They can’t swim, can’t they?<br>
        V. We are late, aren’t we?
    `,
    options: [
        { letter: "A", text: "(A) Apenas I, II, III e V estão corretas.", isCorrect: true, rationale: "A IV está errada — deveria ser ‘can they?’" },
        { letter: "B", text: "(B) Todas estão corretas.", isCorrect: false, rationale: "A IV está incorreta." },
        { letter: "C", text: "(C) Apenas I e II estão corretas.", isCorrect: false, rationale: "III e V também estão certas." },
        { letter: "D", text: "(D) Apenas IV está correta.", isCorrect: false, rationale: "IV está errada." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q7): Se a frase é negativa com 'can’t', a tag é 'can they?'."]
},
{
    id: "q8",
    type: "mc",
    questionText: `
        Questão 8:
        <br>
        Complete a frase com a tag correta: “Nobody called you, _____?”
    `,
    options: [
        { letter: "A", text: "(A) did they?", isCorrect: true, rationale: "‘Nobody’ é negativo, então a tag deve ser afirmativa (‘did they?’)." },
        { letter: "B", text: "(B) didn’t they?", isCorrect: false, rationale: "Isso criaria uma dupla negação." },
        { letter: "C", text: "(C) do they?", isCorrect: false, rationale: "Tempo verbal incorreto." },
        { letter: "D", text: "(D) doesn’t he?", isCorrect: false, rationale: "Pronome incorreto." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q8): ‘Nobody’ já é negativo, então a tag deve ser afirmativa."]
},
{
    id: "q9",
    type: "mc",
    questionText: `
        Questão 9:
        <br>
        Complete corretamente: “Let’s study now, _____?”
    `,
    options: [
        { letter: "A", text: "(A) shall we?", isCorrect: true, rationale: "A tag correta após ‘let’s’ é ‘shall we?’." },
        { letter: "B", text: "(B) will we?", isCorrect: false, rationale: "Usa-se ‘shall’, não ‘will’." },
        { letter: "C", text: "(C) do we?", isCorrect: false, rationale: "‘Do’ não é usado após ‘let’s’." },
        { letter: "D", text: "(D) aren’t we?", isCorrect: false, rationale: "Forma incorreta para essa construção." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q9): Toda vez que usar ‘Let’s’, a tag será ‘shall we?’."]
},
{
    id: "q10",
    type: "mc",
    questionText: `
        Questão 10:
        <br>
        Escolha a frase com a question tag **correta**:
        <br><br>
        I. She isn’t your friend, is she?<br>
        II. He doesn’t like dogs, does he?<br>
        III. You’re coming, aren’t you?<br>
        IV. We didn’t go, didn’t we?<br>
        V. They can speak English, can they?
    `,
    options: [
        { letter: "A", text: "(A) I, II e III estão corretas.", isCorrect: true, rationale: "As três seguem a regra correta de afirmação/negação e auxiliar apropriado." },
        { letter: "B", text: "(B) IV e V estão corretas.", isCorrect: false, rationale: "IV e V estão incorretas — repetem auxiliar ou têm inversão errada." },
        { letter: "C", text: "(C) Todas estão corretas.", isCorrect: false, rationale: "IV e V estão erradas." },
        { letter: "D", text: "(D) Apenas I e V estão corretas.", isCorrect: false, rationale: "A V está incorreta." }
    ],
    correctAnswer: "A",
    videoUrl: "",
    hints: ["Dica (Q10): Confirme se o auxiliar e o pronome concordam com o sujeito."]
},
{
    id: "q11",
    type: "mc",
    questionText: `
        Question 11:<br>
        Complete the sentence:<br>
        She can play the piano very well, ______?
    `,
    options: [
        { letter: "A", text: "(A) can she?", isCorrect: false },
        { letter: "B", text: "(B) can't she?", isCorrect: true },
        { letter: "C", text: "(C) does she?", isCorrect: false },
        { letter: "D", text: "(D) isn’t she?", isCorrect: false }
    ],
    correctAnswer: "B",
    hints: ["Dica: If the main clause is positive, the tag is negative!"]
},
{
    id: "q12",
    type: "mc",
    questionText: `
        Question 12:<br>
        Choose the correct tag:<br>
        They aren’t coming to the party, ______?
    `,
    options: [
        { letter: "A", text: "(A) are they?", isCorrect: true },
        { letter: "B", text: "(B) aren’t they?", isCorrect: false },
        { letter: "C", text: "(C) do they?", isCorrect: false },
        { letter: "D", text: "(D) didn’t they?", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Negative sentence → positive question tag."]
},
{
    id: "q13",
    type: "mc",
    questionText: `
        Question 13:<br>
        It’s a beautiful day, ______?
    `,
    options: [
        { letter: "A", text: "(A) isn’t it?", isCorrect: true },
        { letter: "B", text: "(B) is it?", isCorrect: false },
        { letter: "C", text: "(C) doesn’t it?", isCorrect: false },
        { letter: "D", text: "(D) wasn’t it?", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: 'It’s' = It is → affirmative → negative tag."]
},
{
    id: "q14",
    type: "mc",
    questionText: `
        Question 14:<br>
        You don’t like coffee, ______?
    `,
    options: [
        { letter: "A", text: "(A) do you?", isCorrect: true },
        { letter: "B", text: "(B) don’t you?", isCorrect: false },
        { letter: "C", text: "(C) are you?", isCorrect: false },
        { letter: "D", text: "(D) will you?", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Negative statement → use a positive tag."]
},
{
    id: "q15",
    type: "mc",
    questionText: `
        Question 15:<br>
        Choose the correct sentence:
    `,
    options: [
        { letter: "A", text: "(A) He went to school, isn’t he?", isCorrect: false },
        { letter: "B", text: "(B) He goes to school, does he?", isCorrect: false },
        { letter: "C", text: "(C) He went to school, didn’t he?", isCorrect: true },
        { letter: "D", text: "(D) He goes to school, didn’t he?", isCorrect: false }
    ],
    correctAnswer: "C",
    hints: ["Dica: 'Went' → past tense → tag must use 'did'."]
},
{
    id: "q16",
    type: "mc",
    questionText: `
        Question 16:<br>
        Let’s go to the park, ______?
    `,
    options: [
        { letter: "A", text: "(A) shall we?", isCorrect: true },
        { letter: "B", text: "(B) will we?", isCorrect: false },
        { letter: "C", text: "(C) do we?", isCorrect: false },
        { letter: "D", text: "(D) won’t we?", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: With 'Let’s', the tag is always 'shall we?'"]
},
{
    id: "q17",
    type: "mc",
    questionText: `
        Question 17:<br>
        Nobody called you, ______?
    `,
    options: [
        { letter: "A", text: "(A) did they?", isCorrect: true },
        { letter: "B", text: "(B) didn’t they?", isCorrect: false },
        { letter: "C", text: "(C) did he?", isCorrect: false },
        { letter: "D", text: "(D) doesn’t he?", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: With 'nobody' or 'no one', the tag is positive."]
},
{
    id: "q18",
    type: "mc",
    questionText: `
        Question 18:<br>
        You have finished your homework, ______?
    `,
    options: [
        { letter: "A", text: "(A) haven’t you?", isCorrect: true },
        { letter: "B", text: "(B) did you?", isCorrect: false },
        { letter: "C", text: "(C) don’t you?", isCorrect: false },
        { letter: "D", text: "(D) have you?", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Present perfect → use 'have/has' in the tag."]
},
{
    id: "q19",
    type: "mc",
    questionText: `
        Question 19:<br>
        There were many people at the concert, ______?
    `,
    options: [
        { letter: "A", text: "(A) weren’t there?", isCorrect: true },
        { letter: "B", text: "(B) were they?", isCorrect: false },
        { letter: "C", text: "(C) wasn’t it?", isCorrect: false },
        { letter: "D", text: "(D) isn’t there?", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Use 'there' again in the tag!"]
},
{
    id: "q20",
    type: "mc",
    questionText: `
        Question 20:<br>
        Choose the correct tag:<br>
        I am late, ______?
    `,
    options: [
        { letter: "A", text: "(A) am I?", isCorrect: false },
        { letter: "B", text: "(B) aren’t I?", isCorrect: true },
        { letter: "C", text: "(C) isn’t I?", isCorrect: false },
        { letter: "D", text: "(D) don’t I?", isCorrect: false }
    ],
    correctAnswer: "B",
    hints: ["Dica: Exception! 'I am' → 'aren’t I?'"]
},
{
    id: "q_strategy_tip",
    type: "mc",
    questionText: `
        Uma boa prática na hora da prova para distinguir se você deve usar o Simple Future (Will) ou o Future Continuous (Will be + -ing)é olhar se...
    `,
    options: [
        { letter: "A", text: "(A) ...a frase expressa uma promessa ou oferta (neste caso, usa-se sempre o Continuous).", isCorrect: false, rationale: "Incorreto. Promessas e ofertas pedem o Simple Future (Will)." },
        { letter: "B", text: "(B) ...a frase menciona um <strong>horário ou momento específico</strong> (ex: 'At 8 PM', 'This time tomorrow') indicando que a ação estará em andamento.", isCorrect: true, rationale: "Perfeito! Essa é a chave. Se tem hora marcada para a ação estar 'rolando', é Future Continuous." },
        { letter: "C", text: "(C) ...o verbo principal é irregular (verbos irregulares não aceitam o Simple Future).", isCorrect: false, rationale: "Mito. O tipo do verbo não define o tempo verbal." },
        { letter: "D", text: "(D) ...a frase está na negativa (frases negativas preferem o Continuous).", isCorrect: false, rationale: "A negativa (won't) funciona igualmente para os dois tempos." }
    ],
    correctAnswer: "B",
    videoUrl: "",
    hints: ["Dica: Pergunte para a frase: 'Você é apenas um fato futuro ou um filme rodando numa hora exata?'"]
}

];
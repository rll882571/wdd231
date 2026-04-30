// ==========================================
// 1. VARIÁVEIS GLOBAIS E BANCOS
// ==========================================
let currentStudentName = null;
let currentTestQuestions = [];

const studentDatabase = {
    "yanne": { name: "Yanne", password: "123" },
    "luiz": { name: "Luiz", password: "456" },
    "sophia": { name: "Sophia", password: "789" },
    "davi": { name: "Davi", password: "2025" },
    "aluno": { name: "Ester da TUF", password: "2025" },
    "master": { name: "Bora tirar 10! Luigi", password: "2025" }
};

const bankInterpWrite = [
    {
    id: "q1",
    type: "short-answer-double",
    questionText: `
        <i>Read the context and type "used to" or "didn't use to" to complete the sentences:</i><br><br>
        
        <b>a)</b> I <input type="text" class="answer-input" data-ans-idx="0" style="width: 120px !important; display: inline-block;" placeholder="..."> play video games all day, but now I don't have time.<br><br>

        <b>b)</b> She <input type="text" class="answer-input" data-ans-idx="1" style="width: 120px !important; display: inline-block;" placeholder="..."> like vegetables when she was a kid, but now she loves them.<br><br>

        <b>c)</b> We <input type="text" class="answer-input" data-ans-idx="2" style="width: 120px !important; display: inline-block;" placeholder="..."> live in a small apartment before moving to this big house.<br><br>

        <b>d)</b> He <input type="text" class="answer-input" data-ans-idx="3" style="width: 120px !important; display: inline-block;" placeholder="..."> smoke, but he quit 5 years ago.<br><br>

        <b>e)</b> They <input type="text" class="answer-input" data-ans-idx="4" style="width: 120px !important; display: inline-block;" placeholder="..."> travel much, but now they go abroad every year.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>📺 <b>Study Support:</b> <a href="https://www.youtube.com/results?search_query=used+to+and+didn%27t+use+to+grammar" target="_blank">Search for explanation videos</a></small>
        </div>
    `,
    correctAnswers: ["used to", "didn't use to", "used to", "used to", "didn't use to"],
    hints: [
        "Dica: Usamos 'used to' para hábitos ou situações que aconteciam no passado, mas não acontecem mais (ex: algo que você fazia e parou).",
        "Dica: Na negativa, usamos 'didn't use to' (observe que o verbo 'use' fica sem o 'd' no final, pois o auxiliar 'didn't' já indica que a frase está no passado)."
    ]
},
    {
    id: "q2",
    type: "short-answer-double",
    questionText: `
        <i>Read the context carefully and type "used to" or "didn't use to" to complete the sentences:</i><br><br>
        
        <b>a)</b> He <input type="text" class="answer-input" data-ans-idx="0" style="width: 120px !important; display: inline-block;" placeholder="..."> hate coffee, but now he drinks three cups a day.<br><br>

        <b>b)</b> We <input type="text" class="answer-input" data-ans-idx="1" style="width: 120px !important; display: inline-block;" placeholder="..."> have a car. We walked or took the bus everywhere.<br><br>

        <b>c)</b> My sister <input type="text" class="answer-input" data-ans-idx="2" style="width: 120px !important; display: inline-block;" placeholder="..."> be very shy, but now she talks to everyone.<br><br>

        <b>d)</b> I <input type="text" class="answer-input" data-ans-idx="3" style="width: 120px !important; display: inline-block;" placeholder="..."> worry about my diet, but now I try to eat very healthy.<br><br>

        <b>e)</b> They <input type="text" class="answer-input" data-ans-idx="4" style="width: 120px !important; display: inline-block;" placeholder="..."> live in Paris before they moved to London.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>💡 <b>Quick Review:</b> We use this grammar for past habits or past states (like being shy or hating something) that are different now.</small>
        </div>
    `,
    correctAnswers: ["used to", "didn't use to", "used to", "didn't use to", "used to"],
    hints: [
        "Dica: Preste atenção no contraste! Se a pessoa faz algo agora no presente, significa que ela NÃO costumava fazer no passado (didn't use to).",
        "Dica: Se a frase diz que eles andavam a pé ou de ônibus (walked / took the bus), isso significa que eles tinham ou não tinham um carro?"
    ]
},
    {
    id: "q3",
    type: "short-answer-double",
    questionText: `
        <i>Read the sentences about past habits and type "used to", "didn't use to", or "use to" (for questions):</i><br><br>
        
        <b>a)</b> I <input type="text" class="answer-input" data-ans-idx="0" style="width: 120px !important; display: inline-block;" placeholder="..."> play the guitar, but I sold it last year.<br><br>

        <b>b)</b> She <input type="text" class="answer-input" data-ans-idx="1" style="width: 120px !important; display: inline-block;" placeholder="..."> like dogs because she was afraid, but now she has a puppy.<br><br>

        <b>c)</b> What kind of music did you <input type="text" class="answer-input" data-ans-idx="2" style="width: 120px !important; display: inline-block;" placeholder="..."> listen to when you were a teenager?<br><br>

        <b>d)</b> We <input type="text" class="answer-input" data-ans-idx="3" style="width: 120px !important; display: inline-block;" placeholder="..."> eat out a lot, but now we prefer cooking at home.<br><br>

        <b>e)</b> They <input type="text" class="answer-input" data-ans-idx="4" style="width: 120px !important; display: inline-block;" placeholder="..."> speak any Spanish, but they learned it fast when they moved to Madrid.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>🧠 <b>Pro Tip:</b> Look out for the word "Did" in the sentence. If it's there, remember to drop the "d"!</small>
        </div>
    `,
    correctAnswers: ["used to", "didn't use to", "use to", "used to", "didn't use to"],
    hints: [
        "Dica: Se a frase indica algo que a pessoa NÃO fazia antes de aprender ou mudar de ideias, use a forma negativa (didn't use to).",
        "Dica: Na pergunta (letra C), o auxiliar 'did' já está no passado. O que acontece com o 'd' no final do verbo?"
    ]
},
{
    id: "q4",
    type: "short-answer-double",
    questionText: `
        <i>Read carefully and complete the sentences with "used to", "didn't use to", or "use to" (for questions):</i><br><br>
        
        <b>a)</b> <b>A:</b> Did you <input type="text" class="answer-input" data-ans-idx="0" style="width: 120px !important; display: inline-block;" placeholder="..."> play in the street when you were a kid?<br>
        <b>B:</b> Yes, every day!<br><br>

        <b>b)</b> I <input type="text" class="answer-input" data-ans-idx="1" style="width: 120px !important; display: inline-block;" placeholder="..."> have a lot of free time, but now I work full-time.<br><br>

        <b>c)</b> <b>A:</b> Where did they <input type="text" class="answer-input" data-ans-idx="2" style="width: 120px !important; display: inline-block;" placeholder="..."> go on vacation?<br>
        <b>B:</b> They always went to the beach.<br><br>

        <b>d)</b> She <input type="text" class="answer-input" data-ans-idx="3" style="width: 120px !important; display: inline-block;" placeholder="..."> like spicy food, but now she loves Mexican dishes.<br><br>

        <b>e)</b> There <input type="text" class="answer-input" data-ans-idx="4" style="width: 120px !important; display: inline-block;" placeholder="..."> be a movie theater in this town, but it closed in 2010.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>⚠️ <b>Watch out:</b> In questions with "Did", the verb loses the "d" and becomes just "use to"!</small>
        </div>
    `,
    correctAnswers: ["use to", "used to", "use to", "didn't use to", "used to"],
    hints: [
        "Dica: Em perguntas (quando tem o 'Did' antes do sujeito), o verbo perde o 'd' no final. Usamos apenas 'use to'.",
        "Dica: Para coisas que existiam num lugar e já não existem, usamos 'There used to be' (Costumava haver / Existia)."
    ]
},
   
];

const bankInterpMC = [
    {
    id: "q5",
    type: "short-answer-double",
    questionText: `
        <b>Reading: "Used to" Structure and Usage</b><br>
        <i>"The expression 'used to' is utilized to talk about past habits, routines, or states that are no longer true in the present. It highlights a strong contrast between the past and now. In affirmative sentences, the structure is subject + used to + base verb. However, in negative sentences, we use the past auxiliary 'didn't' and must drop the 'd', making it 'didn't use to'. The same spelling rule applies to questions, where we use the auxiliary 'Did' and 'use to'. It is important to remember that 'used to' only refers to the past; we cannot use it to describe current habits."</i>
        <br><br>
        <b>Write (T) for True or (F) for False according to the text:</b>
        <br><br>
        <b>a) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="0"></b> The expression "used to" is used to describe routines that happen in the present.
        <br><br>
        <b>b) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="1"></b> "Used to" shows a contrast between how things were in the past and how they are now.
        <br><br>
        <b>c) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="2"></b> When making a negative sentence, you must keep the "d" at the end of the word (didn't used to).
        <br><br>
        <b>d) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="3"></b> In questions, because we use the auxiliary "Did", we write "use to" without the "d".
    `,
    correctAnswers: ["F", "T", "F", "T"],
    hints: [
        "A: Read the first and last sentences of the text to see which timeline 'used to' belongs to.",
        "B: Look at the second sentence of the text.",
        "C: Check the rule in the text about the auxiliary 'didn't' and what happens to the letter 'd'.",
        "D: Read the part of the text that explains the spelling rule for questions."
    ]
},
    {
    id: "q6",
    type: "short-answer-double",
    questionText: `
        <b>Reading: Questions and Common Mistakes</b><br>
        <i>"To ask a question about a past habit, you must use the past auxiliary 'Did' before the subject, followed by 'use to'. A very common mistake is keeping the 'd' at the end of the verb in questions and negative sentences (such as writing 'didn't used to' or 'Did you used to?'). Since the auxiliary 'did' already indicates the past tense, the correct form is always 'use to' without the 'd'. Another frequent error is trying to use this expression for present routines, for example, saying 'I use to wake up early now'. This is incorrect. For present habits, we simply use the Present Simple tense with adverbs like 'usually' or 'normally'."</i>
        <br><br>
        <b>Write (T) for True or (F) for False according to the text:</b>
        <br><br>
        <b>a) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="0"></b> In questions, we use the auxiliary "Did" but we must keep the "d" at the end of the word "used".
        <br><br>
        <b>b) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="1"></b> Writing "didn't used to" is grammatically incorrect because the auxiliary already indicates the past.
        <br><br>
        <b>c) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="2"></b> You can say "I use to go to the gym" to describe a routine you do every day in the present.
        <br><br>
        <b>d) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="3"></b> If you want to talk about a present habit, you should use adverbs like "usually" or "normally" instead.
    `,
    correctAnswers: ["F", "T", "F", "T"],
    hints: [
        "A: Check the text carefully to see if we keep or remove the 'd' when using the word 'Did'.",
        "B: Read the part about 'very common mistakes' in negative sentences.",
        "C: Look at the text section that talks about 'present routines'. Is that example correct?",
        "D: Read the very last sentence of the text to see the rule for present habits."
    ]
},
{
    id: "q7",
    type: "short-answer-double",
    questionText: `
        <b>Grammar Check: Correct or Incorrect?</b><br>
        <i>Read the sentences below carefully. Are they grammatically correct? Write <b>(T)</b> if the sentence is completely correct (True) or <b>(F)</b> if the sentence has a grammar mistake (False):</i>
        <br><br>
        <b>a) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="0"></b> She didn't used to like vegetables, but now she loves them.
        <br><br>
        <b>b) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="1"></b> Did you use to play the piano when you were younger?
        <br><br>
        <b>c) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="2"></b> I use to wake up at 6 AM every morning for my current job.
        <br><br>
        <b>d) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="3"></b> There used to be a great restaurant on this street, but it closed last year.
    `,
    correctAnswers: ["F", "T", "F", "T"],
    hints: [
        "A: Look closely at the negative form. Should the verb have a 'd' at the end when we use the auxiliary 'didn't'?",
        "B: Check the question structure. We have 'Did' + subject + base verb ('use to'). Is there any mistake here?",
        "C: Pay attention to the context ('current job' / 'every morning'). Can we use this grammar for habits in the present?",
        "D: 'There used to be' means 'existia' or 'costumava haver'. Read the context carefully to see if it makes sense."
    ]
},
{
    id: "q8",
    type: "short-answer-double",
    questionText: `
        <b>Level: Easy 🟢</b><br>
        <i>Read the sentences and type <b>"used to"</b> (for affirmative) or <b>"didn't use to"</b> (for negative):</i><br><br>
        
        <b>a)</b> I <input type="text" class="answer-input" data-ans-idx="0" style="width: 120px !important; display: inline-block;" placeholder="..."> play football when I was 10 years old.<br><br>

        <b>b)</b> She <input type="text" class="answer-input" data-ans-idx="1" style="width: 120px !important; display: inline-block;" placeholder="..."> eat vegetables, but now she loves carrots and broccoli.<br><br>

        <b>c)</b> We <input type="text" class="answer-input" data-ans-idx="2" style="width: 120px !important; display: inline-block;" placeholder="..."> live in a small house before moving to this big apartment.<br><br>

        <b>d)</b> They <input type="text" class="answer-input" data-ans-idx="3" style="width: 120px !important; display: inline-block;" placeholder="..."> have a dog, but now they have two cats.<br><br>

        <b>e)</b> He <input type="text" class="answer-input" data-ans-idx="4" style="width: 120px !important; display: inline-block;" placeholder="..."> read books, but now he reads one every week.
    `,
    correctAnswers: ["used to", "didn't use to", "used to", "didn't use to", "didn't use to"],
    hints: [
        "Dica: Lê o final da frase. Se a pessoa faz algo AGORA ('now she loves', 'now he reads'), significa que NÃO costumava fazer antes (didn't use to).",
        "Dica: Se é uma memória afirmativa do passado ('when I was 10'), usamos 'used to'."
    ]
},
{
   id: "q9",
    type: "short-answer-double",
    questionText: `
        <b>Level: Easy 🟢</b><br>
        <i>All the sentences below are questions. Because we already have the word "Did", you only need to type <b>"use to"</b> in all the blank spaces:</i><br><br>
        
        <b>a)</b> Did you <input type="text" class="answer-input" data-ans-idx="0" style="width: 120px !important; display: inline-block;" placeholder="..."> watch cartoons after school?<br><br>

        <b>b)</b> What games did they <input type="text" class="answer-input" data-ans-idx="1" style="width: 120px !important; display: inline-block;" placeholder="..."> play in the park?<br><br>

        <b>c)</b> Where did your family <input type="text" class="answer-input" data-ans-idx="2" style="width: 120px !important; display: inline-block;" placeholder="..."> go on holiday?<br><br>

        <b>d)</b> Did she <input type="text" class="answer-input" data-ans-idx="3" style="width: 120px !important; display: inline-block;" placeholder="..."> have long hair when she was a little girl?<br><br>

        <b>e)</b> Did he <input type="text" class="answer-input" data-ans-idx="4" style="width: 120px !important; display: inline-block;" placeholder="..."> like his old school?
    `,
    correctAnswers: ["use to", "use to", "use to", "use to", "use to"],
    hints: [
        "Dica: Observa que todas as frases têm um ponto de interrogação (?) e o auxiliar 'Did'.",
        "Dica: A regra de ouro é: com o 'Did', o verbo perde o 'd' no final. A resposta é a mesma para todas as opções!"
    ]
},
{
    id: "q10",
    type: "short-answer-double",
    questionText: `
        <b>Level: Medium 🟡</b><br>
        <i>As palavras abaixo estão misturadas. Coloque-as na ordem correta para formar frases com "used to" ou "use to". Digite a frase completa no campo abaixo de cada uma:</i><br><br>
        
        <b>a)</b> soccer / she / play / used to<br>
        <input type="text" class="answer-input" data-ans-idx="0" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">

        <b>b)</b> we / eat / use to / didn't / vegetables<br>
        <input type="text" class="answer-input" data-ans-idx="1" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">

        <b>c)</b> use to / they / live / here / did / ?<br>
        <input type="text" class="answer-input" data-ans-idx="2" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">

        <b>d)</b> a dog / used to / have / he<br>
        <input type="text" class="answer-input" data-ans-idx="3" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">
    `,
    correctAnswers: [
        "she used to play soccer", 
        "we didn't use to eat vegetables", 
        "did they use to live here?", 
        "he used to have a dog"
    ],
    hints: [
        "Dica: A estrutura padrão para afirmações é: Sujeito + used to + verbo + complemento.",
        "Dica: Em frases negativas (com didn't) e perguntas (com did), lembre-se de usar 'use to' sem a letra 'd' no final!"
    ]
},
{
    id: "q11",
    type: "short-answer-double",
    questionText: `
        <b>Level: Medium 🟡</b><br>
        <i>As palavras abaixo estão misturadas. Coloque-as na ordem correta para formar frases com "used to" ou "use to". Digite a frase completa no campo abaixo de cada uma:</i><br><br>
        
        <b>a)</b> play / guitar / used to / he / the<br>
        <input type="text" class="answer-input" data-ans-idx="0" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">

        <b>b)</b> use to / you / did / glasses / wear / ?<br>
        <input type="text" class="answer-input" data-ans-idx="1" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">

        <b>c)</b> didn't / like / they / use to / pizza<br>
        <input type="text" class="answer-input" data-ans-idx="2" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">

        <b>d)</b> watch / TV / used to / a lot of / we<br>
        <input type="text" class="answer-input" data-ans-idx="3" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a frase completa aqui...">
    `,
    correctAnswers: [
        "he used to play the guitar", 
        "did you use to wear glasses?", 
        "they didn't use to like pizza", 
        "we used to watch a lot of tv"
    ],
    hints: [
        "Dica: Não se esqueça de que o 'did' e o 'didn\\'t' roubam o 'd' da palavra 'used'. Fica apenas 'use to' nas perguntas e negativas!",
        "Dica: Leia a frase em voz alta depois de a escrever para ver se a ordem das palavras soa natural."
    ]
},
{
    id: "q12",
    type: "short-answer-double",
    questionText: `
        <b>Level: Medium 🟡</b><br>
        <i>As palavras abaixo estão misturadas. Coloque-as na ordem correta para formar <b>perguntas</b> com "use to". Digite a pergunta completa no campo abaixo de cada uma:</i><br><br>
        
        <b>a)</b> you / use to / did / where / live / ?<br>
        <input type="text" class="answer-input" data-ans-idx="0" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a pergunta completa aqui...">

        <b>b)</b> what / she / did / use to / study / ?<br>
        <input type="text" class="answer-input" data-ans-idx="1" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a pergunta completa aqui...">

        <b>c)</b> use to / did / play / sports / they / ?<br>
        <input type="text" class="answer-input" data-ans-idx="2" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a pergunta completa aqui...">

        <b>d)</b> to work / travel / he / did / how / use to / ?<br>
        <input type="text" class="answer-input" data-ans-idx="3" style="width: 300px !important; display: block; margin-top: 5px; margin-bottom: 15px;" placeholder="Escreva a pergunta completa aqui...">
    `,
    correctAnswers: [
        "where did you use to live?", 
        "what did she use to study?", 
        "did they use to play sports?", 
        "how did he use to travel to work?"
    ],
    hints: [
        "Dica: As perguntas começam sempre com uma palavra interrogativa (como Where/What/How) seguida de 'did', ou começam diretamente com 'Did'.",
        "Dica: Como estamos a usar o 'did', lembre-se de usar sempre 'use to' (sem o 'd' no final) e não se esqueça do ponto de interrogação (?) no fim da frase!"
    ]
},

];


const bankGrammar1 = [
       {
    id: "q16",
    type: "mc",
    questionText: `
        <b>Grammar Analysis - Adverbs of Time</b><br><br>
        <img src="images/presentPerfect1.jpg" alt="Present Perfect Comic" style="width: 100%; max-width: 500px; height: auto; margin-bottom: 15px; border: 1px solid #ccc;"><br>
        In the sentence <b>"I haven't read it yet!"</b>, why is the adverb <b>"yet"</b> used?`,
    options: [
        { letter: "A", text: "a) To indicate that the action happened a very short time ago." },
        { letter: "B", text: "b) To show that something happened sooner than expected." },
        { letter: "C", text: "c) To show that an action hasn't happened, but is expected to happen." },
        { letter: "D", text: "d) To ask if someone has had that experience at any time in their life." }
    ],
    correctAnswer: "C",
    hints: [
        "Remember: 'yet' is used in negative sentences and questions.",
        "It implies that the action is expected to take place in the future."
    ]
},
    {
    id: "q17",
    type: "mc",
    questionText: `
        <b>Grammar Analysis - Life Experiences</b><br><br>
        <img src="images/presentPerfect2.jpg" alt="Charlie Brown Comic" style="width: 100%; max-width: 400px; height: auto; margin-bottom: 15px; border: 1px solid #ccc;"><br>
        In the question <b>"Have you ever known anyone who was happy?"</b>, what is the function of the word <b>"ever"</b>?`,
    options: [
        { letter: "A", text: "a) To describe an action that started in the past and continues now." },
        { letter: "B", text: "b) To ask if something has happened at any time in a person's life." },
        { letter: "C", text: "c) To indicate that the action happened just a few seconds ago." },
        { letter: "D", text: "d) To emphasize that the action is happening at this exact moment." }
    ],
    correctAnswer: "B",
    hints: [
        "Think about Charlie Brown's context: he is asking about a life experience.",
        "The word 'ever' is very common in Present Perfect questions to mean 'at any time'."
    ]
},
    {
    id: "q18",
    type: "mc",
    questionText: `
        <b>Grammar Analysis - Duration with "For"</b><br><br>
        <img src="images/presentPerfect3.jpg" alt="Hagar Comic" style="width: 100%; max-width: 500px; height: auto; margin-bottom: 15px; border: 1px solid #ccc;"><br>
        In the first panel, Hagar says: <b>"I've had a headache for weeks"</b>. Why is the word <b>"for"</b> used in this sentence?`,
    options: [
        { letter: "A", text: "a) To show exactly when the headache started (the specific date)." },
        { letter: "B", text: "b) To indicate that the headache happened just a few seconds ago." },
        { letter: "C", text: "c) To describe the total period of time or duration of the headache." },
        { letter: "D", text: "d) To say that he doesn't have a headache anymore." }
    ],
    correctAnswer: "C",
    hints: [
        "Remember: 'for' is used to measure a period of time (days, weeks, years).",
        "It answers the question: 'How long?'"
    ]
},
{
    id: "q19",
    type: "mc",
    questionText: `
        <b>Present Perfect Master Challenge - Time Markers</b><br><br>
        <img src="images/presentPerfect11.jpeg" alt="Present Perfect Challenges" style="width: 100%; max-width: 500px; height: auto; margin-bottom: 15px; border: 1px solid #ccc;"><br>
        Analyze the four comic strips above. Each blue spot represents a missing time marker (<b>since, for, ever, yet</b>).<br><br>
        What is the correct sequence of words to complete the sentences from top to bottom?`,
    options: [
        { letter: "A", text: "a) for, since, yet, ever" },
        { letter: "B", text: "b) since, for, ever, yet" },
        { letter: "C", text: "c) since, for, yet, ever" },
        { letter: "D", text: "d) just, already, ever, since" }
    ],
    correctAnswer: "B",
    hints: [
        "1. Monday is a starting point.",
        "2. Weeks is a duration of time.",
        "3. Questions about life experiences usually use 'ever'.",
        "4. Negative sentences with expectation use 'yet' at the end."
    ]
}
];
const bankGrammar2 = [
    {
    id: "q20",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Complete the sentences with "even though", "despite", "in spite of", "whereas", or "while":</b><br>
        <i>(Note: Use each expression exactly once to complete the exercise)</i><br><br>
        
        <b>a)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> it was raining heavily, they decided to go for a hike.
        <br><br>
        <b>b)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> the bad weather, we still had a great time at the beach.
        <br><br>
        <b>c)</b> Dogs are usually very playful and social, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> cats tend to be more independent.
        <br><br>
        <b>d)</b> He managed to finish the marathon <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> having an injured ankle.
        <br><br>
        <b>e)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="4"> I completely understand your point, I have to disagree with your final decision.
    `,
    correctAnswers: ["even though", "despite", "whereas", "in spite of", "while"],
    hints: [
        "Dica 1: 'Even though' é seguido por uma oração completa (Sujeito + Verbo).",
        "Dica 2: 'Despite' e 'In spite of' são seguidos por um substantivo ou verbo com -ing. E atenção: nunca use 'of' depois de 'despite'!",
        "Dica 3: 'Whereas' e 'While' são ótimos para mostrar o contraste direto entre duas ideias ou pessoas diferentes."
    ]
},
{
    id: "q21",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Complete the sentences with "even though", "despite", "in spite of", "whereas", or "while":</b><br>
        <i>(Note: Use each expression exactly once to complete the exercise)</i><br><br>
        
        <b>a)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> she studied all night, she didn't pass the math exam.
        <br><br>
        <b>b)</b> He decided to accept the job offer <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> the low salary.
        <br><br>
        <b>c)</b> I love relaxing at the beach, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> my husband prefers hiking in the mountains.
        <br><br>
        <b>d)</b> We had a wonderful camping trip <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> the terrible storm.
        <br><br>
        <b>e)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="4"> John is very outgoing and talkative, his twin brother is quite shy.
    `,
    correctAnswers: ["even though", "despite", "whereas", "in spite of", "while"],
    hints: [
        "Dica 1: Lembre-se de que 'despite' e 'in spite of' significam o mesmo e são seguidos por um substantivo (ex: 'the low salary' ou 'the terrible storm').",
        "Dica 2: 'Even though' introduz uma oração com sujeito e verbo (ex: '... she studied...').",
        "Dica 3: 'Whereas' e 'while' são ideais para mostrar o contraste direto entre os gostos ou personalidades de duas pessoas diferentes."
    ]
},
{
    id: "q22",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Complete the sentences with "although", "even though", "despite", "in spite of", or "whereas":</b><br>
        <i>(Note: Use each expression exactly once to complete the exercise)</i><br><br>
        
        <b>a)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> he was very tired, he still went to play basketball.
        <br><br>
        <b>b)</b> They decided to adopt three dogs <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> the high cost of dog food.
        <br><br>
        <b>c)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> it is a very simple meal, cuscuz with ground meat is delicious.
        <br><br>
        <b>d)</b> I prefer playing video games on a PlayStation, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> my friend prefers a PC.
        <br><br>
        <b>e)</b> She finished the web development project on time <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="4"> the bugs in the code.
    `,
    correctAnswers: ["although", "despite", "even though", "whereas", "in spite of"],
    hints: [
        "Dica 1: 'Although' e 'Even though' significam a mesma coisa (embora) e pedem Sujeito + Verbo logo depois. Pode usar um na letra A e o outro na letra C!",
        "Dica 2: 'Despite' e 'In spite of' significam 'apesar de' e são seguidos apenas por um substantivo (como 'the high cost' ou 'the bugs').",
        "Dica 3: 'Whereas' (enquanto que) é perfeito para contrastar duas preferências diretas, como na letra D."
    ]
},
{
    id: "q23",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Complete the sentences with "even though", "despite", "in spite of", "whereas", or "while":</b><br>
        <i>(Note: Use each expression exactly once to complete the exercise)</i><br><br>
        
        <b>a)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> CSS Grid can be quite challenging, it is an amazing tool for building responsive websites.
        <br><br>
        <b>b)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> the hot weather in the metropolitan area, it is always a great time to take the dogs for a walk.
        <br><br>
        <b>c)</b> Some gamers prefer playing on a PC, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> others are incredibly loyal to their PlayStation 5.
        <br><br>
        <b>d)</b> He went to basketball practice <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> feeling a bit tired from working all day.
        <br><br>
        <b>e)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="4"> ultra-processed snacks are easier to find, "comida de verdade" like cuscuz is much healthier.
    `,
    correctAnswers: ["even though", "despite", "whereas", "in spite of", "while"],
    hints: [
        "Dica 1: 'Despite' e 'In spite of' acompanham substantivos ou verbos com -ing (ex: 'the hot weather' ou 'feeling').",
        "Dica 2: 'Even though' pede a estrutura completa com sujeito e verbo logo a seguir (ex: 'CSS Grid can be...').",
        "Dica 3: 'Whereas' e 'while' são usados para comparar duas coisas, preferências ou grupos diferentes (ex: PC vs PlayStation, ou snacks vs comida saudável)."
    ]
}
];
const bankOthers = [
        {
    id: "q24",
    type: "mc",
    questionText: "I ________ eat cuscuz with ground meat, but now it's my absolute favorite meal!",
    options: [
        { letter: "A", text: "didn't used to" },
        { letter: "B", text: "used to" },
        { letter: "C", text: "didn't use to" },
        { letter: "D", text: "use to" }
    ],
    correctAnswer: "C",
    hints: [
        "Dica 1: O final da frase ('but now it's my absolute favorite meal!') indica uma mudança. Se agora é a refeição favorita, quer dizer que no passado a pessoa NÃO tinha o costume de comer.",
        "Dica 2: Cuidado com a pegadinha clássica! Quando usamos o auxiliar negativo 'didn\\'t', o verbo principal volta para a forma base, ou seja, perde o 'd' no final."
    ]
},
    {
    id: "q25",
    type: "mc",
    questionText: "Which video games ________ play before you bought your new console?",
    options: [
        { letter: "A", text: "did you used to" },
        { letter: "B", text: "did you use to" },
        { letter: "C", text: "used you to" },
        { letter: "D", text: "do you use to" }
    ],
    correctAnswer: "B",
    hints: [
        "Dica 1: Para fazer perguntas sobre hábitos do passado, precisamos sempre de usar o verbo auxiliar 'did'.",
        "Dica 2: Atenção à armadilha! Como o 'did' já indica que a frase está no passado, o verbo principal volta ao normal, ou seja, 'use' perde o 'd' no final."
    ]
},
{
    id: "q26",
    type: "mc",
    questionText: "___________ the heavy rain, the students went to the park.",
    options: [
        { letter: "A", text: "Although" },
        { letter: "B", text: "Even though" },
        { letter: "C", text: "Despite" },
        { letter: "D", text: "Whereas" }
    ],
    correctAnswer: "C",
    hints: [
        "Dica 1: 'Although' e 'Even though' exigem uma frase completa (sujeito + verbo).",
        "Dica 2: 'Despite' é seguido apenas por um substantivo ou gerúndio."
    ]
},
{
    id: "q26",
    type: "mc",
    questionText: "___________ the heavy rain, the students went to the park.",
    options: [
        { letter: "A", text: "Although" },
        { letter: "B", text: "Even though" },
        { letter: "C", text: "Because" },
        { letter: "D", text: "In spite of" }
    ],
    correctAnswer: "D",
    hints: [
        "Dica 1: 'Although' e 'Even though' exigem uma frase completa (sujeito + verbo).",
        "Dica 2: 'Because' indica motivo, o que não faz sentido neste contexto de contraste.",
        "Dica 3: 'In spite of' é seguido por um substantivo ou gerúndio e é a escolha correta para expressar contraste com 'the heavy rain'."
    ]
},
    {
    id: "q27",
    type: "mc",
    questionText: "___________ my brother likes classical music, I prefer rock.",
    options: [
        { letter: "A", text: "Although" },
        { letter: "B", text: "Despite" },
        { letter: "C", text: "In spite of" },
        { letter: "D", text: "While" }
    ],
    correctAnswer: "D",
    hints: [
        "Dica 1: 'While' é a escolha ideal aqui, pois conecta duas orações completas (sujeito + verbo).",
        "Dica 2: 'Despite' e 'In spite of' exigem um substantivo ou gerúndio, não uma oração completa."
    ]
},
{
    id: "q28",
    type: "mc",
    questionText: "I enjoy reading books in the evening, ___________ my brother prefers to play video games.",
    options: [
        { letter: "A", text: "Despite" },
        { letter: "B", text: "In spite of" },
        { letter: "C", text: "Whereas" },
        { letter: "D", text: "Due to" }
    ],
    correctAnswer: "C",
    hints: [
        "Dica 1: 'Whereas' é uma conjunção usada para contrastar duas ideias ou fatos diretamente.",
        "Dica 2: As outras opções ('Despite', 'In spite of', 'Due to') exigem substantivos ou gerúndios, não são seguidas por orações completas como no caso desta frase."
    ]
},
{
    id: "q29",
    type: "mc",
    questionText: "___________ he was tired, he finished his work on time.",
    options: [
        { letter: "A", text: "Despite" },
        { letter: "B", text: "Even though" },
        { letter: "C", text: "In spite of" },
        { letter: "D", text: "Due to" }
    ],
    correctAnswer: "B",
    hints: [
        "Dica 1: 'Even though' é uma conjunção que conecta duas orações completas (sujeito + verbo).",
        "Dica 2: As outras opções (Despite, In spite of, Due to) exigem um substantivo ou um verbo no gerúndio após o conector."
    ]
}
];
// BANCO 6: Escrita de Verbos (Presente -> Passado)
const bankGrammarWrite = [
    {
    id: "gram-connectors-contrast-1",
    type: "short-answer-double",
    questionText: `
        <b>Complete the sentences with: <i>Although, Despite, While, or Whereas</i>:</b><br><br>
        
        <b>a)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> it was cold, he went out without a coat.
        <br><br>
        <b>b)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> the cold weather, he went out without a coat.
        <br><br>
        <b>c)</b> Apples are generally sweet, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> lemons are very sour.
        <br><br>
        <b>d)</b> He loves playing soccer, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> she prefers to watch movies.
    `,
    correctAnswers: ["Although", "Despite", "whereas", "while"],
    hints: [
        "A: Usado antes de uma oração completa (sujeito + verbo).",
        "B: Usado antes de um substantivo ou frase nominal.",
        "C: Usado para contrastar fatos opostos (frequentemente formal).",
        "D: Usado para contrastar preferências ou ações simultâneas."
    ]
},{
    id: "gram-connectors-contrast-2",
    type: "short-answer-double",
    questionText: `
        <b>Complete the sentences with: <i>Although, Despite, While, or Whereas</i>:</b><br><br>
        
        <b>a)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> studying all night, she didn't pass the test.
        <br><br>
        <b>b)</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> she studied all night, she didn't pass the test.
        <br><br>
        <b>c)</b> I love to travel by plane, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> my brother is afraid of flying.
        <br><br>
        <b>d)</b> The company made a profit, <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> the employees did not receive a bonus.
    `,
    correctAnswers: ["Despite", "Although", "while", "whereas"],
    hints: [
        "A: Seguido de verbo com -ing (gerúndio).",
        "B: Seguido de uma oração completa (sujeito + verbo).",
        "C: Indica contraste entre duas preferências pessoais.",
        "D: Usado frequentemente para contrastar situações formais ou estatísticas."
    ]
}
];

// ==========================================
// 2. FUNÇÕES DE SUPORTE E LOGIN
// ==========================================
function handleLogin() {
    let username = prompt("Digite seu usuário:");
    if (!username) return false; 
    let password = prompt("Digite sua senha:");
    if (!password) return false; 

    if (studentDatabase[username] && studentDatabase[username].password === password) {
        currentStudentName = studentDatabase[username].name;
        alert(`Bem-vindo(a), ${currentStudentName}!`);
        return true;
    }
    alert("Usuário ou senha incorretos.");
    return false;
}

function getRandom(array, num) {
    if (!array || array.length === 0) return [];
    return [...array].sort(() => 0.5 - Math.random()).slice(0, num);
}

// ==========================================
// 3. CONSTRUÇÃO DA PÁGINA
// ==========================================
function createHeader(mainElement) {
    const headerHTML = `
        <div class="titulo">
            <h1>Simulado preparatório para a prova de Inglês</h1>
            <h3>Prova Final - 2025</h3>
        </div>
        <hr class="first">
        <div class="aluno"><p>ALUNO</p><hr class="second"></div>
        <div class="sede"><p>SEDE</p><hr class="quarto"></div>
        <div class="tur"><p>TURMA</p><hr class="quinto"></div>
        <div class="scores"><p class="score-display">TOTAL SCORES</p><hr class="sexto"></div>
        <div class="turma"><p>N°</p><hr class="third"></div>
        <div class="header-container">
            <div class="grade-box">
                <p class="grade-display">NOTA</p>
                <p class="resultado">Resultado</p>
            </div>
        </div>
    `;
    mainElement.insertAdjacentHTML('afterbegin', headerHTML);
}

function buildTest(mainElement, submitContainer) {
    // Agora o código não trava pois bankGrammar1 existe
    currentTestQuestions = [
        ...getRandom(bankInterpWrite, 1),
        ...getRandom(bankInterpMC, 3),
        ...getRandom(bankGrammar1, 2),
        ...getRandom(bankGrammar2, 2),
        ...getRandom(bankOthers, 2)
    ];

    currentTestQuestions.forEach((questionData, index) => {
        let questionHTML = `
            <div class="test-paper" data-question-id="${questionData.id}">
                <div class="question-header">
                    <div class="question">
                        <p><b>${index + 1}.</b> ${questionData.questionText}</p>
                    </div>
                    <button class="hint-btn" data-question-id="${questionData.id}">Dica</button>
                </div>`;

        if (questionData.type === 'mc') {
            questionHTML += '<div class="options">';
            questionData.options.forEach(option => {
                questionHTML += `<div class="option" data-answer="${option.letter}"><p>${option.text}</p></div>`;
            });
            questionHTML += '</div>';
        } else if (questionData.type === 'short-answer') {
            questionHTML += `
                <div class="write-answer">
                    <input type="text" class="answer-input" placeholder="Escreva sua resposta aqui...">
                </div>`;
        }

        questionHTML += '</div>';
        mainElement.insertBefore(document.createRange().createContextualFragment(questionHTML), submitContainer);
    });
}

// ==========================================
// 4. LÓGICA DE EVENTOS E SUBMIT
// ==========================================
function attachListeners() {
    document.addEventListener('click', (e) => {
        // Lógica de Seleção de Múltipla Escolha
        const option = e.target.closest('.option');
        if (option) {
            const container = option.closest('.options');
            container.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        }

        // Lógica do Botão de Dica (HINTS)
        if (e.target.classList.contains('hint-btn')) {
            const qId = e.target.dataset.questionId;
            const qData = currentTestQuestions.find(q => q.id === qId);
            if (qData && qData.hints) {
                alert("Dicas:\n- " + qData.hints.join('\n- '));
            }
        }
    });
}

function attachSubmitLogic() {
    const submitBtn = document.getElementById('submit-btn');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', function() {
        let totalScore = 0;
        let isAllAnswered = true;
        let incorrectQuestions = [];
        const allQuestionElements = document.querySelectorAll('.test-paper');

        allQuestionElements.forEach((questionElement, index) => {
            const qId = questionElement.dataset.questionId;
            const qData = currentTestQuestions.find(q => q.id === qId);

            if (qData.type === 'mc') {
                const sel = questionElement.querySelector('.option.selected');
                if (!sel) isAllAnswered = false;
                else if (sel.dataset.answer === qData.correctAnswer) totalScore += 1;
                else incorrectQuestions.push(index + 1);
            } 
            else if (qData.type === 'short-answer') {
                const input = questionElement.querySelector('.answer-input');
                const val = input.value.trim().toLowerCase();
                if (val === "") isAllAnswered = false;
                else if (val === qData.correctAnswer.toLowerCase()) totalScore += 1;
                else incorrectQuestions.push(index + 1);
            }
            else if (qData.type === 'short-answer-double') {
                const inputs = questionElement.querySelectorAll('.answer-input');
                let correctCount = 0;
                let anyEmpty = false;

                inputs.forEach((input, i) => {
                    const val = input.value.trim().toLowerCase();
                    if (val === "") anyEmpty = true;
                    // Comparação simples (pode precisar de regex para ser menos rígida)
                    if (val === qData.correctAnswers[i].toLowerCase()) correctCount++;
                });

                if (anyEmpty) isAllAnswered = false;
                totalScore += (correctCount === qData.correctAnswers.length) ? 1 : (correctCount * (1 / qData.correctAnswers.length));
                if (correctCount < qData.correctAnswers.length) incorrectQuestions.push(index + 1);
            }
        });

        if (!isAllAnswered) {
            alert("Por favor, responda todas as questões!");
            return;
        }

        const finalScore = parseFloat(totalScore.toFixed(1));
        document.querySelector('.resultado').textContent = finalScore;
        document.querySelector('.resultado').style.color = '#0055ff';
        document.querySelector('.score-display').textContent = `TOTAL SCORES: ${finalScore}/10`;

        alert(incorrectQuestions.length > 0 ? `Revisar questões: ${incorrectQuestions.join(', ')}` : "Excelente! Nota 10!");
        this.disabled = true;
    });
}

// ==========================================
// 5. INÍCIO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    if (handleLogin()) {
        const main = document.getElementById('main');
        const submit = document.querySelector('.submit-container');
        createHeader(main);
        buildTest(main, submit);
        attachListeners();
        attachSubmitLogic();
    } else {
        location.reload();
    }
});
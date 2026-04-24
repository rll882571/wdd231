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
        <b>Grammar: Have vs. Has</b><br>
        <i>Read and type the correct form of "have" or "has" to complete the sentences:</i><br><br>
        
        <b>a)</b> I <input type="text" class="answer-input" data-ans-idx="0" style="width: 80px !important; display: inline-block;" placeholder="..."> never been to London.<br><br>

        <b>b)</b> She <input type="text" class="answer-input" data-ans-idx="1" style="width: 80px !important; display: inline-block;" placeholder="..."> already finished her homework.<br><br>

        <b>c)</b> They <input type="text" class="answer-input" data-ans-idx="2" style="width: 80px !important; display: inline-block;" placeholder="..."> seen that movie before.<br><br>

        <b>d)</b> He <input type="text" class="answer-input" data-ans-idx="3" style="width: 80px !important; display: inline-block;" placeholder="..."> worked here for five years.<br><br>

        <b>e)</b> We <input type="text" class="answer-input" data-ans-idx="4" style="width: 80px !important; display: inline-block;" placeholder="..."> just eaten lunch.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>📺 <b>Study Support:</b> <a href="https://www.youtube.com/watch?v=ENZ0-KRAcp0" target="_blank">Watch the explanation video</a></small>
        </div>
    `,
    correctAnswers: ["have", "has", "have", "has", "have"],
    hints: [
        "Dica: 'I, You, We, They' usam HAVE.",
        "Dica: 'He, She, It' (3ª pessoa) usam HAS."
    ]
    },
    {
    id: "q2",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Have vs. Has - Practice II</b><br>
        <i>Complete the sentences by typing "have" or "has":</i><br><br>
        
        <b>a)</b> You <input type="text" class="answer-input" data-ans-idx="0" style="width: 80px !important; display: inline-block;" placeholder="..."> studied a lot this week.<br><br>

        <b>b)</b> It <input type="text" class="answer-input" data-ans-idx="1" style="width: 80px !important; display: inline-block;" placeholder="..."> started to rain.<br><br>

        <b>c)</b> My parents <input type="text" class="answer-input" data-ans-idx="2" style="width: 80px !important; display: inline-block;" placeholder="..."> traveled to Europe twice.<br><br>

        <b>d)</b> She <input type="text" class="answer-input" data-ans-idx="3" style="width: 80px !important; display: inline-block;" placeholder="..."> lost her keys again!<br><br>

        <b>e)</b> I <input type="text" class="answer-input" data-ans-idx="4" style="width: 80px !important; display: inline-block;" placeholder="..."> just called you.
        
        <br><br>
        <div style="margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px;">
            <small>📺 <b>Study Support:</b> <a href="https://www.youtube.com/watch?v=ENZ0-KRAcp0" target="_blank">Watch the explanation video</a></small>
        </div>
    `,
    correctAnswers: ["have", "has", "have", "has", "have"],
    hints: [
        "A: 'You' always takes HAVE.",
        "B: 'It' is 3rd person singular.",
        "C: 'My parents' = They.",
        "D: 'She' is 3rd person singular.",
        "E: 'I' always takes HAVE."
    ]
},
    {
    id: "q3",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Present Perfect Simple</b><br>
        <i>Complete the sentences using the Present Perfect (<b>have/has + past participle</b>):</i><br><br>
        
        <b>a)</b> I <input type="text" class="answer-input" data-ans-idx="0" style="width: 150px !important; display: inline-block;" placeholder="..."> (study) all the lessons for the test.<br><br>

        <b>b)</b> She <input type="text" class="answer-input" data-ans-idx="1" style="width: 150px !important; display: inline-block;" placeholder="..."> (work) in this office for a long time.<br><br>

        <b>c)</b> They <input type="text" class="answer-input" data-ans-idx="2" style="width: 150px !important; display: inline-block;" placeholder="..."> (play) this game many times.<br><br>

        <b>d)</b> It <input type="text" class="answer-input" data-ans-idx="3" style="width: 150px !important; display: inline-block;" placeholder="..."> (stop) raining at last.<br><br>

        <b>e)</b> We <input type="text" class="answer-input" data-ans-idx="4" style="width: 150px !important; display: inline-block;" placeholder="..."> (wait) for you since morning.
    `,
    correctAnswers: [
        "have studied", 
        "has worked", 
        "have played", 
        "has stopped", 
        "have waited"
    ],
    hints: [
        "Use HAVE para: I, You, We, They.",
        "Use HAS para: He, She, It.",
        "Como todos esses verbos são regulares, basta adicionar -ED (ou -IED no caso de study)."
    ]
},
{
    id: "q4",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Present Perfect (Irregular Verbs)</b><br>
        <i>Complete the sentences using the Present Perfect (<b>have/has + past participle</b>):</i><br><br>
        
        <b>a)</b> I <input type="text" class="answer-input" data-ans-idx="0" style="width: 150px !important; display: inline-block;" placeholder="..."> (see) that movie three times.<br><br>

        <b>b)</b> She <input type="text" class="answer-input" data-ans-idx="1" style="width: 150px !important; display: inline-block;" placeholder="..."> (eat) all the cake.<br><br>

        <b>c)</b> They <input type="text" class="answer-input" data-ans-idx="2" style="width: 150px !important; display: inline-block;" placeholder="..."> (go) to the supermarket.<br><br>

        <b>d)</b> He <input type="text" class="answer-input" data-ans-idx="3" style="width: 150px !important; display: inline-block;" placeholder="..."> (write) a very long email.<br><br>

        <b>e)</b> We <input type="text" class="answer-input" data-ans-idx="4" style="width: 150px !important; display: inline-block;" placeholder="..."> (do) our homework already.
    `,
    correctAnswers: [
        "have seen", 
        "has eaten", 
        "have gone", 
        "has written", 
        "have done"
    ],
    hints: [
        "Atenção: Estes verbos são IRREGULARES e não terminam em -ed.",
        "Dicas de particípio: See -> Seen, Eat -> Eaten, Go -> Gone, Write -> Written, Do -> Done.",
        "Não esqueça: He/She usa HAS!"
    ]
},
   
];

const bankInterpMC = [
    {
    id: "q6",
    type: "short-answer-double",
    questionText: `
        <b>Reading: Present Perfect Structure and Usage</b><br>
        <i>"The Present Perfect connects the past with the present. It is used to describe actions that occurred at an indefinite time, where the experience is more important than the specific date. Structurally, this tense requires a helping verb—either 'have' or 'has'—which depends on the subject of the sentence. This auxiliary is paired with the past participle form of the main verb. For regular verbs, the participle ends in -ed, while irregular verbs have unique forms that must be memorized. This tense is also used for situations that began in the past and remain true in the present."</i>
        <br><br>
        <b>Write (T) for True or (F) for False according to the text:</b>
        <br><br>
        <b>a) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="0"></b> The specific date of the action is the most important part of this verb tense.
        <br><br>
        <b>b) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="1"></b> The choice between 'have' and 'has' depends on the subject of the sentence.
        <br><br>
        <b>c) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="2"></b> All verbs in the past participle form end in -ed according to the text.
        <br><br>
        <b>d) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="3"></b> This tense can be used for actions that started in the past and continue now.
    `,
    correctAnswers: ["F", "T", "F", "T"],
    hints: [
        "A: Look for the words 'indefinite time' and 'importance'.",
        "B: Check the part about the 'helping verb' and the 'subject'.",
        "C: Does the text mention irregular verbs?",
        "D: Read the very last sentence of the text."
    ]
},
    {
    id: "q7",
    type: "short-answer-double",
    questionText: `
        <b>Reading: Questions and Common Mistakes</b><br>
        <i>"To ask a question in the Present Perfect, you must invert the order: place the auxiliary 'have' or 'has' before the subject. A very common mistake is forgetting that the main verb must stay in the past participle form, even in questions; some students incorrectly use the present tense. Another frequent error is using 'has' for subjects like 'I' or 'You', which always require 'have'. Additionally, since this tense focuses on indefinite time, it is a mistake to use it with specific time expressions like 'yesterday' or 'last night', which belong to the Simple Past."</i>
        <br><br>
        <b>Write (T) for True or (F) for False according to the text:</b>
        <br><br>
        <b>a) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="0"></b> In questions, the auxiliary verb comes after the subject.
        <br><br>
        <b>b) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="1"></b> The main verb should change back to the present tense when asking a question.
        <br><br>
        <b>c) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="2"></b> Using 'have' with the subject 'You' is the correct grammar rule.
        <br><br>
        <b>d) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="3"></b> You should not use 'yesterday' with the Present Perfect because it is a specific time.
    `,
    correctAnswers: ["F", "F", "T", "T"],
    hints: [
        "A: Check the 'invert the order' part.",
        "B: Does the verb stay in the participle or go to the present?",
        "C: Look for the rule about 'I' and 'You'.",
        "D: Read the last sentence about specific time expressions."
    ]
},
{
    id: "q8",
    type: "short-answer-double",
    questionText: `
        <b>Present Perfect - Complete the rules with the correct concepts:</b><br>
        <div style="border: 1px solid #000; padding: 10px; text-align: center; margin-bottom: 15px; background-color: #f9f9f9; font-size: 0.9em;">
            ask questions | yesterday or last night | started in the past and has effect in the present | specific time | past participle
        </div>
        
        <b>a)</b> The Present Perfect is used to describe an action that <input type="text" class="answer-input" style="width: 320px !important; display: inline-block;" data-ans-idx="0">.
        <br><br>
        <b>b)</b> We must use "have" or "has" followed by the main verb in the <input type="text" class="answer-input" style="width: 150px !important; display: inline-block;" data-ans-idx="1"> form.
        <br><br>
        <b>c)</b> You should never use the Present Perfect when you mention a <input type="text" class="answer-input" style="width: 150px !important; display: inline-block;" data-ans-idx="2">.
        <br><br>
        <b>d)</b> Examples of words you CANNOT use with this tense are <input type="text" class="answer-input" style="width: 180px !important; display: inline-block;" data-ans-idx="3">.
        <br><br>
        <b>e)</b> We invert the position of the subject and the auxiliary verb to <input type="text" class="answer-input" style="width: 150px !important; display: inline-block;" data-ans-idx="4">.
    `,
    correctAnswers: [
        "started in the past and has effect in the present", 
        "past participle", 
        "specific time", 
        "yesterday or last night", 
        "ask questions"
    ],
    hints: [
        "A: Pense na conexão entre o passado e agora.",
        "B: É a 'terceira coluna' dos verbos.",
        "C: O Present Perfect é sobre tempo INDEFINIDO.",
        "D: Palavras que indicam exatamente QUANDO algo aconteceu.",
        "E: Quando mudamos a ordem de 'You have' para 'Have you?'"
    ]
},
{
    id: "q9",
    type: "short-answer-double",
    questionText: `
        <b>Reading: Adverbs of Time (Just, Already, Yet, Ever, Never)</b><br>
        <i>"In the Present Perfect, specific adverbs change the meaning of the sentence. 'Just' is used for actions that happened a very short time ago. 'Already' indicates that something happened sooner than expected, usually in affirmative sentences. In contrast, 'Yet' is used in negatives and questions to show we are expecting something to happen, and it always comes at the end of the sentence. To talk about experiences, we use 'Ever' in questions to ask 'at any time', while 'Never' is used in affirmative structures to give a negative meaning about one's life experience."</i>
        <br><br>
        <b>Write (T) for True or (F) for False according to the text:</b>
        <br><br>
        <b>a) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="0"></b> 'Just' is the correct adverb to use when an action happened a long time ago.
        <br><br>
        <b>b) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="1"></b> According to the text, 'Yet' should be placed at the end of the sentence.
        <br><br>
        <b>c) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="2"></b> 'Ever' is typically used in questions to ask about experiences.
        <br><br>
        <b>d) <input type="text" class="answer-input" style="width: 50px !important; display: inline-block;" data-ans-idx="3"></b> 'Already' is primarily used in negative sentences to show expectation.
    `,
    correctAnswers: ["F", "T", "T", "F"],
    hints: [
        "A: Check the definition of 'Just' in the first lines.",
        "B: Where does the text say 'Yet' should be placed?",
        "C: Look for the word 'Ever' and the word 'questions'.",
        "D: Does 'Already' go in affirmative or negative sentences?"
    ]
},
{
    id: "q10",
    type: "short-answer-double",
    questionText: `
        <b>Adverbs of Time - Fill in the blanks with the correct rule:</b><br>
        <div style="border: 1px solid #000; padding: 10px; text-align: center; margin-bottom: 15px; background-color: #f9f9f9; font-size: 0.9em;">
            just | ever | yet | already | since
        </div>
        
        <b>a)</b> We use <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="0"> to talk about a specific starting point in time (ex: 2010).
        <br><br>
        <b>b)</b> Use <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="1"> in questions to ask if someone has done something at any time in their life.
        <br><br>
        <b>c)</b> The adverb <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="2"> is placed at the end of negative sentences and questions.
        <br><br>
        <b>d)</b> Use <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="3"> to say that something happened very recently (a moment ago).
        <br><br>
        <b>e)</b> We use <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="4"> to show that something happened sooner than expected.
    `,
    correctAnswers: [
        "since", 
        "ever", 
        "yet", 
        "just", 
        "already"
    ],
    hints: [
        "A: Indica o 'início' de um período.",
        "B: Comum em perguntas como 'Have you ____ been to...?'",
        "C: Esta palavra sempre 'fecha' a frase.",
        "D: Indica uma ação que acabou de acontecer.",
        "E: Geralmente usada em frases afirmativas para algo que já foi feito."
    ]
},
{
    id: "q11",
    type: "short-answer-double",
    questionText: `
        <b>Adverbs in Context - Complete the sentences with the best option:</b><br>
        <div style="border: 1px solid #000; padding: 10px; text-align: center; margin-bottom: 15px; background-color: #f9f9f9; font-size: 0.9em;">
            just | ever | yet | already | never
        </div>
        
        <b>a)</b> "I am not hungry. I have <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="0"> eaten a big sandwich." (A moment ago)
        <br><br>
        <b>b)</b> "Have you <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="1"> traveled to Japan in your life?"
        <br><br>
        <b>c)</b> "Don't worry about the dishes. I have <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="2"> washed them." (Before you asked)
        <br><br>
        <b>d)</b> "I am so sad. I have <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="3"> seen the ocean before." (Experience)
        <br><br>
        <b>e)</b> "The class is over, but the students haven't left the room <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="4">."
    `,
    correctAnswers: [
        "just", 
        "ever", 
        "already", 
        "never", 
        "yet"
    ],
    hints: [
        "A: Ação que acabou de acontecer.",
        "B: Perguntando sobre experiências de vida.",
        "C: Algo feito antes do esperado.",
        "D: Sentido negativo de 'nunca'.",
        "E: Final de frase negativa."
    ]
},
{
    id: "q12",
    type: "short-answer-double",
    questionText: `
        <b>Present Perfect - Use "since" or "for" to complete the sentences:</b><br>
        <div style="border: 1px solid #000; padding: 10px; text-align: center; margin-bottom: 15px; background-color: #f9f9f9; font-size: 0.9em;">
            since | for
        </div>
        
        <b>a)</b> "I have lived in Fortaleza <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="0"> ten years."
        <br><br>
        <b>b)</b> "She has worked at the State Public Prosecutor's Office <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="1"> 2015."
        <br><br>
        <b>c)</b> "They have been married <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="2"> a long time."
        <br><br>
        <b>d)</b> "We haven't seen each other <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="3"> last Christmas."
        <br><br>
        <b>e)</b> "He has played basketball <input type="text" class="answer-input" style="width: 100px !important; display: inline-block;" data-ans-idx="4"> two hours."
    `,
    correctAnswers: [
        "for", 
        "since", 
        "for", 
        "since", 
        "for"
    ],
    hints: [
        "A: 'Ten years' é um período de tempo total.",
        "B: '2015' é o ano exato em que a ação começou.",
        "C: 'A long time' é uma duração, não uma data.",
        "D: 'Last Christmas' é o ponto específico no calendário.",
        "E: 'Two hours' indica quanto tempo a ação durou."
    ]
}

];


const bankGrammar1 = [{
        id: "int-mc-text-victoria",
        type: "mc",
        questionText: `
            <b>Reading Comprehension:</b><br><br>
            <i>"Victoria Falls is considered to be the world's largest waterfall based on the amount of falling water – every second, some 33,000 cubic feet (935 cubic meters) of water fall over. Still water levels are not constant, and they particularly rise during the flood season from February to May."</i>
            <br><br>
            <b>According to the text, when do the water levels typically rise?</b>`,
        options: [
            { letter: "A", text: "a) From January to March" },
            { letter: "B", text: "b) During the dry season" },
            { letter: "C", text: "c) From February to May" },
            { letter: "D", text: "d) Every single day of the year" }
        ],
        correctAnswer: "C",
        hints: ["Look for the months mentioned at the end of the text."]
    },
    {
    id: "int-mc-myth-gods",
    type: "mc",
    questionText: `
        <b>Reading Comprehension - Greek Mythology:</b><br><br>
        <i>"Mount Olympus was the home of the twelve main gods. Among them, <b>Zeus</b> was the most powerful, ruling as the king. His brother, <b>Hades</b>, did not live on Olympus, as he ruled the dark world of the dead. Meanwhile, <b>Athena</b> was admired by the Greeks not for her strength in war, like Ares, but for her great wisdom and intelligence."</i>
        <br><br>
        <b>According to the text, what is the main difference between Athena and Ares?</b>`,
    options: [
        { letter: "A", text: "Athena lived on Mount Olympus, but Ares lived in the underworld." },
        { letter: "B", text: "Ares was the king of the gods, while Athena was a simple goddess." },
        { letter: "C", text: "Athena was known for her wisdom, whereas Ares was known for war." },
        { letter: "D", text: "Ares was more powerful than Zeus, according to the Greek myths." }
    ],
    correctAnswer: "C",
    hints: ["Compare what the text says about Athena's intelligence and Ares' strength."]
},
    {
        id: "int-mc-text-reef",
        type: "mc",
        questionText: `
            <b>Reading Comprehension:</b><br><br>
            <i>"The Great Barrier Reef is visible from outer space. Over 1500 different species of fish, and a great number of turtles, sharks and seahorses can regularly be seen in the reef."</i>
            <br><br>
            <b>What can be said about the Great Barrier Reef's visibility?</b>`,
        options: [
            { letter: "A", text: "a) It can only be seen with a microscope." },
            { letter: "B", text: "b) It is visible from outer space." },
            { letter: "C", text: "c) It is too small to be seen from planes." },
            { letter: "D", text: "d) It can only be seen by 1500 species of fish." }
        ],
        correctAnswer: "B",
        hints: ["Check the very first sentence of the text."]
    }];
const bankGrammar2 = [{
    id: "gram-was-were-fill",
    type: "short-answer-double",
    questionText: `
        <b>Grammar: Complete the sentences with "was" or "were":</b><br><br>
        
        <b>a)</b> The students <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="0"> in the classroom yesterday morning.
        <br><br>
        <b>b)</b> My parents <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="1"> at home last night.
        <br><br>
        <b>c)</b> The teacher <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="2"> at school yesterday.
        <br><br>
        <b>d)</b> We <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="3"> at the park yesterday afternoon.
        <br><br>
        <b>e)</b> My brother <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="4"> very tired yesterday.
        <br><br>
        <b>f)</b> The children <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="5"> at the playground after school.
        <br><br>
        <b>g)</b> I <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="6"> at the library yesterday afternoon.
    `,
    correctAnswers: ["were", "were", "was", "were", "was", "were", "was"],
    hints: [
        "Singular (I, He, She, It) -> WAS",
        "Plural (You, We, They) -> WERE",
        "Dica: 'Students', 'Parents' e 'Children' são plural!"
    ]
},
{
    id: "gram-was-were-v2",
    type: "short-answer-double",
    questionText: `
        <b>Grammar Practice: Past of To Be (Was / Were)</b><br><br>
        <i>Fill in the blanks with the correct form of the verb:</i><br><br>
        
        <b>a)</b> Sarah <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="0"> very happy with her birthday gift.
        <br><br>
        <b>b)</b> The dogs <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="1"> barking at the mailman this morning.
        <br><br>
        <b>c)</b> You <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="2"> the best student in the English class.
        <br><br>
        <b>d)</b> It <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="3"> very cold in London last week.
        <br><br>
        <b>e)</b> Paul and Mary <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="4"> at the cinema on Saturday.
        <br><br>
        <b>f)</b> The weather <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="5"> perfect for a beach day.
        <br><br>
        <b>g)</b> My friends and I <input type="text" class="answer-input" style="width: 80px !important; display: inline-block;" data-ans-idx="6"> excited about the trip.
    `,
    correctAnswers: ["was", "were", "were", "was", "were", "was", "were"],
    hints: [
        "A: Sarah = She",
        "B: Dogs = They (plural)",
        "C: Remember: You always uses 'were'",
        "G: 'My friends and I' = We"
    ]
}
];
const bankOthers = [{
        id: "gram-past-reg-1",
        type: "mc",
        questionText: "Last night, Sarah ________ her homework early to watch a movie.",
        options: [
            { letter: "A", text: "finish" },
            { letter: "B", text: "finishing" },
            { letter: "C", text: "finished" },
            { letter: "D", text: "finishes" }
        ],
        correctAnswer: "C",
        hints: ["Para verbos regulares no passado, geralmente adicionamos 'ed' ao final."]
    },
    {
        id: "gram-past-reg-2",
        type: "mc",
        questionText: "They ________ soccer in the park for two hours yesterday.",
        options: [
            { letter: "A", text: "played" },
            { letter: "B", text: "plays" },
            { letter: "C", text: "playing" },
            { letter: "D", text: "play" }
        ],
        correctAnswer: "A",
        hints: ["A palavra 'yesterday' indica que a ação já aconteceu. Use o final 'ed'."]
    },
    {
        id: "gram-past-reg-3",
        type: "mc",
        questionText: "The chef ________ a delicious dinner for the guests last Sunday.",
        options: [
            { letter: "A", text: "cooks" },
            { letter: "B", text: "cooked" },
            { letter: "C", text: "cooking" },
            { letter: "D", text: "cook" }
        ],
        correctAnswer: "B",
        hints: ["O verbo 'cook' é regular. Como a frase está no passado, qual a terminação correta?"]
    },
    {
    id: "gram-past-reg-3",
    type: "mc",
    questionText: "Yesterday, I ________ a delicious pizza for lunch.",
    options: [
        { letter: "A", text: "eat" },
        { letter: "B", text: "eated" },
        { letter: "C", text: "ate" },
        { letter: "D", text: "eating" }
    ],
    correctAnswer: "C",
    hints: ["O verbo 'eat' é irregular. O passado dele muda a escrita e não termina em 'ed'."]
}
];
// BANCO 6: Escrita de Verbos (Presente -> Passado)
const bankGrammarWrite = [
    {
        id: "gram-write-verbs-1",
        type: "short-answer-double",
        questionText: `
            <b>Complete with the Past Simple form of the verbs:</b><br><br>
            
            <b>a) WORK:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="0"> (Regular)
            <br><br>
            <b>b) WATCH:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="1"> (Regular)
            <br><br>
            <b>c) GO:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="2"> (Irregular)
            <br><br>
            <b>d) CLEAN:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="3"> (Regular)
            <br><br>
            <b>e) EAT:</b> <input type="text" class="answer-input" style="width: 120px !important; display: inline-block;" data-ans-idx="4"> (Irregular)
        `,
        correctAnswers: ["worked", "watched", "went", "cleaned", "ate"],
        hints: ["A e B: +ED", "C: Palavra nova (W...)", "D: +ED", "E: Muda a ordem (A...)"]
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
const questionBank = [
    
    {
    id: "q1",
    type: "mc",
    questionText: `
        Question 1:<br>
        Choose the correct option:<br>
        I ______ English for five years, and I still study every day.
    `,
    options: [
        { letter: "A", text: "(A) have studied", isCorrect: false },
        { letter: "B", text: "(B) have been studying", isCorrect: true },
        { letter: "C", text: "(C) studied", isCorrect: false },
        { letter: "D", text: "(D) am studying", isCorrect: false }
    ],
    correctAnswer: "B",
    hints: ["Dica: 'for five years' + ação contínua → Present Perfect Continuous."]
},
{
    id: "q2",
    type: "mc",
    questionText: `
        Question 2:<br>
        Choose the correct sentence:
    `,
    options: [
        { letter: "A", text: "(A) She has been reading that book all afternoon.", isCorrect: true },
        { letter: "B", text: "(B) She has read that book all afternoon.", isCorrect: false },
        { letter: "C", text: "(C) She reads that book all afternoon.", isCorrect: false },
        { letter: "D", text: "(D) She was reading that book all afternoon.", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: A ação começou no passado e continua agora → use 'has been + ing'."]
},
{
    id: "q3",
    type: "mc",
    questionText: `
        Question 3:<br>
        I ______ three letters this morning.
    `,
    options: [
        { letter: "A", text: "(A) have written", isCorrect: true },
        { letter: "B", text: "(B) have been writing", isCorrect: false },
        { letter: "C", text: "(C) am writing", isCorrect: false },
        { letter: "D", text: "(D) wrote", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Foco no resultado (3 cartas prontas) → Present Perfect simples."]
},
{
    id: "q4",
    type: "mc",
    questionText: `
        Question 4:<br>
        They ______ TV since 8 p.m.
    `,
    options: [
        { letter: "A", text: "(A) have watched", isCorrect: false },
        { letter: "B", text: "(B) have been watching", isCorrect: true },
        { letter: "C", text: "(C) watched", isCorrect: false },
        { letter: "D", text: "(D) are watching", isCorrect: false }
    ],
    correctAnswer: "B",
    hints: ["Dica: 'since' + ação contínua → Present Perfect Continuous."]
},
{
    id: "q5",
    type: "mc",
    questionText: `
        Question 5:<br>
        Choose the correct sentence:<br>
        (A) She has cleaned the kitchen.<br>
        (B) She has been cleaning the kitchen.<br>
        Which one focuses on the *result*?
    `,
    options: [
        { letter: "A", text: "(A) A", isCorrect: true },
        { letter: "B", text: "(B) B", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Present Perfect → resultado; Continuous → duração/atividade."]
},
{
    id: "q6",
    type: "mc",
    questionText: `
        Question 6:<br>
        Look at her hands! She ______ the garden.
    `,
    options: [
        { letter: "A", text: "(A) has worked", isCorrect: false },
        { letter: "B", text: "(B) has been working", isCorrect: true },
        { letter: "C", text: "(C) worked", isCorrect: false },
        { letter: "D", text: "(D) works", isCorrect: false }
    ],
    correctAnswer: "B",
    hints: ["Dica: Evidência de uma atividade recente → Present Perfect Continuous."]
},
{
    id: "q7",
    type: "mc",
    questionText: `
        Question 7:<br>
        We ______ this TV series before. Let's watch something new!
    `,
    options: [
        { letter: "A", text: "(A) have seen", isCorrect: true },
        { letter: "B", text: "(B) have been seeing", isCorrect: false },
        { letter: "C", text: "(C) saw", isCorrect: false },
        { letter: "D", text: "(D) are seeing", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Foco na experiência de vida → Present Perfect simples."]
},
{
    id: "q8",
    type: "mc",
    questionText: `
        Question 8:<br>
        He ______ in this company for 10 years.
    `,
    options: [
        { letter: "A", text: "(A) has worked", isCorrect: true },
        { letter: "B", text: "(B) has been working", isCorrect: true },
        { letter: "C", text: "(C) worked", isCorrect: false },
        { letter: "D", text: "(D) works", isCorrect: false }
    ],
    correctAnswer: ["A", "B"],
    hints: ["Dica: Ambos podem estar certos — depende se há foco na duração (B) ou no fato/resultado (A)."]
},
{
    id: "q9",
    type: "mc",
    questionText: `
        Question 9:<br>
        Choose the best option:<br>
        I’m tired because I ______ all day.
    `,
    options: [
        { letter: "A", text: "(A) have worked", isCorrect: false },
        { letter: "B", text: "(B) have been working", isCorrect: true },
        { letter: "C", text: "(C) worked", isCorrect: false },
        { letter: "D", text: "(D) am working", isCorrect: false }
    ],
    correctAnswer: "B",
    hints: ["Dica: Foco no esforço e na atividade em andamento → Continuous."]
},
{
    id: "q10",
    type: "mc",
    questionText: `
        Question 10:<br>
        They ______ three new houses this month.
    `,
    options: [
        { letter: "A", text: "(A) have built", isCorrect: true },
        { letter: "B", text: "(B) have been building", isCorrect: false },
        { letter: "C", text: "(C) built", isCorrect: false },
        { letter: "D", text: "(D) are building", isCorrect: false }
    ],
    correctAnswer: "A",
    hints: ["Dica: Foco no resultado (três casas prontas) → Present Perfect."]
}




];
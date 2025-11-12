// ----------------------------------------------------------------------
// BLOCO: MODALS - MAY / MIGHT
// ----------------------------------------------------------------------

const questionBank = [

    // Q1
    {
        id: "q1-maymight",
        type: "mc",
        questionText: "Which sentence is correct?",
        options: [
            { letter: "A", text: "(A) She may goes to the party." },
            { letter: "B", text: "(B) She may go to the party." },
            { letter: "C", text: "(C) She may to go the party." },
            { letter: "D", text: "(D) She may going to the party." }
        ],
        hint: "Depois de 'may', usamos o verbo no infinitivo sem 'to'.",
        correctAnswer: "B"
    },

    // Q2
    {
        id: "q2-maymight",
        type: "mc",
        questionText: "What is the meaning of 'may' in this sentence: 'It may rain later.'?",
        options: [
            { letter: "A", text: "(A) É certeza absoluta." },
            { letter: "B", text: "(B) É uma possibilidade." },
            { letter: "C", text: "(C) É uma obrigação." },
            { letter: "D", text: "(D) É uma proibição." }
        ],
        hint: "'May' expressa possibilidade, não certeza.",
        correctAnswer: "B"
    },

    // Q3
    {
        id: "q3-maymight",
        type: "mc",
        questionText: "Complete: He ___ come to school today if he feels better.",
        options: [
            { letter: "A", text: "(A) may" },
            { letter: "B", text: "(B) must" },
            { letter: "C", text: "(C) can" },
            { letter: "D", text: "(D) should" }
        ],
        hint: "Use o modal que indica possibilidade.",
        correctAnswer: "A"
    },

    // Q4
    {
        id: "q4-maymight",
        type: "mc",
        questionText: "Complete: They ___ visit us next month, but they are not sure yet.",
        options: [
            { letter: "A", text: "(A) may" },
            { letter: "B", text: "(B) might" },
            { letter: "C", text: "(C) must" },
            { letter: "D", text: "(D) should" }
        ],
        hint: "Ambos 'may' e 'might' indicam possibilidade. 'Might' é mais incerto.",
        correctAnswer: "B"
    },

    // Q5
    {
        id: "q5-maymight",
        type: "mc",
        questionText: "Qual é a diferença entre 'may' e 'might'?",
        options: [
            { letter: "A", text: "(A) 'May' é mais forte que 'might'." },
            { letter: "B", text: "(B) 'Might' é mais formal." },
            { letter: "C", text: "(C) Não há diferença." },
            { letter: "D", text: "(D) 'May' indica certeza." }
        ],
        hint: "'May' mostra uma possibilidade mais provável; 'might', menos provável.",
        correctAnswer: "A"
    },

    // Q6
    {
        id: "q6-maymight",
        type: "mc",
        questionText: "Which is correct?",
        options: [
            { letter: "A", text: "(A) You mights be right." },
            { letter: "B", text: "(B) You might be right." },
            { letter: "C", text: "(C) You might to be right." },
            { letter: "D", text: "(D) You might are right." }
        ],
        hint: "O verbo modal não leva 's', 'to' ou 'are' depois.",
        correctAnswer: "B"
    },

    // Q7
    {
        id: "q7-maymight",
        type: "mc",
        questionText: "Complete: I’m not sure, but he ___ be at the library now.",
        options: [
            { letter: "A", text: "(A) may" },
            { letter: "B", text: "(B) might" },
            { letter: "C", text: "(C) can" },
            { letter: "D", text: "(D) will" }
        ],
        hint: "Ambos 'may' e 'might' funcionam, mas escolha o mais incerto.",
        correctAnswer: "B"
    },

    // Q8
    {
        id: "q8-maymight",
        type: "mc",
        questionText: "Quando usamos 'may' para pedir permissão, qual exemplo está correto?",
        options: [
            { letter: "A", text: "(A) May I open the window?" },
            { letter: "B", text: "(B) I may you open the window?" },
            { letter: "C", text: "(C) You may I open the window?" },
            { letter: "D", text: "(D) May open I the window?" }
        ],
        hint: "'May I...?' é a forma formal e correta para pedir permissão.",
        correctAnswer: "A"
    },

    // Q9
    {
        id: "q9-maymight",
        type: "mc",
        questionText: "Qual destas frases expressa uma possibilidade no passado?",
        options: [
            { letter: "A", text: "(A) She may has gone there." },
            { letter: "B", text: "(B) She may have gone there." },
            { letter: "C", text: "(C) She might has gone there." },
            { letter: "D", text: "(D) She might gone there." }
        ],
        hint: "Após 'may/might', usamos 'have + past participle' para o passado.",
        correctAnswer: "B"
    },

    // Q10
    {
        id: "q10-maymight",
        type: "mc",
        questionText: "Traduza corretamente: 'She might be late.'",
        options: [
            { letter: "A", text: "(A) Ela deve estar atrasada." },
            { letter: "B", text: "(B) Ela pode estar atrasada." },
            { letter: "C", text: "(C) Ela está atrasada com certeza." },
            { letter: "D", text: "(D) Ela precisa estar atrasada." }
        ],
        hint: "'Might' expressa incerteza, possibilidade leve.",
        correctAnswer: "B"
    },

    // Q11
    {
        id: "q11-maymight",
        type: "mc",
        questionText: "Which sentence is NOT correct?",
        options: [
            { letter: "A", text: "(A) I might go to the park." },
            { letter: "B", text: "(B) He may study tonight." },
            { letter: "C", text: "(C) She mays come later." },
            { letter: "D", text: "(D) It might rain tomorrow." }
        ],
        hint: "Lembre-se: modais nunca recebem 's' no final.",
        correctAnswer: "C"
    },

    // Q12
    {
        id: "q12-maymight",
        type: "mc",
        questionText: "Complete: You ___ want to take an umbrella. It looks cloudy.",
        options: [
            { letter: "A", text: "(A) may" },
            { letter: "B", text: "(B) must" },
            { letter: "C", text: "(C) should" },
            { letter: "D", text: "(D) will" }
        ],
        hint: "Indica uma sugestão leve, uma possibilidade.",
        correctAnswer: "A"
    },

    // Q13
    {
        id: "q13-maymight",
        type: "mc",
        questionText: "Traduza: 'It may not work.'",
        options: [
            { letter: "A", text: "(A) Pode não funcionar." },
            { letter: "B", text: "(B) Não pode funcionar." },
            { letter: "C", text: "(C) Deve funcionar." },
            { letter: "D", text: "(D) Funcionará com certeza." }
        ],
        hint: "A negativa de 'may' indica incerteza sobre algo não acontecer.",
        correctAnswer: "A"
    },

    // Q14
    {
        id: "q14-maymight",
        type: "mc",
        questionText: "Qual é o erro em 'He may to come later'?",
        options: [
            { letter: "A", text: "(A) Falta o 'to'." },
            { letter: "B", text: "(B) O verbo modal não usa 'to'." },
            { letter: "C", text: "(C) Deveria usar 'might' no lugar de 'may'." },
            { letter: "D", text: "(D) O sujeito está errado." }
        ],
        hint: "Depois de modais, o verbo vem no infinitivo sem 'to'.",
        correctAnswer: "B"
    },

    // Q15
    {
        id: "q15-maymight",
        type: "mc",
        questionText: "He may have missed the bus. → O que isso significa?",
        options: [
            { letter: "A", text: "(A) Ele perdeu o ônibus (certeza)." },
            { letter: "B", text: "(B) Ele pode ter perdido o ônibus." },
            { letter: "C", text: "(C) Ele deve perder o ônibus." },
            { letter: "D", text: "(D) Ele vai perder o ônibus." }
        ],
        hint: "'May have + participle' indica possibilidade no passado.",
        correctAnswer: "B"
    },

    // Q16
    {
        id: "q16-maymight",
        type: "mc",
        questionText: "Which sentence is correct?",
        options: [
            { letter: "A", text: "(A) They may have gone home." },
            { letter: "B", text: "(B) They may has gone home." },
            { letter: "C", text: "(C) They may gone home." },
            { letter: "D", text: "(D) They may to have gone home." }
        ],
        hint: "Use 'have + past participle' corretamente com 'may'.",
        correctAnswer: "A"
    },

    // Q17
    {
        id: "q17-maymight",
        type: "mc",
        questionText: "Complete: We ___ be late if we don’t hurry.",
        options: [
            { letter: "A", text: "(A) may" },
            { letter: "B", text: "(B) might" },
            { letter: "C", text: "(C) must" },
            { letter: "D", text: "(D) should" }
        ],
        hint: "Ambos servem, mas escolha o mais incerto.",
        correctAnswer: "B"
    },

    // Q18
    {
        id: "q18-maymight",
        type: "mc",
        questionText: "O que indica 'might' nesta frase: 'I might watch a movie tonight'?",
        options: [
            { letter: "A", text: "(A) Certeza." },
            { letter: "B", text: "(B) Permissão." },
            { letter: "C", text: "(C) Possibilidade incerta." },
            { letter: "D", text: "(D) Obrigação." }
        ],
        hint: "'Might' = possibilidade menos provável.",
        correctAnswer: "C"
    },

    // Q19
    {
        id: "q19-maymight",
        type: "mc",
        questionText: "Complete: Don’t wait for him. He ___ not come.",
        options: [
            { letter: "A", text: "(A) may" },
            { letter: "B", text: "(B) might" },
            { letter: "C", text: "(C) must" },
            { letter: "D", text: "(D) should" }
        ],
        hint: "Expressa incerteza sobre ele vir ou não.",
        correctAnswer: "A"
    },

    // Q20
    {
        id: "q20-maymight",
        type: "mc",
        questionText: "Traduza corretamente: 'May I borrow your pen?'",
        options: [
            { letter: "A", text: "(A) Eu posso pegar sua caneta emprestada?" },
            { letter: "B", text: "(B) Eu devo pegar sua caneta emprestada?" },
            { letter: "C", text: "(C) Eu pegarei sua caneta emprestada." },
            { letter: "D", text: "(D) Eu posso ter pegado sua caneta emprestada." }
        ],
        hint: "‘May I...?’ é usado para pedir permissão educadamente.",
        correctAnswer: "A"
    },
    // ----------------------------------------------------------------------
// QUESTÕES ADICIONAIS - MAY x MIGHT (diferença e uso)
// ----------------------------------------------------------------------

{
    id: "q21-maymight",
    type: "mc",
    questionText: "Qual das frases expressa uma possibilidade mais forte?",
    options: [
        { letter: "A", text: "(A) It might rain later." },
        { letter: "B", text: "(B) It may rain later." },
        { letter: "C", text: "(C) It must rain later." },
        { letter: "D", text: "(D) It should rain later." }
    ],
    hint: "'May' indica uma possibilidade mais provável do que 'might'.",
    correctAnswer: "B"
},

{
    id: "q22-maymight",
    type: "mc",
    questionText: "Em qual das frases o 'may' é usado para pedir permissão?",
    options: [
        { letter: "A", text: "(A) She may go to the party." },
        { letter: "B", text: "(B) May I open the window?" },
        { letter: "C", text: "(C) You may study now." },
        { letter: "D", text: "(D) It may rain tomorrow." }
    ],
    hint: "'May I...?' é a estrutura usada para pedir permissão de forma educada.",
    correctAnswer: "B"
},

{
    id: "q23-maymight",
    type: "mc",
    questionText: "O que a frase 'They might visit us next month' expressa?",
    options: [
        { letter: "A", text: "(A) Uma certeza de que eles virão." },
        { letter: "B", text: "(B) Uma possibilidade incerta de visita." },
        { letter: "C", text: "(C) Uma obrigação de visitar." },
        { letter: "D", text: "(D) Uma proibição de visita." }
    ],
    hint: "'Might' expressa uma possibilidade mais fraca, com dúvida.",
    correctAnswer: "B"
},

{
    id: "q24-maymight",
    type: "mc",
    questionText: "Em qual das opções 'might' está sendo usado de forma formal e polida?",
    options: [
        { letter: "A", text: "(A) Might I borrow your phone for a minute?" },
        { letter: "B", text: "(B) I might watch TV later." },
        { letter: "C", text: "(C) He might be late to class." },
        { letter: "D", text: "(D) It might rain tomorrow." }
    ],
    hint: "Quando usado em perguntas para pedir algo educadamente, 'might' soa muito formal.",
    correctAnswer: "A"
}


];

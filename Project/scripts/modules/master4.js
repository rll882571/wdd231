const questionBank = [

    // --- TEXT 1: Academic Misconduct and Integrity ---

    {
        id: "q1-fraude",
        type: "mc",
        questionText: `
            <b>Text 1: Integrity and Academic Misconduct</b>
            <br><br>
            Academic misconduct, commonly referred to as "cheating," encompasses any act a student commits to gain an unfair advantage in an evaluation. This goes beyond plagiarism and includes a range of dishonest behaviors that compromise the integrity of the learning environment.
            <br><br>
            <b>Common Forms of Misconduct:</b>
            <ul>
                <li><b>Copying on Tests:</b> Looking at a classmate's test or allowing them to look at yours.</li>
                <li><b>Unauthorized Material Use:</b> Using notes, electronic devices (like cell phones), or hidden "cheat sheets" during an exam where it is explicitly prohibited.</li>
                <li><b>Improper Collaboration:</b> Working together on assignments that are supposed to be individual, unless collaboration is permitted by the instructor.</li>
                <li><b>Data Falsification:</b> Inventing or altering data in experiments, research, or reports.</li>
                <li><b>Impersonation:</b> Having another person take an evaluation in your place.</li>
            </ul>

            <b>Why is Misconduct a Problem?</b>
            Misconduct is unethical and destroys the fundamental purpose of education, which is learning. By cheating, the student deceives themselves about their level of knowledge, which can lead to critical learning gaps that will manifest later in their professional career. Furthermore, cheating devalues the effort of honest students, creating an uneven playing field and undermining trust in the educational system.

            <b>Serious Consequences:</b>
            The consequences of academic misconduct are often severe. Higher education institutions and schools have strict policies that can result in:
            <ol>
                <li><b>Academic Penalties:</b> A zero grade on the assignment or in the course (failing grade).</li>
                <li><b>Disciplinary Penalties:</b> Temporary suspension or, in the most severe cases, permanent expulsion from the institution.</li>
                <li><b>Reputational Damage:</b> The notation of "academic dishonesty" on a student's record can affect future applications for jobs or other universities.</li>
            </ol>
            To maintain academic integrity, it is essential that students know the rules, manage their study time effectively, and understand that the real value lies in learning, not just the grade.

            <br><br>
            <b>Question:</b> According to the text, what is the fundamental purpose of education that academic misconduct destroys?
        `,
        options: [
            { letter: "A", text: "(A) The focus on obtaining awards and recognitions." },
            { letter: "B", text: "(B) The creation of a fiercely competitive environment among students." },
            { letter: "C", text: "(C) The fundamental purpose of education, which is learning." },
            { letter: "D", text: "(D) The necessity of applying for jobs or other universities." },
            { letter: "E", text: "(E) The use of electronic devices in the classroom." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: The text mentions the main goal of going to school."
        ]
    },
    {
        id: "q2-fraude",
        type: "mc",
        questionText: `
            <b>Question:</b> According to the text, what is "Impersonation" as a form of misconduct?
        `,
        options: [
            { letter: "A", text: "(A) Falsifying data in a lab report." },
            { letter: "B", text: "(B) Looking at a classmate's test during the exam." },
            { letter: "C", text: "(C) Using a cell phone to look up a prohibited formula." },
            { letter: "D", text: "(D) Having another person complete an evaluation in your place." },
            { letter: "E", text: "(E) Working in a group on an individual assignment." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: Think about who is performing the academic activity."
        ]
    },
    {
        id: "q3-fraude",
        type: "mc",
        questionText: `
            <b>Question:</b> What is one of the severe disciplinary consequences mentioned for academic misconduct?
        `,
        options: [
            { letter: "A", text: "(A) Receiving public praise for being clever." },
            { letter: "B", text: "(B) Having an obligatory extra summer course." },
            { letter: "C", text: "(C) Permanent expulsion from the institution." },
            { letter: "D", text: "(D) Being required to take an oral exam." },
            { letter: "E", text: "(E) Having to rewrite only the conclusion of the paper." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Look for the most severe punishment in the list of consequences."
        ]
    },
    {
        id: "q4-fraude",
        type: "mc",
        questionText: `
            <b>Question:</b> Why does academic misconduct devalue the effort of honest students?
        `,
        options: [
            { letter: "A", text: "(A) Because it increases the number of assignments." },
            { letter: "B", text: "(B) Because it makes it harder to take online tests." },
            { letter: "C", text: "(C) Because cheating creates an uneven playing field and undermines trust in the system." },
            { letter: "D", text: "(D) Because only individual papers are valued." },
            { letter: "E", text: "(E) Because honest students are automatically promoted." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Think about 'fairness' and 'equal' conditions."
        ]
    },
    {
        id: "q5-fraude",
        type: "mc",
        questionText: `
            <b>Question:</b> What factor does the text suggest can lead to 'critical learning gaps'?
        `,
        options: [
            { letter: "A", text: "(A) Reading too many textbooks." },
            { letter: "B", text: "(B) The student deceiving themselves about their level of knowledge by cheating." },
            { letter: "C", text: "(C) The excessive use of footnotes." },
            { letter: "D", text: "(D) Permitted collaboration on group projects." },
            { letter: "E", text: "(E) The difficulty in finding reliable sources." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: Gaps arise when the student does not master the content."
        ]
    },

    // --- ETHICAL JUDGMENT SCENARIOS ---

    {
        id: "q6-cenario",
        type: "mc",
        questionText: `
            <b>Scenario:</b> You are taking an individual test, and your classmate, sitting next to you, is struggling. They discreetly point to a question, and you show them the answer with your fingers under the desk.
            <br><br>
            <b>Question:</b> Is this considered academic misconduct? Why?
        `,
        options: [
            { letter: "A", text: "(A) No, because the answer was not written down; it was only a gesture. (Incorrect)" },
            { letter: "B", text: "(B) No, because they didn't copy directly from your notes. (Incorrect)" },
            { letter: "C", text: "(C) Yes, it is 'Copying on Tests,' as it involves providing unauthorized help to gain an unfair advantage. (Correct)" },
            { letter: "D", text: "(D) Yes, but only the classmate is cheating, not you. (Incorrect)" },
            { letter: "E", text: "(E) No, because the communication was non-verbal. (Incorrect)" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Think about the concept of 'unauthorized collaboration' during an evaluation."
        ]
    },
    {
        id: "q7-cenario",
        type: "mc",
        questionText: `
            <b>Scenario:</b> The professor assigned an individual research paper. You and a classmate decide to split the work: you research Section A and they research Section B. Afterward, you combine the two parts into a single document and submit it as your own work.
            <br><br>
            <b>Question:</b> Is this considered academic misconduct? Why?
        `,
        options: [
            { letter: "A", text: "(A) No, as long as you rewrote your classmate's text, it's fine. (Incorrect)" },
            { letter: "B", text: "(B) Yes, it is 'Improper Collaboration,' as the work was supposed to be individual and was divided to reduce effort. (Correct)" },
            { letter: "C", text: "(C) No, because both did some work and contributed original content. (Incorrect)" },
            { letter: "D", text: "(D) Yes, but only if the professor finds out you discussed the topic. (Incorrect)" },
            { letter: "E", text: "(E) No, unless the professor explicitly prohibited dividing topics. (Incorrect)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: The 'individual' nature of the assignment is the key point."
        ]
    },
    {
        id: "q8-cenario",
        type: "mc",
        questionText: `
            <b>Scenario:</b> During a closed-book multiple-choice test, your cell phone rings in your pocket. You ignore it, but a struggling classmate quickly takes theirs out to look up the answer to a question before the professor notices.
            <br><br>
            <b>Question:</b> Is your classmate's act considered misconduct? Why?
        `,
        options: [
            { letter: "A", text: "(A) No, because they only used the cell phone to 'verify' the answer, not to copy it from someone. (Incorrect)" },
            { letter: "B", text: "(B) No, unless they were caught in the act by the professor. (Incorrect)" },
            { letter: "C", text: "(C) Yes, it is 'Unauthorized Material Use' (electronic device) to gain an advantage on the test. (Correct)" },
            { letter: "D", text: "(D) Yes, but it is only a warning, not formal misconduct. (Incorrect)" },
            { letter: "E", text: "(E) No, because the rule only applies to paper notes. (Incorrect)" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Think about which tools are allowed in a closed-book exam."
        ]
    },
    {
        id: "q9-cenario",
        type: "mc",
        questionText: `
            <b>Scenario:</b> A student conducts a science experiment, and the results do not confirm their hypothesis. Afraid of receiving a low grade, they subtly alter some numbers in the data table so that the results appear correct and confirm their prediction.
            <br><br>
            <b>Question:</b> Does this constitute academic misconduct? Why?
        `,
        options: [
            { letter: "A", text: "(A) No, because the ultimate goal was to make the experiment work, which is allowed. (Incorrect)" },
            { letter: "B", text: "(B) Yes, it is 'Data Falsification,' which is a clear form of dishonesty to influence the grade. (Correct)" },
            { letter: "C", text: "(C) No, unless they plagiarized the conclusion from another report. (Incorrect)" },
            { letter: "D", text: "(D) Yes, but only if they had invented the entire experiment, not just altered the numbers. (Incorrect)" },
            { letter: "E", text: "(E) No, because it is common for experiment data to be slightly adjusted. (Incorrect)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: The integrity of data and results is crucial in research and experiments."
        ]
    },
    {
        id: "q10-cenario",
        type: "mc",
        questionText: `
            <b>Scenario:</b> A professor requests a 1000-word essay on a topic. You wrote a similar essay for a course last year and, without asking permission, you submit the same paper with only the date and title changed.
            <br><br>
            <b>Question:</b> Is this considered academic misconduct? Why?
        `,
        options: [
            { letter: "A", text: "(A) No, because the work is your own, and therefore can be reused. (Incorrect)" },
            { letter: "B", text: "(B) Yes, it is a form of 'Self-Plagiarism' or multiple submission, as you are presenting the same work to get credit in two different courses. (Correct)" },
            { letter: "C", text: "(C) No, as long as you correctly cite the original work. (Incorrect)" },
            { letter: "D", text: "(D) Yes, but only if the topic of the two courses is exactly the same. (Incorrect)" },
            { letter: "E", "text": "(E) No, because the work has already been evaluated and approved previously. (Incorrect)" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: Think about the concept of 'reuse' of your own work without authorization."
        ]
    },
];
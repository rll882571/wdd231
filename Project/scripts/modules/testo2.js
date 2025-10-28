// --- Source Texts ---
// Definindo os textos para reutilização.
// Usei ` (backticks) para permitir strings com múltiplas linhas (como no seu exemplo).

const textCyclone = `A cyclone is a terrible natural disaster, defined as a very strong storm with powerful winds that move in a circle. When a cyclone strikes a coastal area, it can cause massive destruction to buildings and create dangerous flooding. While meteorologists work to predict the path of these storms, their intensity can often be unexpected, giving people little time to prepare for the impact.

The most important step for protection is to pay attention to official warnings. When you hear a cyclone warning, you must act carefully and immediately. This is the first step to prevent serious injury. You should secure your home by bringing furniture and other loose items indoors. It is also essential to prepare an emergency kit with food, water, a flashlight, and a first-aid kit in case you lose power or are told to escape.

During the storm, the safest place to be is indoors, away from all windows. Do not go outside for any reason, as flying debris and high winds can be deadly. Keep listening to the radio for updates from emergency services. If authorities instruct you to evacuate, you must leave immediately and go to a designated shelter. Following these instructions is the best way to ensure you and your family are survivors of the event.`;

const textWildfire = `A wildfire is one of the most destructive and feared natural disasters. It often begins in dry areas and can spread with terrifying speed, consuming forests and grasslands. The intense heat and high flames destroy everything in their path, forcing both people and animals to escape quickly to save their lives. Often, these events are unexpected, catching communities off guard.

The danger is not just the fire itself. The thick smoke pollutes the air, making it difficult to breathe and causing health problems far away. For the communities directly affected, the aftermath is terrible. Homes and buildings often collapse, leaving families with nothing. The ground is left scorched, and the environmental damage can last for years.

Emergency teams work tirelessly to rescue survivors and fight the blaze. Authorities issue warnings to help people evacuate safely. While these teams are essential, the best course of action is to prevent these fires from starting. This requires people to pay attention to fire safety rules and manage dry vegetation carefully, especially during hot weather.`;

const textEarthquake = `An earthquake is a "sudden, rapid shaking of the earth caused by the shifting of underground rock". These events are extremely dangerous because they can "happen anywhere, and there is no way to predict them". According to the American Red Cross, the main risk is not the shaking itself; rather, "deaths and injuries occur when people fall trying to walk or run during shaking or when they are hit by falling debris".

The danger does not end with the initial tremor. The Red Cross warns that "smaller earthquakes, called aftershocks, always follow the mainshock". Furthermore, the main event can trigger other deadly disasters, including "tsunamis, landslides, fires, and damage to utilities". Because of these unpredictable threats, the organization urges everyone to "prepare now to protect yourself, your loved ones, and your home".

To stay safe, the most important tip is to "learn what to do during an earthquake". This includes learning how to "strengthen your home" beforehand. The Red Cross provides specific resources to help you learn these skills, including "Free Mobile Apps". You can also find "downloadable digital resources, videos on earthquakes and more at redcross.org/youthprep" to prepare your family.`;


// --- Question Bank ---

const questionBank = [

    // --- Seção 1: Cyclone ---
    {
        id: "q1",
        type: "mc",
        contextText: textCyclone,
        questionText: `${textCyclone}

According to the text, what is the <b>most important step</b> for protection during a cyclone?`,
        options: [
            { letter: "A", text: "(A) Preparing an emergency kit with food and water." },
            { letter: "B", text: "(B) Staying indoors, away from all windows." },
            { letter: "C", text: "(C) To pay attention to official warnings." },
            { letter: "D", text: "(D) To bring furniture and other loose items indoors." }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },
    {
        id: "q2",
        type: "mc",
        contextText: textCyclone,
        questionText: `${textCyclone}

What should you <b>not</b> do during a cyclone?`,
        options: [
            { letter: "A", text: "(A) Listen to the radio for updates." },
            { letter: "B", text: "(B) Go outside for any reason." },
            { letter: "C", text: "(C) Stay away from windows." },
            { letter: "D", text: "(D) Evacuate immediately if authorities instruct you to." }
        ],
        correctAnswer: "B", 
        videoUrl: "" 
    },
    {
        id: "q3",
        type: "mc", 
        contextText: textCyclone,
        questionText: `${textCyclone}

Which items are specifically mentioned for a cyclone emergency kit?`,
        options: [
            { letter: "A", text: "(A) Food, water, a flashlight, and a first-aid kit." },
            { letter: "B", text: "(B) Blankets, a radio, and tools." },
            { letter: "C", text: "(C) Passports, money, and clothes." },
            { letter: "D", text: "(D) A map, a whistle, and a cell phone." }
        ],
        correctAnswer: "A", 
        videoUrl: "" 
    },
    {
        id: "q4",
        type: "mc",
        contextText: textCyclone,
        questionText: `${textCyclone}

What is the <b>first step</b> to prevent serious injury when you hear a cyclone warning?`,
        options: [
            { letter: "A", text: "(A) Securing your home by bringing furniture indoors." },
            { letter: "B", text: "(B) To act carefully and immediately." },
            { letter: "C", text: "(C) Going to a designated shelter." },
            { letter: "D", text: "(D) Preparing the emergency kit." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },
    {
        id: "q21", // Reordenado para manter as perguntas do ciclone juntas
        type: "mc",
        contextText: textCyclone,
        questionText: `${textCyclone}

What is the ultimate goal of following instructions during a cyclone, according to the text?`,
        options: [
            { letter: "A", text: "(A) To protect your furniture and home." },
            { letter: "B", text: "(B) To ensure you and your family are survivors." },
            { letter: "C", text: "(C) To help meteorologists predict the storm." },
            { letter: "D", text: "(D) To prevent the power from going out." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },

    // --- Seção 2: Wildfire ---
    {
        id: "q5",
        type: "mc",
        contextText: textWildfire,
        questionText: `${textWildfire}

Besides the fire itself, what other major danger do wildfires cause?`,
        options: [
            { letter: "A", text: "(A) Heavy rains and flooding." },
            { letter: "B", text: "(B) Thick smoke polluting the air." },
            { letter: "C", text: "(C) Sudden shaking of the ground." },
            { letter: "D", text: "(D) Powerful circular winds." }
        ],
        correctAnswer: "B", 
        videoUrl: "" 
    },
    {
        id: "q6",
        type: "mc",
        contextText: textWildfire,
        questionText: `${textWildfire}

What is described as the <b>best course of action</b> regarding wildfires?`,
        options: [
            { letter: "A", text: "(A) Waiting for emergency teams to arrive." },
            { letter: "B", text: "(B) Escaping quickly when you see flames." },
            { letter: "C", text: "(C) Rebuilding stronger homes after the fire." },
            { letter: "D", text: "(D) To prevent these fires from starting." }
        ],
        correctAnswer: "D", 
        videoUrl: "" 
    },
    {
        id: "q7",
        type: "mc",
        contextText: textWildfire,
        questionText: `${textWildfire}

How do wildfires often begin, according to the text?`,
        options: [
            { letter: "A", text: "(A) In coastal areas during floods." },
            { letter: "B", text: "(B) In dry areas." },
            { letter: "C", text: "(C) Due to the shifting of underground rock." },
            { letter: "D", text: "(D) During circular storms." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },
    {
        id: "q8",
        type: "mc",
        contextText: textWildfire,
        questionText: `${textWildfire}

What is a mentioned consequence for communities <b>after</b> a wildfire?`,
        options: [
            { letter: "A", text: "(A) The air becomes difficult to breathe." },
            { letter: "B", text: "(B) It forces people and animals to escape." },
            { letter: "C", text: "(C) Homes and buildings often collapse." },
            { letter: "D", text: "(D) Authorities issue warnings." }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },
    {
        id: "q22", // Reordenado para manter as perguntas do incêndio juntas
        type: "mc",
        contextText: textWildfire,
        questionText: `${textWildfire}

What long-term environmental damage is mentioned after a wildfire?`,
        options: [
            { letter: "A", text: "(A) The ground is left scorched." },
            { letter: "B", text: "(B) The air remains polluted forever." },
            { letter: "C", text: "(C) It triggers aftershocks." },
            { letter: "D", text: "(D) It causes dangerous flooding." }
        ],
        correctAnswer: "A", 
        videoUrl: ""
    },

    // --- Seção 3: Earthquake ---
    {
        id: "q9", 
        type: "mc",
        contextText: textEarthquake,
        questionText: `${textEarthquake}

According to the Red Cross, what is the <b>main risk</b> of death or injury during an earthquake?`,
        options: [
            { letter: "A", text: "(A) The sudden shaking of the ground itself." },
            { letter: "B", text: "(B) Tsunamis and landslides." },
            { letter: "C", text: "(C) Being hit by falling debris or falling while trying to move." },
            { letter: "D", text: "(D) Damage to utilities and fires." }
        ],
        correctAnswer: "C", 
        videoUrl: "" 
    },
    {
        id: "q10",
        type: "mc",
        contextText: textEarthquake,
        questionText: `${textEarthquake}

What are the smaller earthquakes called that always follow the mainshock?`,
        options: [
            { letter: "A", text: "(A) Tremors." },
            { letter: "B", text: "(B) Aftershocks." },
            { letter: "C", text: "(C) Preshocks." },
            { letter: "D", text: "(D) Landslides." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },
    {
        id: "q11",
        type: "mc",
        contextText: textEarthquake,
        questionText: `${textEarthquake}

Which resource does the Red Cross <b>not</b> explicitly mention for earthquake preparation?`,
        options: [
            { letter: "A", text: "(A) Free Mobile Apps." },
            { letter: "B", text: "(B) Videos on earthquakes." },
            { letter: "C", text: "(C) Free earthquake-proof building materials." },
            { letter: "D", text: "(D) Downloadable digital resources." }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },
    {
        id: "q12",
        type: "mc",
        contextText: textEarthquake,
        questionText: `${textEarthquake}

Why are earthquakes considered extremely dangerous?`,
        options: [
            { letter: "A", text: "(A) Because they always cause tsunamis." },
            { letter: "B", text: "(B) Because they can happen anywhere and cannot be predicted." },
            { letter: "C", text: "(C) Because they only happen in dry areas." },
            { letter: "D", text: "(D) Because the shaking itself is the main risk of death." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },
    {
        id: "q20", // Reordenado para manter as perguntas do terremoto juntas
        type: "mc",
        contextText: textEarthquake,
        questionText: `${textEarthquake}

Which disaster can trigger other deadly disasters, including 'tsunamis, landslides, and fires'?`,
        options: [
            { letter: "A", text: "(A) A cyclone." },
            { letter: "B", text: "(B) A wildfire." },
            { letter: "C", text: "(C) An earthquake." },
            { letter: "D", text: "(D) A strong storm." }
        ],
        correctAnswer: "C",
        videoUrl: ""
    },

    // --- Seção 4: Perguntas de Comparação / Definição ---
    {
        id: "q13",
        type: "mc",
        contextText: textCyclone,
        questionText: `${textCyclone}

Which disaster is defined by 'powerful winds that move in a circle'?`,
        options: [
            { letter: "A", text: "(A) Wildfire." },
            { letter: "B", text: "(B) Earthquake." },
            { letter: "C", text: "(C) Cyclone." },
            { letter: "D", text: "(D) Tsunami." }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },
    {
        id: "q14",
        type: "mc",
        contextText: textEarthquake,
        questionText: `${textEarthquake}

Which disaster is defined as a 'sudden, rapid shaking of the earth caused by the shifting of underground rock'?`,
        options: [
            { letter: "A", text: "(A) Cyclone." },
            { letter: "B", text: "(B) Wildfire." },
            { letter: "C", text: "(C) Aftershock." },
            { letter: "D", text: "(D) Earthquake." }
        ],
        correctAnswer: "D", 
        videoUrl: ""
    },
    {
        id: "q15",
        type: "mc",
        contextText: textCyclone + "\n\n" + textWildfire, // Pergunta de comparação
        questionText: `${textCyclone}

${textWildfire}

Which two disasters mention that their occurrence or intensity can be <b>'unexpected'</b>?`,
        options: [
            { letter: "A", text: "(A) Cyclone and Wildfire." },
            { letter: "B", text: "(B) Earthquake and Cyclone." },
            { letter: "C", text: "(C) Wildfire and Earthquake." },
            { letter: "D", text: "(D) All three." }
        ],
        correctAnswer: "A", 
        videoUrl: ""
    },
    {
        id: "q16",
        type: "mc",
        contextText: textCyclone,
        questionText: `${textCyclone}

For which disaster is 'securing loose furniture indoors' a recommended action?`,
        options: [
            { letter: "A", text: "(A) Cyclone." },
            { letter: "B", text: "(B) Wildfire." },
            { letter: "C", text: "(C) Earthquake." },
            { letter: "D", text: "(D) All three." }
        ],
        correctAnswer: "A", 
        videoUrl: ""
    },
    {
        id: "q17",
        type: "mc",
        contextText: textWildfire,
        questionText: `${textWildfire}

For which disaster is 'managing dry vegetation' a key prevention method?`,
        options: [
            { letter: "A", text: "(A) Cyclone." },
            { letter: "B", text: "(B) Earthquake." },
            { letter: "C", text: "(C) Wildfire." },
            { letter: "D", text: "(D) Landslide." }
        ],
        correctAnswer: "C", 
        videoUrl: ""
    },
    {
        id: "q18",
        type: "mc",
        contextText: textCyclone,
        questionText: `${textCyclone}

'Staying indoors, away from all windows' is a key safety measure during which event?`,
        options: [
            { letter: "A", text: "(A) A wildfire." },
            { letter: "B", text: "(B) A cyclone." },
            { letter: "C", text: "(C) An earthquake." },
            { letter: "D", text: "(D) An aftershock." }
        ],
        correctAnswer: "B", 
        videoUrl: ""
    },
    {
        id: "q19",
        type: "mc",
        contextText: textWildfire,
        questionText: `${textWildfire}

Which disaster specifically mentions 'thick smoke' as a major problem?`,
        options: [
            { letter: "A", text: "(A) Cyclone." },
            { letter: "B", text: "(B) Earthquake." },
            { letter: "C", text: "(C) Tsunami." },
            { letter: "D", text: "(D) Wildfire." }
        ],
        correctAnswer: "D",
        videoUrl: ""
    }
];
const questionBank = [

    // --- BLOCO 1: QUESTÕES ADAPTADAS (AGORA COM 5 OPÇÕES) ---

    // Pergunta 1 
    {
        id: "q1",
        type: "mc",
        questionText: `
            Text 1: Latin America
            <br><br>
            Latin America is a region that includes countries in the Americas where people mainly speak Spanish and Portuguese. This is because most of the region was colonized by Spain and Portugal. The region has many natural resources, such as oil, gas, and minerals. Many Latin American countries depend on selling these products to other parts of the world. However, they also face problems like inequality and low productivity. The World Bank says that improving education, innovation, and fair growth are important goals for the region.
            <br><br>
            Question: According to the text, what are the two main languages spoken in Latin America, and what is the historical reason for this?
        `,
        options: [
            { letter: "A", text: "(A) French and English, due to colonization by France and England." },
            { letter: "B", text: "(B) Spanish and French, due to colonization by Spain and France." },
            { letter: "C", text: "(C) Spanish and Portuguese, because the region was mainly colonized by Spain and Portugal." },
            { letter: "D", text: "(D) Indigenous languages and English, due to trade with the United States." },
            { letter: "E", text: "(E) Italian and Spanish, because of early European exploration." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure no texto as nações que colonizaram a região."
        ]
    },
    {
        id: "q2",
        type: "mc",
        questionText: `
            Text 1: Latin America
            <br><br>
            Latin America is a region that includes countries in the Americas where people mainly speak Spanish and Portuguese. This is because most of the region was colonized by Spain and Portugal. The region has many natural resources, such as oil, gas, and minerals. Many Latin American countries depend on selling these products to other parts of the world. However, they also face problems like inequality and low productivity. The World Bank says that improving education, innovation, and fair growth are important goals for the region.
            <br><br>
            Question: Which three areas does the World Bank suggest need improvement for Latin America's development?
        `,
        options: [
            { letter: "A", text: "(A) Mining, oil production, and gas sales." },
            { letter: "B", text: "(B) Geography, climate, and cultures." },
            { letter: "C", text: "(C) Strong democracies, corruption, and social protests." },
            { letter: "D", text: "(D) Education, innovation, and fair growth." },
            { letter: "E", text: "(E) Economic ties with China, the US, and the EU." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: O texto menciona metas de melhoria citadas pelo 'The World Bank'."
        ]
    },

    // --- QUESTÃO 2b (GLOBAL POLITICS) ---
    {
        id: "q3",
        type: "mc",
        questionText: `
            Text 1: Latin America - Global Politics
            <br><br>
            The region is also important in global politics because countries like the United States, China, and those in the European Union have many economic and diplomatic ties with it.
            <br><br>
            Question: What best explains why Latin America is important in global politics?
        `,
        options: [
            { letter: "A", text: "(A) Because all of its countries are rich and industrialized." },
            { letter: "B", text: "(B) Because it is the largest continent in the world." },
            { letter: "C", text: "(C) Because other world powers (like the US, China, and the EU) have economic and diplomatic interests there." },
            { letter: "D", "text": "(D) Because its governments are all strong democracies." },
            { letter: "E", text: "(E) Because it is the main source of technology for the world." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Considere a razão pela qual 'outras potências' se importam com a América Latina."
        ]
    },

    // --- QUESTÃO 5 (LATIN AMERICA OIL PRODUCTION) ---
    {
        id: "q4",
        type: "mc",
        questionText: `
            Text: Latin America Oil Production
            <br><br>
            Venezuela has the largest proven oil reserves in the world, over 303 billion barrels. Brazil produces 2.9 million barrels per day, mostly from offshore oil fields. Mexico produces about 1.85 million barrels daily, but production is declining. Argentina produces 820,000 barrels per day, with a large shale deposit called Vaca Muerta.
            <br><br>
            Question: Match the country with the correct oil fact:
        `,
        options: [
            { letter: "A", text: "(A) Mexico: Largest proven oil reserves in the world." },
            { letter: "B", text: "(B) Brazil: Production declining due to maturing oil fields." },
            { letter: "C", text: "(C) Venezuela: Has a large shale deposit called Vaca Muerta." },
            { letter: "D", text: "(D) Argentina: Produces 2.9 million barrels per day, mostly offshore." },
            { letter: "E", text: "(E) Venezuela: Largest proven oil reserves in the world." }
        ],
        correctAnswer: "E",
        videoUrl: "",
        hints: [
            "Hint 1: O país com as maiores reservas comprovadas é mencionado no texto."
        ]
    },

    // --- QUESTÃO 9 (INDIGENOUS POPULATION - MATCH) ---
    {
        id: "q5",
        type: "mc",
        questionText: `
            Base Text 3: Indigenous Population in Latin America (Incomplete Data)
            <br><br>
            Data Snippets:
            1. 12.2% of the population is indigenous.
            2. 0.3% of the population, around 900,000 people.
            3. 24% of the population, around 7 million people.
            <br><br>
            Question: Based on common knowledge/text context from Question 9, if Bolivia has one of the highest percentages of Indigenous population, which data snippet is most likely matched with Bolivia?
        `,
        options: [
            { letter: "A", text: "(A) 0.3% of the population, around 900,000 people." },
            { letter: "B", text: "(B) 12.2% of the population is indigenous." },
            { letter: "C", text: "(C) 24% of the population, around 7 million people." },
            { letter: "D", text: "(D) 2.4% of the population, and 955,000 people." },
            { letter: "E", text: "(E) About 16 million people (Absolute number)." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O PDF lista Bolívia com uma das maiores porcentagens. Qual porcentagem é a mais alta na lista de dados?"
        ]
    },

    // --- QUESTÃO 3a (DEFINITION -> MC) ---
    {
        id: "q6",
        type: "mc", // Tipo alterado de "definition" para "mc"
        questionText: `
            Question: Based on what you have studied, define the following term:
            <br><br>
            a) Drainage Basin (Bacia de Drenagem)
        `,
        options: [
            { letter: "A", text: "(A) A large, artificial lake created by a river dam." },
            { letter: "B", text: "(B) The area of land where all precipitation drains into a single river, lake, or other body of water." },
            { letter: "C", text: "(C) A system of channels used to supply water to land or crops." },
            { letter: "D", text: "(D) The study of water's distribution and movement on and below the Earth’s surface." },
            { letter: "E", text: "(E) An area suffering from high levels of water contamination." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: O conceito está ligado à captação de água de uma região para um corpo d'água principal."
        ]
    },

    // --- QUESTÃO 4a (COMMODITY - DEFINITION -> MC) ---
    {
        id: "q7",
        type: "mc", // Tipo alterado de "definition" para "mc"
        questionText: `
            Question: Which of the following best defines the term Commodity?
        `,
        options: [
            { letter: "A", text: "(A) A luxury good, like a famous piece of art, that is unique and cannot be traded easily." },
            { letter: "B", text: "(B) A raw material or agricultural product that can be bought and sold, such as oil, gas, or minerals." },
            { letter: "C", text: "(C) A high-tech finished product, like a computer or smartphone." },
            { letter: "D", text: "(D) A financial service, like a bank loan or investment fund." },
            { letter: "E", text: "(E) A political agreement between two countries to share resources." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: No contexto da América Latina, o texto base 1 menciona produtos que são vendidos para outras partes do mundo."
        ]
    },

    // --- QUESTÃO 6b (PREPOSITION OF PLACE) ---
    {
        id: "q8",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Place (IN / ON / AT)
            <br><br>
            IN is used for bigger locations (Countries, Cities, Enclosed Space, Car).
            ON is used for medium/surface locations (Streets, Surfaces, Means of Transport, The floor).
            AT is used for very specific locations (Hours, Addresses, Specific Locations, Bus Stop).
            <br><br>
            Question: Fill in the gap with the correct preposition: She lives _______ Brazil.
        `,
        options: [
            { letter: "A", text: "(A) ON" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) IN" },
            { letter: "D", text: "(D) OFF" },
            { letter: "E", text: "(E) TO" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O Brasil é um país, uma localização 'maior'/'geral'."
        ]
    },

    // --- QUESTÃO 6c (PREPOSITION OF PLACE) ---
    {
        id: "q9",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Place (IN / ON / AT)
            <br><br>
            IN is used for bigger locations (Countries, Cities, Enclosed Space, Car).
            ON is used for medium/surface locations (Streets, Surfaces, Means of Transport, The floor).
            AT is used for very specific locations (Hours, Addresses, Specific Locations, Bus Stop).
            <br><br>
            Question: Fill in the gap with the correct preposition: I'm waiting _______ the bus stop.
        `,
        options: [
            { letter: "A", text: "(A) ON" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) IN" },
            { letter: "D", text: "(D) FOR" },
            { letter: "E", text: "(E) NEAR" }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: A parada de ônibus é uma 'localização específica'."
        ]
    },

    // --- QUESTÃO 7b (PREPOSITION OF TIME) ---
    {
        id: "q10",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Time (IN / ON / AT)
            <br><br>
            IN is used for longer periods (Decades, Years, Seasons, Periods of Time).
            ON is used for specific days/dates (My Birthday, Specific Days, The Weekend, Day Sunday, Dates).
            AT is used for very specific moments (Hours, Time, Holidays without 'Day').
            <br><br>
            Question: Complete the gap with the correct preposition: We have a test _______ Monday.
        `,
        options: [
            { letter: "A", text: "(A) ON" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) IN" },
            { letter: "D", text: "(D) BY" },
            { letter: "E", text: "(E) FOR" }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Hint 1: Dias da semana são considerados 'dias específicos'."
        ]
    },
    {
        id: "q11",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Time (IN / ON / AT)
            <br><br>
            IN is used for longer periods (Decades, Years, Seasons, Periods of Time).
            ON is used for specific days/dates (My Birthday, Specific Days, The Weekend, Day Sunday, Dates).
            AT is used for very specific moments (Hours, Time, Holidays without 'Day').
            <br><br>
            Question: Complete the gap with the correct preposition: The concert starts _______ 8 p.m.
        `,
        options: [
            { letter: "A", text: "(A) IN" },
            { letter: "B", text: "(B) ON" },
            { letter: "C", text: "(C) AT" },
            { letter: "D", text: "(D) BY" },
            { letter: "E", text: "(E) SINCE" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure a preposição usada para horas específicas."
        ]
    },

    // --- QUESTÃO 7d (PREPOSITION OF TIME) ---
    {
        id: "q12",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Time (IN / ON / AT)
            <br><br>
            IN is used for longer periods (Decades, Years, Seasons, Periods of Time).
            ON is used for specific days/dates (My Birthday, Specific Days, The Weekend, Day Sunday, Dates).
            AT is used for very specific moments (Hours, Time, Holidays without 'Day').
            <br><br>
            Question: Complete the gap with the correct preposition: He was born _______ 2010.
        `,
        options: [
            { letter: "A", text: "(A) ON" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) IN" },
            { letter: "D", text: "(D) DURING" },
            { letter: "E", text: "(E) OF" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure a preposição usada para anos."
        ]
    },

    // --- QUESTÃO 7j (PREPOSITION OF TIME) ---
    {
        id: "q13",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Time (IN / ON / AT)
            <br><br>
            IN is used for longer periods (Decades, Years, Seasons, Periods of Time).
            ON is used for specific days/dates (My Birthday, Specific Days, The Weekend, Day Sunday, Dates).
            AT is used for very specific moments (Hours, Time, Holidays without 'Day').
            <br><br>
            Question: Complete the gap with the correct preposition: They got married _______ April 14th.
        `,
        options: [
            { letter: "A", text: "(A) IN" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) ON" },
            { letter: "D", text: "(D) DURING" },
            { letter: "E", text: "(E) OF" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure a preposição usada para datas completas (mês e dia)."
        ]
    },

    // --- QUESTÃO 3e (DEFINITION -> MC) ---
    {
        id: "q14",
        type: "mc", // Tipo alterado de "definition" para "mc"
        questionText: `
            Question: Which of the following best defines the term Irrigation (Irrigação)?
        `,
        options: [
            { letter: "A", text: "(A) The process of purifying contaminated water for human consumption." },
            { letter: "B", text: "(B) The natural movement of water from the sea to the clouds and back to the land." },
            { letter: "C", text: "(C) The construction of dams to control river flow for hydroelectricity." },
            { letter: "D", text: "(D) A system of supplying water to land or crops to help growth, typically by means of channels or pipes." },
            { letter: "E", text: "(E) The study of the chemical components of water in a river basin." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: O termo refere-se à ação de levar água de forma artificial para plantações."
        ]
    },

    // --- QUESTÃO 3d (DEFINITION -> MC) ---
    {
        id: "q15",
        type: "mc", // Tipo alterado de "definition" para "mc"
        questionText: `
            Question: Which of the following best defines the term River Dam (Barragem de Rio)?
        `,
        options: [
            { letter: "A", text: "(A) A naturally occurring waterfall or rapid in a river." },
            { letter: "B", text: "(B) The place where a river meets the ocean." },
            { letter: "C", text: "(C) A barrier constructed across a river to hold back water and raise its level, forming a reservoir or preventing flooding." },
            { letter: "D", text: "(D) A channel used to divert river water for irrigation purposes." },
            { letter: "E", text: "(E) The main river that receives water from tributaries." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O termo descreve uma estrutura de retenção de água em um curso fluvial."
        ]
    },

    // --- QUESTÃO 4b (MONOCULTURE - DEFINITION -> MC) ---
    {
        id: "q16",
        type: "mc", // Tipo alterado de "definition" para "mc"
        questionText: `
            Question: Which of the following best defines the term Monoculture (Monocultura)?
        `,
        options: [
            { letter: "A", text: "(A) The practice of growing a single crop or raising one type of livestock exclusively on a large tract of land." },
            { letter: "B", text: "(B) The cultivation of various crops in the same area to increase biodiversity." },
            { letter: "C", text: "(C) The use of advanced technology to grow crops in a sustainable way." },
            { letter: "D", text: "(D) A system where land is shared by different farmers to reduce risk." },
            { letter: "E", text: "(E) The trading of agricultural products between multiple countries." }
        ],
        correctAnswer: "A",
        videoUrl: "",
        hints: [
            "Hint 1: O prefixo 'mono-' significa 'um'."
        ]
    },

    // --- QUESTÃO 3c (DEFINITION -> MC) ---
    {
        id: "q17",
        type: "mc", // Tipo alterado de "definition" para "mc"
        questionText: `
            Question: Which of the following best defines the term Water Contamination (Contaminação da Água)?
        `,
        options: [
            { letter: "A", text: "(A) The natural cycle of water evaporation and precipitation." },
            { letter: "B", text: "(B) The presence of harmful substances, such as chemicals or microorganisms, in a body of water." },
            { letter: "C", text: "(C) The process of storing water in underground aquifers." },
            { letter: "D", text: "(D) The movement of water through the soil and rocks." },
            { letter: "E", text: "(E) The regulation of water flow by a river dam." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: O termo refere-se à qualidade da água, tornando-a insegura."
        ]
    },

    // --- QUESTÃO 6e (PREPOSITION OF PLACE) ---
    {
        id: "q18",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Place (IN / ON / AT)
            <br><br>
            IN is used for bigger locations (Countries, Cities, Enclosed Space, Car).
            ON is used for medium/surface locations (Streets, Surfaces, Means of Transport, The floor).
            AT is used for very specific locations (Hours, Addresses, Specific Locations, Bus Stop).
            <br><br>
            Question: Fill in the gap with the correct preposition: They are _______ the park, near the trees.
        `,
        options: [
            { letter: "A", text: "(A) ON" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) IN" },
            { letter: "D", text: "(D) NEAR" },
            { letter: "E", text: "(E) NEXT TO" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O parque é um 'espaço cercado' ou uma área maior."
        ]
    },

    // --- QUESTÃO 6f (PREPOSITION OF PLACE) ---
    {
        id: "q19",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Place (IN / ON / AT)
            <br><br>
            IN is used for bigger locations (Countries, Cities, Enclosed Space, Car).
            ON is used for medium/surface locations (Streets, Surfaces, Means of Transport, The floor).
            AT is used for very specific locations (Hours, Addresses, Specific Locations, Bus Stop).
            <br><br>
            Question: Fill in the gap with the correct preposition: The clock is _______ the wall.
        `,
        options: [
            { letter: "A", text: "(A) IN" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) ON" },
            { letter: "D", text: "(D) OVER" },
            { letter: "E", text: "(E) BY" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O relógio está em contato com a superfície da parede."
        ]
    },

    // --- QUESTÃO 7g (PREPOSITION OF TIME) ---
    {
        id: "q20",
        type: "mc",
        questionText: `
            Base Text 2: Prepositions of Time (IN / ON / AT)
            <br><br>
            IN is used for longer periods (Decades, Years, Seasons, Periods of Time).
            ON is used for specific days/dates (My Birthday, Specific Days, The Weekend, Day Sunday, Dates).
            AT is used for very specific moments (Hours, Time, Holidays without 'Day').
            <br><br>
            Question: Complete the gap with the correct preposition: We're going on vacation _______ summer.
        `,
        options: [
            { letter: "A", text: "(A) ON" },
            { letter: "B", text: "(B) AT" },
            { letter: "C", text: "(C) IN" },
            { letter: "D", text: "(D) FOR" },
            { letter: "E", text: "(E) DURING" }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure a preposição usada para estações do ano."
        ]
    },
    {
        id: "q21",
        type: "mc",
        questionText: `
            Text 1: Latin America
            <br><br>
            Latin America is a region that includes countries in the Americas where people mainly speak Spanish and Portuguese. The region has many natural resources, such as oil, gas, and minerals. Many Latin American countries depend on selling these products to other parts of the world.
            <br><br>
            Question: What is a major economic challenge Latin American countries face, according to the text?
        `,
        options: [
            { letter: "A", text: "(A) Lack of natural resources." },
            { letter: "B", text: "(B) Oversupply of workers." },
            { letter: "C", text: "(C) Problems like inequality and low productivity." },
            { letter: "D", text: "(D) Too much focus on education and innovation." },
            { letter: "E", text: "(E) Strong global political isolation." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O texto menciona problemas internos enfrentados pela região."
        ]
    },
    {
        id: "q22",
        type: "mc",
        questionText: `
            Text: Latin America Oil Production
            <br><br>
            Venezuela has the largest proven oil reserves in the world, over 303 billion barrels. Brazil produces 2.9 million barrels per day, mostly from offshore oil fields. Argentina produces 820,000 barrels per day, with a large shale deposit called Vaca Muerta.
            <br><br>
            Question: What distinguishes Brazil's oil production, according to the text?
        `,
        options: [
            { letter: "A", text: "(A) It has the largest proven oil reserves." },
            { letter: "B", text: "(B) Its production is rapidly declining." },
            { letter: "C", text: "(C) It is controlled by Ecopetrol S.A." },
            { letter: "D", text: "(D) It produces 2.9 million barrels per day, mostly from offshore fields." },
            { letter: "E", text: "(E) It has the Vaca Muerta shale deposit." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: Procure a informação específica ligada ao Brasil."
        ]
    },
    {
        id: "q23",
        type: "mc",
        questionText: `
            Question: What is the main characteristic of a Commodity (Comodity)?
        `,
        options: [
            { letter: "A", text: "(A) A final product ready to be sold in retail stores." },
            { letter: "B", text: "(B) A highly unique good, like a famous piece of art." },
            { letter: "C", text: "(C) A raw material or primary agricultural product (like oil or gold) that can be traded globally." },
            { letter: "D", text: "(D) A financial service provided by large banks." },
            { letter: "E", text: "(E) A political alliance between countries for resource sharing." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Pense em bens básicos e primários (matéria-prima)."
        ]
    },
    {
        id: "q24",
        type: "mc",
        questionText: `
            Question: What is the most accurate definition of Monoculture (Monocultura)?
        `,
        options: [
            { letter: "A", text: "(A) The practice of mixing many types of crops on a farm." },
            { letter: "B", text: "(B) The cultivation of a single crop or livestock type exclusively on a large area of land." },
            { letter: "C", text: "(C) The reliance on imports for agricultural products." },
            { letter: "D", text: "(D) The system of growing crops only for family consumption." },
            { letter: "E", text: "(E) The use of advanced robotic machinery in farming." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: O termo se refere à exclusividade de um tipo de plantio."
        ]
    },
    {
        id: "q25",
        type: "mc",
        questionText: `
            Question: What does the term River Dam (Barragem de Rio) primarily describe?
        `,
        options: [
            { letter: "A", text: "(A) The natural erosion process of a river bank." },
            { letter: "B", text: "(B) The point where a river flows into a lake or ocean." },
            { letter: "C", text: "(C) A man-made barrier built across a river to retain water, control flow, or generate power." },
            { letter: "D", text: "(D) A system of channels used to irrigate crops far from the river." },
            { letter: "E", text: "(E) A type of natural stone found only in riverbeds." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O termo 'barragem' implica uma estrutura de contenção construída."
        ]
    },
    {
        id: "q26",
        type: "mc",
        questionText: `
            Question: What is the core concept of a Drainage Basin (Bacia de Drenagem)?
        `,
        options: [
            { letter: "A", text: "(A) A large reservoir used for water storage." },
            { letter: "B", text: "(B) A river that flows directly into the sea." },
            { letter: "C", text: "(C) The area of land where all surface water converges and drains into a single body of water (river, lake, etc.)." },
            { letter: "D", text: "(D) An area protected from flooding by river banks." },
            { letter: "E", text: "(E) The network of pipes used for public water supply." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Pense na área que alimenta um rio principal e seus afluentes."
        ]
    },
    {
        id: "q27",
        type: "mc",
        questionText: `
            Question: What is Irrigation (Irrigação)?
        `,
        options: [
            { letter: "A", text: "(A) The natural rainfall that waters crops." },
            { letter: "B", text: "(B) The process of purifying contaminated water." },
            { letter: "C", text: "(C) The artificial supply of water to agricultural land or crops." },
            { letter: "D", text: "(D) The technique of planting seeds in dry soil." },
            { letter: "E", text: "(E) The system of building roads near rivers." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O termo descreve a ação humana de fornecer água para o crescimento de plantas."
        ]
    },
    {
        id: "q28",
        type: "mc",
        questionText: `
            Question: What describes Water Contamination (Contaminação da Água)?
        `,
        options: [
            { letter: "A", text: "(A) The normal presence of minerals in river water." },
            { letter: "B", text: "(B) The introduction of harmful chemicals, waste, or microorganisms into water sources." },
            { letter: "C", text: "(C) The process of desalination (removing salt from water)." },
            { letter: "D", text: "(D) The movement of water through the hydrological cycle." },
            { letter: "E", text: "(E) The measurement of water temperature in lakes." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: O termo se refere à degradação da qualidade da água por elementos externos."
        ]
    },
    {
        id: "q29",
        type: "mc",
        questionText: `
            Text: Indigenous Population in Latin America (Incomplete Data)
            <br><br>
            Data Snippets: 12.2% of the population is indigenous. 2.4% of the population, and 955,000 people. 24% of the population, around 7 million people. 0.3% of the population, around 900,000 people.
            <br><br>
            Question: Based on the highest percentage provided in the data snippets (24% of the population), which country is often cited as having a very high proportion of its citizens being Indigenous, matching this data?
        `,
        options: [
            { letter: "A", text: "(A) Argentina (historically low indigenous population percentage)." },
            { letter: "B", text: "(B) Brazil (historically low indigenous population percentage)." },
            { letter: "C", text: "(C) Colombia (medium indigenous population percentage)." },
            { letter: "D", text: "(D) Bolivia (known for having a large majority or high percentage of indigenous people)." },
            { letter: "E", text: "(E) Peru (large absolute number, but not the highest percentage listed)." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: Bolívia e Guatemala estão entre os países com maior percentual de população indígena na América Latina."
        ]
    },
    {
        id: "q30",
        type: "mc",
        questionText: `
            Text: Latin America Oil Production
            <br><br>
            Venezuela has the largest proven oil reserves in the world, over 303 billion barrels. Brazil produces 2.9 million barrels per day, mostly from offshore oil fields. Argentina produces 820,000 barrels per day, with a large shale deposit called Vaca Muerta. Colombia produces just under 770,000 barrels per day, controlled by Ecopetrol S.A.
            <br><br>
            Question: What major natural resource, besides oil and gas, does the general text mention that Latin American countries depend on selling?
        `,
        options: [
            { letter: "A", text: "(A) Automobiles." },
            { letter: "B", text: "(B) High-tech software." },
            { letter: "C", text: "(C) Minerals." },
            { letter: "D", text: "(D) Pharmaceutical drugs." },
            { letter: "E", text: "(E) Weapons technology." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: O Texto Base 1 lista três recursos naturais dos quais a região depende."
        ]
    },
    {
        id: "q31",
        type: "mc",
        questionText: `
            Text 1: Latin America
            <br><br>
            Latin America is a region that includes countries in the Americas where people mainly speak Spanish and Portuguese. This is because most of the region was colonized by Spain and Portugal. The region has many natural resources, such as oil, gas, and minerals. Many Latin American countries depend on selling these products to other parts of the world. However, they also face problems like inequality and low productivity. The World Bank says that improving education, innovation, and fair growth are important goals for the region.
            <br><br>
            Question: According to the text, what are the two main languages spoken in Latin America, and what is the historical reason for this?
        `,
        options: [
            { letter: "A", text: "(A) French and English, due to colonization by France and England." },
            { letter: "B", text: "(B) Spanish and French, due to colonization by Spain and France." },
            { letter: "C", text: "(C) Spanish and Portuguese, because the region was mainly colonized by Spain and Portugal." },
            { letter: "D", text: "(D) Indigenous languages and English, due to trade with the United States." },
            { letter: "E", text: "(E) Italian and Spanish, because of early European exploration." }
        ],
        correctAnswer: "C",
        videoUrl: "",
        hints: [
            "Hint 1: Procure no texto as nações que colonizaram a região."
        ]
    },
    // Repetição da q2 com novo ID (q32) para garantir todas as questões no formato MC
    {
        id: "q32",
        type: "mc",
        questionText: `
            Text 1: Latin America
            <br><br>
            Latin America is a region that includes countries in the Americas where people mainly speak Spanish and Portuguese. This is because most of the region was colonized by Spain and Portugal. The region has many natural resources, such as oil, gas, and minerals. Many Latin American countries depend on selling these products to other parts of the world. However, they also face problems like inequality and low productivity. The World Bank says that improving education, innovation, and fair growth are important goals for the region.
            <br><br>
            Question: Which three areas does the World Bank suggest need improvement for Latin America's development?
        `,
        options: [
            { letter: "A", text: "(A) Mining, oil production, and gas sales." },
            { letter: "B", text: "(B) Geography, climate, and cultures." },
            { letter: "C", text: "(C) Strong democracies, corruption, and social protests." },
            { letter: "D", text: "(D) Education, innovation, and fair growth." },
            { letter: "E", text: "(E) Economic ties with China, the US, and the EU." }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: O texto menciona metas de melhoria citadas pelo 'The World Bank'."
        ]
    },
    
    // --- QUESTÃO 5 (LATIN AMERICA OIL PRODUCTION - CONTINUAÇÃO) - q5 do código original já presente no Bloco 1, mas uma variação com ID "q5" foi mantida
    {
        id: "q33",
        type: "mc",
        questionText: `
            Text: Latin America Oil Production
            <br><br>
            Venezuela has the largest proven oil reserves in the world, over 303 billion barrels. Brazil produces 2.9 million barrels per day, mostly from offshore oil fields. Mexico produces about 1.85 million barrels daily, but production is declining. Argentina produces 820,000 barrels per day, with a large shale deposit called Vaca Muerta. Colombia produces just under 770,000 barrels per day, controlled by Ecopetrol S.A., the state-owned oil company.
            <br><br>
            Question: Which country's oil production is described as 'declining due to maturing oil fields'?
        `,
        options: [
            { letter: "A", text: "(A) Brazil" },
            { letter: "B", text: "(B) Venezuela" },
            { letter: "C", text: "(C) Argentina" },
            { letter: "D", text: "(D) Mexico" },
            { letter: "E", text: "(E) Colombia" }
        ],
        correctAnswer: "D",
        videoUrl: "",
        hints: [
            "Hint 1: Procure a frase 'production is declining' no texto."
        ]
    },
    
    // --- QUESTÃO 3b (DEFINITION -> MC) ---
    {
        id: "q34", // Novo ID para evitar duplicidade com q9 do bloco 2
        type: "mc", 
        questionText: `
            Question: Based on what you have studied, define the following term:
            <br><br>
            b) Hydrological Features (Características Hidrológicas)
        `,
        options: [
            { letter: "A", text: "(A) Large man-made structures used to control climate." },
            { letter: "B", text: "(B) Natural or artificial elements related to water, such as rivers, lakes, oceans, dams, or irrigation systems." },
            { letter: "C", text: "(C) Features related to land elevation, such as mountains and valleys." },
            { letter: "D", text: "(D) The study of plant life and animal life in a region." },
            { letter: "E", text: "(E) The economic activities surrounding the production of natural gas." }
        ],
        correctAnswer: "B",
        videoUrl: "",
        hints: [
            "Hint 1: O termo 'hidrológicas' refere-se a água."
        ]
    },
    
    // --- QUESTÃO 9 (INDIGENOUS POPULATION - PAÍS DE MAIOR POPULAÇÃO) ---
    {
        id: "q35", // Novo ID para a questão com dados brutos
        type: "mc",
        questionText: `
            Base Text 3: Indigenous Population in Latin America (Incomplete Data)
            <br><br>
            Data Snippets:
            1. 12.2% of the population is indigenous.
            2. 2.4% of the population, and 955,000 people.
            3. About 16 million people (Absolute number).
            4. 24% of the population, around 7 million people.
            <br><br>
            Question: Based on the raw data (Question 9 in PDF), which data snippet likely corresponds to Peru (Pr - A), known to have one of the largest absolute indigenous populations in the region?
        `,
        options: [
            { letter: "A", text: "(A) 24% of the population, around 7 million people." },
            { letter: "B", text: "(B) 12.2% of the population is indigenous." },
            { letter: "C", text: "(C) 0.3% of the population, around 900,000 people." },
            { letter: "D", text: "(D) About 16 million people (Absolute number)." },
            { letter: "E", text: "(E) 2.4% of the population, and 955,000 people." }
        ],
        correctAnswer: "B", 
        videoUrl: "",
        hints: [
            "Hint 1: Considere qual porcentagem ou número absoluto é grande o suficiente para um dos países com maior população indígena (Peru ou México)."
        ]
    }

];
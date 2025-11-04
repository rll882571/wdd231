const questionBank = [
  {
    id: 1,
    title: "DIGITAL DETOX",
    question: "What is the main idea of the 'Digital Detox' trend?",
    options: [
      "People are spending more time online than ever before.",
      "People are intentionally disconnecting from digital devices to improve well-being.",
      "Technology companies are producing more social media apps.",
      "The internet is becoming less popular."
    ],
    answer: "People are intentionally disconnecting from digital devices to improve well-being."
  },
  {
    id: 2,
    title: "DIGITAL DETOX",
    question: "Why are some people starting to take 'digital detox' breaks?",
    options: [
      "Because their internet connection is weak.",
      "To avoid stress and improve mental health.",
      "To use more social media apps.",
      "Because phones are banned in public spaces."
    ],
    answer: "To avoid stress and improve mental health."
  },
  {
    id: 3,
    title: "CLIMATE MIGRATION",
    question: "What is 'climate migration' mainly caused by?",
    options: [
      "Natural disasters and rising sea levels.",
      "Job opportunities in urban centers.",
      "Political instability and wars.",
      "Technological development."
    ],
    answer: "Natural disasters and rising sea levels."
  },
  {
    id: 4,
    title: "CLIMATE MIGRATION",
    question: "Which problem might increase as a result of climate migration?",
    options: [
      "Decreased population density.",
      "Increased competition for resources.",
      "Improved climate stability.",
      "Reduced pollution levels."
    ],
    answer: "Increased competition for resources."
  },
  {
    id: 5,
    title: "THE EVOLUTION OF SOCIAL MEDIA",
    question: "How has social media changed since its early days?",
    options: [
      "It has become less interactive.",
      "It has evolved into a major platform for information and influence.",
      "It is now used only by young people.",
      "It has completely disappeared from society."
    ],
    answer: "It has evolved into a major platform for information and influence."
  },
  {
    id: 6,
    title: "THE EVOLUTION OF SOCIAL MEDIA",
    question: "What challenge does social media face today?",
    options: [
      "Lack of users.",
      "Misinformation and privacy concerns.",
      "Shorter videos.",
      "Limited internet access."
    ],
    answer: "Misinformation and privacy concerns."
  },
  {
    id: 7,
    title: "NEW GEOPOLITICAL TENSIONS",
    question: "What is one reason for the recent increase in geopolitical tensions?",
    options: [
      "Global peace treaties.",
      "Rising nationalism and cyberattacks.",
      "Falling economic inequality.",
      "Technological cooperation among nations."
    ],
    answer: "Rising nationalism and cyberattacks."
  },
  {
    id: 8,
    title: "NEW GEOPOLITICAL TENSIONS",
    question: "What makes diplomacy increasingly important in today’s world?",
    options: [
      "The reduction of military spending.",
      "The spread of global entertainment.",
      "The presence of nuclear weapons and hacking threats.",
      "The fall of international trade."
    ],
    answer: "The presence of nuclear weapons and hacking threats."
  },
  {
    id: 9,
    title: "SAFE CAR TRAVEL",
    question: "What is one challenge related to the rise of driverless cars?",
    options: [
      "Reducing the number of airplanes.",
      "Ensuring safety and preventing accidents.",
      "Decreasing train travel.",
      "Promoting the use of bicycles."
    ],
    answer: "Ensuring safety and preventing accidents."
  },
  {
    id: 10,
    title: "SAFE CAR TRAVEL",
    question: "Why might pollution become a greater issue in the future?",
    options: [
      "Because there will be fewer public transport options.",
      "Because more people will own and use cars.",
      "Because of the development of electric vehicles.",
      "Because driverless cars don’t need fuel."
    ],
    answer: "Because more people will own and use cars."
  },
  {
    id: 11,
    title: "SETTLING OTHER WORLDS",
    question: "What major goal is discussed in 'Settling Other Worlds'?",
    options: [
      "Developing new social media.",
      "Sending humans to live on Mars or other planets.",
      "Building underwater cities.",
      "Improving Earth’s transportation systems."
    ],
    answer: "Sending humans to live on Mars or other planets."
  },
  {
    id: 12,
    title: "SETTLING OTHER WORLDS",
    question: "Why is safety an important concern for space tourism?",
    options: [
      "Because tourists might damage space stations.",
      "Because accidents in space can be fatal and difficult to manage.",
      "Because space tourism is not popular yet.",
      "Because astronauts don’t like tourists."
    ],
    answer: "Because accidents in space can be fatal and difficult to manage."
  },
  {
    id: 13,
    title: "AI AND JOBS",
    question: "What is a common fear about artificial intelligence and jobs?",
    options: [
      "AI will make people happier.",
      "AI will replace human workers in many fields.",
      "AI will stop being developed.",
      "AI will increase the need for manual labor."
    ],
    answer: "AI will replace human workers in many fields."
  },
  {
    id: 14,
    title: "AI AND JOBS",
    question: "Which advantage might AI bring to the workplace?",
    options: [
      "More mistakes and slower work.",
      "Greater efficiency and automation.",
      "Fewer opportunities for innovation.",
      "Less access to information."
    ],
    answer: "Greater efficiency and automation."
  },
  {
    id: 15,
    title: "DIGITAL DETOX",
    question: "What does the term 'digital detox' suggest about modern life?",
    options: [
      "People are becoming less connected.",
      "Technology use can become overwhelming.",
      "Phones are disappearing.",
      "The internet has stopped growing."
    ],
    answer: "Technology use can become overwhelming."
  },
  {
    id: 16,
    title: "CLIMATE MIGRATION",
    question: "What is one challenge for countries receiving climate migrants?",
    options: [
      "Decreasing housing demand.",
      "Providing jobs and infrastructure for newcomers.",
      "Reduced urban population.",
      "Less political attention."
    ],
    answer: "Providing jobs and infrastructure for newcomers."
  },
  {
    id: 17,
    title: "THE EVOLUTION OF SOCIAL MEDIA",
    question: "How has social media affected the way people communicate?",
    options: [
      "It made communication slower.",
      "It increased global connectivity and instant sharing.",
      "It ended the need for communication.",
      "It removed written language."
    ],
    answer: "It increased global connectivity and instant sharing."
  },
  {
    id: 18,
    title: "NEW GEOPOLITICAL TENSIONS",
    question: "What kind of events are increasing global instability?",
    options: [
      "International sports competitions.",
      "Cyberattacks, refugee crises, and nationalism.",
      "New environmental treaties.",
      "Improved trade agreements."
    ],
    answer: "Cyberattacks, refugee crises, and nationalism."
  },
  {
    id: 19,
    title: "SAFE CAR TRAVEL",
    question: "What is one reason for the growing number of cars in the world?",
    options: [
      "Decreasing population.",
      "Growing middle class in developing countries.",
      "The fall of the tech industry.",
      "Banning public transport."
    ],
    answer: "Growing middle class in developing countries."
  },
  {
    id: 20,
    title: "SETTLING OTHER WORLDS",
    question: "Why might space travel become more common in the future?",
    options: [
      "Because it is becoming cheaper and more accessible.",
      "Because Earth is becoming colder.",
      "Because the Moon is developing cities.",
      "Because people dislike airplanes."
    ],
    answer: "Because it is becoming cheaper and more accessible."
  }
];

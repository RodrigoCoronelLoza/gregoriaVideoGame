const titlesData = {
  0: "",
  1: "TitleB",
  2: "TitleC",
  3: "TitleD",
  4: "TitleE",
  5: "TitleF",
  6: "TitleG",
  7: "TitleH",
};
const layoutData = {
  0: "Alayout",
  1: "Blayout",
  2: "Clayout",
  3: "Dlayout",
  4: "Elayout",
  5: "Flayout",
  6: "Glayout",
  7: "Hlayout",
};

const textData = {
  0: "",
  1: {
    // Page 1 (B layout)
    questions: [
      {
        question: "¿Cuál es la capital de Francia?",
        options: ["Madrid", "París", "Roma", "Berlín"],
        correctAnswer: 1, // Index of correct answer (París)
        explanation: "París es la capital de Francia desde el siglo XII.",
      },
      {
        question: "¿Qué planeta es conocido como el planeta rojo?",
        options: ["Venus", "Marte", "Júpiter", "Saturno"],
        correctAnswer: 1, // Marte
        explanation:
          "Marte es llamado el planeta rojo debido al óxido de hierro en su superficie.",
      },
    ],
  },
  2: {
    questions: [
      {
        question: "CSS can only be used for styling web pages.",
        answer: false,
        explanation:
          "CSS can also be used for print styles, animations, and even some basic interactions.",
      },
      {
        question:
          "The 'position: absolute' property removes an element from the normal document flow.",
        answer: true,
        explanation:
          "Elements with 'position: absolute' are removed from the normal document flow.",
      },
      {
        question: "CSS Grid and Flexbox serve the exact same purpose.",
        answer: false,
        explanation:
          "CSS Grid is for two-dimensional layouts, while Flexbox is primarily for one-dimensional layouts.",
      },
    ],
  },
  3: {
    pairs: [
      {
        left: "España",
        right: "Madrid",
      },
      {
        left: "Francia",
        right: "París",
      },
      {
        left: "Italia",
        right: "Roma",
      },
      {
        left: "Alemania",
        right: "Berlín",
      },
      {
        left: "Portugal",
        right: "Lisboa",
      },
    ],
  },
  4: {
    // or whatever page number uses E layout
    sentences: [
      {
        fragments: [
          "La tecnología moderna",
          "ha revolucionado",
          "la forma en que",
          "nos comunicamos diariamente",
        ],
        hint: "Tema: Impacto de la tecnología en la comunicación",
        explanation:
          "La oración debe seguir el orden: sujeto + verbo + complemento + adverbio.",
      },
      {
        fragments: [
          "El cambio climático",
          "representa uno de",
          "los mayores desafíos",
          "de nuestro tiempo",
        ],
        hint: "Tema: Problemas ambientales actuales",
        explanation:
          "La estructura correcta es: sujeto + verbo + objeto directo + complemento circunstancial.",
      },
      // {
      //   fragments: [
      //     "Los estudiantes",
      //     "deben desarrollar",
      //     "habilidades críticas",
      //     "para el siglo XXI",
      //   ],
      //   hint: "Tema: Educación y competencias futuras",
      //   explanation:
      //     "El orden lógico es: sujeto + verbo auxiliar + objeto directo + complemento.",
      // },
      // {
      //   fragments: [
      //     "La inteligencia artificial",
      //     "transformará radicalmente",
      //     "muchas industrias",
      //     "en los próximos años",
      //   ],
      //   hint: "Tema: Futuro de la tecnología",
      //   explanation:
      //     "Estructura: sujeto + verbo + objeto directo + complemento temporal.",
      // },
      // {
      //   fragments: [
      //     "Una alimentación balanceada",
      //     "es fundamental para",
      //     "mantener una buena salud",
      //     "a lo largo de la vida",
      //   ],
      //   hint: "Tema: Importancia de la nutrición",
      //   explanation:
      //     "La oración sigue el patrón: sujeto + verbo copulativo + predicado + complemento.",
      // },
    ],
  },
  5: {
    recipe: {
      title: "Cómo hacer café",
      description: "Ordena los pasos para preparar una taza de café perfecta",
      steps: [
        "Paso 1",
        "Paso 2",
        "Paso 3",
        // "Añadir el café molido al filtro",
        // "Verter el agua caliente lentamente sobre el café",
        // "Esperar a que termine de filtrar",
        // "Servir en una taza y disfrutar",
      ],
    },
  },
  6: {
    phrases: [
      {
        template: "La {0} es fundamental para el {1} de cualquier {2}.",
        blanks: [
          {
            word: "educación",
            hint: "proceso de aprendizaje",
          },
          {
            word: "desarrollo",
            hint: "crecimiento",
          },
          {
            word: "sociedad",
            hint: "comunidad",
          },
        ],
        words: [
          "educación",
          "desarrollo",
          "sociedad",
          "tecnología", // distractor
          "economía", // distractor
          "política", // distractor
        ],
        hint: "Importancia de la educación",
        explanation:
          "La educación es la base del progreso social y permite el desarrollo integral de las personas.",
      },
      {
        template: "La {0} es fundamental para el {1} de cualquier sociedad.",
        blanks: [
          {
            word: "educación",
            hint: "proceso de aprendizaje",
          },
          {
            word: "desarrollo",
            hint: "crecimiento",
          },
        ],
        words: [
          "educación",
          "desarrollo",
          "tecnología", // distractor
          "economía", // distractor
          "política", // distractor
        ],
        hint: "Importancia de la educación",
        explanation:
          "La educación es la base del progreso social y permite el desarrollo integral de las personas.",
      },
    ],
  },
  // 7: {
  //   memoryImages: [
  //     "🍎", // Apple
  //     "🍌", // Banana
  //     "🍇", // Grapes
  //     "🍓", // Strawberry
  //     // "🍊", // Orange
  //     // "🥝", // Kiwi
  //     // "🍑", // Cherry
  //     // "🍍", // Pineapple
  //   ],
  // },
  7: {
    memoryImages: [
      "../images/apple.jpg",
      "../images/banana.jpg",
      "../images/grapes.jpg",
      "../images/strawberry.jpg",
    ],
  },
};
const audioData = {
  0: "",
  1: "audios/audiointro.mp3",
  2: "audios/audiopage2.mp3",
  3: "",
  4: "",
  5: "",
};

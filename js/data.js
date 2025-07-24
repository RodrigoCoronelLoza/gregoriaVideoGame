const titlesData = {
  0: "",
  1: "",
  2: "",
  3: "TitleB",
  4: "TitleC",
  5: "TitleD",
  6: "TitleE",
  7: "TitleF",
  8: "TitleG",
  9: "TitleH",
  10: "TitleX",
};
const layoutData = {
  0: "Alayout",
  1: "Ilayout",
  2: "Ilayout",
  3: "Jlayout",
  4: "Blayout",
  5: "Dlayout",
  6: "Hlayout",
  7: "Dlayout",
  8: "Blayout",
  9: "Clayout",
};
const instruccionesData = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "María estaba más callada, evita ciertas conversaciones y ya no se queda con nosotras en los recreos. ¿Qué hubieras hecho tú?",
  6: "Explora las páginas del diario de María. ¿Qué te está intentando decir?",
  7: "Relaciona las frases del diario de María con las emociones que podrían reflejar.",
  8: "",
  9: "Lee las frases a continuación y responde si son verdaderas o falsas:",
};
const feedbackData = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "Prestar atención, no minimizar lo que se cuenta, crear un espacio seguro y ofrecer orientación profesional son formas efectivas de acompañar.",
  6: "Estas frases reflejan emociones profundas que muchas veces se callan. Reconocerlas es el primer paso para pedir ayuda",
  7: "Identificar emociones es el primer paso para pedir ayuda. Reconocer estas frases puede ayudarnos a detectar señales ocultas en personas cercanas",
  8: "",
};

// const layoutData = {
//   0: "Alayout",
//   1: "Ilayout",
//   2: "Ilayout",
//   3: "Jlayout",
//   4: "Blayout",//SELECCION MULTIPLE
//   5: "Clayout",//TRUE/FALSE
//   6: "Dlayout",//PAREJAS CORRECTAS
//   7: "Elayout",
//   8: "Flayout",
//   9: "Glayout",
//   10: "Hlayout",//MEMORIA
//   11: "Xlayout",
// };

const historyData = {
  0: "AAALorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
  1: "Esto no es un juego. Es una carrera contra el tiempo. Debes atar cabos, leer entre líneas y tomar decisiones que podrían cambiar una historia que aún no termina.   ",
  2: "María es muy lista y amable. Su risa es inconfundible, sus dibujos muy bonitos y de paso es muy graciosa. Sin embargo, cuando se falto a clases por primera vez ni lo notamos. La empezamos extrañar después de que se perdió el examen de matemáticas. Luego incluso cuando venía, parecía no estar con nosotros. </br></br>Finalmente un día solo vino su papá y nadie supo dar respuestas. </br></br> Este juego busca comprender. Porque detrás de cada historia de violencia hay señales que fueron ignoradas. </br> Podrás jugar desde el punto de vista de Mónica, una compañera, o de Miguel, el hermano mayor. Ambos te llevarán por caminos distintos, pero con un objetivo común: hallar a María, saber la verdad y activar un cambio.",
  3: "María es muy lista y amable. Su risa es inconfundible, sus dibujos muy bonitos y de paso es muy graciosa. Sin embargo, cuando se falto a clases por primera vez ni lo notamos. La empezamos extrañar después de que se perdió el examen de matemáticas. Luego incluso cuando venía, parecía no estar con nosotros. </br></br>Finalmente un día solo vino su papá y nadie supo dar respuestas. </br></br> Este juego busca comprender. Porque detrás de cada historia de violencia hay señales que fueron ignoradas. </br> Podrás jugar desde el punto de vista de Mónica, una compañera, o de Miguel, el hermano mayor. Ambos te llevarán por caminos distintos, pero con un objetivo común: hallar a María, saber la verdad y activar un cambio.",
  4: "Al principio eran cosas pequeñas: dejó de reírse con nuestros chistes, y sus respuestas eran vagas y sarcásticas.",
  5: "Monica piensa: </br> Noté que algo pasó, pero no pregunté mucho más. Quizás lo  hubiera hecho si hubieramos sido más amigas, pero siempre estaba ocupada en el puesto de su familia. </br></br>Mónica observa el pupitre vacío donde solía sentarse María.",
  6: "Cuando la profe Inés me pidió que devolviera esa libreta extraviada y sin nombre, me fue difícil reconocer su letra... pero estaba segura que era de ella. No es un cuaderno de clases, sino un Diario personal. Aún no logro descifrarlo por completo.",
  7: "¿Acaso fui tan ciega? Ni siquiera puedo creer que sea su cuaderno. Los suyos siempre eran tan pulcros, mientras este es... Con razón ni la profe Inés se dio cuenta.”</br>“No entiendo todo lo que escribió, pero sí la siento a ella. </br> Guardaré este cuaderno por ahora",
  8: "Un día, un extraño vino esperarla a la salida y se fueron juntos en un auto. Yo pensaba que era su hermano mayor, el que vive en Viacha, pero luego me enteré que no era él.",
  9: "Poco después de aquella vez que la vinieron a recoger, María apareció con un celular nuevo. Con un estuche verde y una cámara muy buena. “Me la regaló un admirador”, dijo haciendose la interesante. Luisa me susurró: “Su chico ha debido ser para que puedan hablar sin que sus papás se enteren”.</br> </br>En ese momento,  sentí envidia. Pensé que era emocionante tener un teléfono solo para ti, sin que nadie lo controle. Deberia buscar ese numero talvez si la llamo allí si conteste.",
  10: "HHHLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
  11: "XXXLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
};

const textData = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: {
    // Page 1 (B layout)
    questions: [
      {
        question:
          "¿Cuáles de estas señales podrían indicar que una amiga o amigo podría no estar atravesando una situación de violencia o control?",
        options: [
          "Cambios repentinos en el ánimo o comportamiento",
          "Dejar de hablar con sus amistades sin razón clara",
          "Comenzar a recibir regalos de personas adultas desconocidas ",
          "Reírse más de lo habitual y socializar más",
          "Evitar hablar de alguien con quien antes se veía mucho",
          " Contestar mensajes a escondidas, con nerviosismo",
        ],
        correctAnswer: 3, // Index of correct answer (París)
        explanation:
          "Reírse más no suele ser una señal de violencia. La clave está en observar cambios inusuales o evasivos.",
      },
    ],
  },
  5: {
    pairs: [
      {
        left: "Evita juzgar o",
        right: "minimizar lo que cuenta",
      },
      {
        left: "Elige un momento seguro",
        right: "y privado para hablar",
      },
      {
        left: "Observar con atención",
        right: "tratar de brindar apoyo y empatía",
      },
      {
        left: "Ayuda a buscar",
        right: "apoyo profesional o institucional",
      },
    ],
  },
  6: {
    memoryImages: ["apple.jpg", "banana.jpg", "grapes.jpg", "strawberry.jpg"],
  },
  7: {
    pairs: [
      {
        left: "A veces quiero hablar, pero no sé si me creerían.",
        right: "Inseguridad",
      },
      {
        left: "Si mis amigas supieran todo... ",
        right: "Ansiedad",
      },
      {
        left: "Cada vez que borro un mensaje, siento que me borro a mí misma. ",
        right: "Confusión",
      },
    ],
  },
  8: {
    // Page 1 (B layout)
    questions: [
      {
        question:
          "¿Ves a una amiga subir a un auto con un hombre adulto que no reconoces. Ella dice que es “un conocido”. ¿Qué opción refleja una actitud responsable?",
        options: [
          "Hablar con una persona adulta de confianza o con un profesor/a.",
          "No decir nada. Si ella confía, yo también debo confiar",
          "Grabar al hombre por si algo pasa",
          "Bromear con el grupo sobre su “novio secreto”",
        ],
        correctAnswer: 1, // Index of correct answer (París)
        explanation:
          "Cuando algo nos hace ruido o nos preocupa, incluso si no estamos seguros, lo mejor es hablar con una persona adulta de confianza. Prevenir es cuidar",
      },
    ],
  },
  9: {
    questions: [
      {
        question:
          "Es normal que un adulto regale un celular a una menor si tiene buenas intenciones.",
        answer: false,
        explanation:
          "A veces, lo que parece un gesto romántico puede ser el inicio de una relación basada en control y secreto. Si una persona evita a tu familia, impone el silencio o te aísla con regalos, es momento de encender las alertas. ",
      },
      {
        question:
          "Un regalo no siempre es un gesto de afecto; puede ser una forma de ganar confianza.",
        answer: true,
        explanation:
          "A veces, lo que parece un gesto romántico puede ser el inicio de una relación basada en control y secreto. Si una persona evita a tu familia, impone el silencio o te aísla con regalos, es momento de encender las alertas. ",
      },
      {
        question:
          "Si alguien pide que ocultes un teléfono a tu familia, podría estar ocultando algo más.",
        answer: true,
        explanation:
          "A veces, lo que parece un gesto romántico puede ser el inicio de una relación basada en control y secreto. Si una persona evita a tu familia, impone el silencio o te aísla con regalos, es momento de encender las alertas. ",
      },
      {
        question:
          "Aceptar un regalo implica aceptar cualquier contacto o mensaje de la otra persona.",
        answer: false,
        explanation:
          "A veces, lo que parece un gesto romántico puede ser el inicio de una relación basada en control y secreto. Si una persona evita a tu familia, impone el silencio o te aísla con regalos, es momento de encender las alertas. ",
      },
      {
        question:
          "Si una relación te hace sentir que debes esconder cosas, puede que no sea segura.",
        answer: true,
        explanation:
          "A veces, lo que parece un gesto romántico puede ser el inicio de una relación basada en control y secreto. Si una persona evita a tu familia, impone el silencio o te aísla con regalos, es momento de encender las alertas. ",
      },
    ],
  },
};



/*const textData = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: {
    // Page 1 (B layout)
    questions: [
      {
        question:
          "¿Cuáles de estas señales podrían indicar que una amiga o amigo podría no estar atravesando una situación de violencia o control?",
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
  5: {
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
  6: {
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
  7: {
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
  8: {
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
  9: {
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
  10: {
    memoryImages: ["apple.jpg", "banana.jpg", "grapes.jpg", "strawberry.jpg"],
  },
  11: "",
};*/
const audioData = {
  0: "",
  1: "audios/audiointro.mp3",
  2: "audios/audiopage2.mp3",
  3: "",
  4: "",
  5: "",
};

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
  10: "Elayout",
  11: "Flayout",
  12: "Dlayout",
  13: "Blayout",
  14: "Hlayout",
  15: "Clayout",
  16: "Dlayout",
  17: "Flayout",
  18: "Blayout",
  19: "Blayout",
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
  10: "",
  11: "¿Qué pensamientos pudo tener María al decidir no contar nada? Ordena estas frases como crees que ella lo sintió.",
  12: "Lee estas frases y decide si representan amor sano o señales de alerta. Une cada una con su interpretación real.",
  13: "",
  14: "Encuentra las parejas que revelan mensajes escondidos entre las publicaciones eliminadas. ¿Qué imágenes y frases podrían haber sido señales?",
  15: "¿Puedes reconocer cuáles de estas afirmaciones son señales de una cultura del silencio que puede poner en riesgo a alguien?",
  16: "Lee cada pensamiento o creencia y une con su reflexión correcta. ¿Qué aprendizaje puedes extraer de esta situación?",
  17: "Ordena estas frases en la secuencia que revela cómo se fue ocultando y normalizando una relación que debería haber despertado alertas.",
  18: "",
  19: "",
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
  9: "",
  10: "",
  11: "A veces el silencio no es decisión, es miedo aprendido.”",
  12: "¡Bien! El amor no necesita pruebas ni control. Reconocer estos mitos nos ayuda a prevenir relaciones dañinas.",
  13: "",
  14: "Muchos jóvenes no pueden contar lo que viven, pero sus redes sí lo gritan. Presta atención a los cambios, símbolos y silencios.",
  15: "",
  16: "La lealtad verdadera también se demuestra cuando ayudamos a quien no puede pedir ayuda abiertamente",
  17: "Las relaciones que comienzan con secretos, aislamiento y control suelen escalar. Identificar estos patrones es clave para prevenir daños",
  18: "",
  19: "",
};

// const layoutData = {
//   0: "Alayout",
//   1: "Ilayout",
//   2: "Ilayout",
//   3: "Jlayout",
//   4: "Blayout",//SELECCION MULTIPLE
//   5: "Clayout",//TRUE/FALSE
//   6: "Dlayout",//PAREJAS CORRECTAS
//   7: "Elayout",//ORDENAR FRAGMENTOS DE UNA ORACION
//   8: "Flayout",//ORDENAR PASOS
//   9: "Glayout",
//   10: "Hlayout",//MEMORIA
//   11: "Xlayout",
// };

const historyData = {
  0: "AAALorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
  1: "Esto no es un juego. Es una carrera contra el tiempo. Debes atar cabos, leer entre líneas y tomar decisiones que podrían cambiar una historia que aún no termina.   ",
  2: "María es muy lista y amable. Su risa es inconfundible, sus dibujos muy bonitos y de paso es muy graciosa. Sin embargo, cuando se falto a clases por primera vez ni lo notamos. La empezamos extrañar después de que se perdió el examen de matemáticas. Luego incluso cuando venía, parecía no estar con nosotros. </br></br>Finalmente un día solo vino su papá y nadie supo dar respuestas. </br></br> Este juego busca comprender. Porque detrás de cada historia de violencia hay señales que fueron ignoradas. </br> Podrás jugar desde el punto de vista de Mónica, una compañera, o de Miguel, el hermano mayor. Ambos te llevarán por caminos distintos, pero con un objetivo común: hallar a María, saber la verdad y activar un cambio.",
  3: "",
  4: "Al principio eran cosas pequeñas: dejó de reírse con nuestros chistes, y sus respuestas eran vagas y sarcásticas.",
  5: "Monica piensa: </br> Noté que algo pasó, pero no pregunté mucho más. Quizás lo  hubiera hecho si hubieramos sido más amigas, pero siempre estaba ocupada en el puesto de su familia. </br></br>Mónica observa el pupitre vacío donde solía sentarse María.",
  6: "Cuando la profe Inés me pidió que devolviera esa libreta extraviada y sin nombre, me fue difícil reconocer su letra... pero estaba segura que era de ella. No es un cuaderno de clases, sino un Diario personal. Aún no logro descifrarlo por completo.",
  7: "¿Acaso fui tan ciega? Ni siquiera puedo creer que sea su cuaderno. Los suyos siempre eran tan pulcros, mientras este es... Con razón ni la profe Inés se dio cuenta.”</br>“No entiendo todo lo que escribió, pero sí la siento a ella. </br> Guardaré este cuaderno por ahora",
  8: "Un día, un extraño vino esperarla a la salida y se fueron juntos en un auto. Yo pensaba que era su hermano mayor, el que vive en Viacha, pero luego me enteré que no era él.",
  9: "Poco después de aquella vez que la vinieron a recoger, María apareció con un celular nuevo. Con un estuche verde y una cámara muy buena. “Me la regaló un admirador”, dijo haciendose la interesante. Luisa me susurró: “Su chico ha debido ser para que puedan hablar sin que sus papás se enteren”.</br> </br>En ese momento,  sentí envidia. Pensé que era emocionante tener un teléfono solo para ti, sin que nadie lo controle. Deberia buscar ese numero talvez si la llamo allí si conteste.",
  10: "Después de todo lo que había visto, decidí hablar con las chicas que más estaban con María. Tal vez alguna tuviera su número, o supiera algo más del chico del celular rosado.”“Pero todas se miraron con caras largas, incómodas. Nadie dijo nada por un rato.”</br>Mónica: —¿Ninguna sabe cómo contactarla?</br>Luisa (tras una pausa): —Ya no hablaba tanto con nosotras… últimamente estaba muy rara.",
  11: "Luisa fue la primera en hablar:</br></br>—No le pedí el número… ya me olía que no me lo iba a dar.</br>—Se ha escapado con su chico de seguro —dijo la de Acshon.</br>—¿Pero cuál chico? —pregunté. Nadie supo decirme. Solo risas incómodas. </br>Y nadie me supo responder con certeza. Entre risas incómodas y silencios largos, me quedó claro que sabían menos de lo que pensaban… o no querían aceptar lo que ya sospechaban. nada nuevo",
  12: "Entonces recordamos una charla que habíamos tenido semanas atrás, mientras esperábamos el micro. Luisa estaba molesta porque se había peleado con Ramiro, su chico. En medio del chisme, María soltó una frase que ahora nos retumbaba en la cabeza: </br> —“No te enojes porque te cela, si no fuera celoso deberías preocuparte. Es porque te quiere mucho que se intensea”.</br></br>Ese rato nos reimos, pero ahora… solo nos quedamos calladas.",
  13: "Narración interna de Mónica:</br>—Buscando en su Insta, noté que había eliminado casi todo. La última foto no era selfie, sino una tomada por alguien más. María señalaba algo fuera del cuadro. El pie de foto decía: “Lo mejor nunca se sube ;)”",
  14: "Buscando en su Insta, recién noté que María había borrado muchas selfies, como si borrara capítulos de su vida. La última imagen no era selfie, sino una foto tomada hace unos tres meses por alguien más. En ella aparece señalando algo fuera de cuadro. En el pie de foto - ‘Lo mejor nunca se sube ;)’",
  15: "Mientras veíamos esa foto notamos que Luisa se le escapó un grito ahogado. Con lo blanca que se puso blanca, no tuvimos que increparla. Ella sabía que sabíamos que sabía algo. </br></br> Bajó la mirada y se quedó en silencio. Luego, con voz baja, me confesó que al principio  María le pedía que la cubriera cuando salía con “su patito”, así le decía. “Luego solo se empezó a faltar sin más“</br></br>Luisa pensaba que la estaba ayudando, que era una sororidad entre amigas con chicos.",
  16: "Por su parte, Laura igual admitió que María le pidió cubrirla una vez, pero ella no lo hizo.</br></br>- Me dió miedo y por eso tampoco la acusé, solo no me quería meter en problemas.",
  17: "Le preguntamos por detalles, y en realidad no sabía mucho del patito</br></br>-Siempre le pedi chisme, pero nunca me dijo nada. Solo sé que no viene a nuestro cole, y por eso se escapaban. </br></br>-A qué cole irá? - Preguntó la de Laura </br></br>-Y si ese chico no va al colegio? - Pregunté, recordando al chico del auto.",
  18: "Nos despedimos sin encontrar una respuesta a mi pregunta… pero en sus silencios había más de lo que querían admitir.",
  19: "Dos días despúes vino un joven a preguntar por María, era su hermano Miguel. Parece que los profesores no le dejaron entrar a hablar con la clase. En especial desde que su papá vino a amenzar al director. María no solía hablar mucho de él,  pero Luisa lo reconoció. Cuando estaba partiendo, vi en su mano el celular rosado. ",
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
  10: {
    sentences: [
      {
        fragments: [
          "“Entiendo",
          "que tengan miedo, ",
          "pero si saben algo,",
          "pueden confiar en mí.” ",
        ],
        hint: "¿Cómo debería responder Mónica ante el silencio de sus compañeras? Organiza la oración",
        explanation:
          "Fomenta confianza y puede desbloquear a Luisa en una siguiente escena",
      },
    ],
  },
  11: {
    recipe: {
      title: "",
      description:
        "¿Qué pensamientos pudo tener María al decidir no contar nada? Ordena estas frases como crees que ella lo sintió.",
      steps: [
        "No todos entenderían esta relación.",
        "Mejor no contarle a mis amigas, pueden pensar mal.",
        "Él dice que solo me quiere a mí, por eso quiere que sea secreto.",
        "Mis papás no lo aceptarían, son muy estrictos.",
        "Tal vez así es el amor, con un poco de miedo.",
        // "Añadir el café molido al filtro",
        // "Verter el agua caliente lentamente sobre el café",
        // "Esperar a que termine de filtrar",
        // "Servir en una taza y disfrutar",
      ],
    },
  },
  12: {
    pairs: [
      {
        left: "“Te celo porque me importas.” ",
        right: "Los celos no son amor, son una forma de control emocional.",
      },
      {
        left: "“Si no me cuentas todo, no confías en mí.” ",
        right: "Obligar a contar todo es invadir la privacidad.",
      },
      {
        left: "“Prefiero que no hables con otros chicos.”",
        right: "Aislar a alguien es una forma de manipulación.",
      },
      {
        left: "“Si de verdad me amas, debes demostrarlo.”",
        right: "El chantaje emocional no es prueba de amor.",
      },
    ],
  },
  13: {
    // Page 1 (B layout)
    questions: [
      {
        question:
          "Revisa el perfil de María. ¿Qué comportamientos digitales podrían ser señales de alerta? Marca los que correspondan.",
        options: [
          "Eliminar muchas fotos sin explicación ",
          "Cambiar frases por mensajes en doble sentido",
          "Dejar una foto señalando algo fuera del cuadro ",
          "Usar emojis ambiguos o frases como “todo bien” cuando no parece estarlo ",
          "No subir fotos nunca ",
        ],
        correctAnswer: 1, // Index of correct answer (París)
        explanation:
          "Tener redes privadas o pocas publicaciones no es una señal en sí. Pero los cambios repentinos sí pueden serlo",
      },
    ],
  },
  14: {
    memoryImages: ["apple.jpg", "banana.jpg", "grapes.jpg", "strawberry.jpg"],
  },
  15: {
    questions: [
      {
        question: "“Si ella me lo pidió, debe estar bien.”",
        answer: false,
        explanation:
          "A veces, el silencio se disfraza de amistad. Pero la verdadera lealtad es cuidar y proteger, incluso cuando eso implique romper secretos que lastiman",
      },
      {
        question:
          "“No quiero traicionar su confianza, por eso no cuento nada.”",
        answer: false,
        explanation:
          "A veces, el silencio se disfraza de amistad. Pero la verdadera lealtad es cuidar y proteger, incluso cuando eso implique romper secretos que lastiman",
      },
      {
        question:
          "“Si algo me hace sentir incómoda, debería hablarlo con un adulto de confianza.”",
        answer: true,
        explanation:
          "A veces, el silencio se disfraza de amistad. Pero la verdadera lealtad es cuidar y proteger, incluso cuando eso implique romper secretos que lastiman",
      },
      {
        question:
          "“Cubrir a una amiga aunque sospeche que está en problemas es ser leal.” ",
        answer: false,
        explanation:
          "A veces, el silencio se disfraza de amistad. Pero la verdadera lealtad es cuidar y proteger, incluso cuando eso implique romper secretos que lastiman",
      },
    ],
  },
  16: {
    pairs: [
      {
        left: "Guardar secretos puede parecer leal ",
        right: " …pero también puede ser peligroso.",
      },
      {
        left: "Si hay señales de alarma ",
        right: "…buscar ayuda puede salvar vidas.",
      },
      {
        left: "Escuchar con atención y sin juzgar ",
        right: "…puede ser una puerta para ayudar. ",
      },
    ],
  },
  17: {
    recipe: {
      title: "",
      description:
        "Ordena estas frases en la secuencia que revela cómo se fue ocultando y normalizando una relación que debería haber despertado alertas.",
      steps: [
        "María lo llama ‘su secreto’.",
        "No quiere que nadie sepa de él.",
        "No estudia en nuestro colegio.",
        "Puede escaparse entre semana.",
        "Le regaló un celular privado.",
        "María dejó de compartir cosas con nosotras.",
      ],
    },
  },
  18: {
    // Page 1 (B layout)
    questions: [
      {
        question:
          "¿Qué factores crees que hacen que muchas personas no denuncien o no actúen cuando notan señales de posible violencia en alguien cercano?",
        options: [
          "Todas las demàs ",
          "Temor a perder la amistad",
          "Falta de confianza en los adultos o instituciones",
          "Pensar que “no es para tanto”",
          "No subir fotos nunca ",
        ],
        correctAnswer: 1, // Index of correct answer (París)
        explanation:
          "Muchas veces, el miedo y la falta de herramientas paralizan. Hablar con respeto, hacer preguntas y buscar apoyo puede marcar la diferencia",
      },
    ],
  },
  19: {
    // Page 1 (B layout)
    questions: [
      {
        question:
          "¿Qué formas respetuosas y seguras existen para brindar apoyo en un caso como este?",
        options: [
          "Acompañarlo a hablar con una persona adulta de confianza",
          "Darle el número de tus amigas para que él las contacte por su cuenta ",
          "Evitar involucrarte porque no es tu problema",
        ],
        correctAnswer: 1, // Index of correct answer (París)
        explanation:
          "Ofrecer escucha, conectar con adultos de confianza y compartir lo justo son formas responsables de ayuda",
      },
    ],
  },
};

const imagesData = {
  0: "intro.png",
  1: "blackback.jpeg",
  2: "blackback.jpeg",
  3: "strawberry.jpg",
  4: "preguntas.png",
  5: "apple.jpg",
  6: "preguntas.png",
  7: "strawberry.jpg",
  8: "banana.jpg",
  9: "apple.jpg",
  10: "grapes.jpg",
  11: "strawberry.jpg",
  12: "banana.jpg",
  13: "apple.jpg",
  14: "grapes.jpg",
  15: "strawberry.jpg",
  16: "banana.jpg",
  17: "apple.jpg",
  18: "banana.jpg",
  19: "grapes.jpg",
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

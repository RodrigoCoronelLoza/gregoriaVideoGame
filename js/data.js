/* RAMA V*/
const titlesVData = {
  1: "TITLE V01",
  2: "TITLE V02",
  3: "TITLE V03",
  4: "TITLE V04",
  5: "TITLE V05",
  6: "TITLE V06",
  7: "TITLE V07",
  9: "TITLE V09",
  10: "TITLE V10",
  11: "TITLE V11",
  12: "TITLE V12",
  13: "TITLE V13",
  14: "TITLE V14",
  15: "TITLE V15",
  16: "TITLE V16",
  17: "TITLE V17",
  18: "TITLE V18",
  19: "TITLE V19",
  20: "TITLE V20",
  21: "TITLE V21",
  22: "TITLE V22",
  23: "TITLE V23",
  24: "TITLE V24",
  25: "TITLE V25",
  26: "TITLE V26",
  27: "TITLE V27",
};

const layoutVData = {
  1: "Alayout",
  2: "Ilayout",
  3: "Klayout",
  4: "Glayout",
  5: "Clayout",
  6: "Llayout",
  7: "Glayout",
  9: "Blayout",
  10: "Glayout",
  11: "Clayout",
  12: "Elayout",
  13: "Glayout",
  14: "Clayout",
  15: "Llayout",
  16: "Blayout",
  17: "Clayout",
  18: "Blayout",
  19: "Blayout",
  20: "Llayout",
  21: "Dlayout",
  22: "Blayout",
  23: "Dlayout",
  24: "Blayout",
  25: "Clayout",
  26: "Xlayout",
  27: "Xlayout",

  // 3: "Llayout",
};

const instructionsVData = {
  1: "",
  2: "",
  3: "",
  4: "Selecciona la palabra correcta para completar la frase. Completa la frase con las palabras correctas para describir la importancia de reunir información en casos de posible violencia o desaparición.",
  5: "Indica si la afirmación es verdadera o falsa.",
  6: "",
  7: "Selecciona la palabra correcta para completar la frase.",
  9: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  10: "Selecciona la palabra correcta para completar la frase. Completa la frase",
  11: "Indica si la afirmación es verdadera o falsa.",
  12: "Arrastra los fragmentos para formar la oración correcta. Ordena los fragmentos para reconstruir la frase que describe la pista encontrada por Mónica y Miguel.",
  13: "Selecciona la palabra correcta para completar la frase. Completa la frase con las palabras correctas según lo que descubrió Miguel.",
  14: "Indica si la afirmación es verdadera o falsa.",
  15: "",
  16: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  17: "Indica si la afirmación es verdadera o falsa.",
  18: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  19: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  20: "",
  21: "Relaciona cada elemento de la primera columna con su par correspondiente en la segunda. Une cada acción con la consecuencia o razón que la respalda.",
  22: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  23: "Relaciona cada elemento de la primera columna con su par correspondiente en la segunda. Une cada conducta con su significado o consecuencia",
  24: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  25: "Indica si la afirmación es verdadera o falsa.",
  26: "",
  27: "",
};

const feedbackVData = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "Ante indicios de riesgo, actuar acompañado y con apoyo institucional es clave para la seguridad de todos. Ir solo o sin informar puede poner en peligro a la persona en riesgo y a quien interviene.",
  22: "",
  23: "El control digital y la vigilancia constante son formas de violencia. No reflejan cuidado, sino una relación desigual que pone en riesgo la autonomía y seguridad de la persona.",
  24: "",
  25: "",
  26: "",
  27: "",
};

const historyVData = {
  1: "",
  2: "Esto no es un juego. Es una carrera contra el tiempo. Debes atar cabos, leer entre líneas y tomar decisiones que podrían cambiar una historia que aún no termina. <br/>En el marco del proyecto: <br/>“Juventudes con voz y poder, por los derechos sexuales y derechos reproductivos y una vida libre de violencias.” <br/><br/>Año: 2025 <br/>Lugar: El Alto – Bolivia ",
  3: "",
  4: "Mónica y Miguel se sientan en un banco del patio, lejos del ruido. <br/> Mónica abre el cuaderno que encontró; las páginas crujen, algunas están manchadas de tinta.<br/>Miguel le cuenta que halló un celular rosado escondido en la habitación de su hermana.<br/>—“Tal vez este cuaderno tenga alguna pista…” —dice Mónica.",
  5: "Mónica baja la mirada y su voz tiembla: “La vi con moretones… dijo que se había caído, pero no le creí del todo.” Miguel aprieta la mandíbula: “En casa nadie le hizo daño. ¡Eso no puede ser!” Un silencio incómodo se instala entre ambos.",
  6: "",
  7: "Deciden revisar más a fondo el cuaderno. Las hojas están rasgadas. Entre tachaduras furiosas, sobresalen frases que parecen pedir ayuda. Miguel pasa las páginas con cuidado, como si fueran a romperse en sus manos.",
  9: "Entre el caos de tinta y tachaduras, encuentran frases que cortan el aire: “Si mis amigas supieran todo…”, “Me dijo que solo con él sería especial.”, “Tengo miedo de decirle que no.” Miguel siente un nudo en la gargant. Miguel decide dejarle las hojas a Monika por si llega a entender algo",
  10: "Revisan el contenido. Está casi vacío: sin fotos, sin chats, sin redes. Solo hay un registro de llamadas recientes: un número con código de Viacha. (Pensamiento de Miguel): “¿Qué hacía María llamando allá… y a quién?”",
  11: "—“Esto no lo borró por accidente. Alguien le pidió que lo hiciera.”<br/>Miguel responde: “O no quería que nadie encontrara algo…”<br/> El silencio entre ambos se vuelve pesado.",
  12: "Entre los pocos registros que quedan, hay un número marcado varias veces. El código es de Viacha. Mónica y Miguel se miran, como si ese dato confirmara un presentimiento que preferirían ignorar.",
  13: "Miguel marca el número. Una voz masculina responde: “Alojamiento San Miguel, buenas tardes.” Su pulso se acelera. Pregunta por la dirección, la anota rápido. Al colgar, se queda mirando el papel, como si en esas letras estuviera la clave de todo.",
  14: "Se miran con una mezcla de rabia y preocupación. Miguel aprieta los puños: “No me voy a quedar de brazos cruzados.” Mónica asiente: “Sea lo que sea, tenemos que seguir investigando. No podemos dejar que esto se quede aquí.”",
  15: "",
  16: "Fuera del colegio Miguel esta buscando alguien con quien hablar1, Mónica lo ve y camina rápido hacia Miguel. <br/> —“No era un novio… es un hombre mucho mayor” —dice Miguel, con la voz quebrada por la rabia.<br/> Mónica se queda helada. Le tiembla la barbilla y, sin poder evitarlo, las lágrimas le nublan la vista.<br/> Saca de su mochila unas hojas arrugadas y manchadas. Miguel lee frases que parecen gritarle en la cara: <br/>No puedo más.<br/>Me dijo que era mi culpa.<br/>Si no lo hago, me deja.",
  17: "Mónica traga saliva y baja la voz: <br/>—“Miguel… creo que María está embarazada.”<br/>Le muestra otras páginas del cuaderno:<br/>Él no quiere que lo tenga.<br/>Me dijo que debería haberme cuidado, pero no sabía qué hacer.<br/>Dice que hay formas de solucionarlo, pero estoy asustada.<br/>Miguel siente cómo la rabia se mezcla con impotencia. Mónica lo mira, intentando contener el temblor en sus manos.<br/>(Pensamiento de Mónica): “Si seguimos la pista, tal vez lleguemos a tiempo… pero no podemos solos.”",
  18: "Se sientan juntos en un rincón apartado. Con ayuda de María, Miguel enciende el celular rosado y reinstala las redes sociales de María.<br/>Al abrir los mensajes, encuentran respuestas de un usuario sin foto de perfil:<br/>—“No hables con nadie más.”<br/>—“Te espero, no tardes.”<br/>La sensación de control y amenaza es clara. Miguel respira hondo para no romper el teléfono de rabia.",
  19: "Entre los mensajes, uno tiene una ubicación: una calle en Viacha.<br/>—“Está cerca del centro… podría ser cualquier lugar” —dice Miguel.<br/>Mónica lo mira con angustia: —“Ojalá no sea demasiado tarde.”",
  20: "",
  21: "Finalmente, van todos con la familia y la policía.<br/>En el auto, el silencio pesa. La madre de María sostiene un pañuelo y mira por la ventana, intentando no derrumbarse.",
  22: "Miguel y su padre se dirigen al lugar mientras su madre presenta la denuncia.<br/>La rabia se transforma en urgencia. Cada segundo parece importar demasiado.",
  23: "En el camino, la policía obtiene un número vinculado al celular de María. Miguel lo reconoce: es el mismo que enviaba mensajes de control.",
  24: "Llegan a la dirección. Preguntando en las inmediaciones, descubren que en la zona hay una clínica clandestina.",
  25: "Golpean la puerta, pero nadie responde. Detrás, Miguel detecta un pasillo que conecta con la casa contigua. Decide entrar.",
  26: "El encargado intenta impedirles el paso. Miguel discute, su padre interviene, y finalmente logran pasar.<br/>Allí, en una habitación pequeña, encuentran a María tirada en la cama, pálida, con signos de hemorragia.",
  27: "Mónica recibe una llamada mientras acompañan a María al hospital:<br/>—“Va a recuperarse” —le dice una enfermera.<br/>Miguel respira aliviado por primera vez en días. Sabe que todo cambiará, pero al menos está viva.",
  // 3: "",
};

const textVData = {
  1: "",
  2: "",
  3: "",
  4: {
    phrases: [
      {
        template:
          "Reunir {0} y {1} puede ayudar a comprender lo que está pasando y buscar apoyo.",
        blanks: [
          {
            word: "pistas",
            hint: "",
          },
          {
            word: "pruebas",
            hint: "",
          },
        ],
        words: ["pistas", "pruebas", "monedas"],
        hint: "",
        explanation: "",
      },
    ],
  },
  5: {
    questions: [
      {
        question:
          "Los moretones, cuando no tienen una explicación clara o coherente, pueden ser una señal de alerta de posible violencia.",
        answer: true,
        explanation:
          "Las lesiones físicas sin una causa creíble o que se repiten en el tiempo deben tomarse en serio. No siempre son accidentes; pueden indicar que la persona está viviendo una situación de violencia y necesita apoyo.",
      },
    ],
  },
  6: [
    "Entre las hojas, ven varios números escritos en los márgenes, algunos rodeados de corazones. Miguel toma el celular y prueba uno de esos números como PIN. La pantalla se desbloquea. Ambos se miran, sorprendidos.",
    "OPCION 1",
    "OPCION 2",
  ],
  7: {
    phrases: [
      {
        template:
          "Las frases incompletas o con {0} pueden ser una forma indirecta de pedir {1}.",
        blanks: [
          {
            word: "tachaduras",
            hint: "",
          },
          {
            word: "ayuda",
            hint: "",
          },
        ],
        words: ["tachaduras", "ayuda", "palabras"],
        hint: "",
        explanation: "",
      },
    ],
  },
  9: {
    questions: [
      {
        question:
          "¿Cuál de estas frases representa claramente una señal de manipulación o control en una relación?",
        options: [
          "Me dijo que solo con él sería especial.",
          "Hoy fuimos a comer con amigos.",
          "Si llueve, nos quedamos en casa.",
          "Fuimos al cine el fin de semana.",
        ],
        correctAnswers: [0], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  10: {
    phrases: [
      {
        template:
          "Registrar detalles como un número {0} o de otra ciudad puede ser clave para identificar una situación de riesgo.",
        blanks: [
          {
            word: "desconocido",
            hint: "",
          },
        ],
        words: ["desconocido", "raro", "largo"],
        hint: "",
        explanation: "",
      },
    ],
  },
  11: {
    questions: [
      {
        question:
          "Borrar fotos, mensajes o contactos de un celular por presión o miedo es una señal de posible control o violencia.",
        answer: true,
        explanation:
          "Cuando una persona elimina información digital por exigencia de otra o por temor a represalias, puede ser un indicador de manipulación o abuso. Es importante identificarlo y buscar ayuda.",
      },
    ],
  },
  12: {
    sentences: [
      {
        fragments: [
          "Encontraron ",
          "un número marcado varias veces",
          "con código de Viacha",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  13: {
    phrases: [
      {
        template:
          "Registrar detalles como un número {0} o de otra ciudad puede ser clave para identificar una situación de riesgo.",
        blanks: [
          {
            word: "desconocido",
            hint: "",
          },
        ],
        words: ["desconocido", "raro", "largo"],
        hint: "",
        explanation: "",
      },
    ],
  },
  14: {
    questions: [
      {
        question:
          "Ante una posible situación de riesgo o violencia, ¿es correcto quedarse sin actuar para “no meterse en problemas”?",
        answer: false,
        explanation:
          "No actuar puede permitir que la violencia continúe. Buscar ayuda y acompañar a la persona en riesgo es fundamental para su seguridad.",
      },
    ],
  },
  15: [
    "15VVVVPregunta dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
    "ELIJO OPCION 111111 ELIJO OPCION 111111 ",
    "ELIJO OPCION 222222 ELIJO OPCION 222222",
  ],
  16: {
    questions: [
      {
        question:
          "¿Cuáles de las siguientes frases indican que una relación es desigual y que existe violencia o coerción?",
        options: [
          "Me dijo que era mi culpa.",
          "Si no lo hago, me deja.",
          "Me escucha y respeta mis decisiones.",
          "No puedo más.",
        ],
        correctAnswers: [0, 1, 3], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  17: {
    questions: [
      {
        question:
          "Una persona menor de edad que ha quedado embarazada como resultado de violencia sexual tiene derecho a decidir interrumpir el embarazo de manera legal y segura en Bolivia.",
        answer: true,
        explanation:
          "En Bolivia, la ley permite la interrupción legal del embarazo en casos de violación, incesto o cuando la salud de la persona gestante esté en riesgo, sin necesidad de autorización judicial. Conocer estos derechos es clave para proteger la autonomía corporal y prevenir más violencia.",
      },
    ],
  },
  18: {
    questions: [
      {
        question:
          "¿Cuáles de estas son señales de que una relación puede ser controladora o violenta en entornos digitales?",
        options: [
          "Revisar o exigir acceso a las redes sociales de la otra persona",
          "Enviar mensajes ordenando con quién puede o no hablar",
          "Pedir fotos o información privada bajo presión ",
          "Respetar el espacio y las decisiones de la otra persona ",
        ],
        correctAnswers: [0, 1, 2],
        explanation: "",
      },
    ],
  },
  19: {
    questions: [
      {
        question:
          "En un caso de posible control o violencia, recibir una ubicación enviada por un contacto que ejerce presión o amenaza puede significar:",
        options: [
          "Una señal de que la persona está en riesgo y podría estar siendo vigilada.",
          "Una forma de mantener el contacto para planificar actividades seguras.",
          "Una posible pista para que familiares o autoridades localicen a la persona.",
          "Una manera inocente de compartir lugares que le gustan.",
        ],
        correctAnswers: [0, 2],
        explanation: "",
      },
    ],
  },
  20: [
    "¿A quién acudir primero con la dirección?",
    "A la familia de María para actuar juntos.",
    "Directo a la policía para no perder tiempo.",
  ],
  21: {
    pairs: [
      {
        left: "Avisar a un adulto de confianza o a las autoridades ",
        right: "Permite actuar con apoyo y seguridad. ",
      },
      {
        left: "Ir de inmediato sin avisar a nadie ",
        right: "Aumenta el riesgo y dificulta la intervención. ",
      },
      {
        left: "Compartir la ubicación con la policía ",
        right: "Facilita la localización y respuesta rápida.",
      },
      {
        left: "Coordinar el traslado con personas adultas ",
        right: "Reduce peligros y mejora la protección.",
      },
    ],
  },
  22: {
    questions: [
      {
        question:
          "Cuando existe la sospecha de que una menor de edad está en una situación de violencia o abuso, ¿qué acciones son correctas tomar?",
        options: [
          "Avisar a su familia o a un adulto de confianza",
          "Contactar a la policía u otras autoridades competentes",
          "Guardar silencio para “no meterse en problemas”",
          "Actuar sin compañía ni apoyo de un adulto ",
        ],
        correctAnswers: [0, 1],
        explanation: "",
      },
    ],
  },
  23: {
    pairs: [
      {
        left: "Revisar constantemente el celular de la pareja",
        right: "Vulnerar la privacidad y ejercer control.",
      },
      {
        left: "Controlar con quién habla o se comunica ",
        right: "Limitar su autonomía y aislarla.",
      },
      {
        left: "Enviar mensajes para prohibir actividades o salidas ",
        right: "Imponer restricciones y generar miedo.",
      },
      {
        left: "Respetar la privacidad y las decisiones de la pareja",
        right: "Favorecer la confianza y la igualdad. ",
      },
    ],
  },
  24: {
    questions: [
      {
        question:
          "¿Por qué una clínica clandestina puede poner en riesgo la vida y la salud de una persona que busca interrumpir un embarazo?",
        options: [
          "Porque no cumple con normas de higiene y seguridad",
          "Porque es más económica",
          "Porque ofrece atención más rápida",
          "Porque está cerca de casa",
        ],
        correctAnswers: [0],
        explanation: "",
      },
    ],
  },
  25: {
    questions: [
      {
        question:
          "Entrar sin permiso a un lugar desconocido para buscar a una persona desaparecida siempre es seguro.",
        answer: false,
        explanation:
          "Es importante no exponerse a riesgos físicos al intentar ayudar. Ante una sospecha de violencia o peligro, lo más seguro es avisar a personas adultas de confianza o a las autoridades para actuar de forma coordinada.",
      },
    ],
  },
  26: "",
  27: "",
};

const imagesVData = {
  1: "Ecos del silencio.png",
  2: "V2.jpg",
  3: "V2.jpg",
  4: "V4.jpg",
  5: "V5.jpg",
  6: ["V6.jpg", "interro.png"],
  7: "V7.jpg",
  9: "V9.jpg",
  10: "V10.jpg",
  11: "V11.jpg",
  12: "V12.jpg",
  13: "V13.jpg",
  14: "V14.jpg",
  15: ["V15.jpg", "interro.png"],
  16: "V16.jpg",
  17: "V17.jpg",
  18: "V18.jpg",
  19: "V19.jpg",
  20: ["V20.jpg", "interro.png"],
  21: "V21.jpg",
  22: "V22.jpg",
  23: "V23.jpg",
  24: "V24.jpg",
  25: "V25.jpg",
  26: "V26.jpg",
  27: "V27.jpg",
  // 3: ["blackback.jpeg", "strawberry.jpg"],
};

const jumpsVData = {
  1: "",
  2: "",
  3: [
    { newLayout: "A", numberOfPage: 1 },
    { newLayout: "H", numberOfPage: 1 },
  ],
  4: "",
  5: "",
  6: [
    { newLayout: "V", numberOfPage: 11 },
    { newLayout: "V", numberOfPage: 7 },
  ],
  7: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: [
    { newLayout: "A", numberOfPage: 22 },
    { newLayout: "H", numberOfPage: 21 },
  ],
  16: "",
  17: "",
  18: "",
  19: "",
  20: [
    { newLayout: "V", numberOfPage: 24 },
    { newLayout: "V", numberOfPage: 21 },
  ],
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
};

const nextVData = {
  1: {
    branch: "V",
    numberOfPage: 2,
  },
  2: {
    branch: "V",
    numberOfPage: 3,
  },
  3: "",
  4: {
    branch: "V",
    numberOfPage: 5,
  },
  5: {
    branch: "V",
    numberOfPage: 6,
  },
  6: "",
  7: {
    branch: "V",
    numberOfPage: 9,
  },
  9: {
    branch: "V",
    numberOfPage: 10,
  },
  10: {
    branch: "V",
    numberOfPage: 12,
  },
  11: {
    branch: "V",
    numberOfPage: 12,
  },
  12: {
    branch: "V",
    numberOfPage: 13,
  },
  13: {
    branch: "V",
    numberOfPage: 14,
  },
  14: {
    branch: "V",
    numberOfPage: 15,
  },
  15: "",
  16: {
    branch: "V",
    numberOfPage: 17,
  },
  17: {
    branch: "V",
    numberOfPage: 18,
  },
  18: {
    branch: "V",
    numberOfPage: 19,
  },
  19: {
    branch: "V",
    numberOfPage: 20,
  },
  20: "",
  21: {
    branch: "V",
    numberOfPage: 22,
  },
  22: {
    branch: "V",
    numberOfPage: 23,
  },
  23: {
    branch: "V",
    numberOfPage: 25,
  },
  24: {
    branch: "V",
    numberOfPage: 25,
  },
  25: {
    branch: "V",
    numberOfPage: 26,
  },
  26: {
    branch: "V",
    numberOfPage: 27,
  },
  27: "",
};

// 1: {
//     questions: [
//       {
//         question: "Which of these are European capitals?",
//         options: ["London", "Tokyo", "Paris", "New York"],
//         correctAnswers: [0, 2], // Both London and Paris are correct
//         explanation: "London and Paris are both European capitals.",
//       },
//     ],
//   },

// 2: {
//     phrases: [
//       {
//         template: "La {0} es fundamental para el {1} de cualquier {2}.",
//         blanks: [
//           {
//             word: "educación",
//             hint: "proceso de aprendizaje",
//           },
//           {
//             word: "desarrollo",
//             hint: "crecimiento",
//           },
//           {
//             word: "sociedad",
//             hint: "comunidad",
//           },
//         ],
//         words: [
//           "educación",
//           "desarrollo",
//           "sociedad",
//           "tecnología", // distractor
//           "economía", // distractor
//           "política", // distractor
//         ],
//         hint: "Importancia de la educación",
//         explanation:
//           "La educación es la base del progreso social y permite el desarrollo integral de las personas.",
//       },
//     ],
//   },
/* RAMA A*/
const titlesAData = {
  1: "TITLE A01",
  2: "TITLE A02",
  5: "TITLE A05",
  6: "TITLE A06",
  7: "TITLE A07",
  8: "TITLE A08",
  9: "TITLE A09",
  10: "TITLE A10",
  11: "TITLE A11",
  13: "TITLE A13",
  14: "TITLE A14",
  15: "TITLE A15",
  16: "TITLE A16",
  17: "TITLE A17",
  18: "TITLE A18",
  19: "TITLE A19",
  20: "TITLE A20",
  21: "TITLE A21",
  22: "TITLE A22",
  23: "TITLE A23",
  24: "TITLE A24",
  25: "TITLE A25",
  26: "TITLE A26",
  27: "TITLE A27",
  28: "TITLE A28",
  29: "TITLE A29",
  30: "TITLE A30",
  32: "TITLE A32",
};

const layoutAData = {
  1: "Blayout",
  2: "Dlayout",
  5: "Llayout",
  6: "Blayout",
  7: "Elayout",
  8: "Blayout",
  9: "Blayout",
  10: "Clayout",
  11: "Glayout",
  13: "Llayout",
  14: "Elayout",
  15: "Glayout",
  16: "Clayout",
  17: "Hlayout",
  18: "Dlayout",
  19: "Blayout",
  20: "Elayout",
  21: "Glayout",
  22: "Glayout",
  23: "Elayout",
  24: "Llayout",
  25: "Glayout",
  26: "Dlayout",
  27: "Glayout",
  28: "Blayout",
  29: "Clayout",
  30: "Elayout",
  32: "Glayout",
};

const instructionsAData = {
  1: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  2: "Relaciona cada elemento de la primera columna con su par correspondiente en la segunda.",
  5: "",
  6: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  7: "",
  8: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  9: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  10: "Indica si la afirmación es verdadera o falsa.",
  11: "Arrastra la palabra correcta para completar la frase.",
  13: "",
  14: "Arrastra los fragmentos para formar la oración correcta.",
  15: "Arrastra la palabra correcta para completar la frase.",
  16: "Indica si la afirmación es verdadera o falsa.",
  17: "Haz clic en las tarjetas para encontrar y emparejar las que tengan relación entre sí.",
  18: "Relaciona cada elemento de la primera columna con su par correspondiente en la segunda. Une cada comportamiento con la consecuencia o señal de alerta que representa.",
  19: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  20: "Arrastra los fragmentos para formar la oración correcta.",
  21: "Arrastra la palabra correcta para completar la frase. Completa la frase con las palabras correctas para reforzar la idea de qué hacer cuando percibimos que algo no está bien.",
  22: "Selecciona la palabra correcta para completar la frase. Completa la frase con las palabras correctas para identificar una señal de alerta que Mónica podría descubrir en las hojas de María.",
  23: "Arrastra los fragmentos para formar la oración correcta.Ordena los fragmentos para reconstruir un mensaje que refleja una señal de violencia que podría necesitar intervención inmediata.",
  24: "",
  25: "Selecciona la palabra correcta para completar la frase. Completa la siguiente frase con las palabras correctas para reflejar una forma de manipulación que puede ocurrir en situaciones de abuso:",
  26: "Relaciona cada elemento de la primera columna con su par correspondiente en la segunda. Une cada situación con su significado o implicación.",
  27: "Selecciona la palabra correcta para completar la frase. ",
  28: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  29: "Indica si la afirmación es verdadera o falsa.",
  30: "Arrastra los fragmentos para formar la oración correcta. Ordena las partes para formar la frase que resume el mensaje de la profe Inés sobre los derechos de las chicas. Arrastra los fragmentos en el orden correcto.",
  32: "Selecciona la palabra correcta para completar la frase. Completa la frase de Mónica sobre la importancia de actuar ante una situación de riesgo. Escribe las palabras que faltan en los espacios en blanco.",
};

const feedbackAData = {
  1: "",
  2: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
  32: "",
};

const historyAData = {
  1: "Mónica entra al cole, se acomoda en su asiento y mira hacia la fila de adelante. El pupitre de María otra vez vacío.</br>(Mónica piensa): “Ya son varios días… ¿Nadie va a decir nada? Si una falta tanto, deberían llamar a su casa. A veces siento que no importamos…”</br>La campana suena, pero Mónica sigue mirando el lugar vacío.",
  2: "En la hora libre, la profe Inés se acerca con algo en la mano:</br>—“No tiene nombre… pero tal vez puedas ayudarme a devolverlo.”</br>Es un cuaderno con dibujos en las esquinas y los márgenes rayados. Mónica lo reconoce al instante.</br>(Mónica piensa): “Es de María… ¿por qué estaría tirado en el patio?”",
  5: "",
  6: "Mónica abre el cuaderno y ve frases tachadas, letras grandes y dibujos rotos:</br>“Me da miedo decirle que no.”</br>“No sé si me creerían.”</br>“Mi niña especial” firmado con corazones.</br>(Pensamiento): “¿María tenía novio? ¿Por qué lo escondía así?”",
  7: "El corazón de Mónica late rápido. Recuerda cuando vio a María con moretones en los brazos.</br>—“Me caí en el micro”— dijo, sin mirarla a los ojos. </br>Mónica pensó que exageraba… pero muchos dicen “a todos nos pegan” como si fuera normal.",
  8: "Entre las hojas, hay una arrugada con un corazón y un número. La tinta corrida. El nombre “Patito” aparece varias veces.</br>(Mónica piensa): “Últimamente Maria se habia distanciado… pero tal vez Luisa sepa algo.”",
  9: "En el recreo, Mónica reúne a sus amigas cerca de la cancha.</br>—“¿Han visto a María?” —pregunta.</br>—“Últimamente está rara… como escondiéndose” —responde una",
  10: "Otra suelta una broma:</br>—“Seguro está con su chico… ya sabes cómo es. Si no te cela, no te quiere.”</br>Mónica frunce el ceño. Sabe que eso no está bien, pero guarda silencio.",
  11: "Luisa recuerda:</br>—“Un día la recogió un tipo en un auto gris. Pensamos que era su hermano…”</br> Pero todas saben que el hermano de María no tiene auto y casi nunca está en Pucarani.",
  13: "",
  14: "Luisa baja la voz:</br>—“Yo la cubría… decía que se quedaba en mi casa, pero en realidad se iba con su novio… al que llamaba ‘Patito’.”</br>—“No quise delatarla…”",
  15: "Otra  amiga comenta: </br> —“Seguro se escapaba para darse su cariño, ya es grande.” </br>Mónica siente rabia: “¿Desde cuándo ‘cariño’ significa callar, esconderse y desaparecer?”",
  16: "—“Quizás solo quería experimentar, no hay que exagerar…” dice otra.</br>—“Pero, ¿con quién? ¿Y por qué se escondía entonces?”</br>Luisa recuerda: “Si quieres tener novio, tienes que aguantar… sino ellos buscan a otra.”",
  17: "Deciden revisar el Instagram de María desde el celular de Luisa. El perfil está casi vacío.",
  18: "Han desaparecido fotos con amigas y familia. Solo queda una selfie vieja con fondo borroso. </br> —“¿Y si alguien le pidió que lo borrara todo?” —pregunta Mónica.",
  19: "Luisa confiesa: “Mi ex me pidió borrar todo… para que no hablara con otros chicos.”</br>Entre las pocas publicaciones, encuentran la imagen de un auto gris etiquetada: mi Patito.",
  20: "De pronto, Mónica ve a los padres de María entrar a dirección. Se ven tensos y parecen estar discutiendo con el director.",
  21: "(Mónica piensa): “Esto es serio… algo está pasando y no es bueno. Tengo que averiguar qué le pasó a María.”",
  22: "Es mediodía en la plaza de Pucarani. El viento mueve las hojas secas y las voces de la feria se mezclan con el sonido lejano de una radio.</br>Mónica se sienta en una banca, saca de su mochila el paquete de hojas que Miguel le dio.</br>Las manos le sudan. Sabe que va a leer algo que no quiere imaginar.",
  23: "Empieza a pasar las páginas:</br>Frases tachadas, dibujos con líneas de rabia, palabras medio borradas.</br>“No puedo más.”</br>“No sé si es desición mía o de él.”</br>“Me dijo que era mi culpa.”</br>Cada frase es como un golpe en el estómago. Mónica traga saliva.",
  24: "",
  25: "Entre las hojas, encuentra frases más duras, escritas con letra apretada y temblorosa:</br>“No quería, pero me dijo que era la única forma de demostrar que lo quería.”</br>“Ya son muchos días de retraso. Tengo miedo.”</br>Mónica siente un nudo en la garganta. Ahora está segura: María estaba en una situación peligrosa.",
  26: "“Él dijo que me amaba, pero me obligó…”</br>“Quiero desaparecer.”</br>“¿Y si lo tengo? ¿Y si no quiero?”</br>Mónica cierra los ojos un momento. El viento le enfría la cara, pero su corazón late rápido.",
  27: "Se pone de pie. Sabe que no puede quedarse callada. Comienza a caminar hacia el colegio, apretando las hojas contra el pecho como si fueran una prueba de algo muy importante.",
  28: "Al llegar, busca a la profe Inés. La encuentra revisando unos papeles en la sala de maestros.</br> Mónica le tiende las hojas. La profe las toma, lee en silencio y su expresión cambia de sorpresa a preocupación.",
  29: " —“Gracias por traer esto, Mónica. Lo que hiciste es valiente” —dice la profe, guardando las hojas con cuidado.</br>Mónica siente un poco de alivio. Ya no está sola con ese peso.",
  30: "La profe respira hondo:</br>—“Por lo que escribió, creo que María podría estar embarazada… y no sabía qué hacer. Muchas chicas pasan por esto en silencio, sin saber que tienen derechos. Derechos a decidir. A no ser juzgadas.”</br>Mónica escucha en silencio, sintiendo una mezcla de miedo y esperanza.",
  32: "Mientras camina por el pasillo, Mónica piensa: “Hablar es la única forma de ayudarla… aunque me dé miedo lo que pueda pasar después.”</br>Sale del colegio decidida a hablar con la familia de María.",
};

const textAData = {
  1: {
    questions: [
      {
        question:
          "Ante varias faltas consecutivas sin aviso de una estudiante, ¿qué debe hacer primero la escuela?",
        options: [
          "Esperar a que la estudiante regrese para preguntarle.",
          "Preguntar a sus amigas si saben dónde está.",
          "Llamar de inmediato a la familia para verificar la situación.",
          "Publicar un aviso en redes para ubicarla.",
          "Registrar la falta y seguir con la jornada",
        ],
        correctAnswers: [2], // Both London and Paris are correct
        explanation:
          "La comunicación inmediata con la familia es la acción prioritaria para verificar seguridad y activar, si corresponde, los protocolos de protección. Preguntar a pares, esperar o publicar en redes no garantiza protección ni confidencialidad.",
      },
    ],
  },
  2: {
    pairs: [
      {
        left: "No abrir pertenencias ajenas sin permiso ",
        right: "Respeto a la privacidad.",
      },
      {
        left: "Pedir autorización antes de revisar un objeto",
        right: "Reconocimiento del derecho a decidir sobre lo propio.",
      },
      {
        left: "Devolver pertenencias a su dueña o dueño ",
        right: "Protección de la integridad y confianza.",
      },
      {
        left: "Evitar difundir contenido encontrado en pertenencias ",
        right: "Prevención de daños y vulneraciones.",
      },
    ],
  },
  5: [
    "Mónica se queda mirando el cuaderno. Lo siente pesado, como si guardara un secreto. <br/>(Pregunta): ¿Quieres abrir el cuaderno y ver qué hay o guardarlo sin mirar?",
    "Revisar el cuaderno ",
    "Guardarlo sin abrir",
  ],
  6: {
    questions: [
      {
        question:
          "¿Cuáles de estas frases o señales podrían indicar que una persona está viviendo una situación de control o violencia?",
        options: [
          "“Me da miedo decirle que no.”",
          "“No sé si me creerían.”",
          "“Mi niña especial” firmado con corazones.",
          "Ocultar una relación por temor a reacciones.",
          "Recibir regalos de personas adultas desconocidas.",
        ],
        correctAnswers: [0, 1, 3, 4], // Both London and Paris are correct
        explanation:
          "Frases que expresan miedo, dudas sobre ser creída, y comportamientos como ocultar la relación o recibir regalos de adultos pueden ser indicadores de riesgo que requieren atención inmediata.",
      },
    ],
  },
  7: {
    sentences: [
      {
        fragments: [
          "La violencia física nunca ",
          "es normal ni aceptable.",
          "Justificarla o minimizarla",
          "impide que las personas busquen ayuda ",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  8: {
    questions: [
      {
        question:
          "¿Cuáles de estas señales pueden indicar que una persona cercana podría estar viviendo una situación de riesgo o control?",
        options: [
          "Cambios repentinos en el comportamiento o el ánimo",
          "Alejarse de amistades y familiares sin explicación",
          "Uso frecuente de apodos o sobrenombres impuestos por otra persona de forma insistente",
          "Mostrar nerviosismo al recibir mensajes o llamadas",
          "Reírse más de lo habitual y pasar más tiempo con amistades",
          "Participar en más actividades escolares",
        ],
        correctAnswers: [0, 1, 2, 3],
        explanation: "",
      },
    ],
  },
  9: {
    questions: [
      {
        question:
          "Si notas que una amiga cambia su comportamiento y parece esconderse de las demás, lo mejor es no decir nada para “respetar su espacio”.",
        options: [
          "Acercarte de forma cuidadosa y preguntarle si todo está bien",
          "Expresar que te preocupa y que estás disponible para escuchar",
          "No decir nada para “respetar su espacio”.",
          "Informar a un adulto de confianza si sospechas que está en riesgo.",
          "Hacer comentarios en broma sobre su comportamiento para animarla",
        ],
        correctAnswers: [0, 1, 3],
      },
    ],
  },
  10: {
    questions: [
      {
        question:
          "Si una amiga comienza a aislarse, evita hablar de ciertos temas y cambia su comportamiento repentinamente, siempre significa que está atravesando una situación de violencia.",
        answer: false,
        explanation:
          "Los cambios de comportamiento y el aislamiento pueden ser señales de alerta, pero no siempre indican violencia. Es importante no asumir ni juzgar; lo mejor es acercarse con empatía, escuchar y ofrecer apoyo, asegurando un espacio seguro para conversar",
      },
    ],
  },
  11: {
    phrases: [
      {
        template:
          "Si una persona menor de edad es recogida por un adulto desconocido y hay incoherencias en la historia, es importante {0} lo antes posible.",
        blanks: [
          {
            word: "reportarlo a un adulto de confianza o a las autoridades",
            hint: "confianza",
          },
        ],
        words: [
          "reportarlo a un adulto de confianza o a las autoridades",
          "ignorar el hecho",
          "comentarlo con amistades",
          "seguirla sin decir nada",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  13: [
    "Mónica mira a Luisa, que se ve nerviosa.(Pregunta): ¿Quieres insistir para que Luisa cuente lo que sabe o dejarlo pasar?",
    "Insistir",
    "No meterse",
  ],
  14: {
    sentences: [
      {
        fragments: [
          "Ocultar sistemáticamente ",
          " una relación a la familia,",
          "puede ser un indicador ",
          "de riesgo y manipulación.",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  15: {
    phrases: [
      {
        template: "“¿Desde cuándo ‘{0}’ significa {1}, {2} y {3}?”",
        blanks: [
          {
            word: "cariño",
            hint: "",
          },
          {
            word: "callar",
            hint: "",
          },
          {
            word: "esconderse",
            hint: "",
          },
          {
            word: "desaparecer",
            hint: "",
          },
        ],
        words: ["cariño", "callar", "esconderse", "desaparecer"],
        hint: "",
        explanation: "",
      },
    ],
  },
  16: {
    questions: [
      {
        question:
          "La frase “Si quieres tener novio, tienes que aguantar… sino ellos buscan a otra” refleja una idea sana y respetuosa sobre las relaciones.",
        answer: false,
        explanation:
          "Esa frase es un mito dañino que normaliza la violencia, el control y la desigualdad en las relaciones. En una relación sana, el respeto y la comunicación son la base, no la tolerancia al maltrato.",
      },
    ],
  },
  17: {
    memoryImages: [
      "A17 MEMORIA 1.png",
      "A17 MEMORIA 2.png",
      "A17 MEMORIA 3.png",
      "A17 MEMORIA 4.png",
    ],
  },
  18: {
    pairs: [
      {
        left: "Pedir que se eliminen fotos con amistades",
        right: "Reducción de la red de apoyo.",
      },
      {
        left: "Eliminar fotos familiares de redes sociales",
        right: "Aislamiento de la persona.",
      },
      {
        left: "Controlar el contenido que publica la pareja ",
        right: "Restricción de la libertad de expresión.",
      },
      {
        left: "Revisar y borrar mensajes sin permiso",
        right: "Vulneración de la privacidad.",
      },
    ],
  },
  19: {
    questions: [
      {
        question:
          "¿Qué tipo de comportamiento muestra la situación cuando alguien pide a su pareja borrar todo de sus redes para “no hablar con otros chicos”?",
        options: [
          "Un acto de cuidado y protección.",
          "Una señal de control y celos posesivos.",
          "Una muestra de desinterés.",
          "Una forma de respeto mutuo.",
        ],
        correctAnswers: [1], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  20: {
    sentences: [
      {
        fragments: [
          "Comunicar la situación",
          "A las personas adultas de confianza",
          "Para que puedan",
          "Tomar medidas de protección.",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  21: {
    phrases: [
      {
        template:
          "Si notas que algo {0} o que una persona está en {1}, es importante buscar ayuda y no {2} la situación.",
        blanks: [
          {
            word: "extraño",
            hint: "",
          },
          {
            word: "riesgo",
            hint: "",
          },
          {
            word: "ignorar",
            hint: "",
          },
        ],
        words: ["extraño", "riesgo", "ignorar"],
        hint: "",
        explanation:
          "Identificar comportamientos extraños y actuar ante señales de riesgo puede prevenir que una situación empeore. No debemos normalizar ni ignorar lo que podría ser violencia o abuso.",
      },
    ],
  },
  22: {
    phrases: [
      {
        template:
          "Cuando una persona expresa {0} o {1}, puede estar atravesando una situación que requiere atención urgente.",
        blanks: [
          {
            word: "miedo",
            hint: "",
          },
          {
            word: "sentirse sola",
            hint: "",
          },
        ],
        words: ["miedo", "sentirse sola"],
        hint: "",
        explanation:
          "Frases que revelan temor, aislamiento o malestar persistente son señales de que la persona necesita apoyo inmediato, información y acceso a servicios de protección y salud.",
      },
    ],
  },
  23: {
    sentences: [
      {
        fragments: ["Me dijo", "que era", "mi culpa"],
        hint: "",
        explanation: "",
      },
    ],
  },
  24: [
    "(Pensamiento): “Esto no lo puedo guardar para mí… pero, ¿y si me equivoco? ¿Y si no me creen?”¿Qué hará Mónica? ",
    "Buscar a la profe Inés y mostrarle todo.",
    "Seguir sola, investigando por su cuenta.",
  ],
  25: {
    phrases: [
      {
        template:
          "No quería, pero me dijo que era la única forma de demostrar que lo {0}.",
        blanks: [
          {
            word: "quería",
            hint: "",
          },
        ],
        words: ["quería", "apoyaba", "respetaba", "ayudaba"],
        hint: "",
        explanation: "",
      },
    ],
  },
  26: {
    pairs: [
      {
        left: "Decir “te amo” pero obligar a tener relaciones sexuales ",
        right: "Violencia sexual, no amor.",
      },
      {
        left: "Mantener relaciones sin consentimiento ",
        right: "Vulnerar la autonomía corporal.",
      },
      {
        left: "Decidir sobre el cuerpo de otra persona sin su permiso ",
        right: "Negar el derecho al consentimiento libre y voluntario. ",
      },
      {
        left: "Respetar las decisiones y límites de la pareja ",
        right: "Base de una relación saludable.",
      },
    ],
  },
  27: {
    phrases: [
      {
        template:
          "Guardar silencio ante una situación de violencia puede poner en riesgo la {0} y el bienestar de una persona.",
        blanks: [
          {
            word: "vida",
            hint: "",
          },
        ],
        words: ["vida", "honra", "tranquilidad"],
        hint: "",
        explanation: "",
      },
    ],
  },
  28: {
    questions: [
      {
        question:
          "Ante la recepción de información o pruebas que sugieren que una estudiante podría estar en una situación de violencia, ¿qué acciones son correctas? Marca todas las que correspondan.",
        options: [
          "Escuchar con atención y sin interrumpir.",
          "Guardar silencio para no meterse en problemas. ",
          "Activar los protocolos de protección escolar.",
          "Minimizar la situación para no preocupar a otros.",
          "Garantizar la confidencialidad de la información.",
        ],
        correctAnswers: [0, 2, 4], // Both London and Paris are correct
        explanation:
          "La comunicación inmediata con la familia es la acción prioritaria para verificar seguridad y activar, si corresponde, los protocolos de protección. Preguntar a pares, esperar o publicar en redes no garantiza protección ni confidencialidad.",
      },
    ],
  },
  29: {
    questions: [
      {
        question:
          "Cuando enfrentas una situación difícil o tienes información importante sobre un posible caso de violencia, buscar apoyo de un adulto de confianza es una acción correcta y segura. Indica si esta afirmación es verdadera o falsa.",
        answer: true,
        explanation:
          "Es verdadero. Buscar apoyo en adultos responsables, como docentes o familiares, ayuda a activar medidas de protección y a no enfrentar el problema en soledad.",
      },
    ],
  },
  30: {
    sentences: [
      {
        fragments: [
          "Las chicas tienen",
          "derecho a decidir",
          "sobre su cuerpo",
          "y a no ser juzgadas",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  32: {
    phrases: [
      {
        template:
          "{0}es la única forma de {1}… aunque me dé miedo lo que pueda pasar después.",
        blanks: [
          {
            word: "Hablar",
            hint: "",
          },
          {
            word: "ayudarla",
            hint: "",
          },
        ],
        words: ["Hablar", "ayudarla", "ganar"],
        hint: "",
        explanation: "",
      },
    ],
  },
};

const imagesAData = {
  1: "A1.jpg",
  2: "A2.jpg",
  5: ["A5.jpg", "Monica Icon.png"],
  6: "A6.jpg",
  7: "A7.jpg",
  8: "A8.jpg",
  9: "A9.jpg",
  10: "A10.jpg",
  11: "A11.jpg",
  13: ["A13.jpg", "Monica Icon.png"],
  14: "A14.jpg",
  15: "A15.jpg",
  16: "A16.jpg",
  17: "A17.jpg",
  18: "A18.jpg",
  19: "A19.jpg",
  20: "A20.jpg",
  21: "A21.jpg",
  22: "A22.jpg",
  23: "A23.jpg",
  24: ["A24.jpg", "Monica Icon.png"],
  25: "A25.jpg",
  26: "A26.jpg",
  27: "A27.jpg",
  28: "A28.jpg",
  29: "A29.jpg",
  30: "A30.jpg",
  32: "A32.jpg",
};

const jumpsAData = {
  1: "",
  2: "",
  5: [
    { newLayout: "A", numberOfPage: 6 },
    { newLayout: "A", numberOfPage: 9 },
  ],
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  13: [
    { newLayout: "A", numberOfPage: 14 },
    { newLayout: "A", numberOfPage: 15 },
  ],
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: [
    { newLayout: "A", numberOfPage: 28 },
    { newLayout: "A", numberOfPage: 25 },
  ],
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
  32: "",
};

const nextAData = {
  1: {
    branch: "A",
    numberOfPage: 2,
  },
  2: {
    branch: "A",
    numberOfPage: 5,
  },
  5: "",
  6: {
    branch: "A",
    numberOfPage: 7,
  },
  7: {
    branch: "A",
    numberOfPage: 8,
  },
  8: {
    branch: "A",
    numberOfPage: 13,
  },
  9: {
    branch: "A",
    numberOfPage: 10,
  },
  10: {
    branch: "A",
    numberOfPage: 11,
  },
  11: {
    branch: "A",
    numberOfPage: 6,
  },
  13: "",
  14: {
    branch: "A",
    numberOfPage: 17,
  },
  15: {
    branch: "A",
    numberOfPage: 16,
  },
  16: {
    branch: "A",
    numberOfPage: 17,
  },
  17: {
    branch: "A",
    numberOfPage: 18,
  },
  18: {
    branch: "A",
    numberOfPage: 19,
  },
  19: {
    branch: "A",
    numberOfPage: 20,
  },
  20: {
    branch: "A",
    numberOfPage: 21,
  },
  21: {
    branch: "V",
    numberOfPage: 4,
  },
  22: {
    branch: "A",
    numberOfPage: 23,
  },
  23: {
    branch: "A",
    numberOfPage: 24,
  },
  24: "",
  25: {
    branch: "A",
    numberOfPage: 26,
  },
  26: {
    branch: "A",
    numberOfPage: 27,
  },
  27: {
    branch: "A",
    numberOfPage: 28,
  },
  28: {
    branch: "A",
    numberOfPage: 29,
  },
  29: {
    branch: "A",
    numberOfPage: 30,
  },
  30: {
    branch: "A",
    numberOfPage: 32,
  },
  32: {
    branch: "V",
    numberOfPage: 16,
  },
};

/* RAMA H*/
const titlesHData = {
  1: "TITLE H01",
  2: "TITLE H02",
  3: "TITLE H03",
  4: "TITLE H04",
  5: "TITLE H05",
  6: "TITLE H06",
  7: "TITLE H07",
  8: "TITLE H08",
  9: "TITLE H09",
  10: "TITLE H10",
  11: "TITLE H11",
  12: "TITLE H12",
  13: "TITLE H13",
  14: "TITLE H14",
  15: "TITLE H15",
  16: "TITLE H16",
  17: "TITLE H17",
  19: "TITLE H19",
  20: "TITLE H20",
  21: "TITLE H21",
  22: "TITLE H22",
  23: "TITLE H23",
  24: "TITLE H24",
  25: "TITLE H25",
  26: "TITLE H26",
  27: "TITLE H27",
  28: "TITLE H28",
  29: "TITLE H29",
  30: "TITLE H30",
  31: "TITLE H31",
};

const layoutHData = {
  1: "Xlayout",
  2: "Hlayout",
  3: "Llayout",
  4: "Blayout",
  5: "Clayout",
  6: "Elayout",
  7: "Blayout",
  8: "Dlayout",
  9: "Glayout",
  10: "Blayout",
  11: "Xlayout",
  12: "Elayout",
  13: "Llayout",
  14: "Glayout",
  15: "Hlayout",
  16: "Elayout",
  17: "Clayout",
  19: "Elayout",
  20: "Elayout",
  21: "Blayout",
  22: "Llayout",
  23: "Glayout",
  24: "Blayout",
  25: "Clayout",
  26: "Dlayout",
  27: "Elayout",
  28: "Glayout",
  29: "Blayout",
  30: "Clayout",
  31: "Hlayout",
};

const instructionsHData = {
  1: "",
  2: "Haz clic en las tarjetas para encontrar y emparejar las que tengan relación entre sí. Encuentra las parejas de imágenes idénticas que representan las acciones correctas ante la desaparición de una persona menor de edad.",
  3: "",
  4: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  5: "Indica si la afirmación es verdadera o falsa.",
  6: "Arrastra los fragmentos para formar la oración correcta.",
  7: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  8: "Relaciona cada elemento de la primera columna con su par correspondiente en la segunda. Qué significan los escritos en el cuaderno de Maria",
  9: "Selecciona la palabra correcta para completar la frase. Completa las frases encontradas por Miguel para comprender su posible significado.",
  10: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  11: "",
  12: "Arrastra los fragmentos para formar la oración correcta. ",
  13: "",
  14: "Selecciona la palabra correcta para completar la frase.",
  15: "Haz clic en las tarjetas para encontrar y emparejar las que tengan relación entre sí. Recuerda las señales que se mencionaron sobre el estado de María. Selecciónalas en el orden correcto en que aparecen en la narración.",
  16: "Arrastra los fragmentos para formar la oración correcta. Ordena los fragmentos para formar una frase que explique por qué puede ser preocupante encontrar un teléfono oculto sin cargador ni caja en la habitación de una persona menor de edad.",
  17: "Indica si la afirmación es verdadera o falsa.",
  19: "Arrastra los fragmentos para formar la oración correcta.  Ordena las partes para formar una recomendación correcta sobre qué hacer si sospechas que alguien cercano está en riesgo.",
  20: "Arrastra los fragmentos para formar la oración correcta. Ordena los fragmentos para formar una frase que refleje la importancia de actuar en equipo ante una situación de riesgo.",
  21: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  22: "",
  23: "Selecciona la palabra correcta para completar la frase. Completa la frase con las palabras correctas para recordar la importancia de la comunicación familiar:",
  24: "Lee la pregunta y marca todas las respuestas que consideres correctas.",
  25: "Indica si la afirmación es verdadera o falsa.",
  26: "Relaciona cada elemento de la primera columna con su par correspondiente en la segunda. Une cada acción o señal con la forma adecuada de manejarla o su consecuencia.",
  27: "Arrastra los fragmentos para formar la oración correcta. Ordena las siguientes partes para formar una recomendación correcta sobre cómo actuar en un lugar que te genera desconfianza.",
  28: "Selecciona la palabra correcta para completar la frase.",
  29: "Lee atentamente la pregunta y selecciona la única respuesta correcta.",
  30: "Indica si la afirmación es verdadera o falsa.",
  31: "Haz clic en las tarjetas para encontrar y emparejar las que tengan relación entre sí. Encuentra los pares de imágenes iguales que representen acciones correctas ante señales de riesgo para una persona menor de edad.",
};

const feedbackHData = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "Al abordar señales físicas inusuales, es clave actuar con cuidado, sin acusaciones precipitadas ni difusión de rumores, priorizando la confianza, la escucha y la orientación hacia apoyos adecuados.",
  27: "",
  28: "",
  29: "",
  30: "",
  31: "",
};

const historyHData = {
  1: "Miguel se encuentra en la universidad ",
  2: "Miguel está a punto de entrar ir a estudiar con unos amigos,  cuando suena su teléfono. <br/> Es su madre, su voz quebrada: <br/> —Miguel… tu hermana María no volvió del colegio.",
  3: "",
  4: "En el patio, Miguel comenta a una amiga que su hermana no llegó a casa.<br/>Ella se encoge de hombros:<br/>—Seguro se fue de fiesta… a veces pasa.<br/>Miguel la mira con molestia.<br/>—Mi hermana es pequeña, no hace esas cosas.",
  6: "Molesto y con la cabeza llena de las insinuaciones de sus compañeros, Miguel decide irse y volver a casa.El trayecto a casa se le hace largo, cada paso acompañado por imágenes y pensamientos que no quiere imaginar.",
  7: "Al llegar, nota que María no ha regresado. Sus padres lo ven entrar y, sin decir palabra, toman sus abrigos para salir a buscarla.",
  8: "Solo en casa, Miguel entra al cuarto de su hermana. En el basurero encuentra hojas arrancadas de un cuaderno, con manchas que parecen lágrimas.<br/>Frases inconexas se asoman entre tachaduras.<br/>¿Qué intentabas decir, María? ¿Por qué callaste?",
  9: "Miguel se sienta en el suelo y revisa cada hoja.<br/>Algunas frases están incompletas, otras tachadas con rabia:<br/>No sé si es mío o de él.<br/>Me dijo que era mi culpa.<br/>Se queda helado. Algo grave estaba ocurriendo.",
  10: "María no vuelve esa noche. A la mañana siguiente, sus padres deben recibir mercancía en la feria, así que Miguel decide ir y hacerse cargo, mientras su padres buscan a Maria",
  11: "El frío de la altura y el bullicio de la feria no ayudan a calmar su ansiedad.",
  12: "Miguel atiende solo mientras sus padres van a la policía a denunciar la desaparición.<br/> Recuerda que a María le costaba estar en el mercado: el ruido y la multitud le generaban ansiedad.",
  13: "",
  14: "Tu madre te cuenta que tu papá discutió con el director porque no avisaron que María llevaba días sin ir al colegio.<br/>Todos en casa se sienten frustrados: ¿cómo es posible que nadie lo haya mencionado antes?",
  15: "Miguel recuerda que su hermana había perdido peso, comía poco y se quejaba de malestar.<br/>Todos pensaron que era por el frío o el cansancio, pero ahora esas señales cobran un significado inquietante",
  16: "Al ordenar la habitación, algo duro cae detrás de la cama.<br/>Es un celular rosado, sin cargador ni caja.<br/>¿Por qué tendrías otro teléfono, María? ¿Qué escondías?",
  17: "Hablando con sus padres, Miguel confirma que la pelea con el colegio fue porque nadie avisó de sus faltas.",
  19: "Miguel intenta desbloquear el celular, pero no lo logra.<br/>Piensa en Mónica, la hija de otra familia de la feria. Tal vez ella sepa algo.",
  20: "Miguel va al colegio de maria y en la salidda ve a Monica. <br/> Ella también parece preocupada.<br/>Sus miradas se cruzan: ambos saben que algo grave está ocurriendo y que necesitan unir fuerzas.",
  21: "Miguel esta en casa pensando en que podría ir a Viacha al lugar que aparecio llamando al telefono de Maria",
  22: "",
  23: "Miguel está sentado en la mesa de la cocina. La luz fría de la mañana entra por la ventana, resaltando las ojeras de su madre. Ella, con los ojos rojos de tanto llorar, continúa revisando las fotos de su hija.<br/>—“No me di cuenta… pensé que estaba bien. Yo… debí escucharla más.”<br/>Miguel siente un nudo en la garganta. La culpa de su madre se mezcla con la suya propia.",
  24: "—“Papá no debió pelearse en el colegio” —dice Miguel, recordando la escena.<br/>Él había ido después y logró hablar con las amigas de María. Solo Mónica le respondió: <br/>—“Tu papá te riñe por hablar con esas chicas, ellas son la mala compañia, siempre metiéndose con noviecitos y tratando de decir que Maria es igual…”<br/>Miguel niega con firmeza: —Porque mentirian sus amigas, talvez María si  tenía novio. Quizas es todo un malentendido.”<br/>Pero por dentro, aprieta los dientes. ¿Por qué no quieren ver lo que es tan obvio?",
  25: "Su madre suspira y lo mira como si quisiera protegerlo de la verdad:<br/>—“Para nosotras tu hermana sigue siendo una niña… No imaginé que podría tener novio, y menos que… que se fuera con alguien.”<br/>Miguel siente que la frase le golpea el pecho. La idea de que un hombre mayor haya buscado a María le enciende la rabia.",
  26: "Miguel mira a su padre a los ojos:<br/>—“¿Tú… le pegaste a María? Sus amigas dicen que la vieron con moretones.”<br/>Su padre se endereza, herido por la acusación.<br/>—“Nunca le haría daño. Si tenía moretones, no fueron por mí.”<br/>La tensión en la cocina es tan espesa que parece imposible respirar.",
  27: "Viacha lo recibe con un aire helado y calles polvorientas. Miguel camina siguiendo las indicaciones de una vendedora, que le señala la calle que lleva a la zona de alojamientos.<br/>Siente un escalofrío. —“No quiero imaginar qué pasó ahí.”<br/>Acelera el paso, como si de ello dependiera alcanzar a su hermana.",
  28: "En el alojamiento, el encargado lo mira con indiferencia.<br/>—“No hay registro de esa persona.”<br/>Miguel aprieta los puños. La impotencia le arde en el estómago. Sabe que están ocultando algo, pero no tiene cómo probarlo.",
  29: "Una vendedora en la esquina lo observa con curiosidad.<br/>—“Vi a una joven como la de la foto… estaba con un hombre mayor hace unos días.”<br/>El corazón de Miguel late con fuerza.<br/>Más adelante, en un pequeño alojamiento, un encargado con gorra lo recibe. Miguel le muestra la foto de María. El hombre frunce el ceño, pero no dice nada.",
  30: "De vuelta en el alojamiento, un empleado menos precavido le confiesa:<br/> —“Un hombre de unos treinta años entró con una menor. No pidieron identificación.”<br/>Miguel siente que la sangre se le hiela. La imagen de ese desconocido junto a su hermana se clava en su mente como una herida.",
  31: "Con el estómago revuelto, Miguel decide reunirse con Mónica de nuevo. Necesita más respuestas. Si alguien vio a María con ese hombre, tal vez en las inmediaciones o a la salida, podrá confirmar lo que teme. Durante el largo viaje, tiene mucho que pensar.",
};

const textHData = {
  1: "",
  2: {
    memoryImages: [
      "H2 MEMORIA 1.png",
      "H2 MEMORIA 2.png",
      "H2 MEMORIA 3.png",
      "H2 MEMORIA 4.png",
    ],
  },
  3: [
    "Tu madre insiste en que tal vez María aparecerá pronto, pero no está segura. Estás frente a dos opciones: ¿Qué harás?",
    "Quedarte en clase y esperar noticias.",
    "Volver a casa para buscarla tú mismo.",
  ],
  4: {
    questions: [
      {
        question:
          "¿Cuáles de estas respuestas son apropiadas cuando alguien te dice que un menor de edad no ha llegado a casa y podría estar en riesgo?",
        options: [
          "Tomar en serio la preocupación y ofrecer apoyo",
          "Minimizar diciendo “seguro está de fiesta”.",
          "Ayudar a avisar a familiares o autoridades. ",
          "Culpar a la persona desaparecida por no avisar.",
          "Buscar información que pueda ayudar a encontrarla.",
        ],
        correctAnswers: [0, 2, 4], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  5: {
    questions: [
      {
        question:
          "Comentarios como “seguro se fue a un motel con su novio” sobre una menor de edad son inofensivos si se dicen en broma.",
        answer: false,
        explanation:
          "Aunque se presenten como bromas, estos comentarios sexualizan a menores, refuerzan estereotipos dañinos y normalizan conductas abusivas. La ESI promueve el respeto, el consentimiento y el cuidado en las interacciones.",
      },
    ],
  },
  6: {
    sentences: [
      {
        fragments: [
          "Los rumores y las burlas",
          "pueden causar angustia",
          "y afectar el bienestar emocional",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  7: {
    questions: [
      {
        question:
          "¿Cuál debería ser la primera acción ante la ausencia prolongada de una persona menor de edad?",
        options: [
          "Esperar 24 horas para ver si regresa por su cuenta.",
          "Salir a buscarla y avisar a la policía de inmediato. ",
          "Revisar sus redes sociales y no hacer nada más por el momento.",
          "Preguntar a los vecinos y esperar noticias.",
        ],
        correctAnswers: [1], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  8: {
    pairs: [
      {
        left: "“Me da miedo”",
        right: "Expresión de temor o inseguridad. ",
      },
      {
        left: "Tachaduras constantes ",
        right: "Intento de ocultar o minimizar lo que se quiere decir.",
      },
      {
        left: "Manchas que parecen lágrimas",
        right: "Señal de angustia emocional. ",
      },
      {
        left: "Frases inconexas",
        right:
          "Dificultad para expresar una situación de forma directa por miedo o presión. ",
      },
    ],
  },
  9: {
    phrases: [
      {
        template: "“No sé si es mío o de {0}.”. “Me dijo que era mi {1}.”",
        blanks: [
          {
            word: "él",
            hint: "",
          },
          {
            word: "culpa",
            hint: "",
          },
        ],
        words: ["él", "culpa", "allà", "parte"],
        hint: "",
        explanation: "",
      },
    ],
  },
  10: {
    questions: [
      {
        question:
          "¿Cuál sería la acción más segura y responsable para Miguel mientras sus padres buscan a María?",
        options: [
          "Quedarse en la feria, atender el puesto y esperar noticias.",
          "Ir solo a buscar a María en zonas desconocidas.",
          "No ir a la feria ni ayudar a sus padres.",
          "Discutir con los vecinos para que le den información.",
        ],
        correctAnswers: [0], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  11: "",
  12: {
    sentences: [
      {
        fragments: [
          "Es importante",
          "respetar",
          "a las personas",
          " en las situaciones",
          "que les incomodan o afectan",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  13: [
    "Estás agotado, pero inquieto.¿Qué harás?",
    "Regresar a casa y descansar.",
    "Volver a buscar pistas en la habitación de María.",
  ],
  14: {
    phrases: [
      {
        template:
          "Cuando un estudiante falta varios días, el colegio debe {0} a la familia para {1} si todo está bien.",
        blanks: [
          {
            word: "avisar",
            hint: "",
          },
          {
            word: "confirmar",
            hint: "",
          },
        ],
        words: ["avisar", "confirmar", "reprender", "ignorar"],
        hint: "",
        explanation: "",
      },
    ],
  },
  15: {
    memoryImages: [
      "H15 MEMORIA 1.png",
      "H15 MEMORIA 2.png",
      "H15 MEMORIA 3.png",
      "H15 MEMORIA 4.png",
    ],
  },
  16: {
    sentences: [
      {
        fragments: [
          "Puede ser",
          "una señal de",
          "contacto oculto",
          "o comunicación secreta",
          "con una persona potencialmente riesgosa",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  17: {
    questions: [
      {
        question:
          "Las instituciones educativas tienen la obligación de informar a la familia si un estudiante falta varios días sin justificación.",
        answer: true,
        explanation:
          "El seguimiento de asistencia es una medida de protección. Avisar a la familia ante faltas reiteradas puede prevenir situaciones de riesgo o permitir actuar a tiempo.",
      },
    ],
  },
  19: {
    sentences: [
      {
        fragments: [
          "Buscar a",
          "una persona de confianza",
          "y contarle",
          "lo que has observado",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  20: {
    sentences: [
      {
        fragments: [
          "Juntos ",
          "es más fácil",
          "enfrentar el problema",
          " y proteger a quien lo necesita.",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  21: {
    questions: [
      {
        question:
          "Miguel está pensando en ir solo a Viacha para investigar el lugar que apareció en el teléfono de María. ¿Cuál sería la mejor decisión que debería tomar antes de hacerlo?",
        options: [
          "Ir solo para no preocupar a nadie.",
          "Avisar a una autoridad y pedir que lo acompañen.",
          "Ir de inmediato sin decir nada a sus padres.",
          "Llamar al número y decir que va a ir.",
        ],
        correctAnswers: [1], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  22: ["Miguel toma una desición", "dec1", "dec2"],
  23: {
    phrases: [
      {
        template:
          "Escuchar sin {0} y con {1} ayuda a que las y los adolescentes se sientan seguros para hablar de lo que les preocupa.",
        blanks: [
          {
            word: "juzgar",
            hint: "",
          },
          {
            word: "empatía",
            hint: "",
          },
        ],
        words: ["juzgar", "empatía", "reprender", "felicidad"],
        hint: "",
        explanation: "",
      },
    ],
  },
  24: {
    questions: [
      {
        question:
          "¿Cuáles de las siguientes actitudes pueden indicar que un grupo de amistades no está apoyando realmente a alguien en una situación de riesgo? Selecciona todas las correctas.",
        options: [
          "Burlarse o minimizar lo que le pasa",
          "Difundir rumores o mentiras sobre la persona",
          "Guardar silencio para “no meterse en problemas”",
          "Escuchar con respeto y sin juzgar ",
        ],
        correctAnswers: [0, 1, 2],
        explanation: "",
      },
    ],
  },
  25: {
    questions: [
      {
        question:
          "Si una persona adulta tiene una relación sentimental o sexual con una menor de edad, ¿puede considerarse una relación consentida?",
        answer: false,
        explanation:
          "No puede considerarse una relación consentida porque existe una desigualdad de poder y edad que impide un consentimiento libre e informado. La ley protege a las personas menores de edad de este tipo de situaciones.",
      },
    ],
  },
  26: {
    pairs: [
      {
        left: "Notar moretones u otras señales físicas inusuales ",
        right: "Atender a posibles indicadores de riesgo. ",
      },
      {
        left: "Preguntar con calma y en un espacio privado",
        right: "Facilita la confianza para hablar.",
      },
      {
        left: "Escuchar sin interrumpir y sin juzgar ",
        right: "Favorece que la persona comparta lo que vive.",
      },
      {
        left: "Animar a que busque ayuda profesional o institucional ",
        right: "Brinda acceso a apoyo y protección. ",
      },
    ],
  },
  27: {
    sentences: [
      {
        fragments: [
          "mantente alerta",
          "si el lugar te genera inseguridad",
          "evita entrar solo",
          "y comunica tu ubicación a alguien de confianza",
        ],
        hint: "",
        explanation: "",
      },
    ],
  },
  28: {
    phrases: [
      {
        template:
          "Cuando alguien se muestra {0} y evita dar {1}, puede ser una señal de que está ocultando información.",
        blanks: [
          {
            word: "evasivo",
            hint: "",
          },
          {
            word: "detalles",
            hint: "",
          },
        ],
        words: ["evasivo", "detalles", "interesado", "consejos"],
        hint: "",
        explanation: "",
      },
    ],
  },
  29: {
    questions: [
      {
        question:
          "Si un testigo dice haber visto a una menor con un hombre mayor y parece ser una situación riesgosa, ¿qué debería hacerse primero?",
        options: [
          "Guardar la información en secreto para evitar problemas.",
          "Avisar a una persona adulta de confianza o a las autoridades. ",
          "Ir solo a buscar al hombre y enfrentarlo.",
        ],
        correctAnswers: [1], // Both London and Paris are correct
        explanation: "",
      },
    ],
  },
  30: {
    questions: [
      {
        question:
          "Un alojamiento o establecimiento debe pedir identificación a todas las personas que ingresan, especialmente si hay menores de edad.",
        answer: true,
        explanation:
          "Pedir identificación es una medida básica de seguridad y protección de derechos. Su omisión puede facilitar situaciones de explotación o violencia contra menores.",
      },
    ],
  },
  31: {
    memoryImages: [
      "H31 MEMORIA 1.png",
      "H31 MEMORIA 2.png",
      "H31 MEMORIA 3.png",
      "H31 MEMORIA 4.png",
    ],
  },
};

const imagesHData = {
  1: "H1.jpg",
  2: "H2.jpg",
  3: ["H3.jpg", "Miguel Icon.png"],
  4: "H4.jpg",
  5: "H5.jpg",
  6: "H6.jpg",
  7: "H7.jpg",
  8: "H8.jpg",
  9: "H9.jpg",
  10: "H10.jpg",
  11: "H11.jpg",
  12: "H12.jpg",
  13: ["H13.jpg", "Miguel Icon.png"],
  14: "H14.jpg",
  15: "H15.jpg",
  16: "H16.jpg",
  17: "H17.jpg",
  19: "H19.jpg",
  20: "H20.jpg",
  21: "H21.jpg",
  22: ["H22.jpg", "Miguel Icon.png"],
  23: "H23.jpg",
  24: "H24.jpg",
  25: "H25.jpg",
  26: "H26.jpg",
  27: "H27.jpg",
  28: "H28.jpg",
  29: "H29.jpg",
  30: "H30.jpg",
  31: "H31.jpg",
};

const jumpsHData = {
  1: "",
  2: "",
  3: [
    { newLayout: "H", numberOfPage: 4 },
    { newLayout: "H", numberOfPage: 7 },
  ],
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: [
    { newLayout: "H", numberOfPage: 16 },
    { newLayout: "H", numberOfPage: 14 },
  ],
  14: "",
  15: "",
  16: "",
  17: "",
  19: "",
  20: "",
  21: "",
  22: [
    { newLayout: "H", numberOfPage: 27 },
    { newLayout: "H", numberOfPage: 23 },
  ],
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
  31: "",
};

const nextHData = {
  1: {
    branch: "H",
    numberOfPage: 2,
  },
  2: {
    branch: "H",
    numberOfPage: 3,
  },
  3: "",
  4: {
    branch: "H",
    numberOfPage: 5,
  },
  5: {
    branch: "H",
    numberOfPage: 6,
  },
  6: {
    branch: "H",
    numberOfPage: 8,
  },
  7: {
    branch: "H",
    numberOfPage: 8,
  },
  8: {
    branch: "H",
    numberOfPage: 9,
  },
  9: {
    branch: "H",
    numberOfPage: 10,
  },
  10: {
    branch: "H",
    numberOfPage: 11,
  },
  11: {
    branch: "H",
    numberOfPage: 12,
  },
  12: {
    branch: "H",
    numberOfPage: 13,
  },
  13: "",
  14: {
    branch: "H",
    numberOfPage: 15,
  },
  15: {
    branch: "H",
    numberOfPage: 16,
  },
  16: {
    branch: "H",
    numberOfPage: 17,
  },
  17: {
    branch: "H",
    numberOfPage: 19,
  },
  19: {
    branch: "H",
    numberOfPage: 20,
  },
  20: {
    branch: "V",
    numberOfPage: 4,
  },
  21: {
    branch: "H",
    numberOfPage: 22,
  },
  22: "",
  23: {
    branch: "H",
    numberOfPage: 24,
  },
  24: {
    branch: "H",
    numberOfPage: 25,
  },
  25: {
    branch: "H",
    numberOfPage: 26,
  },
  26: {
    branch: "H",
    numberOfPage: 28,
  },
  27: {
    branch: "H",
    numberOfPage: 28,
  },
  28: {
    branch: "H",
    numberOfPage: 29,
  },
  29: {
    branch: "H",
    numberOfPage: 30,
  },
  30: {
    branch: "H",
    numberOfPage: 31,
  },
  31: {
    branch: "V",
    numberOfPage: 16,
  },
};

/* RAMA F*/
const titlesFData = {
  1: "TITLE F01",
  2: "TITLE F02",
  3: "TITLE F03",
  4: "TITLE F04",
};

const layoutFData = {
  1: "Ilayout",
  2: "X2layout",
  3: "X2layout",
  4: "Ilayout",
};

const instructionsFData = {
  1: "",
  2: "",
  3: "",
  4: "",
};

const feedbackFData = {
  1: "",
  2: "",
  3: "",
  4: "",
};

const historyFData = {
  1: "Noticia en pantalla: <br/>Una menor fue hallada sin vida en un alojamiento de Viacha. La policía investiga el caso. <br/> Miguel siente un vacío helado en el pecho.",
  2: "Días después, Mónica se entera de que el colegio organizará un taller sobre sexualidad y prevención.",
  3: "En el aula, un especialista habla de consentimiento, relaciones seguras y apoyo en casos de violencia.<br/>Las palabras suenan importantes, pero para Miguel llegan demasiado tarde.",
  4: "GAME OVER <br/> A veces, la conversación que no tuvimos a tiempo puede costar una vida. Hablar de sexualidad, derechos y prevención es urgente, siempre.",
};

const textFData = {
  1: "",
  2: "",
  3: "",
  4: "",
};

const imagesFData = {
  1: "blackback.jpeg",
  2: "blackback.jpeg",
  3: "blackback.jpeg",
  4: "blackback.jpeg",
};

const jumpsFData = {
  1: "",
  2: "",
  3: "",
  4: "",
};

const nextFData = {
  1: {
    branch: "F",
    numberOfPage: 2,
  },
  2: {
    branch: "F",
    numberOfPage: 3,
  },
  3: {
    branch: "F",
    numberOfPage: 4,
  },
  4: "",
};

const titlesData = {
  0: "TITLE A00",
  1: "TITLE A01",
  2: "TITLE A02",
  3: "TITLE A03",
  4: "TITLE A04",
  5: "TITLE A05",
  6: "TITLE A06",
  7: "TITLE A07",
  8: "TITLE A08",
  9: "TITLE A09",
  10: "TITLE A10",
  11: "TITLE A11",
  12: "TITLE A12",
  13: "TITLE A13",
  14: "TITLE A14",
  15: "TITLE A15",
  16: "TITLE A16",
  17: "TITLE A17",
  18: "TITLE A18",
};

const layoutData = {
  0: "Alayout",
  1: "Klayout",
  2: "Blayout",
  3: "Dlayout",
  4: "Hlayout",
  5: "Dlayout",
  6: "Blayout",
  7: "Clayout",
  8: "Elayout",
  9: "Flayout",
  10: "Dlayout",
  11: "Blayout",
  12: "Hlayout",
  13: "Clayout",
  14: "Dlayout",
  15: "Flayout",
  16: "Blayout",
  17: "Blayout",
  18: "Xlayout",
};

const instructionsData = {
  0: "",
  1: "",
  2: "",
  3: "María estaba más callada, evita ciertas conversaciones y ya no se queda con nosotras en los recreos. ¿Qué hubieras hecho tú?",
  4: "Explora las páginas del diario de María. ¿Qué te está intentando decir?",
  5: "Relaciona las frases del diario de María con las emociones que podrían reflejar.",
  6: "",
  7: "Lee las frases a continuación y responde si son verdaderas o falsas:",
  8: "",
  9: "¿Qué pensamientos pudo tener María al decidir no contar nada? Ordena estas frases como crees que ella lo sintió.",
  10: "Lee estas frases y decide si representan amor sano o señales de alerta. Une cada una con su interpretación real.",
  11: "",
  12: "Encuentra las parejas que revelan mensajes escondidos entre las publicaciones eliminadas. ¿Qué imágenes y frases podrían haber sido señales?",
  13: "¿Puedes reconocer cuáles de estas afirmaciones son señales de una cultura del silencio que puede poner en riesgo a alguien?",
  14: "Lee cada pensamiento o creencia y une con su reflexión correcta. ¿Qué aprendizaje puedes extraer de esta situación?",
  15: "Ordena estas frases en la secuencia que revela cómo se fue ocultando y normalizando una relación que debería haber despertado alertas.",
  16: "",
  17: "",
  18: "",
};

const feedbackData = {
  0: "",
  1: "",
  2: "",
  3: "Prestar atención, no minimizar lo que se cuenta, crear un espacio seguro y ofrecer orientación profesional son formas efectivas de acompañar.",
  4: "Estas frases reflejan emociones profundas que muchas veces se callan. Reconocerlas es el primer paso para pedir ayuda",
  5: "Identificar emociones es el primer paso para pedir ayuda. Reconocer estas frases puede ayudarnos a detectar señales ocultas en personas cercanas",
  6: "",
  7: "",
  8: "Fomenta confianza y puede desbloquear a Luisa en una siguiente escena",
  9: "A veces el silencio no es decisión, es miedo aprendido.”",
  10: "¡Bien! El amor no necesita pruebas ni control. Reconocer estos mitos nos ayuda a prevenir relaciones dañinas.",
  11: "",
  12: "Muchos jóvenes no pueden contar lo que viven, pero sus redes sí lo gritan. Presta atención a los cambios, símbolos y silencios.",
  13: "",
  14: "La lealtad verdadera también se demuestra cuando ayudamos a quien no puede pedir ayuda abiertamente",
  15: "Las relaciones que comienzan con secretos, aislamiento y control suelen escalar. Identificar estos patrones es clave para prevenir daños",
  16: "",
  17: "",
  18: "",
};

// const layoutData = {
//   0: "Alayout",
//   1: "Ilayout",
//   2: "Ilayout",//BLACK BACKGROUND
//   3: "Jlayout",//SOLO IMAGEN SIN BOTONES LATERALES
//   4: "Blayout",//SELECCION MULTIPLE
//   5: "Clayout",//TRUE/FALSE
//   6: "Dlayout",//PAREJAS CORRECTAS
//   7: "Elayout",//ORDENAR FRAGMENTOS DE UNA ORACION
//   8: "Flayout",//ORDENAR PASOS
//   9: "Glayout",//COMPLETAR FRASES CON PALABRAS SUELTAS
//   10: "Hlayout",//MEMORIA
//   11: "Klayout",//SELECCIONAR UN JUGADOR
//   12: "Llayout",//SELECTOR DE BIFURCACION
//   13: "Xlayout",//SOLO HISTORIA
// };

const historyData = {
  // 0: "AAALorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
  // 1: "Esto no es un juego. Es una carrera contra el tiempo. Debes atar cabos, leer entre líneas y tomar decisiones que podrían cambiar una historia que aún no termina.   ",
  // 2: "María es muy lista y amable. Su risa es inconfundible, sus dibujos muy bonitos y de paso es muy graciosa. Sin embargo, cuando se falto a clases por primera vez ni lo notamos. La empezamos extrañar después de que se perdió el examen de matemáticas. Luego incluso cuando venía, parecía no estar con nosotros. </br></br>Finalmente un día solo vino su papá y nadie supo dar respuestas. </br></br> Este juego busca comprender. Porque detrás de cada historia de violencia hay señales que fueron ignoradas. </br> Podrás jugar desde el punto de vista de Mónica, una compañera, o de Miguel, el hermano mayor. Ambos te llevarán por caminos distintos, pero con un objetivo común: hallar a María, saber la verdad y activar un cambio.",
  0: "",
  1: "",
  2: "Al principio eran cosas pequeñas: dejó de reírse con nuestros chistes, y sus respuestas eran vagas y sarcásticas.",
  3: "Monica piensa: </br> Noté que algo pasó, pero no pregunté mucho más. Quizás lo  hubiera hecho si hubieramos sido más amigas, pero siempre estaba ocupada en el puesto de su familia. </br></br>Mónica observa el pupitre vacío donde solía sentarse María.",
  4: "Cuando la profe Inés me pidió que devolviera esa libreta extraviada y sin nombre, me fue difícil reconocer su letra... pero estaba segura que era de ella. No es un cuaderno de clases, sino un Diario personal. Aún no logro descifrarlo por completo.",
  5: "¿Acaso fui tan ciega? Ni siquiera puedo creer que sea su cuaderno. Los suyos siempre eran tan pulcros, mientras este es... Con razón ni la profe Inés se dio cuenta.”</br>“No entiendo todo lo que escribió, pero sí la siento a ella. </br> Guardaré este cuaderno por ahora",
  6: "Un día, un extraño vino esperarla a la salida y se fueron juntos en un auto. Yo pensaba que era su hermano mayor, el que vive en Viacha, pero luego me enteré que no era él.",
  7: "Poco después de aquella vez que la vinieron a recoger, María apareció con un celular nuevo. Con un estuche rosado y una cámara muy buena. “Me la regaló un admirador”, dijo haciendose la interesante. Luisa me susurró: “Su chico ha debido ser para que puedan hablar sin que sus papás se enteren”.</br> </br>En ese momento,  sentí envidia. Pensé que era emocionante tener un teléfono solo para ti, sin que nadie lo controle. Deberia buscar ese numero talvez si la llamo allí si conteste.",
  8: "Después de todo lo que había visto, decidí hablar con las chicas que más estaban con María. Tal vez alguna tuviera su número, o supiera algo más del chico del celular rosado.”“Pero todas se miraron con caras largas, incómodas. Nadie dijo nada por un rato.”</br>Mónica: —¿Ninguna sabe cómo contactarla?</br>Luisa (tras una pausa): —Ya no hablaba tanto con nosotras… últimamente estaba muy rara.",
  9: "Luisa fue la primera en hablar:</br></br>—No le pedí el número… ya me olía que no me lo iba a dar.</br>—Se ha escapado con su chico de seguro —dijo la de Acshon.</br>—¿Pero cuál chico? —pregunté. Nadie supo decirme. Solo risas incómodas. </br>Y nadie me supo responder con certeza. Entre risas incómodas y silencios largos, me quedó claro que sabían menos de lo que pensaban… o no querían aceptar lo que ya sospechaban. nada nuevo",
  10: "Entonces recordamos una charla que habíamos tenido semanas atrás, mientras esperábamos el micro. Luisa estaba molesta porque se había peleado con Ramiro, su chico. En medio del chisme, María soltó una frase que ahora nos retumbaba en la cabeza: </br> —“No te enojes porque te cela, si no fuera celoso deberías preocuparte. Es porque te quiere mucho que se intensea”.</br></br>Ese rato nos reimos, pero ahora… solo nos quedamos calladas.",
  11: "Narración interna de Mónica:</br>—Buscando en su Insta, noté que había eliminado casi todo. La última foto no era selfie, sino una tomada por alguien más. María señalaba algo fuera del cuadro. El pie de foto decía: “Lo mejor nunca se sube ;)”",
  12: "Buscando en su Insta, recién noté que María había borrado muchas selfies, como si borrara capítulos de su vida. La última imagen no era selfie, sino una foto tomada hace unos tres meses por alguien más. En ella aparece señalando algo fuera de cuadro. En el pie de foto - ‘Lo mejor nunca se sube ;)’",
  13: "Mientras veíamos esa foto notamos que Luisa se le escapó un grito ahogado. Con lo blanca que se puso blanca, no tuvimos que increparla. Ella sabía que sabíamos que sabía algo. </br></br> Bajó la mirada y se quedó en silencio. Luego, con voz baja, me confesó que al principio  María le pedía que la cubriera cuando salía con “su patito”, así le decía. “Luego solo se empezó a faltar sin más“</br></br>Luisa pensaba que la estaba ayudando, que era una sororidad entre amigas con chicos.",
  14: "Por su parte, Laura igual admitió que María le pidió cubrirla una vez, pero ella no lo hizo.</br></br>- Me dió miedo y por eso tampoco la acusé, solo no me quería meter en problemas.",
  15: "Le preguntamos por detalles, y en realidad no sabía mucho del patito</br></br>-Siempre le pedi chisme, pero nunca me dijo nada. Solo sé que no viene a nuestro cole, y por eso se escapaban. </br></br>-A qué cole irá? - Preguntó la de Laura </br></br>-Y si ese chico no va al colegio? - Pregunté, recordando al chico del auto.",
  16: "Nos despedimos sin encontrar una respuesta a mi pregunta… pero en sus silencios había más de lo que querían admitir.",
  17: "Dos días despúes vino un joven a preguntar por María, era su hermano Miguel. Parece que los profesores no le dejaron entrar a hablar con la clase. En especial desde que su papá vino a amenazar al director. María no solía hablar mucho de él,  pero Luisa lo reconoció. Cuando estaba partiendo, vi en su mano el celular rosado. ",
  18: "Era el celular de María, antes de que se vaya logré señalar el celular y cruzar una mirada con él. Miguel me esperó a la salida.</br></br>Este encuentro cambiará la historia de María.</br></br></br></br>Gracias por jugar el piloto de este juego",
};

const textData = {
  0: "",
  1: "",
  2: {
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
  3: {
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
  4: {
    memoryImages: ["6-1.png", "6-2.png", "6-3.png", "6-4.png"],
  },
  5: {
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
  6: {
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
  7: {
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
  8: {
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
  9: {
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
      ],
    },
  },
  10: {
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
  11: {
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
  12: {
    memoryImages: ["14-1.png", "14-3.png", "14-5.png", "14-7.png"],
  },
  13: {
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
  14: {
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
  15: {
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
  16: {
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
  17: {
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
  18: "",
};

const nextPagesData = {
  0: [],
  1: [5, 8, 10],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
};

const imagesData = {
  // 0: "intro.png",
  // 1: "blackback.jpeg",
  // 2: "blackback.jpeg",
  0: "Ecos del silencio.png",
  1: "blackback.jpeg",
  2: "S01 v1.0.png",
  3: "A1-001 v1.0.png",
  4: "A2 v1.0.png",
  5: "A3 v1.0.png",
  6: "A4 v1.0.png",
  7: "A05 v1.0.png",
  8: "A06 v1.0.png",
  9: "A07 v1.0.png",
  10: "A08 v1.0.png",
  11: "A09 v1.0.png",
  12: "A10 v1.0.png",
  13: "A11 v1.0.png",
  14: "A12 v1.0.png",
  15: "A13 v1.0.png",
  16: "A14 v1.0.png",
  17: "A15 v1.0.png",
  18: "X00.png",
};

const audioData = {
  0: "",
  1: "audios/audiointro.mp3",
  2: "audios/audiopage2.mp3",
  3: "",
  4: "",
  5: "",
};

//useOfAnd


["useOfAnd"+shuffledNumbersto[0]]: {
    botPrompt: 'Which word means "in addition to"?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['But', 'And', "Or","Not"]),
    answers: [
      {
        answer: 'But',
        nextId: 'inuseOfAndcorrect',
      },
      {
        answer: 'And',
        nextId: 'useOfAndcorrect',
      },
      {
        answer: "Or",
        nextId: 'inuseOfAndcorrect',
      },
      {
        answer: "Not",
        nextId: 'inuseOfAndcorrect',
      },
    ],
  },
  useOfAndcorrect: {
    botPrompt: 'Hurray <strong>And</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'useOfAnd'+shuffledNumbersto[1],
      },
    ],
  },
  inuseOfAndcorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
    answers: [
      {
        nextId: 'useOfAnd'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['useOfAnd'+shuffledNumbersto[1]]: {
    botPrompt: 'Which word is used to join two things together?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['But', 'And', "Or","Not"]),
    answers: [
      {
        answer: 'But',
        nextId: 'inuseOfAndcorrectq2',
      },
      {
        answer: 'And',
        nextId: 'useOfAndcorrectq2',
      },
      {
        answer: "Or",
        nextId: 'inuseOfAndcorrectq2',
      },
      {
        answer: "Not",
        nextId: 'inuseOfAndcorrectq2',
      },
    ],
  },
  
  useOfAndcorrectq2: {
    botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'useOfAnd'+shuffledNumbersto[2],
      },
    ],
  },
  inuseOfAndcorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
    answers: [
      {
        nextId: 'useOfAnd'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['useOfAnd'+shuffledNumbersto[2]]: {
  botPrompt: 'Which word connects ideas or actions?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq3',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq3',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq3',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq3',
    },
  ],
  },
  
  useOfAndcorrectq3: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[3],
    },
  ],
  },
  inuseOfAndcorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['useOfAnd'+shuffledNumbersto[3]]: {
  botPrompt: 'Which word is used to express similarity or continuation?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq4',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq4',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq4',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq4',
    },
  ],
  },
  
  useOfAndcorrectq4: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[4],
    },
  ],
  },
  inuseOfAndcorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['useOfAnd'+shuffledNumbersto[4]]: {
  botPrompt: 'Which word is used to indicate a combination of things?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq5',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq5',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq5',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq5',
    },
  ],
  },
  
  useOfAndcorrectq5: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[5],
    },
  ],
  },
  inuseOfAndcorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['useOfAnd'+shuffledNumbersto[5]]: {
  botPrompt: 'Ram is eating an apple ____ Shyam is eating an orange.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq6',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq6',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq6',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq6',
    },
  ],
  },
  
  useOfAndcorrectq6: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[6],
    },
  ],
  },
  inuseOfAndcorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['useOfAnd'+shuffledNumbersto[6]]: {
  botPrompt: 'Tina is reading a book ____ Timmy is drawing a picture.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq7',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq7',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq7',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq7',
    },
  ],
  },
  
  useOfAndcorrectq7: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[7],
    },
  ],
  },
  inuseOfAndcorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['useOfAnd'+shuffledNumbersto[7]]: {
  botPrompt: 'Which word can be used to express "rain" and "sun"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['rain and sun', 'rain or sun', "rain not sun","rain but sun"]),
  answers: [
    {
      answer: 'rain and sun',
      nextId: 'inuseOfAndcorrectq8',
    },
    {
      answer: 'rain or sun',
      nextId: 'useOfAndcorrectq8',
    },
    {
      answer: "rain not sun",
      nextId: 'inuseOfAndcorrectq8',
    },
    {
      answer: "rain but sun",
      nextId: 'inuseOfAndcorrectq8',
    },
  ],
  },
  
  useOfAndcorrectq8: {
  botPrompt: 'Hurray! <strong>rain and sun</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[8],
    },
  ],
  },
  inuseOfAndcorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"rain and sun"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['useOfAnd'+shuffledNumbersto[8]]: {
  botPrompt: 'Which word is used to indicate a join action or condition?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq9',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq9',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq9',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq9',
    },
  ],
  },
  
  useOfAndcorrectq9: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[9],
    },
  ],
  },
  inuseOfAndcorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['useOfAnd'+shuffledNumbersto[9]]: {
  botPrompt: 'Which word is used to combine two phrases or clauses?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq10',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq10',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq10',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq10',
    },
  ],
  
  },
  
  useOfAndcorrectq10: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[10],
    },
  ],
  },
  inuseOfAndcorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['useOfAnd'+shuffledNumbersto[10]]: {
  botPrompt: 'Which word is used to express addition or inclusion?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq11',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq11',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq11',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq11',
    },
  ],
  },
  
  useOfAndcorrectq11: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[11],
    },
  ],
  },
  inuseOfAndcorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['useOfAnd'+shuffledNumbersto[11]]: {
  botPrompt: 'Which word is used to show a connection between two ideas?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq12',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq12',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq12',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq12',
    },
  ],
  },
  
  useOfAndcorrectq12: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[12],
    },
  ],
  },
  inuseOfAndcorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['useOfAnd'+shuffledNumbersto[12]]: {
  botPrompt: 'Which word connects "book" and "pen"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['book and pen', 'book or pen', "book not pen","book but pen"]),
    answers: [
      {
        answer: 'book and pen',
        nextId: 'useOfAndcorrectq13',
      },
      {
        answer: 'book or pen',
        nextId: 'inuseOfAndcorrectq13',
      },
      {
        answer: "book not pen",
        nextId: 'inuseOfAndcorrectq13',
      },
      {
        answer: "book but pen",
        nextId: 'inuseOfAndcorrectq13',
      },
    ],
  },
  
  useOfAndcorrectq13: {
  botPrompt: 'Hurray! <strong>book and pen</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[13],
    },
  ],
  },
  inuseOfAndcorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"book and pen"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['useOfAnd'+shuffledNumbersto[13]]: {
  botPrompt: 'Which word is used to join words in a list?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq14',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq14',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq14',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq14',
    },
  ],
  },
  
  useOfAndcorrectq14: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[14],
    },
  ],
  },
  inuseOfAndcorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['useOfAnd'+shuffledNumbersto[14]]: {
  botPrompt: 'The flowers are blooming ____ the birds are singing.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq15',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq15',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq15',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq15',
    },
  ],
  },

  useOfAndcorrectq15: {
  botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[15],
    },
  ],
  },
  inuseOfAndcorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'useOfAnd'+shuffledNumbersto[15],
    },
  ],
  },

  //16
  ['useOfAnd'+shuffledNumbersto[15]]: {
    botPrompt: 'Which word can be used to join "flower" "butterfly"?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['flower and butterfly', 'flower or butterfly', "flower not butterfly","flower but butterfly"]),
    answers: [
      {
        answer: 'flower and butterfly',
        nextId: 'useOfAndcorrectq16',
      },
      {
        answer: 'flower or butterfly',
        nextId: 'inuseOfAndcorrectq16',
      },
      {
        answer: "flower not butterfly",
        nextId: 'inuseOfAndcorrectq16',
      },
      {
        answer: "flower but butterfly",
        nextId: 'inuseOfAndcorrectq16',
      },
    ],
  },
  useOfAndcorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>flower and butterfly</strong> 😎',
    answers: [
      {
        nextId: 'useOfAnd'+shuffledNumbersto[16],
      },
    ],
  },
  inuseOfAndcorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"flower and butterfly"</strong>',
    answers: [
      {
        nextId: 'useOfAnd'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['useOfAnd'+shuffledNumbersto[16]]: {
  botPrompt: 'Which word is used to introduce additional information?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['But', 'And', "Or","Not"]),
  answers: [
    {
      answer: 'But',
      nextId: 'inuseOfAndcorrectq17',
    },
    {
      answer: 'And',
      nextId: 'useOfAndcorrectq17',
    },
    {
      answer: "Or",
      nextId: 'inuseOfAndcorrectq17',
    },
    {
      answer: "Not",
      nextId: 'inuseOfAndcorrectq17',
    },
  ],
  },
  useOfAndcorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>And</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue32',
    },
  ],
  },
  inuseOfAndcorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue32',
    },
  ],
  },



  //enduseOfAndletter
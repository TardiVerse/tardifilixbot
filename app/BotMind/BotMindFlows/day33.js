//pairWords


["pairWords"+shuffledNumbersto[0]]: {
    botPrompt: 'Which word is the pair for "needle"?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Rat', 'Hat', "thread","Sun"]),
    answers: [
      {
        answer: 'Rat',
        nextId: 'inpairWordscorrect',
      },
      {
        answer: 'Hat',
        nextId: 'inpairWordscorrect',
      },
      {
        answer: "thread",
        nextId: 'pairWordscorrect',
      },
      {
        answer: "Sun",
        nextId: 'inpairWordscorrect',
      },
    ],
  },
  pairWordscorrect: {
    botPrompt: 'Hurray <strong>thread</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'pairWords'+shuffledNumbersto[1],
      },
    ],
  },
  inpairWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"thread"</strong>',
    answers: [
      {
        nextId: 'pairWords'+shuffledNumbersto[1],
      },
    ],
  },

  ['pairWords'+shuffledNumbersto[1]]: {
    botPrompt: 'Which word is the pair for "ear"?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['Hearing', 'eyes', "Mouth","Foot"]),
    answers: [
      {
        answer: 'Hearing',
        nextId: 'inpairWordscorrectq2',
      },
      {
        answer: 'eyes',
        nextId: 'pairWordscorrectq2',
      },
      {
        answer: "Mouth",
        nextId: 'inpairWordscorrectq2',
      },
      {
        answer: "Foot",
        nextId: 'inpairWordscorrectq2',
      },
    ],
  },

  pairWordscorrectq2: {
    botPrompt: 'Hurray! <strong>eyes</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'pairWords'+shuffledNumbersto[2],
      },
    ],
  },
  inpairWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"eyes"</strong>',
    answers: [
      {
        nextId: 'pairWords'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['pairWords'+shuffledNumbersto[2]]: {
  botPrompt: 'Which word is the pair for "cat"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Dog', 'Hat', "Rat","Sun"]),
  answers: [
    {
      answer: 'Dog',
      nextId: 'pairWordscorrectq3',
    },
    {
      answer: 'Hat',
      nextId: 'inpairWordscorrectq3',
    },
    {
      answer: "Rat",
      nextId: 'inpairWordscorrectq3',
    },
    {
      answer: "Sun",
      nextId: 'inpairWordscorrectq3',
    },
  ],
  },

  pairWordscorrectq3: {
  botPrompt: 'Hurray! <strong>Dog</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[3],
    },
  ],
  },
  inpairWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dog"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[3],
    },
  ],
  },

  //4
  ['pairWords'+shuffledNumbersto[3]]: {
  botPrompt: 'Which word is the pair for "knife"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Spoon', 'Fork', "Plate","Glass"]),
  answers: [
    {
      answer: 'Spoon',
      nextId: 'inpairWordscorrectq4',
    },
    {
      answer: 'Fork',
      nextId: 'pairWordscorrectq4',
    },
    {
      answer: "Plate",
      nextId: 'inpairWordscorrectq4',
    },
    {
      answer: "Glass",
      nextId: 'inpairWordscorrectq4',
    },
  ],
  },

  pairWordscorrectq4: {
  botPrompt: 'Hurray! <strong>Fork</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[4],
    },
  ],
  },
  inpairWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fork"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[4],
    },
  ],
  },

  //5
  ['pairWords'+shuffledNumbersto[4]]: {
  botPrompt: 'Which word is the pair for "rice"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Glass', 'Cup', "Plate","Bowl"]),
  answers: [
    {
      answer: 'Glass',
      nextId: 'inpairWordscorrectq5',
    },
    {
      answer: 'Cup',
      nextId: 'inpairWordscorrectq5',
    },
    {
      answer: "Plate",
      nextId: 'pairWordscorrectq5',
    },
    {
      answer: "Bowl",
      nextId: 'inpairWordscorrectq5',
    },
  ],
  },

  pairWordscorrectq5: {
  botPrompt: 'Hurray! <strong>Plate</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[5],
    },
  ],
  },
  inpairWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Plate"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[5],
    },
  ],
  },

  //6
  ['pairWords'+shuffledNumbersto[5]]: {
  botPrompt: 'Which word is the pair for "shoes"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Hat', 'Gloves', "Scarf","Socks"]),
  answers: [
    {
      answer: 'Hat',
      nextId: 'inpairWordscorrectq6',
    },
    {
      answer: 'Gloves',
      nextId: 'inpairWordscorrectq6',
    },
    {
      answer: "Scarf",
      nextId: 'inpairWordscorrectq6',
    },
    {
      answer: "Socks",
      nextId: 'pairWordscorrectq6',
    },
  ],
  },

  pairWordscorrectq6: {
  botPrompt: 'Hurray! <strong>Socks</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[6],
    },
  ],
  },
  inpairWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Socks"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['pairWords'+shuffledNumbersto[6]]: {
  botPrompt: 'Which word is the pair for "cup"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Glass', 'Plate', "Bowl","Saucer"]),
  answers: [
    {
      answer: 'Glass',
      nextId: 'inpairWordscorrectq7',
    },
    {
      answer: 'Plate',
      nextId: 'inpairWordscorrectq7',
    },
    {
      answer: "Bowl",
      nextId: 'inpairWordscorrectq7',
    },
    {
      answer: "Saucer",
      nextId: 'pairWordscorrectq7',
    },
  ],
  },

  pairWordscorrectq7: {
  botPrompt: 'Hurray! <strong>Saucer</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[7],
    },
  ],
  },
  inpairWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Saucer"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[7],
    },
  ],
  },
  

  //8
  ['pairWords'+shuffledNumbersto[7]]: {
  botPrompt: 'Which word is the pair for "salt"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Pepper', 'Sugar', "Floor","Butter"]),
  answers: [
    {
      answer: 'Pepper',
      nextId: 'inpairWordscorrectq8',
    },
    {
      answer: 'Sugar',
      nextId: 'pairWordscorrectq8',
    },
    {
      answer: "Floor",
      nextId: 'inpairWordscorrectq8',
    },
    {
      answer: "Butter",
      nextId: 'inpairWordscorrectq8',
    },
  ],
  },
  
  pairWordscorrectq8: {
  botPrompt: 'Hurray! <strong>Sugar</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[8],
    },
  ],
  },
  inpairWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sugar"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[8],
    },
  ],
  },

  //9
  ['pairWords'+shuffledNumbersto[8]]: {
  botPrompt: 'Which word is the pair for "milk"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Water', 'Juice', "Bread","Soda"]),
  answers: [
    {
      answer: 'Water',
      nextId: 'pairWordscorrectq9',
    },
    {
      answer: 'Juice',
      nextId: 'inpairWordscorrectq9',
    },
    {
      answer: "Bread",
      nextId: 'inpairWordscorrectq9',
    },
    {
      answer: "Soda",
      nextId: 'inpairWordscorrectq9',
    },
  ],
  },

  pairWordscorrectq9: {
  botPrompt: 'Hurray! <strong>Water</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[9],
    },
  ],
  },
  inpairWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Water"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[9],
    },
  ],
  },
  

  //10
  ['pairWords'+shuffledNumbersto[9]]: {
  botPrompt: 'Which word is the pair for "ice"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Fire', 'Sour', "Sun","Rain"]),
  answers: [
    {
      answer: 'Fire',
      nextId: 'pairWordscorrectq10',
    },
    {
      answer: 'Sour',
      nextId: 'inpairWordscorrectq10',
    },
    {
      answer: "Sun",
      nextId: 'inpairWordscorrectq10',
    },
    {
      answer: "Rain",
      nextId: 'inpairWordscorrectq10',
    },
  ],
  
  },

  pairWordscorrectq10: {
  botPrompt: 'Hurray! <strong>Fire</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[10],
    },
  ],
  },
  inpairWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fire"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[10],
    },
  ],
  },

  //11
  ['pairWords'+shuffledNumbersto[10]]: {
  botPrompt: 'Which word is the pair for "hands"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Feet', 'Fingers', "Ears","Nose"]),
  answers: [
    {
      answer: 'Feet',
      nextId: 'inpairWordscorrectq11',
    },
    {
      answer: 'Fingers',
      nextId: 'pairWordscorrectq11',
    },
    {
      answer: "Ears",
      nextId: 'inpairWordscorrectq11',
    },
    {
      answer: "Nose",
      nextId: 'inpairWordscorrectq11',
    },
  ],
  },

  pairWordscorrectq11: {
  botPrompt: 'Hurray! <strong>Fingers</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[11],
    },
  ],
  },
  inpairWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fingers"</strong>',
  answers: [
    {
      nextId: 'pairWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['pairWords'+shuffledNumbersto[11]]: {
  botPrompt: 'Which word is the pair for "pots"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Pans', 'Cups', "Plates","Utensils"]),
  answers: [
    {
      answer: 'Pans',
      nextId: 'pairWordscorrectq12',
    },
    {
      answer: 'Cups',
      nextId: 'inpairWordscorrectq12',
    },
    {
      answer: "Plates",
      nextId: 'inpairWordscorrectq12',
    },
    {
      answer: "Utensils",
      nextId: 'inpairWordscorrectq12',
    },
  ],
  },

  pairWordscorrectq12: {
  botPrompt: 'Hurray! <strong>Pans</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontinue34',
    },
  ],
  },
  inpairWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pans"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue34',
    },
  ],
  },

  //endPairWords
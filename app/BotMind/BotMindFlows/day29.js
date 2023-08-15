//colours


["colours"+shuffledNumbersto[0]]: {
    botPrompt: 'What is the colour of  rose?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Blue', 'Red', "Green","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrect',
      },
      {
        answer: 'Red',
        nextId: 'colourscorrect',
      },
      {
        answer: "Green",
        nextId: 'incolourscorrect',
      },
      {
        answer: "Yellow",
        nextId: 'incolourscorrect',
      },
    ],
  },
  colourscorrect: {
    botPrompt: 'Hurray <strong>Red</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[1],
      },
    ],
  },
  incolourscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Red"</strong>',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['colours'+shuffledNumbersto[1]]: {
    botPrompt: 'What is the colour of the sun?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Black', 'Yellow', "Purple","Pink"]),
    answers: [
      {
        answer: 'Black',
        nextId: 'incolourscorrectq2',
      },
      {
        answer: 'Yellow',
        nextId: 'colourscorrectq2',
      },
      {
        answer: "Purple",
        nextId: 'incolourscorrectq2',
      },
      {
        answer: "Pink",
        nextId: 'incolourscorrectq2',
      },
    ],
  },
  
  colourscorrectq2: {
    botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[2],
      },
    ],
  },
  incolourscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['colours'+shuffledNumbersto[2]]: {
  botPrompt: 'What is the colour of banana?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Green', 'Brown', "White","Yellow"]),
    answers: [
      {
        answer: 'Green',
        nextId: 'incolourscorrectq3',
      },
      {
        answer: 'Brown',
        nextId: 'incolourscorrectq3',
      },
      {
        answer: "White",
        nextId: 'incolourscorrectq3',
      },
      {
        answer: "Yellow",
        nextId: 'colourscorrectq3',
      },
    ],
  },
  
  colourscorrectq3: {
  botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[3],
    },
  ],
  },
  incolourscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['colours'+shuffledNumbersto[3]]: {
  botPrompt: 'What is the colour of radish?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Black', "Red","White"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq4',
      },
      {
        answer: 'Black',
        nextId: 'incolourscorrectq4',
      },
      {
        answer: "Red",
        nextId: 'incolourscorrectq4',
      },
      {
        answer: "White",
        nextId: 'colourscorrectq4',
      },
    ],
  },
  
  colourscorrectq4: {
  botPrompt: 'Hurray! <strong>White</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[4],
    },
  ],
  },
  incolourscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['colours'+shuffledNumbersto[4]]: {
  botPrompt: 'What is the colour of brinjal?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Purple', "Red","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq5',
      },
      {
        answer: 'Purple',
        nextId: 'colourscorrectq5',
      },
      {
        answer: "Red",
        nextId: 'incolourscorrectq5',
      },
      {
        answer: "Yellow",
        nextId: 'incolourscorrectq5',
      },
    ],
  },
  
  colourscorrectq5: {
  botPrompt: 'Hurray! <strong>Purple</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[5],
    },
  ],
  },
  incolourscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Purple"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['colours'+shuffledNumbersto[5]]: {
  botPrompt: 'What is the colour of tomato?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Green', "Purple","Red"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq6',
      },
      {
        answer: 'Green',
        nextId: 'incolourscorrectq6',
      },
      {
        answer: "Purple",
        nextId: 'incolourscorrectq6',
      },
      {
        answer: "Red",
        nextId: 'colourscorrectq6',
      },
    ],
  },
  
  colourscorrectq6: {
  botPrompt: 'Hurray! <strong>Red</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[6],
    },
  ],
  },
  incolourscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>Red</strong> answer is <strong>"Red"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[6],
    },
  ],
  },

  //7
  ['colours'+shuffledNumbersto[6]]: {
  botPrompt: 'What is the colour of the flower?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Red', "Orange","Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq7',
      },
      {
        answer: 'Red',
        nextId: 'colourscorrectq7',
      },
      {
        answer: "Orange",
        nextId: 'colourscorrectq7',
      },
      {
        answer: "Pink",
        nextId: 'colourscorrectq7',
      },
    ],
  },
  
  colourscorrectq7: {
  botPrompt: 'Hurray! <strong>Orange or Red or Pink</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[7],
    },
  ],
  },
  incolourscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange or Red or Pink"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['colours'+shuffledNumbersto[7]]: {
  botPrompt: 'What is the colour of the orange?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Orange', "Purple","Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq8',
      },
      {
        answer: 'Orange',
        nextId: 'colourscorrectq8',
      },
      {
        answer: "Purple",
        nextId: 'incolourscorrectq8',
      },
      {
        answer: "Pink",
        nextId: 'incolourscorrectq8',
      },
    ],
  },
  
  colourscorrectq8: {
  botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[8],
    },
  ],
  },
  incolourscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['colours'+shuffledNumbersto[8]]: {
  botPrompt: 'Which colour is the opposite of snow?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Black', "White","Green"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq9',
      },
      {
        answer: 'Black',
        nextId: 'colourscorrectq9',
      },
      {
        answer: "White",
        nextId: 'incolourscorrectq9',
      },
      {
        answer: "Green",
        nextId: 'incolourscorrectq9',
      },
    ],
  },
  
  colourscorrectq9: {
  botPrompt: 'Hurray! <strong>Black</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[9],
    },
  ],
  },
  incolourscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Black"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['colours'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the colour of carrot?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Blue', 'Orange', "Green","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'colourscorrectq10',
      },
      {
        answer: 'Orange',
        nextId: 'incolourscorrectq10',
      },
      {
        answer: "Green",
        nextId: 'incolourscorrectq10',
      },
      {
        answer: "Yellow",
        nextId: 'incolourscorrectq10',
      },
    ],
  
  },
  
  colourscorrectq10: {
  botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[10],
    },
  ],
  },
  incolourscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['colours'+shuffledNumbersto[10]]: {
  botPrompt: 'What is the colour of tuberose?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['White', 'Orange', "Purple","Pink"]),
    answers: [
      {
        answer: 'White',
        nextId: 'colourscorrectq11',
      },
      {
        answer: 'Orange',
        nextId: 'incolourscorrectq11',
      },
      {
        answer: "Purple",
        nextId: 'incolourscorrectq11',
      },
      {
        answer: "Pink",
        nextId: 'incolourscorrectq11',
      },
    ],
  },
  
  colourscorrectq11: {
  botPrompt: 'Hurray! <strong>White</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[11],
    },
  ],
  },
  incolourscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['colours'+shuffledNumbersto[11]]: {
  botPrompt: 'What is the colour of pumpkin?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Orange', "Red","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq12',
      },
      {
        answer: 'Orange',
        nextId: 'incolourscorrectq12',
      },
      {
        answer: "Red",
        nextId: 'incolourscorrectq12',
      },
      {
        answer: "Yellow",
        nextId: 'colourscorrectq12',
      },
    ],
  },
  
  colourscorrectq12: {
  botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[12],
    },
  ],
  },
  incolourscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['colours'+shuffledNumbersto[12]]: {
  botPrompt: 'What is the colour of strawberry milkshake?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Red', "Yellow"," Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq13',
      },
      {
        answer: 'Red',
        nextId: 'incolourscorrectq13',
      },
      {
        answer: "Yellow",
        nextId: 'incolourscorrectq13',
      },
      {
        answer: "Pink",
        nextId: 'colourscorrectq13',
      },
    ],
  },
  
  colourscorrectq13: {
  botPrompt: 'Hurray! <strong>Pink</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[13],
    },
  ],
  },
  incolourscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pink"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['colours'+shuffledNumbersto[13]]: {
  botPrompt: 'What is the colour of a lime?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Green', "Purple","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq14',
      },
      {
        answer: 'Green',
        nextId: 'colourscorrectq14',
      },
      {
        answer: "Purple",
        nextId: 'incolourscorrectq14',
      },
      {
        answer: "Yellow",
        nextId: 'incolourscorrectq14',
      },
    ],
  },
  
  colourscorrectq14: {
  botPrompt: 'Hurray! <strong>Green</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[14],
    },
  ],
  },
  incolourscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Green"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['colours'+shuffledNumbersto[14]]: {
  botPrompt: 'What is the colour of an apple?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Red', "Yellow","Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq15',
      },
      {
        answer: 'Red',
        nextId: 'colourscorrectq15',
      },
      {
        answer: "Yellow",
        nextId: 'incolourscorrectq15',
      },
      {
        answer: "Pink",
        nextId: 'incolourscorrectq15',
      },
    ],
  },

  colourscorrectq15: {
  botPrompt: 'Hurray! <strong>Red</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[15],
    },
  ],
  },
  incolourscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Red"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['colours'+shuffledNumbersto[15]]: {
    botPrompt: 'What is the colour of sky?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Blue', 'Red', "Green","Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'colourscorrectq16',
      },
      {
        answer: 'Red',
        nextId: 'incolourscorrectq16',
      },
      {
        answer: "Green",
        nextId: 'incolourscorrectq16',
      },
      {
        answer: "Pink",
        nextId: 'incolourscorrectq16',
      },
    ],
  },
  colourscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Blue</strong> 😎',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[16],
      },
    ],
  },
  incolourscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Blue"</strong>',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['colours'+shuffledNumbersto[16]]: {
  botPrompt: 'What is the colour of the watermelon?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Blue', 'Green', "Red","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incolourscorrectq17',
      },
      {
        answer: 'Green',
        nextId: 'colourscorrectq17',
      },
      {
        answer: "Red",
        nextId: 'incolourscorrectq17',
      },
      {
        answer: "Yellow",
        nextId: 'incolourscorrectq17',
      },
    ],
  },
  colourscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Green</strong> 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[17],
    },
  ],
  },
  incolourscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Green"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['colours'+shuffledNumbersto[17]]: {
  botPrompt: 'What is the colour of snowman?.   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Blue', 'White', "Purple","Pink"]),
  answers: [
    {
      answer: 'Blue',
      nextId: 'incolourscorrectq18',
    },
    {
      answer: 'White',
      nextId: 'colourscorrectq18',
    },
    {
      answer: "Purple",
      nextId: 'incolourscorrectq18',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq18',
    },
  ],
  },
  colourscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>White</strong> 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[18],
    },
  ],
  },
  incolourscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['colours'+shuffledNumbersto[18]]: {
  botPrompt: 'What is the colour of butterfly?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Blue', 'Red', "Orange","Yellow"]),
  answers: [
    {
      answer: 'Blue',
      nextId: 'colourscorrectq19',
    },
    {
      answer: 'Red',
      nextId: 'colourscorrectq19',
    },
    {
      answer: "Orange",
      nextId: 'colourscorrectq19',
    },
    {
      answer: "Yellow",
      nextId: 'colourscorrectq19',
    },
  ],
  },
  colourscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Blue or Red or Orange or Yellow</strong> Answers! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[19],
    },
  ],
  },
  incolourscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Blue or Red or Orange or Yellow"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['colours'+shuffledNumbersto[19]]: {
  botPrompt: 'What is the colour of hair?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Black', 'Red', "Green","Yellow"]),
  answers: [
    {
      answer: 'Black',
      nextId: 'colourscorrectq20',
    },
    {
      answer: 'Red',
      nextId: 'incolourscorrectq20',
    },
    {
      answer: "Green",
      nextId: 'incolourscorrectq20',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq20',
    },
  ],
  },
  colourscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Black</strong> 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[20],
    },
  ],
  },
  incolourscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Black"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["colours"+shuffledNumbersto[20]]: {
    botPrompt: 'Which colour is the opposite of black?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Blue', 'Red', "Yellow","White"]),
  answers: [
    {
      answer: 'Blue',
      nextId: 'incolourscorrectq21',
    },
    {
      answer: 'Red',
      nextId: 'incolourscorrectq21',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq21',
    },
    {
      answer: "White",
      nextId: 'colourscorrectq21',
    },
  ],
  },
  colourscorrectq21: {
    botPrompt: 'Hurray <strong>White</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[21],
      },
    ],
  },
  incolourscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['colours'+shuffledNumbersto[21]]: {
    botPrompt: 'Which colour is the result of mixing red and blue?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Yellow', 'Green', "Purple","Pink"]),
  answers: [
    {
      answer: 'Yellow',
      nextId: 'incolourscorrectq22',
    },
    {
      answer: 'Green',
      nextId: 'incolourscorrectq22',
    },
    {
      answer: "Purple",
      nextId: 'colourscorrectq22',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq22',
    },
  ],
  },
  
  colourscorrectq22: {
    botPrompt: 'Hurray! <strong>Purple</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[22],
      },
    ],
  },
  incolourscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Purple"</strong>',
    answers: [
      {
        nextId: 'colours'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['colours'+shuffledNumbersto[22]]: {
  botPrompt: 'Which colour is the result of mixing red and yellow?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Green', 'Blue', "Orange","Pink"]),
  answers: [
    {
      answer: 'Green',
      nextId: 'incolourscorrectq23',
    },
    {
      answer: 'Blue',
      nextId: 'incolourscorrectq23',
    },
    {
      answer: "Orange",
      nextId: 'colourscorrectq23',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq23',
    },
  ],
  },
  
  colourscorrectq23: {
  botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[23],
    },
  ],
  },
  incolourscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['colours'+shuffledNumbersto[23]]: {
  botPrompt: 'Which colour is the result of mixing blue and yellow?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Red', 'Green', "Orange","Pink"]),
  answers: [
    {
      answer: 'Red',
      nextId: 'incolourscorrectq24',
    },
    {
      answer: 'Green',
      nextId: 'colourscorrectq24',
    },
    {
      answer: "Orange",
      nextId: 'incolourscorrectq24',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq24',
    },
  ],
  },
  
  colourscorrectq24: {
  botPrompt: 'Hurray! <strong>Green</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[24],
    },
  ],
  },
  incolourscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Green"</strong>',
  answers: [
    {
      nextId: 'colours'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['colours'+shuffledNumbersto[24]]: {
  botPrompt: 'Which color is often associated with sunshine?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue ', 'Green', "Brown","Yellow"]),
  answers: [
    {
      answer: 'Blue ',
      nextId: 'incolourscorrectq25',
    },
    {
      answer: 'Green',
      nextId: 'incolourscorrectq25',
    },
    {
      answer: "Brown",
      nextId: 'incolourscorrectq25',
    },
    {
      answer: "Yellow",
      nextId: 'colourscorrectq25',
    },
  ],
  },

  colourscorrectq25: {
  botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontinue29',
    },
  ],
  },
  incolourscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue29',
    },
  ],
  },
  

  //endcoloursletter
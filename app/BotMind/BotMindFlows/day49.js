//shapes


["shapes"+shuffledNumbersto[0]]: {
    botPrompt: 'Which shape has three sides?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'inshapescorrect',
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrect',
      },
      {
        answer: "Square",
        nextId: 'inshapescorrect',
      },
      {
        answer: "Triangle",
        nextId: 'shapescorrect',
      },
    ],
  },
  shapescorrect: {
    botPrompt: 'Hurray <strong>Triangle</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[1],
      },
    ],
  },
  inshapescorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Triangle"</strong>',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['shapes'+shuffledNumbersto[1]]: {
    botPrompt: 'Which shape has four sides of equal length?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'inshapescorrectq2',
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrectq2',
      },
      {
        answer: "Square",
        nextId: 'shapescorrectq2',
      },
      {
        answer: "Triangle",
        nextId: 'inshapescorrectq2',
      },
    ],
  },

  shapescorrectq2: {
    botPrompt: 'Hurray! <strong>Square</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[2],
      },
    ],
  },
  inshapescorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Square"</strong>',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['shapes'+shuffledNumbersto[2]]: {
  botPrompt: 'Which shape is round with no lines?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'shapescorrectq2',
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrectq2',
      },
      {
        answer: "Square",
        nextId: 'inshapescorrectq2',
      },
      {
        answer: "Triangle",
        nextId: 'inshapescorrectq2',
      },
    ],
  },

  shapescorrectq3: {
  botPrompt: 'Hurray! <strong>"Circle"</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[3],
    },
  ],
  },
  inshapescorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[3],
    },
  ],
  },

  //4
  ['shapes'+shuffledNumbersto[3]]: {
  botPrompt: 'How many sides does a rectangle have? ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1', '2', "3","4"]),
  answers: [
    {
      answer: '1',
      nextId: 'inshapescorrectq2',
    },
    {
      answer: '2',
      nextId: 'inshapescorrectq2',
    },
    {
      answer: "3",
      nextId: 'inshapescorrectq2',
    },
    {
      answer: "4",
      nextId: 'shapescorrectq2',
    },
  ],
  },
  
  shapescorrectq4: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[4],
    },
  ],
  },
  inshapescorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['shapes'+shuffledNumbersto[4]]: {
  botPrompt: 'How many corners does a triangle have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'inshapescorrectq5',
    },
    {
      answer: '3',
      nextId: 'shapescorrectq5',
    },
    {
      answer: "4",
      nextId: 'inshapescorrectq5',
    },
    {
      answer: "5",
      nextId: 'inshapescorrectq5',
    },
  ],
  },
  
  shapescorrectq5: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[5],
    },
  ],
  },
  inshapescorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['shapes'+shuffledNumbersto[5]]: {
  botPrompt: 'Which shape has 3 sides?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Triangle",
      nextId: 'shapescorrectq6',
    },
  ],
  },
  
  shapescorrectq6: {
  botPrompt: 'Hurray! <strong>Triangle</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[6],
    },
  ],
  },
  inshapescorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Triangle"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['shapes'+shuffledNumbersto[6]]: {
  botPrompt: 'Which shape has straight sides and four corners?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Square",
      nextId: 'shapescorrectq6',
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq6',
    },
  ],
  },

  shapescorrectq7: {
  botPrompt: 'Hurray! <strong>Square</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[7],
    },
  ],
  },
  inshapescorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Square"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['shapes'+shuffledNumbersto[7]]: {
  botPrompt: 'Which shape has no sides or corners?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'shapescorrectq6',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq6',
    },
  ],
  },
  
  shapescorrectq8: {
  botPrompt: 'Hurray! <strong>Circle</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[8],
    },
  ],
  },
  inshapescorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['shapes'+shuffledNumbersto[8]]: {
  botPrompt: 'How many corners does a square have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
  answers: [
    {
      answer: '4',
      nextId: 'shapescorrectq9',
    },
    {
      answer: '5',
      nextId: 'inshapescorrectq9',
    },
    {
      answer: "6",
      nextId: 'inshapescorrectq9',
    },
    {
      answer: "7",
      nextId: 'inshapescorrectq9',
    },
  ],
  },
  
  shapescorrectq9: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[9],
    },
  ],
  },
  inshapescorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['shapes'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the shape of a laddoo?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'shapescorrectq6',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq6',
    },
  ],
  
  },
  
  shapescorrectq10: {
  botPrompt: 'Hurray! <strong>Circle</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishToContinue50'
    },
  ],
  },
  inshapescorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
  answers: [
    {
      nextId: 'wishToContinue50'
    },
  ],
  },

  //endshapesletter
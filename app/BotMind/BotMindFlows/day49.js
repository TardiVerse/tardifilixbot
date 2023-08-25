day49: {
  botPrompt: '<strong> Day 49 : </strong> Shapes play a crucial role in kindergarten as they lay the foundation for understanding the world around us',
  answers: [
          { nextId: 'day49link' },
  ],
},
day49link: {

  botPrompt: 'https://youtu.be/RM1rc5j-sww',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day492comment' },
  ],
},

day492comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day492link' },
  ],
},
day492link: {
  botPrompt: 'https://drive.google.com/file/d/1q1KG4qtxXnB1oxP7bat-aqAa4q64HR-D/view?usp=share_link',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[0],
    },
  ],
},

//shapes

//1
["shapes"+shuffledNumbersto[0]]: {
    botPrompt: 'Which shape has three sides?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'inshapescorrect',
        sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrect',
        sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "Square",
        nextId: 'inshapescorrect',
        sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "Triangle",
        nextId: 'shapescorrect',
        sumToBags: [{ name: 'c', points: 1 },  { name: 'd', points: 8 }],
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
  
  //2
  ['shapes'+shuffledNumbersto[1]]: {
    botPrompt: 'Which shape has four sides of equal length?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'inshapescorrectq2',
         sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrectq2',
         sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Square",
        nextId: 'shapescorrectq2',
         sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: "Triangle",
        nextId: 'inshapescorrectq2',
         sumToBags: [{ name: 'i', points: 1 }],
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
        nextId: 'shapescorrectq3',
        sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrectq3',
        sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Square",
        nextId: 'inshapescorrectq3',
        sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Triangle",
        nextId: 'inshapescorrectq3',
        sumToBags: [{ name: 'i', points: 1 }],
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
      nextId: 'inshapescorrectq4',
      sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: '4',
      nextId: 'inshapescorrectq4',
      sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "3",
      nextId: 'inshapescorrectq4',
      sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "4",
      nextId: 'shapescorrectq4',
      sumToBags: [{ name: 'c', points: 1 }],
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
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: '3',
      nextId: 'shapescorrectq5',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "4",
      nextId: 'inshapescorrectq5',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "5",
      nextId: 'inshapescorrectq5',
       sumToBags: [{ name: 'i', points: 1 }],
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
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq6',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq6',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Triangle",
      nextId: 'shapescorrectq6',
       sumToBags: [{ name: 'c', points: 1 }],
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
      nextId: 'inshapescorrectq7',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq7',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Square",
      nextId: 'shapescorrectq7',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq7',
       sumToBags: [{ name: 'i', points: 1 }],
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
      nextId: 'shapescorrectq8',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq8',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq8',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq8',
       sumToBags: [{ name: 'i', points: 1 }],
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
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: '5',
      nextId: 'inshapescorrectq9',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "6",
      nextId: 'inshapescorrectq9',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "7",
      nextId: 'inshapescorrectq9',
       sumToBags: [{ name: 'i', points: 1 }],
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
      nextId: 'shapescorrectq10',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq10',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq10',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq10',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  
  },
  
  shapescorrectq10: {
  botPrompt: 'Hurray! <strong>Circle</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishToContinue49'
    },
  ],
  },
  inshapescorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
  answers: [
    {
      nextId: 'wishToContinue49'
    },
  ],
  },

  //endshapesletter
day45: {
  botPrompt: '<strong> Day 45 : </strong> Division is essential in kindergarten as it helps children develop their basic math skills by understanding sharing and equal distribution',
  answers: [
          { nextId: 'day452comment' },
  ],
},

day452comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day451link' },
  ],
},
day451link: {

  botPrompt: 'https://drive.google.com/file/d/1m3PAK02sWCi7IEPF8fPiGHVFo6frm_8G/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day452link' },
  ],
},
day452link: {

  botPrompt: 'https://drive.google.com/file/d/1pHs1-6e0iESjWr1GDbOVcVwrrasFovej/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day454link' },
  ],
},
day454link: {
  botPrompt: 'https://drive.google.com/file/d/1U1x8FyRcRDggFyLa_glAjblejOVpbGh8/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[0],
    },
  ],
},
//myHeShe


["myHeShe"+shuffledNumbersto[0]]: {
    botPrompt: '_______ going to the park to play.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
      {
        answer: 'I aam',
        nextId: 'inmyHeShecorrect',
         sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: 'am',
        nextId: 'inmyHeShecorrect',
         sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrect',
         sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "I am",
        nextId: 'myHeShecorrect',
         sumToBags: [{ name: 'c', points: 1 },  { name: 'd', points: 8 }],
      },
    ],
  },
  myHeShecorrect: {
    botPrompt: 'Hurray <strong>I am</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[1],
      },
    ],
  },
  inmyHeShecorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['myHeShe'+shuffledNumbersto[1]]: {
    botPrompt: '_______ drawing a picture.?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
      {
        answer: 'I aam',
        nextId: 'inmyHeShecorrectq2',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'am',
        nextId: 'inmyHeShecorrectq2',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq2',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I am",
        nextId: 'myHeShecorrectq2',
          sumToBags: [{ name: 'c', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq2: {
    botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[2],
      },
    ],
  },
  inmyHeShecorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['myHeShe'+shuffledNumbersto[2]]: {
  botPrompt: "_______ wearing a blue shirt today.",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
        {
            answer: 'I aam',
            nextId: 'inmyHeShecorrectq3',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: 'am',
            nextId: 'inmyHeShecorrectq3',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq3',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I am",
            nextId: 'myHeShecorrectq3',
              sumToBags: [{ name: 'c
                sumToBags: [{ name: 'i', points: 1 }],', points: 1 }],
          },
        ],
  },
  
  myHeShecorrectq3: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[3],
    },
  ],
  },
  inmyHeShecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['myHeShe'+shuffledNumbersto[3]]: {
  botPrompt: '_______ playing with my friends.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I aam', 'am', "I amm","I am"]),
  answers: [
    {
        answer: 'I aam',
        nextId: 'myHeShecorrectq4',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'am',
        nextId: 'inmyHeShecorrectq4',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq4',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I am",
        nextId: 'inmyHeShecorrectq4',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq4: {
  botPrompt: 'Hurray! <strong>I aam</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[4],
    },
  ],
  },
  inmyHeShecorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I aam"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['myHeShe'+shuffledNumbersto[4]]: {
  botPrompt: '_______ eating an apple for snack.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
        {
            answer: 'I aam',
            nextId: 'myHeShecorrectq5',
              sumToBags: [{ name: 'c', points: 1 }],
          },
          {
            answer: 'am',
            nextId: 'inmyHeShecorrectq5',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq5',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I am",
            nextId: 'inmyHeShecorrectq5',
              sumToBags: [{ name: 'i', points: 1 }],
          },
    ],
  },
  
  myHeShecorrectq5: {
  botPrompt: 'Hurray! <strong>I aam</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[5],
    },
  ],
  },
  inmyHeShecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I aam"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['myHeShe'+shuffledNumbersto[5]]: {
  botPrompt: '_______ favourite colour is blue.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', 'Me', "I","My"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'inmyHeShecorrectq6',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq6',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq6',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "My",
        nextId: 'myHeShecorrectq6',
          sumToBags: [{ name: 'c', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq6: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[6],
    },
  ],
  },
  inmyHeShecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['myHeShe'+shuffledNumbersto[6]]: {
  botPrompt: '_______ teacher is kind and helpful.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', 'Me', "I","My"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'inmyHeShecorrectq7',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq7',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I",
        nextId: 'myHeShecorrectq7',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: "My",
        nextId: 'inmyHeShecorrectq7',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq7: {
  botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[7],
    },
  ],
  },
  inmyHeShecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['myHeShe'+shuffledNumbersto[7]]: {
  botPrompt: '_______ birthday is in September.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['I am', 'Me', "I","My"]),
    answers: [
        {
            answer: 'I am',
            nextId: 'inmyHeShecorrectq7',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: 'Me',
            nextId: 'inmyHeShecorrectq7',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I",
            nextId: 'inmyHeShecorrectq7',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "My",
            nextId: 'myHeShecorrectq7',
              sumToBags: [{ name: 'c', points: 1 }],
          },
    ],
  },
  
  myHeShecorrectq8: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[8],
    },
  ],
  },
  inmyHeShecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['myHeShe'+shuffledNumbersto[8]]: {
  botPrompt: '_______ pet is a cute cat.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['My', 'Me', "I","Mine"]),
    answers: [
      {
        answer: 'My',
        nextId: 'myHeShecorrectq9',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq9',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq9',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Mine",
        nextId: 'inmyHeShecorrectq9',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq9: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[9],
    },
  ],
  },
  inmyHeShecorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['myHeShe'+shuffledNumbersto[9]]: {
  botPrompt: '_______ mom makes delicious cookies.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['My', 'Me', "I","Mine"]),
    answers: [
      {
        answer: 'My',
        nextId: 'myHeShecorrectq10',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq10',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq10',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Mine",
        nextId: 'inmyHeShecorrectq10',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  
  },
  
  myHeShecorrectq10: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[10],
    },
  ],
  },
  inmyHeShecorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['myHeShe'+shuffledNumbersto[10]]: {
  botPrompt: 'Look at _______ colourful artwork.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['I aam', 'My', "I amm","I am"]),
    answers: [
      {
        answer: 'I aam',
        nextId: 'inmyHeShecorrectq11',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'My',
        nextId: 'myHeShecorrectq11',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq11',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I am",
        nextId: 'inmyHeShecorrectq11',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq11: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[11],
    },
  ],
  },
  inmyHeShecorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['myHeShe'+shuffledNumbersto[11]]: {
  botPrompt: '_______ going to visit my grandma.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'myHeShecorrectq12',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: "I'mm",
        nextId: 'inmyHeShecorrectq12',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq12',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I aam",
        nextId: 'inmyHeShecorrectq12',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq12: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[12],
    },
  ],
  },
  inmyHeShecorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['myHeShe'+shuffledNumbersto[12]]: {
  botPrompt: '_______ helping my mom in the kitchen.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'myHeShecorrectq13',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: "I'mm",
        nextId: 'inmyHeShecorrectq13',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq13',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I aam",
        nextId: 'inmyHeShecorrectq13',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  
  myHeShecorrectq13: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[13],
    },
  ],
  },
  inmyHeShecorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['myHeShe'+shuffledNumbersto[13]]: {
  botPrompt: '_______ wearing a hat on my head.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
        {
            answer: 'I am',
            nextId: 'myHeShecorrectq14',
              sumToBags: [{ name: 'c', points: 1 }],
          },
          {
            answer: "I'mm",
            nextId: 'inmyHeShecorrectq14',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq14',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I aam",
            nextId: 'inmyHeShecorrectq14',
              sumToBags: [{ name: 'i', points: 1 }],
          },
    ],
  },
  
  myHeShecorrectq14: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[14],
    },
  ],
  },
  inmyHeShecorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['myHeShe'+shuffledNumbersto[14]]: {
  botPrompt: '_______ playing with my favourite toy.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
        {
            answer: 'I am',
            nextId: 'myHeShecorrectq15',
              sumToBags: [{ name: 'c', points: 1 }],
          },
          {
            answer: "I'mm",
            nextId: 'inmyHeShecorrectq15',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq15',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I aam",
            nextId: 'inmyHeShecorrectq15',
              sumToBags: [{ name: 'i', points: 1 }],
          },
    ],
  },
  
  myHeShecorrectq15: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[15],
    },
  ],
  },
  inmyHeShecorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['myHeShe'+shuffledNumbersto[15]]: {
    botPrompt: 'Look at _______ cute teddy bear.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Myy', "Me", "My","Mine"]),
    answers: [
        {
            answer: 'Myy',
            nextId: 'inmyHeShecorrectq16',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "Me",
            nextId: 'inmyHeShecorrectq16',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "My",
            nextId: 'myHeShecorrectq16',
              sumToBags: [{ name: 'c', points: 1 }],
          },
          {
            answer: "Mine",
            nextId: 'inmyHeShecorrectq16',
              sumToBags: [{ name: 'i', points: 1 }],
          },

    ],
  },
  myHeShecorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[16],
      },
    ],
  },
  inmyHeShecorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['myHeShe'+shuffledNumbersto[16]]: {
  botPrompt: '_______ grandparents live in the town.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Myy', "Me", "I","Mine"]),
    answers: [
        {
            answer: 'Myy',
            nextId: 'myHeShecorrectq16',
              sumToBags: [{ name: 'c', points: 1 }],
          },
          {
            answer: "Me",
            nextId: 'inmyHeShecorrectq16',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "I",
            nextId: 'inmyHeShecorrectq16',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: "Mine",
            nextId: 'inmyHeShecorrectq16',
              sumToBags: [{ name: 'i', points: 1 }],
          },

    ],
  },
  myHeShecorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Myy</strong> 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[17],
    },
  ],
  },
  inmyHeShecorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Myy"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['myHeShe'+shuffledNumbersto[17]]: {
  botPrompt: '_______ backpack has a picture of a dinosaur.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['My', "Me", "I","Mine"]),
  answers: [
    {
        answer: 'My',
        nextId: 'myHeShecorrectq16',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: "Me",
        nextId: 'inmyHeShecorrectq16',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq16',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Mine",
        nextId: 'inmyHeShecorrectq16',
          sumToBags: [{ name: 'i', points: 1 }],
      },

  ],
  },
  myHeShecorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[18],
    },
  ],
  },
  inmyHeShecorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['myHeShe'+shuffledNumbersto[18]]: {
  botPrompt: '_______ room is tidy and organized.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Me', 'My', "I","Mine"]),
  answers: [
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq19',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'My',
      nextId: 'myHeShecorrectq19',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq19',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq19',
        sumToBags: [{ name: 'i', points: 1 }],
    },

  ],
  },
  myHeShecorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> Answers! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[19],
    },
  ],
  },
  inmyHeShecorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['myHeShe'+shuffledNumbersto[19]]: {
  botPrompt: '_______ favourite book is about animals.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Me', 'My', "I","Mine"]),
  answers: [
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq20',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'My',
      nextId: 'myHeShecorrectq20',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq20',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq20',
        sumToBags: [{ name: 'i', points: 1 }],
    },

  ],
  },
  myHeShecorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[20],
    },
  ],
  },
  inmyHeShecorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["myHeShe"+shuffledNumbersto[20]]: {
    botPrompt: "Look at _______ beautiful drawing.",
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Me', 'My', "I","Mine"]),
    answers: [
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq21',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'My',
        nextId: 'myHeShecorrectq21',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'I',
        nextId: 'inmyHeShecorrectq21',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'Mine',
        nextId: 'inmyHeShecorrectq21',
          sumToBags: [{ name: 'i', points: 1 }],
      },
  
    ],
  },
  myHeShecorrectq21: {
    botPrompt: 'Hurray <strong>My</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[21],
      },
    ],
  },
  inmyHeShecorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['myHeShe'+shuffledNumbersto[21]]: {
    botPrompt: 'What is a pronoun used to refer to objects or animals?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq22',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq22',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq22',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq22',
        sumToBags: [{ name: 'i', points: 1 }],
    },

  ],
  },
  
  myHeShecorrectq22: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[22],
      },
    ],
  },
  inmyHeShecorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['myHeShe'+shuffledNumbersto[22]]: {
  botPrompt: "Which word can be used to talk about a toy or a book?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq23',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq23',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq23',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq23',
        sumToBags: [{ name: 'i', points: 1 }],
    },

  ],
  },
  
  myHeShecorrectq23: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[23],
    },
  ],
  },
  inmyHeShecorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['myHeShe'+shuffledNumbersto[23]]: {
  botPrompt: 'Complete the sentence: ___ is a red ball.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq24',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },

  ],
  },

  myHeShecorrectq24: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[24],
    },
  ],
  },
  inmyHeShecorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[24],
    },
  ],
  },

  //25
  ['myHeShe'+shuffledNumbersto[24]]: {
  botPrompt: 'Complete the sentence: ___ is a cute puppy.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq24',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },

  ],
  },
  
  myHeShecorrectq25: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[25],
    },
  ],
  },
  inmyHeShecorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['myHeShe'+shuffledNumbersto[25]]: {
  botPrompt: 'Complete the sentence: ___ is raining outside.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq24',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq24',
        sumToBags: [{ name: 'i', points: 1 }],
    },

  ],
  },
  
  myHeShecorrectq26: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[26],
    },
  ],
  },
  inmyHeShecorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['myHeShe'+shuffledNumbersto[26]]: {
  botPrompt: '_______ room has a big window.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Me', 'I', "My","A"]),
    answers: [
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq27',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'My',
        nextId: 'inmyHeShecorrectq27',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'I',
        nextId: 'myHeShecorrectq27',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'A',
        nextId: 'inmyHeShecorrectq27',
          sumToBags: [{ name: 'i', points: 1 }],
      },

    ],
  },
  
  myHeShecorrectq27: {
  botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[27],
    },
  ],
  },
  inmyHeShecorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[27],
    },
  ],
  },

  
  //28
  ['myHeShe'+shuffledNumbersto[27]]: {
  botPrompt: '_______ best friend name is Neha',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['My', 'Me', "I","Mine"]),
  answers: [
    {
      answer: 'My',
      nextId: 'myHeShecorrectq28',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq28',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq28',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq28',
        sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },

  myHeShecorrectq28: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[28],
    },
  ],
  },
  inmyHeShecorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['myHeShe'+shuffledNumbersto[28]]: {
  botPrompt: '_______ dog is friendly.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['My', 'Me', "I","Mine"]),
  answers: [
    {
      answer: 'My',
      nextId: 'myHeShecorrectq29',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq29',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq29',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq29',
        sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },

  myHeShecorrectq29: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[29],
    },
  ],
  },
  inmyHeShecorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[29],
    },
  ],
  },


  //30
  ['myHeShe'+shuffledNumbersto[29]]: {
  botPrompt: "Look at _______ colorful drawing.",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['My', 'Me', "I","Mine"]),
  answers: [
    {
      answer: 'My',
      nextId: 'myHeShecorrectq30',
        sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq30',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq30',
        sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq30',
        sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },

  myHeShecorrectq30: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[30],
    },
  ],
  },
  inmyHeShecorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[30],
    },
  ],
  },

    //31
    ['myHeShe'+shuffledNumbersto[30]]: {
        botPrompt: "Which word can be used to refer to a sun or a cloud?",
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['He', 'She', "It","They"]),
        answers: [
          {
            answer: 'He',
            nextId: 'inmyHeShecorrectq31',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: 'She',
            nextId: 'inmyHeShecorrectq31',
              sumToBags: [{ name: 'i', points: 1 }],
          },
          {
            answer: 'It',
            nextId: 'myHeShecorrectq31',
              sumToBags: [{ name: 'c', points: 1 }],
          },
          {
            answer: 'They',
            nextId: 'inmyHeShecorrectq31',
              sumToBags: [{ name: 'i', points: 1 }],
          },
        ],
        },
      
        myHeShecorrectq31: {
        botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'myHeShe'+shuffledNumbersto[31],
          },
        ],
        },
        inmyHeShecorrectq31: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
        answers: [
          {
            nextId: 'myHeShe'+shuffledNumbersto[31],
          },
        ],
        },

          //32
  ['myHeShe'+shuffledNumbersto[31]]: {
    botPrompt: "Which word can be used to refer to a book or a pencil?",
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq32',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq32',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq32',
          sumToBags: [{ name: 'c
            sumToBags: [{ name: 'i', points: 1 }],', points: 1 }],
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq32',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
    },
  
    myHeShecorrectq32: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[32],
      },
    ],
    },
    inmyHeShecorrectq32: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[32],
      },
    ],
    },

      //33
  ['myHeShe'+shuffledNumbersto[32]]: {
    botPrompt: "Which word can be used to refer to a flower or a tree?",
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq33',
          sumToBags: [{ name: 'c
            sumToBags: [{ name: 'i', points: 1 }],', points: 1 }],
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
    },
  
    myHeShecorrectq33: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[33],
      },
    ],
    },
    inmyHeShecorrectq33: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[33],
      },
    ],
    },

      //34
  ['myHeShe'+shuffledNumbersto[33]]: {
    botPrompt: "Which word can be used to refer to a cat or a dog?",
    type: RTypes.TRANSFORMED_TEXT,


    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq33',
          sumToBags: [{ name: 'c
            sumToBags: [{ name: 'i', points: 1 }],', points: 1 }],
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
    },
  
    myHeShecorrectq34: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[34],
      },
    ],
    },
    inmyHeShecorrectq34: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[34],
      },
    ],
    },

      //35
  ['myHeShe'+shuffledNumbersto[34]]: {
    botPrompt: "Which word can be used to refer to a chair or a table?",
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq33',
          sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq33',
          sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
    },
  
    myHeShecorrectq35: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishToContinue45'
      },
    ],
    },
    inmyHeShecorrectq35: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'wishToContinue45'
      },
    ],
    },

  //endmyHeSheletter
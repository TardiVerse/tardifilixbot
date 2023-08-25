
sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],day47: {
  botPrompt: '<strong> Day 47 : </strong> "there" and "their" is essential in kindergarten as it helps children express location and possession accurately in their early writing and communication.',
  answers: [
          { nextId: 'day471comment' },
  ],
},

day471comment: {
  botPrompt: 'TLM Video',
  answers: [
          { nextId: 'day472comment' },
  ],
},

day472comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day472link' },
  ],
},
day472link: {
  botPrompt: 'https://drive.google.com/file/d/1Y9KGC1PRO_g5CmDkydkAWYQeH2X7Xq3k/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[0],
    },
  ],
},
//thierThere


["thierThere"+shuffledNumbersto[0]]: {
    botPrompt: '________ toys are on the shelf.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Their', 'There', "They're","Them"]),
    answers: [
      {
        answer: 'Their',
        nextId: 'thierTherecorrect',
        sumToBags: [{ name: 'c', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: 'There',
        nextId: 'inthierTherecorrect',
        sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "They're",
        nextId: 'inthierTherecorrect',
        sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "Them",
        nextId: 'inthierTherecorrect',
        sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
    ],
  },
  thierTherecorrect: {
    botPrompt: 'Hurray <strong>Their</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[1],
      },
    ],
  },
  inthierTherecorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['thierThere'+shuffledNumbersto[1]]: {
    botPrompt: 'We saw a bird flying ________.',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Their', 'There', "They're","Them"]),
    answers: [
      {
        answer: 'Their',
        nextId: 'inthierTherecorrectq2',
         sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: 'There',
        nextId: 'thierTherecorrectq2',
         sumToBags: [{ name: 'c
          sumToBags: [{ name: 'i', points: 1 }],', points: 1 }],
      },
      {
        answer: "They're",
        nextId: 'inthierTherecorrectq2',
         sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Them",
        nextId: 'inthierTherecorrectq2',
         sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  
  thierTherecorrectq2: {
    botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[2],
      },
    ],
  },
  inthierTherecorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['thierThere'+shuffledNumbersto[2]]: {
  botPrompt: 'My friends are sitting ________.',
  type: RTypes.TRANSFORMED_TEXT,
  

 
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq3',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq3',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'thierTherecorrectq3',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq3',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq3: {
  botPrompt: 'Hurray! <strong>"Theyre"</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[3],
    },
  ],
  },
  inthierTherecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Theyre"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['thierThere'+shuffledNumbersto[3]]: {
  botPrompt: 'The children played ________ in the park.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq4',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq4',
       sumToBags: [{ name: 'c
        sumToBags: [{ name: 'i', points: 1 }],', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq4',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq4',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq4: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[4],
    },
  ],
  },
  inthierTherecorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['thierThere'+shuffledNumbersto[4]]: {
  botPrompt: '________ is a cat sitting on the wall.',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq5',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq5',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq5',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq5',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq5: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[5],
    },
  ],
  },
  inthierTherecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['thierThere'+shuffledNumbersto[5]]: {
  botPrompt: '________ are many flowers in the garden.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq6',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq6',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq6',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq6',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq6: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[6],
    },
  ],
  },
  inthierTherecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['thierThere'+shuffledNumbersto[6]]: {
  botPrompt: 'Look, ________ is a rainbow in the sky.',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq7',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq7',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq7',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq7',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq7: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[7],
    },
  ],
  },
  inthierTherecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['thierThere'+shuffledNumbersto[7]]: {
  botPrompt: 'The children went to ________ favourite park.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq8',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq8',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq8',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq8',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq8: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[8],
    },
  ],
  },
  inthierTherecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['thierThere'+shuffledNumbersto[8]]: {
  botPrompt: '________ is a dog chasing a ball.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq9',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq9',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq9',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq9',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq9: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[9],
    },
  ],
  },
  inthierTherecorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['thierThere'+shuffledNumbersto[9]]: {
  botPrompt: 'The toys belong to ________ friends.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq10',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq10',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq10',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq10',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  
  },
  
  thierTherecorrectq10: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[10],
    },
  ],
  },
  inthierTherecorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['thierThere'+shuffledNumbersto[10]]: {
  botPrompt: 'The children are playing with ________ toys.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq11',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq11',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq11',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq11',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq11: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[11],
    },
  ],
  },
  inthierTherecorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['thierThere'+shuffledNumbersto[11]]: {
  botPrompt: 'Look at ________ cute little kittens!',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq12',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq12',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq12',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq12',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq12: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[12],
    },
  ],
  },
  inthierTherecorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['thierThere'+shuffledNumbersto[12]]: {
  botPrompt: '________ are some birds in the tree.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq13',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq13',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq13',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq13',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq13: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[13],
    },
  ],
  },
  inthierTherecorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['thierThere'+shuffledNumbersto[13]]: {
  botPrompt: 'The kids went to ________ friends house.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq14',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq14',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq14',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq14',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  
  thierTherecorrectq14: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[14],
    },
  ],
  },
  inthierTherecorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['thierThere'+shuffledNumbersto[14]]: {
  botPrompt: '________ are cookies on the table.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq15',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq15',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq15',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq15',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },

  thierTherecorrectq15: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[15],
    },
  ],
  },
  inthierTherecorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['thierThere'+shuffledNumbersto[15]]: {
    botPrompt: 'The children saw ________ favourite movie.',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['Their', 'There', "They're","Them"]),
    answers: [
      {
        answer: 'Their',
        nextId: 'thierTherecorrectq16',
         sumToBags: [{ name: 'c', points: 1 }],
      },
      {
        answer: 'There',
        nextId: 'inthierTherecorrectq16',
         sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "They're",
        nextId: 'inthierTherecorrectq16',
         sumToBags: [{ name: 'i', points: 1 }],
      },
      {
        answer: "Them",
        nextId: 'inthierTherecorrectq16',
         sumToBags: [{ name: 'i', points: 1 }],
      },
    ],
  },
  thierTherecorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Their</strong> 😎',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[16],
      },
    ],
  },
  inthierTherecorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['thierThere'+shuffledNumbersto[16]]: {
  botPrompt: '________ is a squirrel climbing the tree.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq17',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq17',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq17',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq17',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  thierTherecorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>There</strong> 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[17],
    },
  ],
  },
  inthierTherecorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['thierThere'+shuffledNumbersto[17]]: {
  botPrompt: 'The students brought ________ lunchboxes to school.  ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq18',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq18',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq18',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq18',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  thierTherecorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Their</strong> 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[18],
    },
  ],
  },
  inthierTherecorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['thierThere'+shuffledNumbersto[18]]: {
  botPrompt: '________ are some flowers in the vase.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq19',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq19',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq19',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq19',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  thierTherecorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>There</strong> Answers! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[19],
    },
  ],
  },
  inthierTherecorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['thierThere'+shuffledNumbersto[19]]: {
  botPrompt: 'The children played with ________ new toys.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq20',
       sumToBags: [{ name: 'c', points: 1 }],
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq20',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq20',
       sumToBags: [{ name: 'i', points: 1 }],
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq20',
       sumToBags: [{ name: 'i', points: 1 }],
    },
  ],
  },
  thierTherecorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Their</strong> 😎',
  answers: [
    {
      nextId: 'wishToContinue47'
    },
  ],
  },
  inthierTherecorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'wishToContinue47'
    },
  ],
  },
  
 
  //endthierThereletter
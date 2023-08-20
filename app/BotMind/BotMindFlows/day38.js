day38: {
  botPrompt: '<strong> Day 38 : </strong> Understanding concepts like "above," "below," "beside," and "in front" lays the foundation for effective communication and reading abilities., enabling children to express ideas and interact effectively.',
  answers: [
          { nextId: 'day38link' },
  ],
},
day38link: {

  botPrompt: 'https://youtu.be/d70QvTi1Y2E,https://youtu.be/FG2aEUX2RXk',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day382comment' },
  ],
},

day382comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day382link' },
  ],
},
day382link: {
  botPrompt: 'https://drive.google.com/file/d/1e0RvqhSnTorOMiUZeDM9hTL-CBzER5V4/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[0],
    },
  ],
},


//positionWords


["positionWords"+shuffledNumbersto[0]]: {
    botPrompt: '1. The cat is ____ the table.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'positionWordscorrect',
      },
      {
        answer: 'In',
        nextId: 'inpositionWordscorrect',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrect',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrect',
      },
    ],
  },
  positionWordscorrect: {
    botPrompt: 'Hurray <strong>On</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[1],
      },
    ],
  },
  inpositionWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['positionWords'+shuffledNumbersto[1]]: {
    botPrompt: '2. The toy is ____ the box.',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'inpositionWordscorrectq2',
      },
      {
        answer: 'In',
        nextId: 'positionWordscorrectq2',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrectq2',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrectq2',
      },
    ],
  },

  positionWordscorrectq2: {
    botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[2],
      },
    ],
  },
  inpositionWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[2],
      },
    ],
  },

  //3
  ['positionWords'+shuffledNumbersto[2]]: {
  botPrompt: '3. The flower vase  is ____ the table.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'positionWordscorrectq3',
      },
      {
        answer: 'In',
        nextId: 'inpositionWordscorrectq3',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrectq3',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrectq3',
      },
    ],
  },
  
  positionWordscorrectq3: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[3],
    },
  ],
  },
  inpositionWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[3],
    },
  ],
  },

  //4
  ['positionWords'+shuffledNumbersto[3]]: {
  botPrompt: '4. The boy is ____ the table.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'inpositionWordscorrectq4',
      },
      {
        answer: 'In',
        nextId: 'inpositionWordscorrectq4',
      },
      {
        answer: "Under",
        nextId: 'positionWordscorrectq4',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrectq4',
      },
    ],
  },

  positionWordscorrectq4: {
  botPrompt: 'Hurray! <strong>Under</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[4],
    },
  ],
  },
  inpositionWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Under"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['positionWords'+shuffledNumbersto[4]]: {
  botPrompt: '5. The cup is ____ the table.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'positionWordscorrectq5',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq5',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq5',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq5',
    },
  ],
  },
  
  positionWordscorrectq5: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[5],
    },
  ],
  },
  inpositionWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['positionWords'+shuffledNumbersto[5]]: {
  botPrompt: '6. The car is ____ the garage.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq6',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq6',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq6',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq6',
    },
  ],
  },

  positionWordscorrectq6: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[6],
    },
  ],
  },
  inpositionWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>Right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[6],
    },
  ],
  },

  //7
  ['positionWords'+shuffledNumbersto[6]]: {
  botPrompt: '7. The pencils are ____ the bag.',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq7',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq7',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq7',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq7',
    },
  ],
  },
  
  positionWordscorrectq7: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[7],
    },
  ],
  },
  inpositionWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['positionWords'+shuffledNumbersto[7]]: {
  botPrompt: '8. The teddy bear is ____ the bed.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'positionWordscorrectq8',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq8',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq8',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq8',
    },
  ],
  },
  
  positionWordscorrectq8: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[8],
    },
  ],
  },
  inpositionWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['positionWords'+shuffledNumbersto[8]]: {
  botPrompt: '9. The teacher is sitting _____ the girls',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq9',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq9',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq9',
    },
    {
      answer: "Between",
      nextId: 'positionWordscorrectq9',
    },
  ],
  },
  
  positionWordscorrectq9: {
  botPrompt: 'Hurray! <strong>Between</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[9],
    },
  ],
  },
  inpositionWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Between"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['positionWords'+shuffledNumbersto[9]]: {
  botPrompt: '10. The spoon is ____ the bowl.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq10',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq10',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq10',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq10',
    },
  ],
  
  },
  
  positionWordscorrectq10: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[10],
    },
  ],
  },
  inpositionWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['positionWords'+shuffledNumbersto[10]]: {
  botPrompt: '11. The dog is ____ the house.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "infront of","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq11',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq11',
    },
    {
      answer: "infront of",
      nextId: 'positionWordscorrectq11',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq11',
    },
  ],
  },
  
  positionWordscorrectq11: {
  botPrompt: 'Hurray! <strong>infront of</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[11],
    },
  ],
  },
  inpositionWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"infront of"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['positionWords'+shuffledNumbersto[11]]: {
  botPrompt: '12. The girl is _____ the bed.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'positionWordscorrectq12',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq12',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq12',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq12',
    },
  ],
  },
  
  positionWordscorrectq12: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[12],
    },
  ],
  },
  inpositionWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['positionWords'+shuffledNumbersto[12]]: {
  botPrompt: '13. The flower is ____ the vase.',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq13',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq13',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq13',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq13',
    },
  ],
  },
  
  positionWordscorrectq13: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[13],
    },
  ],
  },
  inpositionWordscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['positionWords'+shuffledNumbersto[13]]: {
  botPrompt: '14. The plate is in _____ the fork and spoon.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq14',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq14',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq14',
    },
    {
      answer: "Between",
      nextId: 'positionWordscorrectq14',
    },
  ],
  },
  
  positionWordscorrectq14: {
  botPrompt: 'Hurray! <strong>Between</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[14],
    },
  ],
  },
  inpositionWordscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Between"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['positionWords'+shuffledNumbersto[14]]: {
  botPrompt: '15. The dog is ____ the chair.',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq15',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq15',
    },
    {
      answer: "Under",
      nextId: 'positionWordscorrectq15',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq15',
    },
  ],
  },

  positionWordscorrectq15: {
  botPrompt: 'Hurray! <strong>Under</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[15],
    },
  ],
  },
  inpositionWordscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Under"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['positionWords'+shuffledNumbersto[15]]: {
    botPrompt: '16. The car is  ____ the tree',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'inpositionWordscorrectq16',
      },
      {
        answer: 'Between',
        nextId: 'inpositionWordscorrectq16',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrectq16',
      },
      {
        answer: "Behind",
        nextId: 'positionWordscorrectq16',
      },
    ],
  },
  positionWordscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Behind</strong> 😎',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[16],
      },
    ],
  },
  inpositionWordscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Behind"</strong>',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['positionWords'+shuffledNumbersto[16]]: {
  botPrompt: '17. The boy is _____ the father and mother.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: 'Between',
      nextId: 'positionWordscorrectq17',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq17',
    },
  ],
  },
  positionWordscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Between</strong> 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[17],
    },
  ],
  },
  inpositionWordscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Between"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['positionWords'+shuffledNumbersto[17]]: {
  botPrompt: '18.The boy is _______ of the car.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","inside"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: 'Between',
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: "inside",
      nextId: 'positionWordscorrectq17',
    },
  ],
  },
  positionWordscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>inside</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue38'
    },
  ],
  },
  inpositionWordscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"inside"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue38'
    },
  ],
  },




  //endpositionWordsletter  
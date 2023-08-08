

//article

// 1
["article"+shuffledNumbersto[0]]: {
    botPrompt: 'Can I have ___ apple from the basket? ',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
      {
        answer: 'a',
        nextId: 'articlecorrectq1',
      },
      {
        answer: 'an',
        nextId: 'inarticlecorrectq1',
      },
      {
        answer: "ann",
        nextId: 'inarticlecorrectq1',
      },
      {
        answer: "was",
        nextId: 'inarticlecorrectq1',
      },
    ],
  },
  articlecorrectq1: {
    botPrompt: 'Hurray <strong>a</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[1],
      },
    ],
  },
  inarticlecorrectq1: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[1],
      },
    ],
  },
  
   // 2
  ['article'+shuffledNumbersto[1]]: {
    botPrompt: 'She wants to buy ___ book from the store.',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
      {
        answer: 'a',
        nextId: 'articlecorrectq2',
      },
      {
        answer: 'an',
        nextId: 'inarticlecorrectq2',
      },
      {
        answer: "ann",
        nextId: 'inarticlecorrectq2',
      },
      {
        answer: "was",
        nextId: 'inarticlecorrectq2',
      },
    ],
  },
  
  articlecorrectq2: {
    botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[2],
      },
    ],
  },
  inarticlecorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['article'+shuffledNumbersto[2]]: {
  botPrompt: "I saw ___ elephant at the zoo.",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq3',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq3',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq3',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq3',
    },
  ],
  },
  
  articlecorrectq3: {
  botPrompt: 'Hurray! <strong>an</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[3],
    },
  ],
  },
  inarticlecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['article'+shuffledNumbersto[3]]: {
  botPrompt: 'Would you like ___ piece of cake? ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq4',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq4',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq4',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq4',
    },
  ],
  },
  
  articlecorrectq4: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[4],
    },
  ],
  },
  inarticlecorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['article'+shuffledNumbersto[4]]: {
  botPrompt: 'My friend has ___ dog named Max.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq5',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq5',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq5',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq5',
    },
  ],
  },
  
  articlecorrectq5: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[5],
    },
  ],
  },
  inarticlecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['article'+shuffledNumbersto[5]]: {
  botPrompt: ' Can you lend me ___ pencil, please? ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq6',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq6',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq6',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq6',
    },
  ],
  },
  
  articlecorrectq6: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[6],
    },
  ],
  },
  inarticlecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['article'+shuffledNumbersto[6]]: {
  botPrompt: ' There is ___ old house on the hill.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq7',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq7',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq7',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq7',
    },
  ],
}
  articlecorrectq7: {
  botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[7],
    },
  ],
  },
  inarticlecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['article'+shuffledNumbersto[7]]: {
  botPrompt: 'The teacher gave us ___ assignment to complete.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq8',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq8',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq8',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq8',
    },
  ],
  },
  
  articlecorrectq8: {
  botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[8],
    },
  ],
  },
  inarticlecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['article'+shuffledNumbersto[8]]: {
  botPrompt: 'He needs ___ umbrella because it's raining.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq9',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq9',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq9',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq9',
    },
  ],
}
  articlecorrectq9: {
  botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[9],
    },
  ],
  },
  inarticlecorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[9],
    },
  ],
  },
}
  
  
  //10
  ['article'+shuffledNumbersto[9]]: {
  botPrompt: ' She bought ___ orange from the market. ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq10',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq10',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq10',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq10',
    },
  ],
}
  articlecorrectq10: {
  botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[10],
    },
  ],
  },
  inarticlecorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['article'+shuffledNumbersto[10]]: {
  botPrompt: 'I would like to have ___ ice cream for dessert.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq11',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq11',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq11',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq11',
    },
  ],
  },
  
  articlecorrectq11: {
  botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[11],
    },
  ],
  },
  inarticlecorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['article'+shuffledNumbersto[11]]: {
  botPrompt: ' I saw ___  star in the sky last night. ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq12',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq12',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq12',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq12',
    },
  ],
  },
  
  articlecorrectq12: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[12],
    },
  ],
  },
  inarticlecorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['article'+shuffledNumbersto[12]]: {
  botPrompt: 'The chef prepared ___ delicious meal for us.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq13',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq13',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq13',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq13',
    },
  ],
  },
  
  articlecorrectq13: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[13],
    },
  ],
  },
  inarticlecorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['article'+shuffledNumbersto[13]]: {
  botPrompt: ' I need ___ new notebook for school.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq14',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq14',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq14',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq14',
    },
  ],
  },
  
  
  articlecorrectq14: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[14],
    },
  ],
  },
  inarticlecorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['article'+shuffledNumbersto[14]]: {
  botPrompt: ' He bought ___ car for his birthday.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq15',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq15',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq15',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq15',
    },
  ],
  },

  
  articlecorrectq15: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[15],
    },
  ],
  },
  inarticlecorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['article'+shuffledNumbersto[15]]: {
    botPrompt: '___ hour has passed since we started the game.'
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
        {
        answer: 'a',
        nextId: 'inarticlecorrectq16',
        },
        {
        answer: 'an',
        nextId: 'articlecorrectq16',
        },
        {
        answer: "ann",
        nextId: 'inarticlecorrectq16',
        },
        {
        answer: "was",
        nextId: 'inarticlecorrectq16',
        },
    ],
  },
  articlecorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>an</strong> 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[16],
      },
    ],
  },
  inarticlecorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['article'+shuffledNumbersto[16]]: {
    botPrompt: 'She wants to become ___ astronaut when she grows up.'
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
        {
        answer: 'a',
        nextId: 'inarticlecorrectq17',
        },
        {
        answer: 'an',
        nextId: 'articlecorrectq17',
        },
        {
        answer: "ann",
        nextId: 'inarticlecorrectq17',
        },
        {
        answer: "was",
        nextId: 'inarticlecorrectq17',
        },
    ],
  },
  articlecorrectq17: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>an</strong> 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[17],
      },
    ],
  },
  inarticlecorrectq17: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[17],
      },
    ],
  },
  
  //18
  ['article'+shuffledNumbersto[17]]: {
    botPrompt: 'There is ___ old  tree in the garden.'
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
        {
        answer: 'a',
        nextId: 'inarticlecorrectq18',
        },
        {
        answer: 'an',
        nextId: 'articlecorrectq18',
        },
        {
        answer: "ann",
        nextId: 'inarticlecorrectq18',
        },
        {
        answer: "was",
        nextId: 'inarticlecorrectq18',
        },
    ],
  },
  articlecorrectq18: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>an</strong> 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[18],
      },
    ],
  },
  inarticlecorrectq18: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[18],
      },
    ],
  },
  
  //19
  ['article'+shuffledNumbersto[18]]: {
    botPrompt: ' My mom bought me ___puppy for my birthday.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
      {
        answer: 'a',
        nextId: 'articlecorrectq19',
      },
      {
        answer: 'an',
        nextId: 'inarticlecorrectq19',
      },
      {
        answer: "ann",
        nextId: 'inarticlecorrectq19',
      },
      {
        answer: "was",
        nextId: 'inarticlecorrectq19',
      },
    ],
    },
    
    
    articlecorrectq19: {
    botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[19],
      },
    ],
    },
    inarticlecorrectq19: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[19],
      },
    ],
    },
  
  //20
  ['article'+shuffledNumbersto[19]]: {
    botPrompt: ' Can you lend me ___ pen, please? ',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
      {
        answer: 'a',
        nextId: 'articlecorrectq20',
      },
      {
        answer: 'an',
        nextId: 'inarticlecorrectq20',
      },
      {
        answer: "ann",
        nextId: 'inarticlecorrectq20',
      },
      {
        answer: "was",
        nextId: 'inarticlecorrectq20',
      },
    ],
    },
    
    
    articlecorrectq20: {
    botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[20],
      },
    ],
    },
    inarticlecorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[20],
      },
    ],
    },

    //21
  ['article'+shuffledNumbersto[20]]: {
    botPrompt: ' I saw ___ eagle flying high in the sky.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
      {
        answer: 'a',
        nextId: 'inarticlecorrectq21',
      },
      {
        answer: 'an',
        nextId: 'articlecorrectq21',
      },
      {
        answer: "ann",
        nextId: 'inarticlecorrectq21',
      },
      {
        answer: "was",
        nextId: 'inarticlecorrectq21',
      },
    ],
    },
    
    
    articlecorrectq21: {
    botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[21],
      },
    ],
    },
    inarticlecorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[21],
      },
    ],
    },

    //22
  ['article'+shuffledNumbersto[21]]: {
    botPrompt: ' I saw ___  star in the night sky.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['a', 'an', "was","ann"]),
    answers: [
      {
        answer: 'a',
        nextId: 'articlecorrectq22',
      },
      {
        answer: 'an',
        nextId: 'inarticlecorrectq22',
      },
      {
        answer: "ann",
        nextId: 'inarticlecorrectq22',
      },
      {
        answer: "was",
        nextId: 'inarticlecorrectq22',
      },
    ],
    },
    
    
    articlecorrectq22: {
    botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[22],
      },
    ],
    },
    inarticlecorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
    answers: [
      {
        nextId: 'article'+shuffledNumbersto[22],
      },
    ],
    },

    // 23
    ['article'+shuffledNumbersto[22]]: {
        botPrompt: ' He wants to buy ___ bicycle for his birthday.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['a', 'an', "was","ann"]),
        answers: [
          {
            answer: 'a',
            nextId: 'articlecorrectq23',
          },
          {
            answer: 'an',
            nextId: 'inarticlecorrectq23',
          },
          {
            answer: "ann",
            nextId: 'inarticlecorrectq23',
          },
          {
            answer: "was",
            nextId: 'inarticlecorrectq23',
          },
        ],
        },
        
        
        articlecorrectq23: {
        botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'article'+shuffledNumbersto[23],
          },
        ],
        },
        inarticlecorrectq23: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
        answers: [
          {
            nextId: 'article'+shuffledNumbersto[23],
          },
        ],
        },

    // 24
    ['article'+shuffledNumbersto[23]]: {
        botPrompt: ' Can you pass me ___ cup of coffee, please?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['a', 'an', "was","ann"]),
        answers: [
          {
            answer: 'a',
            nextId: 'articlecorrectq24',
          },
          {
            answer: 'an',
            nextId: 'inarticlecorrectq24',
          },
          {
            answer: "ann",
            nextId: 'inarticlecorrectq24',
          },
          {
            answer: "was",
            nextId: 'inarticlecorrectq24',
          },
        ],
        },
        
        
        articlecorrectq24: {
        botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'article'+shuffledNumbersto[24],
          },
        ],
        },
        inarticlecorrectq24: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
        answers: [
          {
            nextId: 'article'+shuffledNumbersto[24],
          },
        ],
        },

        // 25
        ['article'+shuffledNumbersto[24]]: {
            botPrompt: ' She painted ___ picture of the sunset.',
            type: RTypes.TRANSFORMED_TEXT,
            
            input: selectField(['a', 'an', "was","ann"]),
            answers: [
              {
                answer: 'a',
                nextId: 'articlecorrectq25',
              },
              {
                answer: 'an',
                nextId: 'inarticlecorrectq25',
              },
              {
                answer: "ann",
                nextId: 'inarticlecorrectq25',
              },
              {
                answer: "was",
                nextId: 'inarticlecorrectq25',
              },
            ],
            },
            
            
            articlecorrectq25: {
            botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
            answers: [
              {
                nextId: "wishtocontinue15",
              },
            ],
            },
            inarticlecorrectq25: {
            botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
            answers: [
              {
                nextId: "wishtocontinue15",
              },
            ],
            },
          
      
      
  //endarticle
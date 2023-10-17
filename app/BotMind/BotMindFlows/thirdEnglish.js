const anything ={
//1
['thirdEnglish'+shuffleArraylot[1]]: {
botPrompt: 'Question 1:In the sentence, "The sky is cloudy," what is the adjective?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['The', 'Sky', "Cloudy",]),
  answers: [
    {
      answer: 'The',
      nextId: 'inthirdEnglishcorrectq1',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'Sky',
      nextId: 'inthirdEnglishcorrectq1',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Cloudy",
      nextId: 'thirdEnglishcorrectq1',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    
  ],
},

thirdEnglishcorrectq1: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thirdEnglish'+shuffleArraylot[2],
  },
],
},
inthirdEnglishcorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cloudy"</strong>',
answers: [
  {
    nextId: 'thirdEnglish'+shuffleArraylot[2],
  },
],
},

  //2
  ['thirdEnglish'+shuffleArraylot[2]]: {
    botPrompt: ' Which word is an adjective in the sentence, "The tall giraffe stretched its neck"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['The', 'Giraffe', "Tall"]),
      answers: [
        {
          answer: 'The',
          nextId: 'inthirdEnglishcorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Giraffe',
          nextId: 'inthirdEnglishcorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Tall",
          nextId: 'thirdEnglishcorrectq2',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq2: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[3],
      },
    ],
    },
    inthirdEnglishcorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Tall"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[3],
      },
    ],
    },

    //3
  ['thirdEnglish'+shuffleArraylot[3]]: {
    botPrompt: 'What are the adjectives in the sentence, "The small, brown puppy barked"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Brown', 'Barked', "Small"]),
      answers: [
        {
          answer: 'Brown',
          nextId: 'thirdEnglishcorrectq3',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Barked',
          nextId: 'inthirdEnglishcorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "the",
          nextId: 'inthirdEnglishcorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq3: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[4],
      },
    ],
    },
    inthirdEnglishcorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Brown"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[4],
      },
    ],
    },

    //4
  ['thirdEnglish'+shuffleArraylot[4]]: {
    botPrompt: 'What is the adjective in the sentence, "She has a cute puppy"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['She', 'Puppy', "Cute"]),
      answers: [
        {
          answer: 'She',
          nextId: 'inthirdEnglishcorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Puppy',
          nextId: 'inthirdEnglishcorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Cute",
          nextId: 'thirdEnglishcorrectq4',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq4: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[5],
      },
    ],
    },
    inthirdEnglishcorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cute"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[5],
      },
    ],
    },

    //5
  ['thirdEnglish'+shuffleArraylot[5]]: {
    botPrompt: 'Which adjective best describes a fast car?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Car', 'Fast', "Red"]),
      answers: [
        {
          answer: 'Car',
          nextId: 'inthirdEnglishcorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Fast',
          nextId: 'thirdEnglishcorrectq5',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Red",
          nextId: 'inthirdEnglishcorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq5: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[6],
      },
    ],
    },
    inthirdEnglishcorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fast"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[6],
      },
    ],
    },


     //6
  ['thirdEnglish'+shuffleArraylot[6]]: {
    botPrompt: 'Which article should replace the blank: "He needs ____ umbrella because it"s raining"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['a', 'an', "the"]),
      answers: [
        {
          answer: 'a',
          nextId: 'inthirdEnglishcorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'an',
          nextId: 'thirdEnglishcorrectq6',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "the",
          nextId: 'inthirdEnglishcorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq6: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[7],
      },
    ],
    },
    inthirdEnglishcorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[7],
      },
    ],
    },


     //7
  ['thirdEnglish'+shuffleArraylot[7]]: {
    botPrompt: 'Fill in the blank with the appropriate article: ---- Kaveri is a river.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['an', 'the', "a"]),
      answers: [
        {
          answer: 'an',
          nextId: 'inthirdEnglishcorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'the',
          nextId: 'thirdEnglishcorrectq7',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "a",
          nextId: 'inthirdEnglishcorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq7: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[8],
      },
    ],
    },
    inthirdEnglishcorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"the"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[8],
      },
    ],
    },


     //8
  ['thirdEnglish'+shuffleArraylot[8]]: {
    botPrompt: 'What article should go in the blank: "My brother is ___ doctor"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['a', 'an', "the"]),
      answers: [
        {
          answer: 'a',
          nextId: 'thirdEnglishcorrectq8',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'an',
          nextId: 'inthirdEnglishcorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "the",
          nextId: 'inthirdEnglishcorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq8: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[9],
      },
    ],
    },
    inthirdEnglishcorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[9],
      },
    ],
    },


     //9
  ['thirdEnglish'+shuffleArraylot[9]]: {
    botPrompt: 'Which article should go in the blank: "She found ____ interesting book in the library"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['a', ' an', "the"]),
      answers: [
        {
          answer: 'a',
          nextId: 'inthirdEnglishcorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'an',
          nextId: 'inthirdEnglishcorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "the",
          nextId: 'thirdEnglishcorrectq9',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        
      ],
    },
    
    thirdEnglishcorrectq9: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[10],
      },
    ],
    },
    inthirdEnglishcorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"the"</strong>',
    answers: [
      {
        nextId: 'thirdEnglish'+shuffleArraylot[10],
      },
    ],
    },

//10
    ['thirdEnglish'+shuffleArraylot[10]]: {
      botPrompt: 'Fill in the blank with the appropriate article: "Please pass me ____ orange."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['a', ' an', "the"]),
        answers: [
          {
            answer: 'a',
            nextId: 'inthirdEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'an',
            nextId: 'thirdEnglishcorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "the",
            nextId: 'inthirdEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq10: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[11],
        },
      ],
      },
      inthirdEnglishcorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[11],
        },
      ],
      },


      //11
    ['thirdEnglish'+shuffleArraylot[11]]: {
      botPrompt: 'Which sentence is in the simple present tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField([' She will go to the store.', ' They are playing in the park. ', "He reads books every night."]),
        answers: [
          {
            answer: 'She will go to the store.',
            nextId: 'inthirdEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They are playing in the park.',
            nextId: 'inthirdEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "He reads books every night.",
            nextId: 'thirdEnglishcorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq11: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[12],
        },
      ],
      },
      inthirdEnglishcorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He reads books every night."</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[12],
        },
      ],
      },


        //12
    ['thirdEnglish'+shuffleArraylot[12]]: {
      botPrompt: 'What is the correct simple present tense form of the verb "to eat" for "I"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['eat', ' eats  ', "eating"]),
        answers: [
          {
            answer: '  eat',
            nextId: 'inthirdEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'eats',
            nextId: 'thirdEnglishcorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "eating",
            nextId: 'inthirdEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq11: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[12],
        },
      ],
      },
      inthirdEnglishcorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"eats"</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[12],
        },
      ],
      },


        //13
    ['thirdEnglish'+shuffleArraylot[13]]: {
      botPrompt: 'What is the simple present tense form of the verb "to dance" for "She"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['dances', ' danced', "dancing"]),
        answers: [
          {
            answer: ' dances',
            nextId: 'thirdEnglishcorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'danced',
            nextId: 'inthirdEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "dancing",
            nextId: 'inthirdEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq13: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[14],
        },
      ],
      },
      inthirdEnglishcorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"dances"</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[14],
        },
      ],
      },
    

          //14
    ['thirdEnglish'+shuffleArraylot[14]]: {
      botPrompt: 'Which sentence is NOT in the simple present tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['They sing songs beautifully.', ' We will bake cookies this weekend.', "I play with my toys in the"]),
        answers: [
          {
            answer: 'They sing songs beautifully.',
            nextId: 'inthirdEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'We will bake cookies this weekend.',
            nextId: 'thirdEnglishcorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "I play with my toys in the",
            nextId: 'inthirdEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq14: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[15],
        },
      ],
      },
      inthirdEnglishcorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We will bake cookies this weekend."</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[15],
        },
      ],
      },
    

          //15
    ['thirdEnglish'+shuffleArraylot[15]]: {
      botPrompt: 'Identify the sentence in the simple present tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['We travelled in the summer.', ' He reads a book every evening.', " I am doing my homework right now."]),
        answers: [
          {
            answer: ' We travelled in the summer.',
            nextId: 'inthirdEnglishcorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'He reads a book every evening.',
            nextId: 'thirdEnglishcorrectq15',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: " I am doing my homework right now.",
            nextId: 'inthirdEnglishcorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq15: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[16],
        },
      ],
      },
      inthirdEnglishcorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He reads a book every evening."</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[16],
        },
      ],
      },
    



          //16
    ['thirdEnglish'+shuffleArraylot[16]]: {
      botPrompt: 'What is the present continuous tense form of the verb "to write" for "She"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['write', ' writes', "writing"]),
        answers: [
          {
            answer: ' write',
            nextId: 'inthirdEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'writes',
            nextId: 'inthirdEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "writing",
            nextId: 'thirdEnglishcorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq16: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[17],
        },
      ],
      },
      inthirdEnglishcorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"writing"</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[17],
        },
      ],
      },
    

         //17
    ['thirdEnglish'+shuffleArraylot[17]]: {
      botPrompt: 'Select the sentence in the present continuous tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['I went to the beach last summer', ' He writes stories every day.', "They are swimming in the pool"]),
        answers: [
          {
            answer: ' I went to the beach last summer.',
            nextId: 'inthirdEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'He writes stories every day.',
            nextId: 'inthirdEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "They are swimming in the pool",
            nextId: 'thirdEnglishcorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq17: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[18],
        },
      ],
      },
      inthirdEnglishcorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They are swimming in the pool"</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[18],
        },
      ],
      },


         //18
    ['thirdEnglish'+shuffleArraylot[18]]: {
      botPrompt: 'Which sentence is NOT in the present continuous tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['They are building a sandcastle.', ' I will visit the zoo tomorrow', "He is drawing a picture."]),
        answers: [
          {
            answer: ' They are building a sandcastle.',
            nextId: 'inthirdEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'I will visit the zoo tomorrow',
            nextId: 'thirdEnglishcorrectq18',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "He is drawing a picture.",
            nextId: 'inthirdEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq18: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[19],
        },
      ],
      },
      inthirdEnglishcorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I will visit the zoo tomorrow"</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[19],
        },
      ],
      },


         //19
    ['thirdEnglish'+shuffleArraylot[19]]: {
      botPrompt: 'Which sentence is in the present continuous tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['She reads books every day.', ' They played soccer yesterday.', "He is eating dinner right now"]),
        answers: [
          {
            answer: ' She reads books every day.',
            nextId: 'inthirdEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They played soccer yesterday.',
            nextId: 'inthirdEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "He is eating dinner right now",
            nextId: 'thirdEnglishcorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq19: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[20],
        },
      ],
      },
      inthirdEnglishcorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He is eating dinner right now"</strong>',
      answers: [
        {
          nextId: 'thirdEnglish'+shuffleArraylot[20],
        },
      ],
      },


         //20
    ['thirdEnglish'+shuffleArraylot[20]]: {
      botPrompt: 'Choose the sentence in the present continuous tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField([' We will go to the park later.', ' She dances in the ballet class.', "They are playing in the garden"]),
        answers: [
          {
            answer: '  We will go to the park later.',
            nextId: 'inthirdEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'She dances in the ballet class.',
            nextId: 'inthirdEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "They are playing in the garden",
            nextId: 'thirdEnglishcorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      thirdEnglishcorrectq20: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocountinethirdEnglish',
        },
      ],
      },
      inthirdEnglishcorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They are playing in the garden"</strong>',
      answers: [
        {
          nextId: 'wishtocountinethirdEnglish',
        },
      ],
      },
}
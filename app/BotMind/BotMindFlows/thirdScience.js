const anything ={
  //1
  ['thirdScience'+shuffleArraylot[1]]: {
  botPrompt: 'Question 1:  Which of these animals is an omnivore?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Giraffe', 'Panda', "Bear",'Kangaroo']),
    answers: [
      {
        answer: 'Giraffe',
        nextId: 'inthirdSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Panda',
        nextId: 'inthirdSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Bear",
        nextId: 'thirdSciencecorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
          answer: 'Kangaroo',
          nextId: 'inthirdSciencecorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      
    ],
  },
  
  thirdSciencecorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thirdScience'+shuffleArraylot[2],
    },
  ],
  },
  inthirdSciencecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bear"</strong>',
  answers: [
    {
      nextId: 'thirdScience'+shuffleArraylot[2],
    },
  ],
  },
  
    //2
    ['thirdScience'+shuffleArraylot[2]]: {
      botPrompt: ' Why should you never play with matches or lighters?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(["Because it's fun", 'Because it can cause fires and harm you', "Because matches are expensive",'Because your parents said so']),
        answers: [
          {
            answer: "Because it's fun",
            nextId: 'inthirdSciencecorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Because it can cause fires and harm you',
            nextId: 'thirdSciencecorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Because matches are expensive",
            nextId: 'inthirdSciencecorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'Because your parents said so',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq2: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[3],
        },
      ],
      },
      inthirdSciencecorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Because it can cause fires and harm you"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[3],
        },
      ],
      },
  
      //3
    ['thirdScience'+shuffleArraylot[3]]: {
      botPrompt: 'Why is it important to wear a seatbelt in a car?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['To keep your clothes clean', "Because it's a law", "To avoid accidents",'To make it easier to get out of the car']),
        answers: [
          {
            answer: 'To keep your clothes clean',
            nextId: 'inthirdSciencecorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Because it's a law",
            nextId: 'inthirdSciencecorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "To avoid accidents",
            nextId: 'thirdSciencecorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
              answer: 'To make it easier to get out of the car',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq3: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[4],
        },
      ],
      },
      inthirdSciencecorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To avoid accidents"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[4],
        },
      ],
      },
  
      //4
    ['thirdScience'+shuffleArraylot[4]]: {
      botPrompt: 'Why do we need windows and doors in a house?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['To keep the house dark', 'To keep the house cold', "To let in light and air",'To block all sounds']),
        answers: [
          {
            answer: 'To keep the house dark',
            nextId: 'inthirdSciencecorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'To keep the house cold',
            nextId: 'inthirdSciencecorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "To let in light and air",
            nextId: 'thirdSciencecorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
              answer: 'To block all sounds ',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq4: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[5],
        },
      ],
      },
      inthirdSciencecorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To let in light and air"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[5],
        },
      ],
      },
  
      //5
    ['thirdScience'+shuffleArraylot[5]]: {
      botPrompt: 'Which of these is a natural source of clothing material?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Plastic,', 'Nylon', "Wool",'Rubber']),
        answers: [
          {
            answer: 'Plastic,',
            nextId: 'thirdSciencecorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Nylon',
            nextId: 'inthirdSciencecorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Wool",
            nextId: 'inthirdSciencecorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'Rubber',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq5: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[6],
        },
      ],
      },
      inthirdSciencecorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Plastic"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[6],
        },
      ],
      },
  
  
       //6
    ['thirdScience'+shuffleArraylot[6]]: {
      botPrompt: 'Which type of soil is good for planting seeds?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Sandy soil', 'Clayey soil', " Loamy soil",'Rocky soil']),
        answers: [
          {
            answer: 'Sandy soil',
            nextId: 'inthirdSciencecorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Clayey soil',
            nextId: 'inthirdSciencecorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: " Loamy soil,",
            nextId: 'thirdSciencecorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
              answer: 'Rocky soil',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq6: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[7],
        },
      ],
      },
      inthirdSciencecorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>" Loamy soil,"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[7],
        },
      ],
      },
  
  
       //7
    ['thirdScience'+shuffleArraylot[7]]: {
      botPrompt: 'How does soil help plants grow? ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['By providing support', 'By holding water and nutrients', "By giving them shade",'By scaring away animals ']),
        answers: [
          {
            answer: 'By providing support',
            nextId: 'inthirdSciencecorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'By holding water and nutrients',
            nextId: 'thirdSciencecorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "By giving them shade",
            nextId: 'infinirstMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'By scaring away animals ',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq7: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[8],
        },
      ],
      },
      inthirdSciencecorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"By holding water and nutrients"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[8],
        },
      ],
      },
  
  
       //8
    ['thirdScience'+shuffleArraylot[8]]: {
      botPrompt: 'What is the process by which plants make their own food using sunlight?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Respiration', 'Photosynthesis', "Germination",' Digestion']),
        answers: [
          {
            answer: 'Respiration',
            nextId: 'inthirdSciencecorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Photosynthesis',
            nextId: 'thirdSciencecorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: " Germination",
            nextId: 'inthirdSciencecorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'Digestion',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq8: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[9],
        },
      ],
      },
      inthirdSciencecorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Photosynthesis"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[9],
        },
      ],
      },
  
  
       //9
    ['thirdScience'+shuffleArraylot[9]]: {
      botPrompt: ' If you want to store water in a plant, which part would you choose?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Roots ', 'Stem', "Leaves",'Flowers']),
        answers: [
          {
            answer: ' Roots',
            nextId: 'thirdSciencecorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Stem ',
            nextId: 'inthirdSciencecorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Leaves",
            nextId: 'inthirdSciencecorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'Flowers',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdSciencecorrectq9: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[10],
        },
      ],
      },
      inthirdSciencecorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Roots"</strong>',
      answers: [
        {
          nextId: 'thirdScience'+shuffleArraylot[10],
        },
      ],
      },
  
  //10
      ['thirdScience'+shuffleArraylot[10]]: {
        botPrompt: ' What do you call the tiny openings on the underside of leaves that allow a plant to breathe?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Stomata', ' Seeds ', "Petals",'Branches']),
          answers: [
            {
              answer: ' Stomata',
              nextId: 'thirdSciencecorrectq10',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Seeds',
              nextId: 'inthirdSciencecorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Petals",
              nextId: 'inthirdSciencecorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Branches',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq10: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[11],
          },
        ],
        },
        inthirdSciencecorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Stomata"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[11],
          },
        ],
        },
  
  
        //11
      ['thirdScience'+shuffleArraylot[11]]: {
        botPrompt: " What is the primary role of a bird's nest?",
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['To keep the bird warm ', ' To provide a safe place for the bird to lay eggs and raise its young ', "To store food",'To attract a mate']),
          answers: [
            {
              answer: ' To keep the bird warm',
              nextId: 'inthirdSciencecorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'To provide a safe place for the bird to lay eggs and raise its young',
              nextId: 'thirdSciencecorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "To store food",
              nextId: 'inthirdSciencecorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'To attract a mate',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[12],
          },
        ],
        },
        inthirdSciencecorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To provide a safe place for the bird to lay eggs and raise its young"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[12],
          },
        ],
        },
  
  
          //12
      ['thirdScience'+shuffleArraylot[12]]: {
        botPrompt: ' What is the primary function of the lungs in our body?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField([' Pump blood', 'Filter waste', "Breathe in oxygen",'Digest food ']),
          answers: [
            {
              answer: ' Pump blood',
              nextId: 'inthirdSciencecorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Filter waste',
              nextId: 'inthirdSciencecorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Breathe in oxygen",
              nextId: 'thirdSciencecorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Digest food ',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[12],
          },
        ],
        },
        inthirdSciencecorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Breathe in oxygen"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[12],
          },
        ],
        },
  
  
          //13
      ['thirdScience'+shuffleArraylot[13]]: {
        botPrompt: 'Why is it important to drink water regularly? ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['To make you feel sleepy ', ' To keep your body hydrated and healthy ', "To make your skin colorful",'To clean your teeth']),
          answers: [
            {
              answer: ' To make you feel sleepy ',
              nextId: 'inthirdSciencecorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'To keep your body hydrated and healthy',
              nextId: 'thirdSciencecorrectq13',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "To make your skin colorful",
              nextId: 'inthirdSciencecorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'To clean your teeth',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        thirdSciencecorrectq13: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[14],
          },
        ],
        },
        inthirdSciencecorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To keep your body hydrated and healthy"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[14],
          },
        ],
        },
      
  
            //14
      ['thirdScience'+shuffleArraylot[14]]: {
        botPrompt: 'Which of these activities can help reduce air pollution?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Planting more trees', ' Burning plastic bags', "Using more vehicles",'Throwing garbage in the street']),
          answers: [
            {
              answer: 'Planting more trees',
              nextId: 'thirdSciencecorrectq14',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Burning plastic bags',
              nextId: 'infinirstMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Using more vehicles",
              nextId: 'inthirdSciencecorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Throwing garbage in the street',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq14: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[15],
          },
        ],
        },
        inthirdSciencecorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Planting more trees"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[15],
          },
        ],
        },
      
  
            //15
      ['thirdScience'+shuffleArraylot[15]]: {
        botPrompt: 'Which of the following is a unit of time?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Litre', ' Second', "Kilogram",'Meter']),
          answers: [
            {
              answer: ' Litre',
              nextId: 'inthirdSciencecorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Second',
              nextId: 'thirdSciencecorrectq15',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Kilogram",
              nextId: 'inthirdSciencecorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Meter',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq15: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[16],
          },
        ],
        },
        inthirdSciencecorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Second"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[16],
          },
        ],
        },
      
  
  
  
            //16
      ['thirdScience'+shuffleArraylot[16]]: {
        botPrompt: 'Which of the following objects allows light to pass through it? ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Wood', ' Glass,', "Metal",'Brick']),
          answers: [
            {
              answer: ' Wood',
              nextId: 'inthirdSciencecorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Glass',
              nextId: 'thirdSciencecorrectq16',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Metal",
              nextId: 'inthirdSciencecorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Brick',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq16: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[17],
          },
        ],
        },
        inthirdSciencecorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Glass"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[17],
          },
        ],
        },
      
  
           //17
      ['thirdScience'+shuffleArraylot[17]]: {
        botPrompt: 'Which of the following is a source of sound?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Sun', ' Moon ', "Guitar ",'Star']),
          answers: [
            {
              answer: ' Sun',
              nextId: 'inthirdSciencecorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Moon ',
              nextId: 'inthirdSciencecorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Guitar",
              nextId: 'thirdSciencecorrectq17',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Star',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq17: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[18],
          },
        ],
        },
        inthirdSciencecorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Guitar"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[18],
          },
        ],
        },
  
  
           //18
      ['thirdScience'+shuffleArraylot[18]]: {
        botPrompt: 'Which of the following objects does not create a shadow? –',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Sun', ' Moon', "Tree",'Flashlight']),
          answers: [
            {
              answer: ' Sun',
              nextId: 'thirdSciencecorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Moon',
              nextId: 'inthirdSciencecorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Tree",
              nextId: 'inthirdSciencecorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Flashlight',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq18: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[19],
          },
        ],
        },
        inthirdSciencecorrectq18: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sun"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[19],
          },
        ],
        },
  
  
           //19
      ['thirdScience'+shuffleArraylot[19]]: {
        botPrompt: ' What is the primary source of energy for the sun?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Wind energy', ' Solar energy', "Chemical energy",'Sound energy']),
          answers: [
            {
              answer: ' Wind energy ',
              nextId: 'inthirdSciencecorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Solar energy',
              nextId: 'thirdSciencecorrectq19',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Chemical energy",
              nextId: 'inthirdSciencecorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Sound energy',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq19: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[20],
          },
        ],
        },
        inthirdSciencecorrectq19: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5Solar energy"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylot[20],
          },
        ],
        },
  
  
           //20
      ['thirdScience'+shuffleArraylot[20]]: {
        botPrompt: "What is the name of Earth's natural satellite?",
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Sun', ' Moon', "Mars",'Jupiter']),
          answers: [
            {
              answer: ' Sun',
              nextId: 'inthirdSciencecorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Moon',
              nextId: 'thirdSciencecorrectq20',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Mars",
              nextId: 'inthirdSciencecorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Jupiter',
              nextId: 'inthirdSciencecorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdSciencecorrectq20: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtocountinethirdScience',
          },
        ],
        },
        inthirdSciencecorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Moon"</strong>',
        answers: [
          {
            nextId: 'wishtocountinethirdScience',
          },
        ],
        },
  }
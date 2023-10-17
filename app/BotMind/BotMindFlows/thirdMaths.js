const anything ={
//1
['thirdMaths'+shuffleArraylot[1]]: {
botPrompt: 'Question 1: If you have 4 groups of 5 apples each, how many apples do you have in total?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['20', '30', "10",'30']),
  answers: [
    {
      answer: '20',
      nextId: 'thirdMathscorrectq1',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: '30',
      nextId: 'thirdMathscorrectq1',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "10",
      nextId: 'inthirdMathscorrectq1',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
        answer: '30',
        nextId: 'inthirdMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    
  ],
},

thirdMathscorrectq1: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thirdMaths'+shuffleArraylot[2],
  },
],
},
inthirdMathscorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
answers: [
  {
    nextId: 'thirdMaths'+shuffleArraylot[2],
  },
],
},

  //2
  ['thirdMaths'+shuffleArraylot[2]]: {
    botPrompt: 'Ali has 3 baskets and each basket has 4 mangoes. If he eats half of the mangoes in each basket then how many mangoes does he have left with him?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '8', "6",'4']),
      answers: [
        {
          answer: '7',
          nextId: 'inthirdMathscorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '8',
          nextId: 'inthirdMathscorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "6",
          nextId: 'thirdMathscorrectq2',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
            answer: '4',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq2: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[3],
      },
    ],
    },
    inthirdMathscorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[3],
      },
    ],
    },

    //3
  ['thirdMaths'+shuffleArraylot[3]]: {
    botPrompt: ' What is division?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Addition numbers', 'sharing or grouping  numbers,', "subtracting numbers",'multiplying numbers']),
      answers: [
        {
          answer: 'Addition numbers',
          nextId: 'inthirdMathscorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'sharing or grouping  numbers,',
          nextId: 'thirdMathscorrectq3',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "subtracting numbers",
          nextId: 'inthirdMathscorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
            answer: 'multiplying numbers',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq3: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[4],
      },
    ],
    },
    inthirdMathscorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sharing or grouping  numbers,"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[4],
      },
    ],
    },

    //4
  ['thirdMaths'+shuffleArraylot[4]]: {
    botPrompt: 'If you have 7  pieces of cake and you eat 6 pieces, what fraction of cake did you eat?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['6/7', '7/6', "6/6",'⅚']),
      answers: [
        {
          answer: '6/7',
          nextId: 'thirdMathscorrectq4',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '7/6',
          nextId: 'inthirdMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "6/6",
          nextId: 'inthirdMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
            answer: '⅚ ',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq4: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[5],
      },
    ],
    },
    inthirdMathscorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6/7"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[5],
      },
    ],
    },

    //5
  ['thirdMaths'+shuffleArraylot[5]]: {
    botPrompt: 'What is used to measure length?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Scale,', 'tape', "pencil",'paper']),
      answers: [
        {
          answer: 'Scale,',
          nextId: 'thirdMathscorrectq5',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'tape',
          nextId: 'inthirdMathscorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "pencil",
          nextId: 'inthirdMathscorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
            answer: 'paper',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq5: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[6],
      },
    ],
    },
    inthirdMathscorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Scale"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[6],
      },
    ],
    },


     //6
  ['thirdMaths'+shuffleArraylot[6]]: {
    botPrompt: 'If an object has a mass of 500 gms, what is its mass in kilograms?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['0.05 kg', '0.5 kg', "5kg",'50 kg']),
      answers: [
        {
          answer: '0.05 kg',
          nextId: 'inthirdMathscorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '0.5 kg,',
          nextId: 'thirdMathscorrectq6',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "5kg,",
          nextId: 'inthirdMathscorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
            answer: '50 kg',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq6: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[7],
      },
    ],
    },
    inthirdMathscorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0.5 kg,"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[7],
      },
    ],
    },


     //7
  ['thirdMaths'+shuffleArraylot[7]]: {
    botPrompt: 'Capacity is',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Measures of the weight of an object', 'Measures the volume of a container', "Measures the length of the solid",'Measures the height of a liquid']),
      answers: [
        {
          answer: 'Measures of the weight of an object',
          nextId: 'inthirdMathscorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Measures the volume of a container',
          nextId: 'thirdMathscorrectq7',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Measures the length of the solid",
          nextId: 'infinirstMathscorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
            answer: 'Measures the height of a liquid',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq7: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[8],
      },
    ],
    },
    inthirdMathscorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Measures the volume of a container"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[8],
      },
    ],
    },


     //8
  ['thirdMaths'+shuffleArraylot[8]]: {
    botPrompt: 'Convert the amount in paise ₹16.66',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1666 p', '1006 p', "1766 p",'1066 p']),
      answers: [
        {
          answer: '1666 p',
          nextId: 'thirdMathscorrectq8',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '1006 p',
          nextId: 'inthirdMathscorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "1766 p",
          nextId: 'inthirdMathscorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
            answer: '1066 p',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq8: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[9],
      },
    ],
    },
    inthirdMathscorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1666 p"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[9],
      },
    ],
    },


     //9
  ['thirdMaths'+shuffleArraylot[9]]: {
    botPrompt: 'The number of vertices  in a cuboid is',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7 ', '8', "9",'12']),
      answers: [
        {
          answer: ' 7',
          nextId: 'inthirdMathscorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '8 ',
          nextId: 'thirdMathscorrectq9',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "9",
          nextId: 'inthirdMathscorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
            answer: '12',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdMathscorrectq9: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[10],
      },
    ],
    },
    inthirdMathscorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'thirdMaths'+shuffleArraylot[10],
      },
    ],
    },

//10
    ['thirdMaths'+shuffleArraylot[10]]: {
      botPrompt: ' Equivalent fraction of ⅘ is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['⅘', ' 5/4 ', "8/10",'10/8']),
        answers: [
          {
            answer: ' ⅘',
            nextId: 'inthirdMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '5/4',
            nextId: 'inthirdMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "8/10",
            nextId: 'thirdMathscorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '10/8',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq10: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[11],
        },
      ],
      },
      inthirdMathscorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8/10"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[11],
        },
      ],
      },


      //11
    ['thirdMaths'+shuffleArraylot[11]]: {
      botPrompt: ' 0 x 21456 = _______________________________ ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['21456 ', ' 21465 ', "0",'21654']),
        answers: [
          {
            answer: ' 21456',
            nextId: 'inthirdMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '21465',
            nextId: 'inthirdMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "0",
            nextId: 'thirdMathscorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '21654',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq11: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[12],
        },
      ],
      },
      inthirdMathscorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[12],
        },
      ],
      },


        //12
    ['thirdMaths'+shuffleArraylot[12]]: {
      botPrompt: ' The perimeter of a square is ______________ if the length of each side is 6 cm.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField([' 42cm', '24cm', "12cm",'18cm']),
        answers: [
          {
            answer: ' 42cm',
            nextId: 'inthirdMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '24cm',
            nextId: 'thirdMathscorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "12cm",
            nextId: 'inthirdMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '18cm',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq11: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[12],
        },
      ],
      },
      inthirdMathscorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24cm"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[12],
        },
      ],
      },


        //13
    ['thirdMaths'+shuffleArraylot[13]]: {
      botPrompt: '(41253+ 1234)+231 = (1234 + 231)+ ______________________________ ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['1234 ', ' 231 ', "41253",'1324']),
        answers: [
          {
            answer: ' 1234 ',
            nextId: 'inthirdMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '231',
            nextId: 'inthirdMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "41253",
            nextId: 'thirdMathscorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '1324',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      thirdMathscorrectq13: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[14],
        },
      ],
      },
      inthirdMathscorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41253"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[14],
        },
      ],
      },
    

          //14
    ['thirdMaths'+shuffleArraylot[14]]: {
      botPrompt: '1 L 25mL  =  _____________________ mL',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['1250', ' 1520', "1025",'1502']),
        answers: [
          {
            answer: '1250',
            nextId: 'inthirdMathscorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '1520',
            nextId: 'infinirstMathscorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "1025",
            nextId: 'thirdMathscorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '1502',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq14: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[15],
        },
      ],
      },
      inthirdMathscorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1520"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[15],
        },
      ],
      },
    

          //15
    ['thirdMaths'+shuffleArraylot[15]]: {
      botPrompt: 'Place value of 5 in the number 95321 _______________________________',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['5', ' 50', "500",'5000']),
        answers: [
          {
            answer: ' 5',
            nextId: 'inthirdMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '50',
            nextId: 'inthirdMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "500",
            nextId: 'inthirdMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '5000',
            nextId: 'thirdMathscorrectq1',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq15: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[16],
        },
      ],
      },
      inthirdMathscorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5000"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[16],
        },
      ],
      },
    



          //16
    ['thirdMaths'+shuffleArraylot[16]]: {
      botPrompt: ' 9999 + 1 = _______________',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['100', ' 10,000,', "1000",'10,0000']),
        answers: [
          {
            answer: ' 100',
            nextId: 'inthirdMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '10,000,',
            nextId: 'thirdMathscorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "1000",
            nextId: 'inthirdMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '10,0000',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq16: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[17],
        },
      ],
      },
      inthirdMathscorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10,000"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[17],
        },
      ],
      },
    

         //17
    ['thirdMaths'+shuffleArraylot[17]]: {
      botPrompt: 'Sixty-seven thousand nine hundred ninety-nine _____________',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['67,909', ' 76,999 ', "67,999 ",'67,990']),
        answers: [
          {
            answer: ' 67,909',
            nextId: 'thirdMathscorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '76,999 ',
            nextId: 'inthirdMathscorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "67,999 ",
            nextId: 'inthirdMathscorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '67,990',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq17: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[18],
        },
      ],
      },
      inthirdMathscorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"67,909"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[18],
        },
      ],
      },


         //18
    ['thirdMaths'+shuffleArraylot[18]]: {
      botPrompt: 'Predecessor of the number 9089 is  _______________',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['9088', ' 9090', "9089",'9091']),
        answers: [
          {
            answer: ' 9088',
            nextId: 'thirdMathscorrectq18',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '9090',
            nextId: 'inthirdMathscorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "9089",
            nextId: 'inthirdMathscorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '9091',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq18: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[19],
        },
      ],
      },
      inthirdMathscorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9088"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[19],
        },
      ],
      },


         //19
    ['thirdMaths'+shuffleArraylot[19]]: {
      botPrompt: '6660 – 1 = __________________ ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['6660', ' 6661', "6659",'6658']),
        answers: [
          {
            answer: ' 6660',
            nextId: 'inthirdMathscorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '6661',
            nextId: 'thirdMathscorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "6659",
            nextId: 'thirdMathscorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '6658',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq19: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[20],
        },
      ],
      },
      inthirdMathscorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6659"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylot[20],
        },
      ],
      },


         //20
    ['thirdMaths'+shuffleArraylot[20]]: {
      botPrompt: '82351 – 100 = ______________________ ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['82251', ' 82250', "82051"],'82001'),
        answers: [
          {
            answer: ' 82251',
            nextId: 'thirdMathscorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '82250',
            nextId: 'inthirdMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "82051",
            nextId: 'inthirdMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '82001',
            nextId: 'inthirdMathscorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      thirdMathscorrectq20: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocountinethirdMaths',
        },
      ],
      },
      inthirdMathscorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"82251"</strong>',
      answers: [
        {
          nextId: 'wishtocountinethirdMaths',
        },
      ],
      },
}
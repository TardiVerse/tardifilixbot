day31: {
    botPrompt: '<strong> Day 30 : </strong> Monster box addition in kindergarten is a playful and engaging way to introduce children to basic math concepts',
    answers: [
            { nextId: 'day31link' },
    ],
  },
  
  day31link: {
    botPrompt: 'https://youtu.be/8r9-bUm96kY',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day31numberLine',
      },
    ],
  },

  day31numberLine: {
    botPrompt: 'Number Line Addition',
    answers: [
            { nextId: 'day31link2' },
    ],
  },

  day31link2: {
    botPrompt: 'https://youtu.be/GHJ1RDLY9L8',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day31numberLine2',
      },
    ],
  },

  day31numberLine2: {
    botPrompt: 'Lock and Key addition',
   
    answers: [
      {
        nextId: 'day31numberLine3',
      },
    ],
  },

  day31numberLine3: {
    botPrompt: 'https://youtu.be/kGDAtLGB4BU',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day31numberLine4',
      },
    ],
  },

  day31numberLine4: {
    botPrompt: 'Let’s look into the pages of the book',
    answers: [
      {
        nextId: 'day31numberLine5',
      },
    ],
  },

  day31numberLine5: {
    botPrompt: 'https://drive.google.com/file/d/1klGC9i-SP4yGzcrH_NTyybudLx3iDWvk/view?usp=share_link',
    type: RTypes.LINK,
    answers: [
      {
        nextId: "addition"+shuffledNumbersto[0],
      },
    ],
  },

//NEXT QUESTIONS

//1

  ["addition"+shuffledNumbersto[0]]: {
    botPrompt: 'What is the sum of 2 and 3?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","6"]),
    answers: [
      {
        answer: '3',
        nextId: 'inadditioncorrect',
      },
      {
        answer: '4',
        nextId: 'inadditioncorrect',
      },
      {
        answer: "5",
        nextId: 'additioncorrect',
      },
      {
        answer: "6",
        nextId: 'inadditioncorrect',
      },
    ],
  },
  additioncorrect: {
    botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[1],
      },
    ],
  },
  inadditioncorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[1],
      },
    ],
  },

  
//2

["addition"+shuffledNumbersto[1]]: {
    botPrompt: 'What is the sum of 12 and 17?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['28', '29', "30","31"]),
    answers: [
      {
        answer: '28',
        nextId: 'inadditioncorrectq2',
      },
      {
        answer: '29',
        nextId: 'additioncorrectq2',
      },
      {
        answer: "30",
        nextId: 'inadditioncorrectq2',
      },
      {
        answer: "31",
        nextId: 'inadditioncorrectq2',
      },
    ],
  },
  additioncorrectq2: {
    botPrompt: 'Hurray <strong>29</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[2],
      },
    ],
  },
  inadditioncorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[2],
      },
    ],
  },


  //3

["addition"+shuffledNumbersto[2]]: {
    botPrompt: 'What is the sum of 365 and 284?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['629', '649', "659","669"]),
    answers: [
      {
        answer: '629',
        nextId: 'additioncorrectq3',
      },
      {
        answer: '649',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "659",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "669",
        nextId: 'inadditioncorrectq3',
      },
    ],
  },
  additioncorrectq3: {
    botPrompt: 'Hurray <strong>629</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[3],
      },
    ],
  },
  inadditioncorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"629"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[3],
      },
    ],
  },


//4

["addition"+shuffledNumbersto[3]]: {
    botPrompt: 'What is the sum of 25 and 16?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['30', '41', "51","61"]),
    answers: [
      {
        answer: '30',
        nextId: 'inadditioncorrectq4',
      },
      {
        answer: '41',
        nextId: 'additioncorrectq4',
      },
      {
        answer: "51",
        nextId: 'inadditioncorrectq4',
      },
      {
        answer: "61",
        nextId: 'inadditioncorrectq4',
      },
    ],
  },
  additioncorrectq4: {
    botPrompt: 'Hurray <strong>41</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[4],
      },
    ],
  },
  inadditioncorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[4],
      },
    ],
  },

  //5
  
["addition"+shuffledNumbersto[4]]: {
    botPrompt: 'What is the sum of 435 and 278?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['703', '713', "723","733"]),
    answers: [
      {
        answer: '703',
        nextId: 'inadditioncorrectq5',
      },
      {
        answer: '713',
        nextId: 'additioncorrectq5',
      },
      {
        answer: "723",
        nextId: 'inadditioncorrectq5',
      },
      {
        answer: "733",
        nextId: 'inadditioncorrectq5',
      },
    ],
  },
  additioncorrectq5: {
    botPrompt: 'Hurray <strong>713</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[5],
      },
    ],
  },
  inadditioncorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"713"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[5],
      },
    ],
  },

  //6
  
["addition"+shuffledNumbersto[5]]: {
    botPrompt: 'If Mary has 5 candies and her friend gives her 3 more, how many candies does Mary have?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'inadditioncorrectq6',
      },
      {
        answer: '7',
        nextId: 'inadditioncorrectq6',
      },
      {
        answer: "8",
        nextId: 'inadditioncorrectq6',
      },
      {
        answer: "9",
        nextId: 'additioncorrectq6',
      },
    ],
  },
  additioncorrectq6: {
    botPrompt: 'Hurray <strong>9</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[6],
      },
    ],
  },
  inadditioncorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[6],
      },
    ],
  },

  //7
  
["addition"+shuffledNumbersto[6]]: {
    botPrompt: 'If there are 4 apples on the table and 3 more apples are added, how many apples are there now?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['5', '6', "7","8"]),
    answers: [
      {
        answer: '5',
        nextId: 'inadditioncorrectq7',
      },
      {
        answer: '6',
        nextId: 'inadditioncorrectq7',
      },
      {
        answer: "7",
        nextId: 'additioncorrectq7',
      },
      {
        answer: "8",
        nextId: 'inadditioncorrectq7',
      },
    ],
  },
  additioncorrectq7: {
    botPrompt: 'Hurray <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[7],
      },
    ],
  },
  inadditioncorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[7],
      },
    ],
  },


  //8
  
["addition"+shuffledNumbersto[7]]: {
    botPrompt: 'If John has 2 red balls and 3 blue balls, how many balls does he have in total?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","6"]),
    answers: [
      {
        answer: '3',
        nextId: 'inadditioncorrectq8',
      },
      {
        answer: '4',
        nextId: 'inadditioncorrectq8',
      },
      {
        answer: "5",
        nextId: 'additioncorrectq8',
      },
      {
        answer: "6",
        nextId: 'inadditioncorrectq8',
      },
    ],
  },
  additioncorrectq8: {
    botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[8],
      },
    ],
  },
  inadditioncorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[8],
      },
    ],
  },


  //9
  
["addition"+shuffledNumbersto[8]]: {
    botPrompt: 'If there are 7 birds on the tree and 2 more birds come to join them, how many birds are on the tree now?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['7', '8', "9","10"]),
    answers: [
      {
        answer: '7',
        nextId: 'inadditioncorrectq9',
      },
      {
        answer: '8',
        nextId: 'inadditioncorrectq9',
      },
      {
        answer: "9",
        nextId: 'inadditioncorrectq9',
      },
      {
        answer: "10",
        nextId: 'additioncorrectq9',
      },
    ],
  },
  additioncorrectq9: {
    botPrompt: 'Hurray <strong>10</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[9],
      },
    ],
  },
  inadditioncorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[9],
      },
    ],
  },


  //10
  
["addition"+shuffledNumbersto[9]]: {
    botPrompt: 'If there are 11 pencils in a box and 8 more pencils are added, how many pencils are there now?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['17', '18', "19","20"]),
    answers: [
      {
        answer: '17',
        nextId: 'inadditioncorrectq10',
      },
      {
        answer: '18',
        nextId: 'additioncorrectq10',
      },
      {
        answer: "19",
        nextId: 'inadditioncorrectq10',
      },
      {
        answer: "20",
        nextId: 'inadditioncorrectq10',
      },
    ],
  },
  additioncorrectq10: {
    botPrompt: 'Hurray <strong>18</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[10],
      },
    ],
  },
  inadditioncorrectq10: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[10],
      },
    ],
  },


  //11
  
["addition"+shuffledNumbersto[10]]: {
    botPrompt: 'If there are 23 books on a shelf and 14 more books are added, how many books are there now?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['34', '35', "36","37"]),
    answers: [
      {
        answer: '34',
        nextId: 'additioncorrectq11',
      },
      {
        answer: '35',
        nextId: 'inadditioncorrectq11',
      },
      {
        answer: "36",
        nextId: 'inadditioncorrectq11',
      },
      {
        answer: "37",
        nextId: 'inadditioncorrectq11',
      },
    ],
  },
  additioncorrectq11: {
    botPrompt: 'Hurray <strong>34</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[11],
      },
    ],
  },
  inadditioncorrectq11: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[11],
      },
    ],
  },


  //12
  
["addition"+shuffledNumbersto[11]]: {
    botPrompt: 'If there are 31 students in a class and 12 more students come in, how many students are in the class now?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['42', '43', "44","45"]),
    answers: [
      {
        answer: '42',
        nextId: 'additioncorrectq12',
      },
      {
        answer: '43',
        nextId: 'inadditioncorrectq12',
      },
      {
        answer: "44",
        nextId: 'inadditioncorrectq12',
      },
      {
        answer: "45",
        nextId: 'inadditioncorrectq12',
      },
    ],
  },
  additioncorrectq12: {
    botPrompt: 'Hurray <strong>42</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[12],
      },
    ],
  },
  inadditioncorrectq12: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[12],
      },
    ],
  },


  //13
  
["addition"+shuffledNumbersto[12]]: {
    botPrompt: 'If there are 15 birds on one tree and 20 birds on another tree, how many birds are there in total?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['35', '40', "45","50"]),
    answers: [
      {
        answer: '35',
        nextId: 'inadditioncorrectq13',
      },
      {
        answer: '40',
        nextId: 'additioncorrectq13',
      },
      {
        answer: "45",
        nextId: 'inadditioncorrectq13',
      },
      {
        answer: "50",
        nextId: 'inadditioncorrectq13',
      },
    ],
  },
  additioncorrectq13: {
    botPrompt: 'Hurray <strong>40</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[13],
      },
    ],
  },
  inadditioncorrectq13: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[13],
      },
    ],
  },

  //14
  
["addition"+shuffledNumbersto[13]]: {
    botPrompt: 'If Mary has 9 stickers and her friend gives her 5 more, but she gave away 3, how many stickers does Mary have now?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['10', '11', "12","13"]),
    answers: [
      {
        answer: '10',
        nextId: 'inadditioncorrectq14',
      },
      {
        answer: '11',
        nextId: 'inadditioncorrectq14',
      },
      {
        answer: "12",
        nextId: 'additioncorrectq14',
      },
      {
        answer: "13",
        nextId: 'inadditioncorrectq14',
      },
    ],
  },
  additioncorrectq14: {
    botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[14],
      },
    ],
  },
  inadditioncorrectq14: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[14],
      },
    ],
  },


  //15
  
["addition"+shuffledNumbersto[14]]: {
    botPrompt: 'What is the sum of 32 and 46?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['67', '78', "88","98"]),
    answers: [
      {
        answer: '67',
        nextId: 'additioncorrectq15',
      },
      {
        answer: '78',
        nextId: 'inadditioncorrectq15',
      },
      {
        answer: "88",
        nextId: 'inadditioncorrectq15',
      },
      {
        answer: "98",
        nextId: 'inadditioncorrectq15',
      },
    ],
  },
  additioncorrectq15: {
    botPrompt: 'Hurray <strong>67</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[15],
      },
    ],
  },
  inadditioncorrectq15: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"67"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[15],
      },
    ],
  },


   //16

["addition"+shuffledNumbersto[15]]: {
    botPrompt: 'What is the sum of 54 and 23?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['77', '76', "67","56"]),
    answers: [
      {
        answer: '77',
        nextId: 'additioncorrectq16',
      },
      {
        answer: '76',
        nextId: 'inadditioncorrectq16',
      },
      {
        answer: "67",
        nextId: 'inadditioncorrectq16',
      },
      {
        answer: "56",
        nextId: 'inadditioncorrectq16',
      },
    ],
  },
  additioncorrectq16: {
    botPrompt: 'Hurray <strong>77</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[16],
      },
    ],
  },
  inadditioncorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"77"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[16],
      },
    ],
  },

   //17

["addition"+shuffledNumbersto[16]]: {
    botPrompt: 'What is the sum of 85 and 16?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['100', '101', "110","111"]),
    answers: [
      {
        answer: '100',
        nextId: 'inadditioncorrectq17',
      },
      {
        answer: '101',
        nextId: 'additioncorrectq17',
      },
      {
        answer: "110",
        nextId: 'inadditioncorrectq17',
      },
      {
        answer: "111",
        nextId: 'inadditioncorrectq17',
      },
    ],
  },
  additioncorrectq17: {
    botPrompt: 'Hurray <strong>101</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[17],
      },
    ],
  },
  inadditioncorrectq17: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"101"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[17],
      },
    ],
  },

  //18

["addition"+shuffledNumbersto[17]]: {
    botPrompt: 'What is the sum of 47 and 28?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['64', '75', "81","94"]),
    answers: [
      {
        answer: '64',
        nextId: 'additioncorrectq18',
      },
      {
        answer: '75',
        nextId: 'inadditioncorrectq18',
      },
      {
        answer: "81",
        nextId: 'inadditioncorrectq18',
      },
      {
        answer: "94",
        nextId: 'inadditioncorrectq18',
      },
    ],
  },
  additioncorrectq18: {
    botPrompt: 'Hurray <strong>64</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[18],
      },
    ],
  },
  inadditioncorrectq18: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"64"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[18],
      },
    ],
  },


  //19

["addition"+shuffledNumbersto[18]]: {
    botPrompt: 'What is the sum of 18 and 29?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['36', '37', "47","48"]),
    answers: [
      {
        answer: '36',
        nextId: 'inadditioncorrectq19',
      },
      {
        answer: '37',
        nextId: 'additioncorrectq19',
      },
      {
        answer: "47",
        nextId: 'inadditioncorrectq19',
      },
      {
        answer: "48",
        nextId: 'inadditioncorrectq19',
      },
    ],
  },
  additioncorrectq19: {
    botPrompt: 'Hurray <strong>37</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[19],
      },
    ],
  },
  inadditioncorrectq19: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
    answers: [
      {
        nextId: 'addition'+shuffledNumbersto[19],
      },
    ],
  },


  //20
  
["addition"+shuffledNumbersto[19]]: {
  botPrompt: 'What is the sum of 63 and 24?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['87', '96', "107","116"]),
  answers: [
    {
      answer: '87',
      nextId: 'inadditioncorrectq20',
    },
    {
      answer: '96',
      nextId: 'additioncorrectq20',
    },
    {
      answer: "107",
      nextId: 'inadditioncorrectq20',
    },
    {
      answer: "116",
      nextId: 'inadditioncorrectq20',
    },
  ],
},
additioncorrectq20: {
  botPrompt: 'Hurray <strong>96</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[20],
    },
  ],
},
inadditioncorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"96"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[20],
    },
  ],
},

//21

["addition"+shuffledNumbersto[20]]: {
  botPrompt: 'What is the sum of 26 and 37?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['53', '54', "64","65"]),
  answers: [
    {
      answer: '53',
      nextId: 'additioncorrectq21',
    },
    {
      answer: '54',
      nextId: 'inadditioncorrectq21',
    },
    {
      answer: "64",
      nextId: 'inadditioncorrectq21',
    },
    {
      answer: "65",
      nextId: 'inadditioncorrectq21',
    },
  ],
},
additioncorrectq21: {
  botPrompt: 'Hurray <strong>53</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[21],
    },
  ],
},
inadditioncorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"53"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[21],
    },
  ],
},

//22

["addition"+shuffledNumbersto[21]]: {
  botPrompt: 'What is the sum of 81 and 17?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['98', '99', "100","101"]),
  answers: [
    {
      answer: '98',
      nextId: 'additioncorrectq22',
    },
    {
      answer: '99',
      nextId: 'inadditioncorrectq22',
    },
    {
      answer: "100",
      nextId: 'inadditioncorrectq22',
    },
    {
      answer: "101",
      nextId: 'inadditioncorrectq22',
    },
  ],
},
additioncorrectq22: {
  botPrompt: 'Hurray <strong>98</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[22],
    },
  ],
},
inadditioncorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"98"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[22],
    },
  ],
},


//23

["addition"+shuffledNumbersto[22]]: {
  botPrompt: 'What is the sum of 14 and 25?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['37', '38', "39","40"]),
  answers: [
    {
      answer: '37',
      nextId: 'inadditioncorrectq23',
    },
    {
      answer: '38',
      nextId: 'additioncorrectq23',
    },
    {
      answer: "39",
      nextId: 'inadditioncorrectq23',
    },
    {
      answer: "40",
      nextId: 'inadditioncorrectq23',
    },
  ],
},
additioncorrectq23: {
  botPrompt: 'Hurray <strong>38</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[23],
    },
  ],
},
inadditioncorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[23],
    },
  ],
},


//24

["addition"+shuffledNumbersto[23]]: {
  botPrompt: 'What is the sum of 63 and 12?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['74', '75', "85","86"]),
  answers: [
    {
      answer: '74',
      nextId: 'inadditioncorrectq24',
    },
    {
      answer: '75',
      nextId: 'additioncorrectq24',
    },
    {
      answer: "85",
      nextId: 'inadditioncorrectq24',
    },
    {
      answer: "86",
      nextId: 'inadditioncorrectq24',
    },
  ],
},
additioncorrectq24: {
  botPrompt: 'Hurray <strong>75</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[24],
    },
  ],
},
inadditioncorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"75"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[24],
    },
  ],
},

//25

["addition"+shuffledNumbersto[24]]: {
  botPrompt: 'What is the sum of 57 and 29?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['76', '86', "97","106"]),
  answers: [
    {
      answer: '76',
      nextId: 'additioncorrectq25',
    },
    {
      answer: '86',
      nextId: 'inadditioncorrectq25',
    },
    {
      answer: "97",
      nextId: 'inadditioncorrectq25',
    },
    {
      answer: "106",
      nextId: 'inadditioncorrectq25',
    },
  ],
},
additioncorrectq25: {
  botPrompt: 'Hurray <strong>76</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[25],
    },
  ],
},
inadditioncorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[25],
    },
  ],
},


//26

["addition"+shuffledNumbersto[25]]: {
  botPrompt: 'What is the sum of 39 and 48?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['76', '77', "86","87"]),
  answers: [
    {
      answer: '76',
      nextId: 'inadditioncorrectq26',
    },
    {
      answer: '77',
      nextId: 'inadditioncorrectq26',
    },
    {
      answer: "86",
      nextId: 'additioncorrectq26',
    },
    {
      answer: "87",
      nextId: 'inadditioncorrectq26',
    },
  ],
},
additioncorrectq26: {
  botPrompt: 'Hurray <strong>86</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[26],
    },
  ],
},
inadditioncorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"86"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[26],
    },
  ],
},


//27

["addition"+shuffledNumbersto[26]]: {
  botPrompt: 'What is the sum of 22 and 33?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['44', '55', "66","77"]),
  answers: [
    {
      answer: '44',
      nextId: 'inadditioncorrectq27',
    },
    {
      answer: '55',
      nextId: 'additioncorrectq27',
    },
    {
      answer: "66",
      nextId: 'inadditioncorrectq27',
    },
    {
      answer: "77",
      nextId: 'inadditioncorrectq27',
    },
  ],
},
additioncorrectq27: {
  botPrompt: 'Hurray <strong>55</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[27],
    },
  ],
},
inadditioncorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"55"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[27],
    },
  ],
},


//28

["addition"+shuffledNumbersto[27]]: {
  botPrompt: 'What is the sum of 234 and 156?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['370', '380', "390","400"]),
  answers: [
    {
      answer: '370',
      nextId: 'inadditioncorrectq28',
    },
    {
      answer: '380',
      nextId: 'inadditioncorrectq28',
    },
    {
      answer: "390",
      nextId: 'additioncorrectq28',
    },
    {
      answer: "400",
      nextId: 'inadditioncorrectq28',
    },
  ],
},
additioncorrectq28: {
  botPrompt: 'Hurray <strong>390</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[28],
    },
  ],
},
inadditioncorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"390"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[28],
    },
  ],
},


//29

["addition"+shuffledNumbersto[28]]: {
  botPrompt: 'What is the sum of 568 and 277?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['835', '845', "855","865"]),
  answers: [
    {
      answer: '835',
      nextId: 'additioncorrectq29',
    },
    {
      answer: '845',
      nextId: 'inadditioncorrectq29',
    },
    {
      answer: "855",
      nextId: 'inadditioncorrectq29',
    },
    {
      answer: "865",
      nextId: 'inadditioncorrectq29',
    },
  ],
},
additioncorrectq29: {
  botPrompt: 'Hurray <strong>835</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[29],
    },
  ],
},
inadditioncorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"835"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[29],
    },
  ],
},



//30

["addition"+shuffledNumbersto[29]]: {
  botPrompt: 'What is the sum of 122 and 56?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['168', '178', "188","198"]),
  answers: [
    {
      answer: '168',
      nextId: 'additioncorrectq30',
    },
    {
      answer: '178',
      nextId: 'inadditioncorrectq30',
    },
    {
      answer: "188",
      nextId: 'inadditioncorrectq30',
    },
    {
      answer: "198",
      nextId: 'inadditioncorrectq30',
    },
  ],
},
additioncorrectq30: {
  botPrompt: 'Hurray <strong>168</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[30],
    },
  ],
},
inadditioncorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"168"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[30],
    },
  ],
},



//31

["addition"+shuffledNumbersto[30]]: {
  botPrompt: 'What is the sum of 49 and 78?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['127', '126', "137","136"]),
  answers: [
    {
      answer: '127',
      nextId: 'inadditioncorrectq31',
    },
    {
      answer: '126',
      nextId: '31additioncorrectq31',
    },
    {
      answer: "137",
      nextId: 'inadditioncorrectq31',
    },
    {
      answer: "136",
      nextId: 'additioncorrectq31',
    },
  ],
},
additioncorrectq31: {
  botPrompt: 'Hurray <strong>136</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[31],
    },
  ],
},
inadditioncorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"136"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[31],
    },
  ],
},


//32

["addition"+shuffledNumbersto[31]]: {
  botPrompt: 'What is the sum of 83 and 49?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['131', '132', "142","152"]),
  answers: [
    {
      answer: '131',
      nextId: 'inadditioncorrectq32',
    },
    {
      answer: '132',
      nextId: 'additioncorrectq32',
    },
    {
      answer: "142",
      nextId: 'inadditioncorrectq32',
    },
    {
      answer: "152",
      nextId: 'inadditioncorrectq32',
    },
  ],
},
additioncorrectq32: {
  botPrompt: 'Hurray <strong>132</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[32],
    },
  ],
},
inadditioncorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"132"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[32],
    },
  ],
},


//33

["addition"+shuffledNumbersto[32]]: {
  botPrompt: 'What is the sum of 326 and 489?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['804', '805', "825","815"]),
  answers: [
    {
      answer: '804',
      nextId: 'inadditioncorrectq33',
    },
    {
      answer: '805',
      nextId: 'inadditioncorrectq33',
    },
    {
      answer: "825",
      nextId: 'inadditioncorrectq33',
    },
    {
      answer: "815",
      nextId: 'additioncorrectq33',
    },
  ],
},
additioncorrectq33: {
  botPrompt: 'Hurray <strong>815</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[33],
    },
  ],
},
inadditioncorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"815"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[33],
    },
  ],
},


//34
955	965	975	985	a
["addition"+shuffledNumbersto[33]]: {
  botPrompt: 'What is the sum of 472 and 587?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['955', '965', "975","985"]),
  answers: [
    {
      answer: '955',
      nextId: 'additioncorrectq34',
    },
    {
      answer: '965',
      nextId: 'inadditioncorrectq34',
    },
    {
      answer: "975",
      nextId: 'inadditioncorrectq34',
    },
    {
      answer: "985",
      nextId: 'inadditioncorrectq34',
    },
  ],
},
additioncorrectq34: {
  botPrompt: 'Hurray <strong>955</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[34],
    },
  ],
},
inadditioncorrectq034: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"955"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[34],
    },
  ],
},


//35

["addition"+shuffledNumbersto[34]]: {
  botPrompt: 'What is the sum of 169 and 294?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['443', '453', "463","473"]),
  answers: [
    {
      answer: '443',
      nextId: 'inadditioncorrectq35',
    },
    {
      answer: '453',
      nextId: 'inadditioncorrectq35',
    },
    {
      answer: "463",
      nextId: 'additioncorrectq35',
    },
    {
      answer: "473",
      nextId: 'inadditioncorrectq35',
    },
  ],
},
additioncorrectq35: {
  botPrompt: 'Hurray <strong>463</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[35],
    },
  ],
},
inadditioncorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"463"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[35],
    },
  ],
},


//36

["addition"+shuffledNumbersto[35]]: {
  botPrompt: 'What is the sum of 321 and 456?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['777', '767', "765","787"]),
  answers: [
    {
      answer: '777',
      nextId: 'inadditioncorrectq36',
    },
    {
      answer: '767',
      nextId: 'inadditioncorrectq36',
    },
    {
      answer: "765",
      nextId: 'inadditioncorrectq36',
    },
    {
      answer: "787",
      nextId: 'additioncorrectq36',
    },
  ],
},
additioncorrectq36: {
  botPrompt: 'Hurray <strong>787</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[36],
    },
  ],
},
inadditioncorrectq36: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"787"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[36],
    },
  ],
},


//37

["addition"+shuffledNumbersto[36]]: {
  botPrompt: 'What is the sum of 354 and 467?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['811', '821', "831","841"]),
  answers: [
    {
      answer: '811',
      nextId: 'inadditioncorrectq37',
    },
    {
      answer: '821',
      nextId: 'additioncorrectq37',
    },
    {
      answer: "831",
      nextId: 'inadditioncorrectq37',
    },
    {
      answer: "841",
      nextId: 'inadditioncorrectq37',
    },
  ],
},
additioncorrectq37: {
  botPrompt: 'Hurray <strong>821</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[37],
    },
  ],
},
inadditioncorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"821"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[37],
    },
  ],
},

//38

["addition"+shuffledNumbersto[37]]: {
  botPrompt: 'What is the sum of 159 and 276?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['426', '436', "446","456"]),
  answers: [
    {
      answer: '426',
      nextId: 'inadditioncorrectq38',
    },
    {
      answer: '436',
      nextId: 'additioncorrectq38',
    },
    {
      answer: "446",
      nextId: 'inadditioncorrectq38',
    },
    {
      answer: "456",
      nextId: 'inadditioncorrectq38',
    },
  ],
},
additioncorrectq38: {
  botPrompt: 'Hurray <strong>436</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[38],
    },
  ],
},
inadditioncorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"436"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[38],
    },
  ],
},


//39

["addition"+shuffledNumbersto[38]]: {
  botPrompt: 'What is the sum of 789 and 123?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['901', '902', "912","922"]),
  answers: [
    {
      answer: '901',
      nextId: 'inadditioncorrectq39',
    },
    {
      answer: '902',
      nextId: 'inadditioncorrectq39',
    },
    {
      answer: "912",
      nextId: 'additioncorrectq39',
    },
    {
      answer: "922",
      nextId: 'inadditioncorrectq39',
    },
  ],
},
additioncorrectq39: {
  botPrompt: 'Hurray <strong>912</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[39],
    },
  ],
},
inadditioncorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"912"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[39],
    },
  ],
},


//40

["addition"+shuffledNumbersto[39]]: {
  botPrompt: 'What is the sum of 68 and 36?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['102', '103', "104","105"]),
  answers: [
    {
      answer: '102',
      nextId: 'inadditioncorrectq40',
    },
    {
      answer: '103',
      nextId: 'additioncorrectq40',
    },
    {
      answer: "104",
      nextId: 'inadditioncorrectq40',
    },
    {
      answer: "105",
      nextId: 'inadditioncorrectq40',
    },
  ],
},
additioncorrectq40: {
  botPrompt: 'Hurray <strong>103</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[40],
    },
  ],
},
inadditioncorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"103"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[40],
    },
  ],
},


//41

["addition"+shuffledNumbersto[40]]: {
  botPrompt: 'What is the sum of 63 and 28?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['81', '82', "91","92"]),
  answers: [
    {
      answer: '81',
      nextId: 'inadditioncorrectq41',
    },
    {
      answer: '82',
      nextId: 'additioncorrectq41',
    },
    {
      answer: "91",
      nextId: 'inadditioncorrectq41',
    },
    {
      answer: "92",
      nextId: 'inadditioncorrectq41',
    },
  ],
},
additioncorrectq41: {
  botPrompt: 'Hurray <strong>82</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[41],
    },
  ],
},
inadditioncorrectq41: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"82"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[41],
    },
  ],
},


//42

["addition"+shuffledNumbersto[41]]: {
  botPrompt: 'What is the sum of 47 and 39?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['76', '86', "96","107"]),
  answers: [
    {
      answer: '76',
      nextId: 'additioncorrectq42',
    },
    {
      answer: '86',
      nextId: 'inadditioncorrectq42',
    },
    {
      answer: "96",
      nextId: 'inadditioncorrectq42',
    },
    {
      answer: "107",
      nextId: 'inadditioncorrectq42',
    },
  ],
},
additioncorrectq42: {
  botPrompt: 'Hurray <strong>76</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[42],
    },
  ],
},
inadditioncorrectq42: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[42],
    },
  ],
},


//43


["addition"+shuffledNumbersto[42]]: {
  botPrompt: 'Alice has 4 apples, and her friend gave her 3 more apples. How many apples does Alice have in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'inadditioncorrectq43',
    },
    {
      answer: '7',
      nextId: 'additioncorrectq43',
    },
    {
      answer: "8",
      nextId: 'inadditioncorrectq43',
    },
    {
      answer: "9",
      nextId: 'inadditioncorrectq43',
    },
  ],
},
additioncorrectq43: {
  botPrompt: 'Hurray <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[43],
    },
  ],
},
inadditioncorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[43],
    },
  ],
},


//44

["addition"+shuffledNumbersto[43]]: {
  botPrompt: 'Tim has 7 toy cars, and his brother gave him 4 more toy cars. How many toy cars does Tim have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['10', '11', "12","13"]),
  answers: [
    {
      answer: '10',
      nextId: 'inadditioncorrectq44',
    },
    {
      answer: '11',
      nextId: 'inadditioncorrectq44',
    },
    {
      answer: "12",
      nextId: 'additioncorrectq44',
    },
    {
      answer: "13",
      nextId: 'inadditioncorrectq44',
    },
  ],
},
additioncorrectq44: {
  botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[44],
    },
  ],
},
inadditioncorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[44],
    },
  ],
},


//45

["addition"+shuffledNumbersto[44]]: {
  botPrompt: 'If John has 9 candies and he eats 3 candies, how many candies does he have left?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['3', '4', "5","6"]),
  answers: [
    {
      answer: '3',
      nextId: 'inadditioncorrectq45',
    },
    {
      answer: '4',
      nextId: 'inadditioncorrectq45',
    },
    {
      answer: "5",
      nextId: 'inadditioncorrectq45',
    },
    {
      answer: "6",
      nextId: 'additioncorrectq45',
    },
  ],
},
additioncorrectq45: {
  botPrompt: 'Hurray <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[45],
    },
  ],
},
inadditioncorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"00"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[45],
    },
  ],
},


//46

["addition"+shuffledNumbersto[45]]: {
  botPrompt: 'If a bee has 5 flowers and it collects 3 more flowers, how many flowers does the bee have in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['7', '8', "9","10"]),
  answers: [
    {
      answer: '7',
      nextId: 'inadditioncorrectq46',
    },
    {
      answer: '8',
      nextId: 'additioncorrectq46',
    },
    {
      answer: "9",
      nextId: 'inadditioncorrectq46',
    },
    {
      answer: "10",
      nextId: 'inadditioncorrectq46',
    },
  ],
},
additioncorrectq46: {
  botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[46],
    },
  ],
},
inadditioncorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[46],
    },
  ],
},


//47

["addition"+shuffledNumbersto[46]]: {
  botPrompt: 'There are 6 birds on a tree. If 2 more birds join them, how many birds are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['7', '8', "9","10"]),
  answers: [
    {
      answer: '7',
      nextId: 'inadditioncorrectq47',
    },
    {
      answer: '8',
      nextId: 'additioncorrectq47',
    },
    {
      answer: "9",
      nextId: 'inadditioncorrectq47',
    },
    {
      answer: "10",
      nextId: 'inadditioncorrectq47',
    },
  ],
},
additioncorrectq47: {
  botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[47],
    },
  ],
},
inadditioncorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[47],
    },
  ],
},


//48

["addition"+shuffledNumbersto[47]]: {
  botPrompt: 'There are 8 ducks in a pond. 4 more ducks come and join them. How many ducks are there now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['10', '11', "12","13"]),
  answers: [
    {
      answer: '10',
      nextId: 'inadditioncorrectq48',
    },
    {
      answer: '11',
      nextId: 'inadditioncorrectq48',
    },
    {
      answer: "12",
      nextId: 'additioncorrectq48',
    },
    {
      answer: "13",
      nextId: 'inadditioncorrectq48',
    },
  ],
},
additioncorrectq48: {
  botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[48],
    },
  ],
},
inadditioncorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[48],
    },
  ],
},


//49

["addition"+shuffledNumbersto[48]]: {
  botPrompt: 'If Sally has 12 crayons, and she gives 3 to her friend, how many crayons does Sally have left?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['7', '8', "9","10"]),
  answers: [
    {
      answer: '7',
      nextId: 'additioncorrectq49',
    },
    {
      answer: '8',
      nextId: 'inadditioncorrectq49',
    },
    {
      answer: "9",
      nextId: 'inadditioncorrectq49',
    },
    {
      answer: "10",
      nextId: 'inadditioncorrectq49',
    },
  ],
},
additioncorrectq49: {
  botPrompt: 'Hurray <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[49],
    },
  ],
},
inadditioncorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>7"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[49],
    },
  ],
},


//50

["addition"+shuffledNumbersto[49]]: {
  botPrompt: 'There are 5 children playing in a park. If 2 more children come to join them, how many children are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'inadditioncorrectq50',
    },
    {
      answer: '7',
      nextId: 'inadditioncorrectq50',
    },
    {
      answer: "8",
      nextId: 'additioncorrectq50',
    },
    {
      answer: "9",
      nextId: 'inadditioncorrectq50',
    },
  ],
},
additioncorrectq50: {
  botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[50],
    },
  ],
},
inadditioncorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[50],
    },
  ],
},


//51

["addition"+shuffledNumbersto[50]]: {
  botPrompt: 'There are 8 puppies and 5 kittens playing in a park. How many animals are playing in the park in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['10', '12', "13","14"]),
  answers: [
    {
      answer: '10',
      nextId: 'inadditioncorrectq51',
    },
    {
      answer: '12',
      nextId: 'additioncorrectq51',
    },
    {
      answer: "13",
      nextId: 'inadditioncorrectq51',
    },
    {
      answer: "14",
      nextId: 'inadditioncorrectq51',
    },
  ],
},
additioncorrectq51: {
  botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[51],
    },
  ],
},
inadditioncorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[51],
    },
  ],
},


//52

["addition"+shuffledNumbersto[51]]: {
  botPrompt: 'Sarah has 14 stickers, and her friend gives her 8 more stickers. How many stickers does Sarah have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['20', '21', "22","23"]),
  answers: [
    {
      answer: '20',
      nextId: 'inadditioncorrectq52',
    },
    {
      answer: '21',
      nextId: 'inadditioncorrectq52',
    },
    {
      answer: "22",
      nextId: 'inadditioncorrectq52',
    },
    {
      answer: "23",
      nextId: 'additioncorrectq52',
    },
  ],
},
additioncorrectq52: {
  botPrompt: 'Hurray <strong>23</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[52],
    },
  ],
},
inadditioncorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[52],
    },
  ],
},


//53

["addition"+shuffledNumbersto[52]]: {
  botPrompt: 'If a store has 27 pencils and a customer buys 14 of them, how many pencils are left in the store?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['10', '11', "12","13"]),
  answers: [
    {
      answer: '10',
      nextId: 'inadditioncorrectq53',
    },
    {
      answer: '11',
      nextId: 'inadditioncorrectq53',
    },
    {
      answer: "12",
      nextId: 'additioncorrectq53',
    },
    {
      answer: "13",
      nextId: 'inadditioncorrectq53',
    },
  ],
},
additioncorrectq53: {
  botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[53],
    },
  ],
},
inadditioncorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[53],
    },
  ],
},



//54

["addition"+shuffledNumbersto[53]]: {
  botPrompt: 'John has 834 marbles and his brother gave him 476 more marbles. How many marbles does John have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1210', '1304', "1310","1312"]),
  answers: [
    {
      answer: '1210',
      nextId: 'inadditioncorrectq54',
    },
    {
      answer: '1304',
      nextId: 'inadditioncorrectq54',
    },
    {
      answer: "1310",
      nextId: 'additioncorrectq54',
    },
    {
      answer: "1312",
      nextId: 'inadditioncorrectq54',
    },
  ],
},
additioncorrectq54: {
  botPrompt: 'Hurray <strong>1310</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[54],
    },
  ],
},
inadditioncorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1310"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[54],
    },
  ],
},


//55

["addition"+shuffledNumbersto[54]]: {
  botPrompt: 'If a store sold 183 video games on Monday and 237 on Tuesday, how many video games were sold in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['400', '413', "420","421"]),
  answers: [
    {
      answer: '400',
      nextId: 'inadditioncorrectq55',
    },
    {
      answer: '413',
      nextId: 'inadditioncorrectq55',
    },
    {
      answer: "420",
      nextId: 'additioncorrectq55',
    },
    {
      answer: "421",
      nextId: 'inadditioncorrectq55',
    },
  ],
},
additioncorrectq55: {
  botPrompt: 'Hurray <strong>420</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[55],
    },
  ],
},
inadditioncorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"420"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[55],
    },
  ],
},


//56

["addition"+shuffledNumbersto[55]]: {
  botPrompt: 'Lisa collected 345 shells at the beach and her sister collected 296 shells. How many shells did they collect in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['641', '651', "635","640"]),
  answers: [
    {
      answer: '641',
      nextId: 'additioncorrectq56',
    },
    {
      answer: '651',
      nextId: 'inadditioncorrectq56',
    },
    {
      answer: "635",
      nextId: 'inadditioncorrectq56',
    },
    {
      answer: "640",
      nextId: 'inadditioncorrectq56',
    },
  ],
},
additioncorrectq56: {
  botPrompt: 'Hurray <strong>641</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[56],
    },
  ],
},
inadditioncorrectq56: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"641"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[56],
    },
  ],
},


//57

["addition"+shuffledNumbersto[56]]: {
  botPrompt: 'A bag has 256 marbles and another bag has 187 marbles. If they are combined, how many marbles are there?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['432', '433', "442","443"]),
  answers: [
    {
      answer: '432',
      nextId: 'inadditioncorrectq57',
    },
    {
      answer: '433',
      nextId: 'inadditioncorrectq57',
    },
    {
      answer: "442",
      nextId: 'inadditioncorrectq57',
    },
    {
      answer: "443",
      nextId: 'additioncorrectq57',
    },
  ],
},
additioncorrectq57: {
  botPrompt: 'Hurray <strong>443</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[57],
    },
  ],
},
inadditioncorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"443"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[57],
    },
  ],
},



//58

["addition"+shuffledNumbersto[57]]: {
  botPrompt: 'Mary bought 35 stickers on Monday, 46 stickers on Tuesday, and 27 stickers on Wednesday. How many stickers did she buy in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['106', '107', "108","108"]),
  answers: [
    {
      answer: '106',
      nextId: 'inadditioncorrectq58',
    },
    {
      answer: '107',
      nextId: 'inadditioncorrectq58',
    },
    {
      answer: "108",
      nextId: 'additioncorrectq58',
    },
    {
      answer: "109",
      nextId: 'inadditioncorrectq58',
    },
  ],
},
additioncorrectq58: {
  botPrompt: 'Hurray <strong>108</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[58],
    },
  ],
},
inadditioncorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"108"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[58],
    },
  ],
},


//59

["addition"+shuffledNumbersto[58]]: {
  botPrompt: 'In a toy store, there are 183 dolls and 257 toy cars. How many toys are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['420', '440', "450","460"]),
  answers: [
    {
      answer: '420',
      nextId: 'inadditioncorrectq59',
    },
    {
      answer: '440',
      nextId: 'additioncorrectq59',
    },
    {
      answer: "450",
      nextId: 'inadditioncorrectq59',
    },
    {
      answer: "460",
      nextId: 'inadditioncorrectq59',
    },
  ],
},
additioncorrectq59: {
  botPrompt: 'Hurray <strong>440</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[59],
    },
  ],
},
inadditioncorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"440"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[59],
    },
  ],
},


//60

["addition"+shuffledNumbersto[59]]: {
  botPrompt: 'Jennifer has 8 dolls and her friend gave her 4 more dolls. How many dolls does Jennifer have in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['10', '11', "12","13"]),
  answers: [
    {
      answer: '10',
      nextId: 'inadditioncorrectq60',
    },
    {
      answer: '11',
      nextId: 'inadditioncorrectq60',
    },
    {
      answer: "12",
      nextId: 'additioncorrectq60',
    },
    {
      answer: "13",
      nextId: 'inadditioncorrectq60',
    },
  ],
},
additioncorrectq60: {
  botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[60],
    },
  ],
},
inadditioncorrectq60: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[60],
    },
  ],
},


//61

["addition"+shuffledNumbersto[60]]: {
  botPrompt: 'A classroom has 28 girls and 24 boys. How many children are in the classroom in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['49', '52', "53","56"]),
  answers: [
    {
      answer: '49',
      nextId: 'inadditioncorrectq61',
    },
    {
      answer: '52',
      nextId: 'additioncorrectq61',
    },
    {
      answer: "53",
      nextId: 'inadditioncorrectq61',
    },
    {
      answer: "56",
      nextId: 'inadditioncorrectq61',
    },
  ],
},
additioncorrectq61: {
  botPrompt: 'Hurray <strong>52</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[61],
    },
  ],
},
inadditioncorrectq61: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"52"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[61],
    },
  ],
},


//62

["addition"+shuffledNumbersto[61]]: {
  botPrompt: 'In a bakery, 256 cupcakes were sold on Monday and 365 cupcakes were sold on Tuesday. How many cupcakes were sold in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['621', '611', "610","622"]),
  answers: [
    {
      answer: '621',
      nextId: 'additioncorrectq62',
    },
    {
      answer: '611',
      nextId: 'inadditioncorrectq62',
    },
    {
      answer: "610",
      nextId: 'inadditioncorrectq62',
    },
    {
      answer: "622",
      nextId: 'inadditioncorrectq62',
    },
  ],
},
additioncorrectq62: {
  botPrompt: 'Hurray <strong>621</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[62],
    },
  ],
},
inadditioncorrectq62: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"621"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[62],
    },
  ],
},


//63

["addition"+shuffledNumbersto[62]]: {
  botPrompt: 'At a fruit stall, 324 apples were sold on Monday and 187 apples were sold on Tuesday. How many apples are left at the stall if they had 1000 apples initially?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['456', '478', "485","425"]),
  answers: [
    {
      answer: '456',
      nextId: 'inadditioncorrectq63',
    },
    {
      answer: '478',
      nextId: 'additioncorrectq63',
    },
    {
      answer: "485",
      nextId: 'inadditioncorrectq63',
    },
    {
      answer: "425",
      nextId: 'inadditioncorrectq63',
    },
  ],
},
additioncorrectq63: {
  botPrompt: 'Hurray <strong>478</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[63],
    },
  ],
},
inadditioncorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"478"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[63],
    },
  ],
},


//64

["addition"+shuffledNumbersto[63]]: {
  botPrompt: 'Jack has 17 toy cars and his friend gave him 23 more. How many toy cars does Jack have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['36', '37', "40","41"]),
  answers: [
    {
      answer: '36',
      nextId: 'inadditioncorrectq64',
    },
    {
      answer: '37',
      nextId: 'inadditioncorrectq64',
    },
    {
      answer: "40",
      nextId: 'additioncorrectq64',
    },
    {
      answer: "41",
      nextId: 'inadditioncorrectq64',
    },
  ],
},
additioncorrectq64: {
  botPrompt: 'Hurray <strong>40</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[64],
    },
  ],
},
inadditioncorrectq64: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[64],
    },
  ],
},



//65

["addition"+shuffledNumbersto[64]]: {
  botPrompt: 'A school has 685 students and another school has 786 students. How many students are there in both schools combined?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1,450', '1,371', "1,561","1,471"]),
  answers: [
    {
      answer: '1,450',
      nextId: 'inadditioncorrectq65',
    },
    {
      answer: '1,371',
      nextId: 'inadditioncorrectq65',
    },
    {
      answer: "1,561",
      nextId: 'inadditioncorrectq65',
    },
    {
      answer: "1,471",
      nextId: 'additioncorrectq65',
    },
  ],
},
additioncorrectq65: {
  botPrompt: 'Hurray <strong>1,471</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[65],
    },
  ],
},
inadditioncorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1,471"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[65],
    },
  ],
},



//66

["addition"+shuffledNumbersto[65]]: {
  botPrompt: 'A bakery made 216 cakes in the morning and 364 cakes in the afternoon. How many cakes did the bakery make in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['558', '570', "580","590"]),
  answers: [
    {
      answer: '558',
      nextId: 'inadditioncorrectq66',
    },
    {
      answer: '570',
      nextId: 'inadditioncorrectq66',
    },
    {
      answer: "580",
      nextId: 'additioncorrectq66',
    },
    {
      answer: "590",
      nextId: 'inadditioncorrectq66',
    },
  ],
},
additioncorrectq66: {
  botPrompt: 'Hurray <strong>580</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[66],
    },
  ],
},
inadditioncorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"580"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[66],
    },
  ],
},



//67

["addition"+shuffledNumbersto[66]]: {
  botPrompt: 'Tom has 15 stickers and he bought 38 more. How many stickers does Tom have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['48', '51', "53","57"]),
  answers: [
    {
      answer: '48',
      nextId: 'inadditioncorrectq67',
    },
    {
      answer: '51',
      nextId: 'inadditioncorrectq67',
    },
    {
      answer: "53",
      nextId: 'inadditioncorrectq67',
    },
    {
      answer: "57",
      nextId: 'additioncorrectq67',
    },
  ],
},
additioncorrectq67: {
  botPrompt: 'Hurray <strong>57</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[67],
    },
  ],
},
inadditioncorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"57"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[67],
    },
  ],
},



//68

["addition"+shuffledNumbersto[67]]: {
  botPrompt: 'A factory produces 548 toys in a day and 246 toys in a night shift. How many toys are produced in 2 days and 2 night shifts?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2,296', '2,364', "2,690","2,884"]),
  answers: [
    {
      answer: '2,296',
      nextId: 'additioncorrectq68',
    },
    {
      answer: '2,364',
      nextId: 'inadditioncorrectq68',
    },
    {
      answer: "2,690",
      nextId: 'inadditioncorrectq68',
    },
    {
      answer: "2,884",
      nextId: 'inadditioncorrectq68',
    },
  ],
},
additioncorrectq68: {
  botPrompt: 'Hurray <strong>2,296</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[68],
    },
  ],
},
inadditioncorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2,296"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[68],
    },
  ],
},



//69

["addition"+shuffledNumbersto[68]]: {
  botPrompt: 'Emma has 673 crayons and she gave 187 crayons to her friends. How many crayons does Emma have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['496', '486', "487","488"]),
  answers: [
    {
      answer: '496',
      nextId: 'additioncorrectq69',
    },
    {
      answer: '486',
      nextId: 'inadditioncorrectq69',
    },
    {
      answer: "487",
      nextId: 'inadditioncorrectq69',
    },
    {
      answer: "488",
      nextId: 'inadditioncorrectq69',
    },
  ],
},
additioncorrectq69: {
  botPrompt: 'Hurray <strong>496</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[69],
    },
  ],
},
inadditioncorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"496"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[69],
    },
  ],
},



//70

["addition"+shuffledNumbersto[69]]: {
  botPrompt: 'John earned $356 in a week and $512 in the following week. How much money did John earn in 2 weeks?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['$868', '$872', "$846","$858"]),
  answers: [
    {
      answer: '$868',
      nextId: 'inadditioncorrectq70',
    },
    {
      answer: '$872',
      nextId: 'additioncorrectq70',
    },
    {
      answer: "$846",
      nextId: 'inadditioncorrectq70',
    },
    {
      answer: "$858",
      nextId: 'inadditioncorrectq70',
    },
  ],
},
additioncorrectq70: {
  botPrompt: 'Hurray <strong>$872</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[70],
    },
  ],
},
inadditioncorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"$872"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[70],
    },
  ],
},



//71

["addition"+shuffledNumbersto[70]]: {
  botPrompt: 'A garden has 135 yellow flowers and 273 red flowers. How many more red flowers are there than yellow flowers?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['135', '145', "137","138"]),
  answers: [
    {
      answer: '135',
      nextId: 'inadditioncorrectq71',
    },
    {
      answer: '145',
      nextId: 'inadditioncorrectq71',
    },
    {
      answer: "137",
      nextId: 'inadditioncorrectq71',
    },
    {
      answer: "138",
      nextId: 'additioncorrectq71',
    },
  ],
},
additioncorrectq71: {
  botPrompt: 'Hurray <strong>138</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[71],
    },
  ],
},
inadditioncorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"138"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[71],
    },
  ],
},



//72

["addition"+shuffledNumbersto[71]]: {
  botPrompt: 'A store has 250 notebooks and 175 pens. How many more notebooks does the store have than pens?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['75', '80', "85","90"]),
  answers: [
    {
      answer: '75',
      nextId: 'additioncorrectq72',
    },
    {
      answer: '80',
      nextId: 'inadditioncorrectq72',
    },
    {
      answer: "85",
      nextId: 'inadditioncorrectq72',
    },
    {
      answer: "90",
      nextId: 'inadditioncorrectq72',
    },
  ],
},
additioncorrectq72: {
  botPrompt: 'Hurray <strong>75</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[72],
    },
  ],
},
inadditioncorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"75"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[72],
    },
  ],
},



//73

["addition"+shuffledNumbersto[72]]: {
  botPrompt: 'A pizza parlor made 765 pizzas on Monday and 983 pizzas on Tuesday. How many pizzas did the parlor make in those two days?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1,617', '1,728', "1,048","1,748"]),
  answers: [
    {
      answer: '1,617',
      nextId: 'inadditioncorrectq73',
    },
    {
      answer: '1,728',
      nextId: 'additioncorrectq73',
    },
    {
      answer: "1,048",
      nextId: 'inadditioncorrectq73',
    },
    {
      answer: "1,748",
      nextId: 'inadditioncorrectq73',
    },
  ],
},
additioncorrectq73: {
  botPrompt: 'Hurray <strong>1,728</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[73],
    },
  ],
},
inadditioncorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1,728"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[73],
    },
  ],
},




//74

["addition"+shuffledNumbersto[73]]: {
  botPrompt: 'What is the sum of 276 and 398?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['563', '664', "674","764"]),
  answers: [
    {
      answer: '563',
      nextId: 'inadditioncorrectq74',
    },
    {
      answer: '664',
      nextId: 'inadditioncorrectq74',
    },
    {
      answer: "674",
      nextId: 'additioncorrectq74',
    },
    {
      answer: "764",
      nextId: 'inadditioncorrectq74',
    },
  ],
},
additioncorrectq74: {
  botPrompt: 'Hurray <strong>674</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[74],
    },
  ],
},
inadditioncorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"674"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[74],
    },
  ],
},



//75

["addition"+shuffledNumbersto[74]]: {
  botPrompt: 'If Peter has 42 marbles and he gets 57 more, how many does he have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['89', '99', "100","109"]),
  answers: [
    {
      answer: '89',
      nextId: 'inadditioncorrectq75',
    },
    {
      answer: '99',
      nextId: 'inadditioncorrectq75',
    },
    {
      answer: "100",
      nextId: 'inadditioncorrectq75',
    },
    {
      answer: "109",
      nextId: 'additioncorrectq75',
    },
  ],
},
additioncorrectq75: {
  botPrompt: 'Hurray <strong>109</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[75],
    },
  ],
},
inadditioncorrectq00: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"109"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[75],
    },
  ],
},



//76

["addition"+shuffledNumbersto[75]]: {
  botPrompt: 'What is the value of x in the equation: 120 + x = 319?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['169', '189', "199","209"]),
  answers: [
    {
      answer: '169',
      nextId: 'additioncorrectq76',
    },
    {
      answer: '189',
      nextId: 'inadditioncorrectq76',
    },
    {
      answer: "199",
      nextId: 'inadditioncorrectq76',
    },
    {
      answer: "209",
      nextId: 'inadditioncorrectq76',
    },
  ],
},
additioncorrectq76: {
  botPrompt: 'Hurray <strong>169</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[76],
    },
  ],
},
inadditioncorrectq76: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"169"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[76],
    },
  ],
},


//77

["addition"+shuffledNumbersto[76]]: {
  botPrompt: 'Samantha has 568 crayons and her brother gives her 239 more, how many does she have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['797', '805', "807","837"]),
  answers: [
    {
      answer: '797',
      nextId: 'additioncorrectq77',
    },
    {
      answer: '805',
      nextId: 'inadditioncorrectq77',
    },
    {
      answer: "807",
      nextId: 'inadditioncorrectq77',
    },
    {
      answer: "837",
      nextId: 'inadditioncorrectq77',
    },
  ],
},
additioncorrectq77: {
  botPrompt: 'Hurray <strong>797</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[77],
    },
  ],
},
inadditioncorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"797"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[77],
    },
  ],
},


//78

["addition"+shuffledNumbersto[77]]: {
  botPrompt: 'If you add 99 and 102, what is the sum?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['196', '200', "201","204"]),
  answers: [
    {
      answer: '196',
      nextId: 'inadditioncorrectq78',
    },
    {
      answer: '200',
      nextId: 'inadditioncorrectq78',
    },
    {
      answer: "201",
      nextId: 'additioncorrectq78',
    },
    {
      answer: "204",
      nextId: 'inadditioncorrectq78',
    },
  ],
},
additioncorrectq78: {
  botPrompt: 'Hurray <strong>201</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[78],
    },
  ],
},
inadditioncorrectq78: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"201"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[78],
    },
  ],
},


//79

["addition"+shuffledNumbersto[78]]: {
  botPrompt: 'What is the sum of 721 and 475?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1169', '1196', "1197","1246"]),
  answers: [
    {
      answer: '1169',
      nextId: 'inadditioncorrectq79',
    },
    {
      answer: '1196',
      nextId: 'additioncorrectq79',
    },
    {
      answer: "1197",
      nextId: 'inadditioncorrectq79',
    },
    {
      answer: "1246",
      nextId: 'inadditioncorrectq79',
    },
  ],
},
additioncorrectq79: {
  botPrompt: 'Hurray <strong>1196</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[79],
    },
  ],
},
inadditioncorrectq79: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1196"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[79],
    },
  ],
},


//80

["addition"+shuffledNumbersto[79]]: {
  botPrompt: 'If Maria has 157 stickers and her friend gives her 68 more, how many does she have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['215', '222', "225","229"]),
  answers: [
    {
      answer: '215',
      nextId: 'inadditioncorrectq80',
    },
    {
      answer: '222',
      nextId: 'additioncorrectq80',
    },
    {
      answer: "225",
      nextId: 'inadditioncorrectq80',
    },
    {
      answer: "229",
      nextId: 'inadditioncorrectq80',
    },
  ],
},
additioncorrectq80: {
  botPrompt: 'Hurray <strong>222</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[80],
    },
  ],
},
inadditioncorrectq80: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"222"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[80],
    },
  ],
},


//81

["addition"+shuffledNumbersto[80]]: {
  botPrompt: 'What is the sum of 333, 444 and 555?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1233', '1332', "1443","1542"]),
  answers: [
    {
      answer: '1233',
      nextId: 'inadditioncorrectq81',
    },
    {
      answer: '1332',
      nextId: 'inadditioncorrectq81',
    },
    {
      answer: "1443",
      nextId: 'additioncorrectq81',
    },
    {
      answer: "1542",
      nextId: 'inadditioncorrectq81',
    },
  ],
},
additioncorrectq81: {
  botPrompt: 'Hurray <strong>1443</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[81],
    },
  ],
},
inadditioncorrectq81: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1443"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[81],
    },
  ],
},


//82

["addition"+shuffledNumbersto[81]]: {
  botPrompt: 'There are 482 students in a school and 214 more join. What is the total number of students now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['646', '686', "696","726"]),
  answers: [
    {
      answer: '646',
      nextId: 'additioncorrectq82',
    },
    {
      answer: '686',
      nextId: 'inadditioncorrectq82',
    },
    {
      answer: "696",
      nextId: 'inadditioncorrectq82',
    },
    {
      answer: "726",
      nextId: 'inadditioncorrectq82',
    },
  ],
},
additioncorrectq82: {
  botPrompt: 'Hurray <strong>646</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[82],
    },
  ],
},
inadditioncorrectq82: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"646"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[82],
    },
  ],
},


//83

["addition"+shuffledNumbersto[82]]: {
  botPrompt: 'What is the sum of 72 and 85?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['136', '147', "157","165"]),
  answers: [
    {
      answer: '136',
      nextId: 'inadditioncorrectq83',
    },
    {
      answer: '147',
      nextId: 'additioncorrectq83',
    },
    {
      answer: "157",
      nextId: 'inadditioncorrectq83',
    },
    {
      answer: "165",
      nextId: 'inadditioncorrectq83',
    },
  ],
},
additioncorrectq83: {
  botPrompt: 'Hurray <strong>147</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[83],
    },
  ],
},
inadditioncorrectq83: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"147"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[83],
    },
  ],
},


//84

["addition"+shuffledNumbersto[83]]: {
  botPrompt: 'What is 2+1?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1', '2', "3","4"]),
  answers: [
    {
      answer: '1',
      nextId: 'inadditioncorrectq84',
    },
    {
      answer: '2',
      nextId: 'inadditioncorrectq84',
    },
    {
      answer: "3",
      nextId: 'additioncorrectq84',
    },
    {
      answer: "4",
      nextId: 'inadditioncorrectq84',
    },
  ],
},
additioncorrectq84: {
  botPrompt: 'Hurray <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[84],
    },
  ],
},
inadditioncorrectq84: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[84],
    },
  ],
},


//85

["addition"+shuffledNumbersto[84]]: {
  botPrompt: 'What is 7+3?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['8', '9', "10","11"]),
  answers: [
    {
      answer: '8',
      nextId: 'inadditioncorrectq85',
    },
    {
      answer: '9',
      nextId: 'inadditioncorrectq85',
    },
    {
      answer: "10",
      nextId: 'additioncorrectq85',
    },
    {
      answer: "11",
      nextId: 'inadditioncorrectq85',
    },
  ],
},
additioncorrectq85: {
  botPrompt: 'Hurray <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[85],
    },
  ],
},
inadditioncorrectq85: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[85],
    },
  ],
},


//86

["addition"+shuffledNumbersto[85]]: {
  botPrompt: 'What is 10+5?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['12', '13', "14","15"]),
  answers: [
    {
      answer: '12',
      nextId: 'inadditioncorrectq86',
    },
    {
      answer: '13',
      nextId: 'additioncorrectq86',
    },
    {
      answer: "14",
      nextId: 'inadditioncorrectq86',
    },
    {
      answer: "15",
      nextId: 'inadditioncorrectq86',
    },
  ],
},
additioncorrectq86: {
  botPrompt: 'Hurray <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[86],
    },
  ],
},
inadditioncorrectq86: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[86],
    },
  ],
},


//87

["addition"+shuffledNumbersto[86]]: {
  botPrompt: 'What is 12+23?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['24', '35', "36","44"]),
  answers: [
    {
      answer: '24',
      nextId: 'inadditioncorrectq87',
    },
    {
      answer: '35',
      nextId: 'additioncorrectq87',
    },
    {
      answer: "36",
      nextId: 'inadditioncorrectq87',
    },
    {
      answer: "44",
      nextId: 'inadditioncorrectq87',
    },
  ],
},
additioncorrectq87: {
  botPrompt: 'Hurray <strong>35</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[87],
    },
  ],
},
inadditioncorrectq87: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[87],
    },
  ],
},


//88

["addition"+shuffledNumbersto[87]]: {
  botPrompt: 'What is 45+34?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['70', '78', "79","89"]),
  answers: [
    {
      answer: '70',
      nextId: 'inadditioncorrectq88',
    },
    {
      answer: '78',
      nextId: 'inadditioncorrectq88',
    },
    {
      answer: "79",
      nextId: 'additioncorrectq88',
    },
    {
      answer: "89",
      nextId: 'inadditioncorrectq88',
    },
  ],
},
additioncorrectq88: {
  botPrompt: 'Hurray <strong>79</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[88],
    },
  ],
},
inadditioncorrectq88: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"79"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[88],
    },
  ],
},


//89

["addition"+shuffledNumbersto[88]]: {
  botPrompt: 'What is 321+123?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['424', '444', "4444","4445"]),
  answers: [
    {
      answer: '424',
      nextId: 'inadditioncorrectq89',
    },
    {
      answer: '444',
      nextId: 'additioncorrectq89',
    },
    {
      answer: "4444",
      nextId: 'inadditioncorrectq89',
    },
    {
      answer: "4445",
      nextId: 'inadditioncorrectq89',
    },
  ],
},
additioncorrectq89: {
  botPrompt: 'Hurray <strong>444</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[89],
    },
  ],
},
inadditioncorrectq89: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"444"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[89],
    },
  ],
},


//90

["addition"+shuffledNumbersto[89]]: {
  botPrompt: 'What is 24+19?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['32', '33', "42","43"]),
  answers: [
    {
      answer: '32',
      nextId: 'inadditioncorrectq90',
    },
    {
      answer: '33',
      nextId: 'inadditioncorrectq90',
    },
    {
      answer: "42",
      nextId: 'inadditioncorrectq90',
    },
    {
      answer: "43",
      nextId: 'additioncorrectq90',
    },
  ],
},
additioncorrectq90: {
  botPrompt: 'Hurray <strong>43</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[90],
    },
  ],
},
inadditioncorrectq90: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[90],
    },
  ],
},


//91

["addition"+shuffledNumbersto[90]]: {
  botPrompt: 'What is 58+37?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['95', '103', "108","125"]),
  answers: [
    {
      answer: '95',
      nextId: 'additioncorrectq91',
    },
    {
      answer: '103',
      nextId: 'inadditioncorrectq91',
    },
    {
      answer: "108",
      nextId: 'inadditioncorrectq91',
    },
    {
      answer: "125",
      nextId: 'inadditioncorrectq91',
    },
  ],
},
additioncorrectq91: {
  botPrompt: 'Hurray <strong>95</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[91],
    },
  ],
},
inadditioncorrectq91: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"95"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[91],
    },
  ],
},


//92

["addition"+shuffledNumbersto[91]]: {
  botPrompt: 'What is 173+78?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['241', '251', "261","271"]),
  answers: [
    {
      answer: '241',
      nextId: 'inadditioncorrectq92',
    },
    {
      answer: '251',
      nextId: 'additioncorrectq92',
    },
    {
      answer: "261",
      nextId: 'inadditioncorrectq92',
    },
    {
      answer: "271",
      nextId: 'inadditioncorrectq92',
    },
  ],
},
additioncorrectq92: {
  botPrompt: 'Hurray <strong>251</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[92],
    },
  ],
},
inadditioncorrectq92: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"251"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[92],
    },
  ],
},


//93

["addition"+shuffledNumbersto[92]]: {
  botPrompt: 'What is 432+123?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['545', '555', "566","577"]),
  answers: [
    {
      answer: '545',
      nextId: 'inadditioncorrectq93',
    },
    {
      answer: '555',
      nextId: 'additioncorrectq93',
    },
    {
      answer: "566",
      nextId: 'inadditioncorrectq93',
    },
    {
      answer: "577",
      nextId: 'inadditioncorrectq93',
    },
  ],
},
additioncorrectq93: {
  botPrompt: 'Hurray <strong>555</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[93],
    },
  ],
},
inadditioncorrectq93: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"555"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[93],
    },
  ],
},


//94

["addition"+shuffledNumbersto[93]]: {
  botPrompt: 'What is the sum of 9 and 11?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['19', '20', "21","22"]),
  answers: [
    {
      answer: '19',
      nextId: 'inadditioncorrectq94',
    },
    {
      answer: '20',
      nextId: 'additioncorrectq94',
    },
    {
      answer: "21",
      nextId: 'inadditioncorrectq94',
    },
    {
      answer: "22",
      nextId: 'inadditioncorrectq94',
    },
  ],
},
additioncorrectq94: {
  botPrompt: 'Hurray <strong>20</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[94],
    },
  ],
},
inadditioncorrectq94: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[94],
    },
  ],
},


//95

["addition"+shuffledNumbersto[94]]: {
  botPrompt: 'The teacher gave 15 pencils to the first graders and 12 to the second graders. How many pencils did the teacher give out in all?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['15', '12', "27","30"]),
  answers: [
    {
      answer: '15',
      nextId: 'inadditioncorrectq95',
    },
    {
      answer: '12',
      nextId: 'inadditioncorrectq95',
    },
    {
      answer: "27",
      nextId: 'additioncorrectq95',
    },
    {
      answer: "30",
      nextId: 'inadditioncorrectq95',
    },
  ],
},
additioncorrectq95: {
  botPrompt: 'Hurray <strong>27</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[95],
    },
  ],
},
inadditioncorrectq95: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[95],
    },
  ],
},


//96

["addition"+shuffledNumbersto[95]]: {
  botPrompt: 'Jack has 7 toy cars and his brother has 4. How many toy cars do they have altogether?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['9', '10', "11","12"]),
  answers: [
    {
      answer: '9',
      nextId: 'inadditioncorrectq96',
    },
    {
      answer: '10',
      nextId: 'inadditioncorrectq96',
    },
    {
      answer: "11",
      nextId: 'additioncorrectq96',
    },
    {
      answer: "12",
      nextId: 'inadditioncorrectq96',
    },
  ],
},
additioncorrectq96: {
  botPrompt: 'Hurray <strong>11</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[96],
    },
  ],
},
inadditioncorrectq96: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[96],
    },
  ],
},


//97

["addition"+shuffledNumbersto[96]]: {
  botPrompt: 'There are 6 birds in a tree and 4 more birds fly to the tree. How many birds are there now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['8', '9', "10","11"]),
  answers: [
    {
      answer: '8',
      nextId: 'inadditioncorrectq97',
    },
    {
      answer: '9',
      nextId: 'inadditioncorrectq97',
    },
    {
      answer: "10",
      nextId: 'additioncorrectq97',
    },
    {
      answer: "11",
      nextId: 'inadditioncorrectq97',
    },
  ],
},
additioncorrectq97: {
  botPrompt: 'Hurray <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[97],
    },
  ],
},
inadditioncorrectq97: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[97],
    },
  ],
},


//98

["addition"+shuffledNumbersto[97]]: {
  botPrompt: 'John has 23 marbles and he finds 14 more on the playground. How many marbles does John have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['37', '34', "33","31"]),
  answers: [
    {
      answer: '37',
      nextId: 'additioncorrectq98',
    },
    {
      answer: '34',
      nextId: 'inadditioncorrectq98',
    },
    {
      answer: "33",
      nextId: 'inadditioncorrectq98',
    },
    {
      answer: "31",
      nextId: 'inadditioncorrectq98',
    },
  ],
},
additioncorrectq98: {
  botPrompt: 'Hurray <strong>37</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[98],
    },
  ],
},
inadditioncorrectq98: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[98],
    },
  ],
},


//99

["addition"+shuffledNumbersto[98]]: {
  botPrompt: 'If 256 + 789 = 1,045, what is the sum of 256 + 798?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1,065', '1,034', "1,044","1,054"]),
  answers: [
    {
      answer: '1,065',
      nextId: 'inadditioncorrectq99',
    },
    {
      answer: '1,034',
      nextId: 'additioncorrectq99',
    },
    {
      answer: "1,044",
      nextId: 'inadditioncorrectq99',
    },
    {
      answer: "1,054",
      nextId: 'inadditioncorrectq99',
    },
  ],
},
additioncorrectq99: {
  botPrompt: 'Hurray <strong>000</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[99],
    },
  ],
},
inadditioncorrectq99: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"000"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[99],
    },
  ],
},


//100

["addition"+shuffledNumbersto[99]]: {
  botPrompt: 'In a candy store, there are 123 bags of candy and 214 more bags of candy arrive. What is the total number of bags of candy in the store now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['337', '327', "347","317"]),
  answers: [
    {
      answer: '337',
      nextId: 'additioncorrectq100',
    },
    {
      answer: '327',
      nextId: 'inadditioncorrectq100',
    },
    {
      answer: "347",
      nextId: 'inadditioncorrectq100',
    },
    {
      answer: "317",
      nextId: 'inadditioncorrectq100',
    },
  ],
},
additioncorrectq100: {
  botPrompt: 'Hurray <strong>337</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[100],
    },
  ],
},
inadditioncorrectq100: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"337"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[100],
    },
  ],
},


//101

["addition"+shuffledNumbersto[100]]: {
  botPrompt: 'If 435 + 182 = 617, what is the value of 1 in this equation?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '1', "7","2"]),
  answers: [
    {
      answer: '5',
      nextId: 'inadditioncorrectq101',
    },
    {
      answer: '1',
      nextId: 'additioncorrectq101',
    },
    {
      answer: "7",
      nextId: 'inadditioncorrectq101',
    },
    {
      answer: "2",
      nextId: 'inadditioncorrectq101',
    },
  ],
},
additioncorrectq101: {
  botPrompt: 'Hurray <strong>1</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[101],
    },
  ],
},
inadditioncorrectq101: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[101],
    },
  ],
},


//102

["addition"+shuffledNumbersto[101]]: {
  botPrompt: 'The sum of two numbers is 875. One number is 214, what is the other number?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['661', '662', "451","649"]),
  answers: [
    {
      answer: '661',
      nextId: 'additioncorrectq102',
    },
    {
      answer: '662',
      nextId: 'inadditioncorrectq102',
    },
    {
      answer: "451",
      nextId: 'inadditioncorrectq102',
    },
    {
      answer: "649",
      nextId: 'inadditioncorrectq102',
    },
  ],
},
additioncorrectq102: {
  botPrompt: 'Hurray <strong>661</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[102],
    },
  ],
},
inadditioncorrectq102: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"661"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[102],
    },
  ],
},


//103

["addition"+shuffledNumbersto[102]]: {
  botPrompt: 'question',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2,019', '2,321', "2,319","1,997"]),
  answers: [
    {
      answer: '2,019',
      nextId: 'additioncorrectq103',
    },
    {
      answer: '2,321',
      nextId: 'inadditioncorrectq103',
    },
    {
      answer: "2,319",
      nextId: 'inadditioncorrectq103',
    },
    {
      answer: "1997",
      nextId: 'inadditioncorrectq103',
    },
  ],
},
additioncorrectq103: {
  botPrompt: 'Hurray <strong>2,019</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[103],
    },
  ],
},
inadditioncorrectq103: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"000"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[103],
    },
  ],
},


//104

["addition"+shuffledNumbersto[103]]: {
  botPrompt: 'The sum of two numbers is 4,569. If one number is 3,875, what is the other number?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['694', '697', "690","684"]),
  answers: [
    {
      answer: '694',
      nextId: 'inadditioncorrectq104',
    },
    {
      answer: '697',
      nextId: 'additioncorrectq104',
    },
    {
      answer: "690",
      nextId: 'inadditioncorrectq104',
    },
    {
      answer: "684",
      nextId: 'inadditioncorrectq104',
    },
  ],
},
additioncorrectq104: {
  botPrompt: 'Hurray <strong>694</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[104],
    },
  ],
},
inadditioncorrectq104: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"694"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[104],
    },
  ],
},


//105

["addition"+shuffledNumbersto[104]]: {
  botPrompt: 'In a garage sale, 156 books were sold in the morning and 287 books were sold in the afternoon. How many books were sold in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['443', '436', "443","469"]),
  answers: [
    {
      answer: '443',
      nextId: 'inadditioncorrectq105',
    },
    {
      answer: '436',
      nextId: 'inadditioncorrectq105',
    },
    {
      answer: "443",
      nextId: 'additioncorrectq105',
    },
    {
      answer: "469",
      nextId: 'inadditioncorrectq105',
    },
  ],
},
additioncorrectq105: {
  botPrompt: 'Hurray <strong>443</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[105],
    },
  ],
},
inadditioncorrectq105: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"443"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[105],
    },
  ],
},


//106

["addition"+shuffledNumbersto[105]]: {
  botPrompt: 'The total weight of five boxes is 47.5 kilograms. If the weight of one box is 8.5 kilograms, what is the total weight of two boxes?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['13', '14', "15","17"]),
  answers: [
    {
      answer: '13',
      nextId: 'inadditioncorrectq106',
    },
    {
      answer: '14',
      nextId: 'inadditioncorrectq106',
    },
    {
      answer: "15",
      nextId: 'additioncorrectq106',
    },
    {
      answer: "17",
      nextId: 'inadditioncorrectq106',
    },
  ],
},
additioncorrectq106: {
  botPrompt: 'Hurray <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[106],
    },
  ],
},
inadditioncorrectq106: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[106],
    },
  ],
},


//107

["addition"+shuffledNumbersto[106]]: {
  botPrompt: 'If 378 + 517 = 895, what is the value of 8 in this equation?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '3', "9","8"]),
  answers: [
    {
      answer: '5',
      nextId: 'inadditioncorrectq107',
    },
    {
      answer: '3',
      nextId: 'inadditioncorrectq107',
    },
    {
      answer: "9",
      nextId: 'inadditioncorrectq107',
    },
    {
      answer: "8",
      nextId: 'additioncorrectq107',
    },
  ],
},
additioncorrectq107: {
  botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[107],
    },
  ],
},
inadditioncorrectq107: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'addition'+shuffledNumbersto[107],
    },
  ],
},


//108

["addition"+shuffledNumbersto[107]]: {
  botPrompt: 'In a garden, there are 246 red roses and 321 yellow roses. How many roses are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['567', '568', "577","557"]),
  answers: [
    {
      answer: '567',
      nextId: 'additioncorrectq108',
    },
    {
      answer: '568',
      nextId: 'inadditioncorrectq108',
    },
    {
      answer: "577",
      nextId: 'inadditioncorrectq108',
    },
    {
      answer: "557",
      nextId: 'inadditioncorrectq108',
    },
  ],
},
additioncorrectq108: {
  botPrompt: 'Hurray <strong>567</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontinue31',
    },
  ],
},
inadditioncorrectq108: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"567"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue31',
    },
  ],
},

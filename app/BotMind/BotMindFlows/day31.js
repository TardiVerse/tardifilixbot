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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '41',
        nextId: 'additioncorrectq3',
      },
      {
        answer: "51",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "61",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '713',
        nextId: 'additioncorrectq3',
      },
      {
        answer: "723",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "733",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '7',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "8",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "9",
        nextId: 'additioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '6',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "7",
        nextId: 'additioncorrectq3',
      },
      {
        answer: "8",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '4',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "5",
        nextId: 'additioncorrectq3',
      },
      {
        answer: "6",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '8',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "9",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "10",
        nextId: 'additioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '18',
        nextId: 'additioncorrectq3',
      },
      {
        answer: "19",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "20",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'additioncorrectq3',
      },
      {
        answer: '35',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "36",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "37",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'additioncorrectq3',
      },
      {
        answer: '43',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "44",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "45",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '40',
        nextId: 'additioncorrectq3',
      },
      {
        answer: "45",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "50",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '11',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "12",
        nextId: 'additioncorrectq3',
      },
      {
        answer: "13",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'additioncorrectq3',
      },
      {
        answer: '78',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "88",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "98",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'additioncorrectq3',
      },
      {
        answer: '76',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "67",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "56",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '101',
        nextId: 'additioncorrectq3',
      },
      {
        answer: "110",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "111",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'additioncorrectq3',
      },
      {
        answer: '75',
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "81",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "94",
        nextId: 'inadditioncorrectq3',
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
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: '37',
        nextId: 'additioncorrectq3',
      },
      {
        answer: "47",
        nextId: 'inadditioncorrectq3',
      },
      {
        answer: "48",
        nextId: 'inadditioncorrectq3',
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
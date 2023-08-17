//subtarction


["subtarction"+shuffledNumbersto[0]]: {
    botPrompt: 'What is the result of 8 minus 2?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","6"]),
    answers: [
      {
        answer: '3',
        nextId: 'insubtarctioncorrect',
      },
      {
        answer: '4',
        nextId: 'insubtarctioncorrect',
      },
      {
        answer: "5",
        nextId: 'insubtarctioncorrect',
      },
      {
        answer: "6",
        nextId: 'subtarctioncorrect',
      },
    ],
  },
  subtarctioncorrect: {
    botPrompt: 'Hurray <strong>6</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[1],
      },
    ],
  },
  insubtarctioncorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['subtarction'+shuffledNumbersto[1]]: {
    botPrompt: 'What is the result of 9 minus 7?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'subtarctioncorrectq2',
      },
      {
        answer: '3',
        nextId: 'insubtarctioncorrectq2',
      },
      {
        answer: "4",
        nextId: 'insubtarctioncorrectq2',
      },
      {
        answer: "5",
        nextId: 'insubtarctioncorrectq2',
      },
    ],
  },
  
  subtarctioncorrectq2: {
    botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[2],
      },
    ],
  },
  insubtarctioncorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['subtarction'+shuffledNumbersto[2]]: {
  botPrompt: "What is the result of 12 minus 5?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'insubtarctioncorrectq3',
      },
      {
        answer: '7',
        nextId: 'subtarctioncorrectq3',
      },
      {
        answer: "8",
        nextId: 'insubtarctioncorrectq3',
      },
      {
        answer: "9",
        nextId: 'insubtarctioncorrectq3',
      },
    ],
  },
  
  subtarctioncorrectq3: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[3],
    },
  ],
  },
  insubtarctioncorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['subtarction'+shuffledNumbersto[3]]: {
  botPrompt: 'What is the result of 15 minus 9?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'insubtarctioncorrectq4',
      },
      {
        answer: '5',
        nextId: 'insubtarctioncorrectq4',
      },
      {
        answer: "6",
        nextId: 'subtarctioncorrectq4',
      },
      {
        answer: "7",
        nextId: 'insubtarctioncorrectq4',
      },
    ],
  },
  
  subtarctioncorrectq4: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[4],
    },
  ],
  },
  insubtarctioncorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['subtarction'+shuffledNumbersto[4]]: {
  botPrompt: 'What is the result of 20 minus 13?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['5', '6', "7","8"]),
    answers: [
      {
        answer: '5',
        nextId: 'insubtarctioncorrectq5',
      },
      {
        answer: '6',
        nextId: 'insubtarctioncorrectq5',
      },
      {
        answer: "7",
        nextId: 'subtarctioncorrectq5',
      },
      {
        answer: "8",
        nextId: 'insubtarctioncorrectq5',
      },
    ],
  },
  
  subtarctioncorrectq5: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[5],
    },
  ],
  },
  insubtarctioncorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['subtarction'+shuffledNumbersto[5]]: {
  botPrompt: 'What is the result of 29 minus 18?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['10', '11', "12","13"]),
    answers: [
      {
        answer: '10',
        nextId: 'insubtarctioncorrectq6',
      },
      {
        answer: '11',
        nextId: 'subtarctioncorrectq6',
      },
      {
        answer: "12",
        nextId: 'insubtarctioncorrectq6',
      },
      {
        answer: "13",
        nextId: 'insubtarctioncorrectq6',
      },
    ],
  },
  
  subtarctioncorrectq6: {
  botPrompt: 'Hurray! <strong>11</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[6],
    },
  ],
  },
  insubtarctioncorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['subtarction'+shuffledNumbersto[6]]: {
  botPrompt: 'What is the result of 53 minus 27?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['24', '25', "28","30"]),
    answers: [
      {
        answer: '24',
        nextId: 'insubtarctioncorrectq7',
      },
      {
        answer: '25',
        nextId: 'insubtarctioncorrectq7',
      },
      {
        answer: "28",
        nextId: 'subtarctioncorrectq7',
      },
      {
        answer: "30",
        nextId: 'insubtarctioncorrectq7',
      },
    ],
  },
  
  subtarctioncorrectq7: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[7],
    },
  ],
  },
  insubtarctioncorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['subtarction'+shuffledNumbersto[7]]: {
  botPrompt: 'What is the result of 67 minus 39?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['25', '27', "28","30"]),
    answers: [
      {
        answer: '25',
        nextId: 'insubtarctioncorrectq8',
      },
      {
        answer: '27',
        nextId: 'insubtarctioncorrectq8',
      },
      {
        answer: "28",
        nextId: 'subtarctioncorrectq8',
      },
      {
        answer: "30",
        nextId: 'insubtarctioncorrectq8',
      },
    ],
  },
  
  subtarctioncorrectq8: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[8],
    },
  ],
  },
  insubtarctioncorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['subtarction'+shuffledNumbersto[8]]: {
  botPrompt: 'What is the result of 94 minus 56?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['37', '38', "39","40"]),
    answers: [
      {
        answer: '37',
        nextId: 'insubtarctioncorrectq9',
      },
      {
        answer: '38',
        nextId: 'subtarctioncorrectq9',
      },
      {
        answer: "39",
        nextId: 'insubtarctioncorrectq9',
      },
      {
        answer: "40",
        nextId: 'insubtarctioncorrectq9',
      },
    ],
  },
  
  subtarctioncorrectq9: {
  botPrompt: 'Hurray! <strong>38</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[9],
    },
  ],
  },
  insubtarctioncorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['subtarction'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the result of 138 minus 76?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['52', '62', "72","82"]),
    answers: [
      {
        answer: '52',
        nextId: 'insubtarctioncorrectq10',
      },
      {
        answer: '62',
        nextId: 'subtarctioncorrectq10',
      },
      {
        answer: "72",
        nextId: 'insubtarctioncorrectq10',
      },
      {
        answer: "82",
        nextId: 'insubtarctioncorrectq10',
      },
    ],
  
  },
  
  subtarctioncorrectq10: {
  botPrompt: 'Hurray! <strong>62</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[10],
    },
  ],
  },
  insubtarctioncorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"62"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['subtarction'+shuffledNumbersto[10]]: {
  botPrompt: 'What is the result of 9 minus 6?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'insubtarctioncorrectq11',
      },
      {
        answer: '2',
        nextId: 'insubtarctioncorrectq11',
      },
      {
        answer: "3",
        nextId: 'subtarctioncorrectq11',
      },
      {
        answer: "4",
        nextId: 'insubtarctioncorrectq11',
      },
    ],
  },
  
  subtarctioncorrectq11: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[11],
    },
  ],
  },
  insubtarctioncorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['subtarction'+shuffledNumbersto[11]]: {
  botPrompt: 'What is the result of 14 minus 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'insubtarctioncorrectq12',
      },
      {
        answer: '5',
        nextId: 'insubtarctioncorrectq12',
      },
      {
        answer: "6",
        nextId: 'subtarctioncorrectq12',
      },
      {
        answer: "7",
        nextId: 'insubtarctioncorrectq12',
      },
    ],
  },
  
  subtarctioncorrectq12: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[12],
    },
  ],
  },
  insubtarctioncorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['subtarction'+shuffledNumbersto[12]]: {
  botPrompt: 'What is the result of 27 minus 14?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '12', "13","14"]),
    answers: [
      {
        answer: '11',
        nextId: 'insubtarctioncorrectq13',
      },
      {
        answer: '12',
        nextId: 'insubtarctioncorrectq13',
      },
      {
        answer: "13",
        nextId: 'subtarctioncorrectq13',
      },
      {
        answer: "14",
        nextId: 'insubtarctioncorrectq13',
      },
    ],
  },
  
  subtarctioncorrectq13: {
  botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[13],
    },
  ],
  },
  insubtarctioncorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['subtarction'+shuffledNumbersto[13]]: {
  botPrompt: 'What is the result of 38 minus 23?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '15', "12","13"]),
    answers: [
      {
        answer: '14',
        nextId: 'insubtarctioncorrectq14',
      },
      {
        answer: '15',
        nextId: 'subtarctioncorrectq14',
      },
      {
        answer: "12",
        nextId: 'insubtarctioncorrectq14',
      },
      {
        answer: "13",
        nextId: 'insubtarctioncorrectq14',
      },
    ],
  },
  
  subtarctioncorrectq14: {
  botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[14],
    },
  ],
  },
  insubtarctioncorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['subtarction'+shuffledNumbersto[14]]: {
  botPrompt: 'What is the result of 45 minus 31?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['12', '13', "14","15"]),
    answers: [
      {
        answer: '12',
        nextId: 'insubtarctioncorrectq15',
      },
      {
        answer: '13',
        nextId: 'insubtarctioncorrectq15',
      },
      {
        answer: "14",
        nextId: 'subtarctioncorrectq15',
      },
      {
        answer: "15",
        nextId: 'insubtarctioncorrectq15',
      },
    ],
  },
  
  subtarctioncorrectq15: {
  botPrompt: 'Hurray! <strong>14</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[15],
    },
  ],
  },
  insubtarctioncorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['subtarction'+shuffledNumbersto[15]]: {
    botPrompt: 'What is the difference between 59 and 25?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['34', '35', "36","37"]),
    answers: [
      {
        answer: '34',
        nextId: 'subtarctioncorrectq16',
      },
      {
        answer: '35',
        nextId: 'insubtarctioncorrectq16',
      },
      {
        answer: "36",
        nextId: 'insubtarctioncorrectq16',
      },
      {
        answer: "37",
        nextId: 'insubtarctioncorrectq16',
      },
    ],
  },
  subtarctioncorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>34</strong> 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[16],
      },
    ],
  },
  insubtarctioncorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['subtarction'+shuffledNumbersto[16]]: {
  botPrompt: 'What is the result of subtracting 37 from 89?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['52', '44', "42","32"]),
    answers: [
      {
        answer: '52',
        nextId: 'subtarctioncorrectq17',
      },
      {
        answer: '44',
        nextId: 'insubtarctioncorrectq17',
      },
      {
        answer: "42",
        nextId: 'insubtarctioncorrectq17',
      },
      {
        answer: "32",
        nextId: 'insubtarctioncorrectq17',
      },
    ],
  },
  subtarctioncorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>52</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[17],
    },
  ],
  },
  insubtarctioncorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"52"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['subtarction'+shuffledNumbersto[17]]: {
  botPrompt: 'If Michael has 78 marbles and he gave away 12 of them, how many marbles does Michael have now?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['66', '76', "70","56"]),
  answers: [
    {
      answer: '66',
      nextId: 'subtarctioncorrectq18',
    },
    {
      answer: '76',
      nextId: 'insubtarctioncorrectq18',
    },
    {
      answer: "70",
      nextId: 'insubtarctioncorrectq18',
    },
    {
      answer: "56",
      nextId: 'insubtarctioncorrectq18',
    },
  ],
  },
  subtarctioncorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>66</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[18],
    },
  ],
  },
  insubtarctioncorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"66"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['subtarction'+shuffledNumbersto[18]]: {
  botPrompt: 'If Jane has 58 candies and she ate 34 of them, how many candies does Jane have left?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['22', '23', "24","26"]),
  answers: [
    {
      answer: '22',
      nextId: 'insubtarctioncorrectq19',
    },
    {
      answer: '23',
      nextId: 'insubtarctioncorrectq19',
    },
    {
      answer: "24",
      nextId: 'subtarctioncorrectq19',
    },
    {
      answer: "26",
      nextId: 'insubtarctioncorrectq19',
    },
  ],
  },
  subtarctioncorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>24</strong> Answers! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[19],
    },
  ],
  },
  insubtarctioncorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['subtarction'+shuffledNumbersto[19]]: {
  botPrompt: 'What is the difference between 48 and 17?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['31', '27', "36","24"]),
  answers: [
    {
      answer: '31',
      nextId: 'subtarctioncorrectq20',
    },
    {
      answer: '27',
      nextId: 'insubtarctioncorrectq20',
    },
    {
      answer: "36",
      nextId: 'insubtarctioncorrectq20',
    },
    {
      answer: "24",
      nextId: 'insubtarctioncorrectq20',
    },
  ],
  },
  subtarctioncorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>31</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[20],
    },
  ],
  },
  insubtarctioncorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["subtarction"+shuffledNumbersto[20]]: {
    botPrompt: 'If there are 89 apples and 37 of them were sold, how many apples are left?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['52', '47', "48","44"]),
  answers: [
    {
      answer: '52',
      nextId: 'subtarctioncorrectq21',
    },
    {
      answer: '47',
      nextId: 'insubtarctioncorrectq21',
    },
    {
      answer: "48",
      nextId: 'insubtarctioncorrectq21',
    },
    {
      answer: "44",
      nextId: 'insubtarctioncorrectq21',
    },
  ],
  },
  subtarctioncorrectq21: {
    botPrompt: 'Hurray <strong>52</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[21],
      },
    ],
  },
  insubtarctioncorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"52"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['subtarction'+shuffledNumbersto[21]]: {
    botPrompt: 'If there are 23 birds on a tree and 5 of them fly away, how many birds are still on the tree?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['16', '17', "18","19"]),
  answers: [
    {
      answer: '16',
      nextId: 'insubtarctioncorrectq22',
    },
    {
      answer: '17',
      nextId: 'subtarctioncorrectq22',
    },
    {
      answer: "18",
      nextId: 'insubtarctioncorrectq22',
    },
    {
      answer: "19",
      nextId: 'insubtarctioncorrectq22',
    },
  ],
  },
  
  subtarctioncorrectq22: {
    botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[22],
      },
    ],
  },
  insubtarctioncorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['subtarction'+shuffledNumbersto[22]]: {
  botPrompt: "If a book has 85 pages and 23 of them are already read, how many pages are left to read?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['52', '67', "62","68"]),
  answers: [
    {
      answer: '52',
      nextId: 'insubtarctioncorrectq23',
    },
    {
      answer: '67',
      nextId: 'insubtarctioncorrectq23',
    },
    {
      answer: "62",
      nextId: 'subtarctioncorrectq23',
    },
    {
      answer: "68",
      nextId: 'insubtarctioncorrectq23',
    },
  ],
  },
  
  subtarctioncorrectq23: {
  botPrompt: 'Hurray! <strong>62</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[23],
    },
  ],
  },
  insubtarctioncorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"62"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['subtarction'+shuffledNumbersto[23]]: {
  botPrompt: 'What is the difference between 27 and 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['19', '20', "21","22"]),
  answers: [
    {
      answer: '19',
      nextId: 'subtarctioncorrectq24',
    },
    {
      answer: '20',
      nextId: 'insubtarctioncorrectq24',
    },
    {
      answer: "21",
      nextId: 'insubtarctioncorrectq24',
    },
    {
      answer: "22",
      nextId: 'insubtarctioncorrectq24',
    },
  ],
  },
  
  subtarctioncorrectq24: {
  botPrompt: 'Hurray! <strong>19</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[24],
    },
  ],
  },
  insubtarctioncorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['subtarction'+shuffledNumbersto[24]]: {
  botPrompt: 'What is the result of subtracting 67 from 89?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['22', '23', "25","26"]),
  answers: [
    {
      answer: '22',
      nextId: 'subtarctioncorrectq25',
    },
    {
      answer: '23',
      nextId: 'insubtarctioncorrectq25',
    },
    {
      answer: "25",
      nextId: 'insubtarctioncorrectq25',
    },
    {
      answer: "26",
      nextId: 'insubtarctioncorrectq25',
    },
  ],
  },
  
  subtarctioncorrectq25: {
  botPrompt: 'Hurray! <strong>22</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[25],
    },
  ],
  },
  insubtarctioncorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['subtarction'+shuffledNumbersto[25]]: {
  botPrompt: 'If there are 76 oranges and 15 of them are rotten, how many oranges are still good to eat?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['61', '51', "62","71"]),
  answers: [
    {
      answer: '61',
      nextId: 'subtarctioncorrectq26',
    },
    {
      answer: '51',
      nextId: 'insubtarctioncorrectq26',
    },
    {
      answer: "62",
      nextId: 'insubtarctioncorrectq26',
    },
    {
      answer: "71",
      nextId: 'insubtarctioncorrectq26',
    },
  ],
  },
  
  subtarctioncorrectq26: {
  botPrompt: 'Hurray! <strong>61</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[26],
    },
  ],
  },
  insubtarctioncorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"61"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['subtarction'+shuffledNumbersto[26]]: {
  botPrompt: 'If a packet of chips has 30 chips and 10 of them were eaten, how many chips are left in the packet?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['18', '19', "20","21"]),
    answers: [
      {
        answer: '18',
        nextId: 'insubtarctioncorrectq27',
      },
      {
        answer: '19',
        nextId: 'insubtarctioncorrectq27',
      },
      {
        answer: "20",
        nextId: 'subtarctioncorrectq27',
      },
      {
        answer: "21",
        nextId: 'insubtarctioncorrectq27',
      },
    ],
  },
  
  subtarctioncorrectq27: {
  botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[27],
    },
  ],
  },
  insubtarctioncorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[27],
    },
  ],
  },
  

  //28
  ['subtarction'+shuffledNumbersto[27]]: {
  botPrompt: 'If there are 37 books in a library and 12 of them were borrowed, how many books are still available in the library?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['27', '24', "25","26"]),
  answers: [
    {
      answer: '27',
      nextId: 'insubtarctioncorrectq28',
    },
    {
      answer: '24',
      nextId: 'insubtarctioncorrectq28',
    },
    {
      answer: "25",
      nextId: 'subtarctioncorrectq28',
    },
    {
      answer: "26",
      nextId: 'insubtarctioncorrectq28',
    },
  ],
  },
  
  subtarctioncorrectq28: {
  botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[28],
    },
  ],
  },
  insubtarctioncorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['subtarction'+shuffledNumbersto[28]]: {
  botPrompt: 'What is the difference between 95 and 27?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['68', '67', "66","65"]),
    answers: [
      {
        answer: '68',
        nextId: 'subtarctioncorrectq29',
      },
      {
        answer: '67',
        nextId: 'insubtarctioncorrectq29',
      },
      {
        answer: "66",
        nextId: 'insubtarctioncorrectq29',
      },
      {
        answer: "65",
        nextId: 'insubtarctioncorrectq29',
      },
    ],
  },
  
  subtarctioncorrectq29: {
  botPrompt: 'Hurray! <strong>68</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[29],
    },
  ],
  },
  insubtarctioncorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"68"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[29],
    },
  ],
  },
  
  
  //30
  ['subtarction'+shuffledNumbersto[29]]: {
  botPrompt: 'What is the result of 68 - 29?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['38', '39', "40","41"]),
  answers: [
    {
      answer: '38',
      nextId: 'insubtarctioncorrectq30',
    },
    {
      answer: '39',
      nextId: 'subtarctioncorrectq30',
    },
    {
      answer: "40",
      nextId: 'insubtarctioncorrectq30',
    },
    {
      answer: "41",
      nextId: 'insubtarctioncorrectq30',
    },
  ],
  },

  subtarctioncorrectq30: {
  botPrompt: 'Hurray! <strong>39</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[30],
    },
  ],
  },
  insubtarctioncorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[30],
    },
  ],
  },
  
  //31
  ['subtarction'+shuffledNumbersto[30]]: {
  botPrompt: 'What is the result of 94 - 57?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['36', '37', "38","39"]),
    answers: [
      {
        answer: '36',
        nextId: 'insubtarctioncorrectq31',
      },
      {
        answer: '37',
        nextId: 'subtarctioncorrectq31',
      },
      {
        answer: "38",
        nextId: 'insubtarctioncorrectq31',
      },
      {
        answer: "39",
        nextId: 'insubtarctioncorrectq31',
      },
    ],
  },
  
  subtarctioncorrectq31: {
  botPrompt: 'Hurray! <strong>37</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[31],
    },
  ],
  },
  insubtarctioncorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[31],
    },
  ],
  },
  
  //32
  ['subtarction'+shuffledNumbersto[31]]: {
  botPrompt: 'What is the result of 72 - 43?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '29', "31","32"]),
  answers: [
    {
      answer: '28',
      nextId: 'insubtarctioncorrectq32',
    },
    {
      answer: '29',
      nextId: 'subtarctioncorrectq32',
    },
    {
      answer: "31",
      nextId: 'insubtarctioncorrectq32',
    },
    {
      answer: "32",
      nextId: 'insubtarctioncorrectq32',
    },
  ],
  },
  
  subtarctioncorrectq32: {
  botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[32],
    },
  ],
  },
  insubtarctioncorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[32],
    },
  ],
  },
  
  //33
  ['subtarction'+shuffledNumbersto[32]]: {
  botPrompt: 'What is the result of 86 - 47?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['36', '37', "38","39"]),
  answers: [
    {
      answer: '36',
      nextId: 'insubtarctioncorrectq33',
    },
    {
      answer: '37',
      nextId: 'insubtarctioncorrectq33',
    },
    {
      answer: "38",
      nextId: 'insubtarctioncorrectq33',
    },
    {
      answer: "39",
      nextId: 'subtarctioncorrectq33',
    },
  ],
  },
  
  subtarctioncorrectq33: {
  botPrompt: 'Hurray! <strong>39</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[33],
    },
  ],
  },
  insubtarctioncorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[33],
    },
  ],
  },
  
  //34
  ['subtarction'+shuffledNumbersto[33]]: {
  botPrompt: 'What is the result of 98 - 51?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['46', '47', "48","49"]),
    answers: [
      {
        answer: '46',
        nextId: 'insubtarctioncorrectq34',
      },
      {
        answer: '47',
        nextId: 'subtarctioncorrectq34',
      },
      {
        answer: "48",
        nextId: 'insubtarctioncorrectq34',
      },
      {
        answer: "49",
        nextId: 'insubtarctioncorrectq34',
      },
    ],
  },
  
  subtarctioncorrectq34: {
  botPrompt: 'Hurray! <strong>47</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[34],
    },
  ],
  },
  insubtarctioncorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[34],
    },
  ],
  },
  
  
  //35
  ['subtarction'+shuffledNumbersto[34]]: {
  botPrompt: 'If the difference between two numbers is 47, and the larger number is 82, what is the smaller number?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['32', '33', "34","35"]),
  answers: [
    {
      answer: '32',
      nextId: 'insubtarctioncorrectq35',
    },
    {
      answer: '33',
      nextId: 'insubtarctioncorrectq35',
    },
    {
      answer: "34",
      nextId: 'insubtarctioncorrectq35',
    },
    {
      answer: "35",
      nextId: 'subtarctioncorrectq35',
    },
  ],
  },
  
  subtarctioncorrectq35: {
  botPrompt: 'Hurray! <strong>35</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[35],
    },
  ],
  },
  insubtarctioncorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[35],
    },
  ],
  },
  
  //36
  ['subtarction'+shuffledNumbersto[35]]: {
    botPrompt: 'If a number is subtracted from 73, and the result is 29, what is the number?',
    type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['42', '44', "46","48"]),
  answers: [
    {
      answer: '42',
      nextId: 'insubtarctioncorrectq36',
    },
    {
      answer: '44',
      nextId: 'subtarctioncorrectq36',
    },
    {
      answer: "46",
      nextId: 'insubtarctioncorrectq36',
    },
    {
      answer: "48",
      nextId: 'insubtarctioncorrectq36',
    },
  ],
  },
  subtarctioncorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>44</strong> 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[36],
      },
    ],
  },
  insubtarctioncorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[36],
      },
    ],
  },
  
  //37
  ['subtarction'+shuffledNumbersto[36]]: {
  botPrompt: 'If the difference between two numbers is 39, and the smaller number is 25, what is the larger number?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['54', '64', "74","84"]),
  answers: [
    {
      answer: '54',
      nextId: 'insubtarctioncorrectq37',
    },
    {
      answer: '64',
      nextId: 'subtarctioncorrectq37',
    },
    {
      answer: "74",
      nextId: 'insubtarctioncorrectq37',
    },
    {
      answer: "84",
      nextId: 'insubtarctioncorrectq37',
    },
  ],
  },
  subtarctioncorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>64</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[37],
    },
  ],
  },
  insubtarctioncorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"64"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[37],
    },
  ],
  },

  //38
  ['subtarction'+shuffledNumbersto[37]]: {
  botPrompt: 'Sofia has 85 chocolates and she gave 28 chocolates to her friends. How many chocolates are left with her?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['43', '57', "57","69"]),
    answers: [
      {
        answer: '43',
        nextId: 'insubtarctioncorrectq38',
      },
      {
        answer: '57',
        nextId: 'subtarctioncorrectq38',
      },
      {
        answer: "57",
        nextId: 'insubtarctioncorrectq38',
      },
      {
        answer: "69",
        nextId: 'insubtarctioncorrectq38',
      },
    ],
  },
  subtarctioncorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>57</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[38],
    },
  ],
  },
  insubtarctioncorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"57"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[38],
    },
  ],
  },
  
  //39
  ['subtarction'+shuffledNumbersto[38]]: {
  botPrompt: 'What is the sum of 789 and 123?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'insubtarctioncorrectq310',
    },
    {
      answer: '7',
      nextId: 'subtarctioncorrectq39',
    },
    {
      answer: "8",
      nextId: 'insubtarctioncorrectq39',
    },
    {
      answer: "9",
      nextId: 'insubtarctioncorrectq39',
    },
  ],
  },
  subtarctioncorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>8</strong> Answers! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[39],
    },
  ],
  },
  insubtarctioncorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[39],
    },
  ],
  },
  
  //40
  ['subtarction'+shuffledNumbersto[39]]: {
  botPrompt: 'Rahul had 72 stickers in his collection. He gave 21 stickers to his friend. How many stickers are left with him?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['51', '61', "71","81"]),
    answers: [
      {
        answer: '51',
        nextId: 'subtarctioncorrectq40',
      },
      {
        answer: '61',
        nextId: 'insubtarctioncorrectq40',
      },
      {
        answer: "71",
        nextId: 'insubtarctioncorrectq40',
      },
      {
        answer: "81",
        nextId: 'insubtarctioncorrectq40',
      },
    ],
  },
  subtarctioncorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>51</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[40],
    },
  ],
  },
  insubtarctioncorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"51"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[40],
    },
  ],
  },
  
  //41
  ["subtarction"+shuffledNumbersto[40]]: {
    botPrompt: 'A factory produces 64 toys in a day. Out of these, 48 toys are sold. How many toys are left unsold?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['16', '26', "36","46"]),
    answers: [
      {
        answer: '16',
        nextId: 'subtarctioncorrectq41',
      },
      {
        answer: '26',
        nextId: 'insubtarctioncorrectq41',
      },
      {
        answer: "36",
        nextId: 'insubtarctioncorrectq41',
      },
      {
        answer: "46",
        nextId: 'insubtarctioncorrectq41',
      },
    ],
  },
  subtarctioncorrectq41: {
    botPrompt: 'Hurray <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[41],
      },
    ],
  },
  insubtarctioncorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[41],
      },
    ],
  },
  
  //42
  
  ['subtarction'+shuffledNumbersto[41]]: {
    botPrompt: 'A school has 60 students in class 5 and 48 students in class 6. How many more students are there in class 5 than in class 6?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['12', '10', "8","6"]),
    answers: [
      {
        answer: '12',
        nextId: 'subtarctioncorrectq42',
      },
      {
        answer: '10',
        nextId: 'insubtarctioncorrectq42',
      },
      {
        answer: "8",
        nextId: 'insubtarctioncorrectq42',
      },
      {
        answer: "6",
        nextId: 'insubtarctioncorrectq42',
      },
    ],
  },
  
  subtarctioncorrectq42: {
    botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[42],
      },
    ],
  },
  insubtarctioncorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[42],
      },
    ],
  },
  
  //43
  ['subtarction'+shuffledNumbersto[42]]: {
  botPrompt: "What is the result of 5 - 2?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'insubtarctioncorrectq43',
      },
      {
        answer: '2',
        nextId: 'insubtarctioncorrectq43',
      },
      {
        answer: "3",
        nextId: 'subtarctioncorrectq43',
      },
      {
        answer: "4",
        nextId: 'insubtarctioncorrectq43',
      },
    ],
  },
  
  subtarctioncorrectq43: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[43],
    },
  ],
  },
  insubtarctioncorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[43],
    },
  ],
  },
  
  //44
  ['subtarction'+shuffledNumbersto[43]]: {
  botPrompt: 'What is the result of 30 - 12?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['18', '17', "12","13"]),
    answers: [
      {
        answer: '18',
        nextId: 'subtarctioncorrectq44',
      },
      {
        answer: '17',
        nextId: 'insubtarctioncorrectq44',
      },
      {
        answer: "12",
        nextId: 'insubtarctioncorrectq44',
      },
      {
        answer: "13",
        nextId: 'insubtarctioncorrectq44',
      },
    ],
  },
  
  subtarctioncorrectq44: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[44],
    },
  ],
  },
  insubtarctioncorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[44],
    },
  ],
  },
  
  //45
  ['subtarction'+shuffledNumbersto[44]]: {
  botPrompt: 'What is the result of 582 - 173?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['409', '419', "429","439"]),
    answers: [
      {
        answer: '409',
        nextId: 'subtarctioncorrectq45',
      },
      {
        answer: '419',
        nextId: 'insubtarctioncorrectq45',
      },
      {
        answer: "429",
        nextId: 'insubtarctioncorrectq45',
      },
      {
        answer: "439",
        nextId: 'insubtarctioncorrectq45',
      },
    ],
  },
  
  subtarctioncorrectq45: {
  botPrompt: 'Hurray! <strong>409</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[45],
    },
  ],
  },
  insubtarctioncorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"409"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[45],
    },
  ],
  },
  
  //46
  ['subtarction'+shuffledNumbersto[45]]: {
  botPrompt: 'What is the result of 743 - 298?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['435', '445', "455","465"]),
    answers: [
      {
        answer: '435',
        nextId: 'subtarctioncorrectq46',
      },
      {
        answer: '445',
        nextId: 'insubtarctioncorrectq46',
      },
      {
        answer: "455",
        nextId: 'insubtarctioncorrectq46',
      },
      {
        answer: "465",
        nextId: 'insubtarctioncorrectq46',
      },
    ],
  },
  
  subtarctioncorrectq46: {
  botPrompt: 'Hurray! <strong>435</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[46],
    },
  ],
  },
  insubtarctioncorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"435"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[46],
    },
  ],
  },
  
  //47
  ['subtarction'+shuffledNumbersto[46]]: {
  botPrompt: 'What is the result of 25 - 13?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '10', "12","8"]),
    answers: [
      {
        answer: '11',
        nextId: 'insubtarctioncorrectq47',
      },
      {
        answer: '10',
        nextId: 'insubtarctioncorrectq47',
      },
      {
        answer: "12",
        nextId: 'subtarctioncorrectq47',
      },
      {
        answer: "8",
        nextId: 'insubtarctioncorrectq47',
      },
    ],
  },
  
  subtarctioncorrectq47: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[47],
    },
  ],
  },
  insubtarctioncorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[47],
    },
  ],
  },


  //48
  ['subtarction'+shuffledNumbersto[47]]: {
  botPrompt: 'What is the result of 418 - 212?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['197', '198', "199","200"]),
    answers: [
      {
        answer: '197',
        nextId: 'subtarctioncorrectq48',
      },
      {
        answer: '198',
        nextId: 'insubtarctioncorrectq48',
      },
      {
        answer: "199",
        nextId: 'insubtarctioncorrectq48',
      },
      {
        answer: "200",
        nextId: 'insubtarctioncorrectq48',
      },
    ],
  },
  
  subtarctioncorrectq48: {
  botPrompt: 'Hurray! <strong>197</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[48],
    },
  ],
  },
  insubtarctioncorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"197"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[48],
    },
  ],
  },
  
  //49
  ['subtarction'+shuffledNumbersto[48]]: {
  botPrompt: 'What is the result of 746 - 347?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['399', '409', "419","429"]),
    answers: [
      {
        answer: '399',
        nextId: 'subtarctioncorrectq49',
      },
      {
        answer: '409',
        nextId: 'insubtarctioncorrectq49',
      },
      {
        answer: "419",
        nextId: 'insubtarctioncorrectq49',
      },
      {
        answer: "429",
        nextId: 'insubtarctioncorrectq49',
      },
    ],
  },
  
  subtarctioncorrectq49: {
  botPrompt: 'Hurray! <strong>399</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[49],
    },
  ],
  },
  insubtarctioncorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"399"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[49],
    },
  ],
  },
  
  
  //50
  ['subtarction'+shuffledNumbersto[49]]: {
  botPrompt: 'What is the result of 315 - 202?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['103', '104', "105","106"]),
    answers: [
      {
        answer: '103',
        nextId: 'subtarctioncorrectq50',
      },
      {
        answer: '104',
        nextId: 'insubtarctioncorrectq50',
      },
      {
        answer: "105",
        nextId: 'insubtarctioncorrectq50',
      },
      {
        answer: "106",
        nextId: 'insubtarctioncorrectq50',
      },
    ],
  },
  
  subtarctioncorrectq50: {
  botPrompt: 'Hurray! <strong>103</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[50],
    },
  ],
  },
  insubtarctioncorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"103"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[50],
    },
  ],
  },
  
  //51
  ['subtarction'+shuffledNumbersto[50]]: {
  botPrompt: 'What is the result of 92 - 47?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['35', '36', "37","38"]),
    answers: [
      {
        answer: '35',
        nextId: 'subtarctioncorrectq51',
      },
      {
        answer: '36',
        nextId: 'insubtarctioncorrectq51',
      },
      {
        answer: "37",
        nextId: 'insubtarctioncorrectq51',
      },
      {
        answer: "38",
        nextId: 'insubtarctioncorrectq51',
      },
    ],
  },
  
  subtarctioncorrectq51: {
  botPrompt: 'Hurray! <strong>35</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[51],
    },
  ],
  },
  insubtarctioncorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[51],
    },
  ],
  },
  
  //52
  ['subtarction'+shuffledNumbersto[51]]: {
  botPrompt: 'A shopkeeper had 75 candies. She sold 34 candies. How many left?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['41', '42', "43","44"]),
    answers: [
      {
        answer: '41',
        nextId: 'subtarctioncorrectq52',
      },
      {
        answer: '42',
        nextId: 'insubtarctioncorrectq52',
      },
      {
        answer: "43",
        nextId: 'insubtarctioncorrectq52',
      },
      {
        answer: "44",
        nextId: 'insubtarctioncorrectq52',
      },
    ],
  },
  
  subtarctioncorrectq52: {
  botPrompt: 'Hurray! <strong>41</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[52],
    },
  ],
  },
  insubtarctioncorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[52],
    },
  ],
  },
  
  //53
  ['subtarction'+shuffledNumbersto[52]]: {
  botPrompt: 'There are 85 balls in a basket. If 27 are taken out, how many left?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['54', '55', "56","58"]),
    answers: [
      {
        answer: '54',
        nextId: 'insubtarctioncorrectq53',
      },
      {
        answer: '55',
        nextId: 'insubtarctioncorrectq53',
      },
      {
        answer: "56",
        nextId: 'insubtarctioncorrectq53',
      },
      {
        answer: "58",
        nextId: 'subtarctioncorrectq53',
      },
    ],
  },

  subtarctioncorrectq53: {
  botPrompt: 'Hurray! <strong>58</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[53],
    },
  ],
  },
  insubtarctioncorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[53],
    },
  ],
  },
  
  //54
  ['subtarction'+shuffledNumbersto[53]]: {
  botPrompt: 'There were 126 students in a class. 37 of them left. How many are left?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['89', '88', "86","87"]),
    answers: [
      {
        answer: '89',
        nextId: 'subtarctioncorrectq54',
      },
      {
        answer: '88',
        nextId: 'insubtarctioncorrectq54',
      },
      {
        answer: "86",
        nextId: 'insubtarctioncorrectq54',
      },
      {
        answer: "87",
        nextId: 'insubtarctioncorrectq54',
      },
    ],
  },
  
  subtarctioncorrectq54: {
  botPrompt: 'Hurray! <strong>89</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[54],
    },
  ],
  },
  insubtarctioncorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"89"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[54],
    },
  ],
  },


  //55
  ['subtarction'+shuffledNumbersto[54]]: {
  botPrompt: '1,234 - 567 = ?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['657', '667', "677","687"]),
    answers: [
      {
        answer: '657',
        nextId: 'insubtarctioncorrectq55',
      },
      {
        answer: '667',
        nextId: 'subtarctioncorrectq55',
      },
      {
        answer: "677",
        nextId: 'insubtarctioncorrectq55',
      },
      {
        answer: "687",
        nextId: 'insubtarctioncorrectq55',
      },
    ],
  },
  
  subtarctioncorrectq55: {
  botPrompt: 'Hurray! <strong>667</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[55],
    },
  ],
  },
  insubtarctioncorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"667"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[55],
    },
  ],
  },
  
  //56
  ['subtarction'+shuffledNumbersto[55]]: {
    botPrompt: '4,567 - 1,234 = ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3233', '3333', "3433","3533"]),
    answers: [
      {
        answer: '3233',
        nextId: 'insubtarctioncorrectq56',
      },
      {
        answer: '3333',
        nextId: 'subtarctioncorrectq56',
      },
      {
        answer: "3433",
        nextId: 'insubtarctioncorrectq56',
      },
      {
        answer: "3533",
        nextId: 'insubtarctioncorrectq56',
      },
    ],
  },
  subtarctioncorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3333</strong> 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[56],
      },
    ],
  },
  insubtarctioncorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3333"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[56],
      },
    ],
  },

  //57
  ['subtarction'+shuffledNumbersto[56]]: {
  botPrompt: 'A school has 359 students. 124 of them are absent. How many are present?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['235', '236', "237","238"]),
    answers: [
      {
        answer: '235',
        nextId: 'subtarctioncorrectq57',
      },
      {
        answer: '236',
        nextId: 'insubtarctioncorrectq57',
      },
      {
        answer: "237",
        nextId: 'insubtarctioncorrectq57',
      },
      {
        answer: "238",
        nextId: 'insubtarctioncorrectq57',
      },
    ],
  },
  subtarctioncorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>235</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[57],
    },
  ],
  },
  insubtarctioncorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"235"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[57],
    },
  ],
  },
  
  //58
  ['subtarction'+shuffledNumbersto[57]]: {
  botPrompt: 'If a bicycle costs $735 and a helmet costs $89, how much money would you need to buy both?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['$824', '$624', "$536","$825"]),
  answers: [
    {
      answer: '$824',
      nextId: 'subtarctioncorrectq58',
    },
    {
      answer: '$624',
      nextId: 'insubtarctioncorrectq58',
    },
    {
      answer: "$536",
      nextId: 'insubtarctioncorrectq58',
    },
    {
      answer: "$825",
      nextId: 'insubtarctioncorrectq58',
    },
  ],
  },
  subtarctioncorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>$824</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[58],
    },
  ],
  },
  insubtarctioncorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"$824"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[58],
    },
  ],
  },
  
  //59
  ['subtarction'+shuffledNumbersto[58]]: {
  botPrompt: '5932 - 2249 = ?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['3583', '2683', "3743","3683"]),
    answers: [
      {
        answer: '3583',
        nextId: 'subtarctioncorrectq57',
      },
      {
        answer: '2683',
        nextId: 'insubtarctioncorrectq57',
      },
      {
        answer: "3743",
        nextId: 'insubtarctioncorrectq57',
      },
      {
        answer: "3683",
        nextId: 'insubtarctioncorrectq57',
      },
    ],
  },
  subtarctioncorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3583</strong> Answers! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[59],
    },
  ],
  },
  insubtarctioncorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3583"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[59],
    },
  ],
  },
  
  //60
  ['subtarction'+shuffledNumbersto[59]]: {
  botPrompt: 'A store had 2,143 chocolates. They sold 1,349 chocolates in one day. How many chocolates do they have left?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['794', '683', "998","731"]),
  answers: [
    {
      answer: '794',
      nextId: 'subtarctioncorrectq60',
    },
    {
      answer: '683',
      nextId: 'insubtarctioncorrectq60',
    },
    {
      answer: "998",
      nextId: 'insubtarctioncorrectq60',
    },
    {
      answer: "731",
      nextId: 'insubtarctioncorrectq60',
    },
  ],
  },
  subtarctioncorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>794</strong> 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[60],
    },
  ],
  },
  insubtarctioncorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"794"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[60],
    },
  ],
  },
  
  //61
  ["subtarction"+shuffledNumbersto[60]]: {
    botPrompt: 'What is the result of subtracting 12,763 from 20,256?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['7493', '7243', "8493","8243"]),
    answers: [
      {
        answer: '7493',
        nextId: 'subtarctioncorrectq61',
      },
      {
        answer: '7243',
        nextId: 'insubtarctioncorrectq61',
      },
      {
        answer: "8493",
        nextId: 'insubtarctioncorrectq61',
      },
      {
        answer: "8243",
        nextId: 'insubtarctioncorrectq61',
      },
    ],
  },
  subtarctioncorrectq61: {
    botPrompt: 'Hurray <strong>7493</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[61],
      },
    ],
  },
  insubtarctioncorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7493"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[61],
      },
    ],
  },

  //62
  ['subtarction'+shuffledNumbersto[61]]: {
    botPrompt: 'The height of the Statue of Liberty is 305 feet. The height of the Eiffel Tower is 1,063 feet. What is the difference between the height of the Eiffel Tower and the height of the Statue of Liberty?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['758', '703', "757","968"]),
    answers: [
      {
        answer: '758',
        nextId: 'subtarctioncorrectq62',
      },
      {
        answer: '703',
        nextId: 'insubtarctioncorrectq62',
      },
      {
        answer: "757",
        nextId: 'insubtarctioncorrectq62',
      },
      {
        answer: "968",
        nextId: 'insubtarctioncorrectq62',
      },
    ],
  },
  
  subtarctioncorrectq62: {
    botPrompt: 'Hurray! <strong>758</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[62],
      },
    ],
  },
  insubtarctioncorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"758"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[62],
      },
    ],
  },
  
  //63
  ['subtarction'+shuffledNumbersto[62]]: {
  botPrompt: "What is the result of subtracting 356 from 1,000?",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['644', '536', "652","654"]),
    answers: [
      {
        answer: '644',
        nextId: 'subtarctioncorrectq63',
      },
      {
        answer: '536',
        nextId: 'insubtarctioncorrectq63',
      },
      {
        answer: "652",
        nextId: 'insubtarctioncorrectq63',
      },
      {
        answer: "654",
        nextId: 'insubtarctioncorrectq63',
      },
    ],
  },
  
  subtarctioncorrectq63: {
  botPrompt: 'Hurray! <strong>644</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[63],
    },
  ],
  },
  insubtarctioncorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"644"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[63],
    },
  ],
  },

  //64
  ['subtarction'+shuffledNumbersto[63]]: {
  botPrompt: 'If there are 648 crayons in a box and 347 of them are used, how many crayons are left?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['301', '306', "295","296"]),
  answers: [
    {
      answer: '301',
      nextId: 'subtarctioncorrectq64',
    },
    {
      answer: '306',
      nextId: 'insubtarctioncorrectq64',
    },
    {
      answer: "295",
      nextId: 'insubtarctioncorrectq64',
    },
    {
      answer: "296",
      nextId: 'insubtarctioncorrectq64',
    },
  ],
  },
  
  subtarctioncorrectq64: {
  botPrompt: 'Hurray! <strong>301</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[64],
    },
  ],
  },
  insubtarctioncorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"301"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[64],
    },
  ],
  },
  
  //65
  ['subtarction'+shuffledNumbersto[64]]: {
  botPrompt: 'What is the difference between 10,000 and 3,213?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6787', '6786', "6785","6784"]),
    answers: [
      {
        answer: '6787',
        nextId: 'subtarctioncorrectq65',
      },
      {
        answer: '6786',
        nextId: 'insubtarctioncorrectq65',
      },
      {
        answer: "6785",
        nextId: 'insubtarctioncorrectq65',
      },
      {
        answer: "6784",
        nextId: 'insubtarctioncorrectq65',
      },
    ],
  },
  
  subtarctioncorrectq65: {
  botPrompt: 'Hurray! <strong>6787</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[65],
    },
  ],
  },
  insubtarctioncorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6787"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[65],
    },
  ],
  },
  
  //66
  ['subtarction'+shuffledNumbersto[65]]: {
  botPrompt: 'There are 328 people in a movie theater. 75 people leave. How many people are left in the theater?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['253', '254', "257","273"]),
  answers: [
    {
      answer: '253',
      nextId: 'subtarctioncorrectq66',
    },
    {
      answer: '254',
      nextId: 'insubtarctioncorrectq66',
    },
    {
      answer: "257",
      nextId: 'insubtarctioncorrectq66',
    },
    {
      answer: "273",
      nextId: 'insubtarctioncorrectq66',
    },
  ],
  },
  
  subtarctioncorrectq66: {
  botPrompt: 'Hurray! <strong>253</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[66],
    },
  ],
  },
  insubtarctioncorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"253"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[66],
    },
  ],
  },
  
  //67
  ['subtarction'+shuffledNumbersto[66]]: {
  botPrompt: 'What is the result of subtracting 372 from 543?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['171', '183', "192","162"]),
  answers: [
    {
      answer: '171',
      nextId: 'subtarctioncorrectq67',
    },
    {
      answer: '183',
      nextId: 'insubtarctioncorrectq67',
    },
    {
      answer: "192",
      nextId: 'insubtarctioncorrectq67',
    },
    {
      answer: "162",
      nextId: 'insubtarctioncorrectq67',
    },
  ],
  },
  
  subtarctioncorrectq67: {
  botPrompt: 'Hurray! <strong>171</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[67],
    },
  ],
  },
  insubtarctioncorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"171"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[67],
    },
  ],
  },
  
  
  //68
  ['subtarction'+shuffledNumbersto[67]]: {
  botPrompt: 'If you have 965 dollars in the bank and you withdraw 526 dollars, how much money do you have left?',
  type: RTypes.TRANSFORMED_TEXT,

  
  input: selectField(['435', '436', "437","439"]),
    answers: [
      {
        answer: '435',
        nextId: 'insubtarctioncorrectq68',
      },
      {
        answer: '436',
        nextId: 'insubtarctioncorrectq68',
      },
      {
        answer: "437",
        nextId: 'insubtarctioncorrectq68',
      },
      {
        answer: "439",
        nextId: 'subtarctioncorrectq68',
      },
    ],
  },
  
  subtarctioncorrectq68: {
  botPrompt: 'Hurray! <strong>439</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[68],
    },
  ],
  },
  insubtarctioncorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"439"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[68],
    },
  ],
  },
  
  //69
  ['subtarction'+shuffledNumbersto[68]]: {
  botPrompt: 'A fruit seller had 1,202 apples. They sold 235 apples on Monday, 306 apples on Tuesday, and 275 apples on Wednesday. How many apples are left?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['386', '387', "388","389"]),
  answers: [
    {
      answer: '386',
      nextId: 'subtarctioncorrectq69',
    },
    {
      answer: '387',
      nextId: 'insubtarctioncorrectq69',
    },
    {
      answer: "388",
      nextId: 'insubtarctioncorrectq69',
    },
    {
      answer: "389",
      nextId: 'insubtarctioncorrectq69',
    },
  ],
  },
  
  subtarctioncorrectq69: {
  botPrompt: 'Hurray! <strong>386</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[69],
    },
  ],
  },
  insubtarctioncorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"386"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[69],
    },
  ],
  },

  
  //70
  ['subtarction'+shuffledNumbersto[69]]: {
  botPrompt: 'What is the result of subtracting 904 from 1,000?'?
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['94', '95', "96","97"]),
  answers: [
    {
      answer: '94',
      nextId: 'insubtarctioncorrectq70',
    },
    {
      answer: '95',
      nextId: 'insubtarctioncorrectq70',
    },
    {
      answer: "96",
      nextId: 'subtarctioncorrectq70',
    },
    {
      answer: "97",
      nextId: 'insubtarctioncorrectq70',
    },
  ],
  },

  subtarctioncorrectq70: {
  botPrompt: 'Hurray! <strong>96</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[70],
    },
  ],
  },
  insubtarctioncorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"96"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[70],
    },
  ],
  },

  //71
  ['subtarction'+shuffledNumbersto[70]]: {
  botPrompt: 'There were 639 students in a school. 235 students were absent. How many students were present in the school?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['404', '406', "408","410"]),
    answers: [
      {
        answer: '404',
        nextId: 'subtarctioncorrectq71',
      },
      {
        answer: '406',
        nextId: 'insubtarctioncorrectq71',
      },
      {
        answer: "408",
        nextId: 'insubtarctioncorrectq71',
      },
      {
        answer: "410",
        nextId: 'insubtarctioncorrectq71',
      },
    ],
  },

  subtarctioncorrectq71: {
  botPrompt: 'Hurray! <strong>404</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[71],
    },
  ],
  },
  insubtarctioncorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"404"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[71],
    },
  ],
  },

  //72
  ['subtarction'+shuffledNumbersto[71]]: {
  botPrompt: 'If there are 589 balloons at a party and 137 balloons burst, how many balloons are left?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['452', '453', "444","456"]),
  answers: [
    {
      answer: '452',
      nextId: 'subtarctioncorrectq72',
    },
    {
      answer: '453',
      nextId: 'insubtarctioncorrectq72',
    },
    {
      answer: "444",
      nextId: 'insubtarctioncorrectq72',
    },
    {
      answer: "456",
      nextId: 'insubtarctioncorrectq72',
    },
  ],
  },

  subtarctioncorrectq72: {
  botPrompt: 'Hurray! <strong>452</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[72],
    },
  ],
  },
  insubtarctioncorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"452"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[72],
    },
  ],
  },

  //73
  ['subtarction'+shuffledNumbersto[72]]: {
  botPrompt: 'In a game, a player earned 372 points on Monday and 298 points on Tuesday. What was the total points earned by the player?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['670', '606', "550","6700"]),
    answers: [
      {
        answer: '670',
        nextId: 'subtarctioncorrectq73',
      },
      {
        answer: '606',
        nextId: 'insubtarctioncorrectq73',
      },
      {
        answer: "550",
        nextId: 'insubtarctioncorrectq73',
      },
      {
        answer: "6700",
        nextId: 'insubtarctioncorrectq73',
      },
    ],
  },

  subtarctioncorrectq73: {
  botPrompt: 'Hurray! <strong>670</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[73],
    },
  ],
  },
  insubtarctioncorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"670"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[73],
    },
  ],
  },

  //74
  ['subtarction'+shuffledNumbersto[73]]: {
  botPrompt: 'If a car starts with 20 litres of petrol and uses 6 litres of petrol every hour, how much petrol is left after 7 hours?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['26 litres', '4 litres', "38 litres","14 litres"]),
  answers: [
    {
      answer: '26 litres',
      nextId: 'insubtarctioncorrectq74',
    },
    {
      answer: '4 litres',
      nextId: 'subtarctioncorrectq74',
    },
    {
      answer: "38 litres",
      nextId: 'insubtarctioncorrectq74',
    },
    {
      answer: "14 litres",
      nextId: 'insubtarctioncorrectq74',
    },
  ],
  },

  subtarctioncorrectq74: {
  botPrompt: 'Hurray! <strong>4 litres</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[74],
    },
  ],
  },
  insubtarctioncorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4 litres"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[74],
    },
  ],
  },


  //75
  ['subtarction'+shuffledNumbersto[74]]: {
  botPrompt: 'Jack had 25 marbles and he gave 9 marbles to his friend. How many marbles does he have now?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['16', '34', "36","27"]),
    answers: [
      {
        answer: '16',
        nextId: 'subtarctioncorrectq75',
      },
      {
        answer: '34',
        nextId: 'insubtarctioncorrectq75',
      },
      {
        answer: "36",
        nextId: 'insubtarctioncorrectq75',
      },
      {
        answer: "27",
        nextId: 'insubtarctioncorrectq75',
      },
    ],
  },

  subtarctioncorrectq75: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[75],
    },
  ],
  },
  insubtarctioncorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'subtarction'+shuffledNumbersto[75],
    },
  ],
  },

  //76
  ['subtarction'+shuffledNumbersto[75]]: {
    botPrompt: 'In a school, there are 826 students in Grade 4 and 679 students in Grade 5. How many more students are there in Grade 4 than in Grade 5?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['145', '179', "189","209"]),
    answers: [
      {
        answer: '145',
        nextId: 'subtarctioncorrectq76',
      },
      {
        answer: '179',
        nextId: 'insubtarctioncorrectq76',
      },
      {
        answer: "189",
        nextId: 'insubtarctioncorrectq76',
      },
      {
        answer: "209",
        nextId: 'insubtarctioncorrectq76',
      },
    ],
  },
  subtarctioncorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>145</strong> 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[76],
      },
    ],
  },
  insubtarctioncorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"145"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[76],
      },
    ],
  },

  //77
  ['subtarction'+shuffledNumbersto[76]]: {
  botPrompt: 'A shopkeeper had 874 toys in his shop. He sold 384 toys in a week. How many toys does he have now?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['488', '390', "490","4900"]),
    answers: [
      {
        answer: '488',
        nextId: 'subtarctioncorrectq77',
      },
      {
        answer: '390',
        nextId: 'insubtarctioncorrectq77',
      },
      {
        answer: "490",
        nextId: 'insubtarctioncorrectq77',
      },
      {
        answer: "4900",
        nextId: 'insubtarctioncorrectq77',
      },
    ],
  },
  subtarctioncorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>488</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  insubtarctioncorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"488"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },



  //78
  ['subtarction'+shuffledNumbersto[77]]: {
    botPrompt: 'In a library, there were 765 books on Monday and 656 books on Tuesday. How many more books were there on Monday than on Tuesday? ',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['109', '1090', "201","204"]),
      answers: [
        {
          answer: '109',
          nextId: 'subtarctioncorrectq78',
        },
        {
          answer: '1090',
          nextId: 'insubtarctioncorrectq78',
        },
        {
          answer: "201",
          nextId: 'insubtarctioncorrectq78',
        },
        {
          answer: "204",
          nextId: 'insubtarctioncorrectq78',
        },
      ],
    },
    
    subtarctioncorrectq78: {
    botPrompt: 'Hurray! <strong>109</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[78],
      },
    ],
    },
    insubtarctioncorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"109"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[78],
      },
    ],
    },
    
    //79
    ['subtarction'+shuffledNumbersto[78]]: {
    botPrompt: 'A toy factory produced 2000 toys in a day. Out of these, 856 were broken. How many toys were not broken?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1144', '1145', "1146","1147"]),
      answers: [
        {
          answer: '1144',
          nextId: 'subtarctioncorrectq79',
        },
        {
          answer: '1145',
          nextId: 'insubtarctioncorrectq79',
        },
        {
          answer: "1197",
          nextId: 'insubtarctioncorrectq79',
        },
        {
          answer: "1147",
          nextId: 'insubtarctioncorrectq79',
        },
      ],
    },
    
    subtarctioncorrectq79: {
    botPrompt: 'Hurray! <strong>1144</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[79],
      },
    ],
    },
    insubtarctioncorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1144"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[79],
      },
    ],
    },
    
    
    //80
    ['subtarction'+shuffledNumbersto[79]]: {
    botPrompt: 'In a party, there were 56 children. 17 children left early. How many children were left in the party?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['36', '37', "39","50"]),
      answers: [
        {
          answer: '36',
          nextId: 'insubtarctioncorrectq80',
        },
        {
          answer: '37',
          nextId: 'insubtarctioncorrectq80',
        },
        {
          answer: "39",
          nextId: 'subtarctioncorrectq80',
        },
        {
          answer: "50",
          nextId: 'insubtarctioncorrectq80',
        },
      ],
    },
    
    subtarctioncorrectq80: {
    botPrompt: 'Hurray! <strong>39</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[80],
      },
    ],
    },
    insubtarctioncorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[80],
      },
    ],
    },
    
    //81
    ['subtarction'+shuffledNumbersto[80]]: {
    botPrompt: 'In a zoo, there are 275 lions and 172 tigers. How many more lions are there than tigers in the zoo?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['103', '1030', "107","1070"]),
      answers: [
        {
          answer: '103',
          nextId: 'subtarctioncorrectq51',
        },
        {
          answer: '1030',
          nextId: 'insubtarctioncorrectq51',
        },
        {
          answer: "107",
          nextId: 'insubtarctioncorrectq51',
        },
        {
          answer: "1070",
          nextId: 'insubtarctioncorrectq51',
        },
      ],
    },
    
    subtarctioncorrectq51: {
    botPrompt: 'Hurray! <strong>103</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[51],
      },
    ],
    },
    insubtarctioncorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"103"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[51],
      },
    ],
    },
    
    //82
    ['subtarction'+shuffledNumbersto[81]]: {
    botPrompt: 'If there are 532 apples and 307 of them are rotten, how many good apples are left?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['225', '235', "2250","245"]),
      answers: [
        {
          answer: '225',
          nextId: 'subtarctioncorrectq82',
        },
        {
          answer: '235',
          nextId: 'insubtarctioncorrectq82',
        },
        {
          answer: "2250",
          nextId: 'insubtarctioncorrectq82',
        },
        {
          answer: "245",
          nextId: 'insubtarctioncorrectq82',
        },
      ],
    },
    
    subtarctioncorrectq82: {
    botPrompt: 'Hurray! <strong>225</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[82],
      },
    ],
    },
    insubtarctioncorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"225"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[82],
      },
    ],
    },
    
    //83
    ['subtarction'+shuffledNumbersto[82]]: {
    botPrompt: '1. What is 15 - 9?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['3', '4', "5","6"]),
      answers: [
        {
          answer: '3',
          nextId: 'insubtarctioncorrectq83',
        },
        {
          answer: '4',
          nextId: 'insubtarctioncorrectq83',
        },
        {
          answer: "5",
          nextId: 'insubtarctioncorrectq83',
        },
        {
          answer: "6",
          nextId: 'subtarctioncorrectq83',
        },
      ],
    },
  
    subtarctioncorrectq83: {
    botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[83],
      },
    ],
    },
    insubtarctioncorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[83],
      },
    ],
    },
    
    //84
    ['subtarction'+shuffledNumbersto[83]]: {
    botPrompt: '2. What is 30 - 7?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['21', '22', "23","24"]),
      answers: [
        {
          answer: '21',
          nextId: 'insubtarctioncorrectq84',
        },
        {
          answer: '22',
          nextId: 'insubtarctioncorrectq84',
        },
        {
          answer: "23",
          nextId: 'subtarctioncorrectq84',
        },
        {
          answer: "24",
          nextId: 'insubtarctioncorrectq84',
        },
      ],
    },
    
    subtarctioncorrectq84: {
    botPrompt: 'Hurray! <strong>23</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[84],
      },
    ],
    },
    insubtarctioncorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[84],
      },
    ],
    },
    
    
    //85
    ['subtarction'+shuffledNumbersto[84]]: {
    botPrompt: '3. What is 52 - 8?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['41', '44', "48","55"]),
      answers: [
        {
          answer: '41',
          nextId: 'insubtarctioncorrectq85',
        },
        {
          answer: '44',
          nextId: 'subtarctioncorrectq85',
        },
        {
          answer: "48",
          nextId: 'insubtarctioncorrectq85',
        },
        {
          answer: "55",
          nextId: 'insubtarctioncorrectq85',
        },
      ],
    },
    
    subtarctioncorrectq85: {
    botPrompt: 'Hurray! <strong>44</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[85],
      },
    ],
    },
    insubtarctioncorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[85],
      },
    ],
    },
    
    //86
    ['subtarction'+shuffledNumbersto[85]]: {
      botPrompt: '4. What is 7 - 2?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['4', '5', "6","7"]),
      answers: [
        {
          answer: '4',
          nextId: 'insubtarctioncorrectq86',
        },
        {
          answer: '5',
          nextId: 'subtarctioncorrectq86',
        },
        {
          answer: "6",
          nextId: 'insubtarctioncorrectq86',
        },
        {
          answer: "7",
          nextId: 'insubtarctioncorrectq86',
        },
      ],
    },
    subtarctioncorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>5</strong> 😎',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[86],
        },
      ],
    },
    insubtarctioncorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[86],
        },
      ],
    },
  
    //87
    ['subtarction'+shuffledNumbersto[86]]: {
    botPrompt: '5. What is 18 - 6?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['12', '13', "14","15"]),
      answers: [
        {
          answer: '12',
          nextId: 'subtarctioncorrectq87',
        },
        {
          answer: '13',
          nextId: 'insubtarctioncorrectq87',
        },
        {
          answer: "14",
          nextId: 'insubtarctioncorrectq87',
        },
        {
          answer: "15",
          nextId: 'insubtarctioncorrectq87',
        },
      ],
    },
    subtarctioncorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>12</strong> 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[87],
      },
    ],
    },
    insubtarctioncorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[87],
      },
    ],
    },
    
    //88
    ['subtarction'+shuffledNumbersto[87]]: {
    botPrompt: '6. What is 25 - 7?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['15', '16', "17","18"]),
    answers: [
      {
        answer: '15',
        nextId: 'insubtarctioncorrectq88',
      },
      {
        answer: '16',
        nextId: 'insubtarctioncorrectq88',
      },
      {
        answer: "17",
        nextId: 'insubtarctioncorrectq88',
      },
      {
        answer: "18",
        nextId: 'subtarctioncorrectq88',
      },
    ],
    },
    subtarctioncorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>18</strong> 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[88],
      },
    ],
    },
    insubtarctioncorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[88],
      },
    ],
    },
    
    //89
    ['subtarction'+shuffledNumbersto[88]]: {
    botPrompt: '7. What is 10 - 3?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '7', "8","75"]),
      answers: [
        {
          answer: '6',
          nextId: 'insubtarctioncorrectq87',
        },
        {
          answer: '7',
          nextId: 'subtarctioncorrectq87',
        },
        {
          answer: "8",
          nextId: 'insubtarctioncorrectq87',
        },
        {
          answer: "4445",
          nextId: 'insubtarctioncorrectq87',
        },
      ],
    },
    subtarctioncorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>7</strong> Answers! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[89],
      },
    ],
    },
    insubtarctioncorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[89],
      },
    ],
    },
    
    //90
    ['subtarction'+shuffledNumbersto[89]]: {
    botPrompt: '8. What is 85 - 14?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['69', '70', "71","72"]),
    answers: [
      {
        answer: '69',
        nextId: 'insubtarctioncorrectq90',
      },
      {
        answer: '70',
        nextId: 'insubtarctioncorrectq90',
      },
      {
        answer: "71",
        nextId: 'subtarctioncorrectq90',
      },
      {
        answer: "72",
        nextId: 'insubtarctioncorrectq90',
      },
    ],
    },
    subtarctioncorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>71</strong> 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[90],
      },
    ],
    },
    insubtarctioncorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"71"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[90],
      },
    ],
    },
    
    //91
    ["subtarction"+shuffledNumbersto[90]]: {
      botPrompt: '9. What is 53 - 9?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['42', '43', "44","45"]),
      answers: [
        {
          answer: '42',
          nextId: 'insubtarctioncorrectq91',
        },
        {
          answer: '43',
          nextId: 'insubtarctioncorrectq91',
        },
        {
          answer: "44",
          nextId: 'subtarctioncorrectq91',
        },
        {
          answer: "45",
          nextId: 'insubtarctioncorrectq91',
        },
      ],
    },
    subtarctioncorrectq91: {
      botPrompt: 'Hurray <strong>44</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[91],
        },
      ],
    },
    insubtarctioncorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[91],
        },
      ],
    },
    
    //92
    ['subtarction'+shuffledNumbersto[91]]: {
      botPrompt: '10. What is 40 - 7?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['32', '33', "34","35"]),
      answers: [
        {
          answer: '32',
          nextId: 'insubtarctioncorrectq92',
        },
        {
          answer: '33',
          nextId: 'subtarctioncorrectq92',
        },
        {
          answer: "34",
          nextId: 'insubtarctioncorrectq92',
        },
        {
          answer: "35",
          nextId: 'insubtarctioncorrectq92',
        },
      ],
    },
    
    subtarctioncorrectq92: {
      botPrompt: 'Hurray! <strong>33</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[92],
        },
      ],
    },
    insubtarctioncorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"33"</strong>',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[92],
        },
      ],
    },
    
    //93
    ['subtarction'+shuffledNumbersto[92]]: {
    botPrompt: "Subtract 348 from 709.",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['361', '371', "381","391"]),
      answers: [
        {
          answer: '361',
          nextId: 'insubtarctioncorrectq93',
        },
        {
          answer: '371',
          nextId: 'insubtarctioncorrectq93',
        },
        {
          answer: "381",
          nextId: 'subtarctioncorrectq93',
        },
        {
          answer: "391",
          nextId: 'insubtarctioncorrectq93',
        },
      ],
    },
    
    subtarctioncorrectq93: {
    botPrompt: 'Hurray! <strong>381</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[93],
      },
    ],
    },
    insubtarctioncorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"381"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[93],
      },
    ],
    },
  
    //94
    ['subtarction'+shuffledNumbersto[93]]: {
    botPrompt: 'What is the difference between 974 and 364?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['710', '611', "610","620"]),
    answers: [
      {
        answer: '710',
        nextId: 'insubtarctioncorrectq94',
      },
      {
        answer: '611',
        nextId: 'insubtarctioncorrectq94',
      },
      {
        answer: "610",
        nextId: 'subtarctioncorrectq94',
      },
      {
        answer: "620",
        nextId: 'insubtarctioncorrectq94',
      },
    ],
    },
    
    subtarctioncorrectq94: {
    botPrompt: 'Hurray! <strong>610</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[94],
      },
    ],
    },
    insubtarctioncorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"610"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[94],
      },
    ],
    },
    
    //95
    ['subtarction'+shuffledNumbersto[94]]: {
    botPrompt: 'A box had 287 marbles, and 132 marbles were taken out. How many marbles are left?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['145', '155', "165","175"]),
      answers: [
        {
          answer: '145',
          nextId: 'subtarctioncorrectq95',
        },
        {
          answer: '155',
          nextId: 'insubtarctioncorrectq95',
        },
        {
          answer: "165",
          nextId: 'insubtarctioncorrectq95',
        },
        {
          answer: "175",
          nextId: 'insubtarctioncorrectq95',
        },
      ],
    },
    
    subtarctioncorrectq95: {
    botPrompt: 'Hurray! <strong>145</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[95],
      },
    ],
    },
    insubtarctioncorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"145"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[95],
      },
    ],
    },
    
    //96
    ['subtarction'+shuffledNumbersto[95]]: {
    botPrompt: '456 people were present at a concert. 145 left early. How many people were left at the concert?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['311', '321', "331","11"]),
    answers: [
      {
        answer: '311',
        nextId: 'subtarctioncorrectq96',
      },
      {
        answer: '321',
        nextId: 'insubtarctioncorrectq96',
      },
      {
        answer: "331",
        nextId: 'insubtarctioncorrectq96',
      },
      {
        answer: "351",
        nextId: 'insubtarctioncorrectq96',
      },
    ],
    },
    
    subtarctioncorrectq96: {
    botPrompt: 'Hurray! <strong>311</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[96],
      },
    ],
    },
    insubtarctioncorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"311"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[96],
      },
    ],
    },

    //97
    ['subtarction'+shuffledNumbersto[96]]: {
    botPrompt: '625-329=',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['296', '306', "297","316"]),
    answers: [
      {
        answer: '296',
        nextId: 'subtarctioncorrectq97',
      },
      {
        answer: '306',
        nextId: 'insubtarctioncorrectq97',
      },
      {
        answer: "297",
        nextId: 'insubtarctioncorrectq97',
      },
      {
        answer: "316",
        nextId: 'insubtarctioncorrectq97',
      },
    ],
    },

    subtarctioncorrectq97: {
    botPrompt: 'Hurray! <strong>296</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[97],
      },
    ],
    },
    insubtarctioncorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"296"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[97],
      },
    ],
    },


    //98
    ['subtarction'+shuffledNumbersto[97]]: {
    botPrompt: 'Find the difference between 834 and 471.',
    type: RTypes.TRANSFORMED_TEXT,


    input: selectField(['363', '362', "364","365"]),
      answers: [
        {
          answer: '363',
          nextId: 'subtarctioncorrectq98',
        },
        {
          answer: '362',
          nextId: 'insubtarctioncorrectq98',
        },
        {
          answer: "364",
          nextId: 'insubtarctioncorrectq98',
        },
        {
          answer: "365",
          nextId: 'insubtarctioncorrectq98',
        },
      ],
    },

    subtarctioncorrectq98: {
    botPrompt: 'Hurray! <strong>363</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[98],
      },
    ],
    },
    insubtarctioncorrectq98: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"363"</strong>',
    answers: [
      {
        nextId: 'subtarction'+shuffledNumbersto[98],
      },
    ],
    },
    
    //99
    ['subtarction'+shuffledNumbersto[98]]: {
      botPrompt: 'A school has 548 students, and 125 of them are absent. How many students are present in school?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['423', '425', "413","433"]),
        answers: [
          {
            answer: '423',
            nextId: 'subtarctioncorrectq99',
          },
          {
            answer: '425',
            nextId: 'insubtarctioncorrectq99',
          },
          {
            answer: "413",
            nextId: 'insubtarctioncorrectq99',
          },
          {
            answer: "433",
            nextId: 'insubtarctioncorrectq99',
          },
        ],
      },
  
      subtarctioncorrectq99: {
      botPrompt: 'Hurray! <strong>423</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[99],
        },
      ],
      },
      insubtarctioncorrectq99: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"423"</strong>',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[99],
        },
      ],
      },    //100
      ['subtarction'+shuffledNumbersto[99]]: {
      botPrompt: '846 - 239 =',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['607', '606', "608","609"]),
        answers: [
          {
            answer: '607',
            nextId: 'subtarctioncorrectq100',
          },
          {
            answer: '606',
            nextId: 'insubtarctioncorrectq100',
          },
          {
            answer: "608",
            nextId: 'insubtarctioncorrectq100',
          },
          {
            answer: "609",
            nextId: 'insubtarctioncorrectq100',
          },
        ],
      },
  
      subtarctioncorrectq100: {
      botPrompt: 'Hurray! <strong>607</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[100],
        },
      ],
      },
      insubtarctioncorrectq100: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"607"</strong>',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[100],
        },
      ],
      },

      //101
      ['subtarction'+shuffledNumbersto[100]]: {
      botPrompt: 'What is the difference between 6789 and 3421?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['3358', '3258', "3158","3359"]),
        answers: [
          {
            answer: '3358',
            nextId: 'subtarctioncorrectq101',
          },
          {
            answer: '3258',
            nextId: 'insubtarctioncorrectq101',
          },
          {
            answer: "3158",
            nextId: 'insubtarctioncorrectq101',
          },
          {
            answer: "3359",
            nextId: 'insubtarctioncorrectq101',
          },
        ],
      },
  
      subtarctioncorrectq101: {
      botPrompt: 'Hurray! <strong>3358</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[101],
        },
      ],
      },
      insubtarctioncorrectq101: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3358"</strong>',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[101],
        },
      ],
      },

      //102
      ['subtarction'+shuffledNumbersto[101]]: {
      botPrompt: '523 - 389 =',
      type: RTypes.TRANSFORMED_TEXT,

  
      input: selectField(['143', '123', "133","134"]),
        answers: [
          {
            answer: '143',
            nextId: 'subtarctioncorrectq102',
          },
          {
            answer: '123',
            nextId: 'insubtarctioncorrectq102',
          },
          {
            answer: "133",
            nextId: 'insubtarctioncorrectq102',
          },
          {
            answer: "134",
            nextId: 'insubtarctioncorrectq102',
          },
        ],
      },
  
      subtarctioncorrectq102: {
      botPrompt: 'Hurray! <strong>143</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[102],
        },
      ],
      },
      insubtarctioncorrectq102: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"143"</strong>',
      answers: [
        {
          nextId: 'subtarction'+shuffledNumbersto[102],
        },
      ],
      },


  //endsubtarctionletter
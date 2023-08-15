//onceTens


["onceTens"+shuffledNumbersto[0]]: {
    botPrompt: 'What is the number at units place in 76?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'onceTenscorrect',
      },
      {
        answer: '7',
        nextId: 'inonceTenscorrect',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrect',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrect',
      },
    ],
  },
  onceTenscorrect: {
    botPrompt: 'Hurray <strong>6</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[1],
      },
    ],
  },
  inonceTenscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['onceTens'+shuffledNumbersto[1]]: {
    botPrompt: 'What is the number at tens place in 58?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['4', '5', "6","8"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTenscorrectq2',
      },
      {
        answer: '5',
        nextId: 'onceTenscorrectq2',
      },
      {
        answer: "6",
        nextId: 'inonceTenscorrectq2',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq2',
      },
    ],
  },
  
  onceTenscorrectq2: {
    botPrompt: 'Hurray! <strong>58</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[2],
      },
    ],
  },
  inonceTenscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['onceTens'+shuffledNumbersto[2]]: {
  botPrompt: "What is the number at units place in 234?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTenscorrectq3',
      },
      {
        answer: '3',
        nextId: 'inonceTenscorrectq3',
      },
      {
        answer: "4",
        nextId: 'onceTenscorrectq3',
      },
      {
        answer: "5",
        nextId: 'inonceTenscorrectq3',
      },
    ],
  },
  
  onceTenscorrectq3: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[3],
    },
  ],
  },
  inonceTenscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['onceTens'+shuffledNumbersto[3]]: {
  botPrompt: 'What is the number at tens place in 456?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTenscorrectq4',
      },
      {
        answer: '5',
        nextId: 'onceTenscorrectq4',
      },
      {
        answer: "6",
        nextId: 'inonceTenscorrectq4',
      },
      {
        answer: "7",
        nextId: 'inonceTenscorrectq4',
      },
    ],
  },
  
  onceTenscorrectq4: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[4],
    },
  ],
  },
  inonceTenscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['onceTens'+shuffledNumbersto[4]]: {
  botPrompt: 'What is the number at hundreds place in 789?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '8', "9","1"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTenscorrectq5',
      },
      {
        answer: '8',
        nextId: 'inonceTenscorrectq5',
      },
      {
        answer: "9",
        nextId: 'onceTenscorrectq5',
      },
      {
        answer: "1",
        nextId: 'inonceTenscorrectq5',
      },
    ],
  },
  
  onceTenscorrectq5: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[5],
    },
  ],
  },
  inonceTenscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['onceTens'+shuffledNumbersto[5]]: {
  botPrompt: 'What is the number at units place in 1523?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'inonceTenscorrectq6',
      },
      {
        answer: '2',
        nextId: 'inonceTenscorrectq6',
      },
      {
        answer: "3",
        nextId: 'onceTenscorrectq6',
      },
      {
        answer: "5",
        nextId: 'inonceTenscorrectq6',
      },
    ],
  },
  
  onceTenscorrectq6: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[6],
    },
  ],
  },
  inonceTenscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['onceTens'+shuffledNumbersto[6]]: {
  botPrompt: 'What is the number at tens place in 7896?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '8', "9","6"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTenscorrectq7',
      },
      {
        answer: '8',
        nextId: 'inonceTenscorrectq7',
      },
      {
        answer: "9",
        nextId: 'onceTenscorrectq7',
      },
      {
        answer: "6",
        nextId: 'inonceTenscorrectq7',
      },
    ],
  },
  
  onceTenscorrectq7: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[7],
    },
  ],
  },
  inonceTenscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['onceTens'+shuffledNumbersto[7]]: {
  botPrompt: 'What is the number at hundreds place in 2345?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTenscorrectq8',
      },
      {
        answer: '3',
        nextId: 'onceTenscorrectq8',
      },
      {
        answer: "4",
        nextId: 'inonceTenscorrectq8',
      },
      {
        answer: "5",
        nextId: 'inonceTenscorrectq8',
      },
    ],
  },
  
  onceTenscorrectq8: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[8],
    },
  ],
  },
  inonceTenscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['onceTens'+shuffledNumbersto[8]]: {
  botPrompt: 'What is the number at units place in 6789?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTenscorrectq9',
      },
      {
        answer: '7',
        nextId: 'inonceTenscorrectq9',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq9',
      },
      {
        answer: "9",
        nextId: 'onceTenscorrectq9',
      },
    ],
  },
  
  onceTenscorrectq9: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[9],
    },
  ],
  },
  inonceTenscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['onceTens'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the number at tens place in 1234?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'inonceTenscorrectq10',
      },
      {
        answer: '2',
        nextId: 'inonceTenscorrectq10',
      },
      {
        answer: "3",
        nextId: 'onceTenscorrectq10',
      },
      {
        answer: "4",
        nextId: 'inonceTenscorrectq10',
      },
    ],
  
  },
  
  onceTenscorrectq10: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[10],
    },
  ],
  },
  inonceTenscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['onceTens'+shuffledNumbersto[10]]: {
  botPrompt: 'What is the digit in the tens place in the number 27?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['2', '7', "0","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'onceTenscorrectq11',
      },
      {
        answer: '7',
        nextId: 'inonceTenscorrectq11',
      },
      {
        answer: "0",
        nextId: 'inonceTenscorrectq11',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq11',
      },
    ],
  },
  
  onceTenscorrectq11: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[11],
    },
  ],
  },
  inonceTenscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['onceTens'+shuffledNumbersto[11]]: {
  botPrompt: 'What is the digit in the ones place in the number 42?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '4', "0","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'onceTenscorrectq12',
      },
      {
        answer: '4',
        nextId: 'inonceTenscorrectq12',
      },
      {
        answer: "0",
        nextId: 'inonceTenscorrectq12',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq12',
      },
    ],
  },
  
  onceTenscorrectq12: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[12],
    },
  ],
  },
  inonceTenscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['onceTens'+shuffledNumbersto[12]]: {
  botPrompt: 'Which number comes after 63?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['64', '65', "66","67"]),
    answers: [
      {
        answer: '64',
        nextId: 'onceTenscorrectq13',
      },
      {
        answer: '65',
        nextId: 'inonceTenscorrectq13',
      },
      {
        answer: "66",
        nextId: 'inonceTenscorrectq13',
      },
      {
        answer: "67",
        nextId: 'inonceTenscorrectq13',
      },
    ],
  },
  
  onceTenscorrectq13: {
  botPrompt: 'Hurray! <strong>64</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[13],
    },
  ],
  },
  inonceTenscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"64"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['onceTens'+shuffledNumbersto[13]]: {
  botPrompt: 'Which number comes before 48?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['46', '47', "49","50"]),
    answers: [
      {
        answer: '46',
        nextId: 'inonceTenscorrectq14',
      },
      {
        answer: '47',
        nextId: 'onceTenscorrectq14',
      },
      {
        answer: "49",
        nextId: 'inonceTenscorrectq14',
      },
      {
        answer: "50",
        nextId: 'inonceTenscorrectq14',
      },
    ],
  },
  
  onceTenscorrectq14: {
  botPrompt: 'Hurray! <strong>47</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[14],
    },
  ],
  },
  inonceTenscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['onceTens'+shuffledNumbersto[14]]: {
  botPrompt: 'Which number comes between 5 and 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '8', "9","10"]),
    answers: [
      {
        answer: '6',
        nextId: 'onceTenscorrectq15',
      },
      {
        answer: '8',
        nextId: 'inonceTenscorrectq15',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq15',
      },
      {
        answer: "10",
        nextId: 'inonceTenscorrectq15',
      },
    ],
  },
  
  onceTenscorrectq15: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[15],
    },
  ],
  },
  inonceTenscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['onceTens'+shuffledNumbersto[15]]: {
    botPrompt: 'What is the digit in the hundreds place in the number 123?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1', '2', "3","0"]),
    answers: [
      {
        answer: '1',
        nextId: 'onceTenscorrectq16',
      },
      {
        answer: '2',
        nextId: 'inonceTenscorrectq16',
      },
      {
        answer: "3",
        nextId: 'inonceTenscorrectq16',
      },
      {
        answer: "0",
        nextId: 'inonceTenscorrectq16',
      },
    ],
  },
  onceTenscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1</strong> 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[16],
      },
    ],
  },
  inonceTenscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['onceTens'+shuffledNumbersto[16]]: {
  botPrompt: 'Which number comes after 25?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['26', '27', "28","29"]),
    answers: [
      {
        answer: '26',
        nextId: 'onceTenscorrectq17',
      },
      {
        answer: '27',
        nextId: 'inonceTenscorrectq17',
      },
      {
        answer: "28",
        nextId: 'inonceTenscorrectq17',
      },
      {
        answer: "29",
        nextId: 'inonceTenscorrectq17',
      },
    ],
  },
  onceTenscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>26</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[17],
    },
  ],
  },
  inonceTenscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['onceTens'+shuffledNumbersto[17]]: {
  botPrompt: 'Which number comes before 12?   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['9', '10', "11","13"]),
  answers: [
    {
      answer: '9',
      nextId: 'inonceTenscorrectq18',
    },
    {
      answer: '10',
      nextId: 'inonceTenscorrectq18',
    },
    {
      answer: "11",
      nextId: 'onceTenscorrectq18',
    },
    {
      answer: "13",
      nextId: 'inonceTenscorrectq18',
    },
  ],
  },
  onceTenscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>11</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[18],
    },
  ],
  },
  inonceTenscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['onceTens'+shuffledNumbersto[18]]: {
  botPrompt: 'What is the value of the digit 3 in the number 345?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['300', '3', "30","3000"]),
  answers: [
    {
      answer: '300',
      nextId: 'onceTenscorrectq19',
    },
    {
      answer: '3',
      nextId: 'inonceTenscorrectq19',
    },
    {
      answer: "30",
      nextId: 'inonceTenscorrectq19',
    },
    {
      answer: "3000",
      nextId: 'inonceTenscorrectq19',
    },
  ],
  },
  onceTenscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>300</strong> Answers! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[19],
    },
  ],
  },
  inonceTenscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"300"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['onceTens'+shuffledNumbersto[19]]: {
  botPrompt: 'What is the digit in the ones place in the number 86?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['8', '6', "0","2"]),
  answers: [
    {
      answer: '8',
      nextId: 'inonceTenscorrectq20',
    },
    {
      answer: '6',
      nextId: 'onceTenscorrectq20',
    },
    {
      answer: "0",
      nextId: 'inonceTenscorrectq20',
    },
    {
      answer: "2",
      nextId: 'inonceTenscorrectq20',
    },
  ],
  },
  onceTenscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>22</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[20],
    },
  ],
  },
  inonceTenscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["onceTens"+shuffledNumbersto[20]]: {
    botPrompt: 'Which number comes between 18 and 20?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['17', '19', "21","22"]),
  answers: [
    {
      answer: '17',
      nextId: 'inonceTenscorrectq21',
    },
    {
      answer: '19',
      nextId: 'onceTenscorrectq21',
    },
    {
      answer: "21",
      nextId: 'inonceTenscorrectq21',
    },
    {
      answer: "22",
      nextId: 'inonceTenscorrectq21',
    },
  ],
  },
  onceTenscorrectq21: {
    botPrompt: 'Hurray <strong>19</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[21],
      },
    ],
  },
  inonceTenscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>19</strong> answer is <strong>"23"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['onceTens'+shuffledNumbersto[21]]: {
    botPrompt: 'What is the digit in the tens place in the number 56?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['5', '6', "0","2"]),
  answers: [
    {
      answer: '5',
      nextId: 'onceTenscorrectq22',
    },
    {
      answer: '6',
      nextId: 'inonceTenscorrectq22',
    },
    {
      answer: "0",
      nextId: 'inonceTenscorrectq22',
    },
    {
      answer: "2",
      nextId: 'inonceTenscorrectq22',
    },
  ],
  },
  
  onceTenscorrectq22: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[22],
      },
    ],
  },
  inonceTenscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['onceTens'+shuffledNumbersto[22]]: {
  botPrompt: "What is the value of the digit 2 in the number 825?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '20', "200","2000"]),
  answers: [
    {
      answer: '2',
      nextId: 'inonceTenscorrectq23',
    },
    {
      answer: '20',
      nextId: 'onceTenscorrectq23',
    },
    {
      answer: "200",
      nextId: 'inonceTenscorrectq23',
    },
    {
      answer: "2000",
      nextId: 'inonceTenscorrectq23',
    },
  ],
  },
  
  onceTenscorrectq23: {
  botPrompt: 'Hurray! <strong>20</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[23],
    },
  ],
  },
  inonceTenscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['onceTens'+shuffledNumbersto[23]]: {
  botPrompt: 'What is the digit in the ones place in the number 73?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '3', "0","4"]),
  answers: [
    {
      answer: '7',
      nextId: 'inonceTenscorrectq24',
    },
    {
      answer: '3',
      nextId: 'onceTenscorrectq24',
    },
    {
      answer: "0",
      nextId: 'inonceTenscorrectq24',
    },
    {
      answer: "4",
      nextId: 'inonceTenscorrectq24',
    },
  ],
  },
  
  onceTenscorrectq24: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[24],
    },
  ],
  },
  inonceTenscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['onceTens'+shuffledNumbersto[24]]: {
  botPrompt: 'What is the number at the units place in 124?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "4","0"]),
  answers: [
    {
      answer: '1',
      nextId: 'inonceTenscorrectq25',
    },
    {
      answer: '2',
      nextId: 'inonceTenscorrectq25',
    },
    {
      answer: "4",
      nextId: 'onceTenscorrectq25',
    },
    {
      answer: "0",
      nextId: 'inonceTenscorrectq25',
    },
  ],
  },
  
  onceTenscorrectq25: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[25],
    },
  ],
  },
  inonceTenscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['onceTens'+shuffledNumbersto[25]]: {
  botPrompt: 'What is the number at the tens place in 379?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '7', "9","0"]),
  answers: [
    {
      answer: '3',
      nextId: 'inonceTenscorrectq26',
    },
    {
      answer: '7',
      nextId: 'onceTenscorrectq26',
    },
    {
      answer: "9",
      nextId: 'inonceTenscorrectq26',
    },
    {
      answer: "0",
      nextId: 'inonceTenscorrectq26',
    },
  ],
  },
  
  onceTenscorrectq26: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[26],
    },
  ],
  },
  inonceTenscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['onceTens'+shuffledNumbersto[26]]: {
  botPrompt: 'What is the number at the hundreds place in 548?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '4', "8","0"]),
    answers: [
      {
        answer: '5',
        nextId: 'onceTenscorrectq27',
      },
      {
        answer: '4',
        nextId: 'inonceTenscorrectq27',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq27',
      },
      {
        answer: "0",
        nextId: 'inonceTenscorrectq27',
      },
    ],
  },
  
  onceTenscorrectq27: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[27],
    },
  ],
  },
  inonceTenscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[27],
    },
  ],
  },
  
  
  //28
  ['onceTens'+shuffledNumbersto[27]]: {
  botPrompt: 'Which of the following is the sum of digits at the units and tens place in the number 56?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['9', '10', "11","12"]),
  answers: [
    {
      answer: '9',
      nextId: 'inonceTenscorrectq28',
    },
    {
      answer: '10',
      nextId: 'inonceTenscorrectq28',
    },
    {
      answer: "11",
      nextId: 'onceTenscorrectq28',
    },
    {
      answer: "12",
      nextId: 'inonceTenscorrectq28',
    },
  ],
  },
  
  onceTenscorrectq28: {
  botPrompt: 'Hurray! <strong>11</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[28],
    },
  ],
  },
  inonceTenscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['onceTens'+shuffledNumbersto[28]]: {
  botPrompt: 'What is the sum of digits at the tens and hundreds place in the number 387?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '10', "15","18"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTenscorrectq29',
      },
      {
        answer: '10',
        nextId: 'inonceTenscorrectq29',
      },
      {
        answer: "15",
        nextId: 'onceTenscorrectq29',
      },
      {
        answer: "18",
        nextId: 'inonceTenscorrectq29',
      },
    ],
  },
  
  onceTenscorrectq29: {
  botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[29],
    },
  ],
  },
  inonceTenscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[29],
    },
  ],
  },
  
  
  //30
  ['onceTens'+shuffledNumbersto[29]]: {
  botPrompt: 'What is the number formed by the digits 5, 2, and 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['285', '582', "258","852"]),
  answers: [
    {
      answer: '285',
      nextId: 'inonceTenscorrectq30',
    },
    {
      answer: '582',
      nextId: 'inonceTenscorrectq30',
    },
    {
      answer: "258",
      nextId: 'onceTenscorrectq30',
    },
    {
      answer: "852",
      nextId: 'inonceTenscorrectq30',
    },
  ],
  },

  onceTenscorrectq30: {
  botPrompt: 'Hurray! <strong>258</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[30],
    },
  ],
  },
  inonceTenscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"258"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[30],
    },
  ],
  },
  
  //31
  ['onceTens'+shuffledNumbersto[30]]: {
  botPrompt: 'What is the sum of digits at the units place and hundreds place in the number 763?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '9', "10","13"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTenscorrectq31',
      },
      {
        answer: '9',
        nextId: 'inonceTenscorrectq31',
      },
      {
        answer: "10",
        nextId: 'onceTenscorrectq31',
      },
      {
        answer: "13",
        nextId: 'inonceTenscorrectq31',
      },
    ],
  },
  
  onceTenscorrectq31: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[31],
    },
  ],
  },
  inonceTenscorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[31],
    },
  ],
  },
  
  //32
  ['onceTens'+shuffledNumbersto[31]]: {
  botPrompt: 'What is the number formed by the digits 4, 6, and 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['642', '426', "264","462"]),
  answers: [
    {
      answer: '642',
      nextId: 'inonceTenscorrectq32',
    },
    {
      answer: '426',
      nextId: 'inonceTenscorrectq32',
    },
    {
      answer: "264",
      nextId: 'inonceTenscorrectq32',
    },
    {
      answer: "462",
      nextId: 'onceTenscorrectq32',
    },
  ],
  },
  
  onceTenscorrectq32: {
  botPrompt: 'Hurray! <strong>462</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[32],
    },
  ],
  },
  inonceTenscorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"462"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[32],
    },
  ],
  },
  
  //33
  ['onceTens'+shuffledNumbersto[32]]: {
  botPrompt: 'Which of the following is the sum of digits at the tens and units place in the number 73?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['5', '10', "11","12"]),
  answers: [
    {
      answer: '5',
      nextId: 'inonceTenscorrectq33',
    },
    {
      answer: '10',
      nextId: 'onceTenscorrectq33',
    },
    {
      answer: "11",
      nextId: 'inonceTenscorrectq33',
    },
    {
      answer: "12",
      nextId: 'inonceTenscorrectq33',
    },
  ],
  },
  
  onceTenscorrectq33: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[33],
    },
  ],
  },
  inonceTenscorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[33],
    },
  ],
  },
  
  //34
  ['onceTens'+shuffledNumbersto[33]]: {
  botPrompt: 'What is the number formed by the digits 9, 0, and 1?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['109', '901', "190","910"]),
    answers: [
      {
        answer: '109',
        nextId: 'inonceTenscorrectq34',
      },
      {
        answer: '901',
        nextId: 'inonceTenscorrectq34',
      },
      {
        answer: "190",
        nextId: 'onceTenscorrectq34',
      },
      {
        answer: "910",
        nextId: 'inonceTenscorrectq34',
      },
    ],
  },
  
  onceTenscorrectq34: {
  botPrompt: 'Hurray! <strong>190</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[34],
    },
  ],
  },
  inonceTenscorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"190"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[34],
    },
  ],
  },
  
  
  //35
  ['onceTens'+shuffledNumbersto[34]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 48?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['6', '8', "10","12"]),
  answers: [
    {
      answer: '6',
      nextId: 'inonceTenscorrectq35',
    },
    {
      answer: '8',
      nextId: 'inonceTenscorrectq35',
    },
    {
      answer: "10",
      nextId: 'inonceTenscorrectq35',
    },
    {
      answer: "12",
      nextId: 'onceTenscorrectq35',
    },
  ],
  },
  
  onceTenscorrectq35: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[35],
    },
  ],
  },
  inonceTenscorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[35],
    },
  ],
  },
  
  //36
  ['onceTens'+shuffledNumbersto[35]]: {
    botPrompt: 'What is the number formed by the digits 6, 3, and 7?',
    type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['367', '376', "736","763"]),
  answers: [
    {
      answer: '367',
      nextId: 'onceTenscorrectq36',
    },
    {
      answer: '376',
      nextId: 'inonceTenscorrectq36',
    },
    {
      answer: "736",
      nextId: 'inonceTenscorrectq36',
    },
    {
      answer: "48",
      nextId: 'inonceTenscorrectq36',
    },
  ],
  },
  onceTenscorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>367</strong> 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[36],
      },
    ],
  },
  inonceTenscorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"367"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[36],
      },
    ],
  },
  
  //37
  ['onceTens'+shuffledNumbersto[36]]: {
  botPrompt: 'Which of the following is the sum of digits at the hundreds and units place in the number 549?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","14"]),
  answers: [
    {
      answer: '8',
      nextId: 'inonceTenscorrectq37',
    },
    {
      answer: '9',
      nextId: 'onceTenscorrectq37',
    },
    {
      answer: "10",
      nextId: 'inonceTenscorrectq37',
    },
    {
      answer: "14",
      nextId: 'inonceTenscorrectq37',
    },
  ],
  },
  onceTenscorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>9</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[37],
    },
  ],
  },
  inonceTenscorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[37],
    },
  ],
  },
  
  //38
  ['onceTens'+shuffledNumbersto[37]]: {
  botPrompt: 'What is the largest number formed by the digits 8, 5, and 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['285', '852', "528","582"]),
    answers: [
      {
        answer: '285',
        nextId: 'inonceTenscorrectq38',
      },
      {
        answer: '852',
        nextId: 'onceTenscorrectq38',
      },
      {
        answer: "528",
        nextId: 'inonceTenscorrectq38',
      },
      {
        answer: "582",
        nextId: 'inonceTenscorrectq38',
      },
    ],
  },
  onceTenscorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>852</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[38],
    },
  ],
  },
  inonceTenscorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"852"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[38],
    },
  ],
  },
  
  //39
  ['onceTens'+shuffledNumbersto[38]]: {
  botPrompt: 'What is the sum of digits at the tens place and units place in the number 37?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['3', '7', "10","13"]),
  answers: [
    {
      answer: '3',
      nextId: 'inonceTenscorrectq310',
    },
    {
      answer: '7',
      nextId: 'inonceTenscorrectq39',
    },
    {
      answer: "10",
      nextId: 'onceTenscorrectq39',
    },
    {
      answer: "13",
      nextId: 'inonceTenscorrectq39',
    },
  ],
  },
  onceTenscorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>10</strong> Answers! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[39],
    },
  ],
  },
  inonceTenscorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[39],
    },
  ],
  },
  
  //40
  ['onceTens'+shuffledNumbersto[39]]: {
  botPrompt: 'What is the number at the units place in the number 43?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['3', '4', "5","32"]),
    answers: [
      {
        answer: '3',
        nextId: 'onceTenscorrectq40',
      },
      {
        answer: '4',
        nextId: 'inonceTenscorrectq40',
      },
      {
        answer: "5",
        nextId: 'inonceTenscorrectq40',
      },
      {
        answer: "6",
        nextId: 'inonceTenscorrectq40',
      },
    ],
  },
  onceTenscorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[40],
    },
  ],
  },
  inonceTenscorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[40],
    },
  ],
  },
  
  //41
  ["onceTens"+shuffledNumbersto[40]]: {
    botPrompt: 'What is the number at the tens place in the number 65?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTenscorrectq41',
      },
      {
        answer: '5',
        nextId: 'onceTenscorrectq41',
      },
      {
        answer: "6",
        nextId: 'inonceTenscorrectq41',
      },
      {
        answer: "7",
        nextId: 'inonceTenscorrectq41',
      },
    ],
  },
  onceTenscorrectq41: {
    botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[41],
      },
    ],
  },
  inonceTenscorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[41],
      },
    ],
  },
  
  //42
  
  ['onceTens'+shuffledNumbersto[41]]: {
    botPrompt: 'What is the sum of digits at the units place and tens place in the number 28?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTenscorrectq42',
      },
      {
        answer: '7',
        nextId: 'inonceTenscorrectq42',
      },
      {
        answer: "8",
        nextId: 'onceTenscorrectq42',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq42',
      },
    ],
  },
  
  onceTenscorrectq42: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[42],
      },
    ],
  },
  inonceTenscorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[42],
      },
    ],
  },
  
  //43
  ['onceTens'+shuffledNumbersto[42]]: {
  botPrompt: "What is the number at the units place in the number 91?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['0', '1', "2","3"]),
    answers: [
      {
        answer: '0',
        nextId: 'inonceTenscorrectq43',
      },
      {
        answer: '1',
        nextId: 'onceTenscorrectq43',
      },
      {
        answer: "2",
        nextId: 'inonceTenscorrectq43',
      },
      {
        answer: "3",
        nextId: 'inonceTenscorrectq43',
      },
    ],
  },
  
  onceTenscorrectq43: {
  botPrompt: 'Hurray! <strong>1</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[43],
    },
  ],
  },
  inonceTenscorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[43],
    },
  ],
  },
  
  //44
  ['onceTens'+shuffledNumbersto[43]]: {
  botPrompt: 'What is the number at the tens place in the number 25?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '5', "8","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'onceTenscorrectq44',
      },
      {
        answer: '5',
        nextId: 'inonceTenscorrectq44',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq44',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq44',
      },
    ],
  },
  
  onceTenscorrectq44: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[44],
    },
  ],
  },
  inonceTenscorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[44],
    },
  ],
  },
  
  //45
  ['onceTens'+shuffledNumbersto[44]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 57?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '12', "13","14"]),
    answers: [
      {
        answer: '11',
        nextId: 'inonceTenscorrectq45',
      },
      {
        answer: '12',
        nextId: 'onceTenscorrectq45',
      },
      {
        answer: "13",
        nextId: 'inonceTenscorrectq45',
      },
      {
        answer: "14",
        nextId: 'inonceTenscorrectq45',
      },
    ],
  },
  
  onceTenscorrectq45: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[45],
    },
  ],
  },
  inonceTenscorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[45],
    },
  ],
  },
  
  //46
  ['onceTens'+shuffledNumbersto[45]]: {
  botPrompt: 'What is the number at the units place in the number 76?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '6', "7","8"]),
    answers: [
      {
        answer: '5',
        nextId: 'inonceTenscorrectq46',
      },
      {
        answer: '6',
        nextId: 'onceTenscorrectq46',
      },
      {
        answer: "7",
        nextId: 'inonceTenscorrectq46',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq46',
      },
    ],
  },
  
  onceTenscorrectq46: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[46],
    },
  ],
  },
  inonceTenscorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[46],
    },
  ],
  },
  
  //47
  ['onceTens'+shuffledNumbersto[46]]: {
  botPrompt: 'What is the number at the tens place in the number 38?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '5', "8","9"]),
    answers: [
      {
        answer: '3',
        nextId: 'onceTenscorrectq47',
      },
      {
        answer: '5',
        nextId: 'inonceTenscorrectq47',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq47',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq47',
      },
    ],
  },
  
  onceTenscorrectq47: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[47],
    },
  ],
  },
  inonceTenscorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[47],
    },
  ],
  },


  //48
  ['onceTens'+shuffledNumbersto[47]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 39?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['9', '11', "13","15"]),
    answers: [
      {
        answer: '9',
        nextId: 'onceTenscorrectq48',
      },
      {
        answer: '11',
        nextId: 'inonceTenscorrectq48',
      },
      {
        answer: "13",
        nextId: 'inonceTenscorrectq48',
      },
      {
        answer: "15",
        nextId: 'inonceTenscorrectq48',
      },
    ],
  },
  
  onceTenscorrectq48: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[48],
    },
  ],
  },
  inonceTenscorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[48],
    },
  ],
  },
  
  //49
  ['onceTens'+shuffledNumbersto[48]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 39?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '11', "13","15"]),
    answers: [
      {
        answer: '9',
        nextId: 'onceTenscorrectq49',
      },
      {
        answer: '11',
        nextId: 'inonceTenscorrectq49',
      },
      {
        answer: "13",
        nextId: 'inonceTenscorrectq49',
      },
      {
        answer: "15",
        nextId: 'inonceTenscorrectq49',
      },
    ],
  },
  
  onceTenscorrectq49: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[49],
    },
  ],
  },
  inonceTenscorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[49],
    },
  ],
  },
  
  
  //50
  ['onceTens'+shuffledNumbersto[49]]: {
  botPrompt: 'What is the number at the units place in the number 52?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '5', "7","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTenscorrectq50',
      },
      {
        answer: '5',
        nextId: 'onceTenscorrectq50',
      },
      {
        answer: "7",
        nextId: 'inonceTenscorrectq50',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq50',
      },
    ],
  },
  
  onceTenscorrectq50: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[50],
    },
  ],
  },
  inonceTenscorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[50],
    },
  ],
  },
  
  //51
  ['onceTens'+shuffledNumbersto[50]]: {
  botPrompt: 'What is the number at the tens place in the number 74?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '6', "7","9"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTenscorrectq51',
      },
      {
        answer: '6',
        nextId: 'inonceTenscorrectq51',
      },
      {
        answer: "7",
        nextId: 'onceTenscorrectq51',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq51',
      },
    ],
  },
  
  onceTenscorrectq51: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[51],
    },
  ],
  },
  inonceTenscorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[51],
    },
  ],
  },
  
  //52
  ['onceTens'+shuffledNumbersto[51]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 43?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['7', '8', "9","10"]),
    answers: [
      {
        answer: '7',
        nextId: 'onceTenscorrectq52',
      },
      {
        answer: '8',
        nextId: 'inonceTenscorrectq52',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq52',
      },
      {
        answer: "10",
        nextId: 'inonceTenscorrectq52',
      },
    ],
  },
  
  onceTenscorrectq52: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[52],
    },
  ],
  },
  inonceTenscorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[52],
    },
  ],
  },
  
  //53
  ['onceTens'+shuffledNumbersto[52]]: {
  botPrompt: 'What is the number at the units place in the number 85?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '5', "8","9"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTenscorrectq53',
      },
      {
        answer: '5',
        nextId: 'onceTenscorrectq53',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq53',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq53',
      },
    ],
  },

  onceTenscorrectq53: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[53],
    },
  ],
  },
  inonceTenscorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[53],
    },
  ],
  },
  
  //54
  ['onceTens'+shuffledNumbersto[53]]: {
  botPrompt: 'What is the number at the tens place in the number 36?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['2', '3', "6","8"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTenscorrectq54',
      },
      {
        answer: '3',
        nextId: 'onceTenscorrectq54',
      },
      {
        answer: "6",
        nextId: 'inonceTenscorrectq54',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq54',
      },
    ],
  },
  
  onceTenscorrectq54: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[54],
    },
  ],
  },
  inonceTenscorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[54],
    },
  ],
  },
  
  
  //55
  ['onceTens'+shuffledNumbersto[54]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 61?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTenscorrectq55',
      },
      {
        answer: '7',
        nextId: 'inonceTenscorrectq55',
      },
      {
        answer: "8",
        nextId: 'onceTenscorrectq55',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq55',
      },
    ],
  },
  
  onceTenscorrectq55: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[55],
    },
  ],
  },
  inonceTenscorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[55],
    },
  ],
  },
  
  //56
  ['onceTens'+shuffledNumbersto[55]]: {
    botPrompt: 'What is the value of the digit in the units place in the number 537?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '5', "7","9"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTenscorrectq56',
      },
      {
        answer: '5',
        nextId: 'inonceTenscorrectq56',
      },
      {
        answer: "7",
        nextId: 'onceTenscorrectq56',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq56',
      },
    ],
  },
  onceTenscorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>7</strong> 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[56],
      },
    ],
  },
  inonceTenscorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[56],
      },
    ],
  },

  //57
  ['onceTens'+shuffledNumbersto[56]]: {
  botPrompt: 'What is the value of the digit in the tens place in the number 864?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '6', "8","3"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTenscorrectq57',
      },
      {
        answer: '6',
        nextId: 'onceTenscorrectq57',
      },
      {
        answer: "8",
        nextId: 'inonceTenscorrectq57',
      },
      {
        answer: "3",
        nextId: 'inonceTenscorrectq57',
      },
    ],
  },
  onceTenscorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[57],
    },
  ],
  },
  inonceTenscorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[57],
    },
  ],
  },
  
  //58
  ['onceTens'+shuffledNumbersto[57]]: {
  botPrompt: 'What number can be formed by using the digits 2 and 7 at units and tens place respectively?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['72', '27', "52","25"]),
  answers: [
    {
      answer: '72',
      nextId: 'inonceTenscorrectq58',
    },
    {
      answer: '27',
      nextId: 'onceTenscorrectq58',
    },
    {
      answer: "52",
      nextId: 'inonceTenscorrectq58',
    },
    {
      answer: "25",
      nextId: 'inonceTenscorrectq58',
    },
  ],
  },
  onceTenscorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>27</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[58],
    },
  ],
  },
  inonceTenscorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[58],
    },
  ],
  },
  
  //59
  ['onceTens'+shuffledNumbersto[58]]: {
  botPrompt: 'What is the sum of the digits at units and tens place in the number 458?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['12', '13', "14","9"]),
    answers: [
      {
        answer: '12',
        nextId: 'onceTenscorrectq57',
      },
      {
        answer: '13',
        nextId: 'inonceTenscorrectq57',
      },
      {
        answer: "11",
        nextId: 'inonceTenscorrectq57',
      },
      {
        answer: "9",
        nextId: 'inonceTenscorrectq57',
      },
    ],
  },
  onceTenscorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>12</strong> Answers! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[59],
    },
  ],
  },
  inonceTenscorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[59],
    },
  ],
  },
  
  //60
  ['onceTens'+shuffledNumbersto[59]]: {
  botPrompt: 'What is the largest possible number that can be formed using the digits 5 and 8 at units place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['85', '58', "95","59"]),
  answers: [
    {
      answer: '85',
      nextId: 'inonceTenscorrectq60',
    },
    {
      answer: '58',
      nextId: 'onceTenscorrectq60',
    },
    {
      answer: "95",
      nextId: 'inonceTenscorrectq60',
    },
    {
      answer: "59",
      nextId: 'inonceTenscorrectq60',
    },
  ],
  },
  onceTenscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>58</strong> 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[60],
    },
  ],
  },
  inonceTenscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[60],
    },
  ],
  },
  
  //61
  ["onceTens"+shuffledNumbersto[60]]: {
    botPrompt: 'What is the smallest possible number that can be formed using the digits 2 and 6 at tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['26', '62', "20","6"]),
    answers: [
      {
        answer: '26',
        nextId: 'onceTenscorrectq61',
      },
      {
        answer: '62',
        nextId: 'inonceTenscorrectq61',
      },
      {
        answer: "20",
        nextId: 'inonceTenscorrectq61',
      },
      {
        answer: "6",
        nextId: 'inonceTenscorrectq61',
      },
    ],
  },
  onceTenscorrectq61: {
    botPrompt: 'Hurray <strong>26</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[61],
      },
    ],
  },
  inonceTenscorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[61],
      },
    ],
  },
  
  //62
  ['onceTens'+shuffledNumbersto[61]]: {
    botPrompt: 'What is the sum of the digits at units and tens place in the number 973?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['10', '18', "19","16"]),
    answers: [
      {
        answer: '10',
        nextId: 'inonceTenscorrectq62',
      },
      {
        answer: '18',
        nextId: 'inonceTenscorrectq62',
      },
      {
        answer: "19",
        nextId: 'inonceTenscorrectq62',
      },
      {
        answer: "16",
        nextId: 'onceTenscorrectq62',
      },
    ],
  },
  
  onceTenscorrectq62: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[62],
      },
    ],
  },
  inonceTenscorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[62],
      },
    ],
  },
  
  //63
  ['onceTens'+shuffledNumbersto[62]]: {
  botPrompt: "What is the value of the digit in the units place in the number 674?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '6', "4","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTenscorrectq63',
      },
      {
        answer: '6',
        nextId: 'inonceTenscorrectq63',
      },
      {
        answer: "4",
        nextId: 'onceTenscorrectq63',
      },
      {
        answer: "7",
        nextId: 'inonceTenscorrectq63',
      },
    ],
  },
  
  onceTenscorrectq63: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[63],
    },
  ],
  },
  inonceTenscorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[63],
    },
  ],
  },

  //64
  ['onceTens'+shuffledNumbersto[63]]: {
  botPrompt: 'What is the value of the digit in the tens place in the number 157?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '5', "7","9"]),
  answers: [
    {
      answer: '1',
      nextId: 'inonceTenscorrectq64',
    },
    {
      answer: '5',
      nextId: 'onceTenscorrectq64',
    },
    {
      answer: "7",
      nextId: 'inonceTenscorrectq64',
    },
    {
      answer: "9",
      nextId: 'inonceTenscorrectq64',
    },
  ],
  },
  
  onceTenscorrectq64: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[64],
    },
  ],
  },
  inonceTenscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[64],
    },
  ],
  },
  
  //65
  ['onceTens'+shuffledNumbersto[64]]: {
  botPrompt: 'What number can be formed by using the digits 3 and 6 at units and tens place respectively?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['36', '63', "32","23"]),
    answers: [
      {
        answer: '36',
        nextId: 'inonceTenscorrectq65',
      },
      {
        answer: '63',
        nextId: 'onceTenscorrectq65',
      },
      {
        answer: "32",
        nextId: 'inonceTenscorrectq65',
      },
      {
        answer: "23",
        nextId: 'inonceTenscorrectq65',
      },
    ],
  },
  
  onceTenscorrectq65: {
  botPrompt: 'Hurray! <strong>63</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[65],
    },
  ],
  },
  inonceTenscorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"63"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[65],
    },
  ],
  },
  
  //66
  ['onceTens'+shuffledNumbersto[65]]: {
  botPrompt: 'What is the sum of the digits at units and tens place in the number 538?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '16', "13","14"]),
  answers: [
    {
      answer: '11',
      nextId: 'onceTenscorrectq66',
    },
    {
      answer: '16',
      nextId: 'inonceTenscorrectq66',
    },
    {
      answer: "13",
      nextId: 'inonceTenscorrectq66',
    },
    {
      answer: "14",
      nextId: 'inonceTenscorrectq66',
    },
  ],
  },
  
  onceTenscorrectq66: {
  botPrompt: 'Hurray! <strong>11</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[66],
    },
  ],
  },
  inonceTenscorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[66],
    },
  ],
  },
  
  //67
  ['onceTens'+shuffledNumbersto[66]]: {
  botPrompt: 'What is the number with 4 in the units place and 6 in the tens place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['46', '64', "56","54"]),
  answers: [
    {
      answer: '46',
      nextId: 'onceTenscorrectq67',
    },
    {
      answer: '64',
      nextId: 'inonceTenscorrectq67',
    },
    {
      answer: "56",
      nextId: 'inonceTenscorrectq67',
    },
    {
      answer: "54",
      nextId: 'inonceTenscorrectq67',
    },
  ],
  },
  
  onceTenscorrectq67: {
  botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[67],
    },
  ],
  },
  inonceTenscorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[67],
    },
  ],
  },
  
  
  //68
  ['onceTens'+shuffledNumbersto[67]]: {
  botPrompt: 'Which of these numbers has a digit sum of 8 in the units and tens place?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['44', '17', "53","26"]),
    answers: [
      {
        answer: '44',
        nextId: 'onceTenscorrectq68',
      },
      {
        answer: '17',
        nextId: 'inonceTenscorrectq68',
      },
      {
        answer: "53",
        nextId: 'inonceTenscorrectq68',
      },
      {
        answer: "26",
        nextId: 'inonceTenscorrectq68',
      },
    ],
  },
  
  onceTenscorrectq68: {
  botPrompt: 'Hurray! <strong>44</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[68],
    },
  ],
  },
  inonceTenscorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[68],
    },
  ],
  },
  
  //69
  ['onceTens'+shuffledNumbersto[68]]: {
  botPrompt: 'What is the number with 5 in the units place, 6 in the tens place, and 3 in the hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['653', '536', "365","356"]),
  answers: [
    {
      answer: '653',
      nextId: 'inonceTenscorrectq69',
    },
    {
      answer: '536',
      nextId: 'inonceTenscorrectq69',
    },
    {
      answer: "365",
      nextId: 'inonceTenscorrectq69',
    },
    {
      answer: "356",
      nextId: 'onceTenscorrectq69',
    },
  ],
  },
  
  onceTenscorrectq69: {
  botPrompt: 'Hurray! <strong>356</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[69],
    },
  ],
  },
  inonceTenscorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"356"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[69],
    },
  ],
  },

  
  //70
  ['onceTens'+shuffledNumbersto[69]]: {
  botPrompt: 'Which of these numbers has a digit sum of 12 in the units, tens, and hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['543', '555', "222","111"]),
  answers: [
    {
      answer: '543',
      nextId: 'onceTenscorrectq70',
    },
    {
      answer: '555',
      nextId: 'inonceTenscorrectq70',
    },
    {
      answer: "222",
      nextId: 'inonceTenscorrectq70',
    },
    {
      answer: "111",
      nextId: 'inonceTenscorrectq70',
    },
  ],
  },

  onceTenscorrectq70: {
  botPrompt: 'Hurray! <strong>543</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[70],
    },
  ],
  },
  inonceTenscorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"543"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[70],
    },
  ],
  },

  //71
  ['onceTens'+shuffledNumbersto[70]]: {
  botPrompt: 'What is the number with 8 in the units place, 7 in the tens place, and 2 in the hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['278', '782', "872","728"]),
    answers: [
      {
        answer: '278',
        nextId: 'inonceTenscorrectq71',
      },
      {
        answer: '782',
        nextId: 'inonceTenscorrectq71',
      },
      {
        answer: "872",
        nextId: 'inonceTenscorrectq71',
      },
      {
        answer: "728",
        nextId: 'onceTenscorrectq71',
      },
    ],
  },

  onceTenscorrectq71: {
  botPrompt: 'Hurray! <strong>728</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[71],
    },
  ],
  },
  inonceTenscorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"728"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[71],
    },
  ],
  },

  //72
  ['onceTens'+shuffledNumbersto[71]]: {
  botPrompt: 'Which of these numbers has a digit sum of 15 in the units, tens, and hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['888', '777', "555","333"]),
  answers: [
    {
      answer: '888',
      nextId: 'onceTenscorrectq72',
    },
    {
      answer: '777',
      nextId: 'inonceTenscorrectq72',
    },
    {
      answer: "555",
      nextId: 'inonceTenscorrectq72',
    },
    {
      answer: "333",
      nextId: 'inonceTenscorrectq72',
    },
  ],
  },

  onceTenscorrectq72: {
  botPrompt: 'Hurray! <strong>888</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[72],
    },
  ],
  },
  inonceTenscorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"888"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[72],
    },
  ],
  },

  //73
  ['onceTens'+shuffledNumbersto[72]]: {
  botPrompt: 'What is the number with 9 in the units place and 2 in the tens place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['92', '29', "19","91"]),
    answers: [
      {
        answer: '92',
        nextId: 'onceTenscorrectq73',
      },
      {
        answer: '29',
        nextId: 'inonceTenscorrectq73',
      },
      {
        answer: "19",
        nextId: 'inonceTenscorrectq73',
      },
      {
        answer: "91",
        nextId: 'inonceTenscorrectq73',
      },
    ],
  },

  onceTenscorrectq73: {
  botPrompt: 'Hurray! <strong>92</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[73],
    },
  ],
  },
  inonceTenscorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"92"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[73],
    },
  ],
  },

  //74
  ['onceTens'+shuffledNumbersto[73]]: {
  botPrompt: 'Which of these numbers has a digit sum of 9 in the units and tens place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['54', '18', "72","45"]),
  answers: [
    {
      answer: '54',
      nextId: 'inonceTenscorrectq74',
    },
    {
      answer: '18',
      nextId: 'inonceTenscorrectq74',
    },
    {
      answer: "72",
      nextId: 'inonceTenscorrectq74',
    },
    {
      answer: "45",
      nextId: 'onceTenscorrectq74',
    },
  ],
  },

  onceTenscorrectq74: {
  botPrompt: 'Hurray! <strong>45</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[74],
    },
  ],
  },
  inonceTenscorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[74],
    },
  ],
  },


  //75
  ['onceTens'+shuffledNumbersto[74]]: {
  botPrompt: 'What is the number with 7 in the units place, 5 in the tens place, and 1 in the hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['157', '517', "571","751"]),
    answers: [
      {
        answer: '157',
        nextId: 'inonceTenscorrectq75',
      },
      {
        answer: '517',
        nextId: 'inonceTenscorrectq75',
      },
      {
        answer: "571",
        nextId: 'inonceTenscorrectq75',
      },
      {
        answer: "751",
        nextId: 'onceTenscorrectq75',
      },
    ],
  },

  onceTenscorrectq75: {
  botPrompt: 'Hurray! <strong>751</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[75],
    },
  ],
  },
  inonceTenscorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"751"</strong>',
  answers: [
    {
      nextId: 'onceTens'+shuffledNumbersto[75],
    },
  ],
  },

  //76
  ['onceTens'+shuffledNumbersto[75]]: {
    botPrompt: 'Which of these numbers has a digit sum of 11 in the units, tens, and hundreds place?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['818', '727', "535","242"]),
    answers: [
      {
        answer: '818',
        nextId: 'onceTenscorrectq76',
      },
      {
        answer: '727',
        nextId: 'inonceTenscorrectq76',
      },
      {
        answer: "535",
        nextId: 'inonceTenscorrectq76',
      },
      {
        answer: "242",
        nextId: 'inonceTenscorrectq76',
      },
    ],
  },
  onceTenscorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>818</strong> 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[76],
      },
    ],
  },
  inonceTenscorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"818"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[76],
      },
    ],
  },

  //77
  ['onceTens'+shuffledNumbersto[76]]: {
  botPrompt: 'What is the number with 3 in the units place and 9 in the tens place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['93', '39', "49","94"]),
    answers: [
      {
        answer: '93',
        nextId: 'inonceTenscorrectq77',
      },
      {
        answer: '39',
        nextId: 'onceTenscorrectq77',
      },
      {
        answer: "49",
        nextId: 'inonceTenscorrectq77',
      },
      {
        answer: "94",
        nextId: 'inonceTenscorrectq77',
      },
    ],
  },
  onceTenscorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>39</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  inonceTenscorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },



  //78
  ['onceTens'+shuffledNumbersto[77]]: {
    botPrompt: 'Which of these numbers has a digit sum of 7 in the units and tens place? ',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['25', '16', "34","71"]),
      answers: [
        {
          answer: '25',
          nextId: 'inonceTenscorrectq78',
        },
        {
          answer: '16',
          nextId: 'onceTenscorrectq78',
        },
        {
          answer: "34",
          nextId: 'inonceTenscorrectq78',
        },
        {
          answer: "71",
          nextId: 'inonceTenscorrectq78',
        },
      ],
    },
    
    onceTenscorrectq78: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[78],
      },
    ],
    },
    inonceTenscorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[78],
      },
    ],
    },
    
    //79
    ['onceTens'+shuffledNumbersto[78]]: {
    botPrompt: 'What is the number with 1 in the units place, 6 in the tens place, and 4 in the hundreds place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['461', '164', "466","614"]),
      answers: [
        {
          answer: '416',
          nextId: 'inonceTenscorrectq79',
        },
        {
          answer: '164',
          nextId: 'onceTenscorrectq79',
        },
        {
          answer: "466",
          nextId: 'inonceTenscorrectq79',
        },
        {
          answer: "614",
          nextId: 'inonceTenscorrectq79',
        },
      ],
    },
    
    onceTenscorrectq79: {
    botPrompt: 'Hurray! <strong>416</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[79],
      },
    ],
    },
    inonceTenscorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"416"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[79],
      },
    ],
    },
    
    
    //80
    ['onceTens'+shuffledNumbersto[79]]: {
    botPrompt: 'Which of these numbers has a digit sum of 10 in the units, tens, and hundreds place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['881', '791', "604","475"]),
      answers: [
        {
          answer: '881',
          nextId: 'inonceTenscorrectq80',
        },
        {
          answer: '791',
          nextId: 'inonceTenscorrectq80',
        },
        {
          answer: "604",
          nextId: 'onceTenscorrectq80',
        },
        {
          answer: "475",
          nextId: 'inonceTenscorrectq80',
        },
      ],
    },
    
    onceTenscorrectq80: {
    botPrompt: 'Hurray! <strong>604</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[80],
      },
    ],
    },
    inonceTenscorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"604"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[80],
      },
    ],
    },
    
    //81
    ['onceTens'+shuffledNumbersto[80]]: {
    botPrompt: 'What is the number with 5 in the units place and 7 in the tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['357', '537', "775","375"]),
      answers: [
        {
          answer: '357',
          nextId: 'inonceTenscorrectq51',
        },
        {
          answer: '537',
          nextId: 'inonceTenscorrectq51',
        },
        {
          answer: "775",
          nextId: 'onceTenscorrectq51',
        },
        {
          answer: "375",
          nextId: 'inonceTenscorrectq51',
        },
      ],
    },
    
    onceTenscorrectq51: {
    botPrompt: 'Hurray! <strong>775</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[51],
      },
    ],
    },
    inonceTenscorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"775"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[51],
      },
    ],
    },
    
    //82
    ['onceTens'+shuffledNumbersto[81]]: {
    botPrompt: 'What number has 4 in the tens place and 7 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['43', '74', "27","47"]),
      answers: [
        {
          answer: '43',
          nextId: 'inonceTenscorrectq82',
        },
        {
          answer: '74',
          nextId: 'onceTenscorrectq82',
        },
        {
          answer: "27",
          nextId: 'inonceTenscorrectq82',
        },
        {
          answer: "47",
          nextId: 'inonceTenscorrectq82',
        },
      ],
    },
    
    onceTenscorrectq82: {
    botPrompt: 'Hurray! <strong>74</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[82],
      },
    ],
    },
    inonceTenscorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"74"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[82],
      },
    ],
    },
    
    //83
    ['onceTens'+shuffledNumbersto[82]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 37?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['3', '7', "10","4"]),
      answers: [
        {
          answer: '3',
          nextId: 'inonceTenscorrectq83',
        },
        {
          answer: '7',
          nextId: 'inonceTenscorrectq83',
        },
        {
          answer: "10",
          nextId: 'inonceTenscorrectq83',
        },
        {
          answer: "4",
          nextId: 'onceTenscorrectq83',
        },
      ],
    },
  
    onceTenscorrectq83: {
    botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[83],
      },
    ],
    },
    inonceTenscorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[83],
      },
    ],
    },
    
    //84
    ['onceTens'+shuffledNumbersto[83]]: {
    botPrompt: 'Which number has 2 in the units place and 5 in the tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['52', '25', "23","32"]),
      answers: [
        {
          answer: '52',
          nextId: 'inonceTenscorrectq84',
        },
        {
          answer: '25',
          nextId: 'onceTenscorrectq84',
        },
        {
          answer: "23",
          nextId: 'inonceTenscorrectq84',
        },
        {
          answer: "32",
          nextId: 'inonceTenscorrectq84',
        },
      ],
    },
    
    onceTenscorrectq84: {
    botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[84],
      },
    ],
    },
    inonceTenscorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[84],
      },
    ],
    },
    
    
    //85
    ['onceTens'+shuffledNumbersto[84]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 58?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['8', '13', "5","11"]),
      answers: [
        {
          answer: '8',
          nextId: 'onceTenscorrectq85',
        },
        {
          answer: '13',
          nextId: 'inonceTenscorrectq85',
        },
        {
          answer: "5",
          nextId: 'inonceTenscorrectq85',
        },
        {
          answer: "11",
          nextId: 'inonceTenscorrectq85',
        },
      ],
    },
    
    onceTenscorrectq85: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[85],
      },
    ],
    },
    inonceTenscorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[85],
      },
    ],
    },
    
    //86
    ['onceTens'+shuffledNumbersto[85]]: {
      botPrompt: 'What number has 3 in the tens place and 9 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['39', '93', "29","32"]),
      answers: [
        {
          answer: '39',
          nextId: 'inonceTenscorrectq86',
        },
        {
          answer: '93',
          nextId: 'onceTenscorrectq86',
        },
        {
          answer: "29",
          nextId: 'inonceTenscorrectq86',
        },
        {
          answer: "32",
          nextId: 'inonceTenscorrectq86',
        },
      ],
    },
    onceTenscorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>93</strong> 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[86],
        },
      ],
    },
    inonceTenscorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"93"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[86],
        },
      ],
    },
  
    //87
    ['onceTens'+shuffledNumbersto[86]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 62?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['8', '6', "2","12"]),
      answers: [
        {
          answer: '8',
          nextId: 'inonceTenscorrectq87',
        },
        {
          answer: '6',
          nextId: 'onceTenscorrectq87',
        },
        {
          answer: "2",
          nextId: 'inonceTenscorrectq87',
        },
        {
          answer: "12",
          nextId: 'inonceTenscorrectq87',
        },
      ],
    },
    onceTenscorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[87],
      },
    ],
    },
    inonceTenscorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[87],
      },
    ],
    },
    
    //88
    ['onceTens'+shuffledNumbersto[87]]: {
    botPrompt: 'Which number has 7 in the tens place and 6 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['76', '67', "86","97"]),
    answers: [
      {
        answer: '76',
        nextId: 'onceTenscorrectq88',
      },
      {
        answer: '67',
        nextId: 'inonceTenscorrectq88',
      },
      {
        answer: "86",
        nextId: 'inonceTenscorrectq88',
      },
      {
        answer: "97",
        nextId: 'inonceTenscorrectq88',
      },
    ],
    },
    onceTenscorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>76</strong> 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[88],
      },
    ],
    },
    inonceTenscorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[88],
      },
    ],
    },
    
    //89
    ['onceTens'+shuffledNumbersto[88]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 44?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['8', '4', "12","6"]),
      answers: [
        {
          answer: '8',
          nextId: 'inonceTenscorrectq87',
        },
        {
          answer: '4',
          nextId: 'onceTenscorrectq87',
        },
        {
          answer: "12",
          nextId: 'inonceTenscorrectq87',
        },
        {
          answer: "6",
          nextId: 'inonceTenscorrectq87',
        },
      ],
    },
    onceTenscorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> Answers! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[89],
      },
    ],
    },
    inonceTenscorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[89],
      },
    ],
    },
    
    //90
    ['onceTens'+shuffledNumbersto[89]]: {
    botPrompt: 'What number has 5 in the tens place and 8 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['85', '58', "87","56"]),
    answers: [
      {
        answer: '85',
        nextId: 'inonceTenscorrectq90',
      },
      {
        answer: '58',
        nextId: 'onceTenscorrectq90',
      },
      {
        answer: "87",
        nextId: 'inonceTenscorrectq90',
      },
      {
        answer: "56",
        nextId: 'inonceTenscorrectq90',
      },
    ],
    },
    onceTenscorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>58</strong> 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[90],
      },
    ],
    },
    inonceTenscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[90],
      },
    ],
    },
    
    //91
    ["onceTens"+shuffledNumbersto[90]]: {
      botPrompt: 'What is the sum of digits in the tens place and units place of 69?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['6', '9', "12","15"]),
      answers: [
        {
          answer: '6',
          nextId: 'onceTenscorrectq91',
        },
        {
          answer: '9',
          nextId: 'inonceTenscorrectq91',
        },
        {
          answer: "12",
          nextId: 'inonceTenscorrectq91',
        },
        {
          answer: "15",
          nextId: 'inonceTenscorrectq91',
        },
      ],
    },
    onceTenscorrectq91: {
      botPrompt: 'Hurray <strong>6</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[91],
        },
      ],
    },
    inonceTenscorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[91],
        },
      ],
    },
    
    //92
    ['onceTens'+shuffledNumbersto[91]]: {
      botPrompt: 'Which number has 1 in the tens place and 3 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['31', '13', "30","33"]),
      answers: [
        {
          answer: '31',
          nextId: 'onceTenscorrectq92',
        },
        {
          answer: '13',
          nextId: 'inonceTenscorrectq92',
        },
        {
          answer: "30",
          nextId: 'inonceTenscorrectq92',
        },
        {
          answer: "33",
          nextId: 'inonceTenscorrectq92',
        },
      ],
    },
    
    onceTenscorrectq92: {
      botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[92],
        },
      ],
    },
    inonceTenscorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[92],
        },
      ],
    },
    
    //93
    ['onceTens'+shuffledNumbersto[92]]: {
    botPrompt: "What is the sum of digits in the tens place and units place of 79?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '16', "9","14"]),
      answers: [
        {
          answer: '7',
          nextId: 'inonceTenscorrectq93',
        },
        {
          answer: '16',
          nextId: 'inonceTenscorrectq93',
        },
        {
          answer: "9",
          nextId: 'inonceTenscorrectq93',
        },
        {
          answer: "14",
          nextId: 'onceTenscorrectq93',
        },
      ],
    },
    
    onceTenscorrectq93: {
    botPrompt: 'Hurray! <strong>14</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[93],
      },
    ],
    },
    inonceTenscorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[93],
      },
    ],
    },
  
    //94
    ['onceTens'+shuffledNumbersto[93]]: {
    botPrompt: 'What number has 4 in the tens place and 6 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['46', '64', "26","42"]),
    answers: [
      {
        answer: '46',
        nextId: 'onceTenscorrectq94',
      },
      {
        answer: '64',
        nextId: 'inonceTenscorrectq94',
      },
      {
        answer: "26",
        nextId: 'inonceTenscorrectq94',
      },
      {
        answer: "42",
        nextId: 'inonceTenscorrectq94',
      },
    ],
    },
    
    onceTenscorrectq94: {
    botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[94],
      },
    ],
    },
    inonceTenscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[94],
      },
    ],
    },
    
    //95
    ['onceTens'+shuffledNumbersto[94]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 97?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['9', '7', "16","13"]),
      answers: [
        {
          answer: '9',
          nextId: 'inonceTenscorrectq95',
        },
        {
          answer: '7',
          nextId: 'inonceTenscorrectq95',
        },
        {
          answer: "16",
          nextId: 'onceTenscorrectq95',
        },
        {
          answer: "13",
          nextId: 'inonceTenscorrectq95',
        },
      ],
    },
    
    onceTenscorrectq95: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[95],
      },
    ],
    },
    inonceTenscorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[95],
      },
    ],
    },
    
    //96
    ['onceTens'+shuffledNumbersto[95]]: {
    botPrompt: 'What is the number formed by the digits 2 and 3 in the units and tens place respectively?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['23', '32', "25","52"]),
    answers: [
      {
        answer: '23',
        nextId: 'onceTenscorrectq96',
      },
      {
        answer: '32',
        nextId: 'inonceTenscorrectq96',
      },
      {
        answer: "25",
        nextId: 'inonceTenscorrectq96',
      },
      {
        answer: "52",
        nextId: 'inonceTenscorrectq96',
      },
    ],
    },
    
    onceTenscorrectq96: {
    botPrompt: 'Hurray! <strong>23</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[96],
      },
    ],
    },
    inonceTenscorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[96],
      },
    ],
    },

    //97
    ['onceTens'+shuffledNumbersto[96]]: {
    botPrompt: 'Which of the following has a digit 4 in the units place and a digit 5 in the tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['54', '45', "64","46"]),
    answers: [
      {
        answer: '54',
        nextId: 'onceTenscorrectq97',
      },
      {
        answer: '45',
        nextId: 'inonceTenscorrectq97',
      },
      {
        answer: "64",
        nextId: 'inonceTenscorrectq97',
      },
      {
        answer: "46",
        nextId: 'inonceTenscorrectq97',
      },
    ],
    },

    onceTenscorrectq97: {
    botPrompt: 'Hurray! <strong>54</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[97],
      },
    ],
    },
    inonceTenscorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"54"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[97],
      },
    ],
    },


    //98
    ['onceTens'+shuffledNumbersto[97]]: {
    botPrompt: 'What number is formed by the digits 1 in the tens place and 7 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,


    input: selectField(['71', '17', "27","72"]),
      answers: [
        {
          answer: '71',
          nextId: 'inonceTenscorrectq98',
        },
        {
          answer: '17',
          nextId: 'onceTenscorrectq98',
        },
        {
          answer: "27",
          nextId: 'inonceTenscorrectq98',
        },
        {
          answer: "72",
          nextId: 'inonceTenscorrectq98',
        },
      ],
    },

    onceTenscorrectq98: {
    botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[98],
      },
    ],
    },
    inonceTenscorrectq98: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
    answers: [
      {
        nextId: 'onceTens'+shuffledNumbersto[98],
      },
    ],
    },
    
    //99
    ['onceTens'+shuffledNumbersto[98]]: {
      botPrompt: 'What is the number formed by the digits 8 in the units place and 2 in the tens place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['28', '82', "88","18"]),
        answers: [
          {
            answer: '28',
            nextId: 'onceTenscorrectq99',
          },
          {
            answer: '82',
            nextId: 'inonceTenscorrectq99',
          },
          {
            answer: "88",
            nextId: 'inonceTenscorrectq99',
          },
          {
            answer: "18",
            nextId: 'inonceTenscorrectq99',
          },
        ],
      },
  
      onceTenscorrectq99: {
      botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[99],
        },
      ],
      },
      inonceTenscorrectq99: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[99],
        },
      ],
      },    //100
      ['onceTens'+shuffledNumbersto[99]]: {
      botPrompt: 'Which number has a digit 3 in the tens place and a digit 6 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['63', '36', "64","46"]),
        answers: [
          {
            answer: '63',
            nextId: 'onceTenscorrectq100',
          },
          {
            answer: '36',
            nextId: 'inonceTenscorrectq100',
          },
          {
            answer: "64",
            nextId: 'inonceTenscorrectq100',
          },
          {
            answer: "46",
            nextId: 'inonceTenscorrectq100',
          },
        ],
      },
  
      onceTenscorrectq100: {
      botPrompt: 'Hurray! <strong>63</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[100],
        },
      ],
      },
      inonceTenscorrectq100: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"63"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[100],
        },
      ],
      },

      //101
      ['onceTens'+shuffledNumbersto[100]]: {
      botPrompt: 'What number is formed by the digits 2 in the tens place and 0 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['71', '17', "27","72"]),
        answers: [
          {
            answer: '71',
            nextId: 'inonceTenscorrectq101',
          },
          {
            answer: '17',
            nextId: 'onceTenscorrectq101',
          },
          {
            answer: "27",
            nextId: 'inonceTenscorrectq101',
          },
          {
            answer: "72",
            nextId: 'inonceTenscorrectq101',
          },
        ],
      },
  
      onceTenscorrectq101: {
      botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[101],
        },
      ],
      },
      inonceTenscorrectq101: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[101],
        },
      ],
      },

      //102
      ['onceTens'+shuffledNumbersto[101]]: {
      botPrompt: 'What number is formed by the digits 2 in the tens place and 0 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['20', '2', "22","0"]),
        answers: [
          {
            answer: '20',
            nextId: 'onceTenscorrectq102',
          },
          {
            answer: '2',
            nextId: 'inonceTenscorrectq102',
          },
          {
            answer: "22",
            nextId: 'inonceTenscorrectq102',
          },
          {
            answer: "0",
            nextId: 'inonceTenscorrectq102',
          },
        ],
      },
  
      onceTenscorrectq102: {
      botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[102],
        },
      ],
      },
      inonceTenscorrectq102: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[102],
        },
      ],
      },

      //103
      ['onceTens'+shuffledNumbersto[102]]: {
      botPrompt: 'Which number has a digit 9 in the tens place and a digit 1 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['91', '19', "99","11"]),
        answers: [
          {
            answer: '91',
            nextId: 'onceTenscorrectq103',
          },
          {
            answer: '19',
            nextId: 'inonceTenscorrectq103',
          },
          {
            answer: "99",
            nextId: 'inonceTenscorrectq103',
          },
          {
            answer: "11",
            nextId: 'inonceTenscorrectq103',
          },
        ],
      },
  
      onceTenscorrectq103: {
      botPrompt: 'Hurray! <strong>91</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[103],
        },
      ],
      },
      inonceTenscorrectq103: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"91"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[103],
        },
      ],
      },


      //104
      ['onceTens'+shuffledNumbersto[103]]: {
      botPrompt: 'What number is formed by the digits 5 in the tens place and 8 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,

  
      input: selectField(['58', '85', "88","18"]),
        answers: [
          {
            answer: '58',
            nextId: 'inonceTenscorrectq104',
          },
          {
            answer: '85',
            nextId: 'onceTenscorrectq104',
          },
          {
            answer: "88",
            nextId: 'inonceTenscorrectq104',
          },
          {
            answer: "18",
            nextId: 'inonceTenscorrectq104',
          },
        ],
      },
  
      onceTenscorrectq104: {
      botPrompt: 'Hurray! <strong>58</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[104],
        },
      ],
      },
      inonceTenscorrectq104: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[104],
        },
      ],
      },


      //105
      ['onceTens'+shuffledNumbersto[104]]: {
      botPrompt: 'Which of the following has a digit 2 in the tens place and a digit 4 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,


      input: selectField(['42', '24', "64","46"]),
        answers: [
          {
            answer: '42',
            nextId: 'inonceTenscorrectq105',
          },
          {
            answer: '24',
            nextId: 'onceTenscorrectq105',
          },
          {
            answer: "64",
            nextId: 'inonceTenscorrectq105',
          },
          {
            answer: "46",
            nextId: 'inonceTenscorrectq105',
          },
        ],
      },

      onceTenscorrectq105: {
      botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[105],
        },
      ],
      },
      inonceTenscorrectq105: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
      answers: [
        {
          nextId: 'onceTens'+shuffledNumbersto[105],
        },
      ],
      },

       //106
       ['onceTens'+shuffledNumbersto[105]]: {
        botPrompt: 'What is the number formed by the digits 3 in the tens place and 9 in the units place?',
        type: RTypes.TRANSFORMED_TEXT,


        input: selectField(['39', '93', "33","99"]),
          answers: [
            {
              answer: '39',
              nextId: 'onceTenscorrectq106',
            },
            {
              answer: '93',
              nextId: 'inonceTenscorrectq106',
            },
            {
              answer: "33",
              nextId: 'inonceTenscorrectq106',
            },
            {
              answer: "99",
              nextId: 'inonceTenscorrectq106',
            },
          ],
        },
  
        onceTenscorrectq106: {
        botPrompt: 'Hurray! <strong>39</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtoContinue31',
          },
        ],
        },
        inonceTenscorrectq106: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
        answers: [
          {
            nextId: 'wishtoContinue31',
          },
        ],
        },

  //endonceTensletter
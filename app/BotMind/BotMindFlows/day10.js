//numbers


["numbers"+shuffledNumbersnseve[0]]: {
    botPrompt: 'How many fingers do you have on one hand?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","6"]),
    answers: [
      {
        answer: '3',
        nextId: 'innumberscorrect',
      },
      {
        answer: '4',
        nextId: 'innumberscorrect',
      },
      {
        answer: "5",
        nextId: 'numberscorrect',
      },
      {
        answer: "6",
        nextId: 'innumberscorrect',
      },
    ],
  },
  numberscorrect: {
    botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[1],
      },
    ],
  },
  innumberscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[1],
      },
    ],
  },
  
  ['numbers'+shuffledNumbersnseve[1]]: {
    botPrompt: 'Which number comes after 4?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['1', '2', "3","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq2',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq2',
      },
      {
        answer: "3",
        nextId: 'innumberscorrectq2',
      },
      {
        answer: "5",
        nextId: 'numberscorrectq2',
      },
    ],
  },
  
  numberscorrectq2: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[2],
      },
    ],
  },
  innumberscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[2],
      },
    ],
  },
  
  //3
  ['numbers'+shuffledNumbersnseve[2]]: {
    botPrompt: 'Which number comes before 7?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['5', '6', "7","8"]),
    answers: [
      {
        answer: '5',
        nextId: 'innumberscorrectq3',
      },
      {
        answer: '6',
        nextId: 'numberscorrectq3',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq3',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq3',
      },
    ],
  },
  
  numberscorrectq3: {
    botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[3],
      },
    ],
  },
  innumberscorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[3],
      },
    ],
  },
  
  //4
  ['numbers'+shuffledNumbersnseve[3]]: {
  botPrompt: 'What number comes between 3 and 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "4","6"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq4',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq4',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq4',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq4',
      },
    ],
  },
  
  numberscorrectq4: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[4],
    },
  ],
  },
  innumberscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[4],
    },
  ],
  },
  
  //5
  ['numbers'+shuffledNumbersnseve[4]]: {
  botPrompt: 'How many legs does a cat have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq5',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq5',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq5',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq5',
      },
    ],
  },
  
  numberscorrectq5: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[5],
    },
  ],
  },
  innumberscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[5],
    },
  ],
  },
  
  //6
  ['numbers'+shuffledNumbersnseve[5]]: {
  botPrompt: 'Which is greater, 2 or 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq6',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq6',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq6',
      },
      {
        answer: "5",
        nextId: 'numberscorrectq6',
      },
    ],
  },
  
  numberscorrectq6: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[6],
    },
  ],
  },
  innumberscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[6],
    },
  ],
  },
  
  //7
  ['numbers'+shuffledNumbersnseve[6]]: {
  botPrompt: 'Which number is the smallest?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","11"]),
    answers: [
      {
        answer: '8',
        nextId: 'numberscorrectq7',
      },
      {
        answer: '9',
        nextId: 'innumberscorrectq7',
      },
      {
        answer: "10",
        nextId: 'innumberscorrectq7',
      },
      {
        answer: "11",
        nextId: 'innumberscorrectq7',
      },
    ],
  },
  
  numberscorrectq7: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[7],
    },
  ],
  },
  innumberscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[7],
    },
  ],
  },
  
  
  //8
  ['numbers'+shuffledNumbersnseve[7]]: {
  botPrompt: 'Which number is the largest?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'innumberscorrectq8',
      },
      {
        answer: '7',
        nextId: 'innumberscorrectq8',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq8',
      },
      {
        answer: "9",
        nextId: 'numberscorrectq8',
      },
    ],
  },
  
  numberscorrectq8: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[8],
    },
  ],
  },
  innumberscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[8],
    },
  ],
  },
  
  //9
  ['numbers'+shuffledNumbersnseve[8]]: {
  botPrompt: 'What number comes after 9?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['10', '11', "12","13"]),
    answers: [
      {
        answer: '10',
        nextId: 'numberscorrectq9',
      },
      {
        answer: '11',
        nextId: 'innumberscorrectq9',
      },
      {
        answer: "12",
        nextId: 'innumberscorrectq9',
      },
      {
        answer: "13",
        nextId: 'innumberscorrectq9',
      },
    ],
  },
  
  numberscorrectq9: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[9],
    },
  ],
  },
  innumberscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[9],
    },
  ],
  },
  
  
  //10
  ['numbers'+shuffledNumbersnseve[9]]: {
  botPrompt: 'What number comes before 4?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq10',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq10',
      },
      {
        answer: "3",
        nextId: 'numberscorrectq10',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq10',
      },
    ],
  
  },
  
  numberscorrectq10: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[10],
    },
  ],
  },
  innumberscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[10],
    },
  ],
  },
  
  //11
  ['numbers'+shuffledNumbersnseve[10]]: {
  botPrompt: 'How many eyes does a person have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq11',
      },
      {
        answer: '2',
        nextId: 'numberscorrectq11',
      },
      {
        answer: "3",
        nextId: 'innumberscorrectq11',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq11',
      },
    ],
  
  },
  },
  
  numberscorrectq11: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[11],
    },
  ],
  },
  innumberscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[11],
    },
  ],
  },
  
  //12
  ['numbers'+shuffledNumbersnseve[11]]: {
  botPrompt: 'Which number is in between 2 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq12',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq12',
      },
      {
        answer: "3",
        nextId: 'numberscorrectq12',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq12',
      },
    ],
  
  },
  
  numberscorrectq12: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[12],
    },
  ],
  },
  innumberscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[12],
    },
  ],
  },
  
  //13
  ['numbers'+shuffledNumbersnseve[12]]: {
  botPrompt: 'Which number is in between 6 and 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'innumberscorrectq13',
      },
      {
        answer: '5',
        nextId: 'innumberscorrectq13',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq13',
      },
      {
        answer: "7",
        nextId: 'numberscorrectq13',
      },
    ],
  },
  
  numberscorrectq13: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[13],
    },
  ],
  },
  innumberscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[13],
    },
  ],
  },
  
  //14
  ['numbers'+shuffledNumbersnseve[13]]: {
  botPrompt: 'Which number comes after 15?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['16', '17', "18","19"]),
    answers: [
      {
        answer: '16',
        nextId: 'innumberscorrectq14',
      },
      {
        answer: '17',
        nextId: 'innumberscorrectq14',
      },
      {
        answer: "18",
        nextId: 'numberscorrectq14',
      },
      {
        answer: "19",
        nextId: 'innumberscorrectq14',
      },
    ],
  },
  
  numberscorrectq14: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[14],
    },
  ],
  },
  innumberscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[14],
    },
  ],
  },
  
  
  //15
  ['numbers'+shuffledNumbersnseve[14]]: {
  botPrompt: 'Which number comes before 11?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","12"]),
    answers: [
      {
        answer: '8',
        nextId: 'innumberscorrectq15',
      },
      {
        answer: '9',
        nextId: 'innumberscorrectq15',
      },
      {
        answer: "10",
        nextId: 'numberscorrectq15',
      },
      {
        answer: "12",
        nextId: 'innumberscorrectq15',
      },
    ],
  },
  
  numberscorrectq15: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[15],
    },
  ],
  },
  innumberscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[15],
    },
  ],
  },
  
  //16
  ['numbers'+shuffledNumbersnseve[15]]: {
    botPrompt: 'How many wheels does a car have?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq16',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq16',
      },
      {
        answer: "3",
        nextId: 'innumberscorrectq16',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq16',
      },
    ],
  },
  numberscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[16],
      },
    ],
  },
  innumberscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[16],
      },
    ],
  },
  
  //17
  ['numbers'+shuffledNumbersnseve[16]]: {
  botPrompt: 'How many days are in a week?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'innumberscorrectq17',
      },
      {
        answer: '5',
        nextId: 'innumberscorrectq17',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq17',
      },
      {
        answer: "7",
        nextId: 'numberscorrectq17',
      },
    ],
  },
  numberscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>7</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[17],
    },
  ],
  },
  innumberscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[17],
    },
  ],
  },
  
  //18
  ['numbers'+shuffledNumbersnseve[17]]: {
  botPrompt: 'Which number is greater, 9 or 6?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "8","94"]),
  answers: [
    {
      answer: '6',
      nextId: 'innumberscorrectq18',
    },
    {
      answer: '7',
      nextId: 'innumberscorrectq18',
    },
    {
      answer: "8",
      nextId: 'innumberscorrectq18',
    },
    {
      answer: "9",
      nextId: 'numberscorrectq18',
    },
  ],
  },
  numberscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>9</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[18],
    },
  ],
  },
  innumberscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[18],
    },
  ],
  },
  
  //19
  ['numbers'+shuffledNumbersnseve[18]]: {
  botPrompt: 'Which number is smaller, 2 or 5?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'numberscorrectq19',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq19',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq19',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq19',
    },
  ],
  },
  numberscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>2</strong> Answers! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[19],
    },
  ],
  },
  innumberscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[19],
    },
  ],
  },
  
  //20
  ['numbers'+shuffledNumbersnseve[19]]: {
  botPrompt: 'What number comes between 7 and 9?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '6', "7","8"]),
  answers: [
    {
      answer: '5',
      nextId: 'innumberscorrectq20',
    },
    {
      answer: '6',
      nextId: 'innumberscorrectq20',
    },
    {
      answer: "7",
      nextId: 'innumberscorrectq20',
    },
    {
      answer: "8",
      nextId: 'numberscorrectq20',
    },
  ],
  },
  numberscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>8</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[20],
    },
  ],
  },
  innumberscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[20],
    },
  ],
  },
  
  //21
  ["numbers"+shuffledNumbersnseve[20]]: {
    botPrompt: 'What number comes after 20?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['21', '22', "23","24"]),
  answers: [
    {
      answer: '21',
      nextId: 'numberscorrectq21',
    },
    {
      answer: '22',
      nextId: 'innumberscorrectq21',
    },
    {
      answer: "23",
      nextId: 'innumberscorrectq21',
    },
    {
      answer: "24",
      nextId: 'innumberscorrectq21',
    },
  ],
  },
  numberscorrectq21: {
    botPrompt: 'Hurray <strong>21</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[21],
      },
    ],
  },
  innumberscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[21],
      },
    ],
  },
  
  //22
  ['numbers'+shuffledNumbersnseve[21]]: {
    botPrompt: 'What number comes before 6?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq22',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq22',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq22',
    },
    {
      answer: "5",
      nextId: 'numberscorrectq22',
    },
  ],
  },
  
  numberscorrectq22: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[22],
      },
    ],
  },
  innumberscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[22],
      },
    ],
  },
  
  //23
  ['numbers'+shuffledNumbersnseve[22]]: {
  botPrompt: "How many sides does a square have?"
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq23',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq23',
    },
    {
      answer: "4",
      nextId: 'numberscorrectq23',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq23',
    },
  ],
  },
  
  numberscorrectq23: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[23],
    },
  ],
  },
  innumberscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[23],
    },
  ],
  },
  
  //24
  ['numbers'+shuffledNumbersnseve[23]]: {
  botPrompt: 'Which number comes after 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'innumberscorrectq24',
    },
    {
      answer: '7',
      nextId: 'innumberscorrectq24',
    },
    {
      answer: "8",
      nextId: 'innumberscorrectq24',
    },
    {
      answer: "9",
      nextId: 'numberscorrectq24',
    },
  ],
  },
  
  numberscorrectq24: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[24],
    },
  ],
  },
  innumberscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[24],
    },
  ],
  },
  
  //25
  ['numbers'+shuffledNumbersnseve[24]]: {
  botPrompt: 'Which number comes before 13?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['10', '11', "12","13"]),
  answers: [
    {
      answer: '10',
      nextId: 'innumberscorrectq25',
    },
    {
      answer: '11',
      nextId: 'innumberscorrectq25',
    },
    {
      answer: "12",
      nextId: 'numberscorrectq25',
    },
    {
      answer: "13",
      nextId: 'innumberscorrectq25',
    },
  ],
  },
  
  numberscorrectq25: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[25],
    },
  ],
  },
  innumberscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[25],
    },
  ],
  },
  
  //26
  ['numbers'+shuffledNumbersnseve[25]]: {
  botPrompt: 'How many sides does a triangle have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq26',
    },
    {
      answer: '3',
      nextId: 'numberscorrectq26',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq26',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq26',
    },
  ],
  },
  
  numberscorrectq26: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[26],
    },
  ],
  },
  innumberscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[26],
    },
  ],
  },
  
  //27
  ['numbers'+shuffledNumbersnseve[26]]: {
  botPrompt: 'What number comes between 17 and 19?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['14', '15', "16","18"]),
    answers: [
      {
        answer: '14',
        nextId: 'innumberscorrectq27',
      },
      {
        answer: '15',
        nextId: 'innumberscorrectq27',
      },
      {
        answer: "16",
        nextId: 'innumberscorrectq27',
      },
      {
        answer: "18",
        nextId: 'numberscorrectq27',
      },
    ],
  },
  
  numberscorrectq27: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[27],
    },
  ],
  },
  innumberscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[27],
    },
  ],
  },
  

  //28
  ['numbers'+shuffledNumbersnseve[27]]: {
  botPrompt: 'What number comes before 20?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['16', '17', "18","19"]),
  answers: [
    {
      answer: '16',
      nextId: 'innumberscorrectq28',
    },
    {
      answer: '17',
      nextId: 'innumberscorrectq28',
    },
    {
      answer: "18",
      nextId: 'innumberscorrectq28',
    },
    {
      answer: "19",
      nextId: 'numberscorrectq28',
    },
  ],
  },
  
  numberscorrectq28: {
  botPrompt: 'Hurray! <strong>19</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[28],
    },
  ],
  },
  innumberscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[28],
    },
  ],
  },
  
  //29
  ['numbers'+shuffledNumbersnseve[28]]: {
  botPrompt: 'How many legs does a spider have?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['4', '6', "8","10"]),
    answers: [
      {
        answer: '4',
        nextId: 'innumberscorrectq29',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq29',
      },
      {
        answer: "8",
        nextId: 'numberscorrectq29',
      },
      {
        answer: "10",
        nextId: 'innumberscorrectq29',
      },
    ],
  },
  
  numberscorrectq29: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[29],
    },
  ],
  },
  innumberscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[29],
    },
  ],
  },
  
  
  //30
  ['numbers'+shuffledNumbersnseve[29]]: {
  botPrompt: 'Which number is greater, 3 or 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "6","7"]),
  answers: [
    {
      answer: '3',
      nextId: 'innumberscorrectq30',
    },
    {
      answer: '4',
      nextId: 'innumberscorrectq30',
    },
    {
      answer: "6",
      nextId: 'innumberscorrectq30',
    },
    {
      answer: "7",
      nextId: 'numberscorrectq30',
    },
  ],
  },

  numberscorrectq30: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[30],
    },
  ],
  },
  innumberscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[30],
    },
  ],
  },
  
  //31
  ['numbers'+shuffledNumbersnseve[30]]: {
  botPrompt: 'Which number is smaller, 1 or 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "4","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'numberscorrectq31',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq31',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq31',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq31',
      },
    ],
  },
  
  numberscorrectq31: {
  botPrompt: 'Hurray! <strong>1</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[31],
    },
  ],
  },
  innumberscorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[31],
    },
  ],
  },
  
  //32
  ['numbers'+shuffledNumbersnseve[31]]: {
  botPrompt: 'What number comes between 11 and 13?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","12"]),
  answers: [
    {
      answer: '8',
      nextId: 'innumberscorrectq32',
    },
    {
      answer: '9',
      nextId: 'innumberscorrectq32',
    },
    {
      answer: "10",
      nextId: 'innumberscorrectq32',
    },
    {
      answer: "12",
      nextId: 'numberscorrectq32',
    },
  ],
  },
  
  numberscorrectq32: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[32],
    },
  ],
  },
  innumberscorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[32],
    },
  ],
  },
  
  //33
  ['numbers'+shuffledNumbersnseve[32]]: {
  botPrompt: 'What number comes after 25?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['26', '27', "28","29"]),
  answers: [
    {
      answer: '26',
      nextId: 'numberscorrectq33',
    },
    {
      answer: '27',
      nextId: 'innumberscorrectq33',
    },
    {
      answer: "28",
      nextId: 'innumberscorrectq33',
    },
    {
      answer: "29",
      nextId: 'innumberscorrectq33',
    },
  ],
  },
  
  numberscorrectq33: {
  botPrompt: 'Hurray! <strong>26</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[33],
    },
  ],
  },
  innumberscorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[33],
    },
  ],
  },
  
  //34
  ['numbers'+shuffledNumbersnseve[33]]: {
  botPrompt: 'What number comes before 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "5","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'numberscorrectq34',
      },
      {
        answer: '4',
        nextId: 'innumberscorrectq34',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq34',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq34',
      },
    ],
  },
  
  numberscorrectq34: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[34],
    },
  ],
  },
  innumberscorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[34],
    },
  ],
  },
  
  
  //35
  ['numbers'+shuffledNumbersnseve[34]]: {
  botPrompt: 'How many sides does a circle have?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['0', '1', "2","3"]),
  answers: [
    {
      answer: '0',
      nextId: 'numberscorrectq35',
    },
    {
      answer: '1',
      nextId: 'innumberscorrectq35',
    },
    {
      answer: "2",
      nextId: 'innumberscorrectq35',
    },
    {
      answer: "3",
      nextId: 'innumberscorrectq35',
    },
  ],
  },
  
  numberscorrectq35: {
  botPrompt: 'Hurray! <strong>0</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[35],
    },
  ],
  },
  innumberscorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[35],
    },
  ],
  },
  
  //36
  ['numbers'+shuffledNumbersnseve[35]]: {
    botPrompt: 'Which number is in between 14 and 16?',
    type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '12', "13","15"]),
  answers: [
    {
      answer: '11',
      nextId: 'innumberscorrectq36',
    },
    {
      answer: '12',
      nextId: 'innumberscorrectq36',
    },
    {
      answer: "13",
      nextId: 'innumberscorrectq36',
    },
    {
      answer: "15",
      nextId: 'numberscorrectq36',
    },
  ],
  },
  numberscorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>15</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[36],
      },
    ],
  },
  innumberscorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[36],
      },
    ],
  },
  
  //37
  ['numbers'+shuffledNumbersnseve[36]]: {
  botPrompt: 'Which number is in between 18 and 20?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['14', '15', "16","19"]),
  answers: [
    {
      answer: '14',
      nextId: 'innumberscorrectq37',
    },
    {
      answer: '15',
      nextId: 'innumberscorrectq37',
    },
    {
      answer: "16",
      nextId: 'innumberscorrectq37',
    },
    {
      answer: "19",
      nextId: 'numberscorrectq37',
    },
  ],
  },
  numberscorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>19</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[37],
    },
  ],
  },
  innumberscorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[37],
    },
  ],
  },

  //38
  ['numbers'+shuffledNumbersnseve[37]]: {
  botPrompt: 'How many legs does a dog have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq38',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq38',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq38',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq38',
      },
    ],
  },
  numberscorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[38],
    },
  ],
  },
  innumberscorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[38],
    },
  ],
  },
  
  //39
  ['numbers'+shuffledNumbersnseve[38]]: {
  botPrompt: 'Which number is greater, 2 or 9?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '6', "8","9"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq310',
    },
    {
      answer: '6',
      nextId: 'innumberscorrectq39',
    },
    {
      answer: "8",
      nextId: 'innumberscorrectq39',
    },
    {
      answer: "9",
      nextId: 'numberscorrectq39',
    },
  ],
  },
  numberscorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>9</strong> Answers! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[39],
    },
  ],
  },
  innumberscorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[39],
    },
  ],
  },
  
  //40
  ['numbers'+shuffledNumbersnseve[39]]: {
  botPrompt: 'Which number is smaller, 4 or 10?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '6', "8","10"]),
    answers: [
      {
        answer: '4',
        nextId: 'numberscorrectq40',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq40',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq40',
      },
      {
        answer: "10",
        nextId: 'innumberscorrectq40',
      },
    ],
  },
  numberscorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[40],
    },
  ],
  },
  innumberscorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[40],
    },
  ],
  },
  
  //41
  ["numbers"+shuffledNumbersnseve[40]]: {
    botPrompt: 'What number comes between 21 and 23?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['17', '18', "19","22"]),
    answers: [
      {
        answer: '17',
        nextId: 'innumberscorrectq41',
      },
      {
        answer: '18',
        nextId: 'innumberscorrectq41',
      },
      {
        answer: "19",
        nextId: 'innumberscorrectq41',
      },
      {
        answer: "22",
        nextId: 'numberscorrectq41',
      },
    ],
  },
  numberscorrectq41: {
    botPrompt: 'Hurray <strong>22</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[41],
      },
    ],
  },
  innumberscorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[41],
      },
    ],
  },
  
  //42
  
  ['numbers'+shuffledNumbersnseve[41]]: {
    botPrompt: 'What number comes after 30?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['31', '32', "33","34"]),
    answers: [
      {
        answer: '31',
        nextId: 'numberscorrectq42',
      },
      {
        answer: '32',
        nextId: 'innumberscorrectq42',
      },
      {
        answer: "33",
        nextId: 'innumberscorrectq42',
      },
      {
        answer: "34",
        nextId: 'innumberscorrectq42',
      },
    ],
  },
  
  numberscorrectq42: {
    botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[42],
      },
    ],
  },
  innumberscorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[42],
      },
    ],
  },
  
  //43
  ['numbers'+shuffledNumbersnseve[42]]: {
  botPrompt: "What number comes before 12?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['5', '6', "7","11"]),
    answers: [
      {
        answer: '5',
        nextId: 'innumberscorrectq43',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq43',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq43',
      },
      {
        answer: "11",
        nextId: 'numberscorrectq43',
      },
    ],
  },
  
  numberscorrectq43: {
  botPrompt: 'Hurray! <strong>11</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[43],
    },
  ],
  },
  innumberscorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[43],
    },
  ],
  },
  
  //44
  ['numbers'+shuffledNumbersnseve[43]]: {
  botPrompt: 'What number comes after 35?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['36', '37', "38","39"]),
    answers: [
      {
        answer: '36',
        nextId: 'innumberscorrectq44',
      },
      {
        answer: '37',
        nextId: 'innumberscorrectq44',
      },
      {
        answer: "38",
        nextId: 'numberscorrectq44',
      },
      {
        answer: "39",
        nextId: 'innumberscorrectq44',
      },
    ],
  },
  
  numberscorrectq44: {
  botPrompt: 'Hurray! <strong>36</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[44],
    },
  ],
  },
  innumberscorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"36"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[44],
    },
  ],
  },
  
  //45
  ['numbers'+shuffledNumbersnseve[44]]: {
  botPrompt: 'What number comes before 50?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['44', '45', "46","49"]),
    answers: [
      {
        answer: '44',
        nextId: 'innumberscorrectq45',
      },
      {
        answer: '45',
        nextId: 'innumberscorrectq45',
      },
      {
        answer: "46",
        nextId: 'innumberscorrectq45',
      },
      {
        answer: "49",
        nextId: 'numberscorrectq45',
      },
    ],
  },
  
  numberscorrectq45: {
  botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[45],
    },
  ],
  },
  innumberscorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[45],
    },
  ],
  },
  
  //46
  ['numbers'+shuffledNumbersnseve[45]]: {
  botPrompt: 'How many sides does a square have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq46',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq46',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq46',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq46',
      },
    ],
  },
  
  numberscorrectq46: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[46],
    },
  ],
  },
  innumberscorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[46],
    },
  ],
  },
  
  //47
  ['numbers'+shuffledNumbersnseve[46]]: {
  botPrompt: 'Which number is greater, 15 or 22?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['12', '15', "18","22"]),
    answers: [
      {
        answer: '12',
        nextId: 'innumberscorrectq47',
      },
      {
        answer: '15',
        nextId: 'innumberscorrectq47',
      },
      {
        answer: "18",
        nextId: 'innumberscorrectq47',
      },
      {
        answer: "22",
        nextId: 'numberscorrectq47',
      },
    ],
  },
  
  numberscorrectq47: {
  botPrompt: 'Hurray! <strong>22</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[47],
    },
  ],
  },
  innumberscorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[47],
    },
  ],
  },


  //48
  ['numbers'+shuffledNumbersnseve[47]]: {
  botPrompt: 'Which number is smaller, 9 or 13?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['9', '10', "12","13"]),
    answers: [
      {
        answer: '9',
        nextId: 'numberscorrectq48',
      },
      {
        answer: '10',
        nextId: 'innumberscorrectq48',
      },
      {
        answer: "12",
        nextId: 'innumberscorrectq48',
      },
      {
        answer: "13",
        nextId: 'innumberscorrectq48',
      },
    ],
  },
  
  numberscorrectq48: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[48],
    },
  ],
  },
  innumberscorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[48],
    },
  ],
  },
  
  //49
  ['numbers'+shuffledNumbersnseve[48]]: {
  botPrompt: 'What number comes between 29 and 31?
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '29', "30","32"]),
    answers: [
      {
        answer: '28',
        nextId: 'innumberscorrectq49',
      },
      {
        answer: '29',
        nextId: 'innumberscorrectq49',
      },
      {
        answer: "30",
        nextId: "numberscorrectq49',
      },
      {
        answer: "32",
        nextId: 'innumberscorrectq49',
      },
    ],
  },
  
  numberscorrectq49: {
  botPrompt: 'Hurray! <strong>30</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[49],
    },
  ],
  },
  innumberscorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[49],
    },
  ],
  },
  
  
  //50
  ['numbers'+shuffledNumbersnseve[49]]: {
  botPrompt: 'What number comes after 60?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['61', '62', "63","64"]),
    answers: [
      {
        answer: '61',
        nextId: 'numberscorrectq50',
      },
      {
        answer: '62',
        nextId: 'innumberscorrectq50',
      },
      {
        answer: "63",
        nextId: 'numberscorrectq50',
      },
      {
        answer: "64",
        nextId: 'innumberscorrectq50',
      },
    ],
  },
  
  numberscorrectq50: {
  botPrompt: 'Hurray! <strong>61</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[50],
    },
  ],
  },
  innumberscorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"61"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[50],
    },
  ],
  },
  
  //51
  ['numbers'+shuffledNumbersnseve[50]]: {
  botPrompt: 'What number comes before 100?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['95', '96', "97","99"]),
    answers: [
      {
        answer: '95',
        nextId: 'innumberscorrectq51',
      },
      {
        answer: '96',
        nextId: 'innumberscorrectq51',
      },
      {
        answer: "97",
        nextId: 'innumberscorrectq51',
      },
      {
        answer: "99",
        nextId: 'numberscorrectq51',
      },
    ],
  },
  
  numberscorrectq51: {
  botPrompt: 'Hurray! <strong>99</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[51],
    },
  ],
  },
  innumberscorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"99"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[51],
    },
  ],
  },
  
  //52
  ['numbers'+shuffledNumbersnseve[51]]: {
  botPrompt: 'How many legs does a bird have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '4', "6","8"]),
    answers: [
      {
        answer: '2',
        nextId: 'numberscorrectq52',
      },
      {
        answer: '4',
        nextId: 'innumberscorrectq52',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq52',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq52',
      },
    ],
  },
  
  numberscorrectq52: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[52],
    },
  ],
  },
  innumberscorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[52],
    },
  ],
  },
  
  //53
  ['numbers'+shuffledNumbersnseve[52]]: {
  botPrompt: 'Which number is greater, 28 or 32?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['24', '28', "30","32"]),
    answers: [
      {
        answer: '24',
        nextId: 'innumberscorrectq53',
      },
      {
        answer: '28',
        nextId: 'innumberscorrectq53',
      },
      {
        answer: "30",
        nextId: 'innumberscorrectq53',
      },
      {
        answer: "32",
        nextId: 'numberscorrectq53',
      },
    ],
  },

  numberscorrectq53: {
  botPrompt: 'Hurray! <strong>32</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[53],
    },
  ],
  },
  innumberscorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"32"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[53],
    },
  ],
  },
  
  //54
  ['numbers'+shuffledNumbersnseve[53]]: {
  botPrompt: 'Which number is smaller, 17 or 20?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['17', '18', "19","20"]),
    answers: [
      {
        answer: '17',
        nextId: 'numberscorrectq54',
      },
      {
        answer: '18',
        nextId: 'innumberscorrectq54',
      },
      {
        answer: "19",
        nextId: 'innumberscorrectq54',
      },
      {
        answer: "20",
        nextId: 'innumberscorrectq54',
      },
    ],
  },
  
  numberscorrectq54: {
  botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[54],
    },
  ],
  },
  innumberscorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[54],
    },
  ],
  },


  //55
  ['numbers'+shuffledNumbersnseve[54]]: {
  botPrompt: 'What number comes between 43 and 45?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['42', '43', "44","46"]),
    answers: [
      {
        answer: '42',
        nextId: 'innumberscorrectq55',
      },
      {
        answer: '43',
        nextId: 'innumberscorrectq55',
      },
      {
        answer: "44",
        nextId: 'numberscorrectq55',
      },
      {
        answer: "46",
        nextId: 'innumberscorrectq55',
      },
    ],
  },
  
  numberscorrectq55: {
  botPrompt: 'Hurray! <strong>44</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[55],
    },
  ],
  },
  innumberscorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[55],
    },
  ],
  },
  
  //56
  ['numbers'+shuffledNumbersnseve[55]]: {
    botPrompt: 'What number comes after 75?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['76', '77', "78","79"]),
    answers: [
      {
        answer: '76',
        nextId: 'numberscorrectq56',
      },
      {
        answer: '77',
        nextId: 'innumberscorrectq56',
      },
      {
        answer: "78",
        nextId: 'innumberscorrectq56',
      },
      {
        answer: "79",
        nextId: 'innumberscorrectq56',
      },
    ],
  },
  numberscorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>76</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[56],
      },
    ],
  },
  innumberscorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[56],
      },
    ],
  },

  //57
  ['numbers'+shuffledNumbersnseve[56]]: {
  botPrompt: 'What number comes before 90?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['85', '86', "89","90"]),
    answers: [
      {
        answer: '85',
        nextId: 'innumberscorrectq57',
      },
      {
        answer: '86',
        nextId: 'innumberscorrectq57',
      },
      {
        answer: "89",
        nextId: 'numberscorrectq57',
      },
      {
        answer: "90",
        nextId: 'innumberscorrectq57',
      },
    ],
  },
  numberscorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>89</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[57],
    },
  ],
  },
  innumberscorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"89"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[57],
    },
  ],
  },
  
  //58
  ['numbers'+shuffledNumbersnseve[57]]: {
  botPrompt: 'How many sides does a rectangle have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq58',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq58',
    },
    {
      answer: "4",
      nextId: 'numberscorrectq58',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq58',
    },
  ],
  },
  numberscorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[58],
    },
  ],
  },
  innumberscorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[58],
    },
  ],
  },
  
  //59
  ['numbers'+shuffledNumbersnseve[58]]: {
  botPrompt: 'What is the missing number in the sequence: 2, 4, __, 8, 10?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "9","11"]),
    answers: [
      {
        answer: '6',
        nextId: 'numberscorrectq57',
      },
      {
        answer: '7',
        nextId: 'innumberscorrectq57',
      },
      {
        answer: "9",
        nextId: 'innumberscorrectq57',
      },
      {
        answer: "11",
        nextId: 'innumberscorrectq57',
      },
    ],
  },
  numberscorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> Answers! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[59],
    },
  ],
  },
  innumberscorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[59],
    },
  ],
  },
  
  //60
  ['numbers'+shuffledNumbersnseve[59]]: {
  botPrompt: 'What number comes after the square of 4?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['15', '16', "17","18"]),
  answers: [
    {
      answer: '15',
      nextId: 'numberscorrectq60',
    },
    {
      answer: '16',
      nextId: 'innumberscorrectq60',
    },
    {
      answer: "17",
      nextId: 'numberscorrectq60',
    },
    {
      answer: "18",
      nextId: 'innumberscorrectq60',
    },
  ],
  },
  numberscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>17</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[60],
    },
  ],
  },
  innumberscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[60],
    },
  ],
  },
  
  //61
  ["numbers"+shuffledNumbersnseve[60]]: {
    botPrompt: 'What number comes before the cube of 3?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['25', '26', "27","28"]),
    answers: [
      {
        answer: '25',
        nextId: 'innumberscorrectq61',
      },
      {
        answer: '26',
        nextId: 'numberscorrectq61',
      },
      {
        answer: "27",
        nextId: 'innumberscorrectq61',
      },
      {
        answer: "28",
        nextId: 'innumberscorrectq61',
      },
    ],
  },
  numberscorrectq61: {
    botPrompt: 'Hurray <strong>26</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[61],
      },
    ],
  },
  innumberscorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[61],
      },
    ],
  },
  
  //62
  ['numbers'+shuffledNumbersnseve[61]]: {
    botPrompt: 'What number comes between 7 and square of 3?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['7', '6', "8","5"]),
    answers: [
      {
        answer: '7',
        nextId: 'innumberscorrectq62',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq62',
      },
      {
        answer: "8",
        nextId: 'numberscorrectq62',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq62',
      },
    ],
  },
  
  numberscorrectq62: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[62],
      },
    ],
  },
  innumberscorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[62],
      },
    ],
  },
  
  //63
  ['numbers'+shuffledNumbersnseve[62]]: {
  botPrompt: "What number comes after the product of 3 and 5?",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['14', '15', "16","17"]),
    answers: [
      {
        answer: '14',
        nextId: 'innumberscorrectq63',
      },
      {
        answer: '15',
        nextId: 'innumberscorrectq63',
      },
      {
        answer: "16",
        nextId: 'numberscorrectq63',
      },
      {
        answer: "17",
        nextId: 'innumberscorrectq63',
      },
    ],
  },
  
  numberscorrectq63: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[63],
    },
  ],
  },
  innumberscorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[63],
    },
  ],
  },

  //64
  ['numbers'+shuffledNumbersnseve[63]]: {
  botPrompt: 'What number comes before the quotient of 10 divided by 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '4', "5","6"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq64',
    },
    {
      answer: '4',
      nextId: 'numberscorrectq64',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq64',
    },
    {
      answer: "6",
      nextId: 'innumberscorrectq64',
    },
  ],
  },
  
  numberscorrectq64: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[64],
    },
  ],
  },
  innumberscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[64],
    },
  ],
  },
  
  //65
  ['numbers'+shuffledNumbersnseve[64]]: {
  botPrompt: 'Which number is smaller, the sum of 6 and 4 or the product of 3 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Sum of 6 and 4', 'Product of 3 and 4', "They are equal","Cannot be determined"]),
    answers: [
      {
        answer: 'Sum of 6 and 4',
        nextId: 'numberscorrectq65',
      },
      {
        answer: 'Product of 3 and 4',
        nextId: 'innumberscorrectq65',
      },
      {
        answer: "They are equal",
        nextId: 'innumberscorrectq65',
      },
      {
        answer: "Cannot be determined",
        nextId: 'innumberscorrectq65',
      },
    ],
  },
  
  numberscorrectq65: {
  botPrompt: 'Hurray! <strong>Sum of 6 and 4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[65],
    },
  ],
  },
  innumberscorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sum of 6 and 4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[65],
    },
  ],
  },
  
  //66
  ['numbers'+shuffledNumbersnseve[65]]: {
  botPrompt: 'What number comes between 89 and 91?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['92', '90', "92","88"]),
  answers: [
    {
      answer: '92',
      nextId: 'innumberscorrectq66',
    },
    {
      answer: '90',
      nextId: 'numberscorrectq66',
    },
    {
      answer: "92",
      nextId: 'numberscorrectq66',
    },
    {
      answer: "88",
      nextId: 'innumberscorrectq66',
    },
  ],
  },
  
  numberscorrectq66: {
  botPrompt: 'Hurray! <strong>90</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[66],
    },
  ],
  },
  innumberscorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"90"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[66],
    },
  ],
  },
  
  //67
  ['numbers'+shuffledNumbersnseve[66]]: {
  botPrompt: 'What number comes before the difference of 9 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '5', "6","7"]),
  answers: [
    {
      answer: '4',
      nextId: 'numberscorrectq67',
    },
    {
      answer: '5',
      nextId: 'innumberscorrectq67',
    },
    {
      answer: "6",
      nextId: 'innumberscorrectq67',
    },
    {
      answer: "7",
      nextId: 'innumberscorrectq67',
    },
  ],
  },
  
  numberscorrectq67: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[67],
    },
  ],
  },
  innumberscorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[67],
    },
  ],
  },
  
  
  //68
  ['numbers'+shuffledNumbersnseve[67]]: {
  botPrompt: 'Which number is greater, the sum of 8 and 3 or the product of 2 and 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Sum of 8 and 3', 'Product of 2 and 7', "They are equal","Cannot be determined"]),
    answers: [
      {
        answer: 'Sum of 8 and 3',
        nextId: 'numberscorrectq68',
      },
      {
        answer: 'Product of 2 and 7',
        nextId: 'innumberscorrectq68',
      },
      {
        answer: "They are equal",
        nextId: 'innumberscorrectq68',
      },
      {
        answer: "Cannot be determined",
        nextId: 'innumberscorrectq68',
      },
    ],
  },
  
  numberscorrectq68: {
  botPrompt: 'Hurray! <strong>Sum of 8 and 3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[68],
    },
  ],
  },
  innumberscorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sum of 8 and 3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[68],
    },
  ],
  },
  
  //69
  ['numbers'+shuffledNumbersnseve[68]]: {
  botPrompt: 'What number comes after the quotient of 21 divided by 3?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'innumberscorrectq69',
    },
    {
      answer: '7',
      nextId: 'innumberscorrectq69',
    },
    {
      answer: "8",
      nextId: 'numberscorrectq69',
    },
    {
      answer: "9",
      nextId: 'innumberscorrectq69',
    },
  ],
  },
  
  numberscorrectq69: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[69],
    },
  ],
  },
  innumberscorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[69],
    },
  ],
  },

  
  //70
  ['numbers'+shuffledNumbersnseve[69]]: {
  botPrompt: 'What number comes before the sum of 15 and 7?'?
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['20', '21', "22","23"]),
  answers: [
    {
      answer: '20',
      nextId: 'innumberscorrectq70',
    },
    {
      answer: '21',
      nextId: 'numberscorrectq70',
    },
    {
      answer: "22",
      nextId: 'innumberscorrectq70',
    },
    {
      answer: "23",
      nextId: 'innumberscorrectq70',
    },
  ],
  },

  numberscorrectq70: {
  botPrompt: 'Hurray! <strong>21</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[70],
    },
  ],
  },
  innumberscorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[70],
    },
  ],
  },

  //71
  ['numbers'+shuffledNumbersnseve[70]]: {
  botPrompt: 'What number comes between sqaure of 1 and 3?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '0', "4","6"]),
    answers: [
      {
        answer: '2',
        nextId: 'numberscorrectq71',
      },
      {
        answer: '0',
        nextId: 'innumberscorrectq71',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq71',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq71',
      },
    ],
  },

  numberscorrectq71: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[71],
    },
  ],
  },
  innumberscorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[71],
    },
  ],
  },

  //72
  ['numbers'+shuffledNumbersnseve[71]]: {
  botPrompt: 'What number comes after the difference of 6 and 2?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq72',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq72',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq72',
    },
    {
      answer: "5",
      nextId: 'numberscorrectq72',
    },
  ],
  },

  numberscorrectq72: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[72],
    },
  ],
  },
  innumberscorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[72],
    },
  ],
  },

  //73
  ['numbers'+shuffledNumbersnseve[72]]: {
  botPrompt: 'What number comes before the product of 5 and 6?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['28', '29', "30","31"]),
    answers: [
      {
        answer: '28',
        nextId: 'innumberscorrectq73',
      },
      {
        answer: '29',
        nextId: 'numberscorrectq73',
      },
      {
        answer: "30",
        nextId: 'innumberscorrectq73',
      },
      {
        answer: "31",
        nextId: 'innumberscorrectq73',
      },
    ],
  },

  numberscorrectq73: {
  botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[73],
    },
  ],
  },
  innumberscorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[73],
    },
  ],
  },

  //74
  ['numbers'+shuffledNumbersnseve[73]]: {
  botPrompt: 'What comes after 7?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['8', '9', "10","11"]),
  answers: [
    {
      answer: '8',
      nextId: 'numberscorrectq74',
    },
    {
      answer: '9',
      nextId: 'innumberscorrectq74',
    },
    {
      answer: "10",
      nextId: 'innumberscorrectq74',
    },
    {
      answer: "11",
      nextId: 'innumberscorrectq74',
    },
  ],
  },

  numberscorrectq74: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[74],
    },
  ],
  },
  innumberscorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[74],
    },
  ],
  },


  //75
  ['numbers'+shuffledNumbersnseve[74]]: {
  botPrompt: 'Which number comes after twelve?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['13', '14', "15","16"]),
    answers: [
      {
        answer: '13',
        nextId: 'numberscorrectq75',
      },
      {
        answer: '14',
        nextId: 'innumberscorrectq75',
      },
      {
        answer: "15",
        nextId: 'innumberscorrectq75',
      },
      {
        answer: "16",
        nextId: 'innumberscorrectq75',
      },
    ],
  },

  numberscorrectq75: {
  botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[75],
    },
  ],
  },
  innumberscorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[75],
    },
  ],
  },

  //76
  ['numbers'+shuffledNumbersnseve[75]]: {
    botPrompt: 'Which number comes after twelve?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['13', '14', "15","16"]),
    answers: [
      {
        answer: '13',
        nextId: 'numberscorrectq76',
      },
      {
        answer: '14',
        nextId: 'innumberscorrectq76',
      },
      {
        answer: "15",
        nextId: 'innumberscorrectq76',
      },
      {
        answer: "16",
        nextId: 'innumberscorrectq76',
      },
    ],
  },
  numberscorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>13</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[76],
      },
    ],
  },
  innumberscorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[76],
      },
    ],
  },

  //77
  ['numbers'+shuffledNumbersnseve[76]]: {
  botPrompt: 'What comes before 5?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['4', '6', "7","8"]),
    answers: [
      {
        answer: '4',
        nextId: 'numberscorrectq77',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq77',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq77',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq77',
      },
    ],
  },
  numberscorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  innumberscorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },



  //78
  ['numbers'+shuffledNumbersnseve[77]]: {
    botPrompt: 'Which number comes between 6 and 8? ',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['5', '7', "9","10"]),
      answers: [
        {
          answer: '5',
          nextId: 'innumberscorrectq78',
        },
        {
          answer: '7',
          nextId: 'numberscorrectq78',
        },
        {
          answer: "9",
          nextId: 'innumberscorrectq78',
        },
        {
          answer: "10",
          nextId: 'innumberscorrectq78',
        },
      ],
    },
    
    numberscorrectq78: {
    botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[78],
      },
    ],
    },
    innumberscorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[78],
      },
    ],
    },
    
    //79
    ['numbers'+shuffledNumbersnseve[78]]: {
    botPrompt: 'What is the next number in the pattern: 10, 9, 8, ____?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '6', "5","4"]),
      answers: [
        {
          answer: '7',
          nextId: 'numberscorrectq79',
        },
        {
          answer: '6',
          nextId: 'innumberscorrectq79',
        },
        {
          answer: "5",
          nextId: 'innumberscorrectq79',
        },
        {
          answer: "4",
          nextId: 'innumberscorrectq79',
        },
      ],
    },
    
    numberscorrectq79: {
    botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[79],
      },
    ],
    },
    innumberscorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[79],
      },
    ],
    },
    
    
    //80
    ['numbers'+shuffledNumbersnseve[79]]: {
    botPrompt: 'How many fingers do you have on one hand?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['4', '5', "6","7"]),
      answers: [
        {
          answer: '4',
          nextId: 'innumberscorrectq80',
        },
        {
          answer: '5',
          nextId: 'numberscorrectq80',
        },
        {
          answer: "6",
          nextId: 'innumberscorrectq80',
        },
        {
          answer: "7",
          nextId: 'innumberscorrectq80',
        },
      ],
    },
    
    numberscorrectq80: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[80],
      },
    ],
    },
    innumberscorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[80],
      },
    ],
    },
    
    //81
    ['numbers'+shuffledNumbersnseve[80]]: {
    botPrompt: 'Which number comes after 20?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['21', '22', "23","24"]),
      answers: [
        {
          answer: '21',
          nextId: 'numberscorrectq51',
        },
        {
          answer: '22',
          nextId: 'innumberscorrectq51',
        },
        {
          answer: "23",
          nextId: 'innumberscorrectq51',
        },
        {
          answer: "24",
          nextId: 'innumberscorrectq51',
        },
      ],
    },
    
    numberscorrectq51: {
    botPrompt: 'Hurray! <strong>21</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[51],
      },
    ],
    },
    innumberscorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[51],
      },
    ],
    },
    
    //82
    ['numbers'+shuffledNumbersnseve[81]]: {
    botPrompt: 'What comes after 15?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['16', '17', "18","19"]),
      answers: [
        {
          answer: '16',
          nextId: 'numberscorrectq82',
        },
        {
          answer: '17',
          nextId: 'innumberscorrectq82',
        },
        {
          answer: "18",
          nextId: 'innumberscorrectq82',
        },
        {
          answer: "19",
          nextId: 'innumberscorrectq82',
        },
      ],
    },
    
    numberscorrectq82: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[82],
      },
    ],
    },
    innumberscorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[82],
      },
    ],
    },
    
    //83
    ['numbers'+shuffledNumbersnseve[82]]: {
    botPrompt: 'What is the number that comes between 12 and 14?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['11', '13', "15","16"]),
      answers: [
        {
          answer: '11',
          nextId: 'innumberscorrectq83',
        },
        {
          answer: '13',
          nextId: 'numberscorrectq83',
        },
        {
          answer: "15",
          nextId: 'innumberscorrectq83',
        },
        {
          answer: "16",
          nextId: 'innumberscorrectq83',
        },
      ],
    },
  
    numberscorrectq83: {
    botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[83],
      },
    ],
    },
    innumberscorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[83],
      },
    ],
    },
    
    //84
    ['numbers'+shuffledNumbersnseve[83]]: {
    botPrompt: 'What is the missing number in the pattern: 3, 6, ___, 12?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['9', '10', "11","13"]),
      answers: [
        {
          answer: '9',
          nextId: 'numberscorrectq84',
        },
        {
          answer: '10',
          nextId: 'innumberscorrectq84',
        },
        {
          answer: "11",
          nextId: 'innumberscorrectq84',
        },
        {
          answer: "13",
          nextId: 'innumberscorrectq84',
        },
      ],
    },
    
    numberscorrectq84: {
    botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[84],
      },
    ],
    },
    innumberscorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[84],
      },
    ],
    },
    
    
    //85
    ['numbers'+shuffledNumbersnseve[84]]: {
    botPrompt: 'Which number comes before 9?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '8', "10","11"]),
      answers: [
        {
          answer: '7',
          nextId: 'innumberscorrectq85',
        },
        {
          answer: '8',
          nextId: 'numberscorrectq85',
        },
        {
          answer: "10",
          nextId: 'innumberscorrectq85',
        },
        {
          answer: "11",
          nextId: 'innumberscorrectq85',
        },
      ],
    },
    
    numberscorrectq85: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[85],
      },
    ],
    },
    innumberscorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[85],
      },
    ],
    },
    
    //86
    ['numbers'+shuffledNumbersnseve[85]]: {
      botPrompt: 'How many legs does a cat have??',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['2', '3', "4","5"]),
      answers: [
        {
          answer: '2',
          nextId: 'innumberscorrectq86',
        },
        {
          answer: '3',
          nextId: 'innumberscorrectq86',
        },
        {
          answer: "4",
          nextId: 'numberscorrectq86',
        },
        {
          answer: "5",
          nextId: 'innumberscorrectq86',
        },
      ],
    },
    numberscorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[86],
        },
      ],
    },
    innumberscorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[86],
        },
      ],
    },
  
    //87
    ['numbers'+shuffledNumbersnseve[86]]: {
    botPrompt: 'What comes after 12?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['13', '14', "15","16"]),
      answers: [
        {
          answer: '13',
          nextId: 'numberscorrectq87',
        },
        {
          answer: '14',
          nextId: 'innumberscorrectq87',
        },
        {
          answer: "15",
          nextId: 'innumberscorrectq87',
        },
        {
          answer: "16",
          nextId: 'innumberscorrectq87',
        },
      ],
    },
    numberscorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>13</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[87],
      },
    ],
    },
    innumberscorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[87],
      },
    ],
    },
    
    //88
    ['numbers'+shuffledNumbersnseve[87]]: {
    botPrompt: 'Which number comes after nineteen?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['18', '20', "21","22"]),
    answers: [
      {
        answer: '18',
        nextId: 'innumberscorrectq88',
      },
      {
        answer: '20',
        nextId: 'numberscorrectq88',
      },
      {
        answer: "21",
        nextId: 'innumberscorrectq88',
      },
      {
        answer: "22",
        nextId: 'innumberscorrectq88',
      },
    ],
    },
    numberscorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>20</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[88],
      },
    ],
    },
    innumberscorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[88],
      },
    ],
    },
    
    //89
    ['numbers'+shuffledNumbersnseve[88]]: {
    botPrompt: 'What is the number that comes between 15 and 17?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['14', '16', "18","20"]),
      answers: [
        {
          answer: '14',
          nextId: 'innumberscorrectq87',
        },
        {
          answer: '16',
          nextId: 'numberscorrectq87',
        },
        {
          answer: "18",
          nextId: 'innumberscorrectq87',
        },
        {
          answer: "20",
          nextId: 'innumberscorrectq87',
        },
      ],
    },
    numberscorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>16</strong> Answers! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[89],
      },
    ],
    },
    innumberscorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[89],
      },
    ],
    },
    
    //90
    ['numbers'+shuffledNumbersnseve[89]]: {
    botPrompt: 'Which number comes before 25?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['23', '24', "25","26"]),
    answers: [
      {
        answer: '23',
        nextId: 'innumberscorrectq90',
      },
      {
        answer: '24',
        nextId: 'numberscorrectq90',
      },
      {
        answer: "25",
        nextId: 'innumberscorrectq90',
      },
      {
        answer: "26",
        nextId: 'innumberscorrectq90',
      },
    ],
    },
    numberscorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>24</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[90],
      },
    ],
    },
    innumberscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[90],
      },
    ],
    },
    
    //91
    ["numbers"+shuffledNumbersnseve[90]]: {
      botPrompt: 'What is the number that comes between 10 and 12?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['8', '9', "11","13"]),
      answers: [
        {
          answer: '8',
          nextId: 'innumberscorrectq91',
        },
        {
          answer: '9',
          nextId: 'innumberscorrectq91',
        },
        {
          answer: "11",
          nextId: 'numberscorrectq91',
        },
        {
          answer: "13",
          nextId: 'innumberscorrectq91',
        },
      ],
    },
    numberscorrectq91: {
      botPrompt: 'Hurray <strong>11</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[91],
        },
      ],
    },
    innumberscorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[91],
        },
      ],
    },
    
    //92
    ['numbers'+shuffledNumbersnseve[91]]: {
      botPrompt: 'Which number comes before 50?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['47', '48', "49","51"]),
      answers: [
        {
          answer: '47',
          nextId: 'innumberscorrectq92',
        },
        {
          answer: '48',
          nextId: 'innumberscorrectq92',
        },
        {
          answer: "49",
          nextId: 'numberscorrectq92',
        },
        {
          answer: "51",
          nextId: 'innumberscorrectq92',
        },
      ],
    },
    
    numberscorrectq92: {
      botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[92],
        },
      ],
    },
    innumberscorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[92],
        },
      ],
    },
    
    //93
    ['numbers'+shuffledNumbersnseve[92]]: {
    botPrompt: "What comes after 28?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['26', '27', "29","30"]),
      answers: [
        {
          answer: '26',
          nextId: 'innumberscorrectq93',
        },
        {
          answer: '27',
          nextId: 'innumberscorrectq93',
        },
        {
          answer: "29",
          nextId: 'numberscorrectq93',
        },
        {
          answer: "30",
          nextId: 'innumberscorrectq93',
        },
      ],
    },
    
    numberscorrectq93: {
    botPrompt: 'Hurray! <strong>29</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[93],
      },
    ],
    },
    innumberscorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[93],
      },
    ],
    },
  
    //94
    ['numbers'+shuffledNumbersnseve[93]]: {
    botPrompt: 'Which number comes after 7?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['5', '6', "8","9"]),
    answers: [
      {
        answer: '5',
        nextId: 'innumberscorrectq94',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq94',
      },
      {
        answer: "8",
        nextId: 'numberscorrectq94',
      },
      {
        answer: "9",
        nextId: 'innumberscorrectq94',
      },
    ],
    },
    
    numberscorrectq94: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[94],
      },
    ],
    },
    innumberscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[94],
      },
    ],
    },
    
    //95
    ['numbers'+shuffledNumbersnseve[94]]: {
    botPrompt: 'What is the number that comes between 23 and 25?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['21', '22', "24","26"]),
      answers: [
        {
          answer: '21',
          nextId: 'innumberscorrectq95',
        },
        {
          answer: '22',
          nextId: 'innumberscorrectq95',
        },
        {
          answer: "24",
          nextId: 'numberscorrectq95',
        },
        {
          answer: "26",
          nextId: 'innumberscorrectq95',
        },
      ],
    },
    
    numberscorrectq95: {
    botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[95],
      },
    ],
    },
    innumberscorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[95],
      },
    ],
    },
    
    //96
    ['numbers'+shuffledNumbersnseve[95]]: {
    botPrompt: 'Which number comes before 30?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['28', '29', "30","31"]),
    answers: [
      {
        answer: '28',
        nextId: 'innumberscorrectq96',
      },
      {
        answer: '29',
        nextId: 'numberscorrectq96',
      },
      {
        answer: "30",
        nextId: 'innumberscorrectq96',
      },
      {
        answer: "31",
        nextId: 'innumberscorrectq96',
      },
    ],
    },
    
    numberscorrectq96: {
    botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[96],
      },
    ],
    },
    innumberscorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[96],
      },
    ],
    },

    //97
    ['numbers'+shuffledNumbersnseve[96]]: {
    botPrompt: 'What comes after 19?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['20', '21', "22","23"]),
    answers: [
      {
        answer: '20',
        nextId: 'numberscorrectq97',
      },
      {
        answer: '21',
        nextId: 'innumberscorrectq97',
      },
      {
        answer: "22",
        nextId: 'innumberscorrectq97',
      },
      {
        answer: "23",
        nextId: 'innumberscorrectq97',
      },
    ],
    },

    numberscorrectq97: {
    botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishToContinue11'
      },
    ],
    },
    innumberscorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
    answers: [
      {
        nextId: 'wishToContinue11'
      }
    ],
    },


  //endnumbersletter
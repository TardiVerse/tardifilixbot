
day27: {
    botPrompt: '<strong> Day 27 : </strong> The concept of Ones-Tens-Hundreds is fundamental to the decimal system.',
    answers: [
            { nextId: 'day27link' },
    ],
  },

  day27link: {
    botPrompt: 'https://youtu.be/cmbHRrERNbg',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day273comment',
      },
    ],
  },

  day273comment: {
    botPrompt: 'Let’s look into the pages of the book',
    answers: [
            { nextId: 'day273link' },
    ],
  },
  day273link: {
    botPrompt: 'https://drive.google.com/file/d/1qAYGEXTHC5Plk-pslthp8liGEBWWYQmV/view?usp=share_link',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[0] ,
      },
    ],
  },

//onceTensHundreds


["onceTensHundreds"+shuffledNumbersto[0]]: {
    botPrompt: 'What is the number at units place in 76?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'onceTensHundredscorrect',
      },
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrect',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrect',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrect',
      },
    ],
  },
  onceTensHundredscorrect: {
    botPrompt: 'Hurray <strong>6</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[1],
      },
    ],
  },
  inonceTensHundredscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['onceTensHundreds'+shuffledNumbersto[1]]: {
    botPrompt: 'What is the number at tens place in 58?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['4', '5', "6","8"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTensHundredscorrectq2',
      },
      {
        answer: '5',
        nextId: 'onceTensHundredscorrectq2',
      },
      {
        answer: "6",
        nextId: 'inonceTensHundredscorrectq2',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq2',
      },
    ],
  },
  
  onceTensHundredscorrectq2: {
    botPrompt: 'Hurray! <strong>58</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[2],
      },
    ],
  },
  inonceTensHundredscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['onceTensHundreds'+shuffledNumbersto[2]]: {
  botPrompt: "What is the number at units place in 234?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq3',
      },
      {
        answer: '3',
        nextId: 'inonceTensHundredscorrectq3',
      },
      {
        answer: "4",
        nextId: 'onceTensHundredscorrectq3',
      },
      {
        answer: "5",
        nextId: 'inonceTensHundredscorrectq3',
      },
    ],
  },
  
  onceTensHundredscorrectq3: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[3],
    },
  ],
  },
  inonceTensHundredscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['onceTensHundreds'+shuffledNumbersto[3]]: {
  botPrompt: 'What is the number at tens place in 456?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTensHundredscorrectq4',
      },
      {
        answer: '5',
        nextId: 'onceTensHundredscorrectq4',
      },
      {
        answer: "6",
        nextId: 'inonceTensHundredscorrectq4',
      },
      {
        answer: "7",
        nextId: 'inonceTensHundredscorrectq4',
      },
    ],
  },
  
  onceTensHundredscorrectq4: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[4],
    },
  ],
  },
  inonceTensHundredscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['onceTensHundreds'+shuffledNumbersto[4]]: {
  botPrompt: 'What is the number at hundreds place in 789?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '8', "9","1"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq5',
      },
      {
        answer: '8',
        nextId: 'inonceTensHundredscorrectq5',
      },
      {
        answer: "9",
        nextId: 'onceTensHundredscorrectq5',
      },
      {
        answer: "1",
        nextId: 'inonceTensHundredscorrectq5',
      },
    ],
  },
  
  onceTensHundredscorrectq5: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[5],
    },
  ],
  },
  inonceTensHundredscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['onceTensHundreds'+shuffledNumbersto[5]]: {
  botPrompt: 'What is the number at units place in 1523?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'inonceTensHundredscorrectq6',
      },
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq6',
      },
      {
        answer: "3",
        nextId: 'onceTensHundredscorrectq6',
      },
      {
        answer: "5",
        nextId: 'inonceTensHundredscorrectq6',
      },
    ],
  },
  
  onceTensHundredscorrectq6: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[6],
    },
  ],
  },
  inonceTensHundredscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['onceTensHundreds'+shuffledNumbersto[6]]: {
  botPrompt: 'What is the number at tens place in 7896?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '8', "9","6"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq7',
      },
      {
        answer: '8',
        nextId: 'inonceTensHundredscorrectq7',
      },
      {
        answer: "9",
        nextId: 'onceTensHundredscorrectq7',
      },
      {
        answer: "6",
        nextId: 'inonceTensHundredscorrectq7',
      },
    ],
  },
  
  onceTensHundredscorrectq7: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[7],
    },
  ],
  },
  inonceTensHundredscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['onceTensHundreds'+shuffledNumbersto[7]]: {
  botPrompt: 'What is the number at hundreds place in 2345?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq8',
      },
      {
        answer: '3',
        nextId: 'onceTensHundredscorrectq8',
      },
      {
        answer: "4",
        nextId: 'inonceTensHundredscorrectq8',
      },
      {
        answer: "5",
        nextId: 'inonceTensHundredscorrectq8',
      },
    ],
  },
  
  onceTensHundredscorrectq8: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[8],
    },
  ],
  },
  inonceTensHundredscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['onceTensHundreds'+shuffledNumbersto[8]]: {
  botPrompt: 'What is the number at units place in 6789?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTensHundredscorrectq9',
      },
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq9',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq9',
      },
      {
        answer: "9",
        nextId: 'onceTensHundredscorrectq9',
      },
    ],
  },
  
  onceTensHundredscorrectq9: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[9],
    },
  ],
  },
  inonceTensHundredscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['onceTensHundreds'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the number at tens place in 1234?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'inonceTensHundredscorrectq10',
      },
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq10',
      },
      {
        answer: "3",
        nextId: 'onceTensHundredscorrectq10',
      },
      {
        answer: "4",
        nextId: 'inonceTensHundredscorrectq10',
      },
    ],
  
  },
  
  onceTensHundredscorrectq10: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[10],
    },
  ],
  },
  inonceTensHundredscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['onceTensHundreds'+shuffledNumbersto[10]]: {
  botPrompt: 'What is the digit in the tens place in the number 27?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['2', '7', "0","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'onceTensHundredscorrectq11',
      },
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq11',
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq11',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq11',
      },
    ],
  },
  
  onceTensHundredscorrectq11: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[11],
    },
  ],
  },
  inonceTensHundredscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['onceTensHundreds'+shuffledNumbersto[11]]: {
  botPrompt: 'What is the digit in the ones place in the number 42?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '4', "0","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'onceTensHundredscorrectq12',
      },
      {
        answer: '4',
        nextId: 'inonceTensHundredscorrectq12',
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq12',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq12',
      },
    ],
  },
  
  onceTensHundredscorrectq12: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[12],
    },
  ],
  },
  inonceTensHundredscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['onceTensHundreds'+shuffledNumbersto[12]]: {
  botPrompt: 'Which number comes after 63?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['64', '65', "66","67"]),
    answers: [
      {
        answer: '64',
        nextId: 'onceTensHundredscorrectq13',
      },
      {
        answer: '65',
        nextId: 'inonceTensHundredscorrectq13',
      },
      {
        answer: "66",
        nextId: 'inonceTensHundredscorrectq13',
      },
      {
        answer: "67",
        nextId: 'inonceTensHundredscorrectq13',
      },
    ],
  },
  
  onceTensHundredscorrectq13: {
  botPrompt: 'Hurray! <strong>64</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[13],
    },
  ],
  },
  inonceTensHundredscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"64"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['onceTensHundreds'+shuffledNumbersto[13]]: {
  botPrompt: 'Which number comes before 48?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['46', '47', "49","50"]),
    answers: [
      {
        answer: '46',
        nextId: 'inonceTensHundredscorrectq14',
      },
      {
        answer: '47',
        nextId: 'onceTensHundredscorrectq14',
      },
      {
        answer: "49",
        nextId: 'inonceTensHundredscorrectq14',
      },
      {
        answer: "50",
        nextId: 'inonceTensHundredscorrectq14',
      },
    ],
  },
  
  onceTensHundredscorrectq14: {
  botPrompt: 'Hurray! <strong>47</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[14],
    },
  ],
  },
  inonceTensHundredscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['onceTensHundreds'+shuffledNumbersto[14]]: {
  botPrompt: 'Which number comes between 5 and 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '8', "9","10"]),
    answers: [
      {
        answer: '6',
        nextId: 'onceTensHundredscorrectq15',
      },
      {
        answer: '8',
        nextId: 'inonceTensHundredscorrectq15',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq15',
      },
      {
        answer: "10",
        nextId: 'inonceTensHundredscorrectq15',
      },
    ],
  },
  
  onceTensHundredscorrectq15: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[15],
    },
  ],
  },
  inonceTensHundredscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['onceTensHundreds'+shuffledNumbersto[15]]: {
    botPrompt: 'What is the digit in the hundreds place in the number 123?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1', '2', "3","0"]),
    answers: [
      {
        answer: '1',
        nextId: 'onceTensHundredscorrectq16',
      },
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq16',
      },
      {
        answer: "3",
        nextId: 'inonceTensHundredscorrectq16',
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq16',
      },
    ],
  },
  onceTensHundredscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1</strong> 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[16],
      },
    ],
  },
  inonceTensHundredscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['onceTensHundreds'+shuffledNumbersto[16]]: {
  botPrompt: 'Which number comes after 25?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['26', '27', "28","29"]),
    answers: [
      {
        answer: '26',
        nextId: 'onceTensHundredscorrectq17',
      },
      {
        answer: '27',
        nextId: 'inonceTensHundredscorrectq17',
      },
      {
        answer: "28",
        nextId: 'inonceTensHundredscorrectq17',
      },
      {
        answer: "29",
        nextId: 'inonceTensHundredscorrectq17',
      },
    ],
  },
  onceTensHundredscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>26</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[17],
    },
  ],
  },
  inonceTensHundredscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['onceTensHundreds'+shuffledNumbersto[17]]: {
  botPrompt: 'Which number comes before 12?   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['9', '10', "11","13"]),
  answers: [
    {
      answer: '9',
      nextId: 'inonceTensHundredscorrectq18',
    },
    {
      answer: '10',
      nextId: 'inonceTensHundredscorrectq18',
    },
    {
      answer: "11",
      nextId: 'onceTensHundredscorrectq18',
    },
    {
      answer: "13",
      nextId: 'inonceTensHundredscorrectq18',
    },
  ],
  },
  onceTensHundredscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>11</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[18],
    },
  ],
  },
  inonceTensHundredscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['onceTensHundreds'+shuffledNumbersto[18]]: {
  botPrompt: 'What is the value of the digit 3 in the number 345?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['300', '3', "30","3000"]),
  answers: [
    {
      answer: '300',
      nextId: 'onceTensHundredscorrectq19',
    },
    {
      answer: '3',
      nextId: 'inonceTensHundredscorrectq19',
    },
    {
      answer: "30",
      nextId: 'inonceTensHundredscorrectq19',
    },
    {
      answer: "3000",
      nextId: 'inonceTensHundredscorrectq19',
    },
  ],
  },
  onceTensHundredscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>300</strong> Answers! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[19],
    },
  ],
  },
  inonceTensHundredscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"300"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['onceTensHundreds'+shuffledNumbersto[19]]: {
  botPrompt: 'What is the digit in the ones place in the number 86?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['8', '6', "0","2"]),
  answers: [
    {
      answer: '8',
      nextId: 'inonceTensHundredscorrectq20',
    },
    {
      answer: '6',
      nextId: 'onceTensHundredscorrectq20',
    },
    {
      answer: "0",
      nextId: 'inonceTensHundredscorrectq20',
    },
    {
      answer: "2",
      nextId: 'inonceTensHundredscorrectq20',
    },
  ],
  },
  onceTensHundredscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>22</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[20],
    },
  ],
  },
  inonceTensHundredscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["onceTensHundreds"+shuffledNumbersto[20]]: {
    botPrompt: 'Which number comes between 18 and 20?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['17', '19', "21","22"]),
  answers: [
    {
      answer: '17',
      nextId: 'inonceTensHundredscorrectq21',
    },
    {
      answer: '19',
      nextId: 'onceTensHundredscorrectq21',
    },
    {
      answer: "21",
      nextId: 'inonceTensHundredscorrectq21',
    },
    {
      answer: "22",
      nextId: 'inonceTensHundredscorrectq21',
    },
  ],
  },
  onceTensHundredscorrectq21: {
    botPrompt: 'Hurray <strong>19</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[21],
      },
    ],
  },
  inonceTensHundredscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>19</strong> answer is <strong>"23"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['onceTensHundreds'+shuffledNumbersto[21]]: {
    botPrompt: 'What is the digit in the tens place in the number 56?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['5', '6', "0","2"]),
  answers: [
    {
      answer: '5',
      nextId: 'onceTensHundredscorrectq22',
    },
    {
      answer: '6',
      nextId: 'inonceTensHundredscorrectq22',
    },
    {
      answer: "0",
      nextId: 'inonceTensHundredscorrectq22',
    },
    {
      answer: "2",
      nextId: 'inonceTensHundredscorrectq22',
    },
  ],
  },
  
  onceTensHundredscorrectq22: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[22],
      },
    ],
  },
  inonceTensHundredscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['onceTensHundreds'+shuffledNumbersto[22]]: {
  botPrompt: "What is the value of the digit 2 in the number 825?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '20', "200","2000"]),
  answers: [
    {
      answer: '2',
      nextId: 'inonceTensHundredscorrectq23',
    },
    {
      answer: '20',
      nextId: 'onceTensHundredscorrectq23',
    },
    {
      answer: "200",
      nextId: 'inonceTensHundredscorrectq23',
    },
    {
      answer: "2000",
      nextId: 'inonceTensHundredscorrectq23',
    },
  ],
  },
  
  onceTensHundredscorrectq23: {
  botPrompt: 'Hurray! <strong>20</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[23],
    },
  ],
  },
  inonceTensHundredscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['onceTensHundreds'+shuffledNumbersto[23]]: {
  botPrompt: 'What is the digit in the ones place in the number 73?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '3', "0","4"]),
  answers: [
    {
      answer: '7',
      nextId: 'inonceTensHundredscorrectq24',
    },
    {
      answer: '3',
      nextId: 'onceTensHundredscorrectq24',
    },
    {
      answer: "0",
      nextId: 'inonceTensHundredscorrectq24',
    },
    {
      answer: "4",
      nextId: 'inonceTensHundredscorrectq24',
    },
  ],
  },
  
  onceTensHundredscorrectq24: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[24],
    },
  ],
  },
  inonceTensHundredscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['onceTensHundreds'+shuffledNumbersto[24]]: {
  botPrompt: 'What is the number at the units place in 124?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "4","0"]),
  answers: [
    {
      answer: '1',
      nextId: 'inonceTensHundredscorrectq25',
    },
    {
      answer: '2',
      nextId: 'inonceTensHundredscorrectq25',
    },
    {
      answer: "4",
      nextId: 'onceTensHundredscorrectq25',
    },
    {
      answer: "0",
      nextId: 'inonceTensHundredscorrectq25',
    },
  ],
  },
  
  onceTensHundredscorrectq25: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[25],
    },
  ],
  },
  inonceTensHundredscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['onceTensHundreds'+shuffledNumbersto[25]]: {
  botPrompt: 'What is the number at the tens place in 379?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '7', "9","0"]),
  answers: [
    {
      answer: '3',
      nextId: 'inonceTensHundredscorrectq26',
    },
    {
      answer: '7',
      nextId: 'onceTensHundredscorrectq26',
    },
    {
      answer: "9",
      nextId: 'inonceTensHundredscorrectq26',
    },
    {
      answer: "0",
      nextId: 'inonceTensHundredscorrectq26',
    },
  ],
  },
  
  onceTensHundredscorrectq26: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[26],
    },
  ],
  },
  inonceTensHundredscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['onceTensHundreds'+shuffledNumbersto[26]]: {
  botPrompt: 'What is the number at the hundreds place in 548?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '4', "8","0"]),
    answers: [
      {
        answer: '5',
        nextId: 'onceTensHundredscorrectq27',
      },
      {
        answer: '4',
        nextId: 'inonceTensHundredscorrectq27',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq27',
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq27',
      },
    ],
  },
  
  onceTensHundredscorrectq27: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[27],
    },
  ],
  },
  inonceTensHundredscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[27],
    },
  ],
  },
  
  
  //28
  ['onceTensHundreds'+shuffledNumbersto[27]]: {
  botPrompt: 'Which of the following is the sum of digits at the units and tens place in the number 56?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['9', '10', "11","12"]),
  answers: [
    {
      answer: '9',
      nextId: 'inonceTensHundredscorrectq28',
    },
    {
      answer: '10',
      nextId: 'inonceTensHundredscorrectq28',
    },
    {
      answer: "11",
      nextId: 'onceTensHundredscorrectq28',
    },
    {
      answer: "12",
      nextId: 'inonceTensHundredscorrectq28',
    },
  ],
  },
  
  onceTensHundredscorrectq28: {
  botPrompt: 'Hurray! <strong>11</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[28],
    },
  ],
  },
  inonceTensHundredscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['onceTensHundreds'+shuffledNumbersto[28]]: {
  botPrompt: 'What is the sum of digits at the tens and hundreds place in the number 387?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '10', "15","18"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTensHundredscorrectq29',
      },
      {
        answer: '10',
        nextId: 'inonceTensHundredscorrectq29',
      },
      {
        answer: "15",
        nextId: 'onceTensHundredscorrectq29',
      },
      {
        answer: "18",
        nextId: 'inonceTensHundredscorrectq29',
      },
    ],
  },
  
  onceTensHundredscorrectq29: {
  botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[29],
    },
  ],
  },
  inonceTensHundredscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[29],
    },
  ],
  },
  
  
  //30
  ['onceTensHundreds'+shuffledNumbersto[29]]: {
  botPrompt: 'What is the number formed by the digits 5, 2, and 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['285', '582', "258","852"]),
  answers: [
    {
      answer: '285',
      nextId: 'inonceTensHundredscorrectq30',
    },
    {
      answer: '582',
      nextId: 'inonceTensHundredscorrectq30',
    },
    {
      answer: "258",
      nextId: 'onceTensHundredscorrectq30',
    },
    {
      answer: "852",
      nextId: 'inonceTensHundredscorrectq30',
    },
  ],
  },

  onceTensHundredscorrectq30: {
  botPrompt: 'Hurray! <strong>258</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[30],
    },
  ],
  },
  inonceTensHundredscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"258"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[30],
    },
  ],
  },
  
  //31
  ['onceTensHundreds'+shuffledNumbersto[30]]: {
  botPrompt: 'What is the sum of digits at the units place and hundreds place in the number 763?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['7', '9', "10","13"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq31',
      },
      {
        answer: '9',
        nextId: 'inonceTensHundredscorrectq31',
      },
      {
        answer: "10",
        nextId: 'onceTensHundredscorrectq31',
      },
      {
        answer: "13",
        nextId: 'inonceTensHundredscorrectq31',
      },
    ],
  },
  
  onceTensHundredscorrectq31: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[31],
    },
  ],
  },
  inonceTensHundredscorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[31],
    },
  ],
  },
  
  //32
  ['onceTensHundreds'+shuffledNumbersto[31]]: {
  botPrompt: 'What is the number formed by the digits 4, 6, and 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['642', '426', "264","462"]),
  answers: [
    {
      answer: '642',
      nextId: 'inonceTensHundredscorrectq32',
    },
    {
      answer: '426',
      nextId: 'inonceTensHundredscorrectq32',
    },
    {
      answer: "264",
      nextId: 'inonceTensHundredscorrectq32',
    },
    {
      answer: "462",
      nextId: 'onceTensHundredscorrectq32',
    },
  ],
  },
  
  onceTensHundredscorrectq32: {
  botPrompt: 'Hurray! <strong>462</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[32],
    },
  ],
  },
  inonceTensHundredscorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"462"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[32],
    },
  ],
  },
  
  //33
  ['onceTensHundreds'+shuffledNumbersto[32]]: {
  botPrompt: 'Which of the following is the sum of digits at the tens and units place in the number 73?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['5', '10', "11","12"]),
  answers: [
    {
      answer: '5',
      nextId: 'inonceTensHundredscorrectq33',
    },
    {
      answer: '10',
      nextId: 'onceTensHundredscorrectq33',
    },
    {
      answer: "11",
      nextId: 'inonceTensHundredscorrectq33',
    },
    {
      answer: "12",
      nextId: 'inonceTensHundredscorrectq33',
    },
  ],
  },
  
  onceTensHundredscorrectq33: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[33],
    },
  ],
  },
  inonceTensHundredscorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[33],
    },
  ],
  },
  
  //34
  ['onceTensHundreds'+shuffledNumbersto[33]]: {
  botPrompt: 'What is the number formed by the digits 9, 0, and 1?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['109', '901', "190","910"]),
    answers: [
      {
        answer: '109',
        nextId: 'inonceTensHundredscorrectq34',
      },
      {
        answer: '901',
        nextId: 'inonceTensHundredscorrectq34',
      },
      {
        answer: "190",
        nextId: 'onceTensHundredscorrectq34',
      },
      {
        answer: "910",
        nextId: 'inonceTensHundredscorrectq34',
      },
    ],
  },
  
  onceTensHundredscorrectq34: {
  botPrompt: 'Hurray! <strong>190</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[34],
    },
  ],
  },
  inonceTensHundredscorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"190"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[34],
    },
  ],
  },
  
  
  //35
  ['onceTensHundreds'+shuffledNumbersto[34]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 48?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['6', '8', "10","12"]),
  answers: [
    {
      answer: '6',
      nextId: 'inonceTensHundredscorrectq35',
    },
    {
      answer: '8',
      nextId: 'inonceTensHundredscorrectq35',
    },
    {
      answer: "10",
      nextId: 'inonceTensHundredscorrectq35',
    },
    {
      answer: "12",
      nextId: 'onceTensHundredscorrectq35',
    },
  ],
  },
  
  onceTensHundredscorrectq35: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[35],
    },
  ],
  },
  inonceTensHundredscorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[35],
    },
  ],
  },
  
  //36
  ['onceTensHundreds'+shuffledNumbersto[35]]: {
    botPrompt: 'What is the number formed by the digits 6, 3, and 7?',
    type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['367', '376', "736","763"]),
  answers: [
    {
      answer: '367',
      nextId: 'onceTensHundredscorrectq36',
    },
    {
      answer: '376',
      nextId: 'inonceTensHundredscorrectq36',
    },
    {
      answer: "736",
      nextId: 'inonceTensHundredscorrectq36',
    },
    {
      answer: "48",
      nextId: 'inonceTensHundredscorrectq36',
    },
  ],
  },
  onceTensHundredscorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>367</strong> 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[36],
      },
    ],
  },
  inonceTensHundredscorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"367"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[36],
      },
    ],
  },
  
  //37
  ['onceTensHundreds'+shuffledNumbersto[36]]: {
  botPrompt: 'Which of the following is the sum of digits at the hundreds and units place in the number 549?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","14"]),
  answers: [
    {
      answer: '8',
      nextId: 'inonceTensHundredscorrectq37',
    },
    {
      answer: '9',
      nextId: 'onceTensHundredscorrectq37',
    },
    {
      answer: "10",
      nextId: 'inonceTensHundredscorrectq37',
    },
    {
      answer: "14",
      nextId: 'inonceTensHundredscorrectq37',
    },
  ],
  },
  onceTensHundredscorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>9</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[37],
    },
  ],
  },
  inonceTensHundredscorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[37],
    },
  ],
  },
  
  //38
  ['onceTensHundreds'+shuffledNumbersto[37]]: {
  botPrompt: 'What is the largest number formed by the digits 8, 5, and 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['285', '852', "528","582"]),
    answers: [
      {
        answer: '285',
        nextId: 'inonceTensHundredscorrectq38',
      },
      {
        answer: '852',
        nextId: 'onceTensHundredscorrectq38',
      },
      {
        answer: "528",
        nextId: 'inonceTensHundredscorrectq38',
      },
      {
        answer: "582",
        nextId: 'inonceTensHundredscorrectq38',
      },
    ],
  },
  onceTensHundredscorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>852</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[38],
    },
  ],
  },
  inonceTensHundredscorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"852"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[38],
    },
  ],
  },
  
  //39
  ['onceTensHundreds'+shuffledNumbersto[38]]: {
  botPrompt: 'What is the sum of digits at the tens place and units place in the number 37?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['3', '7', "10","13"]),
  answers: [
    {
      answer: '3',
      nextId: 'inonceTensHundredscorrectq310',
    },
    {
      answer: '7',
      nextId: 'inonceTensHundredscorrectq39',
    },
    {
      answer: "10",
      nextId: 'onceTensHundredscorrectq39',
    },
    {
      answer: "13",
      nextId: 'inonceTensHundredscorrectq39',
    },
  ],
  },
  onceTensHundredscorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>10</strong> Answers! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[39],
    },
  ],
  },
  inonceTensHundredscorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[39],
    },
  ],
  },
  
  //40
  ['onceTensHundreds'+shuffledNumbersto[39]]: {
  botPrompt: 'What is the number at the units place in the number 43?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['3', '4', "5","32"]),
    answers: [
      {
        answer: '3',
        nextId: 'onceTensHundredscorrectq40',
      },
      {
        answer: '4',
        nextId: 'inonceTensHundredscorrectq40',
      },
      {
        answer: "5",
        nextId: 'inonceTensHundredscorrectq40',
      },
      {
        answer: "6",
        nextId: 'inonceTensHundredscorrectq40',
      },
    ],
  },
  onceTensHundredscorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[40],
    },
  ],
  },
  inonceTensHundredscorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[40],
    },
  ],
  },
  
  //41
  ["onceTensHundreds"+shuffledNumbersto[40]]: {
    botPrompt: 'What is the number at the tens place in the number 65?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTensHundredscorrectq41',
      },
      {
        answer: '5',
        nextId: 'onceTensHundredscorrectq41',
      },
      {
        answer: "6",
        nextId: 'inonceTensHundredscorrectq41',
      },
      {
        answer: "7",
        nextId: 'inonceTensHundredscorrectq41',
      },
    ],
  },
  onceTensHundredscorrectq41: {
    botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[41],
      },
    ],
  },
  inonceTensHundredscorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[41],
      },
    ],
  },
  
  //42
  
  ['onceTensHundreds'+shuffledNumbersto[41]]: {
    botPrompt: 'What is the sum of digits at the units place and tens place in the number 28?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTensHundredscorrectq42',
      },
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq42',
      },
      {
        answer: "8",
        nextId: 'onceTensHundredscorrectq42',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq42',
      },
    ],
  },
  
  onceTensHundredscorrectq42: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[42],
      },
    ],
  },
  inonceTensHundredscorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[42],
      },
    ],
  },
  
  //43
  ['onceTensHundreds'+shuffledNumbersto[42]]: {
  botPrompt: "What is the number at the units place in the number 91?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['0', '1', "2","3"]),
    answers: [
      {
        answer: '0',
        nextId: 'inonceTensHundredscorrectq43',
      },
      {
        answer: '1',
        nextId: 'onceTensHundredscorrectq43',
      },
      {
        answer: "2",
        nextId: 'inonceTensHundredscorrectq43',
      },
      {
        answer: "3",
        nextId: 'inonceTensHundredscorrectq43',
      },
    ],
  },
  
  onceTensHundredscorrectq43: {
  botPrompt: 'Hurray! <strong>1</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[43],
    },
  ],
  },
  inonceTensHundredscorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[43],
    },
  ],
  },
  
  //44
  ['onceTensHundreds'+shuffledNumbersto[43]]: {
  botPrompt: 'What is the number at the tens place in the number 25?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '5', "8","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'onceTensHundredscorrectq44',
      },
      {
        answer: '5',
        nextId: 'inonceTensHundredscorrectq44',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq44',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq44',
      },
    ],
  },
  
  onceTensHundredscorrectq44: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[44],
    },
  ],
  },
  inonceTensHundredscorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[44],
    },
  ],
  },
  
  //45
  ['onceTensHundreds'+shuffledNumbersto[44]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 57?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '12', "13","14"]),
    answers: [
      {
        answer: '11',
        nextId: 'inonceTensHundredscorrectq45',
      },
      {
        answer: '12',
        nextId: 'onceTensHundredscorrectq45',
      },
      {
        answer: "13",
        nextId: 'inonceTensHundredscorrectq45',
      },
      {
        answer: "14",
        nextId: 'inonceTensHundredscorrectq45',
      },
    ],
  },
  
  onceTensHundredscorrectq45: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[45],
    },
  ],
  },
  inonceTensHundredscorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[45],
    },
  ],
  },
  
  //46
  ['onceTensHundreds'+shuffledNumbersto[45]]: {
  botPrompt: 'What is the number at the units place in the number 76?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '6', "7","8"]),
    answers: [
      {
        answer: '5',
        nextId: 'inonceTensHundredscorrectq46',
      },
      {
        answer: '6',
        nextId: 'onceTensHundredscorrectq46',
      },
      {
        answer: "7",
        nextId: 'inonceTensHundredscorrectq46',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq46',
      },
    ],
  },
  
  onceTensHundredscorrectq46: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[46],
    },
  ],
  },
  inonceTensHundredscorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[46],
    },
  ],
  },
  
  //47
  ['onceTensHundreds'+shuffledNumbersto[46]]: {
  botPrompt: 'What is the number at the tens place in the number 38?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '5', "8","9"]),
    answers: [
      {
        answer: '3',
        nextId: 'onceTensHundredscorrectq47',
      },
      {
        answer: '5',
        nextId: 'inonceTensHundredscorrectq47',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq47',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq47',
      },
    ],
  },
  
  onceTensHundredscorrectq47: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[47],
    },
  ],
  },
  inonceTensHundredscorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[47],
    },
  ],
  },


  //48
  ['onceTensHundreds'+shuffledNumbersto[47]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 39?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['9', '11', "13","15"]),
    answers: [
      {
        answer: '9',
        nextId: 'onceTensHundredscorrectq48',
      },
      {
        answer: '11',
        nextId: 'inonceTensHundredscorrectq48',
      },
      {
        answer: "13",
        nextId: 'inonceTensHundredscorrectq48',
      },
      {
        answer: "15",
        nextId: 'inonceTensHundredscorrectq48',
      },
    ],
  },
  
  onceTensHundredscorrectq48: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[48],
    },
  ],
  },
  inonceTensHundredscorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[48],
    },
  ],
  },
  
  //49
  ['onceTensHundreds'+shuffledNumbersto[48]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 39?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '11', "13","15"]),
    answers: [
      {
        answer: '9',
        nextId: 'onceTensHundredscorrectq49',
      },
      {
        answer: '11',
        nextId: 'inonceTensHundredscorrectq49',
      },
      {
        answer: "13",
        nextId: 'inonceTensHundredscorrectq49',
      },
      {
        answer: "15",
        nextId: 'inonceTensHundredscorrectq49',
      },
    ],
  },
  
  onceTensHundredscorrectq49: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[49],
    },
  ],
  },
  inonceTensHundredscorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[49],
    },
  ],
  },
  
  
  //50
  ['onceTensHundreds'+shuffledNumbersto[49]]: {
  botPrompt: 'What is the number at the units place in the number 52?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '5', "7","9"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq50',
      },
      {
        answer: '5',
        nextId: 'onceTensHundredscorrectq50',
      },
      {
        answer: "7",
        nextId: 'inonceTensHundredscorrectq50',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq50',
      },
    ],
  },
  
  onceTensHundredscorrectq50: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[50],
    },
  ],
  },
  inonceTensHundredscorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[50],
    },
  ],
  },
  
  //51
  ['onceTensHundreds'+shuffledNumbersto[50]]: {
  botPrompt: 'What is the number at the tens place in the number 74?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '6', "7","9"]),
    answers: [
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq51',
      },
      {
        answer: '6',
        nextId: 'inonceTensHundredscorrectq51',
      },
      {
        answer: "7",
        nextId: 'onceTensHundredscorrectq51',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq51',
      },
    ],
  },
  
  onceTensHundredscorrectq51: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[51],
    },
  ],
  },
  inonceTensHundredscorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[51],
    },
  ],
  },
  
  //52
  ['onceTensHundreds'+shuffledNumbersto[51]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 43?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['7', '8', "9","10"]),
    answers: [
      {
        answer: '7',
        nextId: 'onceTensHundredscorrectq52',
      },
      {
        answer: '8',
        nextId: 'inonceTensHundredscorrectq52',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq52',
      },
      {
        answer: "10",
        nextId: 'inonceTensHundredscorrectq52',
      },
    ],
  },
  
  onceTensHundredscorrectq52: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[52],
    },
  ],
  },
  inonceTensHundredscorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[52],
    },
  ],
  },
  
  //53
  ['onceTensHundreds'+shuffledNumbersto[52]]: {
  botPrompt: 'What is the number at the units place in the number 85?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '5', "8","9"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTensHundredscorrectq53',
      },
      {
        answer: '5',
        nextId: 'onceTensHundredscorrectq53',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq53',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq53',
      },
    ],
  },

  onceTensHundredscorrectq53: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[53],
    },
  ],
  },
  inonceTensHundredscorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[53],
    },
  ],
  },
  
  //54
  ['onceTensHundreds'+shuffledNumbersto[53]]: {
  botPrompt: 'What is the number at the tens place in the number 36?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['2', '3', "6","8"]),
    answers: [
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq54',
      },
      {
        answer: '3',
        nextId: 'onceTensHundredscorrectq54',
      },
      {
        answer: "6",
        nextId: 'inonceTensHundredscorrectq54',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq54',
      },
    ],
  },
  
  onceTensHundredscorrectq54: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[54],
    },
  ],
  },
  inonceTensHundredscorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[54],
    },
  ],
  },
  
  
  //55
  ['onceTensHundreds'+shuffledNumbersto[54]]: {
  botPrompt: 'What is the sum of digits at the units place and tens place in the number 61?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTensHundredscorrectq55',
      },
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq55',
      },
      {
        answer: "8",
        nextId: 'onceTensHundredscorrectq55',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq55',
      },
    ],
  },
  
  onceTensHundredscorrectq55: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[55],
    },
  ],
  },
  inonceTensHundredscorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[55],
    },
  ],
  },
  
  //56
  ['onceTensHundreds'+shuffledNumbersto[55]]: {
    botPrompt: 'What is the value of the digit in the units place in the number 537?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '5', "7","9"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTensHundredscorrectq56',
      },
      {
        answer: '5',
        nextId: 'inonceTensHundredscorrectq56',
      },
      {
        answer: "7",
        nextId: 'onceTensHundredscorrectq56',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq56',
      },
    ],
  },
  onceTensHundredscorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>7</strong> 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[56],
      },
    ],
  },
  inonceTensHundredscorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[56],
      },
    ],
  },

  //57
  ['onceTensHundreds'+shuffledNumbersto[56]]: {
  botPrompt: 'What is the value of the digit in the tens place in the number 864?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '6', "8","3"]),
    answers: [
      {
        answer: '4',
        nextId: 'inonceTensHundredscorrectq57',
      },
      {
        answer: '6',
        nextId: 'onceTensHundredscorrectq57',
      },
      {
        answer: "8",
        nextId: 'inonceTensHundredscorrectq57',
      },
      {
        answer: "3",
        nextId: 'inonceTensHundredscorrectq57',
      },
    ],
  },
  onceTensHundredscorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[57],
    },
  ],
  },
  inonceTensHundredscorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[57],
    },
  ],
  },
  
  //58
  ['onceTensHundreds'+shuffledNumbersto[57]]: {
  botPrompt: 'What number can be formed by using the digits 2 and 7 at units and tens place respectively?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['72', '27', "52","25"]),
  answers: [
    {
      answer: '72',
      nextId: 'inonceTensHundredscorrectq58',
    },
    {
      answer: '27',
      nextId: 'onceTensHundredscorrectq58',
    },
    {
      answer: "52",
      nextId: 'inonceTensHundredscorrectq58',
    },
    {
      answer: "25",
      nextId: 'inonceTensHundredscorrectq58',
    },
  ],
  },
  onceTensHundredscorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>27</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[58],
    },
  ],
  },
  inonceTensHundredscorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[58],
    },
  ],
  },
  
  //59
  ['onceTensHundreds'+shuffledNumbersto[58]]: {
  botPrompt: 'What is the sum of the digits at units and tens place in the number 458?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['12', '13', "14","9"]),
    answers: [
      {
        answer: '12',
        nextId: 'onceTensHundredscorrectq57',
      },
      {
        answer: '13',
        nextId: 'inonceTensHundredscorrectq57',
      },
      {
        answer: "11",
        nextId: 'inonceTensHundredscorrectq57',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq57',
      },
    ],
  },
  onceTensHundredscorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>12</strong> Answers! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[59],
    },
  ],
  },
  inonceTensHundredscorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[59],
    },
  ],
  },
  
  //60
  ['onceTensHundreds'+shuffledNumbersto[59]]: {
  botPrompt: 'What is the largest possible number that can be formed using the digits 5 and 8 at units place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['85', '58', "95","59"]),
  answers: [
    {
      answer: '85',
      nextId: 'inonceTensHundredscorrectq60',
    },
    {
      answer: '58',
      nextId: 'onceTensHundredscorrectq60',
    },
    {
      answer: "95",
      nextId: 'inonceTensHundredscorrectq60',
    },
    {
      answer: "59",
      nextId: 'inonceTensHundredscorrectq60',
    },
  ],
  },
  onceTensHundredscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>58</strong> 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[60],
    },
  ],
  },
  inonceTensHundredscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[60],
    },
  ],
  },
  
  //61
  ["onceTensHundreds"+shuffledNumbersto[60]]: {
    botPrompt: 'What is the smallest possible number that can be formed using the digits 2 and 6 at tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['26', '62', "20","6"]),
    answers: [
      {
        answer: '26',
        nextId: 'onceTensHundredscorrectq61',
      },
      {
        answer: '62',
        nextId: 'inonceTensHundredscorrectq61',
      },
      {
        answer: "20",
        nextId: 'inonceTensHundredscorrectq61',
      },
      {
        answer: "6",
        nextId: 'inonceTensHundredscorrectq61',
      },
    ],
  },
  onceTensHundredscorrectq61: {
    botPrompt: 'Hurray <strong>26</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[61],
      },
    ],
  },
  inonceTensHundredscorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[61],
      },
    ],
  },
  
  //62
  ['onceTensHundreds'+shuffledNumbersto[61]]: {
    botPrompt: 'What is the sum of the digits at units and tens place in the number 973?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['10', '18', "19","16"]),
    answers: [
      {
        answer: '10',
        nextId: 'inonceTensHundredscorrectq62',
      },
      {
        answer: '18',
        nextId: 'inonceTensHundredscorrectq62',
      },
      {
        answer: "19",
        nextId: 'inonceTensHundredscorrectq62',
      },
      {
        answer: "16",
        nextId: 'onceTensHundredscorrectq62',
      },
    ],
  },
  
  onceTensHundredscorrectq62: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[62],
      },
    ],
  },
  inonceTensHundredscorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[62],
      },
    ],
  },
  
  //63
  ['onceTensHundreds'+shuffledNumbersto[62]]: {
  botPrompt: "What is the value of the digit in the units place in the number 674?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '6', "4","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTensHundredscorrectq63',
      },
      {
        answer: '6',
        nextId: 'inonceTensHundredscorrectq63',
      },
      {
        answer: "4",
        nextId: 'onceTensHundredscorrectq63',
      },
      {
        answer: "7",
        nextId: 'inonceTensHundredscorrectq63',
      },
    ],
  },
  
  onceTensHundredscorrectq63: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[63],
    },
  ],
  },
  inonceTensHundredscorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[63],
    },
  ],
  },

  //64
  ['onceTensHundreds'+shuffledNumbersto[63]]: {
  botPrompt: 'What is the value of the digit in the tens place in the number 157?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '5', "7","9"]),
  answers: [
    {
      answer: '1',
      nextId: 'inonceTensHundredscorrectq64',
    },
    {
      answer: '5',
      nextId: 'onceTensHundredscorrectq64',
    },
    {
      answer: "7",
      nextId: 'inonceTensHundredscorrectq64',
    },
    {
      answer: "9",
      nextId: 'inonceTensHundredscorrectq64',
    },
  ],
  },
  
  onceTensHundredscorrectq64: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[64],
    },
  ],
  },
  inonceTensHundredscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[64],
    },
  ],
  },
  
  //65
  ['onceTensHundreds'+shuffledNumbersto[64]]: {
  botPrompt: 'What number can be formed by using the digits 3 and 6 at units and tens place respectively?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['36', '63', "32","23"]),
    answers: [
      {
        answer: '36',
        nextId: 'inonceTensHundredscorrectq65',
      },
      {
        answer: '63',
        nextId: 'onceTensHundredscorrectq65',
      },
      {
        answer: "32",
        nextId: 'inonceTensHundredscorrectq65',
      },
      {
        answer: "23",
        nextId: 'inonceTensHundredscorrectq65',
      },
    ],
  },
  
  onceTensHundredscorrectq65: {
  botPrompt: 'Hurray! <strong>63</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[65],
    },
  ],
  },
  inonceTensHundredscorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"63"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[65],
    },
  ],
  },
  
  //66
  ['onceTensHundreds'+shuffledNumbersto[65]]: {
  botPrompt: 'What is the sum of the digits at units and tens place in the number 538?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '16', "13","14"]),
  answers: [
    {
      answer: '11',
      nextId: 'onceTensHundredscorrectq66',
    },
    {
      answer: '16',
      nextId: 'inonceTensHundredscorrectq66',
    },
    {
      answer: "13",
      nextId: 'inonceTensHundredscorrectq66',
    },
    {
      answer: "14",
      nextId: 'inonceTensHundredscorrectq66',
    },
  ],
  },
  
  onceTensHundredscorrectq66: {
  botPrompt: 'Hurray! <strong>11</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[66],
    },
  ],
  },
  inonceTensHundredscorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[66],
    },
  ],
  },
  
  //67
  ['onceTensHundreds'+shuffledNumbersto[66]]: {
  botPrompt: 'What is the number with 4 in the units place and 6 in the tens place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['46', '64', "56","54"]),
  answers: [
    {
      answer: '46',
      nextId: 'onceTensHundredscorrectq67',
    },
    {
      answer: '64',
      nextId: 'inonceTensHundredscorrectq67',
    },
    {
      answer: "56",
      nextId: 'inonceTensHundredscorrectq67',
    },
    {
      answer: "54",
      nextId: 'inonceTensHundredscorrectq67',
    },
  ],
  },
  
  onceTensHundredscorrectq67: {
  botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[67],
    },
  ],
  },
  inonceTensHundredscorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[67],
    },
  ],
  },
  
  
  //68
  ['onceTensHundreds'+shuffledNumbersto[67]]: {
  botPrompt: 'Which of these numbers has a digit sum of 8 in the units and tens place?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['44', '17', "53","26"]),
    answers: [
      {
        answer: '44',
        nextId: 'onceTensHundredscorrectq68',
      },
      {
        answer: '17',
        nextId: 'inonceTensHundredscorrectq68',
      },
      {
        answer: "53",
        nextId: 'inonceTensHundredscorrectq68',
      },
      {
        answer: "26",
        nextId: 'inonceTensHundredscorrectq68',
      },
    ],
  },
  
  onceTensHundredscorrectq68: {
  botPrompt: 'Hurray! <strong>44</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[68],
    },
  ],
  },
  inonceTensHundredscorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[68],
    },
  ],
  },
  
  //69
  ['onceTensHundreds'+shuffledNumbersto[68]]: {
  botPrompt: 'What is the number with 5 in the units place, 6 in the tens place, and 3 in the hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['653', '536', "365","356"]),
  answers: [
    {
      answer: '653',
      nextId: 'inonceTensHundredscorrectq69',
    },
    {
      answer: '536',
      nextId: 'inonceTensHundredscorrectq69',
    },
    {
      answer: "365",
      nextId: 'inonceTensHundredscorrectq69',
    },
    {
      answer: "356",
      nextId: 'onceTensHundredscorrectq69',
    },
  ],
  },
  
  onceTensHundredscorrectq69: {
  botPrompt: 'Hurray! <strong>356</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[69],
    },
  ],
  },
  inonceTensHundredscorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"356"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[69],
    },
  ],
  },

  
  //70
  ['onceTensHundreds'+shuffledNumbersto[69]]: {
  botPrompt: 'Which of these numbers has a digit sum of 12 in the units, tens, and hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['543', '555', "222","111"]),
  answers: [
    {
      answer: '543',
      nextId: 'onceTensHundredscorrectq70',
    },
    {
      answer: '555',
      nextId: 'inonceTensHundredscorrectq70',
    },
    {
      answer: "222",
      nextId: 'inonceTensHundredscorrectq70',
    },
    {
      answer: "111",
      nextId: 'inonceTensHundredscorrectq70',
    },
  ],
  },

  onceTensHundredscorrectq70: {
  botPrompt: 'Hurray! <strong>543</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[70],
    },
  ],
  },
  inonceTensHundredscorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"543"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[70],
    },
  ],
  },

  //71
  ['onceTensHundreds'+shuffledNumbersto[70]]: {
  botPrompt: 'What is the number with 8 in the units place, 7 in the tens place, and 2 in the hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['278', '782', "872","728"]),
    answers: [
      {
        answer: '278',
        nextId: 'inonceTensHundredscorrectq71',
      },
      {
        answer: '782',
        nextId: 'inonceTensHundredscorrectq71',
      },
      {
        answer: "872",
        nextId: 'inonceTensHundredscorrectq71',
      },
      {
        answer: "728",
        nextId: 'onceTensHundredscorrectq71',
      },
    ],
  },

  onceTensHundredscorrectq71: {
  botPrompt: 'Hurray! <strong>728</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[71],
    },
  ],
  },
  inonceTensHundredscorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"728"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[71],
    },
  ],
  },

  //72
  ['onceTensHundreds'+shuffledNumbersto[71]]: {
  botPrompt: 'Which of these numbers has a digit sum of 15 in the units, tens, and hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['888', '777', "555","333"]),
  answers: [
    {
      answer: '888',
      nextId: 'onceTensHundredscorrectq72',
    },
    {
      answer: '777',
      nextId: 'inonceTensHundredscorrectq72',
    },
    {
      answer: "555",
      nextId: 'inonceTensHundredscorrectq72',
    },
    {
      answer: "333",
      nextId: 'inonceTensHundredscorrectq72',
    },
  ],
  },

  onceTensHundredscorrectq72: {
  botPrompt: 'Hurray! <strong>888</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[72],
    },
  ],
  },
  inonceTensHundredscorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"888"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[72],
    },
  ],
  },

  //73
  ['onceTensHundreds'+shuffledNumbersto[72]]: {
  botPrompt: 'What is the number with 9 in the units place and 2 in the tens place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['92', '29', "19","91"]),
    answers: [
      {
        answer: '92',
        nextId: 'onceTensHundredscorrectq73',
      },
      {
        answer: '29',
        nextId: 'inonceTensHundredscorrectq73',
      },
      {
        answer: "19",
        nextId: 'inonceTensHundredscorrectq73',
      },
      {
        answer: "91",
        nextId: 'inonceTensHundredscorrectq73',
      },
    ],
  },

  onceTensHundredscorrectq73: {
  botPrompt: 'Hurray! <strong>92</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[73],
    },
  ],
  },
  inonceTensHundredscorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"92"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[73],
    },
  ],
  },

  //74
  ['onceTensHundreds'+shuffledNumbersto[73]]: {
  botPrompt: 'Which of these numbers has a digit sum of 9 in the units and tens place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['54', '18', "72","45"]),
  answers: [
    {
      answer: '54',
      nextId: 'inonceTensHundredscorrectq74',
    },
    {
      answer: '18',
      nextId: 'inonceTensHundredscorrectq74',
    },
    {
      answer: "72",
      nextId: 'inonceTensHundredscorrectq74',
    },
    {
      answer: "45",
      nextId: 'onceTensHundredscorrectq74',
    },
  ],
  },

  onceTensHundredscorrectq74: {
  botPrompt: 'Hurray! <strong>45</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[74],
    },
  ],
  },
  inonceTensHundredscorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[74],
    },
  ],
  },


  //75
  ['onceTensHundreds'+shuffledNumbersto[74]]: {
  botPrompt: 'What is the number with 7 in the units place, 5 in the tens place, and 1 in the hundreds place?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['157', '517', "571","751"]),
    answers: [
      {
        answer: '157',
        nextId: 'inonceTensHundredscorrectq75',
      },
      {
        answer: '517',
        nextId: 'inonceTensHundredscorrectq75',
      },
      {
        answer: "571",
        nextId: 'inonceTensHundredscorrectq75',
      },
      {
        answer: "751",
        nextId: 'onceTensHundredscorrectq75',
      },
    ],
  },

  onceTensHundredscorrectq75: {
  botPrompt: 'Hurray! <strong>751</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[75],
    },
  ],
  },
  inonceTensHundredscorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"751"</strong>',
  answers: [
    {
      nextId: 'onceTensHundreds'+shuffledNumbersto[75],
    },
  ],
  },

  //76
  ['onceTensHundreds'+shuffledNumbersto[75]]: {
    botPrompt: 'Which of these numbers has a digit sum of 11 in the units, tens, and hundreds place?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['818', '727', "535","242"]),
    answers: [
      {
        answer: '818',
        nextId: 'onceTensHundredscorrectq76',
      },
      {
        answer: '727',
        nextId: 'inonceTensHundredscorrectq76',
      },
      {
        answer: "535",
        nextId: 'inonceTensHundredscorrectq76',
      },
      {
        answer: "242",
        nextId: 'inonceTensHundredscorrectq76',
      },
    ],
  },
  onceTensHundredscorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>818</strong> 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[76],
      },
    ],
  },
  inonceTensHundredscorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"818"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[76],
      },
    ],
  },

  //77
  ['onceTensHundreds'+shuffledNumbersto[76]]: {
  botPrompt: 'What is the number with 3 in the units place and 9 in the tens place?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['93', '39', "49","94"]),
    answers: [
      {
        answer: '93',
        nextId: 'inonceTensHundredscorrectq77',
      },
      {
        answer: '39',
        nextId: 'onceTensHundredscorrectq77',
      },
      {
        answer: "49",
        nextId: 'inonceTensHundredscorrectq77',
      },
      {
        answer: "94",
        nextId: 'inonceTensHundredscorrectq77',
      },
    ],
  },
  onceTensHundredscorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>39</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  inonceTensHundredscorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },



  //78
  ['onceTensHundreds'+shuffledNumbersto[77]]: {
    botPrompt: 'Which of these numbers has a digit sum of 7 in the units and tens place? ',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['25', '16', "34","71"]),
      answers: [
        {
          answer: '25',
          nextId: 'inonceTensHundredscorrectq78',
        },
        {
          answer: '16',
          nextId: 'onceTensHundredscorrectq78',
        },
        {
          answer: "34",
          nextId: 'inonceTensHundredscorrectq78',
        },
        {
          answer: "71",
          nextId: 'inonceTensHundredscorrectq78',
        },
      ],
    },
    
    onceTensHundredscorrectq78: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[78],
      },
    ],
    },
    inonceTensHundredscorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[78],
      },
    ],
    },
    
    //79
    ['onceTensHundreds'+shuffledNumbersto[78]]: {
    botPrompt: 'What is the number with 1 in the units place, 6 in the tens place, and 4 in the hundreds place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['461', '164', "466","614"]),
      answers: [
        {
          answer: '416',
          nextId: 'inonceTensHundredscorrectq79',
        },
        {
          answer: '164',
          nextId: 'onceTensHundredscorrectq79',
        },
        {
          answer: "466",
          nextId: 'inonceTensHundredscorrectq79',
        },
        {
          answer: "614",
          nextId: 'inonceTensHundredscorrectq79',
        },
      ],
    },
    
    onceTensHundredscorrectq79: {
    botPrompt: 'Hurray! <strong>416</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[79],
      },
    ],
    },
    inonceTensHundredscorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"416"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[79],
      },
    ],
    },
    
    
    //80
    ['onceTensHundreds'+shuffledNumbersto[79]]: {
    botPrompt: 'Which of these numbers has a digit sum of 10 in the units, tens, and hundreds place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['881', '791', "604","475"]),
      answers: [
        {
          answer: '881',
          nextId: 'inonceTensHundredscorrectq80',
        },
        {
          answer: '791',
          nextId: 'inonceTensHundredscorrectq80',
        },
        {
          answer: "604",
          nextId: 'onceTensHundredscorrectq80',
        },
        {
          answer: "475",
          nextId: 'inonceTensHundredscorrectq80',
        },
      ],
    },
    
    onceTensHundredscorrectq80: {
    botPrompt: 'Hurray! <strong>604</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[80],
      },
    ],
    },
    inonceTensHundredscorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"604"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[80],
      },
    ],
    },
    
    //81
    ['onceTensHundreds'+shuffledNumbersto[80]]: {
    botPrompt: 'What is the number with 5 in the units place and 7 in the tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['357', '537', "775","375"]),
      answers: [
        {
          answer: '357',
          nextId: 'inonceTensHundredscorrectq51',
        },
        {
          answer: '537',
          nextId: 'inonceTensHundredscorrectq51',
        },
        {
          answer: "775",
          nextId: 'onceTensHundredscorrectq51',
        },
        {
          answer: "375",
          nextId: 'inonceTensHundredscorrectq51',
        },
      ],
    },
    
    onceTensHundredscorrectq51: {
    botPrompt: 'Hurray! <strong>775</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[51],
      },
    ],
    },
    inonceTensHundredscorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"775"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[51],
      },
    ],
    },
    
    //82
    ['onceTensHundreds'+shuffledNumbersto[81]]: {
    botPrompt: 'What number has 4 in the tens place and 7 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['43', '74', "27","47"]),
      answers: [
        {
          answer: '43',
          nextId: 'inonceTensHundredscorrectq82',
        },
        {
          answer: '74',
          nextId: 'onceTensHundredscorrectq82',
        },
        {
          answer: "27",
          nextId: 'inonceTensHundredscorrectq82',
        },
        {
          answer: "47",
          nextId: 'inonceTensHundredscorrectq82',
        },
      ],
    },
    
    onceTensHundredscorrectq82: {
    botPrompt: 'Hurray! <strong>74</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[82],
      },
    ],
    },
    inonceTensHundredscorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"74"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[82],
      },
    ],
    },
    
    //83
    ['onceTensHundreds'+shuffledNumbersto[82]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 37?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['3', '7', "10","4"]),
      answers: [
        {
          answer: '3',
          nextId: 'inonceTensHundredscorrectq83',
        },
        {
          answer: '7',
          nextId: 'inonceTensHundredscorrectq83',
        },
        {
          answer: "10",
          nextId: 'inonceTensHundredscorrectq83',
        },
        {
          answer: "4",
          nextId: 'onceTensHundredscorrectq83',
        },
      ],
    },
  
    onceTensHundredscorrectq83: {
    botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[83],
      },
    ],
    },
    inonceTensHundredscorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[83],
      },
    ],
    },
    
    //84
    ['onceTensHundreds'+shuffledNumbersto[83]]: {
    botPrompt: 'Which number has 2 in the units place and 5 in the tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['52', '25', "23","32"]),
      answers: [
        {
          answer: '52',
          nextId: 'inonceTensHundredscorrectq84',
        },
        {
          answer: '25',
          nextId: 'onceTensHundredscorrectq84',
        },
        {
          answer: "23",
          nextId: 'inonceTensHundredscorrectq84',
        },
        {
          answer: "32",
          nextId: 'inonceTensHundredscorrectq84',
        },
      ],
    },
    
    onceTensHundredscorrectq84: {
    botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[84],
      },
    ],
    },
    inonceTensHundredscorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[84],
      },
    ],
    },
    
    
    //85
    ['onceTensHundreds'+shuffledNumbersto[84]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 58?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['8', '13', "5","11"]),
      answers: [
        {
          answer: '8',
          nextId: 'onceTensHundredscorrectq85',
        },
        {
          answer: '13',
          nextId: 'inonceTensHundredscorrectq85',
        },
        {
          answer: "5",
          nextId: 'inonceTensHundredscorrectq85',
        },
        {
          answer: "11",
          nextId: 'inonceTensHundredscorrectq85',
        },
      ],
    },
    
    onceTensHundredscorrectq85: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[85],
      },
    ],
    },
    inonceTensHundredscorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[85],
      },
    ],
    },
    
    //86
    ['onceTensHundreds'+shuffledNumbersto[85]]: {
      botPrompt: 'What number has 3 in the tens place and 9 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['39', '93', "29","32"]),
      answers: [
        {
          answer: '39',
          nextId: 'inonceTensHundredscorrectq86',
        },
        {
          answer: '93',
          nextId: 'onceTensHundredscorrectq86',
        },
        {
          answer: "29",
          nextId: 'inonceTensHundredscorrectq86',
        },
        {
          answer: "32",
          nextId: 'inonceTensHundredscorrectq86',
        },
      ],
    },
    onceTensHundredscorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>93</strong> 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[86],
        },
      ],
    },
    inonceTensHundredscorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"93"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[86],
        },
      ],
    },
  
    //87
    ['onceTensHundreds'+shuffledNumbersto[86]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 62?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['8', '6', "2","12"]),
      answers: [
        {
          answer: '8',
          nextId: 'inonceTensHundredscorrectq87',
        },
        {
          answer: '6',
          nextId: 'onceTensHundredscorrectq87',
        },
        {
          answer: "2",
          nextId: 'inonceTensHundredscorrectq87',
        },
        {
          answer: "12",
          nextId: 'inonceTensHundredscorrectq87',
        },
      ],
    },
    onceTensHundredscorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[87],
      },
    ],
    },
    inonceTensHundredscorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[87],
      },
    ],
    },
    
    //88
    ['onceTensHundreds'+shuffledNumbersto[87]]: {
    botPrompt: 'Which number has 7 in the tens place and 6 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['76', '67', "86","97"]),
    answers: [
      {
        answer: '76',
        nextId: 'onceTensHundredscorrectq88',
      },
      {
        answer: '67',
        nextId: 'inonceTensHundredscorrectq88',
      },
      {
        answer: "86",
        nextId: 'inonceTensHundredscorrectq88',
      },
      {
        answer: "97",
        nextId: 'inonceTensHundredscorrectq88',
      },
    ],
    },
    onceTensHundredscorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>76</strong> 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[88],
      },
    ],
    },
    inonceTensHundredscorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[88],
      },
    ],
    },
    
    //89
    ['onceTensHundreds'+shuffledNumbersto[88]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 44?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['8', '4', "12","6"]),
      answers: [
        {
          answer: '8',
          nextId: 'inonceTensHundredscorrectq87',
        },
        {
          answer: '4',
          nextId: 'onceTensHundredscorrectq87',
        },
        {
          answer: "12",
          nextId: 'inonceTensHundredscorrectq87',
        },
        {
          answer: "6",
          nextId: 'inonceTensHundredscorrectq87',
        },
      ],
    },
    onceTensHundredscorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> Answers! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[89],
      },
    ],
    },
    inonceTensHundredscorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[89],
      },
    ],
    },
    
    //90
    ['onceTensHundreds'+shuffledNumbersto[89]]: {
    botPrompt: 'What number has 5 in the tens place and 8 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['85', '58', "87","56"]),
    answers: [
      {
        answer: '85',
        nextId: 'inonceTensHundredscorrectq90',
      },
      {
        answer: '58',
        nextId: 'onceTensHundredscorrectq90',
      },
      {
        answer: "87",
        nextId: 'inonceTensHundredscorrectq90',
      },
      {
        answer: "56",
        nextId: 'inonceTensHundredscorrectq90',
      },
    ],
    },
    onceTensHundredscorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>58</strong> 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[90],
      },
    ],
    },
    inonceTensHundredscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[90],
      },
    ],
    },
    
    //91
    ["onceTensHundreds"+shuffledNumbersto[90]]: {
      botPrompt: 'What is the sum of digits in the tens place and units place of 69?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['6', '9', "12","15"]),
      answers: [
        {
          answer: '6',
          nextId: 'onceTensHundredscorrectq91',
        },
        {
          answer: '9',
          nextId: 'inonceTensHundredscorrectq91',
        },
        {
          answer: "12",
          nextId: 'inonceTensHundredscorrectq91',
        },
        {
          answer: "15",
          nextId: 'inonceTensHundredscorrectq91',
        },
      ],
    },
    onceTensHundredscorrectq91: {
      botPrompt: 'Hurray <strong>6</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[91],
        },
      ],
    },
    inonceTensHundredscorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[91],
        },
      ],
    },
    
    //92
    ['onceTensHundreds'+shuffledNumbersto[91]]: {
      botPrompt: 'Which number has 1 in the tens place and 3 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['31', '13', "30","33"]),
      answers: [
        {
          answer: '31',
          nextId: 'onceTensHundredscorrectq92',
        },
        {
          answer: '13',
          nextId: 'inonceTensHundredscorrectq92',
        },
        {
          answer: "30",
          nextId: 'inonceTensHundredscorrectq92',
        },
        {
          answer: "33",
          nextId: 'inonceTensHundredscorrectq92',
        },
      ],
    },
    
    onceTensHundredscorrectq92: {
      botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[92],
        },
      ],
    },
    inonceTensHundredscorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[92],
        },
      ],
    },
    
    //93
    ['onceTensHundreds'+shuffledNumbersto[92]]: {
    botPrompt: "What is the sum of digits in the tens place and units place of 79?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '16', "9","14"]),
      answers: [
        {
          answer: '7',
          nextId: 'inonceTensHundredscorrectq93',
        },
        {
          answer: '16',
          nextId: 'inonceTensHundredscorrectq93',
        },
        {
          answer: "9",
          nextId: 'inonceTensHundredscorrectq93',
        },
        {
          answer: "14",
          nextId: 'onceTensHundredscorrectq93',
        },
      ],
    },
    
    onceTensHundredscorrectq93: {
    botPrompt: 'Hurray! <strong>14</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[93],
      },
    ],
    },
    inonceTensHundredscorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[93],
      },
    ],
    },
  
    //94
    ['onceTensHundreds'+shuffledNumbersto[93]]: {
    botPrompt: 'What number has 4 in the tens place and 6 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['46', '64', "26","42"]),
    answers: [
      {
        answer: '46',
        nextId: 'onceTensHundredscorrectq94',
      },
      {
        answer: '64',
        nextId: 'inonceTensHundredscorrectq94',
      },
      {
        answer: "26",
        nextId: 'inonceTensHundredscorrectq94',
      },
      {
        answer: "42",
        nextId: 'inonceTensHundredscorrectq94',
      },
    ],
    },
    
    onceTensHundredscorrectq94: {
    botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[94],
      },
    ],
    },
    inonceTensHundredscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[94],
      },
    ],
    },
    
    //95
    ['onceTensHundreds'+shuffledNumbersto[94]]: {
    botPrompt: 'What is the sum of digits in the tens place and units place of 97?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['9', '7', "16","13"]),
      answers: [
        {
          answer: '9',
          nextId: 'inonceTensHundredscorrectq95',
        },
        {
          answer: '7',
          nextId: 'inonceTensHundredscorrectq95',
        },
        {
          answer: "16",
          nextId: 'onceTensHundredscorrectq95',
        },
        {
          answer: "13",
          nextId: 'inonceTensHundredscorrectq95',
        },
      ],
    },
    
    onceTensHundredscorrectq95: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[95],
      },
    ],
    },
    inonceTensHundredscorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[95],
      },
    ],
    },
    
    //96
    ['onceTensHundreds'+shuffledNumbersto[95]]: {
    botPrompt: 'What is the number formed by the digits 2 and 3 in the units and tens place respectively?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['23', '32', "25","52"]),
    answers: [
      {
        answer: '23',
        nextId: 'onceTensHundredscorrectq96',
      },
      {
        answer: '32',
        nextId: 'inonceTensHundredscorrectq96',
      },
      {
        answer: "25",
        nextId: 'inonceTensHundredscorrectq96',
      },
      {
        answer: "52",
        nextId: 'inonceTensHundredscorrectq96',
      },
    ],
    },
    
    onceTensHundredscorrectq96: {
    botPrompt: 'Hurray! <strong>23</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[96],
      },
    ],
    },
    inonceTensHundredscorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[96],
      },
    ],
    },

    //97
    ['onceTensHundreds'+shuffledNumbersto[96]]: {
    botPrompt: 'Which of the following has a digit 4 in the units place and a digit 5 in the tens place?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['54', '45', "64","46"]),
    answers: [
      {
        answer: '54',
        nextId: 'onceTensHundredscorrectq97',
      },
      {
        answer: '45',
        nextId: 'inonceTensHundredscorrectq97',
      },
      {
        answer: "64",
        nextId: 'inonceTensHundredscorrectq97',
      },
      {
        answer: "46",
        nextId: 'inonceTensHundredscorrectq97',
      },
    ],
    },

    onceTensHundredscorrectq97: {
    botPrompt: 'Hurray! <strong>54</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[97],
      },
    ],
    },
    inonceTensHundredscorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"54"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[97],
      },
    ],
    },


    //98
    ['onceTensHundreds'+shuffledNumbersto[97]]: {
    botPrompt: 'What number is formed by the digits 1 in the tens place and 7 in the units place?',
    type: RTypes.TRANSFORMED_TEXT,


    input: selectField(['71', '17', "27","72"]),
      answers: [
        {
          answer: '71',
          nextId: 'inonceTensHundredscorrectq98',
        },
        {
          answer: '17',
          nextId: 'onceTensHundredscorrectq98',
        },
        {
          answer: "27",
          nextId: 'inonceTensHundredscorrectq98',
        },
        {
          answer: "72",
          nextId: 'inonceTensHundredscorrectq98',
        },
      ],
    },

    onceTensHundredscorrectq98: {
    botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[98],
      },
    ],
    },
    inonceTensHundredscorrectq98: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
    answers: [
      {
        nextId: 'onceTensHundreds'+shuffledNumbersto[98],
      },
    ],
    },
    
    //99
    ['onceTensHundreds'+shuffledNumbersto[98]]: {
      botPrompt: 'What is the number formed by the digits 8 in the units place and 2 in the tens place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['28', '82', "88","18"]),
        answers: [
          {
            answer: '28',
            nextId: 'onceTensHundredscorrectq99',
          },
          {
            answer: '82',
            nextId: 'inonceTensHundredscorrectq99',
          },
          {
            answer: "88",
            nextId: 'inonceTensHundredscorrectq99',
          },
          {
            answer: "18",
            nextId: 'inonceTensHundredscorrectq99',
          },
        ],
      },
  
      onceTensHundredscorrectq99: {
      botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[99],
        },
      ],
      },
      inonceTensHundredscorrectq99: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[99],
        },
      ],
      },    //100
      ['onceTensHundreds'+shuffledNumbersto[99]]: {
      botPrompt: 'Which number has a digit 3 in the tens place and a digit 6 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['63', '36', "64","46"]),
        answers: [
          {
            answer: '63',
            nextId: 'onceTensHundredscorrectq100',
          },
          {
            answer: '36',
            nextId: 'inonceTensHundredscorrectq100',
          },
          {
            answer: "64",
            nextId: 'inonceTensHundredscorrectq100',
          },
          {
            answer: "46",
            nextId: 'inonceTensHundredscorrectq100',
          },
        ],
      },
  
      onceTensHundredscorrectq100: {
      botPrompt: 'Hurray! <strong>63</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[100],
        },
      ],
      },
      inonceTensHundredscorrectq100: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"63"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[100],
        },
      ],
      },

      //101
      ['onceTensHundreds'+shuffledNumbersto[100]]: {
      botPrompt: 'What number is formed by the digits 2 in the tens place and 0 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['71', '17', "27","72"]),
        answers: [
          {
            answer: '71',
            nextId: 'inonceTensHundredscorrectq101',
          },
          {
            answer: '17',
            nextId: 'onceTensHundredscorrectq101',
          },
          {
            answer: "27",
            nextId: 'inonceTensHundredscorrectq101',
          },
          {
            answer: "72",
            nextId: 'inonceTensHundredscorrectq101',
          },
        ],
      },
  
      onceTensHundredscorrectq101: {
      botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[101],
        },
      ],
      },
      inonceTensHundredscorrectq101: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[101],
        },
      ],
      },

      //102
      ['onceTensHundreds'+shuffledNumbersto[101]]: {
      botPrompt: 'What number is formed by the digits 2 in the tens place and 0 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['20', '2', "22","0"]),
        answers: [
          {
            answer: '20',
            nextId: 'onceTensHundredscorrectq102',
          },
          {
            answer: '2',
            nextId: 'inonceTensHundredscorrectq102',
          },
          {
            answer: "22",
            nextId: 'inonceTensHundredscorrectq102',
          },
          {
            answer: "0",
            nextId: 'inonceTensHundredscorrectq102',
          },
        ],
      },
  
      onceTensHundredscorrectq102: {
      botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[102],
        },
      ],
      },
      inonceTensHundredscorrectq102: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[102],
        },
      ],
      },

      //103
      ['onceTensHundreds'+shuffledNumbersto[102]]: {
      botPrompt: 'Which number has a digit 9 in the tens place and a digit 1 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,
  
  
      input: selectField(['91', '19', "99","11"]),
        answers: [
          {
            answer: '91',
            nextId: 'onceTensHundredscorrectq103',
          },
          {
            answer: '19',
            nextId: 'inonceTensHundredscorrectq103',
          },
          {
            answer: "99",
            nextId: 'inonceTensHundredscorrectq103',
          },
          {
            answer: "11",
            nextId: 'inonceTensHundredscorrectq103',
          },
        ],
      },
  
      onceTensHundredscorrectq103: {
      botPrompt: 'Hurray! <strong>91</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[103],
        },
      ],
      },
      inonceTensHundredscorrectq103: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"91"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[103],
        },
      ],
      },


      //104
      ['onceTensHundreds'+shuffledNumbersto[103]]: {
      botPrompt: 'What number is formed by the digits 5 in the tens place and 8 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,

  
      input: selectField(['58', '85', "88","18"]),
        answers: [
          {
            answer: '58',
            nextId: 'inonceTensHundredscorrectq104',
          },
          {
            answer: '85',
            nextId: 'onceTensHundredscorrectq104',
          },
          {
            answer: "88",
            nextId: 'inonceTensHundredscorrectq104',
          },
          {
            answer: "18",
            nextId: 'inonceTensHundredscorrectq104',
          },
        ],
      },
  
      onceTensHundredscorrectq104: {
      botPrompt: 'Hurray! <strong>58</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[104],
        },
      ],
      },
      inonceTensHundredscorrectq104: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"58"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[104],
        },
      ],
      },


      //105
      ['onceTensHundreds'+shuffledNumbersto[104]]: {
      botPrompt: 'Which of the following has a digit 2 in the tens place and a digit 4 in the units place?',
      type: RTypes.TRANSFORMED_TEXT,


      input: selectField(['42', '24', "64","46"]),
        answers: [
          {
            answer: '42',
            nextId: 'inonceTensHundredscorrectq105',
          },
          {
            answer: '24',
            nextId: 'onceTensHundredscorrectq105',
          },
          {
            answer: "64",
            nextId: 'inonceTensHundredscorrectq105',
          },
          {
            answer: "46",
            nextId: 'inonceTensHundredscorrectq105',
          },
        ],
      },

      onceTensHundredscorrectq105: {
      botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[105],
        },
      ],
      },
      inonceTensHundredscorrectq105: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
      answers: [
        {
          nextId: 'onceTensHundreds'+shuffledNumbersto[105],
        },
      ],
      },

       //106
       ['onceTensHundreds'+shuffledNumbersto[105]]: {
        botPrompt: 'What is the number formed by the digits 3 in the tens place and 9 in the units place?',
        type: RTypes.TRANSFORMED_TEXT,


        input: selectField(['39', '93', "33","99"]),
          answers: [
            {
              answer: '39',
              nextId: 'onceTensHundredscorrectq106',
            },
            {
              answer: '93',
              nextId: 'inonceTensHundredscorrectq106',
            },
            {
              answer: "33",
              nextId: 'inonceTensHundredscorrectq106',
            },
            {
              answer: "99",
              nextId: 'inonceTensHundredscorrectq106',
            },
          ],
        },
  
        onceTensHundredscorrectq106: {
        botPrompt: 'Hurray! <strong>39</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtoContinue27',
          },
        ],
        },
        inonceTensHundredscorrectq106: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
        answers: [
          {
            nextId: 'wishtoContinue27',
          },
        ],
        },

  //endonceTensHundredsletter
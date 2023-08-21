//moreLess


["moreLess"+shuffleArraynseve[0]]: {
    botPrompt: ' What is 1 more than 2?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","6"]),
    answers: [
      {
        answer: '3',
        nextId: 'moreLesscorrect',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrect',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrect',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrect',
      },
    ],
  },
  moreLesscorrect: {
    botPrompt: 'Hurray <strong>3</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[1],
      },
    ],
  },
  inmoreLesscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[1],
      },
    ],
  },
  
  ['moreLess'+shuffleArraynseve[1]]: {
    botPrompt: 'What is the number that is 1 more than 11?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['11', '12', "13","10"]),
    answers: [
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq2',
      },
      {
        answer: '12',
        nextId: 'moreLesscorrectq2',
      },
      {
        answer: "13",
        nextId: 'inmoreLesscorrectq2',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq2',
      },
    ],
  },
  
  moreLesscorrectq2: {
    botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[2],
      },
    ],
  },
  inmoreLesscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[2],
      },
    ],
  },
  
  //3
  ['moreLess'+shuffleArraynseve[2]]: {
  botPrompt: "What is the number that is 1 more than 13?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '10', "12","11"]),
    answers: [
      {
        answer: '14',
        nextId: 'moreLesscorrectq3',
      },
      {
        answer: '10',
        nextId: 'inmoreLesscorrectq3',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq3',
      },
      {
        answer: "11",
        nextId: 'inmoreLesscorrectq3',
      },
    ],
  },
  
  moreLesscorrectq3: {
  botPrompt: 'Hurray! <strong>14</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[3],
    },
  ],
  },
  inmoreLesscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[3],
    },
  ],
  },
  
  //4
  ['moreLess'+shuffleArraynseve[3]]: {
  botPrompt: ' What is 1 more than 3?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "2","6"]),
    answers: [
      {
        answer: '4',
        nextId: 'moreLesscorrectq4',
      },
      {
        answer: '5',
        nextId: 'inmoreLesscorrectq4',
      },
      {
        answer: "2",
        nextId: 'inmoreLesscorrectq4',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq4',
      },
    ],
  },
  
  moreLesscorrectq4: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[4],
    },
  ],
  },
  inmoreLesscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[4],
    },
  ],
  },
  
  //5
  ['moreLess'+shuffleArraynseve[4]]: {
  botPrompt: 'What is the number that is 1 more than 15?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '13', "16","12"]),
    answers: [
      {
        answer: '14',
        nextId: 'inmoreLesscorrectq5',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq5',
      },
      {
        answer: "16",
        nextId: 'moreLesscorrectq5',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq5',
      },
    ],
  },
  
  moreLesscorrectq5: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[5],
    },
  ],
  },
  inmoreLesscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[5],
    },
  ],
  },
  
  //6
  ['moreLess'+shuffleArraynseve[5]]: {
  botPrompt: 'What is 1 more than 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '2', "6","5"]),
    answers: [
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq6',
      },
      {
        answer: '2',
        nextId: 'inmoreLesscorrectq6',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq6',
      },
      {
        answer: "5",
        nextId: 'moreLesscorrectq6',
      },
    ],
  },
  
  moreLesscorrectq6: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[6],
    },
  ],
  },
  inmoreLesscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[6],
    },
  ],
  },
  
  //7
  ['moreLess'+shuffleArraynseve[6]]: {
  botPrompt: 'What is 1 more than 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "5","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq7',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq7',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrectq7',
      },
      {
        answer: "7",
        nextId: 'moreLesscorrectq7',
      },
    ],
  },
  
  moreLesscorrectq7: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[7],
    },
  ],
  },
  inmoreLesscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[7],
    },
  ],
  },
  
  
  //8
  ['moreLess'+shuffleArraynseve[7]]: {
  botPrompt: 'What is 1 more than  5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "6","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq8',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq8',
      },
      {
        answer: "6",
        nextId: 'moreLesscorrectq8',
      },
      {
        answer: "7",
        nextId: 'inmoreLesscorrectq8',
      },
    ],
  },
  
  moreLesscorrectq8: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[8],
    },
  ],
  },
  inmoreLesscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[8],
    },
  ],
  },
  
  //9
  ['moreLess'+shuffleArraynseve[8]]: {
  botPrompt: 'What is the number that is 1 more than 14?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['15', '13', "16","17"]),
    answers: [
      {
        answer: '15',
        nextId: 'moreLesscorrectq9',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq9',
      },
      {
        answer: "16",
        nextId: 'inmoreLesscorrectq9',
      },
      {
        answer: "17",
        nextId: 'inmoreLesscorrectq9',
      },
    ],
  },
  
  moreLesscorrectq9: {
  botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[9],
    },
  ],
  },
  inmoreLesscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[9],
    },
  ],
  },
  
  
  //10
  ['moreLess'+shuffleArraynseve[9]]: {
  botPrompt: 'What is the number that is 1 more than 12?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '11', "13","10"]),
    answers: [
      {
        answer: '14',
        nextId: 'inmoreLesscorrectq10',
      },
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq10',
      },
      {
        answer: "13",
        nextId: 'moreLesscorrectq10',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq10',
      },
    ],
  
  },
  
  moreLesscorrectq10: {
  botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[10],
    },
  ],
  },
  inmoreLesscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[10],
    },
  ],
  },
  
  //11
  ['moreLess'+shuffleArraynseve[10]]: {
  botPrompt: 'What is the number that is 1 more than 16?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['14', '16', "7","17"]),
    answers: [
      {
        answer: '14',
        nextId: 'inmoreLesscorrectq11',
      },
      {
        answer: '16',
        nextId: 'inmoreLesscorrectq11',
      },
      {
        answer: "7",
        nextId: 'inmoreLesscorrectq11',
      },
      {
        answer: "17",
        nextId: 'moreLesscorrectq11',
      },
    ],
  },
  
  moreLesscorrectq11: {
  botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[11],
    },
  ],
  },
  inmoreLesscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[11],
    },
  ],
  },
  
  //12
  ['moreLess'+shuffleArraynseve[11]]: {
  botPrompt: 'What is 1 more than 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '8', "7","6"]),
    answers: [
      {
        answer: '9',
        nextId: 'inmoreLesscorrectq12',
      },
      {
        answer: '8',
        nextId: 'moreLesscorrectq12',
      },
      {
        answer: "7",
        nextId: 'inmoreLesscorrectq12',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq12',
      },
    ],
  },
  
  moreLesscorrectq12: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[12],
    },
  ],
  },
  inmoreLesscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[12],
    },
  ],
  },
  
  //13
  ['moreLess'+shuffleArraynseve[12]]: {
  botPrompt: 'What is the number that is 1 more than 17?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '18', "19","9"]),
    answers: [
      {
        answer: '8',
        nextId: 'inmoreLesscorrectq13',
      },
      {
        answer: '18',
        nextId: 'moreLesscorrectq13',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq13',
      },
      {
        answer: "9",
        nextId: 'inmoreLesscorrectq13',
      },
    ],
  },
  
  moreLesscorrectq13: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[13],
    },
  ],
  },
  inmoreLesscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[13],
    },
  ],
  },
  
  //14
  ['moreLess'+shuffleArraynseve[13]]: {
  botPrompt: 'What is 1 more than 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['18', '8', "16","19"]),
    answers: [
      {
        answer: '18',
        nextId: 'moreLesscorrectq14',
      },
      {
        answer: '8',
        nextId: 'inmoreLesscorrectq14',
      },
      {
        answer: "16",
        nextId: 'inmoreLesscorrectq14',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq14',
      },
    ],
  },
  
  moreLesscorrectq14: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[14],
    },
  ],
  },
  inmoreLesscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[14],
    },
  ],
  },
  
  
  //15
  ['moreLess'+shuffleArraynseve[14]]: {
  botPrompt: 'What is 1 more than 18?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '8', "10","19"]),
    answers: [
      {
        answer: '9',
        nextId: 'moreLesscorrectq15',
      },
      {
        answer: '8',
        nextId: 'inmoreLesscorrectq15',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq15',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq15',
      },
    ],
  },
  
  moreLesscorrectq15: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[15],
    },
  ],
  },
  inmoreLesscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[15],
    },
  ],
  },
  
  //16
  ['moreLess'+shuffleArraynseve[15]]: {
    botPrompt: 'What is 1 more than 9?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['11', '10', "12","19"]),
    answers: [
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq16',
      },
      {
        answer: '10',
        nextId: 'moreLesscorrectq16',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq16',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq16',
      },
    ],
  },
  moreLesscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>10</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[16],
      },
    ],
  },
  inmoreLesscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[16],
      },
    ],
  },
  
  //17
  ['moreLess'+shuffleArraynseve[16]]: {
  botPrompt: 'What is 1 more than 19?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['20', '21', "18","22"]),
    answers: [
      {
        answer: '20',
        nextId: 'moreLesscorrectq17',
      },
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq17',
      },
      {
        answer: "18",
        nextId: 'inmoreLesscorrectq17',
      },
      {
        answer: "22",
        nextId: 'inmoreLesscorrectq17',
      },
    ],
  },
  moreLesscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>20</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[17],
    },
  ],
  },
  inmoreLesscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[17],
    },
  ],
  },
  
  //18
  ['moreLess'+shuffleArraynseve[17]]: {
  botPrompt: 'What is 1 more than 20?.   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['23', '21', "22","19"]),
  answers: [
    {
      answer: '23',
      nextId: 'moreLesscorrectq18',
    },
    {
      answer: '21',
      nextId: 'inmoreLesscorrectq18',
    },
    {
      answer: "22",
      nextId: 'inmoreLesscorrectq18',
    },
    {
      answer: "19",
      nextId: 'inmoreLesscorrectq18',
    },
  ],
  },
  moreLesscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>21</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[18],
    },
  ],
  },
  inmoreLesscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[18],
    },
  ],
  },
  
  //19
  ['moreLess'+shuffleArraynseve[18]]: {
  botPrompt: 'What is the number that is 1 more than 10?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['16', '13', "12","11"]),
  answers: [
    {
      answer: '16',
      nextId: 'inmoreLesscorrectq19',
    },
    {
      answer: '13',
      nextId: 'inmoreLesscorrectq19',
    },
    {
      answer: "12",
      nextId: 'inmoreLesscorrectq19',
    },
    {
      answer: "11",
      nextId: 'moreLesscorrectq19',
    },
  ],
  },
  moreLesscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>11</strong> Answers! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[19],
    },
  ],
  },
  inmoreLesscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[19],
    },
  ],
  },
  
  //20
  ['moreLess'+shuffleArraynseve[19]]: {
  botPrompt: 'What is 1 more than 21?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['25', '27', "22","20"]),
  answers: [
    {
      answer: '25',
      nextId: 'inmoreLesscorrectq20',
    },
    {
      answer: '27',
      nextId: 'inmoreLesscorrectq20',
    },
    {
      answer: "22",
      nextId: 'moreLesscorrectq20',
    },
    {
      answer: "20",
      nextId: 'inmoreLesscorrectq20',
    },
  ],
  },
  moreLesscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>22</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[20],
    },
  ],
  },
  inmoreLesscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[20],
    },
  ],
  },
  
  //21
  ["moreLess"+shuffleArraynseve[20]]: {
    botPrompt: 'What is 1 more than 22?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['23', '21', "20","19"]),
  answers: [
    {
      answer: '23',
      nextId: 'moreLesscorrectq21',
    },
    {
      answer: '21',
      nextId: 'inmoreLesscorrectq21',
    },
    {
      answer: "20",
      nextId: 'inmoreLesscorrectq21',
    },
    {
      answer: "19",
      nextId: 'inmoreLesscorrectq21',
    },
  ],
  },
  moreLesscorrectq21: {
    botPrompt: 'Hurray <strong>23</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[21],
      },
    ],
  },
  inmoreLesscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[21],
      },
    ],
  },
  
  //22
  ['moreLess'+shuffleArraynseve[21]]: {
    botPrompt: 'What is 1 more than 23?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['22', '24', "21","27"]),
  answers: [
    {
      answer: '22',
      nextId: 'inmoreLesscorrectq22',
    },
    {
      answer: '24',
      nextId: 'moreLesscorrectq22',
    },
    {
      answer: "21",
      nextId: 'inmoreLesscorrectq22',
    },
    {
      answer: "27",
      nextId: 'inmoreLesscorrectq22',
    },
  ],
  },
  
  moreLesscorrectq22: {
    botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[22],
      },
    ],
  },
  inmoreLesscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[22],
      },
    ],
  },
  
  //23
  ['moreLess'+shuffleArraynseve[22]]: {
  botPrompt: "What is 1 more than 25?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['24', '23', "26","27"]),
  answers: [
    {
      answer: '24',
      nextId: 'moreLesscorrectq23',
    },
    {
      answer: '23',
      nextId: 'inmoreLesscorrectq23',
    },
    {
      answer: "26",
      nextId: 'inmoreLesscorrectq23',
    },
    {
      answer: "27",
      nextId: 'inmoreLesscorrectq23',
    },
  ],
  },
  
  moreLesscorrectq23: {
  botPrompt: 'Hurray! <strong>26</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[23],
    },
  ],
  },
  inmoreLesscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[23],
    },
  ],
  },
  
  //24
  ['moreLess'+shuffleArraynseve[23]]: {
  botPrompt: 'What is 1 more than 30?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['29', '31', "13","32`"]),
  answers: [
    {
      answer: '29',
      nextId: 'inmoreLesscorrectq24',
    },
    {
      answer: '31',
      nextId: 'moreLesscorrectq24',
    },
    {
      answer: "13",
      nextId: 'inmoreLesscorrectq24',
    },
    {
      answer: "32",
      nextId: 'inmoreLesscorrectq24',
    },
  ],
  },
  
  moreLesscorrectq24: {
  botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[24],
    },
  ],
  },
  inmoreLesscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[24],
    },
  ],
  },
  
  //25
  ['moreLess'+shuffleArraynseve[24]]: {
  botPrompt: 'What is 1 more than 26?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '27', "26","25"]),
  answers: [
    {
      answer: '28',
      nextId: 'inmoreLesscorrectq25',
    },
    {
      answer: '27',
      nextId: 'moreLesscorrectq25',
    },
    {
      answer: "26",
      nextId: 'inmoreLesscorrectq25',
    },
    {
      answer: "25",
      nextId: 'inmoreLesscorrectq25',
    },
  ],
  },
  
  moreLesscorrectq25: {
  botPrompt: 'Hurray! <strong>27</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[25],
    },
  ],
  },
  inmoreLesscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[25],
    },
  ],
  },
  
  //26
  ['moreLess'+shuffleArraynseve[25]]: {
  botPrompt: 'What is 1 more than 29?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['30', '28', "23","31"]),
  answers: [
    {
      answer: '30',
      nextId: 'moreLesscorrectq26',
    },
    {
      answer: '28',
      nextId: 'inmoreLesscorrectq26',
    },
    {
      answer: "23",
      nextId: 'inmoreLesscorrectq26',
    },
    {
      answer: "31",
      nextId: 'inmoreLesscorrectq26',
    },
  ],
  },
  
  moreLesscorrectq26: {
  botPrompt: 'Hurray! <strong>30</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[26],
    },
  ],
  },
  inmoreLesscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[26],
    },
  ],
  },
  
  //27
  ['moreLess'+shuffleArraynseve[26]]: {
  botPrompt: 'What is the number that is 1 more than 35?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['34', '36', "33","23"]),
    answers: [
      {
        answer: '34',
        nextId: 'inmoreLesscorrectq27',
      },
      {
        answer: '36',
        nextId: 'moreLesscorrectq27',
      },
      {
        answer: "33",
        nextId: 'inmoreLesscorrectq27',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq27',
      },
    ],
  },
  
  moreLesscorrectq27: {
  botPrompt: 'Hurray! <strong>36</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[27],
    },
  ],
  },
  inmoreLesscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"36"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[27],
    },
  ],
  },
  
  
  //28
  ['moreLess'+shuffleArraynseve[27]]: {
  botPrompt: 'What is the number that is 1 more than 34?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['33', '32', "31","35"]),
  answers: [
    {
      answer: '33',
      nextId: 'inmoreLesscorrectq28',
    },
    {
      answer: '32',
      nextId: 'inmoreLesscorrectq28',
    },
    {
      answer: "31",
      nextId: 'inmoreLesscorrectq28',
    },
    {
      answer: "35",
      nextId: 'moreLesscorrectq28',
    },
  ],
  },
  
  moreLesscorrectq28: {
  botPrompt: 'Hurray! <strong>35</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[28],
    },
  ],
  },
  inmoreLesscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[28],
    },
  ],
  },
  
  //29
  ['moreLess'+shuffleArraynseve[28]]: {
  botPrompt: 'What is the number that is 1 more than 33?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['32', '34', "31","36"]),
    answers: [
      {
        answer: '32',
        nextId: 'inmoreLesscorrectq29',
      },
      {
        answer: '34',
        nextId: 'moreLesscorrectq29',
      },
      {
        answer: "31",
        nextId: 'inmoreLesscorrectq29',
      },
      {
        answer: "36",
        nextId: 'inmoreLesscorrectq29',
      },
    ],
  },
  
  moreLesscorrectq29: {
  botPrompt: 'Hurray! <strong>34</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[29],
    },
  ],
  },
  inmoreLesscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[29],
    },
  ],
  },
  
  
  //30
  ['moreLess'+shuffleArraynseve[29]]: {
  botPrompt: 'What is the number that is 1 more than 32?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['33', '36', "31","23"]),
  answers: [
    {
      answer: '33',
      nextId: 'moreLesscorrectq30',
    },
    {
      answer: '36',
      nextId: 'inmoreLesscorrectq30',
    },
    {
      answer: "31",
      nextId: 'inmoreLesscorrectq30',
    },
    {
      answer: "23",
      nextId: 'inmoreLesscorrectq30',
    },
  ],
  },

  moreLesscorrectq30: {
  botPrompt: 'Hurray! <strong>33</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[30],
    },
  ],
  },
  inmoreLesscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"33"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[30],
    },
  ],
  },
  
  //31
  ['moreLess'+shuffleArraynseve[30]]: {
  botPrompt: 'What is 1 more than 1?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['0', '2', "3","4"]),
    answers: [
      {
        answer: '0',
        nextId: 'inmoreLesscorrectq31',
      },
      {
        answer: '2',
        nextId: 'moreLesscorrectq31',
      },
      {
        answer: "3",
        nextId: 'inmoreLesscorrectq31',
      },
      {
        answer: "4",
        nextId: 'inmoreLesscorrectq31',
      },
    ],
  },
  
  moreLesscorrectq31: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[31],
    },
  ],
  },
  inmoreLesscorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[31],
    },
  ],
  },
  
  //32
  ['moreLess'+shuffleArraynseve[31]]: {
  botPrompt: 'What is the number that is 1 more than 36?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['38', '39', "37","35"]),
  answers: [
    {
      answer: '38',
      nextId: 'inmoreLesscorrectq32',
    },
    {
      answer: '39',
      nextId: 'inmoreLesscorrectq32',
    },
    {
      answer: "37",
      nextId: 'moreLesscorrectq32',
    },
    {
      answer: "35",
      nextId: 'inmoreLesscorrectq32',
    },
  ],
  },
  
  moreLesscorrectq32: {
  botPrompt: 'Hurray! <strong>37</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[32],
    },
  ],
  },
  inmoreLesscorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[32],
    },
  ],
  },
  
  //33
  ['moreLess'+shuffleArraynseve[32]]: {
  botPrompt: 'What is 1 more than 49?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['50', '48', "47","44"]),
  answers: [
    {
      answer: '50',
      nextId: 'moreLesscorrectq33',
    },
    {
      answer: '48',
      nextId: 'inmoreLesscorrectq33',
    },
    {
      answer: "47",
      nextId: 'inmoreLesscorrectq33',
    },
    {
      answer: "44",
      nextId: 'inmoreLesscorrectq33',
    },
  ],
  },
  
  moreLesscorrectq33: {
  botPrompt: 'Hurray! <strong>50</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[33],
    },
  ],
  },
  inmoreLesscorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"50"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[33],
    },
  ],
  },
  
  //34
  ['moreLess'+shuffleArraynseve[33]]: {
  botPrompt: 'What is 1 more than 47?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '48', "46","45"]),
    answers: [
      {
        answer: '49',
        nextId: 'inmoreLesscorrectq34',
      },
      {
        answer: '48',
        nextId: 'moreLesscorrectq34',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq34',
      },
      {
        answer: "45",
        nextId: 'inmoreLesscorrectq34',
      },
    ],
  },
  
  moreLesscorrectq34: {
  botPrompt: 'Hurray! <strong>48</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[34],
    },
  ],
  },
  inmoreLesscorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"48"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[34],
    },
  ],
  },
  
  
  //35
  ['moreLess'+shuffleArraynseve[34]]: {
  botPrompt: 'What is the number that is 1 more than 40?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['39', '41', "42","44"]),
  answers: [
    {
      answer: '39',
      nextId: 'inmoreLesscorrectq35',
    },
    {
      answer: '41',
      nextId: 'moreLesscorrectq35',
    },
    {
      answer: "42",
      nextId: 'inmoreLesscorrectq35',
    },
    {
      answer: "44",
      nextId: 'inmoreLesscorrectq35',
    },
  ],
  },
  
  moreLesscorrectq35: {
  botPrompt: 'Hurray! <strong>41</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[35],
    },
  ],
  },
  inmoreLesscorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[35],
    },
  ],
  },
  
  //36
  ['moreLess'+shuffleArraynseve[35]]: {
    botPrompt: 'What is the number that is 1 more than 43?',
    type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['44', '46', "45","48"]),
  answers: [
    {
      answer: '44',
      nextId: 'moreLesscorrectq36',
    },
    {
      answer: '46',
      nextId: 'inmoreLesscorrectq36',
    },
    {
      answer: "45",
      nextId: 'inmoreLesscorrectq36',
    },
    {
      answer: "48",
      nextId: 'inmoreLesscorrectq36',
    },
  ],
  },
  moreLesscorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>44</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[36],
      },
    ],
  },
  inmoreLesscorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[36],
      },
    ],
  },
  
  //37
  ['moreLess'+shuffleArraynseve[36]]: {
  botPrompt: 'What is the number that is 1 more than 46?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '42', "47","45"]),
  answers: [
    {
      answer: '49',
      nextId: 'inmoreLesscorrectq37',
    },
    {
      answer: '42',
      nextId: 'inmoreLesscorrectq37',
    },
    {
      answer: "47",
      nextId: 'moreLesscorrectq37',
    },
    {
      answer: "45",
      nextId: 'inmoreLesscorrectq37',
    },
  ],
  },
  moreLesscorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>47</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[37],
    },
  ],
  },
  inmoreLesscorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[37],
    },
  ],
  },
  
  //38
  ['moreLess'+shuffleArraynseve[37]]: {
  botPrompt: 'What is 1 more than 48?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '47', "46","50"]),
    answers: [
      {
        answer: '49',
        nextId: 'moreLesscorrectq38',
      },
      {
        answer: '47',
        nextId: 'inmoreLesscorrectq38',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq38',
      },
      {
        answer: "50",
        nextId: 'inmoreLesscorrectq38',
      },
    ],
  },
  moreLesscorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>49</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[38],
    },
  ],
  },
  inmoreLesscorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[38],
    },
  ],
  },
  
  //39
  ['moreLess'+shuffleArraynseve[38]]: {
  botPrompt: 'What is 1 more than 41?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['43', '46', "42","44"]),
  answers: [
    {
      answer: '43',
      nextId: 'inmoreLesscorrectq39',
    },
    {
      answer: '46',
      nextId: 'inmoreLesscorrectq39',
    },
    {
      answer: "42",
      nextId: 'moreLesscorrectq39',
    },
    {
      answer: "44",
      nextId: 'inmoreLesscorrectq39',
    },
  ],
  },
  moreLesscorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>42</strong> Answers! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[39],
    },
  ],
  },
  inmoreLesscorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[39],
    },
  ],
  },
  
  //40
  ['moreLess'+shuffleArraynseve[39]]: {
  botPrompt: 'What is the number that is 1 more than 38?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['37', '39', "40","32"]),
    answers: [
      {
        answer: '37',
        nextId: 'inmoreLesscorrectq40',
      },
      {
        answer: '39',
        nextId: 'moreLesscorrectq40',
      },
      {
        answer: "40",
        nextId: 'inmoreLesscorrectq40',
      },
      {
        answer: "32",
        nextId: 'inmoreLesscorrectq40',
      },
    ],
  },
  moreLesscorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>39</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[40],
    },
  ],
  },
  inmoreLesscorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[40],
    },
  ],
  },
  
  //41
  ["moreLess"+shuffleArraynseve[40]]: {
    botPrompt: 'What is the number that is 1 more than 44?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['48', '47', "45","43"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq41',
      },
      {
        answer: '47',
        nextId: 'inmoreLesscorrectq41',
      },
      {
        answer: "45",
        nextId: 'moreLesscorrectq41',
      },
      {
        answer: "43",
        nextId: 'inmoreLesscorrectq41',
      },
    ],
  },
  moreLesscorrectq41: {
    botPrompt: 'Hurray <strong>45</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[41],
      },
    ],
  },
  inmoreLesscorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[41],
      },
    ],
  },
  
  //42
  
  ['moreLess'+shuffleArraynseve[41]]: {
    botPrompt: 'What is the number that is 1 more than 45?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['44', '41', "46","42"]),
    answers: [
      {
        answer: '44',
        nextId: 'inmoreLesscorrectq42',
      },
      {
        answer: '41',
        nextId: 'inmoreLesscorrectq42',
      },
      {
        answer: "46",
        nextId: 'moreLesscorrectq42',
      },
      {
        answer: "42",
        nextId: 'inmoreLesscorrectq42',
      },
    ],
  },
  
  moreLesscorrectq42: {
    botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[42],
      },
    ],
  },
  inmoreLesscorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[42],
      },
    ],
  },
  
  //43
  ['moreLess'+shuffleArraynseve[42]]: {
  botPrompt: "What is the number that is 1 more than 37?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['36', '33', "39","38"]),
    answers: [
      {
        answer: '36',
        nextId: 'inmoreLesscorrectq43',
      },
      {
        answer: '33',
        nextId: 'inmoreLesscorrectq43',
      },
      {
        answer: "39",
        nextId: 'inmoreLesscorrectq43',
      },
      {
        answer: "38",
        nextId: 'moreLesscorrectq43',
      },
    ],
  },
  
  moreLesscorrectq43: {
  botPrompt: 'Hurray! <strong>38</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[43],
    },
  ],
  },
  inmoreLesscorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[43],
    },
  ],
  },
  
  //44
  ['moreLess'+shuffleArraynseve[43]]: {
  botPrompt: 'What is 1 more than 24?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['26', '27', "25","23"]),
    answers: [
      {
        answer: '26',
        nextId: 'inmoreLesscorrectq44',
      },
      {
        answer: '27',
        nextId: 'inmoreLesscorrectq44',
      },
      {
        answer: "25",
        nextId: 'moreLesscorrectq44',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq44',
      },
    ],
  },
  
  moreLesscorrectq44: {
  botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[44],
    },
  ],
  },
  inmoreLesscorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[44],
    },
  ],
  },
  
  //45
  ['moreLess'+shuffleArraynseve[44]]: {
  botPrompt: 'What is 1 more than 27?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '25', "26","24"]),
    answers: [
      {
        answer: '28',
        nextId: 'moreLesscorrectq45',
      },
      {
        answer: '25',
        nextId: 'inmoreLesscorrectq45',
      },
      {
        answer: "26",
        nextId: 'inmoreLesscorrectq45',
      },
      {
        answer: "24",
        nextId: 'inmoreLesscorrectq45',
      },
    ],
  },
  
  moreLesscorrectq45: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[45],
    },
  ],
  },
  inmoreLesscorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[45],
    },
  ],
  },
  
  //46
  ['moreLess'+shuffleArraynseve[45]]: {
  botPrompt: 'What is 1 more than 28?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['24', '29', "27","28"]),
    answers: [
      {
        answer: '24',
        nextId: 'inmoreLesscorrectq46',
      },
      {
        answer: '29',
        nextId: 'inmoreLesscorrectq46',
      },
      {
        answer: "27",
        nextId: 'inmoreLesscorrectq46',
      },
      {
        answer: "28",
        nextId: 'moreLesscorrectq46',
      },
    ],
  },
  
  moreLesscorrectq46: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[46],
    },
  ],
  },
  inmoreLesscorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[46],
    },
  ],
  },
  
  //47
  ['moreLess'+shuffleArraynseve[46]]: {
  botPrompt: 'What is 1 more than 38?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['39', '37', "33","36"]),
    answers: [
      {
        answer: '39',
        nextId: 'moreLesscorrectq47',
      },
      {
        answer: '37',
        nextId: 'inmoreLesscorrectq47',
      },
      {
        answer: "33",
        nextId: 'inmoreLesscorrectq47',
      },
      {
        answer: "36",
        nextId: 'inmoreLesscorrectq47',
      },
    ],
  },
  
  moreLesscorrectq47: {
  botPrompt: 'Hurray! <strong>39</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[47],
    },
  ],
  },
  inmoreLesscorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[47],
    },
  ],
  },


  //48
  ['moreLess'+shuffleArraynseve[47]]: {
  botPrompt: 'What is the number that is 1 more than 39?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['35', '40', "42","38"]),
    answers: [
      {
        answer: '35',
        nextId: 'inmoreLesscorrectq48',
      },
      {
        answer: '40',
        nextId: 'moreLesscorrectq48',
      },
      {
        answer: "42",
        nextId: 'inmoreLesscorrectq48',
      },
      {
        answer: "38",
        nextId: 'inmoreLesscorrectq48',
      },
    ],
  },
  
  moreLesscorrectq48: {
  botPrompt: 'Hurray! <strong>40</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[48],
    },
  ],
  },
  inmoreLesscorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[48],
    },
  ],
  },
  
  //49
  ['moreLess'+shuffleArraynseve[48]]: {
  botPrompt: 'What is the number that is 1 more than 42?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['43', '45', "44","41"]),
    answers: [
      {
        answer: '43',
        nextId: 'moreLesscorrectq49',
      },
      {
        answer: '45',
        nextId: 'inmoreLesscorrectq49',
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq49',
      },
      {
        answer: "41",
        nextId: 'inmoreLesscorrectq49',
      },
    ],
  },
  
  moreLesscorrectq49: {
  botPrompt: 'Hurray! <strong>43</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[49],
    },
  ],
  },
  inmoreLesscorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[49],
    },
  ],
  },
  
  
  //50
  ['moreLess'+shuffleArraynseve[49]]: {
  botPrompt: 'What is 1 less than 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "5","1"]),
    answers: [
      {
        answer: '2',
        nextId: 'inmoreLesscorrectq50',
      },
      {
        answer: '3',
        nextId: 'moreLesscorrectq50',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrectq50',
      },
      {
        answer: "1",
        nextId: 'inmoreLesscorrectq50',
      },
    ],
  },
  
  moreLesscorrectq50: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[50],
    },
  ],
  },
  inmoreLesscorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[50],
    },
  ],
  },
  
  //51
  ['moreLess'+shuffleArraynseve[50]]: {
  botPrompt: 'What number is 1 less than 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '3', "4","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'moreLesscorrectq51',
      },
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq51',
      },
      {
        answer: "4",
        nextId: 'inmoreLesscorrectq51',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrectq51',
      },
    ],
  },
  
  moreLesscorrectq51: {
  botPrompt: 'Hurray! <strong>1</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[51],
    },
  ],
  },
  inmoreLesscorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[51],
    },
  ],
  },
  
  //52
  ['moreLess'+shuffleArraynseve[51]]: {
  botPrompt: 'What is 1 less than 5?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'inmoreLesscorrectq52',
      },
      {
        answer: '2',
        nextId: 'inmoreLesscorrectq52',
      },
      {
        answer: "3",
        nextId: 'inmoreLesscorrectq52',
      },
      {
        answer: "4",
        nextId: 'moreLesscorrectq52',
      },
    ],
  },
  
  moreLesscorrectq52: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[52],
    },
  ],
  },
  inmoreLesscorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[52],
    },
  ],
  },
  
  //53
  ['moreLess'+shuffleArraynseve[52]]: {
  botPrompt: 'What is 1 less than 3?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '3', "2","6"]),
    answers: [
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq53',
      },
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq53',
      },
      {
        answer: "2",
        nextId: 'moreLesscorrectq53',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq53',
      },
    ],
  },

  moreLesscorrectq53: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[53],
    },
  ],
  },
  inmoreLesscorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[53],
    },
  ],
  },
  
  //54
  ['moreLess'+shuffleArraynseve[53]]: {
  botPrompt: 'What is 1 less than 6?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['4', '1', "3","5"]),
    answers: [
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq54',
      },
      {
        answer: '1',
        nextId: 'inmoreLesscorrectq54',
      },
      {
        answer: "3",
        nextId: 'inmoreLesscorrectq54',
      },
      {
        answer: "5",
        nextId: 'moreLesscorrectq54',
      },
    ],
  },
  
  moreLesscorrectq54: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[54],
    },
  ],
  },
  inmoreLesscorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[54],
    },
  ],
  },
  
  
  //55
  ['moreLess'+shuffleArraynseve[54]]: {
  botPrompt: 'What number is 1 less than 10?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '11', "10","8"]),
    answers: [
      {
        answer: '9',
        nextId: 'moreLesscorrectq55',
      },
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq55',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq55',
      },
      {
        answer: "8",
        nextId: 'inmoreLesscorrectq55',
      },
    ],
  },
  
  moreLesscorrectq55: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[55],
    },
  ],
  },
  inmoreLesscorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[55],
    },
  ],
  },
  
  //56
  ['moreLess'+shuffleArraynseve[55]]: {
    botPrompt: 'What number is 1 less than 8?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '4', "7","2"]),
    answers: [
      {
        answer: '6',
        nextId: 'inmoreLesscorrectq56',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq56',
      },
      {
        answer: "7",
        nextId: 'moreLesscorrectq56',
      },
      {
        answer: "2",
        nextId: 'inmoreLesscorrectq56',
      },
    ],
  },
  moreLesscorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>7</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[56],
      },
    ],
  },
  inmoreLesscorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[56],
      },
    ],
  },

  //57
  ['moreLess'+shuffleArraynseve[56]]: {
  botPrompt: 'What number is 1 less than 7?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '6', "8","4"]),
    answers: [
      {
        answer: '5',
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: '6',
        nextId: 'moreLesscorrectq57',
      },
      {
        answer: "8",
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: "4",
        nextId: 'inmoreLesscorrectq57',
      },
    ],
  },
  moreLesscorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[57],
    },
  ],
  },
  inmoreLesscorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[57],
    },
  ],
  },
  
  //58
  ['moreLess'+shuffleArraynseve[57]]: {
  botPrompt: 'What is 1 less than 9?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "10","8"]),
  answers: [
    {
      answer: '6',
      nextId: 'inmoreLesscorrectq58',
    },
    {
      answer: '7',
      nextId: 'inmoreLesscorrectq58',
    },
    {
      answer: "10",
      nextId: 'inmoreLesscorrectq58',
    },
    {
      answer: "8",
      nextId: 'moreLesscorrectq58',
    },
  ],
  },
  moreLesscorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>8</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[58],
    },
  ],
  },
  inmoreLesscorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[58],
    },
  ],
  },
  
  //59
  ['moreLess'+shuffleArraynseve[58]]: {
  botPrompt: 'What is 1 less than 12?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['12', '13', "11","9"]),
    answers: [
      {
        answer: '12',
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: "11",
        nextId: 'moreLesscorrectq57',
      },
      {
        answer: "9",
        nextId: 'inmoreLesscorrectq57',
      },
    ],
  },
  moreLesscorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>11</strong> Answers! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[59],
    },
  ],
  },
  inmoreLesscorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[59],
    },
  ],
  },
  
  //60
  ['moreLess'+shuffleArraynseve[59]]: {
  botPrompt: 'What number is 1 less than 11?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['11', '13', "14","12"]),
  answers: [
    {
      answer: '11',
      nextId: 'inmoreLesscorrectq60',
    },
    {
      answer: '13',
      nextId: 'inmoreLesscorrectq60',
    },
    {
      answer: "14",
      nextId: 'inmoreLesscorrectq60',
    },
    {
      answer: "12",
      nextId: 'moreLesscorrectq60',
    },
  ],
  },
  moreLesscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>12</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[60],
    },
  ],
  },
  inmoreLesscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[60],
    },
  ],
  },
  
  //61
  ["moreLess"+shuffleArraynseve[60]]: {
    botPrompt: 'What number is 1 less than 15?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['14', '13', "12","11"]),
    answers: [
      {
        answer: '14',
        nextId: 'moreLesscorrectq61',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq61',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq61',
      },
      {
        answer: "11",
        nextId: 'inmoreLesscorrectq61',
      },
    ],
  },
  moreLesscorrectq61: {
    botPrompt: 'Hurray <strong>14</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[61],
      },
    ],
  },
  inmoreLesscorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[61],
      },
    ],
  },
  
  //62
  ['moreLess'+shuffleArraynseve[61]]: {
    botPrompt: 'What is 1 less than 22?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['21', '23', "24","25"]),
    answers: [
      {
        answer: '21',
        nextId: 'moreLesscorrectq62',
      },
      {
        answer: '23',
        nextId: 'inmoreLesscorrectq62',
      },
      {
        answer: "24",
        nextId: 'inmoreLesscorrectq62',
      },
      {
        answer: "25",
        nextId: 'inmoreLesscorrectq62',
      },
    ],
  },
  
  moreLesscorrectq62: {
    botPrompt: 'Hurray! <strong>21</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[62],
      },
    ],
  },
  inmoreLesscorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[62],
      },
    ],
  },
  
  //63
  ['moreLess'+shuffleArraynseve[62]]: {
  botPrompt: "What is 1 less than 14?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['16', '15', "13","11"]),
    answers: [
      {
        answer: '16',
        nextId: 'inmoreLesscorrectq63',
      },
      {
        answer: '15',
        nextId: 'inmoreLesscorrectq63',
      },
      {
        answer: "13",
        nextId: 'moreLesscorrectq63',
      },
      {
        answer: "11",
        nextId: 'inmoreLesscorrectq63',
      },
    ],
  },
  
  moreLesscorrectq63: {
  botPrompt: 'Hurray! <strong>13</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[63],
    },
  ],
  },
  inmoreLesscorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[63],
    },
  ],
  },

  //64
  ['moreLess'+shuffleArraynseve[63]]: {
  botPrompt: 'What is 1 less than 18?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['16', '17', "19","15"]),
  answers: [
    {
      answer: '16',
      nextId: 'inmoreLesscorrectq64',
    },
    {
      answer: '17',
      nextId: 'moreLesscorrectq64',
    },
    {
      answer: "19",
      nextId: 'inmoreLesscorrectq64',
    },
    {
      answer: "15",
      nextId: 'inmoreLesscorrectq64',
    },
  ],
  },
  
  moreLesscorrectq64: {
  botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[64],
    },
  ],
  },
  inmoreLesscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[64],
    },
  ],
  },
  
  //65
  ['moreLess'+shuffleArraynseve[64]]: {
  botPrompt: 'What number is 1 less than 20?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['18', '21', "23","19"]),
    answers: [
      {
        answer: '18',
        nextId: 'inmoreLesscorrectq65',
      },
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq65',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq65',
      },
      {
        answer: "19",
        nextId: 'moreLesscorrectq65',
      },
    ],
  },
  
  moreLesscorrectq65: {
  botPrompt: 'Hurray! <strong>19</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[65],
    },
  ],
  },
  inmoreLesscorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[65],
    },
  ],
  },
  
  //66
  ['moreLess'+shuffleArraynseve[65]]: {
  botPrompt: 'What number is 1 less than 16?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['15', '14', "13","12"]),
  answers: [
    {
      answer: '15',
      nextId: 'moreLesscorrectq66',
    },
    {
      answer: '14',
      nextId: 'inmoreLesscorrectq66',
    },
    {
      answer: "13",
      nextId: 'inmoreLesscorrectq66',
    },
    {
      answer: "12",
      nextId: 'inmoreLesscorrectq66',
    },
  ],
  },
  
  moreLesscorrectq66: {
  botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[66],
    },
  ],
  },
  inmoreLesscorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[66],
    },
  ],
  },
  
  //67
  ['moreLess'+shuffleArraynseve[66]]: {
  botPrompt: 'What number is 1 less than 17?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['15', '18', "14","16"]),
  answers: [
    {
      answer: '15',
      nextId: 'inmoreLesscorrectq67',
    },
    {
      answer: '18',
      nextId: 'inmoreLesscorrectq67',
    },
    {
      answer: "14",
      nextId: 'inmoreLesscorrectq67',
    },
    {
      answer: "16",
      nextId: 'moreLesscorrectq67',
    },
  ],
  },
  
  moreLesscorrectq67: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[67],
    },
  ],
  },
  inmoreLesscorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[67],
    },
  ],
  },
  
  
  //68
  ['moreLess'+shuffleArraynseve[67]]: {
  botPrompt: 'What number is 1 less than 25?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['21', '21', "23","24"]),
    answers: [
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq68',
      },
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq68',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq68',
      },
      {
        answer: "24",
        nextId: 'moreLesscorrectq68',
      },
    ],
  },
  
  moreLesscorrectq68: {
  botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[68],
    },
  ],
  },
  inmoreLesscorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[68],
    },
  ],
  },
  
  //69
  ['moreLess'+shuffleArraynseve[68]]: {
  botPrompt: 'What number is 1 less than 13?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['12', '13', "14","11"]),
  answers: [
    {
      answer: '12',
      nextId: 'moreLesscorrectq69',
    },
    {
      answer: '13',
      nextId: 'inmoreLesscorrectq69',
    },
    {
      answer: "14",
      nextId: 'inmoreLesscorrectq69',
    },
    {
      answer: "11",
      nextId: 'inmoreLesscorrectq69',
    },
  ],
  },
  
  moreLesscorrectq69: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[69],
    },
  ],
  },
  inmoreLesscorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[69],
    },
  ],
  },

  
  //70
  ['moreLess'+shuffleArraynseve[69]]: {
  botPrompt: 'What number is 1 less than 23?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['21', '24', "22","25"]),
  answers: [
    {
      answer: '21',
      nextId: 'inmoreLesscorrectq70',
    },
    {
      answer: '24',
      nextId: 'inmoreLesscorrectq70',
    },
    {
      answer: "22",
      nextId: 'moreLesscorrectq70',
    },
    {
      answer: "25",
      nextId: 'inmoreLesscorrectq70',
    },
  ],
  },

  moreLesscorrectq70: {
  botPrompt: 'Hurray! <strong>22</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[70],
    },
  ],
  },
  inmoreLesscorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[70],
    },
  ],
  },

  //71
  ['moreLess'+shuffleArraynseve[70]]: {
  botPrompt: 'What is 1 less than 19?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['21', '18', "20","17"]),
    answers: [
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq71',
      },
      {
        answer: '18',
        nextId: 'moreLesscorrectq71',
      },
      {
        answer: "20",
        nextId: 'inmoreLesscorrectq71',
      },
      {
        answer: "17",
        nextId: 'inmoreLesscorrectq71',
      },
    ],
  },

  moreLesscorrectq71: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[71],
    },
  ],
  },
  inmoreLesscorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[71],
    },
  ],
  },

  //72
  ['moreLess'+shuffleArraynseve[71]]: {
  botPrompt: 'What is 1 less than 28?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['25', '26', "29","27"]),
  answers: [
    {
      answer: '25',
      nextId: 'inmoreLesscorrectq72',
    },
    {
      answer: '26',
      nextId: 'inmoreLesscorrectq72',
    },
    {
      answer: "29",
      nextId: 'inmoreLesscorrectq72',
    },
    {
      answer: "27",
      nextId: 'moreLesscorrectq72',
    },
  ],
  },

  moreLesscorrectq72: {
  botPrompt: 'Hurray! <strong>27</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[72],
    },
  ],
  },
  inmoreLesscorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[72],
    },
  ],
  },

  //73
  ['moreLess'+shuffleArraynseve[72]]: {
  botPrompt: 'What is 1 less than 26?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['27', '29', "25","28"]),
    answers: [
      {
        answer: '27',
        nextId: 'inmoreLesscorrectq73',
      },
      {
        answer: '29',
        nextId: 'inmoreLesscorrectq73',
      },
      {
        answer: "25",
        nextId: 'moreLesscorrectq73',
      },
      {
        answer: "28",
        nextId: 'inmoreLesscorrectq73',
      },
    ],
  },

  moreLesscorrectq73: {
  botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[73],
    },
  ],
  },
  inmoreLesscorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[73],
    },
  ],
  },

  //74
  ['moreLess'+shuffleArraynseve[73]]: {
  botPrompt: 'What is 1 less than 29?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['30', '28', "27","29"]),
  answers: [
    {
      answer: '30',
      nextId: 'inmoreLesscorrectq74',
    },
    {
      answer: '28',
      nextId: 'moreLesscorrectq74',
    },
    {
      answer: "27",
      nextId: 'inmoreLesscorrectq74',
    },
    {
      answer: "29",
      nextId: 'inmoreLesscorrectq74',
    },
  ],
  },

  moreLesscorrectq74: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[74],
    },
  ],
  },
  inmoreLesscorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[74],
    },
  ],
  },


  //75
  ['moreLess'+shuffleArraynseve[74]]: {
  botPrompt: 'What is 1 less than 21?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['22', '23', "24","20"]),
    answers: [
      {
        answer: '22',
        nextId: 'inmoreLesscorrectq75',
      },
      {
        answer: '23',
        nextId: 'inmoreLesscorrectq75',
      },
      {
        answer: "24",
        nextId: 'inmoreLesscorrectq75',
      },
      {
        answer: "20",
        nextId: 'moreLesscorrectq75',
      },
    ],
  },

  moreLesscorrectq75: {
  botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[75],
    },
  ],
  },
  inmoreLesscorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[75],
    },
  ],
  },

  //76
  ['moreLess'+shuffleArraynseve[75]]: {
    botPrompt: 'What is 1 less than 27?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['26', '27', "28","29"]),
    answers: [
      {
        answer: '26',
        nextId: 'inmoreLesscorrectq76',
      },
      {
        answer: '27',
        nextId: 'inmoreLesscorrectq76',
      },
      {
        answer: "28",
        nextId: 'moreLesscorrectq76',
      },
      {
        answer: "29",
        nextId: 'inmoreLesscorrectq76',
      },
    ],
  },
  moreLesscorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>28</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[76],
      },
    ],
  },
  inmoreLesscorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[76],
      },
    ],
  },

  //77
  ['moreLess'+shuffleArraynseve[76]]: {
  botPrompt: 'What number is 1 less than 24?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['23', '31', "22","33"]),
    answers: [
      {
        answer: '23',
        nextId: 'moreLesscorrectq77',
      },
      {
        answer: '31',
        nextId: 'inmoreLesscorrectq77',
      },
      {
        answer: "22",
        nextId: 'inmoreLesscorrectq77',
      },
      {
        answer: "33",
        nextId: 'inmoreLesscorrectq77',
      },
    ],
  },
  moreLesscorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>23</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  inmoreLesscorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },



  //78
  ['moreLess'+shuffleArraynseve[77]]: {
    botPrompt: 'What number is 1 less than 30? ',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['29', '28', "27","26"]),
      answers: [
        {
          answer: '29',
          nextId: 'moreLesscorrectq78',
        },
        {
          answer: '28',
          nextId: 'inmoreLesscorrectq78',
        },
        {
          answer: "27",
          nextId: 'inmoreLesscorrectq78',
        },
        {
          answer: "26",
          nextId: 'inmoreLesscorrectq78',
        },
      ],
    },
    
    moreLesscorrectq78: {
    botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[78],
      },
    ],
    },
    inmoreLesscorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[78],
      },
    ],
    },
    
    //79
    ['moreLess'+shuffleArraynseve[78]]: {
    botPrompt: 'What number is 1 less than 37?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['35', '36', "34","33"]),
      answers: [
        {
          answer: '35',
          nextId: 'inmoreLesscorrectq79',
        },
        {
          answer: '36',
          nextId: 'moreLesscorrectq79',
        },
        {
          answer: "34",
          nextId: 'inmoreLesscorrectq79',
        },
        {
          answer: "33",
          nextId: 'inmoreLesscorrectq79',
        },
      ],
    },
    
    moreLesscorrectq79: {
    botPrompt: 'Hurray! <strong>36</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[79],
      },
    ],
    },
    inmoreLesscorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"36"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[79],
      },
    ],
    },
    
    
    //80
    ['moreLess'+shuffleArraynseve[79]]: {
    botPrompt: ' What number is 1 less than 39?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['36', '37', "38","35"]),
      answers: [
        {
          answer: '36',
          nextId: 'inmoreLesscorrectq80',
        },
        {
          answer: '37',
          nextId: 'inmoreLesscorrectq80',
        },
        {
          answer: "38",
          nextId: 'moreLesscorrectq80',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq80',
        },
      ],
    },
    
    moreLesscorrectq80: {
    botPrompt: 'Hurray! <strong>38</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[80],
      },
    ],
    },
    inmoreLesscorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[80],
      },
    ],
    },
    
    //81
    ['moreLess'+shuffleArraynseve[80]]: {
    botPrompt: 'What number is 1 less than 31?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['32', '33', "34","30"]),
      answers: [
        {
          answer: '32',
          nextId: 'inmoreLesscorrectq51',
        },
        {
          answer: '33',
          nextId: 'inmoreLesscorrectq51',
        },
        {
          answer: "34",
          nextId: 'inmoreLesscorrectq51',
        },
        {
          answer: "30",
          nextId: 'moreLesscorrectq51',
        },
      ],
    },
    
    moreLesscorrectq51: {
    botPrompt: 'Hurray! <strong>30</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[51],
      },
    ],
    },
    inmoreLesscorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[51],
      },
    ],
    },
    
    //82
    ['moreLess'+shuffleArraynseve[81]]: {
    botPrompt: 'What number is 1 less than 32?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['33', '35', "31","34"]),
      answers: [
        {
          answer: '33',
          nextId: 'inmoreLesscorrectq82',
        },
        {
          answer: '35',
          nextId: 'inmoreLesscorrectq82',
        },
        {
          answer: "31",
          nextId: 'moreLesscorrectq82',
        },
        {
          answer: "34",
          nextId: 'inmoreLesscorrectq82',
        },
      ],
    },
    
    moreLesscorrectq82: {
    botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[82],
      },
    ],
    },
    inmoreLesscorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[82],
      },
    ],
    },
    
    //83
    ['moreLess'+shuffleArraynseve[82]]: {
    botPrompt: 'What is 1 less than 34?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['31', '34', "35","36"]),
      answers: [
        {
          answer: '31',
          nextId: 'moreLesscorrectq83',
        },
        {
          answer: '34',
          nextId: 'inmoreLesscorrectq83',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq83',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq83',
        },
      ],
    },
  
    moreLesscorrectq83: {
    botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[83],
      },
    ],
    },
    inmoreLesscorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[83],
      },
    ],
    },
    
    //84
    ['moreLess'+shuffleArraynseve[83]]: {
    botPrompt: 'What is 1 less than 33?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['32', '33', "35","36"]),
      answers: [
        {
          answer: '32',
          nextId: 'inmoreLesscorrectq84',
        },
        {
          answer: '33',
          nextId: 'moreLesscorrectq84',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq84',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq84',
        },
      ],
    },
    
    moreLesscorrectq84: {
    botPrompt: 'Hurray! <strong>33</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[84],
      },
    ],
    },
    inmoreLesscorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"33"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[84],
      },
    ],
    },
    
    
    //85
    ['moreLess'+shuffleArraynseve[84]]: {
    botPrompt: 'What is 1 less than 35?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['34', '35', "36","37"]),
      answers: [
        {
          answer: '34',
          nextId: 'moreLesscorrectq85',
        },
        {
          answer: '35',
          nextId: 'inmoreLesscorrectq85',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq85',
        },
        {
          answer: "37",
          nextId: 'inmoreLesscorrectq85',
        },
      ],
    },
    
    moreLesscorrectq85: {
    botPrompt: 'Hurray! <strong>34</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[85],
      },
    ],
    },
    inmoreLesscorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[85],
      },
    ],
    },
    
    //86
    ['moreLess'+shuffleArraynseve[85]]: {
      botPrompt: 'What is 1 less than 38?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['37', '38', "39","40"]),
      answers: [
        {
          answer: '37',
          nextId: 'moreLesscorrectq86',
        },
        {
          answer: '38',
          nextId: 'inmoreLesscorrectq86',
        },
        {
          answer: "39",
          nextId: 'inmoreLesscorrectq86',
        },
        {
          answer: "40",
          nextId: 'inmoreLesscorrectq86',
        },
      ],
    },
    moreLesscorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>37</strong> 😎',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[86],
        },
      ],
    },
    inmoreLesscorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[86],
        },
      ],
    },
  
    //87
    ['moreLess'+shuffleArraynseve[86]]: {
    botPrompt: 'What is 1 less than 36?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['33', '34', "35","36"]),
      answers: [
        {
          answer: '33',
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: '34',
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: "35",
          nextId: 'moreLesscorrectq87',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq87',
        },
      ],
    },
    moreLesscorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>35</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[87],
      },
    ],
    },
    inmoreLesscorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[87],
      },
    ],
    },
    
    //88
    ['moreLess'+shuffleArraynseve[87]]: {
    botPrompt: 'What number is 1 less than 44?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['48', '47', "49","43"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq88',
      },
      {
        answer: '47',
        nextId: 'inmoreLesscorrectq88',
      },
      {
        answer: "here",
        nextId: 'inmoreLesscorrectq88',
      },
      {
        answer: "43",
        nextId: 'moreLesscorrectq88',
      },
    ],
    },
    moreLesscorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>43</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[88],
      },
    ],
    },
    inmoreLesscorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[88],
      },
    ],
    },
    
    //89
    ['moreLess'+shuffleArraynseve[88]]: {
    botPrompt: 'What number is 1 less than 40?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['39', '37', "36","35"]),
      answers: [
        {
          answer: '39',
          nextId: 'moreLesscorrectq87',
        },
        {
          answer: '37',
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq87',
        },
      ],
    },
    moreLesscorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>39</strong> Answers! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[89],
      },
    ],
    },
    inmoreLesscorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[89],
      },
    ],
    },
    
    //90
    ['moreLess'+shuffleArraynseve[89]]: {
    botPrompt: 'What number is 1 less than 41?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['40', '42', "43","44"]),
    answers: [
      {
        answer: '40',
        nextId: 'moreLesscorrectq90',
      },
      {
        answer: '42',
        nextId: 'inmoreLesscorrectq90',
      },
      {
        answer: "43",
        nextId: 'inmoreLesscorrectq90',
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq90',
      },
    ],
    },
    moreLesscorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>40</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[90],
      },
    ],
    },
    inmoreLesscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[90],
      },
    ],
    },
    
    //91
    ["moreLess"+shuffleArraynseve[90]]: {
      botPrompt: 'What number is 1 less than 42?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['41', '44', "43","45"]),
      answers: [
        {
          answer: '41',
          nextId: 'moreLesscorrectq91',
        },
        {
          answer: '44',
          nextId: 'inmoreLesscorrectq91',
        },
        {
          answer: "43",
          nextId: 'inmoreLesscorrectq91',
        },
        {
          answer: "45",
          nextId: 'inmoreLesscorrectq91',
        },
      ],
    },
    moreLesscorrectq91: {
      botPrompt: 'Hurray <strong>41</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[91],
        },
      ],
    },
    inmoreLesscorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[91],
        },
      ],
    },
    
    //92
    ['moreLess'+shuffleArraynseve[91]]: {
      botPrompt: 'What number is 1 less than 49?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['45', '46', "47","48"]),
      answers: [
        {
          answer: '45',
          nextId: 'inmoreLesscorrectq92',
        },
        {
          answer: '46',
          nextId: 'inmoreLesscorrectq92',
        },
        {
          answer: "47",
          nextId: 'inmoreLesscorrectq92',
        },
        {
          answer: "48",
          nextId: 'moreLesscorrectq92',
        },
      ],
    },
    
    moreLesscorrectq92: {
      botPrompt: 'Hurray! <strong>48</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[92],
        },
      ],
    },
    inmoreLesscorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"48"</strong>',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[92],
        },
      ],
    },
    
    //93
    ['moreLess'+shuffleArraynseve[92]]: {
    botPrompt: "What is 1 less than 45?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['41', '42', "43","44"]),
      answers: [
        {
          answer: '41',
          nextId: 'inmoreLesscorrectq93',
        },
        {
          answer: '42',
          nextId: 'inmoreLesscorrectq93',
        },
        {
          answer: "43",
          nextId: 'inmoreLesscorrectq93',
        },
        {
          answer: "44",
          nextId: 'moreLesscorrectq93',
        },
      ],
    },
    
    moreLesscorrectq93: {
    botPrompt: 'Hurray! <strong>44</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[93],
      },
    ],
    },
    inmoreLesscorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[93],
      },
    ],
    },
  
    //94
    ['moreLess'+shuffleArraynseve[93]]: {
    botPrompt: 'What is 1 less than 43?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['45', '44', "46","42"]),
    answers: [
      {
        answer: '45',
        nextId: 'inmoreLesscorrectq94',
      },
      {
        answer: '44',
        nextId: 'inmoreLesscorrectq94',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq94',
      },
      {
        answer: "42",
        nextId: 'moreLesscorrectq94',
      },
    ],
    },
    
    moreLesscorrectq94: {
    botPrompt: 'Hurray! <strong>42</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[94],
      },
    ],
    },
    inmoreLesscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[94],
      },
    ],
    },
    
    //95
    ['moreLess'+shuffleArraynseve[94]]: {
    botPrompt: 'What is 1 less than 46?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['45', '44', "43","42"]),
      answers: [
        {
          answer: '45',
          nextId: 'moreLesscorrectq95',
        },
        {
          answer: '44',
          nextId: 'inmoreLesscorrectq95',
        },
        {
          answer: "43",
          nextId: 'inmoreLesscorrectq95',
        },
        {
          answer: "42",
          nextId: 'inmoreLesscorrectq95',
        },
      ],
    },
    
    moreLesscorrectq95: {
    botPrompt: 'Hurray! <strong>45</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[95],
      },
    ],
    },
    inmoreLesscorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[95],
      },
    ],
    },
    
    //96
    ['moreLess'+shuffleArraynseve[95]]: {
    botPrompt: 'What is 1 less than 50?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['48', '49', "47","46"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq96',
      },
      {
        answer: '49',
        nextId: 'moreLesscorrectq96',
      },
      {
        answer: "47",
        nextId: 'inmoreLesscorrectq96',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq96',
      },
    ],
    },
    
    moreLesscorrectq96: {
    botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[96],
      },
    ],
    },
    inmoreLesscorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[96],
      },
    ],
    },

    //97
    ['moreLess'+shuffleArraynseve[96]]: {
    botPrompt: ' What number is 1 less than 47?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['48', '49', "46","44"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq97',
      },
      {
        answer: '49',
        nextId: 'inmoreLesscorrectq97',
      },
      {
        answer: "46",
        nextId: 'moreLesscorrectq97',
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq97',
      },
    ],
    },
    
    moreLesscorrectq97: {
    botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[97],
      },
    ],
    },
    inmoreLesscorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[97],
      },
    ],
    },
    
    
    //98
    ['moreLess'+shuffleArraynseve[97]]: {
    botPrompt: 'What number is 1 less than 48?',
    type: RTypes.TRANSFORMED_TEXT,
    

    input: selectField(['44', '34', "45","47"]),
      answers: [
        {
          answer: '44',
          nextId: 'inmoreLesscorrectq98',
        },
        {
          answer: '34',
          nextId: 'inmoreLesscorrectq98',
        },
        {
          answer: "45",
          nextId: 'inmoreLesscorrectq98',
        },
        {
          answer: "47",
          nextId: 'moreLesscorrectq98',
        },
      ],
    },
    
    moreLesscorrectq98: {
    botPrompt: 'Hurray! <strong>47</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocontinue25',
      },
    ],
    },
    inmoreLesscorrectq98: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
    answers: [
      {
        nextId: 'wishtocontinue25',
      },
    ],
    },
    


  //endmoreLessletter
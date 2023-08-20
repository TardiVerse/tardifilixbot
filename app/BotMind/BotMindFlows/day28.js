
day28: {
  botPrompt: '<strong> Day 28 : </strong> Classroom demo.',
  answers: [
          { nextId: 'day283comment' },
  ],
},


day283comment: {
  botPrompt: 'Pages from the book',
  answers: [
          { nextId: 'yesNo'+shuffledNumbersto[0] },
  ],
},



//yesNo


["yesNo"+shuffledNumbersto[0]]: {
    botPrompt: 'Is that a cat?  ',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrect',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrect',
      },

    ],
  },
  yesNocorrect: {
    botPrompt: 'Hurray <strong>Yes</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[1],
      },
    ],
  },
  inyesNocorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['yesNo'+shuffledNumbersto[1]]: {
    botPrompt: 'Is this a book?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq2',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq2',
      },

    ],
  },
  
  yesNocorrectq2: {
    botPrompt: 'Hurray! <strong>No</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[2],
      },
    ],
  },
  inyesNocorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['yesNo'+shuffledNumbersto[2]]: {
  botPrompt: 'Is she a teacher?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq3',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq3',
      },

    ],
  },
  
  yesNocorrectq3: {
  botPrompt: 'Hurray! <strong>No</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[3],
    },
  ],
  },
  inyesNocorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['yesNo'+shuffledNumbersto[3]]: {
  botPrompt: 'Is it raining outside?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectq4',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq4',
      },

    ],
  },
  
  yesNocorrectq4: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[4],
    },
  ],
  },
  inyesNocorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['yesNo'+shuffledNumbersto[4]]: {
  botPrompt: 'Is this a pen?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq5',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq5',
      },


    ],
  },
  
  yesNocorrectq5: {
  botPrompt: 'Hurray! <strong>No</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[5],
    },
  ],
  },
  inyesNocorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['yesNo'+shuffledNumbersto[5]]: {
  botPrompt: 'Is that a bird?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectqfast',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq6',
      },

    ],
  },
  
  yesNocorrectq6: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[6],
    },
  ],
  },
  inyesNocorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['yesNo'+shuffledNumbersto[6]]: {
  botPrompt: 'Is that a car?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectq7',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq7',
      },

    ],
  },
  
  yesNocorrectq7: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[7],
    },
  ],
  },
  inyesNocorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['yesNo'+shuffledNumbersto[7]]: {
  botPrompt: 'Is she playing the piano?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq8',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq8',
      },

    ],
  },
  
  yesNocorrectq8: {
  botPrompt: 'Hurray! <strong>No</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[8],
    },
  ],
  },
  inyesNocorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['yesNo'+shuffledNumbersto[8]]: {
  botPrompt: 'Is he wearing a cap?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectq9',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq9',
      },

    ],
  },
  
  yesNocorrectq9: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[9],
    },
  ],
  },
  inyesNocorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['yesNo'+shuffledNumbersto[9]]: {
  botPrompt: 'Is that a red shirt?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectqAngry',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq10',
      },

    ],
  
  },
  
  yesNocorrectq10: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[10],
    },
  ],
  },
  inyesNocorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['yesNo'+shuffledNumbersto[10]]: {
  botPrompt: 'Is it a sunny day?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectq11',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq11',
      },

    ],
  },
  
  yesNocorrectq11: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[11],
    },
  ],
  },
  inyesNocorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['yesNo'+shuffledNumbersto[11]]: {
  botPrompt: 'Is she a  dancer?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No', "Loud","Dry"]),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq12',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq12',
      },

    ],
  },
  
  yesNocorrectq12: {
  botPrompt: 'Hurray! <strong>No</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[12],
    },
  ],
  },
  inyesNocorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['yesNo'+shuffledNumbersto[12]]: {
  botPrompt: 'Is that a computer?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq13',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq13',
      },

    ],
  },
  
  yesNocorrectq13: {
  botPrompt: 'Hurray! <strong>No</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[13],
    },
  ],
  },
  inyesNocorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['yesNo'+shuffledNumbersto[13]]: {
  botPrompt: 'Is he playing football?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq14',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq14',
      },

    ],
  },
  
  yesNocorrectq14: {
  botPrompt: 'Hurray! <strong>No</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[14],
    },
  ],
  },
  inyesNocorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['yesNo'+shuffledNumbersto[14]]: {
  botPrompt: 'Is it a  cake?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectq15',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq15',
      },

    ],
  },
  
  yesNocorrectq15: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[15],
    },
  ],
  },
  inyesNocorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['yesNo'+shuffledNumbersto[15]]: {
    botPrompt: 'Is this a pencil?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'yesNocorrectq16',
      },
      {
        answer: 'No',
        nextId: 'inyesNocorrectq16',
      },

    ],
  },
  yesNocorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Yes</strong> 😎',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[16],
      },
    ],
  },
  inyesNocorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['yesNo'+shuffledNumbersto[16]]: {
  botPrompt: 'Is that a bicycle?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', 'No']),
    answers: [
      {
        answer: 'Yes',
        nextId: 'inyesNocorrectq17',
      },
      {
        answer: 'No',
        nextId: 'yesNocorrectq17',
      },

    ],
  },
  yesNocorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>No</strong> 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[17],
    },
  ],
  },
  inyesNocorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['yesNo'+shuffledNumbersto[17]]: {
  botPrompt: 'Is it a windy day?.   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', 'No']),
  answers: [
    {
      answer: 'Yes',
      nextId: 'yesNocorrectq18',
    },
    {
      answer: 'No',
      nextId: 'inyesNocorrectq18',
    },

  ],
  },
  yesNocorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Yes</strong> 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[18],
    },
  ],
  },
  inyesNocorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['yesNo'+shuffledNumbersto[18]]: {
  botPrompt: 'Is that a house?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', 'No']),
  answers: [
    {
      answer: 'Yes',
      nextId: 'yesNocorrectq19',
    },
    {
      answer: 'No',
      nextId: 'inyesNocorrectq19',
    },

  ],
  },
  yesNocorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Yes</strong> Answers! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[19],
    },
  ],
  },
  inyesNocorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['yesNo'+shuffledNumbersto[19]]: {
  botPrompt: 'Is she wearinng a blue colour dress?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', 'No']),
  answers: [
    {
      answer: 'Yes',
      nextId: 'inyesNocorrectq20',
    },
    {
      answer: 'No',
      nextId: 'yesNocorrectq20',
    },

  ],
  },
  yesNocorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>No</strong> 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[20],
    },
  ],
  },
  inyesNocorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"No"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["yesNo"+shuffledNumbersto[20]]: {
    botPrompt: 'Is he wearing glasses?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', 'No']),
  answers: [
    {
      answer: 'Yes',
      nextId: 'yesNocorrectq21',
    },
    {
      answer: 'No',
      nextId: 'inyesNocorrectq21',
    },

  ],
  },
  yesNocorrectq21: {
    botPrompt: 'Hurray <strong>Yes</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[21],
      },
    ],
  },
  inyesNocorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['yesNo'+shuffledNumbersto[21]]: {
    botPrompt: 'Is that a mountain?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Yes', 'No']),
  answers: [
    {
      answer: 'Yes',
      nextId: 'yesNocorrectq22',
    },
    {
      answer: 'No',
      nextId: 'inyesNocorrectq22',
    },

  ],
  },
  
  yesNocorrectq22: {
    botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[22],
      },
    ],
  },
  inyesNocorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
    answers: [
      {
        nextId: 'yesNo'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['yesNo'+shuffledNumbersto[22]]: {
  botPrompt: 'Is she dancing?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', 'No']),
  answers: [
    {
      answer: 'Yes',
      nextId: 'yesNocorrectq23',
    },
    {
      answer: 'No',
      nextId: 'inyesNocorrectq23',
    },

  ],
  },
  
  yesNocorrectq23: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[23],
    },
  ],
  },
  inyesNocorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['yesNo'+shuffledNumbersto[23]]: {
  botPrompt: 'Is she studying?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes', 'No']),
  answers: [
    {
      answer: 'Yes',
      nextId: 'yesNocorrectq24',
    },
    {
      answer: 'No',
      nextId: 'inyesNocorrectq24',
    },

  ],
  },
  
  yesNocorrectq24: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[24],
    },
  ],
  },
  inyesNocorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'yesNo'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['yesNo'+shuffledNumbersto[24]]: {
  botPrompt: 'Is  he a teacher?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Yes ', 'No']),
  answers: [
    {
      answer: 'Yes ',
      nextId: 'yesNocorrectq25',
    },
    {
      answer: 'No',
      nextId: 'inyesNocorrectq25',
    },

  ],
  },
  
  yesNocorrectq25: {
  botPrompt: 'Hurray! <strong>Yes</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontinue28',
    },
  ],
  },
  inyesNocorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yes"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue28',
    },
  ],
  },
  

  //endyesNoletter
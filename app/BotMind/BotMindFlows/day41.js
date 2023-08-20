day41: {
  botPrompt: '<strong> Day 41 : </strong> Through rhyming activities, children develop sound recognition and expand their vocabulary',
  answers: [
          { nextId: 'day41link' },
  ],
},
day41link: {

  botPrompt: 'https://youtu.be/FgBlTNWH3To',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day412comment' },
  ],
},

day412comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day412link' },
  ],
},
day412link: {
  botPrompt: 'https://drive.google.com/file/d/1e0RvqhSnTorOMiUZeDM9hTL-CBzER5V4/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[0],
    },
  ],
},

//rhymingWords


["rhymingWords"+shuffledNumbersto[0]]: {
    botPrompt: '1. Which word rhymes with "cat"?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Hat', 'Dog', "Ball","Sun"]),
    answers: [
      {
        answer: 'Hat',
        nextId: 'rhymingWordscorrect',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrect',
      },
      {
        answer: "Ball",
        nextId: 'inrhymingWordscorrect',
      },
      {
        answer: "Sun",
        nextId: 'inrhymingWordscorrect',
      },
    ],
  },
  rhymingWordscorrect: {
    botPrompt: 'Hurray <strong>Hat</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[1],
      },
    ],
  },
  inrhymingWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['rhymingWords'+shuffledNumbersto[1]]: {
    botPrompt: '2. Which word rhymes with "book"?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['Look.', 'Chair', "Tree","Car"]),
    answers: [
      {
        answer: 'Look',
        nextId: 'rhymingWordscorrectq2',
      },
      {
        answer: 'Chair',
        nextId: 'inrhymingWordscorrectq2',
      },
      {
        answer: "Tree",
        nextId: 'inrhymingWordscorrectq2',
      },
      {
        answer: "Car",
        nextId: 'inrhymingWordscorrectq2',
      },
    ],
  },
  
  rhymingWordscorrectq2: {
    botPrompt: 'Hurray! <strong>Look</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[2],
      },
    ],
  },
  inrhymingWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Look"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['rhymingWords'+shuffledNumbersto[2]]: {
  botPrompt: "3. Which word rhymes with 'sun'?",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Run', 'Cup', "Hat.","Car"]),
    answers: [
      {
        answer: 'Run',
        nextId: 'rhymingWordscorrectq3',
      },
      {
        answer: 'Cup',
        nextId: 'inrhymingWordscorrectq3',
      },
      {
        answer: "Hat",
        nextId: 'inrhymingWordscorrectq3',
      },
      {
        answer: "Car",
        nextId: 'inrhymingWordscorrectq3',
      },
    ],
  },
  
  rhymingWordscorrectq3: {
  botPrompt: 'Hurray! <strong>Run</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[3],
    },
  ],
  },
  inrhymingWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Run"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['rhymingWords'+shuffledNumbersto[3]]: {
  botPrompt: '4. Which word rhymes with "hat"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Cat', 'Dog', "Cup","Sun"]),
    answers: [
      {
        answer: 'Cat',
        nextId: 'rhymingWordscorrectq4',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq4',
      },
      {
        answer: "Cup",
        nextId: 'inrhymingWordscorrectq4',
      },
      {
        answer: "Sun",
        nextId: 'inrhymingWordscorrectq4',
      },
    ],
  },
  
  rhymingWordscorrectq4: {
  botPrompt: 'Hurray! <strong>Cat</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[4],
    },
  ],
  },
  inrhymingWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cat"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['rhymingWords'+shuffledNumbersto[4]]: {
  botPrompt: '5. Which word rhymes with "tree"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Bee.', 'Chair', "Ball","Car"]),
    answers: [
      {
        answer: 'Bee',
        nextId: 'inrhymingWordscorrectq5',
      },
      {
        answer: 'Chair',
        nextId: 'rhymingWordscorrectq5',
      },
      {
        answer: "Ball",
        nextId: 'inrhymingWordscorrectq5',
      },
      {
        answer: "Car",
        nextId: 'inrhymingWordscorrectq5',
      },
    ],
  },
  
  rhymingWordscorrectq5: {
  botPrompt: 'Hurray! <strong>Chair</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[5],
    },
  ],
  },
  inrhymingWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chair"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['rhymingWords'+shuffledNumbersto[5]]: {
  botPrompt: '6. Which word rhymes with "bed"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Hat', 'cup', "red","ball"]),
    answers: [
      {
        answer: 'Hat',
        nextId: 'inrhymingWordscorrectq6',
      },
      {
        answer: 'cup',
        nextId: 'inrhymingWordscorrectq6',
      },
      {
        answer: "red",
        nextId: 'rhymingWordscorrectq6',
      },
      {
        answer: "ball",
        nextId: 'inrhymingWordscorrectq6',
      },
    ],
  },
  
  rhymingWordscorrectq6: {
  botPrompt: 'Hurray! <strong>red</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[6],
    },
  ],
  },
  inrhymingWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"red"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['rhymingWords'+shuffledNumbersto[6]]: {
  botPrompt: '7. Which word rhymes with "pear"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Beer', 'Door', "Ball","Chair"]),
    answers: [
      {
        answer: 'Beer',
        nextId: 'inrhymingWordscorrectq7',
      },
      {
        answer: 'Door',
        nextId: 'rhymingWordscorrectq7',
      },
      {
        answer: "Ball",
        nextId: 'inrhymingWordscorrectq7',
      },
      {
        answer: "Chair",
        nextId: 'inrhymingWordscorrectq7',
      },
    ],
  },
  
  rhymingWordscorrectq7: {
  botPrompt: 'Hurray! <strong>Chair</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[7],
    },
  ],
  },
  inrhymingWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chair"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['rhymingWords'+shuffledNumbersto[7]]: {
  botPrompt: '8. Which word rhymes with "run"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Fun', 'Cup', "Hat","Bed"]),
    answers: [
      {
        answer: 'Fun',
        nextId: 'rhymingWordscorrectq8',
      },
      {
        answer: 'Cup',
        nextId: 'inrhymingWordscorrectq8',
      },
      {
        answer: "Hat",
        nextId: 'inrhymingWordscorrectq8',
      },
      {
        answer: "Bed",
        nextId: 'inrhymingWordscorrectq8',
      },
    ],
  },
  
  rhymingWordscorrectq8: {
  botPrompt: 'Hurray! <strong>Fun</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[8],
    },
  ],
  },
  inrhymingWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fun"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['rhymingWords'+shuffledNumbersto[8]]: {
  botPrompt: '9. Which word rhymes with "cat"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rat', 'Dog', "Ball","Sun"]),
    answers: [
      {
        answer: 'Rat',
        nextId: 'rhymingWordscorrectq9',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq9',
      },
      {
        answer: "Ball",
        nextId: 'inrhymingWordscorrectq9',
      },
      {
        answer: "Sun",
        nextId: 'inrhymingWordscorrectq9',
      },
    ],
  },
  
  rhymingWordscorrectq9: {
  botPrompt: 'Hurray! <strong>Rat</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[9],
    },
  ],
  },
  inrhymingWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rat"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['rhymingWords'+shuffledNumbersto[9]]: {
  botPrompt: '10. Which word rhymes with "book"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Cook', 'Chair', "Tree","Car"]),
    answers: [
      {
        answer: 'Cook',
        nextId: 'rhymingWordscorrectq10',
      },
      {
        answer: 'Chair',
        nextId: 'inrhymingWordscorrectq10',
      },
      {
        answer: "Tree",
        nextId: 'inrhymingWordscorrectq10',
      },
      {
        answer: "Car",
        nextId: 'inrhymingWordscorrectq10',
      },
    ],
  
  },
  
  rhymingWordscorrectq10: {
  botPrompt: 'Hurray! <strong>Cook</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[10],
    },
  ],
  },
  inrhymingWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cook"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['rhymingWords'+shuffledNumbersto[10]]: {
  botPrompt: '11. Which word rhymes with "pet"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Net', 'Dog', "Bat","Sun"]),
    answers: [
      {
        answer: 'Net',
        nextId: 'rhymingWordscorrectq11',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq11',
      },
      {
        answer: "Bat",
        nextId: 'inrhymingWordscorrectq11',
      },
      {
        answer: "Sun",
        nextId: 'inrhymingWordscorrectq11',
      },
    ],
  },
  
  rhymingWordscorrectq11: {
  botPrompt: 'Hurray! <strong>Net</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[11],
    },
  ],
  },
  inrhymingWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Net"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['rhymingWords'+shuffledNumbersto[11]]: {
  botPrompt: '12. Which word rhymes with "mob"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Frog', 'Dog', "Job","Bat"]),
    answers: [
      {
        answer: 'Frog',
        nextId: 'inrhymingWordscorrectq12',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq12',
      },
      {
        answer: "Job",
        nextId: 'rhymingWordscorrectq12',
      },
      {
        answer: "Bat",
        nextId: 'inrhymingWordscorrectq12',
      },
    ],
  },
  
  rhymingWordscorrectq12: {
  botPrompt: 'Hurray! <strong>Job</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[12],
    },
  ],
  },
  inrhymingWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Job"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['rhymingWords'+shuffledNumbersto[12]]: {
  botPrompt: '13. Which word rhymes with "cut"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Hut', 'Dog', "Bin","Run"]),
    answers: [
      {
        answer: 'Hut',
        nextId: 'rhymingWordscorrectq13',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq13',
      },
      {
        answer: "Bin",
        nextId: 'inrhymingWordscorrectq13',
      },
      {
        answer: "Run",
        nextId: 'inrhymingWordscorrectq13',
      },
    ],
  },
  
  rhymingWordscorrectq13: {
  botPrompt: 'Hurray! <strong>Hut</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[13],
    },
  ],
  },
  inrhymingWordscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hut"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['rhymingWords'+shuffledNumbersto[13]]: {
  botPrompt: '14. Which word rhymes with "lip"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Dip', 'Dog', "Bat","Sun"]),
    answers: [
      {
        answer: 'Dip',
        nextId: 'rhymingWordscorrectq14',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq14',
      },
      {
        answer: "Bat",
        nextId: 'inrhymingWordscorrectq14',
      },
      {
        answer: "Sun",
        nextId: 'inrhymingWordscorrectq14',
      },
    ],
  },
  
  rhymingWordscorrectq14: {
  botPrompt: 'Hurray! <strong>Dip</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[14],
    },
  ],
  },
  inrhymingWordscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dip"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['rhymingWords'+shuffledNumbersto[14]]: {
  botPrompt: '15. Which word rhymes with "bug"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Dog', 'Jog', "Mug","Hat"]),
    answers: [
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq15',
      },
      {
        answer: 'Jog',
        nextId: 'inrhymingWordscorrectq15',
      },
      {
        answer: "Mug",
        nextId: 'rhymingWordscorrectq15',
      },
      {
        answer: "Hat",
        nextId: 'inrhymingWordscorrectq15',
      },
    ],
  },
  
  rhymingWordscorrectq15: {
  botPrompt: 'Hurray! <strong>Mug</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[15],
    },
  ],
  },
  inrhymingWordscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Mug"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['rhymingWords'+shuffledNumbersto[15]]: {
    botPrompt: '16. Which word rhymes with "mad"?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Pad', 'Dog', "Pin","Sun"]),
    answers: [
      {
        answer: 'Pad',
        nextId: 'rhymingWordscorrectq16',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq16',
      },
      {
        answer: 'Pin',
        nextId: 'inrhymingWordscorrectq16',
      },
      {
        answer: 'Sun',
        nextId: 'inrhymingWordscorrectq16',
      },

    ],
  },
  rhymingWordscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Pad</strong> 😎',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[16],
      },
    ],
  },
  inrhymingWordscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pad"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['rhymingWords'+shuffledNumbersto[16]]: {
  botPrompt: '17. Which word rhymes with "pen"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Hen', 'Dog', "Pin","Sun"]),
    answers: [
      {
        answer: 'Hen',
        nextId: 'rhymingWordscorrectq17',
      },
      {
        answer: 'Dog',
        nextId: 'inrhymingWordscorrectq17',
      },
      {
        answer: 'Pin',
        nextId: 'inrhymingWordscorrectq17',
      },
      {
        answer: 'Sun',
        nextId: 'inrhymingWordscorrectq17',
      },

    ],
  },
  rhymingWordscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Hen</strong> 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[17],
    },
  ],
  },
  inrhymingWordscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hen"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['rhymingWords'+shuffledNumbersto[17]]: {
  botPrompt: '18. Which word rhymes with "get"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Jog', 'Dog', "Log","Jet"]),
  answers: [
    {
      answer: 'Jog',
      nextId: 'rhymingWordscorrectq18',
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq18',
    },
    {
      answer: 'Log',
      nextId: 'inrhymingWordscorrectq18',
    },
    {
      answer: 'Jet',
      nextId: 'inrhymingWordscorrectq18',
    },

  ],
  },
  rhymingWordscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Jog</strong> 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[18],
    },
  ],
  },
  inrhymingWordscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Jog"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['rhymingWords'+shuffledNumbersto[18]]: {
  botPrompt: '19. Which word rhymes with "nut"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Hut', 'Dog', "Log","Jet"]),
  answers: [
    {
      answer: 'Hut',
      nextId: 'inrhymingWordscorrectq19',
    },
    {
      answer: 'Dog',
      nextId: 'rhymingWordscorrectq19',
    },
    {
      answer: 'Log',
      nextId: 'rhymingWordscorrectq19',
    },
    {
      answer: 'Jet',
      nextId: 'rhymingWordscorrectq19',
    },

  ],
  },
  rhymingWordscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Hut</strong> Answers! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[19],
    },
  ],
  },
  inrhymingWordscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hut"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['rhymingWords'+shuffledNumbersto[19]]: {
  botPrompt: '20. Which word rhymes with "den"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Hen', 'Dog', "Bin","Sun"]),
  answers: [
    {
      answer: 'Hen',
      nextId: 'rhymingWordscorrectq20',
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq20',
    },
    {
      answer: 'Bin',
      nextId: 'inrhymingWordscorrectq20',
    },
    {
      answer: 'Sun',
      nextId: 'inrhymingWordscorrectq20',
    },

  ],
  },
  rhymingWordscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Hen</strong> 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[20],
    },
  ],
  },
  inrhymingWordscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hen"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["rhymingWords"+shuffledNumbersto[20]]: {
    botPrompt: "21. Which word does not rhyme with 'cat'?",
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Mat', 'Bed', "Hat","Sun"]),
  answers: [
    {
      answer: 'Mat',
      nextId: 'inrhymingWordscorrectq21',
    },
    {
      answer: 'Bed',
      nextId: 'rhymingWordscorrectq21',
    },
    {
      answer: 'Hat',
      nextId: 'rhymingWordscorrectq21',
    },
    {
      answer: 'Sun',
      nextId: 'rhymingWordscorrectq21',
    },

  ],
  },
  rhymingWordscorrectq21: {
    botPrompt: 'Hurray <strong>Bed</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[21],
      },
    ],
  },
  inrhymingWordscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bed"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['rhymingWords'+shuffledNumbersto[21]]: {
    botPrompt: '22. Which word does not rhyme with "bed"?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Red', 'Fed', "Lit","Wed"]]),
  answers: [
    {
      answer: 'Red',
      nextId: 'inrhymingWordscorrectq22',
    },
    {
      answer: 'Fed',
      nextId: 'inrhymingWordscorrectq22',
    },
    {
      answer: 'Lit',
      nextId: 'rhymingWordscorrectq22',
    },
    {
      answer: 'Wed',
      nextId: 'inrhymingWordscorrectq22',
    },

  ],
  },
  
  rhymingWordscorrectq22: {
    botPrompt: 'Hurray! <strong>Lit</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[22],
      },
    ],
  },
  inrhymingWordscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Lit"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['rhymingWords'+shuffledNumbersto[22]]: {
  botPrompt: "23. Which word does not rhyme with 'sit'?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Fit', 'Hit', "Lit","Kite"]),
  answers: [
    {
      answer: 'Fit',
      nextId: 'inrhymingWordscorrectq23',
    },
    {
      answer: 'Hit',
      nextId: 'inrhymingWordscorrectq23',
    },
    {
      answer: 'Lit',
      nextId: 'inrhymingWordscorrectq23',
    },
    {
      answer: 'Kite',
      nextId: 'rhymingWordscorrectq23',
    },

  ],
  },
  
  rhymingWordscorrectq23: {
  botPrompt: 'Hurray! <strong>Kite</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[23],
    },
  ],
  },
  inrhymingWordscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Kite"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['rhymingWords'+shuffledNumbersto[23]]: {
  botPrompt: '24. Which word does not rhyme with "pot"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Dot', 'Hot', "Hat","Lot"]),
  answers: [
    {
      answer: 'Dot',
      nextId: 'inrhymingWordscorrectq24',
    },
    {
      answer: 'Hot',
      nextId: 'inrhymingWordscorrectq24',
    },
    {
      answer: 'Hat',
      nextId: 'rhymingWordscorrectq24',
    },
    {
      answer: 'Lot',
      nextId: 'inrhymingWordscorrectq24',
    },

  ],
  },

  rhymingWordscorrectq24: {
  botPrompt: 'Hurray! <strong>Ha</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[24],
    },
  ],
  },
  inrhymingWordscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['rhymingWords'+shuffledNumbersto[24]]: {
  botPrompt: '25. Which word does not rhyme with "run"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Fun', 'Sun', "Bun","Fit"]),
  answers: [
    {
      answer: 'Fun',
      nextId: 'inrhymingWordscorrectq25',
    },
    {
      answer: 'Sun',
      nextId: 'inrhymingWordscorrectq25',
    },
    {
      answer: 'Bun',
      nextId: 'inrhymingWordscorrectq25',
    },
    {
      answer: 'Fit',
      nextId: 'rhymingWordscorrectq25',
    },

  ],
  },
  
  rhymingWordscorrectq25: {
  botPrompt: 'Hurray! <strong>Fit</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[25],
    },
  ],
  },
  inrhymingWordscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fit"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['rhymingWords'+shuffledNumbersto[25]]: {
  botPrompt: '26. Which word does not rhyme with "jet"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Get', 'Set', "Log","Bet"]),
  answers: [
    {
      answer: 'Get',
      nextId: 'inrhymingWordscorrectq26',
    },
    {
      answer: 'Set',
      nextId: 'inrhymingWordscorrectq26',
    },
    {
      answer: 'Log',
      nextId: 'rhymingWordscorrectq26',
    },
    {
      answer: 'Bet',
      nextId: 'inrhymingWordscorrectq26',
    },

  ],
  },
  
  rhymingWordscorrectq26: {
  botPrompt: 'Hurray! <strong>Log</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[26],
    },
  ],
  },
  inrhymingWordscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Log"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['rhymingWords'+shuffledNumbersto[26]]: {
  botPrompt: '27. Which word does not rhyme with "cut"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Hut', 'Nut', "Mad","But"]),
    answers: [
      {
        answer: 'Hut',
        nextId: 'rhymingWordscorrectq27',
      },
      {
        answer: 'Nut',
        nextId: 'inrhymingWordscorrectq27',
      },
      {
        answer: 'Mad',
        nextId: 'rhymingWordscorrectq27',
      },
      {
        answer: 'But',
        nextId: 'inrhymingWordscorrectq27',
      },

    ],
  },
  
  rhymingWordscorrectq27: {
  botPrompt: 'Hurray! <strong>Mad</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[27],
    },
  ],
  },
  inrhymingWordscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Mad"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[27],
    },
  ],
  },
  
  
  //28
  ['rhymingWords'+shuffledNumbersto[27]]: {
  botPrompt: '28. Which word does not rhyme with "pen"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Hen', 'Dog', "Ken","Den"]),
  answers: [
    {
      answer: 'Hen',
      nextId: 'inrhymingWordscorrectq28',
    },
    {
      answer: 'Dog',
      nextId: 'rhymingWordscorrectq28',
    },
    {
      answer: 'Ken',
      nextId: 'inrhymingWordscorrectq28',
    },
    {
      answer: 'Den',
      nextId: 'inrhymingWordscorrectq28',
    },
  ],
  },
  
  rhymingWordscorrectq28: {
  botPrompt: 'Hurray! <strong>Dog</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[28],
    },
  ],
  },
  inrhymingWordscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dog"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['rhymingWords'+shuffledNumbersto[28]]: {
  botPrompt: '29. Which word does not rhyme with "nut"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Hut', 'Cut', "Sun","Gut"]),
    answers: [
      {
        answer: 'Hut',
        nextId: 'inrhymingWordscorrectq29',
      },
      {
        answer: 'Cut',
        nextId: 'inrhymingWordscorrectq29',
      },
      {
        answer: 'Sun',
        nextId: 'rhymingWordscorrectq29',
      },
      {
        answer: 'Gut',
        nextId: 'inrhymingWordscorrectq29',
      },

    ],
  },
  
  rhymingWordscorrectq29: {
  botPrompt: 'Hurray! <strong>Sun</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[29],
    },
  ],
  },
  inrhymingWordscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sun"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[29],
    },
  ],
  },
  

  //30
  ['rhymingWords'+shuffledNumbersto[29]]: {
  botPrompt: "30. Which word does not rhyme with 'bug'?",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Rug', 'Mug', "Hat","Jug"]),
  answers: [
    {
      answer: 'Rug',
      nextId: 'inrhymingWordscorrectq30',
    },
    {
      answer: 'Mug',
      nextId: 'inrhymingWordscorrectq30',
    },
    {
      answer: 'Hat',
      nextId: 'rhymingWordscorrectq30',
    },
    {
      answer: 'Jug',
      nextId: 'inrhymingWordscorrectq30',
    },

  ],
  },
  
  rhymingWordscorrectq30: {
  botPrompt: 'Hurray! <strong>Hat</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishToContinue41',
    },
  ],
  },
  inrhymingWordscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
  answers: [
    {
      nextId: 'wishToContinue41',
    },
  ],
  },

  //endrhymingWordsletter
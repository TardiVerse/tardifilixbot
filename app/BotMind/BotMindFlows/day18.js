
//thisThat


["thisThat"+shuffledNumbersto[0]]: {
  botPrompt: '1. Which word refers to something close to you?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['This', 'That', "There"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrect',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrect',
    },
    {
      answer: "There",
      nextId: 'inthisThatcorrect',
    },

  ],
},
thisThatcorrect: {
  botPrompt: 'Hurray <strong>This</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersto[1],
    },
  ],
},
inthisThatcorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersto[1],
    },
  ],
},

['thisThat'+shuffledNumbersto[1]]: {
  botPrompt: '2. Which word refers to something far from you?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['This', 'That', "There"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq2',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq2',
    },
    {
      answer: "Here",
      nextId: 'inthisThatcorrectq2',
    },
  ],
},

thisThatcorrectq2: {
  botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersto[2],
    },
  ],
},
inthisThatcorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersto[2],
    },
  ],
},

//3
['thisThat'+shuffledNumbersto[2]]: {
botPrompt: "3. Point to the object that is closer to you.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Far"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrectq3',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrectq3',
    },
    {
      answer: "Far",
      nextId: 'inthisThatcorrectq3',
    },
  ],
},

thisThatcorrectq3: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[3],
  },
],
},
inthisThatcorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[3],
  },
],
},

//4
['thisThat'+shuffledNumbersto[3]]: {
botPrompt: '4. Point to the object that is farther from you.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Near"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq4',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq4',
    },
    {
      answer: "Near",
      nextId: 'inthisThatcorrectq4',
    },
  ],
},

thisThatcorrectq4: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[4],
  },
],
},
inthisThatcorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[4],
  },
],
},

//5
['thisThat'+shuffledNumbersto[4]]: {
botPrompt: '5. Which word would you use to describe an object you are holding?',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq5',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq5',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq5',
    },
  ],
},

thisThatcorrectq5: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[5],
  },
],
},
inthisThatcorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[5],
  },
],
},

//6
['thisThat'+shuffledNumbersto[5]]: {
botPrompt: ' 6. Which word would you use to describe objects that are far away from you?',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq6',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq6',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq6',
    },
  ],
},

thisThatcorrectq6: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[6],
  },
],
},
inthisThatcorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[6],
  },
],
},

//7
['thisThat'+shuffledNumbersto[6]]: {
botPrompt: '7. Which word would you use to talk about something you can see but can't touch?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Those"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq7',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq7',
    },
    {
      answer: "Those",
      nextId: 'inthisThatcorrectq7',
    },
  ],
},

thisThatcorrectq7: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[7],
  },
],
},
inthisThatcorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[7],
  },
],
},


//8
['thisThat'+shuffledNumbersto[7]]: {
botPrompt: '8. Which word would you use to ask about a specific object that is not close to you?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Those"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq8',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq8',
    },
    {
      answer: "Those",
      nextId: 'inthisThatcorrectq8',
    },
  ],
},

thisThatcorrectq8: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[8],
  },
],
},
inthisThatcorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[8],
  },
],
},

//9
['thisThat'+shuffledNumbersto[8]]: {
botPrompt: '9. Which word would you use to point to something close to you?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrectq9',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrectq9',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq9',
    },
  ],
},

thisThatcorrectq9: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[9],
  },
],
},
inthisThatcorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[9],
  },
],
},


//10
['thisThat'+shuffledNumbersto[9]]: {
botPrompt: '10. Which word would you use to point to something far from you?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq10',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq10',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq10',
    },
  ],
},

thisThatcorrectq10: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[10],
  },
],
},
inthisThatcorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[10],
  },
],
},

//11
['thisThat'+shuffledNumbersto[10]]: {
botPrompt: '11. Which word would you use to describe an object near your friend?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq11',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq11',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq11',
    },
  ],
},

thisThatcorrectq11: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[11],
  },
],
},
inthisThatcorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[11],
  },
],
},

//12
['thisThat'+shuffledNumbersto[11]]: {
botPrompt: '12. Which word would you use to talk about something you can touch right now?',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrectq12',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrectq12',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq12',
    },
  ],
},

thisThatcorrectq12: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[12],
  },
],
},
inthisThatcorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[12],
  },
],
},

//13
['thisThat'+shuffledNumbersto[12]]: {
botPrompt: '13. Which word would you use to talk about something you can see across the room?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq13',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq13',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq13',
    },
  ],
},

thisThatcorrectq13: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[13],
  },
],
},
inthisThatcorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[13],
  },
],
},

//14
['thisThat'+shuffledNumbersto[13]]: {
botPrompt: '14. Which word would you use to talk about objects that are far away from both you and your friend?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq14',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq14',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq14',
    },
  ],
},

thisThatcorrectq14: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[14],
  },
],
},
inthisThatcorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersto[14],
  },
],
},


//15
['thisThat'+shuffledNumbersto[14]]: {
botPrompt: '15. Which word would you use to ask about a specific object that is not close to you or your friend?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq15',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq15',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq15',
    },
  ],
},

thisThatcorrectq15: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'wishtocontinue19',
  },
],
},
inthisThatcorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'wishtocontinue19',
  },
],
},



//endthisThatletter

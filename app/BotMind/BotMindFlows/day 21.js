
//theseThose


["theseThose"+shuffledNumbersto[0]]: {
  botPrompt: 'Which word would you use to talk about objects that are not near you? ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Those', 'These', "This","There"]),
  answers: [
    {
      answer: 'Those',
      nextId: 'theseThosecorrect',
    },
    {
      answer: 'These',
      nextId: 'intheseThosecorrect',
    },
    {
      answer: "This",
      nextId: 'intheseThosecorrect',
    },
    {
      answer: "There",
      nextId: 'intheseThosecorrect',
    },
  ],
},
theseThosecorrect: {
  botPrompt: 'Hurray <strong>Those</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'theseThose'+shuffledNumbersto[1],
    },
  ],
},
intheseThosecorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
  answers: [
    {
      nextId: 'theseThose'+shuffledNumbersto[1],
    },
  ],
},

['theseThose'+shuffledNumbersto[1]]: {
  botPrompt: 'What word would you use to talk about objects that are specific and close to us?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['These', 'Those', "That","Here"]),
  answers: [
    {
      answer: 'These',
      nextId: 'theseThosecorrectq2',
    },
    {
      answer: 'Those',
      nextId: 'intheseThosecorrectq2',
    },
    {
      answer: "That",
      nextId: 'intheseThosecorrectq2',
    },
    {
      answer: "Here",
      nextId: 'intheseThosecorrectq2',
    },
  ],
},

theseThosecorrectq2: {
  botPrompt: 'Hurray! <strong>These</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'theseThose'+shuffledNumbersto[2],
    },
  ],
},
intheseThosecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"These"</strong>',
  answers: [
    {
      nextId: 'theseThose'+shuffledNumbersto[2],
    },
  ],
},

//3
['theseThose'+shuffledNumbersto[2]]: {
botPrompt: "What word would you use to talk about objects that are far from us and not specific?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Those', 'These', "This","There"]),
answers: [
  {
    answer: 'Those',
    nextId: 'theseThosecorrectq3',
  },
  {
    answer: 'These',
    nextId: 'intheseThosecorrectq3',
  },
  {
    answer: "This",
    nextId: 'intheseThosecorrectq3',
  },
  {
    answer: "There",
    nextId: 'intheseThosecorrectq3',
  },
],
},

theseThosecorrectq3: {
botPrompt: 'Hurray! <strong>Those</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[3],
  },
],
},
intheseThosecorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[3],
  },
],
},

//4
['theseThose'+shuffledNumbersto[3]]: {
botPrompt: 'Which word describes objects that are near the speaker?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['These', 'That', "Those","There"]),
answers: [
  {
    answer: 'These',
    nextId: 'intheseThosecorrectq4',
  },
  {
    answer: 'That',
    nextId: 'theseThosecorrectq4',
  },
  {
    answer: "Those",
    nextId: 'intheseThosecorrectq4',
  },
  {
    answer: "There",
    nextId: 'intheseThosecorrectq4',
  },
],
},

theseThosecorrectq4: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[4],
  },
],
},
intheseThosecorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[4],
  },
],
},

//5
['theseThose'+shuffledNumbersto[4]]: {
botPrompt: 'What word would you use to talk about objects that are in the distance? ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Those', 'These', "This","There"]),
answers: [
  {
    answer: 'Those',
    nextId: 'theseThosecorrectq5',
  },
  {
    answer: 'These',
    nextId: 'intheseThosecorrectq5',
  },
  {
    answer: "This",
    nextId: 'intheseThosecorrectq5',
  },
  {
    answer: "There",
    nextId: 'intheseThosecorrectq5',
  },
],
},

theseThosecorrectq5: {
botPrompt: 'Hurray! <strong>Those</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[5],
  },
],
},
intheseThosecorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[5],
  },
],
},

//6
['theseThose'+shuffledNumbersto[5]]: {
botPrompt: 'Look around the classroom. Which word would you use to talk about objects that are far from you?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Those', 'These', "This","There"]),
answers: [
  {
    answer: 'Those',
    nextId: 'theseThosecorrectq6',
  },
  {
    answer: 'These',
    nextId: 'intheseThosecorrectq6',
  },
  {
    answer: "This",
    nextId: 'intheseThosecorrectq6',
  },
  {
    answer: "There",
    nextId: 'intheseThosecorrectq6',
  },
],
},

theseThosecorrectq6: {
botPrompt: 'Hurray! <strong>Those</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[6],
  },
],
},
intheseThosecorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[6],
  },
],
},

//7
['theseThose'+shuffledNumbersto[6]]: {
botPrompt: ' Which word would you use to talk about objects that are not nearby?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Those', 'These', "This","There"]),
answers: [
  {
    answer: 'Those',
    nextId: 'theseThosecorrectq7',
  },
  {
    answer: 'These',
    nextId: 'intheseThosecorrectq7',
  },
  {
    answer: "This",
    nextId: 'intheseThosecorrectq7',
  },
  {
    answer: "There",
    nextId: 'intheseThosecorrectq7',
  },
],
},

theseThosecorrectq7: {
botPrompt: 'Hurray! <strong>Those</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[7],
  },
],
},
intheseThosecorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
answers: [
  {
    nextId: 'theseThose'+shuffledNumbersto[7],
  },
],
},


//8
['theseThose'+shuffledNumbersto[7]]: {
botPrompt: 'Look around the classroom. Which word would you use to talk about objects that are near you?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['These', 'Those', "That","There"]),
answers: [
  {
    answer: 'These',
    nextId: 'theseThosecorrectq8',
  },
  {
    answer: 'Those',
    nextId: 'intheseThosecorrectq8',
  },
  {
    answer: "That",
    nextId: 'intheseThosecorrectq8',
  },
  {
    answer: "There",
    nextId: 'intheseThosecorrectq8',
  },
],
},

theseThosecorrectq8: {
botPrompt: 'Hurray! <strong>These</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'wishtocontinue22',
  },
],
},
intheseThosecorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"These"</strong>',
answers: [
  {
    nextId: 'wishtocontinue22',
  },
],
},


//endtheseThoseletter
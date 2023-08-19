//startisare



["isAre"+shuffledNumbersseventyseven[0]]: {
  botPrompt: ' The cat ___ playing. ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrect',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrect',
    },
    {
      answer: "here",
      nextId: 'inisArecorrect',
    },
    {
      answer: "where",
      nextId: 'inisArecorrect',
    },
  ],
},
isArecorrect: {
  botPrompt: 'Hurray <strong>is</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[1],
    },
  ],
},
inisArecorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[1],
    },
  ],
},

['isAre'+shuffledNumbersseventyseven[1]]: {
  botPrompt: 'My friends ___ here.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq2',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq2',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq2',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq2',
    },
  ],
},

isArecorrectq2: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[2],
    },
  ],
},
inisArecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[2],
    },
  ],
},

//3
['isAre'+shuffledNumbersseventyseven[2]]: {
botPrompt: "The flowers ___ beautiful.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq3',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq3',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq3',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq3',
    },
  ],
},

isArecorrectq3: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[3],
  },
],
},
inisArecorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[3],
  },
],
},

//4
['isAre'+shuffledNumbersseventyseven[3]]: {
botPrompt: 'This book ___ interesting.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq4',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq4',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq4',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq4',
    },
  ],
},

isArecorrectq4: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[4],
  },
],
},
inisArecorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[4],
  },
],
},

//5
['isAre'+shuffledNumbersseventyseven[4]]: {
botPrompt: 'The birds ___ in the sky.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq5',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq5',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq5',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq5',
    },
  ],
},

isArecorrectq5: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[5],
  },
],
},
inisArecorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[5],
  },
],
},

//6
['isAre'+shuffledNumbersseventyseven[5]]: {
botPrompt: 'The sun ___ shining.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq6',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq6',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq6',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq6',
    },
  ],
},

isArecorrectq6: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[6],
  },
],
},
inisArecorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[6],
  },
],
},

//7
['isAre'+shuffledNumbersseventyseven[6]]: {
botPrompt: 'My toys ___ on the shelf.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq7',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq7',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq7',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq7',
    },
  ],
},

isArecorrectq7: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[7],
  },
],
},
inisArecorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[7],
  },
],
},


//8
['isAre'+shuffledNumbersseventyseven[7]]: {
botPrompt: 'The trees ___ tall.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq8',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq8',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq8',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq8',
    },
  ],
},

isArecorrectq8: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[8],
  },
],
},
inisArecorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[8],
  },
],
},

//9
['isAre'+shuffledNumbersseventyseven[8]]: {
botPrompt: 'The car ___ red.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq9',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq9',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq9',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq9',
    },
  ],
},

isArecorrectq9: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[9],
  },
],
},
inisArecorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[9],
  },
],
},


//10
['isAre'+shuffledNumbersseventyseven[9]]: {
botPrompt: 'The dogs ___ barking.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq10',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq10',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq10',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq10',
    },
  ],

},

isArecorrectq10: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[10],
  },
],
},
inisArecorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[10],
  },
],
},

//11
['isAre'+shuffledNumbersseventyseven[10]]: {
botPrompt: 'The pencil ___ on the desk.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq11',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq11',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq11',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq11',
    },
  ],
},

isArecorrectq11: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[11],
  },
],
},
inisArecorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[11],
  },
],
},

//12
['isAre'+shuffledNumbersseventyseven[11]]: {
botPrompt: 'The cookies ___ delicious.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq12',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq12',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq12',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq12',
    },
  ],
},

isArecorrectq12: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[12],
  },
],
},
inisArecorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[12],
  },
],
},

//13
['isAre'+shuffledNumbersseventyseven[12]]: {
botPrompt: 'The students ___ listening.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq13',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq13',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq13',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq13',
    },
  ],
},

isArecorrectq13: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[13],
  },
],
},
inisArecorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[13],
  },
],
},

//14
['isAre'+shuffledNumbersseventyseven[13]]: {
botPrompt: 'The sky ___ blue.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq14',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq14',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq14',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq14',
    },
  ],
},

isArecorrectq14: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[14],
  },
],
},
inisArecorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[14],
  },
],
},


//15
['isAre'+shuffledNumbersseventyseven[14]]: {
botPrompt: 'The chairs ___ comfortable.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq15',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq15',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq15',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq15',
    },
  ],
},

isArecorrectq15: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[15],
  },
],
},
inisArecorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[15],
  },
],
},

//16
['isAre'+shuffledNumbersseventyseven[15]]: {
  botPrompt: 'The birds ___ singing.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq16',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq16',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq16',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq16',
    },
  ],
},
isArecorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[16],
    },
  ],
},
inisArecorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[16],
    },
  ],
},

//17
['isAre'+shuffledNumbersseventyseven[16]]: {
botPrompt: 'The cake ___ tasty.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq17',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq17',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq17',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq17',
    },
  ],
},
isArecorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[17],
  },
],
},
inisArecorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[17],
  },
],
},

//18
['isAre'+shuffledNumbersseventyseven[17]]: {
botPrompt: 'The cars ___ parked.   ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq18',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq18',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq18',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq18',
  },
],
},
isArecorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[18],
  },
],
},
inisArecorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[18],
  },
],
},

//19
['isAre'+shuffledNumbersseventyseven[18]]: {
botPrompt: 'The flowers ___ blooming.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq19',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq19',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq19',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq19',
  },
],
},
isArecorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> Answers! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[19],
  },
],
},
inisArecorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[19],
  },
],
},

//20
['isAre'+shuffledNumbersseventyseven[19]]: {
botPrompt: 'The children ___ playing.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq20',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq20',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq20',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq20',
  },
],
},
isArecorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[20],
  },
],
},
inisArecorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[20],
  },
],
},

//21
["isAre"+shuffledNumbersseventyseven[20]]: {
  botPrompt: 'The cat and dog ___ friends.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq21',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq21',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq21',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq21',
  },
],
},
isArecorrectq21: {
  botPrompt: 'Hurray <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[21],
    },
  ],
},
inisArecorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[21],
    },
  ],
},

//22
['isAre'+shuffledNumbersseventyseven[21]]: {
  botPrompt: 'The books ___ on the shelf.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq22',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq22',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq22',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq22',
  },
],
},

isArecorrectq22: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[22],
    },
  ],
},
inisArecorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[22],
    },
  ],
},

//23
['isAre'+shuffledNumbersseventyseven[22]]: {
botPrompt: "The stars ___ shining.",
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq23',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq23',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq23',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq23',
  },
],
},

isArecorrectq23: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[23],
  },
],
},
inisArecorrectq23: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[23],
  },
],
},

//24
['isAre'+shuffledNumbersseventyseven[23]]: {
botPrompt: 'The chairs and table ___ new.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq24',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq24',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq24',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq24',
  },
],
},

isArecorrectq24: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[24],
  },
],
},
inisArecorrectq24: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[24],
  },
],
},

//25
['isAre'+shuffledNumbersseventyseven[24]]: {
botPrompt: 'The flowers ___ colorful.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq25',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq25',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq25',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq25',
  },
],
},

isArecorrectq25: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[25],
  },
],
},
inisArecorrectq25: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[25],
  },
],
},

//26
['isAre'+shuffledNumbersseventyseven[25]]: {
botPrompt: 'The boys ___ playing.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq26',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq26',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq26',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq26',
  },
],
},

isArecorrectq26: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[26],
  },
],
},
inisArecorrectq26: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[26],
  },
],
},

//27
['isAre'+shuffledNumbersseventyseven[26]]: {
botPrompt: 'The dog ___ barking.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq27',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq27',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq27',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq27',
    },
  ],
},

isArecorrectq27: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[27],
  },
],
},
inisArecorrectq27: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[27],
  },
],
},


//28
['isAre'+shuffledNumbersseventyseven[27]]: {
botPrompt: 'The birds ___ chirping.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq28',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq28',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq28',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq28',
  },
],
},

isArecorrectq28: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[28],
  },
],
},
inisArecorrectq28: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[28],
  },
],
},

//29
['isAre'+shuffledNumbersseventyseven[28]]: {
botPrompt: 'The sun ___ setting.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq29',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq29',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq29',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq29',
    },
  ],
},

isArecorrectq29: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[29],
  },
],
},
inisArecorrectq29: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[29],
  },
],
},


//30
['isAre'+shuffledNumbersseventyseven[29]]: {
botPrompt: 'The toys ___ scattered.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq30',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq30',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq30',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq30',
  },
],
},

isArecorrectq30: {
botPrompt: 'Hurray! <strong>N</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[30],
  },
],
},
inisArecorrectq30: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"N"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[30],
  },
],
},

//31
['isAre'+shuffledNumbersseventyseven[30]]: {
botPrompt: 'The cake ___ delicious.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq31',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq31',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq31',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq31',
    },
  ],
},

isArecorrectq31: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[31],
  },
],
},
inisArecorrectq31: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[31],
  },
],
},

//32
['isAre'+shuffledNumbersseventyseven[31]]: {
botPrompt: 'The flowers ___ blooming.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq32',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq32',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq32',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq32',
  },
],
},

isArecorrectq32: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[32],
  },
],
},
inisArecorrectq32: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[32],
  },
],
},

//33
['isAre'+shuffledNumbersseventyseven[32]]: {
botPrompt: 'The childrens ___ playing.',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq33',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq33',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq33',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq33',
  },
],
},

isArecorrectq33: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[33],
  },
],
},
inisArecorrectq33: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[33],
  },
],
},

//34
['isAre'+shuffledNumbersseventyseven[33]]: {
botPrompt: 'The book ___ interesting.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq34',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq34',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq34',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq34',
    },
  ],
},

isArecorrectq34: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[34],
  },
],
},
inisArecorrectq34: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[34],
  },
],
},


//35
['isAre'+shuffledNumbersseventyseven[34]]: {
botPrompt: 'The clouds ___ fluffy.',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq35',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq35',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq35',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq35',
  },
],
},

isArecorrectq35: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[35],
  },
],
},
inisArecorrectq35: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[35],
  },
],
},

//36
['isAre'+shuffledNumbersseventyseven[35]]: {
  botPrompt: 'The keys ___ missing.',
  type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq36',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq36',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq36',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq36',
  },
],
},
isArecorrectq36: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[36],
    },
  ],
},
inisArecorrectq36: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[36],
    },
  ],
},

//37
['isAre'+shuffledNumbersseventyseven[36]]: {
botPrompt: 'The stars ___ shining.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq37',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq37',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq37',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq37',
  },
],
},
isArecorrectq37: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[37],
  },
],
},
inisArecorrectq37: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[37],
  },
],
},

//38
['isAre'+shuffledNumbersseventyseven[37]]: {
botPrompt: 'The car ___ parked.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq38',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq38',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq38',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq38',
    },
  ],
},
isArecorrectq38: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[38],
  },
],
},
inisArecorrectq38: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[38],
  },
],
},

//39
['isAre'+shuffledNumbersseventyseven[38]]: {
botPrompt: 'The dogs ___ friendly. ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq39',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq39',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq39',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq39',
  },
],
},
isArecorrectq39: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> Answers! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[39],
  },
],
},
inisArecorrectq39: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[39],
  },
],
},

//40
['isAre'+shuffledNumbersseventyseven[39]]: {
botPrompt: 'The cats ___ sleeping.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq40',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq40',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq40',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq40',
    },
  ],
},
isArecorrectq40: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[40],
  },
],
},
inisArecorrectq40: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[40],
  },
],
},

//41
["isAre"+shuffledNumbersseventyseven[40]]: {
  botPrompt: 'The chairs ___ comfortable.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq41',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq41',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq41',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq41',
    },
  ],
},
isArecorrectq41: {
  botPrompt: 'Hurray <strong>A</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[41],
    },
  ],
},
inisArecorrectq41: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[41],
    },
  ],
},

//42

['isAre'+shuffledNumbersseventyseven[41]]: {
  botPrompt: 'The plants ___ growing.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq42',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq42',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq42',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq42',
    },
  ],
},

isArecorrectq42: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[42],
    },
  ],
},
inisArecorrectq42: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[42],
    },
  ],
},

//43
['isAre'+shuffledNumbersseventyseven[42]]: {
botPrompt: "The sky ___ blue.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq43',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq43',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq43',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq43',
    },
  ],
},

isArecorrectq43: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[43],
  },
],
},
inisArecorrectq43: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[43],
  },
],
},

//44
['isAre'+shuffledNumbersseventyseven[43]]: {
botPrompt: 'The students ___ learning.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq44',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq44',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq44',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq44',
    },
  ],
},

isArecorrectq44: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[44],
  },
],
},
inisArecorrectq44: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[44],
  },
],
},

//45
['isAre'+shuffledNumbersseventyseven[44]]: {
botPrompt: 'The birds ___ migrating.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq45',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq45',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq45',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq45',
    },
  ],
},

isArecorrectq45: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[45],
  },
],
},
inisArecorrectq45: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[45],
  },
],
},

//46
['isAre'+shuffledNumbersseventyseven[45]]: {
botPrompt: 'The tree ___ tall.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq46',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq46',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq46',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq46',
    },
  ],
},

isArecorrectq46: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[46],
  },
],
},
inisArecorrectq46: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[46],
  },
],
},

//47
['isAre'+shuffledNumbersseventyseven[46]]: {
botPrompt: 'The computer ___ on the desk.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq47',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq47',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq47',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq47',
    },
  ],
},

isArecorrectq47: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[47],
  },
],
},
inisArecorrectq47: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[47],
  },
],
},


//48
['isAre'+shuffledNumbersseventyseven[47]]: {
botPrompt: 'The shoes ___ comfortable.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq48',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq48',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq48',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq48',
    },
  ],
},

isArecorrectq48: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[48],
  },
],
},
inisArecorrectq48: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[48],
  },
],
},

//49
['isAre'+shuffledNumbersseventyseven[48]]: {
botPrompt: 'The boys ___ playing.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq49',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq49',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq49',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq49',
    },
  ],
},

isArecorrectq49: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[49],
  },
],
},
inisArecorrectq49: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[49],
  },
],
},


//50
['isAre'+shuffledNumbersseventyseven[49]]: {
botPrompt: ' The pen ___ on the table.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq50',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq50',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq50',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq50',
    },
  ],
},

isArecorrectq50: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[50],
  },
],
},
inisArecorrectq50: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[50],
  },
],
},

//51
['isAre'+shuffledNumbersseventyseven[50]]: {
botPrompt: 'The paintings ___ beautiful.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq51',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq51',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq51',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq51',
    },
  ],
},

isArecorrectq51: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[51],
  },
],
},
inisArecorrectq51: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[51],
  },
],
},

//52
['isAre'+shuffledNumbersseventyseven[51]]: {
botPrompt: 'The apples ___ ripe.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq52',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq52',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq52',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq52',
    },
  ],
},

isArecorrectq52: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[52],
  },
],
},
inisArecorrectq52: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[52],
  },
],
},

//53
['isAre'+shuffledNumbersseventyseven[52]]: {
botPrompt: 'The cat',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq53',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq53',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq53',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq53',
    },
  ],
},

isArecorrectq53: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[53],
  },
],
},
inisArecorrectq53: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[53],
  },
],
},

//54
['isAre'+shuffledNumbersseventyseven[53]]: {
botPrompt: 'The books',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq54',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq54',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq54',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq54',
    },
  ],
},

isArecorrectq54: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[54],
  },
],
},
inisArecorrectq54: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[54],
  },
],
},


//55
['isAre'+shuffledNumbersseventyseven[54]]: {
botPrompt: 'The flower',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq55',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq55',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq55',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq55',
    },
  ],
},

isArecorrectq55: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[55],
  },
],
},
inisArecorrectq55: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[55],
  },
],
},

//56
['isAre'+shuffledNumbersseventyseven[55]]: {
  botPrompt: 'The students',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq56',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq56',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq56',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq56',
    },
  ],
},
isArecorrectq56: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[56],
    },
  ],
},
inisArecorrectq56: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[56],
    },
  ],
},

//57
['isAre'+shuffledNumbersseventyseven[56]]: {
botPrompt: 'The Sun',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq57',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq57',
    },
  ],
},
isArecorrectq57: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>M</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[57],
  },
],
},
inisArecorrectq57: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"M"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[57],
  },
],
},

//58
['isAre'+shuffledNumbersseventyseven[57]]: {
botPrompt: 'The Birds ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq58',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq58',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq58',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq58',
  },
],
},
isArecorrectq58: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[58],
  },
],
},
inisArecorrectq58: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[58],
  },
],
},

//59
['isAre'+shuffledNumbersseventyseven[58]]: {
botPrompt: 'The tree',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq57',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq57',
    },
  ],
},
isArecorrectq59: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> Answers! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[59],
  },
],
},
inisArecorrectq59: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[59],
  },
],
},

//60
['isAre'+shuffledNumbersseventyseven[59]]: {
botPrompt: 'The apples',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq60',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq60',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq60',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq60',
  },
],
},
isArecorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[60],
  },
],
},
inisArecorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[60],
  },
],
},

//61
["isAre"+shuffledNumbersseventyseven[60]]: {
  botPrompt: 'The dog',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq61',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq61',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq61',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq61',
    },
  ],
},
isArecorrectq61: {
  botPrompt: 'Hurray <strong>is</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[61],
    },
  ],
},
inisArecorrectq61: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[61],
    },
  ],
},

//62
['isAre'+shuffledNumbersseventyseven[61]]: {
  botPrompt: 'The toys',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq62',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq62',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq62',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq62',
    },
  ],
},

isArecorrectq62: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[62],
    },
  ],
},
inisArecorrectq62: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[62],
    },
  ],
},

//63
['isAre'+shuffledNumbersseventyseven[62]]: {
botPrompt: "The computer",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq63',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq63',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq63',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq63',
    },
  ],
},

isArecorrectq63: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[63],
  },
],
},
inisArecorrectq63: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[63],
  },
],
},

//64
['isAre'+shuffledNumbersseventyseven[63]]: {
botPrompt: 'The friends',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq64',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq64',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq64',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq64',
  },
],
},

isArecorrectq64: {
botPrompt: 'Hurray! <strong>P</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[64],
  },
],
},
inisArecorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"P"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[64],
  },
],
},

//65
['isAre'+shuffledNumbersseventyseven[64]]: {
botPrompt: 'The house',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq65',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq65',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq65',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq65',
    },
  ],
},

isArecorrectq65: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[65],
  },
],
},
inisArecorrectq65: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[65],
  },
],
},

//66
['isAre'+shuffledNumbersseventyseven[65]]: {
botPrompt: 'The pencils',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq66',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq66',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq66',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq66',
  },
],
},

isArecorrectq66: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[66],
  },
],
},
inisArecorrectq66: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[66],
  },
],
},

//67
['isAre'+shuffledNumbersseventyseven[66]]: {
botPrompt: ' The cat and the dog ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq67',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq67',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq67',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq67',
  },
],
},

isArecorrectq67: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[67],
  },
],
},
inisArecorrectq67: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[67],
  },
],
},


//68
['isAre'+shuffledNumbersseventyseven[67]]: {
botPrompt: 'The chair',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq68',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq68',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq68',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq68',
    },
  ],
},

isArecorrectq68: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[68],
  },
],
},
inisArecorrectq68: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[68],
  },
],
},

//69
['isAre'+shuffledNumbersseventyseven[68]]: {
botPrompt: 'The birds and the bees',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq69',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq69',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq69',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq69',
  },
],
},

isArecorrectq69: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[69],
  },
],
},
inisArecorrectq69: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[69],
  },
],
},


//70
['isAre'+shuffledNumbersseventyseven[69]]: {
botPrompt: 'The flowers and the trees',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq70',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq70',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq70',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq70',
  },
],
},

isArecorrectq70: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[70],
  },
],
},
inisArecorrectq70: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[70],
  },
],
},

//71
['isAre'+shuffledNumbersseventyseven[70]]: {
botPrompt: 'The car',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq71',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq71',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq71',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq71',
    },
  ],
},

isArecorrectq71: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[71],
  },
],
},
inisArecorrectq71: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[71],
  },
],
},

//72
['isAre'+shuffledNumbersseventyseven[71]]: {
botPrompt: 'The stars',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq72',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq72',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq72',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq72',
  },
],
},

isArecorrectq72: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[72],
  },
],
},
inisArecorrectq72: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[72],
  },
],
},

//73
['isAre'+shuffledNumbersseventyseven[72]]: {
botPrompt: 'The bookshelf',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq73',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq73',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq73',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq73',
    },
  ],
},

isArecorrectq73: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[73],
  },
],
},
inisArecorrectq73: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[73],
  },
],
},

//74
['isAre'+shuffledNumbersseventyseven[73]]: {
botPrompt: 'The friends and family',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq74',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq74',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq74',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq74',
  },
],
},

isArecorrectq74: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[74],
  },
],
},
inisArecorrectq74: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[74],
  },
],
},


//75
['isAre'+shuffledNumbersseventyseven[74]]: {
botPrompt: 'The mountain',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq75',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq75',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq75',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq75',
    },
  ],
},

isArecorrectq75: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[75],
  },
],
},
inisArecorrectq75: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[75],
  },
],
},

//76
['isAre'+shuffledNumbersseventyseven[75]]: {
  botPrompt: 'The shoes',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq76',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq76',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq76',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq76',
    },
  ],
},
isArecorrectq76: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[76],
    },
  ],
},
inisArecorrectq76: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[76],
    },
  ],
},

//77
['isAre'+shuffledNumbersseventyseven[76]]: {
botPrompt: 'The table',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq77',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq77',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq77',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq77',
    },
  ],
},
isArecorrectq77: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'wishtocontinue16',
  },
],
},
inisArecorrectq77: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'wishtocontinue16',
  },
],
},




//endisAreletter
wishtocontinue16: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day17',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},



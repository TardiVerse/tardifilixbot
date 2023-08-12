//isAre


["isAre"+shuffledNumbersto[0]]: {
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
      nextId: 'isAre'+shuffledNumbersto[1],
    },
  ],
},
inisArecorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[1],
    },
  ],
},

['isAre'+shuffledNumbersto[1]]: {
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
      nextId: 'isAre'+shuffledNumbersto[2],
    },
  ],
},
inisArecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[2],
    },
  ],
},

//3
['isAre'+shuffledNumbersto[2]]: {
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
    nextId: 'isAre'+shuffledNumbersto[3],
  },
],
},
inisArecorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[3],
  },
],
},

//4
['isAre'+shuffledNumbersto[3]]: {
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
    nextId: 'isAre'+shuffledNumbersto[4],
  },
],
},
inisArecorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[4],
  },
],
},

//5
['isAre'+shuffledNumbersto[4]]: {
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
    nextId: 'isAre'+shuffledNumbersto[5],
  },
],
},
inisArecorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[5],
  },
],
},

//6
['isAre'+shuffledNumbersto[5]]: {
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
    nextId: 'isAre'+shuffledNumbersto[6],
  },
],
},
inisArecorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[6],
  },
],
},

//7
['isAre'+shuffledNumbersto[6]]: {
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
    nextId: 'isAre'+shuffledNumbersto[7],
  },
],
},
inisArecorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[7],
  },
],
},


//8
['isAre'+shuffledNumbersto[7]]: {
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
    nextId: 'isAre'+shuffledNumbersto[8],
  },
],
},
inisArecorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[8],
  },
],
},

//9
['isAre'+shuffledNumbersto[8]]: {
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
    nextId: 'isAre'+shuffledNumbersto[9],
  },
],
},
inisArecorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[9],
  },
],
},


//10
['isAre'+shuffledNumbersto[9]]: {
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
    nextId: 'isAre'+shuffledNumbersto[10],
  },
],
},
inisArecorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[10],
  },
],
},

//11
['isAre'+shuffledNumbersto[10]]: {
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
    nextId: 'isAre'+shuffledNumbersto[11],
  },
],
},
inisArecorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[11],
  },
],
},

//12
['isAre'+shuffledNumbersto[11]]: {
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
    nextId: 'isAre'+shuffledNumbersto[12],
  },
],
},
inisArecorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[12],
  },
],
},

//13
['isAre'+shuffledNumbersto[12]]: {
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
    nextId: 'isAre'+shuffledNumbersto[13],
  },
],
},
inisArecorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[13],
  },
],
},

//14
['isAre'+shuffledNumbersto[13]]: {
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
    nextId: 'isAre'+shuffledNumbersto[14],
  },
],
},
inisArecorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[14],
  },
],
},


//15
['isAre'+shuffledNumbersto[14]]: {
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
    nextId: 'isAre'+shuffledNumbersto[15],
  },
],
},
inisArecorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[15],
  },
],
},

//16
['isAre'+shuffledNumbersto[15]]: {
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
      nextId: 'isAre'+shuffledNumbersto[16],
    },
  ],
},
inisArecorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[16],
    },
  ],
},

//17
['isAre'+shuffledNumbersto[16]]: {
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
    nextId: 'isAre'+shuffledNumbersto[17],
  },
],
},
inisArecorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[17],
  },
],
},

//18
['isAre'+shuffledNumbersto[17]]: {
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
    nextId: 'isAre'+shuffledNumbersto[18],
  },
],
},
inisArecorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[18],
  },
],
},

//19
['isAre'+shuffledNumbersto[18]]: {
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
    nextId: 'isAre'+shuffledNumbersto[19],
  },
],
},
inisArecorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[19],
  },
],
},

//20
['isAre'+shuffledNumbersto[19]]: {
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
    nextId: 'isAre'+shuffledNumbersto[20],
  },
],
},
inisArecorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[20],
  },
],
},

//21
["isAre"+shuffledNumbersto[20]]: {
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
      nextId: 'isAre'+shuffledNumbersto[21],
    },
  ],
},
inisArecorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[21],
    },
  ],
},

//22
['isAre'+shuffledNumbersto[21]]: {
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
      nextId: 'isAre'+shuffledNumbersto[22],
    },
  ],
},
inisArecorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[22],
    },
  ],
},

//23
['isAre'+shuffledNumbersto[22]]: {
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
    nextId: 'isAre'+shuffledNumbersto[23],
  },
],
},
inisArecorrectq23: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[23],
  },
],
},

//24
['isAre'+shuffledNumbersto[23]]: {
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
    nextId: 'isAre'+shuffledNumbersto[24],
  },
],
},
inisArecorrectq24: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[24],
  },
],
},

//25
['isAre'+shuffledNumbersto[24]]: {
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
    nextId: 'isAre'+shuffledNumbersto[25],
  },
],
},
inisArecorrectq25: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[25],
  },
],
},

//26
['isAre'+shuffledNumbersto[25]]: {
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
    nextId: 'isAre'+shuffledNumbersto[26],
  },
],
},
inisArecorrectq26: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[26],
  },
],
},

//27
['isAre'+shuffledNumbersto[26]]: {
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
    nextId: 'isAre'+shuffledNumbersto[27],
  },
],
},
inisArecorrectq27: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[27],
  },
],
},


//28
['isAre'+shuffledNumbersto[27]]: {
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
    nextId: 'isAre'+shuffledNumbersto[28],
  },
],
},
inisArecorrectq28: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[28],
  },
],
},

//29
['isAre'+shuffledNumbersto[28]]: {
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
    nextId: 'isAre'+shuffledNumbersto[29],
  },
],
},
inisArecorrectq29: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[29],
  },
],
},


//30
['isAre'+shuffledNumbersto[29]]: {
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
    nextId: 'isAre'+shuffledNumbersto[30],
  },
],
},
inisArecorrectq30: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"N"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[30],
  },
],
},

//31
['isAre'+shuffledNumbersto[30]]: {
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
    nextId: 'isAre'+shuffledNumbersto[31],
  },
],
},
inisArecorrectq31: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[31],
  },
],
},

//32
['isAre'+shuffledNumbersto[31]]: {
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
    nextId: 'isAre'+shuffledNumbersto[32],
  },
],
},
inisArecorrectq32: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[32],
  },
],
},

//33
['isAre'+shuffledNumbersto[32]]: {
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
    nextId: 'isAre'+shuffledNumbersto[33],
  },
],
},
inisArecorrectq33: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[33],
  },
],
},

//34
['isAre'+shuffledNumbersto[33]]: {
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
    nextId: 'isAre'+shuffledNumbersto[34],
  },
],
},
inisArecorrectq34: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[34],
  },
],
},


//35
['isAre'+shuffledNumbersto[34]]: {
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
    nextId: 'isAre'+shuffledNumbersto[35],
  },
],
},
inisArecorrectq35: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[35],
  },
],
},

//36
['isAre'+shuffledNumbersto[35]]: {
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
      nextId: 'isAre'+shuffledNumbersto[36],
    },
  ],
},
inisArecorrectq36: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[36],
    },
  ],
},

//37
['isAre'+shuffledNumbersto[36]]: {
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
    nextId: 'isAre'+shuffledNumbersto[37],
  },
],
},
inisArecorrectq37: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[37],
  },
],
},

//38
['isAre'+shuffledNumbersto[37]]: {
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
    nextId: 'isAre'+shuffledNumbersto[38],
  },
],
},
inisArecorrectq38: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[38],
  },
],
},

//39
['isAre'+shuffledNumbersto[38]]: {
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
    nextId: 'isAre'+shuffledNumbersto[39],
  },
],
},
inisArecorrectq39: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[39],
  },
],
},

//40
['isAre'+shuffledNumbersto[39]]: {
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
    nextId: 'isAre'+shuffledNumbersto[40],
  },
],
},
inisArecorrectq40: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[40],
  },
],
},

//41
["isAre"+shuffledNumbersto[40]]: {
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
      nextId: 'isAre'+shuffledNumbersto[41],
    },
  ],
},
inisArecorrectq41: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[41],
    },
  ],
},

//42

['isAre'+shuffledNumbersto[41]]: {
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
      nextId: 'isAre'+shuffledNumbersto[42],
    },
  ],
},
inisArecorrectq42: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[42],
    },
  ],
},

//43
['isAre'+shuffledNumbersto[42]]: {
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
    nextId: 'isAre'+shuffledNumbersto[43],
  },
],
},
inisArecorrectq43: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[43],
  },
],
},

//44
['isAre'+shuffledNumbersto[43]]: {
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
    nextId: 'isAre'+shuffledNumbersto[44],
  },
],
},
inisArecorrectq44: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[44],
  },
],
},

//45
['isAre'+shuffledNumbersto[44]]: {
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
    nextId: 'isAre'+shuffledNumbersto[45],
  },
],
},
inisArecorrectq45: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[45],
  },
],
},

//46
['isAre'+shuffledNumbersto[45]]: {
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
    nextId: 'isAre'+shuffledNumbersto[46],
  },
],
},
inisArecorrectq46: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[46],
  },
],
},

//47
['isAre'+shuffledNumbersto[46]]: {
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
    nextId: 'isAre'+shuffledNumbersto[47],
  },
],
},
inisArecorrectq47: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[47],
  },
],
},


//48
['isAre'+shuffledNumbersto[47]]: {
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
    nextId: 'isAre'+shuffledNumbersto[48],
  },
],
},
inisArecorrectq48: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[48],
  },
],
},

//49
['isAre'+shuffledNumbersto[48]]: {
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
    nextId: 'isAre'+shuffledNumbersto[49],
  },
],
},
inisArecorrectq49: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[49],
  },
],
},


//50
['isAre'+shuffledNumbersto[49]]: {
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
    nextId: 'isAre'+shuffledNumbersto[50],
  },
],
},
inisArecorrectq50: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[50],
  },
],
},

//51
['isAre'+shuffledNumbersto[50]]: {
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
    nextId: 'isAre'+shuffledNumbersto[51],
  },
],
},
inisArecorrectq51: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[51],
  },
],
},

//52
['isAre'+shuffledNumbersto[51]]: {
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
    nextId: 'isAre'+shuffledNumbersto[52],
  },
],
},
inisArecorrectq52: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[52],
  },
],
},

//53
['isAre'+shuffledNumbersto[52]]: {
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
    nextId: 'isAre'+shuffledNumbersto[53],
  },
],
},
inisArecorrectq53: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[53],
  },
],
},

//54
['isAre'+shuffledNumbersto[53]]: {
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
    nextId: 'isAre'+shuffledNumbersto[54],
  },
],
},
inisArecorrectq54: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[54],
  },
],
},


//55
['isAre'+shuffledNumbersto[54]]: {
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
    nextId: 'isAre'+shuffledNumbersto[55],
  },
],
},
inisArecorrectq55: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[55],
  },
],
},

//56
['isAre'+shuffledNumbersto[55]]: {
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
      nextId: 'isAre'+shuffledNumbersto[56],
    },
  ],
},
inisArecorrectq56: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[56],
    },
  ],
},

//57
['isAre'+shuffledNumbersto[56]]: {
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
    nextId: 'isAre'+shuffledNumbersto[57],
  },
],
},
inisArecorrectq57: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"M"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[57],
  },
],
},

//58
['isAre'+shuffledNumbersto[57]]: {
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
    nextId: 'isAre'+shuffledNumbersto[58],
  },
],
},
inisArecorrectq58: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[58],
  },
],
},

//59
['isAre'+shuffledNumbersto[58]]: {
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
    nextId: 'isAre'+shuffledNumbersto[59],
  },
],
},
inisArecorrectq59: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[59],
  },
],
},

//60
['isAre'+shuffledNumbersto[59]]: {
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
    nextId: 'isAre'+shuffledNumbersto[60],
  },
],
},
inisArecorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[60],
  },
],
},

//61
["isAre"+shuffledNumbersto[60]]: {
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
      nextId: 'isAre'+shuffledNumbersto[61],
    },
  ],
},
inisArecorrectq61: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[61],
    },
  ],
},

//62
['isAre'+shuffledNumbersto[61]]: {
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
      nextId: 'isAre'+shuffledNumbersto[62],
    },
  ],
},
inisArecorrectq62: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[62],
    },
  ],
},

//63
['isAre'+shuffledNumbersto[62]]: {
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
    nextId: 'isAre'+shuffledNumbersto[63],
  },
],
},
inisArecorrectq63: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[63],
  },
],
},

//64
['isAre'+shuffledNumbersto[63]]: {
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
    nextId: 'isAre'+shuffledNumbersto[64],
  },
],
},
inisArecorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"P"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[64],
  },
],
},

//65
['isAre'+shuffledNumbersto[64]]: {
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
    nextId: 'isAre'+shuffledNumbersto[65],
  },
],
},
inisArecorrectq65: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[65],
  },
],
},

//66
['isAre'+shuffledNumbersto[65]]: {
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
    nextId: 'isAre'+shuffledNumbersto[66],
  },
],
},
inisArecorrectq66: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[66],
  },
],
},

//67
['isAre'+shuffledNumbersto[66]]: {
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
    nextId: 'isAre'+shuffledNumbersto[67],
  },
],
},
inisArecorrectq67: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[67],
  },
],
},


//68
['isAre'+shuffledNumbersto[67]]: {
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
    nextId: 'isAre'+shuffledNumbersto[68],
  },
],
},
inisArecorrectq68: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[68],
  },
],
},

//69
['isAre'+shuffledNumbersto[68]]: {
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
    nextId: 'isAre'+shuffledNumbersto[69],
  },
],
},
inisArecorrectq69: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[69],
  },
],
},


//70
['isAre'+shuffledNumbersto[69]]: {
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
    nextId: 'isAre'+shuffledNumbersto[70],
  },
],
},
inisArecorrectq70: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[70],
  },
],
},

//71
['isAre'+shuffledNumbersto[70]]: {
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
    nextId: 'isAre'+shuffledNumbersto[71],
  },
],
},
inisArecorrectq71: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[71],
  },
],
},

//72
['isAre'+shuffledNumbersto[71]]: {
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
    nextId: 'isAre'+shuffledNumbersto[72],
  },
],
},
inisArecorrectq72: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[72],
  },
],
},

//73
['isAre'+shuffledNumbersto[72]]: {
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
    nextId: 'isAre'+shuffledNumbersto[73],
  },
],
},
inisArecorrectq73: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[73],
  },
],
},

//74
['isAre'+shuffledNumbersto[73]]: {
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
    nextId: 'isAre'+shuffledNumbersto[74],
  },
],
},
inisArecorrectq74: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[74],
  },
],
},


//75
['isAre'+shuffledNumbersto[74]]: {
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
    nextId: 'isAre'+shuffledNumbersto[75],
  },
],
},
inisArecorrectq75: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersto[75],
  },
],
},

//76
['isAre'+shuffledNumbersto[75]]: {
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
      nextId: 'isAre'+shuffledNumbersto[76],
    },
  ],
},
inisArecorrectq76: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersto[76],
    },
  ],
},

//77
['isAre'+shuffledNumbersto[76]]: {
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
    nextId: 'wishtocontinue17',
  },
],
},
inisArecorrectq77: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'wishtocontinue17',
  },
],
},




//endisAreletter
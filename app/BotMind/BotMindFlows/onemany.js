
["oneandmany"+shuffledNumbersthree[0]]: {
  botPrompt: 'I have ___ brother and two sisters.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['one', 'many', "onee","any"]),
  answers: [
    {
      answer: 'one',
      nextId: 'oneandmanycorrect',
    },
    {
      answer: 'many',
      nextId: 'inoneandmanycorrect',
    },
    {
      answer: "onee",
      nextId: 'inoneandmanycorrect',
    },
    {
      answer: "any",
      nextId: 'inoneandmanycorrect',
    },
  ],
},
oneandmanycorrect: {
  botPrompt: 'Hurray <strong>one</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[1],
    },
  ],
},
inoneandmanycorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>one</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[1],
    },
  ],
},

['oneandmany'+shuffledNumbersthree[1]]: {
  botPrompt: 'There are ___ apples in the basket.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['one', 'many', "onee","any"]),
  answers: [
    {
      answer: 'one',
      nextId: 'inoneandmanycorrectq2',
    },
    {
      answer: 'many',
      nextId: 'oneandmanycorrectq2',
    },
    {
      answer: "onee",
      nextId: 'inoneandmanycorrectq2',
    },
    {
      answer: "any",
      nextId: 'inoneandmanycorrectq2',
    },
  ],
},

oneandmanycorrectq2: {
  botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[2],
    },
  ],
},
inoneandmanycorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[2],
    },
  ],
},

//3
['oneandmany'+shuffledNumbersthree[2]]: {
botPrompt: "She has ___ pet cat and two pet dogs.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'oneandmanycorrectq3',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "any",
    nextId: 'inoneandmanycorrectq3',
  },
],
},

oneandmanycorrectq3: {
botPrompt: 'Hurray! <strong>one</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[3],
  },
],
},
inoneandmanycorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"one"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[3],
  },
],
},

//4
['oneandmany'+shuffledNumbersthree[3]]: {
botPrompt: 'We saw ___ bird flying in the sky.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'oneandmanycorrectq3',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "any",
    nextId: 'inoneandmanycorrectq3',
  },
],
},

oneandmanycorrectq4: {
botPrompt: 'Hurray! <strong>one</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[4],
  },
],
},
inoneandmanycorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"one"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[4],
  },
],
},

//5
['oneandmany'+shuffledNumbersthree[4]]: {
botPrompt: 'They have ___ books on their bookshelf.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: 'many',
    nextId: 'oneandmanycorrectq5',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: "any",
    nextId: 'inoneandmanycorrectq5',
  },
],
},

oneandmanycorrectq5: {
botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[5],
  },
],
},
inoneandmanycorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[5],
  },
],
},

//6
['oneandmany'+shuffledNumbersthree[5]]: {
botPrompt: ' He bought ___ toy from the store.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: "any",
    nextId: 'oneandmanycorrectq5',
  },
],
},

oneandmanycorrectq6: {
botPrompt: 'Hurray! <strong>any</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[6],
  },
],
},
inoneandmanycorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"any"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[6],
  },
],
},

//7
['oneandmany'+shuffledNumbersthree[6]]: {
botPrompt: 'We planted ___ flowers in the garden. ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['onee', 'manyy', "many","manya"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq7',
  },
  {
    answer: 'manyy',
    nextId: 'inoneandmanycorrectq7',
  },
  {
    answer: "many",
    nextId: 'oneandmanycorrectq7',
  },
  {
    answer: "manya",
    nextId: 'inoneandmanycorrectq7',
  },
],
},

oneandmanycorrectq7: {
botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[7],
  },
],
},
inoneandmanycorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[7],
  },
],
},


//8
['oneandmany'+shuffledNumbersthree[7]]: {
botPrompt: 'I ate ___ slice of cake at the party.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['onee', 'many', "onee","one"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq8',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq8',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq8',
  },
  {
    answer: "one",
    nextId: 'oneandmanycorrectq8',
  },
],
},

oneandmanycorrectq8: {
botPrompt: 'Hurray! <strong>d</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[8],
  },
],
},
inoneandmanycorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"d"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[8],
  },
],
},

//9
['oneandmany'+shuffledNumbersthree[8]]: {
botPrompt: 'They have ___ pencils in their pencil case.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['onee', 'manyy', "many","maany"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq9',
  },
  {
    answer: 'manyy',
    nextId: 'inoneandmanycorrectq9',
  },
  {
    answer: "many",
    nextId: 'oneandmanycorrectq9',
  },
  {
    answer: "maany",
    nextId: 'inoneandmanycorrectq9',
  },
],
},

oneandmanycorrectq9: {
botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[9],
  },
],
},
inoneandmanycorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[9],
  },
],
},


//10
['oneandmany'+shuffledNumbersthree[9]]: {
botPrompt: ' She drew ___ picture on the paper.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['onee', 'many', "many","one"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq10',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq10',
  },
  {
    answer: "many",
    nextId: 'inoneandmanycorrectq10',
  },
  {
    answer: "one",
    nextId: 'oneandmanycorrectq10',
  },
],
},

oneandmanycorrectq10: {
botPrompt: 'Hurray! <strong>one</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[10],
  },
],
},
inoneandmanycorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"one"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[10],
  },
],
},

//11
['oneandmany'+shuffledNumbersthree[10]]: {
botPrompt: 'Change the word to it`s many form:Book',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['books', 'bookes', "bookies","book"]),
answers: [
  {
    answer: 'books',
    nextId: 'oneandmanycorrectq11',
  },
  {
    answer: 'bookes',
    nextId: 'inoneandmanycorrectq11',
  },
  {
    answer: "bookies",
    nextId: 'inoneandmanycorrectq11',
  },
  {
    answer: "book",
    nextId: 'inoneandmanycorrectq11',
  },
],
},

oneandmanycorrectq11: {
botPrompt: 'Hurray! <strong>books</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[11],
  },
],
},
inoneandmanycorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"books"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[11],
  },
],
},

//12
['oneandmany'+shuffledNumbersthree[11]]: {
botPrompt: ' Change the word to it`s many form:Dog',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['dogses', 'dogses', "dogs","dog"]),
answers: [
  {
    answer: 'dogses',
    nextId: 'inoneandmanycorrectq12',
  },
  {
    answer: 'dogses',
    nextId: 'inoneandmanycorrectq12',
  },
  {
    answer: "dogs",
    nextId: 'oneandmanycorrectq12',
  },
  {
    answer: "dog",
    nextId: 'inoneandmanycorrectq12',
  },
],
},

oneandmanycorrectq12: {
botPrompt: 'Hurray! <strong>dogs</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[12],
  },
],
},
inoneandmanycorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"dogs"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[12],
  },
],
},

//13
['oneandmany'+shuffledNumbersthree[12]]: {
botPrompt: 'Change the word to it`s many form:Leaf',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['leafs', 'leafs', "leaves","leafe"]),
answers: [
  {
    answer: 'leafs',
    nextId: 'inoneandmanycorrectq13',
  },
  {
    answer: 'leafs',
    nextId: 'inoneandmanycorrectq13',
  },
  {
    answer: "leaves",
    nextId: 'oneandmanycorrectq13',
  },
  {
    answer: "leafe",
    nextId: 'inoneandmanycorrectq13',
  },
],
},

oneandmanycorrectq13: {
botPrompt: 'Hurray! <strong>leaves</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[13],
  },
],
},
inoneandmanycorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"leaves"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[13],
  },
],
},

//14
['oneandmany'+shuffledNumbersthree[13]]: {
botPrompt: ' Change the word to it`s many form: Butterfly',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['butterfles', 'butterfles', "butterflies","butterfly"]),
answers: [
  {
    answer: 'butterfles',
    nextId: 'inoneandmanycorrectq14',
  },
  {
    answer: 'butterfles',
    nextId: 'inoneandmanycorrectq14',
  },
  {
    answer: "butterflies",
    nextId: 'oneandmanycorrectq14',
  },
  {
    answer: "butterfly",
    nextId: 'inoneandmanycorrectq14',
  },
],
},

oneandmanycorrectq14: {
botPrompt: 'Hurray! <strong>butterflies</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[14],
  },
],
},
inoneandmanycorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"butterflies"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[14],
  },
],
},


//15
['oneandmany'+shuffledNumbersthree[14]]: {
botPrompt: 'Change the word to it`s many form:Apple',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['apples', 'applees', "appleses","apple"]),
answers: [
  {
    answer: 'apples',
    nextId: 'oneandmanycorrectq15',
  },
  {
    answer: 'applees',
    nextId: 'inoneandmanycorrectq15',
  },
  {
    answer: "appleses",
    nextId: 'inoneandmanycorrectq15',
  },
  {
    answer: "apple",
    nextId: 'inoneandmanycorrectq15',
  },
],
},

oneandmanycorrectq15: {
botPrompt: 'Hurray! <strong>apples</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[15],
  },
],
},
inoneandmanycorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"apples"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[15],
  },
],
},

//16
['oneandmany'+shuffledNumbersthree[15]]: {
  botPrompt: 'Change the word to it`s many form:Child',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['children', 'childs', "childrens","child"]),
  answers: [
    {
      answer: 'children',
      nextId: 'oneandmanycorrectq16',
    },
    {
      answer: 'childs',
      nextId: 'inoneandmanycorrectq16',
    },
    {
      answer: "childrens",
      nextId: 'inoneandmanycorrectq16',
    },
    {
      answer: "child",
      nextId: 'inoneandmanycorrectq16',
    },
  
  ],
},
oneandmanycorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>children</strong> 😎',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[16],
    },
  ],
},
inoneandmanycorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"children"</strong>',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[16],
    },
  ],
},

//17
['oneandmany'+shuffledNumbersthree[16]]: {
botPrompt: 'Change the word to it`s many form:Key',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['keys', 'keyses', "keyies","key"]),
answers: [
  {
    answer: 'keys',
    nextId: 'oneandmanycorrectq17',
  },
  {
    answer: 'keyses',
    nextId: 'inoneandmanycorrectq17',
  },
  {
    answer: "keyies",
    nextId: 'inoneandmanycorrectq17',
  },
  {
    answer: "key",
    nextId: 'inoneandmanycorrectq17',
  },
 
],
},
oneandmanycorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>keys</strong> 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[17],
  },
],
},
inoneandmanycorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"keys"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[17],
  },
],
},

//18
['oneandmany'+shuffledNumbersthree[17]]: {
botPrompt: 'Change the word to it`s many form:Toy ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['toyses', 'toyes', "toys","toy"]),
answers: [
  {
    answer: 'toyses',
    nextId: 'inoneandmanycorrectq18',
  },
  {
    answer: 'toyes',
    nextId: 'inoneandmanycorrectq18',
  },
  {
    answer: "toys",
    nextId: 'oneandmanycorrectq18',
  },
  {
    answer: "toy",
    nextId: 'inoneandmanycorrectq18',
  },
 
],
},
oneandmanycorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>toys</strong> 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[18],
  },
],
},
inoneandmanycorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"toys"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[18],
  },
],
},

//19
['oneandmany'+shuffledNumbersthree[18]]: {
botPrompt: 'Change the word to it`s many form:Mouse ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['mice', 'mouseses', "mouseies","mouses"]),
answers: [
  {
    answer: 'mice',
    nextId: 'oneandmanycorrectq19',
  },
  {
    answer: 'mouseses',
    nextId: 'inoneandmanycorrectq19',
  },
  {
    answer: "mouseies",
    nextId: 'inoneandmanycorrectq19',
  },
  {
    answer: "mouses",
    nextId: 'inoneandmanycorrectq19',
  },
 
],
},
oneandmanycorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>mice</strong> Answers! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[19],
  },
],
},
inoneandmanycorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"mice"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[19],
  },
],
},

//20
['oneandmany'+shuffledNumbersthree[19]]: {
botPrompt: 'Change the word to it`s many form:Bag',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Bags', 'Baags', "baggs","baaags"]),
answers: [
  {
    answer: 'Bags',
    nextId: 'oneandmanycorrectq20',
  },
  {
    answer: 'Baags',
    nextId: 'inoneandmanycorrectq20',
  },
  {
    answer: "baggs",
    nextId: 'inoneandmanycorrectq20',
  },
  {
    answer: "baaags",
    nextId: 'inoneandmanycorrectq20',
  },

],
},
oneandmanycorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Bags</strong> 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[20],
  },
],
},
inoneandmanycorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bags"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[20],
  },
],
},

//21
['oneandmany'+shuffledNumbersthree[20]]: {
    botPrompt: 'Complete the sentence: I have two ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['books', 'bookes', "bookies","book"]),
    answers: [
      {
        answer: 'books',
        nextId: 'oneandmanycorrectq21',
      },
      {
        answer: 'bookes',
        nextId: 'inoneandmanycorrectq21',
      },
      {
        answer: "bookies",
        nextId: 'inoneandmanycorrectq21',
      },
      {
        answer: "book",
        nextId: 'inoneandmanycorrectq21',
      },
    
    ],
    },
    oneandmanycorrectq21: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>books</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[21],
      },
    ],
    },
    inoneandmanycorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"books"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[21],
      },
    ],
    },


//22
['oneandmany'+shuffledNumbersthree[21]]: {
    botPrompt: 'Complete the sentence: There are many ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['dog', 'dogses', "doggies","dogs"]),
    answers: [
      {
        answer: 'dog',
        nextId: 'inoneandmanycorrectq22',
      },
      {
        answer: 'dogses',
        nextId: 'inoneandmanycorrectq22',
      },
      {
        answer: "doggies",
        nextId: 'inoneandmanycorrectq22',
      },
      {
        answer: "dogs",
        nextId: 'oneandmanycorrectq22',
      },
    
    ],
    },
    oneandmanycorrectq22: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>dogs</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[22],
      },
    ],
    },
    inoneandmanycorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"dogs"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[22],
      },
    ],
    },


//23
['oneandmany'+shuffledNumbersthree[22]]: {
    botPrompt: 'Complete the sentence: We saw three ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['butterfly', 'butterfles', "butterflies","butterflie"]),
    answers: [
      {
        answer: 'butterfly',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'butterfles',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "butterflies",
        nextId: 'oneandmanycorrectq20',
      },
      {
        answer: "butterflie",
        nextId: 'inoneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>butterflies</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[23],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"butterflies"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[23],
      },
    ],
    },


//24
['oneandmany'+shuffledNumbersthree[23]]: {
    botPrompt: 'Complete the sentence: I found five ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['key', 'keyses', "bookies","book"]),
    answers: [
      {
        answer: 'key',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'keyses',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "keyies",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "keys",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>keys</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[24],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"keys"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[24],
      },
    ],
    },


//25
['oneandmany'+shuffledNumbersthree[24]]: {
    botPrompt: 'Complete the sentence: I found five ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['balloon', 'balloonies', "balloonses","balloons"]),
    answers: [
      {
        answer: 'balloon',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'balloonies',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "balloonses",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "balloons",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>balloons</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[25],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"balloons"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[25],
      },
    ],
    },


//26
['oneandmany'+shuffledNumbersthree[25]]: {
    botPrompt: 'Complete the sentence: He has three ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['brother', 'brotherses', "brotheries","brothers"]),
    answers: [
      {
        answer: 'brother',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'brotherses',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "brotheries",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "brothers",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>brothers</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[26],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"brothers"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[26],
      },
    ],
    },


//27
['oneandmany'+shuffledNumbersthree[26]]: {
    botPrompt: 'Complete the sentence: There are two ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['fish', 'fishies', "fishses","fishes"]),
    answers: [
      {
        answer: 'fish',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'fishies',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "fishses",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "fishes",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>fishes</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[27],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"fishes"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[27],
      },
    ],
    },


//28
['oneandmany'+shuffledNumbersthree[27]]: {
    botPrompt: 'Complete the sentence: I found four ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['pencil', 'pencilies', "pencilses","book"]),
    answers: [
      {
        answer: 'pencil',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'pencilies',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "pencilses",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "pencils",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>pencils</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[28],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"pencils"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[28],
      },
    ],
    },


//29
['oneandmany'+shuffledNumbersthree[28]]: {
    botPrompt: 'Complete the sentence: We saw three ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['horse', 'horseses', "horseies","horses"]),
    answers: [
      {
        answer: 'horse',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'horseses',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "horseies",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "horses",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>horses</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[29],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"horses"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[29],
      },
    ],
    },


//30
['oneandmany'+shuffledNumbersthree[29]]: {
    botPrompt: 'Complete the sentence: There are two ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['tooth', 'toothes', "teeths","teeth"]),
    answers: [
      {
        answer: 'tooth',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'toothes',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "teeths",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "teeth",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>teeth</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[21],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"teeth"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[21],
      },
    ],
    },



//zero


["zero"+shuffledNumbersto[0]]: {
  botPrompt: 'What does the number "0" represent?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['The smallest number', 'The largest number', "nothing or empty","a negative value"]),
  answers: [
    {
      answer: 'The smallest number',
      nextId: 'inzerocorrect',
    },
    {
      answer: 'The largest number',
      nextId: 'inzerocorrect',
    },
    {
      answer: "nothing or empty",
      nextId: 'zerocorrect',
    },
    {
      answer: "a negative value",
      nextId: 'inzerocorrect',
    },
  ],
},
zerocorrect: {
  botPrompt: 'Hurray <strong>nothing or empty</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersto[1],
    },
  ],
},
inzerocorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"nothing or empty"</strong>',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersto[1],
    },
  ],
},

['zero'+shuffledNumbersto[1]]: {
  botPrompt: 'What happens when you add or subtract zero from a number?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['The number stays the same', 'The number becomes negative', "The number becomes zero ","The number becomes double"]),
  answers: [
    {
      answer: 'The number stays the same',
      nextId: 'zerocorrectq2',
    },
    {
      answer: 'The number becomes negative',
      nextId: 'inzerocorrectq2',
    },
    {
      answer: "The number becomes zero ",
      nextId: 'inzerocorrectq2',
    },
    {
      answer: "The number becomes double",
      nextId: 'inzerocorrectq2',
    },
  ],
},

zerocorrectq2: {
  botPrompt: 'Hurray! <strong>The number stays the same</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersto[2],
    },
  ],
},
inzerocorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The number stays the same"</strong>',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersto[2],
    },
  ],
},

//3
['zero'+shuffledNumbersto[2]]: {
botPrompt: "How many apples are there if someone gives you zero apples?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '5', "0","10"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq3',
  },
  {
    answer: '5',
    nextId: 'inzerocorrectq3',
  },
  {
    answer: "0",
    nextId: 'zerocorrectq3',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq3',
  },
],
},

zerocorrectq3: {
botPrompt: 'Hurray! <strong>0</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[3],
  },
],
},
inzerocorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[3],
  },
],
},

//4
['zero'+shuffledNumbersto[3]]: {
botPrompt: 'What is the value of zero plus zero?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '0', "10","100"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq4',
  },
  {
    answer: '0',
    nextId: 'zerocorrectq4',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq4',
  },
  {
    answer: "100",
    nextId: 'inzerocorrectq4',
  },
],
},

zerocorrectq4: {
botPrompt: 'Hurray! <strong>0</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[4],
  },
],
},
inzerocorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[4],
  },
],
},

//5
['zero'+shuffledNumbersto[4]]: {
botPrompt: 'What does it mean if you have zero chocolates?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['You have a lot of chocolates', 'You have no chocolates', "You have one chocolate","You have two chocolates"]),
answers: [
  {
    answer: 'You have a lot of chocolates',
    nextId: 'inzerocorrectq5',
  },
  {
    answer: 'You have no chocolates',
    nextId: 'zerocorrectq5',
  },
  {
    answer: "You have one chocolate",
    nextId: 'inzerocorrectq5',
  },
  {
    answer: "You have two chocolates",
    nextId: 'inzerocorrectq5',
  },
],
},

zerocorrectq5: {
botPrompt: 'Hurray! <strong>You have no chocolates</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[5],
  },
],
},
inzerocorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"You have no chocolates"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[5],
  },
],
},

//6
['zero'+shuffledNumbersto[5]]: {
botPrompt: 'If you have five marbles and you give away zero marbles,how many marbles do you have left?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '0', "10","5"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq6',
  },
  {
    answer: '0',
    nextId: 'inzerocorrectq6',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq6',
  },
  {
    answer: "5",
    nextId: 'zerocorrectq6',
  },
],
},

zerocorrectq6: {
botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[6],
  },
],
},
inzerocorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[6],
  },
],
},

//7
['zero'+shuffledNumbersto[6]]: {
botPrompt: 'Which of the following numbers is equal to zero? ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['5+5', '10-10', "3x3","2+4"]),
answers: [
  {
    answer: '5+5',
    nextId: 'inzerocorrectq7',
  },
  {
    answer: '10-10',
    nextId: 'zerocorrectq7',
  },
  {
    answer: "3x3",
    nextId: 'inzerocorrectq7',
  },
  {
    answer: "2+4",
    nextId: 'inzerocorrectq7',
  },
],
},

zerocorrectq7: {
botPrompt: 'Hurray! <strong>10-10</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[7],
  },
],
},
inzerocorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10-10    "</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[7],
  },
],
},


//8
['zero'+shuffledNumbersto[7]]: {
botPrompt: 'If you have zero pencils and someone gives you five pencils how many pencils do you have now?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '5', "0","10"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq8',
  },
  {
    answer: '5',
    nextId: 'zerocorrectq8',
  },
  {
    answer: "0",
    nextId: 'inzerocorrectq8',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq8',
  },
],
},

zerocorrectq8: {
botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[8],
  },
],
},
inzerocorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersto[8],
  },
],
},

//9
['zero'+shuffledNumbersto[8]]: {
botPrompt: 'What is the value of zero plus any number?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['0', '5', "1","any number"]),
answers: [
  {
    answer: '0',
    nextId: 'inzerocorrectq9',
  },
  {
    answer: '5',
    nextId: 'inzerocorrectq9',
  },
  {
    answer: "1",
    nextId: 'inzerocorrectq9',
  },
  {
    answer: "any number",
    nextId: 'zerocorrectq9',
  },
],
},

zerocorrectq9: {
botPrompt: 'Hurray! <strong>any number</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'wishtocontinue20',
  },
],
},
inzerocorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"any number"</strong>',
answers: [
  {
    nextId: 'wishtocontinue20',
  },
],
},



//endzeroletter

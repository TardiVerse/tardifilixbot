day36: {
  botPrompt: '<strong> Day 36 : </strong> Combining words is crucial in kindergarten as it lays the foundation for language development, enabling children to express ideas and interact effectively.',
  answers: [
          { nextId: 'day36link' },
  ],
},
day36link: {

  botPrompt: 'https://youtu.be/Wh5lyHhbZws',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day361comment' },
  ],
},
day361comment: {
  botPrompt: 'TLM Video',
  answers: [
          { nextId: 'day361link' },
  ],
},
day361link: {
  botPrompt: 'https://youtu.be/82rUPIxSVgs',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day362comment' },
  ],
},
day362comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day362link' },
  ],
},
day362link: {
  botPrompt: 'https://drive.google.com/file/d/11N-63h5FAD2gYJwbOdqiEZTZSmqV4iBC/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[0],
    },
  ],
},


//combinedWords


["combinedWords"+shuffledNumbersto[0]]: {
    botPrompt: 'Which picture represents the word "rainbow"?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Blue', 'Red', "Green","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrect',
      },
      {
        answer: 'Red',
        nextId: 'combinedWordscorrect',
      },
      {
        answer: "Green",
        nextId: 'incombinedWordscorrect',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrect',
      },
    ],
  },
  combinedWordscorrect: {
    botPrompt: 'Hurray <strong>Red</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[1],
      },
    ],
  },
  incombinedWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Red"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['combinedWords'+shuffledNumbersto[1]]: {
    botPrompt: 'Which word is a combination of "cup" and "cake"?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['CakeTree', 'Cupcake', "Sunbutter","Honeydog"]),
    answers: [
      {
        answer: 'CakeTree',
        nextId: 'incombinedWordscorrectq2',
      },
      {
        answer: 'Cupcake',
        nextId: 'combinedWordscorrectq2',
      },
      {
        answer: "Sunbutter",
        nextId: 'incombinedWordscorrectq2',
      },
      {
        answer: "Honeydog",
        nextId: 'incombinedWordscorrectq2',
      },
    ],
  },
  
  combinedWordscorrectq2: {
    botPrompt: 'Hurray! <strong>Cupcake</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[2],
      },
    ],
  },
  incombinedWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cupcake"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['combinedWords'+shuffledNumbersto[2]]: {
  botPrompt: 'Which picture represents the word "snowman"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Green', 'Brown', "White","Yellow"]),
    answers: [
      {
        answer: 'Green',
        nextId: 'incombinedWordscorrectq3',
      },
      {
        answer: 'Brown',
        nextId: 'incombinedWordscorrectq3',
      },
      {
        answer: "White",
        nextId: 'incombinedWordscorrectq3',
      },
      {
        answer: "Yellow",
        nextId: 'combinedWordscorrectq3',
      },
    ],
  },
  
  combinedWordscorrectq3: {
  botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[3],
    },
  ],
  },
  incombinedWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['combinedWords'+shuffledNumbersto[3]]: {
  botPrompt: 'Which word is a combination of "honey" and "bee"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Honeybee', 'Dogstar', "Butterdog","Blackcup"]),
    answers: [
      {
        answer: 'Honeybee',
        nextId: 'combinedWordscorrectq4',
      },
      {
        answer: 'Dogstar',
        nextId: 'incombinedWordscorrectq4',
      },
      {
        answer: "Butterdog",
        nextId: 'incombinedWordscorrectq4',
      },
      {
        answer: "Blackcup",
        nextId: 'incombinedWordscorrectq4',
      },
    ],
  },
  
  combinedWordscorrectq4: {
  botPrompt: 'Hurray! <strong>Honeybee</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[4],
    },
  ],
  },
  incombinedWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Honeybee"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['combinedWords'+shuffledNumbersto[4]]: {
  botPrompt: 'Which picture represents a sunflower?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Purple', "Red","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrectq5',
      },
      {
        answer: 'Purple',
        nextId: 'combinedWordscorrectq5',
      },
      {
        answer: "Red",
        nextId: 'incombinedWordscorrectq5',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrectq5',
      },
    ],
  },
  
  combinedWordscorrectq5: {
  botPrompt: 'Hurray! <strong>Purple</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[5],
    },
  ],
  },
  incombinedWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Purple"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['combinedWords'+shuffledNumbersto[5]]: {
  botPrompt: 'Which word is a combination of "tree" and "house"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Treehouse', 'Sunrain', "Butterdog","Blackcup"]),
    answers: [
      {
        answer: 'Treehouse',
        nextId: 'combinedWordscorrectq6',
      },
      {
        answer: 'Sunrain',
        nextId: 'incombinedWordscorrectq6',
      },
      {
        answer: "Butterdog",
        nextId: 'incombinedWordscorrectq6',
      },
      {
        answer: "Blackcup",
        nextId: 'incombinedWordscorrectq6',
      },
    ],
  },
  
  combinedWordscorrectq6: {
  botPrompt: 'Hurray! <strong>Treehouse</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[6],
    },
  ],
  },
  incombinedWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>Right</strong> answer is <strong>"Treehouse"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[6],
    },
  ],
  },

  //7
  ['combinedWords'+shuffledNumbersto[6]]: {
  botPrompt: 'Which picture represents a  butterfly?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Red', "Orange","Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrectq7',
      },
      {
        answer: 'Red',
        nextId: 'combinedWordscorrectq7',
      },
      {
        answer: "Orange",
        nextId: 'combinedWordscorrectq7',
      },
      {
        answer: "Pink",
        nextId: 'combinedWordscorrectq7',
      },
    ],
  },
  
  combinedWordscorrectq7: {
  botPrompt: 'Hurray! <strong>Orange or Red or Pink</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[7],
    },
  ],
  },
  incombinedWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange or Red or Pink"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['combinedWords'+shuffledNumbersto[7]]: {
  botPrompt: 'Which word is a combination of "rain" and "coat"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rainboar', 'Honeydog', "treestar","raincoat"]),
    answers: [
      {
        answer: 'Rainboar',
        nextId: 'incombinedWordscorrectq8',
      },
      {
        answer: 'Honeydog',
        nextId: 'incombinedWordscorrectq8',
      },
      {
        answer: "treestar",
        nextId: 'incombinedWordscorrectq8',
      },
      {
        answer: "raincoat",
        nextId: 'combinedWordscorrectq8',
      },
    ],
  },
  
  combinedWordscorrectq8: {
  botPrompt: 'Hurray! <strong>raincoat</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[8],
    },
  ],
  },
  incombinedWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"raincoat"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['combinedWords'+shuffledNumbersto[8]]: {
  botPrompt: 'Which word is a combination of "black" and "board"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Dogtree', 'Blackboard', "Sunrain","Buttercup"]),
    answers: [
      {
        answer: 'Dogtree',
        nextId: 'incombinedWordscorrectq9',
      },
      {
        answer: 'Blackboard',
        nextId: 'combinedWordscorrectq9',
      },
      {
        answer: "Sunrain",
        nextId: 'incombinedWordscorrectq9',
      },
      {
        answer: "Buttercup",
        nextId: 'incombinedWordscorrectq9',
      },
    ],
  },
  
  combinedWordscorrectq9: {
  botPrompt: 'Hurray! <strong>Blackboard</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[9],
    },
  ],
  },
  incombinedWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Blackboard"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['combinedWords'+shuffledNumbersto[9]]: {
  botPrompt: 'Which picture represents a  sunshine?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Blue', 'Orange', "Green","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'combinedWordscorrectq10',
      },
      {
        answer: 'Orange',
        nextId: 'incombinedWordscorrectq10',
      },
      {
        answer: "Green",
        nextId: 'incombinedWordscorrectq10',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrectq10',
      },
    ],
  
  },
  
  combinedWordscorrectq10: {
  botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[10],
    },
  ],
  },
  incombinedWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['combinedWords'+shuffledNumbersto[10]]: {
  botPrompt: 'Which picture represents a  starfish?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['White', 'Orange', "Purple","Pink"]),
    answers: [
      {
        answer: 'White',
        nextId: 'combinedWordscorrectq11',
      },
      {
        answer: 'Orange',
        nextId: 'incombinedWordscorrectq11',
      },
      {
        answer: "Purple",
        nextId: 'incombinedWordscorrectq11',
      },
      {
        answer: "Pink",
        nextId: 'incombinedWordscorrectq11',
      },
    ],
  },
  
  combinedWordscorrectq11: {
  botPrompt: 'Hurray! <strong>White</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[11],
    },
  ],
  },
  incombinedWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['combinedWords'+shuffledNumbersto[11]]: {
  botPrompt: 'Which word is a combination of "dog" and "house"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Honeyrain', 'Buttercup', "Doghouse","Blackstar"]),
    answers: [
      {
        answer: 'Honeyrain',
        nextId: 'incombinedWordscorrectq12',
      },
      {
        answer: 'Buttercup',
        nextId: 'incombinedWordscorrectq12',
      },
      {
        answer: "Doghouse",
        nextId: 'combinedWordscorrectq12',
      },
      {
        answer: "Blackstar",
        nextId: 'incombinedWordscorrectq12',
      },
    ],
  },
  
  combinedWordscorrectq12: {
  botPrompt: 'Hurray! <strong>Doghouse</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[12],
    },
  ],
  },
  incombinedWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Doghouse"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['combinedWords'+shuffledNumbersto[12]]: {
  botPrompt: 'Which picture represents a  grasshopper?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Red', "Yellow"," Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrectq13',
      },
      {
        answer: 'Red',
        nextId: 'incombinedWordscorrectq13',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrectq13',
      },
      {
        answer: "Pink",
        nextId: 'combinedWordscorrectq13',
      },
    ],
  },
  
  combinedWordscorrectq13: {
  botPrompt: 'Hurray! <strong>Pink</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[13],
    },
  ],
  },
  incombinedWordscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pink"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['combinedWords'+shuffledNumbersto[13]]: {
  botPrompt: 'Moon can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Light', 'Beam', "Tree","Star"]),
    answers: [
      {
        answer: 'Light',
        nextId: 'combinedWordscorrectq14',
      },
      {
        answer: 'Beam',
        nextId: 'incombinedWordscorrectq14',
      },
      {
        answer: "Tree",
        nextId: 'incombinedWordscorrectq14',
      },
      {
        answer: "Star",
        nextId: 'incombinedWordscorrectq14',
      },
    ],
  },
  
  combinedWordscorrectq14: {
  botPrompt: 'Hurray! <strong>Light</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[14],
    },
  ],
  },
  incombinedWordscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Light"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['combinedWords'+shuffledNumbersto[14]]: {
  botPrompt: 'Jelly can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Honey', 'Fish', "Tree","Star"]),
    answers: [
      {
        answer: 'Honey',
        nextId: 'incombinedWordscorrectq15',
      },
      {
        answer: 'Fish',
        nextId: 'combinedWordscorrectq15',
      },
      {
        answer: "Tree",
        nextId: 'incombinedWordscorrectq15',
      },
      {
        answer: "Star",
        nextId: 'incombinedWordscorrectq15',
      },
    ],
  },

  combinedWordscorrectq15: {
  botPrompt: 'Hurray! <strong>Fish</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[15],
    },
  ],
  },
  incombinedWordscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fish"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['combinedWords'+shuffledNumbersto[15]]: {
    botPrompt: 'Apple can be combined with which word to make  new word?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Black', 'Tree', "Rain","Pie"]),
    answers: [
      {
        answer: 'Black',
        nextId: 'incombinedWordscorrectq16',
      },
      {
        answer: 'Tree',
        nextId: 'incombinedWordscorrectq16',
      },
      {
        answer: "Rain",
        nextId: 'incombinedWordscorrectq16',
      },
      {
        answer: "Pie",
        nextId: 'combinedWordscorrectq16',
      },
    ],
  },
  combinedWordscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Pie</strong> 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[16],
      },
    ],
  },
  incombinedWordscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pie"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['combinedWords'+shuffledNumbersto[16]]: {
  botPrompt: 'Dragon can be combined with which word to make  a  new word?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Castle', 'ButterFly', "Fly","Self"]),
    answers: [
      {
        answer: 'Castle',
        nextId: 'incombinedWordscorrectq17',
      },
      {
        answer: 'ButterFly',
        nextId: 'incombinedWordscorrectq17',
      },
      {
        answer: "Fly",
        nextId: 'combinedWordscorrectq17',
      },
      {
        answer: "Self",
        nextId: 'incombinedWordscorrectq17',
      },
    ],
  },
  combinedWordscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Fly</strong> 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[17],
    },
  ],
  },
  incombinedWordscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fly"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['combinedWords'+shuffledNumbersto[17]]: {
  botPrompt: 'Tree can be combined with which word to make a new word? ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['House', 'Tree', "Bug","Ball"]),
  answers: [
    {
      answer: 'House',
      nextId: 'combinedWordscorrectq18',
    },
    {
      answer: 'Tree',
      nextId: 'incombinedWordscorrectq18',
    },
    {
      answer: "Bug",
      nextId: 'incombinedWordscorrectq18',
    },
    {
      answer: "Ball",
      nextId: 'incombinedWordscorrectq18',
    },
  ],
  },
  combinedWordscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>House</strong> 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[18],
    },
  ],
  },
  incombinedWordscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"House"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['combinedWords'+shuffledNumbersto[18]]: {
  botPrompt: 'Water can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Truck', 'JellyFish', "Case","Melon"]),
  answers: [
    {
      answer: 'Truck',
      nextId: 'combinedWordscorrectq19',
    },
    {
      answer: 'JellyFish',
      nextId: 'combinedWordscorrectq19',
    },
    {
      answer: "Case",
      nextId: 'combinedWordscorrectq19',
    },
    {
      answer: "Melon",
      nextId: 'combinedWordscorrectq19',
    },
  ],
  },
  combinedWordscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Melon</strong> Answers! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[19],
    },
  ],
  },
  incombinedWordscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Melon"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['combinedWords'+shuffledNumbersto[19]]: {
  botPrompt: 'Snow can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Truck', 'Man', "Case","Melon"]),
  answers: [
    {
      answer: 'Truck',
      nextId: 'incombinedWordscorrectq20',
    },
    {
      answer: 'Man',
      nextId: 'combinedWordscorrectq20',
    },
    {
      answer: "Case",
      nextId: 'incombinedWordscorrectq20',
    },
    {
      answer: "Melon",
      nextId: 'incombinedWordscorrectq20',
    },
  ],
  },
  combinedWordscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Man</strong> 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[20],
    },
  ],
  },
  incombinedWordscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Man"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["combinedWords"+shuffledNumbersto[20]]: {
    botPrompt: 'Lady can be combined with which word to make a new word?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Bird', 'Rain', "Dog","Bug"]),
  answers: [
    {
      answer: 'Bird',
      nextId: 'incombinedWordscorrectq21',
    },
    {
      answer: 'Rain',
      nextId: 'incombinedWordscorrectq21',
    },
    {
      answer: "Dog",
      nextId: 'incombinedWordscorrectq21',
    },
    {
      answer: "Bug",
      nextId: 'combinedWordscorrectq21',
    },
  ],
  },
  combinedWordscorrectq21: {
    botPrompt: 'Hurray <strong>Bug</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[21],
      },
    ],
  },
  incombinedWordscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bug"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['combinedWords'+shuffledNumbersto[21]]: {
    botPrompt: 'Grass can be combined with which word to make a new word?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Truck', 'Water', "Case","Hopper"]),
  answers: [
    {
      answer: 'Truck',
      nextId: 'incombinedWordscorrectq22',
    },
    {
      answer: 'Water',
      nextId: 'incombinedWordscorrectq22',
    },
    {
      answer: "Case",
      nextId: 'incombinedWordscorrectq22',
    },
    {
      answer: "Hopper",
      nextId: 'combinedWordscorrectq22',
    },
  ],
  },
  
  combinedWordscorrectq22: {
    botPrompt: 'Hurray! <strong>Hopper</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocontinue36',
      },
    ],
  },
  incombinedWordscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hopper"</strong>',
    answers: [
      {
        nextId: 'wishtocontinue36',
      },
    ],
  },
  

  

  //endcombinedWordsletter
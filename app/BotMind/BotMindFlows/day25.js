
day25: {
  botPrompt: '<strong> Day 25 : </strong> Capital letters, full stops, and question marks play a crucial role in kindergarten education by helping young learners understand sentence structure and punctuation rules.',
  answers: [
          { nextId: 'day25link' },
  ],
},

day25link: {
  botPrompt: 'https://youtu.be/WFc5kESr4AI',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day252comment',
    },
  ],
},
day252comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day252link' },
  ],
},
day252link: {
  botPrompt: 'https://drive.google.com/file/d/1vZFs9aRgL-fmnPrG_XfmNk9Z1xUg-Goz/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day253link',
    },
  ],
},
day253link: {
  botPrompt: 'https://drive.google.com/file/d/1iXpfIffsy556QVrDvtDN1Gg8wC3Iy9oX/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[0]  ,
    },
  ],
},


//capitalLetterFullStop
["capitalLetterFullStop"+shuffledNumbers[0]]: {
    botPrompt: 'i have a red bicycle',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['I have a red bicycle.', 'i have a red bicycle', "I Have a red bicycle","i have a red bicycle."]),
    answers: [
      {
        answer: 'I have a red bicycle.',
        nextId: 'capitalLetterFullStopcorrect',
      },
      {
        answer: 'i have a red bicycle',
        nextId: 'incapitalLetterFullStopcorrect',
      },
      {
        answer: "I Have a red bicycle",
        nextId: 'incapitalLetterFullStopcorrect',
      },
      {
        answer: "i have a red bicycle.",
        nextId: 'incapitalLetterFullStopcorrect',
      },
    ],
  },
  capitalLetterFullStopcorrect: {
    botPrompt: 'Hurray <strong>I have a red bicycle.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[1],
      },
    ],
  },
  incapitalLetterFullStopcorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I have a red bicycle."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[1],
      },
    ],
  },
  
  ['capitalLetterFullStop'+shuffledNumbers[1]]: {
    botPrompt: 'they went to the zoo',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['They went to the zoo.', 'They went To the zoo.', "they went to the zoo.","they went to the zoo"]),
    answers: [
      {
        answer: 'They went to the zoo.',
        nextId: 'capitalLetterFullStopcorrectq2',
      },
      {
        answer: 'They went To the zoo.',
        nextId: 'incapitalLetterFullStopcorrectq2',
      },
      {
        answer: "they went to the zoo.",
        nextId: 'incapitalLetterFullStopcorrectq2',
      },
      {
        answer: "they went to the zoo",
        nextId: 'incapitalLetterFullStopcorrectq2',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq2: {
    botPrompt: 'Hurray! <strong>They went to the zoo.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[2],
      },
    ],
  },
  incapitalLetterFullStopcorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They went to the zoo."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[2],
      },
    ],
  },
  
  //3
  ['capitalLetterFullStop'+shuffledNumbers[2]]: {
  botPrompt: "my sister likes to read books",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['My sister likes to read books.?', 'my sister Likes to read books.', "My sister likes to read Books.","my sister likes to read books."]),
    answers: [
      {
        answer: 'My sister likes to read books.?',
        nextId: 'incapitalLetterFullStopcorrectq3',
      },
      {
        answer: 'my sister Likes to read books.',
        nextId: 'incapitalLetterFullStopcorrectq3',
      },
      {
        answer: "My sister likes to read Books.",
        nextId: 'capitalLetterFullStopcorrectq3',
      },
      {
        answer: "my sister likes to read books.",
        nextId: 'incapitalLetterFullStopcorrectq3',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq3: {
  botPrompt: 'Hurray! <strong>My sister likes to read Books.</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[3],
    },
  ],
  },
  incapitalLetterFullStopcorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My sister likes to read Books."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[3],
    },
  ],
  },
  
  //4
  ['capitalLetterFullStop'+shuffledNumbers[3]]: {
  botPrompt: 'we live in a small town',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['We live in a small town...', 'we live in a small town', "We live in a small town.","we live in a small town."]),
    answers: [
      {
        answer: 'We live in a small town...',
        nextId: 'incapitalLetterFullStopcorrectq4',
      },
      {
        answer: 'we live in a small town',
        nextId: 'incapitalLetterFullStopcorrectq4',
      },
      {
        answer: "We live in a small town.",
        nextId: 'capitalLetterFullStopcorrectq4',
      },
      {
        answer: "we live in a small town.",
        nextId: 'incapitalLetterFullStopcorrectq4',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq4: {
  botPrompt: 'Hurray! <strong>We live in a small town.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[4],
    },
  ],
  },
  incapitalLetterFullStopcorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We live in a small town."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[4],
    },
  ],
  },
  
  //5
  ['capitalLetterFullStop'+shuffledNumbers[4]]: {
  botPrompt: 'she has two cats and a dog',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['She has two cats and a Dog.', 'she has two cats and a dog', "She Has two cats and a dog.","She has two cats and a dog."]),
    answers: [
      {
        answer: 'She has two cats and a Dog.',
        nextId: 'incapitalLetterFullStopcorrectq5',
      },
      {
        answer: 'she has two cats and a dog',
        nextId: 'incapitalLetterFullStopcorrectq5',
      },
      {
        answer: "She Has two cats and a dog.",
        nextId: 'incapitalLetterFullStopcorrectq5',
      },
      {
        answer: "She has two cats and a dog.",
        nextId: 'capitalLetterFullStopcorrectq5',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq5: {
  botPrompt: 'Hurray! <strong>She has two cats and a dog.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[5],
    },
  ],
  },
  incapitalLetterFullStopcorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She has two cats and a dog."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[5],
    },
  ],
  },
  
  //6
  ['capitalLetterFullStop'+shuffledNumbers[5]]: {
  botPrompt: 'i want to go to the beach',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I want to go to the beach.', 'i want to go to the beach', "I Want to go to the beach","i want to go to the beach."]),
    answers: [
      {
        answer: 'I want to go to the beach.',
        nextId: 'capitalLetterFullStopcorrectq6',
      },
      {
        answer: 'i want to go to the beach',
        nextId: 'incapitalLetterFullStopcorrectq6',
      },
      {
        answer: "I Want to go to the beach",
        nextId: 'incapitalLetterFullStopcorrectq6',
      },
      {
        answer: "i want to go to the beach.",
        nextId: 'incapitalLetterFullStopcorrectq6',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq6: {
  botPrompt: 'Hurray! <strong>I want to go to the beach.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[6],
    },
  ],
  },
  incapitalLetterFullStopcorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I want to go to the beach."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[6],
    },
  ],
  },
  
  //7
  ['capitalLetterFullStop'+shuffledNumbers[6]]: {
  botPrompt: 'they have a picnic in the park',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['They have a Picnic in the park.', 'They have a picnic in the park.', "they have a picnic in the park","they have a picnic in the park"]),
    answers: [
      {
        answer: 'They have a Picnic in the park.',
        nextId: 'incapitalLetterFullStopcorrectq7',
      },
      {
        answer: 'They have a picnic in the park.',
        nextId: 'capitalLetterFullStopcorrectq7',
      },
      {
        answer: "they have a picnic in the park",
        nextId: 'incapitalLetterFullStopcorrectq7',
      },
      {
        answer: "they have a picnic in the park",
        nextId: 'incapitalLetterFullStopcorrectq7',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq7: {
  botPrompt: 'Hurray! <strong>They have a picnic in the park.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[7],
    },
  ],
  },
  incapitalLetterFullStopcorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They have a picnic in the park."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[7],
    },
  ],
  },
  
  
  //8
  ['capitalLetterFullStop'+shuffledNumbers[7]]: {
  botPrompt: 'i eat an apple every day',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['I eat an apple every day?', 'i eat an apple every day', "I eat an apple every day.","i eat an apple every day."]),
    answers: [
      {
        answer: 'I eat an apple every day?',
        nextId: 'incapitalLetterFullStopcorrectq8',
      },
      {
        answer: 'i eat an apple every day',
        nextId: 'incapitalLetterFullStopcorrectq8',
      },
      {
        answer: "I eat an apple every day.",
        nextId: 'capitalLetterFullStopcorrectq8',
      },
      {
        answer: "i eat an apple every day.",
        nextId: 'incapitalLetterFullStopcorrectq8',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq8: {
  botPrompt: 'Hurray! <strong>I eat an apple every day.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[8],
    },
  ],
  },
  incapitalLetterFullStopcorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I eat an apple every day."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[8],
    },
  ],
  },
  
  //9
  ['capitalLetterFullStop'+shuffledNumbers[8]]: {
  botPrompt: 'we go swimming in the pool',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['We go swimming in the pool...', 'we go swimming in the pool', "We Go swimming in the pool","We go swimming in the pool."]),
    answers: [
      {
        answer: 'We go swimming in the pool...',
        nextId: 'incapitalLetterFullStopcorrectq9',
      },
      {
        answer: 'we go swimming in the pool',
        nextId: 'incapitalLetterFullStopcorrectq9',
      },
      {
        answer: "We Go swimming in the pool",
        nextId: 'incapitalLetterFullStopcorrectq9',
      },
      {
        answer: "We go swimming in the pool.",
        nextId: 'capitalLetterFullStopcorrectq9',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq9: {
  botPrompt: 'Hurray! <strong>We go swimming in the pool.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[9],
    },
  ],
  },
  incapitalLetterFullStopcorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We go swimming in the pool."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[9],
    },
  ],
  },
  
  
  //10
  ['capitalLetterFullStop'+shuffledNumbers[9]]: {
  botPrompt: 'she has a big smile on her face',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['She has a big smile on her face?', 'She has a big smile on her face.', "She Has a big smile on her face","she has a big smile on her face."]),
    answers: [
      {
        answer: 'She has a big smile on her face?',
        nextId: 'incapitalLetterFullStopcorrectq10',
      },
      {
        answer: 'She has a big smile on her face.',
        nextId: 'capitalLetterFullStopcorrectq10',
      },
      {
        answer: "She Has a big smile on her face",
        nextId: 'incapitalLetterFullStopcorrectq10',
      },
      {
        answer: "she has a big smile on her face.",
        nextId: 'incapitalLetterFullStopcorrectq10',
      },
    ],
  
  },
  
  capitalLetterFullStopcorrectq10: {
  botPrompt: 'Hurray! <strong>She has a big smile on her face.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[10],
    },
  ],
  },
  incapitalLetterFullStopcorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She has a big smile on her face."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[10],
    },
  ],
  },
  
  //11
  ['capitalLetterFullStop'+shuffledNumbers[10]]: {
  botPrompt: 'i see a bird in the tree',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['I see a bird in the Tree.', 'i see a bird in the tree', "I See a bird in the tree","I see a bird in the tree."]),
    answers: [
      {
        answer: 'I see a bird in the Tree.',
        nextId: 'incapitalLetterFullStopcorrectq11',
      },
      {
        answer: 'i see a bird in the tree',
        nextId: 'incapitalLetterFullStopcorrectq11',
      },
      {
        answer: "I See a bird in the tree",
        nextId: 'incapitalLetterFullStopcorrectq11',
      },
      {
        answer: "I see a bird in the tree.",
        nextId: 'capitalLetterFullStopcorrectq11',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq11: {
  botPrompt: 'Hurray! <strong>I see a bird in the tree.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[11],
    },
  ],
  },
  incapitalLetterFullStopcorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I see a bird in the tree."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[11],
    },
  ],
  },
  
  //12
  ['capitalLetterFullStop'+shuffledNumbers[11]]: {
  botPrompt: 'they enjoy playing games',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['They enjoy playing games..', 'They enjoy playing games.', "they enjoy playing games","they enjoy playing games?"]),
    answers: [
      {
        answer: 'They enjoy playing games..',
        nextId: 'incapitalLetterFullStopcorrectq12',
      },
      {
        answer: 'They enjoy playing games.',
        nextId: 'capitalLetterFullStopcorrectq12',
      },
      {
        answer: "they enjoy playing games",
        nextId: 'incapitalLetterFullStopcorrectq12',
      },
      {
        answer: "they enjoy playing games?",
        nextId: 'incapitalLetterFullStopcorrectq12',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq12: {
  botPrompt: 'Hurray! <strong>They enjoy playing games.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[12],
    },
  ],
  },
  incapitalLetterFullStopcorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They enjoy playing games."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[12],
    },
  ],
  },
  
  //13
  ['capitalLetterFullStop'+shuffledNumbers[12]]: {
  botPrompt: 'my mom makes tasty food.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['my mom makes tasty food.', 'my mom makes tasty food..', "My mom makes tasty food.","My mom makes tasty Food."]),
    answers: [
      {
        answer: 'my mom makes tasty food.',
        nextId: 'incapitalLetterFullStopcorrectq13',
      },
      {
        answer: 'my mom makes tasty food..',
        nextId: 'incapitalLetterFullStopcorrectq13',
      },
      {
        answer: "My mom makes tasty food.",
        nextId: 'capitalLetterFullStopcorrectq13',
      },
      {
        answer: "My mom makes tasty Food.",
        nextId: 'incapitalLetterFullStopcorrectq13',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq13: {
  botPrompt: 'Hurray! <strong>My mom makes tasty food.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[13],
    },
  ],
  },
  incapitalLetterFullStopcorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My mom makes tasty food."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[13],
    },
  ],
  },
  
  //14
  ['capitalLetterFullStop'+shuffledNumbers[13]]: {
  botPrompt: 'the cat is sleeping on the mat',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['the cat is sleeping on the Mat.', 'The cat is sleeping on the mat', "the cat is sleeping on the mat","The cat is sleeping on the mat."]),
    answers: [
      {
        answer: 'the cat is sleeping on the Mat.',
        nextId: 'incapitalLetterFullStopcorrectq14',
      },
      {
        answer: 'The cat is sleeping on the mat',
        nextId: 'incapitalLetterFullStopcorrectq14',
      },
      {
        answer: "the cat is sleeping on the mat",
        nextId: 'incapitalLetterFullStopcorrectq14',
      },
      {
        answer: "The cat is sleeping on the mat.",
        nextId: 'capitalLetterFullStopcorrectq14',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq14: {
  botPrompt: 'Hurray! <strong>The cat is sleeping on the mat.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[14],
    },
  ],
  },
  incapitalLetterFullStopcorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The cat is sleeping on the mat."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[14],
    },
  ],
  },
  
  
  //15
  ['capitalLetterFullStop'+shuffledNumbers[14]]: {
  botPrompt: 'this is  a bird',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['this is  a bird', 'this is  a bird?', "This is  a bird.","this is  a bird."]),
    answers: [
      {
        answer: 'this is  a bird',
        nextId: 'incapitalLetterFullStopcorrectq15',
      },
      {
        answer: 'this is  a bird?',
        nextId: 'incapitalLetterFullStopcorrectq15',
      },
      {
        answer: "This is a bird.",
        nextId: 'capitalLetterFullStopcorrectq15',
      },
      {
        answer: "this is  a bird.",
        nextId: 'incapitalLetterFullStopcorrectq15',
      },
    ],
  },
  
  capitalLetterFullStopcorrectq15: {
  botPrompt: 'Hurray! <strong>This is a bird.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[15],
    },
  ],
  },
  incapitalLetterFullStopcorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This is a bird."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[15],
    },
  ],
  },
  
  //16
  ['capitalLetterFullStop'+shuffledNumbers[15]]: {
    botPrompt: 'i have a cat',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq16',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq16',
      },

    ],
  },
  capitalLetterFullStopcorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[16],
      },
    ],
  },
  incapitalLetterFullStopcorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[16],
      },
    ],
  },
  
  //17
  ['capitalLetterFullStop'+shuffledNumbers[16]]: {
  botPrompt: 'my favorite color is blue',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Correct', 'inCorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq17',
      },
      {
        answer: 'inCorrect',
        nextId: 'capitalLetterFullStopcorrectq17',
      },

    ],
  },
  capitalLetterFullStopcorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>inCorrect</strong> 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[17],
    },
  ],
  },
  incapitalLetterFullStopcorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"inCorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[17],
    },
  ],
  },
  
  //18
  ['capitalLetterFullStop'+shuffledNumbers[17]]: {
  botPrompt: 'she likes to play soccer in the park   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq18',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq18',
    },

  ],
  },
  capitalLetterFullStopcorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[18],
    },
  ],
  },
  incapitalLetterFullStopcorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[18],
    },
  ],
  },
  
  //19
  ['capitalLetterFullStop'+shuffledNumbers[18]]: {
  botPrompt: 'the dog barks loudly at night',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq19',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq19',
    },

  ],
  },
  capitalLetterFullStopcorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> Answers! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[19],
    },
  ],
  },
  incapitalLetterFullStopcorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[19],
    },
  ],
  },
  
  //20
  ['capitalLetterFullStop'+shuffledNumbers[19]]: {
  botPrompt: 'they go to school every day',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq20',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq20',
    },

  ],
  },
  capitalLetterFullStopcorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[20],
    },
  ],
  },
  incapitalLetterFullStopcorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[20],
    },
  ],
  },
  
  //21
  ["capitalLetterFullStop"+shuffledNumbers[20]]: {
    botPrompt: "my brother's name is Alex",
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq21',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq21',
    },

  ],
  },
  capitalLetterFullStopcorrectq21: {
    botPrompt: 'Hurray <strong>Incorrect</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[21],
      },
    ],
  },
  incapitalLetterFullStopcorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[21],
      },
    ],
  },
  
  //22
  ['capitalLetterFullStop'+shuffledNumbers[21]]: {
    botPrompt: 'we had a picnic at the beach last weekend',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq22',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq22',
    },

  ],
  },
  
  capitalLetterFullStopcorrectq22: {
    botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[22],
      },
    ],
  },
  incapitalLetterFullStopcorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[22],
      },
    ],
  },
  
  //23
  ['capitalLetterFullStop'+shuffledNumbers[22]]: {
  botPrompt: "the sun is shining brightly in the sky",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq23',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq23',
    },

  ],
  },
  
  capitalLetterFullStopcorrectq23: {
  botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[23],
    },
  ],
  },
  incapitalLetterFullStopcorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[23],
    },
  ],
  },
  
  //24
  ['capitalLetterFullStop'+shuffledNumbers[23]]: {
  botPrompt: 'my mom makes delicious pancakes for breakfast',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq24',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq24',
    },

  ],
  },

  capitalLetterFullStopcorrectq24: {
  botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[24],
    },
  ],
  },
  incapitalLetterFullStopcorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[24],
    },
  ],
  },
  
  //25
  ['capitalLetterFullStop'+shuffledNumbers[24]]: {
  botPrompt: 'they are going on a trip to the zoo',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'incapitalLetterFullStopcorrectq25',
    },
    {
      answer: 'Incorrect',
      nextId: 'capitalLetterFullStopcorrectq25',
    },

  ],
  },
  
  capitalLetterFullStopcorrectq25: {
  botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[25],
    },
  ],
  },
  incapitalLetterFullStopcorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[25],
    },
  ],
  },
  
  //26
  ['capitalLetterFullStop'+shuffledNumbers[25]]: {
  botPrompt: 'The sun is shining brightly in the sky.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'capitalLetterFullStopcorrectq26',
    },
    {
      answer: 'Incorrect',
      nextId: 'incapitalLetterFullStopcorrectq26',
    },

  ],
  },
  
  capitalLetterFullStopcorrectq26: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[26],
    },
  ],
  },
  incapitalLetterFullStopcorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[26],
    },
  ],
  },
  
  //27
  ['capitalLetterFullStop'+shuffledNumbers[26]]: {
  botPrompt: 'My favorite color is blue.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq27',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq27',
      },

    ],
  },
  
  capitalLetterFullStopcorrectq27: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[27],
    },
  ],
  },
  incapitalLetterFullStopcorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[27],
    },
  ],
  },
  
  
  //28
  ['capitalLetterFullStop'+shuffledNumbers[27]]: {
  botPrompt: 'She likes to play soccer in the park.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'capitalLetterFullStopcorrectq28',
    },
    {
      answer: 'Incorrect',
      nextId: 'incapitalLetterFullStopcorrectq28',
    },
  +

  ],
  },
  
  capitalLetterFullStopcorrectq28: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[28],
    },
  ],
  },
  incapitalLetterFullStopcorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[28],
    },
  ],
  },
  
  //29
  ['capitalLetterFullStop'+shuffledNumbers[28]]: {
  botPrompt: 'We had a picnic at the beach last weekend.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq29',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq29',
      },

    ],
  },
  
  capitalLetterFullStopcorrectq29: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[29],
    },
  ],
  },
  incapitalLetterFullStopcorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[29],
    },
  ],
  },
  

  //30
  ['capitalLetterFullStop'+shuffledNumbers[29]]: {
  botPrompt: "My brother's name is Alex.",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'capitalLetterFullStopcorrectq30',
    },
    {
      answer: 'Incorrect',
      nextId: 'incapitalLetterFullStopcorrectq30',
    },

  ],
  },
  
  capitalLetterFullStopcorrectq30: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[30],
    },
  ],
  },
  incapitalLetterFullStopcorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[30],
    },
  ],
  },
  
  //31
  ['capitalLetterFullStop'+shuffledNumbers[30]]: {
  botPrompt: 'They go to school every day.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq31',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq31',
      },

    ],
  },
  
  capitalLetterFullStopcorrectq31: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[31],
    },
  ],
  },
  incapitalLetterFullStopcorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[31],
    },
  ],
  },
  
  //32
  ['capitalLetterFullStop'+shuffledNumbers[31]]: {
  botPrompt: 'I have a pet dog named Max.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'capitalLetterFullStopcorrectq32',
    },
    {
      answer: 'Incorrect',
      nextId: 'incapitalLetterFullStopcorrectq32',
    },

  ],
  },
  
  capitalLetterFullStopcorrectq32: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[32],
    },
  ],
  },
  incapitalLetterFullStopcorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[32],
    },
  ],
  },
  
  //33
  ['capitalLetterFullStop'+shuffledNumbers[32]]: {
  botPrompt: 'The cat is sleeping on the couch.',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'capitalLetterFullStopcorrectq33',
    },
    {
      answer: 'Incorrect',
      nextId: 'incapitalLetterFullStopcorrectq33',
    },

  ],
  },
  
  capitalLetterFullStopcorrectq33: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[33],
    },
  ],
  },
  incapitalLetterFullStopcorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[33],
    },
  ],
  },
  
  //34
  ['capitalLetterFullStop'+shuffledNumbers[33]]: {
  botPrompt: 'We are going on a trip to the zoo.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq34',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq34',
      },

    ],
  },
  
  capitalLetterFullStopcorrectq34: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[34],
    },
  ],
  },
  incapitalLetterFullStopcorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbers[34],
    },
  ],
  },
  
  
  //35
  ['capitalLetterFullStop'+shuffledNumbers[34]]: {
  botPrompt: 'The book on the shelf is very interesting.',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Correct', 'Incorrect']),
  answers: [
    {
      answer: 'Correct',
      nextId: 'capitalLetterFullStopcorrectq35',
    },
    {
      answer: 'Incorrect',
      nextId: 'incapitalLetterFullStopcorrectq35',
    },
  ],
  },
  
  capitalLetterFullStopcorrectq35: {
  botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontinue25',
    },
  ],
  },
  incapitalLetterFullStopcorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue25',
    },
  ],
  },
  

  



  //endcapitalLetterFullStopletter
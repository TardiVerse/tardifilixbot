//capitalLetterFullStop


["capitalLetterFullStop"+shuffledNumbersto[0]]: {
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
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[1],
      },
    ],
  },
  incapitalLetterFullStopcorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I have a red bicycle."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['capitalLetterFullStop'+shuffledNumbersto[1]]: {
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
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[2],
      },
    ],
  },
  incapitalLetterFullStopcorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They went to the zoo."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['capitalLetterFullStop'+shuffledNumbersto[2]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[3],
    },
  ],
  },
  incapitalLetterFullStopcorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My sister likes to read Books."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['capitalLetterFullStop'+shuffledNumbersto[3]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[4],
    },
  ],
  },
  incapitalLetterFullStopcorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We live in a small town."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['capitalLetterFullStop'+shuffledNumbersto[4]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[5],
    },
  ],
  },
  incapitalLetterFullStopcorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She has two cats and a dog."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['capitalLetterFullStop'+shuffledNumbersto[5]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[6],
    },
  ],
  },
  incapitalLetterFullStopcorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I want to go to the beach."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['capitalLetterFullStop'+shuffledNumbersto[6]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[7],
    },
  ],
  },
  incapitalLetterFullStopcorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They have a picnic in the park."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['capitalLetterFullStop'+shuffledNumbersto[7]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[8],
    },
  ],
  },
  incapitalLetterFullStopcorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I eat an apple every day."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['capitalLetterFullStop'+shuffledNumbersto[8]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[9],
    },
  ],
  },
  incapitalLetterFullStopcorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We go swimming in the pool."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['capitalLetterFullStop'+shuffledNumbersto[9]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[10],
    },
  ],
  },
  incapitalLetterFullStopcorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She has a big smile on her face."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['capitalLetterFullStop'+shuffledNumbersto[10]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[11],
    },
  ],
  },
  incapitalLetterFullStopcorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I see a bird in the tree."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['capitalLetterFullStop'+shuffledNumbersto[11]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[12],
    },
  ],
  },
  incapitalLetterFullStopcorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They enjoy playing games."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['capitalLetterFullStop'+shuffledNumbersto[12]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[13],
    },
  ],
  },
  incapitalLetterFullStopcorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My mom makes tasty food."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['capitalLetterFullStop'+shuffledNumbersto[13]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[14],
    },
  ],
  },
  incapitalLetterFullStopcorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The cat is sleeping on the mat."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['capitalLetterFullStop'+shuffledNumbersto[14]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[15],
    },
  ],
  },
  incapitalLetterFullStopcorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This is a bird."</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['capitalLetterFullStop'+shuffledNumbersto[15]]: {
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
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[16],
      },
    ],
  },
  incapitalLetterFullStopcorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['capitalLetterFullStop'+shuffledNumbersto[16]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[17],
    },
  ],
  },
  incapitalLetterFullStopcorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"inCorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['capitalLetterFullStop'+shuffledNumbersto[17]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[18],
    },
  ],
  },
  incapitalLetterFullStopcorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['capitalLetterFullStop'+shuffledNumbersto[18]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[19],
    },
  ],
  },
  incapitalLetterFullStopcorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['capitalLetterFullStop'+shuffledNumbersto[19]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[20],
    },
  ],
  },
  incapitalLetterFullStopcorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["capitalLetterFullStop"+shuffledNumbersto[20]]: {
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
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[21],
      },
    ],
  },
  incapitalLetterFullStopcorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['capitalLetterFullStop'+shuffledNumbersto[21]]: {
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
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[22],
      },
    ],
  },
  incapitalLetterFullStopcorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['capitalLetterFullStop'+shuffledNumbersto[22]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[23],
    },
  ],
  },
  incapitalLetterFullStopcorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['capitalLetterFullStop'+shuffledNumbersto[23]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[24],
    },
  ],
  },
  incapitalLetterFullStopcorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['capitalLetterFullStop'+shuffledNumbersto[24]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[25],
    },
  ],
  },
  incapitalLetterFullStopcorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['capitalLetterFullStop'+shuffledNumbersto[25]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[26],
    },
  ],
  },
  incapitalLetterFullStopcorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['capitalLetterFullStop'+shuffledNumbersto[26]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[27],
    },
  ],
  },
  incapitalLetterFullStopcorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[27],
    },
  ],
  },
  
  
  //28
  ['capitalLetterFullStop'+shuffledNumbersto[27]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[28],
    },
  ],
  },
  incapitalLetterFullStopcorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['capitalLetterFullStop'+shuffledNumbersto[28]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[29],
    },
  ],
  },
  incapitalLetterFullStopcorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[29],
    },
  ],
  },
  

  //30
  ['capitalLetterFullStop'+shuffledNumbersto[29]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[30],
    },
  ],
  },
  incapitalLetterFullStopcorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[30],
    },
  ],
  },
  
  //31
  ['capitalLetterFullStop'+shuffledNumbersto[30]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[31],
    },
  ],
  },
  incapitalLetterFullStopcorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[31],
    },
  ],
  },
  
  //32
  ['capitalLetterFullStop'+shuffledNumbersto[31]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[32],
    },
  ],
  },
  incapitalLetterFullStopcorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[32],
    },
  ],
  },
  
  //33
  ['capitalLetterFullStop'+shuffledNumbersto[32]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[33],
    },
  ],
  },
  incapitalLetterFullStopcorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[33],
    },
  ],
  },
  
  //34
  ['capitalLetterFullStop'+shuffledNumbersto[33]]: {
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
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[34],
    },
  ],
  },
  incapitalLetterFullStopcorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'capitalLetterFullStop'+shuffledNumbersto[34],
    },
  ],
  },
  
  
  //35
  ['capitalLetterFullStop'+shuffledNumbersto[34]]: {
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
      nextId: 'wishtocontinue26',
    },
  ],
  },
  incapitalLetterFullStopcorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue26',
    },
  ],
  },
  

  



  //endcapitalLetterFullStopletter
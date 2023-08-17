//whWords


["whWords"+shuffledNumbersto[0]]: {
    botPrompt: '___ is used to ask questions about people?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Who', 'Where', "What","When"]),
    answers: [
      {
        answer: 'Who',
        nextId: 'whWordscorrect',
      },
      {
        answer: 'Where',
        nextId: 'inwhWordscorrect',
      },
      {
        answer: "What",
        nextId: 'inwhWordscorrect',
      },
      {
        answer: "When",
        nextId: 'inwhWordscorrect',
      },
    ],
  },
  whWordscorrect: {
    botPrompt: 'Hurray <strong>Who</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[1],
      },
    ],
  },
  inwhWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['whWords'+shuffledNumbersto[1]]: {
    botPrompt: '____ is used to ask questions about things?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['Who', 'What', "Where","When"]),
    answers: [
      {
        answer: 'Who',
        nextId: 'inwhWordscorrectq2',
      },
      {
        answer: 'What',
        nextId: 'whWordscorrectq2',
      },
      {
        answer: "Where",
        nextId: 'inwhWordscorrectq2',
      },
      {
        answer: "When",
        nextId: 'inwhWordscorrectq2',
      },
    ],
  },

  whWordscorrectq2: {
    botPrompt: 'Hurray! <strong>What</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[2],
      },
    ],
  },
  inwhWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['whWords'+shuffledNumbersto[2]]: {
  botPrompt: '_____is used to ask questions about locations?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Who', 'What', "Where","When"]),
  answers: [
    {
      answer: 'Who',
      nextId: 'inwhWordscorrectq2',
    },
    {
      answer: 'What',
      nextId: 'inwhWordscorrectq2',
    },
    {
      answer: "Where",
      nextId: 'whWordscorrectq2',
    },
    {
      answer: "When",
      nextId: 'inwhWordscorrectq2',
    },
  ],
  },
  
  whWordscorrectq3: {
  botPrompt: 'Hurray! <strong>"Where"</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[3],
    },
  ],
  },
  inwhWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[3],
    },
  ],
  },

  //4
  ['whWords'+shuffledNumbersto[3]]: {
  botPrompt: '____ is used to ask questions about time?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Who', 'What', "Where","When"]),
  answers: [
    {
      answer: 'Who',
      nextId: 'inwhWordscorrectq2',
    },
    {
      answer: 'What',
      nextId: 'inwhWordscorrectq2',
    },
    {
      answer: "Where",
      nextId: 'inwhWordscorrectq2',
    },
    {
      answer: "When",
      nextId: 'whWordscorrectq2',
    },
  ],
  },
  
  whWordscorrectq4: {
  botPrompt: 'Hurray! <strong>When</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[4],
    },
  ],
  },
  inwhWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"When"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['whWords'+shuffledNumbersto[4]]: {
  botPrompt: '______ is used to ask questions about reasons?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Their', 'There', "They're","When"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inwhWordscorrectq5',
    },
    {
      answer: 'There',
      nextId: 'inwhWordscorrectq5',
    },
    {
      answer: "They're",
      nextId: 'inwhWordscorrectq5',
    },
    {
      answer: "When",
      nextId: 'whWordscorrectq5',
    },
  ],
  },
  
  whWordscorrectq5: {
  botPrompt: 'Hurray! <strong>When</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[5],
    },
  ],
  },
  inwhWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"When"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['whWords'+shuffledNumbersto[5]]: {
  botPrompt: 'The cat is sleeping.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Who is sleeping?', 'What is sleeping?', "Where is the cat?","How is the cat?"]),
  answers: [
    {
      answer: 'Who is sleeping?',
      nextId: 'whWordscorrectq6',
    },
    {
      answer: 'What is sleeping?',
      nextId: 'inwhWordscorrectq6',
    },
    {
      answer: "Where is the cat?",
      nextId: 'inwhWordscorrectq6',
    },
    {
      answer: "How is the cat?",
      nextId: 'inwhWordscorrectq6',
    },
  ],
  },
  
  whWordscorrectq6: {
  botPrompt: 'Hurray! <strong>Who is sleeping?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[6],
    },
  ],
  },
  inwhWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who is sleeping?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['whWords'+shuffledNumbersto[6]]: {
  botPrompt: 'I ate an apple.',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Who ate an apple?', 'What did I eat?', "Where is the apple?","When did I eat?"]),
  answers: [
    {
      answer: 'Who ate an apple?',
      nextId: 'whWordscorrectq7',
    },
    {
      answer: 'What did I eat?',
      nextId: 'inwhWordscorrectq7',
    },
    {
      answer: "Where is the apple?",
      nextId: 'inwhWordscorrectq7',
    },
    {
      answer: "When did I eat?",
      nextId: 'inwhWordscorrectq7',
    },
  ],
  },
  
  whWordscorrectq7: {
  botPrompt: 'Hurray! <strong>Who ate an apple?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[7],
    },
  ],
  },
  inwhWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who ate an apple?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['whWords'+shuffledNumbersto[7]]: {
  botPrompt: 'The book is on the table.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['What is the book?', 'Where is the book?', "Who placed the book?","Why is the book there?"]),
  answers: [
    {
      answer: 'What is the book?',
      nextId: 'inwhWordscorrectq8',
    },
    {
      answer: 'Where is the book?',
      nextId: 'whWordscorrectq8',
    },
    {
      answer: "They're",
      nextId: 'inwhWordscorrectq8',
    },
    {
      answer: "Why is the book there?",
      nextId: 'inwhWordscorrectq8',
    },
  ],
  },
  
  whWordscorrectq8: {
  botPrompt: 'Hurray! <strong>Where is the book?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[8],
    },
  ],
  },
  inwhWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where is the book?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['whWords'+shuffledNumbersto[8]]: {
  botPrompt: 'We went to the park.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['When did we go?', 'Where did we go?', "What did we do at the park?","Why did we go?"]),
  answers: [
    {
      answer: 'When did we go?',
      nextId: 'inwhWordscorrectq9',
    },
    {
      answer: 'Where did we go?',
      nextId: 'whWordscorrectq9',
    },
    {
      answer: "What did we do at the park?",
      nextId: 'inwhWordscorrectq9',
    },
    {
      answer: "Why did we go?",
      nextId: 'inwhWordscorrectq9',
    },
  ],
  },
  
  whWordscorrectq9: {
  botPrompt: 'Hurray! <strong>Where did we go?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[9],
    },
  ],
  },
  inwhWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where did we go?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['whWords'+shuffledNumbersto[9]]: {
  botPrompt: 'It is raining outside.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['What is happening?', 'When is raining?', "Where is it raining?","Who is raining?"]),
  answers: [
    {
      answer: 'What is happening?',
      nextId: 'inwhWordscorrectq10',
    },
    {
      answer: 'When is raining?',
      nextId: 'inwhWordscorrectq10',
    },
    {
      answer: "Where is it raining?",
      nextId: 'whWordscorrectq10',
    },
    {
      answer: "Who is raining?",
      nextId: 'inwhWordscorrectq10',
    },
  ],
  
  },
  
  whWordscorrectq10: {
  botPrompt: 'Hurray! <strong>Where is it raining?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[10],
    },
  ],
  },
  inwhWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where is it raining?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['whWords'+shuffledNumbersto[10]]: {
  botPrompt: 'The dog is barking.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Who is barking?', 'What is barking?', "Where is the dog?","How is the dog?"]),
  answers: [
    {
      answer: 'Who is barking?',
      nextId: 'whWordscorrectq11',
    },
    {
      answer: 'What is barking?',
      nextId: 'inwhWordscorrectq11',
    },
    {
      answer: "Where is the dog?",
      nextId: 'inwhWordscorrectq11',
    },
    {
      answer: "How is the dog?",
      nextId: 'inwhWordscorrectq11',
    },
  ],
  },
  
  whWordscorrectq11: {
  botPrompt: 'Hurray! <strong>Who is barking?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[11],
    },
  ],
  },
  inwhWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who is barking?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['whWords'+shuffledNumbersto[11]]: {
  botPrompt: 'She is playing with a ball.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Who is playing?', 'What is she playing with?', "Where is the ball?","When did she start playing?"]),
  answers: [
    {
      answer: 'Who is playing?',
      nextId: 'inwhWordscorrectq12',
    },
    {
      answer: 'What is she playing with?',
      nextId: 'whWordscorrectq12',
    },
    {
      answer: "Where is the ball?",
      nextId: 'inwhWordscorrectq12',
    },
    {
      answer: "When did she start playing?",
      nextId: 'inwhWordscorrectq12',
    },
  ],
  },
  
  whWordscorrectq12: {
  botPrompt: 'Hurray! <strong>What is she playing with?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[12],
    },
  ],
  },
  inwhWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is she playing with?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['whWords'+shuffledNumbersto[12]]: {
  botPrompt: 'The car is red in color.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['What color is the car?', 'Why is the car red?', "Where is the car?","Who painted the car?"]),
  answers: [
    {
      answer: 'What color is the car?',
      nextId: 'whWordscorrectq13',
    },
    {
      answer: 'Why is the car red?',
      nextId: 'inwhWordscorrectq13',
    },
    {
      answer: "Where is the car?",
      nextId: 'inwhWordscorrectq13',
    },
    {
      answer: "Who painted the car?",
      nextId: 'inwhWordscorrectq13',
    },
  ],
  },
  
  whWordscorrectq13: {
  botPrompt: 'Hurray! <strong>What color is the car?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[13],
    },
  ],
  },
  inwhWordscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What color is the car?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['whWords'+shuffledNumbersto[13]]: {
  botPrompt: 'We are singing a song.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Who is singing?', 'What are we doing?', "Where are we singing?","When did we start singing?"]),
  answers: [
    {
      answer: 'Who is singing?',
      nextId: 'inwhWordscorrectq14',
    },
    {
      answer: 'What are we doing?',
      nextId: 'whWordscorrectq14',
    },
    {
      answer: "Where are we singing?",
      nextId: 'inwhWordscorrectq14',
    },
    {
      answer: "When did we start singing?",
      nextId: 'inwhWordscorrectq14',
    },
  ],
  },
  
  whWordscorrectq14: {
  botPrompt: 'Hurray! <strong>What are we doing?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[14],
    },
  ],
  },
  inwhWordscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What are we doing?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['whWords'+shuffledNumbersto[14]]: {
  botPrompt: 'The sun is shining brightly.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['What is shining?', 'Why is the sun shining?', "Where is the sun?","Where is the sun?"]),
  answers: [
    {
      answer: 'What is shining?',
      nextId: 'whWordscorrectq15',
    },
    {
      answer: 'Why is the sun shining?',
      nextId: 'inwhWordscorrectq15',
    },
    {
      answer: "Where is the sun?",
      nextId: 'inwhWordscorrectq15',
    },
    {
      answer: "Where is the sun?",
      nextId: 'inwhWordscorrectq15',
    },
  ],
  },

  whWordscorrectq15: {
  botPrompt: 'Hurray! <strong>What is shining?</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[15],
    },
  ],
  },
  inwhWordscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is shining?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['whWords'+shuffledNumbersto[15]]: {
    botPrompt: 'They are taking lunch.',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['Who is taking?', 'What are they taking?', "Where are they taking?","When did they start taking?"]),
    answers: [
      {
        answer: 'Who is taking?',
        nextId: 'inwhWordscorrectq16',
      },
      {
        answer: 'What are they taking?',
        nextId: 'whWordscorrectq16',
      },
      {
        answer: "Where are they taking?",
        nextId: 'inwhWordscorrectq16',
      },
      {
        answer: "When did they start taking?",
        nextId: 'inwhWordscorrectq16',
      },
    ],
  },
  whWordscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What are they taking?</strong> 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[16],
      },
    ],
  },
  inwhWordscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What are they taking?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['whWords'+shuffledNumbersto[16]]: {
  botPrompt: 'The bird is flying in the sky.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Who is flying?', 'What is flying?', "Where is the bird?","How is the bird flying?"]),
  answers: [
    {
      answer: 'Who is flying?',
      nextId: 'inwhWordscorrectq17',
    },
    {
      answer: 'What is flying?',
      nextId: 'whWordscorrectq17',
    },
    {
      answer: "Where is the bird?",
      nextId: 'inwhWordscorrectq17',
    },
    {
      answer: "How is the bird flying?",
      nextId: 'inwhWordscorrectq17',
    },
  ],
  },
  whWordscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What is flying?</strong> 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[17],
    },
  ],
  },
  inwhWordscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is flying?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['whWords'+shuffledNumbersto[17]]: {
  botPrompt: 'I saw a butterfly in the garden. ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Where I saw a butterfly?', 'What did I see in the garden?', "Where did I see the butterfly?","When did I see the butterfly?"]),
  answers: [
    {
      answer: 'Where I saw a butterfly?',
      nextId: 'inwhWordscorrectq18',
    },
    {
      answer: 'What did I see in the garden?',
      nextId: 'whWordscorrectq18',
    },
    {
      answer: "Where did I see the butterfly?",
      nextId: 'inwhWordscorrectq18',
    },
    {
      answer: "When did I see the butterfly?",
      nextId: 'inwhWordscorrectq18',
    },
  ],
  },
  whWordscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What did I see in the garden?</strong> 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[18],
    },
  ],
  },
  inwhWordscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What did I see in the garden?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['whWords'+shuffledNumbersto[18]]: {
  botPrompt: 'The train is moving on the tracks.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['How is the train?', 'Why is the train moving?', "Where is the train moving?","Who is moving the train?"]),
  answers: [
    {
      answer: 'How is the train?',
      nextId: 'inwhWordscorrectq19',
    },
    {
      answer: 'Why is the train moving?',
      nextId: 'inwhWordscorrectq19',
    },
    {
      answer: "Where is the train moving?",
      nextId: 'whWordscorrectq19',
    },
    {
      answer: "Who is moving the train?",
      nextId: 'inwhWordscorrectq19',
    },
  ],
  },
  whWordscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Where is the train moving?</strong> Answers! 😎',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[19],
    },
  ],
  },
  inwhWordscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where is the train moving?"</strong>',
  answers: [
    {
      nextId: 'whWords'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['whWords'+shuffledNumbersto[19]]: {
  botPrompt: 'She is wearing a blue dress.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Who is the dress?', 'What is she wearing?', "Where is the dress?","When did she wear the dress?"]),
  answers: [
    {
      answer: 'Who is the dress?',
      nextId: 'inwhWordscorrectq20',
    },
    {
      answer: 'What is she wearing?',
      nextId: 'whWordscorrectq20',
    },
    {
      answer: "Where is the dress?",
      nextId: 'inwhWordscorrectq20',
    },
    {
      answer: "When did she wear the dress?",
      nextId: 'inwhWordscorrectq20',
    },
  ],
  },
  whWordscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What is she wearing?</strong> 😎',
  answers: [
    {
      nextId: 'wishToContinue49'
    },
  ],
  },
  inwhWordscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is she wearing?"</strong>',
  answers: [
    {
      nextId: 'wishToContinue49'
    },
  ],
  },
  
 
  //endwhWordsletter
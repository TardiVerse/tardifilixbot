
day26: {
  botPrompt: '<strong> Day 26 : </strong> Learning opposites help in adding to a childs vocabulary and understanding how the world around functions.',
  answers: [
          { nextId: 'day26link' },
  ],
},

day26link: {
  botPrompt: 'https://www.youtube.com/watch?v=wpSUK7FnSVA&list=PLhVY3NLECmvXWnTL_xjBImY2ZbKD2XOyp&index=6&pp=iAQB',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day262comment',
    },
  ],
},
day262comment: {
  botPrompt: 'Opposite Song',
  answers: [
          { nextId: 'day262link' },
  ],
},
day262link: {
  botPrompt: 'https://youtube.com/shorts/ywooSL_Kr1Q',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day263link',
    },
  ],
},
day263link: {
  botPrompt: 'https://youtu.be/cwRddLXUnr8',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day263comment',
    },
  ],
},
day263comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day263link' },
  ],
},
day263link: {
  botPrompt: 'https://drive.google.com/file/d/1MdSOrmqghLRHbhcES9M1liAEfaPC2Yqz/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[0] ,
    },
  ],
},

//opposites


["opposites"+shuffleArraytwofive[0]]: {
    botPrompt: 'Opposite of "big"',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Small', 'Tall', "Fat","Thin"]),
    answers: [
      {
        answer: 'Small',
        nextId: 'oppositescorrect',
      },
      {
        answer: 'Tall',
        nextId: 'inoppositescorrect',
      },
      {
        answer: "Fat",
        nextId: 'inoppositescorrect',
      },
      {
        answer: "Thin",
        nextId: 'inoppositescorrect',
      },
    ],
  },
  oppositescorrect: {
    botPrompt: 'Hurray <strong>Small</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[1],
      },
    ],
  },
  inoppositescorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Small"</strong>',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[1],
      },
    ],
  },
  
  ['opposites'+shuffleArraytwofive[1]]: {
    botPrompt: 'Opposite of "happy"',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['brave', 'Funny', "sad","Angry"]),
    answers: [
      {
        answer: 'brave',
        nextId: 'inoppositescorrectq2',
      },
      {
        answer: 'Funny',
        nextId: 'inoppositescorrectq2',
      },
      {
        answer: "sad",
        nextId: 'oppositescorrectq2',
      },
      {
        answer: "Angry",
        nextId: 'inoppositescorrectq2',
      },
    ],
  },
  
  oppositescorrectq2: {
    botPrompt: 'Hurray! <strong>sad</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[2],
      },
    ],
  },
  inoppositescorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sad"</strong>',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[2],
      },
    ],
  },
  
  //3
  ['opposites'+shuffleArraytwofive[2]]: {
  botPrompt: 'Opposite of "hot"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Fast', 'cold', "Loud","Bright"]),
    answers: [
      {
        answer: 'Fast',
        nextId: 'inoppositescorrectq3',
      },
      {
        answer: 'cold',
        nextId: 'oppositescorrectq3',
      },
      {
        answer: "Loud",
        nextId: 'inoppositescorrectq3',
      },
      {
        answer: "Bright",
        nextId: 'inoppositescorrectq3',
      },
    ],
  },
  
  oppositescorrectq3: {
  botPrompt: 'Hurray! <strong>cold</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[3],
    },
  ],
  },
  inoppositescorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"cold"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[3],
    },
  ],
  },
  
  //4
  ['opposites'+shuffleArraytwofive[3]]: {
  botPrompt: 'Opposite of "up"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Down', 'Left', "Right","Front"]),
    answers: [
      {
        answer: 'Down',
        nextId: 'oppositescorrectq4',
      },
      {
        answer: 'Left',
        nextId: 'inoppositescorrectq4',
      },
      {
        answer: "Right",
        nextId: 'inoppositescorrectq4',
      },
      {
        answer: "Front",
        nextId: 'inoppositescorrectq4',
      },
    ],
  },
  
  oppositescorrectq4: {
  botPrompt: 'Hurray! <strong>Down</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[4],
    },
  ],
  },
  inoppositescorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Down"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[4],
    },
  ],
  },
  
  //5
  ['opposites'+shuffleArraytwofive[4]]: {
  botPrompt: 'Opposite of "day"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Night', 'Sun', "Moon","Star"]),
    answers: [
      {
        answer: 'Night',
        nextId: 'oppositescorrectq5',
      },
      {
        answer: 'Sun',
        nextId: 'inoppositescorrectq5',
      },
      {
        answer: "Moon",
        nextId: 'inoppositescorrectq5',
      },
      {
        answer: "Star",
        nextId: 'inoppositescorrectq5',
      },
    ],
  },
  
  oppositescorrectq5: {
  botPrompt: 'Hurray! <strong>Night</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[5],
    },
  ],
  },
  inoppositescorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Night"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[5],
    },
  ],
  },
  
  //6
  ['opposites'+shuffleArraytwofive[5]]: {
  botPrompt: 'Opposite of "slow"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Deep', 'High', "fast","Wide"]),
    answers: [
      {
        answer: 'Deep',
        nextId: 'inoppositescorrectqfast',
      },
      {
        answer: 'High',
        nextId: 'inoppositescorrectq6',
      },
      {
        answer: "fast",
        nextId: 'oppositescorrectq6',
      },
      {
        answer: "Wide",
        nextId: 'inoppositescorrectq6',
      },
    ],
  },
  
  oppositescorrectq6: {
  botPrompt: 'Hurray! <strong>fast</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[6],
    },
  ],
  },
  inoppositescorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"fast"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[6],
    },
  ],
  },
  
  //7
  ['opposites'+shuffleArraytwofive[6]]: {
  botPrompt: 'Opposite of "near"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['big', 'far', "Loud","Soft"]),
    answers: [
      {
        answer: 'big',
        nextId: 'inoppositescorrectq7',
      },
      {
        answer: 'far',
        nextId: 'oppositescorrectq7',
      },
      {
        answer: "Loud",
        nextId: 'inoppositescorrectq7',
      },
      {
        answer: "Soft",
        nextId: 'inoppositescorrectq7',
      },
    ],
  },
  
  oppositescorrectq7: {
  botPrompt: 'Hurray! <strong>far</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[7],
    },
  ],
  },
  inoppositescorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"far"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[7],
    },
  ],
  },
  
  
  //8
  ['opposites'+shuffleArraytwofive[7]]: {
  botPrompt: 'Opposite of "close"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Open', 'Close', "Clear","Full"]),
    answers: [
      {
        answer: 'Open',
        nextId: 'oppositescorrectq8',
      },
      {
        answer: 'Close',
        nextId: 'inoppositescorrectq8',
      },
      {
        answer: "Clear",
        nextId: 'inoppositescorrectq8',
      },
      {
        answer: "Full",
        nextId: 'inoppositescorrectq8',
      },
    ],
  },
  
  oppositescorrectq8: {
  botPrompt: 'Hurray! <strong>Open</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[8],
    },
  ],
  },
  inoppositescorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Open"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[8],
    },
  ],
  },
  
  //9
  ['opposites'+shuffleArraytwofive[8]]: {
  botPrompt: 'Opposite of "empty"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Sad', 'Warm', "Full","Dry"]),
    answers: [
      {
        answer: 'Sad',
        nextId: 'inoppositescorrectq9',
      },
      {
        answer: 'Warm',
        nextId: 'inoppositescorrectq9',
      },
      {
        answer: "Full",
        nextId: 'oppositescorrectq9',
      },
      {
        answer: "Dry",
        nextId: 'inoppositescorrectq9',
      },
    ],
  },
  
  oppositescorrectq9: {
  botPrompt: 'Hurray! <strong>Full</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[9],
    },
  ],
  },
  inoppositescorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Full"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[9],
    },
  ],
  },
  
  
  //10
  ['opposites'+shuffleArraytwofive[9]]: {
  botPrompt: 'Opposite of "clean"',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Dirty', 'Funny', "Brave","Angry"]),
    answers: [
      {
        answer: 'Dirty',
        nextId: 'oppositescorrectqAngry',
      },
      {
        answer: 'Funny',
        nextId: 'inoppositescorrectq10',
      },
      {
        answer: "Brave",
        nextId: 'inoppositescorrectq10',
      },
      {
        answer: "10",
        nextId: 'inoppositescorrectq10',
      },
    ],
  
  },
  
  oppositescorrectq10: {
  botPrompt: 'Hurray! <strong>Dirty</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[10],
    },
  ],
  },
  inoppositescorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dirty"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[10],
    },
  ],
  },
  
  //11
  ['opposites'+shuffleArraytwofive[10]]: {
  botPrompt: 'Opposite of "cold"',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Hot', 'Slow', "Quiet","Dark"]),
    answers: [
      {
        answer: 'Hot',
        nextId: 'inoppositescorrectq11',
      },
      {
        answer: 'Slow',
        nextId: 'inoppositescorrectq11',
      },
      {
        answer: "Quiet",
        nextId: 'oppositescorrectq11',
      },
      {
        answer: "Dark",
        nextId: 'inoppositescorrectq11',
      },
    ],
  },
  
  oppositescorrectq11: {
  botPrompt: 'Hurray! <strong>Quiet</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[11],
    },
  ],
  },
  inoppositescorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Quiet"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[11],
    },
  ],
  },
  
  //12
  ['opposites'+shuffleArraytwofive[11]]: {
  botPrompt: 'Opposite of "wet"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Soft', 'Small', "Loud","Dry"]),
    answers: [
      {
        answer: 'Soft',
        nextId: 'inoppositescorrectq12',
      },
      {
        answer: 'Small',
        nextId: 'inoppositescorrectq12',
      },
      {
        answer: "Loud",
        nextId: 'inoppositescorrectq12',
      },
      {
        answer: "Dry",
        nextId: 'oppositescorrectq12',
      },
    ],
  },
  
  oppositescorrectq12: {
  botPrompt: 'Hurray! <strong>Dry</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[12],
    },
  ],
  },
  inoppositescorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dry"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[12],
    },
  ],
  },
  
  //13
  ['opposites'+shuffleArraytwofive[12]]: {
  botPrompt: 'Opposite of "fast"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Slow', 'Tall', "Fat","Thin"]),
    answers: [
      {
        answer: 'Slow',
        nextId: 'oppositescorrectq13',
      },
      {
        answer: 'Tall',
        nextId: 'inoppositescorrectq13',
      },
      {
        answer: "Fat",
        nextId: 'inoppositescorrectq13',
      },
      {
        answer: "Thin",
        nextId: 'inoppositescorrectq13',
      },
    ],
  },
  
  oppositescorrectq13: {
  botPrompt: 'Hurray! <strong>Slow</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[13],
    },
  ],
  },
  inoppositescorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Slow"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[13],
    },
  ],
  },
  
  //14
  ['opposites'+shuffleArraytwofive[13]]: {
  botPrompt: 'Opposite of "light"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Dark', 'Heavy', "Short","Empty"]),
    answers: [
      {
        answer: 'Dark',
        nextId: 'oppositescorrectq14',
      },
      {
        answer: 'Heavy',
        nextId: 'inoppositescorrectq14',
      },
      {
        answer: "Short",
        nextId: 'inoppositescorrectq14',
      },
      {
        answer: "Empty",
        nextId: 'inoppositescorrectq14',
      },
    ],
  },
  
  oppositescorrectq14: {
  botPrompt: 'Hurray! <strong>Dark</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[14],
    },
  ],
  },
  inoppositescorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dark"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[14],
    },
  ],
  },
  
  
  //15
  ['opposites'+shuffleArraytwofive[14]]: {
  botPrompt: 'Opposite of "in"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Down', 'Up', "Out","Front"]),
    answers: [
      {
        answer: 'Down',
        nextId: 'inoppositescorrectq15',
      },
      {
        answer: 'Up',
        nextId: 'inoppositescorrectq15',
      },
      {
        answer: "Out",
        nextId: 'oppositescorrectq15',
      },
      {
        answer: "Front",
        nextId: 'inoppositescorrectq15',
      },
    ],
  },

  oppositescorrectq15: {
  botPrompt: 'Hurray! <strong>Out</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[15],
    },
  ],
  },
  inoppositescorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Out"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[15],
    },
  ],
  },
  
  //16
  ['opposites'+shuffleArraytwofive[15]]: {
    botPrompt: 'Opposite of "new"',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Old', 'Fast', "Bright","Empty"]),
    answers: [
      {
        answer: 'Old',
        nextId: 'oppositescorrectq16',
      },
      {
        answer: 'Fast',
        nextId: 'inoppositescorrectq16',
      },
      {
        answer: "Bright",
        nextId: 'inoppositescorrectq16',
      },
      {
        answer: "Empty",
        nextId: 'inoppositescorrectq16',
      },
    ],
  },
  oppositescorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Old</strong> 😎',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[16],
      },
    ],
  },
  inoppositescorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Old"</strong>',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[16],
      },
    ],
  },
  
  //17
  ['opposites'+shuffleArraytwofive[16]]: {
  botPrompt: 'Opposite of "happy"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Sad', 'Funny', "Brave","Angry"]),
    answers: [
      {
        answer: 'Sad',
        nextId: 'oppositescorrectq17',
      },
      {
        answer: 'Funny',
        nextId: 'inoppositescorrectq17',
      },
      {
        answer: "Brave",
        nextId: 'inoppositescorrectq17',
      },
      {
        answer: "Angry",
        nextId: 'inoppositescorrectq17',
      },
    ],
  },
  oppositescorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Sad</strong> 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[17],
    },
  ],
  },
  inoppositescorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sad"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[17],
    },
  ],
  },
  
  //18
  ['opposites'+shuffleArraytwofive[17]]: {
  botPrompt: 'Opposite of "quiet".   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Far', 'Soft', "Loud","Near"]),
  answers: [
    {
      answer: 'Far',
      nextId: 'inoppositescorrectq18',
    },
    {
      answer: 'Soft',
      nextId: 'inoppositescorrectq18',
    },
    {
      answer: "Loud",
      nextId: 'oppositescorrectq18',
    },
    {
      answer: "Near",
      nextId: 'inoppositescorrectq18',
    },
  ],
  },
  oppositescorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Loud</strong> 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[18],
    },
  ],
  },
  inoppositescorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Loud"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[18],
    },
  ],
  },
  
  //19
  ['opposites'+shuffleArraytwofive[18]]: {
  botPrompt: 'Opposite of "thick"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Heavy', 'Fast', "Thin","Tall"]),
  answers: [
    {
      answer: 'Heavy',
      nextId: 'inoppositescorrectq19',
    },
    {
      answer: 'Fast',
      nextId: 'inoppositescorrectq19',
    },
    {
      answer: "Thin",
      nextId: 'oppositescorrectq19',
    },
    {
      answer: "Tall",
      nextId: 'inoppositescorrectq19',
    },
  ],
  },
  oppositescorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Thin</strong> Answers! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[19],
    },
  ],
  },
  inoppositescorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Thin"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[19],
    },
  ],
  },
  
  //20
  ['opposites'+shuffleArraytwofive[19]]: {
  botPrompt: 'Opposite of "long"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Short', 'Young', "Soft","Full"]),
  answers: [
    {
      answer: 'Short',
      nextId: 'oppositescorrectq20',
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq20',
    },
    {
      answer: "Soft",
      nextId: 'inoppositescorrectq20',
    },
    {
      answer: "Full",
      nextId: 'inoppositescorrectq20',
    },
  ],
  },
  oppositescorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Short</strong> 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[20],
    },
  ],
  },
  inoppositescorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Short"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[20],
    },
  ],
  },
  
  //21
  ["opposites"+shuffleArraytwofive[20]]: {
    botPrompt: 'Short',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Short', 'Young', "Soft","Full"]),
  answers: [
    {
      answer: 'Short',
      nextId: 'inoppositescorrectq21',
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq21',
    },
    {
      answer: "Soft",
      nextId: 'oppositescorrectq21',
    },
    {
      answer: "Full",
      nextId: 'inoppositescorrectq21',
    },
  ],
  },
  oppositescorrectq21: {
    botPrompt: 'Hurray <strong>Soft</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[21],
      },
    ],
  },
  inoppositescorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Soft"</strong>',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[21],
      },
    ],
  },
  
  //22
  ['opposites'+shuffleArraytwofive[21]]: {
    botPrompt: 'Opposite of "old"',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Fast', 'young', "Loud","Bright"]),
  answers: [
    {
      answer: 'Fast',
      nextId: 'inoppositescorrectq22',
    },
    {
      answer: 'young',
      nextId: 'oppositescorrectq22',
    },
    {
      answer: "Loud",
      nextId: 'inoppositescorrectq22',
    },
    {
      answer: "Bright",
      nextId: 'inoppositescorrectq22',
    },
  ],
  },
  
  oppositescorrectq22: {
    botPrompt: 'Hurray! <strong>young</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[22],
      },
    ],
  },
  inoppositescorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"young"</strong>',
    answers: [
      {
        nextId: 'opposites'+shuffleArraytwofive[22],
      },
    ],
  },
  
  //23
  ['opposites'+shuffleArraytwofive[22]]: {
  botPrompt: 'Opposite of "boy"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Short', 'Young', "girl","Full"]),
  answers: [
    {
      answer: 'Short',
      nextId: 'inoppositescorrectq23',
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq23',
    },
    {
      answer: "girl",
      nextId: 'oppositescorrectq23',
    },
    {
      answer: "Full",
      nextId: 'inoppositescorrectq23',
    },
  ],
  },
  
  oppositescorrectq23: {
  botPrompt: 'Hurray! <strong>girl</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[23],
    },
  ],
  },
  inoppositescorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"girl"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[23],
    },
  ],
  },
  
  //24
  ['opposites'+shuffleArraytwofive[23]]: {
  botPrompt: 'Opposite of "awake"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Asleep', 'Young', "Soft","salt"]),
  answers: [
    {
      answer: 'Asleep',
      nextId: 'oppositescorrectq24',
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq24',
    },
    {
      answer: "Soft",
      nextId: 'inoppositescorrectq24',
    },
    {
      answer: "salt",
      nextId: 'inoppositescorrectq24',
    },
  ],
  },
  
  oppositescorrectq24: {
  botPrompt: 'Hurray! <strong>Asleep</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[24],
    },
  ],
  },
  inoppositescorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Asleep"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraytwofive[24],
    },
  ],
  },
  
  //25
  ['opposites'+shuffleArraytwofive[24]]: {
  botPrompt: 'Opposite of "sour"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['hot ', 'cold', "sweet","Bright"]),
  answers: [
    {
      answer: 'hot ',
      nextId: 'inoppositescorrectq25',
    },
    {
      answer: 'cold',
      nextId: 'inoppositescorrectq25',
    },
    {
      answer: "sweet",
      nextId: 'oppositescorrectq25',
    },
    {
      answer: "Bright",
      nextId: 'inoppositescorrectq25',
    },
  ],
  },

  oppositescorrectq25: {
  botPrompt: 'Hurray! <strong>sweet</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontinue26',
    },
  ],
  },
  inoppositescorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sweet"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue26',
    },
  ],
  },
  

  //endoppositesletter
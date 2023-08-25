day43: {
  botPrompt: '<strong> Day 43 : </strong> Division is essential in kindergarten as it helps children develop their basic math skills by understanding sharing and equal distribution',
  answers: [
          { nextId: 'day43link' },
  ],
},
day43link: {

  botPrompt: 'https://youtu.be/YtmbJKTftXA',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day431link' },
  ],
},
day431link: {

  botPrompt: 'https://youtu.be/dDfRSujyn6Q',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day432link' },
  ],
},
day432link: {

  botPrompt: 'https://youtu.be/q5E5PACpGEg',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day432comment' },
  ],
},

day432comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day434link' },
  ],
},
day434link: {
  botPrompt: 'https://drive.google.com/file/d/1yn8H4kkKLPuuvFo3ArPNV65azn3aBzfe/view?usp=share_link',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[0],
    },
  ],
},


//division


["division"+shuffledNumbersto[0]]: {
    botPrompt: 'What is the result of 25 x 4?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['90', '100', "110","120"]),
    answers: [
      {
        answer: '90',
        nextId: 'indivisioncorrect',
          sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: '100',
        nextId: 'divisioncorrect',
          sumToBags: [{ name: 'c', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "110",
        nextId: 'indivisioncorrect',
          sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
      {
        answer: "120",
        nextId: 'indivisioncorrect',
          sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
      },
    ],
  },
  divisioncorrect: {
    botPrompt: 'Hurray <strong>100</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[1],
      },
    ],
  },
  indivisioncorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"100"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['division'+shuffledNumbersto[1]]: {
    botPrompt: 'If a box contains 6 rows of 7 chocolates each, how many chocolates are there in the box?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['38', '40', "42","44"]),
    answers: [
      {
        answer: '38',
        nextId: 'indivisioncorrectq2',
      },
      {
        answer: '40',
        nextId: 'indivisioncorrectq2',
      },
      {
        answer: "42",
        nextId: 'divisioncorrectq2',
      },
      {
        answer: "44",
        nextId: 'indivisioncorrectq2',
      },
    ],
  },
  
  divisioncorrectq2: {
    botPrompt: 'Hurray! <strong>42</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[2],
      },
    ],
  },
  indivisioncorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['division'+shuffledNumbersto[2]]: {
  botPrompt: "How much will you pay for 7 pens costing Rs.25 each?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.150', 'Rs.175', "Rs.200","Rs.225"]),
    answers: [
      {
        answer: 'Rs.150',
        nextId: 'indivisioncorrectq3',
      },
      {
        answer: 'Rs.175',
        nextId: 'divisioncorrectq3',
      },
      {
        answer: "Rs.200",
        nextId: 'indivisioncorrectq3',
      },
      {
        answer: "Rs.225",
        nextId: 'indivisioncorrectq3',
      },
    ],
  },
  
  divisioncorrectq3: {
  botPrompt: 'Hurray! <strong>Rs.175</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[3],
    },
  ],
  },
  indivisioncorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.175"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['division'+shuffledNumbersto[3]]: {
  botPrompt: 'What is the product of 334 and 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1610', '1655', "1670","1680"]),
    answers: [
      {
        answer: '1610',
        nextId: 'indivisioncorrectq4',
      },
      {
        answer: '1655',
        nextId: 'indivisioncorrectq4',
      },
      {
        answer: "1670",
        nextId: 'divisioncorrectq4',
      },
      {
        answer: "1680",
        nextId: 'indivisioncorrectq4',
      },
    ],
  },
  
  divisioncorrectq4: {
  botPrompt: 'Hurray! <strong>1670</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[4],
    },
  ],
  },
  indivisioncorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1670"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['division'+shuffledNumbersto[4]]: {
  botPrompt: 'If a pizza has 10 slices and you eat 4 slices, what fraction of the pizza is left?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1/4', '3/10', "3/4","6/10"]),
    answers: [
      {
        answer: '1/4',
        nextId: 'indivisioncorrectq5',
      },
      {
        answer: '3/10',
        nextId: 'indivisioncorrectq5',
      },
      {
        answer: "3/4",
        nextId: 'indivisioncorrectq5',
      },
      {
        answer: "6/10",
        nextId: 'divisioncorrectq5',
      },
    ],
  },
  
  divisioncorrectq5: {
  botPrompt: 'Hurray! <strong>6/10"</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[5],
    },
  ],
  },
  indivisioncorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6/10""</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['division'+shuffledNumbersto[5]]: {
  botPrompt: 'A bakery makes 15 loaves of bread in an hour. How many loaves will they make in 5 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['50', '65', "75","80"]),
    answers: [
      {
        answer: '50',
        nextId: 'indivisioncorrectq6',
      },
      {
        answer: '65',
        nextId: 'indivisioncorrectq6',
      },
      {
        answer: "75",
        nextId: 'divisioncorrectq6',
      },
      {
        answer: "80",
        nextId: 'indivisioncorrectq6',
      },
    ],
  },
  
  divisioncorrectq6: {
  botPrompt: 'Hurray! <strong>75</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[6],
    },
  ],
  },
  indivisioncorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"75"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['division'+shuffledNumbersto[6]]: {
  botPrompt: 'If a person walks 3 km in 30 minutes, how far will they walk in 2 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6 km', '9 km', "12 km","18 km"]),
    answers: [
      {
        answer: '6 km',
        nextId: 'indivisioncorrectq7',
      },
      {
        answer: '9 km',
        nextId: 'indivisioncorrectq7',
      },
      {
        answer: "12 km",
        nextId: 'divisioncorrectq7',
      },
      {
        answer: "18 km",
        nextId: 'indivisioncorrectq7',
      },
    ],
  },
  
  divisioncorrectq7: {
  botPrompt: 'Hurray! <strong>12 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[7],
    },
  ],
  },
  indivisioncorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['division'+shuffledNumbersto[7]]: {
  botPrompt: 'What is the result of 498 x 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2988', '2986', "2984","2982"]),
    answers: [
      {
        answer: '2988',
        nextId: 'divisioncorrectq8',
      },
      {
        answer: '2986',
        nextId: 'indivisioncorrectq8',
      },
      {
        answer: "2984",
        nextId: 'indivisioncorrectq8',
      },
      {
        answer: "2982",
        nextId: 'indivisioncorrectq8',
      },
    ],
  },
  
  divisioncorrectq8: {
  botPrompt: 'Hurray! <strong>2988</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[8],
    },
  ],
  },
  indivisioncorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2988"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['division'+shuffledNumbersto[8]]: {
  botPrompt: 'A car travels at a speed of 60kmph. How far will it travel in 4 hours?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['150 km', '200 km', "240 km","280 km"]),
    answers: [
      {
        answer: '150 km',
        nextId: 'indivisioncorrectq9',
      },
      {
        answer: '200 km',
        nextId: 'indivisioncorrectq9',
      },
      {
        answer: "240 km",
        nextId: 'divisioncorrectq9',
      },
      {
        answer: "280 km",
        nextId: 'indivisioncorrectq9',
      },
    ],
  },
  
  divisioncorrectq9: {
  botPrompt: 'Hurray! <strong>200 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[9],
    },
  ],
  },
  indivisioncorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"200 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['division'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the product of 722 and 3?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['2066', '2166', "2266","2366"]),
    answers: [
      {
        answer: '2066',
        nextId: 'indivisioncorrectq10',
      },
      {
        answer: '2166',
        nextId: 'divisioncorrectq10',
      },
      {
        answer: "2266",
        nextId: 'indivisioncorrectq10',
      },
      {
        answer: "2366",
        nextId: 'indivisioncorrectq10',
      },
    ],
  
  },
  
  divisioncorrectq10: {
  botPrompt: 'Hurray! <strong>2166</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[10],
    },
  ],
  },
  indivisioncorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2166"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['division'+shuffledNumbersto[10]]: {
  botPrompt: 'What is the product of 34 and 5?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['150', '170', "175","180"]),
    answers: [
      {
        answer: '150',
        nextId: 'indivisioncorrectq11',
      },
      {
        answer: '170',
        nextId: 'divisioncorrectq11',
      },
      {
        answer: "175",
        nextId: 'indivisioncorrectq11',
      },
      {
        answer: "180",
        nextId: 'indivisioncorrectq11',
      },
    ],
  },
  
  divisioncorrectq11: {
  botPrompt: 'Hurray! <strong>170</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[11],
    },
  ],
  },
  indivisioncorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"170"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['division'+shuffledNumbersto[11]]: {
  botPrompt: 'If a box contains 8 rows of 6 chocolates each, how many chocolates are there in the box?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['38', '44', "48","60"]),
    answers: [
      {
        answer: '38',
        nextId: 'indivisioncorrectq12',
      },
      {
        answer: '44',
        nextId: 'indivisioncorrectq12',
      },
      {
        answer: "48",
        nextId: 'divisioncorrectq12',
      },
      {
        answer: "60",
        nextId: 'indivisioncorrectq12',
      },
    ],
  },
  
  divisioncorrectq12: {
  botPrompt: 'Hurray! <strong>48</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[12],
    },
  ],
  },
  indivisioncorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"48"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['division'+shuffledNumbersto[12]]: {
  botPrompt: 'How much will you pay for 9 notebooks costing Rs.15 each?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.120', 'Rs.130', "Rs.135","Rs.145"]),
    answers: [
      {
        answer: 'Rs.120',
        nextId: 'indivisioncorrectq13',
      },
      {
        answer: 'Rs.130',
        nextId: 'indivisioncorrectq13',
      },
      {
        answer: "Rs.135",
        nextId: 'divisioncorrectq13',
      },
      {
        answer: "Rs.145",
        nextId: 'indivisioncorrectq13',
      },
    ],
  },
  
  divisioncorrectq13: {
  botPrompt: 'Hurray! <strong>Rs.135</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[13],
    },
  ],
  },
  indivisioncorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.135"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['division'+shuffledNumbersto[13]]: {
  botPrompt: 'What is the product of 524 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1960', '2096', "2116","2196"]),
    answers: [
      {
        answer: '1960',
        nextId: 'indivisioncorrectq14',
      },
      {
        answer: '2096',
        nextId: 'divisioncorrectq14',
      },
      {
        answer: "2116",
        nextId: 'indivisioncorrectq14',
      },
      {
        answer: "2196",
        nextId: 'indivisioncorrectq14',
      },
    ],
  },
  
  divisioncorrectq14: {
  botPrompt: 'Hurray! <strong>2096</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[14],
    },
  ],
  },
  indivisioncorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2096"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['division'+shuffledNumbersto[14]]: {
  botPrompt: 'If a pizza has 12 slices and you eat 3 slices, what fraction of the pizza is left?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1/2', '1/3', "3/4","1/5"]),
    answers: [
      {
        answer: '1/2',
        nextId: 'indivisioncorrectq15',
      },
      {
        answer: '1/3',
        nextId: 'indivisioncorrectq15',
      },
      {
        answer: "3/4",
        nextId: 'divisioncorrectq15',
      },
      {
        answer: "1/5",
        nextId: 'indivisioncorrectq15',
      },
    ],
  },
  
  divisioncorrectq15: {
  botPrompt: 'Hurray! <strong>3/4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[15],
    },
  ],
  },
  indivisioncorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3/4"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['division'+shuffledNumbersto[15]]: {
    botPrompt: 'A bakery makes 18 loaves of bread in an hour. How many loaves will they make in 4 hours?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['52', '64', "72","82"]),
    answers: [
      {
        answer: '52',
        nextId: 'indivisioncorrectq16',
      },
      {
        answer: '64',
        nextId: 'indivisioncorrectq16',
      },
      {
        answer: "72",
        nextId: 'divisioncorrectq16',
      },
      {
        answer: "82",
        nextId: 'indivisioncorrectq16',
      },
    ],
  },
  divisioncorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>72</strong> 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[16],
      },
    ],
  },
  indivisioncorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"72"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['division'+shuffledNumbersto[16]]: {
  botPrompt: 'If a person drives at a speed of 50 kmph for 3 hours, how far will they travel?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['100 km', '120 km', "150 km","170 km"]),
    answers: [
      {
        answer: '100 km',
        nextId: 'indivisioncorrectq17',
      },
      {
        answer: '120 km',
        nextId: 'indivisioncorrectq17',
      },
      {
        answer: "150 km",
        nextId: 'divisioncorrectq17',
      },
      {
        answer: "170 km",
        nextId: 'indivisioncorrectq17',
      },
    ],
  },
  divisioncorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>150 km</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[17],
    },
  ],
  },
  indivisioncorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"150 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['division'+shuffledNumbersto[17]]: {
  botPrompt: 'What is the product of 691 and 6?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4000', '4146', "4176","4296"]),
  answers: [
    {
      answer: '4000',
      nextId: 'indivisioncorrectq18',
    },
    {
      answer: '4146',
      nextId: 'divisioncorrectq18',
    },
    {
      answer: "4176",
      nextId: 'indivisioncorrectq18',
    },
    {
      answer: "4296",
      nextId: 'indivisioncorrectq18',
    },
  ],
  },
  divisioncorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4146</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[18],
    },
  ],
  },
  indivisioncorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4146"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['division'+shuffledNumbersto[18]]: {
  botPrompt: 'A car travels at a speed of 80 kmph. How far will it travel in 6 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['360 km', '420 km', "480 km","540 km"]),
  answers: [
    {
      answer: '360 km',
      nextId: 'indivisioncorrectq19',
    },
    {
      answer: '420 km',
      nextId: 'divisioncorrectq19',
    },
    {
      answer: "480 km",
      nextId: 'indivisioncorrectq19',
    },
    {
      answer: "540 km",
      nextId: 'indivisioncorrectq19',
    },
  ],
  },
  divisioncorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>420 km</strong> Answers! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[19],
    },
  ],
  },
  indivisioncorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"420 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['division'+shuffledNumbersto[19]]: {
  botPrompt: 'What is the product of 876 and 3?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2528', '2618', "2636","2716"]),
  answers: [
    {
      answer: '2528',
      nextId: 'indivisioncorrectq20',
    },
    {
      answer: '2618',
      nextId: 'divisioncorrectq20',
    },
    {
      answer: "2636",
      nextId: 'indivisioncorrectq20',
    },
    {
      answer: "2716",
      nextId: 'indivisioncorrectq20',
    },
  ],
  },
  divisioncorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>2618</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[20],
    },
  ],
  },
  indivisioncorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2618"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["division"+shuffledNumbersto[20]]: {
    botPrompt: 'A book has 216 pages. If there are 24 chapters, how many pages are in each chapter?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'indivisioncorrectq21',
    },
    {
      answer: '7',
      nextId: 'indivisioncorrectq21',
    },
    {
      answer: "8",
      nextId: 'divisioncorrectq21',
    },
    {
      answer: "9",
      nextId: 'indivisioncorrectq21',
    },
  ],
  },
  divisioncorrectq21: {
    botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[21],
      },
    ],
  },
  indivisioncorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['division'+shuffledNumbersto[21]]: {
    botPrompt: 'A farmer has 25 sheep in each of his 8 pastures. How many sheep does he have in total?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['180', '190', "200","210"]),
  answers: [
    {
      answer: '180',
      nextId: 'indivisioncorrectq22',
    },
    {
      answer: '190',
      nextId: 'indivisioncorrectq22',
    },
    {
      answer: "200",
      nextId: 'divisioncorrectq22',
    },
    {
      answer: "210",
      nextId: 'indivisioncorrectq22',
    },
  ],
  },
  
  divisioncorrectq22: {
    botPrompt: 'Hurray! <strong>200</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[22],
      },
    ],
  },
  indivisioncorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"200"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['division'+shuffledNumbersto[22]]: {
  botPrompt: "What is the product of 65 and 7?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['420', '455', "490","525"]),
  answers: [
    {
      answer: '420',
      nextId: 'indivisioncorrectq23',
    },
    {
      answer: '455',
      nextId: 'divisioncorrectq23',
    },
    {
      answer: "490",
      nextId: 'indivisioncorrectq23',
    },
    {
      answer: "525",
      nextId: 'indivisioncorrectq23',
    },
  ],
  },
  
  divisioncorrectq23: {
  botPrompt: 'Hurray! <strong>455</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[23],
    },
  ],
  },
  indivisioncorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"455"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['division'+shuffledNumbersto[23]]: {
  botPrompt: 'There are 30 children in a classroom and each child has 5 fingers. How many fingers are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['135', '145', "150","155"]),
  answers: [
    {
      answer: '135',
      nextId: 'indivisioncorrectq24',
    },
    {
      answer: '145',
      nextId: 'indivisioncorrectq24',
    },
    {
      answer: "150",
      nextId: 'divisioncorrectq24',
    },
    {
      answer: "155",
      nextId: 'indivisioncorrectq24',
    },
  ],
  },
  
  divisioncorrectq24: {
  botPrompt: 'Hurray! <strong>150</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[24],
    },
  ],
  },
  indivisioncorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"150"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['division'+shuffledNumbersto[24]]: {
  botPrompt: 'If a box has 24 pencils and there are 6 boxes, how many pencils are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['130', '140', "144","150"]),
  answers: [
    {
      answer: '130',
      nextId: 'indivisioncorrectq25',
    },
    {
      answer: '140',
      nextId: 'indivisioncorrectq25',
    },
    {
      answer: "144",
      nextId: 'divisioncorrectq25',
    },
    {
      answer: "150",
      nextId: 'indivisioncorrectq25',
    },
  ],
  },
  
  divisioncorrectq25: {
  botPrompt: 'Hurray! <strong>144</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[25],
    },
  ],
  },
  indivisioncorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"144"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['division'+shuffledNumbersto[25]]: {
  botPrompt: 'What is the product of 354 and 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2040', '2124', "2214","2268"]),
  answers: [
    {
      answer: '2040',
      nextId: 'indivisioncorrectq26',
    },
    {
      answer: '2124',
      nextId: 'divisioncorrectq26',
    },
    {
      answer: "2214",
      nextId: 'indivisioncorrectq26',
    },
    {
      answer: "2268",
      nextId: 'indivisioncorrectq26',
    },
  ],
  },
  
  divisioncorrectq26: {
  botPrompt: 'Hurray! <strong>2124</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[26],
    },
  ],
  },
  indivisioncorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2124"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['division'+shuffledNumbersto[26]]: {
  botPrompt: 'There are 60 minutes in an hour. How many minutes are there in 5 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['120', '180', "240","300"]),
    answers: [
      {
        answer: '120',
        nextId: 'indivisioncorrectq27',
      },
      {
        answer: '180',
        nextId: 'indivisioncorrectq27',
      },
      {
        answer: "240",
        nextId: 'indivisioncorrectq27',
      },
      {
        answer: "300",
        nextId: 'divisioncorrectq27',
      },
    ],
  },
  
  divisioncorrectq27: {
  botPrompt: 'Hurray! <strong>300</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[27],
    },
  ],
  },
  indivisioncorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"300"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[27],
    },
  ],
  },
  

  //28
  ['division'+shuffledNumbersto[27]]: {
  botPrompt: 'If a bicycle travels at a speed of 10 kmph, how far will it travel in 2.5 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['27 km', '24 km', "25 km","26 km"]),
  answers: [
    {
      answer: '27 km',
      nextId: 'indivisioncorrectq28',
    },
    {
      answer: '24 km',
      nextId: 'indivisioncorrectq28',
    },
    {
      answer: "25 km",
      nextId: 'divisioncorrectq28',
    },
    {
      answer: "26 km",
      nextId: 'indivisioncorrectq28',
    },
  ],
  },
  
  divisioncorrectq28: {
  botPrompt: 'Hurray! <strong>25 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[28],
    },
  ],
  },
  indivisioncorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['division'+shuffledNumbersto[28]]: {
  botPrompt: 'What is the product of 785 and 4?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['3040', '3140', "3190","3240"]),
    answers: [
      {
        answer: '3040',
        nextId: 'indivisioncorrectq29',
      },
      {
        answer: '3140',
        nextId: 'divisioncorrectq29',
      },
      {
        answer: "3190",
        nextId: 'indivisioncorrectq29',
      },
      {
        answer: "3240",
        nextId: 'indivisioncorrectq29',
      },
    ],
  },
  
  divisioncorrectq29: {
  botPrompt: 'Hurray! <strong>3140</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[29],
    },
  ],
  },
  indivisioncorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3140"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[29],
    },
  ],
  },
  
  
  //30
  ['division'+shuffledNumbersto[29]]: {
  botPrompt: 'What is the product of 23 and 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['105', '115', "120","125"]),
  answers: [
    {
      answer: '105',
      nextId: 'indivisioncorrectq30',
    },
    {
      answer: '115',
      nextId: 'divisioncorrectq30',
    },
    {
      answer: "120",
      nextId: 'indivisioncorrectq30',
    },
    {
      answer: "125",
      nextId: 'indivisioncorrectq30',
    },
  ],
  },

  divisioncorrectq30: {
  botPrompt: 'Hurray! <strong>115</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[30],
    },
  ],
  },
  indivisioncorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"115"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[30],
    },
  ],
  },
  
  //31
  ['division'+shuffledNumbersto[30]]: {
  botPrompt: 'If a candy costs 15 cents and you buy 6 candies, how much will you pay?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['75 cents', '80 cents', "85 cents","90 cents"]),
    answers: [
      {
        answer: '75 cents',
        nextId: 'indivisioncorrectq31',
      },
      {
        answer: '80 cents',
        nextId: 'divisioncorrectq31',
      },
      {
        answer: "85 cents",
        nextId: 'indivisioncorrectq31',
      },
      {
        answer: "90 cents",
        nextId: 'indivisioncorrectq31',
      },
    ],
  },
  
  divisioncorrectq31: {
  botPrompt: 'Hurray! <strong>80 cents</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[31],
    },
  ],
  },
  indivisioncorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"80 cents"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[31],
    },
  ],
  },
  
  //32
  ['division'+shuffledNumbersto[31]]: {
  botPrompt: 'A bike has 2 wheels and there are 4 bikes. How many wheels are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '8', "9","12"]),
  answers: [
    {
      answer: '6',
      nextId: 'indivisioncorrectq32',
    },
    {
      answer: '8',
      nextId: 'divisioncorrectq32',
    },
    {
      answer: "9",
      nextId: 'indivisioncorrectq32',
    },
    {
      answer: "12",
      nextId: 'indivisioncorrectq32',
    },
  ],
  },
  
  divisioncorrectq32: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[32],
    },
  ],
  },
  indivisioncorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[32],
    },
  ],
  },
  
  //33
  ['division'+shuffledNumbersto[32]]: {
  botPrompt: 'What is the product of 67 and 3?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['180', '195', "201","211"]),
  answers: [
    {
      answer: '180',
      nextId: 'indivisioncorrectq33',
    },
    {
      answer: '195',
      nextId: 'divisioncorrectq33',
    },
    {
      answer: "201",
      nextId: 'indivisioncorrectq33',
    },
    {
      answer: "211",
      nextId: 'indivisioncorrectq33',
    },
  ],
  },
  
  divisioncorrectq33: {
  botPrompt: 'Hurray! <strong>195</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[33],
    },
  ],
  },
  indivisioncorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"195"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[33],
    },
  ],
  },
  
  //34
  ['division'+shuffledNumbersto[33]]: {
  botPrompt: 'If a class has 25 students and each student has 2 pencils, how many pencils are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['46', '45', "48","49"]),
    answers: [
      {
        answer: '46',
        nextId: 'indivisioncorrectq34',
      },
      {
        answer: '45',
        nextId: 'divisioncorrectq34',
      },
      {
        answer: "48",
        nextId: 'indivisioncorrectq34',
      },
      {
        answer: "49",
        nextId: 'indivisioncorrectq34',
      },
    ],
  },
  
  divisioncorrectq34: {
  botPrompt: 'Hurray! <strong>45</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[34],
    },
  ],
  },
  indivisioncorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[34],
    },
  ],
  },
  
  
  //35
  ['division'+shuffledNumbersto[34]]: {
  botPrompt: 'If a pencil costs 5 cents and you buy 12 pencils, how much will you pay?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['50 cents', '55 cents', "60 cents","65 cents"]),
  answers: [
    {
      answer: '50 cents',
      nextId: 'indivisioncorrectq35',
    },
    {
      answer: '55 cents',
      nextId: 'divisioncorrectq35',
    },
    {
      answer: "60 cents",
      nextId: 'indivisioncorrectq35',
    },
    {
      answer: "65 cents",
      nextId: 'indivisioncorrectq35',
    },
  ],
  },
  
  divisioncorrectq35: {
  botPrompt: 'Hurray! <strong>55 cents</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[35],
    },
  ],
  },
  indivisioncorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"55 cents"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[35],
    },
  ],
  },
  
  //36
  ['division'+shuffledNumbersto[35]]: {
    botPrompt: 'A book has 15 chapters and each chapter has 10 pages. How many pages are in the book?',
    type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['125', '140', "150","160"]),
  answers: [
    {
      answer: '125',
      nextId: 'indivisioncorrectq36',
    },
    {
      answer: '140',
      nextId: 'divisioncorrectq36',
    },
    {
      answer: "150",
      nextId: 'indivisioncorrectq36',
    },
    {
      answer: "160",
      nextId: 'indivisioncorrectq36',
    },
  ],
  },
  divisioncorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>140</strong> 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[36],
      },
    ],
  },
  indivisioncorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"140"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[36],
      },
    ],
  },
  
  //37
  ['division'+shuffledNumbersto[36]]: {
  botPrompt: 'What is the product of 356 and 4?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1414', '1424', "1434","1444"]),
  answers: [
    {
      answer: '1414',
      nextId: 'indivisioncorrectq37',
    },
    {
      answer: '1424',
      nextId: 'divisioncorrectq37',
    },
    {
      answer: "1434",
      nextId: 'indivisioncorrectq37',
    },
    {
      answer: "1444",
      nextId: 'indivisioncorrectq37',
    },
  ],
  },
  divisioncorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1424</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[37],
    },
  ],
  },
  indivisioncorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1424"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[37],
    },
  ],
  },

  //38
  ['division'+shuffledNumbersto[37]]: {
  botPrompt: 'There are 20 seats on a bus and there are 5 rows. How many seats are in each row?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "7","6"]),
    answers: [
      {
        answer: '4',
        nextId: 'divisioncorrectq38',
      },
      {
        answer: '5',
        nextId: 'indivisioncorrectq38',
      },
      {
        answer: "7",
        nextId: 'indivisioncorrectq38',
      },
      {
        answer: "6",
        nextId: 'indivisioncorrectq38',
      },
    ],
  },
  divisioncorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[38],
    },
  ],
  },
  indivisioncorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[38],
    },
  ],
  },
  
  //39
  ['division'+shuffledNumbersto[38]]: {
  botPrompt: 'A train travels at a speed of 45 km/h for 3 hours. How far does it go?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['90 km', '125 km', "135 km","150 km"]),
  answers: [
    {
      answer: '90 km',
      nextId: 'indivisioncorrectq310',
    },
    {
      answer: '125 km',
      nextId: 'indivisioncorrectq39',
    },
    {
      answer: "135 km",
      nextId: 'divisioncorrectq39',
    },
    {
      answer: "150 km",
      nextId: 'indivisioncorrectq39',
    },
  ],
  },
  divisioncorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>135 km</strong> Answers! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[39],
    },
  ],
  },
  indivisioncorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"135 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[39],
    },
  ],
  },
  
  //40
  ['division'+shuffledNumbersto[39]]: {
  botPrompt: 'There are 24 students in a class and each student has 5 crayons. How many crayons are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['114 crayons', '119 crayons', "124 crayons","129 crayons"]),
    answers: [
      {
        answer: '114 crayons',
        nextId: 'divisioncorrectq40',
      },
      {
        answer: '119 crayons',
        nextId: 'divisioncorrectq40',
      },
      {
        answer: "124 crayons",
        nextId: 'indivisioncorrectq40',
      },
      {
        answer: "129 crayons",
        nextId: 'indivisioncorrectq40',
      },
    ],
  },
  divisioncorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>119 crayons</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[40],
    },
  ],
  },
  indivisioncorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"119 crayons"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[40],
    },
  ],
  },
  
  //41
  ["division"+shuffledNumbersto[40]]: {
    botPrompt: 'A tree grows 3 cm each year. How tall will it be in 10 years?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['16 cm', '26 cm', "30 cm","46 cm"]),
    answers: [
      {
        answer: '16 cm',
        nextId: 'indivisioncorrectq41',
      },
      {
        answer: '26 cm',
        nextId: 'indivisioncorrectq41',
      },
      {
        answer: "30 cm",
        nextId: 'divisioncorrectq41',
      },
      {
        answer: "46 cm",
        nextId: 'indivisioncorrectq41',
      },
    ],
  },
  divisioncorrectq41: {
    botPrompt: 'Hurray <strong>30 cm</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[41],
      },
    ],
  },
  indivisioncorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30 cm"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[41],
      },
    ],
  },
  
  //42
  
  ['division'+shuffledNumbersto[41]]: {
    botPrompt: 'If you have 2 boxes of 10 pencils each, and you add 3 more boxes of 5 pencils each, how many pencils do you have in total?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['20 pencils', '40 pencils', "45 pencils","50 pencils"]),
    answers: [
      {
        answer: '20 pencils',
        nextId: 'indivisioncorrectq42',
      },
      {
        answer: '40 pencils',
        nextId: 'indivisioncorrectq42',
      },
      {
        answer: "45 pencils",
        nextId: 'indivisioncorrectq42',
      },
      {
        answer: "50 pencils",
        nextId: 'divisioncorrectq42',
      },
    ],
  },
  
  divisioncorrectq42: {
    botPrompt: 'Hurray! <strong>50 pencils</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[42],
      },
    ],
  },
  indivisioncorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"50 pencils"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[42],
      },
    ],
  },
  
  //43
  ['division'+shuffledNumbersto[42]]: {
  botPrompt: "If a train travels 120 km/h for 2 hours, how far does it go?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['160 km', '200 km', "240 km","280 km"]),
    answers: [
      {
        answer: '160 km',
        nextId: 'indivisioncorrectq43',
      },
      {
        answer: '200 km',
        nextId: 'divisioncorrectq43',
      },
      {
        answer: "240 km",
        nextId: 'indivisioncorrectq43',
      },
      {
        answer: "280 km",
        nextId: 'indivisioncorrectq43',
      },
    ],
  },
  
  divisioncorrectq43: {
  botPrompt: 'Hurray! <strong>240 km</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[43],
    },
  ],
  },
  indivisioncorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"240 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[43],
    },
  ],
  },
  
  //44
  ['division'+shuffledNumbersto[43]]: {
  botPrompt: 'If there are 5 apples in each bag and there are 6 bags, how many apples are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['20 apples', '25 apples', "30 apples","35 apples"]),
    answers: [
      {
        answer: '20 apples',
        nextId: 'indivisioncorrectq44',
      },
      {
        answer: '25 apples',
        nextId: 'indivisioncorrectq44',
      },
      {
        answer: "30 apples",
        nextId: 'divisioncorrectq44',
      },
      {
        answer: "35 apples",
        nextId: 'indivisioncorrectq44',
      },
    ],
  },
  
  divisioncorrectq44: {
  botPrompt: 'Hurray! <strong>30 apples</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[44],
    },
  ],
  },
  indivisioncorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30 apples"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[44],
    },
  ],
  },
  
  //45
  ['division'+shuffledNumbersto[44]]: {
  botPrompt: 'If a store sells 3 books for Rs.15, how much will 8 books cost?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.30', 'Rs.35', "Rs.40","Rs.45"]),
    answers: [
      {
        answer: 'Rs.30',
        nextId: 'indivisioncorrectq45',
      },
      {
        answer: 'Rs.35',
        nextId: 'indivisioncorrectq45',
      },
      {
        answer: "Rs.40",
        nextId: 'divisioncorrectq45',
      },
      {
        answer: "Rs.45",
        nextId: 'indivisioncorrectq45',
      },
    ],
  },
  
  divisioncorrectq45: {
  botPrompt: 'Hurray! <strong>Rs.40</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[45],
    },
  ],
  },
  indivisioncorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.40"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[45],
    },
  ],
  },
  
  //46
  ['division'+shuffledNumbersto[45]]: {
  botPrompt: 'A car travels at a speed of 60 km/h for 4 hours. How far does it go?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['160 km', '220 km', "240 km","280 km"]),
    answers: [
      {
        answer: '160 km',
        nextId: 'indivisioncorrectq46',
      },
      {
        answer: '220 km',
        nextId: 'divisioncorrectq46',
      },
      {
        answer: "240 km",
        nextId: 'indivisioncorrectq46',
      },
      {
        answer: "280 km",
        nextId: 'indivisioncorrectq46',
      },
    ],
  },
  
  divisioncorrectq46: {
  botPrompt: 'Hurray! <strong>220 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[46],
    },
  ],
  },
  indivisioncorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"220 km"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[46],
    },
  ],
  },
  
  //47
  ['division'+shuffledNumbersto[46]]: {
  botPrompt: 'If a pack of gum costs 25 cents and you buy 7 packs, how much will you pay?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.1.50', 'Rs.1.75', "Rs.2.00","Rs.2.25"]),
    answers: [
      {
        answer: 'Rs.1.50',
        nextId: 'indivisioncorrectq47',
      },
      {
        answer: 'Rs.1.75',
        nextId: 'indivisioncorrectq47',
      },
      {
        answer: "Rs.2.00",
        nextId: 'divisioncorrectq47',
      },
      {
        answer: "Rs.2.25",
        nextId: 'indivisioncorrectq47',
      },
    ],
  },
  
  divisioncorrectq47: {
  botPrompt: 'Hurray! <strong>Rs.2.00</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[47],
    },
  ],
  },
  indivisioncorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.2.00"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[47],
    },
  ],
  },


  //48
  ['division'+shuffledNumbersto[47]]: {
  botPrompt: 'If you have 4 boxes of 12 marbles each, and you add 2 more boxes of 10 marbles each, how many marbles do you have in total?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['56 marbles', '72 marbles', "88 marbles","104 marbles"]),
    answers: [
      {
        answer: '56 marbles',
        nextId: 'indivisioncorrectq48',
      },
      {
        answer: '72 marbles',
        nextId: 'indivisioncorrectq48',
      },
      {
        answer: "88 marbles",
        nextId: 'indivisioncorrectq48',
      },
      {
        answer: "104 marbles",
        nextId: 'divisioncorrectq48',
      },
    ],
  },
  
  divisioncorrectq48: {
  botPrompt: 'Hurray! <strong>104 marbles</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[48],
    },
  ],
  },
  indivisioncorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"104 marbles"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[48],
    },
  ],
  },
  
  //49
  ['division'+shuffledNumbersto[48]]: {
  botPrompt: 'What is the product of 42 and 63?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2046', '2652', "2686","2937"]),
    answers: [
      {
        answer: '2046',
        nextId: 'divisioncorrectq49',
      },
      {
        answer: '2652',
        nextId: 'indivisioncorrectq49',
      },
      {
        answer: "2686",
        nextId: 'indivisioncorrectq49',
      },
      {
        answer: "2937",
        nextId: 'indivisioncorrectq49',
      },
    ],
  },
  
  divisioncorrectq49: {
  botPrompt: 'Hurray! <strong>2046</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[49],
    },
  ],
  },
  indivisioncorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2046"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[49],
    },
  ],
  },
  
  
  //50
  ['division'+shuffledNumbersto[49]]: {
  botPrompt: 'What is the product of 307 and 52?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14604', '15964', "15924","25924"]),
    answers: [
      {
        answer: '14604',
        nextId: 'divisioncorrectq50',
      },
      {
        answer: '15964',
        nextId: 'indivisioncorrectq50',
      },
      {
        answer: "15924",
        nextId: 'indivisioncorrectq50',
      },
      {
        answer: "25924",
        nextId: 'indivisioncorrectq50',
      },
    ],
  },
  
  divisioncorrectq50: {
  botPrompt: 'Hurray! <strong>15964</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[50],
    },
  ],
  },
  indivisioncorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15964"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[50],
    },
  ],
  },
  
  //51
  ['division'+shuffledNumbersto[50]]: {
  botPrompt: 'What is the product of 125 and 34?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4250', '4230', "4350","4330"]),
    answers: [
      {
        answer: '4250',
        nextId: 'divisioncorrectq51',
      },
      {
        answer: '4230',
        nextId: 'indivisioncorrectq51',
      },
      {
        answer: "4350",
        nextId: 'indivisioncorrectq51',
      },
      {
        answer: "4330",
        nextId: 'indivisioncorrectq51',
      },
    ],
  },
  
  divisioncorrectq51: {
  botPrompt: 'Hurray! <strong>4250</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[51],
    },
  ],
  },
  indivisioncorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4250"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[51],
    },
  ],
  },
  
  //52
  ['division'+shuffledNumbersto[51]]: {
  botPrompt: 'What is the product of 23 and 56?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1288', '1298', "1268","1278"]),
    answers: [
      {
        answer: '1288',
        nextId: 'divisioncorrectq52',
      },
      {
        answer: '1298',
        nextId: 'indivisioncorrectq52',
      },
      {
        answer: "1268",
        nextId: 'indivisioncorrectq52',
      },
      {
        answer: "1278",
        nextId: 'indivisioncorrectq52',
      },
    ],
  },
  
  divisioncorrectq52: {
  botPrompt: 'Hurray! <strong>1288</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[52],
    },
  ],
  },
  indivisioncorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1288"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[52],
    },
  ],
  },
  
  //53
  ['division'+shuffledNumbersto[52]]: {
  botPrompt: 'What is the product of 412 and 36?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14312', '14362', "14812","14832"]),
    answers: [
      {
        answer: '14312',
        nextId: 'indivisioncorrectq53',
      },
      {
        answer: '14362',
        nextId: 'indivisioncorrectq53',
      },
      {
        answer: "14812",
        nextId: 'indivisioncorrectq53',
      },
      {
        answer: "14832",
        nextId: 'divisioncorrectq53',
      },
    ],
  },

  divisioncorrectq53: {
  botPrompt: 'Hurray! <strong>14832</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[53],
    },
  ],
  },
  indivisioncorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14832"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[53],
    },
  ],
  },
  
  //54
  ['division'+shuffledNumbersto[53]]: {
  botPrompt: 'What is the product of 555 and 78?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['43610', '43290', "43290","43490"]),
    answers: [
      {
        answer: '43610',
        nextId: 'indivisioncorrectq54',
      },
      {
        answer: '43290',
        nextId: 'divisioncorrectq54',
      },
      {
        answer: "43290",
        nextId: 'indivisioncorrectq54',
      },
      {
        answer: "43490",
        nextId: 'indivisioncorrectq54',
      },
    ],
  },
  
  divisioncorrectq54: {
  botPrompt: 'Hurray! <strong>43290</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[54],
    },
  ],
  },
  indivisioncorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43290"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[54],
    },
  ],
  },


  //55
  ['division'+shuffledNumbersto[54]]: {
  botPrompt: '1,234 - 567 = ?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['657', '667', "677","687"]),
    answers: [
      {
        answer: '657',
        nextId: 'indivisioncorrectq55',
      },
      {
        answer: '667',
        nextId: 'divisioncorrectq55',
      },
      {
        answer: "677",
        nextId: 'indivisioncorrectq55',
      },
      {
        answer: "687",
        nextId: 'indivisioncorrectq55',
      },
    ],
  },
  
  divisioncorrectq55: {
  botPrompt: 'Hurray! <strong>667</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[55],
    },
  ],
  },
  indivisioncorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"667"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[55],
    },
  ],
  },
  
  //56
  ['division'+shuffledNumbersto[55]]: {
    botPrompt: 'What is the product of 37 and 82?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['2924', '3034', "3964","3044"]),
    answers: [
      {
        answer: '2924',
        nextId: 'indivisioncorrectq56',
      },
      {
        answer: '3034',
        nextId: 'divisioncorrectq56',
      },
      {
        answer: "3964",
        nextId: 'indivisioncorrectq56',
      },
      {
        answer: "3044",
        nextId: 'indivisioncorrectq56',
      },
    ],
  },
  divisioncorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3034</strong> 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[56],
      },
    ],
  },
  indivisioncorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3034"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[56],
      },
    ],
  },

  //57
  ['division'+shuffledNumbersto[56]]: {
  botPrompt: 'What is the product of 862 and 52?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['44824', '44664', "44964","44924"]),
    answers: [
      {
        answer: '44824',
        nextId: 'divisioncorrectq57',
      },
      {
        answer: '44664',
        nextId: 'indivisioncorrectq57',
      },
      {
        answer: "44964",
        nextId: 'indivisioncorrectq57',
      },
      {
        answer: "44924",
        nextId: 'indivisioncorrectq57',
      },
    ],
  },
  divisioncorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>44824</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[57],
    },
  ],
  },
  indivisioncorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44824"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[57],
    },
  ],
  },
  
  //58
  ['division'+shuffledNumbersto[57]]: {
  botPrompt: 'What is the product of 756 and 45?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['33820', '33850', "34200","34020"]),
  answers: [
    {
      answer: '33820',
      nextId: 'divisioncorrectq58',
    },
    {
      answer: '33850',
      nextId: 'indivisioncorrectq58',
    },
    {
      answer: "34200",
      nextId: 'indivisioncorrectq58',
    },
    {
      answer: "34020",
      nextId: 'indivisioncorrectq58',
    },
  ],
  },
  divisioncorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>34020</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[58],
    },
  ],
  },
  indivisioncorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34020"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[58],
    },
  ],
  },
  
  //59
  ['division'+shuffledNumbersto[58]]: {
  botPrompt: 'If a rectangle is 49 meters long and 86 meters wide, what is its area? (Use multiplication to solve)',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4214', '2683', "4244","3683"]),
    answers: [
      {
        answer: '4214',
        nextId: 'divisioncorrectq57',
      },
      {
        answer: '2683',
        nextId: 'indivisioncorrectq57',
      },
      {
        answer: "4244",
        nextId: 'indivisioncorrectq57',
      },
      {
        answer: "3683",
        nextId: 'indivisioncorrectq57',
      },
    ],
  },
  divisioncorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4214</strong> Answers! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[59],
    },
  ],
  },
  indivisioncorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4214"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[59],
    },
  ],
  },
  
  //60
  ['division'+shuffledNumbersto[59]]: {
  botPrompt: 'What is the product of 23 and 42?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['656', '966', "876","586"]),
  answers: [
    {
      answer: '656',
      nextId: 'indivisioncorrectq60',
    },
    {
      answer: '966',
      nextId: 'divisioncorrectq60',
    },
    {
      answer: "876",
      nextId: 'indivisioncorrectq60',
    },
    {
      answer: "586",
      nextId: 'indivisioncorrectq60',
    },
  ],
  },
  divisioncorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>966</strong> 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[60],
    },
  ],
  },
  indivisioncorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"966"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[60],
    },
  ],
  },
  
  //61
  ["division"+shuffledNumbersto[60]]: {
    botPrompt: 'What is the product of 365 and 43?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['15490', '15125', "15695","15185"]),
    answers: [
      {
        answer: '15490',
        nextId: 'indivisioncorrectq61',
      },
      {
        answer: '15125',
        nextId: 'indivisioncorrectq61',
      },
      {
        answer: "15695",
        nextId: 'divisioncorrectq61',
      },
      {
        answer: "15185",
        nextId: 'indivisioncorrectq61',
      },
    ],
  },
  divisioncorrectq61: {
    botPrompt: 'Hurray <strong>15695</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[61],
      },
    ],
  },
  indivisioncorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15695"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[61],
      },
    ],
  },

  //62
  ['division'+shuffledNumbersto[61]]: {
    botPrompt: 'What is the product of 456 and 321?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['141276', '146376', "148056","142776"]),
    answers: [
      {
        answer: '141276',
        nextId: 'indivisioncorrectq62',
      },
      {
        answer: '146376',
        nextId: 'divisioncorrectq62',
      },
      {
        answer: "148056",
        nextId: 'indivisioncorrectq62',
      },
      {
        answer: "142776",
        nextId: 'indivisioncorrectq62',
      },
    ],
  },
  
  divisioncorrectq62: {
    botPrompt: 'Hurray! <strong>146376</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[62],
      },
    ],
  },
  indivisioncorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"146376"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[62],
      },
    ],
  },
  
  //63
  ['division'+shuffledNumbersto[62]]: {
  botPrompt: "A store sells 35 boxes of candies each containing 56 candies. How many candies are there in total?",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1390', '1860', "1960","1820"]),
    answers: [
      {
        answer: '1390',
        nextId: 'indivisioncorrectq63',
      },
      {
        answer: '1860',
        nextId: 'indivisioncorrectq63',
      },
      {
        answer: "1960",
        nextId: 'divisioncorrectq63',
      },
      {
        answer: "1820",
        nextId: 'indivisioncorrectq63',
      },
    ],
  },
  
  divisioncorrectq63: {
  botPrompt: 'Hurray! <strong>1960</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[63],
    },
  ],
  },
  indivisioncorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1960"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[63],
    },
  ],
  },

  //64
  ['division'+shuffledNumbersto[63]]: {
  botPrompt: 'A farmer has 62 acres of land on which he grows potatoes. If he can grow 89 potatoes per acre, how many potatoes can he harvest in total?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['5518', '5578', "5608","5458"]),
  answers: [
    {
      answer: '5518',
      nextId: 'divisioncorrectq64',
    },
    {
      answer: '5578',
      nextId: 'indivisioncorrectq64',
    },
    {
      answer: "5608",
      nextId: 'indivisioncorrectq64',
    },
    {
      answer: "5458",
      nextId: 'indivisioncorrectq64',
    },
  ],
  },
  
  divisioncorrectq64: {
  botPrompt: 'Hurray! <strong>5518</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[64],
    },
  ],
  },
  indivisioncorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5518"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[64],
    },
  ],
  },
  
  //65
  ['division'+shuffledNumbersto[64]]: {
  botPrompt: 'A factory produces 456 units of a product each day. If it operates for 23 days in a month, how many units of the product are produced in the month?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['10488', '10256', "10568","10334"]),
    answers: [
      {
        answer: '10488',
        nextId: 'divisioncorrectq65',
      },
      {
        answer: '6786',
        nextId: 'indivisioncorrectq65',
      },
      {
        answer: "10568",
        nextId: 'indivisioncorrectq65',
      },
      {
        answer: "10334",
        nextId: 'indivisioncorrectq65',
      },
    ],
  },
  
  divisioncorrectq65: {
  botPrompt: 'Hurray! <strong>10488</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[65],
    },
  ],
  },
  indivisioncorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10488"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[65],
    },
  ],
  },
  
  //66
  ['division'+shuffledNumbersto[65]]: {
  botPrompt: 'A car travels 347 km in 7 hours. What is the average speed of the car in km/h?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '46', "31","51"]),
  answers: [
    {
      answer: '49',
      nextId: 'divisioncorrectq66',
    },
    {
      answer: '46',
      nextId: 'indivisioncorrectq66',
    },
    {
      answer: "31",
      nextId: 'indivisioncorrectq66',
    },
    {
      answer: "51",
      nextId: 'indivisioncorrectq66',
    },
  ],
  },
  
  divisioncorrectq66: {
  botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[66],
    },
  ],
  },
  indivisioncorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[66],
    },
  ],
  },
  
  //67
  ['division'+shuffledNumbersto[66]]: {
  botPrompt: 'If a packet of pens contains 12 pens and there are 34 packets in a box. How many pens are there in the box?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['384', '408', "420","448"]),
  answers: [
    {
      answer: '384',
      nextId: 'indivisioncorrectq67',
    },
    {
      answer: '408',
      nextId: 'divisioncorrectq67',
    },
    {
      answer: "420",
      nextId: 'indivisioncorrectq67',
    },
    {
      answer: "448",
      nextId: 'indivisioncorrectq67',
    },
  ],
  },
  
  divisioncorrectq67: {
  botPrompt: 'Hurray! <strong>408</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[67],
    },
  ],
  },
  indivisioncorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"408"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[67],
    },
  ],
  },
  
  
  //68
  ['division'+shuffledNumbersto[67]]: {
  botPrompt: 'A school has 12 classrooms and each classroom can accommodate 32 students. How many students can the school accommodate in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['384', '408', "420","448"]),
  answers: [
    {
      answer: '384',
      nextId: 'divisioncorrectq67',
    },
    {
      answer: '408',
      nextId: 'indivisioncorrectq67',
    },
    {
      answer: "420",
      nextId: 'indivisioncorrectq67',
    },
    {
      answer: "448",
      nextId: 'indivisioncorrectq67',
    },
  ],
  },
  
  divisioncorrectq68: {
  botPrompt: 'Hurray! <strong>384</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[68],
    },
  ],
  },
  indivisioncorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"384"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[68],
    },
  ],
  },
  
  //69
  ['division'+shuffledNumbersto[68]]: {
  botPrompt: 'A delivery truck can carry 28 boxes each containing 24 bottles of milk. How many bottles of milk can the truck carry in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['506', '672', "630","588"]),
  answers: [
    {
      answer: '506',
      nextId: 'indivisioncorrectq69',
    },
    {
      answer: '672',
      nextId: 'divisioncorrectq69',
    },
    {
      answer: "630",
      nextId: 'indivisioncorrectq69',
    },
    {
      answer: "588",
      nextId: 'indivisioncorrectq69',
    },
  ],
  },
  
  divisioncorrectq69: {
  botPrompt: 'Hurray! <strong>672</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[69],
    },
  ],
  },
  indivisioncorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"672"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[69],
    },
  ],
  },

  
  //70
  ['division'+shuffledNumbersto[69]]: {
  botPrompt: 'What is the product of 25 and 36?'?
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['450', '850', "900","920"]),
  answers: [
    {
      answer: '450',
      nextId: 'divisioncorrectq70',
    },
    {
      answer: '850',
      nextId: 'indivisioncorrectq70',
    },
    {
      answer: "900",
      nextId: 'indivisioncorrectq70',
    },
    {
      answer: "920",
      nextId: 'indivisioncorrectq70',
    },
  ],
  },

  divisioncorrectq70: {
  botPrompt: 'Hurray! <strong>450</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[70],
    },
  ],
  },
  indivisioncorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"450"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[70],
    },
  ],
  },

  //71
  ['division'+shuffledNumbersto[70]]: {
  botPrompt: 'What is the product of 54 and 21?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1134', '1184', "1204","1244"]),
    answers: [
      {
        answer: '1134',
        nextId: 'divisioncorrectq71',
      },
      {
        answer: '1184',
        nextId: 'indivisioncorrectq71',
      },
      {
        answer: "1204",
        nextId: 'indivisioncorrectq71',
      },
      {
        answer: "1244",
        nextId: 'indivisioncorrectq71',
      },
    ],
  },

  divisioncorrectq71: {
  botPrompt: 'Hurray! <strong>1134</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[71],
    },
  ],
  },
  indivisioncorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1134"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[71],
    },
  ],
  },

  //72
  ['division'+shuffledNumbersto[71]]: {
  botPrompt: 'What is the product of 356 and 8?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2848', '2856', "2864","2872"]),
  answers: [
    {
      answer: '2848',
      nextId: 'divisioncorrectq72',
    },
    {
      answer: '2856',
      nextId: 'indivisioncorrectq72',
    },
    {
      answer: "2864",
      nextId: 'indivisioncorrectq72',
    },
    {
      answer: "2872",
      nextId: 'indivisioncorrectq72',
    },
  ],
  },

  divisioncorrectq72: {
  botPrompt: 'Hurray! <strong>2848</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[72],
    },
  ],
  },
  indivisioncorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2848"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[72],
    },
  ],
  },

  //73
  ['division'+shuffledNumbersto[72]]: {
  botPrompt: 'What is the product of 123 and 42?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['5146', '5156', "5166","5176"]),
    answers: [
      {
        answer: '5146',
        nextId: 'indivisioncorrectq73',
      },
      {
        answer: '5156',
        nextId: 'divisioncorrectq73',
      },
      {
        answer: "5166",
        nextId: 'indivisioncorrectq73',
      },
      {
        answer: "5176",
        nextId: 'indivisioncorrectq73',
      },
    ],
  },

  divisioncorrectq73: {
  botPrompt: 'Hurray! <strong>5156</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[73],
    },
  ],
  },
  indivisioncorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5156"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[73],
    },
  ],
  },

  //74
  ['division'+shuffledNumbersto[73]]: {
  botPrompt: 'What is the product of 789 and 5?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['3845', '3954', "4045","4045"]),
  answers: [
    {
      answer: '3845',
      nextId: 'indivisioncorrectq74',
    },
    {
      answer: '3954',
      nextId: 'divisioncorrectq74',
    },
    {
      answer: "4045",
      nextId: 'indivisioncorrectq74',
    },
    {
      answer: "4045",
      nextId: 'indivisioncorrectq74',
    },
  ],
  },

  divisioncorrectq74: {
  botPrompt: 'Hurray! <strong>3954</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[74],
    },
  ],
  },
  indivisioncorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3954"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[74],
    },
  ],
  },


  //75
  ['division'+shuffledNumbersto[74]]: {
  botPrompt: 'If 221 is multiplied by 4, what is the product?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['884', '8844', "8884","88844"]),
    answers: [
      {
        answer: '884',
        nextId: 'divisioncorrectq75',
      },
      {
        answer: '8844',
        nextId: 'indivisioncorrectq75',
      },
      {
        answer: "8884",
        nextId: 'indivisioncorrectq75',
      },
      {
        answer: "88844",
        nextId: 'indivisioncorrectq75',
      },
    ],
  },

  divisioncorrectq75: {
  botPrompt: 'Hurray! <strong>884</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[75],
    },
  ],
  },
  indivisioncorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"884"</strong>',
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[75],
    },
  ],
  },

  //76
  ['division'+shuffledNumbersto[75]]: {
    botPrompt: 'What is the product of 132 and 28?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['3696', '3706', "3716","3726"]),
    answers: [
      {
        answer: '3696',
        nextId: 'divisioncorrectq76',
      },
      {
        answer: '3706',
        nextId: 'indivisioncorrectq76',
      },
      {
        answer: "3716",
        nextId: 'indivisioncorrectq76',
      },
      {
        answer: "3726",
        nextId: 'indivisioncorrectq76',
      },
    ],
  },
  divisioncorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3696</strong> 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[76],
      },
    ],
  },
  indivisioncorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3696"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[76],
      },
    ],
  },

  //77
  ['division'+shuffledNumbersto[76]]: {
  botPrompt: 'What is the product of 325 and 6?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1950', '1960', "1970","1980"]),
    answers: [
      {
        answer: '1950',
        nextId: 'divisioncorrectq77',
      },
      {
        answer: '1960',
        nextId: 'indivisioncorrectq77',
      },
      {
        answer: "1970",
        nextId: 'indivisioncorrectq77',
      },
      {
        answer: "1980",
        nextId: 'indivisioncorrectq77',
      },
    ],
  },
  divisioncorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1950</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  indivisioncorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1950"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },



  //78
  ['division'+shuffledNumbersto[77]]: {
    botPrompt: 'What is the product of 427 and 53?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['22229', '22631', "22731","23281"]),
      answers: [
        {
          answer: '229',
          nextId: 'indivisioncorrectq78',
        },
        {
          answer: '22631',
          nextId: 'indivisioncorrectq78',
        },
        {
          answer: "22731",
          nextId: 'divisioncorrectq78',
        },
        {
          answer: "23281",
          nextId: 'indivisioncorrectq78',
        },
      ],
    },
    
    divisioncorrectq78: {
    botPrompt: 'Hurray! <strong>22731</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[78],
      },
    ],
    },
    indivisioncorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22731"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[78],
      },
    ],
    },
    
    //79
    ['division'+shuffledNumbersto[78]]: {
    botPrompt: 'What is the product of 543 and 321?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['174003', '174023', "174043","174063"]),
      answers: [
        {
          answer: '174003',
          nextId: 'divisioncorrectq79',
        },
        {
          answer: '174023',
          nextId: 'indivisioncorrectq79',
        },
        {
          answer: "174043",
          nextId: 'indivisioncorrectq79',
        },
        {
          answer: "174063",
          nextId: 'indivisioncorrectq79',
        },
      ],
    },
    
    divisioncorrectq79: {
    botPrompt: 'Hurray! <strong>174003</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[79],
      },
    ],
    },
    indivisioncorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"174003"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[79],
      },
    ],
    },
    
    
    //80
    ['division'+shuffledNumbersto[79]]: {
    botPrompt: 'If 32 pencils are packed in each box and there are 45 boxes. What is the total number of pencils?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1260', '1420', "1440","1460"]),
      answers: [
        {
          answer: '1260',
          nextId: 'indivisioncorrectq80',
        },
        {
          answer: '1420',
          nextId: 'indivisioncorrectq80',
        },
        {
          answer: "1440",
          nextId: 'divisioncorrectq80',
        },
        {
          answer: "1460",
          nextId: 'indivisioncorrectq80',
        },
      ],
    },
    
    divisioncorrectq80: {
    botPrompt: 'Hurray! <strong>1440</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[80],
      },
    ],
    },
    indivisioncorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1440"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[80],
      },
    ],
    },
    
    //81
    ['division'+shuffledNumbersto[80]]: {
    botPrompt: 'What is the product of 42 and 35?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1470', '1520', "1620","1820"]),
      answers: [
        {
          answer: '1470',
          nextId: 'divisioncorrectq51',
        },
        {
          answer: '1520',
          nextId: 'indivisioncorrectq51',
        },
        {
          answer: "1620",
          nextId: 'indivisioncorrectq51',
        },
        {
          answer: "1820",
          nextId: 'indivisioncorrectq51',
        },
      ],
    },
    
    divisioncorrectq51: {
    botPrompt: 'Hurray! <strong>1470</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[51],
      },
    ],
    },
    indivisioncorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1470"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[51],
      },
    ],
    },
    
    //82
    ['division'+shuffledNumbersto[81]]: {
    botPrompt: 'What is the product of 248 and 7?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1576', '1736', "1746","1766"]),
      answers: [
        {
          answer: '1576',
          nextId: 'indivisioncorrectq82',
        },
        {
          answer: '1736',
          nextId: 'divisioncorrectq82',
        },
        {
          answer: "1746",
          nextId: 'indivisioncorrectq82',
        },
        {
          answer: "1766",
          nextId: 'indivisioncorrectq82',
        },
      ],
    },
    
    divisioncorrectq82: {
    botPrompt: 'Hurray! <strong>1736</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[82],
      },
    ],
    },
    indivisioncorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1736"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[82],
      },
    ],
    },
    
    //83
    ['division'+shuffledNumbersto[82]]: {
    botPrompt: 'If 7296 pens are packed in 54 boxes. How many pens are in each box?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['128', '135', "138","140"]),
      answers: [
        {
          answer: '128',
          nextId: 'indivisioncorrectq83',
        },
        {
          answer: '135',
          nextId: 'divisioncorrectq83',
        },
        {
          answer: "138",
          nextId: 'indivisioncorrectq83',
        },
        {
          answer: "140",
          nextId: 'indivisioncorrectq83',
        },
      ],
    },
  
    divisioncorrectq83: {
    botPrompt: 'Hurray! <strong>135</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[83],
      },
    ],
    },
    indivisioncorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"135"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[83],
      },
    ],
    },
    
    //84
    ['division'+shuffledNumbersto[83]]: {
    botPrompt: 'Find the product of 89 and 71',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['6299', '6479', "6319","6679"]),
      answers: [
        {
          answer: '6299',
          nextId: 'indivisioncorrectq84',
        },
        {
          answer: '6479',
          nextId: 'indivisioncorrectq84',
        },
        {
          answer: "6319",
          nextId: 'divisioncorrectq84',
        },
        {
          answer: "6679",
          nextId: 'indivisioncorrectq84',
        },
      ],
    },
    
    divisioncorrectq84: {
    botPrompt: 'Hurray! <strong>6319</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[84],
      },
    ],
    },
    indivisioncorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6319"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[84],
      },
    ],
    },
    
    
    //85
    ['division'+shuffledNumbersto[84]]: {
    botPrompt: 'What is the value of 562 x 23?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['12976', '12986', "12996","13006"]),
      answers: [
        {
          answer: '12976',
          nextId: 'indivisioncorrectq85',
        },
        {
          answer: '12986',
          nextId: 'divisioncorrectq85',
        },
        {
          answer: "12996",
          nextId: 'indivisioncorrectq85',
        },
        {
          answer: "13006",
          nextId: 'indivisioncorrectq85',
        },
      ],
    },
    
    divisioncorrectq85: {
    botPrompt: 'Hurray! <strong>12986</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[85],
      },
    ],
    },
    indivisioncorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12986"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[85],
      },
    ],
    },
    
    //86
    ['division'+shuffledNumbersto[85]]: {
      botPrompt: 'The length, breadth, and height of a box are 12 cm, 15 cm, and 20 cm respectively. What is its volume?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['3600', '4200', "4500","5400"]),
      answers: [
        {
          answer: '3600',
          nextId: 'divisioncorrectq86',
        },
        {
          answer: '4200',
          nextId: 'indivisioncorrectq86',
        },
        {
          answer: "4500",
          nextId: 'indivisioncorrectq86',
        },
        {
          answer: "5400",
          nextId: 'indivisioncorrectq86',
        },
      ],
    },
    divisioncorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3600</strong> 😎',
      answers: [
        {
          nextId: 'division'+shuffledNumbersto[86],
        },
      ],
    },
    indivisioncorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3600"</strong>',
      answers: [
        {
          nextId: 'division'+shuffledNumbersto[86],
        },
      ],
    },
  
    //87
    ['division'+shuffledNumbersto[86]]: {
    botPrompt: 'What is the product of 345 and 122?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['42090', '42120', "42180","42210"]),
      answers: [
        {
          answer: '42090',
          nextId: 'divisioncorrectq87',
        },
        {
          answer: '42120',
          nextId: 'indivisioncorrectq87',
        },
        {
          answer: "42180",
          nextId: 'indivisioncorrectq87',
        },
        {
          answer: "42210",
          nextId: 'indivisioncorrectq87',
        },
      ],
    },
    divisioncorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>42090</strong> 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[87],
      },
    ],
    },
    indivisioncorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42090"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[87],
      },
    ],
    },
    
    //88
    ['division'+shuffledNumbersto[87]]: {
    botPrompt: 'A trader sold 85 bags of wheat at INR 2700 per bag. How much money did he get?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['229500', '232500', "234500","235700"]),
    answers: [
      {
        answer: '229500',
        nextId: 'divisioncorrectq88',
      },
      {
        answer: '232500',
        nextId: 'indivisioncorrectq88',
      },
      {
        answer: "234500",
        nextId: 'indivisioncorrectq88',
      },
      {
        answer: "235700",
        nextId: 'indivisioncorrectq88',
      },
    ],
    },
    divisioncorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>229500</strong> 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[88],
      },
    ],
    },
    indivisioncorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"229500"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[88],
      },
    ],
    },
    
    //89
    ['division'+shuffledNumbersto[88]]: {
    botPrompt: 'What is the value of 876 x 102?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['89052', '89152', "89252","89352"]),
      answers: [
        {
          answer: '89052',
          nextId: 'indivisioncorrectq87',
        },
        {
          answer: '89152',
          nextId: 'divisioncorrectq87',
        },
        {
          answer: "89252",
          nextId: 'indivisioncorrectq87',
        },
        {
          answer: "89352",
          nextId: 'indivisioncorrectq87',
        },
      ],
    },
    divisioncorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>89152</strong> Answers! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[89],
      },
    ],
    },
    indivisioncorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"89152"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[89],
      },
    ],
    },
    
    //90
    ['division'+shuffledNumbersto[89]]: {
    botPrompt: 'What is the product of 34 and 56?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1878', '1904', "2028","2144"]),
    answers: [
      {
        answer: '1878',
        nextId: 'indivisioncorrectq90',
      },
      {
        answer: '1904',
        nextId: 'divisioncorrectq90',
      },
      {
        answer: "2028",
        nextId: 'indivisioncorrectq90',
      },
      {
        answer: "2144",
        nextId: 'indivisioncorrectq90',
      },
    ],
    },
    divisioncorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1904</strong> 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[90],
      },
    ],
    },
    indivisioncorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1904"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[90],
      },
    ],
    },
    
    //91
    ["division"+shuffledNumbersto[90]]: {
      botPrompt: 'What is the product of 456 and 37?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['16872', '16892', "16983","16894"]),
      answers: [
        {
          answer: '16872',
          nextId: 'divisioncorrectq91',
        },
        {
          answer: '16892',
          nextId: 'indivisioncorrectq91',
        },
        {
          answer: "16983",
          nextId: 'indivisioncorrectq91',
        },
        {
          answer: "16894",
          nextId: 'indivisioncorrectq91',
        },
      ],
    },
    divisioncorrectq91: {
      botPrompt: 'Hurray <strong>16872</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'division'+shuffledNumbersto[91],
        },
      ],
    },
    indivisioncorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16872"</strong>',
      answers: [
        {
          nextId: 'division'+shuffledNumbersto[91],
        },
      ],
    },
    
    //92
    ['division'+shuffledNumbersto[91]]: {
      botPrompt: 'If a school has 243 students and each classroom can accommodate 18 students, how many classrooms will be needed?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['13', '14', "15","16"]),
      answers: [
        {
          answer: '13',
          nextId: 'indivisioncorrectq92',
        },
        {
          answer: '14',
          nextId: 'divisioncorrectq92',
        },
        {
          answer: "15",
          nextId: 'indivisioncorrectq92',
        },
        {
          answer: "16",
          nextId: 'indivisioncorrectq92',
        },
      ],
    },
    
    divisioncorrectq92: {
      botPrompt: 'Hurray! <strong>14</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'division'+shuffledNumbersto[92],
        },
      ],
    },
    indivisioncorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
      answers: [
        {
          nextId: 'division'+shuffledNumbersto[92],
        },
      ],
    },
    
    //93
    ['division'+shuffledNumbersto[92]]: {
    botPrompt: "The price of a pen is ₹25 and the cost of a pencil is ₹15. If Ravi buys 12 pens and 15 pencils, what is the total cost of his purchase?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['₹525', '₹600', "₹675","₹720"]),
      answers: [
        {
          answer: '₹525',
          nextId: 'divisioncorrectq93',
        },
        {
          answer: '₹600',
          nextId: 'indivisioncorrectq93',
        },
        {
          answer: "₹675",
          nextId: 'indivisioncorrectq93',
        },
        {
          answer: "₹720",
          nextId: 'indivisioncorrectq93',
        },
      ],
    },
    
    divisioncorrectq93: {
    botPrompt: 'Hurray! <strong>₹525</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[93],
      },
    ],
    },
    indivisioncorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"₹525"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[93],
      },
    ],
    },
  
    //94
    ['division'+shuffledNumbersto[93]]: {
    botPrompt: 'If 6789 is multiplied by 11, what is the result?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['74679', '74689', "74579","74579"]),
    answers: [
      {
        answer: '74679',
        nextId: 'divisioncorrectq94',
      },
      {
        answer: '74689',
        nextId: 'indivisioncorrectq94',
      },
      {
        answer: "74579",
        nextId: 'indivisioncorrectq94',
      },
      {
        answer: "74579",
        nextId: 'indivisioncorrectq94',
      },
    ],
    },
    
    divisioncorrectq94: {
    botPrompt: 'Hurray! <strong>74679</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[94],
      },
    ],
    },
    indivisioncorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"74679"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[94],
      },
    ],
    },
    
    //95
    ['division'+shuffledNumbersto[94]]: {
    botPrompt: 'What is the product of 789 and 234?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['184626', '184326', "184236","168526"]),
      answers: [
        {
          answer: '184626',
          nextId: 'divisioncorrectq95',
        },
        {
          answer: '184326',
          nextId: 'indivisioncorrectq95',
        },
        {
          answer: "184236",
          nextId: 'indivisioncorrectq95',
        },
        {
          answer: "168526",
          nextId: 'indivisioncorrectq95',
        },
      ],
    },
    
    divisioncorrectq95: {
    botPrompt: 'Hurray! <strong>184626</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[95],
      },
    ],
    },
    indivisioncorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"184626"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[95],
      },
    ],
    },
    
    //96
    ['division'+shuffledNumbersto[95]]: {
    botPrompt: 'A box of apples contains 25 apples. If a grocery store orders 72 boxes of apples, how many apples will they receive?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1800', '1825', "1850","1875"]),
    answers: [
      {
        answer: '1800',
        nextId: 'divisioncorrectq96',
      },
      {
        answer: '1825',
        nextId: 'indivisioncorrectq96',
      },
      {
        answer: "1850",
        nextId: 'indivisioncorrectq96',
      },
      {
        answer: "1875",
        nextId: 'indivisioncorrectq96',
      },
    ],
    },
    
    divisioncorrectq96: {
    botPrompt: 'Hurray! <strong>1800</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[96],
      },
    ],
    },
    indivisioncorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1800"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[96],
      },
    ],
    },

    //97
    ['division'+shuffledNumbersto[96]]: {
    botPrompt: 'What is the product of 345 and 56?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['19320', '19420', "19520","19620"]),
    answers: [
      {
        answer: '19320',
        nextId: 'divisioncorrectq97',
      },
      {
        answer: '19420',
        nextId: 'indivisioncorrectq97',
      },
      {
        answer: "19520",
        nextId: 'indivisioncorrectq97',
      },
      {
        answer: "19620",
        nextId: 'indivisioncorrectq97',
      },
    ],
    },

    divisioncorrectq97: {
    botPrompt: 'Hurray! <strong>19320</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[97],
      },
    ],
    },
    indivisioncorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19320"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[97],
      },
    ],
    },


    //98
    ['division'+shuffledNumbersto[97]]: {
    botPrompt: 'What is the product of 99 and 101?',
    type: RTypes.TRANSFORMED_TEXT,


    input: selectField(['9999', '10001', "10099","10101"]),
      answers: [
        {
          answer: '9999',
          nextId: 'indivisioncorrectq98',
        },
        {
          answer: '10001',
          nextId: 'divisioncorrectq98',
        },
        {
          answer: "10099",
          nextId: 'indivisioncorrectq98',
        },
        {
          answer: "10101",
          nextId: 'indivisioncorrectq98',
        },
      ],
    },

    divisioncorrectq98: {
    botPrompt: 'Hurray! <strong>10001</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[98],
      },
    ],
    },
    indivisioncorrectq98: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10001"</strong>',
    answers: [
      {
        nextId: 'division'+shuffledNumbersto[98],
      },
    ],
    },
    
    //99
    ['division'+shuffledNumbersto[98]]: {
      botPrompt: 'If a tank can hold 4500 liters of water, how many tanks are needed to hold 36,000 liters of water?',
      type: RTypes.TRANSFORMED_TEXT,
  

      input: selectField(['8', '9', "10","11"]),
        answers: [
          {
            answer: '8',
            nextId: 'divisioncorrectq99',
          },
          {
            answer: '9',
            nextId: 'indivisioncorrectq99',
          },
          {
            answer: "10",
            nextId: 'indivisioncorrectq99',
          },
          {
            answer: "11",
            nextId: 'indivisioncorrectq99',
          },
        ],
      },
  
      divisioncorrectq99: {
      botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishToContinue43',
        },
      ],
      },
      indivisioncorrectq99: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
      answers: [
        {
          nextId: 'wishToContinue43',
        },
      ],
      },


  //enddivisionletter
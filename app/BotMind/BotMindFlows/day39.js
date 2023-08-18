//multiply


["multiply"+shuffledNumbersto[0]]: {
    botPrompt: 'What is the result of 25 x 4?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['90', '100', "110","120"]),
    answers: [
      {
        answer: '90',
        nextId: 'inmultiplycorrect',
      },
      {
        answer: '100',
        nextId: 'multiplycorrect',
      },
      {
        answer: "110",
        nextId: 'inmultiplycorrect',
      },
      {
        answer: "120",
        nextId: 'inmultiplycorrect',
      },
    ],
  },
  multiplycorrect: {
    botPrompt: 'Hurray <strong>100</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[1],
      },
    ],
  },
  inmultiplycorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"100"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['multiply'+shuffledNumbersto[1]]: {
    botPrompt: 'If a box contains 6 rows of 7 chocolates each, how many chocolates are there in the box?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['38', '40', "42","44"]),
    answers: [
      {
        answer: '38',
        nextId: 'inmultiplycorrectq2',
      },
      {
        answer: '40',
        nextId: 'inmultiplycorrectq2',
      },
      {
        answer: "42",
        nextId: 'multiplycorrectq2',
      },
      {
        answer: "44",
        nextId: 'inmultiplycorrectq2',
      },
    ],
  },
  
  multiplycorrectq2: {
    botPrompt: 'Hurray! <strong>42</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[2],
      },
    ],
  },
  inmultiplycorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['multiply'+shuffledNumbersto[2]]: {
  botPrompt: "How much will you pay for 7 pens costing Rs.25 each?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.150', 'Rs.175', "Rs.200","Rs.225"]),
    answers: [
      {
        answer: 'Rs.150',
        nextId: 'inmultiplycorrectq3',
      },
      {
        answer: 'Rs.175',
        nextId: 'multiplycorrectq3',
      },
      {
        answer: "Rs.200",
        nextId: 'inmultiplycorrectq3',
      },
      {
        answer: "Rs.225",
        nextId: 'inmultiplycorrectq3',
      },
    ],
  },
  
  multiplycorrectq3: {
  botPrompt: 'Hurray! <strong>Rs.175</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[3],
    },
  ],
  },
  inmultiplycorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.175"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['multiply'+shuffledNumbersto[3]]: {
  botPrompt: 'What is the product of 334 and 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1610', '1655', "1670","1680"]),
    answers: [
      {
        answer: '1610',
        nextId: 'inmultiplycorrectq4',
      },
      {
        answer: '1655',
        nextId: 'inmultiplycorrectq4',
      },
      {
        answer: "1670",
        nextId: 'multiplycorrectq4',
      },
      {
        answer: "1680",
        nextId: 'inmultiplycorrectq4',
      },
    ],
  },
  
  multiplycorrectq4: {
  botPrompt: 'Hurray! <strong>1670</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[4],
    },
  ],
  },
  inmultiplycorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1670"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['multiply'+shuffledNumbersto[4]]: {
  botPrompt: 'If a pizza has 10 slices and you eat 4 slices, what fraction of the pizza is left?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1/4', '3/10', "3/4","6/10"]),
    answers: [
      {
        answer: '1/4',
        nextId: 'inmultiplycorrectq5',
      },
      {
        answer: '3/10',
        nextId: 'inmultiplycorrectq5',
      },
      {
        answer: "3/4",
        nextId: 'inmultiplycorrectq5',
      },
      {
        answer: "6/10",
        nextId: 'multiplycorrectq5',
      },
    ],
  },
  
  multiplycorrectq5: {
  botPrompt: 'Hurray! <strong>6/10"</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[5],
    },
  ],
  },
  inmultiplycorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6/10""</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['multiply'+shuffledNumbersto[5]]: {
  botPrompt: 'A bakery makes 15 loaves of bread in an hour. How many loaves will they make in 5 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['50', '65', "75","80"]),
    answers: [
      {
        answer: '50',
        nextId: 'inmultiplycorrectq6',
      },
      {
        answer: '65',
        nextId: 'inmultiplycorrectq6',
      },
      {
        answer: "75",
        nextId: 'multiplycorrectq6',
      },
      {
        answer: "80",
        nextId: 'inmultiplycorrectq6',
      },
    ],
  },
  
  multiplycorrectq6: {
  botPrompt: 'Hurray! <strong>75</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[6],
    },
  ],
  },
  inmultiplycorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"75"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['multiply'+shuffledNumbersto[6]]: {
  botPrompt: 'If a person walks 3 km in 30 minutes, how far will they walk in 2 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6 km', '9 km', "12 km","18 km"]),
    answers: [
      {
        answer: '6 km',
        nextId: 'inmultiplycorrectq7',
      },
      {
        answer: '9 km',
        nextId: 'inmultiplycorrectq7',
      },
      {
        answer: "12 km",
        nextId: 'multiplycorrectq7',
      },
      {
        answer: "18 km",
        nextId: 'inmultiplycorrectq7',
      },
    ],
  },
  
  multiplycorrectq7: {
  botPrompt: 'Hurray! <strong>12 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[7],
    },
  ],
  },
  inmultiplycorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['multiply'+shuffledNumbersto[7]]: {
  botPrompt: 'What is the result of 498 x 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2988', '2986', "2984","2982"]),
    answers: [
      {
        answer: '2988',
        nextId: 'multiplycorrectq8',
      },
      {
        answer: '2986',
        nextId: 'inmultiplycorrectq8',
      },
      {
        answer: "2984",
        nextId: 'inmultiplycorrectq8',
      },
      {
        answer: "2982",
        nextId: 'inmultiplycorrectq8',
      },
    ],
  },
  
  multiplycorrectq8: {
  botPrompt: 'Hurray! <strong>2988</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[8],
    },
  ],
  },
  inmultiplycorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2988"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['multiply'+shuffledNumbersto[8]]: {
  botPrompt: 'A car travels at a speed of 60kmph. How far will it travel in 4 hours?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['150 km', '200 km', "240 km","280 km"]),
    answers: [
      {
        answer: '150 km',
        nextId: 'inmultiplycorrectq9',
      },
      {
        answer: '200 km',
        nextId: 'inmultiplycorrectq9',
      },
      {
        answer: "240 km",
        nextId: 'multiplycorrectq9',
      },
      {
        answer: "280 km",
        nextId: 'inmultiplycorrectq9',
      },
    ],
  },
  
  multiplycorrectq9: {
  botPrompt: 'Hurray! <strong>200 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[9],
    },
  ],
  },
  inmultiplycorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"200 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['multiply'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the product of 722 and 3?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['2066', '2166', "2266","2366"]),
    answers: [
      {
        answer: '2066',
        nextId: 'inmultiplycorrectq10',
      },
      {
        answer: '2166',
        nextId: 'multiplycorrectq10',
      },
      {
        answer: "2266",
        nextId: 'inmultiplycorrectq10',
      },
      {
        answer: "2366",
        nextId: 'inmultiplycorrectq10',
      },
    ],
  
  },
  
  multiplycorrectq10: {
  botPrompt: 'Hurray! <strong>2166</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[10],
    },
  ],
  },
  inmultiplycorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2166"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['multiply'+shuffledNumbersto[10]]: {
  botPrompt: 'What is the product of 34 and 5?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['150', '170', "175","180"]),
    answers: [
      {
        answer: '150',
        nextId: 'inmultiplycorrectq11',
      },
      {
        answer: '170',
        nextId: 'multiplycorrectq11',
      },
      {
        answer: "175",
        nextId: 'inmultiplycorrectq11',
      },
      {
        answer: "180",
        nextId: 'inmultiplycorrectq11',
      },
    ],
  },
  
  multiplycorrectq11: {
  botPrompt: 'Hurray! <strong>170</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[11],
    },
  ],
  },
  inmultiplycorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"170"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['multiply'+shuffledNumbersto[11]]: {
  botPrompt: 'If a box contains 8 rows of 6 chocolates each, how many chocolates are there in the box?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['38', '44', "48","60"]),
    answers: [
      {
        answer: '38',
        nextId: 'inmultiplycorrectq12',
      },
      {
        answer: '44',
        nextId: 'inmultiplycorrectq12',
      },
      {
        answer: "48",
        nextId: 'multiplycorrectq12',
      },
      {
        answer: "60",
        nextId: 'inmultiplycorrectq12',
      },
    ],
  },
  
  multiplycorrectq12: {
  botPrompt: 'Hurray! <strong>48</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[12],
    },
  ],
  },
  inmultiplycorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"48"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['multiply'+shuffledNumbersto[12]]: {
  botPrompt: 'How much will you pay for 9 notebooks costing Rs.15 each?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.120', 'Rs.130', "Rs.135","Rs.145"]),
    answers: [
      {
        answer: 'Rs.120',
        nextId: 'inmultiplycorrectq13',
      },
      {
        answer: 'Rs.130',
        nextId: 'inmultiplycorrectq13',
      },
      {
        answer: "Rs.135",
        nextId: 'multiplycorrectq13',
      },
      {
        answer: "Rs.145",
        nextId: 'inmultiplycorrectq13',
      },
    ],
  },
  
  multiplycorrectq13: {
  botPrompt: 'Hurray! <strong>Rs.135</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[13],
    },
  ],
  },
  inmultiplycorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.135"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['multiply'+shuffledNumbersto[13]]: {
  botPrompt: 'What is the product of 524 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1960', '2096', "2116","2196"]),
    answers: [
      {
        answer: '1960',
        nextId: 'inmultiplycorrectq14',
      },
      {
        answer: '2096',
        nextId: 'multiplycorrectq14',
      },
      {
        answer: "2116",
        nextId: 'inmultiplycorrectq14',
      },
      {
        answer: "2196",
        nextId: 'inmultiplycorrectq14',
      },
    ],
  },
  
  multiplycorrectq14: {
  botPrompt: 'Hurray! <strong>2096</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[14],
    },
  ],
  },
  inmultiplycorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2096"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['multiply'+shuffledNumbersto[14]]: {
  botPrompt: 'If a pizza has 12 slices and you eat 3 slices, what fraction of the pizza is left?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1/2', '1/3', "3/4","1/5"]),
    answers: [
      {
        answer: '1/2',
        nextId: 'inmultiplycorrectq15',
      },
      {
        answer: '1/3',
        nextId: 'inmultiplycorrectq15',
      },
      {
        answer: "3/4",
        nextId: 'multiplycorrectq15',
      },
      {
        answer: "1/5",
        nextId: 'inmultiplycorrectq15',
      },
    ],
  },
  
  multiplycorrectq15: {
  botPrompt: 'Hurray! <strong>3/4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[15],
    },
  ],
  },
  inmultiplycorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3/4"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['multiply'+shuffledNumbersto[15]]: {
    botPrompt: 'A bakery makes 18 loaves of bread in an hour. How many loaves will they make in 4 hours?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['52', '64', "72","82"]),
    answers: [
      {
        answer: '52',
        nextId: 'inmultiplycorrectq16',
      },
      {
        answer: '64',
        nextId: 'inmultiplycorrectq16',
      },
      {
        answer: "72",
        nextId: 'multiplycorrectq16',
      },
      {
        answer: "82",
        nextId: 'inmultiplycorrectq16',
      },
    ],
  },
  multiplycorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>72</strong> 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[16],
      },
    ],
  },
  inmultiplycorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"72"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['multiply'+shuffledNumbersto[16]]: {
  botPrompt: 'If a person drives at a speed of 50 kmph for 3 hours, how far will they travel?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['100 km', '120 km', "150 km","170 km"]),
    answers: [
      {
        answer: '100 km',
        nextId: 'inmultiplycorrectq17',
      },
      {
        answer: '120 km',
        nextId: 'inmultiplycorrectq17',
      },
      {
        answer: "150 km",
        nextId: 'multiplycorrectq17',
      },
      {
        answer: "170 km",
        nextId: 'inmultiplycorrectq17',
      },
    ],
  },
  multiplycorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>150 km</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[17],
    },
  ],
  },
  inmultiplycorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"150 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['multiply'+shuffledNumbersto[17]]: {
  botPrompt: 'What is the product of 691 and 6?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4000', '4146', "4176","4296"]),
  answers: [
    {
      answer: '4000',
      nextId: 'inmultiplycorrectq18',
    },
    {
      answer: '4146',
      nextId: 'multiplycorrectq18',
    },
    {
      answer: "4176",
      nextId: 'inmultiplycorrectq18',
    },
    {
      answer: "4296",
      nextId: 'inmultiplycorrectq18',
    },
  ],
  },
  multiplycorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4146</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[18],
    },
  ],
  },
  inmultiplycorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4146"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['multiply'+shuffledNumbersto[18]]: {
  botPrompt: 'A car travels at a speed of 80 kmph. How far will it travel in 6 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['360 km', '420 km', "480 km","540 km"]),
  answers: [
    {
      answer: '360 km',
      nextId: 'inmultiplycorrectq19',
    },
    {
      answer: '420 km',
      nextId: 'multiplycorrectq19',
    },
    {
      answer: "480 km",
      nextId: 'inmultiplycorrectq19',
    },
    {
      answer: "540 km",
      nextId: 'inmultiplycorrectq19',
    },
  ],
  },
  multiplycorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>420 km</strong> Answers! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[19],
    },
  ],
  },
  inmultiplycorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"420 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['multiply'+shuffledNumbersto[19]]: {
  botPrompt: 'What is the product of 876 and 3?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2528', '2618', "2636","2716"]),
  answers: [
    {
      answer: '2528',
      nextId: 'inmultiplycorrectq20',
    },
    {
      answer: '2618',
      nextId: 'multiplycorrectq20',
    },
    {
      answer: "2636",
      nextId: 'inmultiplycorrectq20',
    },
    {
      answer: "2716",
      nextId: 'inmultiplycorrectq20',
    },
  ],
  },
  multiplycorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>2618</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[20],
    },
  ],
  },
  inmultiplycorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2618"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["multiply"+shuffledNumbersto[20]]: {
    botPrompt: 'A book has 216 pages. If there are 24 chapters, how many pages are in each chapter?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'inmultiplycorrectq21',
    },
    {
      answer: '7',
      nextId: 'inmultiplycorrectq21',
    },
    {
      answer: "8",
      nextId: 'multiplycorrectq21',
    },
    {
      answer: "9",
      nextId: 'inmultiplycorrectq21',
    },
  ],
  },
  multiplycorrectq21: {
    botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[21],
      },
    ],
  },
  inmultiplycorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['multiply'+shuffledNumbersto[21]]: {
    botPrompt: 'A farmer has 25 sheep in each of his 8 pastures. How many sheep does he have in total?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['180', '190', "200","210"]),
  answers: [
    {
      answer: '180',
      nextId: 'inmultiplycorrectq22',
    },
    {
      answer: '190',
      nextId: 'inmultiplycorrectq22',
    },
    {
      answer: "200",
      nextId: 'multiplycorrectq22',
    },
    {
      answer: "210",
      nextId: 'inmultiplycorrectq22',
    },
  ],
  },
  
  multiplycorrectq22: {
    botPrompt: 'Hurray! <strong>200</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[22],
      },
    ],
  },
  inmultiplycorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"200"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['multiply'+shuffledNumbersto[22]]: {
  botPrompt: "What is the product of 65 and 7?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['420', '455', "490","525"]),
  answers: [
    {
      answer: '420',
      nextId: 'inmultiplycorrectq23',
    },
    {
      answer: '455',
      nextId: 'multiplycorrectq23',
    },
    {
      answer: "490",
      nextId: 'inmultiplycorrectq23',
    },
    {
      answer: "525",
      nextId: 'inmultiplycorrectq23',
    },
  ],
  },
  
  multiplycorrectq23: {
  botPrompt: 'Hurray! <strong>455</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[23],
    },
  ],
  },
  inmultiplycorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"455"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['multiply'+shuffledNumbersto[23]]: {
  botPrompt: 'There are 30 children in a classroom and each child has 5 fingers. How many fingers are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['135', '145', "150","155"]),
  answers: [
    {
      answer: '135',
      nextId: 'inmultiplycorrectq24',
    },
    {
      answer: '145',
      nextId: 'inmultiplycorrectq24',
    },
    {
      answer: "150",
      nextId: 'multiplycorrectq24',
    },
    {
      answer: "155",
      nextId: 'inmultiplycorrectq24',
    },
  ],
  },
  
  multiplycorrectq24: {
  botPrompt: 'Hurray! <strong>150</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[24],
    },
  ],
  },
  inmultiplycorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"150"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['multiply'+shuffledNumbersto[24]]: {
  botPrompt: 'If a box has 24 pencils and there are 6 boxes, how many pencils are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['130', '140', "144","150"]),
  answers: [
    {
      answer: '130',
      nextId: 'inmultiplycorrectq25',
    },
    {
      answer: '140',
      nextId: 'inmultiplycorrectq25',
    },
    {
      answer: "144",
      nextId: 'multiplycorrectq25',
    },
    {
      answer: "150",
      nextId: 'inmultiplycorrectq25',
    },
  ],
  },
  
  multiplycorrectq25: {
  botPrompt: 'Hurray! <strong>144</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[25],
    },
  ],
  },
  inmultiplycorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"144"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['multiply'+shuffledNumbersto[25]]: {
  botPrompt: 'What is the product of 354 and 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2040', '2124', "2214","2268"]),
  answers: [
    {
      answer: '2040',
      nextId: 'inmultiplycorrectq26',
    },
    {
      answer: '2124',
      nextId: 'multiplycorrectq26',
    },
    {
      answer: "2214",
      nextId: 'inmultiplycorrectq26',
    },
    {
      answer: "2268",
      nextId: 'inmultiplycorrectq26',
    },
  ],
  },
  
  multiplycorrectq26: {
  botPrompt: 'Hurray! <strong>2124</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[26],
    },
  ],
  },
  inmultiplycorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2124"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['multiply'+shuffledNumbersto[26]]: {
  botPrompt: 'There are 60 minutes in an hour. How many minutes are there in 5 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['120', '180', "240","300"]),
    answers: [
      {
        answer: '120',
        nextId: 'inmultiplycorrectq27',
      },
      {
        answer: '180',
        nextId: 'inmultiplycorrectq27',
      },
      {
        answer: "240",
        nextId: 'inmultiplycorrectq27',
      },
      {
        answer: "300",
        nextId: 'multiplycorrectq27',
      },
    ],
  },
  
  multiplycorrectq27: {
  botPrompt: 'Hurray! <strong>300</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[27],
    },
  ],
  },
  inmultiplycorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"300"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[27],
    },
  ],
  },
  

  //28
  ['multiply'+shuffledNumbersto[27]]: {
  botPrompt: 'If a bicycle travels at a speed of 10 kmph, how far will it travel in 2.5 hours?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['27 km', '24 km', "25 km","26 km"]),
  answers: [
    {
      answer: '27 km',
      nextId: 'inmultiplycorrectq28',
    },
    {
      answer: '24 km',
      nextId: 'inmultiplycorrectq28',
    },
    {
      answer: "25 km",
      nextId: 'multiplycorrectq28',
    },
    {
      answer: "26 km",
      nextId: 'inmultiplycorrectq28',
    },
  ],
  },
  
  multiplycorrectq28: {
  botPrompt: 'Hurray! <strong>25 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[28],
    },
  ],
  },
  inmultiplycorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['multiply'+shuffledNumbersto[28]]: {
  botPrompt: 'What is the product of 785 and 4?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['3040', '3140', "3190","3240"]),
    answers: [
      {
        answer: '3040',
        nextId: 'inmultiplycorrectq29',
      },
      {
        answer: '3140',
        nextId: 'multiplycorrectq29',
      },
      {
        answer: "3190",
        nextId: 'inmultiplycorrectq29',
      },
      {
        answer: "3240",
        nextId: 'inmultiplycorrectq29',
      },
    ],
  },
  
  multiplycorrectq29: {
  botPrompt: 'Hurray! <strong>3140</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[29],
    },
  ],
  },
  inmultiplycorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3140"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[29],
    },
  ],
  },
  
  
  //30
  ['multiply'+shuffledNumbersto[29]]: {
  botPrompt: 'What is the product of 23 and 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['105', '115', "120","125"]),
  answers: [
    {
      answer: '105',
      nextId: 'inmultiplycorrectq30',
    },
    {
      answer: '115',
      nextId: 'multiplycorrectq30',
    },
    {
      answer: "120",
      nextId: 'inmultiplycorrectq30',
    },
    {
      answer: "125",
      nextId: 'inmultiplycorrectq30',
    },
  ],
  },

  multiplycorrectq30: {
  botPrompt: 'Hurray! <strong>115</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[30],
    },
  ],
  },
  inmultiplycorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"115"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[30],
    },
  ],
  },
  
  //31
  ['multiply'+shuffledNumbersto[30]]: {
  botPrompt: 'If a candy costs 15 cents and you buy 6 candies, how much will you pay?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['75 cents', '80 cents', "85 cents","90 cents"]),
    answers: [
      {
        answer: '75 cents',
        nextId: 'inmultiplycorrectq31',
      },
      {
        answer: '80 cents',
        nextId: 'multiplycorrectq31',
      },
      {
        answer: "85 cents",
        nextId: 'inmultiplycorrectq31',
      },
      {
        answer: "90 cents",
        nextId: 'inmultiplycorrectq31',
      },
    ],
  },
  
  multiplycorrectq31: {
  botPrompt: 'Hurray! <strong>80 cents</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[31],
    },
  ],
  },
  inmultiplycorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"80 cents"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[31],
    },
  ],
  },
  
  //32
  ['multiply'+shuffledNumbersto[31]]: {
  botPrompt: 'A bike has 2 wheels and there are 4 bikes. How many wheels are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '8', "9","12"]),
  answers: [
    {
      answer: '6',
      nextId: 'inmultiplycorrectq32',
    },
    {
      answer: '8',
      nextId: 'multiplycorrectq32',
    },
    {
      answer: "9",
      nextId: 'inmultiplycorrectq32',
    },
    {
      answer: "12",
      nextId: 'inmultiplycorrectq32',
    },
  ],
  },
  
  multiplycorrectq32: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[32],
    },
  ],
  },
  inmultiplycorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[32],
    },
  ],
  },
  
  //33
  ['multiply'+shuffledNumbersto[32]]: {
  botPrompt: 'What is the product of 67 and 3?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['180', '195', "201","211"]),
  answers: [
    {
      answer: '180',
      nextId: 'inmultiplycorrectq33',
    },
    {
      answer: '195',
      nextId: 'multiplycorrectq33',
    },
    {
      answer: "201",
      nextId: 'inmultiplycorrectq33',
    },
    {
      answer: "211",
      nextId: 'inmultiplycorrectq33',
    },
  ],
  },
  
  multiplycorrectq33: {
  botPrompt: 'Hurray! <strong>195</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[33],
    },
  ],
  },
  inmultiplycorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"195"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[33],
    },
  ],
  },
  
  //34
  ['multiply'+shuffledNumbersto[33]]: {
  botPrompt: 'If a class has 25 students and each student has 2 pencils, how many pencils are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['46', '45', "48","49"]),
    answers: [
      {
        answer: '46',
        nextId: 'inmultiplycorrectq34',
      },
      {
        answer: '45',
        nextId: 'multiplycorrectq34',
      },
      {
        answer: "48",
        nextId: 'inmultiplycorrectq34',
      },
      {
        answer: "49",
        nextId: 'inmultiplycorrectq34',
      },
    ],
  },
  
  multiplycorrectq34: {
  botPrompt: 'Hurray! <strong>45</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[34],
    },
  ],
  },
  inmultiplycorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[34],
    },
  ],
  },
  
  
  //35
  ['multiply'+shuffledNumbersto[34]]: {
  botPrompt: 'If a pencil costs 5 cents and you buy 12 pencils, how much will you pay?',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['50 cents', '55 cents', "60 cents","65 cents"]),
  answers: [
    {
      answer: '50 cents',
      nextId: 'inmultiplycorrectq35',
    },
    {
      answer: '55 cents',
      nextId: 'multiplycorrectq35',
    },
    {
      answer: "60 cents",
      nextId: 'inmultiplycorrectq35',
    },
    {
      answer: "65 cents",
      nextId: 'inmultiplycorrectq35',
    },
  ],
  },
  
  multiplycorrectq35: {
  botPrompt: 'Hurray! <strong>55 cents</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[35],
    },
  ],
  },
  inmultiplycorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"55 cents"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[35],
    },
  ],
  },
  
  //36
  ['multiply'+shuffledNumbersto[35]]: {
    botPrompt: 'A book has 15 chapters and each chapter has 10 pages. How many pages are in the book?',
    type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['125', '140', "150","160"]),
  answers: [
    {
      answer: '125',
      nextId: 'inmultiplycorrectq36',
    },
    {
      answer: '140',
      nextId: 'multiplycorrectq36',
    },
    {
      answer: "150",
      nextId: 'inmultiplycorrectq36',
    },
    {
      answer: "160",
      nextId: 'inmultiplycorrectq36',
    },
  ],
  },
  multiplycorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>140</strong> 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[36],
      },
    ],
  },
  inmultiplycorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"140"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[36],
      },
    ],
  },
  
  //37
  ['multiply'+shuffledNumbersto[36]]: {
  botPrompt: 'What is the product of 356 and 4?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1414', '1424', "1434","1444"]),
  answers: [
    {
      answer: '1414',
      nextId: 'inmultiplycorrectq37',
    },
    {
      answer: '1424',
      nextId: 'multiplycorrectq37',
    },
    {
      answer: "1434",
      nextId: 'inmultiplycorrectq37',
    },
    {
      answer: "1444",
      nextId: 'inmultiplycorrectq37',
    },
  ],
  },
  multiplycorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1424</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[37],
    },
  ],
  },
  inmultiplycorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1424"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[37],
    },
  ],
  },

  //38
  ['multiply'+shuffledNumbersto[37]]: {
  botPrompt: 'There are 20 seats on a bus and there are 5 rows. How many seats are in each row?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "7","6"]),
    answers: [
      {
        answer: '4',
        nextId: 'multiplycorrectq38',
      },
      {
        answer: '5',
        nextId: 'inmultiplycorrectq38',
      },
      {
        answer: "7",
        nextId: 'inmultiplycorrectq38',
      },
      {
        answer: "6",
        nextId: 'inmultiplycorrectq38',
      },
    ],
  },
  multiplycorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[38],
    },
  ],
  },
  inmultiplycorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[38],
    },
  ],
  },
  
  //39
  ['multiply'+shuffledNumbersto[38]]: {
  botPrompt: 'A train travels at a speed of 45 km/h for 3 hours. How far does it go?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['90 km', '125 km', "135 km","150 km"]),
  answers: [
    {
      answer: '90 km',
      nextId: 'inmultiplycorrectq310',
    },
    {
      answer: '125 km',
      nextId: 'inmultiplycorrectq39',
    },
    {
      answer: "135 km",
      nextId: 'multiplycorrectq39',
    },
    {
      answer: "150 km",
      nextId: 'inmultiplycorrectq39',
    },
  ],
  },
  multiplycorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>135 km</strong> Answers! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[39],
    },
  ],
  },
  inmultiplycorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"135 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[39],
    },
  ],
  },
  
  //40
  ['multiply'+shuffledNumbersto[39]]: {
  botPrompt: 'There are 24 students in a class and each student has 5 crayons. How many crayons are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['114 crayons', '119 crayons', "124 crayons","129 crayons"]),
    answers: [
      {
        answer: '114 crayons',
        nextId: 'multiplycorrectq40',
      },
      {
        answer: '119 crayons',
        nextId: 'multiplycorrectq40',
      },
      {
        answer: "124 crayons",
        nextId: 'inmultiplycorrectq40',
      },
      {
        answer: "129 crayons",
        nextId: 'inmultiplycorrectq40',
      },
    ],
  },
  multiplycorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>119 crayons</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[40],
    },
  ],
  },
  inmultiplycorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"119 crayons"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[40],
    },
  ],
  },
  
  //41
  ["multiply"+shuffledNumbersto[40]]: {
    botPrompt: 'A tree grows 3 cm each year. How tall will it be in 10 years?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['16 cm', '26 cm', "30 cm","46 cm"]),
    answers: [
      {
        answer: '16 cm',
        nextId: 'inmultiplycorrectq41',
      },
      {
        answer: '26 cm',
        nextId: 'inmultiplycorrectq41',
      },
      {
        answer: "30 cm",
        nextId: 'multiplycorrectq41',
      },
      {
        answer: "46 cm",
        nextId: 'inmultiplycorrectq41',
      },
    ],
  },
  multiplycorrectq41: {
    botPrompt: 'Hurray <strong>30 cm</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[41],
      },
    ],
  },
  inmultiplycorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30 cm"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[41],
      },
    ],
  },
  
  //42
  
  ['multiply'+shuffledNumbersto[41]]: {
    botPrompt: 'If you have 2 boxes of 10 pencils each, and you add 3 more boxes of 5 pencils each, how many pencils do you have in total?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['20 pencils', '40 pencils', "45 pencils","50 pencils"]),
    answers: [
      {
        answer: '20 pencils',
        nextId: 'inmultiplycorrectq42',
      },
      {
        answer: '40 pencils',
        nextId: 'inmultiplycorrectq42',
      },
      {
        answer: "45 pencils",
        nextId: 'inmultiplycorrectq42',
      },
      {
        answer: "50 pencils",
        nextId: 'multiplycorrectq42',
      },
    ],
  },
  
  multiplycorrectq42: {
    botPrompt: 'Hurray! <strong>50 pencils</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[42],
      },
    ],
  },
  inmultiplycorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"50 pencils"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[42],
      },
    ],
  },
  
  //43
  ['multiply'+shuffledNumbersto[42]]: {
  botPrompt: "If a train travels 120 km/h for 2 hours, how far does it go?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['160 km', '200 km', "240 km","280 km"]),
    answers: [
      {
        answer: '160 km',
        nextId: 'inmultiplycorrectq43',
      },
      {
        answer: '200 km',
        nextId: 'multiplycorrectq43',
      },
      {
        answer: "240 km",
        nextId: 'inmultiplycorrectq43',
      },
      {
        answer: "280 km",
        nextId: 'inmultiplycorrectq43',
      },
    ],
  },
  
  multiplycorrectq43: {
  botPrompt: 'Hurray! <strong>240 km</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[43],
    },
  ],
  },
  inmultiplycorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"240 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[43],
    },
  ],
  },
  
  //44
  ['multiply'+shuffledNumbersto[43]]: {
  botPrompt: 'If there are 5 apples in each bag and there are 6 bags, how many apples are there in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['20 apples', '25 apples', "30 apples","35 apples"]),
    answers: [
      {
        answer: '20 apples',
        nextId: 'inmultiplycorrectq44',
      },
      {
        answer: '25 apples',
        nextId: 'inmultiplycorrectq44',
      },
      {
        answer: "30 apples",
        nextId: 'multiplycorrectq44',
      },
      {
        answer: "35 apples",
        nextId: 'inmultiplycorrectq44',
      },
    ],
  },
  
  multiplycorrectq44: {
  botPrompt: 'Hurray! <strong>30 apples</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[44],
    },
  ],
  },
  inmultiplycorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30 apples"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[44],
    },
  ],
  },
  
  //45
  ['multiply'+shuffledNumbersto[44]]: {
  botPrompt: 'If a store sells 3 books for Rs.15, how much will 8 books cost?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.30', 'Rs.35', "Rs.40","Rs.45"]),
    answers: [
      {
        answer: 'Rs.30',
        nextId: 'inmultiplycorrectq45',
      },
      {
        answer: 'Rs.35',
        nextId: 'inmultiplycorrectq45',
      },
      {
        answer: "Rs.40",
        nextId: 'multiplycorrectq45',
      },
      {
        answer: "Rs.45",
        nextId: 'inmultiplycorrectq45',
      },
    ],
  },
  
  multiplycorrectq45: {
  botPrompt: 'Hurray! <strong>Rs.40</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[45],
    },
  ],
  },
  inmultiplycorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.40"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[45],
    },
  ],
  },
  
  //46
  ['multiply'+shuffledNumbersto[45]]: {
  botPrompt: 'A car travels at a speed of 60 km/h for 4 hours. How far does it go?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['160 km', '220 km', "240 km","280 km"]),
    answers: [
      {
        answer: '160 km',
        nextId: 'inmultiplycorrectq46',
      },
      {
        answer: '220 km',
        nextId: 'multiplycorrectq46',
      },
      {
        answer: "240 km",
        nextId: 'inmultiplycorrectq46',
      },
      {
        answer: "280 km",
        nextId: 'inmultiplycorrectq46',
      },
    ],
  },
  
  multiplycorrectq46: {
  botPrompt: 'Hurray! <strong>220 km</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[46],
    },
  ],
  },
  inmultiplycorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"220 km"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[46],
    },
  ],
  },
  
  //47
  ['multiply'+shuffledNumbersto[46]]: {
  botPrompt: 'If a pack of gum costs 25 cents and you buy 7 packs, how much will you pay?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rs.1.50', 'Rs.1.75', "Rs.2.00","Rs.2.25"]),
    answers: [
      {
        answer: 'Rs.1.50',
        nextId: 'inmultiplycorrectq47',
      },
      {
        answer: 'Rs.1.75',
        nextId: 'inmultiplycorrectq47',
      },
      {
        answer: "Rs.2.00",
        nextId: 'multiplycorrectq47',
      },
      {
        answer: "Rs.2.25",
        nextId: 'inmultiplycorrectq47',
      },
    ],
  },
  
  multiplycorrectq47: {
  botPrompt: 'Hurray! <strong>Rs.2.00</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[47],
    },
  ],
  },
  inmultiplycorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.2.00"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[47],
    },
  ],
  },


  //48
  ['multiply'+shuffledNumbersto[47]]: {
  botPrompt: 'If you have 4 boxes of 12 marbles each, and you add 2 more boxes of 10 marbles each, how many marbles do you have in total?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['56 marbles', '72 marbles', "88 marbles","104 marbles"]),
    answers: [
      {
        answer: '56 marbles',
        nextId: 'inmultiplycorrectq48',
      },
      {
        answer: '72 marbles',
        nextId: 'inmultiplycorrectq48',
      },
      {
        answer: "88 marbles",
        nextId: 'inmultiplycorrectq48',
      },
      {
        answer: "104 marbles",
        nextId: 'multiplycorrectq48',
      },
    ],
  },
  
  multiplycorrectq48: {
  botPrompt: 'Hurray! <strong>104 marbles</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[48],
    },
  ],
  },
  inmultiplycorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"104 marbles"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[48],
    },
  ],
  },
  
  //49
  ['multiply'+shuffledNumbersto[48]]: {
  botPrompt: 'What is the product of 42 and 63?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2046', '2652', "2686","2937"]),
    answers: [
      {
        answer: '2046',
        nextId: 'multiplycorrectq49',
      },
      {
        answer: '2652',
        nextId: 'inmultiplycorrectq49',
      },
      {
        answer: "2686",
        nextId: 'inmultiplycorrectq49',
      },
      {
        answer: "2937",
        nextId: 'inmultiplycorrectq49',
      },
    ],
  },
  
  multiplycorrectq49: {
  botPrompt: 'Hurray! <strong>2046</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[49],
    },
  ],
  },
  inmultiplycorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2046"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[49],
    },
  ],
  },
  
  
  //50
  ['multiply'+shuffledNumbersto[49]]: {
  botPrompt: 'What is the product of 307 and 52?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14604', '15964', "15924","25924"]),
    answers: [
      {
        answer: '14604',
        nextId: 'multiplycorrectq50',
      },
      {
        answer: '15964',
        nextId: 'inmultiplycorrectq50',
      },
      {
        answer: "15924",
        nextId: 'inmultiplycorrectq50',
      },
      {
        answer: "25924",
        nextId: 'inmultiplycorrectq50',
      },
    ],
  },
  
  multiplycorrectq50: {
  botPrompt: 'Hurray! <strong>15964</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[50],
    },
  ],
  },
  inmultiplycorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15964"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[50],
    },
  ],
  },
  
  //51
  ['multiply'+shuffledNumbersto[50]]: {
  botPrompt: 'What is the product of 125 and 34?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4250', '4230', "4350","4330"]),
    answers: [
      {
        answer: '4250',
        nextId: 'multiplycorrectq51',
      },
      {
        answer: '4230',
        nextId: 'inmultiplycorrectq51',
      },
      {
        answer: "4350",
        nextId: 'inmultiplycorrectq51',
      },
      {
        answer: "4330",
        nextId: 'inmultiplycorrectq51',
      },
    ],
  },
  
  multiplycorrectq51: {
  botPrompt: 'Hurray! <strong>4250</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[51],
    },
  ],
  },
  inmultiplycorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4250"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[51],
    },
  ],
  },
  
  //52
  ['multiply'+shuffledNumbersto[51]]: {
  botPrompt: 'What is the product of 23 and 56?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1288', '1298', "1268","1278"]),
    answers: [
      {
        answer: '1288',
        nextId: 'multiplycorrectq52',
      },
      {
        answer: '1298',
        nextId: 'inmultiplycorrectq52',
      },
      {
        answer: "1268",
        nextId: 'inmultiplycorrectq52',
      },
      {
        answer: "1278",
        nextId: 'inmultiplycorrectq52',
      },
    ],
  },
  
  multiplycorrectq52: {
  botPrompt: 'Hurray! <strong>1288</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[52],
    },
  ],
  },
  inmultiplycorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1288"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[52],
    },
  ],
  },
  
  //53
  ['multiply'+shuffledNumbersto[52]]: {
  botPrompt: 'What is the product of 412 and 36?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14312', '14362', "14812","14832"]),
    answers: [
      {
        answer: '14312',
        nextId: 'inmultiplycorrectq53',
      },
      {
        answer: '14362',
        nextId: 'inmultiplycorrectq53',
      },
      {
        answer: "14812",
        nextId: 'inmultiplycorrectq53',
      },
      {
        answer: "14832",
        nextId: 'multiplycorrectq53',
      },
    ],
  },

  multiplycorrectq53: {
  botPrompt: 'Hurray! <strong>14832</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[53],
    },
  ],
  },
  inmultiplycorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14832"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[53],
    },
  ],
  },
  
  //54
  ['multiply'+shuffledNumbersto[53]]: {
  botPrompt: 'What is the product of 555 and 78?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['43610', '43290', "43290","43490"]),
    answers: [
      {
        answer: '43610',
        nextId: 'inmultiplycorrectq54',
      },
      {
        answer: '43290',
        nextId: 'multiplycorrectq54',
      },
      {
        answer: "43290",
        nextId: 'inmultiplycorrectq54',
      },
      {
        answer: "43490",
        nextId: 'inmultiplycorrectq54',
      },
    ],
  },
  
  multiplycorrectq54: {
  botPrompt: 'Hurray! <strong>43290</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[54],
    },
  ],
  },
  inmultiplycorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43290"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[54],
    },
  ],
  },


  //55
  ['multiply'+shuffledNumbersto[54]]: {
  botPrompt: '1,234 - 567 = ?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['657', '667', "677","687"]),
    answers: [
      {
        answer: '657',
        nextId: 'inmultiplycorrectq55',
      },
      {
        answer: '667',
        nextId: 'multiplycorrectq55',
      },
      {
        answer: "677",
        nextId: 'inmultiplycorrectq55',
      },
      {
        answer: "687",
        nextId: 'inmultiplycorrectq55',
      },
    ],
  },
  
  multiplycorrectq55: {
  botPrompt: 'Hurray! <strong>667</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[55],
    },
  ],
  },
  inmultiplycorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"667"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[55],
    },
  ],
  },
  
  //56
  ['multiply'+shuffledNumbersto[55]]: {
    botPrompt: 'What is the product of 37 and 82?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['2924', '3034', "3964","3044"]),
    answers: [
      {
        answer: '2924',
        nextId: 'inmultiplycorrectq56',
      },
      {
        answer: '3034',
        nextId: 'multiplycorrectq56',
      },
      {
        answer: "3964",
        nextId: 'inmultiplycorrectq56',
      },
      {
        answer: "3044",
        nextId: 'inmultiplycorrectq56',
      },
    ],
  },
  multiplycorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3034</strong> 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[56],
      },
    ],
  },
  inmultiplycorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3034"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[56],
      },
    ],
  },

  //57
  ['multiply'+shuffledNumbersto[56]]: {
  botPrompt: 'What is the product of 862 and 52?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['44824', '44664', "44964","44924"]),
    answers: [
      {
        answer: '44824',
        nextId: 'multiplycorrectq57',
      },
      {
        answer: '44664',
        nextId: 'inmultiplycorrectq57',
      },
      {
        answer: "44964",
        nextId: 'inmultiplycorrectq57',
      },
      {
        answer: "44924",
        nextId: 'inmultiplycorrectq57',
      },
    ],
  },
  multiplycorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>44824</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[57],
    },
  ],
  },
  inmultiplycorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44824"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[57],
    },
  ],
  },
  
  //58
  ['multiply'+shuffledNumbersto[57]]: {
  botPrompt: 'What is the product of 756 and 45?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['33820', '33850', "34200","34020"]),
  answers: [
    {
      answer: '33820',
      nextId: 'multiplycorrectq58',
    },
    {
      answer: '33850',
      nextId: 'inmultiplycorrectq58',
    },
    {
      answer: "34200",
      nextId: 'inmultiplycorrectq58',
    },
    {
      answer: "34020",
      nextId: 'inmultiplycorrectq58',
    },
  ],
  },
  multiplycorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>34020</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[58],
    },
  ],
  },
  inmultiplycorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34020"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[58],
    },
  ],
  },
  
  //59
  ['multiply'+shuffledNumbersto[58]]: {
  botPrompt: 'If a rectangle is 49 meters long and 86 meters wide, what is its area? (Use multiplication to solve)',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4214', '2683', "4244","3683"]),
    answers: [
      {
        answer: '4214',
        nextId: 'multiplycorrectq57',
      },
      {
        answer: '2683',
        nextId: 'inmultiplycorrectq57',
      },
      {
        answer: "4244",
        nextId: 'inmultiplycorrectq57',
      },
      {
        answer: "3683",
        nextId: 'inmultiplycorrectq57',
      },
    ],
  },
  multiplycorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4214</strong> Answers! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[59],
    },
  ],
  },
  inmultiplycorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4214"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[59],
    },
  ],
  },
  
  //60
  ['multiply'+shuffledNumbersto[59]]: {
  botPrompt: 'What is the product of 23 and 42?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['656', '966', "876","586"]),
  answers: [
    {
      answer: '656',
      nextId: 'inmultiplycorrectq60',
    },
    {
      answer: '966',
      nextId: 'multiplycorrectq60',
    },
    {
      answer: "876",
      nextId: 'inmultiplycorrectq60',
    },
    {
      answer: "586",
      nextId: 'inmultiplycorrectq60',
    },
  ],
  },
  multiplycorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>966</strong> 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[60],
    },
  ],
  },
  inmultiplycorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"966"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[60],
    },
  ],
  },
  
  //61
  ["multiply"+shuffledNumbersto[60]]: {
    botPrompt: 'What is the product of 365 and 43?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['15490', '15125', "15695","15185"]),
    answers: [
      {
        answer: '15490',
        nextId: 'inmultiplycorrectq61',
      },
      {
        answer: '15125',
        nextId: 'inmultiplycorrectq61',
      },
      {
        answer: "15695",
        nextId: 'multiplycorrectq61',
      },
      {
        answer: "15185",
        nextId: 'inmultiplycorrectq61',
      },
    ],
  },
  multiplycorrectq61: {
    botPrompt: 'Hurray <strong>15695</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[61],
      },
    ],
  },
  inmultiplycorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15695"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[61],
      },
    ],
  },

  //62
  ['multiply'+shuffledNumbersto[61]]: {
    botPrompt: 'What is the product of 456 and 321?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['141276', '146376', "148056","142776"]),
    answers: [
      {
        answer: '141276',
        nextId: 'inmultiplycorrectq62',
      },
      {
        answer: '146376',
        nextId: 'multiplycorrectq62',
      },
      {
        answer: "148056",
        nextId: 'inmultiplycorrectq62',
      },
      {
        answer: "142776",
        nextId: 'inmultiplycorrectq62',
      },
    ],
  },
  
  multiplycorrectq62: {
    botPrompt: 'Hurray! <strong>146376</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[62],
      },
    ],
  },
  inmultiplycorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"146376"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[62],
      },
    ],
  },
  
  //63
  ['multiply'+shuffledNumbersto[62]]: {
  botPrompt: "A store sells 35 boxes of candies each containing 56 candies. How many candies are there in total?",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1390', '1860', "1960","1820"]),
    answers: [
      {
        answer: '1390',
        nextId: 'inmultiplycorrectq63',
      },
      {
        answer: '1860',
        nextId: 'inmultiplycorrectq63',
      },
      {
        answer: "1960",
        nextId: 'multiplycorrectq63',
      },
      {
        answer: "1820",
        nextId: 'inmultiplycorrectq63',
      },
    ],
  },
  
  multiplycorrectq63: {
  botPrompt: 'Hurray! <strong>1960</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[63],
    },
  ],
  },
  inmultiplycorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1960"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[63],
    },
  ],
  },

  //64
  ['multiply'+shuffledNumbersto[63]]: {
  botPrompt: 'A farmer has 62 acres of land on which he grows potatoes. If he can grow 89 potatoes per acre, how many potatoes can he harvest in total?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['5518', '5578', "5608","5458"]),
  answers: [
    {
      answer: '5518',
      nextId: 'multiplycorrectq64',
    },
    {
      answer: '5578',
      nextId: 'inmultiplycorrectq64',
    },
    {
      answer: "5608",
      nextId: 'inmultiplycorrectq64',
    },
    {
      answer: "5458",
      nextId: 'inmultiplycorrectq64',
    },
  ],
  },
  
  multiplycorrectq64: {
  botPrompt: 'Hurray! <strong>5518</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[64],
    },
  ],
  },
  inmultiplycorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5518"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[64],
    },
  ],
  },
  
  //65
  ['multiply'+shuffledNumbersto[64]]: {
  botPrompt: 'A factory produces 456 units of a product each day. If it operates for 23 days in a month, how many units of the product are produced in the month?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['10488', '10256', "10568","10334"]),
    answers: [
      {
        answer: '10488',
        nextId: 'multiplycorrectq65',
      },
      {
        answer: '6786',
        nextId: 'inmultiplycorrectq65',
      },
      {
        answer: "10568",
        nextId: 'inmultiplycorrectq65',
      },
      {
        answer: "10334",
        nextId: 'inmultiplycorrectq65',
      },
    ],
  },
  
  multiplycorrectq65: {
  botPrompt: 'Hurray! <strong>10488</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[65],
    },
  ],
  },
  inmultiplycorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10488"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[65],
    },
  ],
  },
  
  //66
  ['multiply'+shuffledNumbersto[65]]: {
  botPrompt: 'A car travels 347 km in 7 hours. What is the average speed of the car in km/h?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '46', "31","51"]),
  answers: [
    {
      answer: '49',
      nextId: 'multiplycorrectq66',
    },
    {
      answer: '46',
      nextId: 'inmultiplycorrectq66',
    },
    {
      answer: "31",
      nextId: 'inmultiplycorrectq66',
    },
    {
      answer: "51",
      nextId: 'inmultiplycorrectq66',
    },
  ],
  },
  
  multiplycorrectq66: {
  botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[66],
    },
  ],
  },
  inmultiplycorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[66],
    },
  ],
  },
  
  //67
  ['multiply'+shuffledNumbersto[66]]: {
  botPrompt: 'If a packet of pens contains 12 pens and there are 34 packets in a box. How many pens are there in the box?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['384', '408', "420","448"]),
  answers: [
    {
      answer: '384',
      nextId: 'inmultiplycorrectq67',
    },
    {
      answer: '408',
      nextId: 'multiplycorrectq67',
    },
    {
      answer: "420",
      nextId: 'inmultiplycorrectq67',
    },
    {
      answer: "448",
      nextId: 'inmultiplycorrectq67',
    },
  ],
  },
  
  multiplycorrectq67: {
  botPrompt: 'Hurray! <strong>408</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[67],
    },
  ],
  },
  inmultiplycorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"408"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[67],
    },
  ],
  },
  
  
  //68
  ['multiply'+shuffledNumbersto[67]]: {
  botPrompt: 'A school has 12 classrooms and each classroom can accommodate 32 students. How many students can the school accommodate in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['384', '408', "420","448"]),
  answers: [
    {
      answer: '384',
      nextId: 'multiplycorrectq67',
    },
    {
      answer: '408',
      nextId: 'inmultiplycorrectq67',
    },
    {
      answer: "420",
      nextId: 'inmultiplycorrectq67',
    },
    {
      answer: "448",
      nextId: 'inmultiplycorrectq67',
    },
  ],
  },
  
  multiplycorrectq68: {
  botPrompt: 'Hurray! <strong>384</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[68],
    },
  ],
  },
  inmultiplycorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"384"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[68],
    },
  ],
  },
  
  //69
  ['multiply'+shuffledNumbersto[68]]: {
  botPrompt: 'A delivery truck can carry 28 boxes each containing 24 bottles of milk. How many bottles of milk can the truck carry in total?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['506', '672', "630","588"]),
  answers: [
    {
      answer: '506',
      nextId: 'inmultiplycorrectq69',
    },
    {
      answer: '672',
      nextId: 'multiplycorrectq69',
    },
    {
      answer: "630",
      nextId: 'inmultiplycorrectq69',
    },
    {
      answer: "588",
      nextId: 'inmultiplycorrectq69',
    },
  ],
  },
  
  multiplycorrectq69: {
  botPrompt: 'Hurray! <strong>672</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[69],
    },
  ],
  },
  inmultiplycorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"672"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[69],
    },
  ],
  },

  
  //70
  ['multiply'+shuffledNumbersto[69]]: {
  botPrompt: 'What is the product of 25 and 36?'?
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['450', '850', "900","920"]),
  answers: [
    {
      answer: '450',
      nextId: 'multiplycorrectq70',
    },
    {
      answer: '850',
      nextId: 'inmultiplycorrectq70',
    },
    {
      answer: "900",
      nextId: 'inmultiplycorrectq70',
    },
    {
      answer: "920",
      nextId: 'inmultiplycorrectq70',
    },
  ],
  },

  multiplycorrectq70: {
  botPrompt: 'Hurray! <strong>450</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[70],
    },
  ],
  },
  inmultiplycorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"450"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[70],
    },
  ],
  },

  //71
  ['multiply'+shuffledNumbersto[70]]: {
  botPrompt: 'What is the product of 54 and 21?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1134', '1184', "1204","1244"]),
    answers: [
      {
        answer: '1134',
        nextId: 'multiplycorrectq71',
      },
      {
        answer: '1184',
        nextId: 'inmultiplycorrectq71',
      },
      {
        answer: "1204",
        nextId: 'inmultiplycorrectq71',
      },
      {
        answer: "1244",
        nextId: 'inmultiplycorrectq71',
      },
    ],
  },

  multiplycorrectq71: {
  botPrompt: 'Hurray! <strong>1134</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[71],
    },
  ],
  },
  inmultiplycorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1134"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[71],
    },
  ],
  },

  //72
  ['multiply'+shuffledNumbersto[71]]: {
  botPrompt: 'What is the product of 356 and 8?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2848', '2856', "2864","2872"]),
  answers: [
    {
      answer: '2848',
      nextId: 'multiplycorrectq72',
    },
    {
      answer: '2856',
      nextId: 'inmultiplycorrectq72',
    },
    {
      answer: "2864",
      nextId: 'inmultiplycorrectq72',
    },
    {
      answer: "2872",
      nextId: 'inmultiplycorrectq72',
    },
  ],
  },

  multiplycorrectq72: {
  botPrompt: 'Hurray! <strong>2848</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[72],
    },
  ],
  },
  inmultiplycorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2848"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[72],
    },
  ],
  },

  //73
  ['multiply'+shuffledNumbersto[72]]: {
  botPrompt: 'What is the product of 123 and 42?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['5146', '5156', "5166","5176"]),
    answers: [
      {
        answer: '5146',
        nextId: 'inmultiplycorrectq73',
      },
      {
        answer: '5156',
        nextId: 'multiplycorrectq73',
      },
      {
        answer: "5166",
        nextId: 'inmultiplycorrectq73',
      },
      {
        answer: "5176",
        nextId: 'inmultiplycorrectq73',
      },
    ],
  },

  multiplycorrectq73: {
  botPrompt: 'Hurray! <strong>5156</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[73],
    },
  ],
  },
  inmultiplycorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5156"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[73],
    },
  ],
  },

  //74
  ['multiply'+shuffledNumbersto[73]]: {
  botPrompt: 'What is the product of 789 and 5?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['3845', '3954', "4045","4045"]),
  answers: [
    {
      answer: '3845',
      nextId: 'inmultiplycorrectq74',
    },
    {
      answer: '3954',
      nextId: 'multiplycorrectq74',
    },
    {
      answer: "4045",
      nextId: 'inmultiplycorrectq74',
    },
    {
      answer: "4045",
      nextId: 'inmultiplycorrectq74',
    },
  ],
  },

  multiplycorrectq74: {
  botPrompt: 'Hurray! <strong>3954</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[74],
    },
  ],
  },
  inmultiplycorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3954"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[74],
    },
  ],
  },


  //75
  ['multiply'+shuffledNumbersto[74]]: {
  botPrompt: 'If 221 is multiplied by 4, what is the product?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['884', '8844', "8884","88844"]),
    answers: [
      {
        answer: '884',
        nextId: 'multiplycorrectq75',
      },
      {
        answer: '8844',
        nextId: 'inmultiplycorrectq75',
      },
      {
        answer: "8884",
        nextId: 'inmultiplycorrectq75',
      },
      {
        answer: "88844",
        nextId: 'inmultiplycorrectq75',
      },
    ],
  },

  multiplycorrectq75: {
  botPrompt: 'Hurray! <strong>884</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[75],
    },
  ],
  },
  inmultiplycorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"884"</strong>',
  answers: [
    {
      nextId: 'multiply'+shuffledNumbersto[75],
    },
  ],
  },

  //76
  ['multiply'+shuffledNumbersto[75]]: {
    botPrompt: 'What is the product of 132 and 28?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['3696', '3706', "3716","3726"]),
    answers: [
      {
        answer: '3696',
        nextId: 'multiplycorrectq76',
      },
      {
        answer: '3706',
        nextId: 'inmultiplycorrectq76',
      },
      {
        answer: "3716",
        nextId: 'inmultiplycorrectq76',
      },
      {
        answer: "3726",
        nextId: 'inmultiplycorrectq76',
      },
    ],
  },
  multiplycorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3696</strong> 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[76],
      },
    ],
  },
  inmultiplycorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3696"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[76],
      },
    ],
  },

  //77
  ['multiply'+shuffledNumbersto[76]]: {
  botPrompt: 'What is the product of 325 and 6?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1950', '1960', "1970","1980"]),
    answers: [
      {
        answer: '1950',
        nextId: 'multiplycorrectq77',
      },
      {
        answer: '1960',
        nextId: 'inmultiplycorrectq77',
      },
      {
        answer: "1970",
        nextId: 'inmultiplycorrectq77',
      },
      {
        answer: "1980",
        nextId: 'inmultiplycorrectq77',
      },
    ],
  },
  multiplycorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1950</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  inmultiplycorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1950"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },



  //78
  ['multiply'+shuffledNumbersto[77]]: {
    botPrompt: 'What is the product of 427 and 53?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['22229', '22631', "22731","23281"]),
      answers: [
        {
          answer: '229',
          nextId: 'inmultiplycorrectq78',
        },
        {
          answer: '22631',
          nextId: 'inmultiplycorrectq78',
        },
        {
          answer: "22731",
          nextId: 'multiplycorrectq78',
        },
        {
          answer: "23281",
          nextId: 'inmultiplycorrectq78',
        },
      ],
    },
    
    multiplycorrectq78: {
    botPrompt: 'Hurray! <strong>22731</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[78],
      },
    ],
    },
    inmultiplycorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22731"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[78],
      },
    ],
    },
    
    //79
    ['multiply'+shuffledNumbersto[78]]: {
    botPrompt: 'What is the product of 543 and 321?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['174003', '174023', "174043","174063"]),
      answers: [
        {
          answer: '174003',
          nextId: 'multiplycorrectq79',
        },
        {
          answer: '174023',
          nextId: 'inmultiplycorrectq79',
        },
        {
          answer: "174043",
          nextId: 'inmultiplycorrectq79',
        },
        {
          answer: "174063",
          nextId: 'inmultiplycorrectq79',
        },
      ],
    },
    
    multiplycorrectq79: {
    botPrompt: 'Hurray! <strong>174003</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[79],
      },
    ],
    },
    inmultiplycorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"174003"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[79],
      },
    ],
    },
    
    
    //80
    ['multiply'+shuffledNumbersto[79]]: {
    botPrompt: 'If 32 pencils are packed in each box and there are 45 boxes. What is the total number of pencils?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1260', '1420', "1440","1460"]),
      answers: [
        {
          answer: '1260',
          nextId: 'inmultiplycorrectq80',
        },
        {
          answer: '1420',
          nextId: 'inmultiplycorrectq80',
        },
        {
          answer: "1440",
          nextId: 'multiplycorrectq80',
        },
        {
          answer: "1460",
          nextId: 'inmultiplycorrectq80',
        },
      ],
    },
    
    multiplycorrectq80: {
    botPrompt: 'Hurray! <strong>1440</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[80],
      },
    ],
    },
    inmultiplycorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1440"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[80],
      },
    ],
    },
    
    //81
    ['multiply'+shuffledNumbersto[80]]: {
    botPrompt: 'What is the product of 42 and 35?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1470', '1520', "1620","1820"]),
      answers: [
        {
          answer: '1470',
          nextId: 'multiplycorrectq51',
        },
        {
          answer: '1520',
          nextId: 'inmultiplycorrectq51',
        },
        {
          answer: "1620",
          nextId: 'inmultiplycorrectq51',
        },
        {
          answer: "1820",
          nextId: 'inmultiplycorrectq51',
        },
      ],
    },
    
    multiplycorrectq51: {
    botPrompt: 'Hurray! <strong>1470</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[51],
      },
    ],
    },
    inmultiplycorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1470"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[51],
      },
    ],
    },
    
    //82
    ['multiply'+shuffledNumbersto[81]]: {
    botPrompt: 'What is the product of 248 and 7?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1576', '1736', "1746","1766"]),
      answers: [
        {
          answer: '1576',
          nextId: 'inmultiplycorrectq82',
        },
        {
          answer: '1736',
          nextId: 'multiplycorrectq82',
        },
        {
          answer: "1746",
          nextId: 'inmultiplycorrectq82',
        },
        {
          answer: "1766",
          nextId: 'inmultiplycorrectq82',
        },
      ],
    },
    
    multiplycorrectq82: {
    botPrompt: 'Hurray! <strong>1736</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[82],
      },
    ],
    },
    inmultiplycorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1736"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[82],
      },
    ],
    },
    
    //83
    ['multiply'+shuffledNumbersto[82]]: {
    botPrompt: 'If 7296 pens are packed in 54 boxes. How many pens are in each box?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['128', '135', "138","140"]),
      answers: [
        {
          answer: '128',
          nextId: 'inmultiplycorrectq83',
        },
        {
          answer: '135',
          nextId: 'multiplycorrectq83',
        },
        {
          answer: "138",
          nextId: 'inmultiplycorrectq83',
        },
        {
          answer: "140",
          nextId: 'inmultiplycorrectq83',
        },
      ],
    },
  
    multiplycorrectq83: {
    botPrompt: 'Hurray! <strong>135</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[83],
      },
    ],
    },
    inmultiplycorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"135"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[83],
      },
    ],
    },
    
    //84
    ['multiply'+shuffledNumbersto[83]]: {
    botPrompt: 'Find the product of 89 and 71',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['6299', '6479', "6319","6679"]),
      answers: [
        {
          answer: '6299',
          nextId: 'inmultiplycorrectq84',
        },
        {
          answer: '6479',
          nextId: 'inmultiplycorrectq84',
        },
        {
          answer: "6319",
          nextId: 'multiplycorrectq84',
        },
        {
          answer: "6679",
          nextId: 'inmultiplycorrectq84',
        },
      ],
    },
    
    multiplycorrectq84: {
    botPrompt: 'Hurray! <strong>6319</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[84],
      },
    ],
    },
    inmultiplycorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6319"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[84],
      },
    ],
    },
    
    
    //85
    ['multiply'+shuffledNumbersto[84]]: {
    botPrompt: 'What is the value of 562 x 23?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['12976', '12986', "12996","13006"]),
      answers: [
        {
          answer: '12976',
          nextId: 'inmultiplycorrectq85',
        },
        {
          answer: '12986',
          nextId: 'multiplycorrectq85',
        },
        {
          answer: "12996",
          nextId: 'inmultiplycorrectq85',
        },
        {
          answer: "13006",
          nextId: 'inmultiplycorrectq85',
        },
      ],
    },
    
    multiplycorrectq85: {
    botPrompt: 'Hurray! <strong>12986</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[85],
      },
    ],
    },
    inmultiplycorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12986"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[85],
      },
    ],
    },
    
    //86
    ['multiply'+shuffledNumbersto[85]]: {
      botPrompt: 'The length, breadth, and height of a box are 12 cm, 15 cm, and 20 cm respectively. What is its volume?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['3600', '4200', "4500","5400"]),
      answers: [
        {
          answer: '3600',
          nextId: 'multiplycorrectq86',
        },
        {
          answer: '4200',
          nextId: 'inmultiplycorrectq86',
        },
        {
          answer: "4500",
          nextId: 'inmultiplycorrectq86',
        },
        {
          answer: "5400",
          nextId: 'inmultiplycorrectq86',
        },
      ],
    },
    multiplycorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3600</strong> 😎',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[86],
        },
      ],
    },
    inmultiplycorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3600"</strong>',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[86],
        },
      ],
    },
  
    //87
    ['multiply'+shuffledNumbersto[86]]: {
    botPrompt: 'What is the product of 345 and 122?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['42090', '42120', "42180","42210"]),
      answers: [
        {
          answer: '42090',
          nextId: 'multiplycorrectq87',
        },
        {
          answer: '42120',
          nextId: 'inmultiplycorrectq87',
        },
        {
          answer: "42180",
          nextId: 'inmultiplycorrectq87',
        },
        {
          answer: "42210",
          nextId: 'inmultiplycorrectq87',
        },
      ],
    },
    multiplycorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>42090</strong> 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[87],
      },
    ],
    },
    inmultiplycorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42090"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[87],
      },
    ],
    },
    
    //88
    ['multiply'+shuffledNumbersto[87]]: {
    botPrompt: 'A trader sold 85 bags of wheat at INR 2700 per bag. How much money did he get?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['229500', '232500', "234500","235700"]),
    answers: [
      {
        answer: '229500',
        nextId: 'multiplycorrectq88',
      },
      {
        answer: '232500',
        nextId: 'inmultiplycorrectq88',
      },
      {
        answer: "234500",
        nextId: 'inmultiplycorrectq88',
      },
      {
        answer: "235700",
        nextId: 'inmultiplycorrectq88',
      },
    ],
    },
    multiplycorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>229500</strong> 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[88],
      },
    ],
    },
    inmultiplycorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"229500"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[88],
      },
    ],
    },
    
    //89
    ['multiply'+shuffledNumbersto[88]]: {
    botPrompt: 'What is the value of 876 x 102?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['89052', '89152', "89252","89352"]),
      answers: [
        {
          answer: '89052',
          nextId: 'inmultiplycorrectq87',
        },
        {
          answer: '89152',
          nextId: 'multiplycorrectq87',
        },
        {
          answer: "89252",
          nextId: 'inmultiplycorrectq87',
        },
        {
          answer: "89352",
          nextId: 'inmultiplycorrectq87',
        },
      ],
    },
    multiplycorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>89152</strong> Answers! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[89],
      },
    ],
    },
    inmultiplycorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"89152"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[89],
      },
    ],
    },
    
    //90
    ['multiply'+shuffledNumbersto[89]]: {
    botPrompt: 'What is the product of 34 and 56?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1878', '1904', "2028","2144"]),
    answers: [
      {
        answer: '1878',
        nextId: 'inmultiplycorrectq90',
      },
      {
        answer: '1904',
        nextId: 'multiplycorrectq90',
      },
      {
        answer: "2028",
        nextId: 'inmultiplycorrectq90',
      },
      {
        answer: "2144",
        nextId: 'inmultiplycorrectq90',
      },
    ],
    },
    multiplycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>1904</strong> 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[90],
      },
    ],
    },
    inmultiplycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1904"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[90],
      },
    ],
    },
    
    //91
    ["multiply"+shuffledNumbersto[90]]: {
      botPrompt: 'What is the product of 456 and 37?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['16872', '16892', "16983","16894"]),
      answers: [
        {
          answer: '16872',
          nextId: 'multiplycorrectq91',
        },
        {
          answer: '16892',
          nextId: 'inmultiplycorrectq91',
        },
        {
          answer: "16983",
          nextId: 'inmultiplycorrectq91',
        },
        {
          answer: "16894",
          nextId: 'inmultiplycorrectq91',
        },
      ],
    },
    multiplycorrectq91: {
      botPrompt: 'Hurray <strong>16872</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[91],
        },
      ],
    },
    inmultiplycorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16872"</strong>',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[91],
        },
      ],
    },
    
    //92
    ['multiply'+shuffledNumbersto[91]]: {
      botPrompt: 'If a school has 243 students and each classroom can accommodate 18 students, how many classrooms will be needed?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['13', '14', "15","16"]),
      answers: [
        {
          answer: '13',
          nextId: 'inmultiplycorrectq92',
        },
        {
          answer: '14',
          nextId: 'multiplycorrectq92',
        },
        {
          answer: "15",
          nextId: 'inmultiplycorrectq92',
        },
        {
          answer: "16",
          nextId: 'inmultiplycorrectq92',
        },
      ],
    },
    
    multiplycorrectq92: {
      botPrompt: 'Hurray! <strong>14</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[92],
        },
      ],
    },
    inmultiplycorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[92],
        },
      ],
    },
    
    //93
    ['multiply'+shuffledNumbersto[92]]: {
    botPrompt: "The price of a pen is ₹25 and the cost of a pencil is ₹15. If Ravi buys 12 pens and 15 pencils, what is the total cost of his purchase?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['₹525', '₹600', "₹675","₹720"]),
      answers: [
        {
          answer: '₹525',
          nextId: 'multiplycorrectq93',
        },
        {
          answer: '₹600',
          nextId: 'inmultiplycorrectq93',
        },
        {
          answer: "₹675",
          nextId: 'inmultiplycorrectq93',
        },
        {
          answer: "₹720",
          nextId: 'inmultiplycorrectq93',
        },
      ],
    },
    
    multiplycorrectq93: {
    botPrompt: 'Hurray! <strong>₹525</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[93],
      },
    ],
    },
    inmultiplycorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"₹525"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[93],
      },
    ],
    },
  
    //94
    ['multiply'+shuffledNumbersto[93]]: {
    botPrompt: 'If 6789 is multiplied by 11, what is the result?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['74679', '74689', "74579","74579"]),
    answers: [
      {
        answer: '74679',
        nextId: 'multiplycorrectq94',
      },
      {
        answer: '74689',
        nextId: 'inmultiplycorrectq94',
      },
      {
        answer: "74579",
        nextId: 'inmultiplycorrectq94',
      },
      {
        answer: "74579",
        nextId: 'inmultiplycorrectq94',
      },
    ],
    },
    
    multiplycorrectq94: {
    botPrompt: 'Hurray! <strong>74679</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[94],
      },
    ],
    },
    inmultiplycorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"74679"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[94],
      },
    ],
    },
    
    //95
    ['multiply'+shuffledNumbersto[94]]: {
    botPrompt: 'What is the product of 789 and 234?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['184626', '184326', "184236","168526"]),
      answers: [
        {
          answer: '184626',
          nextId: 'multiplycorrectq95',
        },
        {
          answer: '184326',
          nextId: 'inmultiplycorrectq95',
        },
        {
          answer: "184236",
          nextId: 'inmultiplycorrectq95',
        },
        {
          answer: "168526",
          nextId: 'inmultiplycorrectq95',
        },
      ],
    },
    
    multiplycorrectq95: {
    botPrompt: 'Hurray! <strong>184626</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[95],
      },
    ],
    },
    inmultiplycorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"184626"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[95],
      },
    ],
    },
    
    //96
    ['multiply'+shuffledNumbersto[95]]: {
    botPrompt: 'A box of apples contains 25 apples. If a grocery store orders 72 boxes of apples, how many apples will they receive?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1800', '1825', "1850","1875"]),
    answers: [
      {
        answer: '1800',
        nextId: 'multiplycorrectq96',
      },
      {
        answer: '1825',
        nextId: 'inmultiplycorrectq96',
      },
      {
        answer: "1850",
        nextId: 'inmultiplycorrectq96',
      },
      {
        answer: "1875",
        nextId: 'inmultiplycorrectq96',
      },
    ],
    },
    
    multiplycorrectq96: {
    botPrompt: 'Hurray! <strong>1800</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[96],
      },
    ],
    },
    inmultiplycorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1800"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[96],
      },
    ],
    },

    //97
    ['multiply'+shuffledNumbersto[96]]: {
    botPrompt: 'What is the product of 345 and 56?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['19320', '19420', "19520","19620"]),
    answers: [
      {
        answer: '19320',
        nextId: 'multiplycorrectq97',
      },
      {
        answer: '19420',
        nextId: 'inmultiplycorrectq97',
      },
      {
        answer: "19520",
        nextId: 'inmultiplycorrectq97',
      },
      {
        answer: "19620",
        nextId: 'inmultiplycorrectq97',
      },
    ],
    },

    multiplycorrectq97: {
    botPrompt: 'Hurray! <strong>19320</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[97],
      },
    ],
    },
    inmultiplycorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19320"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[97],
      },
    ],
    },


    //98
    ['multiply'+shuffledNumbersto[97]]: {
    botPrompt: 'What is the product of 99 and 101?',
    type: RTypes.TRANSFORMED_TEXT,


    input: selectField(['9999', '10001', "10099","10101"]),
      answers: [
        {
          answer: '9999',
          nextId: 'inmultiplycorrectq98',
        },
        {
          answer: '10001',
          nextId: 'multiplycorrectq98',
        },
        {
          answer: "10099",
          nextId: 'inmultiplycorrectq98',
        },
        {
          answer: "10101",
          nextId: 'inmultiplycorrectq98',
        },
      ],
    },

    multiplycorrectq98: {
    botPrompt: 'Hurray! <strong>10001</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[98],
      },
    ],
    },
    inmultiplycorrectq98: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10001"</strong>',
    answers: [
      {
        nextId: 'multiply'+shuffledNumbersto[98],
      },
    ],
    },
    
    //99
    ['multiply'+shuffledNumbersto[98]]: {
      botPrompt: 'If a tank can hold 4500 liters of water, how many tanks are needed to hold 36,000 liters of water?',
      type: RTypes.TRANSFORMED_TEXT,
  

      input: selectField(['8', '9', "10","11"]),
        answers: [
          {
            answer: '8',
            nextId: 'multiplycorrectq99',
          },
          {
            answer: '9',
            nextId: 'inmultiplycorrectq99',
          },
          {
            answer: "10",
            nextId: 'inmultiplycorrectq99',
          },
          {
            answer: "11",
            nextId: 'inmultiplycorrectq99',
          },
        ],
      },
  
      multiplycorrectq99: {
      botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[99],
        },
      ],
      },
      inmultiplycorrectq99: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
      answers: [
        {
          nextId: 'multiply'+shuffledNumbersto[99],
        },
      ],
      },


  //endmultiplyletter
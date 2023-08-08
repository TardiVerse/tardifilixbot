["consonants"+shuffledNumbersthree[0]]: {
  botPrompt: ' Identify the consonants in "apple". ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['a,p,l', 'a,p,e', "a,p,o", "a,p,c"]),
  answers: [
    {
      answer: 'a,p,l',
      nextId: 'consonantscorrect',
    },
    {
      answer: 'a,p,e',
      nextId: 'inconsonantscorrect',
    },
    {
      answer: "a,p,o",
      nextId: 'inconsonantscorrect',
    },
    {
      answer: "a,p,c",
      nextId: 'inconsonantscorrect',
    },
  ],
},
consonantscorrect: {
  botPrompt: 'Hurray <strong>a,p,l</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[1],
    },
  ],
},
inconsonantscorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a,p,l"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[1],
    },
  ],
},

['consonants'+shuffledNumbersthree[1]]: {
  botPrompt: 'What are the consonants in "elephant"?',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['l, p, h, n, t', 'l, p, h, n, t,e', "l, p, h, n, t,a", "l, p, h, n, t"]),
  answers: [
    {
      answer: 'l, p, h, n, t',
      nextId: 'consonantscorrectq2',
    },
    {
      answer: 'l, p, h, n, t,e',
      nextId: 'inconsonantscorrectq2',
    },
    {
      answer: "l, p, h, n, t,a",
      nextId: 'inconsonantscorrectq2',
    },
    {
      answer: "l, p, h, n, t",
      nextId: 'inconsonantscorrectq2',
    },
  ],
},

consonantscorrectq2: {
  botPrompt: 'Hurray! <strong>l, p, h, n, t</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[2],
    },
  ],
},
inconsonantscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"l, p, h, n, t"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[2],
    },
  ],
},

//3
['consonants'+shuffledNumbersthree[2]]: {
botPrompt: 'Identify the consonants in "cat".',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['c', 't', "a", "Both A and B"]),
  answers: [
    {
      answer: 'c',
      nextId: 'inonsonantscorrectq3',
    },
    {
      answer: 't',
      nextId: 'inconsonantscorrectq3',
    },
    {
      answer: "a",
      nextId: 'inconsonantscorrectq3',
    },
    {
      answer: "Both A and B",
      nextId: 'consonantscorrectq3',
    },
  ],
},

consonantscorrectq3: {
botPrompt: 'Hurray! <strong>Both A and B</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[3],
  },
],
},
inconsonantscorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Both A and B"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[3],
  },
],
},

//4
['consonants'+shuffledNumbersthree[3]]: {
botPrompt: 'What are the consonants in "rainbow"? ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['r, n, b, w', 'r, n, b, a', "r, n, b, i", "r, n, b, w,o"]),
answers: [
  {
    answer: 'r, n, b, w',
    nextId: 'consonantscorrectq4',
  },
  {
    answer: 'r, n, b, a',
    nextId: 'inconsonantscorrectq4',
  },
  {
    answer: "r, n, b, i",
    nextId: 'inconsonantscorrectq4',
  },
  {
    answer: "r, n, b, w,o",
    nextId: 'inconsonantscorrectq4',
  },
],
},

consonantscorrectq4: {
botPrompt: 'Hurray! <strong>r, n, b, w</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[4],
  },
],
},
inconsonantscorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"r, n, b, w"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[4],
  },
],
},

//5
['consonants'+shuffledNumbersthree[4]]: {
botPrompt: 'Identify the consonants in "frog".? ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['f, r, g', 'f, r, o', "f, o, g","f, r, g,o"]),
answers: [
  {
    answer: 'f, r, g',
    nextId: 'consonantscorrectq5',
  },
  {
    answer: 'f, r, o',
    nextId: 'inconsonantscorrectq5',
  },
  {
    answer: "f, o, g",
    nextId: 'inconsonantscorrectq5',
  },
  {
    answer: "f, r, g,o",
    nextId: 'inconsonantscorrectq5',
  },
],
},

consonantscorrectq5: {
botPrompt: 'Hurray! <strong>f, r, g</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[5],
  },
],
},
inconsonantscorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"f, r, g"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[5],
  },
],
},

//6
['consonants'+shuffledNumbersthree[5]]: {
botPrompt: ' What are the consonants in "pencil"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['p, n, c, e', 'p, n, c, i', "p, n, c, l","p, n, c"]),
answers: [
  {
    answer: 'p, n, c, e',
    nextId: 'inconsonantscorrectq6',
  },
  {
    answer: 'p, n, c, i',
    nextId: 'inconsonantscorrectq6',
  },
  {
    answer: "p, n, c, l",
    nextId: 'consonantscorrectq6',
  },
  {
    answer: "p, n, c",
    nextId: 'inconsonantscorrectq6',
  },
],
},

consonantscorrectq6: {
botPrompt: 'Hurray! <strong>p, n, c, l</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[6],
  },
],
},
inconsonantscorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"p, n, c, l"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[6],
  },
],
},

//7
['consonants'+shuffledNumbersthree[6]]: {
botPrompt: 'What are the consonants in "giraffe"? ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['g, r, e', 'g, r, f', "g, r, i","g, r, a"]),
answers: [
  {
    answer: 'g, r, e',
    nextId: 'inconsonantscorrectq7',
  },
  {
    answer: 'g, r, f',
    nextId: 'consonantscorrectq7',
  },
  {
    answer: "g, r, i",
    nextId: 'inconsonantscorrectq7',
  },
  {
    answer: "g, r, a",
    nextId: 'inconsonantscorrectq7',
  },
],
},

consonantscorrectq7: {
botPrompt: 'Hurray! <strong>g, r, f</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[7],
  },
],
},
inconsonantscorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"g, r, f"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[7],
  },
],
},


//8
['consonants'+shuffledNumbersthree[7]]: {
botPrompt: 'What are the consonants in "flower"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['f, l, w, r', 'f, l, w, o', "f, l, w, e","f, l, w, r,o"]),
answers: [
  {
    answer: 'f, l, w, r',
    nextId: 'consonantscorrectq8',
  },
  {
    answer: 'f, l, w, o',
    nextId: 'inconsonantscorrectq8',
  },
  {
    answer: "f, l, w, e",
    nextId: 'inconsonantscorrectq8',
  },
  {
    answer: "f, l, w, r,o",
    nextId: 'inconsonantscorrectq8',
  },
],
},

consonantscorrectq8: {
botPrompt: 'Hurray! <strong>f, l, w, r</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[8],
  },
],
},
inconsonantscorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"f, l, w, r"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[8],
  },
],
},

//9
['consonants'+shuffledNumbersthree[8]]: {
botPrompt: 'What are the consonants in "basket"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['b, s, k, a', 'b, s, k, e', "b, s, k, t","b, s, k, o"]),
answers: [
  {
    answer: 'b, s, k, a',
    nextId: 'inconsonantscorrectq9',
  },
  {
    answer: 'b, s, k, e',
    nextId: 'inconsonantscorrectq9',
  },
  {
    answer: "b, s, k, t",
    nextId: 'consonantscorrectq9',
  },
  {
    answer: "b, s, k, o",
    nextId: 'inconsonantscorrectq9',
  },
],
},

consonantscorrectq9: {
botPrompt: 'Hurray! <strong>b, s, k, t</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[9],
  },
],
},
inconsonantscorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"b, s, k, t"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[9],
  },
],
},


//10
['consonants'+shuffledNumbersthree[9]]: {
botPrompt: ' Identify the consonants in "carrot".?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['c, r, p', 'c, r, t', "c, r, o","c, r, a"]),
answers: [
  {
    answer: 'c, r, p',
    nextId: 'inconsonantscorrectq10',
  },
  {
    answer: 'c, r, t',
    nextId: 'consonantscorrectq10',
  },
  {
    answer: "c, r, o",
    nextId: 'inconsonantscorrectq10',
  },
  {
    answer: "c, r, a",
    nextId: ' inconsonantscorrectq10',
  },
],
},

consonantscorrectq10: {
botPrompt: 'Hurray! <strong>c, r, t</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[10],
  },
],
},
inconsonantscorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"c, r, t"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[10],
  },
],
},

//11
['consonants'+shuffledNumbersthree[10]]: {
botPrompt: 'What are the consonants in "smile"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['s, m, l', 'o, m, l', "s, m, i","s, m, e"]),
answers: [
{
    answer: 's, m, l',
    nextId: 'consonantscorrectq11',
  },
  {
    answer: 'o, m, l',
    nextId: 'inconsonantscorrectq11',
  },
  {
    answer: "s, m, i",
    nextId: 'inconsonantscorrectq11',
  },
  {
    answer: "s, m, e",
    nextId: 'inconsonantscorrectq11',
  },
],
},

consonantscorrectq11: {
botPrompt: 'Hurray! <strong>s, m, l</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[11],
  },
],
},
inconsonantscorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"s, m, l"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[11],
  },
],
},

//12
['consonants'+shuffledNumbersthree[11]]: {
botPrompt: ' What are the consonants in "cheesec, h, e',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['c, h, e', 'c, h, s,e', "c, h, o","c, h, s"]),
answers: [
  {
    answer: 'c, h, e',
    nextId: 'inconsonantscorrectq12',
  },
  {
    answer: 'c, h, s,e',
    nextId: 'inconsonantscorrectq12',
  },
  {
    answer: "c, h, o",
    nextId: 'inconsonantscorrectq12',
  },
  {
    answer: "c, h, s",
    nextId: 'consonantscorrectq12',
  },
],
},

consonantscorrectq12: {
botPrompt: 'Hurray! <strong>c, h, s</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[12],
  },
],
},
inconsonantscorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"c, h, s"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[12],
  },
],
},

//13
['consonants'+shuffledNumbersthree[12]]: {
botPrompt: 'What are the consonants in "butterfly"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['b, t, r, f, l,y', 'b, t, r, f, l,u', "b, t, r, f, l,e","b, t, r, f, l,z"]),
answers: [
  {
    answer: 'b, t, r, f, l,y',
    nextId: 'consonantscorrectq13',
  },
  {
    answer: 'b, t, r, f, l,u',
    nextId: 'inconsonantscorrectq13',
  },
  {
    answer: "b, t, r, f, l,e",
    nextId: 'inconsonantscorrectq13',
  },
  {
    answer: "b, t, r, f, l,z",
    nextId: 'inconsonantscorrectq13',
  },
],
},

consonantscorrectq13: {
botPrompt: 'Hurray! <strong>b, t, r, f, l,y</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[13],
  },
],
},
inconsonantscorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"b, t, r, f, l,y"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[13],
  },
],
},

//14
['consonants'+shuffledNumbersthree[13]]: {
botPrompt: 'What are the consonants in "basketball"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['b, s, k, t, l,a', 'b, s, k, t, l,e', "b, s, k, t, l,p","b, s, k, t, l"]),
answers: [
  {
    answer: 'b, s, k, t, l,a',
    nextId: 'inconsonantscorrectq14',
  },
  {
    answer: 'b, s, k, t, l,e',
    nextId: 'inconsonantscorrectq14',
  },
  {
    answer: "b, s, k, t, l,p",
    nextId: 'inconsonantscorrectq14',
  },
  {
    answer: "b, s, k, t, l",
    nextId: 'consonantscorrectq14',
  },
],
},

consonantscorrectq14: {
botPrompt: 'Hurray! <strong>b, s, k, t, l</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[14],
  },
],
},
inconsonantscorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"b, s, k, t, l"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[14],
  },
],
},


//15
['consonants'+shuffledNumbersthree[14]]: {
botPrompt: 'What are the consonants in "lemon"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['l, m, e', 'l, m, o', "l, m, n","l, m, e"]),
answers: [
  {
    answer: 'l, m, e',
    nextId: 'inconsonantscorrectq15',
  },
  {
    answer: 'l, m, o',
    nextId: 'inconsonantscorrectq15',
  },
  {
    answer: "l, m, n",
    nextId: 'consonantscorrectq15',
  },
  {
    answer: "l, m, e",
    nextId: 'inconsonantscorrectq15',
  },
],
},

consonantscorrectq15: {
botPrompt: 'Hurray! <strong>l, m, n</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[15],
  },
],
},
inconsonantscorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"l, m, n"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[15],
  },
],
},

//16
['consonants'+shuffledNumbersthree[15]]: {
  botPrompt: 'Identify the consonants in "elephant".',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['l, p, h, n, t', 'l, p, h, n, e', "l, p, h, n, w","l, p, h, n, a"]),
  answers: [
    {
      answer: 'l, p, h, n, t',
      nextId: 'consonantscorrectq16',
    },
    {
      answer: 'l, p, h, n, e',
      nextId: 'inconsonantscorrectq16',
    },
    {
      answer: "l, p, h, n, w",
      nextId: 'inconsonantscorrectq16',
    },
    {
      answer: "l, p, h, n, a",
      nextId: 'inconsonantscorrectq16',
    },
  
  ],
},
consonantscorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>l, p, h, n, t</strong> 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[16],
    },
  ],
},
inconsonantscorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"l, p, h, n, t"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[16],
    },
  ],
},

//17
['consonants'+shuffledNumbersthree[16]]: {
botPrompt: 'What are the consonants in "mountain"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['m, n, t, o', 'm, n, t, e', "m, n, t, i","m, n, t, n"]),
answers: [
  {
    answer: 'm, n, t, o',
    nextId: 'inconsonantscorrectq17',
  },
  {
    answer: 'm, n, t, e',
    nextId: 'inconsonantscorrectq17',
  },
  {
    answer: "m, n, t, i",
    nextId: 'inconsonantscorrectq17',
  },
  {
    answer: "m, n, t, n",
    nextId: 'consonantscorrectq17',
  },
 
],
},
consonantscorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>m, n, t, n</strong> 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[17],
  },
],
},
inconsonantscorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"m, n, t, n"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[17],
  },
],
},

//18
['consonants'+shuffledNumbersthree[17]]: {
botPrompt: 'Identify the consonants in "triangle".?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['t, r, n, g, a', 't, r, n, g, e', "t, r, n, g, l","t, r, n, g, l,i"]),
answers: [
  {
    answer: 't, r, n, g, a',
    nextId: 'inconsonantscorrectq18',
  },
  {
    answer: 't, r, n, g, e',
    nextId: 'inconsonantscorrectq18',
  },
  {
    answer: "t, r, n, g, l",
    nextId: 'consonantscorrectq18',
  },
  {
    answer: "t, r, n, g, l,i",
    nextId: 'inconsonantscorrectq18',
  },
 
],
},
consonantscorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>t, r, n, g, l</strong> 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[18],
  },
],
},
inconsonantscorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"t, r, n, g, l"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[18],
  },
],
},

//19
['consonants'+shuffledNumbersthree[18]]: {
botPrompt: 'What are the consonants in "computer"? ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['c, m, p, t, r', 'c, m, p, t, r,e', "c, m, p, t, r,a","c, m, p, t, r,p"]),
answers: [
  {
    answer: 'c, m, p, t, r',
    nextId: 'consonantscorrectq19',
  },
  {
    answer: 'c, m, p, t, r,e',
    nextId: 'inconsonantscorrectq19',
  },
  {
    answer: "c, m, p, t, r,a",
    nextId: 'inconsonantscorrectq19',
  },
  {
    answer: "c, m, p, t, r,p",
    nextId: 'inconsonantscorrectq19',
  },

],
},
consonantscorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>c, m, p, t, r</strong> Answers! 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[19],
  },
],
},
inconsonantscorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"c, m, p, t, r"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[19],
  },
],
},

//20
['consonants'+shuffledNumbersthree[19]]: {
botPrompt: 'What are the consonants in "guitar"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['g, t, r', 'g, t, i', "g, t, a","g, t, u"]),
answers: [
  {
    answer: 'g, t, r',
    nextId: 'consonantscorrectq20',
  },
    answer: 'g, t, i',
    nextId: 'inconsonantscorrectq20',
  },
  {
    answer: "g, t, a",
    nextId: 'inconsonantscorrectq20',
  },
  {
    answer: "g, t, u",
    nextId: 'inconsonantscorrectq20',
  },

],
},
consonantscorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>g, t, r</strong> 😎',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[20],
  },
],
},
inconsonantscorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"g, t, r"</strong>',
answers: [
  {
    nextId: 'consonants'+shuffledNumbersthree[20],
  },
],
},

//21
['consonants'+shuffledNumbersthree[20]]: {
  botPrompt: 'What are the consonants in "science"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['c, n, c,e', 'c, n, c,s', "c, n, c,i","c, n, c,d"]),
  answers: [
    {
      answer: 'c, n, c,e',
      nextId: 'inconsonantscorrectq21',
    },
    {
      answer: 'c, n, c,s',
      nextId: 'consonantscorrectq21',
    },
    {
      answer: "c, n, c,i",
      nextId: 'inconsonantscorrectq21',
    },
    {
      answer: "c, n, c,d",
      nextId: 'inconsonantscorrectq21',
    },
  
  ],
  },
  consonantscorrectq21: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>c, n, c,s</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[21],
    },
  ],
  },
  inconsonantscorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"c, n, c,s"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[21],
    },
  ],
  },

  //22
['consonants'+shuffledNumbersthree[21]]: {
  botPrompt: 'Identify the consonants in "ocean".?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['c, n,a', 'c, n', "c, n,e","c,n,o"]),
  answers: [
    {
      answer: 'c, n,a',
      nextId: 'inconsonantscorrectq22',
    },
    {
      answer: 'c, n',
      nextId: 'inconsonantscorrectq22',
    },
    {
      answer: "c, n,e",
      nextId: 'inconsonantscorrectq22',
    },
    {
      answer: "c,n,o",
      nextId: 'consonantscorrectq22',
    },
  
  ],
  },
  consonantscorrectq22: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>c,n,o</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[22],
    },
  ],
  },
  inconsonantscorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"c,n,o"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[22],
    },
  ],
  },

  //23
['consonants'+shuffledNumbersthree[22]]: {
  botPrompt: 'What are the consonants in "sentence"? ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['s, n, t, c,e', 's, n, t, c,o', "s, n, t, c,i","s, n, t, c"]),
  answers: [
    {
      answer: 's, n, t, c,e',
      nextId: 'inconsonantscorrectq23',
    },
    {
      answer: 's, n, t, c,o',
      nextId: 'inconsonantscorrectq23',
    },
    {
      answer: "s, n, t, c,i",
      nextId: 'inconsonantscorrectq23',
    },
    {
      answer: "s, n, t, c",
      nextId: 'consonantscorrectq23',
    },
  
  ],
  },
  consonantscorrectq23: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>s, n, t, c</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[23],
    },
  ],
  },
  inconsonantscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"s, n, t, c"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[23],
    },
  ],
  },

  //24
['consonants'+shuffledNumbersthree[23]]: {
  botPrompt: 'Identify the consonants in "eleven".? ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['l, v, n,e', 'l, v, n,o', "l, v, n,a","l, v, n"]),
  answers: [
    {
      answer: 'l, v, n,e',
      nextId: 'inconsonantscorrectq24',
    },
    {
      answer: 'l, v, n,o',
      nextId: 'inconsonantscorrectq24',
    },
    {
      answer: "l, v, n,a",
      nextId: 'inconsonantscorrectq24',
    },
    {
      answer: "l, v, n",
      nextId: 'consonantscorrectq24',
    },
  
  ],
  },
  consonantscorrectq24: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>l, v, n</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[24],
    },
  ],
  },
  inconsonantscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"l, v, n"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[24],
    },
  ],
  },

  //25
['consonants'+shuffledNumbersthree[24]]: {
  botPrompt: 'What are the consonants in "brother"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['b, r, t, h,o', 'b, r, t, h,e', "b, r, t, h,i","b, r, t, h"]),
  answers: [
    {
      answer: 'b, r, t, h,o',
      nextId: 'inconsonantscorrectq25',
    },
    {
      answer: 'b, r, t, h,e',
      nextId: 'inconsonantscorrectq25',
    },
    {
      answer: "b, r, t, h,i",
      nextId: 'inconsonantscorrectq25',
    },
    {
      answer: "b, r, t, h",
      nextId: 'consonantscorrectq25',
    },
  
  ],
  },
  consonantscorrectq25: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>b, r, t, h</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[25],
    },
  ],
  },
  inconsonantscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"b, r, t, h"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[25],
    },
  ],
  },

  //26
['consonants'+shuffledNumbersthree[25]]: {
  botPrompt: 'What are the consonants in "diamond"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['d, m, n, d,o', 'd, m, n, d,i', "d, m, n, d","d, m, n, d,a"]),
  answers: [
    {
      answer: 'd, m, n, d,o',
      nextId: 'inconsonantscorrectq26',
    },
    {
      answer: 'd, m, n, d,i',
      nextId: 'inconsonantscorrectq26',
    },
    {
      answer: "d, m, n, d",
      nextId: 'consonantscorrectq26',
    },
    {
      answer: "d, m, n, d,a",
      nextId: 'inconsonantscorrectq26',
    },
  
  ],
  },
  consonantscorrectq26: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>d, m, n, d</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersto26],
    },
  ],
  },
  inconsonantscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"d, m, n, d"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersto26],
    },
  ],
  },


//27
['consonants'+shuffledNumbersthree[26]]: {
  botPrompt: 'Identify the consonants in "jungle".? ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['j, n, g, l,e', 'j, n, g, l,u', "j, n, g, l","j, n, g, l,a"]),
  answers: [
    {
      answer: 'j, n, g, l,e',
      nextId: 'inconsonantscorrectq27',
    },
    {
      answer: 'j, n, g, l,u',
      nextId: 'inconsonantscorrectq27',
    },
    {
      answer: "j, n, g, l",
      nextId: 'consonantscorrectq27',
    },
    {
      answer: "j, n, g, l,a",
      nextId: 'inconsonantscorrectq27',
    },
  
  ],
  },
  consonantscorrectq27: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>j, n, g, l</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersto27],
    },
  ],
  },
  inconsonantscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"j, n, g, l"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersto27],
    },
  ],
  },

  //28
['consonants'+shuffledNumbersthree[27]]: {
  botPrompt: 'What are the consonants in "teacher"?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['t, c, h, r', 't, c, h, r,e', "t, c, h, r,a","t, c, h, r,u"]),
  answers: [
    {
      answer: 't, c, h, r',
      nextId: 'consonantscorrectq28',
    },
    {
      answer: 't, c, h, r,e',
      nextId: 'inconsonantscorrectq28',
    },
    {
      answer: "t, c, h, r,a",
      nextId: 'inconsonantscorrectq28',
    },
    {
      answer: "t, c, h, r,u",
      nextId: 'inconsonantscorrectq28',
    },
  
  ],
  },
  consonantscorrectq28: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>t, c, h, r</strong> Answers! 😎',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[28],
    },
  ],
  },
  inconsonantscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"t, c, h, r"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[28],
    },
  ],
  },

  //29
['consonants'+shuffledNumbersthree[28]]: {
  botPrompt: 'Identify the consonants in "village".?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['v, l, g,i', 'v, l, g,o', "v, l, g,a","v, l, g"]),
  answers: [
    {
      answer: 'v, l, g,i',
      nextId: 'inconsonantscorrectq29',
    },
    {
      answer: 'v, l, g,o',
      nextId: 'inconsonantscorrectq29',
    },
    {
      answer: "v, l, g,a",
      nextId: 'inconsonantscorrectq29',
    },
    {
      answer: "v, l, g",
      nextId: 'consonantscorrectq29',
    },

  ],
  },
  consonantscorrectq29: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>v, l, g</strong> Answers! 😎',
  answers: [
    {
      nextId: 'wishtocontinue13',
    },
  ],
  },
  inconsonantscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"v, l, g"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue13',
    },
  ],
  },



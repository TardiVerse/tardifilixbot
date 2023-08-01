import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;

const questions = {
  start: {
    botPrompt: 'Welcome to <strong>E</strong>ducation <strong>F</strong>or <strong>A</strong>ll! my name is <strong>TardiFilixBot</strong>, An New Gen <strong>AI bot for your Skill Development</strong>',
    answers: [
      {
        nextId: 'myPurpose',
      },
    ],
  },
  myPurpose: {
    botPrompt: 'This course was designed by the <strong>EFA</strong> Curriculum Team  aimed at eradicating learning lapse in children.',
    answers: [
      {
        nextId: 'imageshare',
      },
    ],
  },
  imageshare: {
    botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/efaimage.jpg',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'tardiidcollection',
      },
    ],
  },

  tardiidcollection: {
    botPrompt: 'Do you have TardiFilix ID ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes! I Have ID', "No. I Don't Have ID", "Contact Filix School Now"]),
    answers: [
      {
        answer: 'Yes! I Have ID',
        nextId: 'idcollection',
      },
      {
        answer: "No. I Don't Have ID",
        nextId: 'yourName',
      },
     
    ],
  },

  idcollection: {
    botPrompt: 'Kindly! Enter your TardiFilix ID ?',
    input: textField(),
    answers: [
      {
        answer: common_greetings_negative,
        catchTFID: true,
        nextId: 'Welcomeback',
      },
    ],
  },
 Welcomeback: {
    botPrompt: 'Welcome Back !',
    answers: [
      {
        nextId: 'emojisHtml',
      },
    ],
  },

  yourName: {
    botPrompt: 'So, What`s your name?',
    input: textField(),
    answers: [
      {
        answer: common_greetings,
        nextId: 'greetings_notAName',
      },
      {
        answer: common_greetings_negative,
        catchName: true,
        nextId: 'asYouCanSee',
      },
    ],
  },

  greetings_notAName: {
      botPrompt: 'Hello! <strong>I\'m still learning how to talk to humans</strong>, which means my conversational range is not very wide yet... 😅',
      answers: [
        {
          nextId: 'greetings_whatsYourNameAgain',
        },
      ],
  },
  greetings_whatsYourNameAgain: {
      botPrompt: 'So what’s <strong>your name</strong>?',
      input: textField(),
      answers: [
        {
          answer: common_greetings,
          nextId: 'greetings_notAName',
        },
        {
          answer: common_greetings_negative,
          catchName: true,
          nextId: 'asYouCanSee',
        },
      ],
  },

  asYouCanSee: {
    botPrompt: 'Hi,<strong>@varName</strong>, We would like to know more about you ?',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
            { nextId: 'emailcollection' },
    ],
  },
  emailcollection: {
      botPrompt: 'Please enter<strong> your 📧 email id </strong>?',
      input: textField(),
      answers: [
        {
          answer: common_greetings_negative,  
          nextId: 'namecollection',
        },
      ],
  },
  namecollection: {
    botPrompt: 'Please enter<strong> your Mobile Number </strong>?',
    input: textField(),
    answers: [
      {
        answer: common_greetings_negative,  
        nextId: 'emojisHtml',
      },
    ],
},
  emojisHtml: {
    botPrompt: "Vowels are Back",
    answers: [
            { nextId: 'vowels_prompt1' },
    ],
  },
  vowels_prompt1: {
    botPrompt: 'A fun new activity to practise the use of vowels.',
    answers: [
      {
        nextId: 'vowels_prompt2',
      },
    ],
  },
  vowels_prompt2: {
    botPrompt: 'https://youtu.be/AE0qqd5O8AY',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'vowels_prompt3',
      },
    ],
  },
  vowels_prompt3: {
    botPrompt: "Let's look into the pages of the book.",
    answers: [
      {
        nextId: 'vowels_prompt4',
      },
    ],
  },
  vowels_prompt4: {
    botPrompt: 'https://drive.google.com/file/d/11fCjQs0U8ubxkZpqoHLDRtSszQQFv0d5/view?usp=sharing',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'vowels_prompt5',
      },
    ],
  },

  vowels_prompt5: {
    botPrompt: 'Let`s Solve 🧠 ',
    answers: [
            { nextId: 'vowels_question1' },
    ],
  },
  vowels_prompt6: {
    botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/vowels.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'vowels_question1',
      },
    ],
  },

  vowels_question1: {
    botPrompt: ' Which letter(s) is a vowel in the word <strong>"cat" </strong>? ',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['A', 'C', "T","None of the Above"]),
    answers: [
      {
        answer: 'A',
        nextId: 'correct',
      },
      {
        answer: 'C',
        nextId: 'incorrect',
      },
      {
        answer: "T",
        nextId: 'incorrect',
      },
      {
        answer: "None of the Above",
        nextId: 'incorrect',
      },
    ],
  },
  correct: {
    botPrompt: 'Hurray <strong>A</strong> is the Answer is correct ! 😎',
    answers: [
      {
        nextId: 'vowels_question2',
      },
    ],
  },
  incorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
    answers: [
      {
        nextId: 'vowels_question2',
      },
    ],
  },

  vowels_question2: {
    botPrompt: ' Identify the vowel(s) in the word "dog": ',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['D', 'G', "O","None of the Above"]),
    answers: [
      {
        answer: 'D',
        nextId: 'incorrectq2',
      },
      {
        answer: 'G',
        nextId: 'incorrectq2',
      },
      {
        answer: "O",
        nextId: 'correctq2',
      },
      {
        answer: "None of the Above",
        nextId: 'incorrectq2',
      },
    ],
  },

  correctq2: {
    botPrompt: 'Hurray! <strong>O</strong> is the Answer is correct ! 😎',
    answers: [
      {
        nextId: 'vowels_question3',
      },
    ],
  },
  incorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
    answers: [
      {
        nextId: 'vowels_question3',
      },
    ],
  },

//3
vowels_question3: {
  botPrompt: "Which letter(s) is a vowel in the word 'bird'?",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['R', 'B', "D","None of the Above"]),
  answers: [
    {
      answer: 'R',
      nextId: 'incorrectq3',
    },
    {
      answer: 'B',
      nextId: 'incorrectq3',
    },
    {
      answer: "D",
      nextId: 'incorrectq3',
    },
    {
      answer: "None of the Above",
      nextId: 'correctq3',
    },
  ],
},

correctq3: {
  botPrompt: 'Hurray! <strong>None of the Above</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question4',
    },
  ],
},
incorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"None of the Above"</strong>',
  answers: [
    {
      nextId: 'vowels_question4',
    },
  ],
},

//4
vowels_question4: {
  botPrompt: ' Identify the vowel(s) in the word "cup": ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['C', 'U', "P","None of the Above"]),
  answers: [
    {
      answer: 'C',
      nextId: 'incorrectq4',
    },
    {
      answer: 'U',
      nextId: 'correctq4',
    },
    {
      answer: "P",
      nextId: 'incorrectq4',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq4',
    },
  ],
},

correctq4: {
  botPrompt: 'Hurray! <strong>U</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question5',
    },
  ],
},
incorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question5',
    },
  ],
},

//5
vowels_question5: {
  botPrompt: ' Which letter(s) is a vowel in the word "book"? ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['B', 'K', "O","None of the Above"]),
  answers: [
    {
      answer: 'B',
      nextId: 'incorrectq5',
    },
    {
      answer: 'K',
      nextId: 'incorrectq5',
    },
    {
      answer: "O",
      nextId: 'correctq5',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq5',
    },
  ],
},

correctq5: {
  botPrompt: 'Hurray! <strong>O</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question6',
    },
  ],
},
incorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question6',
    },
  ],
},

//6
vowels_question6: {
  botPrompt: ' Which letter(s) is a vowel in the word "hat"? ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['H', 'A', "T","None of the Above"]),
  answers: [
    {
      answer: 'H',
      nextId: 'incorrectq6',
    },
    {
      answer: 'A',
      nextId: 'correctq6',
    },
    {
      answer: "T",
      nextId: 'incorrectq6',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq6',
    },
  ],
},

correctq6: {
  botPrompt: 'Hurray! <strong>A</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question7',
    },
  ],
},
incorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question7',
    },
  ],
},

//7
vowels_question7: {
  botPrompt: ' Identify the vowel(s) in the word "pen": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['P', 'E', "N","None of the Above"]),
  answers: [
    {
      answer: 'P',
      nextId: 'incorrectq7',
    },
    {
      answer: 'E',
      nextId: 'correctq7',
    },
    {
      answer: "N",
      nextId: 'incorrectq7',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq7',
    },
  ],
},

correctq7: {
  botPrompt: 'Hurray! <strong>E</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question8',
    },
  ],
},
incorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question8',
    },
  ],
},


//8
vowels_question8: {
  botPrompt: 'Which letter(s) is a vowel in the word "bug"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['B', 'U', "G","None of the Above"]),
  answers: [
    {
      answer: 'B',
      nextId: 'incorrectq8',
    },
    {
      answer: 'U',
      nextId: 'correctq8',
    },
    {
      answer: "G",
      nextId: 'incorrectq8',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq8',
    },
  ],
},

correctq8: {
  botPrompt: 'Hurray! <strong>U</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question9',
    },
  ],
},
incorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question9',
    },
  ],
},

//9
vowels_question9: {
  botPrompt: ' IIdentify the vowel(s) in the word "top": ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['T', 'O', "P","None of the Above"]),
  answers: [
    {
      answer: 'T',
      nextId: 'incorrectq9',
    },
    {
      answer: 'O',
      nextId: 'correctq9',
    },
    {
      answer: "P",
      nextId: 'incorrectq9',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq9',
    },
  ],
},

correctq9: {
  botPrompt: 'Hurray! <strong>O</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question10',
    },
  ],
},
incorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question10',
    },
  ],
},


//10
vowels_question10: {
  botPrompt: ' Which letter(s) is a vowel in the word "sun"? ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['S', 'U', "N","None of the Above"]),
  answers: [
    {
      answer: 'S',
      nextId: 'incorrectq10',
    },
    {
      answer: 'U',
      nextId: 'correctq10',
    },
    {
      answer: "N",
      nextId: 'incorrectq10',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq10',
    },
  ],
},

correctq10: {
  botPrompt: 'Hurray! <strong>U</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question11',
    },
  ],
},
incorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question11',
    },
  ],
},

//11
vowels_question11: {
  botPrompt: 'Identify the vowel(s) in the word "box":',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['B', 'O', "X","None of the Above"]),
  answers: [
    {
      answer: 'B',
      nextId: 'incorrectq11',
    },
    {
      answer: 'O',
      nextId: 'correctq11',
    },
    {
      answer: "X",
      nextId: 'incorrectq11',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq11',
    },
  ],
},

correctq11: {
  botPrompt: 'Hurray! <strong>O</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question12',
    },
  ],
},
incorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question12',
    },
  ],
},

//12
vowels_question12: {
  botPrompt: ' Which letter(s) is a vowel in the word "net"?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['N', 'E', "T","None of the Above"]),
  answers: [
    {
      answer: 'N',
      nextId: 'incorrectq12',
    },
    {
      answer: 'E',
      nextId: 'correctq12',
    },
    {
      answer: "T",
      nextId: 'incorrectq12',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq12',
    },
  ],
},

correctq12: {
  botPrompt: 'Hurray! <strong>E</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question13',
    },
  ],
},
incorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question13',
    },
  ],
},

//13
vowels_question13: {
  botPrompt: 'Identify the vowel(s) in the word "jam":',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['J', 'A', "M","None of the Above"]),
  answers: [
    {
      answer: 'J',
      nextId: 'incorrectq13',
    },
    {
      answer: 'A',
      nextId: 'correctq13',
    },
    {
      answer: "M",
      nextId: 'incorrectq13',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq13',
    },
  ],
},

correctq13: {
  botPrompt: 'Hurray! <strong>A</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question14',
    },
  ],
},
incorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question14',
    },
  ],
},

//14
vowels_question14: {
  botPrompt: ' Which letter(s) is a vowel in the word "rip"? ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['R', 'I', "P","None of the Above"]),
  answers: [
    {
      answer: 'R',
      nextId: 'incorrectq14',
    },
    {
      answer: 'I',
      nextId: 'correctq14',
    },
    {
      answer: "P",
      nextId: 'correctq14',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq14',
    },
  ],
},

correctq14: {
  botPrompt: 'Hurray! <strong>I</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question15',
    },
  ],
},
incorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'vowels_question15',
    },
  ],
},


//15
vowels_question15: {
  botPrompt: ' Identify the vowel(s) in the word "pet":',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['P', 'E', "T","None of the Above"]),
  answers: [
    {
      answer: 'P',
      nextId: 'incorrectq15',
    },
    {
      answer: 'E',
      nextId: 'correctq15',
    },
    {
      answer: "T",
      nextId: 'incorrectq15',
    },
    {
      answer: "None of the Above",
      nextId: 'incorrectq15',
    },
  ],
},

correctq15: {
  botPrompt: 'Hurray! <strong>E</strong> is the Answer is correct ! 😎',
  answers: [
    {
      nextId: 'vowels_question16',
    },
  ],
},
incorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question16',
    },
  ],
},

//16
  vowels_question16: {
    botPrompt: 'Fill in the missing vowel in "c_t": ',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['A', 'E', "I","O","U"]),
    answers: [
      {
        answer: 'A',
        nextId: 'correctq16',
      },
      {
        answer: 'E',
        nextId: 'incorrectq16',
      },
      {
        answer: "I",
        nextId: 'incorrectq16',
      },
      {
        answer: "O",
        nextId: 'incorrectq16',
      },
      {
        answer: "U",
        nextId: 'incorrectq16',
      },
    ],
  },
  correctq16: {
    botPrompt: 'You Have Selected Correct Anwser 🎉! C<strong>A</strong>T😎',
    answers: [
      {
        nextId: 'vowels_question17',
      },
    ],
  },
  incorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
    answers: [
      {
        nextId: 'vowels_question17',
      },
    ],
  },

//17
vowels_question17: {
  botPrompt: 'Fill in the missing vowel in "h_ppy":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq17',
    },
    {
      answer: 'E',
      nextId: 'incorrectq17',
    },
    {
      answer: "I",
      nextId: 'incorrectq17',
    },
    {
      answer: "O",
      nextId: 'incorrectq17',
    },
    {
      answer: "U",
      nextId: 'incorrectq17',
    },
  ],
},
correctq17: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! H<strong>A</strong>PPY 😎',
  answers: [
    {
      nextId: 'vowels_question18',
    },
  ],
},
incorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question18',
    },
  ],
},

//18
vowels_question18: {
  botPrompt: 'Fill in the missing vowel in "w_nt": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq18',
    },
    {
      answer: 'E',
      nextId: 'incorrectq18',
    },
    {
      answer: "I",
      nextId: 'incorrectq18',
    },
    {
      answer: "O",
      nextId: 'incorrectq18',
    },
    {
      answer: "U",
      nextId: 'incorrectq18',
    },
  ],
},
correctq18: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! W<strong>A</strong>NT 😎',
  answers: [
    {
      nextId: 'vowels_question19',
    },
  ],
},
incorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question19',
    },
  ],
},

//19
vowels_question19: {
  botPrompt: 'Fill in the missing vowel in "sh_rt": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq19',
    },
    {
      answer: 'E',
      nextId: 'incorrectq19',
    },
    {
      answer: "I",
      nextId: 'incorrectq19',
    },
    {
      answer: "O",
      nextId: 'correctq19',
    },
    {
      answer: "U",
      nextId: 'correctq19',
    },
  ],
},
correctq19: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! SH<strong>O</strong>RT  or SH<strong>I</strong>T are the Correct Answers! 😎',
  answers: [
    {
      nextId: 'vowels_question20',
    },
  ],
},
incorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O" or "I"</strong>',
  answers: [
    {
      nextId: 'vowels_question20',
    },
  ],
},
//20
vowels_question20: {
  botPrompt: 'Fill in the missing vowel in "b_tt_r":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq20',
    },
    {
      answer: 'E',
      nextId: 'correctq20',
    },
    {
      answer: "I",
      nextId: 'incorrectq20',
    },
    {
      answer: "O",
      nextId: 'incorrectq20',
    },
    {
      answer: "U",
      nextId: 'incorrectq20',
    },
  ],
},
correctq20: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! B<strong>E</strong>tt<strong>E</strong>R 😎',
  answers: [
    {
      nextId: 'vowels_question21',
    },
  ],
},
incorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question21',
    },
  ],
},
//21
vowels_question21: {
  botPrompt: ' Fill in the missing vowel in "h_g":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq21',
    },
    {
      answer: 'E',
      nextId: 'incorrectq21',
    },
    {
      answer: "I",
      nextId: 'incorrectq21',
    },
    {
      answer: "O",
      nextId: 'incorrectq21',
    },
    {
      answer: "U",
      nextId: 'correctq21',
    },
  ],
},
correctq21: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! H<strong>U</strong>G 😎',
  answers: [
    {
      nextId: 'vowels_question22',
    },
  ],
},
incorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question22',
    },
  ],
},
//22
vowels_question22: {
  botPrompt: 'Fill in the missing vowel in "dr_ss": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq22',
    },
    {
      answer: 'E',
      nextId: 'correctq22',
    },
    {
      answer: "I",
      nextId: 'incorrectq22',
    },
    {
      answer: "O",
      nextId: 'incorrectq22',
    },
    {
      answer: "U",
      nextId: 'incorrectq22',
    },
  ],
},
correctq22: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! DR<strong>E</strong>SS 😎',
  answers: [
    {
      nextId: 'vowels_question23',
    },
  ],
},
incorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question23',
    },
  ],
},
//23
vowels_question23: {
  botPrompt: 'Fill in the missing vowel in "str_ng": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq23',
    },
    {
      answer: 'E',
      nextId: 'incorrectq23',
    },
    {
      answer: "I",
      nextId: 'correctq23',
    },
    {
      answer: "O",
      nextId: 'correctq23',
    },
    {
      answer: "U",
      nextId: 'incorrectq23',
    },
  ],
},
correctq23: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! STR<strong>I</strong>NG  or STR<strong>O</strong>NG 😎',
  answers: [
    {
      nextId: 'vowels_question24',
    },
  ],
},
incorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"or"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question24',
    },
  ],
},
//24
vowels_question24: {
  botPrompt: 'Fill in the missing vowel in "s_n": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq24',
    },
    {
      answer: 'E',
      nextId: 'incorrectq24',
    },
    {
      answer: "I",
      nextId: 'correctq24',
    },
    {
      answer: "O",
      nextId: 'correctq24',
    },
    {
      answer: "U",
      nextId: 'correctq24',
    },
  ],
},
correctq24: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! S<strong>U</strong>N  or S<strong>I</strong>N or S<strong>O</strong>N are the Correct Answers! 😎',
  answers: [
    {
      nextId: 'vowels_question25',
    },
  ],
},
incorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'vowels_question25',
    },
  ],
},

//25
vowels_question25: {
  botPrompt: 'Fill in the missing vowel in "cl_ss": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq25',
    },
    {
      answer: 'E',
      nextId: 'incorrectq25',
    },
    {
      answer: "I",
      nextId: 'incorrectq25',
    },
    {
      answer: "O",
      nextId: 'incorrectq25',
    },
    {
      answer: "U",
      nextId: 'incorrectq25',
    },
  ],
},
correctq25: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! CL<strong>A</strong>SS 😎',
  answers: [
    {
      nextId: 'vowels_question26',
    },
  ],
},
incorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is CL<strong>A</strong>SS',
  answers: [
    {
      nextId: 'vowels_question26',
    },
  ],
},

//26
vowels_question26: {
  botPrompt: 'Fill in the missing vowel in "gl_ss":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq26',
    },
    {
      answer: 'E',
      nextId: 'incorrectq26',
    },
    {
      answer: "I",
      nextId: 'incorrectq26',
    },
    {
      answer: "O",
      nextId: 'incorrectq26',
    },
    {
      answer: "U",
      nextId: 'incorrectq26',
    },
  ],
},

correctq26: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! GL<strong>A</strong>SS  😎',
  answers: [
    {
      nextId: 'vowels_question27',
    },
  ],
},
incorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question27',
    },
  ],
},
//27
vowels_question27: {
  botPrompt: 'Fill in the missing vowel in "gr_ss": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq27',
    },
    {
      answer: 'E',
      nextId: 'incorrectq27',
    },
    {
      answer: "I",
      nextId: 'incorrectq27',
    },
    {
      answer: "O",
      nextId: 'incorrectq27',
    },
    {
      answer: "U",
      nextId: 'incorrectq27',
    },
  ],
},
correctq27: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! GR<strong>A</strong>SS 😎',
  answers: [
    {
      nextId: 'vowels_question28',
    },
  ],
},
incorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question28',
    },
  ],
},
//28
vowels_question28: {
  botPrompt: 'Fill in the missing vowel in "pl_n":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq28',
    },
    {
      answer: 'E',
      nextId: 'incorrectq28',
    },
    {
      answer: "I",
      nextId: 'incorrectq28',
    },
    {
      answer: "O",
      nextId: 'incorrectq28',
    },
    {
      answer: "U",
      nextId: 'incorrectq28',
    },
  ],
},
correctq28: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! PL<strong>A</strong>N  😎',
  answers: [
    {
      nextId: 'vowels_question29',
    },
  ],
},
incorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question29',
    },
  ],
},
//29
vowels_question29: {
  botPrompt: 'Fill in the missing vowel in "m_n":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq29',
    },
    {
      answer: 'E',
      nextId: 'incorrectq29',
    },
    {
      answer: "I",
      nextId: 'incorrectq29',
    },
    {
      answer: "O",
      nextId: 'incorrectq29',
    },
    {
      answer: "U",
      nextId: 'incorrectq29',
    },
  ],
},
correctq29: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! M<strong>A</strong>N 😎',
  answers: [
    {
      nextId: 'vowels_question30',
    },
  ],
},
incorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question30',
    },
  ],
},
//30
vowels_question30: {
  botPrompt: 'Fill in the missing vowel in "cl_ck": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq30',
    },
    {
      answer: 'E',
      nextId: 'incorrectq30',
    },
    {
      answer: "I",
      nextId: 'incorrectq30',
    },
    {
      answer: "O",
      nextId: 'correctq30',
    },
    {
      answer: "U",
      nextId: 'incorrectq30',
    },
  ],
},
correctq30: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! S<strong>U</strong>N  or S<strong>I</strong>N or S<strong>O</strong>N are the Correct Answers! 😎',
  answers: [
    {
      nextId: 'vowels_question31',
    },
  ],
},
incorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'vowels_question31',
    },
  ],
},
//31
vowels_question31: {
  botPrompt: 'Fill in the missing vowel in "b_t": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'correctq31',
    },
    {
      answer: 'E',
      nextId: 'incorrectq31',
    },
    {
      answer: "I",
      nextId: 'incorrectq31',
    },
    {
      answer: "O",
      nextId: 'incorrectq31',
    },
    {
      answer: "U",
      nextId: 'incorrectq31',
    },
  ],
},
correctq31: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! B<strong>A</strong>T 😎',
  answers: [
    {
      nextId: 'vowels_question32',
    },
  ],
},
incorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question32',
    },
  ],
},
//32
vowels_question32: {
  botPrompt: 'Fill in the missing vowel in "f_ll":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq32',
    },
    {
      answer: 'E',
      nextId: 'incorrectq32',
    },
    {
      answer: "I",
      nextId: 'correctq32',
    },
    {
      answer: "O",
      nextId: 'incorrectq32',
    },
    {
      answer: "U",
      nextId: 'incorrectq32',
    },
  ],
},
correctq32: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! F<strong>I</strong>LL 😎',
  answers: [
    {
      nextId: 'vowels_question33',
    },
  ],
},
incorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'vowels_question33',
    },
  ],
},
//33
vowels_question33: {
  botPrompt: 'Fill in the missing vowel in "ch_ck": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq33',
    },
    {
      answer: 'E',
      nextId: 'correctq33',
    },
    {
      answer: "I",
      nextId: 'incorrectq33',
    },
    {
      answer: "O",
      nextId: 'incorrectq33',
    },
    {
      answer: "U",
      nextId: 'incorrectq33',
    },
  ],
},
correctq33: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! CH<strong>E</strong>CK 😎',
  answers: [
    {
      nextId: 'vowels_question34',
    },
  ],
},
incorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question34',
    },
  ],
},
//34
vowels_question34: {
  botPrompt: 'Fill in the missing vowel in "h_ngy":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'E', "I","O","U"]),
  answers: [
    {
      answer: 'A',
      nextId: 'incorrectq34',
    },
    {
      answer: 'E',
      nextId: 'incorrectq34',
    },
    {
      answer: "I",
      nextId: 'incorrectq34',
    },
    {
      answer: "O",
      nextId: 'incorrectq34',
    },
    {
      answer: "U",
      nextId: 'correctq34',
    },
  ],
},
correctq34: {
  botPrompt: 'You Have Selected Correct Anwser 🎉! H<strong>U</strong>NGRY 😎',
  input: endOfConversation(),
  answers: [
    {
      nextId: 'correctq34',
    },
  ],
},
incorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  input: endOfConversation(),
  answers: [
    {
      nextId: 'incorrectq34',
    },
  ],
},

  
  select: {
    botPrompt: 'I can also offer <strong>predefined options</strong> to choose from:',
    varName: 'userName',
    input: selectField(['Dope!', 'Cool!']),
    answers: [
            { nextId: 'tags' },
    ],
  },
  tags: {
    botPrompt: 'Or even <strong>allow users to select many tags</strong> to form an answer:',
    varName: 'userName',
    input: tagsField(['Do go on..', 'Amazing!', "I'm loving this!", '🍕']),
    answers: [
            { nextId: 'bagsSystem' },
    ],
  },
  bagsSystem: {
    botPrompt: "Besides all that, I can add up points in my <strong>Bags System</strong>, to eventually make a 'Recommendation'",
    answers: [
            { nextId: 'letsTryIt' },
    ],
  },
  letsTryIt: {
    botPrompt: "Let's try it!",
    answers: [
            { nextId: 'question1' },
    ],
  },
  question1: {
    botPrompt: 'Tell me <strong>@varName</strong>: Do you like to have fun?',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    input: selectField(['Yes!', 'No.', "I'm not Sure"]),
    answers: [
      {
        answer: 'Yes!',
        nextId: 'cool',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: 'No.',
        nextId: 'hmkay',
        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 3 }],
      },
      {
        answer: "I'm not Sure",
        nextId: 'hmm',
        sumToBags: [{ name: 'rickAndMorty', points: 1 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },
  cool: {
    botPrompt: 'Cool! 😎',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  hmm: {
    botPrompt: 'Hmmm... 🤔',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  hmkay: {
    botPrompt: 'Hmkay... 😐',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  question2: {
    botPrompt: 'Do you know what the <strong>airspeed velocity of an <em>unladen swallow</em></strong> is? 🐦',
    input: selectField(['African or European?', '10 m/s', "Don't ask me stupid questions."]),
    answers: [
      {
        answer: 'African or European?',
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: '10 m/s',
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: "Don't ask me stupid questions.",
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'recursion', points: 2 }],
      },
    ],
  },
  rickAndMorty: {
    botPrompt: 'Hey, I like you <strong>@varName</strong>!',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'gottaGive',
      },
    ],
  },
  gottaGive: {
    botPrompt: 'For demonstrative purposes I gotta give you some kind of recommendation, so...',
    answers: [
      {
        nextId: 'rickAndMorty2',
      },
    ],
  },
  rickAndMorty2: {
    botPrompt: "My best recommendation is you should go and watch something <a href='www.adultswim.com/videos/rick-and-morty/'>fun</a>!",
    answers: [
      {
        nextId: 'rickAndMorty3',
      },
    ],
  },
  rickAndMorty3: {
    botPrompt: 'https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
    finishConversation: true,
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  shroedingersCat: {
    botPrompt: "Don't you just feel like <a href='https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat'>Shroedinger's Cat</a> sometimes <strong>@varName</strong>?",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'shroedingersCat2',
      },
    ],
  },
  shroedingersCat2: {
    botPrompt: 'https://media.giphy.com/media/XA4cpc6YbjPO/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'shroedingersCat3',
      },
    ],
  },
  shroedingersCat3: {
    botPrompt: "It looks like you're in a sort of <strong>quantum-superposition state</strong>. You should really go out and figure out where (and when) you are at in your life... Cheers!",
    answers: [
      {
        nextId: 'check_out1',
        finishConversation: true,
      },
    ],
  },
  recursion: {
    botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/vowels.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'recursion2',
      },
    ],
  },
  recursion2: {
    botPrompt: "You're really a no-nonsense kind of type, huh?",
    answers: [
      {
        nextId: 'recursion3',
      },
    ],
  },
  recursion3: {
    botPrompt: "You know what else isn't any fun <strong>@varName</strong>?",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'recursion4',
      },
    ],
  },
  recursion4: {
    botPrompt: 'Recursion.',
    input: selectField(['What?', 'Yes', 'No', 'Stop It']),
    answers: [
      {
        answer: 'What?',
        nextId: 'recursion3',
      },
      {
        answer: 'Yes',
        nextId: 'recursion3',
      },
      {
        answer: 'No',
        nextId: 'recursion3',
      },
      {
        answer: 'Stop It',
        nextId: 'sorry',
      },
    ],
  },
  sorry: {
    botPrompt: 'https://media.giphy.com/media/l3Ucl5pIqSaGa82T6/giphy.gif',
    type: RTypes.MEDIA,
    finishConversation: true,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  check_out1: {
    botPrompt: 'Check out how to build your own, fully customizable, web-based bot in here',
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
  check_out2: {
    botPrompt: 'https://github.com/IcaliaLabs/alpha',
    type: RTypes.LINK,
    input: endOfConversation(),
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
};


export default questions;

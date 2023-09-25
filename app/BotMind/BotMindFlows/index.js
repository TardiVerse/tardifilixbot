import {
  optionCards,
  selectField,
  tagsField,
  textField,
  imageSelectField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;



//shuffleNumberArraylot
function shuffleNumberArraylot(array) {
  const shuffleNumberArraylot = array.slice();
  for (let i = shuffleNumberArraylot.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleNumberArraylot[i], shuffleNumberArraylot[j]] = [shuffleNumberArraylot[j], shuffleNumberArraylot[i]];
  }
  return shuffleNumberArraylot;
}

// Create an array containing numbers from 1 to 77
const numberslot = Array.from({ length: 45 }, (_, i) => i + 1);

// Shuffle the array
const shuffleArraylot = shuffleNumberArraylot(numberslot);

const min = 0;
const max = 15;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);


const questions = {

  start: {
    botPrompt: 'Hello, I am <strong>FiliBot</strong> From the planet of joyful learning! Here to help you to eradicate learning lapses from every corners!',
    answers: [
      {
        nextId: 'myPurpose',
      },
    ],
  },


  myPurpose: {
    botPrompt: '<strong>Education For All </strong> (EFA) team of Filix School of Education has asked me to help you!',
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
        nextId: 'yourName',
      },
    ],
  },

  tardiidcollection: {
    botPrompt: 'Do you have TardiFilix ID ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes! I Have ID', "No. I Don't Have ID"]),
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


  yourName: {
    botPrompt: 'So, What`s your name?',
    input: textField(),
    answers: [
      {
        answer: common_greetings,
        catchName: true,
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
          catchName: true,
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
            { nextId: 'teacherid' },
    ],
  },
  teacherid: {
    botPrompt: 'Please enter<strong> your Teacher id! </strong>?',
    input: textField(),
    answers: [
      {
        answer: common_greetings_negative,  
        catchCompanyName:true,
        nextId: 'emailcollection',
      },
    ],
},

  emailcollection: {
      botPrompt: 'Please enter<strong> your 📧 email id </strong>?',
      input: textField(),
      answers: [
        {
          answer: common_greetings_negative,  
          catchMail:true,
          nextId: 'mobilecollection',
        },
      ],
  },
  mobilecollection: {
    botPrompt: 'Please enter<strong> your Mobile Number </strong>?',
    input: textField(),
    answers: [
      {
        answer: common_greetings_negative,  
        catchPhone:true,
        nextId: 'chooseclass',
      },
    ],
},
chooseclass: {
  botPrompt: 'Choose your <strong>Class</strong> @varName  ?',
  type: RTypes.TRANSFORMED_TEXT,
  varName: 'userName',
  input: selectField(['FLN','Pre-kG','L.K.G','U.K.G','CLASS I','CLASS II', 'CLASS III','CLASS IV','CLASS V','CLASS VI','CLASS VII','CLASS VIII','CLASS IX','CLASS X']),
  answers: [
          { nextId: 'choosestate' },
  ],
},
choosestate: {
  botPrompt: 'Choose your <strong>State</strong>   ?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']),
  answers: [
          { nextId: 'usertype' },
  ],
},

usertype: {
  botPrompt: 'you are ?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Student', "Parent","Teacher"]),
  answers: [
    {
      answer: 'Student',
      nextId: 'tfidgenrationtext',
    },
    {
      answer: "Parent",
      nextId: 'tfidgenrationtext',
    },
    {
      answer: "Teacher",
      nextId: 'tfidgenrationtext',
    },
  ],
},

// tfidgenration: {
//   botPrompt: 'Your TFID is <strong>'+ random12DigitNumber +'</strong> .',
//   answers: [
//     {
//       nextId: 'tfidgenrationtext',
//     },
//   ],
// },
tfidgenrationtext: {
  botPrompt: 'You will receive your TFID Digital Card in your registered mobile number and email address.',
  answers: [
    {
      nextId: "fln"+shuffleArraylot[randomNumber],
    },
  ],
},


Welcomeback: {
  botPrompt: 'Welcome Back.@varName ',
  type: RTypes.TRANSFORMED_TEXT,
  varName: 'userName',
  answers: [
    {
      nextId: "fln"+shuffleArraylot[randomNumber],
    },
  ],
},


//newquest


["fln"+shuffleArraylot[0]]: {
  botPrompt: ' The cat ___ playing. ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'flncorrect',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'are',
      nextId: 'inflncorrect',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "here",
      nextId: 'inflncorrect',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "where",
      nextId: 'inflncorrect',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},
flncorrect: {
  botPrompt: 'Hurray <strong>is</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[1],
    },
  ],
},
inflncorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[1],
    },
  ],
},

['fln'+shuffleArraylot[1]]: {
  botPrompt: 'My friends ___ here.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'flncorrectq2',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'is',
      nextId: 'inflncorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "here",
      nextId: 'inflncorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "where",
      nextId: 'inflncorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

flncorrectq2: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[2],
    },
  ],
},
inflncorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[2],
    },
  ],
},

//3
['fln'+shuffleArraylot[2]]: {
botPrompt: "The flowers ___ beautiful.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'flncorrectq3',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'is',
      nextId: 'inflncorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "here",
      nextId: 'inflncorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "where",
      nextId: 'inflncorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

flncorrectq3: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'fln'+shuffleArraylot[3],
  },
],
},
inflncorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'fln'+shuffleArraylot[3],
  },
],
},

//4
['fln'+shuffleArraylot[3]]: {
botPrompt: 'This book ___ interesting.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'flncorrectq4',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'are',
      nextId: 'inflncorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "here",
      nextId: 'inflncorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "where",
      nextId: 'inflncorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

flncorrectq4: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'fln'+shuffleArraylot[4],
  },
],
},
inflncorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'fln'+shuffleArraylot[4],
  },
],
},

//5
['fln'+shuffleArraylot[4]]: {
botPrompt: 'The birds ___ in the sky.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'flncorrectq5',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'is',
      nextId: 'inflncorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "here",
      nextId: 'inflncorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "where",
      nextId: 'inflncorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

flncorrectq5: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'fln'+shuffleArraylot[5],
  },
],
},
inflncorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'fln'+shuffleArraylot[5],
  },
],
},

  //6
  ['fln'+shuffleArraylot[5]]: {
    botPrompt: 'What is 1 more than 4?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['3', '2', "6","5"]),
      answers: [
        {
          answer: '3',
          nextId: 'inflncorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '2',
          nextId: 'inflncorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "6",
          nextId: 'inflncorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "5",
          nextId: 'flncorrectq6',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    flncorrectq6: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[6],
      },
    ],
    },
    inflncorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[6],
      },
    ],
    },
    
    //7
    ['fln'+shuffleArraylot[6]]: {
    botPrompt: 'What is 1 more than 6?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['3', '4', "5","7"]),
      answers: [
        {
          answer: '3',
          nextId: 'inflncorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '4',
          nextId: 'inflncorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "5",
          nextId: 'inflncorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "7",
          nextId: 'flncorrectq7',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    flncorrectq7: {
    botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[7],
      },
    ],
    },
    inflncorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[7],
      },
    ],
    },
    
    
    //8
    ['fln'+shuffleArraylot[7]]: {
    botPrompt: 'What is 1 more than  5?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['3', '4', "6","7"]),
      answers: [
        {
          answer: '3',
          nextId: 'inflncorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '4',
          nextId: 'inflncorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "6",
          nextId: 'flncorrectq8',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "7",
          nextId: 'inflncorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    flncorrectq8: {
    botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[8],
      },
    ],
    },
    inflncorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[8],
      },
    ],
    },
    
    //9
    ['fln'+shuffleArraylot[8]]: {
    botPrompt: 'What is the number that is 1 more than 14?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['15', '13', "16","17"]),
      answers: [
        {
          answer: '15',
          nextId: 'flncorrectq9',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '13',
          nextId: 'inflncorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "16",
          nextId: 'inflncorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "17",
          nextId: 'inflncorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    flncorrectq9: {
    botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[9],
      },
    ],
    },
    inflncorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[9],
      },
    ],
    },
    
    
    //10
    ['fln'+shuffleArraylot[9]]: {
    botPrompt: 'What is the number that is 1 more than 12?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['14', '11', "13","10"]),
      answers: [
        {
          answer: '14',
          nextId: 'inflncorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '11',
          nextId: 'inflncorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "13",
          nextId: 'flncorrectq10',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "10",
          nextId: 'inflncorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    
    },
    
    flncorrectq10: {
    botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[10],
      },
    ],
    },
    inflncorrectq10: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[10],
      },
    ],
    },
    
    //11
    ['fln'+shuffleArraylot[10]]: {
    botPrompt: 'What is the number that is 1 more than 16?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['14', '16', "7","17"]),
      answers: [
        {
          answer: '14',
          nextId: 'inflncorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '16',
          nextId: 'inflncorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "7",
          nextId: 'inflncorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "17",
          nextId: 'flncorrectq11',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    flncorrectq11: {
    botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[11],
      },
    ],
    },
    inflncorrectq11: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[11],
      },
    ],
    },
    
    
  //12
  ['fln'+shuffleArraylot[11]]: {
    botPrompt: 'Which word is used to show a connection between two ideas?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['But', 'And', "Or","Not"]),
    answers: [
      {
        answer: 'But',
        nextId: 'inflncorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'And',
        nextId: 'flncorrectq12',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Or",
        nextId: 'inflncorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Not",
        nextId: 'inflncorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
  
    flncorrectq12: {
    botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[12],
      },
    ],
    },
    inflncorrectq12: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[12],
      },
    ],
    },
    
    //13
    ['fln'+shuffleArraylot[12]]: {
    botPrompt: 'Which word connects "book" and "pen"?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['book and pen', 'book or pen', "book not pen","book but pen"]),
      answers: [
        {
          answer: 'book and pen',
          nextId: 'flncorrectq13',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'book or pen',
          nextId: 'inflncorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "book not pen",
          nextId: 'inflncorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "book but pen",
          nextId: 'inflncorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    flncorrectq13: {
    botPrompt: 'Hurray! <strong>book and pen</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[13],
      },
    ],
    },
    inflncorrectq13: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"book and pen"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[13],
      },
    ],
    },
    
    //14
    ['fln'+shuffleArraylot[13]]: {
    botPrompt: 'Which word is used to join words in a list?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['But', 'And', "Or","Not"]),
    answers: [
      {
        answer: 'But',
        nextId: 'inflncorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'And',
        nextId: 'flncorrectq14',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Or",
        nextId: 'inflncorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Not",
        nextId: 'inflncorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    
    flncorrectq14: {
    botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[14],
      },
    ],
    },
    inflncorrectq14: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[14],
      },
    ],
    },
    
    
    //15
    ['fln'+shuffleArraylot[14]]: {
    botPrompt: 'The flowers are blooming ____ the birds are singing.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['But', 'And', "Or","Not"]),
    answers: [
      {
        answer: 'But',
        nextId: 'inflncorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'And',
        nextId: 'flncorrectq15',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Or",
        nextId: 'inflncorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Not",
        nextId: 'inflncorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
  
    flncorrectq15: {
    botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[15],
      },
    ],
    },
    inflncorrectq15: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[15],
      },
    ],
    },
  
    //16
    ['fln'+shuffleArraylot[15]]: {
      botPrompt: 'Which word can be used to join "flower" "butterfly"?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['flower and butterfly', 'flower or butterfly', "flower not butterfly","flower but butterfly"]),
      answers: [
        {
          answer: 'flower and butterfly',
          nextId: 'flncorrectq16',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'flower or butterfly',
          nextId: 'inflncorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "flower not butterfly",
          nextId: 'inflncorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "flower but butterfly",
          nextId: 'inflncorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    flncorrectq16: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>flower and butterfly</strong> 😎',
      answers: [
        {
          nextId: 'fln'+shuffleArraylot[16],
        },
      ],
    },
    inflncorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"flower and butterfly"</strong>',
      answers: [
        {
          nextId: 'fln'+shuffleArraylot[16],
        },
      ],
    },
    
 //17
 ['fln'+shuffleArraylot[16]]: {
  botPrompt: 'Opposite of "happy"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Sad', 'Funny', "Brave","Angry"]),
    answers: [
      {
        answer: 'Sad',
        nextId: 'flncorrectq17',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Funny',
        nextId: 'inflncorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Brave",
        nextId: 'inflncorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Angry",
        nextId: 'inflncorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  flncorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Sad</strong> 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[17],
    },
  ],
  },
  inflncorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sad"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[17],
    },
  ],
  },
  
  //18
  ['fln'+shuffleArraylot[17]]: {
  botPrompt: 'Opposite of "quiet".   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Far', 'Soft', "Loud","Near"]),
  answers: [
    {
      answer: 'Far',
      nextId: 'inflncorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'Soft',
      nextId: 'inflncorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Loud",
      nextId: 'flncorrectq18',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "Near",
      nextId: 'inflncorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
  },
  flncorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Loud</strong> 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[18],
    },
  ],
  },
  inflncorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Loud"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[18],
    },
  ],
  },
  
  //19
  ['fln'+shuffleArraylot[18]]: {
  botPrompt: 'Opposite of "thick"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Heavy', 'Fast', "Thin","Tall"]),
  answers: [
    {
      answer: 'Heavy',
      nextId: 'inflncorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'Fast',
      nextId: 'inflncorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Thin",
      nextId: 'flncorrectq19',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "Tall",
      nextId: 'inflncorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
  },
  flncorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Thin</strong> Answers! 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[19],
    },
  ],
  },
  inflncorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Thin"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[19],
    },
  ],
  },
  
  //20
  ['fln'+shuffleArraylot[19]]: {
  botPrompt: 'Opposite of "long"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Short', 'Young', "Soft","Full"]),
  answers: [
    {
      answer: 'Short',
      nextId: 'flncorrectq20',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'Young',
      nextId: 'inflncorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Soft",
      nextId: 'inflncorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Full",
      nextId: 'inflncorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
  },
  flncorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Short</strong> 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[21],
    },
  ],
  },
  inflncorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Short"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[21],
    },
  ],
  },
  

  //22
  ['fln'+shuffleArraylot[21]]: {
    botPrompt: 'Opposite of "old"',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Fast', 'young', "Loud","Bright"]),
  answers: [
    {
      answer: 'Fast',
      nextId: 'inflncorrectq22',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'young',
      nextId: 'flncorrectq22',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "Loud",
      nextId: 'inflncorrectq22',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Bright",
      nextId: 'inflncorrectq22',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
  },
  
  flncorrectq22: {
    botPrompt: 'Hurray! <strong>young</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[22],
      },
    ],
  },
  inflncorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"young"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[22],
      },
    ],
  },
  
  //23
  ['fln'+shuffleArraylot[22]]: {
  botPrompt: 'Opposite of "boy"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Short', 'Young', "girl","Full"]),
  answers: [
    {
      answer: 'Short',
      nextId: 'inflncorrectq23',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'Young',
      nextId: 'inflncorrectq23',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "girl",
      nextId: 'flncorrectq23',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "Full",
      nextId: 'inflncorrectq23',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
  },
  
  flncorrectq23: {
  botPrompt: 'Hurray! <strong>girl</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[23],
    },
  ],
  },
  inflncorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"girl"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[23],
    },
  ],
  },
  
  //24
  ['fln'+shuffleArraylot[23]]: {
  botPrompt: 'Opposite of "awake"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Asleep', 'Young', "Soft","salt"]),
  answers: [
    {
      answer: 'Asleep',
      nextId: 'flncorrectq24',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'Young',
      nextId: 'inflncorrectq24',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Soft",
      nextId: 'inflncorrectq24',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "salt",
      nextId: 'inflncorrectq24',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
  },
  
  flncorrectq24: {
  botPrompt: 'Hurray! <strong>Asleep</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[24],
    },
  ],
  },
  inflncorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Asleep"</strong>',
  answers: [
    {
      nextId: 'fln'+shuffleArraylot[24],
    },
  ],
  },

  
  //25
  ['fln'+shuffleArraylot[24]]: {
    botPrompt: 'What is the number at the units place in 124?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1', '2', "4","0"]),
    answers: [
      {
        answer: '1',
        nextId: 'inonceTensHundredscorrectq25',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq25',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "4",
        nextId: 'onceTensHundredscorrectq25',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq25',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    
    onceTensHundredscorrectq25: {
    botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[25],
      },
    ],
    },
    inonceTensHundredscorrectq25: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[25],
      },
    ],
    },
    
    //26
    ['fln'+shuffleArraylot[25]]: {
    botPrompt: 'What is the number at the tens place in 379?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['3', '7', "9","0"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTensHundredscorrectq26',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '7',
        nextId: 'onceTensHundredscorrectq26',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq26',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq26',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    
    onceTensHundredscorrectq26: {
    botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[26],
      },
    ],
    },
    inonceTensHundredscorrectq26: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[26],
      },
    ],
    },
    
    //27
    ['fln'+shuffleArraylot[26]]: {
    botPrompt: 'What is the number at the hundreds place in 548?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['5', '4', "8","0"]),
      answers: [
        {
          answer: '5',
          nextId: 'onceTensHundredscorrectq27',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '4',
          nextId: 'inonceTensHundredscorrectq27',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "8",
          nextId: 'inonceTensHundredscorrectq27',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "0",
          nextId: 'inonceTensHundredscorrectq27',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    onceTensHundredscorrectq27: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[27],
      },
    ],
    },
    inonceTensHundredscorrectq27: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[27],
      },
    ],
    },
    
    
    //28
    ['fln'+shuffleArraylot[27]]: {
    botPrompt: 'Which of the following is the sum of digits at the units and tens place in the number 56?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['9', '10', "11","12"]),
    answers: [
      {
        answer: '9',
        nextId: 'inonceTensHundredscorrectq28',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '10',
        nextId: 'inonceTensHundredscorrectq28',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "11",
        nextId: 'onceTensHundredscorrectq28',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "12",
        nextId: 'inonceTensHundredscorrectq28',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    
    onceTensHundredscorrectq28: {
    botPrompt: 'Hurray! <strong>11</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[28],
      },
    ],
    },
    inonceTensHundredscorrectq28: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[28],
      },
    ],
    },
    
    //29
    ['fln'+shuffleArraylot[28]]: {
    botPrompt: 'What is the sum of digits at the tens and hundreds place in the number 387?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['6', '10', "15","18"]),
      answers: [
        {
          answer: '6',
          nextId: 'inonceTensHundredscorrectq29',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '10',
          nextId: 'inonceTensHundredscorrectq29',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "15",
          nextId: 'onceTensHundredscorrectq29',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "18",
          nextId: 'inonceTensHundredscorrectq29',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    onceTensHundredscorrectq29: {
    botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[29],
      },
    ],
    },
    inonceTensHundredscorrectq29: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[29],
      },
    ],
    },
    
    
    //30
    ['fln'+shuffleArraylot[29]]: {
    botPrompt: 'What is the number formed by the digits 5, 2, 8  Where 2 will be in once place,8 will be in hundred`s place and 5 will be in ten`s place?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['285', '582', "258","852"]),
    answers: [
      {
        answer: '285',
        nextId: 'inonceTensHundredscorrectq30',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '582',
        nextId: 'inonceTensHundredscorrectq30',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "258",
        nextId: 'inonceTensHundredscorrectq30',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "852",
        nextId: 'onceTensHundredscorrectq30',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
    ],
    },
  
    onceTensHundredscorrectq30: {
    botPrompt: 'Hurray! <strong>852</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[30],
      },
    ],
    },
    inonceTensHundredscorrectq30: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"852"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[30],
      },
    ],
    },
    
    //31
    ['fln'+shuffleArraylot[30]]: {
    botPrompt: 'What is the sum of digits at the units place and hundreds place in the number 763?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '9', "10","13"]),
      answers: [
        {
          answer: '7',
          nextId: 'inonceTensHundredscorrectq31',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '9',
          nextId: 'inonceTensHundredscorrectq31',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "10",
          nextId: 'onceTensHundredscorrectq31',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "13",
          nextId: 'inonceTensHundredscorrectq31',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    onceTensHundredscorrectq31: {
    botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[31],
      },
    ],
    },
    inonceTensHundredscorrectq31: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[31],
      },
    ],
    },
    
    //32
    ['fln'+shuffleArraylot[31]]: {
    botPrompt: 'What is the number formed by the digits 4, 6, and 2? Where 4 will be in Hundred`s place , 6 in Ten`s place and 2 in once place.  ',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['642', '426', "264","462"]),
    answers: [
      {
        answer: '642',
        nextId: 'inonceTensHundredscorrectq32',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '426',
        nextId: 'inonceTensHundredscorrectq32',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "264",
        nextId: 'inonceTensHundredscorrectq32',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "462",
        nextId: 'onceTensHundredscorrectq32',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
    ],
    },
    
    onceTensHundredscorrectq32: {
    botPrompt: 'Hurray! <strong>462</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[32],
      },
    ],
    },
    inonceTensHundredscorrectq32: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"462"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[32],
      },
    ],
    },
    
    //33
    ['fln'+shuffleArraylot[32]]: {
    botPrompt: 'Which of the following is the sum of digits at the tens and units place in the number 73?',
    type: RTypes.TRANSFORMED_TEXT,
    
    
    input: selectField(['5', '10', "11","12"]),
    answers: [
      {
        answer: '5',
        nextId: 'inonceTensHundredscorrectq33',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '10',
        nextId: 'onceTensHundredscorrectq33',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "11",
        nextId: 'inonceTensHundredscorrectq33',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "12",
        nextId: 'inonceTensHundredscorrectq33',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    
    onceTensHundredscorrectq33: {
    botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[33],
      },
    ],
    },
    inonceTensHundredscorrectq33: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[33],
      },
    ],
    },
    
  //34
  ['fln'+shuffleArraylot[33]]: {
    botPrompt: 'What is 1 more than 47?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['49', '48', "46","45"]),
      answers: [
        {
          answer: '49',
          nextId: 'inmoreLesscorrectq34',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '48',
          nextId: 'moreLesscorrectq34',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "46",
          nextId: 'inmoreLesscorrectq34',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "45",
          nextId: 'inmoreLesscorrectq34',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    moreLesscorrectq34: {
    botPrompt: 'Hurray! <strong>48</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[34],
      },
    ],
    },
    inmoreLesscorrectq34: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"48"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[34],
      },
    ],
    },
    
    
    //35
    ['fln'+shuffleArraylot[34]]: {
    botPrompt: 'What is the number that is 1 more than 40?',
    type: RTypes.TRANSFORMED_TEXT,
    
  
    input: selectField(['39', '41', "42","44"]),
    answers: [
      {
        answer: '39',
        nextId: 'inmoreLesscorrectq35',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '41',
        nextId: 'moreLesscorrectq35',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "42",
        nextId: 'inmoreLesscorrectq35',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq35',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    
    moreLesscorrectq35: {
    botPrompt: 'Hurray! <strong>41</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[35],
      },
    ],
    },
    inmoreLesscorrectq35: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[35],
      },
    ],
    },
    
    //36
    ['fln'+shuffleArraylot[35]]: {
      botPrompt: 'What is the number that is 1 more than 43?',
      type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['44', '46', "45","48"]),
    answers: [
      {
        answer: '44',
        nextId: 'moreLesscorrectq36',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: '46',
        nextId: 'inmoreLesscorrectq36',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "45",
        nextId: 'inmoreLesscorrectq36',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "48",
        nextId: 'inmoreLesscorrectq36',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    moreLesscorrectq36: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>44</strong> 😎',
      answers: [
        {
          nextId: 'fln'+shuffleArraylot[36],
        },
      ],
    },
    inmoreLesscorrectq36: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
      answers: [
        {
          nextId: 'fln'+shuffleArraylot[36],
        },
      ],
    },
    
    //37
    ['fln'+shuffleArraylot[36]]: {
    botPrompt: 'What is the number that is 1 more than 46?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['49', '42', "47","45"]),
    answers: [
      {
        answer: '49',
        nextId: 'inmoreLesscorrectq37',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '42',
        nextId: 'inmoreLesscorrectq37',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "47",
        nextId: 'moreLesscorrectq37',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "45",
        nextId: 'inmoreLesscorrectq37',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    moreLesscorrectq37: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>47</strong> 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[37],
      },
    ],
    },
    inmoreLesscorrectq37: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[37],
      },
    ],
    },
    
    //38
    ['fln'+shuffleArraylot[37]]: {
    botPrompt: 'What is 1 more than 48?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['49', '47', "46","50"]),
      answers: [
        {
          answer: '49',
          nextId: 'moreLesscorrectq38',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '47',
          nextId: 'inmoreLesscorrectq38',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "46",
          nextId: 'inmoreLesscorrectq38',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "50",
          nextId: 'inmoreLesscorrectq38',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    moreLesscorrectq38: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>49</strong> 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[38],
      },
    ],
    },
    inmoreLesscorrectq38: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[38],
      },
    ],
    },
    
    //39
    ['fln'+shuffleArraylot[38]]: {
    botPrompt: 'What is 1 more than 41?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['43', '46', "42","44"]),
    answers: [
      {
        answer: '43',
        nextId: 'inmoreLesscorrectq39',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '46',
        nextId: 'inmoreLesscorrectq39',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "42",
        nextId: 'moreLesscorrectq39',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq39',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
    },
    moreLesscorrectq39: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>42</strong> Answers! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[39],
      },
    ],
    },
    inmoreLesscorrectq39: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[39],
      },
    ],
    },
    
    //40
    ['fln'+shuffleArraylot[39]]: {
    botPrompt: 'What is the number that is 1 more than 38?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['37', '39', "40","32"]),
      answers: [
        {
          answer: '37',
          nextId: 'inmoreLesscorrectq40',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '39',
          nextId: 'moreLesscorrectq40',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "40",
          nextId: 'inmoreLesscorrectq40',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "32",
          nextId: 'inmoreLesscorrectq40',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    moreLesscorrectq40: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>39</strong> 😎',
    answers: [
      {
        nextId: 'thisstart',
      },
    ],
    },
    inmoreLesscorrectq40: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
    answers: [
      {
        nextId: 'thisstart',
      },
    ],
    },
    

//endnewquest

//lotendrhymingWordsletter

thisstart: {
  botPrompt: '"<strong>This</strong>" is used when we talk about an object which is near to us. 🕺 --> 🎒 ',
  answers: [
    {
      nextId: 'thisexampleimage',
    },
  ],
},
thisexampleimage: { 
  botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/bag.png',
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'thisexampletext',
    },
  ],
},
thisexampletext: {
  botPrompt: 'Answer is : <strong>This</strong>  is a bag.',
  answers: [
    {
      nextId: 'thisexampleimageq',
    },
  ],
},
thisexampleimageq: { 
  botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/orange.jpg',
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'thisq',
    },
  ],
},

thisq: {
  botPrompt: 'Now try with above Image!',
  input: textField(),
  answers: [
    {
      answer: common_greetings_negative,
      catchTFID: true,
      nextId: 'thatstart',
    },
  ],
},

//that

thatstart: {
  botPrompt: '"<strong>That</strong>" is used when we talk about an object which is far from us 🕺 -----------------> ✈️',
  answers: [
    {
      nextId: 'thatexampleimage',
    },
  ],
},
thatexampleimage: { 
  botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/flight.png',
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'thatexampletext',
    },
  ],
},
thatexampletext: {
  botPrompt: 'Answer is : <strong>That</strong> is an Aeroplane.',
  answers: [
    {
      nextId: 'thatexampleimageq',
    },
  ],
},
thatexampleimageq: { 
  botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/tree.png',
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'thatq',
    },
  ],
},

thatq: {
  botPrompt: 'Now try with above Image!',
  input: textField(),
  answers: [
    {
      answer: common_greetings_negative,
      catchTFID: true,
      nextId: 'endConv',
    },
  ],
},



endConv: {
  botPrompt: 'Thank you Will Meet you tomorrow ',
  input: endOfConversation(),
  answers: [
    {
      nextId: 'endConv',
    },
  ],
},

 


};





export default questions;

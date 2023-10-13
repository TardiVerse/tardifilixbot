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
const numberslot = Array.from({ length: 40 }, (_, i) => i + 1);

// Shuffle the array
const shuffleArraylot = shuffleNumberArraylot(numberslot);





function shuffleNumberArraylottwo(array) {
  const shuffleNumberArraylottwo = array.slice();
  for (let i = shuffleNumberArraylot.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleNumberArraylottwo[i], shuffleNumberArraylottwo[j]] = [shuffleNumberArraylottwo[j], shuffleNumberArraylottwo[i]];
  }
  return shuffleNumberArraylottwo;
}

// Create an array containing numbers from 1 to 77
const numberslottwo = Array.from({ length: 20 }, (_, i) => i + 1);

// Shuffle the array
const shuffleArraylottwo = shuffleNumberArraylot(numberslottwo);



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

    {
      answer: 'FLN',
      nextId: 'choosestate',
    },
    {
      answer: 'CLASS I',
      nextId: 'classi',
    },
    {
      answer: 'CLASS II',
      nextId: 'classii',
    },
    {
      answer: 'CLASS III',
      nextId: 'classiii',
    },
    {
      answer: 'CLASS IV',
      nextId: 'classiv',
    },
    {
      answer: 'CLASS V',
      nextId: 'classv',
    },
    {
      answer: 'CLASS VI',
      nextId: 'classvi',
    },
    {
      answer: 'CLASS VII',
      nextId: 'classvii',
    },
    {
      answer: 'CLASS VIII',
      nextId: 'classviii',
    },
   
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


//shuffletwostart

//classi
classi: {
  botPrompt: 'You Have Selected CLASS I . Which subject you would like to start',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Maths', "English"]),
  answers: [
    {
      answer: 'Maths',
      nextId: 'tfidgenrationtext',
    },
    {
      answer: "English",
      nextId: "firstEnglish"+shuffleArraylottwo[1],
    },
  
  ],
},

//classienglish
//1
['firstEnglish'+shuffleArraylottwo[1]]: {
  botPrompt: 'Question 1:Complete the sentence: "I have ____ apple."',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "the",]),
    answers: [
      {
        answer: 'a',
        nextId: 'infirstEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'an',
        nextId: 'firstEnglishcorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "the",
        nextId: 'infirstEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      
    ],
  },
  
  firstEnglishcorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'firstEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  infirstEnglishcorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'firstEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  
    //2
    ['firstEnglish'+shuffleArraylottwo[2]]: {
      botPrompt: ' Which article should be used before words that start with a vowel sound?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['A', 'An', "The"]),
        answers: [
          {
            answer: 'A',
            nextId: 'infirstEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'An',
            nextId: 'firstEnglishcorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "The",
            nextId: 'infirstEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq2: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
      infirstEnglishcorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
  
      //3
    ['firstEnglish'+shuffleArraylottwo[3]]: {
      botPrompt: 'Complete the sentence: "He has ____ toy."?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['A', 'An', "The"]),
        answers: [
          {
            answer: 'a',
            nextId: 'firstEnglishcorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'an',
            nextId: 'infirstEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "the",
            nextId: 'infirstEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq3: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
      infirstEnglishcorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
  
      //4
    ['firstEnglish'+shuffleArraylottwo[4]]: {
      botPrompt: 'What are naming words called in English?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Verbs', 'Nouns', "Adjectives"]),
        answers: [
          {
            answer: 'Verbs',
            nextId: 'infirstEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Nouns',
            nextId: 'firstEnglishcorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Adjectives",
            nextId: 'infirstEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq4: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
      infirstEnglishcorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
  
      //5
    ['firstEnglish'+shuffleArraylottwo[5]]: {
      botPrompt: ' Which of the following is a noun?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Run', 'Jump', "Cat"]),
        answers: [
          {
            answer: 'Run',
            nextId: 'infirstEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Jump',
            nextId: 'infirstEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Cat",
            nextId: 'firstEnglishcorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq5: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
      infirstEnglishcorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
       //6
    ['firstEnglish'+shuffleArraylottwo[6]]: {
      botPrompt: 'Which word is a noun in this sentence: "The big red ball bounced"? ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['big', 'red', "ball"]),
        answers: [
          {
            answer: 'big',
            nextId: 'infirstEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'red',
            nextId: 'infirstEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "ball",
            nextId: 'firstEnglishcorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq6: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
      infirstEnglishcorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
       //7
    ['firstEnglish'+shuffleArraylottwo[7]]: {
      botPrompt: 'Which of these is a common noun?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['India', 'Mumbai', "City"]),
        answers: [
          {
            answer: 'India',
            nextId: 'infirstEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Mumbai',
            nextId: 'infirstEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "City",
            nextId: 'firstEnglishcorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq7: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
      infirstEnglishcorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
       //8
    ['firstEnglish'+shuffleArraylottwo[8]]: {
      botPrompt: 'Which word is a common noun in this sentence: "The sun shines brightly"?    ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['The', 'sun', "shines"]),
        answers: [
          {
            answer: 'The',
            nextId: 'infirstEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'sun',
            nextId: 'firstEnglishcorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "shines",
            nextId: 'infirstEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq8: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
      infirstEnglishcorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
       //9
    ['firstEnglish'+shuffleArraylottwo[9]]: {
      botPrompt: 'What are words that name specific people, places, or things called?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['General nouns', 'Special nouns', "Proper nouns"]),
        answers: [
          {
            answer: 'General nouns',
            nextId: 'infirstEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Special nouns',
            nextId: 'infirstEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Proper nouns",
            nextId: 'firstEnglishcorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      firstEnglishcorrectq9: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
      infirstEnglishcorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
      answers: [
        {
          nextId: 'firstEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
  
  //10
      ['firstEnglish'+shuffleArraylottwo[10]]: {
        botPrompt: 'What type of noun is "Eiffel Tower" in the sentence: "The Eiffel Tower is in Paris"?      ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Common noun', ' Proper noun ', "Animal noun"]),
          answers: [
            {
              answer: ' Common noun',
              nextId: 'infirstEnglishcorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Proper noun',
              nextId: 'infirstEnglishcorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Animal noun",
              nextId: 'firstEnglishcorrectq10',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq10: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[11],
          },
        ],
        },
        infirstEnglishcorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[11],
          },
        ],
        },
  
  
        //11
      ['firstEnglish'+shuffleArraylottwo[11]]: {
        botPrompt: 'What kind of nouns are words like "teacher," "dog," and "book"?" ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Common nouns ', ' Proper noun ', "Super nouns"]),
          answers: [
            {
              answer: ' Common noun',
              nextId: 'firstEnglishcorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Proper noun',
              nextId: 'infirstEnglishcorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Super nouns",
              nextId: 'infirstEnglishcorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[12],
          },
        ],
        },
        infirstEnglishcorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[12],
          },
        ],
        },
  
  
          //12
      ['firstEnglish'+shuffleArraylottwo[12]]: {
        botPrompt: 'Complete the sentence: "We went to ____ beach." ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['a', ' an  ', "the"]),
          answers: [
            {
              answer: '  a',
              nextId: 'infirstEnglishcorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'an',
              nextId: 'infirstEnglishcorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "the",
              nextId: 'firstEnglishcorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[12],
          },
        ],
        },
        infirstEnglishcorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[12],
          },
        ],
        },
  
  
          //13
      ['firstEnglish'+shuffleArraylottwo[13]]: {
        botPrompt: 'What are the names of specific people, places, or things like "New York" and "Cinderella" called? ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['General nouns', ' Common nouns ', "Proper nouns"]),
          answers: [
            {
              answer: ' General nouns',
              nextId: 'infirstEnglishcorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Common nouns',
              nextId: 'infirstEnglishcorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Proper nouns",
              nextId: 'firstEnglishcorrectq13',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq13: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[14],
          },
        ],
        },
        infirstEnglishcorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[14],
          },
        ],
        },
      
  
            //14
      ['firstEnglish'+shuffleArraylottwo[14]]: {
        botPrompt: 'Which of these words is a verb: "apple," "run," or "table"? ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['apple', ' run', "table"]),
          answers: [
            {
              answer: 'apple',
              nextId: 'infirstEnglishcorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'run',
              nextId: 'firstEnglishcorrectq14',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "table",
              nextId: 'infirstEnglishcorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq14: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[15],
          },
        ],
        },
        infirstEnglishcorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[15],
          },
        ],
        },
      
  
            //15
      ['firstEnglish'+shuffleArraylottwo[15]]: {
        botPrompt: 'What are words that show what someone or something is doing called?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Adjectives', ' Verbs', "Pronouns"]),
          answers: [
            {
              answer: ' Adjectives',
              nextId: 'infirstEnglishcorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Verbs',
              nextId: 'firstEnglishcorrectq15',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Pronouns",
              nextId: 'infirstEnglishcorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq15: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[16],
          },
        ],
        },
        infirstEnglishcorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[16],
          },
        ],
        },
      
  
  
  
            //16
      ['firstEnglish'+shuffleArraylottwo[16]]: {
        botPrompt: 'What are words like "jump," "eat," and "dance" called?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Nouns', ' Verbs', "Adverbs"]),
          answers: [
            {
              answer: ' Nouns',
              nextId: 'infirstEnglishcorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Verbs',
              nextId: 'firstEnglishcorrectq16',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Adverbs",
              nextId: 'infirstEnglishcorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq16: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[17],
          },
        ],
        },
        infirstEnglishcorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[17],
          },
        ],
        },
      
  
           //17
      ['firstEnglish'+shuffleArraylottwo[17]]: {
        botPrompt: 'Which word is a verb in this sentence: "The big dog barked loudly"?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['big', ' dog', "Adverbs"]),
          answers: [
            {
              answer: ' big',
              nextId: 'infirstEnglishcorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'dog',
              nextId: 'infirstEnglishcorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "barked",
              nextId: 'firstEnglishcorrectq17',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq17: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[18],
          },
        ],
        },
        infirstEnglishcorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[18],
          },
        ],
        },
  
  
           //18
      ['firstEnglish'+shuffleArraylottwo[18]]: {
        botPrompt: 'Which of the following is an adjective?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Jump', ' Big', "Run"]),
          answers: [
            {
              answer: ' Jump',
              nextId: 'infirstEnglishcorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Big',
              nextId: 'firstEnglishcorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Run",
              nextId: 'infirstEnglishcorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq18: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[19],
          },
        ],
        },
        infirstEnglishcorrectq18: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[19],
          },
        ],
        },
  
  
           //19
      ['firstEnglish'+shuffleArraylottwo[19]]: {
        botPrompt: 'Which word is an adjective in this sentence: "The small, red ball bounced"? ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['The', ' small', "bounced"]),
          answers: [
            {
              answer: ' The',
              nextId: 'infirstEnglishcorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'small',
              nextId: 'firstEnglishcorrectq19',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "bounced",
              nextId: 'infirstEnglishcorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq19: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[20],
          },
        ],
        },
        infirstEnglishcorrectq19: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstEnglish'+shuffleArraylottwo[20],
          },
        ],
        },
  
  
           //20
      ['firstEnglish'+shuffleArraylottwo[20]]: {
        botPrompt: 'What type of word is "shiny" in the sentence: "She found a shiny coin"?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Nouns', ' Verbs', "Adjective"]),
          answers: [
            {
              answer: ' Nouns',
              nextId: 'infirstEnglishcorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Verbs',
              nextId: 'infirstEnglishcorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "AdvAdjective",
              nextId: 'firstEnglishcorrectq20',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        firstEnglishcorrectq20: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtocountinefirstenglish',
          },
        ],
        },
        infirstEnglishcorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'wishtocountinefirstenglish',
          },
        ],
        },

        wishtocountinefirstEnglish: {
          botPrompt: 'You have Completed English. Do you Wish to Continue ?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Yes', "No"]),
          answers: [
            {
              answer: 'Yes',
              nextId: 'chooseclass',
            },
            {
              answer: "No",
              nextId: 'endConv',
            },
          
          ],
        },

//Classimaths

//1
['firstMaths'+shuffleArraylottwo[1]]: {
  botPrompt: 'Question 1: What is the missing number in the number bond: 7 + ___ = 10?"',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4",]),
    answers: [
      {
        answer: '2',
        nextId: 'infirstMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '3',
        nextId: 'firstMathscorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "4",
        nextId: 'infirstMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      
    ],
  },
  
  firstMathscorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'firstMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  infirstMathscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'firstMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  
    //2
    ['firstMaths'+shuffleArraylottwo[2]]: {
      botPrompt: 'Which of the following represents the number "eighty-five" in digits?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['85', '58', "15"]),
        answers: [
          {
            answer: '85',
            nextId: 'firstMathscorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '58',
            nextId: 'infirstMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "15",
            nextId: 'infirstMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq2: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[3],
        },
      ],
      },
      infirstMathscorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"85"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[3],
        },
      ],
      },
  
      //3
    ['firstMaths'+shuffleArraylottwo[3]]: {
      botPrompt: 'How many tens are there in the number 36',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['3', '6', "30"]),
        answers: [
          {
            answer: '3',
            nextId: 'firstMathscorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '6',
            nextId: 'infirstMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "30",
            nextId: 'infirstMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq3: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[4],
        },
      ],
      },
      infirstMathscorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[4],
        },
      ],
      },
  
      //4
    ['firstMaths'+shuffleArraylottwo[4]]: {
      botPrompt: 'What is the number name for 42?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField([' forty-two', 'twenty-four', "fifty-two"]),
        answers: [
          {
            answer: ' forty-two',
            nextId: 'firstMathscorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'twenty-four',
            nextId: 'infirstMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "fifty-two ",
            nextId: 'infirstMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq4: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[5],
        },
      ],
      },
      infirstMathscorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"forty-two"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[5],
        },
      ],
      },
  
      //5
    ['firstMaths'+shuffleArraylottwo[5]]: {
      botPrompt: ' Find the missing number in the number bond: 9 + ___ = 15',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['6', '7', "8"]),
        answers: [
          {
            answer: '6',
            nextId: 'firstMathscorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '7',
            nextId: 'infirstMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "8",
            nextId: 'infirstMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq5: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[6],
        },
      ],
      },
      infirstMathscorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
       //6
    ['firstMaths'+shuffleArraylottwo[6]]: {
      botPrompt: 'Write the number name for 67.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['sixty-seven', 'seventy-six', "sixty-six"]),
        answers: [
          {
            answer: 'sixty-seven',
            nextId: 'firstMathscorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'seventy-six',
            nextId: 'infirstMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "sixty-six",
            nextId: 'infirstMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq6: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[7],
        },
      ],
      },
      infirstMathscorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sixty-seven"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
       //7
    ['firstMaths'+shuffleArraylottwo[7]]: {
      botPrompt: 'How many ones are there in the number 29?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['2', '9', "29"]),
        answers: [
          {
            answer: '2',
            nextId: 'infirstMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '9',
            nextId: 'firstMathscorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "29",
            nextId: 'infinirstMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq7: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[8],
        },
      ],
      },
      infirstMathscorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
       //8
    ['firstMaths'+shuffleArraylottwo[8]]: {
      botPrompt: 'Complete the number bond: 8 + ___ = 15 ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['7', '6', "5"]),
        answers: [
          {
            answer: '7',
            nextId: 'firstMathscorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '6',
            nextId: 'infirstMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "5",
            nextId: 'infirstMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq8: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[9],
        },
      ],
      },
      infirstMathscorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
       //9
    ['firstMaths'+shuffleArraylottwo[9]]: {
      botPrompt: 'What is the value of the digit 7 in the number 743?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['7 ', '70', "700"]),
        answers: [
          {
            answer: ' 7',
            nextId: 'infirstMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '70 ',
            nextId: 'infirstMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "700",
            nextId: 'firstMathscorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      firstMathscorrectq9: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[10],
        },
      ],
      },
      infirstMathscorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"700"</strong>',
      answers: [
        {
          nextId: 'firstMaths'+shuffleArraylottwo[10],
        },
      ],
      },
  
  //10
      ['firstMaths'+shuffleArraylottwo[10]]: {
        botPrompt: 'Which of the following represents the number "seventy-nine" in digits? ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['97', ' 79 ', "59"]),
          answers: [
            {
              answer: ' 97',
              nextId: 'infirstMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '79',
              nextId: 'firstMathscorrectq10',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "59",
              nextId: 'infirstMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq10: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[11],
          },
        ],
        },
        infirstMathscorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"79"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[11],
          },
        ],
        },
  
  
        //11
      ['firstMaths'+shuffleArraylottwo[11]]: {
        botPrompt: 'How many tens are there in the number 52?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['5 ', ' 2 ', "50"]),
          answers: [
            {
              answer: ' 5',
              nextId: 'firstMathscorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '2',
              nextId: 'infirstMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "50",
              nextId: 'infirstMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[12],
          },
        ],
        },
        infirstMathscorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[12],
          },
        ],
        },
  
  
          //12
      ['firstMaths'+shuffleArraylottwo[12]]: {
        botPrompt: 'Write the number name for 28. ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['twenty-eight', ' twenty-two  ', "eighty-two"]),
          answers: [
            {
              answer: 'twenty-eight',
              nextId: 'firstMathscorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'twenty-two',
              nextId: 'infirstMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "eighty-two",
              nextId: 'infirstMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[12],
          },
        ],
        },
        infirstMathscorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"twenty-eight"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[12],
          },
        ],
        },
  
  
          //13
      ['firstMaths'+shuffleArraylottwo[13]]: {
        botPrompt: 'Find the missing number in the number bond: 6 + ___ = 10  ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['4', ' 5 ', "6"]),
          answers: [
            {
              answer: ' 4',
              nextId: 'firstMathscorrectq13',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '5',
              nextId: 'infirstMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "6",
              nextId: 'infirstMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq13: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[14],
          },
        ],
        },
        infirstMathscorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[14],
          },
        ],
        },
      
  
            //14
      ['firstMaths'+shuffleArraylottwo[14]]: {
        botPrompt: 'What is the value of the digit 3 in the number 325?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['3', ' 30', "300"]),
          answers: [
            {
              answer: '3',
              nextId: 'infirstMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '30',
              nextId: 'infirstMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "300",
              nextId: 'firstMathscorrectq14',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq14: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[15],
          },
        ],
        },
        infirstMathscorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"300"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[15],
          },
        ],
        },
      
  
            //15
      ['firstMaths'+shuffleArraylottwo[15]]: {
        botPrompt: 'Which of the following represents the number "fifty-three" in digits?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['53', ' 35', "23"]),
          answers: [
            {
              answer: ' 53',
              nextId: 'firstMathscorrectq15',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '35',
              nextId: 'infirstMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "23",
              nextId: 'infirstMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq15: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[16],
          },
        ],
        },
        infirstMathscorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"53"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[16],
          },
        ],
        },
      
  
  
  
            //16
      ['firstMaths'+shuffleArraylottwo[16]]: {
        botPrompt: 'What is the sum of 36 and 25?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['51', ' 61', "71"]),
          answers: [
            {
              answer: ' 51',
              nextId: 'infirstMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '61',
              nextId: 'firstMathscorrectq16',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "71",
              nextId: 'infirstMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq16: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[17],
          },
        ],
        },
        infirstMathscorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"61"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[17],
          },
        ],
        },
      
  
           //17
      ['firstMaths'+shuffleArraylottwo[17]]: {
        botPrompt: 'If you have 42 candies and you get 28 more, how many candies do you have now?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['60', ' 70', "80"]),
          answers: [
            {
              answer: ' 60',
              nextId: 'firstMathscorrectq17',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '70',
              nextId: 'infirstMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "80",
              nextId: 'infirstMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq17: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[18],
          },
        ],
        },
        infirstMathscorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"60"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[18],
          },
        ],
        },
  
  
           //18
      ['firstMaths'+shuffleArraylottwo[18]]: {
        botPrompt: 'What is the result of 57 minus 23?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['34', ' 44', "54"]),
          answers: [
            {
              answer: ' 34',
              nextId: 'firstMathscorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '44',
              nextId: 'infirstMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "54",
              nextId: 'infirstMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq18: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[19],
          },
        ],
        },
        infirstMathscorrectq18: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[19],
          },
        ],
        },
  
  
           //19
      ['firstMaths'+shuffleArraylottwo[19]]: {
        botPrompt: 'Maria had 58 stickers. She gave 37 to her friend. How many stickers does Maria have now?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['21', ' 31', "41"]),
          answers: [
            {
              answer: ' 21',
              nextId: 'infirstMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '31',
              nextId: 'firstMathscorrectq19',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "41",
              nextId: 'infirstMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq19: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[20],
          },
        ],
        },
        infirstMathscorrectq19: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
        answers: [
          {
            nextId: 'firstMaths'+shuffleArraylottwo[20],
          },
        ],
        },
  
  
           //20
      ['firstMaths'+shuffleArraylottwo[20]]: {
        botPrompt: 'What is the sum of 48 and 29?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['67', ' 77', "87"]),
          answers: [
            {
              answer: ' 67',
              nextId: 'infirstMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '77',
              nextId: 'infirstMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "87",
              nextId: 'firstMathscorrectq20',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        firstMathscorrectq20: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtocountinefirstMaths',
          },
        ],
        },
        infirstMathscorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"87"</strong>',
        answers: [
          {
            nextId: 'wishtocountinefirstMaths',
          },
        ],
        },


        wishtocountinefirstMaths: {
          botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Yes', "No"]),
          answers: [
            {
              answer: 'Yes',
              nextId: 'chooseclass',
            },
            {
              answer: "No",
              nextId: 'endConv',
            },
          
          ],
        },



//classII
classii: {
botPrompt: 'You Have Selected CLASS II. Which subject you would like to start',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Maths', "English"]),
  answers: [
    {
      answer: 'Maths',
      nextId: 'secondMaths'+shuffleArraylottwo[1],
    },
    {
      answer: "English",
      nextId: "secondEnglish"+shuffleArraylottwo[1],
    },
  
  ],
},
//classIIEnglish
//1

['secondEnglish'+shuffleArraylottwo[1]]: {
  botPrompt: 'Which word represents a female child?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Man', 'Woman', "Girl","Boy"]),
    answers: [
      {
        answer: 'Man',
        nextId: 'insecondEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Woman',
        nextId: 'insecondEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Girl",
        nextId: 'secondEnglishcorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Boy",
        nextId: 'insecondEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  secondEnglishcorrectq1: {
  botPrompt: 'Hurray! <strong>Girl</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'secondEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  insecondEnglishcorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Girl"</strong>',
  answers: [
    {
      nextId: 'secondEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
    //2
    ['secondEnglish'+shuffleArraylottwo[2]]: {
      botPrompt: 'What is the female counterpart of "Bull"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Cowess', 'Calf', "Cow","Chicken"]),
        answers: [
          {
            answer: 'Cowess',
            nextId: 'insecondEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Calf',
            nextId: 'insecondEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Cow",
            nextId: 'secondEnglishcorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Chicken",
            nextId: 'insecondEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq2: {
      botPrompt: 'Hurray! <strong>Cow</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
      insecondEnglishcorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cow"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
  
  
  //3
  ['secondEnglish'+shuffleArraylottwo[3]]: {
      botPrompt: 'What do we call a male horse?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Mare', 'Foal', "Stallion","Pony"]),
        answers: [
          {
            answer: 'Mare',
            nextId: 'insecondEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Foal',
            nextId: 'insecondEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Stallion",
            nextId: 'secondEnglishcorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Pony",
            nextId: 'insecondEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq3: {
      botPrompt: 'Hurray! <strong>Stallion</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
      insecondEnglishcorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Stallion"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
  
  
      //4
  ['secondEnglish'+shuffleArraylottwo[4]]: {
      botPrompt: 'Which word represents a male cat?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Puppy', 'Kitten', "Tomcat","Doe"]),
        answers: [
          {
            answer: 'Puppy',
            nextId: 'insecondEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Kitten',
            nextId: 'insecondEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Tomcat",
            nextId: 'secondEnglishcorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Doe",
            nextId: 'insecondEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq4: {
      botPrompt: 'Hurray! <strong>Tomcat</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
      insecondEnglishcorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Tomcat"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
  
  
      //5
  ['secondEnglish'+shuffleArraylottwo[5]]: {
      botPrompt: 'Choose the opposite gender of "Stag".',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Hind', 'Stag', "Stallion","Pony"]),
        answers: [
          {
            answer: 'Hind',
            nextId: 'secondEnglishcorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Stag',
            nextId: 'insecondEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Stallion",
            nextId: 'insecondEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Pony",
            nextId: 'insecondEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq5: {
      botPrompt: 'Hurray! <strong>Hind</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
      insecondEnglishcorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hind"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
      //6
  ['secondEnglish'+shuffleArraylottwo[6]]: {
      botPrompt: 'What is the present tense of the verb "play" in the sentence: "I ___ with my friends"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['plays', 'played', "playing","play"]),
        answers: [
          {
            answer: 'plays',
            nextId: 'insecondEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'played',
            nextId: 'insecondEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "playing",
            nextId: 'insecondEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "play",
            nextId: 'secondEnglishcorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq6: {
      botPrompt: 'Hurray! <strong>play</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
      insecondEnglishcorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"play"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
      //7
  ['secondEnglish'+shuffleArraylottwo[7]]: {
      botPrompt: 'Which of the following sentences is in the present tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['She danced at the party.', 'They will swim tomorrow.', "He reads a book.","I ate lunch earlier."]),
        answers: [
          {
            answer: 'She danced at the party.',
            nextId: 'insecondEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They will swim tomorrow.',
            nextId: 'insecondEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "He reads a book.",
            nextId: 'secondEnglishcorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "I ate lunch earlier.",
            nextId: 'insecondEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq7: {
      botPrompt: 'Hurray! <strong>He reads a book.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
      insecondEnglishcorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>" He reads a book."</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
      //8
  ['secondEnglish'+shuffleArraylottwo[8]]: {
      botPrompt: 'In the sentence, "The cat ___ on the roof," which word completes the sentence in the present tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['jump', 'jumping', "jumps","jumped"]),
        answers: [
          {
            answer: 'jump',
            nextId: 'insecondEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'jumping',
            nextId: 'insecondEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "jumps",
            nextId: 'secondEnglishcorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "jumped",
            nextId: 'insecondEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq8: {
      botPrompt: 'Hurray! <strong>jumps</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
      insecondEnglishcorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"jumps"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
      //9
  ['secondEnglish'+shuffleArraylottwo[9]]: {
      botPrompt: 'Which sentence shows something happening right now in the present?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['She will go to school tomorrow.', 'He played football yesterday.', "We went to the beach last summer.","I listen to music in my free time."]),
        answers: [
          {
            answer: 'She will go to school tomorrow.',
            nextId: 'insecondEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'He played football yesterday.',
            nextId: 'insecondEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "We went to the beach last summer.",
            nextId: 'insecondEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "I listen to music in my free time.",
            nextId: 'secondEnglishcorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq9: {
      botPrompt: 'Hurray! <strong>I listen to music in my free time.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
      insecondEnglishcorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I listen to music in my free time."</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
  
  
     
  
  
       //10
  ['secondEnglish'+shuffleArraylottwo[10]]: {
      botPrompt: 'Complete the sentence: "I _______ my homework in the evening."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['do', 'does', "did","doing"]),
        answers: [
          {
            answer: 'do',
            nextId: 'secondEnglishcorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'does',
            nextId: 'insecondEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "did",
            nextId: 'insecondEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "doing",
            nextId: 'insecondEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq10: {
      botPrompt: 'Hurray! <strong>do</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[11],
        },
      ],
      },
      insecondEnglishcorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"do"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[11],
        },
  
      ],
      },
      
      
          //11
  ['secondEnglish'+shuffleArraylottwo[11]]: {
      botPrompt: 'Choose the past tense of "write."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['writes', 'writing', "wrote","write"]),
        answers: [
          {
            answer: 'writes',
            nextId: 'insecondEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'writing',
            nextId: 'insecondEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "wrote",
            nextId: 'secondEnglishcorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "write",
            nextId: 'insecondEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      secondEnglishcorrectq11: {
      botPrompt: 'Hurray! <strong>wrote</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[12],
        },
      ],
      },
      insecondEnglishcorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"wrote"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[12],
        },
  
      ],
      },
  
  
          //12
  ['secondEnglish'+shuffleArraylottwo[12]]: {
      botPrompt: 'Yesterday, she _____ (eat) a delicious cake. Choose the correct past tense.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['eating', 'eats', "ate"]),
        answers: [
          {
            answer: 'eating',
            nextId: 'insecondEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'eats',
            nextId: 'insecondEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "ate",
            nextId: 'secondEnglishcorrectq12',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
   
        ],
      },
      
      secondEnglishcorrectq12: {
      botPrompt: 'Hurray! <strong>ate</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[13],
        },
      ],
      },
      insecondEnglishcorrectq12: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"ate"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[13],
        },
  
      ],
      },
  
  
          //13
  ['secondEnglish'+shuffleArraylottwo[13]]: {
      botPrompt: 'Choose the correct past tense: We _____ (play) with our friends last evening.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['playing', 'plays', "played"]),
        answers: [
          {
            answer: 'playing',
            nextId: 'insecondEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'plays',
            nextId: 'insecondEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "played",
            nextId: 'secondEnglishcorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      secondEnglishcorrectq13: {
      botPrompt: 'Hurray! <strong>played</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[14],
        },
      ],
      },
      insecondEnglishcorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"played"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[14],
        },
  
      ],
      },
  
          //14
  ['secondEnglish'+shuffleArraylottwo[14]]: {
      botPrompt: 'She _____ (draw) a beautiful picture yesterday. Choose the correct past tense.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['drawing', 'draws', "drew"]),
        answers: [
          {
            answer: 'drawing',
            nextId: 'insecondEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'draws',
            nextId: 'insecondEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "drew",
            nextId: 'secondEnglishcorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
         
        ],
      },
      
      secondEnglishcorrectq14: {
      botPrompt: 'Hurray! <strong>drew</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[15],
        },
      ],
      },
      insecondEnglishcorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"drew"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[15],
        },
  
      ],
      },
  
  
          //15
  ['secondEnglish'+shuffleArraylottwo[15]]: {
      botPrompt: 'What is the past tense of "run"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['ran', 'runs', "running"]),
        answers: [
          {
            answer: 'ran',
            nextId: 'secondEnglishcorrectq15',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'runs',
            nextId: 'insecondEnglishcorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "running",
            nextId: 'insecondEnglishcorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      secondEnglishcorrectq15: {
      botPrompt: 'Hurray! <strong>ran</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[16],
        },
      ],
      },
      insecondEnglishcorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"ran"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[16],
        },
  
      ],
      },
  
  
  
          
      //16
  ['secondEnglish'+shuffleArraylottwo[16]]: {
      botPrompt: 'Which word is a conjunction in the sentence: "I like both ice cream _____ cake."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['and', 'like', "both"]),
        answers: [
          {
            answer: 'and',
            nextId: 'secondEnglishcorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'like',
            nextId: 'insecondEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "both",
            nextId: 'insecondEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      secondEnglishcorrectq16: {
      botPrompt: 'Hurray! <strong>and</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[17],
        },
      ],
      },
      insecondEnglishcorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"ran"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[17],
        },
  
      ],
      },
  
      //17
  ['secondEnglish'+shuffleArraylottwo[17]]: {
      botPrompt: 'Which of these words is NOT a conjunction?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['and', 'jump', "or"]),
        answers: [
          {
            answer: 'and',
            nextId: 'insecondEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'jump',
            nextId: 'secondEnglishcorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "or",
            nextId: 'insecondEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      secondEnglishcorrectq17: {
      botPrompt: 'Hurray! <strong>jump</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[18],
        },
      ],
      },
      insecondEnglishcorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"jump"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[18],
        },
  
      ],
      },
  
      //18
  ['secondEnglish'+shuffleArraylottwo[18]]: {
      botPrompt: 'Complete the sentence: "You can play with a ball __ a toy car."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['But', 'And', "Or", "So"]),
        answers: [
          {
            answer: 'But',
            nextId: 'insecondEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'And',
            nextId: 'insecondEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Or",
            nextId: 'secondEnglishcorrectq18',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
              answer: "So",
              nextId: 'insecondEnglishcorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
        ],
      },
      
      secondEnglishcorrectq18: {
      botPrompt: 'Hurray! <strong>Or</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[19],
        },
      ],
      },
      insecondEnglishcorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Or"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[19],
        },
  
      ],
      },
  
      //19
  ['secondEnglish'+shuffleArraylottwo[19]]: {
      botPrompt: 'They wanted to go to the beach, _____ it was too cold outside.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['and', 'but', "so"]),
        answers: [
          {
            answer: 'and',
            nextId: 'insecondEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'but',
            nextId: 'secondEnglishcorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "so",
            nextId: 'insecondEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      secondEnglishcorrectq19: {
      botPrompt: 'Hurray! <strong>but</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[20],
        },
      ],
      },
      insecondEnglishcorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"but"</strong>',
      answers: [
        {
          nextId: 'secondEnglish'+shuffleArraylottwo[20],
        },
  
      ],
      },
  
       //20
  ['secondEnglish'+shuffleArraylottwo[20]]: {
      botPrompt: 'We sang a song ________ it was a special occasion.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['and', 'because', "but"]),
        answers: [
          {
            answer: 'and',
            nextId: 'insecondEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'because',
            nextId: 'secondEnglishcorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "but",
            nextId: 'insecondEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      secondEnglishcorrectq20: {
      botPrompt: 'Hurray! <strong>because</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocontinuesecondEnglish',
        },
      ],
      },
      insecondEnglishcorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"because"</strong>',
      answers: [
        {
          nextId: 'wishtocontinuesecondEnglish',
          
        },
      ],
    },
  

  wishtocontinuesecondEnglish: {
    botPrompt: 'You have Completed English. Do you Wish to Continue ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', "No"]),
    answers: [
      {
        answer: 'Yes',
        nextId: 'chooseclass',
      },
      {
        answer: "No",
        nextId: 'endConv',
      },
    
    ],
  },



//classIIMaths
   ['secondMaths'+shuffleArraylottwo[1]]: {
    botPrompt: 'Double of 12 is',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['6', '24', "12","21"]),
      answers: [
        {
          answer: '6',
          nextId: 'insecondMathscorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '24',
          nextId: 'secondMathscorrectq1',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "12",
          nextId: 'insecondMathscorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "21",
          nextId: 'insecondMathscorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    secondMathscorrectq1: {
    botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'secondMaths'+shuffleArraylottwo[2],
      },
    ],
    },
    insecondMathscorrectq1: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
    answers: [
      {
        nextId: 'secondMaths'+shuffleArraylottwo[2],
      },
    ],
    },
    
    
      //2
      ['secondMaths'+shuffleArraylottwo[2]]: {
        botPrompt: '9 x 8 is ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['27', '89', "72","18"]),
          answers: [
            {
              answer: '27',
              nextId: 'insecondMathscorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '89',
              nextId: 'insecondMathscorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "72",
              nextId: 'secondMathscorrectq2',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "18",
              nextId: 'insecondMathscorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq2: {
        botPrompt: 'Hurray! <strong>72</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[3],
          },
        ],
        },
        insecondMathscorrectq2: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"72"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[3],
          },
        ],
        },
    
    
    //3
    ['secondMaths'+shuffleArraylottwo[3]]: {
        botPrompt: 'Fardan has 27 marbles, from these he distributed equally among his 3 sisters and calculates how many marbles each one got',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['9', '3', "27","1"]),
          answers: [
            {
              answer: '9',
              nextId: 'secondMathscorrectq3',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '3',
              nextId: 'insecondMathscorrectq3',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "27",
              nextId: 'insecondMathscorrectq3',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "1",
              nextId: 'insecondMathscorrectq3',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq3: {
        botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[4],
          },
        ],
        },
        insecondMathscorrectq3: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[4],
          },
        ],
        },
    
    
        //4
    ['secondMaths'+shuffleArraylottwo[4]]: {
        botPrompt: '45 paise ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['₹0.45', '₹0.54', "₹0.04","₹0.55"]),
          answers: [
            {
              answer: '₹0.45',
              nextId: 'secondMathscorrectq4',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '₹0.54',
              nextId: 'insecondMathscorrectq4',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "₹0.55",
              nextId: 'insecondMathscorrectq4',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "₹0.04",
              nextId: 'insecondMathscorrectq4',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq4: {
        botPrompt: 'Hurray! <strong>₹0.45</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[5],
          },
        ],
        },
        insecondMathscorrectq4: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"₹0.45"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[5],
          },
        ],
        },
    
    
        //5
    ['secondMaths'+shuffleArraylottwo[5]]: {
        botPrompt: '1 out of 4 equal parts ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['1/4', '4/1', "2/4","3/4"]),
          answers: [
            {
              answer: '1/4',
              nextId: 'secondMathscorrectq5',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '4/1',
              nextId: 'insecondMathscorrectq5',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "2/4",
              nextId: 'insecondMathscorrectq5',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "3/4",
              nextId: 'insecondMathscorrectq5',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq5: {
        botPrompt: 'Hurray! <strong>1/4</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[6],
          },
        ],
        },
        insecondMathscorrectq5: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1/4"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[6],
          },
        ],
        },
    
    
        //6
    ['secondMaths'+shuffleArraylottwo[6]]: {
        botPrompt: '25 rupees 75 paise means',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['₹25.57', '₹25.75', "₹25.70","₹20.57"]),
          answers: [
            {
              answer: '₹25.57',
              nextId: 'insecondMathscorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '₹25.75',
              nextId: 'secondMathscorrectq6',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "₹25.70",
              nextId: 'insecondMathscorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "₹20.75",
              nextId: 'insecondMathscorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq6: {
        botPrompt: 'Hurray! <strong>₹25.75</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[7],
          },
        ],
        },
        insecondMathscorrectq6: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"₹25.75"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[7],
          },
        ],
        },
    
    
        //7
    ['secondMaths'+shuffleArraylottwo[7]]: {
        botPrompt: 'The unit of liquid is',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['mL', 'kg', "gms","ft"]),
          answers: [
            {
              answer: 'mL',
              nextId: 'secondMathscorrectq7',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'kg',
              nextId: 'insecondMathscorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "gms",
              nextId: 'insecondMathscorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "ft",
              nextId: 'insecondMathscorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq7: {
        botPrompt: 'Hurray! <strong>mL</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[8],
          },
        ],
        },
        insecondMathscorrectq7: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"mL"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[8],
          },
        ],
        },
    
    
        //8
    ['secondMaths'+shuffleArraylottwo[8]]: {
        botPrompt: '"Metre" is used for the measurement of ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['lengths', 'heights', "weights","both options a and b"]),
          answers: [
            {
              answer: 'lenghts',
              nextId: 'insecondMathscorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'heights',
              nextId: 'insecondMathscorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "weights",
              nextId: 'insecondMathscorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "both options a and b",
              nextId: 'secondMathscorrectq8',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq8: {
        botPrompt: 'Hurray! <strong>both options a and b</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[9],
          },
        ],
        },
        insecondMathscorrectq8: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"both options a and b"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[9],
          },
        ],
        },
    
    
        //9
    ['secondMaths'+shuffleArraylottwo[9]]: {
        botPrompt: 'How many days does the month of February have in a leap year?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['30', '31', "28","29"]),
          answers: [
            {
              answer: '30',
              nextId: 'insecondMathscorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '31',
              nextId: 'insecondMathscorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "28",
              nextId: 'insecondMathscorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "29",
              nextId: 'secondMathscorrectq9',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq9: {
        botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[10],
          },
        ],
        },
        insecondMathscorrectq9: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[10],
          },
        ],
        },
    
    
        
    
    
         //10
    ['secondMaths'+shuffleArraylottwo[10]]: {
        botPrompt: 'When do you get up in the morning?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['5', '5 a.m.', "5 p.m.","8 p.m."]),
          answers: [
            {
              answer: '5',
              nextId: 'insecondMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '5 a.m.',
              nextId: 'secondMathscorrectq10',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "5 p.m.",
              nextId: 'insecondMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "8 p.m.",
              nextId: 'insecondMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq10: {
        botPrompt: 'Hurray! <strong>5 a.m.</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[11],
          },
        ],
        },
        insecondMathscorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5 a.m."</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[11],
          },
    
        ],
        },
        
        
            //11
    ['secondMaths'+shuffleArraylottwo[11]]: {
        botPrompt: '60 minutes = _________ hr',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['1', '2', "0","3"]),
          answers: [
            {
              answer: '1',
              nextId: 'secondMathscorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '2',
              nextId: 'insecondMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "0",
              nextId: 'insecondMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "3",
              nextId: 'insecondMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq11: {
        botPrompt: 'Hurray! <strong>1</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[12],
          },
        ],
        },
        insecondMathscorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[12],
          },
    
        ],
        },
    
    
            //12
    ['secondMaths'+shuffleArraylottwo[12]]: {
        botPrompt: 'The number of edges of a cube is ____________ ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['6', '12', "8", "4"]),
          answers: [
            {
              answer: '6',
              nextId: 'insecondMathscorrectq12',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '8',
              nextId: 'insecondMathscorrectq12',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "12",
              nextId: 'secondMathscorrectq12',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "4",
              nextId: 'insecondMathscorrectq12',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
     
          ],
        },
        
        secondMathscorrectq12: {
        botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[13],
          },
        ],
        },
        insecondMathscorrectq12: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[13],
          },
    
        ],
        },
    
    
            //13
    ['secondMaths'+shuffleArraylottwo[13]]: {
        botPrompt: 'A ___________ has 3 sides and 3 corners.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['rectangle', 'square', "triagle", "cone"]),
          answers: [
            {
              answer: 'rectagle',
              nextId: 'insecondMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'square',
              nextId: 'insecondMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "triangle",
              nextId: 'secondMathscorrectq13',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "cone",
              nextId: 'insecondMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        secondMathscorrectq13: {
        botPrompt: 'Hurray! <strong>triangle</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[14],
          },
        ],
        },
        insecondMathscorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"triangle"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[14],
          },
    
        ],
        },
    
            //14
    ['secondMaths'+shuffleArraylottwo[14]]: {
        botPrompt: '10 O"clock is 1 hour _____________ than 9 o"clock ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Earlier', 'later', "past", "Quater"]),
          answers: [
            {
              answer: 'earlier',
              nextId: 'insecondMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Past',
              nextId: 'insecondMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "later",
              nextId: 'secondMathscorrectq14',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Quater',
              nextId: 'insecondMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
           
          ],
        },
        
        secondMathscorrectq14: {
        botPrompt: 'Hurray! <strong>later</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[15],
          },
        ],
        },
        insecondMathscorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"later"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[15],
          },
    
        ],
        },
    
    
            //15
    ['secondMaths'+shuffleArraylottwo[15]]: {
        botPrompt: 'Half of a whole means ___________________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['1/2', '2/2', "2/1", "1/1"]),
          answers: [
            {
              answer: '1/2',
              nextId: 'secondMathscorrectq15',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '2/2',
              nextId: 'insecondMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "2/1",
              nextId: 'insecondMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "1/1",
              nextId: 'insecondMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },

          ],
        },
        
        secondMathscorrectq15: {
        botPrompt: 'Hurray! <strong>1/2</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[16],
          },
        ],
        },
        insecondMathscorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1/2"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[16],
          },
    
        ],
        },
    
    
    
            
        //16
    ['secondMaths'+shuffleArraylottwo[16]]: {
        botPrompt: '81 ÷ 9 = _____________________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['2', '3', "7", "9"]),
          answers: [
            {
              answer: '2',
              nextId: 'insecondMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '3',
              nextId: 'insecondMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "7",
              nextId: 'insecondMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "9",
              nextId: 'secondMathscorrectq16',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
          
          ],
        },
        
        secondMathscorrectq16: {
        botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[17],
          },
        ],
        },
        insecondMathscorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[17],
          },
    
        ],
        },
    
        //17
    ['secondMaths'+shuffleArraylottwo[17]]: {
        botPrompt: 'Complete the patterns 12, 18, 24, ______, _______,42 ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['30,12', '30,36', "36,40", "24,30"]),
          answers: [
            {
              answer: '30,12',
              nextId: 'insecondMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '30,36',
              nextId: 'secondMathscorrectq17',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "36,40",
              nextId: 'insecondMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "24,30",
              nextId: 'insecondMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        secondMathscorrectq17: {
        botPrompt: 'Hurray! <strong>30,36</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[18],
          },
        ],
        },
        insecondMathscorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30,36"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[18],
          },
    
        ],
        },
    
        //18
    ['secondMaths'+shuffleArraylottwo[18]]: {
        botPrompt: '989 + 10 = ________________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['1000', '998', "999", "997"]),
          answers: [
            {
              answer: '1000',
              nextId: 'insecondMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '998',
              nextId: 'insecondMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "999",
              nextId: 'secondMathscorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
                answer: "997",
                nextId: 'insecondMathscorrectq18',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
          ],
        },
        
        secondMathscorrectq18: {
        botPrompt: 'Hurray! <strong>999</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[19],
          },
        ],
        },
        insecondMathscorrectq18: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"999"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[19],
          },
    
        ],
        },
    
        //19
    ['secondMaths'+shuffleArraylottwo[19]]: {
        botPrompt: '750 - 19 = __________________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['730', '739', "731", "741"]),
          answers: [
            {
              answer: '730',
              nextId: 'insecondMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '739',
              nextId: 'insecondMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "731",
              nextId: 'secondMathscorrectq19',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '741',
              nextId: 'insecondMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },

          ],
        },
        
        secondMathscorrectq19: {
        botPrompt: 'Hurray! <strong>731</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[20],
          },
        ],
        },
        insecondMathscorrectq19: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"731"</strong>',
        answers: [
          {
            nextId: 'secondMaths'+shuffleArraylottwo[20],
          },
    
        ],
        },
    
         //20
    ['secondMaths'+shuffleArraylottwo[20]]: {
        botPrompt: '350 x 0 = __________________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['350', '3500', "305", "0"]),
          answers: [
            {
              answer: '350',
              nextId: 'insecondMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '3500',
              nextId: 'insecondMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "305",
              nextId: 'insecondMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "0",
              nextId: 'secondMathscorrectq20',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
          
          ],
        },
        
        secondMathscorrectq20: {
        botPrompt: 'Hurray! <strong>0</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtocontinuesecondMaths',
          },
        ],
        },
        insecondMathscorrectq20: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
        answers: [
          {
            nextId: 'wishtocontinuesecondMaths',
          },
    
        ],
        },
        wishtocontinuesecondMaths: {
          botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Yes', "No"]),
          answers: [
            {
              answer: 'Yes',
              nextId: 'chooseclass',
            },
            {
              answer: "No",
              nextId: 'endConv',
            },
          
          ],
        },


//classIII

      classiii: {
        botPrompt: 'You Have Selected CLASS III. Which subject you would like to start',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Maths', "English","Science"]),
          answers: [
            {
              answer: 'Maths',
              nextId: 'thirdMaths'+shuffleArraylottwo[1],
            },
            {
              answer: "English",
              nextId: "thirdEnglish"+shuffleArraylottwo[1],
            },
            {
              answer: "Science",
              nextId: "thirdEnglish"+shuffleArraylottwo[1],
            },
      
          ],
        },  

         //thirdMaths
          //1
['thirdMaths'+shuffleArraylottwo[1]]: {
  botPrompt: 'Question 1: If you have 4 groups of 5 apples each, how many apples do you have in total?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['20', '30', "10",'30']),
    answers: [
      {
        answer: '20',
        nextId: 'thirdMathscorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: '30',
        nextId: 'thirdMathscorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "10",
        nextId: 'inthirdMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
          answer: '30',
          nextId: 'inthirdMathscorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
    ],
  },

  
  thirdMathscorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thirdMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  inthirdMathscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
  answers: [
    {
      nextId: 'thirdMaths'+shuffleArraylottwo[2],
    },
  ],
  },

    //2
    ['thirdMaths'+shuffleArraylottwo[2]]: {
      botPrompt: 'Ali has 3 baskets and each basket has 4 mangoes. If he eats half of the mangoes in each basket then how many mangoes does he have left with him?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['7', '8', "6",'4']),
        answers: [
          {
            answer: '7',
            nextId: 'inthirdMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '8',
            nextId: 'inthirdMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "6",
            nextId: 'thirdMathscorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
              answer: '4',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq2: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[3],
        },
      ],
      },
      inthirdMathscorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[3],
        },
      ],
      },
  
      //3
    ['thirdMaths'+shuffleArraylottwo[3]]: {
      botPrompt: ' What is division?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Addition numbers', 'sharing or grouping  numbers,', "subtracting numbers",'multiplying numbers']),
        answers: [
          {
            answer: 'Addition numbers',
            nextId: 'inthirdMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'sharing or grouping  numbers,',
            nextId: 'thirdMathscorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "subtracting numbers",
            nextId: 'inthirdMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'multiplying numbers',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq3: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[4],
        },
      ],
      },
      inthirdMathscorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sharing or grouping  numbers,"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[4],
        },
      ],
      },
  
      //4
    ['thirdMaths'+shuffleArraylottwo[4]]: {
      botPrompt: 'If you have 7  pieces of cake and you eat 6 pieces, what fraction of cake did you eat?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['6/7', '7/6', "6/6",'⅚']),
        answers: [
          {
            answer: '6/7',
            nextId: 'thirdMathscorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '7/6',
            nextId: 'inthirdMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "6/6",
            nextId: 'inthirdMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: '⅚ ',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq4: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[5],
        },
      ],
      },
      inthirdMathscorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6/7"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[5],
        },
      ],
      },
  
      //5
    ['thirdMaths'+shuffleArraylottwo[5]]: {
      botPrompt: 'What is used to measure length?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Scale,', 'tape', "pencil",'paper']),
        answers: [
          {
            answer: 'Scale,',
            nextId: 'thirdMathscorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'tape',
            nextId: 'inthirdMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "pencil",
            nextId: 'inthirdMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'paper',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq5: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[6],
        },
      ],
      },
      inthirdMathscorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Scale"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
       //6
    ['thirdMaths'+shuffleArraylottwo[6]]: {
      botPrompt: 'If an object has a mass of 500 gms, what is its mass in kilograms?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['0.05 kg', '0.5 kg', "5kg",'50 kg']),
        answers: [
          {
            answer: '0.05 kg',
            nextId: 'inthirdMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '0.5 kg,',
            nextId: 'thirdMathscorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "5kg,",
            nextId: 'inthirdMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: '50 kg',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq6: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[7],
        },
      ],
      },
      inthirdMathscorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0.5 kg,"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
       //7
    ['thirdMaths'+shuffleArraylottwo[7]]: {
      botPrompt: 'Capacity is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Measures of the weight of an object', 'Measures the volume of a container', "Measures the length of the solid",'Measures the height of a liquid']),
        answers: [
          {
            answer: 'Measures of the weight of an object',
            nextId: 'inthirdMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Measures the volume of a container',
            nextId: 'thirdMathscorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Measures the length of the solid",
            nextId: 'infinirstMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: 'Measures the height of a liquid',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq7: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[8],
        },
      ],
      },
      inthirdMathscorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Measures the volume of a container"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
       //8
    ['thirdMaths'+shuffleArraylottwo[8]]: {
      botPrompt: 'Convert the amount in paise ₹16.66',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['1666 p', '1006 p', "1766 p",'1066 p']),
        answers: [
          {
            answer: '1666 p',
            nextId: 'thirdMathscorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '1006 p',
            nextId: 'inthirdMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "1766 p",
            nextId: 'inthirdMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: '1066 p',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq8: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[9],
        },
      ],
      },
      inthirdMathscorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1666 p"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
       //9
    ['thirdMaths'+shuffleArraylottwo[9]]: {
      botPrompt: 'The number of vertices  in a cuboid is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['7 ', '8', "9",'12']),
        answers: [
          {
            answer: ' 7',
            nextId: 'inthirdMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '8 ',
            nextId: 'thirdMathscorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "9",
            nextId: 'inthirdMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: '12',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          
        ],
      },
      
      thirdMathscorrectq9: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[10],
        },
      ],
      },
      inthirdMathscorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
      answers: [
        {
          nextId: 'thirdMaths'+shuffleArraylottwo[10],
        },
      ],
      },
  
  //10
      ['thirdMaths'+shuffleArraylottwo[10]]: {
        botPrompt: ' Equivalent fraction of ⅘ is',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['⅘', ' 5/4 ', "8/10",'10/8']),
          answers: [
            {
              answer: ' ⅘',
              nextId: 'inthirdMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '5/4',
              nextId: 'inthirdMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "8/10",
              nextId: 'thirdMathscorrectq10',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '10/8',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq10: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[11],
          },
        ],
        },
        inthirdMathscorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8/10"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[11],
          },
        ],
        },
  
  
        //11
      ['thirdMaths'+shuffleArraylottwo[11]]: {
        botPrompt: ' 0 x 21456 = _______________________________ ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['21456 ', ' 21465 ', "0",'21654']),
          answers: [
            {
              answer: ' 21456',
              nextId: 'inthirdMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '21465',
              nextId: 'inthirdMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "0",
              nextId: 'thirdMathscorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '21654',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[12],
          },
        ],
        },
        inthirdMathscorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[12],
          },
        ],
        },
  
  
          //12
      ['thirdMaths'+shuffleArraylottwo[12]]: {
        botPrompt: ' The perimeter of a square is ______________ if the length of each side is 6 cm.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField([' 42cm', '24cm', "12cm",'18cm']),
          answers: [
            {
              answer: ' 42cm',
              nextId: 'inthirdMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '24cm',
              nextId: 'thirdMathscorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "12cm",
              nextId: 'inthirdMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '18cm',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[12],
          },
        ],
        },
        inthirdMathscorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24cm"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[12],
          },
        ],
        },
  
  
          //13
      ['thirdMaths'+shuffleArraylottwo[13]]: {
        botPrompt: '(41253+ 1234)+231 = (1234 + 231)+ ______________________________ ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['1234 ', ' 231 ', "41253",'1324']),
          answers: [
            {
              answer: ' 1234 ',
              nextId: 'inthirdMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '231',
              nextId: 'inthirdMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "41253",
              nextId: 'thirdMathscorrectq13',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '1324',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        thirdMathscorrectq13: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[14],
          },
        ],
        },
        inthirdMathscorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41253"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[14],
          },
        ],
        },
      
  
            //14
      ['thirdMaths'+shuffleArraylottwo[14]]: {
        botPrompt: '1 L 25mL  =  _____________________ mL',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['1250', ' 1520', "1025",'1502']),
          answers: [
            {
              answer: '1250',
              nextId: 'inthirdMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '1520',
              nextId: 'infinirstMathscorrectq14',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "1025",
              nextId: 'thirdMathscorrectq14',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '1502',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq14: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[15],
          },
        ],
        },
        inthirdMathscorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1520"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[15],
          },
        ],
        },
      
  
            //15
      ['thirdMaths'+shuffleArraylottwo[15]]: {
        botPrompt: 'Place value of 5 in the number 95321 _______________________________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['5', ' 50', "500",'5000']),
          answers: [
            {
              answer: ' 5',
              nextId: 'inthirdMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '50',
              nextId: 'inthirdMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "500",
              nextId: 'inthirdMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '5000',
              nextId: 'thirdMathscorrectq1',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq15: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[16],
          },
        ],
        },
        inthirdMathscorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5000"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[16],
          },
        ],
        },
      
  
  
  
            //16
      ['thirdMaths'+shuffleArraylottwo[16]]: {
        botPrompt: ' 9999 + 1 = _______________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['100', ' 10,000,', "1000",'10,0000']),
          answers: [
            {
              answer: ' 100',
              nextId: 'inthirdMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '10,000,',
              nextId: 'thirdMathscorrectq16',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "1000",
              nextId: 'inthirdMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '10,0000',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq16: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[17],
          },
        ],
        },
        inthirdMathscorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10,000"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[17],
          },
        ],
        },
      
  
           //17
      ['thirdMaths'+shuffleArraylottwo[17]]: {
        botPrompt: 'Sixty-seven thousand nine hundred ninety-nine _____________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['67,909', ' 76,999 ', "67,999 ",'67,990']),
          answers: [
            {
              answer: ' 67,909',
              nextId: 'thirdMathscorrectq17',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '76,999 ',
              nextId: 'inthirdMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "67,999 ",
              nextId: 'inthirdMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '67,990',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq17: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[18],
          },
        ],
        },
        inthirdMathscorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"67,909"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[18],
          },
        ],
        },
  
  
           //18
      ['thirdMaths'+shuffleArraylottwo[18]]: {
        botPrompt: 'Predecessor of the number 9089 is  _______________',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['9088', ' 9090', "9089",'9091']),
          answers: [
            {
              answer: ' 9088',
              nextId: 'thirdMathscorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '9090',
              nextId: 'inthirdMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "9089",
              nextId: 'inthirdMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '9091',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq18: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[19],
          },
        ],
        },
        inthirdMathscorrectq18: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9088"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[19],
          },
        ],
        },
  
  
           //19
      ['thirdMaths'+shuffleArraylottwo[19]]: {
        botPrompt: '6660 – 1 = __________________ ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['6660', ' 6661', "6659",'6658']),
          answers: [
            {
              answer: ' 6660',
              nextId: 'inthirdMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '6661',
              nextId: 'thirdMathscorrectq19',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "6659",
              nextId: 'thirdMathscorrectq19',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '6658',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq19: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[20],
          },
        ],
        },
        inthirdMathscorrectq19: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6659"</strong>',
        answers: [
          {
            nextId: 'thirdMaths'+shuffleArraylottwo[20],
          },
        ],
        },
  
  
           //20
      ['thirdMaths'+shuffleArraylottwo[20]]: {
        botPrompt: '82351 – 100 = ______________________ ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['82251', ' 82250', "82051"],'82001'),
          answers: [
            {
              answer: ' 82251',
              nextId: 'thirdMathscorrectq20',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '82250',
              nextId: 'inthirdMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "82051",
              nextId: 'inthirdMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '82001',
              nextId: 'inthirdMathscorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            
          ],
        },
        
        thirdMathscorrectq20: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtocountinethirdMaths',
          },
        ],
        },
        inthirdMathscorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"82251"</strong>',
        answers: [
          {
            nextId: 'wishtocountinethirdMaths',
          },
        ],
        },
        wishtocontinuethirdMaths: {
          botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Yes', "No"]),
          answers: [
            {
              answer: 'Yes',
              nextId: 'chooseclass',
            },
            {
              answer: "No",
              nextId: 'endConv',
            },
          
          ],
        },
          //thirdScience
          //1
  ['thirdScience'+shuffleArraylottwo[1]]: {
    botPrompt: 'Question 1:  Which of these animals is an omnivore?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Giraffe', 'Panda', "Bear",'Kangaroo']),
      answers: [
        {
          answer: 'Giraffe',
          nextId: 'inthirdSciencecorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Panda',
          nextId: 'inthirdSciencecorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Bear",
          nextId: 'thirdSciencecorrectq1',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
            answer: 'Kangaroo',
            nextId: 'inthirdSciencecorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
      ],
    },
    
    thirdSciencecorrectq1: {
    botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thirdScience'+shuffleArraylottwo[2],
      },
    ],
    },
    inthirdSciencecorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
    answers: [
      {
        nextId: 'thirdScience'+shuffleArraylottwo[2],
      },
    ],
    },
    
      //2
      ['thirdScience'+shuffleArraylottwo[2]]: {
        botPrompt: ' Why should you never play with matches or lighters?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(["Because it's fun", 'Because it can cause fires and harm you', "Because matches are expensive",'Because your parents said so']),
          answers: [
            {
              answer: "Because it's fun",
              nextId: 'inthirdSciencecorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Because it can cause fires and harm you',
              nextId: 'thirdSciencecorrectq2',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Because matches are expensive",
              nextId: 'inthirdSciencecorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
                answer: 'Because your parents said so',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq2: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[3],
          },
        ],
        },
        inthirdSciencecorrectq3: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[3],
          },
        ],
        },
    
        //3
      ['thirdScience'+shuffleArraylottwo[3]]: {
        botPrompt: 'Why is it important to wear a seatbelt in a car?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['To keep your clothes clean', "Because it's a law", "To avoid accidents",'To make it easier to get out of the car']),
          answers: [
            {
              answer: 'To keep your clothes clean',
              nextId: 'inthirdSciencecorrectq3',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Because it's a law",
              nextId: 'inthirdSciencecorrectq3',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "To avoid accidents",
              nextId: 'thirdSciencecorrectq3',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
                answer: 'To make it easier to get out of the car',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq3: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[4],
          },
        ],
        },
        inthirdSciencecorrectq3: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[4],
          },
        ],
        },
    
        //4
      ['thirdScience'+shuffleArraylottwo[4]]: {
        botPrompt: 'Why do we need windows and doors in a house?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['To keep the house dark', 'To keep the house cold', "To let in light and air",'To block all sounds']),
          answers: [
            {
              answer: 'To keep the house dark',
              nextId: 'inthirdSciencecorrectq4',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'To keep the house cold',
              nextId: 'inthirdSciencecorrectq4',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "To let in light and air",
              nextId: 'thirdSciencecorrectq4',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
                answer: 'To block all sounds ',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq4: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[5],
          },
        ],
        },
        inthirdSciencecorrectq4: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[5],
          },
        ],
        },
    
        //5
      ['thirdScience'+shuffleArraylottwo[5]]: {
        botPrompt: 'Which of these is a natural source of clothing material?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Plastic,', 'Nylon', "Wool",'Rubber']),
          answers: [
            {
              answer: 'Plastic,',
              nextId: 'thirdSciencecorrectq5',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Nylon',
              nextId: 'inthirdSciencecorrectq5',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Wool",
              nextId: 'inthirdSciencecorrectq5',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
                answer: 'Rubber',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq5: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[6],
          },
        ],
        },
        inthirdSciencecorrectq5: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[6],
          },
        ],
        },
    
    
         //6
      ['thirdScience'+shuffleArraylottwo[6]]: {
        botPrompt: 'Which type of soil is good for planting seeds?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Sandy soil', 'Clayey soil', " Loamy soil",'Rocky soil']),
          answers: [
            {
              answer: 'Sandy soil',
              nextId: 'inthirdSciencecorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Clayey soil',
              nextId: 'inthirdSciencecorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: " Loamy soil,",
              nextId: 'thirdSciencecorrectq6',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
                answer: 'Rocky soil',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq6: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[7],
          },
        ],
        },
        inthirdSciencecorrectq6: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[7],
          },
        ],
        },
    
    
         //7
      ['thirdScience'+shuffleArraylottwo[7]]: {
        botPrompt: 'How does soil help plants grow? ',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['By providing support', 'By holding water and nutrients', "By giving them shade",'By scaring away animals ']),
          answers: [
            {
              answer: 'By providing support',
              nextId: 'inthirdSciencecorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'By holding water and nutrients',
              nextId: 'thirdSciencecorrectq7',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "By giving them shade",
              nextId: 'infinirstMathscorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
                answer: 'By scaring away animals ',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq7: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[8],
          },
        ],
        },
        inthirdSciencecorrectq7: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[8],
          },
        ],
        },
    
    
         //8
      ['thirdScience'+shuffleArraylottwo[8]]: {
        botPrompt: 'What is the process by which plants make their own food using sunlight?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Respiration', 'Photosynthesis', "Germination",' Digestion']),
          answers: [
            {
              answer: 'Respiration',
              nextId: 'inthirdSciencecorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Photosynthesis',
              nextId: 'thirdSciencecorrectq8',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: " Germination",
              nextId: 'inthirdSciencecorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
                answer: 'Digestion',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq8: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[9],
          },
        ],
        },
        inthirdSciencecorrectq8: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[9],
          },
        ],
        },
    
    
         //9
      ['thirdScience'+shuffleArraylottwo[9]]: {
        botPrompt: ' If you want to store water in a plant, which part would you choose?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Roots ', 'Stem', "Leaves",'Flowers']),
          answers: [
            {
              answer: ' Roots',
              nextId: 'thirdSciencecorrectq9',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: 'Stem ',
              nextId: 'inthirdSciencecorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Leaves",
              nextId: 'inthirdSciencecorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
                answer: 'Flowers',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
          ],
        },
        
        thirdSciencecorrectq9: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[10],
          },
        ],
        },
        inthirdSciencecorrectq9: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'thirdScience'+shuffleArraylottwo[10],
          },
        ],
        },
    
    //10
        ['thirdScience'+shuffleArraylottwo[10]]: {
          botPrompt: ' What do you call the tiny openings on the underside of leaves that allow a plant to breathe?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Stomata', ' Seeds ', "Petals",'Branches']),
            answers: [
              {
                answer: ' Stomata',
                nextId: 'thirdSciencecorrectq10',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Seeds',
                nextId: 'inthirdSciencecorrectq10',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Petals",
                nextId: 'inthirdSciencecorrectq10',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Branches',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq10: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[11],
            },
          ],
          },
          inthirdSciencecorrectq10: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[11],
            },
          ],
          },
    
    
          //11
        ['thirdScience'+shuffleArraylottwo[11]]: {
          botPrompt: " What is the primary role of a bird's nest?",
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['To keep the bird warm ', ' To provide a safe place for the bird to lay eggs and raise its young ', "To store food",'To attract a mate']),
            answers: [
              {
                answer: ' To keep the bird warm',
                nextId: 'inthirdSciencecorrectq11',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'To provide a safe place for the bird to lay eggs and raise its young',
                nextId: 'thirdSciencecorrectq11',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "To store food",
                nextId: 'inthirdSciencecorrectq11',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'To attract a mate',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq11: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[12],
            },
          ],
          },
          inthirdSciencecorrectq11: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[12],
            },
          ],
          },
    
    
            //12
        ['thirdScience'+shuffleArraylottwo[12]]: {
          botPrompt: ' What is the primary function of the lungs in our body?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField([' Pump blood', 'Filter waste', "Breathe in oxygen",'Digest food ']),
            answers: [
              {
                answer: ' Pump blood',
                nextId: 'inthirdSciencecorrectq11',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Filter waste',
                nextId: 'inthirdSciencecorrectq11',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Breathe in oxygen",
                nextId: 'thirdSciencecorrectq11',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Digest food ',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq11: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[12],
            },
          ],
          },
          inthirdSciencecorrectq11: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[12],
            },
          ],
          },
    
    
            //13
        ['thirdScience'+shuffleArraylottwo[13]]: {
          botPrompt: 'Why is it important to drink water regularly? ',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['To make you feel sleepy ', ' To keep your body hydrated and healthy ', "To make your skin colorful",'To clean your teeth']),
            answers: [
              {
                answer: ' To make you feel sleepy ',
                nextId: 'inthirdSciencecorrectq13',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'To keep your body hydrated and healthy',
                nextId: 'thirdSciencecorrectq13',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "To make your skin colorful",
                nextId: 'inthirdSciencecorrectq13',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'To clean your teeth',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          thirdSciencecorrectq13: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[14],
            },
          ],
          },
          inthirdSciencecorrectq13: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[14],
            },
          ],
          },
        
    
              //14
        ['thirdScience'+shuffleArraylottwo[14]]: {
          botPrompt: 'Which of these activities can help reduce air pollution?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Planting more trees', ' Burning plastic bags', "Using more vehicles",'Throwing garbage in the street']),
            answers: [
              {
                answer: 'Planting more trees',
                nextId: 'thirdSciencecorrectq14',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Burning plastic bags',
                nextId: 'infinirstMathscorrectq14',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Using more vehicles",
                nextId: 'inthirdSciencecorrectq14',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Throwing garbage in the street',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq14: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[15],
            },
          ],
          },
          inthirdSciencecorrectq14: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[15],
            },
          ],
          },
        
    
              //15
        ['thirdScience'+shuffleArraylottwo[15]]: {
          botPrompt: 'Which of the following is a unit of time?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Litre', ' Second', "Kilogram",'Meter']),
            answers: [
              {
                answer: ' Litre',
                nextId: 'inthirdSciencecorrectq15',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Second',
                nextId: 'thirdSciencecorrectq15',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Kilogram",
                nextId: 'inthirdSciencecorrectq15',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Meter',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq15: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[16],
            },
          ],
          },
          inthirdSciencecorrectq15: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[16],
            },
          ],
          },
        
    
    
    
              //16
        ['thirdScience'+shuffleArraylottwo[16]]: {
          botPrompt: 'Which of the following objects allows light to pass through it? ',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Wood', ' Glass,', "Metal",'Brick']),
            answers: [
              {
                answer: ' Wood',
                nextId: 'inthirdSciencecorrectq16',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Glass',
                nextId: 'thirdSciencecorrectq16',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Metal",
                nextId: 'inthirdSciencecorrectq16',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Brick',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq16: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[17],
            },
          ],
          },
          inthirdSciencecorrectq16: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[17],
            },
          ],
          },
        
    
             //17
        ['thirdScience'+shuffleArraylottwo[17]]: {
          botPrompt: 'Which of the following is a source of sound?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Sun', ' Moon ', "Guitar ",'Star']),
            answers: [
              {
                answer: ' Sun',
                nextId: 'inthirdSciencecorrectq17',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Moon ',
                nextId: 'inthirdSciencecorrectq17',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Guitar",
                nextId: 'thirdSciencecorrectq17',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Star',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq17: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[18],
            },
          ],
          },
          inthirdSciencecorrectq17: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[18],
            },
          ],
          },
    
    
             //18
        ['thirdScience'+shuffleArraylottwo[18]]: {
          botPrompt: 'Which of the following objects does not create a shadow? –',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Sun', ' Moon', "Tree",'Flashlight']),
            answers: [
              {
                answer: ' Sun',
                nextId: 'thirdSciencecorrectq18',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Moon',
                nextId: 'inthirdSciencecorrectq18',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Tree",
                nextId: 'inthirdSciencecorrectq18',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Flashlight',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq18: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[19],
            },
          ],
          },
          inthirdSciencecorrectq18: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[19],
            },
          ],
          },
    
    
             //19
        ['thirdScience'+shuffleArraylottwo[19]]: {
          botPrompt: ' What is the primary source of energy for the sun?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Wind energy', ' Solar energy', "Chemical energy",'Sound energy']),
            answers: [
              {
                answer: ' Wind energy ',
                nextId: 'inthirdSciencecorrectq19',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Solar energy',
                nextId: 'thirdSciencecorrectq19',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Chemical energy",
                nextId: 'inthirdSciencecorrectq19',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Sound energy',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq19: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[20],
            },
          ],
          },
          inthirdSciencecorrectq19: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'thirdScience'+shuffleArraylottwo[20],
            },
          ],
          },
    
    
             //20
        ['thirdScience'+shuffleArraylottwo[20]]: {
          botPrompt: "What is the name of Earth's natural satellite?",
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Sun', ' Moon', "Mars",'Jupiter']),
            answers: [
              {
                answer: ' Sun',
                nextId: 'inthirdSciencecorrectq20',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Moon',
                nextId: 'thirdSciencecorrectq20',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Mars",
                nextId: 'inthirdSciencecorrectq20',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Jupiter',
                nextId: 'inthirdSciencecorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              
            ],
          },
          
          thirdSciencecorrectq20: {
          botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'wishtocountinethirdScience',
            },
          ],
          },
          inthirdSciencecorrectq16: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
          answers: [
            {
              nextId: 'wishtocountinethirdScience',
            },
          ],
          },
          wishtocontinuefourthScience: {
            botPrompt: 'You have Completed Science. Do you Wish to Continue ?',
            type: RTypes.TRANSFORMED_TEXT,
            input: selectField(['Yes', "No"]),
            answers: [
              {
                answer: 'Yes',
                nextId: 'chooseclass',
              },
              {
                answer: "No",
                nextId: 'endConv',
              },
            
            ],
          },
        
 
//classiv
classiv: {
  botPrompt: 'You Have Selected CLASS IV . Which subject you would like to start',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Maths', "English", "Science"]),
  answers: [
    {
      answer: 'Maths',
      nextId: "fourthMaths"+shuffleArraylottwo[1],
    },
    {
      answer: "English",
      nextId: "fourthEnglish"+shuffleArraylottwo[1],
    },
    {
      answer: "Science",
      nextid: "fourthScience"+shuffleArraylottwo[1],
    }
  
  ],
},
wishtocontinuefourthScience: {
  botPrompt: 'You have Completed Science. Do you Wish to Continue ?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', "No"]),
  answers: [
    {
      answer: 'Yes',
      nextId: 'chooseclass',
    },
    {
      answer: "No",
      nextId: 'endConv',
    },
  
  ],
},



//classivscience
//1
['fourthScience'+shuffleArraylottwo[1]]: {
  botPrompt: 'Why do we need to chew our food properly before swallowing?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['To make it easier to swallow', 'To start the digestion process', "To make the food taste better","All of the above"]),
    answers: [
      {
        answer: 'To make it easier to swallow',
        nextId: 'infourthSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'To start the digestion process',
        nextId: 'infourthSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "To make the food taste better",
        nextId: 'infourthSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "All of the above",
        nextId: 'fourthSciencecorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
    ],
  },
  
  fourthSciencecorrectq1: {
  botPrompt: 'Hurray! <strong>All of the above</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fourthScience'+shuffleArraylottwo[2],
    },
  ],
  },
  infourthSciencecorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"All of the above"</strong>',
  answers: [
    {
      nextId: 'fourthScience'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
    //2
    ['fourthScience'+shuffleArraylottwo[2]]: {
      botPrompt: 'Which of the following is NOT a part of the digestive system?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Esophagus', 'Pancreas', "Kidney","Large intestne"]),
        answers: [
          {
            answer: 'Esophagus',
            nextId: 'infourthSciencecorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Pancreas',
            nextId: 'infourthSciencecorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "kidney",
            nextId: 'fourthSciencecorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Large intestine",
            nextId: 'infourthSciencecorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq2: {
      botPrompt: 'Hurray! <strong>Kidney</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[3],
        },
      ],
      },
      infourthSciencecorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Kidney"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[3],
        },
      ],
      },
  
  
  //3
  ['fourthScience'+shuffleArraylottwo[3]]: {
      botPrompt: 'What is the primary purpose of saliva in our mouth?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['To help us talk', 'To make our food taste better', "To moisten and soften food","To clean our teeth"]),
        answers: [
          {
            answer: 'To help us talk',
            nextId: 'infourthSciencecorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'To make our food taste better',
            nextId: 'infourthSciencecorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "To moisten and soften food",
            nextId: 'fourthSciencecorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "To clean our teeth",
            nextId: 'infourthSciencecorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq3: {
      botPrompt: 'Hurray! <strong>To moisten and soften food</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[4],
        },
      ],
      },
      infourthSciencecorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To moisten and soften food"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[4],
        },
      ],
      },
  
  
      //4
  ['fourthScience'+shuffleArraylottwo[4]]: {
      botPrompt: 'Which type of microbe is responsible for causing tooth decay?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Becteria', 'Viruses', "Fungi","Protozoa"]),
        answers: [
          {
            answer: 'Becteria',
            nextId: 'fourthSciencecorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Viruses',
            nextId: 'infourthSciencecorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Fungi",
            nextId: 'infourthSciencecorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Protozoa",
            nextId: 'infourthSciencecorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq4: {
      botPrompt: 'Hurray! <strong>Becteria</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[5],
        },
      ],
      },
      infourthSciencecorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Becteria"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[5],
        },
      ],
      },
  
  
      //5
  ['fourthScience'+shuffleArraylottwo[5]]: {
      botPrompt: 'If you get a small cut or scrape, what should you do to clean it?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Lick it to clean the wound', 'Wash it with soap and water', "Cover it with a dirty bandage","Ignore it, it will heal on its own"]),
        answers: [
          {
            answer: 'Lick it to clean the wound',
            nextId: 'infourthSciencecorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Wash it with soap and water',
            nextId: 'fourthSciencecorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Cover it with a dirty bandage",
            nextId: 'infourthSciencecorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Ignore it, it will heal on its own",
            nextId: 'infourthSciencecorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq5: {
      botPrompt: 'Hurray! <strong>Wash it with soap and water</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[6],
        },
      ],
      },
      infourthSciencecorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Wash it with soap and water"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
      //6
  ['fourthScience'+shuffleArraylottwo[6]]: {
      botPrompt: 'If there is a fire in a building, what should you do?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Hide in a closet', 'Run outside and call 911', "Use the elevator to escape quickly","Stay in your room and wait for help"]),
        answers: [
          {
            answer: 'Hide in a closet',
            nextId: 'infourthSciencecorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Run outside and call 911',
            nextId: 'fourthSciencecorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Use the elevator to escape quickly",
            nextId: 'infourthSciencecorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Stay in your room and wait for help",
            nextId: 'infourthSciencecorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq6: {
      botPrompt: 'Hurray! <strong>Run outside and call 911</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[7],
        },
      ],
      },
      infourthSciencecorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Run outside and call 911"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
      //7
  ['fourthScience'+shuffleArraylottwo[7]]: {
      botPrompt: 'What is the purpose of wearing gloves in extremely cold weather?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['To keep your hands warm', 'To show off your accessories', "To protect your feet","To keep your neck warm"]),
        answers: [
          {
            answer: 'To keep your hands warm',
            nextId: 'fourthSciencecorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'To show off your accessories',
            nextId: 'infourthSciencecorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "To protect your feet",
            nextId: 'infourthSciencecorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "To keep your neck warm",
            nextId: 'infourthSciencecorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq7: {
      botPrompt: 'Hurray! <strong>To keep your hands warm</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[8],
        },
      ],
      },
      infourthSciencecorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To keep your hands warm"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
      //8
  ['fourthScience'+shuffleArraylottwo[8]]: {
      botPrompt: 'What happens to water when it is frozen?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['It turns into a gas', 'It turns into a liquid', "It turns into a solid","It disappears"]),
        answers: [
          {
            answer: 'It turns into a gas',
            nextId: 'infourthSciencecorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'It turns into a liquid',
            nextId: 'infourthSciencecorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "It turns into a solid",
            nextId: 'fourthSciencecorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "It disappears",
            nextId: 'infourthSciencecorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq8: {
      botPrompt: 'Hurray! <strong>It turns into a solid</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[9],
        },
      ],
      },
      infourthSciencecorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It turns into a solid"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
      //9
  ['fourthScience'+shuffleArraylottwo[9]]: {
      botPrompt: 'Which of the following can change its shape easily?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Solid', 'Liquid', "Gas","None of the above"]),
        answers: [
          {
            answer: 'Solid',
            nextId: 'infourthSciencecorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Liquid',
            nextId: 'fourthSciencecorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Gas",
            nextId: 'infourthSciencecorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "None of the above",
            nextId: 'infourthSciencecorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq9: {
      botPrompt: 'Hurray! <strong>Liquid</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[10],
        },
      ],
      },
      infourthSciencecorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Liquid"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[10],
        },
      ],
      },
  
  
      
  
  
       //10
  ['fourthScience'+shuffleArraylottwo[10]]: {
      botPrompt: 'What is the process of water turning into water vapor called?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Freezing', 'Evaporation', "Condensation", "Sublimation"]),
        answers: [
          {
            answer: 'Freezing',
            nextId: 'infourthSciencecorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Evaporation',
            nextId: 'fourthSciencecorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Condensation",
            nextId: 'infourthSciencecorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Sublimation",
            nextId: 'infourthSciencecorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq10: {
      botPrompt: 'Hurray! <strong>Evaporation</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[11],
        },
      ],
      },
      infourthSciencecorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Evaporation"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[11],
        },
  
      ],
      },
      
      
          //11
  ['fourthScience'+shuffleArraylottwo[11]]: {
      botPrompt: 'What do we call tiny living organisms in the soil that help in breaking down dead plants and animals?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Insects', 'Worms', "Becteria and fungi","Seeds"]),
        answers: [
          {
            answer: 'Insects',
            nextId: 'infourthSciencecorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Worms',
            nextId: 'infourthSciencecorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Becteria and fungi",
            nextId: 'fourthSciencecorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Seeds",
            nextId: 'infourthSciencecorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq11: {
      botPrompt: 'Hurray! <strong>Becteria and fungi</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[12],
        },
      ],
      },
      infourthSciencecorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Becteria and fungi"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[12],
        },
  
      ],
      },
  
  
          //12
  ['fourthScience'+shuffleArraylottwo[12]]: {
      botPrompt: 'When we add organic matter like compost to the soil, what does it do for the soil?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Makes it dry', 'Makes it hard', "Makes it fertile", "Makes it cold"]),
        answers: [
          {
            answer: 'Makes it dry',
            nextId: 'infourthSciencecorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Makes it hard',
            nextId: 'infourthSciencecorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Makes it fertile",
            nextId: 'fourthSciencecorrectq12',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Makes it cold",
            nextId: 'infourthSciencecorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
   
        ],
       },
      
      fourthSciencecorrectq12: {
      botPrompt: 'Hurray! <strong>Makes it fertile</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[13],
        },
      ],
      },
      infourthSciencecorrectq12: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Makes it fertile"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[13],
        },
  
      ],
      },
  
  
          //13
  ['fourthScience'+shuffleArraylottwo[13]]: {
      botPrompt: 'What is the function of the stomata in plant leaves?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['To trap insects', 'To release oxygen', "To help with photosynthesis", "To store wate"]),
        answers: [
          {
            answer: 'To trap insects',
            nextId: 'infourthSciencecorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'To release oxygen',
            nextId: 'infourthSciencecorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "To help with photosynthesis",
            nextId: 'fourthSciencecorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "To store wate",
            nextId: 'infourthSciencecorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      fourthSciencecorrectq13: {
      botPrompt: 'Hurray! <strong>To help with photosynthesis</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[14],
        },
      ],
      },
      infourthSciencecorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To help with photosynthesis"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[14],
        },
  
      ],
      },
  
          //14
  ['fourthScience'+shuffleArraylottwo[14]]: {
      botPrompt: 'What is the main purpose of thorns on a plant?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['To help the plant breathe', 'To store food', "To protect the plant from animals", "To make the plant colorful"]),
        answers: [
          {
            answer: 'To help the plant breathe',
            nextId: 'infourthSciencecorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'To store food',
            nextId: 'infourthSciencecorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "To protect the plant from animals",
            nextId: 'fourthSciencecorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'To make the plant colorful',
            nextId: 'infourthSciencecorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
         
        ],
      },
      
      fourthSciencecorrectq14: {
      botPrompt: 'Hurray! <strong>To protect the plant from animals</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[15],
        },
      ],
      },
      infourthSciencecorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To protect the plant from animals"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[15],
        },
  
      ],
      },
  
  
          //15
  ['fourthScience'+shuffleArraylottwo[15]]: {
      botPrompt: 'What do we call a baby kangaroo?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Pub', 'Cub', "Joey", "Calf"]),
        answers: [
          {
            answer: 'Pub',
            nextId: 'infourthSciencecorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Cub',
            nextId: 'infourthSciencecorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Joey",
            nextId: 'fourthSciencecorrectq15',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Calf",
            nextId: 'infourthSciencecorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },

        ],
      },
      
      fourthSciencecorrectq15: {
      botPrompt: 'Hurray! <strong>Joey</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[16],
        },
      ],
      },
      infourthSciencecorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Joey"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[16],
        },
  
      ],
      },
  
  
  
          
      //16
  ['fourthScience'+shuffleArraylottwo[16]]: {
      botPrompt: 'A garden is in the shape of a right triangle with one side of length 4 metres and the other side of length 3 metres. What is the area of the garden?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Sharp claws', 'Long tail', "Venomous fangs", "Strong wings"]),
        answers: [
          {
            answer: 'Sharp claws',
            nextId: 'infourthSciencecorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Long tail',
            nextId: 'infourthSciencecorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Venomous fangs ",
            nextId: 'fourthSciencecorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Strong wings",
            nextId: 'infourthSciencecorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      fourthSciencecorrectq16: {
      botPrompt: 'Hurray! <strong>Venomous fangs</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[17],
        },
      ],
      },
      infourthSciencecorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Venomous fangs"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[17],
        },
  
      ],
      },
  
      //17
  ['fourthScience'+shuffleArraylottwo[17]]: {
      botPrompt: 'What is the process by which water vapor turns into water droplets in the air?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Condensation', 'Evaporaton', "Precipitation", "Sublimation"]),
        answers: [
          {
            answer: 'Condensation',
            nextId: 'fourthSciencecorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Evaporaton',
            nextId: 'infourthSciencecorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Precipitation",
            nextId: 'infourthSciencecorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Sublimation",
            nextId: 'infourthSciencecorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthSciencecorrectq17: {
      botPrompt: 'Hurray! <strong>Condensation</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[18],
        },
      ],
      },
      infourthSciencecorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Condensation"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[18],
        },
  
      ],
      },
  
      //18
  ['fourthScience'+shuffleArraylottwo[18]]: {
      botPrompt: 'What is the largest planet in our solar system?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Earth', 'Mars', "Saturn", "Jupiter"]),
        answers: [
          {
            answer: 'Earth',
            nextId: 'infourthSciencecorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Mars',
            nextId: 'infourthSciencecorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "saturn",
            nextId: 'infourthSciencecorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: "jupiter",
              nextId: 'fourthSciencecorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
        ],
      },
      
      fourthSciencecorrectq18: {
      botPrompt: 'Hurray! <strong>Jupiter</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[19],
        },
      ],
      },
      infourthSciencecorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Jupiter"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[19],
        },
  
      ],
      },
  
      //19
  ['fourthScience'+shuffleArraylottwo[19]]: {
      botPrompt: 'Which planet is known as the "Evening Star" or "Morning Star" because it appears brightly in the evening or morning sky?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Venus', 'Mars', "Jupiter", "Saturn"]),
        answers: [
          {
            answer: 'Venus',
            nextId: 'fourthSciencecorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Mars',
            nextId: 'infourthSciencecorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Jupiter",
            nextId: 'infourthSciencecorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Saturn',
            nextId: 'infourthSciencecorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },

        ],
      },
      
      fourthSciencecorrectq19: {
      botPrompt: 'Hurray! <strong>Venus</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[20],
        },
      ],
      },
      infourthSciencecorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Venus"</strong>',
      answers: [
        {
          nextId: 'fourthScience'+shuffleArraylottwo[20],
        },
  
      ],
      },
  
       //20
  ['fourthScience'+shuffleArraylottwo[20]]: {
      botPrompt: 'Which of the following is a nonrenewable source of energy?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Solar energy', 'Wind energy', "Fossil fuels", "Biomass"]),
        answers: [
          {
            answer: 'Solar energy',
            nextId: 'infourthSciencecorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Wind energy',
            nextId: 'infourthSciencecorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Fossil fuels",
            nextId: 'fourthSciencecorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Biomass",
            nextId: 'infourthSciencecorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      fourthSciencecorrectq20: {
      botPrompt: 'Hurray! <strong>Fossil fuels</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocontinuefourthScience',
        },
      ],
      },
      infourthSciencecorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fossil fuels"</strong>',
      answers: [
        {
          nextId: 'wishtocontinuefourthScience',
        },
  
      ],
      },
      wishtocontinuefourthScience: {
        botPrompt: 'You have Completed Science. Do you Wish to Continue ?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Yes', "No"]),
        answers: [
          {
            answer: 'Yes',
            nextId: 'chooseclass',
          },
          {
            answer: "No",
            nextId: 'endConv',
          },
        
        ],
      },


//fourthEnglish
//1
['fourthEnglish'+shuffleArraylottwo[1]]: {
  botPrompt: 'Choose the sentence in the Simple Present Tense:',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['She is playing tennis right now.', 'They will go to the zoo tomorrow.', "He eats breakfast every morning.","I am writing a letter at the moment."]),
    answers: [
      {
        answer: 'She is playing tennis right now.',
        nextId: 'infourthEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'They will go to the zoo tomorrow.',
        nextId: 'infourthEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "He eats breakfast every morning.",
        nextId: 'fourthEnglishcorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "I am writing a letter at the moment.",
        nextId: 'infourthEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fourthEnglishcorrectq1: {
  botPrompt: 'Hurray! <strong>He eats breakfast every morning.</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fourthEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  infourthEnglishcorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He eats breakfast every morning."</strong>',
  answers: [
    {
      nextId: 'fourthEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
    //2
    ['fourthEnglish'+shuffleArraylottwo[2]]: {
      botPrompt: 'Identify the sentence in the Present Continuous Tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['She swims in the pool regularly.', 'I play the piano every evening.', "They are building a sandcastle on the beach.","He reads books in the library."]),
        answers: [
          {
            answer: 'She swims in the pool regularly.',
            nextId: 'infourthEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'I play the piano every evening.',
            nextId: 'infourthEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "They are building a sandcastle on the beach.",
            nextId: 'fourthEnglishcorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "He reads books in the library.",
            nextId: 'infourthEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq2: {
      botPrompt: 'Hurray! <strong>They are building a sand castle on the beach.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
      infourthEnglishcorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They are building a sand castle on the beach."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
  
  
  //3
  ['fourthEnglish'+shuffleArraylottwo[3]]: {
      botPrompt: 'Which sentence is in the Simple Present Tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['We are watching a movie tonight.', 'She will bake cookies later.', "They listen to music on Fridays.","I am singing a song now."]),
        answers: [
          {
            answer: 'We are watching a movie tonight.',
            nextId: 'infourthEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'She will bake cookies later.',
            nextId: 'infourthEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "They listen to music on Fridays.",
            nextId: 'fourthEnglishcorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "I am singing a song now.",
            nextId: 'infourthEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq3: {
      botPrompt: 'Hurray! <strong>They listen to music on Fridays.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
      infourthEnglishcorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They listen to music on Fridays."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
  
  
      //4
  ['fourthEnglish'+shuffleArraylottwo[4]]: {
      botPrompt: 'The colour of the clothes _______ fading very quickly."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['are', 'was', "is","were"]),
        answers: [
          {
            answer: 'are',
            nextId: 'infourthEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'was',
            nextId: 'infourthEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "is",
            nextId: 'fourthEnglishcorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "were",
            nextId: 'infourthEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq4: {
      botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
      infourthEnglishcorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
  
  
      //5
  ['fourthEnglish'+shuffleArraylottwo[5]]: {
      botPrompt: 'Identify the sentence in the Simple Present Tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['We are going to the park this afternoon.', 'He is studying for the exam right now.', "She always helps her friends.","They are playing soccer at the moment."]),
        answers: [
          {
            answer: 'We are going to the park this afternoon.',
            nextId: 'infourthEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'He is studying for the exam right now.',
            nextId: 'infourthEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "She always helps her friends.",
            nextId: 'fourthEnglishcorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "They are playing soccer at the moment.",
            nextId: 'infourthEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq5: {
      botPrompt: 'Hurray! <strong>She always help her friends.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
      infourthEnglishcorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She always help her friends."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
      //6
  ['fourthEnglish'+shuffleArraylottwo[6]]: {
      botPrompt: 'Choose the sentence in the Simple Past Tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['I am eating lunch now.', 'They were swimming at the pool yesterday.', "She will read a book tomorrow.","We are going to the zoo today."]),
        answers: [
          {
            answer: 'I am eating lunch now.',
            nextId: 'infourthEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They were swimming at the pool yesterday.',
            nextId: 'fourthEnglishcorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "She will read a book tomorrow.",
            nextId: 'infourthEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "We are going to the zoo today.",
            nextId: 'infourthEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq6: {
      botPrompt: 'Hurray! <strong>They were swimming at the pool yesterday.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
      infourthEnglishcorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They were swimming at the pool yesterday."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
      //7
  ['fourthEnglish'+shuffleArraylottwo[7]]: {
      botPrompt: 'Identify the sentence in the Past Continuous Tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['He visited the museum last week.', 'They play football every Saturday.', "She was baking cookies when I called.","I am painting a picture right now."]),
        answers: [
          {
            answer: 'He visited the museum last week.',
            nextId: 'infourthEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They play football every Saturday.',
            nextId: 'infourthEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "She was baking cookies when I called.",
            nextId: 'fourthEnglishcorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "I am painting a picture right now.",
            nextId: 'infourthEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq7: {
      botPrompt: 'Hurray! <strong>She was baking cookies when I called.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
      infourthEnglishcorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She was baking cookies when I called."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
      //8
  ['fourthEnglish'+shuffleArraylottwo[8]]: {
      botPrompt: 'Which sentence is in the Simple Past Tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['We are going to the party tonight.', 'He is watching a movie at the moment.', "They walked to school yesterday","She will sing a song later."]),
        answers: [
          {
            answer: 'We are going to the party tonight.',
            nextId: 'infourthEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'He is watching a movie at the moment.',
            nextId: 'infourthEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "They walked to school yesterday.",
            nextId: 'fourthEnglishcorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "She will sing a song later.",
            nextId: 'infourthEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq8: {
      botPrompt: 'Hurray! <strong>They walked to school yesterday.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
      infourthEnglishcorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They walked to school yesterday."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
      //9
  ['fourthEnglish'+shuffleArraylottwo[9]]: {
      botPrompt: 'Select the sentence in the Past Continuous Tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['The sun rises in the morning.', 'She danced beautifully.', "They were playing in the park when it started raining.", "He goes to the gym regularly."]),
        answers: [
          {
            answer: 'The sun rises in the morning.',
            nextId: 'infourthEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'She danced beautifully.',
            nextId: 'infourthEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "They were playing in the park when it started raining.",
            nextId: 'fourthEnglishcorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "He goes to the gym regularly.",
            nextId: 'infourthEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq9: {
      botPrompt: 'Hurray! <strong>They were playing in the park when it started raining.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
      infourthEnglishcorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They were playing in the park when it started raining."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
  
  
     
  
  
       //10
  ['fourthEnglish'+shuffleArraylottwo[10]]: {
      botPrompt: 'Identify the sentence in the Simple Past Tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['We are having dinner tonight.', 'He is studying for the test right now.', "She always helped her friends.","d) They were riding bicycles this morning"]),
        answers: [
          {
            answer: 'We are having dinner tonight.',
            nextId: 'infourthEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'He is studying for the test right now.',
            nextId: 'infourthEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "She always helped her friends.",
            nextId: 'infourthEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "They were riding bicycles this morning",
            nextId: 'fourthEnglishcorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq10: {
      botPrompt: 'Hurray! <strong>d) They were riding bicycles this morning</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[11],
        },
      ],
      },
      infourthEnglishcorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"d) They were riding bicycles this morning"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[11],
        },
  
      ],
      },
      
      
          //11
  ['fourthEnglish'+shuffleArraylottwo[11]]: {
      botPrompt: 'They were riding bicycles this morning',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['She is reading a book right now.', 'They played soccer yesterday.', "He will visit his grandparents next weekend.","We were cooking dinner when it rained."]),
        answers: [
          {
            answer: 'She is reading a book right now.',
            nextId: 'infourthEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They played soccer yesterday.',
            nextId: 'infourthEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "He will visit his grandparents next weekend.",
            nextId: 'fourthEnglishcorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "We were cooking dinner when it rained.",
            nextId: 'infourthEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq11: {
      botPrompt: 'Hurray! <strong>He will visit his grandparents next weekend.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[12],
        },
      ],
      },
      infourthEnglishcorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He will visit his grandparents next weekend."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[12],
        },
  
      ],
      },
  
  
          //12
  ['fourthEnglish'+shuffleArraylottwo[12]]: {
      botPrompt: 'Choose the sentence in the Simple Future Tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['I am going to the park today.', 'She is singing a song at the moment.', "They are watching a movie tomorrow.", "He helped his friend yesterday."]),
        answers: [
          {
            answer: 'I am going to the park today.',
            nextId: 'infourthEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'She is singing a song at the moment.',
            nextId: 'infourthEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They are watching a movie tomorrow.',
            nextId: 'fourthEnglishcorrectq12',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "He helped his friend yesterday.",
            nextId: 'infourthEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
   
        ],
      },
      
      fourthEnglishcorrectq12: {
      botPrompt: 'Hurray! <strong>They are watching a movie tomorrow.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[13],
        },
      ],
      },
      infourthEnglishcorrectq12: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They are watching a movie tomorrow."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[13],
        },
  
      ],
      },
  
  
          //13
  ['fourthEnglish'+shuffleArraylottwo[13]]: {
      botPrompt: 'Which sentence correctly uses the Simple Future Tense?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['She danced beautifully last night.', 'I am painting a picture right now.', "We will have a picnic in the park next Saturday.", "They were swimming in the pool this morning."]),
        answers: [
          {
            answer: 'She danced beautifully last night.',
            nextId: 'infourthEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'I am painting a picture right now.',
            nextId: 'infourthEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "We will have a picnic in the park next Saturday.",
            nextId: 'fourthEnglishcorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "They were swimming in the pool this morning.",
            nextId: 'infourthEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      fourthEnglishcorrectq13: {
      botPrompt: 'Hurray! <strong>We will have a picnic in the park next Saturday.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[14],
        },
      ],
      },
      infourthEnglishcorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We will have a picnic in the park next Saturday."</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[14],
        },
  
      ],
      },
  
          //14
  ['fourthEnglish'+shuffleArraylottwo[14]]: {
      botPrompt: 'In the sentence "She practices the piano daily," what type of adverb is "daily"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Adverb of manner', 'Adverb of frequency', "Adverb of place", "Adverb of time"]),
        answers: [
          {
            answer: 'Adverb of manner',
            nextId: 'infourthEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Adverb of frequency',
            nextId: 'fourthEnglishcorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Adverb of place",
            nextId: 'infourthEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Adverb of time',
            nextId: 'infourthEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },

        ],
      },
      
      fourthEnglishcorrectq14: {
      botPrompt: 'Hurray! <strong>Adverb of frequency</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[15],
        },
      ],
      },
      infourthEnglishcorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Adverb of frequency"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[15],
        },
  
      ],
      },
  
  
          //15
  ['fourthEnglish'+shuffleArraylottwo[15]]: {
      botPrompt: 'In the sentence "The detective solved the mystery effortlessly," what type of adverb is "effortlessly"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['ran', 'runs', "running"]),
        answers: [
          {
            answer: 'Adverb of manner',
            nextId: 'fourthEnglishcorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Adverb of frequency',
            nextId: 'infourthEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Adverb of place",
            nextId: 'infourthEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Adverb of time',
            nextId: 'infourthEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      fourthEnglishcorrectq15: {
      botPrompt: 'Hurray! <strong>Adverb of manner</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[16],
        },
      ],
      },
      infourthEnglishcorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Adverb of manner"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[16],
        },
  
      ],
      },
  
  
  
          
      //16
  ['fourthEnglish'+shuffleArraylottwo[16]]: {
      botPrompt: 'Choose the correct adverb to complete the sentence:"She speaks English __________."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['good', 'well', "nice", "faster"]),
        answers: [
          {
            answer: 'good',
            nextId: 'infourthEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'well',
            nextId: 'fourthEnglishcorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "nice",
            nextId: 'infourthEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "faster",
            nextId: 'infourthEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          }

        ],
      },
      
      fourthEnglishcorrectq16: {
      botPrompt: 'Hurray! <strong>well</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[17],
        },
      ],
      },
      infourthEnglishcorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"well"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[17],
        },
  
      ],
      },
  
      //17
  ['fourthEnglish'+shuffleArraylottwo[17]]: {
      botPrompt: 'What is the adverb in the sentence: "They arrived here yesterday"?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['They', 'here', "arrived", "yesterday"]),
        answers: [
          {
            answer: 'they',
            nextId: 'infourthEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'here',
            nextId: 'infourthEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "arrived",
            nextId: 'infourthEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "yesterday",
            nextId: 'fourthEnglishcorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        
        ],
      },
      
      fourthEnglishcorrectq17: {
      botPrompt: 'Hurray! <strong>yesterday</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[18],
        },
      ],
      },
      infourthEnglishcorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"yesterday"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[18],
        },
  
      ],
      },
  
      //18
  ['fourthEnglish'+shuffleArraylottwo[18]]: {
      botPrompt: 'Select the adverb in the sentence:"He plays soccer very skillfully."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['He', 'playes', "soccer", "skillfully"]),
        answers: [
          {
            answer: 'he',
            nextId: 'infourthEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'plays',
            nextId: 'infourthEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "soccer",
            nextId: 'infourthEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: "skillfully",
              nextId: 'fourthEnglishcorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
        ],
      },
      
      fourthEnglishcorrectq18: {
      botPrompt: 'Hurray! <strong>skillfully</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[19],
        },
      ],
      },
      infourthEnglishcorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"skillfully"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[19],
        },
  
      ],
      },
  
      //19
  ['fourthEnglish'+shuffleArraylottwo[19]]: {
      botPrompt: 'Fill in the blank with proper form of Adjective The red car is _____ (fast) than the blue one.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['fast', 'faster', "fastest", "more fast"]),
        answers: [
          {
            answer: 'fast',
            nextId: 'infourthEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'faster',
            nextId: 'fourthEnglishcorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "fastest",
            nextId: 'infourthEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "more fast",
            nextId: 'infourthEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      fourthEnglishcorrectq19: {
      botPrompt: 'Hurray! <strong>faster</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[20],
        },
      ],
      },
      infourthEnglishcorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"faster"</strong>',
      answers: [
        {
          nextId: 'fourthEnglish'+shuffleArraylottwo[20],
        },
  
      ],
      },
  
       //20
  ['fourthEnglish'+shuffleArraylottwo[20]]: {
      botPrompt: 'Identify the Degree of adjective in the following sentence:"She has the cutest puppy in the whole town."',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['positive', 'negative', "superlative", "comparative"]),
        answers: [
          {
            answer: 'positive',
            nextId: 'infourthEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'negative',
            nextId: 'infourthEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "superlative",
            nextId: 'fourthEnglishcorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "comparative",
            nextId: 'infourthEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthEnglishcorrectq20: {
      botPrompt: 'Hurray! <strong>superlative</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocontinuefourthEnglish',
        },
      ],
      },
      infourthEnglishcorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"superlative"</strong>',
      answers: [
        {
          nextId: 'wishtocontinuefourthEnglish',
        },
  
      ],
      },
      wishtocontinuefourthEnglish: {
        botPrompt: 'You have Completed English. Do you Wish to Continue ?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Yes', "No"]),
        answers: [
          {
            answer: 'Yes',
            nextId: 'chooseclass',
          },
          {
            answer: "No",
            nextId: 'endConv',
          },
        
        ],
      },

//classfourthMaths
//1
['fourthMaths'+shuffleArraylottwo[1]]: {
  botPrompt: 'What are the factors of 12?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2 and 3', '4 and 5', "6 and7","8 and 9"]),
    answers: [
      {
        answer: '2 and 3',
        nextId: 'fourthMathscorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: '4 and 5',
        nextId: 'infourthMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "6 and 7",
        nextId: 'infourthMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "8 and 9",
        nextId: 'infourthMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fourthMathscorrectq1: {
  botPrompt: 'Hurray! <strong>2 and 3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fourthMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  infourthMathscorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2 and 3"</strong>',
  answers: [
    {
      nextId: 'fourthMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
    //2
    ['fourthMaths'+shuffleArraylottwo[2]]: {
      botPrompt: 'Which of the following numbers is a multiple of both 4 and 5? ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['10', '15', "20","25"]),
        answers: [
          {
            answer: '10',
            nextId: 'infourthMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '15',
            nextId: 'infourthMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "20",
            nextId: 'fourthMathscorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "25",
            nextId: 'infourthMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq2: {
      botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[3],
        },
      ],
      },
      infourthMathscorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[3],
        },
      ],
      },
  
  
  //3
  ['fourthMaths'+shuffleArraylottwo[3]]: {
      botPrompt: 'Which of the following fractions is not equivalent to half (1/2)?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['2/4', '3/6', "4/8","5/15"]),
        answers: [
          {
            answer: '2/4',
            nextId: 'infourthMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '3/6',
            nextId: 'infourthMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "4/8",
            nextId: 'infourthMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "5/15",
            nextId: 'fourthMathscorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq3: {
      botPrompt: 'Hurray! <strong>5/15</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[4],
        },
      ],
      },
      infourthMathscorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5/15"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[4],
        },
      ],
      },
  
  
      //4
  ['fourthMaths'+shuffleArraylottwo[4]]: {
      botPrompt: 'What is the sum of 1/4 and 2/4?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['₹0.45', '₹0.54', "₹0.04","₹0.55"]),
        answers: [
          {
            answer: '3/4',
            nextId: 'fourthMathscorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '1/8',
            nextId: 'infourthMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "1/2",
            nextId: 'infourthMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "2/8",
            nextId: 'infourthMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq4: {
      botPrompt: 'Hurray! <strong>3/4</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[5],
        },
      ],
      },
      infourthMathscorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3/4"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[5],
        },
      ],
      },
  
  
      //5
  ['fourthMaths'+shuffleArraylottwo[5]]: {
      botPrompt: 'Which of the following numbers is written correctly as a decimal?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['25/100', '15%', "0.25","2.5"]),
        answers: [
          {
            answer: '25/100',
            nextId: 'infourthMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '15%',
            nextId: 'infourthMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "0.25",
            nextId: 'fourthMathscorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "2.5",
            nextId: 'infourthMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq5: {
      botPrompt: 'Hurray! <strong>0.25</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[6],
        },
      ],
      },
      infourthMathscorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0.25"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
      //6
  ['fourthMaths'+shuffleArraylottwo[6]]: {
      botPrompt: 'What is the decimal equivalent of the fraction 3/10?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['0.3', '0.03', "0.003","3.0"]),
        answers: [
          {
            answer: '0.3',
            nextId: 'fourthMathscorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '0.03',
            nextId: 'infourthMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "0.003",
            nextId: 'infourthMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "3.0",
            nextId: 'infourthMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq6: {
      botPrompt: 'Hurray! <strong>0.3</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[7],
        },
      ],
      },
      infourthMathscorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0.3"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
      //7
  ['fourthMaths'+shuffleArraylottwo[7]]: {
      botPrompt: 'If you add 0.7 to 1.3, what is the result?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['0.06', '2.0', "1.0","2.3"]),
        answers: [
          {
            answer: '0.06',
            nextId: 'infourthMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '2.0',
            nextId: 'infourthMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "1.0",
            nextId: 'infourthMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "2.3",
            nextId: 'fourthMathscorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq7: {
      botPrompt: 'Hurray! <strong>2.3</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[8],
        },
      ],
      },
      infourthMathscorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2.3"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
      //8
  ['fourthMaths'+shuffleArraylottwo[8]]: {
      botPrompt: 'If the clock shows 2:45 PM, how many minutes are there until 4:00 PM?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['15 minutes', '30 minutes', " 75 minutes"," 105 minutes"]),
        answers: [
          {
            answer: '15 minutes',
            nextId: 'infourthMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '30 minutes',
            nextId: 'fourthMathscorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "75 minutes",
            nextId: 'infourthMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "105 minutes",
            nextId: 'infourthMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq8: {
      botPrompt: 'Hurray! <strong>30 minutes</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[9],
        },
      ],
      },
      infourthMathscorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30 minutes"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
      //9
  ['fourthMaths'+shuffleArraylottwo[9]]: {
      botPrompt: 'If a train leaves the station at 9:15 AM and arrives at its destination at 1:45 PM, how long was the journey in hours and minutes?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['4 hours and 15 minutes', '4 hours and 30 minutes', "3 hours and 30 minutes","4 hours and 45 minutes"]),
        answers: [
          {
            answer: '4 hours and 15 minutes',
            nextId: 'infourthMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '4 hours and 30 minutes',
            nextId: 'fourthMathscorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "3 hours and 30 minutes",
            nextId: 'infourthMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "4 hours and 45 minutes",
            nextId: 'infourthMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq9: {
      botPrompt: 'Hurray! <strong>4 hours and 30 minutes</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[10],
        },
      ],
      },
      infourthMathscorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4 hours and 30 minutes"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[10],
        },
      ],
      },
  
  
      
  
  
       //10
  ['fourthMaths'+shuffleArraylottwo[10]]: {
      botPrompt: 'A packet of 6 chocolates costs Rs. 60. How much does one chocolate cost?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Rs. 6', 'Rs. 10', "Rs. 12","Rs. 15"]),
        answers: [
          {
            answer: 'Rs. 6',
            nextId: 'fourthMathscorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Rs. 10',
            nextId: 'infourthMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Rs. 12",
            nextId: 'infourthMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Rs. 15",
            nextId: 'infourthMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq10: {
      botPrompt: 'Hurray! <strong>Rs. 6</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[11],
        },
      ],
      },
      infourthMathscorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs. 6"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[11],
        },
  
      ],
      },
      
      
          //11
  ['fourthMaths'+shuffleArraylottwo[11]]: {
      botPrompt: 'If 5 pens cost Rs. 25, how much will 8 pens cost?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Rs. 15', 'Rs. 30', "Rs. 40","Rs. 50"]),
        answers: [
          {
            answer: 'Rs. 15',
            nextId: 'infourthMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Rs. 30',
            nextId: 'infourthMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Rs. 40",
            nextId: 'fourthMathscorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Rs. 50",
            nextId: 'infourthMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq11: {
      botPrompt: 'Hurray! <strong>Rs. 40</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[12],
        },
      ],
      },
      infourthMathscorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs. 40"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[12],
        },
  
      ],
      },
  
  
          //12
  ['fourthMaths'+shuffleArraylottwo[12]]: {
      botPrompt: 'Which shape has no corners or vertices and is perfectly round?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Triangle', 'Rectangle', "Circle", "Pentagon"]),
        answers: [
          {
            answer: 'Triangle',
            nextId: 'infourthMathscorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Rectangle',
            nextId: 'infourthMathscorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Circle",
            nextId: 'fourthMathscorrectq12',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Pentagon",
            nextId: 'infourthMathscorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
   
        ],
      },
      
      fourthMathscorrectq12: {
      botPrompt: 'Hurray! <strong>Cicle</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[13],
        },
      ],
      },
      infourthMathscorrectq12: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[13],
        },
  
      ],
      },
  
  
          //13
  ['fourthMaths'+shuffleArraylottwo[13]]: {
      botPrompt: 'Which of the following shapes has 4 equal sides and 4 right angles?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['rectangle', 'square', "triagle", "cirlce"]),
        answers: [
          {
            answer: 'rectagle',
            nextId: 'infourthMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'square',
            nextId: 'infourthMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "triangle",
            nextId: 'infourthMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "circle",
            nextId: 'fourthMathscorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          
        ],
      },
      
      fourthMathscorrectq13: {
      botPrompt: 'Hurray! <strong>circle</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[14],
        },
      ],
      },
      infourthMathscorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"circle"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[14],
        },
  
      ],
      },
  
          //14
  ['fourthMaths'+shuffleArraylottwo[14]]: {
      botPrompt: 'Find the perimetres of a rectangle that has a length of 8 metress and a width of 5 metress.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['13 metres', '26 metres', "35 metres", "40 metres"]),
        answers: [
          {
            answer: '13 metres',
            nextId: 'infourthMathscorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '26 metres',
            nextId: 'infourthMathscorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "35 metres",
            nextId: 'fourthMathscorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '40 metres',
            nextId: 'infourthMathscorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
         
        ],
      },
      
      fourthMathscorrectq14: {
      botPrompt: 'Hurray! <strong>35 metres</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[15],
        },
      ],
      },
      infourthMathscorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35 metres"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[15],
        },
  
      ],
      },
  
  
          //15
  ['fourthMaths'+shuffleArraylottwo[15]]: {
      botPrompt: 'If a square has a side length of 6 centimetres, what is its area?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['6 square centimetres', '12 square centimetres', "18 square centimetres", "36 square centimetres"]),
        answers: [
          {
            answer: '6 square centimetres',
            nextId: 'infourthMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '12 square centimetres',
            nextId: 'infourthMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "18 square centimetres",
            nextId: 'infourthMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "36 square centimetres",
            nextId: 'fourthMathscorrectq15',
            sumToBags: [{ name: 'ac', points: 1 }],
          },

        ],
      },
      
      fourthMathscorrectq15: {
      botPrompt: 'Hurray! <strong>36 square centimetres</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[16],
        },
      ],
      },
      infourthMathscorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"36 square centimetres"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[16],
        },
  
      ],
      },
  
  
  
          
      //16
  ['fourthMaths'+shuffleArraylottwo[16]]: {
      botPrompt: 'A garden is in the shape of a right triangle with one side of length 4 metres and the other side of length 3 metres. What is the area of the garden?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['6 square metres', '7 square metres', "12 square metres", "24 square metres"]),
        answers: [
          {
            answer: '6 square metres',
            nextId: 'fourthMathscorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '7 square metres',
            nextId: 'infourthMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "12 square metres ",
            nextId: 'infourthMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "24 square metres",
            nextId: 'infourthMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      fourthMathscorrectq16: {
      botPrompt: 'Hurray! <strong>6 square metres</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[17],
        },
      ],
      },
      infourthMathscorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6 square metres"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[17],
        },
  
      ],
      },
  
      //17
  ['fourthMaths'+shuffleArraylottwo[17]]: {
      botPrompt: ' A rectangular swimming pool is 10 metres in length and 5 metres in width. What is the perimetres of the pool? ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['15 metres', '30 metres', "40 metres", "50 metres"]),
        answers: [
          {
            answer: '15 metres',
            nextId: 'infourthMathscorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '30 metres',
            nextId: 'infourthMathscorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "40 metres",
            nextId: 'fourthMathscorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "50 metres",
            nextId: 'infourthMathscorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fourthMathscorrectq17: {
      botPrompt: 'Hurray! <strong>40 metres</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[18],
        },
      ],
      },
      infourthMathscorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40 metres"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[18],
        },
  
      ],
      },
  
      //18
  ['fourthMaths'+shuffleArraylottwo[18]]: {
      botPrompt: 'What Roman numeral represents the number 50?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['L', 'C', "D", "X"]),
        answers: [
          {
            answer: 'L',
            nextId: 'fourthMathscorrectq18',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'C',
            nextId: 'infourthMathscorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "D",
            nextId: 'infourthMathscorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: "X",
              nextId: 'infourthMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
        ],
      },
      
      fourthMathscorrectq18: {
      botPrompt: 'Hurray! <strong>L</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[19],
        },
      ],
      },
      infourthMathscorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"L"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[19],
        },
  
      ],
      },
  
      //19
  ['fourthMaths'+shuffleArraylottwo[19]]: {
      botPrompt: 'Write the Roman numeral for the number 49.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['XLIX', 'LIX', "XXXIX", "XLIV"]),
        answers: [
          {
            answer: 'XLIX',
            nextId: 'fourthMathscorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'LIX',
            nextId: 'infourthMathscorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "XXXIX",
            nextId: 'infourthMathscorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'XLIV',
            nextId: 'infourthMathscorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },

        ],
      },
      
      fourthMathscorrectq19: {
      botPrompt: 'Hurray! <strong>XLIX</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[20],
        },
      ],
      },
      infourthMathscorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"XLIX"</strong>',
      answers: [
        {
          nextId: 'fourthMaths'+shuffleArraylottwo[20],
        },
  
      ],
      },
  
       //20
  ['fourthMaths'+shuffleArraylottwo[20]]: {
      botPrompt: 'Write the Roman numeral for the number 900.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['C', 'D', "M", "CM"]),
        answers: [
          {
            answer: 'C',
            nextId: 'infourthMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'D',
            nextId: 'infourthMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "M",
            nextId: 'infourthMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "CM",
            nextId: 'fourthMathscorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        
        ],
      },
      
      fourthMathscorrectq20: {
      botPrompt: 'Hurray! <strong>CM</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocontinuefourthMaths',
        },
      ],
      },
      infourthMathscorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"CM"</strong>',
      answers: [
        {
          nextId: 'wishtocontinuefourthMaths',
        },
  
      ],
      },
      wishtocontinuefourthMaths: {
        botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Yes', "No"]),
        answers: [
          {
            answer: 'Yes',
            nextId: 'chooseclass',
          },
          {
            answer: "No",
            nextId: 'endConv',
          },
        
        ],
      },

      //classv
      
      classv :{
        botPrompt: 'You Have Selected CLASS V. Which subject you would like to start',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Maths', "English", "Science"]),
          answers: [
            {
              answer: 'Maths',
              nextId: 'fiveMaths'+shuffleArraylottwo[1],
            },
            {
              answer: "English",
              nextId: "fiveEnglish"+shuffleArraylottwo[1],
            },
            {
              answer: "Science",
              nextId: "fiveScience"+shuffleArraylottwo[1],
            },
          ],
        

       //class5English
       ['fiveEnglish'+shuffleArraylottwo[1]]: {
        botPrompt: 'Identify the imperative sentence:',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['The sun is shining.', ' Please pass the salt.', "They played in the garden.","She read a book."]),
          answers: [
            {
              answer: 'The sun is shining.',
              nextId: 'infiveEnglishcorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: ' Please pass the salt.',
              nextId: 'fiveEnglishcorrectq1',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "They played in the garden.",
              nextId: 'infiveEnglishcorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "She read a book.",
              nextId: 'infiveEnglishcorrectq1',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveEnglishcorrectq1: {
        botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveEnglish'+shuffleArraylottwo[2],
          },
        ],
        },
        infiveEnglishcorrectq1: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Please pass the salt."</strong>',
        answers: [
          {
            nextId: 'fiveEnglish'+shuffleArraylottwo[2],
          },
        ],
        },
    
    
    
        //2
    ['fiveEnglish'+shuffleArraylottwo[2]]: {
      botPrompt: 'Complete the sentence with the correct preposition: The cat is sitting __________ the chair.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['over', ' between', "on","behind"]),
        answers: [
          {
            answer: 'over',
            nextId: 'infiveEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: ' between',
            nextId: 'infiveEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "on",
            nextId: 'fiveEnglishcorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "behind",
            nextId: 'infiveEnglishcorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq2: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
      infiveEnglishcorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"on"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[3],
        },
      ],
      },
    
    
    
      //3
    ['fiveEnglish'+shuffleArraylottwo[3]]: {
      botPrompt: 'Which modal verb indicates a possibility?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['can', ' must', "should","will"]),
        answers: [
          {
            answer: 'can',
            nextId: 'fiveEnglishcorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: ' must',
            nextId: 'infiveEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "should",
            nextId: 'infiveEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "will",
            nextId: 'infiveEnglishcorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq3: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
      infiveEnglishcorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"can"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[4],
        },
      ],
      },
    
    
    
      //4
    ['fiveEnglish'+shuffleArraylottwo[4]]: {
      botPrompt: 'Identify the possessive pronoun in this sentence: This is my toy, not ___________.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['him', ' he', "hers","she"]),
        answers: [
          {
            answer: 'him',
            nextId: 'infiveEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'he',
            nextId: 'infiveEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "hers",
            nextId: 'fiveEnglishcorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "she",
            nextId: 'infiveEnglishcorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq4: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
      infiveEnglishcorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"hers"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[5],
        },
      ],
      },
    
    
    
      //5
    ['fiveEnglish'+shuffleArraylottwo[5]]: {
      botPrompt: "Complete the sentence with the appropriate conjunction: I want to eat pizza, __________ I'm not hungry.",
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['but', 'so', "and","because"]),
        answers: [
          {
            answer: 'but',
            nextId: 'fiveEnglishcorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'so',
            nextId: 'infiveEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "and",
            nextId: 'infiveEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "because",
            nextId: 'infiveEnglishcorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq5: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
      infiveEnglishcorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"but"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[6],
        },
      ],
      },
    
    
    
      //6
    ['fiveEnglish'+shuffleArraylottwo[6]]: {
      botPrompt: 'Choose the correct form of the adjective: The giraffe is ____________ than the elephant.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['tall', 'taller', "tallest","most tall"]),
        answers: [
          {
            answer: 'tall',
            nextId: 'infiveEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'taller',
            nextId: 'fiveEnglishcorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "tallest",
            nextId: 'infiveEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "most tall",
            nextId: 'infiveEnglishcorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq6: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
      infiveEnglishcorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"taller"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[7],
        },
      ],
      },
    
    
    
      //7
    ['fiveEnglish'+shuffleArraylottwo[7]]: {
      botPrompt: 'Identify the interjection in the following sentence: __________! I won the game.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Wow', 'Alas', "Oh no","Green"]),
        answers: [
          {
            answer: 'Wow',
            nextId: 'fiveEnglishcorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Alas',
            nextId: 'infiveEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Oh no",
            nextId: 'infiveEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Green",
            nextId: 'infiveEnglishcorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq7: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
      infiveEnglishcorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Wow"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[8],
        },
      ],
      },
    
    
    
      //8
    ['fiveEnglish'+shuffleArraylottwo[8]]: {
      botPrompt: 'Choose the correct conjunction to join these two sentences: She wanted to go out, __________ it was raining.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['or', 'but', "so","because"]),
        answers: [
          {
            answer: 'or',
            nextId: 'infiveEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'but',
            nextId: 'fiveEnglishcorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "so",
            nextId: 'infiveEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "because",
            nextId: 'infiveEnglishcorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq8: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
      infiveEnglishcorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"but"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[9],
        },
      ],
      },
    
    
    
      //9
    ['fiveEnglish'+shuffleArraylottwo[9]]: {
      botPrompt: 'Which sentence has the correct subject-verb agreement?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['The cat chase the mouse.', ' The cat chases the mouse.', "The cat will chased the mouse.","The cat is chased the mouse."]),
        answers: [
          {
            answer: 'The cat chase the mouse.',
            nextId: 'infiveEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: ' The cat chases the mouse.',
            nextId: 'fiveEnglishcorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "The cat will chased the mouse.",
            nextId: 'infiveEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "The cat is chased the mouse.",
            nextId: 'infiveEnglishcorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq9: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
      infiveEnglishcorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>" The cat chases the mouse."</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[10],
        },
      ],
      },
    
    
    
      //10
    ['fiveEnglish'+shuffleArraylottwo[10]]: {
      botPrompt: 'Complete the sentence with the adverb: She spoke __________ during the meeting.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['quickly', 'table', "happy","book"]),
        answers: [
          {
            answer: 'quickly',
            nextId: 'fiveEnglishcorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'table',
            nextId: 'infiveEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "happy",
            nextId: 'infiveEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "book",
            nextId: 'infiveEnglishcorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq10: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[11],
        },
      ],
      },
      infiveEnglishcorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"quickly"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[11],
        },
      ],
      },
    
    
    
      //11
    ['fiveEnglish'+shuffleArraylottwo[11]]: {
      botPrompt: 'Choose the correct adjective to complete the sentence: The ___________ flowers bloomed in the garden.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['pretty', 'run', "quickly","slowly"]),
        answers: [
          {
            answer: 'pretty',
            nextId: 'fiveEnglishcorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'run',
            nextId: 'infiveEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "quickly",
            nextId: 'infiveEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "slowly",
            nextId: 'infiveEnglishcorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq11: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[12],
        },
      ],
      },
      infiveEnglishcorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"pretty"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[12],
        },
      ],
      },
    
    
    
      //12
    ['fiveEnglish'+shuffleArraylottwo[12]]: {
      botPrompt: 'Choose the correct verb form to complete the sentence: They _________ to the beach yesterday.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['goes', 'went', "go","going"]),
        answers: [
          {
            answer: 'goes',
            nextId: 'infiveEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'went',
            nextId: 'fiveEnglishcorrectq12',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "go",
            nextId: 'infiveEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "going",
            nextId: 'infiveEnglishcorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq12: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[13],
        },
      ],
      },
      infiveEnglishcorrectq12: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"went"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[13],
        },
      ],
      },
    
    
    
      //13
    ['fiveEnglish'+shuffleArraylottwo[13]]: {
      botPrompt: 'Identify the direct object in this sentence: She gave him a book.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['book', 'him', "gave","she"]),
        answers: [
          {
            answer: 'book',
            nextId: 'fiveEnglishcorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'him',
            nextId: 'infiveEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "gave",
            nextId: 'infiveEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "she",
            nextId: 'infiveEnglishcorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq13: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[14],
        },
      ],
      },
      infiveEnglishcorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"book"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[14],
        },
      ],
      },
    
    
    
      //14
    ['fiveEnglish'+shuffleArraylottwo[14]]: {
      botPrompt: ' Choose the correct sentence in the past perfect tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['She will study for the test.', 'They are eating lunch.', "He had finished his homework.","I am going to the park."]),
        answers: [
          {
            answer: 'She will study for the test.',
            nextId: 'infiveEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'They are eating lunch.',
            nextId: 'infiveEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "He had finished his homework.",
            nextId: 'fiveEnglishcorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "I am going to the park.",
            nextId: 'infiveEnglishcorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq14: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[15],
        },
      ],
      },
      infiveEnglishcorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He had finished his homework."</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[15],
        },
      ],
      },
    
    
    
      //15
    ['fiveEnglish'+shuffleArraylottwo[15]]: {
      botPrompt: 'Identify the sentence in the future continuous tense:',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['They were playing in the park.', ' She will be dancing at the party.', "He ate breakfast early.","I am going to school."]),
        answers: [
          {
            answer: 'They were playing in the park.',
            nextId: 'infiveEnglishcorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: ' She will be dancing at the party.',
            nextId: 'fiveEnglishcorrectq15',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "He ate breakfast early.",
            nextId: 'infiveEnglishcorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "I am going to school.",
            nextId: 'infiveEnglishcorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq15: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[16],
        },
      ],
      },
      infiveEnglishcorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>" She will be dancing at the party."</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[16],
        },
      ],
      },
    
    
    
      //16
    ['fiveEnglish'+shuffleArraylottwo[16]]: {
      botPrompt: 'Which sentence has the correct subject-verb agreement?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['The team is playing well.', ' The team are playing well.', "The team am playing well.","The team be playing well."]),
        answers: [
          {
            answer: 'The team is playing well.',
            nextId: 'fiveEnglishcorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: ' The team are playing well.',
            nextId: 'infiveEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "The team am playing well.",
            nextId: 'infiveEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "The team be playing well.",
            nextId: 'infiveEnglishcorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq16: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[17],
        },
      ],
      },
      infiveEnglishcorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The team is playing well."</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[17],
        },
      ],
      },
    
    
    
      //17
    ['fiveEnglish'+shuffleArraylottwo[17]]: {
      botPrompt: ' Complete the sentence with the appropriate articles: I found _________ interesting book on _________ unicorn at the library.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['a, the', ' an, an', "an, a","the, an"]),
        answers: [
          {
            answer: 'a, the',
            nextId: 'infiveEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: ' an, an',
            nextId: 'infiveEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "an, a",
            nextId: 'fiveEnglishcorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "the, an",
            nextId: 'infiveEnglishcorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq17: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[18],
        },
      ],
      },
      infiveEnglishcorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an, a"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[18],
        },
      ],
      },
    
    
    
      //18
    ['fiveEnglish'+shuffleArraylottwo[18]]: {
      botPrompt: 'Choose the correct verb form to complete the sentence: The students ____________ their homework every day.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['finish', 'finished', "finishing","finishes"]),
        answers: [
          {
            answer: 'finish',
            nextId: 'fiveEnglishcorrectq18',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'finished',
            nextId: 'infiveEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "finishing",
            nextId: 'infiveEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "finishes",
            nextId: 'infiveEnglishcorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq18: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[19],
        },
      ],
      },
      infiveEnglishcorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"finish"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[19],
        },
      ],
      },
    
    
    
      //19
    ['fiveEnglish'+shuffleArraylottwo[1]]: {
      botPrompt: 'Complete the sentence with an adverb: He solved the puzzle ___________.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['clever', 'cleverly', "cleverest","clevering"]),
        answers: [
          {
            answer: 'clever',
            nextId: 'infiveEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'cleverly',
            nextId: 'fiveEnglishcorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "cleverest",
            nextId: 'infiveEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "clevering",
            nextId: 'infiveEnglishcorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq19: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[20],
        },
      ],
      },
      infiveEnglishcorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"cleverly"</strong>',
      answers: [
        {
          nextId: 'fiveEnglish'+shuffleArraylottwo[20],
        },
      ],
      },
    
    
    
      //20
    ['fiveEnglish'+shuffleArraylottwo[20]]: {
      botPrompt: 'Choose the correct adjective to complete the sentence: The ___________ mountain peak was a breathtaking sight.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['high', 'higher', "highest","highly"]),
        answers: [
          {
            answer: 'high',
            nextId: 'infiveEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'higher',
            nextId: 'infiveEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "highest",
            nextId: 'fiveEnglishcorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "highly",
            nextId: 'infiveEnglishcorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveEnglishcorrectq20: {
      botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocountinefiveEnglish',
        },
      ],
      },
      infiveEnglishcorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"highest"</strong>',
      answers: [
        {
          nextId: 'wishtocountinefiveEnglish',
        },
      ],
      },
      wishtocountinefiveEnglish: {
        botPrompt: 'You have Completed English. Do you Wish to Continue ?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Yes', "No"]),
        answers: [
          {
            answer: 'Yes',
            nextId: 'chooseclass',
          },
          {
            answer: "No",
            nextId: 'endConv',
          },
        
        ],
      },      

//class5maths
  ['fiveMaths'+shuffleArraylottwo[1]]: {
    botPrompt: 'Find the LCM of 5 and 7.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['10', '12', "14","35"]),
      answers: [
        {
          answer: '10',
          nextId: 'infiveMathscorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '12',
          nextId: 'infiveMathscorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "14",
          nextId: 'infiveMathscorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "35",
          nextId: 'fiveMathscorrectq1',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    fiveMathscorrectq1: {
    botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fiveMaths'+shuffleArraylottwo[2],
      },
    ],
    },
    infiveMathscorrectq1: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
    answers: [
      {
        nextId: 'fiveMaths'+shuffleArraylottwo[2],
      },
    ],
    },
    
      //2
      ['fiveMaths'+shuffleArraylottwo[2]]: {
        botPrompt: 'Find the HCF of 36 and 48.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['6', '12', "18","24"]),
          answers: [
            {
              answer: '6',
              nextId: 'infiveMathscorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '12',
              nextId: 'fiveMathscorrectq2',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "18",
              nextId: 'infiveMathscorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "24",
              nextId: 'infiveMathscorrectq2',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq2: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[3],
          },
        ],
        },
        infiveMathscorrectq2: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[3],
          },
        ],
        },

//3
['fiveMaths'+shuffleArraylottwo[3]]: {
  botPrompt: 'A car travels at 60 km/h for the first half of its journey and 80 km/h for the second half. What is the average speed for the entire journey?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['60 km/h', '70 km/h', "75 km/h","85 km/h"]),
    answers: [
      {
        answer: '60 km/h',
        nextId: 'infiveMathscorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '70 km/h',
        nextId: 'fiveMathscorrectq3',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "75 km/h",
        nextId: 'infiveMathscorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "85 km/h",
        nextId: 'infiveMathscorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveMathscorrectq3: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveMaths'+shuffleArraylottwo[4],
    },
  ],
  },
  infiveMathscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"70 km/h"</strong>',
  answers: [
    {
      nextId: 'fiveMaths'+shuffleArraylottwo[4],
    },
  ],
  },   
  
  
  //4
  ['fiveMaths'+shuffleArraylottwo[4]]: {
    botPrompt: 'Which formula is used to calculate simple interest?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['P = R * T', 'I = P * R * T', "A = P + I","P = A - I"]),
      answers: [
        {
          answer: 'P = R * T',
          nextId: 'infiveMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'I = P * R * T',
          nextId: 'fiveMathscorrectq4',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "A = P + I",
          nextId: 'infiveMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "P = A - I",
          nextId: 'infiveMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    fiveMathscorrectq4: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fiveMaths'+shuffleArraylottwo[5],
      },
    ],
    },
    infiveMathscorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I = P * R * T"</strong>',
    answers: [
      {
        nextId: 'fiveMaths'+shuffleArraylottwo[5],
      },
    ],
    },


    //5
    ['fiveMaths'+shuffleArraylottwo[5]]: {
      botPrompt: 'If the principal amount is Rs.800, the annual interest rate is 5%, and the time period is 2 years, what is the simple interest earned?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField([' Rs.40', ' Rs.80', " Rs.400"," Rs.800"]),
        answers: [
          {
            answer: ' Rs.40',
            nextId: 'infiveMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: ' Rs.80',
            nextId: 'fiveMathscorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: " Rs.400",
            nextId: 'infiveMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: " Rs.800",
            nextId: 'infiveMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      fiveMathscorrectq5: {
      botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'fiveMaths'+shuffleArraylottwo[6],
        },
      ],
      },
      infiveMathscorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rs.80"</strong>',
      answers: [
        {
          nextId: 'fiveMaths'+shuffleArraylottwo[6],
        },
      ],
      },


      //6
      ['fiveMaths'+shuffleArraylottwo[6]]: {
        botPrompt: 'Which type of angle measures more than 90 degrees but less than 180 degrees?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField([' Acute angle', 'Right angle', "Obtuse angle","Straight angle"]),
          answers: [
            {
              answer: 'Acute angle',
              nextId: 'infiveMathscorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Right angle',
              nextId: 'infiveMathscorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Obtuse angle",
              nextId: 'fiveMathscorrectq6',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Straight angle",
              nextId: 'infiveMathscorrectq6',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq6: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[7],
          },
        ],
        },
        infiveMathscorrectq6: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Obtuse angle"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[7],
          },
        ],
        },


        //7
      ['fiveMaths'+shuffleArraylottwo[7]]: {
        botPrompt: 'What type of triangle has at least two sides of equal length?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['Scalene triangle', 'Isosceles triangle', "Equilateral triangle","Right triangle"]),
          answers: [
            {
              answer: 'Scalene triangle',
              nextId: 'infiveMathscorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Isosceles triangle',
              nextId: 'fiveMathscorrectq7',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Equilateral triangle",
              nextId: 'infiveMathscorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Right triangle..",
              nextId: 'infiveMathscorrectq7',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq7: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[8],
          },
        ],
        },
        infiveMathscorrectq7: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Isosceles triangle"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[8],
          },
        ],
        },


        //8
      ['fiveMaths'+shuffleArraylottwo[8]]: {
        botPrompt: ' If you buy a shirt for Rs.30 and sell it for Rs.45, what is the profit percentage?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['30%', '45%', "50%","150%"]),
          answers: [
            {
              answer: '30%',
              nextId: 'infiveMathscorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '45%',
              nextId: 'infiveMathscorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "50%",
              nextId: 'fiveMathscorrectq8',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "150%",
              nextId: 'infiveMathscorrectq8',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq8: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[9],
          },
        ],
        },
        infiveMathscorrectq8: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"50%"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[9],
          },
        ],
        },


        //9
      ['fiveMaths'+shuffleArraylottwo[9]]: {
        botPrompt: 'Which metric prefix represents one thousandth (1/1000) of a unit?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField([' Kilo-', 'Centi-', "Milli-","Deci-"]),
          answers: [
            {
              answer: ' Kilo-',
              nextId: 'infiveMathscorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'Centi-',
              nextId: 'infiveMathscorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Milli-",
              nextId: 'fiveMathscorrectq9',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Deci-",
              nextId: 'infiveMathscorrectq9',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq9: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[10],
          },
        ],
        },
        infiveMathscorrectq9: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Milli-"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[10],
          },
        ],
        },


        //10
      ['fiveMaths'+shuffleArraylottwo[10]]: {
        botPrompt: 'If you have 2,000 grams of sugar, how many kilograms is that?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['0.02 kg', '0.2 kg', "2 kg","20 kg"]),
          answers: [
            {
              answer: '0.02 kg',
              nextId: 'infiveMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '0.2 kg',
              nextId: 'infiveMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "2 kg",
              nextId: 'fiveMathscorrectq10',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "20 kg",
              nextId: 'infiveMathscorrectq10',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq10: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[11],
          },
        ],
        },
        infiveMathscorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2 kg"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[11],
          },
        ],
        },


         //11
      ['fiveMaths'+shuffleArraylottwo[11]]: {
        botPrompt: 'Simplify the fraction 12/18 to its simplest form.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['2/3', '3/2', "4/6","6/4"]),
          answers: [
            {
              answer: '2/3',
              nextId: 'fiveMathscorrectq11',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '3/2',
              nextId: 'infiveMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "4/6",
              nextId: 'infiveMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "6/4",
              nextId: 'infiveMathscorrectq11',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq11: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[12],
          },
        ],
        },
        infiveMathscorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2/3"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[12],
          },
        ],
        },



         //12
      ['fiveMaths'+shuffleArraylottwo[12]]: {
        botPrompt: 'If x = 3, what is the value of 2x + 5?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['6', '8', "11","15"]),
          answers: [
            {
              answer: '6',
              nextId: 'infiveMathscorrectq12',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '8',
              nextId: 'infiveMathscorrectq12',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "11",
              nextId: 'fiveMathscorrectq12',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "15",
              nextId: 'infiveMathscorrectq12',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq12: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[13],
          },
        ],
        },
        infiveMathscorrectq12: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[13],
          },
        ],
        },



         //13
      ['fiveMaths'+shuffleArraylottwo[13]]: {
        botPrompt: 'What is the volume of a cuboid with length 6 cm, width 3 cm, and height 4 cm?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['72 cubic centimeters', '54 cubic centimeters', "24 cubic centimeters","18 cubic centimeters"]),
          answers: [
            {
              answer: '72 cubic centimeters',
              nextId: 'fiveMathscorrectq13',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '54 cubic centimeters',
              nextId: 'infiveMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "24 cubic centimeters",
              nextId: 'infiveMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "18 cubic centimeters",
              nextId: 'infiveMathscorrectq13',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq13: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[14],
          },
        ],
        },
        infiveMathscorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"72 cubic centimeters"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[14],
          },
        ],
        },




         //14
      ['fiveMaths'+shuffleArraylottwo[14]]: {
        botPrompt: 'If two cubes have side lengths of 2 cm and 4 cm, which cube has the greater volume?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['The cube with a side length of 2 cm', 'The cube with a side length of 4 cm', "Both cubes have the same volume","Cannot be determined from the information given"]),
          answers: [
            {
              answer: 'The cube with a side length of 2 cm',
              nextId: 'infiveMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: 'The cube with a side length of 4 cm',
              nextId: 'fiveMathscorrectq14',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "Both cubes have the same volume",
              nextId: 'infiveMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "Cannot be determined from the information given",
              nextId: 'infiveMathscorrectq14',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq14: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[15],
          },
        ],
        },
        infiveMathscorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The cube with a side length of 4 cm"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[15],
          },
        ],
        },



         //15
      ['fiveMaths'+shuffleArraylottwo[15]]: {
        botPrompt: 'Express 0.6 as a percentage.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['60%', '6%', "0.06%","600%"]),
          answers: [
            { 
              answer: '60%',
              nextId: 'fiveMathscorrectq15',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '6%',
              nextId: 'infiveMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "0.06%",
              nextId: 'infiveMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "600%",
              nextId: 'infiveMathscorrectq15',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq15: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[16],
          },
        ],
        },
        infiveMathscorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"60%"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[16],
          },
        ],
        },





         //16
      ['fiveMaths'+shuffleArraylottwo[16]]: {
        botPrompt: 'What is the difference between 3.5 and 1.25?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['4.25', '2.25', "1.75","0.75"]),
          answers: [
            {
              answer: '4.25',
              nextId: 'infiveMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '2.25',
              nextId: 'fiveMathscorrectq16',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "1.75",
              nextId: 'infiveMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "0.75",
              nextId: 'infiveMathscorrectq16',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq16: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[17],
          },
        ],
        },
        infiveMathscorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2.25"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[17],
          },
        ],
        },




         //17
      ['fiveMaths'+shuffleArraylottwo[17]]: {
        botPrompt: 'What is the result of adding 0.4 and 0.25?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['0.65', '0.065', "0.092","0.225"]),
          answers: [
            {
              answer: '0.65',
              nextId: 'fiveMathscorrectq17',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: '0.065',
              nextId: 'infiveMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "0.092",
              nextId: 'infiveMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "0.225",
              nextId: 'infiveMathscorrectq17',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq17: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[18],
          },
        ],
        },
        infiveMathscorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0.65"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[18],
          },
        ],
        },




         //18
      ['fiveMaths'+shuffleArraylottwo[18]]: {
        botPrompt: 'Evaluate the expression: 8 - 3 × (4 ÷ 2) + 5.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['6', '10', "7","12"]),
          answers: [
            {
              answer: '6',
              nextId: 'infiveMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '10',
              nextId: 'infiveMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "7",
              nextId: 'fiveMathscorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "12",
              nextId: 'infiveMathscorrectq18',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq18: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[19],
          },
        ],
        },
        infiveMathscorrectq18: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[19],
          },
        ],
        },




         //19
      ['fiveMaths'+shuffleArraylottwo[19]]: {
        botPrompt: 'Simplify the expression: 5 + (7 × 2) - (4 ÷ 2) + (3 × 4).',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['20', '29', "22","23"]),
          answers: [
            {
              answer: '20',
              nextId: 'infiveMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '29',
              nextId: 'fiveMathscorrectq19',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "22",
              nextId: 'infiveMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "23",
              nextId: 'infiveMathscorrectq19',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq19: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[20],
          },
        ],
        },
        infiveMathscorrectq19: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
        answers: [
          {
            nextId: 'fiveMaths'+shuffleArraylottwo[20],
          },
        ],
        },



     //20
      ['fiveMaths'+shuffleArraylottwo[20]]: {
        botPrompt: 'If the length of a rectangle is 8 cm and the width is 5 cm, what is the area of the rectangle?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['13 square cm', '40 square cm', "26 square cm","2 square cm"]),
          answers: [
            {
              answer: '13 square cm',
              nextId: 'infiveMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: '40 square cm',
              nextId: 'fiveMathscorrectq20',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
            {
              answer: "26 square cm",
              nextId: 'infiveMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
            {
              answer: "2 square cm",
              nextId: 'infiveMathscorrectq20',
              sumToBags: [{ name: 'ai', points: 1 }],
            },
          ],
        },
        
        fiveMathscorrectq20: {
        botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'wishtocountinefiveMaths',
          },
        ],
        },
        infiveMathscorrectq20: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40 square cm"</strong>',
        answers: [
          {
            nextId: 'wishtocountinefiveMaths',
          },
        ],
        },

        wishtocountinefiveMaths: {
          botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Yes', "No"]),
          answers: [
            {
              answer: 'Yes',
              nextId: 'chooseclass',
            },
            {
              answer: "No",
              nextId: 'endConv',
            },
          
          ],
        },


},
//class5Science
//1
['fiveScience'+shuffleArraylottwo[1]]: {
  botPrompt: 'What is the primary purpose of roots in a plant?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Absorbing sunlight', 'Anchoring the plant and absorbing water and nutrients', "Producing flowers","Transporting food within the plant"]),
    answers: [
      {
        answer: 'Absorbing sunlight',
        nextId: 'infiveSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Anchoring the plant and absorbing water and nutrients',
        nextId: 'fiveSciencecorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Producing flowers",
        nextId: 'infiveSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Transporting food within the plant",
        nextId: 'infiveSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[2],
    },
  ],
  },
  infiveSciencecorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Anchoring the plant and absorbing water and nutrients"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[2],
    },
  ],
  },




//2
['fiveScience'+shuffleArraylottwo[2]]: {
  botPrompt: 'Which of the following is NOT a method to prevent the spread of infectious diseases?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Covering your mouth and nose when sneezing or coughing', 'Sharing personal hygiene items with others', "Regularly disinfecting frequently touched surfaces","Getting vaccinated"]),
    answers: [
      {
        answer: 'Covering your mouth and nose when sneezing or coughing',
        nextId: 'infiveSciencecorrectq2',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Sharing personal hygiene items with others',
        nextId: 'fiveSciencecorrectq2',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Regularly disinfecting frequently touched surfaces",
        nextId: 'infiveSciencecorrectq2',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Getting vaccinated",
        nextId: 'infiveSciencecorrectq2',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq2: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[3],
    },
  ],
  },
  infiveSciencecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sharing personal hygiene items with others"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[3],
    },
  ],
  },



      //3
['fiveScience'+shuffleArraylottwo[3]]: {
  botPrompt: 'Which of the following is a common symptom of dehydration?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Excessive urination', 'Dry mouth and throat', "Increased energy levels","Rapid weight gain"]),
    answers: [
      {
        answer: 'Excessive urination',
        nextId: 'infiveSciencecorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Dry mouth and throat',
        nextId: 'fiveSciencecorrectq3',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Increased energy levels",
        nextId: 'infiveSciencecorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Rapid weight gain",
        nextId: 'infiveSciencecorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq3: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[4],
    },
  ],
  },
  infiveSciencecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dry mouth and throat"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[4],
    },
  ],
  },



      //4
['fiveScience'+shuffleArraylottwo[1]]: {
  botPrompt: 'What is the process by which plants make their own food using sunlight?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Respiration', 'Germination', "Photosynthesis","Transpiration"]),
    answers: [
      {
        answer: 'Respiration',
        nextId: 'infiveSciencecorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Germination',
        nextId: 'infiveSciencecorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Photosynthesis",
        nextId: 'fiveSciencecorrectq4',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "",
        nextId: 'infiveSciencecorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq4: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[5],
    },
  ],
  },
  infiveSciencecorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Photosynthesis"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[5],
    },
  ],
  },



      //5
['fiveScience'+shuffleArraylottwo[5]]: {
  botPrompt: 'What should you do if you accidentally touch a hot object and get burned?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Apply ice directly to the burn', 'Run the burn under cold water for a few minutes', "Cover the burn with a cloth and leave it alone","Pop any blisters that form"]),
    answers: [
      {
        answer: 'Apply ice directly to the burn',
        nextId: 'infiveSciencecorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Run the burn under cold water for a few minutes',
        nextId: 'fiveSciencecorrectq5',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Cover the burn with a cloth and leave it alone",
        nextId: 'infiveSciencecorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Pop any blisters that form",
        nextId: 'infiveSciencecorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq5: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[6],
    },
  ],
  },
  infiveSciencecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Run the burn under cold water for a few minutes"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[6],
    },
  ],
  },



      //6
['fiveScience'+shuffleArraylottwo[6]]: {
  botPrompt: 'Which of the following is NOT a fire safety precaution?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Playing with matches', 'Keeping flammable objects away from open flames', "Having a fire extinguisher handy","Knowing the emergency exit routes"]),
    answers: [
      {
        answer: 'Playing with matches',
        nextId: 'fiveSciencecorrectq6',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Keeping flammable objects away from open flames',
        nextId: 'infiveSciencecorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Having a fire extinguisher handy",
        nextId: 'infiveSciencecorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Knowing the emergency exit routes",
        nextId: 'infiveSciencecorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq6: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[7],
    },
  ],
  },
  infiveSciencecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Playing with matches"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[7],
    },
  ],
  },



      //7
['fiveScience'+shuffleArraylottwo[7]]: {
  botPrompt: 'What is the process of a solid changing directly into a gas without becoming a liquid first called?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Melting', 'Evaporation', "Sublimation","Condensation"]),
    answers: [
      {
        answer: 'Melting',
        nextId: 'infiveSciencecorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Evaporation',
        nextId: 'infiveSciencecorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Sublimation",
        nextId: 'fiveSciencecorrectq7',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Condensation",
        nextId: 'infiveSciencecorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq7: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[8],
    },
  ],
  },
  infiveSciencecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sublimation"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[8],
    },
  ],
  },



      //8
['fiveScience'+shuffleArraylottwo[8]]: {
  botPrompt: 'Which state of matter can be compressed the most?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Solid', 'Liquid', "Gas","Plasma"]),
    answers: [
      {
        answer: 'Solid',
        nextId: 'infiveSciencecorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Liquid',
        nextId: 'infiveSciencecorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Gas",
        nextId: 'fiveSciencecorrectq8',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Plasma",
        nextId: 'infiveSciencecorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq8: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[9],
    },
  ],
  },
  infiveSciencecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Gas"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[9],
    },
  ],
  },



      //9
['fiveScience'+shuffleArraylottwo[9]]: {
  botPrompt: 'Which of the following is an example of a sedimentary rock?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Granite', 'Marble', "Sandstone","Slate"]),
    answers: [
      {
        answer: 'Granite',
        nextId: 'infiveSciencecorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Marble',
        nextId: 'infiveSciencecorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Sandstone",
        nextId: 'fiveSciencecorrectq9',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Slate",
        nextId: 'infiveSciencecorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq9: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[10],
    },
  ],
  },
  infiveSciencecorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sandstone"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[10],
    },
  ],
  },



      //10
['fiveScience'+shuffleArraylottwo[10]]: {
  botPrompt: ' What type of rock is formed from the cooling and solidification of molten magma or lava?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Sedimentary rock', 'Metamorphic rock', "Igneous rock","Fossil rock"]),
    answers: [
      {
        answer: 'Sedimentary rock',
        nextId: 'infiveSciencecorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Metamorphic rock',
        nextId: 'infiveSciencecorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Igneous rock",
        nextId: 'fiveSciencecorrectq10',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Fossil rock",
        nextId: 'infiveSciencecorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq10: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[11],
    },
  ],
  },
  infiveSciencecorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Igneous rock"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[11],
    },
  ],
  },



      //11
['fiveScience'+shuffleArraylottwo[11]]: {
  botPrompt: ' Which animal is known for its ability to change the color and texture of its skin to blend into its surroundings?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Tiger', 'Chameleon', "Rhino","Koala"]),
    answers: [
      {
        answer: 'Tiger',
        nextId: 'infiveSciencecorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Chameleon',
        nextId: 'fiveSciencecorrectq11',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Rhino",
        nextId: 'infiveSciencecorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Koala",
        nextId: 'infiveSciencecorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq11: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[12],
    },
  ],
  },
  infiveSciencecorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chameleon"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[12],
    },
  ],
  },



      //12
['fiveScience'+shuffleArraylottwo[12]]: {
  botPrompt: ' What is the main function of the brain in the nervous system?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Pumping blood', 'Storing food', "Processing information and controlling the body","Regulating body temperature"]),
    answers: [
      {
        answer: 'Pumping blood',
        nextId: 'infiveSciencecorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Storing food',
        nextId: 'infiveSciencecorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Processing information and controlling the body",
        nextId: 'fiveSciencecorrectq12',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Regulating body temperature",
        nextId: 'infiveSciencecorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq12: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[13],
    },
  ],
  },
  infiveSciencecorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Processing information and controlling the body"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[13],
    },
  ],
  },



      //13
['fiveScience'+shuffleArraylottwo[13]]: {
  botPrompt: ' What are the bones in your fingers and toes called?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Vertebrae', 'Phalanges', "Femurs","Humerus"]),
    answers: [
      {
        answer: 'Vertebrae',
        nextId: 'infiveSciencecorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Phalanges',
        nextId: 'fiveSciencecorrectq13',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Femurs",
        nextId: 'infiveSciencecorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Humerus",
        nextId: 'infiveSciencecorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq13: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[14],
    },
  ],
  },
  infiveSciencecorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Phalanges"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[14],
    },
  ],
  },



      //14
['fiveScience'+shuffleArraylottwo[14]]: {
  botPrompt: ' Which of the following is an example of a simple machine that can make it easier to do work?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField([' Pillow', ' Wheel and axle', " Teddy bear"," Mirror"]),
    answers: [
      {
        answer: ' Pillow',
        nextId: 'infiveSciencecorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: ' Wheel and axle',
        nextId: 'fiveSciencecorrectq14',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: " Teddy bear",
        nextId: 'infiveSciencecorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: " Mirror",
        nextId: 'infiveSciencecorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq14: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[15],
    },
  ],
  },
  infiveSciencecorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Wheel and axle"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[15],
    },
  ],
  },



      //15
['fiveScience'+shuffleArraylottwo[15]]: {
  botPrompt: ' Which type of energy is associated with motion?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Thermal energy', 'Potential energy', "Kinetic energy","Sound energy"]),
    answers: [
      {
        answer: 'Thermal energy',
        nextId: 'infiveSciencecorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Potential energy',
        nextId: 'infiveSciencecorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Kinetic energy",
        nextId: 'fiveSciencecorrectq15',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Sound energy",
        nextId: 'infiveSciencecorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq15: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[16],
    },
  ],
  },
  infiveSciencecorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Kinetic energy"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[16],
    },
  ],
  },



      //16
['fiveScience'+shuffleArraylottwo[16]]: {
  botPrompt: ' What is the importance of air pressure in our atmosphere?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['It helps to keep the atmosphere warm', 'It supports life by allowing the exchange of gases', "It prevents sound waves from traveling","It causes earthquakes"]),
    answers: [
      {
        answer: 'It helps to keep the atmosphere warm',
        nextId: 'infiveSciencecorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'It supports life by allowing the exchange of gases',
        nextId: 'fiveSciencecorrectq16',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "It prevents sound waves from traveling",
        nextId: 'infiveSciencecorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "It causes earthquakes",
        nextId: 'finiveSciencecorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq16: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[17],
    },
  ],
  },
  infiveSciencecorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It supports life by allowing the exchange of gases"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[17],
    },
  ],
  },



      //17
['fiveScience'+shuffleArraylottwo[17]]: {
  botPrompt: ' During which phase of the Moon can a lunar eclipse occur?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Full Moon', 'New Moon', "Quarter Moon","Crescent Moon"]),
    answers: [
      {
        answer: 'Full Moon',
        nextId: 'fiveSciencecorrectq17',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'New Moon',
        nextId: 'infiveSciencecorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Quarter Moon",
        nextId: 'infiveSciencecorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Crescent Moon",
        nextId: 'infiveSciencecorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq17: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[18],
    },
  ],
  },
  infiveSciencecorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Full Moon"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[18],
    },
  ],
  },



      //18
['fiveScience'+shuffleArraylottwo[18]]: {
  botPrompt: 'What causes day and night on Earth?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['The rotation of the Earth on its axis', 'The revolution of the Moon around Earth', "The gravitational pull of the Sun","The changing phases of the Moon"]),
    answers: [
      {
        answer: 'The rotation of the Earth on its axis',
        nextId: 'fiveSciencecorrectq18',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'The revolution of the Moon around Earth',
        nextId: 'infiveSciencecorrectq18',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "The gravitational pull of the Sun",
        nextId: 'infiveSciencecorrectq18',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "The changing phases of the Moon",
        nextId: 'infiveSciencecorrectq18',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq18: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[19],
    },
  ],
  },
  infiveSciencecorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The rotation of the Earth on its axis"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[19],
    },
  ],
  },



      //19
['fiveScience'+shuffleArraylottwo[19]]: {
  botPrompt: 'What is the term for the opening at the top of a volcano from which materials are ejected during an eruption?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Crater', 'Canyon', "Valley","Tunnel"]),
    answers: [
      {
        answer: 'Crater',
        nextId: 'fiveSciencecorrectq19',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Canyon',
        nextId: 'infiveSciencecorrectq19',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Valley",
        nextId: 'infiveSciencecorrectq19',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Tunnel",
        nextId: 'infiveSciencecorrectq19',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq19: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[20],
    },
  ],
  },
  infiveSciencecorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Crater"</strong>',
  answers: [
    {
      nextId: 'fiveScience'+shuffleArraylottwo[20],
    },
  ],
  },



      //20
['fiveScience'+shuffleArraylottwo[20]]: {
  botPrompt: " What effect does the greenhouse effect have on Earth's temperature? ",
   type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['It cools down the Earth', 'It has no impact on temperature', "It warms up the Earth","It causes earthquakes"]),
    answers: [
      {
        answer: 'It cools down the Earth',
        nextId: 'infiveSciencecorrectq20',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'It has no impact on temperature',
        nextId: 'infiveSciencecorrectq20',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "It warms up the Earth",
        nextId: 'fiveSciencecorrectq20',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "It causes earthquakes",
        nextId: 'infiveSciencecorrectq20',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  fiveSciencecorrectq20: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocountinefiveScience',
    },
  ],
  },
  infiveSciencecorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It warms up the Earth"</strong>',
  answers: [
    {
      nextId: 'wishtocountinefiveScience',
    },
  ],
  },
  wishtocountinefiveScience: {
    botPrompt: 'You have Completed Science. Do you Wish to Continue ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', "No"]),
    answers: [
      {
        answer: 'Yes',
        nextId: 'chooseclass',
      },
      {
        answer: "No",
        nextId: 'endConv',
      },
    
    ],
  },
//classvi
classvi: {
  botPrompt: 'You Have Selected CLASS VI . Which subject you would like to start',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Maths', "English", "Science"]),
  answers: [
    {
      answer: 'Maths',
      nextId: 'sixthMaths'+shuffleArraylottwo[1],
    },
    {
      answer: "English",
      nextId: 'sixthEnglish'+shuffleArraylottwo[1],
    },
    {
      answer: "Science",
      nextid: 'sixthScience'+shuffleArraylottwo[1],
    }
  
  ],
},
//sixth Maths
 //1
 ['sixthMaths'+shuffleArraylottwo[1]]: {
  botPrompt: 'The place value of  6 in the numeral 4,68,32,950 is',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6000000', '600000', "60000", "6000"]),
    answers: [
      {
        answer: '6000000',
        nextId: 'sixthMathscorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: '600000',
        nextId: 'insixthMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "60000", 
        nextId: 'insixthMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "6000", 
        nextId: 'insixthMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  sixthMathscorrectq1: {
  botPrompt: 'Hurray! <strong>6000000</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'sixthMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  insixthMathscorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6000000"</strong>',
  answers: [
    {
      nextId: 'sixthMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
    //2
    ['sixthMaths'+shuffleArraylottwo[2]]: {
      botPrompt: 'If  a and  b are co-primes , then their LCM is ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['1', 'ab', "0", "a+b"]),
        answers: [
          {
            answer: '1',
            nextId: 'insixthMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'ab',
            nextId: 'sixthMathscorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "0", 
            nextId: 'insixthMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "a+b", 
            nextId: 'insixthMathscorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq2: {
      botPrompt: 'Hurray! <strong>ab</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[3],
        },
      ],
      },
      insixthMathscorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"ab"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[3],
        },
      ],
      },
  
  
  //3
  ['sixthMaths'+shuffleArraylottwo[3]]: {
      botPrompt: 'Sum of  -50  and -20 is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['-80', '-70', "-90", "-100"]),
        answers: [
          {
            answer: '-80',
            nextId: 'insixthMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '-70',
            nextId: 'sixthMathscorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "-90", 
            nextId: 'insixthMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "-100", 
            nextId: 'insixthMathscorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq3: {
      botPrompt: 'Hurray! <strong>-70</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[4],
        },
      ],
      },
      insixthMathscorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"-70"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[4],
        },
      ],
      },
  
  
      //4
  ['sixthMaths'+shuffleArraylottwo[4]]: {
      botPrompt: 'The successor of -89 is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['-90', '-88', "90", "88"]),
        answers: [
          {
            answer: '-90',
            nextId: 'insixthMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '-88',
            nextId: 'sixthMathscorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "90", 
            nextId: 'insixthMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "88", 
            nextId: 'insixthMathscorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq4: {
      botPrompt: 'Hurray! <strong>-88</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[5],
        },
      ],
      },
      insixthMathscorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"-88"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[5],
        },
      ],
      },
  
  
      //5
  ['sixthMaths'+shuffleArraylottwo[5]]: {
      botPrompt: 'Every natural number has an infinite number of ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['factors', 'multiples', "prime factors", "none of these"]),
        answers: [
          {
            answer: 'factors',
            nextId: 'insixthMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'multiples',
            nextId: 'sixthMathscorrectq5',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "prime factors", 
            nextId: 'insixthMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "none of these", 
            nextId: 'insixthMathscorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq5: {
      botPrompt: 'Hurray! <strong>multiples</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[6],
        },
      ],
      },
      insixthMathscorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"multiples"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[6],
        },
      ],
      },
  
  
      //6
  ['sixthMaths'+shuffleArraylottwo[6]]: {
      botPrompt: 'The smallest whole number is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['1', '0', "2", "none of these"]),
        answers: [
          {
            answer: '1',
            nextId: 'insixthMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '0',
            nextId: 'sixthMathscorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "2", 
            nextId: 'insixthMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "none of these", 
            nextId: 'insixthMathscorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq6: {
      botPrompt: 'Hurray! <strong>0</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[7],
        },
      ],
      },
      insixthMathscorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[7],
        },
      ],
      },
  
  
      //7
  ['sixthMaths'+shuffleArraylottwo[7]]: {
      botPrompt: '54 ÷ 3 of 6 + 9',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['117', '12', "15", "none of these"]),
        answers: [
          {
            answer: '117',
            nextId: 'insixthMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '12',
            nextId: 'sixthMathscorrectq7',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "15", 
            nextId: 'insixthMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "none of these", 
            nextId: 'insixthMathscorrectq7',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq7: {
      botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[8],
        },
      ],
      },
      insixthMathscorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[8],
        },
      ],
      },
  
  
      //8
  ['sixthMaths'+shuffleArraylottwo[8]]: {
      botPrompt: 'Which of the following numbers is divisible by 6?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['67821', '78134', "87432", "none of these"]),
        answers: [
          {
            answer: '67821',
            nextId: 'insixthMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '78134',
            nextId: 'insixthMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "87432", 
            nextId: 'sixthMathscorrectq8',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "none of these", 
            nextId: 'insixthMathscorrectq8',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq8: {
      botPrompt: 'Hurray! <strong>87432</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[9],
        },
      ],
      },
      insixthMathscorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"87432"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[9],
        },
      ],
      },
  
  
      //9
  ['sixthMaths'+shuffleArraylottwo[9]]: {
      botPrompt: 'A scalene triangle has',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['no line of symmetry', 'one line of symmetry', "two line of symmetry", "four line of symmetry"]),
        answers: [
          {
            answer: 'no line of symmetry',
            nextId: 'sixthMathscorrectq9',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'one line of symmetry',
            nextId: 'insixthMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "two line of symmetry", 
            nextId: 'insixthMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "four line of symmetry", 
            nextId: 'insixthMathscorrectq9',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq9: {
      botPrompt: 'Hurray! <strong>no line of symmetry</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[10],
        },
      ],
      },
      insixthMathscorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"no line of symmetry"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[10],
        },
      ],
      },
  
  
      
  
  
       //10
  ['sixthMaths'+shuffleArraylottwo[10]]: {
      botPrompt: 'Division by __________  is not defined.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['1', '0', "10", "-1"]),
        answers: [
          {
            answer: '1',
            nextId: 'insixthMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '0',
            nextId: 'sixthMathscorrectq10',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "10", 
            nextId: 'insixthMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "-1", 
            nextId: 'insixthMathscorrectq10',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq10: {
      botPrompt: 'Hurray! <strong>0</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[11],
        },
      ],
      },
      insixthMathscorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[11],
        },
  
      ],
      },
      
      
          //11
  ['sixthMaths'+shuffleArraylottwo[11]]: {
      botPrompt: 'The smallest composite number is ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['1', '2', "3",  "4"]),
        answers: [
          {
            answer: '1',
            nextId: 'insixthMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '2',
            nextId: 'insixthMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "3", 
            nextId: 'insixthMathscorrectq11',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "4", 
            nextId: 'sixthMathscorrectq11',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq11: {
      botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[12],
        },
      ],
      },
      insixthMathscorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[12],
        },
  
      ],
      },
  
  
          //12
  ['sixthMaths'+shuffleArraylottwo[12]]: {
      botPrompt: 'The largest negative integer is __________.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['-1', '0', "1",  "-2"]),
        answers: [
          {
            answer: '-1',
            nextId: 'sixthMathscorrectq12',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '0',
            nextId: 'insixthMathscorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "1", 
            nextId: 'insixthMathscorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "-2", 
            nextId: 'insixthMathscorrectq12',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
   
        ],
      },
      
      sixthMathscorrectq12: {
      botPrompt: 'Hurray! <strong>-1</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[13],
        },
      ],
      },
      insixthMathscorrectq12: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"-1"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[13],
        },
  
      ],
      },
  
  
          //13
  ['sixthMaths'+shuffleArraylottwo[13]]: {
      botPrompt: 'The letter X of the English alphabet has ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['no line of symmetry', 'one line of symmetry', "two line of symmetry",  "four line of symmetry"]),
        answers: [
          {
            answer: 'no line of symmetry',
            nextId: 'insixthMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'one line of symmetry',
            nextId: 'insixthMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "two line of symmetry", 
            nextId: 'sixthMathscorrectq13',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "four line of symmetry", 
            nextId: 'insixthMathscorrectq13',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          
        ],
      },
      
      sixthMathscorrectq13: {
      botPrompt: 'Hurray! <strong>two line of symmetry</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[14],
        },
      ],
      },
      insixthMathscorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"two line of symmetry"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[14],
        },
  
      ],
      },
  
          //14
  ['sixthMaths'+shuffleArraylottwo[14]]: {
      botPrompt: 'The smallest 3-digit number with different digits is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['999', '100', "987",  "102"]),
        answers: [
          {
            answer: '999',
            nextId: 'insixthMathscorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '100',
            nextId: 'insixthMathscorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "987", 
            nextId: 'insixthMathscorrectq14',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '102',
            nextId: 'sixthMathscorrectq14',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
         
        ],
      },
      
      sixthMathscorrectq14: {
      botPrompt: 'Hurray! <strong>102</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[15],
        },
      ],
      },
      insixthMathscorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"102"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[15],
        },
  
      ],
      },
  
  
          //15
  ['sixthMaths'+shuffleArraylottwo[15]]: {
      botPrompt: 'The HCF of 24 and 36 is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['72', '8', "12",  "24"]),
        answers: [
          {
            answer: '72',
            nextId: 'insixthMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '8',
            nextId: 'insixthMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "12", 
            nextId: 'sixthMathscorrectq15',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "24", 
            nextId: 'insixthMathscorrectq15',
            sumToBags: [{ name: 'ai', points: 1 }],
          },

        ],
      },
      
      sixthMathscorrectq15: {
      botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[16],
        },
      ],
      },
      insixthMathscorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[16],
        },
  
      ],
      },
  
  
  
          
      //16
  ['sixthMaths'+shuffleArraylottwo[16]]: {
      botPrompt: 'Estimated product of 32 and 74 is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['2100', '2368', "2400",  "none of these"]),
        answers: [
          {
            answer: '2100',
            nextId: 'sixthMathscorrectq16',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '2368',
            nextId: 'insixthMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "2400", 
            nextId: 'insixthMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "none of these", 
            nextId: 'insixthMathscorrectq16',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      sixthMathscorrectq16: {
      botPrompt: 'Hurray! <strong>2100</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[17],
        },
      ],
      },
      insixthMathscorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2100"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[17],
        },
  
      ],
      },
  
      //17
  ['sixthMaths'+shuffleArraylottwo[17]]: {
      botPrompt: 'The number of integers between 34 and 53 is',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['18', '19', "17",  "20"]),
        answers: [
          {
            answer: '18',
            nextId: 'sixthMathscorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '19',
            nextId: 'insixthMathscorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "17", 
            nextId: 'insixthMathscorrectq17',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "20", 
            nextId: 'sixthMathscorrectq17',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
        ],
      },
      
      sixthMathscorrectq17: {
      botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[18],
        },
      ],
      },
      insixthMathscorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[18],
        },
  
      ],
      },
  
      //18
  ['sixthMaths'+shuffleArraylottwo[18]]: {
      botPrompt: 'If a number is divisible by both 3 and 4, which of the following numbers could it be? ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['18', '27', "14",  "12"]),
        answers: [
          {
            answer: '18',
            nextId: 'insixthMathscorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '27',
            nextId: 'insixthMathscorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "14", 
            nextId: 'insixthMathscorrectq18',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
              answer: "12", 
              nextId: 'sixthMathscorrectq18',
              sumToBags: [{ name: 'ac', points: 1 }],
            },
        ],
      },
      
      sixthMathscorrectq18: {
      botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[19],
        },
      ],
      },
      insixthMathscorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[19],
        },
  
      ],
      },
  
      //19
  ['sixthMaths'+shuffleArraylottwo[19]]: {
      botPrompt: 'Which of the following is not a prime number? ',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['11', '13', "15",  "17"]),
        answers: [
          {
            answer: '11',
            nextId: 'insixthMathscorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '13',
            nextId: 'insixthMathscorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "15", 
            nextId: 'sixthMathscorrectq19',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: '17',
            nextId: 'insixthMathscorrectq19',
            sumToBags: [{ name: 'ai', points: 1 }],
          },

        ],
      },
      
      sixthMathscorrectq19: {
      botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[20],
        },
      ],
      },
      insixthMathscorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
      answers: [
        {
          nextId: 'sixthMaths'+shuffleArraylottwo[20],
        },
  
      ],
      },
  
       //20
  ['sixthMaths'+shuffleArraylottwo[20]]: {
      botPrompt: 'In a classroom, 60% of the students are girls. If there are 30 students in total, how many of them are boys?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['6', '9', "12",  "18"]),
        answers: [
          {
            answer: '6',
            nextId: 'insixthMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: '9',
            nextId: 'insixthMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "12", 
            nextId: 'sixthMathscorrectq20',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "18", 
            nextId: 'insixthMathscorrectq20',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        
        ],
      },
      
      sixthMathscorrectq20: {
      botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocontinuesixthMaths',
        },
      ],
      },
      insixthMathscorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'wishtocontinuesixthMaths',
        },
  
      ],
      },
      wishtocountinesixthMaths: {
        botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Yes', "No"]),
        answers: [
          {
            answer: 'Yes',
            nextId: 'chooseclass',
          },
          {
            answer: "No",
            nextId: 'endConv',
          },
        
        ],
      },
//sixth english
        //1
        ['sixthEnglish'+shuffleArraylottwo[1]]: {
          botPrompt: 'Which of the following is a personal pronoun?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['House', 'She', "Quickly", "Running"]),
            answers: [
              {
                answer: 'House',
                nextId: 'insixthEnglishcorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'She',
                nextId: 'sixthEnglishcorrectq1',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Quickly", 
                nextId: 'insixthEnglishcorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Running", 
                nextId: 'insixthEnglishcorrectq1',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthEnglishcorrectq1: {
          botPrompt: 'Hurray! <strong>She</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthEnglish'+shuffleArraylottwo[2],
            },
          ],
          },
          insixthEnglishcorrectq1: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She"</strong>',
          answers: [
            {
              nextId: 'sixthEnglish'+shuffleArraylottwo[2],
            },
          ],
          },
          
          
            //2
            ['sixthEnglish'+shuffleArraylottwo[2]]: {
              botPrompt: '________am going to the stationary shop after school.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['I', 'Banana', "Jumped", "My"]),
                answers: [
                  {
                    answer: 'I',
                    nextId: 'sixthEnglishcorrectq2',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: 'Banana',
                    nextId: 'insixthEnglishcorrectq2',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Jumped", 
                    nextId: 'insixthEnglishcorrectq2',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "My", 
                    nextId: 'insixthEnglishcorrectq2',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq2: {
              botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[3],
                },
              ],
              },
              insixthEnglishcorrectq2: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[3],
                },
              ],
              },
          
          
          //3
          ['sixthEnglish'+shuffleArraylottwo[3]]: {
              botPrompt: 'He waited for his friend ________.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Nice', 'While its Raining', "Runs", "Saw"]),
                answers: [
                  {
                    answer: 'Nice',
                    nextId: 'insixthEnglishcorrectq3',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'While its Raining',
                    nextId: 'sixthEnglishcorrectq3',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "Runs", 
                    nextId: 'insixthEnglishcorrectq3',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Saw", 
                    nextId: 'insixthEnglishcorrectq3',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq3: {
              botPrompt: 'Hurray! <strong>While its Raining</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglishv'+shuffleArraylottwo[4],
                },
              ],
              },
              insixthEnglishcorrectq3: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"While its Raining"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[4],
                },
              ],
              },
          
          
              //4
          ['sixthEnglishv'+shuffleArraylottwo[4]]: {
              botPrompt: 'The _____ cat climbed the tree.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Fast', 'Run', "Blue", "Queitly"]),
                answers: [
                  {
                    answer: 'Fast',
                    nextId: 'insixthEnglishcorrectq4',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'Run',
                    nextId: 'insixthEnglishcorrectq4',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Blue", 
                    nextId: 'sixthEnglishcorrectq4',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "Quietly", 
                    nextId: 'insixthEnglishcorrectq4',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq4: {
              botPrompt: 'Hurray! <strong>Blue</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[5],
                },
              ],
              },
              insixthEnglishcorrectq4: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Blue"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[5],
                },
              ],
              },
          
          
              //5
          ['sixthEnglish'+shuffleArraylottwo[5]]: {
              botPrompt: 'Which type of verb requires a direct object to complete its meaning?',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Transitive', 'Intransitive', "Adjective", "Preposition"]),
                answers: [
                  {
                    answer: 'Transitive',
                    nextId: 'sixthEnglishcorrectq5',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: 'Intransitive',
                    nextId: 'insixthEnglishcorrectq5',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Adjective",  
                    nextId: 'insixthEnglishcorrectq5',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Preposition", 
                    nextId: 'insixthEnglishcorrectq5',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq5: {
              botPrompt: 'Hurray! <strong>Transitive</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[6],
                },
              ],
              },
              insixthEnglishcorrectq5: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Transitive"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[6],
                },
              ],
              },
          
          
              //6
          ['sixthEnglish'+shuffleArraylottwo[6]]: {
              botPrompt: 'She sang a beautiful _____.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Song', 'Quickly', "Happily",  "Laugh"]),
                answers: [
                  {
                    answer: 'Song',
                    nextId: 'sixthEnglishcorrectq6',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: 'Quickly',
                    nextId: 'insixthEnglishcorrectq6',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Happily", 
                    nextId: 'insixthEnglishcorrectq6',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Laugh", 
                    nextId: 'insixthEnglishcorrectq6',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq6: {
              botPrompt: 'Hurray! <strong>Song</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[7],
                },
              ],
              },
              insixthEnglishcorrectq6: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Song"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[7],
                },
              ],
              },
          
          
              //7
          ['sixthEnglish'+shuffleArraylottwo[7]]: {
              botPrompt: 'What is a group of words that does not contain a subject and a verb?',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Phrase', 'Clause', "Pronoun",  "Noun"]),
                answers: [
                  {
                    answer: 'Phrase',
                    nextId: 'sixthEnglishcorrectq7',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: 'Clause',
                    nextId: 'insixthEnglishcorrectq7',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Pronoun", 
                    nextId: 'insixthEnglishcorrectq7',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Noun", 
                    nextId: 'insixthEnglishcorrectq7',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq7: {
              botPrompt: 'Hurray! <strong>Phrase</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[8],
                },
              ],
              },
              insixthEnglishcorrectq7: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Phrase"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[8],
                },
              ],
              },
          
          
              //8
          ['sixthEnglish'+shuffleArraylottwo[8]]: {
              botPrompt: 'The book on the shelf is ______.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Heavy', 'Ran', "Because",  "The"]),
                answers: [
                  {
                    answer: 'Heavy',
                    nextId: 'sixthEnglishcorrectq8',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: 'Ran',
                    nextId: 'insixthEnglishcorrectq8',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Because", 
                    nextId: 'insixthEnglishcorrectq8',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "The", 
                    nextId: 'insixthEnglishcorrectq8',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq8: {
              botPrompt: 'Hurray! <strong>Heavy</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[9],
                },
              ],
              },
              insixthEnglishcorrectq8: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong>"Heavy"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[9],
                },
              ],
              },
          
          
              //9
          ['sixthEnglish'+shuffleArraylottwo[9]]: {
              botPrompt: 'What type of sentence expresses strong emotion and always ends with an exclamation',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Declarative', 'Interrogative', "Exclamatory",  "Imperative"]),
                answers: [
                  {
                    answer: 'Declarative',
                    nextId: 'insixthEnglishcorrectq9',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'Interrogative',
                    nextId: 'insixthEnglishcorrectq9',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Exclamatory", 
                    nextId: 'sixthEnglishcorrectq9',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "Imperative", 
                    nextId: 'insixthEnglishcorrectq9',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq9: {
              botPrompt: 'Hurray! <strong>Exclamatory</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[10],
                },
              ],
              },
              insixthEnglishcorrectq9: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Exclamatory"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[10],
                },
              ],
              },
          
          
              
          
          
               //10
          ['sixthEnglish'+shuffleArraylottwo[10]]: {
              botPrompt: 'Can you pass me the salt, please? - This is an example of a ______ sentence.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Declarative', 'Interrogative', "Exclamatory", "Imperative"]),
                answers: [
                  {
                    answer: 'Declarative',
                    nextId: 'insixthEnglishcorrectq10',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'Interrogative',
                    nextId: 'insixthEnglishcorrectq10',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Exclamatory", 
                    nextId: 'insixthEnglishcorrectq10',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Imperative", 
                    nextId: 'sixthEnglishcorrectq10',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq10: {
              botPrompt: 'Hurray! <strong>Imperative</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[11],
                },
              ],
              },
              insixthEnglishcorrectq10: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Imperative"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[11],
                },
          
              ],
              },
              
              
                  //11
          ['sixthEnglish'+shuffleArraylottwo[11]]: {
              botPrompt: 'Which sentence is in the passive voice?',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['She is writing a letter.', 'The letter is being written by her.', "They sang a song.", "He will read a book."]),
                answers: [
                  {
                    answer: 'She is writing a letter.',
                    nextId: 'insixthEnglishcorrectq11',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'The letter is being written by her.',
                    nextId: 'sixthEnglishcorrectq11',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "They sang a song.", 
                    nextId: 'insixthEnglishcorrectq11',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "He will read a book.", 
                    nextId: 'insixthEnglishcorrectq11',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq11: {
              botPrompt: 'Hurray! <strong>The letter is being written by her.</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[12],
                },
              ],
              },
              insixthEnglishcorrectq11: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The letter is being written by her."</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[12],
                },
          
              ],
              },
          
          
                  //12
          ['sixthEnglish'+shuffleArraylottwo[12]]: {
              botPrompt: 'They _______ playing in the park yesterday.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Will be', 'Are', "Were",  "Will"]),
                answers: [
                  {
                    answer: 'Will be',
                    nextId: 'insixthEnglishcorrectq12',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'Are',
                    nextId: 'insixthEnglishcorrectq12',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Were", 
                    nextId: 'sixthEnglishcorrectq12',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "will", 
                    nextId: 'insixthEnglishcorrectq12',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
           
                ],
              },
              
              sixthEnglishcorrectq12: {
              botPrompt: 'Hurray! <strong>Were</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[13],
                },
              ],
              },
              insixthEnglishcorrectq12: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Were"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[13],
                },
          
              ],
              },
          
          
                  //13
          ['sixthEnglish'+shuffleArraylottwo[13]]: {
              botPrompt: 'What type of clause is this: "Although it was raining, they went for a picnic"?',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Noun clause', 'Adjective clause', "Adverbial clause",  "Independent clause"]),
                answers: [
                  {
                    answer: 'Noun clause',
                    nextId: 'insixthEnglishcorrectq13',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'Adjective clause',
                    nextId: 'insixthEnglishcorrectq13',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Adverbial clause", 
                    nextId: 'sixthEnglishcorrectq13',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "Independent clause", 
                    nextId: 'insixthEnglishcorrectq13',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  
                ],
              },
              
              sixthEnglishcorrectq13: {
              botPrompt: 'Hurray! <strong>Adverbial clause</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[14],
                },
              ],
              },
              insixthEnglishcorrectq13: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Adverbial clause"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[14],
                },
          
              ],
              },
          
                  //14
          ['sixthEnglish'+shuffleArraylottwo[14]]: {
              botPrompt: 'She sings ________.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Softly', 'Table', "Happy",  "ran"]),
                answers: [
                  {
                    answer: 'Softly',
                    nextId: 'sixthEnglishcorrectq14',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: 'Table',
                    nextId: 'insixthEnglishcorrectq14',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Happy", 
                    nextId: 'insixthEnglishcorrectq14',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Ran", 
                    nextId: 'insixthEnglishcorrectq14',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                 
                ],
              },
              
              sixthEnglishcorrectq14: {
              botPrompt: 'Hurray! <strong>Softly</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[15],
                },
              ],
              },
              insixthEnglishcorrectq14: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Softly"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[15],
                },
          
              ],
              },
          
          
                  //15
          ['sixthEnglish'+shuffleArraylottwo[15]]: {
              botPrompt: 'Which sentence contains a transitive verb?',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['She sleeps soundly.', 'He devoured a book.', "They sprinted rapidly.",  "The bird chirps melodiously."]),
                answers: [
                  {
                    answer: 'She sleeps soundly.',
                    nextId: 'insixthEnglishcorrectq15',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'He devoured a book.',
                    nextId: 'sixthEnglishcorrectq15',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "They sprinted rapidly.", 
                    nextId: 'insixthEnglishcorrectq15',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "The bird chirps melodiously.", 
                    nextId: 'insixthEnglishcorrectq15',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
  
                ],
              },
              
              sixthEnglishcorrectq15: {
              botPrompt: 'Hurray! <strong>He devoured a book.</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[16],
                },
              ],
              },
              insixthEnglishcorrectq15: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He devoured a book."</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[16],
                },
          
              ],
              },
          
          
          
                  
              //16
          ['sixthEnglish'+shuffleArraylottwo[16]]: {
              botPrompt: 'The cake ________ by the chef.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Ate', 'Is eaten', "Eats",  "Eating"]),
                answers: [
                  {
                    answer: 'Ate',
                    nextId: 'insixthEnglishcorrectq16',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'Is eaten',
                    nextId: 'sixthEnglishcorrectq16',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "Eats", 
                    nextId: 'insixthEnglishcorrectq16',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Eating", 
                    nextId: 'insixthEnglishcorrectq16',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                
                ],
              },
              
              sixthEnglishcorrectq16: {
              botPrompt: 'Hurray! <strong>Is eaten</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[17],
                },
              ],
              },
              insixthEnglishcorrectq16: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Is eaten"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[17],
                },
          
              ],
              },
          
              //17
          ['sixthEnglish'+shuffleArraylottwo[17]]: {
              botPrompt: 'John and ____ are going to the park.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Me', 'I', "Myself",  "Mine"]),
                answers: [
                  {
                    answer: 'Me',
                    nextId: 'insixthEnglishcorrectq17',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'I',
                    nextId: 'sixthEnglishcorrectq17',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "Myself", 
                    nextId: 'insixthEnglishcorrectq17',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "Mine", 
                    nextId: 'insixthEnglishcorrectq17',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                ],
              },
              
              sixthEnglishcorrectq17: {
              botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[18],
                },
              ],
              },
              insixthEnglishcorrectq17: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[18],
                },
          
              ],
              },
          
              //18
          ['sixthEnglish'+shuffleArraylottwo[18]]: {
              botPrompt: 'Fill in the blank: She said, "I will come tomorrow." This is an example of _______.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['Direct speech', 'Indirect speech', "Past tense",  "Adjective"]),
                answers: [
                  {
                    answer: 'Direct speech',
                    nextId: 'insixthEnglishcorrectq18',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'Indirect speech',
                    nextId: 'sixthEnglishcorrectq18',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                  {
                    answer: "Past tence", 
                    nextId: 'insixthEnglishcorrectq18',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                      answer: "adjective", 
                      nextId: 'insixthEnglishcorrectq18',
                      sumToBags: [{ name: 'ai', points: 1 }],
                    },
                  
                ],
              },
              
              sixthEnglishcorrectq18: {
              botPrompt: 'Hurray! <strong>Indirect speech</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[19],
                },
              ],
              },
              insixthEnglishcorrectq18: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Indirect speech"</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[19],
                },
          
              ],
              },
          
              //19
          ['sixthEnglish'+shuffleArraylottwo[19]]: {
              botPrompt: ' MCQ: In which of the following sentences is the reported speech correctly transformed from direct to indirect speech?',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['She said, "I will visit the museum yesterday."', 'He said, "I am going to the party tomorrow."', "They said,'We have finished our homework.'",  "He said,'I had already seen that movie.'"]),
                answers: [
                  {
                    answer: 'She said, "I will visit the museum yesterday."',
                    nextId: 'insixthEnglishcorrectq19',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'He said, "I am going to the party tomorrow."',
                    nextId: 'insixthEnglishcorrectq19',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "They said,'We have finished our homework.", 
                    nextId: 'insixthEnglishcorrectq19',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "He said,'I had already seen that movie.'", 
                    nextId: 'sixthEnglishcorrectq19',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
  
                ],
              },
              
              sixthEnglishcorrectq19: {
              botPrompt: 'Hurray! <strong>He said, "I had already seen that movie."</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[20],
                },
              ],
              },
              insixthEnglishcorrectq19: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He said, "I had already seen that movie.""</strong>',
              answers: [
                {
                  nextId: 'sixthEnglish'+shuffleArraylottwo[20],
                },
          
              ],
              },
          
               //20
          ['sixthEnglish'+shuffleArraylottwo[20]]: {
              botPrompt: ' Fill in the blank with the correct verb tense: By the time we ____________ to the summit, it had started snowing heavily.',
              type: RTypes.TRANSFORMED_TEXT,
              
              input: selectField(['will get', 'got', "get",  "had gotten"]),
                answers: [
                  {
                    answer: 'will get',
                    nextId: 'insixthEnglishcorrectq20',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: 'got',
                    nextId: 'insixthEnglishcorrectq20',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "get", 
                    nextId: 'insixthEnglishcorrectq20',
                    sumToBags: [{ name: 'ai', points: 1 }],
                  },
                  {
                    answer: "had gotten", 
                    nextId: 'sixthEnglishcorrectq20',
                    sumToBags: [{ name: 'ac', points: 1 }],
                  },
                
                ],
              },
              
              sixthEnglishcorrectq20: {
              botPrompt: 'Hurray! <strong>had gotten</strong> is the correct answer  ! 😎',
              answers: [
                {
                  nextId: 'wishtocontinuesixthEnglish',
                },
              ],
              },
              insixthEnglishcorrectq20: {
              botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"had gotten"</strong>',
              answers: [
                {
                  nextId: 'wishtocontinuesixthEnglish',
                },
          
              ],
              },
              wishtocountinesixthEnglish: {
                botPrompt: 'You have Completed English. Do you Wish to Continue ?',
                type: RTypes.TRANSFORMED_TEXT,
                input: selectField(['Yes', "No"]),
                answers: [
                  {
                    answer: 'Yes',
                    nextId: 'chooseclass',
                  },
                  {
                    answer: "No",
                    nextId: 'endConv',
                  },
                
                ],
              },
              
//sixth science
    //1
    ['sixthScience'+shuffleArraylottwo[1]]: {
      botPrompt: 'What is the SI unit of distance?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Meters', 'Kilometer', "Centimeter", "Milimeter"]),
        answers: [
          {
            answer: 'Meters',
            nextId: 'sixthSciencecorrectq1',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Kilometer',
            nextId: 'insixthSciencecorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Centimeter", 
            nextId: 'insixthSciencecorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Milimeter", 
            nextId: 'insixthSciencecorrectq1',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sixthSciencecorrectq1: {
      botPrompt: 'Hurray! <strong>Meters</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sixthScience'+shuffleArraylottwo[2],
        },
      ],
      },
      insixthSciencecorrectq1: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Meters"</strong>',
      answers: [
        {
          nextId: 'sixthScience'+shuffleArraylottwo[2],
        },
      ],
      },
      
      
        //2
        ['sixthScience'+shuffleArraylottwo[2]]: {
          botPrompt: 'What is the concept of rest and motion?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['An object is said to be in motion if it changes its position with time, with respect to its surroundings', 'An object is said to be at rest if it does not change its position with time, with respect to its surroundings', "Both A and B", "None of the above"]),
            answers: [
              {
                answer: 'An object is said to be in motion if it changes its position with time, with respect to its surroundings',
                nextId: 'insixthSciencecorrectq2',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'An object is said to be at rest if it does not change its position with time, with respect to its surroundings',
                nextId: 'insixthSciencecorrectq2',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Both A and B", 
                nextId: 'sixthSciencecorrectq2',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "None of the above", 
                nextId: 'insixthSciencecorrectq2',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq2: {
          botPrompt: 'Hurray! <strong>Both A and B</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[3],
            },
          ],
          },
          insixthSciencecorrectq2: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Both A and B"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[3],
            },
          ],
          },
      
      
      //3
      ['sixthScience'+shuffleArraylottwo[3]]: {
          botPrompt: 'Which of the following is an example of periodic motion? ',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['A car moving on a straight road', 'A ball rolling down a hill', "A pendulum swinging back and forth", "A person walking in a straight line "]),
            answers: [
              {
                answer: 'A car moving on a straight road',
                nextId: 'insixthSciencecorrectq3',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'A ball rolling down a hill',
                nextId: 'insixthSciencecorrectq3',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "A pendulum swinging back and forth", 
                nextId: 'sixthSciencecorrectq3',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "A person walking in a straight line", 
                nextId: 'insixthSciencecorrectq3',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq3: {
          botPrompt: 'Hurray! <strong>A pendulum swinging back and forth</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[4],
            },
          ],
          },
          insixthSciencecorrectq3: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A pendulum swinging back and forth"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[4],
            },
          ],
          },
      
      
          //4
      ['sixthScience'+shuffleArraylottwo[4]]: {
          botPrompt: 'What happens to light when it hits a mirror?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['It gets absorbed', 'It gets refracted', "It gets reflected", "It gets dispersed"]),
            answers: [
              {
                answer: 'It gets absorbed',
                nextId: 'insixthSciencecorrectq4',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'It gets refracted',
                nextId: 'insixthSciencecorrectq4',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "It gets reflected", 
                nextId: 'sixthSciencecorrectq4',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "It gets dispersed", 
                nextId: 'insixthSciencecorrectq4',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq4: {
          botPrompt: 'Hurray! <strong>It gets reflected</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[5],
            },
          ],
          },
          insixthSciencecorrectq4: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It gets reflected"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[5],
            },
          ],
          },
      
      
          //5
      ['sixthScience'+shuffleArraylottwo[5]]: {
          botPrompt: 'What is the formula to calculate electrical power?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Power = Voltage x Current', 'Power = Voltage / Current', "Power = Current / Voltage", "Power = Resistance x Current"]),
            answers: [
              {
                answer: 'Power = Voltage x Current',
                nextId: 'sixthSciencecorrectq5',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Power = Voltage / Current',
                nextId: 'insixthSciencecorrectq5',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Power = Current / Voltage", 
                nextId: 'insixthSciencecorrectq5',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Power = Resistance x Current", 
                nextId: 'insixthSciencecorrectq5',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq5: {
          botPrompt: 'Hurray! <strong>Power = Voltage x Current</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[6],
            },
          ],
          },
          insixthSciencecorrectq5: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Power = Voltage x Current"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[6],
            },
          ],
          },
      
      
          //6
      ['sixthScience'+shuffleArraylottwo[6]]: {
          botPrompt: 'What is the property of a magnet that allows it to attract or repel other magnets?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Magnetic field', 'Magnetic force', "Magnetic induction", "Magnetic flux"]),
            answers: [
              {
                answer: 'Magnetic field',
                nextId: 'insixthSciencecorrectq6',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Magnetic force',
                nextId: 'sixthSciencecorrectq6',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Magnetic induction", 
                nextId: 'insixthSciencecorrectq6',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Magnetic flux", 
                nextId: 'insixthSciencecorrectq6',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq6: {
          botPrompt: 'Hurray! <strong>Magnetic force</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[7],
            },
          ],
          },
          insixthSciencecorrectq6: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Magnetic force"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[7],
            },
          ],
          },
      
      
          //7
      ['sixthScience'+shuffleArraylottwo[7]]: {
          botPrompt: 'Which of the following is a property used to sort materials into groups?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Taste', 'Smell', "Sound", "Texture"]),
            answers: [
              {
                answer: 'Taste',
                nextId: 'insixthSciencecorrectq7',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Smell',
                nextId: 'insixthSciencecorrectq7',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Sound", 
                nextId: 'insixthSciencecorrectq7',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Texture", 
                nextId: 'sixthSciencecorrectq7',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq7: {
          botPrompt: 'Hurray! <strong>Texture</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[8],
            },
          ],
          },
          insixthSciencecorrectq7: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Texture"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[8],
            },
          ],
          },
      
      
          //8
      ['sixthScience'+shuffleArraylottwo[8]]: {
          botPrompt: 'Which method is used to separate dissolved salt from water in a laboratory?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Filtration', 'Distillation', "Magnetism", "Decantation"]),
            answers: [
              {
                answer: 'Filtration',
                nextId: 'insixthSciencecorrectq8',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Distillation',
                nextId: 'sixthSciencecorrectq8',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Magnetism", 
                nextId: 'insixthSciencecorrectq8',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Decantation", 
                nextId: 'insixthSciencecorrectq8',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq8: {
          botPrompt: 'Hurray! <strong>Distillation</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[9],
            },
          ],
          },
          insixthSciencecorrectq8: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Distillation"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[9],
            },
          ],
          },
      
      
          //9
      ['sixthScience'+shuffleArraylottwo[9]]: {
          botPrompt: 'Why is the melting of ice considered a physical change?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Because it reversible', 'Because it involves a change in state', "Because it involves a change in color",  "Because it involves the formation of a new substance Solution" ]),
            answers: [
              {
                answer: 'Because it reversible',
                nextId: 'sixthSciencecorrectq9',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Because it involves a change in state',
                nextId: 'insixthSciencecorrectq9',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Because it involves a change in color", 
                nextId: 'insixthSciencecorrectq9',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Because it involves the formation of a new substance Solution", 
                nextId: 'insixthSciencecorrectq9',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq9: {
          botPrompt: 'Hurray! <strong>Because it is reversible</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[10],
            },
          ],
          },
          insixthSciencecorrectq9: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Because it is reversible"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[10],
            },
          ],
          },
      
      
          
      
      
           //10
      ['sixthScience'+shuffleArraylottwo[10]]: {
          botPrompt: 'Why does ice float on water?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Because ice is heavier than water', 'Because ice is lighter than water', "Because ice is denser than water", "Because ice is less dense than water"]),
            answers: [
              {
                answer: 'Because ice is heavier than water',
                nextId: 'insixthSciencecorrectq10',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Because ice is lighter than water',
                nextId: 'insixthSciencecorrectq10',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Because ice is denser than water", 
                nextId: 'sixthSciencecorrectq10',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Because ice is less dense than water", 
                nextId: 'insixthSciencecorrectq10',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq10: {
          botPrompt: 'Hurray! <strong>Because ice is denser than water</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[11],
            },
          ],
          },
          insixthSciencecorrectq10: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Because ice is denser than water"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[11],
            },
      
          ],
          },
          
          
              //11
      ['sixthScience'+shuffleArraylottwo[11]]: {
          botPrompt: 'Which property of water allows it to dissolve many substances?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['High boiling point', 'Low density', "High surface tension",  "Universal solvent"]),
            answers: [
              {
                answer: 'High boiling point',
                nextId: 'insixthSciencecorrectq11',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Low density',
                nextId: 'insixthSciencecorrectq11',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "High surface tension", 
                nextId: 'insixthSciencecorrectq11',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Universal solvent", 
                nextId: 'sixthSciencecorrectq11',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq11: {
          botPrompt: 'Hurray! <strong>Universal solvent</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[12],
            },
          ],
          },
          insixthSciencecorrectq11: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Universal solvent"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[12],
            },
      
          ],
          },
      
      
              //12
      ['sixthScience'+shuffleArraylottwo[12]]: {
          botPrompt: 'Which gas is responsible for the greenhouse effect?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Oxygen', 'Nitrogen', "Carbon dioxide",  "Hydrogen"]),
            answers: [
              {
                answer: 'Oxygen',
                nextId: 'insixthSciencecorrectq12',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Nitrogen',
                nextId: 'insixthSciencecorrectq12',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Carbon dioxide", 
                nextId: 'sixthSciencecorrectq12',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "Hydrogen", 
                nextId: 'insixthSciencecorrectq12',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
       
            ],
          },
          
          sixthSciencecorrectq12: {
          botPrompt: 'Hurray! <strong>Carbon dioxide</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[13],
            },
          ],
          },
          insixthSciencecorrectq12: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Carbon dioxide"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[13],
            },
      
          ],
          },
      
      
              //13
      ['sixthScience'+shuffleArraylottwo[13]]: {
          botPrompt: 'Which of the following is a deficiency disease caused by the lack of iron in the diet?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Scurvy', 'Rickets', "Beriberi",  "Anaemia"]),
            answers: [
              {
                answer: 'Scurvy',
                nextId: 'insixthSciencecorrectq13',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'Rickets',
                nextId: 'insixthSciencecorrectq13',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Beriberi", 
                nextId: 'insixthSciencecorrectq13',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Anaemia", 
                nextId: 'sixthSciencecorrectq13',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              
            ],
          },
          
          sixthSciencecorrectq13: {
          botPrompt: 'Hurray! <strong>Anaemia</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[14],
            },
          ],
          },
          insixthSciencecorrectq13: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Anaemia"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[14],
            },
      
          ],
          },
      
              //14
      ['sixthScience'+shuffleArraylottwo[14]]: {
          botPrompt: 'Viruses are considered entities between living and non-living because:',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['They can move on their own', 'They can reproduce only inside a host cell', "They can eat and digest food",  "They can grow in size"]),
            answers: [
              {
                answer: 'They can move on their own',
                nextId: 'insixthSciencecorrectq14',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'They can reproduce only inside a host cell',
                nextId: 'sixthSciencecorrectq14',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "They can eat and digest food", 
                nextId: 'insixthSciencecorrectq14',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'They can grow in size',
                nextId: 'insixthSciencecorrectq14',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
             
            ],
          },
          
          sixthSciencecorrectq14: {
          botPrompt: 'Hurray! <strong>They can reproduce only inside a host cell</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[15],
            },
          ],
          },
          insixthSciencecorrectq14: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They can reproduce only inside a host cell"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[15],
            },
      
          ],
          },
      
      
              //15
      ['sixthScience'+shuffleArraylottwo[15]]: {
          botPrompt: 'What is the main characteristic of a tap root system?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['It has a main root that grows horizontally.', 'It has a main root that grows vertically downwards.', "It has numerous roots of the same size.",  "It has roots that grow upwards"]),
            answers: [
              {
                answer: 'It has a main root that grows horizontally.',
                nextId: 'insixthSciencecorrectq15',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'It has a main root that grows vertically downwards.',
                nextId: 'sixthSciencecorrectq15',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "It has numerous roots of the same size.", 
                nextId: 'insixthSciencecorrectq15',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "It has roots that grow upwards", 
                nextId: 'insixthSciencecorrectq15',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
  
            ],
          },
          
          sixthSciencecorrectq15: {
          botPrompt: 'Hurray! <strong>It has a main root that grows vertically downwards.</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[16],
            },
          ],
          },
          insixthSciencecorrectq15: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It has a main root that grows vertically downwards."</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[16],
            },
      
          ],
          },
      
      
      
              
          //16
      ['sixthScience'+shuffleArraylottwo[16]]: {
          botPrompt: 'What is the role of ligaments in the human body?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['They connect muscle to bone', 'They connect bone to bone', "They provide a smooth surface for bones to slide over",  "They protect the ends of bones"]),
            answers: [
              {
                answer: 'They connect muscle to bone',
                nextId: 'insixthSciencecorrectq16',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'They connect bone to bone',
                nextId: 'sixthSciencecorrectq16',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "They provide a smooth surface for bones to slide over", 
                nextId: 'insixthSciencecorrectq16',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "They protect the ends of bones", 
                nextId: 'insixthSciencecorrectq16',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
            
            ],
          },
          
          sixthSciencecorrectq16: {
          botPrompt: 'Hurray! <strong>They connect bone to bone</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[17],
            },
          ],
          },
          insixthSciencecorrectq16: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They connect bone to bone"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[17],
            },
      
          ],
          },
      
          //17
      ['sixthScience'+shuffleArraylottwo[17]]: {
          botPrompt: 'Which of the following is responsible for maintaining the posture of our body?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Muscles', 'Bones', "Joints",  "Ligaments"]),
            answers: [
              {
                answer: 'Muscles',
                nextId: 'sixthSciencecorrectq17',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: 'Bones',
                nextId: 'insixthSciencecorrectq17',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Joints", 
                nextId: 'insixthSciencecorrectq17',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "Ligaments", 
                nextId: 'sixthSciencecorrectq17',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
            ],
          },
          
          sixthSciencecorrectq17: {
          botPrompt: 'Hurray! <strong>Muscles</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[18],
            },
          ],
          },
          insixthSciencecorrectq17: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Muscles"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[18],
            },
      
          ],
          },
      
          //18
      ['sixthScience'+shuffleArraylottwo[18]]: {
          botPrompt: 'Why do polar bears have a thick layer of fat under their skin?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['To help them swim', 'To keep them warm in cold temperatures', "To make them look bigger to predators",  " None of the above"]),
            answers: [
              {
                answer: 'To help them swim',
                nextId: 'insixthSciencecorrectq18',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'To keep them warm in cold temperatures',
                nextId: 'sixthSciencecorrectq18',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "To make them look bigger to predators", 
                nextId: 'insixthSciencecorrectq18',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                  answer: "None of the above", 
                  nextId: 'insixthSciencecorrectq18',
                  sumToBags: [{ name: 'ai', points: 1 }],
                },
            ],
          },
          
          sixthSciencecorrectq18: {
          botPrompt: 'Hurray! <strong>To keep them warm in cold temperatures</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[19],
            },
          ],
          },
          insixthSciencecorrectq18: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To keep them warm in cold temperatures"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[19],
            },
      
          ],
          },
      
          //19
      ['sixthScience'+shuffleArraylottwo[19]]: {
          botPrompt: 'Why do cactuses have spines instead of leaves?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['To protect themselves from predators', 'To reduce water loss', "To attract pollinators",  "None of the above"]),
            answers: [
              {
                answer: 'To protect themselves from predators',
                nextId: 'insixthSciencecorrectq19',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'To reduce water loss',
                nextId: 'sixthSciencecorrectq19',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
              {
                answer: "To attract pollinators", 
                nextId: 'insixthSciencecorrectq19',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'None of the above',
                nextId: 'insixthSciencecorrectq19',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
  
            ],
          },
          
          sixthSciencecorrectq19: {
          botPrompt: 'Hurray! <strong>To reduce water loss</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[20],
            },
          ],
          },
          insixthSciencecorrectq19: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"To reduce water loss"</strong>',
          answers: [
            {
              nextId: 'sixthScience'+shuffleArraylottwo[20],
            },
      
          ],
          },
      
           //20
      ['sixthScience'+shuffleArraylottwo[20]]: {
          botPrompt: 'What is the main disadvantage of landfilling?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['It takes up a lot of space', 'It is expensive', "It causes air pollution",  "All of the above"]),
            answers: [
              {
                answer: 'It takes up a lot of space',
                nextId: 'insixthSciencecorrectq20',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: 'It is expensive',
                nextId: 'insixthSciencecorrectq20',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "It causes air pollution", 
                nextId: 'insixthSciencecorrectq20',
                sumToBags: [{ name: 'ai', points: 1 }],
              },
              {
                answer: "All of the above", 
                nextId: 'sixthSciencecorrectq20',
                sumToBags: [{ name: 'ac', points: 1 }],
              },
            
            ],
          },
          
          sixthSciencecorrectq20: {
          botPrompt: 'Hurray! <strong>All of the above</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'wishtocontinuesixthScience',
            },
          ],
          },
          insixthSciencecorrectq20: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"All of the above"</strong>',
          answers: [
            {
              nextId: 'wishtocontinuesixthScience',
            },
      
          ],
          },
          wishtocountinesixthScience: {
            botPrompt: 'You have Completed Science. Do you Wish to Continue ?',
            type: RTypes.TRANSFORMED_TEXT,
            input: selectField(['Yes', "No"]),
            answers: [
              {
                answer: 'Yes',
                nextId: 'chooseclass',
              },
              {
                answer: "No",
                nextId: 'endConv',
              },
            
            ],
          },
          
  
              

              //classVII
classvii: {
  botPrompt: 'You Have Selected CLASS VII . Which subject you would like to start',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Maths', "English", "Science","Biology"]),
  answers: [
    {
      answer: 'Maths',
      nextId: 'seventhMaths'+shuffleArraylottwo[1],
    },
    {
      answer: "English",
      nextId: 'seventhEnglish'+shuffleArraylottwo[1],
    },
    {
      answer: "Science",
      nextid: "seventhScience"+shuffleArraylottwo[1],
    },
    {
      answer: "Biology",
      nextId: "eightBiology"+shuffleArraylottwo[1],
    },
  
  ],
},
//seventhEnglish
//1
['sevenEnglish'+shuffleArraylottwo[1]]: {
  botPrompt: '(Identify the non-finite verb in the sentence: "She enjoys singing."',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['She', 'enjoys', "singing","enjoys singing"]),
    answers: [
      {
        answer: 'She',
        nextId: 'insevenEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'enjoys',
        nextId: 'insevenEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "singing",
        nextId: 'sevenEnglishcorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "enjoys singing",
        nextId: 'insevenEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  sevenEnglishcorrectq1: {
  botPrompt: 'Hurray! <strong>singing</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'sevenEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  insevenEnglishcorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right/strong> answer is <strong>"singing"</strong>',
  answers: [
    {
      nextId: 'sevenEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
  //2
  ['sevenEnglish'+shuffleArraylottwo[2]]: {
    botPrompt: 'In the following sentence, which subject-verb agreement is correct? "Neither the teacher nor the students ___ happy with the result."',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['is', "are"]),
      answers: [
        {
          answer: 'is',
          nextId: 'sevenEnglishcorrectq2',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'are',
          nextId: 'insevenEnglishcorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq2: {
    botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[3],
      },
    ],
    },
    insevenEnglishcorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[3],
      },
    ],
    },
  
    //3
  ['sevenEnglish'+shuffleArraylottwo[3]]: {
    botPrompt: 'What type of conjunction is "although" in the sentence "Although it rained, we went for a walk"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Coordinating conjunction', 'Subordinating conjunction', "Correlative conjunction","Conjunctive adverb"]),
      answers: [
        {
          answer: 'Coordinating conjunction',
          nextId: 'insevenEnglishcorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Subordinating conjunction',
          nextId: 'sevenEnglishcorrectq3',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Correlative conjunction",
          nextId: 'insevenEnglishcorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Conjunctive adverb",
          nextId: 'insevenEnglishcorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq3: {
    botPrompt: 'Hurray! <strong>Subordinating conjunction</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[4],
      },
    ],
    },
    insevenEnglishcorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Subordinating conjunction"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[4],
      },
    ],
    },
  
  
  //4
  ['sevenEnglish'+shuffleArraylottwo[4]]: {
    botPrompt: 'What is the meaning of the phrasal verb "break down" in the sentence: "The car broke down"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Disassemble', 'Fail to function', "Break into pieces","Break a promise"]),
      answers: [
        {
          answer: 'Disassemble',
          nextId: 'insevenEnglishcorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Fail to function',
          nextId: 'sevenEnglishcorrectq4',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Break into pieces",
          nextId: 'insevenEnglishcorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Break a promise",
          nextId: 'insevenEnglishcorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq4: {
    botPrompt: 'Hurray! <strong>Fail to function</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[5],
      },
    ],
    },
    insevenEnglishcorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fail to function"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[5],
      },
    ],
    },
  
  
  
    //5
  ['sevenEnglish'+shuffleArraylottwo[5]]: {
    botPrompt: 'Identify the preposition in the sentence: "The cat jumped onto the table."',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['cat', 'jumped', "onto","table"]),
      answers: [
        {
          answer: 'cat',
          nextId: 'insevenEnglishcorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'jumped',
          nextId: 'insevenEnglishcorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "onto",
          nextId: 'sevenEnglishcorrectq5',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "table",
          nextId: 'insevenEnglishcorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq5: {
    botPrompt: 'Hurray! <strong>onto</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[6],
      },
    ],
    },
    insevenEnglishcorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"onto"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[6],
      },
    ],
    },
  
  
    //6
  ['sevenEnglish'+shuffleArraylottwo[6]]: {
    botPrompt: 'Identify the type of clause in the sentence: "Although it rained heavily, they still had a great time."',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Independent clause', 'Dependent clause', "Adjective clause","Noun clause"]),
      answers: [
        {
          answer: 'Independent clause',
          nextId: 'insevenEnglishcorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Dependent clause',
          nextId: 'sevenEnglishcorrectq6',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Adjective clause",
          nextId: 'insevenEnglishcorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Noun clause",
          nextId: 'insevenEnglishcorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq6: {
    botPrompt: 'Hurray! <strong>Dependent clause</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[7],
      },
    ],
    },
    insevenEnglishcorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dependent clause"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[7],
      },
    ],
    },
  
  
  
    //7
  ['sevenEnglish'+shuffleArraylottwo[7]]: {
    botPrompt: 'Read the line: "The police caught the thief red-handed." Change the sentence to passive voice.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['The thief had been caught red-handed by the police.', 'The thief was caught red-handed by the police.', " The thief caught the police red-handed.","The thief has been catching the police red-handed."]),
      answers: [
        {
          answer: 'The thief had been caught red-handed by the police.',
          nextId: 'insevenEnglishcorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'The thief was caught red-handed by the police.',
          nextId: 'sevenEnglishcorrectq7',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: " The thief caught the police red-handed.",
          nextId: 'insevenEnglishcorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "The thief has been catching the police red-handed.",
          nextId: 'insevenEnglishcorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq7: {
    botPrompt: 'Hurray! <strong>The thief was caught red-handed by the police.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[8],
      },
    ],
    },
    insevenEnglishcorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The thief was caught red-handed by the police."</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[8],
      },
    ],
    },
  
  
    //8
  ['sevenEnglish'+shuffleArraylottwo[8]]: {
    botPrompt: "Change the following direct speech into indirect speech: She said, 'I will meet you tomorrow.'",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['She said that she would meet me tomorrow.', 'She says that she will meet me tomorrow.', 'She says, "I will meet you tomorrow."','She said, "I will meet you tomorrow."']),
      answers: [
        {
          answer: 'She said that she would meet me tomorrow.',
          nextId: 'sevenEnglishcorrectq8',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'She says that she will meet me tomorrow.',
          nextId: 'insevenEnglishcorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'She says, "I will meet you tomorrow."',
          nextId: 'insevenEnglishcorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'She said, "I will meet you tomorrow."',
          nextId: 'insevenEnglishcorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq8: {
    botPrompt: 'Hurray! <strong>She said that she would meet me tomorrow.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[9],
      },
    ],
    },
    insevenEnglishcorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She said that she would meet me tomorrow."</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[9],
      },
    ],
    },
  
  
    //9
  ['sevenEnglish'+shuffleArraylottwo[9]]: {
    botPrompt: 'In the sentence "He had been studying for hours," which tense is used?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Present continuous', 'Past continuous', "Present perfect continuous","Past perfect continuous"]),
      answers: [
        {
          answer: 'Present continuous',
          nextId: 'insevenEnglishcorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Past continuous',
          nextId: 'insevenEnglishcorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Present perfect continuous",
          nextId: 'insevenEnglishcorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Past perfect continuous",
          nextId: 'sevenEnglishcorrectq9',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq9: {
    botPrompt: 'Hurray! <strong>Past perfect continuous</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[10],
      },
    ],
    },
    insevenEnglishcorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Past perfect continuous"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[10],
      },
    ],
    },
  
  
  
    //10
  ['sevenEnglish'+shuffleArraylottwo[10]]: {
    botPrompt: 'Read the line: "She said she ________ to the museum yesterday."Which tense should fill in the blank to maintain proper sequence of tenses?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['goes', 'gone', "went","going"]),
      answers: [
        {
          answer: 'goes',
          nextId: 'insevenEnglishcorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'gone',
          nextId: 'insevenEnglishcorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "went",
          nextId: 'sevenEnglishcorrectq10',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "going",
          nextId: 'insevenEnglishcorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq10: {
    botPrompt: 'Hurray! <strong>went</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[11],
      },
    ],
    },
    insevenEnglishcorrectq10: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"went"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[11],
      },
    ],
    },
  
  
    //11
  ['sevenEnglish'+shuffleArraylottwo[11]]: {
    botPrompt: 'Read the line: "After the storm had passed, the children went outside to play."What type of clause is "After the storm had passed" in the passage?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Adverb clause', 'Noun clause', "Independent clause","Dependent clause"]),
      answers: [
        {
          answer: 'Adverb clause',
          nextId: 'sevenEnglishcorrectq11',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Noun clause',
          nextId: 'insevenEnglishcorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Independent clause",
          nextId: 'insevenEnglishcorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Dependent clause",
          nextId: 'insevenEnglishcorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq11: {
    botPrompt: 'Hurray! <strong>Adverb clause</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[12],
      },
    ],
    },
    insevenEnglishcorrectq11: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Adverb clause"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[12],
      },
    ],
    },
  
  
    //12
  ['sevenEnglish'+shuffleArraylottwo[12]]: {
    botPrompt: 'Which sentence contains a participial phrase?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['The cat, always curious, explored the garden.', 'Running quickly, she reached the finish line.', "They went to the store, which was crowded.","He loves to read books."]),
      answers: [
        {
          answer: 'The cat, always curious, explored the garden.',
          nextId: 'insevenEnglishcorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Running quickly, she reached the finish line.',
          nextId: 'sevenEnglishcorrectq12',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "They went to the store, which was crowded.",
          nextId: 'insevenEnglishcorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "He loves to read books.",
          nextId: 'insevenEnglishcorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq12: {
    botPrompt: 'Hurray! <strong>Running quickly, she reached the finish line.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[13],
      },
    ],
    },
    insevenEnglishcorrectq12: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Running quickly, she reached the finish line."</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[13],
      },
    ],
    },
  
  
    //13
  ['sevenEnglish'+shuffleArraylottwo[13]]: {
    botPrompt: 'Which sentence contains a finite verb?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['He is cooking dinner.', 'Cooking dinner takes time.', "She danced all night.","The song was beautiful."]),
      answers: [
        {
          answer: 'He is cooking dinner.',
          nextId: 'sevenEnglishcorrectq13',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Cooking dinner takes time.',
          nextId: 'insevenEnglishcorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "She danced all night.",
          nextId: 'insevenEnglishcorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "The song was beautiful.",
          nextId: 'insevenEnglishcorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq13: {
    botPrompt: 'Hurray! <strong>He is cooking dinner.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[14],
      },
    ],
    },
    insevenEnglishcorrectq13: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He is cooking dinner."</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[14],
      },
    ],
    },
  
  
    //14
  ['sevenEnglish'+shuffleArraylottwo[14]]: {
    botPrompt: 'Identify the transitive verb in the sentence: "The children laughed."',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['children', 'laughed', "The","at"]),
      answers: [
        {
          answer: 'children',
          nextId: 'insevenEnglishcorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'laughed',
          nextId: 'sevenEnglishcorrectq14',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "The",
          nextId: 'insevenEnglishcorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "at",
          nextId: 'insevenEnglishcorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq14: {
    botPrompt: 'Hurray! <strong>laughed</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[15],
      },
    ],
    },
    insevenEnglishcorrectq14: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"laughed"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[15],
      },
    ],
    },
  
  
    //15
  ['sevenEnglish'+shuffleArraylottwo[15]]: {
    botPrompt: 'Which phrasal verb means "to endure or tolerate"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Break up', 'Put up with', "Take off","Look up"]),
      answers: [
        {
          answer: 'Break up',
          nextId: 'insevenEnglishcorrectq15',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Put up with',
          nextId: 'sevenEnglishcorrectq15',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Take off",
          nextId: 'insevenEnglishcorrectq15',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Look up",
          nextId: 'insevenEnglishcorrectq15',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq15: {
    botPrompt: 'Hurray! <strong>Put up with</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[16],
      },
    ],
    },
    insevenEnglishcorrectq15: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Put up with"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[16],
      },
    ],
    },
  
  
    //16
  ['sevenEnglish'+shuffleArraylottwo[16]]: {
    botPrompt: 'Which conjunction is used to indicate a choice between two alternatives?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['And', 'But', "Or","So"]),
      answers: [
        {
          answer: 'And',
          nextId: 'insevenEnglishcorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'But',
          nextId: 'insevenEnglishcorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Or",
          nextId: 'sevenEnglishcorrectq16',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "So",
          nextId: 'insevenEnglishcorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq16: {
    botPrompt: 'Hurray! <strong>Or</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[17],
      },
    ],
    },
    insevenEnglishcorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Or"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[17],
      },
    ],
    },
  
  
    //17
  ['sevenEnglish'+shuffleArraylottwo[17]]: {
    botPrompt: 'Choose the sentence with a correct preposition:',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['She jumped into the river.', 'She jumped over the river.', "She jumped the river.","She jumped under the river."]),
      answers: [
        {
          answer: 'She jumped into the river.',
          nextId: 'sevenEnglishcorrectq17',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'She jumped over the river.',
          nextId: 'insevenEnglishcorrectq17',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "She jumped the river.",
          nextId: 'insevenEnglishcorrectq17',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "She jumped under the river.",
          nextId: 'insevenEnglishcorrectq17',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq17: {
    botPrompt: 'Hurray! <strong>She jumped into the river.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[18],
      },
    ],
    },
    insevenEnglishcorrectq17: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She jumped into the river."</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[18],
      },
    ],
    },
  
  
    //18
  ['sevenEnglish'+shuffleArraylottwo[18]]: {
    botPrompt: 'What type of conjunction is "although" in the sentence "Although it rained, we went for a walk"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Coordinating conjunction', 'Subordinating conjunction', "Correlative conjunction","Conjunctive adverb"]),
      answers: [
        {
          answer: 'Coordinating conjunction',
          nextId: 'insevenEnglishcorrectq18',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Subordinating conjunction',
          nextId: 'sevenEnglishcorrectq18',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Correlative conjunction",
          nextId: 'insevenEnglishcorrectq18',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Conjunctive adverb",
          nextId: 'insevenEnglishcorrectq18',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq18: {
    botPrompt: 'Hurray! <strong>Subordinating conjunction</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[19],
      },
    ],
    },
    insevenEnglishcorrectq18: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Subordinating conjunction"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[19],
      },
    ],
    },
  
    //19
  ['sevenEnglish'+shuffleArraylottwo[19]]: {
    botPrompt: 'What is the non-finite verb in the phrase "to swim"?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['to', 'swim', "the","to swim"]),
      answers: [
        {
          answer: 'to',
          nextId: 'insevenEnglishcorrectq19',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'swim',
          nextId: 'sevenEnglishcorrectq19',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "the",
          nextId: 'insevenEnglishcorrectq19',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "to swim",
          nextId: 'insevenEnglishcorrectq19',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq19: {
    botPrompt: 'Hurray! <strong>swim</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[20],
      },
    ],
    },
    insevenEnglishcorrectq19: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"swim"</strong>',
    answers: [
      {
        nextId: 'sevenEnglish'+shuffleArraylottwo[20],
      },
    ],
    },
  
    //20
  ['sevenEnglish'+shuffleArraylottwo[20]]: {
    botPrompt: 'Which of the following verbs is ALWAYS intransitive?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Swim', 'Break', "Hit","Read"]),
      answers: [
        {
          answer: 'Swim',
          nextId: 'sevenEnglishcorrectq20',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Break',
          nextId: 'insevenEnglishcorrectq20',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Hit",
          nextId: 'insevenEnglishcorrectq20',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Read",
          nextId: 'insevenEnglishcorrectq20',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenEnglishcorrectq20: {
    botPrompt: 'Hurray! <strong>Swim</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocountinesevenEnglish',
      },
    ],
    },
    insevenEnglishcorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Swim"</strong>',
    answers: [
      {
        nextId: 'wishtocountinesevenEnglish',
      },
    ],
  },
  wishtocountinesevenththEnglish: {
    botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', "No"]),
    answers: [
      {
        answer: 'Yes',
        nextId: 'chooseclass',
      },
      {
        answer: "No",
        nextId: 'endConv',
      },
    
    ],
  },
  //seventhMaths
  //1
['sevenMaths'+shuffleArraylottwo[1]]: {
  botPrompt: '(2-1 × 3-1)2 = ? ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1/6', '16', "1/36","36"]),
    answers: [
      {
        answer: '1/6',
        nextId: 'insevenMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '16',
        nextId: 'insevenMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "1/36",
        nextId: 'sevenMathscorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "36",
        nextId: 'insevenMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  sevenMathscorrectq1: {
  botPrompt: 'Hurray! <strong>1/36</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'sevenMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  insevenMathscorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right/strong> answer is <strong>"1/36"</strong>',
  answers: [
    {
      nextId: 'sevenMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
  //2
  ['sevenMaths'+shuffleArraylottwo[2]]: {
    botPrompt: 'If 9 × 3n = 36, then n = ___________.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['2', '4', "1","0"]),
      answers: [
        {
          answer: '2',
          nextId: 'insevenMathscorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '4',
          nextId: 'sevenMathscorrectq2',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "1",
          nextId: 'insevenMathscorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "0",
          nextId: 'insevenMathscorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq2: {
    botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[3],
      },
    ],
    },
    insevenMathscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[3],
      },
    ],
    },
  
    //3
  ['sevenMaths'+shuffleArraylottwo[3]]: {
    botPrompt: 'The sum of two consecutive odd numbers is 36. The smaller number is',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['15', '17', "19","13"]),
      answers: [
        {
          answer: '15',
          nextId: 'sevenMathscorrectq3',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '17',
          nextId: 'insevenMathscorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "19",
          nextId: 'insevenMathscorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "13",
          nextId: 'insevenMathscorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq3: {
    botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[4],
      },
    ],
    },
    insevenMathscorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[4],
      },
    ],
    },
  
  
  //4
  ['sevenMaths'+shuffleArraylottwo[4]]: {
    botPrompt: 'In ΔABC, if  ∠A = 72° and ∠B = 63°, then ∠C = ?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['45°', '32°', "49°","50°"]),
      answers: [
        {
          answer: '45°',
          nextId: 'sevenMathscorrectq4',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '32°',
          nextId: 'insevenMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "49°",
          nextId: 'insevenMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "50°",
          nextId: 'insevenMathscorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq4: {
    botPrompt: 'Hurray! <strong>45°</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[5],
      },
    ],
    },
    insevenMathscorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45°"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[5],
      },
    ],
    },
  
  
  
    //5
  ['sevenMaths'+shuffleArraylottwo[5]]: {
    botPrompt: 'A cylinder has ________________ vertex.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1', '2', "3","none of these"]),
      answers: [
        {
          answer: '1',
          nextId: 'insevenMathscorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '2',
          nextId: 'insevenMathscorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "3",
          nextId: 'insevenMathscorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "none of these",
          nextId: 'sevenMathscorrectq5',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq5: {
    botPrompt: 'Hurray! <strong>none of these</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[6],
      },
    ],
    },
    insevenMathscorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"none of these"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[6],
      },
    ],
    },
  
  
    //6
  ['sevenMaths'+shuffleArraylottwo[6]]: {
    botPrompt: 'How many lines of symmetry does an equilateral triangle have?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['4', '3', "2","1"]),
      answers: [
        {
          answer: '4',
          nextId: 'insevenMathscorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '3',
          nextId: 'sevenMathscorrectq6',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "2",
          nextId: 'insevenMathscorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "1",
          nextId: 'insevenMathscorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq6: {
    botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[7],
      },
    ],
    },
    insevenMathscorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[7],
      },
    ],
    },
  
  
  
    //7
  ['sevenMaths'+shuffleArraylottwo[7]]: {
    botPrompt: 'If p/q = r/s, then ps = _____________.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['qr', 'pq', " rs","all of these"]),
      answers: [
        {
          answer: 'qr',
          nextId: 'sevenMathscorrectq7',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'pq',
          nextId: 'insevenMathscorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: " rs",
          nextId: 'insevenMathscorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "all of these",
          nextId: 'insevenMathscorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq7: {
    botPrompt: 'Hurray! <strong>qr</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[8],
      },
    ],
    },
    insevenMathscorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"qr"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[8],
      },
    ],
    },
  
  
    //8
  ['sevenMaths'+shuffleArraylottwo[8]]: {
    botPrompt: '(3⁰ × 4⁰ × 5⁰) = ?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1', '12⁰', "12","both (a) and (b)"]),
      answers: [
        {
          answer: '1',
          nextId: 'insevenMathscorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '12⁰',
          nextId: 'insevenMathscorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "12",
          nextId: 'insevenMathscorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "both (a) and (b)",
          nextId: 'sevenMathscorrectq8',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq8: {
    botPrompt: 'Hurray! <strong>both (a) and (b)</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[9],
      },
    ],
    },
    insevenMathscorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"both (a) and (b)"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[9],
      },
    ],
    },
  
  
    //9
  ['sevenMaths'+shuffleArraylottwo[9]]: {
    botPrompt: '7xy - (-8xy) = ?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['15xy', '-15xy', "xy","23xy"]),
      answers: [
        {
          answer: '15xy',
          nextId: 'sevenMathscorrectq9',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '-15xy',
          nextId: 'insevenMathscorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "xy",
          nextId: 'insevenMathscorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "23xy",
          nextId: 'insevenMathscorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq9: {
    botPrompt: 'Hurray! <strong>15xy</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[10],
      },
    ],
    },
    insevenMathscorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15xy"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[10],
      },
    ],
    },
  
  
  
    //10
  ['sevenMaths'+shuffleArraylottwo[10]]: {
    botPrompt: 'If 3a - 5 = 1, then a = ?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['6', '-6', "2","-2"]),
      answers: [
        {
          answer: '6',
          nextId: 'insevenMathscorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '-6',
          nextId: 'insevenMathscorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "2",
          nextId: 'sevenMathscorrectq10',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "-2",
          nextId: 'insevenMathscorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq10: {
    botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[11],
      },
    ],
    },
    insevenMathscorrectq10: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[11],
      },
    ],
    },
  
  
    //11
  ['sevenMaths'+shuffleArraylottwo[11]]: {
    botPrompt: 'The sum of all angles around a point is',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['90°', '180°', "270°","360°"]),
      answers: [
        {
          answer: '90°',
          nextId: 'insevenMathscorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '180°',
          nextId: 'insevenMathscorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "270°",
          nextId: 'insevenMathscorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "360°",
          nextId: 'sevenMathscorrectq11',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq11: {
    botPrompt: 'Hurray! <strong>360°</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[12],
      },
    ],
    },
    insevenMathscorrectq11: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"360°"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[12],
      },
    ],
    },
  
  
    //12
  ['sevenMaths'+shuffleArraylottwo[12]]: {
    botPrompt: 'The sum of two consecutive interior angles is',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['90°', '120°', "180°","360°"]),
      answers: [
        {
          answer: '90°',
          nextId: 'insevenMathscorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '120°',
          nextId: 'insevenMathscorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "180°",
          nextId: 'sevenMathscorrectq12',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "360°",
          nextId: 'insevenMathscorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq12: {
    botPrompt: 'Hurray! <strong>180°</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[13],
      },
    ],
    },
    insevenMathscorrectq12: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"180°"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[13],
      },
    ],
    },
  
  
    //13
  ['sevenMaths'+shuffleArraylottwo[13]]: {
    botPrompt: 'The letter O of the English alphabet has ___________ lines of symmetry.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['0', '1', "2","none of these"]),
      answers: [
        {
          answer: '0',
          nextId: 'insevenMathscorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '1',
          nextId: 'insevenMathscorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "2",
          nextId: 'sevenMathscorrectq13',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "none of these",
          nextId: 'insevenMathscorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq13: {
    botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[14],
      },
    ],
    },
    insevenMathscorrectq13: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[14],
      },
    ],
    },
  
  
    //14
  ['sevenMaths'+shuffleArraylottwo[14]]: {
    botPrompt: 'The number of vertices of a cube is ______________.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['0', '8', "2","4"]),
      answers: [
        {
          answer: '0',
          nextId: 'insevenMathscorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '8',
          nextId: 'sevenMathscorrectq14',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "2",
          nextId: 'insevenMathscorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "4",
          nextId: 'insevenMathscorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq14: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[15],
      },
    ],
    },
    insevenMathscorrectq14: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[15],
      },
    ],
    },
  
  
    //15
  ['sevenMaths'+shuffleArraylottwo[15]]: {
    botPrompt: 'If a = 3 and b = 4, what is the value of a² + b²?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '12', "25","9"]),
      answers: [
        {
          answer: '7',
          nextId: 'insevenMathscorrectq15',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '12',
          nextId: 'insevenMathscorrectq15',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "25",
          nextId: 'sevenMathscorrectq15',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "9",
          nextId: 'insevenMathscorrectq15',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq15: {
    botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[16],
      },
    ],
    },
    insevenMathscorrectq15: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[16],
      },
    ],
    },
  
  
    //16
  ['sevenMaths'+shuffleArraylottwo[16]]: {
    botPrompt: 'The product of additive inverse of 1 and its multiplicative inverse is',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['1', '0', "-1","none of these"]),
      answers: [
        {
          answer: '1',
          nextId: 'insevenMathscorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '0',
          nextId: 'insevenMathscorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "-1",
          nextId: 'sevenMathscorrectq16',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "none of these",
          nextId: 'insevenMathscorrectq16',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq16: {
    botPrompt: 'Hurray! <strong>-1</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[17],
      },
    ],
    },
    insevenMathscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"-1"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[17],
      },
    ],
    },
  
  
    //17
  ['sevenMaths'+shuffleArraylottwo[17]]: {
    botPrompt: 'Which of the following is a pair of complementary angles?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['45° and 45°', '30° and 30°', "90° and 90°","120° and 60°"]),
      answers: [
        {
          answer: '45° and 45°',
          nextId: 'sevenMathscorrectq17',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: '30° and 30°',
          nextId: 'insevenMathscorrectq17',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "90° and 90°",
          nextId: 'insevenMathscorrectq17',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "120° and 60°",
          nextId: 'insevenMathscorrectq17',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq17: {
    botPrompt: 'Hurray! <strong>45° and 45°</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[18],
      },
    ],
    },
    insevenMathscorrectq17: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45° and 45°"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[18],
      },
    ],
    },
  
  
    //18
  ['sevenMaths'+shuffleArraylottwo[18]]: {
    botPrompt: 'If the radius of a circle is 6 cm, what is its circumference (rounded to the nearest centimeter)?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['18 cm', '36 cm', "37 cm","38 cm"]),
      answers: [
        {
          answer: '18 cm',
          nextId: 'insevenMathscorrectq18',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '36 cm',
          nextId: 'insevenMathscorrectq18',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "37 cm",
          nextId: 'insevenMathscorrectq18',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "38 cm",
          nextId: 'sevenMathscorrectq18',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq18: {
    botPrompt: 'Hurray! <strong>38 cm</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[19],
      },
    ],
    },
    insevenMathscorrectq18: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38 cm"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[19],
      },
    ],
    },
  
    //19
  ['sevenMaths'+shuffleArraylottwo[19]]: {
    botPrompt: 'A triangle with all sides of different lengths is called:',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Scalene', 'Isosceles', "Equilateral","Right-angled"]),
      answers: [
        {
          answer: 'Scalene',
          nextId: 'sevenMathscorrectq19',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Isosceles',
          nextId: 'insevenMathscorrectq19',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Equilateral",
          nextId: 'insevenMathscorrectq19',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Right-angled",
          nextId: 'insevenMathscorrectq19',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq19: {
    botPrompt: 'Hurray! <strong>Scalene</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[20],
      },
    ],
    },
    insevenMathscorrectq19: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Scalene"</strong>',
    answers: [
      {
        nextId: 'sevenMaths'+shuffleArraylottwo[20],
      },
    ],
    },
  
    //20
  ['sevenMaths'+shuffleArraylottwo[20]]: {
    botPrompt: 'What is the value of 4³?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['12', '64', "16","256"]),
      answers: [
        {
          answer: '12',
          nextId: 'insevenMathscorrectq20',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: '64',
          nextId: 'sevenMathscorrectq20',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "16",
          nextId: 'insevenMathscorrectq20',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "256",
          nextId: 'insevenMathscorrectq20',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenMathscorrectq20: {
    botPrompt: 'Hurray! <strong>64</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocountinesevenMaths',
      },
    ],
    },
    insevenMathscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"64"</strong>',
    answers: [
      {
        nextId: 'wishtocountinesevenMaths',
      },
    ],
    },
    wishtocountinesevenththMaths: {
      botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Yes', "No"]),
      answers: [
        {
          answer: 'Yes',
          nextId: 'chooseclass',
        },
        {
          answer: "No",
          nextId: 'endConv',
        },
      
      ],
    },
    //science
    //1
['sevenScience'+shuffleArraylottwo[1]]: {
  botPrompt: 'Which mineral acid is a key component of acid rain?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Sulphuric acid', 'Hydrochloric acid', "Nitric acid","Carbonic acid"]),
    answers: [
      {
        answer: 'Sulphuric acid',
        nextId: 'insevenSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Hydrochloric acid',
        nextId: 'insevenSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Nitric acid",
        nextId: 'sevenSciencecorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Carbonic acid",
        nextId: 'insevenSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  sevenSciencecorrectq1: {
  botPrompt: 'Hurray! <strong>Nitric acid</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'sevenScience'+shuffleArraylottwo[2],
    },
  ],
  },
  insevenSciencecorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right/strong> answer is <strong>"Nitric acid"</strong>',
  answers: [
    {
      nextId: 'sevenScience'+shuffleArraylottwo[2],
    },
  ],
  },
  
  
  //2
  ['sevenScience'+shuffleArraylottwo[2]]: {
    botPrompt: 'Which of the following is a strong base?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Ammonia (NH3)', 'Sodium hydroxide (NaOH)', "Calcium hydroxide (Ca(OH)2)","Acetic acid (CH3COOH)"]),
      answers: [
        {
          answer: 'Ammonia (NH3)',
          nextId: 'insevenSciencecorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Sodium hydroxide (NaOH)',
          nextId: 'sevenSciencecorrectq2',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Calcium hydroxide (Ca(OH)2)",
          nextId: 'insevenSciencecorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Acetic acid (CH3COOH)",
          nextId: 'insevenSciencecorrectq2',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq2: {
    botPrompt: 'Hurray! <strong>Sodium hydroxide (NaOH)</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[3],
      },
    ],
    },
    insevenSciencecorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sodium hydroxide (NaOH)"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[3],
      },
    ],
    },
  
    //3
  ['sevenScience'+shuffleArraylottwo[3]]: {
    botPrompt: 'In an acidic solution, what color does phenolphthalein indicator display?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Colorless', 'Pink', "Yellow","Blue"]),
      answers: [
        {
          answer: 'Colorless',
          nextId: 'sevenSciencecorrectq3',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Pink',
          nextId: 'insevenSciencecorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Yellow",
          nextId: 'insevenSciencecorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Blue",
          nextId: 'insevenSciencecorrectq3',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq3: {
    botPrompt: 'Hurray! <strong>Colorless</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[4],
      },
    ],
    },
    insevenSciencecorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Colorless"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[4],
      },
    ],
    },
  
  
  //4
  ['sevenScience'+shuffleArraylottwo[4]]: {
    botPrompt: 'When an acid reacts with a base in a neutralization reaction, the resulting pH is:',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', 'Less than 7', "Greater than 7","Variable depending on the acid and base used"]),
      answers: [
        {
          answer: '7',
          nextId: 'sevenSciencecorrectq4',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Less than 7',
          nextId: 'insevenSciencecorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Greater than 7",
          nextId: 'insevenSciencecorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Variable depending on the acid and base used",
          nextId: 'insevenSciencecorrectq4',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq4: {
    botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[5],
      },
    ],
    },
    insevenSciencecorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[5],
      },
    ],
    },
  
  
  
    //5
  ['sevenScience'+shuffleArraylottwo[5]]: {
    botPrompt: 'What type of ions do salts typically consist of?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Cations and anions', 'Anions and isotopes', "Cations and isotopes","Cations and protons"]),
      answers: [
        {
          answer: 'Cations and anions',
          nextId: 'sevenSciencecorrectq5',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Anions and isotopes',
          nextId: 'insevenSciencecorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Cations and isotopes",
          nextId: 'insevenSciencecorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Cations and protons",
          nextId: 'insevenSciencecorrectq5',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq5: {
    botPrompt: 'Hurray! <strong>Cations and anions</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[6],
      },
    ],
    },
    insevenSciencecorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cations and anions"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[6],
      },
    ],
    },
  
  
    //6
  ['sevenScience'+shuffleArraylottwo[6]]: {
    botPrompt: 'Which of the following is an example of a physical change?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Rusting of iron', 'Burning of wood', "Melting of ice","Digestion of food"]),
      answers: [
        {
          answer: 'Rusting of iron',
          nextId: 'insevenSciencecorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Burning of wood',
          nextId: 'insevenSciencecorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Melting of ice",
          nextId: 'sevenSciencecorrectq6',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Digestion of food",
          nextId: 'insevenSciencecorrectq6',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq6: {
    botPrompt: 'Hurray! <strong>Melting of ice</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[7],
      },
    ],
    },
    insevenSciencecorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Melting of ice"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[7],
      },
    ],
    },
  
  
  
    //7
  ['sevenScience'+shuffleArraylottwo[7]]: {
    botPrompt: 'In a double displacement reaction, what occurs between the reactants?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Exchange of ions', 'Formation of a precipitate', "Release of gas","All of the above"]),
      answers: [
        {
          answer: 'Exchange of ions',
          nextId: 'sevenSciencecorrectq7',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Formation of a precipitate',
          nextId: 'insevenSciencecorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Release of gas",
          nextId: 'insevenSciencecorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "All of the above",
          nextId: 'insevenSciencecorrectq7',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq7: {
    botPrompt: 'Hurray! <strong>Exchange of ions</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[8],
      },
    ],
    },
    insevenSciencecorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Exchange of ions"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[8],
      },
    ],
    },
  
  
    //8
  ['sevenScience'+shuffleArraylottwo[8]]: {
    botPrompt: 'What is the key characteristic of a combination reaction?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Formation of new bonds', 'Breaking of existing bonds', "Release of energy","Change in color"]),
      answers: [
        {
          answer: 'Formation of new bonds',
          nextId: 'sevenSciencecorrectq8',
          sumToBags: [{ name: 'ao', points: 1 }],
        },
        {
          answer: 'Breaking of existing bonds',
          nextId: 'insevenSciencecorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Release of energy",
          nextId: 'insevenSciencecorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Change in color",
          nextId: 'insevenSciencecorrectq8',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq8: {
    botPrompt: 'Hurray! <strong>Formation of new bonds</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[9],
      },
    ],
    },
    insevenSciencecorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Formation of new bonds"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[9],
      },
    ],
    },
  
  
    //9
  ['sevenScience'+shuffleArraylottwo[9]]: {
    botPrompt: 'Which factor affects the size of crystals during crystallization?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Rate of cooling', 'Volume of solvent', "Temperature of the solvent","Pressure applied"]),
      answers: [
        {
          answer: 'Rate of cooling',
          nextId: 'sevenSciencecorrectq9',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Volume of solvent',
          nextId: 'insevenSciencecorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Temperature of the solvent",
          nextId: 'insevenSciencecorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Pressure applied",
          nextId: 'insevenSciencecorrectq9',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq9: {
    botPrompt: 'Hurray! <strong>Rate of cooling</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[10],
      },
    ],
    },
    insevenSciencecorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rate of cooling"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[10],
      },
    ],
    },
  
  
  
    //10
  ['sevenScience'+shuffleArraylottwo[10]]: {
    botPrompt: 'The difference between the maximum and minimum temperature in a day is known as:',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Temperature range', 'Temperature variation', "Temperature difference","All of the above"]),
      answers: [
        {
          answer: 'Temperature range',
          nextId: 'insevenSciencecorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Temperature variation',
          nextId: 'insevenSciencecorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Temperature difference",
          nextId: 'insevenSciencecorrectq10',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "All of the above",
          nextId: 'sevenSciencecorrectq10',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq10: {
    botPrompt: 'Hurray! <strong>All of the above</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[11],
      },
    ],
    },
    insevenSciencecorrectq10: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"All of the above"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[11],
      },
    ],
    },
  
  
    //11
  ['sevenScience'+shuffleArraylottwo[11]]: {
    botPrompt: 'The instrument used to measure humidity is called a:',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Hygrometer', 'Thermometer', "Barometer","Anemometer"]),
      answers: [
        {
          answer: 'Hygrometer',
          nextId: 'sevenSciencecorrectq11',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: 'Thermometer',
          nextId: 'insevenSciencecorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Barometer",
          nextId: 'insevenSciencecorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Anemometer",
          nextId: 'insevenSciencecorrectq11',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq11: {
    botPrompt: 'Hurray! <strong>Hygrometer</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[12],
      },
    ],
    },
    insevenSciencecorrectq11: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Hygrometer</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[12],
      },
    ],
    },
  
  
    //12
  ['sevenScience'+shuffleArraylottwo[12]]: {
    botPrompt: 'The principle that explains why gases expand on heating is known as:',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(["Archimedes' principle", "Charles's law", "Pascal's principle","Boyle's law"]),
      answers: [
        {
          answer: "Archimedes' principle",
          nextId: 'insevenSciencecorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Charles's law",
          nextId: 'sevenSciencecorrectq12',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Pascal's principle",
          nextId: 'insevenSciencecorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Boyle's law",
          nextId: 'insevenSciencecorrectq12',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq12: {
    botPrompt: "Hurray! <strong>Charles's law</strong> is the correct answer  ! 😎",
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[13],
      },
    ],
    },
    insevenSciencecorrectq12: {
    botPrompt: "You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Charles's law</strong>",
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[13],
      },
    ],
    },
  
  
    //13
  ['sevenScience'+shuffleArraylottwo[13]]: {
    botPrompt: 'The movement of warm air upwards is driven by:',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['An increase in air pressure', 'A decrease in air pressure', "Changes in wind patterns","Gravity"]),
      answers: [
        {
          answer: 'An increase in air pressure',
          nextId: 'insevenSciencecorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'A decrease in air pressure',
          nextId: 'sevenSciencecorrectq13',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "Changes in wind patterns",
          nextId: 'insevenSciencecorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Gravity",
          nextId: 'insevenSciencecorrectq13',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq13: {
    botPrompt: 'Hurray! <strong>A decrease in air pressure</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[14],
      },
    ],
    },
    insevenSciencecorrectq13: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A decrease in air pressure"</strong>',
    answers: [
      {
        nextId: 'sevenScience'+shuffleArraylottwo[14],
      },
    ],
    },
  
  
    //14
  ['sevenScience'+shuffleArraylottwo[14]]: {
    botPrompt: 'In a thunderstorm, what is the role of the downdraft?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['It pushes warm air upwards', 'It creates a calm, clear area within the storm', "It generates lightning","It produces heavy rain"]),
      answers: [
        {
          answer: 'It pushes warm air upwards',
          nextId: 'insevenSciencecorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'It creates a calm, clear area within the storm',
          nextId: 'sevenSciencecorrectq14',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
        {
          answer: "It generates lightning",
          nextId: 'insevenSciencecorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "It produces heavy rain",
          nextId: 'insevenSciencecorrectq14',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
      ],
    },
    
    sevenSciencecorrectq14: {
    botPrompt: 'Hurray! <strong>It creates a calm, clear area within the storm</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocountinesevenScience',
      },
    ],
    },
    insevenSciencecorrectq14: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It creates a calm, clear area within the storm"</strong>',
    answers: [
      {
        nextId: 'wishtocountinesevenScience',
      },
    ],
  },
  wishtocountinesevenththScience: {
    botPrompt: 'You have Completed Science. Do you Wish to Continue ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', "No"]),
    answers: [
      {
        answer: 'Yes',
        nextId: 'chooseclass',
      },
      {
        answer: "No",
        nextId: 'endConv',
      },
    
    ],
  },

  //biology
  //1
  ['sevenBiology'+shuffleArraylottwo[1]]: {
    botPrompt: "Which compartment of the cow's stomach is most similar in function to a human stomach?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Rumen', 'Reticulum', "Omasum","Abomasum"]),
      answers: [
        {
          answer: 'Rumen',
          nextId: 'insevenBiologycorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: 'Reticulum',
          nextId: 'insevenBiologycorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Omasum",
          nextId: 'insevenBiologycorrectq1',
          sumToBags: [{ name: 'ai', points: 1 }],
        },
        {
          answer: "Abomasum",
          nextId: 'sevenBiologycorrectq1',
          sumToBags: [{ name: 'ac', points: 1 }],
        },
      ],
    },
    
    sevenBiologycorrectq1: {
    botPrompt: 'Hurray! <strong>Abomasum</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'sevenBiology'+shuffleArraylottwo[2],
      },
    ],
    },
    insevenBiologycorrectq1: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right/strong> answer is <strong>"Abomasum"</strong>',
    answers: [
      {
        nextId: 'sevenBiology'+shuffleArraylottwo[2],
      },
    ],
    },
    
    
    //2
    ['sevenBiology'+shuffleArraylottwo[2]]: {
      botPrompt: 'What is the primary pigment responsible for capturing light energy during photosynthesis?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Chlorophyll', 'Carotene', "Xanthophyll","0Anthocyanin"]),
        answers: [
          {
            answer: 'Chlorophyll',
            nextId: 'sevenBiologycorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Carotene',
            nextId: 'insevenBiologycorrectq2',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Xanthophyll",
            nextId: 'insevenBiologycorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Anthocyanin",
            nextId: 'insevenBiologycorrectq2',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sevenBiologycorrectq2: {
      botPrompt: 'Hurray! <strong>Chlorophyll</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[3],
        },
      ],
      },
      insevenBiologycorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chlorophyll"</strong>',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[3],
        },
      ],
      },
    
      //3
    ['sevenBiology'+shuffleArraylottwo[3]]: {
      botPrompt: 'Which type of respiration, aerobic or anaerobic, produces more ATP (energy) per glucose molecule?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Aerobic respiration', 'Anaerobic respiration', "Both produce the same amount of ATP","Neither produces ATP"]),
        answers: [
          {
            answer: 'Aerobic respiration',
            nextId: 'sevenBiologycorrectq3',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: 'Anaerobic respiration',
            nextId: 'insevenBiologycorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Both produce the same amount of ATP",
            nextId: 'insevenBiologycorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Neither produces ATP",
            nextId: 'insevenBiologycorrectq3',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sevenBiologycorrectq3: {
      botPrompt: 'Hurray! <strong>Aerobic respiration</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[4],
        },
      ],
      },
      insevenBiologycorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Aerobic respiration"</strong>',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[4],
        },
      ],
      },
    
    
    //4
    ['sevenBiology'+shuffleArraylottwo[4]]: {
      botPrompt: 'Which of the following is an example of a plant propagation method that does NOT involve seeds?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Germination', 'Vegetative propagation', "Pollination","Fertilization"]),
        answers: [
          {
            answer: 'Germination',
            nextId: 'insevenBiologycorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Vegetative propagation',
            nextId: 'sevenBiologycorrectq4',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Pollination",
            nextId: 'insevenBiologycorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Fertilization",
            nextId: 'insevenBiologycorrectq4',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sevenBiologycorrectq4: {
      botPrompt: 'Hurray! <strong>Vegetative propagation</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[5],
        },
      ],
      },
      insevenBiologycorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Vegetative propagation"</strong>',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[5],
        },
      ],
      },
    
    
    
      //5
    ['sevenBiology'+shuffleArraylottwo[5]]: {
      botPrompt: 'What is the term for the process by which plants release water vapor into the atmosphere through tiny openings in their leaves?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Transpiration', 'Evaporation', "Sublimation","Precipitation"]),
        answers: [
          {
            answer: 'Transpiration',
            nextId: 'sevenBiologycorrectq5',
            sumToBags: [{ name: 'aC', points: 1 }],
          },
          {
            answer: 'Evaporation',
            nextId: 'insevenBiologycorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Sublimation",
            nextId: 'insevenBiologycorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Precipitation",
            nextId: 'insevenBiologycorrectq5',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sevenBiologycorrectq5: {
      botPrompt: 'Hurray! <strong>Transpiration</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[6],
        },
      ],
      },
      insevenBiologycorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Transpiration"</strong>',
      answers: [
        {
          nextId: 'sevenBiology'+shuffleArraylottwo[6],
        },
      ],
      },
    
    
      //6
    ['sevenBiology'+shuffleArraylottwo[6]]: {
      botPrompt: 'Which of the following is NOT a component of the forest floor layer?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Mosses and lichens', 'Leaf litter and decomposing organic matter', "Tree trunks and large branches","Various types of fungi"]),
        answers: [
          {
            answer: 'Mosses and lichens',
            nextId: 'insevenBiologycorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: 'Leaf litter and decomposing organic matter',
            nextId: 'insevenBiologycorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
          {
            answer: "Tree trunks and large branches",
            nextId: 'sevenBiologycorrectq6',
            sumToBags: [{ name: 'ac', points: 1 }],
          },
          {
            answer: "Various types of fungi",
            nextId: 'insevenBiologycorrectq6',
            sumToBags: [{ name: 'ai', points: 1 }],
          },
        ],
      },
      
      sevenBiologycorrectq6: {
      botPrompt: 'Hurray! <strong>Tree trunks and large branches</strong> is the correct answer  ! 😎',
      answers: [
        {
            nextId: 'wishtocountinesevenBiology',
        },
      ],
      },
      insevenBiologycorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Tree trunks and large branches"</strong>',
      answers: [
        {
            nextId: 'wishtocountinesevenBiology',
        },
      ],
      },
      wishtocountinesevenththBiology: {
        botPrompt: 'You have Completed Biology. Do you Wish to Continue ?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Yes', "No"]),
        answers: [
          {
            answer: 'Yes',
            nextId: 'chooseclass',
          },
          {
            answer: "No",
            nextId: 'endConv',
          },
        
        ],
      },
    
    

//classVIII

classviii: {
  botPrompt: 'You Have Selected CLASS VIII. Which subject you would like to start',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Maths', "English","Science","Biology"]),
    answers: [
      {
        answer: 'Maths',
        nextId: 'eightMaths'+shuffleArraylottwo[1],
      },
      {
        answer: "English",
        nextId: "eightEnglish"+shuffleArraylottwo[1],
      },
      {
        answer: "Science",
        nextId: "eightScience"+shuffleArraylottwo[1],
      },

    ],
  },  

  //1
['eightMaths'+shuffleArraylottwo[1]]: {
  botPrompt: 'If a cube has a volume of 64 cubic centimeters, what is the length of each side?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2 cm', '4 cm', "6 cm","8 cm"]),
    answers: [
      {
        answer: '2 cm',
        nextId: 'ineightMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: '4 cm',
        nextId: 'eightMathscorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "6 cm",
        nextId: 'ineightMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "8 cm",
        nextId: 'ineightMathscorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightMathscorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  ineightMathscorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4 cm"</strong>',
  answers: [
    {
      nextId: 'eightMaths'+shuffleArraylottwo[2],
    },
  ],
  },
  
//2
['eightMaths'+shuffleArraylottwo[2]]: {
botPrompt: 'Multiplicative inverse of (-2/3)⁴ ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['16/81', '-16/81', "81/16","-81/16"]),
  answers: [
    {
      answer: '16/81',
      nextId: 'ineightMathscorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '-16/81',
      nextId: 'ineightMathscorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "81/16",
      nextId: 'eightMathscorrectq2',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "-81/16",
      nextId: 'ineightMathscorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq2: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[3],
  },
],
},
ineightMathscorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"81/16"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[3],
  },
],
},

//3
['eightMaths'+shuffleArraylottwo[3]]: {
botPrompt: '{208 + (2304)^(1/2)}^(1/2)   is equal ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['18', '16', "14","22"]),
  answers: [
    {
      answer: '18',
      nextId: 'ineightMathscorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '16',
      nextId: 'eightMathscorrectq3',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "14",
      nextId: 'ineightMathscorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "22",
      nextId: 'ineightMathscorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq3: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[4],
  },
],
},
ineightMathscorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[4],
  },
],
},

//4
['eightMaths'+shuffleArraylottwo[4]]: {
botPrompt: ' (32744)^(1/3) = ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['16', '18', "-14","14"]),
  answers: [
    {
      answer: '16',
      nextId: 'ineightMathscorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '18',
      nextId: 'ineightMathscorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "-14",
      nextId: 'ineightMathscorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "14",
      nextId: 'eightMathscorrectq4',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq4: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[5],
  },
],
},
ineightMathscorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[5],
  },
],
},

//5
['eightMaths'+shuffleArraylottwo[5]]: {
botPrompt: 'Number of terms in the polynomial 7xyz + 6xz  - 5x + 8/y',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '2', "4","none of these"]),
  answers: [
    {
      answer: '1',
      nextId: 'ineightMathscorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '2',
      nextId: 'ineightMathscorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "4",
      nextId: 'ineightMathscorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "none  of these",
      nextId: 'eightMathscorrectq5',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq5: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[6],
  },
],
},
ineightMathscorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"none of these"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[6],
  },
],
},

//6
['eightMaths'+shuffleArraylottwo[6]]: {
botPrompt: 'Factorise:  (mn + n) + m + 1',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['(mn+1)(m+n)', '(mn + m)(n + 1)', "n(m + 1)"," (n + 1)(m + 1)"]),
  answers: [
    {
      answer: '(mn + 1)(m + n)',
      nextId: 'ineightMathscorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '(mn + m)(n + 1)',
      nextId: 'ineightMathscorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "n(m + 1)",
      nextId: 'ineightMathscorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: " (n + 1)(m + 1)",
      nextId: 'eightMathscorrectq6',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq6: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[7],
  },
],
},
ineightMathscorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>" (n + 1)(m + 1)"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[7],
  },
],
},

//7
['eightMaths'+shuffleArraylottwo[7]]: {
botPrompt: 'If the radius of a circle is doubled, how does the area of the circle change? ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['It becomes half', 'It doubles', "It quadruples","It remains the same"]),
  answers: [
    {
      answer: 'It becomes half',
      nextId: 'ineightMathscorrectq7',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'It doubles',
      nextId: 'ineightMathscorrectq7',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "It quadruples",
      nextId: 'eightMathscorrectq7',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "It remains the same",
      nextId: 'ineightMathscorrectq7',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq7: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[8],
  },
],
},
ineightMathscorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It quadruples"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[8],
  },
],
},

//8
['eightMaths'+shuffleArraylottwo[8]]: {
botPrompt: 'How many diagonals do an octagon have?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['8', '16', "18","20"]),
  answers: [
    {
      answer: '8',
      nextId: 'ineightMathscorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '16',
      nextId: 'ineightMathscorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "18",
      nextId: 'ineightMathscorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "20",
      nextId: 'eightMathscorrectq8',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq8: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[9],
  },
],
},
ineightMathscorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[9],
  },
],
},

//9
['eightMaths'+shuffleArraylottwo[9]]: {
botPrompt: 'A quadrilateral has __________ vertices.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['5', '2', "3","4"]),
  answers: [
    {
      answer: '5',
      nextId: 'ineightMathscorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '2',
      nextId: 'ineightMathscorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "3",
      nextId: 'ineightMathscorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "4",
      nextId: 'eightMathscorrectq9',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq9: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[10],
  },
],
},
ineightMathscorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[10],
  },
],
},

//10
['eightMaths'+shuffleArraylottwo[10]]: {
botPrompt: 'The two diagonals are not necessarily equal in a/an',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['rectangle', 'square', "rhombus","isosceles trapezium"]),
  answers: [
    {
      answer: 'rectangle',
      nextId: 'ineightMathscorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'square',
      nextId: 'ineightMathscorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "rhombus",
      nextId: 'eightMathscorrectq10',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "isisceles trapezium",
      nextId: 'ineightMathscorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq10: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[11],
  },
],
},
ineightMathscorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"rhombus"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[11],
  },
],
},

//11
['eightMaths'+shuffleArraylottwo[11]]: {
botPrompt: '64 - x2 = ?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['(8+x)', '(8-x)', "both(a) and (b)","(8+x)(8-x)"]),
  answers: [
    {
      answer: '(8+x)',
      nextId: 'ineightMathscorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '(8-x)',
      nextId: 'ineightMathscorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "both (a) and (b)",
      nextId: 'ineightMathscorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "(8+x)(8-x))",
      nextId: 'eightMathscorrectq11',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq11: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[12],
  },
],
},
ineightMathscorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"(8+x)(8-x)"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[12],
  },
],
},

//12
['eightMaths'+shuffleArraylottwo[12]]: {
botPrompt: ' 3m = 5m - 8/5, then m = ?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['2/5', '3/5', "4/5","1/5"]),
  answers: [
    {
      answer: '2/5',
      nextId: 'ineightMathscorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '3/5',
      nextId: 'ineightMathscorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "4/5",
      nextId: 'eightMathscorrectq12',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "1/5",
      nextId: 'ineightMathscorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq12: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[13],
  },
],
},
ineightMathscorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4/5"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[13],
  },
],
},

//13
['eightMaths'+shuffleArraylottwo[13]]: {
botPrompt: ' (0.4225)^(1/2) = ?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['0.65', '65', "6.5","none of these"]),
  answers: [
    {
      answer: '0.65',
      nextId: 'eightMathscorrectq13',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: '65',
      nextId: 'ineightMathscorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "6.5",
      nextId: 'ineightMathscorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "none of these",
      nextId: 'ineightMathscorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq13: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[14],
  },
],
},
ineightMathscorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0.65"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[14],
  },
],
},

//14
['eightMaths'+shuffleArraylottwo[14]]: {
botPrompt: ' 0.0000123 written in standard form is ____________.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['123*10^-5', '123*10^5', "12.3*10^5","1.23*10^5"]),
  answers: [
    {
      answer: '123*10^-5',
      nextId: 'eightMathscorrectq14',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: '123*10^5',
      nextId: 'ineightMathscorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "12.3*10^5",
      nextId: 'ineightMathscorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "1.23*10^5",
      nextId: 'ineightMathscorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq14: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[15],
  },
],
},
ineightMathscorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"123*10^-5"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[15],
  },
],
},

//15
['eightMaths'+shuffleArraylottwo[15]]: {
botPrompt: '  A quadrilateral is a parallelogram if',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['its opposite sides are equal', 'its opposite angles are equal', "its diagonals bisect each other","all of these"]),
  answers: [
    {
      answer: 'its opposite sides are equal',
      nextId: 'ineightMathscorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'its opposite angles are equal',
      nextId: 'ineightMathscorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "its diagonals bisect each other",
      nextId: 'ineightMathscorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "all of these",
      nextId: 'eightMathscorrectq15',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq15: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[16],
  },
],
},
ineightMathscorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"all of these"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[16],
  },
],
},

//16
['eightMaths'+shuffleArraylottwo[16]]: {
botPrompt: '8a²b³ ÷ (-2ab) = ?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField([' ab²', '4a²b', "-4ab²","-4a²b"]),
  answers: [
    {
      answer: ' ab²',
      nextId: 'ineightMathscorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '4a²b',
      nextId: 'ineightMathscorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "-4ab²",
      nextId: 'eightMathscorrectq16',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "-4a²b",
      nextId: 'ineightMathscorrectq16',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq16: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[17],
  },
],
},
ineightMathscorrectq16: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"-4ab²"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[17],
  },
],
},

//17
['eightMaths'+shuffleArraylottwo[17]]: {
botPrompt: '(8/-15 + 4/-3) = ?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['28/15', '-28/15', "-4/5","-4/15"]),
  answers: [
    {
      answer: '28/15',
      nextId: 'ineightMathscorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '-28/15',
      nextId: 'eightMathscorrectq17',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "-4/5",
      nextId: 'ineightMathscorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "-4/15",
      nextId: 'ineightMathscorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq17: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[18],
  },
],
},
ineightMathscorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"-28/15"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[18],
  },
],
},

//18
['eightMaths'+shuffleArraylottwo[18]]: {
botPrompt: 'What is the sum of the interior angles of a hexagon?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['180° ', '360° ', "540° ","720° "]),
  answers: [
    {
      answer: '180° ',
      nextId: 'ineightMathscorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '360° ',
      nextId: 'ineightMathscorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "540° ",
      nextId: 'ineightMathscorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "720° ",
      nextId: 'eightMathscorrectq18',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightMathscorrectq18: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[19],
  },
],
},
ineightMathscorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"720° "</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[19],
  },
],
},

//19
['eightMaths'+shuffleArraylottwo[19]]: {
botPrompt: 'If a quadrilateral is a parallelogram, then its opposite angles are:',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Equal', 'Supplementary', "Complementary","Congruent"]),
  answers: [
    {
      answer: 'Equal',
      nextId: 'eightMathscorrectq19',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'Supplementary',
      nextId: 'ineightMathscorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Complementary",
      nextId: 'ineightMathscorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Congruent",
      nextId: 'ineightMathscorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq19: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[20],
  },
],
},
ineightMathscorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Equal"</strong>',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[20],
  },
],
},
//20
['eightMaths'+shuffleArraylottwo[20]]: {
botPrompt: 'What is the square root of 81²?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['81', '9', "729","6561"]),
  answers: [
    {
      answer: '81',
      nextId: 'ineightMathscorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: '9',
      nextId: 'eightMathscorrectq20',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "729",
      nextId: 'ineightMathscorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "6561",
      nextId: 'ineightMathscorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightMathscorrectq20: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightMaths'+shuffleArraylottwo[21],
  },
],
},
ineightMathscorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
answers: [
  {
    nextId: 'wishtocontinueeightMaths',
  },
],
},

wishtocontinueeightMaths: {
  botPrompt: 'You have Completed Maths. Do you Wish to Continue ?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', "No"]),
  answers: [
    {
      answer: 'Yes',
      nextId: 'chooseclass',
    },
    {
      answer: "No",
      nextId: 'endConv',
    },
  
  ],
},

//1
['eightEnglish'+shuffleArraylottwo[1]]: {
  botPrompt: 'Which option correctly converts the following declarative sentence from direct to indirect speech? Direct: She said, "I will meet you at the park tomorrow."',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['She said that she will meet you at the park tomorrow.', 'She said that she would meet you at the park the day after.', "She said that she will meet you at the park yesterday. ","She said that she meets you at the park tomorrow."]),
    answers: [
      {
        answer: 'She said that she will meet you at the park tomorrow.',
        nextId: 'ineightEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'She said that she would meet you at the park the day after.',
        nextId: 'eightEnglishcorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "She said that she will meet you at the park yesterday. ",
        nextId: 'ineightEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "She said that she meets you at the park tomorrow.",
        nextId: 'ineightEnglishcorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightEnglishcorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightEnglish'+shuffleArraylottwo[2],
    },
  ],
  },
  ineightEnglishcorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She said that she would meet you at the park the day after."</strong>',
  answers: [
    {
      nextId: 'eightEnglish'+shuffleArraylottwo[2],
    },
  ],
  },

//2
['eightEnglish'+shuffleArraylottwo[2]]: {
botPrompt: 'Identify the correct conversion of the interrogative sentence from direct to indirect speech: Direct: "Are you coming to the party tonight?" he asked. ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['He asked if you are coming to the party tonight. ', 'He asked if you were coming to the party that night.. ', "He asked if you are coming to the party tomorrow. ","He asked if you would come to the party tonight."]),
  answers: [
    {
      answer: 'He asked if you are coming to the party tonight. ',
      nextId: 'ineightEnglishcorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'He asked if you were coming to the party that night.. ',
      nextId: 'eightEnglishcorrectq2',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "He asked if you are coming to the party tomorrow. ",
      nextId: 'ineightEnglishcorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "He asked if you would come to the party tonight.",
      nextId: 'ineightEnglishcorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq2: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[3],
  },
],
},
ineightEnglishcorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He asked if you were coming to the party that night.. "</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[3],
  },
],
},

//3
['eightEnglish'+shuffleArraylottwo[3]]: {
botPrompt: 'Convert the imperative sentence from direct to indirect speech:',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['She asked to close the window politely. ', 'She said to please close the window.', "She requested to close the window. ","She told to please close the window."]),
  answers: [
    {
      answer: 'She asked to close the window politely. ',
      nextId: 'ineightEnglishcorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'She said to please close the window.',
      nextId: 'ineightEnglishcorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "She requested to close the window. ",
      nextId: 'eightEnglishcorrectq3',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "She told to please close the window.",
      nextId: 'ineightEnglishcorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq3: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[4],
  },
],
},
ineightEnglishcorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She requested to close the window. "</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[4],
  },
],
},

//4
['eightEnglish'+shuffleArraylottwo[4]]: {
botPrompt: 'Which option correctly changes the given exclamatory sentence from direct to indirect speech? Direct: "What a beautiful painting!" she exclaimed. ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['She exclaimed that it was a beautiful painting.', 'She exclaimed that what a beautiful painting it was.', "She exclaimed that it is a beautiful painting. ","She exclaimed what a beautiful painting it was."]),
  answers: [
    {
      answer: 'She exclaimed that it was a beautiful painting.',
      nextId: 'eightEnglishcorrectq4',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'She exclaimed that what a beautiful painting it was.',
      nextId: 'ineightEnglishcorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "She exclaimed that it is a beautiful painting. ",
      nextId: 'ineightEnglishcorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "She exclaimed what a beautiful painting it was.",
      nextId: 'ineightEnglishcorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq4: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[5],
  },
],
},
ineightEnglishcorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She exclaimed that it was a beautiful painting."</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[5],
  },
],
},

//5
['eightEnglish'+shuffleArraylottwo[5]]: {
botPrompt: 'Convert the mixed sentence from direct to indirect speech: Direct: "Can you believe it?" Tom said. "He won the race!" ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Tom said in amazement if you can believe it, he won the race. ', 'b) Tom asked in astonishment if you could believe it, he had won the race.   ', "Tom asked in disbelief if you can believe it, he won the race.  ","Tom exclaimed in wonder if you could believe it, he won the race."]),
  answers: [
    {
      answer: 'Tom said in amazement if you can believe it, he won the race. ',
      nextId: 'ineightEnglishcorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'Tom asked in astonishment if you could believe it, he had won the race. ',
      nextId: 'eightEnglishcorrectq5',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "Tom asked in disbelief if you can believe it, he won the race. ",
      nextId: 'ineightEnglishcorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Tom exclaimed in wonder if you could believe it, he won the race.",
      nextId: 'ineightEnglishcorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq5: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[6],
  },
],
},
ineightEnglishcorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Tom asked in astonishment if you could believe it, he had won the race.   "</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[6],
  },
],
},

//6
['eightEnglish'+shuffleArraylottwo[6]]: {
botPrompt: "Abhilash inquired if Neha's best friend was assisting her in the venture related to the inauguration of Neha’s Dance Academy. What was Abhilash's question?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['"Is your best friend assisting you in this venture?"', ' "Is your best friend helping you inaugurate Neha’s Dance Academy?"',' "Are you getting assistance from your best friend for the inauguration?" ',"Is your best friend participating in the venture's inauguration?" ]),
  answers: [
    {
      answer: '"Is your best friend assisting you in this venture?"',
      nextId: 'eightEnglishcorrectq6',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: ' "Is your best friend helping you inaugurate Neha’s Dance Academy?"',
      nextId: 'ineightEnglishcorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: ' "Are you getting assistance from your best friend for the inauguration?" ',
      nextId: 'ineightEnglishcorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Is your best friend participating in the venture's inauguration?",
      nextId: 'eightEnglishcorrectq6',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightEnglishcorrectq6: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[7],
  },
],
},
ineightEnglishcorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>""Is your best friend assisting you in this venture?""</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[7],
  },
],
},

//7
['eightEnglish'+shuffleArraylottwo[7]]: {
botPrompt: 'How should we complete the sentence to correctly conclude a circular issued by an organization to its Managers? "A copy of the plan is enclosed and _________ may be communicated to all Team Leaders for compliance."',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['this', 'then', "that","those"]),
  answers: [
    {
      answer: 'this',
      nextId: 'eightEnglishcorrectq7',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'then',
      nextId: 'ineightEnglishcorrectq7',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "that",
      nextId: 'ineightEnglishcorrectq7',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "those",
      nextId: 'ineightEnglishcorrectq7',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq7: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[8],
  },
],
},
ineightEnglishcorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"this"</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[8],
  },
],
},

//8
['eightEnglish'+shuffleArraylottwo[8]]: {
botPrompt: 'Which option correctly fills the blank to complete the given narrative? "The experience of nursing an injured bird left me _____________ grateful for knowing the importance of being kind and compassionate to all creatures."',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['felt', 'feeling', "feels","have felt"]),
  answers: [
    {
      answer: 'felt',
      nextId: 'ineightEnglishcorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'feeling',
      nextId: 'eightEnglishcorrectq8',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "feels",
      nextId: 'ineightEnglishcorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "have felt",
      nextId: 'ineightEnglishcorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq8: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[9],
  },
],
},
ineightEnglishcorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"feeling"</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[9],
  },
],
},

//9
['eightEnglish'+shuffleArraylottwo[9]]: {
botPrompt: 'How can we accurately complete the reporting of a dialogue between a vendor and his customer? The vendor greeted his customer respectfully and mentioned that he was pleased to see him. The customer answered in the affirmative and explained that ______________________',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['he was pleased to be back this month.', ' he had been away for quite some time that month.', "he is glad to visit the vendor again this month.","he hadn't visited the vendor in a while."]),
  answers: [
    {
      answer: 'he was pleased to be back this month.',
      nextId: 'ineightEnglishcorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: ' he had been away for quite some time that month.',
      nextId: 'eightEnglishcorrectq9',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "he is glad to visit the vendor again this month.",
      nextId: 'ineightEnglishcorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "he hadn't visited the vendor in a while.",
      nextId: 'ineightEnglishcorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq9: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[10],
  },
],
},
ineightEnglishcorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>" he had been away for quite some time that month."</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[10],
  },
],
},

//10
['eightEnglish'+shuffleArraylottwo[10]]: {
botPrompt: "Complete the sentence to correctly announce the first prize in a regional competition for a school's music club.       The regional competition awards have been announced and our school music club _________ the first prize.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['had won', 'wins', "will win","winning"]),
  answers: [
    {
      answer: 'had won',
      nextId: 'ineightEnglishcorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'wins',
      nextId: 'eightEnglishcorrectq10',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "will win",
      nextId: 'ineightEnglishcorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "winning",
      nextId: 'ineightEnglishcorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq10: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[11],
  },
],
},
ineightEnglishcorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"wins"</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[11],
  },
],
},

//11
['eightEnglish'+shuffleArraylottwo[11]]: {
botPrompt: 'Find the grammatical error in the sentence and choose the corrected sentence: "John is good in playing the guitar."',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['John is better  in playing the guitar.', 'John is good in playing the guiter.', "John is good in playing guitar.","John is good at playing the guitar."]),
  answers: [
    {
      answer: 'John is better  in playing the guitar.',
      nextId: 'ineightEnglishcorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'John is good in playing the guiter.',
      nextId: 'ineightEnglishcorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "John is good in playing guitar.",
      nextId: 'ineightEnglishcorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "John is good at playing the guitar.",
      nextId: 'eightEnglishcorrectq11',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightEnglishcorrectq11: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[12],
  },
],
},
ineightEnglishcorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"John is good at playing the guitar."</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[12],
  },
],
},

//12
['eightEnglish'+shuffleArraylottwo[12]]: {
botPrompt: 'Find the grammatical error in the sentence and choose the corrected sentence: "The book is laying on the table waiting to be read."',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['The book is laying in the table waiting to be read.', 'The book is laying under  the table waiting to be read.', "The book is lying on the table waiting to be read.","35"]),
  answers: [
    {
      answer: 'The book is laying in the table waiting to be read.',
      nextId: 'ineightEnglishcorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'The book is laying under  the table waiting to be read.',
      nextId: 'ineightEnglishcorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "The book is lying on the table waiting to be read.",
      nextId: 'eightEnglishcorrectq12',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "The book is laying on table waiting to be read.",
      nextId: 'ineightEnglishcorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq12: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[13],
  },
],
},
ineightEnglishcorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The book is lying on the table waiting to be read."</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[13],
  },
],
},

//13
['eightEnglish'+shuffleArraylottwo[13]]: {
botPrompt: 'Find the grammatical error in the sentence and choose the corrected sentence: "He enjoys to play soccer every Saturday afternoon."',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['He enjoys playing soccer every Saturday afternoon.', 'He enjoys to play soccer all the Saturday afternoon.', "He always  enjoys to play soccer every Saturday afternoon.","He enjoys to play soccer  Saturday afternoons."]),
  answers: [
    {
      answer: 'He enjoys playing soccer every Saturday afternoon.',
      nextId: 'eightEnglishcorrectq13',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'He enjoys to play soccer all the Saturday afternoon.',
      nextId: 'ineightEnglishcorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "He always  enjoys to play soccer every Saturday afternoon.",
      nextId: 'ineightEnglishcorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "He enjoys to play soccer  Saturday afternoons. ",
      nextId: 'eightEnglishcorrectq13',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightEnglishcorrectq13: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[14],
  },
],
},
ineightEnglishcorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"He enjoys playing soccer every Saturday afternoon."</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[14],
  },
],
},

//14
['eightEnglish'+shuffleArraylottwo[14]]: {
botPrompt: 'Identify the correct passive voice transformation of the sentence: "They have bought a new car."',
type: RTypes.TRANSFORMED_TEXT,

input: selectField([' A new car has been bought by them.', 'A new car was bought by them.', "A new car is bought by them.","A new car will be bought by them."]),
  answers: [
    {
      answer: ' A new car has been bought by them.',
      nextId: 'eightEnglishcorrectq14',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'A new car was bought by them.',
      nextId: 'ineightEnglishcorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "A new car is bought by them.",
      nextId: 'ineightEnglishcorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "A new car will be bought by them.",
      nextId: 'ineightEnglishcorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq14: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[15],
  },
],
},
ineightEnglishcorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>" A new car has been bought by them."</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[15],
  },
],
},

//15
['eightEnglish'+shuffleArraylottwo[15]]: {
botPrompt: 'Identify the correct passive voice transformation of the sentence: "The report had been prepared by the team."',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['The team prepares the report.', 'The team had prepared the report.', "The team was preparing the report.","The team prepared the report."]),
  answers: [
    {
      answer: 'The team prepares the report.',
      nextId: 'ineightEnglishcorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'The team had prepared the report.',
      nextId: 'ineightEnglishcorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "The team was preparing the report.",
      nextId: 'ineightEnglishcorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "The team prepared the report.",
      nextId: 'eightEnglishcorrectq15',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
  ],
},

eightEnglishcorrectq15: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[16],
  },
],
},
ineightEnglishcorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The team prepared the report."</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[16],
  },
],
},

//16
['eightEnglish'+shuffleArraylottwo[16]]: {
botPrompt: 'In a few years, she __________ to five different countries.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['will have traveled', 'traveled', "travels","will travel"]),
  answers: [
    {
      answer: 'will have traveled',
      nextId: 'eightEnglishcorrectq16',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'traveled',
      nextId: 'ineightEnglishcorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "travels",
      nextId: 'ineightEnglishcorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "will travel",
      nextId: 'ineightEnglishcorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq16: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[17],
  },
],
},
ineightEnglishcorrectq16: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"will have traveled"</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[17],
  },
],
},

//17
['eightEnglish'+shuffleArraylottwo[17]]: {
botPrompt: 'By the time I arrived, they __________ dinner.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['were eating', 'have eaten', "are eating","will eat"]),
  answers: [
    {
      answer: 'were eating',
      nextId: 'eightEnglishcorrectq17',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'have eaten',
      nextId: 'ineightEnglishcorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "are eating",
      nextId: 'ineightEnglishcorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "will eat",
      nextId: 'ineightEnglishcorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq17: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[18],
  },
],
},
ineightEnglishcorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"were eating"</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[18],
  },
],
},

//18
['eightEnglish'+shuffleArraylottwo[18]]: {
botPrompt: 'If you __________ to the party, I will be disappointed.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(["don't come", 'not come', "won't come","not coming"]),
  answers: [
    {
      answer: "don't come",
      nextId: 'eightEnglishcorrectq18',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'not come',
      nextId: 'ineightEnglishcorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "won't come",
      nextId: 'ineightEnglishcorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "not coming",
      nextId: 'ineightEnglishcorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq18: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[19],
  },
],
},
ineightEnglishcorrectq18: {
botPrompt: "You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>don't come</strong>",
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[19],
  },
],
},

//19
['eightEnglish'+shuffleArraylottwo[19]]: {
botPrompt: 'They __________ in that house for over a decade before moving.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['had lived', 'lived', "have lived","were living"]),
  answers: [
    {
      answer: 'had lived',
      nextId: 'eightEnglishcorrectq19',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'lived',
      nextId: 'ineightEnglishcorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "have lived",
      nextId: 'ineightEnglishcorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "were living",
      nextId: 'ineightEnglishcorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq19: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[20],
  },
],
},
ineightEnglishcorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"had lived"</strong>',
answers: [
  {
    nextId: 'eightEnglish'+shuffleArraylottwo[20],
  },
],
},

//20
['eightEnglish'+shuffleArraylottwo[20]]: {
botPrompt: 'I wish I __________ harder for the exam last year.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['would study', 'have studied', "had studied","will study"]),
  answers: [
    {
      answer: 'would study',
      nextId: 'ineightEnglishcorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'have studied',
      nextId: 'ineightEnglishcorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "had studied",
      nextId: 'eightEnglishcorrectq20',
      sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "will study",
      nextId: 'eightEnglishcorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

eightEnglishcorrectq20: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'wishtocontinueeightEnglish',
  },
],
},
ineightEnglishcorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"had studied"</strong>',
answers: [
  {
    nextId: 'wishtocontinueeightEnglish',
  },
],
},

wishtocontinueeightEnglish: {
  botPrompt: 'You have Completed English. Do you Wish to Continue ?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Yes', "No"]),
  answers: [
    {
      answer: 'Yes',
      nextId: 'chooseclass',
    },
    {
      answer: "No",
      nextId: 'endConv',
    },
  
  ],
},

//1
['eightScience'+shuffleArraylottwo[1]]: {
  botPrompt: 'Which of the following is a non-metal?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Copper', 'Iron', "Oxygen","Gold"]),
    answers: [
      {
        answer: 'Copper',
        nextId: 'ineightSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Iron',
        nextId: 'ineightSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Oxygen",
        nextId: 'eightSciencecorrectq1',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Gold",
        nextId: 'ineightSciencecorrectq1',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq1: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[2],
    },
  ],
  },
  ineightSciencecorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"oxygen"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[2],
    },
  ],
  },


  //2
['eightScience'+shuffleArraylottwo[2]]: {
  botPrompt: 'Which metal is the best conductor of electricity?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['SIlver', 'Aluminum', "Copper","Gold"]),
    answers: [
      {
        answer: 'Silver',
        nextId: 'eightSciencecorrectq2',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Aluminum',
        nextId: 'ineightSciencecorrectq2',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Copper",
        nextId: 'ineightSciencecorrectq2',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Gold",
        nextId: 'ineightSciencecorrectq2',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq2: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[3],
    },
  ],
  },
  ineightSciencecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Silver"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[3],
    },
  ],
  },


  //3
['eightScience'+shuffleArraylottwo[3]]: {
  botPrompt: 'Which fossil fuel is primarily used in vehicles for transportation?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Coal', 'Natural Gas', "Petroleum","Peat"]),
    answers: [
      {
        answer: 'Coal',
        nextId: 'ineightSciencecorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Natural Gas',
        nextId: 'ineightSciencecorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Petruleum",
        nextId: 'eightSciencecorrectq3',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Peat",
        nextId: 'ineightSciencecorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq3: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[4],
    },
  ],
  },
  ineightSciencecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Petruleum"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[4],
    },
  ],
  },

  //4
['eightScience'+shuffleArraylottwo[4]]: {
  botPrompt: ' What is the main component of natural gas?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Methane', 'Ethane', "Propane","Butane"]),
    answers: [
      {
        answer: 'Methane',
        nextId: 'eightSciencecorrectq4',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Ethane',
        nextId: 'ineightSciencecorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Propane",
        nextId: 'ineightSciencecorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Butane",
        nextId: 'ineightSciencecorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq4: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[5],
    },
  ],
  },
  ineightSciencecorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Methane"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[5],
    },
  ],
  },

  //5
['eightScience'+shuffleArraylottwo[5]]: {
  botPrompt: 'What is the chemical process of burning called?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Evaporation', 'Combustion', "Condensation","Sublimatiom"]),
    answers: [
      {
        answer: 'Evaporation',
        nextId: 'ineightSciencecorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Combustion',
        nextId: 'eightSciencecorrectq5',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Condesation",
        nextId: 'ineightSciencecorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Sublimation",
        nextId: 'ineightSciencecorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq5: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[6],
    },
  ],
  },
  ineightSciencecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Combustion"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[6],
    },
  ],
  },

  //6
['eightScience'+shuffleArraylottwo[6]]: {
  botPrompt: 'Which gas is produced during the combustion of fossil fuels and is a major contributor to air pollution? ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Oxygen', 'Nitrogen', "Carbon dioxide","Hydrogen"]),
    answers: [
      {
        answer: 'Oxygen',
        nextId: 'ineightSciencecorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Nitrogen',
        nextId: 'ineightSciencecorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Carbon dioxide",
        nextId: 'eightSciencecorrectq6',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Hydrogen",
        nextId: 'ineightSciencecorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq6: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[7],
    },
  ],
  },
  ineightSciencecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Carbon dioxide"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[7],
    },
  ],
  },

  //7
['eightScience'+shuffleArraylottwo[7]]: {
  botPrompt: 'Which SI unit is used to measure force?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Joule', 'Newton', "Watt","Volt"]),
    answers: [
      {
        answer: 'Joule',
        nextId: 'ineightSciencecorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Newton',
        nextId: 'eightSciencecorrectq7',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Watt",
        nextId: 'ineightSciencecorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Volt",
        nextId: 'ineightSciencecorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq7: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[8],
    },
  ],
  },
  ineightSciencecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Newton"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[8],
    },
  ],
  },

  //8
['eightScience'+shuffleArraylottwo[8]]: {
  botPrompt: 'Pressure is defined as the force applied per unit:',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Volume', 'Time', "Area","Mass"]),
    answers: [
      {
        answer: 'Volume',
        nextId: 'ineightSciencecorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Time',
        nextId: 'ineightSciencecorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Area",
        nextId: 'eightSciencecorrectq8',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Mass",
        nextId: 'ineightSciencecorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq8: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[9],
    },
  ],
  },
  ineightSciencecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Area"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[9],
    },
  ],
  },

  //9
['eightScience'+shuffleArraylottwo[9]]: {
  botPrompt: 'Friction is a force that opposes:',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Gravity', 'Motion', "Heat transfer","Magnetism"]),
    answers: [
      {
        answer: 'Gravity',
        nextId: 'ineightSciencecorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Motion',
        nextId: 'eightSciencecorrectq9',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Heat transfer",
        nextId: 'ineightSciencecorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Magnetism",
        nextId: 'ineightSciencecorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq9: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[10],
    },
  ],
  },
  ineightSciencecorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Motion"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[10],
    },
  ],
  },

  //10
['eightScience'+shuffleArraylottwo[10]]: {
  botPrompt: 'To reduce friction between moving parts of machinery, which substance is commonly used as a lubricant?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Sand', 'Oil', "Rubber","Wood"]),
    answers: [
      {
        answer: 'Sand',
        nextId: 'ineightSciencecorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Oil',
        nextId: 'eightSciencecorrectq10',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Rubber",
        nextId: 'ineightSciencecorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Wood",
        nextId: 'ineightSciencecorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq10: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[11],
    },
  ],
  },
  ineightSciencecorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Oil"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[11],
    },
  ],
  },

  //11
['eightScience'+shuffleArraylottwo[11]]: {
  botPrompt: 'Sound waves travel fastest in:',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Air', 'Water', "Vaccum","Steel"]),
    answers: [
      {
        answer: 'Air',
        nextId: 'ineightSciencecorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Water',
        nextId: 'ineightSciencecorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Vaccum",
        nextId: 'ineightSciencecorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Steel",
        nextId: 'eightSciencecorrectq11',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq11: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[12],
    },
  ],
  },
  ineightSciencecorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Steel"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[12],
    },
  ],
  },

  //12
['eightScience'+shuffleArraylottwo[12]]: {
  botPrompt: 'Which part of the human ear amplifies sound vibrations?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Earlobe', 'Eardrum', "Cochlea","Ear Canel"]),
    answers: [
      {
        answer: 'Earlobe',
        nextId: 'ineightSciencecorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Eardrum',
        nextId: 'eightSciencecorrectq12',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Cochlea",
        nextId: 'ineightSciencecorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Ear Canel",
        nextId: 'ineightSciencecorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq12: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[13],
    },
  ],
  },
  ineightSciencecorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Eardrum"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[13],
    },
  ],
  },

  //13
['eightScience'+shuffleArraylottwo[13]]: {
  botPrompt: 'In which process does a solid change directly into a gas without passing through the liquid state?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Sublimation', 'Fusion', "Evaporation","Condensation"]),
    answers: [
      {
        answer: 'Sublimation',
        nextId: 'eightSciencecorrectq13',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Fusion',
        nextId: 'ineightSciencecorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Evaporation",
        nextId: 'ineightSciencecorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Condensation",
        nextId: 'ineightSciencecorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq13: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[14],
    },
  ],
  },
  ineightSciencecorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sublimation"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[14],
    },
  ],
  },

  //14
['eightScience'+shuffleArraylottwo[14]]: {
  botPrompt: 'What is the chemical process that occurs during electroplating?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Oxidation', 'Reduction', "Electrolysis","Precipitation"]),
    answers: [
      {
        answer: 'Oxidation',
        nextId: 'ineightSciencecorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Reduction',
        nextId: 'ineightSciencecorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Electrolysis",
        nextId: 'eightSciencecorrectq14',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Precipitation",
        nextId: 'ineightSciencecorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq14: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[15],
    },
  ],
  },
  ineightSciencecorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Electrolysis"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[15],
    },
  ],
  },

  //15
['eightScience'+shuffleArraylottwo[15]]: {
  botPrompt: 'Which of the following nutrients is typically required in the highest quantity for plant growth?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Nitrogen', 'Phosphorus', "Potassium","Iron"]),
    answers: [
      {
        answer: 'Nitrogen',
        nextId: 'eightSciencecorrectq15',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Phosphorus',
        nextId: 'ineightSciencecorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Potassium",
        nextId: 'ineightSciencecorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Iron",
        nextId: 'ineightSciencecorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq15: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[16],
    },
  ],
  },
  ineightSciencecorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Nitrogen"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[16],
    },
  ],
  },

  //16
['eightScience'+shuffleArraylottwo[16]]: {
  botPrompt: 'Which genetic material can viruses possess?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Both DNA and RNA', 'DNA only', "RNA only","Neither DNA nor RNA"]),
    answers: [
      {
        answer: 'Both DNA and RNA ',
        nextId: 'eightSciencecorrectq16',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'DNA only',
        nextId: 'ineightSciencecorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "RNA only",
        nextId: 'ineightSciencecorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Neither DNA nor RNA",
        nextId: 'ineightSciencecorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq16: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[17],
    },
  ],
  },
  ineightSciencecorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Both DNA and RNA"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[17],
    },
  ],
  },

  //17
['eightScience'+shuffleArraylottwo[17]]: {
  botPrompt: 'What does the term "endangered species" mean in conservation biology?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Species that are thriving and not at risk', 'Species that are critically threatened with extinction', "Species that are invasive and harmful to ecosystems","Species that are rare but not necessarily at risk of extinction"]),
    answers: [
      {
        answer: 'Species that are thriving and not at risk',
        nextId: 'ineightSciencecorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Species that are critically threatened with extinction',
        nextId: 'eightSciencecorrectq17',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Species that are invasive and harmful to ecosystems",
        nextId: 'ineightSciencecorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Species that are rare but not necessarily at risk of extinction",
        nextId: 'ineightSciencecorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq17: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[18],
    },
  ],
  },
  ineightSciencecorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Species that are critically threatened with extinction"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[18],
    },
  ],
  },

  //18
['eightScience'+shuffleArraylottwo[18]]: {
  botPrompt: 'What is the difference between a free ribosome and a bound ribosome',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Free ribosomes are found in the cytoplasm, while bound ribosomes are attached to the endoplasmic reticulum.', 'Free ribosomes are larger than bound ribosomes.', "Free ribosomes are involved in DNA replication, while bound ribosomes are involved in transcription.","There is no difference between free and bound ribosomes."]),
    answers: [
      {
        answer: 'Free ribosomes are found in the cytoplasm, while bound ribosomes are attached to the endoplasmic reticulum.',
        nextId: 'eightSciencecorrectq18',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: 'Free ribosomes are larger than bound ribosomes.',
        nextId: 'ineightSciencecorrectq18',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Free ribosomes are involved in DNA replication, while bound ribosomes are involved in transcription.",
        nextId: 'ineightSciencecorrectq18',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "There is no difference between free and bound ribosomes.",
        nextId: 'ineightSciencecorrectq18',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq18: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[19],
    },
  ],
  },
  ineightSciencecorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Free ribosomes are found in the cytoplasm, while bound ribosomes are attached to the endoplasmic reticulum."</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[19],
    },
  ],
  },

  //19
['eightScience'+shuffleArraylottwo[19]]: {
  botPrompt: 'Which hormone is responsible for stimulating the development of secondary sexual characteristics in males, such as facial hair and a deepened voice?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Estrogen', 'Progesterone', "Luteinizing hormone(LH)","Testosterone"]),
    answers: [
      {
        answer: 'Estrogen',
        nextId: 'ineightSciencecorrectq19',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Progesterone',
        nextId: 'ineightSciencecorrectq19',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Luteinizing hormone(LH)",
        nextId: 'ineightSciencecorrectq19',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Testosterone",
        nextId: 'eightSciencecorrectq19',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq19: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[20],
    },
  ],
  },
  ineightSciencecorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Testosterone"</strong>',
  answers: [
    {
      nextId: 'eightScience'+shuffleArraylottwo[20],
    },
  ],
  },

  //20
['eightScience'+shuffleArraylottwo[20]]: {
  botPrompt: 'What is the main source of nutrient pollution in bodies of water, leading to issues like harmful algal blooms?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Industrial chemicals', 'Air pollution', "Excessive fertilizer runoff","Oil spills"]),
    answers: [
      {
        answer: 'Industrial chemicals',
        nextId: 'ineightSciencecorrectq20',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: 'Air pollution',
        nextId: 'ineightSciencecorrectq20',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
      {
        answer: "Excessive fertilizer runoff",
        nextId: 'eightSciencecorrectq20',
        sumToBags: [{ name: 'ac', points: 1 }],
      },
      {
        answer: "Oil spills",
        nextId: 'ineightSciencecorrectq20',
        sumToBags: [{ name: 'ai', points: 1 }],
      },
    ],
  },
  
  eightSciencecorrectq20: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontineueightScience',
    },
  ],
  },
  ineightSciencecorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Excessive fertilizer runoff"</strong>',
  answers: [
    {
      nextId: 'wishtocontinueeightScience',
    },
  ],
  },

  wishtocontinueeightScience: {
    botPrompt: 'You have Completed Science. Do you Wish to Continue ?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Yes', "No"]),
    answers: [
      {
        answer: 'Yes',
        nextId: 'chooseclass',
      },
      {
        answer: "No",
        nextId: 'endConv',
      },
    
    ],
  },

//shuffletwoend

  

}
export default questions;

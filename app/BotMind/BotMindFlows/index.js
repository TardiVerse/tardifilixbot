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
    },
    {
      answer: 'are',
      nextId: 'inflncorrect',
    },
    {
      answer: "here",
      nextId: 'inflncorrect',
    },
    {
      answer: "where",
      nextId: 'inflncorrect',
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
    },
    {
      answer: 'is',
      nextId: 'inflncorrectq2',
    },
    {
      answer: "here",
      nextId: 'inflncorrectq2',
    },
    {
      answer: "where",
      nextId: 'inflncorrectq2',
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
    },
    {
      answer: 'is',
      nextId: 'inflncorrectq3',
    },
    {
      answer: "here",
      nextId: 'inflncorrectq3',
    },
    {
      answer: "where",
      nextId: 'inflncorrectq3',
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
    },
    {
      answer: 'are',
      nextId: 'inflncorrectq4',
    },
    {
      answer: "here",
      nextId: 'inflncorrectq4',
    },
    {
      answer: "where",
      nextId: 'inflncorrectq4',
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
    },
    {
      answer: 'is',
      nextId: 'inflncorrectq5',
    },
    {
      answer: "here",
      nextId: 'inflncorrectq5',
    },
    {
      answer: "where",
      nextId: 'inflncorrectq5',
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
        },
        {
          answer: '2',
          nextId: 'inflncorrectq6',
        },
        {
          answer: "6",
          nextId: 'inflncorrectq6',
        },
        {
          answer: "5",
          nextId: 'flncorrectq6',
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
        },
        {
          answer: '4',
          nextId: 'inflncorrectq7',
        },
        {
          answer: "5",
          nextId: 'inflncorrectq7',
        },
        {
          answer: "7",
          nextId: 'flncorrectq7',
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
        },
        {
          answer: '4',
          nextId: 'inflncorrectq8',
        },
        {
          answer: "6",
          nextId: 'flncorrectq8',
        },
        {
          answer: "7",
          nextId: 'inflncorrectq8',
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
        },
        {
          answer: '13',
          nextId: 'inflncorrectq9',
        },
        {
          answer: "16",
          nextId: 'inflncorrectq9',
        },
        {
          answer: "17",
          nextId: 'inflncorrectq9',
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
        },
        {
          answer: '11',
          nextId: 'inflncorrectq10',
        },
        {
          answer: "13",
          nextId: 'flncorrectq10',
        },
        {
          answer: "10",
          nextId: 'inflncorrectq10',
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
        },
        {
          answer: '16',
          nextId: 'inflncorrectq11',
        },
        {
          answer: "7",
          nextId: 'inflncorrectq11',
        },
        {
          answer: "17",
          nextId: 'flncorrectq11',
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
      },
      {
        answer: 'And',
        nextId: 'flncorrectq12',
      },
      {
        answer: "Or",
        nextId: 'inflncorrectq12',
      },
      {
        answer: "Not",
        nextId: 'inflncorrectq12',
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
        },
        {
          answer: 'book or pen',
          nextId: 'inflncorrectq13',
        },
        {
          answer: "book not pen",
          nextId: 'inflncorrectq13',
        },
        {
          answer: "book but pen",
          nextId: 'inflncorrectq13',
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
      },
      {
        answer: 'And',
        nextId: 'flncorrectq14',
      },
      {
        answer: "Or",
        nextId: 'inflncorrectq14',
      },
      {
        answer: "Not",
        nextId: 'inflncorrectq14',
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
      },
      {
        answer: 'And',
        nextId: 'flncorrectq15',
      },
      {
        answer: "Or",
        nextId: 'inflncorrectq15',
      },
      {
        answer: "Not",
        nextId: 'inflncorrectq15',
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
        },
        {
          answer: 'flower or butterfly',
          nextId: 'inflncorrectq16',
        },
        {
          answer: "flower not butterfly",
          nextId: 'inflncorrectq16',
        },
        {
          answer: "flower but butterfly",
          nextId: 'inflncorrectq16',
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
      },
      {
        answer: 'Funny',
        nextId: 'inflncorrectq17',
      },
      {
        answer: "Brave",
        nextId: 'inflncorrectq17',
      },
      {
        answer: "Angry",
        nextId: 'inflncorrectq17',
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
    },
    {
      answer: 'Soft',
      nextId: 'inflncorrectq18',
    },
    {
      answer: "Loud",
      nextId: 'flncorrectq18',
    },
    {
      answer: "Near",
      nextId: 'inflncorrectq18',
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
    },
    {
      answer: 'Fast',
      nextId: 'inflncorrectq19',
    },
    {
      answer: "Thin",
      nextId: 'flncorrectq19',
    },
    {
      answer: "Tall",
      nextId: 'inflncorrectq19',
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
    },
    {
      answer: 'Young',
      nextId: 'inflncorrectq20',
    },
    {
      answer: "Soft",
      nextId: 'inflncorrectq20',
    },
    {
      answer: "Full",
      nextId: 'inflncorrectq20',
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
    },
    {
      answer: 'young',
      nextId: 'flncorrectq22',
    },
    {
      answer: "Loud",
      nextId: 'inflncorrectq22',
    },
    {
      answer: "Bright",
      nextId: 'inflncorrectq22',
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
    },
    {
      answer: 'Young',
      nextId: 'inflncorrectq23',
    },
    {
      answer: "girl",
      nextId: 'flncorrectq23',
    },
    {
      answer: "Full",
      nextId: 'inflncorrectq23',
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
    },
    {
      answer: 'Young',
      nextId: 'inflncorrectq24',
    },
    {
      answer: "Soft",
      nextId: 'inflncorrectq24',
    },
    {
      answer: "salt",
      nextId: 'inflncorrectq24',
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
      },
      {
        answer: '2',
        nextId: 'inonceTensHundredscorrectq25',
      },
      {
        answer: "4",
        nextId: 'onceTensHundredscorrectq25',
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq25',
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
      },
      {
        answer: '7',
        nextId: 'onceTensHundredscorrectq26',
      },
      {
        answer: "9",
        nextId: 'inonceTensHundredscorrectq26',
      },
      {
        answer: "0",
        nextId: 'inonceTensHundredscorrectq26',
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
        },
        {
          answer: '4',
          nextId: 'inonceTensHundredscorrectq27',
        },
        {
          answer: "8",
          nextId: 'inonceTensHundredscorrectq27',
        },
        {
          answer: "0",
          nextId: 'inonceTensHundredscorrectq27',
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
      },
      {
        answer: '10',
        nextId: 'inonceTensHundredscorrectq28',
      },
      {
        answer: "11",
        nextId: 'onceTensHundredscorrectq28',
      },
      {
        answer: "12",
        nextId: 'inonceTensHundredscorrectq28',
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
        },
        {
          answer: '10',
          nextId: 'inonceTensHundredscorrectq29',
        },
        {
          answer: "15",
          nextId: 'onceTensHundredscorrectq29',
        },
        {
          answer: "18",
          nextId: 'inonceTensHundredscorrectq29',
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
    botPrompt: 'What is the number formed by the digits 5, 2, and 8?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['285', '582', "258","852"]),
    answers: [
      {
        answer: '285',
        nextId: 'inonceTensHundredscorrectq30',
      },
      {
        answer: '582',
        nextId: 'inonceTensHundredscorrectq30',
      },
      {
        answer: "258",
        nextId: 'onceTensHundredscorrectq30',
      },
      {
        answer: "852",
        nextId: 'inonceTensHundredscorrectq30',
      },
    ],
    },
  
    onceTensHundredscorrectq30: {
    botPrompt: 'Hurray! <strong>258</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[30],
      },
    ],
    },
    inonceTensHundredscorrectq30: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"258"</strong>',
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
        },
        {
          answer: '9',
          nextId: 'inonceTensHundredscorrectq31',
        },
        {
          answer: "10",
          nextId: 'onceTensHundredscorrectq31',
        },
        {
          answer: "13",
          nextId: 'inonceTensHundredscorrectq31',
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
    botPrompt: 'What is the number formed by the digits 4, 6, and 2?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['642', '426', "264","462"]),
    answers: [
      {
        answer: '642',
        nextId: 'inonceTensHundredscorrectq32',
      },
      {
        answer: '426',
        nextId: 'inonceTensHundredscorrectq32',
      },
      {
        answer: "264",
        nextId: 'inonceTensHundredscorrectq32',
      },
      {
        answer: "462",
        nextId: 'onceTensHundredscorrectq32',
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
      },
      {
        answer: '10',
        nextId: 'onceTensHundredscorrectq33',
      },
      {
        answer: "11",
        nextId: 'inonceTensHundredscorrectq33',
      },
      {
        answer: "12",
        nextId: 'inonceTensHundredscorrectq33',
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
    botPrompt: 'What is the number formed by the digits 9, 0, and 1?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['109', '901', "190","910"]),
      answers: [
        {
          answer: '109',
          nextId: 'inonceTensHundredscorrectq34',
        },
        {
          answer: '901',
          nextId: 'inonceTensHundredscorrectq34',
        },
        {
          answer: "190",
          nextId: 'onceTensHundredscorrectq34',
        },
        {
          answer: "910",
          nextId: 'inonceTensHundredscorrectq34',
        },
      ],
    },
    
    onceTensHundredscorrectq34: {
    botPrompt: 'Hurray! <strong>190</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[34],
      },
    ],
    },
    inonceTensHundredscorrectq34: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"190"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[34],
      },
    ],
    },
    
    
    //35
    ['fln'+shuffleArraylot[34]]: {
    botPrompt: 'What is the sum of digits at the units place and tens place in the number 48?',
    type: RTypes.TRANSFORMED_TEXT,
    
  
    input: selectField(['6', '8', "10","12"]),
    answers: [
      {
        answer: '6',
        nextId: 'inonceTensHundredscorrectq35',
      },
      {
        answer: '8',
        nextId: 'inonceTensHundredscorrectq35',
      },
      {
        answer: "10",
        nextId: 'inonceTensHundredscorrectq35',
      },
      {
        answer: "12",
        nextId: 'onceTensHundredscorrectq35',
      },
    ],
    },
    
    onceTensHundredscorrectq35: {
    botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[35],
      },
    ],
    },
    inonceTensHundredscorrectq35: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[35],
      },
    ],
    },
    
    //36
    ['fln'+shuffleArraylot[35]]: {
      botPrompt: 'What is the number formed by the digits 6, 3, and 7?',
      type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['367', '376', '736','763']),
    answers: [
      {
        answer: '367',
        nextId: 'onceTensHundredscorrectq36',
      },
      {
        answer: '376',
        nextId: 'inonceTensHundredscorrectq36',
      },
      {
        answer: '736',
        nextId: 'inonceTensHundredscorrectq36',
      },
      {
        answer: '763',
        nextId: 'inonceTensHundredscorrectq36',
      },
    ],
    },
    onceTensHundredscorrectq36: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>367</strong> 😎',
      answers: [
        {
          nextId: 'fln'+shuffleArraylot[36],
        },
      ],
    },
    inonceTensHundredscorrectq36: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"367"</strong>',
      answers: [
        {
          nextId: 'fln'+shuffleArraylot[36],
        },
      ],
    },
    
    //37
    ['fln'+shuffleArraylot[36]]: {
    botPrompt: 'Which of the following is the sum of digits at the hundreds and units place in the number 549?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['8', '9', "10","14"]),
    answers: [
      {
        answer: '8',
        nextId: 'inonceTensHundredscorrectq37',
      },
      {
        answer: '9',
        nextId: 'onceTensHundredscorrectq37',
      },
      {
        answer: "10",
        nextId: 'inonceTensHundredscorrectq37',
      },
      {
        answer: "14",
        nextId: 'inonceTensHundredscorrectq37',
      },
    ],
    },
    onceTensHundredscorrectq37: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>9</strong> 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[37],
      },
    ],
    },
    inonceTensHundredscorrectq37: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[37],
      },
    ],
    },
    
    //38
    ['fln'+shuffleArraylot[37]]: {
    botPrompt: 'What is the largest number formed by the digits 8, 5, and 2?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['285', '852', "528","582"]),
      answers: [
        {
          answer: '285',
          nextId: 'inonceTensHundredscorrectq38',
        },
        {
          answer: '852',
          nextId: 'onceTensHundredscorrectq38',
        },
        {
          answer: "528",
          nextId: 'inonceTensHundredscorrectq38',
        },
        {
          answer: "582",
          nextId: 'inonceTensHundredscorrectq38',
        },
      ],
    },
    onceTensHundredscorrectq38: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>852</strong> 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[38],
      },
    ],
    },
    inonceTensHundredscorrectq38: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"852"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[38],
      },
    ],
    },
    
    //39
    ['fln'+shuffleArraylot[38]]: {
    botPrompt: 'What is the sum of digits at the tens place and units place in the number 37?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '7', "10","13"]),
    answers: [
      {
        answer: '3',
        nextId: 'inonceTensHundredscorrectq310',
      },
      {
        answer: '7',
        nextId: 'inonceTensHundredscorrectq39',
      },
      {
        answer: "10",
        nextId: 'onceTensHundredscorrectq39',
      },
      {
        answer: "13",
        nextId: 'inonceTensHundredscorrectq39',
      },
    ],
    },
    onceTensHundredscorrectq39: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>10</strong> Answers! 😎',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[39],
      },
    ],
    },
    inonceTensHundredscorrectq39: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
    answers: [
      {
        nextId: 'fln'+shuffleArraylot[39],
      },
    ],
    },
    
    //40
    ['fln'+shuffleArraylot[39]]: {
    botPrompt: 'What is the number at the units place in the number 43?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","32"]),
      answers: [
        {
          answer: '3',
          nextId: 'onceTensHundredscorrectq40',
        },
        {
          answer: '4',
          nextId: 'inonceTensHundredscorrectq40',
        },
        {
          answer: "5",
          nextId: 'inonceTensHundredscorrectq40',
        },
        {
          answer: "6",
          nextId: 'inonceTensHundredscorrectq40',
        },
      ],
    },
    onceTensHundredscorrectq40: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>3</strong> 😎',
    answers: [
      {
        nextId: 'thisstart',
      },
    ],
    },
    inonceTensHundredscorrectq40: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
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
  botPrompt: 'Answer is : <strong>This</strong> (EFA) is a bag.',
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
  botPrompt: 'Answer is : <strong>That</strong> (EFA) is an Aeroplane.',
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

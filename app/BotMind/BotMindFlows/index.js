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
import apple from './assest/apple.jpg';
import orange from './assest/orange.jpg';
import pomegranate from './assest/pomegranate.jpg';
import welcomebackgif from './assest/welcomeback.gif';

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;






function generateRandom12DigitNumber() {
  const min = 100000000000; // 10^11 (minimum 12-digit number)
  const max = 999999999999; // 10^12 - 1 (maximum 12-digit number)

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
}

const random12DigitNumber = generateRandom12DigitNumber();

const questions = {

  start: {
    botPrompt: 'I am <strong>FiliBot</strong> from the planet of joyful learning. I am here to help you eradicate learning lapses in your students.',
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
        nextId: 'tardiidcollection',
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
 Welcomeback: {
  botPrompt: welcomebackgif,
  type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'day1',
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
            { nextId: 'emailcollection' },
    ],
  },
  emailcollection: {
      botPrompt: 'Please enter<strong> your 📧 email id </strong>?',
      input: textField(),
      answers: [
        {
          answer: common_greetings_negative,  
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
        nextId: 'chooseclass',
      },
    ],
},
chooseclass: {
  botPrompt: 'Choose your <strong>Class</strong> @varName  ?',
  type: RTypes.TRANSFORMED_TEXT,
  varName: 'userName',
  input: selectField(['Pre-kG','L.K.G','U.K.G','CLASS I','CLASS II', 'CLASS III','CLASS IV','CLASS V','CLASS VI','CLASS VII','CLASS VIII','CLASS IX','CLASS X']),
  answers: [
    { answer: 'Pre-kG',
    nextId: 'chooseapple' },
     { answer: 'L.K.G',
    nextId: 'chooseapple' },
     { answer: 'CLASS I',
    nextId: 'chooseapple' },
    { answer: 'CLASS II',
    nextId: 'chooseapple' },
     { answer: 'CLASS III',
    nextId: 'chooseapple' },
    { answer: 'CLASS IV',
    nextId: 'chooseapple' },
     { answer: 'CLASS V',
    nextId: 'chooseapple' },
    { answer: 'CLASS VI',
    nextId: 'chooseapple' },
     { answer: 'CLASS VII',
    nextId: 'chooseapple' },
    { answer: 'CLASS VIII',
    nextId: 'class8' },
    { answer: 'CLASS IX',
    nextId: 'chooseapple' },
    { answer: 'CLASS X',
    nextId: 'chooseapple' },


  ],
},

class8: {
  botPrompt: '<strong>You have choosed Class VIII : Watch Video of Class VIII </strong>',
  answers: [
    {
      nextId: 'class8ivideo',
    },
  ],
},
class8ivideo: { 
  botPrompt: 'https://www.youtube.com/watch?v=Y28WiRxPDZY',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'chooseapple',
    },
  ],
},


chooseapple: {
  botPrompt: "Find an apple from the options given below.?",
  input: imageSelectField(
    [
      { label: 'Apple', image: apple },
      { label: 'Orange', image: orange },
      { label: 'Pomegranate', image: pomegranate },
    ],
    'Select any one:'
  ),
  answers: [
    {
      answer: 'Apple',
      nextId: 'choosecorrect',
    },
    {
      answer: 'Orange',
      nextId: 'chooseincorrect',
    },
    {
      answer: 'Pomegranate',
      nextId: 'chooseincorrect',
    },
  ],
},
choosecorrect: {
  botPrompt: 'Hurray! You have chosen the correct picture. 😎',
  answers: [
    {
      nextId: 'tfidgenration',
    },
  ],
},

chooseincorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is ',
  answers: [
    {
      nextId: 'chooseincorrectans',
    },
  ],
},
chooseincorrectans: {
  botPrompt: apple,
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'tfidgenration',
    },
  ],
},


tfidgenration: {
  botPrompt: 'Your TFID is <strong>'+ random12DigitNumber +'</strong> .',
  answers: [
    {
      nextId: 'tfidgenrationtext',
    },
  ],
},
tfidgenrationtext: {
  botPrompt: 'You will receive your TFID Digital Card in your registered mobile number and email address.',
  answers: [
    {
      nextId: 'day1',
    },
  ],
},

//day1
day1: {
  botPrompt: 'What is the colour of the rose?',
  answers: [
    {
      nextId: 'day1image',
    },
  ],
},
day1image: { 
  botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/demoq1.jpg',
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'day1q',
    },
  ],
},
day1q: {
  botPrompt: '...',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Blue', 'Red', "Green","Yellow"]),
  answers: [
    {
      answer: 'Blue',
      nextId: 'incapscorrectq7',
    },
    {
      answer: 'Red',
      nextId: 'capscorrectq7',
    },
    {
      answer: "Green",
      nextId: 'incapscorrectq7',
    },
    {
      answer: "Yellow",
      nextId: 'incapscorrectq7',
    },
  ],
  },
  
  capscorrectq7: {
  botPrompt: 'Hurray! <strong>Red</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'day12',
    },
  ],
  },
  incapscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Red"</strong>',
  answers: [
    {
      nextId: 'day12',
    },
  ],
  },
  
  //day2
day12: {
  botPrompt: 'Count how many flowers are there in the picture.',
  answers: [
    {
      nextId: 'day12image',
    },
  ],
},
day12image: { 
  botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/demoq3.jpg',
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'day12q',
    },
  ],
},
day12q: {
  botPrompt: '...',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['9', '8', "7","10"]),
  answers: [
    {
      answer: '9',
      nextId: 'incapscorrectq72',
    },
    {
      answer: '8',
      nextId: 'capscorrectq72',
    },
    {
      answer: "7",
      nextId: 'incapscorrectq72',
    },
    {
      answer: "10",
      nextId: 'incapscorrectq72',
    },
  ],
  },
  
  capscorrectq72: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'day123',
    },
  ],
  },
  incapscorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'day123',
    },
  ],
  },
//day2
day123: {
  botPrompt: 'Choose the correct pronoun for the given picture.',
  answers: [
    {
      nextId: 'day123image',
    },
  ],
},
day123image: { 
  botPrompt: 'https://tardimeet.s3.ap-south-1.amazonaws.com/demoq9.jpg',
  type: RTypes.MEDIA,
  answers: [
    {
      nextId: 'day123q',
    },
  ],
},
day123q: {
  botPrompt: '...',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['he', 'she', "it","they"]),
  answers: [
    {
      answer: 'he',
      nextId: 'capscorrectq723',
    },
    {
      answer: 'she',
      nextId: 'incapscorrectq723',
    },
    {
      answer: "it",
      nextId: 'incapscorrectq723',
    },
    {
      answer: "they",
      nextId: 'incapscorrectq723',
    },
  ],
  },
  
  capscorrectq723: {
  botPrompt: 'Hurray! <strong>he</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'endConv',
    },
  ],
  },
  incapscorrectq723: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"he"</strong>',
  answers: [
    {
      nextId: 'endConv',
    },
  ],
  },

  endConv: {
    botPrompt: 'Thank you. I will meet you tomorrow.',
    input: endOfConversation(),
    answers: [
      {
        nextId: 'endConv',
      },
    ],
  },


}




export default questions;

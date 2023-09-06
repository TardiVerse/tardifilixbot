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
import flag from "./assest/Screenshot 2023-08-20 165232.png"

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
const numberslot = Array.from({ length: 30 }, (_, i) => i + 1);

// Shuffle the array
const shuffleArraylot = shuffleNumberArraylot(numberslot);




function generateRandom12DigitNumber() {
  const min = 100000000000; // 10^11 (minimum 12-digit number)
  const max = 999999999999; // 10^12 - 1 (maximum 12-digit number)

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
}

const random12DigitNumber = generateRandom12DigitNumber();

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
  input: tagsField(['Pre-kG','L.K.G','U.K.G','CLASS I','CLASS II', 'CLASS III','CLASS IV','CLASS V','CLASS VI','CLASS VII','CLASS VIII','CLASS IX','CLASS X']),
  answers: [
          { nextId: 'choosestate' },
  ],
},
choosestate: {
  botPrompt: 'Choose your <strong>State</strong>   ?',
  type: RTypes.TRANSFORMED_TEXT,
  input: tagsField(['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']),
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
      nextId: 'tardiidcollection',
    },
    {
      answer: "Parent",
      nextId: 'tardiidcollection',
    },
    {
      answer: "Teacher",
      nextId: 'tardiidcollection',
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
      nextId: "opposites"+shuffleArraylot[0],
    },
  ],
},


Welcomeback: {
  botPrompt: 'Welcome Back.@varName ',
  type: RTypes.TRANSFORMED_TEXT,
  varName: 'userName',
  answers: [
    {
      nextId: "opposites"+shuffleArraylot[0],
    },
  ],
},





//lotopposites


["opposites"+shuffleArraylot[0]]: {
  botPrompt: 'Opposite of "big"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Small', 'Tall', "Fat","Thin"]),
  answers: [
    {
      answer: 'Small',
      nextId: 'oppositescorrect',
        sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'Tall',
      nextId: 'inoppositescorrect',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Fat",
      nextId: 'inoppositescorrect',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Thin",
      nextId: 'inoppositescorrect',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},
oppositescorrect: {
  botPrompt: 'Hurray <strong>Small</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[1],
    },
  ],
},
inoppositescorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Small"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[1],
    },
  ],
},

['opposites'+shuffleArraylot[1]]: {
  botPrompt: 'Opposite of "happy"',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['brave', 'Funny', "sad","Angry"]),
  answers: [
    {
      answer: 'brave',
      nextId: 'inoppositescorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: 'Funny',
      nextId: 'inoppositescorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "sad",
      nextId: 'oppositescorrectq2',
      sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: "Angry",
      nextId: 'inoppositescorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq2: {
  botPrompt: 'Hurray! <strong>sad</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[2],
    },
  ],
},
inoppositescorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sad"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[2],
    },
  ],
},

//3
['opposites'+shuffleArraylot[2]]: {
botPrompt: 'Opposite of "hot"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Fast', 'cold', "Loud","Bright"]),
  answers: [
    {
      answer: 'Fast',
      nextId: 'inoppositescorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: 'cold',
      nextId: 'oppositescorrectq3',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: "Loud",
      nextId: 'inoppositescorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Bright",
      nextId: 'inoppositescorrectq3',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq3: {
botPrompt: 'Hurray! <strong>cold</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[3],
  },
],
},
inoppositescorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"cold"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[3],
  },
],
},

//4
['opposites'+shuffleArraylot[3]]: {
botPrompt: 'Opposite of "up"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Down', 'Left', "Right","Front"]),
  answers: [
    {
      answer: 'Down',
      nextId: 'oppositescorrectq4',
      sumToBags: [{ name: 'ac', points: 1 }],
      
    },
    {
      answer: 'Left',
      nextId: 'inoppositescorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      
    },
    {
      answer: "Right",
      nextId: 'inoppositescorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      
    },
    {
      answer: "Front",
      nextId: 'inoppositescorrectq4',
        sumToBags: [{ name: 'ai', points: 1 }],
      
    },
  ],
},

oppositescorrectq4: {
botPrompt: 'Hurray! <strong>Down</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[4],
  },
],
},
inoppositescorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Down"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[4],
  },
],
},

//5
['opposites'+shuffleArraylot[4]]: {
botPrompt: 'Opposite of "day"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Night', 'Sun', "Moon","Star"]),
  answers: [
    {
      answer: 'Night',
      nextId: 'oppositescorrectq5',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: 'Sun',
      nextId: 'inoppositescorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Moon",
      nextId: 'inoppositescorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Star",
      nextId: 'inoppositescorrectq5',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq5: {
botPrompt: 'Hurray! <strong>Night</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[5],
  },
],
},
inoppositescorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Night"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[5],
  },
],
},

//6
['opposites'+shuffleArraylot[5]]: {
botPrompt: 'Opposite of "slow"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Deep', 'High', "fast","Wide"]),
  answers: [
    {
      answer: 'Deep',
      nextId: 'inoppositescorrectqfast',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: 'High',
      nextId: 'inoppositescorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "fast",
      nextId: 'oppositescorrectq6',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: "Wide",
      nextId: 'inoppositescorrectq6',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq6: {
botPrompt: 'Hurray! <strong>fast</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[6],
  },
],
},
inoppositescorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"fast"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[6],
  },
],
},

//7
['opposites'+shuffleArraylot[6]]: {
botPrompt: 'Opposite of "near"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['big', 'far', "Loud","Soft"]),
  answers: [
    {
      answer: 'big',
      nextId: 'inoppositescorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: 'far',
      nextId: 'oppositescorrectq7',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: "Loud",
      nextId: 'inoppositescorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Soft",
      nextId: 'inoppositescorrectq7',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq7: {
botPrompt: 'Hurray! <strong>far</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[7],
  },
],
},
inoppositescorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"far"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[7],
  },
],
},


//8
['opposites'+shuffleArraylot[7]]: {
botPrompt: 'Opposite of "close"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Open', 'Close', "Clear","Full"]),
  answers: [
    {
      answer: 'Open',
      nextId: 'oppositescorrectq8',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: 'Close',
      nextId: 'inoppositescorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Clear",
      nextId: 'inoppositescorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Full",
      nextId: 'inoppositescorrectq8',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq8: {
botPrompt: 'Hurray! <strong>Open</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[8],
  },
],
},
inoppositescorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Open"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[8],
  },
],
},

//9
['opposites'+shuffleArraylot[8]]: {
botPrompt: 'Opposite of "empty"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Sad', 'Warm', "Full","Dry"]),
  answers: [
    {
      answer: 'Sad',
      nextId: 'inoppositescorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: 'Warm',
      nextId: 'inoppositescorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Full",
      nextId: 'oppositescorrectq9',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: "Dry",
      nextId: 'inoppositescorrectq9',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq9: {
botPrompt: 'Hurray! <strong>Full</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[9],
  },
],
},
inoppositescorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Full"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[9],
  },
],
},


//10
['opposites'+shuffleArraylot[9]]: {
botPrompt: 'Opposite of "clean"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Dirty', 'Funny', "Brave","Angry"]),
  answers: [
    {
      answer: 'Dirty',
      nextId: 'oppositescorrectqAngry',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: 'Funny',
      nextId: 'inoppositescorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Brave",
      nextId: 'inoppositescorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "10",
      nextId: 'inoppositescorrectq10',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],

},

oppositescorrectq10: {
botPrompt: 'Hurray! <strong>Dirty</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[10],
  },
],
},
inoppositescorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dirty"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[10],
  },
],
},

//11
['opposites'+shuffleArraylot[10]]: {
botPrompt: 'Opposite of "cold"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Hot', 'Slow', "Quiet","Dark"]),
  answers: [
    {
      answer: 'Hot',
      nextId: 'inoppositescorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: 'Slow',
      nextId: 'inoppositescorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Quiet",
      nextId: 'oppositescorrectq11',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: "Dark",
      nextId: 'inoppositescorrectq11',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq11: {
botPrompt: 'Hurray! <strong>Quiet</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[11],
  },
],
},
inoppositescorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Quiet"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[11],
  },
],
},

//12
['opposites'+shuffleArraylot[11]]: {
botPrompt: 'Opposite of "wet"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Soft', 'Small', "Loud","Dry"]),
  answers: [
    {
      answer: 'Soft',
      nextId: 'inoppositescorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: 'Small',
      nextId: 'inoppositescorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Loud",
      nextId: 'inoppositescorrectq12',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Dry",
      nextId: 'oppositescorrectq12',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
  ],
},

oppositescorrectq12: {
botPrompt: 'Hurray! <strong>Dry</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[12],
  },
],
},
inoppositescorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dry"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[12],
  },
],
},

//13
['opposites'+shuffleArraylot[12]]: {
botPrompt: 'Opposite of "fast"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Slow', 'Tall', "Fat","Thin"]),
  answers: [
    {
      answer: 'Slow',
      nextId: 'oppositescorrectq13',
        sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: 'Tall',
      nextId: 'inoppositescorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Fat",
      nextId: 'inoppositescorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
    {
      answer: "Thin",
      nextId: 'inoppositescorrectq13',
        sumToBags: [{ name: 'ai', points: 1 }],

    },
  ],
},

oppositescorrectq13: {
botPrompt: 'Hurray! <strong>Slow</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[13],
  },
],
},
inoppositescorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Slow"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[13],
  },
],
},

//14
['opposites'+shuffleArraylot[13]]: {
botPrompt: 'Opposite of "light"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Dark', 'Heavy', "Short","Empty"]),
  answers: [
    {
      answer: 'Dark',
      nextId: 'oppositescorrectq14',
        sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'Heavy',
      nextId: 'inoppositescorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Short",
      nextId: 'inoppositescorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Empty",
      nextId: 'inoppositescorrectq14',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

oppositescorrectq14: {
botPrompt: 'Hurray! <strong>Dark</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[14],
  },
],
},
inoppositescorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dark"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[14],
  },
],
},


//15
['opposites'+shuffleArraylot[14]]: {
botPrompt: 'Opposite of "in"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Down', 'Up', "Out","Front"]),
  answers: [
    {
      answer: 'Down',
      nextId: 'inoppositescorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: 'Up',
      nextId: 'inoppositescorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Out",
      nextId: 'oppositescorrectq15',
        sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: "Front",
      nextId: 'inoppositescorrectq15',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},

oppositescorrectq15: {
botPrompt: 'Hurray! <strong>Out</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[15],
  },
],
},
inoppositescorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Out"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[15],
  },
],
},

//16
['opposites'+shuffleArraylot[15]]: {
  botPrompt: 'Opposite of "new"',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Old', 'Fast', "Bright","Empty"]),
  answers: [
    {
      answer: 'Old',
      nextId: 'oppositescorrectq16',
        sumToBags: [{ name: 'ac', points: 1 }],
    },
    {
      answer: 'Fast',
      nextId: 'inoppositescorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Bright",
      nextId: 'inoppositescorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Empty",
      nextId: 'inoppositescorrectq16',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},
oppositescorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Old</strong> 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[16],
    },
  ],
},
inoppositescorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Old"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[16],
    },
  ],
},

//17
['opposites'+shuffleArraylot[16]]: {
botPrompt: 'Opposite of "happy"',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Sad', 'Funny', "Brave","Angry"]),
  answers: [
    {
      answer: 'Sad',
      nextId: 'oppositescorrectq17',
      sumToBags: [{ name: 'ac', points: 1 }],

    },
    {
      answer: 'Funny',
      nextId: 'inoppositescorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Brave",
      nextId: 'inoppositescorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
    {
      answer: "Angry",
      nextId: 'inoppositescorrectq17',
        sumToBags: [{ name: 'ai', points: 1 }],
    },
  ],
},
oppositescorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Sad</strong> 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[17],
  },
],
},
inoppositescorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sad"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[17],
  },
],
},

//18
['opposites'+shuffleArraylot[17]]: {
botPrompt: 'Opposite of "quiet".   ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Far', 'Soft', "Loud","Near"]),
answers: [
  {
    answer: 'Far',
    nextId: 'inoppositescorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Soft',
    nextId: 'inoppositescorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Loud",
    nextId: 'oppositescorrectq18',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Near",
     sumToBags: [{ name: 'ai', points: 1 }],
    nextId: 'inoppositescorrectq18',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
oppositescorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Loud</strong> 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[18],
  },
],
},
inoppositescorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Loud"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[18],
  },
],
},

//19
['opposites'+shuffleArraylot[18]]: {
botPrompt: 'Opposite of "thick"',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Heavy', 'Fast', "Thin","Tall"]),
answers: [
  {
    answer: 'Heavy',
    nextId: 'inoppositescorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Fast',
    nextId: 'inoppositescorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Thin",
    nextId: 'oppositescorrectq19',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Tall",
    nextId: 'inoppositescorrectq19',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
oppositescorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Thin</strong> Answers! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[19],
  },
],
},
inoppositescorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Thin"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[19],
  },
],
},

//20
['opposites'+shuffleArraylot[19]]: {
botPrompt: 'Opposite of "long"',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Short', 'Young', "Soft","Full"]),
answers: [
  {
    answer: 'Short',
    nextId: 'oppositescorrectq20',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Young',
    nextId: 'inoppositescorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Soft",
    nextId: 'inoppositescorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Full",
    nextId: 'inoppositescorrectq20',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
oppositescorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Short</strong> 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[20],
  },
],
},
inoppositescorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Short"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[20],
  },
],
},

//21
["opposites"+shuffleArraylot[20]]: {
  botPrompt: 'Short',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Short', 'Young', "Soft","Full"]),
answers: [
  {
    answer: 'Short',
    nextId: 'inoppositescorrectq21',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Young',
    nextId: 'inoppositescorrectq21',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Soft",
    nextId: 'oppositescorrectq21',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Full",
    nextId: 'inoppositescorrectq21',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
oppositescorrectq21: {
  botPrompt: 'Hurray <strong>Soft</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[21],
    },
  ],
},
inoppositescorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Soft"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[21],
    },
  ],
},

//22
['opposites'+shuffleArraylot[21]]: {
  botPrompt: 'Opposite of "old"',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Fast', 'young', "Loud","Bright"]),
answers: [
  {
    answer: 'Fast',
    nextId: 'inoppositescorrectq22',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'young',
    nextId: 'oppositescorrectq22',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Loud",
    nextId: 'inoppositescorrectq22',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Bright",
    nextId: 'inoppositescorrectq22',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

oppositescorrectq22: {
  botPrompt: 'Hurray! <strong>young</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[22],
    },
  ],
},
inoppositescorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"young"</strong>',
  answers: [
    {
      nextId: 'opposites'+shuffleArraylot[22],
    },
  ],
},

//23
['opposites'+shuffleArraylot[22]]: {
botPrompt: 'Opposite of "boy"',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Short', 'Young', "girl","Full"]),
answers: [
  {
    answer: 'Short',
    nextId: 'inoppositescorrectq23',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Young',
    nextId: 'inoppositescorrectq23',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "girl",
    nextId: 'oppositescorrectq23',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Full",
    nextId: 'inoppositescorrectq23',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

oppositescorrectq23: {
botPrompt: 'Hurray! <strong>girl</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[23],
  },
],
},
inoppositescorrectq23: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"girl"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[23],
  },
],
},

//24
['opposites'+shuffleArraylot[23]]: {
botPrompt: 'Opposite of "awake"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Asleep', 'Young', "Soft","salt"]),
answers: [
  {
    answer: 'Asleep',
    nextId: 'oppositescorrectq24',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Young',
    nextId: 'inoppositescorrectq24',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Soft",
    nextId: 'inoppositescorrectq24',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "salt",
    nextId: 'inoppositescorrectq24',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

oppositescorrectq24: {
botPrompt: 'Hurray! <strong>Asleep</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[24],
  },
],
},
inoppositescorrectq24: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Asleep"</strong>',
answers: [
  {
    nextId: 'opposites'+shuffleArraylot[24],
  },
],
},

//25
['opposites'+shuffleArraylot[24]]: {
botPrompt: 'Opposite of "sour"',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['hot ', 'cold', "sweet","Bright"]),
answers: [
  {
    answer: 'hot ',
    nextId: 'inoppositescorrectq25',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'cold',
    nextId: 'inoppositescorrectq25',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "sweet",
    nextId: 'oppositescorrectq25',
    sumToBags: [{ name: 'ac', points: 1 }],

  },
  {
    answer: "Bright",
    nextId: 'inoppositescorrectq25',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

oppositescorrectq25: {
botPrompt: 'Hurray! <strong>sweet</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: "colours"+shuffleArraylot[25],
  },
],
},
inoppositescorrectq25: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sweet"</strong>',
answers: [
  {
    nextId: "colours"+shuffleArraylot[25],
  },
],
},


//lotendoppositesletter
//lotcolours


["colours"+shuffleArraylot[25]]: {
botPrompt: 'What is the colour of  rose?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Blue', 'Red', "Green","Yellow"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrect',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Red',
    nextId: 'colourscorrect',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Green",
    nextId: 'incolourscorrect',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrect',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
colourscorrect: {
botPrompt: 'Hurray <strong>Red</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[26],
  },
],
},
incolourscorrect: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Red"</strong>',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[26],
  },
],
},

['colours'+shuffleArraylot[26]]: {
botPrompt: 'What is the colour of the sun?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Black', 'Yellow', "Purple","Pink"]),
answers: [
  {
    answer: 'Black',
    nextId: 'incolourscorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Yellow',
    nextId: 'colourscorrectq2',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Purple",
    nextId: 'incolourscorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq2',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

colourscorrectq2: {
botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[27],
  },
],
},
incolourscorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[27],
  },
],
},

//3
['colours'+shuffleArraylot[27]]: {
botPrompt: 'What is the colour of banana?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Green', 'Brown', "White","Yellow"]),
answers: [
  {
    answer: 'Green',
    nextId: 'incolourscorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Brown',
    nextId: 'incolourscorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "White",
    nextId: 'incolourscorrectq3',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'colourscorrectq3',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
],
},

colourscorrectq3: {
botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[28],
},
],
},
incolourscorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[28],
},
],
},

//4
['colours'+shuffleArraylot[28]]: {
botPrompt: 'What is the colour of radish?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Black', "Red","White"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Black',
    nextId: 'incolourscorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Red",
    nextId: 'incolourscorrectq4',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "White",
    nextId: 'colourscorrectq4',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
],
},

colourscorrectq4: {
botPrompt: 'Hurray! <strong>White</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[29],
},
],
},
incolourscorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[29],
},
],
},

//5
['colours'+shuffleArraylot[29]]: {
botPrompt: 'What is the colour of brinjal?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Purple', "Red","Yellow"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Purple',
    nextId: 'colourscorrectq5',
    sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Red",
    nextId: 'incolourscorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq5',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

colourscorrectq5: {
botPrompt: 'Hurray! <strong>Purple</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[30],
},
],
},
incolourscorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Purple"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[30],
},
],
},

//6
['colours'+shuffleArraylot[30]]: {
botPrompt: 'What is the colour of tomato?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Green', "Purple","Red"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Green',
    nextId: 'incolourscorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Purple",
    nextId: 'incolourscorrectq6',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Red",
    nextId: 'colourscorrectq6',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
],
},

colourscorrectq6: {
botPrompt: 'Hurray! <strong>Red</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[31],
},
],
},
incolourscorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>Red</strong> answer is <strong>"Red"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[31],
},
],
},

//7
['colours'+shuffleArraylot[31]]: {
botPrompt: 'What is the colour of the flower?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Red', "Orange","Pink"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq7',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Red',
    nextId: 'colourscorrectq7',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Orange",
    nextId: 'colourscorrectq7',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Pink",
    nextId: 'colourscorrectq7',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
],
},

colourscorrectq7: {
botPrompt: 'Hurray! <strong>Orange or Red or Pink</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[32],
},
],
},
incolourscorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange or Red or Pink"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[32],
},
],
},


//8
['colours'+shuffleArraylot[32]]: {
botPrompt: 'What is the colour of the orange?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Orange', "Purple","Pink"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Orange',
    nextId: 'colourscorrectq8',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Purple",
    nextId: 'incolourscorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq8',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

colourscorrectq8: {
botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[33],
},
],
},
incolourscorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[33],
},
],
},

//9
['colours'+shuffleArraylot[33]]: {
botPrompt: 'Which colour is the opposite of snow?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Black', "White","Green"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Black',
    nextId: 'colourscorrectq9',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "White",
    nextId: 'incolourscorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Green",
    nextId: 'incolourscorrectq9',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

colourscorrectq9: {
botPrompt: 'Hurray! <strong>Black</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[34],
},
],
},
incolourscorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Black"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[34],
},
],
},


//10
['colours'+shuffleArraylot[34]]: {
botPrompt: 'What is the colour of carrot?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Orange', "Green","Yellow"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'colourscorrectq10',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Orange',
    nextId: 'incolourscorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Green",
    nextId: 'incolourscorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq10',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],

},

colourscorrectq10: {
botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[35],
},
],
},
incolourscorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[35],
},
],
},

//11
['colours'+shuffleArraylot[35]]: {
botPrompt: 'What is the colour of tuberose?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['White', 'Orange', "Purple","Pink"]),
answers: [
  {
    answer: 'White',
    nextId: 'colourscorrectq11',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Orange',
    nextId: 'incolourscorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Purple",
    nextId: 'incolourscorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq11',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

colourscorrectq11: {
botPrompt: 'Hurray! <strong>White</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[36],
},
],
},
incolourscorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[36],
},
],
},

//12
['colours'+shuffleArraylot[36]]: {
botPrompt: 'What is the colour of pumpkin?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Orange', "Red","Yellow"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Orange',
    nextId: 'incolourscorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Red",
    nextId: 'incolourscorrectq12',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'colourscorrectq12',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
],
},

colourscorrectq12: {
botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[37],
},
],
},
incolourscorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[37],
},
],
},

//13
['colours'+shuffleArraylot[37]]: {
botPrompt: 'What is the colour of strawberry milkshake?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Red', "Yellow"," Pink"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Red',
    nextId: 'incolourscorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq13',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Pink",
    nextId: 'colourscorrectq13',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
],
},

colourscorrectq13: {
botPrompt: 'Hurray! <strong>Pink</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[38],
},
],
},
incolourscorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pink"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[38],
},
],
},

//14
['colours'+shuffleArraylot[38]]: {
botPrompt: 'What is the colour of a lime?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Green', "Purple","Yellow"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Green',
    nextId: 'colourscorrectq14',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Purple",
    nextId: 'incolourscorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq14',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

colourscorrectq14: {
botPrompt: 'Hurray! <strong>Green</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[39],
},
],
},
incolourscorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Green"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[39],
},
],
},


//15
['colours'+shuffleArraylot[39]]: {
botPrompt: 'What is the colour of an apple?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue', 'Red', "Yellow","Pink"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Red',
    nextId: 'colourscorrectq15',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq15',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

colourscorrectq15: {
botPrompt: 'Hurray! <strong>Red</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[40],
},
],
},
incolourscorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Red"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[40],
},
],
},

//16
['colours'+shuffleArraylot[40]]: {
botPrompt: 'What is the colour of sky?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Blue', 'Red', "Green","Pink"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'colourscorrectq16',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Red',
    nextId: 'incolourscorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Green",
    nextId: 'incolourscorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq16',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
colourscorrectq16: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Blue</strong> 😎',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[41],
  },
],
},
incolourscorrectq16: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Blue"</strong>',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[41],
  },
],
},

//17
['colours'+shuffleArraylot[41]]: {
botPrompt: 'What is the colour of the watermelon?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Blue', 'Green', "Red","Yellow"]),
answers: [
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Green',
    nextId: 'colourscorrectq17',
      sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Red",
    nextId: 'incolourscorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq17',
      sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
colourscorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Green</strong> 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[42],
},
],
},
incolourscorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Green"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[42],
},
],
},

//18
['colours'+shuffleArraylot[42]]: {
botPrompt: 'What is the colour of snowman?.   ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Blue', 'White', "Purple","Pink"]),
answers: [
{
  answer: 'Blue',
  nextId: 'incolourscorrectq18',
    sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'White',
  nextId: 'colourscorrectq18',
    sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: "Purple",
  nextId: 'incolourscorrectq18',
    sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Pink",
  nextId: 'incolourscorrectq18',
    sumToBags: [{ name: 'ai', points: 1 }],
},
],
},
colourscorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>White</strong> 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[43],
},
],
},
incolourscorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[43],
},
],
},

//19
['colours'+shuffleArraylot[43]]: {
botPrompt: 'What is the colour of butterfly?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Blue', 'Red', "Orange","Yellow"]),
answers: [
{
  answer: 'Blue',
  nextId: 'colourscorrectq19',
    sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Red',
  nextId: 'colourscorrectq19',
    sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: "Orange",
  nextId: 'colourscorrectq19',
    sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Yellow",
  nextId: 'colourscorrectq19',
    sumToBags: [{ name: 'ai', points: 1 }],
},
],
},
colourscorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Blue or Red or Orange or Yellow</strong> Answers! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[44],
},
],
},
incolourscorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Blue or Red or Orange or Yellow"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[44],
},
],
},

//20
['colours'+shuffleArraylot[44]]: {
botPrompt: 'What is the colour of hair?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Black', 'Red', "Green","Yellow"]),
answers: [
{
  answer: 'Black',
  nextId: 'colourscorrectq20',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Red',
  nextId: 'incolourscorrectq20',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Green",
  nextId: 'incolourscorrectq20',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Yellow",
  nextId: 'incolourscorrectq20',
   sumToBags: [{ name: 'ai', points: 1 }],
},
],
},
colourscorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Black</strong> 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[45],
},
],
},
incolourscorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Black"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[45],
},
],
},

//21
["colours"+shuffleArraylot[45]]: {
botPrompt: 'Which colour is the opposite of black?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Blue', 'Red', "Yellow","White"]),
answers: [
{
  answer: 'Blue',
  nextId: 'incolourscorrectq21',
  sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Red',
  nextId: 'incolourscorrectq21',
  sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Yellow",
  nextId: 'incolourscorrectq21',
  sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "White",
  nextId: 'colourscorrectq21',
  sumToBags: [{ name: 'ac', points: 1 }],
},
],
},
colourscorrectq21: {
botPrompt: 'Hurray <strong>White</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[46],
  },
],
},
incolourscorrectq21: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[46],
  },
],
},

//22
['colours'+shuffleArraylot[46]]: {
botPrompt: 'Which colour is the result of mixing red and blue?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Yellow', 'Green', "Purple","Pink"]),
answers: [
{
  answer: 'Yellow',
  nextId: 'incolourscorrectq22',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Green',
  nextId: 'incolourscorrectq22',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Purple",
  nextId: 'colourscorrectq22',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: "Pink",
  nextId: 'incolourscorrectq22',
   sumToBags: [{ name: 'ai', points: 1 }],
},
],
},

colourscorrectq22: {
botPrompt: 'Hurray! <strong>Purple</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[47],
  },
],
},
incolourscorrectq22: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Purple"</strong>',
answers: [
  {
    nextId: 'colours'+shuffleArraylot[47],
  },
],
},

//23
['colours'+shuffleArraylot[47]]: {
botPrompt: 'Which colour is the result of mixing red and yellow?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Green', 'Blue', "Orange","Pink"]),
answers: [
{
  answer: 'Green',
  nextId: 'incolourscorrectq23',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Blue',
  nextId: 'incolourscorrectq23',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Orange",
  nextId: 'colourscorrectq23',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: "Pink",
  nextId: 'incolourscorrectq23',
   sumToBags: [{ name: 'ai', points: 1 }],
},
],
},

colourscorrectq23: {
botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[48],
},
],
},
incolourscorrectq23: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[48],
},
],
},

//24
['colours'+shuffleArraylot[48]]: {
botPrompt: 'Which colour is the result of mixing blue and yellow?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Red', 'Green', "Orange","Pink"]),
answers: [
{
  answer: 'Red',
  nextId: 'incolourscorrectq24',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Green',
  nextId: 'colourscorrectq24',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: "Orange",
  nextId: 'incolourscorrectq24',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Pink",
  nextId: 'incolourscorrectq24',
   sumToBags: [{ name: 'ai', points: 1 }],
},
],
},

colourscorrectq24: {
botPrompt: 'Hurray! <strong>Green</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'colours'+shuffleArraylot[49],
},
],
},
incolourscorrectq24: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Green"</strong>',
answers: [
{
  nextId: 'colours'+shuffleArraylot[49],
},
],
},

//25
['colours'+shuffleArraylot[49]]: {
botPrompt: 'Which color is often associated with sunshine?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Blue ', 'Green', "Brown","Yellow"]),
answers: [
{
  answer: 'Blue ',
  nextId: 'incolourscorrectq25',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Green',
  nextId: 'incolourscorrectq25',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Brown",
  nextId: 'incolourscorrectq25',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: "Yellow",
  nextId: 'colourscorrectq25',
   sumToBags: [{ name: 'ac', points: 1 }],
},
],
},

colourscorrectq25: {
botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: "rhymingWords"+shuffleArraylot[49],
},
],
},
incolourscorrectq25: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
answers: [
{
  nextId: "rhymingWords"+shuffleArraylot[49],
},
],
},


//lotendcoloursletter
//lotrhymingWords


["rhymingWords"+shuffleArraylot[49]]: {
botPrompt: '1. Which word rhymes with "cat"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Hat', 'Dog', "Ball","Sun"]),
answers: [
  {
    answer: 'Hat',
    nextId: 'rhymingWordscorrect',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrect',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Ball",
    nextId: 'inrhymingWordscorrect',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Sun",
    nextId: 'inrhymingWordscorrect',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},
rhymingWordscorrect: {
botPrompt: 'Hurray <strong>Hat</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[50],
  },
],
},
inrhymingWordscorrect: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[50],
  },
],
},

['rhymingWords'+shuffleArraylot[50]]: {
botPrompt: '2. Which word rhymes with "book"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Look.', 'Chair', "Tree","Car"]),
answers: [
  {
    answer: 'Look',
    nextId: 'rhymingWordscorrectq2',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Chair',
    nextId: 'inrhymingWordscorrectq2',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Tree",
    nextId: 'inrhymingWordscorrectq2',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Car",
    nextId: 'inrhymingWordscorrectq2',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq2: {
botPrompt: 'Hurray! <strong>Look</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[51],
  },
],
},
inrhymingWordscorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Look"</strong>',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[51],
  },
],
},

//3
['rhymingWords'+shuffleArraylot[51]]: {
botPrompt: "3. Which word rhymes with 'sun'?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Run', 'Cup', "Hat.","Car"]),
answers: [
  {
    answer: 'Run',
    nextId: 'rhymingWordscorrectq3',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Cup',
    nextId: 'inrhymingWordscorrectq3',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Hat",
    nextId: 'inrhymingWordscorrectq3',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Car",
    nextId: 'inrhymingWordscorrectq3',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq3: {
botPrompt: 'Hurray! <strong>Run</strong> is the correct answer ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[52],
},
],
},
inrhymingWordscorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Run"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[52],
},
],
},

//4
['rhymingWords'+shuffleArraylot[52]]: {
botPrompt: '4. Which word rhymes with "hat"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Cat', 'Dog', "Cup","Sun"]),
answers: [
  {
    answer: 'Cat',
    nextId: 'rhymingWordscorrectq4',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq4',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Cup",
    nextId: 'inrhymingWordscorrectq4',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Sun",
    nextId: 'inrhymingWordscorrectq4',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq4: {
botPrompt: 'Hurray! <strong>Cat</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[53],
},
],
},
inrhymingWordscorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cat"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[53],
},
],
},

//5
['rhymingWords'+shuffleArraylot[53]]: {
botPrompt: '5. Which word rhymes with "tree"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Bee.', 'Chair', "Ball","Car"]),
answers: [
  {
    answer: 'Bee',
    nextId: 'inrhymingWordscorrectq5',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Chair',
    nextId: 'rhymingWordscorrectq5',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Ball",
    nextId: 'inrhymingWordscorrectq5',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Car",
    nextId: 'inrhymingWordscorrectq5',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq5: {
botPrompt: 'Hurray! <strong>Chair</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[54],
},
],
},
inrhymingWordscorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chair"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[54],
},
],
},

//6
['rhymingWords'+shuffleArraylot[54]]: {
botPrompt: '6. Which word rhymes with "bed"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Hat', 'cup', "red","ball"]),
answers: [
  {
    answer: 'Hat',
    nextId: 'inrhymingWordscorrectq6',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'cup',
    nextId: 'inrhymingWordscorrectq6',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "red",
    nextId: 'rhymingWordscorrectq6',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "ball",
    nextId: 'inrhymingWordscorrectq6',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq6: {
botPrompt: 'Hurray! <strong>red</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[55],
},
],
},
inrhymingWordscorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"red"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[55],
},
],
},

//7
['rhymingWords'+shuffleArraylot[55]]: {
botPrompt: '7. Which word rhymes with "pear"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Beer', 'Door', "Ball","Chair"]),
answers: [
  {
    answer: 'Beer',
    nextId: 'inrhymingWordscorrectq7',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Door',
    nextId: 'rhymingWordscorrectq7',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Ball",
    nextId: 'inrhymingWordscorrectq7',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Chair",
    nextId: 'inrhymingWordscorrectq7',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq7: {
botPrompt: 'Hurray! <strong>Chair</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[56],
},
],
},
inrhymingWordscorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chair"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[56],
},
],
},


//8
['rhymingWords'+shuffleArraylot[56]]: {
botPrompt: '8. Which word rhymes with "run"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Fun', 'Cup', "Hat","Bed"]),
answers: [
  {
    answer: 'Fun',
    nextId: 'rhymingWordscorrectq8',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Cup',
    nextId: 'inrhymingWordscorrectq8',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Hat",
    nextId: 'inrhymingWordscorrectq8',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Bed",
    nextId: 'inrhymingWordscorrectq8',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq8: {
botPrompt: 'Hurray! <strong>Fun</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[57],
},
],
},
inrhymingWordscorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fun"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[57],
},
],
},

//9
['rhymingWords'+shuffleArraylot[57]]: {
botPrompt: '9. Which word rhymes with "cat"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Rat', 'Dog', "Ball","Sun"]),
answers: [
  {
    answer: 'Rat',
    nextId: 'rhymingWordscorrectq9',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq9',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Ball",
    nextId: 'inrhymingWordscorrectq9',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Sun",
    nextId: 'inrhymingWordscorrectq9',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq9: {
botPrompt: 'Hurray! <strong>Rat</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[58],
},
],
},
inrhymingWordscorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rat"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[58],
},
],
},


//10
['rhymingWords'+shuffleArraylot[58]]: {
botPrompt: '10. Which word rhymes with "book"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Cook', 'Chair', "Tree","Car"]),
answers: [
  {
    answer: 'Cook',
    nextId: 'rhymingWordscorrectq10',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Chair',
    nextId: 'inrhymingWordscorrectq10',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Tree",
    nextId: 'inrhymingWordscorrectq10',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Car",
    nextId: 'inrhymingWordscorrectq10',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],

},

rhymingWordscorrectq10: {
botPrompt: 'Hurray! <strong>Cook</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[59],
},
],
},
inrhymingWordscorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cook"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[59],
},
],
},

//11
['rhymingWords'+shuffleArraylot[59]]: {
botPrompt: '11. Which word rhymes with "pet"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Net', 'Dog', "Bat","Sun"]),
answers: [
  {
    answer: 'Net',
    nextId: 'rhymingWordscorrectq11',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq11',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Bat",
    nextId: 'inrhymingWordscorrectq11',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Sun",
    nextId: 'inrhymingWordscorrectq11',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq11: {
botPrompt: 'Hurray! <strong>Net</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[60],
},
],
},
inrhymingWordscorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Net"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[60],
},
],
},

//12
['rhymingWords'+shuffleArraylot[60]]: {
botPrompt: '12. Which word rhymes with "mob"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Frog', 'Dog', "Job","Bat"]),
answers: [
  {
    answer: 'Frog',
    nextId: 'inrhymingWordscorrectq12',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq12',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Job",
    nextId: 'rhymingWordscorrectq12',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Bat",
    nextId: 'inrhymingWordscorrectq12',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq12: {
botPrompt: 'Hurray! <strong>Job</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[61],
},
],
},
inrhymingWordscorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Job"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[61],
},
],
},

//13
['rhymingWords'+shuffleArraylot[61]]: {
botPrompt: '13. Which word rhymes with "cut"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Hut', 'Dog', "Bin","Run"]),
answers: [
  {
    answer: 'Hut',
    nextId: 'rhymingWordscorrectq13',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq13',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Bin",
    nextId: 'inrhymingWordscorrectq13',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Run",
    nextId: 'inrhymingWordscorrectq13',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq13: {
botPrompt: 'Hurray! <strong>Hut</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[62],
},
],
},
inrhymingWordscorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hut"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[62],
},
],
},

//14
['rhymingWords'+shuffleArraylot[62]]: {
botPrompt: '14. Which word rhymes with "lip"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Dip', 'Dog', "Bat","Sun"]),
answers: [
  {
    answer: 'Dip',
    nextId: 'rhymingWordscorrectq14',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq14',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Bat",
    nextId: 'inrhymingWordscorrectq14',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Sun",
    nextId: 'inrhymingWordscorrectq14',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq14: {
botPrompt: 'Hurray! <strong>Dip</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[63],
},
],
},
inrhymingWordscorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dip"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[63],
},
],
},


//15
['rhymingWords'+shuffleArraylot[63]]: {
botPrompt: '15. Which word rhymes with "bug"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Dog', 'Jog', "Mug","Hat"]),
answers: [
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq15',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Jog',
    nextId: 'inrhymingWordscorrectq15',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: "Mug",
    nextId: 'rhymingWordscorrectq15',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: "Hat",
    nextId: 'inrhymingWordscorrectq15',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
],
},

rhymingWordscorrectq15: {
botPrompt: 'Hurray! <strong>Mug</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[64],
},
],
},
inrhymingWordscorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Mug"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[64],
},
],
},

//16
['rhymingWords'+shuffleArraylot[64]]: {
botPrompt: '16. Which word rhymes with "mad"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Pad', 'Dog', "Pin","Sun"]),
answers: [
  {
    answer: 'Pad',
    nextId: 'rhymingWordscorrectq16',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq16',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Pin',
    nextId: 'inrhymingWordscorrectq16',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Sun',
    nextId: 'inrhymingWordscorrectq16',
     sumToBags: [{ name: 'ai', points: 1 }],
  },

],
},
rhymingWordscorrectq16: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Pad</strong> 😎',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[65],
  },
],
},
inrhymingWordscorrectq16: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pad"</strong>',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[65],
  },
],
},

//17
['rhymingWords'+shuffleArraylot[65]]: {
botPrompt: '17. Which word rhymes with "pen"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Hen', 'Dog', "Pin","Sun"]),
answers: [
  {
    answer: 'Hen',
    nextId: 'rhymingWordscorrectq17',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq17',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Pin',
    nextId: 'inrhymingWordscorrectq17',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Sun',
    nextId: 'inrhymingWordscorrectq17',
     sumToBags: [{ name: 'ai', points: 1 }],
  },

],
},
rhymingWordscorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Hen</strong> 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[66],
},
],
},
inrhymingWordscorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hen"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[66],
},
],
},

//18
['rhymingWords'+shuffleArraylot[66]]: {
botPrompt: '18. Which word rhymes with "get"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Jog', 'Dog', "Log","Jet"]),
answers: [
{
  answer: 'Jog',
  nextId: 'rhymingWordscorrectq18',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Dog',
  nextId: 'inrhymingWordscorrectq18',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Log',
  nextId: 'inrhymingWordscorrectq18',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Jet',
  nextId: 'inrhymingWordscorrectq18',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},
rhymingWordscorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Jog</strong> 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[67],
},
],
},
inrhymingWordscorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Jog"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[67],
},
],
},

//19
['rhymingWords'+shuffleArraylot[67]]: {
botPrompt: '19. Which word rhymes with "nut"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Hut', 'Dog', "Log","Jet"]),
answers: [
{
  answer: 'Hut',
  nextId: 'rhymingWordscorrectq19',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Dog',
  nextId: 'inrhymingWordscorrectq19',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Log',
  nextId: 'inrhymingWordscorrectq19',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Jet',
  nextId: 'inrhymingWordscorrectq19',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},
rhymingWordscorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Hut</strong> Answers! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[68],
},
],
},
inrhymingWordscorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hut"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[68],
},
],
},

//20
['rhymingWords'+shuffleArraylot[68]]: {
botPrompt: '20. Which word rhymes with "den"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Hen', 'Dog', "Bin","Sun"]),
answers: [
{
  answer: 'Hen',
  nextId: 'rhymingWordscorrectq20',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Dog',
  nextId: 'inrhymingWordscorrectq20',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Bin',
  nextId: 'inrhymingWordscorrectq20',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Sun',
  nextId: 'inrhymingWordscorrectq20',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},
rhymingWordscorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Hen</strong> 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[69],
},
],
},
inrhymingWordscorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hen"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[69],
},
],
},

//21
["rhymingWords"+shuffleArraylot[69]]: {
botPrompt: "21. Which word does not rhyme with 'cat'?",
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Mat', 'Bed', "Hat","Sun"]),
answers: [
{
  answer: 'Mat',
  nextId: 'inrhymingWordscorrectq21',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Bed',
  nextId: 'rhymingWordscorrectq21',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Hat',
  nextId: 'inrhymingWordscorrectq21',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Sun',
  nextId: 'inrhymingWordscorrectq21',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},
rhymingWordscorrectq21: {
botPrompt: 'Hurray <strong>Bed</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[70],
  },
],
},
inrhymingWordscorrectq21: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bed"</strong>',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[70],
  },
],
},

//22
['rhymingWords'+shuffleArraylot[70]]: {
botPrompt: '22. Which word does not rhyme with "bed"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Red', 'Fed', "Lit","Wed"]),
answers: [
{
  answer: 'Red',
  nextId: 'inrhymingWordscorrectq22',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Fed',
  nextId: 'inrhymingWordscorrectq22',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Lit',
  nextId: 'rhymingWordscorrectq22',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Wed',
  nextId: 'inrhymingWordscorrectq22',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},

rhymingWordscorrectq22: {
botPrompt: 'Hurray! <strong>Lit</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[71],
  },
],
},
inrhymingWordscorrectq22: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Lit"</strong>',
answers: [
  {
    nextId: 'rhymingWords'+shuffleArraylot[71],
  },
],
},

//23
['rhymingWords'+shuffleArraylot[71]]: {
botPrompt: "23. Which word does not rhyme with 'sit'?",
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Fit', 'Hit', "Lit","Kite"]),
answers: [
{
  answer: 'Fit',
  nextId: 'inrhymingWordscorrectq23',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Hit',
  nextId: 'inrhymingWordscorrectq23',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Lit',
  nextId: 'inrhymingWordscorrectq23',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Kite',
  nextId: 'rhymingWordscorrectq23',
   sumToBags: [{ name: 'ac', points: 1 }],
},

],
},

rhymingWordscorrectq23: {
botPrompt: 'Hurray! <strong>Kite</strong> is the correct answer ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[72],
},
],
},
inrhymingWordscorrectq23: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Kite"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[72],
},
],
},

//24
['rhymingWords'+shuffleArraylot[72]]: {
botPrompt: '24. Which word does not rhyme with "pot"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Dot', 'Hot', "Hat","Lot"]),
answers: [
{
  answer: 'Dot',
  nextId: 'inrhymingWordscorrectq24',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Hot',
  nextId: 'inrhymingWordscorrectq24',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Hat',
  nextId: 'rhymingWordscorrectq24',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Lot',
  nextId: 'inrhymingWordscorrectq24',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},

rhymingWordscorrectq24: {
botPrompt: 'Hurray! <strong>Ha</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[73],
},
],
},
inrhymingWordscorrectq24: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[73],
},
],
},

//25
['rhymingWords'+shuffleArraylot[73]]: {
botPrompt: '25. Which word does not rhyme with "run"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Fun', 'Sun', "Bun","Fit"]),
answers: [
{
  answer: 'Fun',
  nextId: 'inrhymingWordscorrectq25',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Sun',
  nextId: 'inrhymingWordscorrectq25',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Bun',
  nextId: 'inrhymingWordscorrectq25',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Fit',
  nextId: 'rhymingWordscorrectq25',
   sumToBags: [{ name: 'ac', points: 1 }],
},

],
},

rhymingWordscorrectq25: {
botPrompt: 'Hurray! <strong>Fit</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[74],
},
],
},
inrhymingWordscorrectq25: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fit"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[74],
},
],
},

//26
['rhymingWords'+shuffleArraylot[74]]: {
botPrompt: '26. Which word does not rhyme with "jet"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Get', 'Set', "Log","Bet"]),
answers: [
{
  answer: 'Get',
  nextId: 'inrhymingWordscorrectq26',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Set',
  nextId: 'inrhymingWordscorrectq26',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Log',
  nextId: 'rhymingWordscorrectq26',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Bet',
  nextId: 'inrhymingWordscorrectq26',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},

rhymingWordscorrectq26: {
botPrompt: 'Hurray! <strong>Log</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[75],
},
],
},
inrhymingWordscorrectq26: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Log"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[75],
},
],
},

//27
['rhymingWords'+shuffleArraylot[75]]: {
botPrompt: '27. Which word does not rhyme with "cut"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Hut', 'Nut', "Mad","But"]),
answers: [
  {
    answer: 'Hut',
    nextId: 'rhymingWordscorrectq27',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Nut',
    nextId: 'inrhymingWordscorrectq27',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Mad',
    nextId: 'rhymingWordscorrectq27',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'But',
    nextId: 'inrhymingWordscorrectq27',
     sumToBags: [{ name: 'ai', points: 1 }],
  },

],
},

rhymingWordscorrectq27: {
botPrompt: 'Hurray! <strong>Mad</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[76],
},
],
},
inrhymingWordscorrectq27: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Mad"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[76],
},
],
},


//28
['rhymingWords'+shuffleArraylot[76]]: {
botPrompt: '28. Which word does not rhyme with "pen"?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Hen', 'Dog', "Ken","Den"]),
answers: [
{
  answer: 'Hen',
  nextId: 'inrhymingWordscorrectq28',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Dog',
  nextId: 'rhymingWordscorrectq28',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Ken',
  nextId: 'inrhymingWordscorrectq28',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Den',
  nextId: 'inrhymingWordscorrectq28',
   sumToBags: [{ name: 'ai', points: 1 }],
},
],
},

rhymingWordscorrectq28: {
botPrompt: 'Hurray! <strong>Dog</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[77],
},
],
},
inrhymingWordscorrectq28: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dog"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[77],
},
],
},

//29
['rhymingWords'+shuffleArraylot[77]]: {
botPrompt: '29. Which word does not rhyme with "nut"?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Hut', 'Cut', "Sun","Gut"]),
answers: [
  {
    answer: 'Hut',
    nextId: 'inrhymingWordscorrectq29',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Cut',
    nextId: 'inrhymingWordscorrectq29',
     sumToBags: [{ name: 'ai', points: 1 }],
  },
  {
    answer: 'Sun',
    nextId: 'rhymingWordscorrectq29',
     sumToBags: [{ name: 'ac', points: 1 }],
  },
  {
    answer: 'Gut',
    nextId: 'inrhymingWordscorrectq29',
     sumToBags: [{ name: 'ai', points: 1 }],
  },

],
},

rhymingWordscorrectq29: {
botPrompt: 'Hurray! <strong>Sun</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[78],
},
],
},
inrhymingWordscorrectq29: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sun"</strong>',
answers: [
{
  nextId: 'rhymingWords'+shuffleArraylot[78],
},
],
},



//30
['rhymingWords'+shuffleArraylot[78]]: {
botPrompt: "30. Which word does not rhyme with 'bug'?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Rug', 'Mug', "Hat","Jug"]),
answers: [
{
  answer: 'Rug',
  nextId: 'inrhymingWordscorrectq30',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Mug',
  nextId: 'inrhymingWordscorrectq30',
   sumToBags: [{ name: 'ai', points: 1 }],
},
{
  answer: 'Hat',
  nextId: 'rhymingWordscorrectq30',
   sumToBags: [{ name: 'ac', points: 1 }],
},
{
  answer: 'Jug',
  nextId: 'inrhymingWordscorrectq30',
   sumToBags: [{ name: 'ai', points: 1 }],
},

],
},

rhymingWordscorrectq30: {
botPrompt: 'Hurray! <strong>Hat</strong> is the correct answer  ! 😎',
answers: [
{
  nextId: 'endConv',
},
],
},
inrhymingWordscorrectq30: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
answers: [
{
  nextId: 'endConv',
},
],
},

//lotendrhymingWordsletter
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

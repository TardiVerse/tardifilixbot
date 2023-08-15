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


function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Create an array containing numbers from 1 to 33
const numbers = Array.from({ length: 34 }, (_, i) => i + 1);

// Shuffle the array
const shuffledNumbers = shuffleArray(numbers);




console.log("jumble",shuffledNumbers);

function shuffleArrayto(array) {
  const shuffledArrayto = array.slice();
  for (let i = shuffledArrayto.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArrayto[i], shuffledArrayto[j]] = [shuffledArrayto[j], shuffledArrayto[i]];
  }
  return shuffledArrayto;
}

// Create an array containing numbers from 1 to 20
const numbersto = Array.from({ length: 20 }, (_, i) => i + 1);

// Shuffle the array
const shuffledNumbersto = shuffleArrayto(numbersto);

//shufflenummber30
function shuffleArraythree(array) {
  const shuffledArraythree = array.slice();
  for (let i = shuffledArraythree.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArraythree[i], shuffledArraythree[j]] = [shuffledArraythree[j], shuffledArraythree[i]];
  }
  return shuffledArraythree;
}

// Create an array containing numbers from 1 to 30
const numbersthree = Array.from({ length: 30 }, (_, i) => i + 1);

// Shuffle the array
const shuffledNumbersthree = shuffleArraythree(numbersthree);


//shufflenummber25
function shuffleArraytwofive(array) {
  const shuffledArraytwofive = array.slice();
  for (let i = shuffledArraytwofive.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArraytwofive[i], shuffledArraytwofive[j]] = [shuffledArraytwofive[j], shuffledArraytwofive[i]];
  }
  return shuffledArraytwofive;
}

// Create an array containing numbers from 1 to 25
const numberstwofive = Array.from({ length: 25 }, (_, i) => i + 1);

// Shuffle the array
const shuffledNumberstwofive = shuffleArraytwofive(numberstwofive);

//shuffleArrayseventyseven77
function shuffleArrayseventyseven(array) {
  const shuffledArrayseventyseven = array.slice();
  for (let i = shuffledArrayseventyseven.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArrayseventyseven[i], shuffledArrayseventyseven[j]] = [shuffledArrayseventyseven[j], shuffledArrayseventyseven[i]];
  }
  return shuffledArrayseventyseven;
}

// Create an array containing numbers from 1 to 77
const numbersseventyseven = Array.from({ length: 77 }, (_, i) => i + 1);

// Shuffle the array
const shuffledNumbersseventyseven = shuffleArrayseventyseven(numbersseventyseven);

//shuffleArrayseventyseven15
function shuffleArrayfifteen(array) {
  const shuffledArrayfifteen = array.slice();
  for (let i = shuffledArrayfifteen.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArrayfifteen[i], shuffledArrayfifteen[j]] = [shuffledArrayfifteen[j], shuffledArrayfifteen[i]];
  }
  return shuffledArrayfifteen;
}

// Create an array containing numbers from 1 to 15
const numbersfifteen = Array.from({ length: 15 }, (_, i) => i + 1);

// Shuffle the array
const shuffledNumbersfifteen = shuffleArrayfifteen(numbersfifteen);


//shuffleArrayten
function shuffleArrayten(array) {
  const shuffleArrayten = array.slice();
  for (let i = shuffleArrayten.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleArrayten[i], shuffleArrayten[j]] = [shuffleArrayten[j], shuffleArrayten[i]];
  }
  return shuffleArrayten;
}

// Create an array containing numbers from 1 to 10
const numbersten = Array.from({ length: 15 }, (_, i) => i + 1);

// Shuffle the array
const shuffledNumbersten = shuffleArrayten(numbersten);








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
          { nextId: 'tfidgenration' },
  ],
},

chooseapple: {
  botPrompt: "From the below options find an Apple?",
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
  botPrompt: 'Hurray you have Choosed the correct answer  ! 😎',
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
  botPrompt: '<strong> Day 1 : </strong> Gross Motor Skill <br>  Gross Motor skills develop the bigger muscles of a child’s body helping them with their daily activities including academics. <br> Watch the video to understand how these activities can be done inside classrooms:   ',
  answers: [
          { nextId: 'day1link' },
  ],
},
day1link: {
  botPrompt: 'https://youtu.be/WzyELzv_CRQ',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day1comment',
    },
  ],
},
day1comment: {
  botPrompt: 'Along with exercising children learn essential English vocabulary and action words which they will soon use in sentences.   ',
  answers: [
          { nextId: 'wishtocontinue' },
  ],
},


wishtocontinue: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day2',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},





//day2
day2: {
  botPrompt: ' <strong> Day 2 : </strong> Fine motor skill activities involve use of the small muscles which control the hand, fingers and thumb. <br> Here is a video which helps in developing fine muscles. <br> Play Dough activity:',
  answers: [
          { nextId: 'day2link' },
  ],
},
day2link: {
  botPrompt: 'https://youtu.be/7CpiCbBsh5A',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day2comment',
    },
  ],
},
day2comment: {
  botPrompt: 'Another activity to develop this skill is Rice colouring ',
  answers: [
          { nextId: 'day21link' },
  ],
},

day21link: {
  botPrompt: 'https://youtu.be/XHzyKBWx9VI',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day22comment',
    },
  ],
},
day22comment: {
  botPrompt: 'Here we can see our children having fun while doing this activities',
  answers: [
          { nextId: 'day21link' },
  ],
},
day21link: {
  botPrompt: 'https://youtu.be/XHzyKBWx9VI',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue2',
    },
  ],
},

wishtocontinue2: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day3',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},


//day3
day3: {
  botPrompt: ' <strong> Day 3 : </strong> Lines help in developing a child`s fine motor skills and provide them with good handwriting skills. <br> Let us begin by learning different lines and doing activity related to it',
  answers: [
          { nextId: 'day3link' },
  ],
},
day3link: {
  botPrompt: 'https://youtu.be/WSj93xe2U40',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day3comment',
    },
  ],
},
day3comment: {
  botPrompt: 'Lines can also be demonstrated through Gross motor skill activity',
  answers: [
          { nextId: 'day31link' },
  ],
},

day31link: {
  botPrompt: 'https://youtu.be/2vEeUFFIYQE',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue3',
    },
  ],
},

wishtocontinue3: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day4',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},



//day4
day4: {
  botPrompt: '<strong> Day 4 : </strong> To understand directions, children need a lot of practice. <br> So, let`s see how we can make learning directions fun. This is a gross motor skill activity.',
  answers: [
          { nextId: 'day4link' },
  ],
},
day4link: {
  botPrompt: 'https://youtu.be/PKeJkjv-otY',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day4comment',
    },
  ],
},
day4comment: {
  botPrompt: 'Let`s look at another video where directions can be learnt while playing.',
  answers: [
          { nextId: 'day41link' },
  ],
},

day41link: {
  botPrompt: 'https://youtu.be/xE3IFDP85nk',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day41comment',
    },
  ],
},
day41comment: {
  botPrompt: 'Now it’s time for some dance',
  answers: [
          { nextId: 'day42link' },
  ],
},

day42link: {
  botPrompt: 'https://youtu.be/z8ZCnErO34o',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue4',
    },
  ],
},

wishtocontinue4: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day5',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},


//day5
day5: {
  botPrompt: '<strong> Day 5 : </strong> Let us learn how to keep our classroom a happy, safe and interactive space . <br> A  song sung together plays an important role in settling the children down.',
  answers: [
          { nextId: 'day5comment' },
  ],
},
day5comment: {
  botPrompt: '<strong>O BE CAREFUL LITTLE EYES </strong>',
  answers: [
          { nextId: 'day5link' },
  ],
},
day5link: {
  botPrompt: 'https://youtu.be/-EpJ7igt-0E',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue5',
    },
  ],
},

wishtocontinue5: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day6',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},


//day6
day6: {
  botPrompt: '<strong> Day 6 : </strong> Now, let`s see how we can make a classroom quiet really fast.',
  answers: [
          { nextId: 'day6comment' },
  ],
},
day6comment: {
  botPrompt: 'Time Out : ',
  answers: [
          { nextId: 'day6link' },
  ],
},
day6link: {
  botPrompt: 'https://youtu.be/BRPZNYerJdM',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day61comment',
    },
  ],
},
day61comment: {
  botPrompt: '1 . 2.. 3... ',
  answers: [
          { nextId: 'day61link' },
  ],
},

day61link: {
  botPrompt: 'https://youtu.be/Iq4PVbWRN2k',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue6',
    },
  ],
},


wishtocontinue6: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day7',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},


//day7
day7: {
  botPrompt: '<strong> Day 7 : </strong> ToDay is a Quiz Day.',
  answers: [
          { nextId: 'day7comment' },
  ],
},
day7comment: {
  botPrompt: '<strong> START </strong>',
  answers: [
          { nextId: 'day71comment' },
  ],
},
day71comment: {
  botPrompt: 'A question-answer session adds energy to the class. Here we go…',
  answers: [
          { nextId: 'day7link' },
  ],
},

day7link: {
  botPrompt: 'https://youtu.be/HM5AgkSwUxc',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day72comment',
    },
  ],
},
day72comment: {
  botPrompt: 'Now let us learn the Alphabet song.',
  answers: [
          { nextId: 'day72link' },
  ],
},

day72link: {
  botPrompt: 'https://youtu.be/OXtOEGx5MB0',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue7',
    },
  ],
},

wishtocontinue7: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day8',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},


//day8
day8: {
  botPrompt: '<strong> Day 8 : </strong> Now, it`s time for tracing alphabets and numbers',
  answers: [
          { nextId: 'day8link' },
  ],
},
day8link: {
  botPrompt: 'https://youtu.be/VPpTp-PMAZs',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day8comment',
    },
  ],
},
day8comment: {
  botPrompt: 'Look at our book <br> <strong> Tracing Capital letters </strong>',
  answers: [
          { nextId: 'day81link' },
  ],
},

day81link: {
  botPrompt: 'https://drive.google.com/file/d/1bmULkMLEs2F6pM_SlFCDQid9aGXHJy70/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day81comment',
    },
  ],
},
day81comment: {
  botPrompt: '<strong> Tracing Small letters </strong>',
  answers: [
          { nextId: 'day82link' },
  ],
},

day82link: {
  botPrompt: 'https://drive.google.com/file/d/1Oq-vDgxTJauH2R80KRL05bv5_IM8uqk-/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day82comment',
    },
  ],
},

day82comment: {
  botPrompt: 'Here is another video of tracing numbers.',
  answers: [
          { nextId: 'day83link' },
  ],
},

day83link: {
  botPrompt: 'https://youtu.be/y737D8xSgHg',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day83comment',
    },
  ],
},
day83comment: {
  botPrompt: 'Let us have a look into the pages of our book-',
  answers: [
          { nextId: 'day84link' },
  ],
},

day84link: {
  botPrompt: 'https://drive.google.com/file/d/173lvzQ9Xpqcck9o6nDv6iD7l-98bvc24/view?usp=drive_link',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day84comment',
    },
  ],
},

day84comment: {
  botPrompt: 'Let`s solve <br> <strong> TRACING CAPITAL LETTERS  QUESTIONS </strong>',
  answers: [
          { nextId: 'capletters'+shuffledNumbersto[0] },
  ],
},




//capletters


["capletters"+shuffledNumbersto[0]]: {
  botPrompt: ' Which alphabet is made with 2 slanting lines and a sleeping  line? ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A', 'B', "C","D"]),
  answers: [
    {
      answer: 'A',
      nextId: 'capscorrect',
    },
    {
      answer: 'B',
      nextId: 'incapscorrect',
    },
    {
      answer: "C",
      nextId: 'incapscorrect',
    },
    {
      answer: "D",
      nextId: 'incapscorrect',
    },
  ],
},
capscorrect: {
  botPrompt: 'Hurray <strong>A</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capletters'+shuffledNumbersto[1],
    },
  ],
},
incapscorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'capletters'+shuffledNumbersto[1],
    },
  ],
},

['capletters'+shuffledNumbersto[1]]: {
  botPrompt: ' Identify the alphabet made with two sleeping lines and a straight line.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['E', 'F', "G","H"]),
  answers: [
    {
      answer: 'E',
      nextId: 'incapscorrectq2',
    },
    {
      answer: 'F',
      nextId: 'capscorrectq2',
    },
    {
      answer: "G",
      nextId: 'incapscorrectq2',
    },
    {
      answer: "H",
      nextId: 'incapscorrectq2',
    },
  ],
},

capscorrectq2: {
  botPrompt: 'Hurray! <strong>F</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'capletters'+shuffledNumbersto[2],
    },
  ],
},
incapscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"F"</strong>',
  answers: [
    {
      nextId: 'capletters'+shuffledNumbersto[2],
    },
  ],
},

//3
['capletters'+shuffledNumbersto[2]]: {
botPrompt: "Which alphabet is formed with two slanting and a straight line?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['I', 'J', "K","L"]),
answers: [
  {
    answer: 'I',
    nextId: 'incapscorrectq3',
  },
  {
    answer: 'J',
    nextId: 'incapscorrectq3',
  },
  {
    answer: "K",
    nextId: 'capscorrectq3',
  },
  {
    answer: "L",
    nextId: 'incapscorrectq3',
  },
],
},

capscorrectq3: {
botPrompt: 'Hurray! <strong>K</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[3],
  },
],
},
incapscorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"K"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[3],
  },
],
},

//4
['capletters'+shuffledNumbersto[3]]: {
botPrompt: ' Find the alphabet made with standing and a curved line. ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['M', 'N', "O","P"]),
answers: [
  {
    answer: 'M',
    nextId: 'incapscorrectq4',
  },
  {
    answer: 'N',
    nextId: 'incapscorrectq4',
  },
  {
    answer: "O",
    nextId: 'incapscorrectq4',
  },
  {
    answer: "P",
    nextId: 'capscorrectq4',
  },
],
},

capscorrectq4: {
botPrompt: 'Hurray! <strong>P</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[4],
  },
],
},
incapscorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"P"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[4],
  },
],
},

//5
['capletters'+shuffledNumbersto[4]]: {
botPrompt: ' Which alphabet has slanting, curved and a standing line? ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['Q', 'R', "S","T"]),
answers: [
  {
    answer: 'Q',
    nextId: 'incapscorrectq5',
  },
  {
    answer: 'R',
    nextId: 'capscorrectq5',
  },
  {
    answer: "S",
    nextId: 'incapscorrectq5',
  },
  {
    answer: "T",
    nextId: 'incapscorrectq5',
  },
],
},

capscorrectq5: {
botPrompt: 'Hurray! <strong>R</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[5],
  },
],
},
incapscorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"R"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[5],
  },
],
},

//6
['capletters'+shuffledNumbersto[5]]: {
botPrompt: ' Identify the alphabet formed with curved line.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['U', 'V', "W","X"]),
answers: [
  {
    answer: 'U',
    nextId: 'capscorrectq6',
  },
  {
    answer: 'V',
    nextId: 'incapscorrectq6',
  },
  {
    answer: "W",
    nextId: 'incapscorrectq6',
  },
  {
    answer: "X",
    nextId: 'incapscorrectq6',
  },
],
},

capscorrectq6: {
botPrompt: 'Hurray! <strong>U</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[6],
  },
],
},
incapscorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[6],
  },
],
},

//7
['capletters'+shuffledNumbersto[6]]: {
botPrompt: ' Which alphabet has straight and two curved lines? ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Y', 'Z', "A","B"]),
answers: [
  {
    answer: 'Y',
    nextId: 'incapscorrectq7',
  },
  {
    answer: 'Z',
    nextId: 'incapscorrectq7',
  },
  {
    answer: "A",
    nextId: 'incapscorrectq7',
  },
  {
    answer: "B",
    nextId: 'capscorrectq7',
  },
],
},

capscorrectq7: {
botPrompt: 'Hurray! <strong>B</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[7],
  },
],
},
incapscorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"B"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[7],
  },
],
},


//8
['capletters'+shuffledNumbersto[7]]: {
botPrompt: 'Find the alphabet made with standing line and three sleeping lines.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['C', 'D', "E","F"]),
answers: [
  {
    answer: 'C',
    nextId: 'incapscorrectq8',
  },
  {
    answer: 'D',
    nextId: 'incapscorrectq8',
  },
  {
    answer: "E",
    nextId: 'capscorrectq8',
  },
  {
    answer: "F",
    nextId: 'incapscorrectq8',
  },
],
},

capscorrectq8: {
botPrompt: 'Hurray! <strong>E</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[8],
  },
],
},
incapscorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[8],
  },
],
},

//9
['capletters'+shuffledNumbersto[8]]: {
botPrompt: 'Which alphabet has a standing line?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['G', 'H', "I","J"]),
answers: [
  {
    answer: 'G',
    nextId: 'incapscorrectq9',
  },
  {
    answer: 'H',
    nextId: 'incapscorrectq9',
  },
  {
    answer: "I",
    nextId: 'capscorrectq9',
  },
  {
    answer: "J",
    nextId: 'incapscorrectq9',
  },
],
},

capscorrectq9: {
botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[9],
  },
],
},
incapscorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[9],
  },
],
},


//10
['capletters'+shuffledNumbersto[9]]: {
botPrompt: ' Identify the alphabet formed with slanting and two standing lines.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['K', 'L', "M","N"]),
answers: [
  {
    answer: 'K',
    nextId: 'incapscorrectq10',
  },
  {
    answer: 'L',
    nextId: 'incapscorrectq10',
  },
  {
    answer: "M",
    nextId: 'incapscorrectq10',
  },
  {
    answer: "N",
    nextId: 'capscorrectq10',
  },
],
},

capscorrectq10: {
botPrompt: 'Hurray! <strong>N</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[10],
  },
],
},
incapscorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"N"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[10],
  },
],
},

//11
['capletters'+shuffledNumbersto[10]]: {
botPrompt: 'Which alphabet is made with two curved lines?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['O', 'P', "Q","R"]),
answers: [
  {
    answer: 'O',
    nextId: 'capscorrectq11',
  },
  {
    answer: 'P',
    nextId: 'incapscorrectq11',
  },
  {
    answer: "Q",
    nextId: 'incapscorrectq11',
  },
  {
    answer: "R",
    nextId: 'incapscorrectq11',
  },
],
},

capscorrectq11: {
botPrompt: 'Hurray! <strong>O</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[11],
  },
],
},
incapscorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[11],
  },
],
},

//12
['capletters'+shuffledNumbersto[11]]: {
botPrompt: ' Find the alphabet that has two slanting lines.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['S', 'T', "U","V"]),
answers: [
  {
    answer: 'S',
    nextId: 'incapscorrectq12',
  },
  {
    answer: 'T',
    nextId: 'incapscorrectq12',
  },
  {
    answer: "U",
    nextId: 'incapscorrectq12',
  },
  {
    answer: "V",
    nextId: 'capscorrectq12',
  },
],
},

capscorrectq12: {
botPrompt: 'Hurray! <strong>V</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[12],
  },
],
},
incapscorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"V"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[12],
  },
],
},

//13
['capletters'+shuffledNumbersto[12]]: {
botPrompt: 'Identify the alphabet made with slanting and two sleeping lines.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['W', 'X', "Y","Z"]),
answers: [
  {
    answer: 'W',
    nextId: 'incapscorrectq13',
  },
  {
    answer: 'X',
    nextId: 'incapscorrectq13',
  },
  {
    answer: "Y",
    nextId: 'incapscorrectq13',
  },
  {
    answer: "Z",
    nextId: 'capscorrectq13',
  },
],
},

capscorrectq13: {
botPrompt: 'Hurray! <strong>Z</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[13],
  },
],
},
incapscorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Z"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[13],
  },
],
},

//14
['capletters'+shuffledNumbersto[13]]: {
botPrompt: ' Which alphabet is formed with a curved line',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['A', 'B', "C","D"]),
answers: [
  {
    answer: 'A',
    nextId: 'incapscorrectq14',
  },
  {
    answer: 'B',
    nextId: 'incapscorrectq14',
  },
  {
    answer: "C",
    nextId: 'capscorrectq14',
  },
  {
    answer: "D",
    nextId: 'incapscorrectq14',
  },
],
},

capscorrectq14: {
botPrompt: 'Hurray! <strong>C</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[14],
  },
],
},
incapscorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"C"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[14],
  },
],
},


//15
['capletters'+shuffledNumbersto[14]]: {
botPrompt: ' Find the alphabet that has two straight lines and one sleeping line',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['E', 'F', "G","H"]),
answers: [
  {
    answer: 'E',
    nextId: 'incapscorrectq15',
  },
  {
    answer: 'F',
    nextId: 'incapscorrectq15',
  },
  {
    answer: "G",
    nextId: 'incapscorrectq15',
  },
  {
    answer: "H",
    nextId: 'capscorrectq15',
  },
],
},

capscorrectq15: {
botPrompt: 'Hurray! <strong>H</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[15],
  },
],
},
incapscorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"H"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[15],
  },
],
},

//16
['capletters'+shuffledNumbersto[15]]: {
  botPrompt: 'Identify the alphabet made with straight and curved line,',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['I', 'J', "K","L"]),
  answers: [
    {
      answer: 'I',
      nextId: 'incapscorrectq16',
    },
    {
      answer: 'J',
      nextId: 'capscorrectq16',
    },
    {
      answer: "K",
      nextId: 'incapscorrectq16',
    },
    {
      answer: "L",
      nextId: 'incapscorrectq16',
    },
  
  ],
},
capscorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>J</strong> 😎',
  answers: [
    {
      nextId: 'capletters'+shuffledNumbersto[16],
    },
  ],
},
incapscorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"J"</strong>',
  answers: [
    {
      nextId: 'capletters'+shuffledNumbersto[16],
    },
  ],
},

//17
['capletters'+shuffledNumbersto[16]]: {
botPrompt: 'Which alphabet is formed with two standing and two slanting lines?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['O', 'N', "M","P"]),
answers: [
  {
    answer: 'O',
    nextId: 'incapscorrectq17',
  },
  {
    answer: 'N',
    nextId: 'incapscorrectq17',
  },
  {
    answer: "M",
    nextId: 'capscorrectq17',
  },
  {
    answer: "P",
    nextId: 'incapscorrectq17',
  },
 
],
},
capscorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>M</strong> 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[17],
  },
],
},
incapscorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"M"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[17],
  },
],
},

//18
['capletters'+shuffledNumbersto[17]]: {
botPrompt: 'Find the alphabet that has two curved and slanting line. ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Q', 'R', "S","T"]),
answers: [
  {
    answer: 'Q',
    nextId: 'capscorrectq18',
  },
  {
    answer: 'R',
    nextId: 'incapscorrectq18',
  },
  {
    answer: "S",
    nextId: 'incapscorrectq18',
  },
  {
    answer: "T",
    nextId: 'incapscorrectq18',
  },
 
],
},
capscorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Q</strong> 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[18],
  },
],
},
incapscorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Q"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[18],
  },
],
},

//19
['capletters'+shuffledNumbersto[18]]: {
botPrompt: 'Identify the alphabet made with two standing lines and a curved line. ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['U', 'V', "W","X"]),
answers: [
  {
    answer: 'U',
    nextId: 'capscorrectq19',
  },
  {
    answer: 'V',
    nextId: 'incapscorrectq19',
  },
  {
    answer: "W",
    nextId: 'incapscorrectq19',
  },
  {
    answer: "X",
    nextId: 'incapscorrectq19',
  },
 
],
},
capscorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>U</strong> Answers! 😎',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[19],
  },
],
},
incapscorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
answers: [
  {
    nextId: 'capletters'+shuffledNumbersto[19],
  },
],
},

//20
['capletters'+shuffledNumbersto[19]]: {
botPrompt: 'Which alphabet is formed with one standing and one sleeping line?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Y', 'L', "A","B"]),
answers: [
  {
    answer: 'Y',
    nextId: 'incapscorrectq20',
  },
  {
    answer: 'L',
    nextId: 'capscorrectq20',
  },
  {
    answer: "A",
    nextId: 'incapscorrectq20',
  },
  {
    answer: "B",
    nextId: 'incapscorrectq20',
  },

],
},
capscorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>L</strong> 😎',
answers: [
  {
    nextId: 'day85comment',
  },
],
},
incapscorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"L"</strong>',
answers: [
  {
    nextId: 'day85comment',
  },
],
},

//endcapsletter

day85comment: {
  botPrompt: 'Let`s solve <br> <strong> TRACING SMALL LETTERS  QUESTIONS  QUESTIONS </strong>',
  answers: [
          { nextId: 'small_letter'+shuffledNumbersto[0] },
  ],
},

//smallletter


["small_letter"+shuffledNumbersto[0]]: {
  botPrompt: ' Which alphabet is made with curved lines?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['a', 'b', "c","d"]),
  answers: [
    {
      answer: 'a',
      nextId: 'smallcorrect',
    },
    {
      answer: 'b',
      nextId: 'insmallcorrect',
    },
    {
      answer: "c",
      nextId: 'insmallcorrect',
    },
    {
      answer: "d",
      nextId: 'insmallcorrect',
    },
  ],
},
smallcorrect: {
  botPrompt: 'Hurray <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'small_letter'+shuffledNumbersto[1],
    },
  ],
},
insmallcorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'small_letter'+shuffledNumbersto[1],
    },
  ],
},

['small_letter'+shuffledNumbersto[1]]: {
  botPrompt: 'Identify the alphabet made with curved, and a sleeping line.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['e', 'f', "g","h"]),
  answers: [
    {
      answer: 'e',
      nextId: 'insmallcorrectq2',
    },
    {
      answer: 'f',
      nextId: 'smallcorrectq2',
    },
    {
      answer: "g",
      nextId: 'insmallcorrectq2',
    },
    {
      answer: "h",
      nextId: 'insmallcorrectq2',
    },
  ],
},

smallcorrectq2: {
  botPrompt: 'Hurray! <strong>f</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'small_letter'+shuffledNumbersto[2],
    },
  ],
},
insmallcorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"f"</strong>',
  answers: [
    {
      nextId: 'small_letter'+shuffledNumbersto[2],
    },
  ],
},

//3
['small_letter'+shuffledNumbersto[2]]: {
botPrompt: "Which alphabet is formed with two curved lines?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['i', 'j', "o","k"]),
answers: [
  {
    answer: 'i',
    nextId: 'insmallcorrectq3',
  },
  {
    answer: 'j',
    nextId: 'insmallcorrectq3',
  },
  {
    answer: "o",
    nextId: 'smallcorrectq3',
  },
  {
    answer: "k",
    nextId: 'insmallcorrectq3',
  },
],
},

smallcorrectq3: {
botPrompt: 'Hurray! <strong>o</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[3],
  },
],
},
insmallcorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"o"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[3],
  },
],
},

//4
['small_letter'+shuffledNumbersto[3]]: {
botPrompt: ' Find the alphabet made with standing and a curved line. ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['m', 'n', "o","p"]),
answers: [
  {
    answer: 'm',
    nextId: 'insmallcorrectq4',
  },
  {
    answer: 'n',
    nextId: 'insmallcorrectq4',
  },
  {
    answer: "o",
    nextId: 'insmallcorrectq4',
  },
  {
    answer: "p",
    nextId: 'smallcorrectq4',
  },
],
},

smallcorrectq4: {
botPrompt: 'Hurray! <strong>p</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[4],
  },
],
},
insmallcorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"p"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[4],
  },
],
},

//5
['small_letter'+shuffledNumbersto[4]]: {
botPrompt: ' Which alphabet has both curved line and a straight line ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['q', 'o', "s","t"]),
answers: [
  {
    answer: 'q',
    nextId: 'smallcorrectq5',
  },
  {
    answer: 'o',
    nextId: 'insmallcorrectq5',
  },
  {
    answer: "s",
    nextId: 'insmallcorrectq5',
  },
  {
    answer: "t",
    nextId: 'insmallcorrectq5',
  },
],
},

smallcorrectq5: {
botPrompt: 'Hurray! <strong>q</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[5],
  },
],
},
insmallcorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"q"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[5],
  },
],
},

//6
['small_letter'+shuffledNumbersto[5]]: {
botPrompt: ' Identify the alphabet formed with curved line.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['u', 'v', "w","x"]),
answers: [
  {
    answer: 'u',
    nextId: 'smallcorrectq6',
  },
  {
    answer: 'v',
    nextId: 'insmallcorrectq6',
  },
  {
    answer: "w",
    nextId: 'insmallcorrectq6',
  },
  {
    answer: "x",
    nextId: 'insmallcorrectq6',
  },
],
},

smallcorrectq6: {
botPrompt: 'Hurray! <strong>u</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[6],
  },
],
},
insmallcorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"u"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[6],
  },
],
},

//7
['small_letter'+shuffledNumbersto[6]]: {
botPrompt: ' Which alphabet has straight and one curve lines? ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['y', 'z', "a","b"]),
answers: [
  {
    answer: 'y',
    nextId: 'insmallcorrectq7',
  },
  {
    answer: 'z',
    nextId: 'insmallcorrectq7',
  },
  {
    answer: "a",
    nextId: 'insmallcorrectq7',
  },
  {
    answer: "b",
    nextId: 'smallcorrectq7',
  },
],
},

smallcorrectq7: {
botPrompt: 'Hurray! <strong>b</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[7],
  },
],
},
insmallcorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"b"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[7],
  },
],
},


//8
['small_letter'+shuffledNumbersto[7]]: {
botPrompt: 'Find the alphabet made with standing line and a curved line.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['c', 'd', "e","f"]),
answers: [
  {
    answer: 'c',
    nextId: 'insmallcorrectq8',
  },
  {
    answer: 'd',
    nextId: 'smallcorrectq8',
  },
  {
    answer: "e",
    nextId: 'insmallcorrectq8',
  },
  {
    answer: "f",
    nextId: 'insmallcorrectq8',
  },
],
},

smallcorrectq8: {
botPrompt: 'Hurray! <strong>d</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[8],
  },
],
},
insmallcorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"d"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[8],
  },
],
},

//9
['small_letter'+shuffledNumbersto[8]]: {
botPrompt: 'Which alphabet has a standing line and a dot',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['g', 'h', "i","j"]),
answers: [
  {
    answer: 'g',
    nextId: 'insmallcorrectq9',
  },
  {
    answer: 'h',
    nextId: 'insmallcorrectq9',
  },
  {
    answer: "i",
    nextId: 'smallcorrectq9',
  },
  {
    answer: "j",
    nextId: 'insmallcorrectq9',
  },
],
},

smallcorrectq9: {
botPrompt: 'Hurray! <strong>i</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[9],
  },
],
},
insmallcorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"i"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[9],
  },
],
},


//10
['small_letter'+shuffledNumbersto[9]]: {
botPrompt: ' Identify the alphabet formed with one standing and one curved lines',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['k', 'l', "m","n"]),
answers: [
  {
    answer: 'k',
    nextId: 'insmallcorrectq10',
  },
  {
    answer: 'l',
    nextId: 'insmallcorrectq10',
  },
  {
    answer: "m",
    nextId: 'insmallcorrectq10',
  },
  {
    answer: "n",
    nextId: 'smallcorrectq10',
  },
],
},

smallcorrectq10: {
botPrompt: 'Hurray! <strong>n</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[10],
  },
],
},
insmallcorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"n"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[10],
  },
],
},

//11
['small_letter'+shuffledNumbersto[10]]: {
botPrompt: 'Which alphabet is made with two curved lines?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['o', 'p', "q","r"]),
answers: [
  {
    answer: 'o',
    nextId: 'smallcorrectq11',
  },
  {
    answer: 'p',
    nextId: 'insmallcorrectq11',
  },
  {
    answer: "q",
    nextId: 'insmallcorrectq11',
  },
  {
    answer: "r",
    nextId: 'insmallcorrectq11',
  },
],
},

smallcorrectq11: {
botPrompt: 'Hurray! <strong>o</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[11],
  },
],
},
insmallcorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"o"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[11],
  },
],
},

//12
['small_letter'+shuffledNumbersto[11]]: {
botPrompt: ' Find the alphabet that has two slanting lines.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['s', 't', "u","v"]),
answers: [
  {
    answer: 's',
    nextId: 'insmallcorrectq12',
  },
  {
    answer: 't',
    nextId: 'insmallcorrectq12',
  },
  {
    answer: "u",
    nextId: 'insmallcorrectq12',
  },
  {
    answer: "v",
    nextId: 'smallcorrectq12',
  },
],
},

smallcorrectq12: {
botPrompt: 'Hurray! <strong>v</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[12],
  },
],
},
insmallcorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"v"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[12],
  },
],
},

//13
['small_letter'+shuffledNumbersto[12]]: {
botPrompt: 'Identify the alphabet made with slanting and two sleeping lines.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['w', 'x', "y","z"]),
answers: [
  {
    answer: 'w',
    nextId: 'insmallcorrectq13',
  },
  {
    answer: 'x',
    nextId: 'insmallcorrectq13',
  },
  {
    answer: "y",
    nextId: 'insmallcorrectq13',
  },
  {
    answer: "z",
    nextId: 'smallcorrectq13',
  },
],
},

smallcorrectq13: {
botPrompt: 'Hurray! <strong>z</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[13],
  },
],
},
insmallcorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"z"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[13],
  },
],
},

//14
['small_letter'+shuffledNumbersto[13]]: {
botPrompt: ' Which alphabet is formed with a curved line',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'b', "c","d"]),
answers: [
  {
    answer: 'a',
    nextId: 'insmallcorrectq14',
  },
  {
    answer: 'b',
    nextId: 'insmallcorrectq14',
  },
  {
    answer: "c",
    nextId: 'smallcorrectq14',
  },
  {
    answer: "d",
    nextId: 'insmallcorrectq14',
  },
],
},

smallcorrectq14: {
botPrompt: 'Hurray! <strong>c</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[14],
  },
],
},
insmallcorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"c"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[14],
  },
],
},


//15
['small_letter'+shuffledNumbersto[14]]: {
botPrompt: 'Find the alphabet that has one straight line and one curved line',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['e', 'f', "g","h"]),
answers: [
  {
    answer: 'e',
    nextId: 'insmallcorrectq15',
  },
  {
    answer: 'f',
    nextId: 'insmallcorrectq15',
  },
  {
    answer: "g",
    nextId: 'insmallcorrectq15',
  },
  {
    answer: "h",
    nextId: 'smallcorrectq15',
  },
],
},

smallcorrectq15: {
botPrompt: 'Hurray! <strong>h</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[15],
  },
],
},
insmallcorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"h"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[15],
  },
],
},

//16
['small_letter'+shuffledNumbersto[15]]: {
  botPrompt: 'Identify the alphabet made with a curved line and a dot.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['i', 'j', "k","l"]),
  answers: [
    {
      answer: 'i',
      nextId: 'insmallcorrectq16',
    },
    {
      answer: 'j',
      nextId: 'smallcorrectq16',
    },
    {
      answer: "k",
      nextId: 'insmallcorrectq16',
    },
    {
      answer: "l",
      nextId: 'insmallcorrectq16',
    },
  
  ],
},
smallcorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>j</strong> 😎',
  answers: [
    {
      nextId: 'small_letter'+shuffledNumbersto[16],
    },
  ],
},
insmallcorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"j"</strong>',
  answers: [
    {
      nextId: 'small_letter'+shuffledNumbersto[16],
    },
  ],
},

//17
['small_letter'+shuffledNumbersto[16]]: {
botPrompt: 'Which alphabet is formed with three standing and two curved lines.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['o', 'n', "m","p"]),
answers: [
  {
    answer: 'o',
    nextId: 'insmallcorrectq17',
  },
  {
    answer: 'n',
    nextId: 'insmallcorrectq17',
  },
  {
    answer: "m",
    nextId: 'smallcorrectq17',
  },
  {
    answer: "p",
    nextId: 'insmallcorrectq17',
  },
 
],
},
smallcorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>m</strong> 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[17],
  },
],
},
insmallcorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"m"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[17],
  },
],
},

//18
['small_letter'+shuffledNumbersto[17]]: {
botPrompt: 'Find the alphabet that has a curved and straight line. ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['o', 'r', "s","v"]),
answers: [
  {
    answer: 'o',
    nextId: 'insmallcorrectq18',
  },
  {
    answer: 'r',
    nextId: 'smallcorrectq18',
  },
  {
    answer: "s",
    nextId: 'insmallcorrectq18',
  },
  {
    answer: "v",
    nextId: 'insmallcorrectq18',
  },
 
],
},
smallcorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>r</strong> 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[18],
  },
],
},
insmallcorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"r"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[18],
  },
],
},

//19
['small_letter'+shuffledNumbersto[18]]: {
botPrompt: 'Identify the alphabet made with two slanting lines ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['u', 'a', "w","x"]),
answers: [
  {
    answer: 'u',
    nextId: 'insmallcorrectq19',
  },
  {
    answer: 'a',
    nextId: 'insmallcorrectq19',
  },
  {
    answer: "w",
    nextId: 'insmallcorrectq19',
  },
  {
    answer: "x",
    nextId: 'smallcorrectq19',
  },
 
],
},
smallcorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>x</strong> Answers! 😎',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[19],
  },
],
},
insmallcorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"x"</strong>',
answers: [
  {
    nextId: 'small_letter'+shuffledNumbersto[19],
  },
],
},

//20
['small_letter'+shuffledNumbersto[19]]: {
botPrompt: 'Which alphabet is formed with one standing line?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['y', 'l', "a","b"]),
answers: [
  {
    answer: 'y',
    nextId: 'insmallcorrectq20',
  },
  {
    answer: 'l',
    nextId: 'smallcorrectq20',
  },
  {
    answer: "A",
    nextId: 'insmallcorrectq20',
  },
  {
    answer: "b",
    nextId: 'insmallcorrectq20',
  },

],
},
smallcorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>l</strong> 😎',
answers: [
  {
    nextId: 'wishtocontinue8',
  },
],
},
insmallcorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"l"</strong>',
answers: [
  {
    nextId: 'wishtocontinue8',
  },
],
},



//endsmallletter









wishtocontinue8: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day9',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},

//day9
day9: {
  botPrompt: ' <strong> Day 9 : </strong> Learn your vowels through a fun song and dance',
  answers: [
          { nextId: 'day9link' },
  ],
},

day9link: {
  botPrompt: 'https://youtu.be/hlNn2EGRaA4',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day9comment',
    },
  ],
},
day9comment: {
  botPrompt: 'Here are some activities to make learning vowels interesting.',
  answers: [
          { nextId: 'day91link' },
  ],
},

day91link: {
  botPrompt: 'https://youtu.be/XRwjnD1DB1U',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue9',
    },
  ],
},

wishtocontinue9: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'vowelsareback',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},


//day10


//day11

  vowelsareback: {
    botPrompt: "<strong> Day 11 : </strong> Vowels are Back",
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
        nextId: 'vowels_question'+shuffledNumbers[0],
      },
    ],
  },

 ["vowels_question"+shuffledNumbers[0]]: {
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
    botPrompt: 'Hurray <strong>A</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'vowels_question'+shuffledNumbers[1],
      },
    ],
  },
  incorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
    answers: [
      {
        nextId: 'vowels_question'+shuffledNumbers[1],
      },
    ],
  },

  ['vowels_question'+shuffledNumbers[1]]: {
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
    botPrompt: 'Hurray! <strong>O</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'vowels_question'+shuffledNumbers[2],
      },
    ],
  },
  incorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
    answers: [
      {
        nextId: 'vowels_question'+shuffledNumbers[2],
      },
    ],
  },

//3
['vowels_question'+shuffledNumbers[2]]: {
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
  botPrompt: 'Hurray! <strong>None of the Above</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[3],
    },
  ],
},
incorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"None of the Above"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[3],
    },
  ],
},

//4
['vowels_question'+shuffledNumbers[3]]: {
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
  botPrompt: 'Hurray! <strong>U</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[4],
    },
  ],
},
incorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[4],
    },
  ],
},

//5
['vowels_question'+shuffledNumbers[4]]: {
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
  botPrompt: 'Hurray! <strong>O</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[5],
    },
  ],
},
incorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[5],
    },
  ],
},

//6
['vowels_question'+shuffledNumbers[5]]: {
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
  botPrompt: 'Hurray! <strong>A</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[6],
    },
  ],
},
incorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[6],
    },
  ],
},

//7
['vowels_question'+shuffledNumbers[6]]: {
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
  botPrompt: 'Hurray! <strong>E</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[7],
    },
  ],
},
incorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[7],
    },
  ],
},


//8
['vowels_question'+shuffledNumbers[7]]: {
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
  botPrompt: 'Hurray! <strong>U</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[8],
    },
  ],
},
incorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[8],
    },
  ],
},

//9
['vowels_question'+shuffledNumbers[8]]: {
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
  botPrompt: 'Hurray! <strong>O</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[9],
    },
  ],
},
incorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[9],
    },
  ],
},


//10
['vowels_question'+shuffledNumbers[9]]: {
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
  botPrompt: 'Hurray! <strong>U</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[10],
    },
  ],
},
incorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[10],
    },
  ],
},

//11
['vowels_question'+shuffledNumbers[10]]: {
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
  botPrompt: 'Hurray! <strong>O</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[11],
    },
  ],
},
incorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[11],
    },
  ],
},

//12
['vowels_question'+shuffledNumbers[11]]: {
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
  botPrompt: 'Hurray! <strong>E</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[12],
    },
  ],
},
incorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[12],
    },
  ],
},

//13
['vowels_question'+shuffledNumbers[12]]: {
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
  botPrompt: 'Hurray! <strong>A</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[13],
    },
  ],
},
incorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[13],
    },
  ],
},

//14
['vowels_question'+shuffledNumbers[13]]: {
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
  botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[14],
    },
  ],
},
incorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[14],
    },
  ],
},


//15
['vowels_question'+shuffledNumbers[14]]: {
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
  botPrompt: 'Hurray! <strong>E</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[15],
    },
  ],
},
incorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[15],
    },
  ],
},

//16
  ['vowels_question'+shuffledNumbers[15]]: {
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
        nextId: 'vowels_question'+shuffledNumbers[16],
      },
    ],
  },
  incorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
    answers: [
      {
        nextId: 'vowels_question'+shuffledNumbers[16],
      },
    ],
  },

//17
['vowels_question'+shuffledNumbers[16]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[17],
    },
  ],
},
incorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[17],
    },
  ],
},

//18
['vowels_question'+shuffledNumbers[17]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[18],
    },
  ],
},
incorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[18],
    },
  ],
},

//19
['vowels_question'+shuffledNumbers[18]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[19],
    },
  ],
},
incorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O" or "I"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[19],
    },
  ],
},

//20
['vowels_question'+shuffledNumbers[19]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[20],
    },
  ],
},
incorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[20],
    },
  ],
},

//21
['vowels_question'+shuffledNumbers[20]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[21],
    },
  ],
},
incorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[21],
    },
  ],
},
//22
['vowels_question'+shuffledNumbers[21]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[22],
    },
  ],
},
incorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[22],
    },
  ],
},
//23
['vowels_question'+shuffledNumbers[22]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[23],
    },
  ],
},
incorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"or"O"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[23],
    },
  ],
},
//24
['vowels_question'+shuffledNumbers[23]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[24],
    },
  ],
},
incorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[24],
    },
  ],
},

//25
['vowels_question'+shuffledNumbers[24]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[25],
    },
  ],
},
incorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is CL<strong>A</strong>SS',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[25],
    },
  ],
},

//26
['vowels_question'+shuffledNumbers[25]]: {
  botPrompt: 'Fill in the missing vowel in "gl_ss":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(["A","E","I","O","U"]),
  answers: [
    {
      answer: "A",
      nextId: 'correctq26',
    },
    {
      answer: "E",
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
      nextId: 'vowels_question'+shuffledNumbers[26],
    },
  ],
},
incorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId:  'vowels_question'+shuffledNumbers[26],
    },
  ],
},
//27
[ 'vowels_question'+shuffledNumbers[26]]: {
  botPrompt: 'Fill in the missing vowel in "gr_ss": ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A','E',"I","O","U"]),
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
      nextId:  'vowels_question'+shuffledNumbers[27],
    },
  ],
},
incorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[27],
    },
  ],
},
//28
['vowels_question'+shuffledNumbers[27]]: {
  botPrompt: 'Fill in the missing vowel in "pl_n":',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['A','E',"I","O","U"]),
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
      nextId: 'vowels_question'+shuffledNumbers[28],
    },
  ],
},
incorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[28],
    },
  ],
},
//29
['vowels_question'+shuffledNumbers[28]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[29],
    },
  ],
},
incorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[29],
    },
  ],
},
//30
['vowels_question'+shuffledNumbers[29]]: {
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
  botPrompt: 'You Have Selected Correct Anwser 🎉! CL<strong>O</strong>CK  or CL<strong>I</strong>CK  😎',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[30],
    },
  ],
},
incorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"O"</strong> or <strong>"I"</strong> ',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[30],
    },
  ],
},
//31
['vowels_question'+shuffledNumbers[30]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[31],
    },
  ],
},
incorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[31],
    },
  ],
},
//32
['vowels_question'+shuffledNumbers[31]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[32],
    },
  ],
},
incorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[32],
    },
  ],
},
//33
['vowels_question'+shuffledNumbers[32]]: {
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
      nextId: 'vowels_question'+shuffledNumbers[33],
    },
  ],
},
incorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"E"</strong>',
  answers: [
    {
      nextId: 'vowels_question'+shuffledNumbers[33],
    },
  ],
},
//34
['vowels_question'+shuffledNumbers[33]]: {
  botPrompt: 'Fill in the missing vowel in "h_ngry":',
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
 
  answers: [
    {
      nextId: 'wishtocontinue11',
    },
  ],
},
incorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"U"</strong>',

  answers: [
    {
      nextId: 'wishtocontinue11',
    },
  ],
},

wishtocontinue11: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day12',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},

//day12

day12: {
  botPrompt: '<strong> Day 12 : </strong> Let`s play and jump to understand Ascending and descending order.',
  answers: [
          { nextId: 'day12link' },
  ],
},

day12link: {
  botPrompt: 'https://youtu.be/sS45c0o-gPI',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day121link',
    },
  ],
},

day121link: {
  botPrompt: 'https://youtu.be/ipypG2rNQcU',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day122comment',
    },
  ],
},
day122comment: {
  botPrompt: 'Here`s the page from the book',
  answers: [
          { nextId: 'day123link' },
  ],
},
day123link: {
  botPrompt: 'https://drive.google.com/file/d/1XDt31gFusGyBB7m5ZDskmWXzZof76o23/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue12',
    },
  ],
},

wishtocontinue12: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day13',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},



//day13

day13: {
  botPrompt: '<strong> Day 13 : </strong>Letters of the alphabet that are not vowels are called consonants.',
  answers: [
          { nextId: 'day13link' },
  ],
},

day13link: {
  botPrompt: 'https://youtu.be/0PGa9gmhZds',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day132comment',
    },
  ],
},
day132comment: {
  botPrompt: 'Let`s have a look into the pages of the book',
  answers: [
          { nextId: 'day131link' },
  ],
},
day131link: {
  botPrompt: 'https://drive.google.com/file/d/1A7iYok28f96lk5gWf6rsv2iyZRM5VX7e/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersthree[0],
    },
  ],
},

//startconstant
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


  input: selectField(['l, p, h, n, t', 'l, p, h, n, t,e', "l, p, h, n, t,a", "l, p, h, n, t,r"]),
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
      answer: "l, p, h, n, t,r",
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
botPrompt: ' What are the consonants in "cheese',
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

input: selectField(['l, m, e', 'l, m, o', "l, m, n","l, n, o"]),
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
    answer: "l, n, o",
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
  {
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
      nextId: 'consonants'+shuffledNumbersto[26],
    },
  ],
  },
  inconsonantscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"d, m, n, d"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersto[26],
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
      nextId: 'consonants'+shuffledNumbersto[27],
    },
  ],
  },
  inconsonantscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"j, n, g, l"</strong>',
  answers: [
    {
      nextId: 'consonants'+shuffledNumbersto[27],
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





//endconstant

wishtocontinue13: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day14',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},



//day14
day14: {
  botPrompt: '<strong> Day 14 : </strong>Articles add an identity to the noun.',
  answers: [
          { nextId: 'day142comment' },
  ],
},
day142comment: {
  botPrompt: 'Let`s understand with an activity',
  answers: [
          { nextId: 'day14link' },
  ],
},
day14link: {
  botPrompt: 'https://youtu.be/47BGdVFYGPI',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day143comment',
    },
  ],
},

day143comment: {
  botPrompt: 'Let`s understand with an activity',
  answers: [
          { nextId: 'day141link' },
  ],
},



day141link: {
  botPrompt: 'https://drive.google.com/file/d/1slxqfoLFs9sv7ctQb54_-G8snOXLhiS_/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: "article"+shuffledNumberstwofive[0],
    },
  ],
},

//startarticles



//article

// 1

["article"+shuffledNumberstwofive[0]]: {
  botPrompt: 'Can I have ___ apple from the basket? ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq1',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq1',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq1',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq1',
    },
  ],
},
articlecorrectq1: {
  botPrompt: 'Hurray <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[1],
    },
  ],
},
inarticlecorrectq1: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[1],
    },
  ],
},

 // 2
['article'+shuffledNumberstwofive[1]]: {
  botPrompt: 'She wants to buy ___ book from the store.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq2',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq2',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq2',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq2',
    },
  ],
},

articlecorrectq2: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[2],
    },
  ],
},
inarticlecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[2],
    },
  ],
},

//3
['article'+shuffledNumberstwofive[2]]: {
botPrompt: "I saw ___ elephant at the zoo.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'inarticlecorrectq3',
  },
  {
    answer: 'an',
    nextId: 'articlecorrectq3',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq3',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq3',
  },
],
},

articlecorrectq3: {
botPrompt: 'Hurray! <strong>an</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[3],
  },
],
},
inarticlecorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[3],
  },
],
},

//4
['article'+shuffledNumberstwofive[3]]: {
botPrompt: 'Would you like ___ piece of cake? ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'articlecorrectq4',
  },
  {
    answer: 'an',
    nextId: 'inarticlecorrectq4',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq4',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq4',
  },
],
},

articlecorrectq4: {
botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[4],
  },
],
},
inarticlecorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[4],
  },
],
},

//5
['article'+shuffledNumberstwofive[4]]: {
botPrompt: 'My friend has ___ dog named Max.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'articlecorrectq5',
  },
  {
    answer: 'an',
    nextId: 'inarticlecorrectq5',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq5',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq5',
  },
],
},

articlecorrectq5: {
botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[5],
  },
],
},
inarticlecorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[5],
  },
],
},

//6
['article'+shuffledNumberstwofive[5]]: {
botPrompt: ' Can you lend me ___ pencil, please? ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'articlecorrectq6',
  },
  {
    answer: 'an',
    nextId: 'inarticlecorrectq6',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq6',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq6',
  },
],
},

articlecorrectq6: {
botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[6],
  },
],
},
inarticlecorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[6],
  },
],
},

//7
['article'+shuffledNumberstwofive[6]]: {
botPrompt: ' There is ___ old house on the hill.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'inarticlecorrectq7',
  },
  {
    answer: 'an',
    nextId: 'articlecorrectq7',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq7',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq7',
  },
],
},
articlecorrectq7: {
botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[7],
  },
],
},
inarticlecorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[7],
  },
],
},


//8
['article'+shuffledNumberstwofive[7]]: {
botPrompt: 'The teacher gave us ___ assignment to complete.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'inarticlecorrectq8',
  },
  {
    answer: 'an',
    nextId: 'articlecorrectq8',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq8',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq8',
  },
],
},

articlecorrectq8: {
botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[8],
  },
],
},
inarticlecorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[8],
  },
],
},

//9
['article'+shuffledNumberstwofive[8]]: {
botPrompt: 'He needs ___ umbrella because it`s raining.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'inarticlecorrectq9',
  },
  {
    answer: 'an',
    nextId: 'articlecorrectq9',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq9',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq9',
  },
],
},
articlecorrectq9: {
botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[9],
  },
],
},
inarticlecorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[9],
  },
],
},



//10
['article'+shuffledNumberstwofive[9]]:
 {
botPrompt: ' She bought ___ orange from the market. ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'inarticlecorrectq10',
  },
  {
    answer: 'an',
    nextId: 'articlecorrectq10',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq10',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq10',
  },
],
},
articlecorrectq10: {
botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[10],
  },
],
},
inarticlecorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[10],
  },
],
},

//11
['article'+shuffledNumberstwofive[10]]: {
botPrompt: 'I would like to have ___ ice cream for dessert.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'inarticlecorrectq11',
  },
  {
    answer: 'an',
    nextId: 'articlecorrectq11',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq11',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq11',
  },
],
},

articlecorrectq11: {
botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[11],
  },
],
},
inarticlecorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[11],
  },
],
},

//12
['article'+shuffledNumberstwofive[11]]: {
botPrompt: ' I saw ___  star in the sky last night. ',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'inarticlecorrectq12',
  },
  {
    answer: 'an',
    nextId: 'articlecorrectq12',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq12',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq12',
  },
],
},

articlecorrectq12: {
botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[12],
  },
],
},
inarticlecorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[12],
  },
],
},

//13
['article'+shuffledNumberstwofive[12]]: {
botPrompt: 'The chef prepared ___ delicious meal for us.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'articlecorrectq13',
  },
  {
    answer: 'an',
    nextId: 'inarticlecorrectq13',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq13',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq13',
  },
],
},

articlecorrectq13: {
botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[13],
  },
],
},
inarticlecorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[13],
  },
],
},

//14
['article'+shuffledNumberstwofive[13]]: {
botPrompt: ' I need ___ new notebook for school.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'articlecorrectq14',
  },
  {
    answer: 'an',
    nextId: 'inarticlecorrectq14',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq14',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq14',
  },
],
},


articlecorrectq14: {
botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[14],
  },
],
},
inarticlecorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[14],
  },
],
},


//15
['article'+shuffledNumberstwofive[14]]: {
botPrompt: ' He bought ___ car for his birthday.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['a', 'an', "was","ann"]),
answers: [
  {
    answer: 'a',
    nextId: 'articlecorrectq15',
  },
  {
    answer: 'an',
    nextId: 'inarticlecorrectq15',
  },
  {
    answer: "ann",
    nextId: 'inarticlecorrectq15',
  },
  {
    answer: "was",
    nextId: 'inarticlecorrectq15',
  },
],
},


articlecorrectq15: {
botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[15],
  },
],
},
inarticlecorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
answers: [
  {
    nextId: 'article'+shuffledNumberstwofive[15],
  },
],
},

//16
['article'+shuffledNumberstwofive[15]]: {
  botPrompt: '___ hour has passed since we started the game.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
      {
      answer: 'a',
      nextId: 'inarticlecorrectq16',
      },
      {
      answer: 'an',
      nextId: 'articlecorrectq16',
      },
      {
      answer: "ann",
      nextId: 'inarticlecorrectq16',
      },
      {
      answer: "was",
      nextId: 'inarticlecorrectq16',
      },
  ],
},
articlecorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>an</strong> 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[16],
    },
  ],
},
inarticlecorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[16],
    },
  ],
},

//17
['article'+shuffledNumberstwofive[16]]: {
  botPrompt: 'She wants to become ___ astronaut when she grows up.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
      {
      answer: 'a',
      nextId: 'inarticlecorrectq17',
      },
      {
      answer: 'an',
      nextId: 'articlecorrectq17',
      },
      {
      answer: "ann",
      nextId: 'inarticlecorrectq17',
      },
      {
      answer: "was",
      nextId: 'inarticlecorrectq17',
      },
  ],
},
articlecorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>an</strong> 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[17],
    },
  ],
},
inarticlecorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[17],
    },
  ],
},

//18
['article'+shuffledNumberstwofive[17]]: {
  botPrompt: 'There is ___ old  tree in the garden.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
      {
      answer: 'a',
      nextId: 'inarticlecorrectq18',
      },
      {
      answer: 'an',
      nextId: 'articlecorrectq18',
      },
      {
      answer: "ann",
      nextId: 'inarticlecorrectq18',
      },
      {
      answer: "was",
      nextId: 'inarticlecorrectq18',
      },
  ],
},
articlecorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>an</strong> 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[18],
    },
  ],
},
inarticlecorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[18],
    },
  ],
},

//19
['article'+shuffledNumberstwofive[18]]: {
  botPrompt: ' My mom bought me ___puppy for my birthday.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq19',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq19',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq19',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq19',
    },
  ],
  },
  
  
  articlecorrectq19: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[19],
    },
  ],
  },
  inarticlecorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[19],
    },
  ],
  },

//20
['article'+shuffledNumberstwofive[19]]: {
  botPrompt: ' Can you lend me ___ pen, please? ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq20',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq20',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq20',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq20',
    },
  ],
  },
  
  
  articlecorrectq20: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[20],
    },
  ],
  },
  inarticlecorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[20],
    },
  ],
  },

  //21
['article'+shuffledNumberstwofive[20]]: {
  botPrompt: ' I saw ___ eagle flying high in the sky.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'inarticlecorrectq21',
    },
    {
      answer: 'an',
      nextId: 'articlecorrectq21',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq21',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq21',
    },
  ],
  },
  
  
  articlecorrectq21: {
  botPrompt: 'Hurray! <strong>an</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[21],
    },
  ],
  },
  inarticlecorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"an"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[21],
    },
  ],
  },

  //22
['article'+shuffledNumberstwofive[21]]: {
  botPrompt: ' I saw ___  star in the night sky.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['a', 'an', "was","ann"]),
  answers: [
    {
      answer: 'a',
      nextId: 'articlecorrectq22',
    },
    {
      answer: 'an',
      nextId: 'inarticlecorrectq22',
    },
    {
      answer: "ann",
      nextId: 'inarticlecorrectq22',
    },
    {
      answer: "was",
      nextId: 'inarticlecorrectq22',
    },
  ],
  },
  
  
  articlecorrectq22: {
  botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[22],
    },
  ],
  },
  inarticlecorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'article'+shuffledNumberstwofive[22],
    },
  ],
  },

  // 23
  ['article'+shuffledNumberstwofive[22]]: {
      botPrompt: ' He wants to buy ___ bicycle for his birthday.',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['a', 'an', "was","ann"]),
      answers: [
        {
          answer: 'a',
          nextId: 'articlecorrectq23',
        },
        {
          answer: 'an',
          nextId: 'inarticlecorrectq23',
        },
        {
          answer: "ann",
          nextId: 'inarticlecorrectq23',
        },
        {
          answer: "was",
          nextId: 'inarticlecorrectq23',
        },
      ],
      },
      
      
      articlecorrectq23: {
      botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'article'+shuffledNumberstwofive[23],
        },
      ],
      },
      inarticlecorrectq23: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
      answers: [
        {
          nextId: 'article'+shuffledNumberstwofive[23],
        },
      ],
      },

  // 24
  ['article'+shuffledNumberstwofive[23]]: {
      botPrompt: ' Can you pass me ___ cup of coffee, please?',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['a', 'an', "was","ann"]),
      answers: [
        {
          answer: 'a',
          nextId: 'articlecorrectq24',
        },
        {
          answer: 'an',
          nextId: 'inarticlecorrectq24',
        },
        {
          answer: "ann",
          nextId: 'inarticlecorrectq24',
        },
        {
          answer: "was",
          nextId: 'inarticlecorrectq24',
        },
      ],
      },
      
      
      articlecorrectq24: {
      botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'article'+shuffledNumberstwofive[24],
        },
      ],
      },
      inarticlecorrectq24: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
      answers: [
        {
          nextId: 'article'+shuffledNumberstwofive[24],
        },
      ],
      },

      // 25
      ['article'+shuffledNumberstwofive[24]]: {
          botPrompt: ' She painted ___ picture of the sunset.',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['a', 'an', "was","ann"]),
          answers: [
            {
              answer: 'a',
              nextId: 'articlecorrectq25',
            },
            {
              answer: 'an',
              nextId: 'inarticlecorrectq25',
            },
            {
              answer: "ann",
              nextId: 'inarticlecorrectq25',
            },
            {
              answer: "was",
              nextId: 'inarticlecorrectq25',
            },
          ],
          },
          
          
          articlecorrectq25: {
          botPrompt: 'Hurray! <strong>a</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: "wishtocontinue14",
            },
          ],
          },
          inarticlecorrectq25: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"a"</strong>',
          answers: [
            {
              nextId: "wishtocontinue14",
            },
          ],
          },
        
    
    
//endarticle



wishtocontinue14: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day15',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},


//day15
day15: {
  botPrompt: '<strong> Day 15 : </strong>Let`s Learn One/Many through an activity',
  answers: [
          { nextId: 'day15link' },
  ],
},
day15link: {
  botPrompt: 'https://www.youtube.com/watch?v=OTVf6aNfIac',
  type: RTypes.LINK,
  answers: [
    {
      nextId: ['oneandmany'+shuffledNumbersthree[0]],
    },
  ],
},

//startonemany


['oneandmany'+shuffledNumbersthree[0]]: {
  botPrompt: 'I have ___ brother and two sisters.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['one', 'many', "onee","any"]),
  answers: [
    {
      answer: 'one',
      nextId: 'oneandmanycorrect',
    },
    {
      answer: 'many',
      nextId: 'inoneandmanycorrect',
    },
    {
      answer: "onee",
      nextId: 'inoneandmanycorrect',
    },
    {
      answer: "any",
      nextId: 'inoneandmanycorrect',
    },
  ],
},
oneandmanycorrect: {
  botPrompt: 'Hurray <strong>one</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[1],
    },
  ],
},
inoneandmanycorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>one</strong> answer is <strong>"a"</strong>',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[1],
    },
  ],
},

['oneandmany'+shuffledNumbersthree[1]]: {
  botPrompt: 'There are ___ apples in the basket.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['one', 'many', "onee","any"]),
  answers: [
    {
      answer: 'one',
      nextId: 'inoneandmanycorrectq2',
    },
    {
      answer: 'many',
      nextId: 'oneandmanycorrectq2',
    },
    {
      answer: "onee",
      nextId: 'inoneandmanycorrectq2',
    },
    {
      answer: "any",
      nextId: 'inoneandmanycorrectq2',
    },
  ],
},

oneandmanycorrectq2: {
  botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[2],
    },
  ],
},
inoneandmanycorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[2],
    },
  ],
},

//3
['oneandmany'+shuffledNumbersthree[2]]: {
botPrompt: "She has ___ pet cat and two pet dogs.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'oneandmanycorrectq3',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "any",
    nextId: 'inoneandmanycorrectq3',
  },
],
},

oneandmanycorrectq3: {
botPrompt: 'Hurray! <strong>one</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[3],
  },
],
},
inoneandmanycorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"one"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[3],
  },
],
},

//4
['oneandmany'+shuffledNumbersthree[3]]: {
botPrompt: 'We saw ___ bird flying in the sky.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'oneandmanycorrectq3',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq3',
  },
  {
    answer: "any",
    nextId: 'inoneandmanycorrectq3',
  },
],
},

oneandmanycorrectq4: {
botPrompt: 'Hurray! <strong>one</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[4],
  },
],
},
inoneandmanycorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"one"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[4],
  },
],
},

//5
['oneandmany'+shuffledNumbersthree[4]]: {
botPrompt: 'They have ___ books on their bookshelf.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: 'many',
    nextId: 'oneandmanycorrectq5',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: "any",
    nextId: 'inoneandmanycorrectq5',
  },
],
},

oneandmanycorrectq5: {
botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[5],
  },
],
},
inoneandmanycorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[5],
  },
],
},

//6
['oneandmany'+shuffledNumbersthree[5]]: {
botPrompt: ' He bought ___ toy from the store.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['one', 'many', "onee","any"]),
answers: [
  {
    answer: 'one',
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq5',
  },
  {
    answer: "any",
    nextId: 'oneandmanycorrectq5',
  },
],
},

oneandmanycorrectq6: {
botPrompt: 'Hurray! <strong>any</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[6],
  },
],
},
inoneandmanycorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"any"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[6],
  },
],
},

//7
['oneandmany'+shuffledNumbersthree[6]]: {
botPrompt: 'We planted ___ flowers in the garden. ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['onee', 'manyy', "many","manya"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq7',
  },
  {
    answer: 'manyy',
    nextId: 'inoneandmanycorrectq7',
  },
  {
    answer: "many",
    nextId: 'oneandmanycorrectq7',
  },
  {
    answer: "manya",
    nextId: 'inoneandmanycorrectq7',
  },
],
},

oneandmanycorrectq7: {
botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[7],
  },
],
},
inoneandmanycorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[7],
  },
],
},


//8
['oneandmany'+shuffledNumbersthree[7]]: {
botPrompt: 'I ate ___ slice of cake at the party.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['onee', 'many', "onee","one"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq8',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq8',
  },
  {
    answer: "onee",
    nextId: 'inoneandmanycorrectq8',
  },
  {
    answer: "one",
    nextId: 'oneandmanycorrectq8',
  },
],
},

oneandmanycorrectq8: {
botPrompt: 'Hurray! <strong>d</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[8],
  },
],
},
inoneandmanycorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"d"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[8],
  },
],
},

//9
['oneandmany'+shuffledNumbersthree[8]]: {
botPrompt: 'They have ___ pencils in their pencil case.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['onee', 'manyy', "many","maany"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq9',
  },
  {
    answer: 'manyy',
    nextId: 'inoneandmanycorrectq9',
  },
  {
    answer: "many",
    nextId: 'oneandmanycorrectq9',
  },
  {
    answer: "maany",
    nextId: 'inoneandmanycorrectq9',
  },
],
},

oneandmanycorrectq9: {
botPrompt: 'Hurray! <strong>many</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[9],
  },
],
},
inoneandmanycorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"many"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[9],
  },
],
},


//10
['oneandmany'+shuffledNumbersthree[9]]: {
botPrompt: ' She drew ___ picture on the paper.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['onee', 'many', "many","one"]),
answers: [
  {
    answer: 'onee',
    nextId: 'inoneandmanycorrectq10',
  },
  {
    answer: 'many',
    nextId: 'inoneandmanycorrectq10',
  },
  {
    answer: "many",
    nextId: 'inoneandmanycorrectq10',
  },
  {
    answer: "one",
    nextId: 'oneandmanycorrectq10',
  },
],
},

oneandmanycorrectq10: {
botPrompt: 'Hurray! <strong>one</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[10],
  },
],
},
inoneandmanycorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"one"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[10],
  },
],
},

//11
['oneandmany'+shuffledNumbersthree[10]]: {
botPrompt: 'Change the word to it`s many form:Book',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['books', 'bookes', "bookies","book"]),
answers: [
  {
    answer: 'books',
    nextId: 'oneandmanycorrectq11',
  },
  {
    answer: 'bookes',
    nextId: 'inoneandmanycorrectq11',
  },
  {
    answer: "bookies",
    nextId: 'inoneandmanycorrectq11',
  },
  {
    answer: "book",
    nextId: 'inoneandmanycorrectq11',
  },
],
},

oneandmanycorrectq11: {
botPrompt: 'Hurray! <strong>books</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[11],
  },
],
},
inoneandmanycorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"books"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[11],
  },
],
},

//12
['oneandmany'+shuffledNumbersthree[11]]: {
botPrompt: ' Change the word to it`s many form:Dog',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['dogses', 'dogses', "dogs","dog"]),
answers: [
  {
    answer: 'dogses',
    nextId: 'inoneandmanycorrectq12',
  },
  {
    answer: 'dogses',
    nextId: 'inoneandmanycorrectq12',
  },
  {
    answer: "dogs",
    nextId: 'oneandmanycorrectq12',
  },
  {
    answer: "dog",
    nextId: 'inoneandmanycorrectq12',
  },
],
},

oneandmanycorrectq12: {
botPrompt: 'Hurray! <strong>dogs</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[12],
  },
],
},
inoneandmanycorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"dogs"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[12],
  },
],
},

//13
['oneandmany'+shuffledNumbersthree[12]]: {
botPrompt: 'Change the word to it`s many form:Leaf',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['leafs', 'leafs', "leaves","leafe"]),
answers: [
  {
    answer: 'leafs',
    nextId: 'inoneandmanycorrectq13',
  },
  {
    answer: 'leafs',
    nextId: 'inoneandmanycorrectq13',
  },
  {
    answer: "leaves",
    nextId: 'oneandmanycorrectq13',
  },
  {
    answer: "leafe",
    nextId: 'inoneandmanycorrectq13',
  },
],
},

oneandmanycorrectq13: {
botPrompt: 'Hurray! <strong>leaves</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[13],
  },
],
},
inoneandmanycorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"leaves"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[13],
  },
],
},

//14
['oneandmany'+shuffledNumbersthree[13]]: {
botPrompt: ' Change the word to it`s many form: Butterfly',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['butterfles', 'butterfles', "butterflies","butterfly"]),
answers: [
  {
    answer: 'butterfles',
    nextId: 'inoneandmanycorrectq14',
  },
  {
    answer: 'butterfles',
    nextId: 'inoneandmanycorrectq14',
  },
  {
    answer: "butterflies",
    nextId: 'oneandmanycorrectq14',
  },
  {
    answer: "butterfly",
    nextId: 'inoneandmanycorrectq14',
  },
],
},

oneandmanycorrectq14: {
botPrompt: 'Hurray! <strong>butterflies</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[14],
  },
],
},
inoneandmanycorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"butterflies"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[14],
  },
],
},


//15
['oneandmany'+shuffledNumbersthree[14]]: {
botPrompt: 'Change the word to it`s many form:Apple',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['apples', 'applees', "appleses","apple"]),
answers: [
  {
    answer: 'apples',
    nextId: 'oneandmanycorrectq15',
  },
  {
    answer: 'applees',
    nextId: 'inoneandmanycorrectq15',
  },
  {
    answer: "appleses",
    nextId: 'inoneandmanycorrectq15',
  },
  {
    answer: "apple",
    nextId: 'inoneandmanycorrectq15',
  },
],
},

oneandmanycorrectq15: {
botPrompt: 'Hurray! <strong>apples</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[15],
  },
],
},
inoneandmanycorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"apples"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[15],
  },
],
},

//16
['oneandmany'+shuffledNumbersthree[15]]: {
  botPrompt: 'Change the word to it`s many form:Child',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['children', 'childs', "childrens","child"]),
  answers: [
    {
      answer: 'children',
      nextId: 'oneandmanycorrectq16',
    },
    {
      answer: 'childs',
      nextId: 'inoneandmanycorrectq16',
    },
    {
      answer: "childrens",
      nextId: 'inoneandmanycorrectq16',
    },
    {
      answer: "child",
      nextId: 'inoneandmanycorrectq16',
    },
  
  ],
},
oneandmanycorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>children</strong> 😎',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[16],
    },
  ],
},
inoneandmanycorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"children"</strong>',
  answers: [
    {
      nextId: 'oneandmany'+shuffledNumbersthree[16],
    },
  ],
},

//17
['oneandmany'+shuffledNumbersthree[16]]: {
botPrompt: 'Change the word to it`s many form:Key',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['keys', 'keyses', "keyies","key"]),
answers: [
  {
    answer: 'keys',
    nextId: 'oneandmanycorrectq17',
  },
  {
    answer: 'keyses',
    nextId: 'inoneandmanycorrectq17',
  },
  {
    answer: "keyies",
    nextId: 'inoneandmanycorrectq17',
  },
  {
    answer: "key",
    nextId: 'inoneandmanycorrectq17',
  },
 
],
},
oneandmanycorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>keys</strong> 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[17],
  },
],
},
inoneandmanycorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"keys"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[17],
  },
],
},

//18
['oneandmany'+shuffledNumbersthree[17]]: {
botPrompt: 'Change the word to it`s many form:Toy ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['toyses', 'toyes', "toys","toy"]),
answers: [
  {
    answer: 'toyses',
    nextId: 'inoneandmanycorrectq18',
  },
  {
    answer: 'toyes',
    nextId: 'inoneandmanycorrectq18',
  },
  {
    answer: "toys",
    nextId: 'oneandmanycorrectq18',
  },
  {
    answer: "toy",
    nextId: 'inoneandmanycorrectq18',
  },
 
],
},
oneandmanycorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>toys</strong> 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[18],
  },
],
},
inoneandmanycorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"toys"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[18],
  },
],
},

//19
['oneandmany'+shuffledNumbersthree[18]]: {
botPrompt: 'Change the word to it`s many form:Mouse ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['mice', 'mouseses', "mouseies","mouses"]),
answers: [
  {
    answer: 'mice',
    nextId: 'oneandmanycorrectq19',
  },
  {
    answer: 'mouseses',
    nextId: 'inoneandmanycorrectq19',
  },
  {
    answer: "mouseies",
    nextId: 'inoneandmanycorrectq19',
  },
  {
    answer: "mouses",
    nextId: 'inoneandmanycorrectq19',
  },
 
],
},
oneandmanycorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>mice</strong> Answers! 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[19],
  },
],
},
inoneandmanycorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"mice"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[19],
  },
],
},

//20
['oneandmany'+shuffledNumbersthree[19]]: {
botPrompt: 'Change the word to it`s many form:Bag',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['Bags', 'Baags', "baggs","baaags"]),
answers: [
  {
    answer: 'Bags',
    nextId: 'oneandmanycorrectq20',
  },
  {
    answer: 'Baags',
    nextId: 'inoneandmanycorrectq20',
  },
  {
    answer: "baggs",
    nextId: 'inoneandmanycorrectq20',
  },
  {
    answer: "baaags",
    nextId: 'inoneandmanycorrectq20',
  },

],
},
oneandmanycorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Bags</strong> 😎',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[20],
  },
],
},
inoneandmanycorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bags"</strong>',
answers: [
  {
    nextId: 'oneandmany'+shuffledNumbersthree[20],
  },
],
},

//21
['oneandmany'+shuffledNumbersthree[20]]: {
    botPrompt: 'Complete the sentence: I have two ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['books', 'bookes', "bookies","book"]),
    answers: [
      {
        answer: 'books',
        nextId: 'oneandmanycorrectq21',
      },
      {
        answer: 'bookes',
        nextId: 'inoneandmanycorrectq21',
      },
      {
        answer: "bookies",
        nextId: 'inoneandmanycorrectq21',
      },
      {
        answer: "book",
        nextId: 'inoneandmanycorrectq21',
      },
    
    ],
    },
    oneandmanycorrectq21: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>books</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[21],
      },
    ],
    },
    inoneandmanycorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"books"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[21],
      },
    ],
    },


//22
['oneandmany'+shuffledNumbersthree[21]]: {
    botPrompt: 'Complete the sentence: There are many ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['dog', 'dogses', "doggies","dogs"]),
    answers: [
      {
        answer: 'dog',
        nextId: 'inoneandmanycorrectq22',
      },
      {
        answer: 'dogses',
        nextId: 'inoneandmanycorrectq22',
      },
      {
        answer: "doggies",
        nextId: 'inoneandmanycorrectq22',
      },
      {
        answer: "dogs",
        nextId: 'oneandmanycorrectq22',
      },
    
    ],
    },
    oneandmanycorrectq22: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>dogs</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[22],
      },
    ],
    },
    inoneandmanycorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"dogs"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[22],
      },
    ],
    },


//23
['oneandmany'+shuffledNumbersthree[22]]: {
    botPrompt: 'Complete the sentence: We saw three ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['butterfly', 'butterfles', "butterflies","butterflie"]),
    answers: [
      {
        answer: 'butterfly',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'butterfles',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "butterflies",
        nextId: 'oneandmanycorrectq20',
      },
      {
        answer: "butterflie",
        nextId: 'inoneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>butterflies</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[23],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"butterflies"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[23],
      },
    ],
    },


//24
['oneandmany'+shuffledNumbersthree[23]]: {
    botPrompt: 'Complete the sentence: I found five ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['key', 'keyses', "bookies","book"]),
    answers: [
      {
        answer: 'key',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'keyses',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "keyies",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "keys",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>keys</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[24],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"keys"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[24],
      },
    ],
    },


//25
['oneandmany'+shuffledNumbersthree[24]]: {
    botPrompt: 'Complete the sentence: I found five ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['balloon', 'balloonies', "balloonses","balloons"]),
    answers: [
      {
        answer: 'balloon',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'balloonies',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "balloonses",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "balloons",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>balloons</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[25],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"balloons"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[25],
      },
    ],
    },


//26
['oneandmany'+shuffledNumbersthree[25]]: {
    botPrompt: 'Complete the sentence: He has three ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['brother', 'brotherses', "brotheries","brothers"]),
    answers: [
      {
        answer: 'brother',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'brotherses',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "brotheries",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "brothers",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>brothers</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[26],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"brothers"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[26],
      },
    ],
    },


//27
['oneandmany'+shuffledNumbersthree[26]]: {
    botPrompt: 'Complete the sentence: There are two ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['fish', 'fishies', "fishses","fishes"]),
    answers: [
      {
        answer: 'fish',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'fishies',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "fishses",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "fishes",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>fishes</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[27],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"fishes"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[27],
      },
    ],
    },


//28
['oneandmany'+shuffledNumbersthree[27]]: {
    botPrompt: 'Complete the sentence: I found four ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['pencil', 'pencilies', "pencilses","book"]),
    answers: [
      {
        answer: 'pencil',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'pencilies',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "pencilses",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "pencils",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>pencils</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[28],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"pencils"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[28],
      },
    ],
    },


//29
['oneandmany'+shuffledNumbersthree[28]]: {
    botPrompt: 'Complete the sentence: We saw three ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['horse', 'horseses', "horseies","horses"]),
    answers: [
      {
        answer: 'horse',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'horseses',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "horseies",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "horses",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>horses</strong> 😎',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[29],
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"horses"</strong>',
    answers: [
      {
        nextId: 'oneandmany'+shuffledNumbersthree[29],
      },
    ],
    },


//30
['oneandmany'+shuffledNumbersthree[29]]: {
    botPrompt: 'Complete the sentence: There are two ____.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['tooth', 'toothes', "teeths","teeth"]),
    answers: [
      {
        answer: 'tooth',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: 'toothes',
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "teeths",
        nextId: 'inoneandmanycorrectq20',
      },
      {
        answer: "teeth",
        nextId: 'oneandmanycorrectq20',
      },
    
    ],
    },
    oneandmanycorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>teeth</strong> 😎',
    answers: [
      {
        nextId: 'day152comment',
      },
    ],
    },
    inoneandmanycorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"teeth"</strong>',
    answers: [
      {
        nextId: 'day152comment',
      },
    ],
    },





//endonemany

day152comment: {
  botPrompt: ' Let’s check out the book.',
  answers: [
          { nextId: 'day152link' },
  ],
},



day152link: {
  botPrompt: 'https://drive.google.com/file/d/1wtvzS0JEKi2xaeJMAIhHGV9H5DOlt36U/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue15',
    },
  ],
},








wishtocontinue15: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day16',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},



//day16

day16: {
  botPrompt: '<strong> Day 16 : </strong> Where should we use is? Is? Are? ',
  answers: [
          { nextId: 'day16link' },
  ],
},

day16link: {
  botPrompt: 'https://www.youtube.com/watch?v=RSIBn6OPIpE',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day162comment',
    },
  ],
},
day162comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day131link' },
  ],
},
day131link: {
  botPrompt: 'https://drive.google.com/file/d/1IGgEghI26qgqAIND8UNS-Pu-pTiS6AQv/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[0],
    },
  ],
},


//startisare



["isAre"+shuffledNumbersseventyseven[0]]: {
  botPrompt: ' The cat ___ playing. ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrect',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrect',
    },
    {
      answer: "here",
      nextId: 'inisArecorrect',
    },
    {
      answer: "where",
      nextId: 'inisArecorrect',
    },
  ],
},
isArecorrect: {
  botPrompt: 'Hurray <strong>is</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[1],
    },
  ],
},
inisArecorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[1],
    },
  ],
},

['isAre'+shuffledNumbersseventyseven[1]]: {
  botPrompt: 'My friends ___ here.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq2',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq2',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq2',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq2',
    },
  ],
},

isArecorrectq2: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[2],
    },
  ],
},
inisArecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[2],
    },
  ],
},

//3
['isAre'+shuffledNumbersseventyseven[2]]: {
botPrompt: "The flowers ___ beautiful.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq3',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq3',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq3',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq3',
    },
  ],
},

isArecorrectq3: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[3],
  },
],
},
inisArecorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[3],
  },
],
},

//4
['isAre'+shuffledNumbersseventyseven[3]]: {
botPrompt: 'This book ___ interesting.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq4',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq4',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq4',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq4',
    },
  ],
},

isArecorrectq4: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[4],
  },
],
},
inisArecorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[4],
  },
],
},

//5
['isAre'+shuffledNumbersseventyseven[4]]: {
botPrompt: 'The birds ___ in the sky.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq5',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq5',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq5',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq5',
    },
  ],
},

isArecorrectq5: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[5],
  },
],
},
inisArecorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[5],
  },
],
},

//6
['isAre'+shuffledNumbersseventyseven[5]]: {
botPrompt: 'The sun ___ shining.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq6',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq6',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq6',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq6',
    },
  ],
},

isArecorrectq6: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[6],
  },
],
},
inisArecorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[6],
  },
],
},

//7
['isAre'+shuffledNumbersseventyseven[6]]: {
botPrompt: 'My toys ___ on the shelf.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq7',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq7',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq7',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq7',
    },
  ],
},

isArecorrectq7: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[7],
  },
],
},
inisArecorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[7],
  },
],
},


//8
['isAre'+shuffledNumbersseventyseven[7]]: {
botPrompt: 'The trees ___ tall.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq8',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq8',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq8',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq8',
    },
  ],
},

isArecorrectq8: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[8],
  },
],
},
inisArecorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[8],
  },
],
},

//9
['isAre'+shuffledNumbersseventyseven[8]]: {
botPrompt: 'The car ___ red.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq9',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq9',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq9',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq9',
    },
  ],
},

isArecorrectq9: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[9],
  },
],
},
inisArecorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[9],
  },
],
},


//10
['isAre'+shuffledNumbersseventyseven[9]]: {
botPrompt: 'The dogs ___ barking.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq10',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq10',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq10',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq10',
    },
  ],

},

isArecorrectq10: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[10],
  },
],
},
inisArecorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[10],
  },
],
},

//11
['isAre'+shuffledNumbersseventyseven[10]]: {
botPrompt: 'The pencil ___ on the desk.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq11',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq11',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq11',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq11',
    },
  ],
},

isArecorrectq11: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[11],
  },
],
},
inisArecorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[11],
  },
],
},

//12
['isAre'+shuffledNumbersseventyseven[11]]: {
botPrompt: 'The cookies ___ delicious.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq12',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq12',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq12',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq12',
    },
  ],
},

isArecorrectq12: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[12],
  },
],
},
inisArecorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[12],
  },
],
},

//13
['isAre'+shuffledNumbersseventyseven[12]]: {
botPrompt: 'The students ___ listening.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq13',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq13',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq13',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq13',
    },
  ],
},

isArecorrectq13: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[13],
  },
],
},
inisArecorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[13],
  },
],
},

//14
['isAre'+shuffledNumbersseventyseven[13]]: {
botPrompt: 'The sky ___ blue.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq14',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq14',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq14',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq14',
    },
  ],
},

isArecorrectq14: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[14],
  },
],
},
inisArecorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[14],
  },
],
},


//15
['isAre'+shuffledNumbersseventyseven[14]]: {
botPrompt: 'The chairs ___ comfortable.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq15',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq15',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq15',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq15',
    },
  ],
},

isArecorrectq15: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[15],
  },
],
},
inisArecorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[15],
  },
],
},

//16
['isAre'+shuffledNumbersseventyseven[15]]: {
  botPrompt: 'The birds ___ singing.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq16',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq16',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq16',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq16',
    },
  ],
},
isArecorrectq16: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[16],
    },
  ],
},
inisArecorrectq16: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[16],
    },
  ],
},

//17
['isAre'+shuffledNumbersseventyseven[16]]: {
botPrompt: 'The cake ___ tasty.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq17',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq17',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq17',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq17',
    },
  ],
},
isArecorrectq17: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[17],
  },
],
},
inisArecorrectq17: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[17],
  },
],
},

//18
['isAre'+shuffledNumbersseventyseven[17]]: {
botPrompt: 'The cars ___ parked.   ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq18',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq18',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq18',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq18',
  },
],
},
isArecorrectq18: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[18],
  },
],
},
inisArecorrectq18: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[18],
  },
],
},

//19
['isAre'+shuffledNumbersseventyseven[18]]: {
botPrompt: 'The flowers ___ blooming.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq19',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq19',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq19',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq19',
  },
],
},
isArecorrectq19: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> Answers! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[19],
  },
],
},
inisArecorrectq19: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[19],
  },
],
},

//20
['isAre'+shuffledNumbersseventyseven[19]]: {
botPrompt: 'The children ___ playing.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq20',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq20',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq20',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq20',
  },
],
},
isArecorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[20],
  },
],
},
inisArecorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[20],
  },
],
},

//21
["isAre"+shuffledNumbersseventyseven[20]]: {
  botPrompt: 'The cat and dog ___ friends.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq21',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq21',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq21',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq21',
  },
],
},
isArecorrectq21: {
  botPrompt: 'Hurray <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[21],
    },
  ],
},
inisArecorrectq21: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[21],
    },
  ],
},

//22
['isAre'+shuffledNumbersseventyseven[21]]: {
  botPrompt: 'The books ___ on the shelf.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq22',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq22',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq22',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq22',
  },
],
},

isArecorrectq22: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[22],
    },
  ],
},
inisArecorrectq22: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[22],
    },
  ],
},

//23
['isAre'+shuffledNumbersseventyseven[22]]: {
botPrompt: "The stars ___ shining.",
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq23',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq23',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq23',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq23',
  },
],
},

isArecorrectq23: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[23],
  },
],
},
inisArecorrectq23: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[23],
  },
],
},

//24
['isAre'+shuffledNumbersseventyseven[23]]: {
botPrompt: 'The chairs and table ___ new.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq24',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq24',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq24',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq24',
  },
],
},

isArecorrectq24: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[24],
  },
],
},
inisArecorrectq24: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[24],
  },
],
},

//25
['isAre'+shuffledNumbersseventyseven[24]]: {
botPrompt: 'The flowers ___ colorful.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq25',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq25',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq25',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq25',
  },
],
},

isArecorrectq25: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[25],
  },
],
},
inisArecorrectq25: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[25],
  },
],
},

//26
['isAre'+shuffledNumbersseventyseven[25]]: {
botPrompt: 'The boys ___ playing.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq26',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq26',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq26',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq26',
  },
],
},

isArecorrectq26: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[26],
  },
],
},
inisArecorrectq26: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[26],
  },
],
},

//27
['isAre'+shuffledNumbersseventyseven[26]]: {
botPrompt: 'The dog ___ barking.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq27',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq27',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq27',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq27',
    },
  ],
},

isArecorrectq27: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[27],
  },
],
},
inisArecorrectq27: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[27],
  },
],
},


//28
['isAre'+shuffledNumbersseventyseven[27]]: {
botPrompt: 'The birds ___ chirping.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq28',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq28',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq28',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq28',
  },
],
},

isArecorrectq28: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[28],
  },
],
},
inisArecorrectq28: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[28],
  },
],
},

//29
['isAre'+shuffledNumbersseventyseven[28]]: {
botPrompt: 'The sun ___ setting.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq29',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq29',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq29',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq29',
    },
  ],
},

isArecorrectq29: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[29],
  },
],
},
inisArecorrectq29: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[29],
  },
],
},


//30
['isAre'+shuffledNumbersseventyseven[29]]: {
botPrompt: 'The toys ___ scattered.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq30',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq30',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq30',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq30',
  },
],
},

isArecorrectq30: {
botPrompt: 'Hurray! <strong>N</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[30],
  },
],
},
inisArecorrectq30: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"N"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[30],
  },
],
},

//31
['isAre'+shuffledNumbersseventyseven[30]]: {
botPrompt: 'The cake ___ delicious.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq31',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq31',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq31',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq31',
    },
  ],
},

isArecorrectq31: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[31],
  },
],
},
inisArecorrectq31: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[31],
  },
],
},

//32
['isAre'+shuffledNumbersseventyseven[31]]: {
botPrompt: 'The flowers ___ blooming.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq32',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq32',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq32',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq32',
  },
],
},

isArecorrectq32: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[32],
  },
],
},
inisArecorrectq32: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[32],
  },
],
},

//33
['isAre'+shuffledNumbersseventyseven[32]]: {
botPrompt: 'The childrens ___ playing.',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq33',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq33',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq33',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq33',
  },
],
},

isArecorrectq33: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[33],
  },
],
},
inisArecorrectq33: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[33],
  },
],
},

//34
['isAre'+shuffledNumbersseventyseven[33]]: {
botPrompt: 'The book ___ interesting.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq34',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq34',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq34',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq34',
    },
  ],
},

isArecorrectq34: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[34],
  },
],
},
inisArecorrectq34: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[34],
  },
],
},


//35
['isAre'+shuffledNumbersseventyseven[34]]: {
botPrompt: 'The clouds ___ fluffy.',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq35',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq35',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq35',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq35',
  },
],
},

isArecorrectq35: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[35],
  },
],
},
inisArecorrectq35: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[35],
  },
],
},

//36
['isAre'+shuffledNumbersseventyseven[35]]: {
  botPrompt: 'The keys ___ missing.',
  type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq36',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq36',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq36',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq36',
  },
],
},
isArecorrectq36: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[36],
    },
  ],
},
inisArecorrectq36: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[36],
    },
  ],
},

//37
['isAre'+shuffledNumbersseventyseven[36]]: {
botPrompt: 'The stars ___ shining.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq37',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq37',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq37',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq37',
  },
],
},
isArecorrectq37: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[37],
  },
],
},
inisArecorrectq37: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[37],
  },
],
},

//38
['isAre'+shuffledNumbersseventyseven[37]]: {
botPrompt: 'The car ___ parked.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq38',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq38',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq38',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq38',
    },
  ],
},
isArecorrectq38: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[38],
  },
],
},
inisArecorrectq38: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[38],
  },
],
},

//39
['isAre'+shuffledNumbersseventyseven[38]]: {
botPrompt: 'The dogs ___ friendly. ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq39',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq39',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq39',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq39',
  },
],
},
isArecorrectq39: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> Answers! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[39],
  },
],
},
inisArecorrectq39: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[39],
  },
],
},

//40
['isAre'+shuffledNumbersseventyseven[39]]: {
botPrompt: 'The cats ___ sleeping.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq40',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq40',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq40',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq40',
    },
  ],
},
isArecorrectq40: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[40],
  },
],
},
inisArecorrectq40: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[40],
  },
],
},

//41
["isAre"+shuffledNumbersseventyseven[40]]: {
  botPrompt: 'The chairs ___ comfortable.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq41',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq41',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq41',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq41',
    },
  ],
},
isArecorrectq41: {
  botPrompt: 'Hurray <strong>A</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[41],
    },
  ],
},
inisArecorrectq41: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[41],
    },
  ],
},

//42

['isAre'+shuffledNumbersseventyseven[41]]: {
  botPrompt: 'The plants ___ growing.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq42',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq42',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq42',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq42',
    },
  ],
},

isArecorrectq42: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[42],
    },
  ],
},
inisArecorrectq42: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[42],
    },
  ],
},

//43
['isAre'+shuffledNumbersseventyseven[42]]: {
botPrompt: "The sky ___ blue.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq43',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq43',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq43',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq43',
    },
  ],
},

isArecorrectq43: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[43],
  },
],
},
inisArecorrectq43: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[43],
  },
],
},

//44
['isAre'+shuffledNumbersseventyseven[43]]: {
botPrompt: 'The students ___ learning.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq44',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq44',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq44',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq44',
    },
  ],
},

isArecorrectq44: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[44],
  },
],
},
inisArecorrectq44: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[44],
  },
],
},

//45
['isAre'+shuffledNumbersseventyseven[44]]: {
botPrompt: 'The birds ___ migrating.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq45',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq45',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq45',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq45',
    },
  ],
},

isArecorrectq45: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[45],
  },
],
},
inisArecorrectq45: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[45],
  },
],
},

//46
['isAre'+shuffledNumbersseventyseven[45]]: {
botPrompt: 'The tree ___ tall.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq46',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq46',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq46',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq46',
    },
  ],
},

isArecorrectq46: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[46],
  },
],
},
inisArecorrectq46: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[46],
  },
],
},

//47
['isAre'+shuffledNumbersseventyseven[46]]: {
botPrompt: 'The computer ___ on the desk.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq47',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq47',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq47',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq47',
    },
  ],
},

isArecorrectq47: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[47],
  },
],
},
inisArecorrectq47: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[47],
  },
],
},


//48
['isAre'+shuffledNumbersseventyseven[47]]: {
botPrompt: 'The shoes ___ comfortable.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq48',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq48',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq48',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq48',
    },
  ],
},

isArecorrectq48: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[48],
  },
],
},
inisArecorrectq48: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[48],
  },
],
},

//49
['isAre'+shuffledNumbersseventyseven[48]]: {
botPrompt: 'The boys ___ playing.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq49',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq49',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq49',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq49',
    },
  ],
},

isArecorrectq49: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[49],
  },
],
},
inisArecorrectq49: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[49],
  },
],
},


//50
['isAre'+shuffledNumbersseventyseven[49]]: {
botPrompt: ' The pen ___ on the table.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq50',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq50',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq50',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq50',
    },
  ],
},

isArecorrectq50: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[50],
  },
],
},
inisArecorrectq50: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[50],
  },
],
},

//51
['isAre'+shuffledNumbersseventyseven[50]]: {
botPrompt: 'The paintings ___ beautiful.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq51',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq51',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq51',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq51',
    },
  ],
},

isArecorrectq51: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[51],
  },
],
},
inisArecorrectq51: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[51],
  },
],
},

//52
['isAre'+shuffledNumbersseventyseven[51]]: {
botPrompt: 'The apples ___ ripe.',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq52',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq52',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq52',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq52',
    },
  ],
},

isArecorrectq52: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[52],
  },
],
},
inisArecorrectq52: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[52],
  },
],
},

//53
['isAre'+shuffledNumbersseventyseven[52]]: {
botPrompt: 'The cat',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq53',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq53',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq53',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq53',
    },
  ],
},

isArecorrectq53: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[53],
  },
],
},
inisArecorrectq53: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[53],
  },
],
},

//54
['isAre'+shuffledNumbersseventyseven[53]]: {
botPrompt: 'The books',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq54',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq54',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq54',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq54',
    },
  ],
},

isArecorrectq54: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[54],
  },
],
},
inisArecorrectq54: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[54],
  },
],
},


//55
['isAre'+shuffledNumbersseventyseven[54]]: {
botPrompt: 'The flower',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq55',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq55',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq55',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq55',
    },
  ],
},

isArecorrectq55: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[55],
  },
],
},
inisArecorrectq55: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[55],
  },
],
},

//56
['isAre'+shuffledNumbersseventyseven[55]]: {
  botPrompt: 'The students',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq56',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq56',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq56',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq56',
    },
  ],
},
isArecorrectq56: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[56],
    },
  ],
},
inisArecorrectq56: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[56],
    },
  ],
},

//57
['isAre'+shuffledNumbersseventyseven[56]]: {
botPrompt: 'The Sun',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq57',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq57',
    },
  ],
},
isArecorrectq57: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>M</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[57],
  },
],
},
inisArecorrectq57: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"M"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[57],
  },
],
},

//58
['isAre'+shuffledNumbersseventyseven[57]]: {
botPrompt: 'The Birds ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq58',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq58',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq58',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq58',
  },
],
},
isArecorrectq58: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[58],
  },
],
},
inisArecorrectq58: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[58],
  },
],
},

//59
['isAre'+shuffledNumbersseventyseven[58]]: {
botPrompt: 'The tree',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq57',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq57',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq57',
    },
  ],
},
isArecorrectq59: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> Answers! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[59],
  },
],
},
inisArecorrectq59: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[59],
  },
],
},

//60
['isAre'+shuffledNumbersseventyseven[59]]: {
botPrompt: 'The apples',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq60',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq60',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq60',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq60',
  },
],
},
isArecorrectq20: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[60],
  },
],
},
inisArecorrectq20: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[60],
  },
],
},

//61
["isAre"+shuffledNumbersseventyseven[60]]: {
  botPrompt: 'The dog',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq61',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq61',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq61',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq61',
    },
  ],
},
isArecorrectq61: {
  botPrompt: 'Hurray <strong>is</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[61],
    },
  ],
},
inisArecorrectq61: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[61],
    },
  ],
},

//62
['isAre'+shuffledNumbersseventyseven[61]]: {
  botPrompt: 'The toys',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq62',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq62',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq62',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq62',
    },
  ],
},

isArecorrectq62: {
  botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[62],
    },
  ],
},
inisArecorrectq62: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[62],
    },
  ],
},

//63
['isAre'+shuffledNumbersseventyseven[62]]: {
botPrompt: "The computer",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq63',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq63',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq63',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq63',
    },
  ],
},

isArecorrectq63: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[63],
  },
],
},
inisArecorrectq63: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[63],
  },
],
},

//64
['isAre'+shuffledNumbersseventyseven[63]]: {
botPrompt: 'The friends',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq64',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq64',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq64',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq64',
  },
],
},

isArecorrectq64: {
botPrompt: 'Hurray! <strong>P</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[64],
  },
],
},
inisArecorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"P"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[64],
  },
],
},

//65
['isAre'+shuffledNumbersseventyseven[64]]: {
botPrompt: 'The house',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq65',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq65',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq65',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq65',
    },
  ],
},

isArecorrectq65: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[65],
  },
],
},
inisArecorrectq65: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[65],
  },
],
},

//66
['isAre'+shuffledNumbersseventyseven[65]]: {
botPrompt: 'The pencils',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq66',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq66',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq66',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq66',
  },
],
},

isArecorrectq66: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[66],
  },
],
},
inisArecorrectq66: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[66],
  },
],
},

//67
['isAre'+shuffledNumbersseventyseven[66]]: {
botPrompt: ' The cat and the dog ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq67',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq67',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq67',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq67',
  },
],
},

isArecorrectq67: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[67],
  },
],
},
inisArecorrectq67: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[67],
  },
],
},


//68
['isAre'+shuffledNumbersseventyseven[67]]: {
botPrompt: 'The chair',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq68',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq68',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq68',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq68',
    },
  ],
},

isArecorrectq68: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[68],
  },
],
},
inisArecorrectq68: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[68],
  },
],
},

//69
['isAre'+shuffledNumbersseventyseven[68]]: {
botPrompt: 'The birds and the bees',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq69',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq69',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq69',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq69',
  },
],
},

isArecorrectq69: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[69],
  },
],
},
inisArecorrectq69: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[69],
  },
],
},


//70
['isAre'+shuffledNumbersseventyseven[69]]: {
botPrompt: 'The flowers and the trees',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq70',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq70',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq70',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq70',
  },
],
},

isArecorrectq70: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[70],
  },
],
},
inisArecorrectq70: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[70],
  },
],
},

//71
['isAre'+shuffledNumbersseventyseven[70]]: {
botPrompt: 'The car',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq71',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq71',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq71',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq71',
    },
  ],
},

isArecorrectq71: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[71],
  },
],
},
inisArecorrectq71: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[71],
  },
],
},

//72
['isAre'+shuffledNumbersseventyseven[71]]: {
botPrompt: 'The stars',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq72',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq72',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq72',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq72',
  },
],
},

isArecorrectq72: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[72],
  },
],
},
inisArecorrectq72: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[72],
  },
],
},

//73
['isAre'+shuffledNumbersseventyseven[72]]: {
botPrompt: 'The bookshelf',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq73',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq73',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq73',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq73',
    },
  ],
},

isArecorrectq73: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[73],
  },
],
},
inisArecorrectq73: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[73],
  },
],
},

//74
['isAre'+shuffledNumbersseventyseven[73]]: {
botPrompt: 'The friends and family',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['are', 'is', "here","where"]),
answers: [
  {
    answer: 'are',
    nextId: 'isArecorrectq74',
  },
  {
    answer: 'is',
    nextId: 'inisArecorrectq74',
  },
  {
    answer: "here",
    nextId: 'inisArecorrectq74',
  },
  {
    answer: "where",
    nextId: 'inisArecorrectq74',
  },
],
},

isArecorrectq74: {
botPrompt: 'Hurray! <strong>are</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[74],
  },
],
},
inisArecorrectq74: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[74],
  },
],
},


//75
['isAre'+shuffledNumbersseventyseven[74]]: {
botPrompt: 'The mountain',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq75',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq75',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq75',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq75',
    },
  ],
},

isArecorrectq75: {
botPrompt: 'Hurray! <strong>is</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[75],
  },
],
},
inisArecorrectq75: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'isAre'+shuffledNumbersseventyseven[75],
  },
],
},

//76
['isAre'+shuffledNumbersseventyseven[75]]: {
  botPrompt: 'The shoes',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['are', 'is', "here","where"]),
  answers: [
    {
      answer: 'are',
      nextId: 'isArecorrectq76',
    },
    {
      answer: 'is',
      nextId: 'inisArecorrectq76',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq76',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq76',
    },
  ],
},
isArecorrectq76: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>are</strong> 😎',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[76],
    },
  ],
},
inisArecorrectq76: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"are"</strong>',
  answers: [
    {
      nextId: 'isAre'+shuffledNumbersseventyseven[76],
    },
  ],
},

//77
['isAre'+shuffledNumbersseventyseven[76]]: {
botPrompt: 'The table',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['is', 'are', "here","where"]),
  answers: [
    {
      answer: 'is',
      nextId: 'isArecorrectq77',
    },
    {
      answer: 'are',
      nextId: 'inisArecorrectq77',
    },
    {
      answer: "here",
      nextId: 'inisArecorrectq77',
    },
    {
      answer: "where",
      nextId: 'inisArecorrectq77',
    },
  ],
},
isArecorrectq77: {
botPrompt: 'You Have Selected correct Anwser 🎉! <strong>is</strong> 😎',
answers: [
  {
    nextId: 'wishtocontinue16',
  },
],
},
inisArecorrectq77: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
answers: [
  {
    nextId: 'wishtocontinue16',
  },
],
},




//endisAreletter
wishtocontinue16: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day17',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},




//day17

day17: {
  botPrompt: '<strong> Day 17 : </strong> How do we know who comes before, after and between? ',
  answers: [
          { nextId: 'day17link' },
  ],
},

day17link: {
  botPrompt: 'https://youtu.be/VZQoaBSaxsI',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day172comment',
    },
  ],
},
day172comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day171link' },
  ],
},
day171link: {
  botPrompt: 'https://drive.google.com/file/d/19oC4e3PGh4eVjzv1skiW4eYwGs07u2W8/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
},

wishtocontinue17: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day18',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},




//day18

day18: {
  botPrompt: '<strong> Day 18 : </strong> This and That is used to point to things or objects. `This` is used to point to things which are near and `That` is used to point things which are far. ',
  answers: [
          { nextId: 'day18link' },
  ],
},

day18link: {
  botPrompt: 'https://youtu.be/V0q4NikrJCM',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day182comment',
    },
  ],
},
day182comment: {
  botPrompt: 'Let`s look into the pages of the book',
  answers: [
          { nextId: 'day181link' },
  ],
},
day181link: {
  botPrompt: 'https://drive.google.com/file/d/1jZEUmqQn5AtQFDEdz5rVUDPDGC9Ujzcj/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersfifteen[0],
    },
  ],
},


//thisThat


["thisThat"+shuffledNumbersfifteen[0]]: {
  botPrompt: '1. Which word refers to something close to you?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['This', 'That', "There"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrect',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrect',
    },
    {
      answer: "There",
      nextId: 'inthisThatcorrect',
    },

  ],
},
thisThatcorrect: {
  botPrompt: 'Hurray <strong>This</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersfifteen[1],
    },
  ],
},
inthisThatcorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersfifteen[1],
    },
  ],
},

['thisThat'+shuffledNumbersfifteen[1]]: {
  botPrompt: '2. Which word refers to something far from you?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['This', 'That', "There"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq2',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq2',
    },
    {
      answer: "Here",
      nextId: 'inthisThatcorrectq2',
    },
  ],
},

thisThatcorrectq2: {
  botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersfifteen[2],
    },
  ],
},
inthisThatcorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
  answers: [
    {
      nextId: 'thisThat'+shuffledNumbersfifteen[2],
    },
  ],
},

//3
['thisThat'+shuffledNumbersfifteen[2]]: {
botPrompt: "3. Point to the object that is closer to you.",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Far"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrectq3',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrectq3',
    },
    {
      answer: "Far",
      nextId: 'inthisThatcorrectq3',
    },
  ],
},

thisThatcorrectq3: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[3],
  },
],
},
inthisThatcorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[3],
  },
],
},

//4
['thisThat'+shuffledNumbersfifteen[3]]: {
botPrompt: '4. Point to the object that is farther from you.',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Near"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq4',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq4',
    },
    {
      answer: "Near",
      nextId: 'inthisThatcorrectq4',
    },
  ],
},

thisThatcorrectq4: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[4],
  },
],
},
inthisThatcorrectq2: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[4],
  },
],
},

//5
['thisThat'+shuffledNumbersfifteen[4]]: {
botPrompt: '5. Which word would you use to describe an object you are holding?',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq5',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq5',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq5',
    },
  ],
},

thisThatcorrectq5: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[5],
  },
],
},
inthisThatcorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[5],
  },
],
},

//6
['thisThat'+shuffledNumbersfifteen[5]]: {
botPrompt: ' 6. Which word would you use to describe objects that are far away from you?',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq6',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq6',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq6',
    },
  ],
},

thisThatcorrectq6: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[6],
  },
],
},
inthisThatcorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[6],
  },
],
},

//7
['thisThat'+shuffledNumbersfifteen[6]]: {
botPrompt: '7. Which word would you use to talk about something you can see but can`t touch?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Those"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq7',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq7',
    },
    {
      answer: "Those",
      nextId: 'inthisThatcorrectq7',
    },
  ],
},

thisThatcorrectq7: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[7],
  },
],
},
inthisThatcorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[7],
  },
],
},


//8
['thisThat'+shuffledNumbersfifteen[7]]: {
botPrompt: '8. Which word would you use to ask about a specific object that is not close to you?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "Those"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq8',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq8',
    },
    {
      answer: "Those",
      nextId: 'inthisThatcorrectq8',
    },
  ],
},

thisThatcorrectq8: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[8],
  },
],
},
inthisThatcorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[8],
  },
],
},

//9
['thisThat'+shuffledNumbersfifteen[8]]: {
botPrompt: '9. Which word would you use to point to something close to you?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrectq9',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrectq9',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq9',
    },
  ],
},

thisThatcorrectq9: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[9],
  },
],
},
inthisThatcorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[9],
  },
],
},


//10
['thisThat'+shuffledNumbersfifteen[9]]: {
botPrompt: '10. Which word would you use to point to something far from you?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq10',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq10',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq10',
    },
  ],
},

thisThatcorrectq10: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[10],
  },
],
},
inthisThatcorrectq10: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[10],
  },
],
},

//11
['thisThat'+shuffledNumbersfifteen[10]]: {
botPrompt: '11. Which word would you use to describe an object near your friend?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq11',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq11',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq11',
    },
  ],
},

thisThatcorrectq11: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[11],
  },
],
},
inthisThatcorrectq11: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[11],
  },
],
},

//12
['thisThat'+shuffledNumbersfifteen[11]]: {
botPrompt: '12. Which word would you use to talk about something you can touch right now?',
type: RTypes.TRANSFORMED_TEXT,


input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'thisThatcorrectq12',
    },
    {
      answer: 'That',
      nextId: 'inthisThatcorrectq12',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq12',
    },
  ],
},

thisThatcorrectq12: {
botPrompt: 'Hurray! <strong>This</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[12],
  },
],
},
inthisThatcorrectq12: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[12],
  },
],
},

//13
['thisThat'+shuffledNumbersfifteen[12]]: {
botPrompt: '13. Which word would you use to talk about something you can see across the room?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq13',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq13',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq13',
    },
  ],
},

thisThatcorrectq13: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[13],
  },
],
},
inthisThatcorrectq13: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[13],
  },
],
},

//14
['thisThat'+shuffledNumbersfifteen[13]]: {
botPrompt: '14. Which word would you use to talk about objects that are far away from both you and your friend?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq14',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq14',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq14',
    },
  ],
},

thisThatcorrectq14: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[14],
  },
],
},
inthisThatcorrectq14: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'thisThat'+shuffledNumbersfifteen[14],
  },
],
},


//15
['thisThat'+shuffledNumbersfifteen[14]]: {
botPrompt: '15. Which word would you use to ask about a specific object that is not close to you or your friend?',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['This', 'That', "These"]),
  answers: [
    {
      answer: 'This',
      nextId: 'inthisThatcorrectq15',
    },
    {
      answer: 'That',
      nextId: 'thisThatcorrectq15',
    },
    {
      answer: "These",
      nextId: 'inthisThatcorrectq15',
    },
  ],
},

thisThatcorrectq15: {
botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'wishtocontinue18',
  },
],
},
inthisThatcorrectq15: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
answers: [
  {
    nextId: 'wishtocontinue18',
  },
],
},

//endthisThatletter


wishtocontinue18: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day19',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},






//day19

day19: {
  botPrompt: '<strong> Day 19 : </strong> Zero is a number with no value. It means none or nothing or empty. ',
  answers: [
          { nextId: 'day18link' },
  ],
},

day19link: {
  botPrompt: 'https://youtu.be/V0q4NikrJCM',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'day182comment',
    },
  ],
},
day192comment: {
  botPrompt: 'Let`s look into the pages of the book',
  answers: [
          { nextId: 'day181link' },
  ],
},
day191link: {
  botPrompt: 'https://drive.google.com/file/d/1jZEUmqQn5AtQFDEdz5rVUDPDGC9Ujzcj/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: "zero"+shuffledNumbersten[0],
    },
  ],
},



//zero


["zero"+shuffledNumbersten[0]]: {
  botPrompt: 'What does the number "0" represent?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['The smallest number', 'The largest number', "nothing or empty","a negative value"]),
  answers: [
    {
      answer: 'The smallest number',
      nextId: 'inzerocorrect',
    },
    {
      answer: 'The largest number',
      nextId: 'inzerocorrect',
    },
    {
      answer: "nothing or empty",
      nextId: 'zerocorrect',
    },
    {
      answer: "a negative value",
      nextId: 'inzerocorrect',
    },
  ],
},
zerocorrect: {
  botPrompt: 'Hurray <strong>nothing or empty</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersten[1],
    },
  ],
},
inzerocorrect: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"nothing or empty"</strong>',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersten[1],
    },
  ],
},

['zero'+shuffledNumbersten[1]]: {
  botPrompt: 'What happens when you add or subtract zero from a number?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['The number stays the same', 'The number becomes negative', "The number becomes zero ","The number becomes double"]),
  answers: [
    {
      answer: 'The number stays the same',
      nextId: 'zerocorrectq2',
    },
    {
      answer: 'The number becomes negative',
      nextId: 'inzerocorrectq2',
    },
    {
      answer: "The number becomes zero ",
      nextId: 'inzerocorrectq2',
    },
    {
      answer: "The number becomes double",
      nextId: 'inzerocorrectq2',
    },
  ],
},

zerocorrectq2: {
  botPrompt: 'Hurray! <strong>The number stays the same</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersten[2],
    },
  ],
},
inzerocorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The number stays the same"</strong>',
  answers: [
    {
      nextId: 'zero'+shuffledNumbersten[2],
    },
  ],
},

//3
['zero'+shuffledNumbersten[2]]: {
botPrompt: "How many apples are there if someone gives you zero apples?",
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '5', "0","10"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq3',
  },
  {
    answer: '5',
    nextId: 'inzerocorrectq3',
  },
  {
    answer: "0",
    nextId: 'zerocorrectq3',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq3',
  },
],
},

zerocorrectq3: {
botPrompt: 'Hurray! <strong>0</strong> is the correct answer ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[3],
  },
],
},
inzerocorrectq3: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[3],
  },
],
},

//4
['zero'+shuffledNumbersten[3]]: {
botPrompt: 'What is the value of zero plus zero?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '0', "10","100"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq4',
  },
  {
    answer: '0',
    nextId: 'zerocorrectq4',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq4',
  },
  {
    answer: "100",
    nextId: 'inzerocorrectq4',
  },
],
},

zerocorrectq4: {
botPrompt: 'Hurray! <strong>0</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[4],
  },
],
},
inzerocorrectq4: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[4],
  },
],
},

//5
['zero'+shuffledNumbersten[4]]: {
botPrompt: 'What does it mean if you have zero chocolates?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['You have a lot of chocolates', 'You have no chocolates', "You have one chocolate","You have two chocolates"]),
answers: [
  {
    answer: 'You have a lot of chocolates',
    nextId: 'inzerocorrectq5',
  },
  {
    answer: 'You have no chocolates',
    nextId: 'zerocorrectq5',
  },
  {
    answer: "You have one chocolate",
    nextId: 'inzerocorrectq5',
  },
  {
    answer: "You have two chocolates",
    nextId: 'inzerocorrectq5',
  },
],
},

zerocorrectq5: {
botPrompt: 'Hurray! <strong>You have no chocolates</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[5],
  },
],
},
inzerocorrectq5: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"You have no chocolates"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[5],
  },
],
},

//6
['zero'+shuffledNumbersten[5]]: {
botPrompt: 'If you have five marbles and you give away zero marbles,how many marbles do you have left?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '0', "10","5"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq6',
  },
  {
    answer: '0',
    nextId: 'inzerocorrectq6',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq6',
  },
  {
    answer: "5",
    nextId: 'zerocorrectq6',
  },
],
},

zerocorrectq6: {
botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[6],
  },
],
},
inzerocorrectq6: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[6],
  },
],
},

//7
['zero'+shuffledNumbersten[6]]: {
botPrompt: 'Which of the following numbers is equal to zero? ',
type: RTypes.TRANSFORMED_TEXT,
input: selectField(['5+5', '10-10', "3x3","2+4"]),
answers: [
  {
    answer: '5+5',
    nextId: 'inzerocorrectq7',
  },
  {
    answer: '10-10',
    nextId: 'zerocorrectq7',
  },
  {
    answer: "3x3",
    nextId: 'inzerocorrectq7',
  },
  {
    answer: "2+4",
    nextId: 'inzerocorrectq7',
  },
],
},

zerocorrectq7: {
botPrompt: 'Hurray! <strong>10-10</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[7],
  },
],
},
inzerocorrectq7: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10-10    "</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[7],
  },
],
},


//8
['zero'+shuffledNumbersten[7]]: {
botPrompt: 'If you have zero pencils and someone gives you five pencils how many pencils do you have now?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['1', '5', "0","10"]),
answers: [
  {
    answer: '1',
    nextId: 'inzerocorrectq8',
  },
  {
    answer: '5',
    nextId: 'zerocorrectq8',
  },
  {
    answer: "0",
    nextId: 'inzerocorrectq8',
  },
  {
    answer: "10",
    nextId: 'inzerocorrectq8',
  },
],
},

zerocorrectq8: {
botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[8],
  },
],
},
inzerocorrectq8: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
answers: [
  {
    nextId: 'zero'+shuffledNumbersten[8],
  },
],
},

//9
['zero'+shuffledNumbersten[8]]: {
botPrompt: 'What is the value of zero plus any number?',
type: RTypes.TRANSFORMED_TEXT,

input: selectField(['0', '5', "1","any number"]),
answers: [
  {
    answer: '0',
    nextId: 'inzerocorrectq9',
  },
  {
    answer: '5',
    nextId: 'inzerocorrectq9',
  },
  {
    answer: "1",
    nextId: 'inzerocorrectq9',
  },
  {
    answer: "any number",
    nextId: 'zerocorrectq9',
  },
],
},

zerocorrectq9: {
botPrompt: 'Hurray! <strong>any number</strong> is the correct answer  ! 😎',
answers: [
  {
    nextId: 'wishtocontinue19',
  },
],
},
inzerocorrectq9: {
botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"any number"</strong>',
answers: [
  {
    nextId: 'wishtocontinue19',
  },
],
},



//endzeroletter


wishtocontinue19: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'endConv',
      },
      {
        answer: 'No!',
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





console.log("myrand",questions)


export default questions;

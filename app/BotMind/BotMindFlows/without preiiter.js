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
  
  // Create an array containing numbers from 1 to 34
  const numbers = Array.from({ length: 34 }, (_, i) => i + 1);
  
  // Shuffle the array
  const shuffledNumbers = shuffleArray(numbers);
  
  
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
  const numbersten = Array.from({ length: 9 }, (_, i) => i + 1);
  
  // Shuffle the array
  const shuffledNumbersten = shuffleArrayten(numbersten);
  
  
  //shuffleArraynseve
  function shuffleArraynseve(array) {
    const shuffleArraynseve = array.slice();
    for (let i = shuffleArraynseve.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleArraynseve[i], shuffleArraynseve[j]] = [shuffleArraynseve[j], shuffleArraynseve[i]];
    }
    return shuffleArraynseve;
  }
  
  // Create an array containing numbers from 1 to 97
  const numbersnseve = Array.from({ length: 97 }, (_, i) => i + 1);
  
  // Shuffle the array
  const shuffledNumbersnseve = shuffleArraynseve(numbersnseve);
  
  
  
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
  const numberslot = Array.from({ length: 77 }, (_, i) => i + 1);
  
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
    input: selectField(['Yes!', 'No!','Take Shuffle Test']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day2',
     
  
        },
        {
          answer: 'No!',
          nextId: 'endConv',
          sumToBags: [{ name: 'd', points: 1 }],
        },
        {
          answer: 'Take Shuffle Test',
          nextId: "opposites"+shuffleArraylot[0],
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
          sumToBags: [{ name: 'd', points: 2 }],
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
          sumToBags: [{ name: 'd', points: 3 }],
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
          sumToBags: [{ name: 'd', points: 4 }],
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
          sumToBags: [{ name: 'd', points: 5 }],
  
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
          sumToBags: [{ name: 'd', points: 6 }],
  
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
          sumToBags: [{ name: 'd', points: 7 }],
  
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
      sumToBags: [{ name: 'c', points: 1 },  { name: 'd', points: 8 }],
  
      },
      {
        answer: 'B',
        nextId: 'incapscorrect',
    sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
  
  
  
      },
      {
        answer: "C",
        nextId: 'incapscorrect',
      sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
  
  
  
      },
      {
        answer: "D",
        nextId: 'incapscorrect',
      sumToBags: [{ name: 'i', points: 1 },  { name: 'd', points: 8 }],
  
  
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
      },
      {
        answer: 'F',
        nextId: 'capscorrectq2',
      sumToBags: [{ name: 'c', points: 1 }],
  
      },
      {
        answer: "G",
        nextId: 'incapscorrectq2',
      sumToBags: [{ name: 'i', points: 1 }],
  
      },
      {
        answer: "H",
        nextId: 'incapscorrectq2',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'J',
      nextId: 'incapscorrectq3',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "K",
      nextId: 'capscorrectq3',
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: "L",
      nextId: 'incapscorrectq3',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'N',
      nextId: 'incapscorrectq4',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "O",
      nextId: 'incapscorrectq4',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "P",
      nextId: 'capscorrectq4',
      sumToBags: [{ name: 'c', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'R',
      nextId: 'capscorrectq5',
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: "S",
      nextId: 'incapscorrectq5',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "T",
      nextId: 'incapscorrectq5',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: 'V',
      nextId: 'incapscorrectq6',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "W",
      nextId: 'incapscorrectq6',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "X",
      nextId: 'incapscorrectq6',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'Z',
      nextId: 'incapscorrectq7',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "A",
      nextId: 'incapscorrectq7',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "B",
      nextId: 'capscorrectq7',
      sumToBags: [{ name: 'c', points: 1 }],
  
  
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'D',
      nextId: 'incapscorrectq8',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "E",
      nextId: 'capscorrectq8',
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: "F",
      nextId: 'incapscorrectq8',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'H',
      nextId: 'incapscorrectq9',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "I",
      nextId: 'capscorrectq9',
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: "J",
      nextId: 'incapscorrectq9',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'L',
      nextId: 'incapscorrectq10',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "M",
      nextId: 'incapscorrectq10',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "N",
      nextId: 'capscorrectq10',
      sumToBags: [{ name: 'c', points: 1 }],
  
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
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: 'P',
      nextId: 'incapscorrectq11',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "Q",
      nextId: 'incapscorrectq11',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "R",
      nextId: 'incapscorrectq11',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'T',
      nextId: 'incapscorrectq12',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "U",
      nextId: 'incapscorrectq12',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "V",
      nextId: 'capscorrectq12',
      sumToBags: [{ name: 'c', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'X',
      nextId: 'incapscorrectq13',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "Y",
      nextId: 'incapscorrectq13',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "Z",
      nextId: 'capscorrectq13',
      sumToBags: [{ name: 'c', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'B',
      nextId: 'incapscorrectq14',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "C",
      nextId: 'capscorrectq14',
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: "D",
      nextId: 'incapscorrectq14',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'F',
      nextId: 'incapscorrectq15',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "G",
      nextId: 'incapscorrectq15',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "H",
      nextId: 'capscorrectq15',
      sumToBags: [{ name: 'c', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
      },
      {
        answer: 'J',
        nextId: 'capscorrectq16',
      sumToBags: [{ name: 'c', points: 1 }],
  
      },
      {
        answer: "K",
        nextId: 'incapscorrectq16',
      sumToBags: [{ name: 'i', points: 1 }],
  
      },
      {
        answer: "L",
        nextId: 'incapscorrectq16',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'N',
      nextId: 'incapscorrectq17',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "M",
      nextId: 'capscorrectq17',
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: "P",
      nextId: 'incapscorrectq17',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: 'R',
      nextId: 'incapscorrectq18',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "S",
      nextId: 'incapscorrectq18',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "T",
      nextId: 'incapscorrectq18',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: 'V',
      nextId: 'incapscorrectq19',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "W",
      nextId: 'incapscorrectq19',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "X",
      nextId: 'incapscorrectq19',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: 'L',
      nextId: 'capscorrectq20',
      sumToBags: [{ name: 'c', points: 1 }],
  
    },
    {
      answer: "A",
      nextId: 'incapscorrectq20',
      sumToBags: [{ name: 'i', points: 1 }],
  
    },
    {
      answer: "B",
      nextId: 'incapscorrectq20',
      sumToBags: [{ name: 'i', points: 1 }],
  
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
          sumToBags: [{ name: 'd', points: 8 }],
  
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
          nextId: 'day10',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
          sumToBags: [{ name: 'd', points: 9 }],
  
        },
    ],
  },
  
  
  //day10
  
  day10: {
    botPrompt: ' <strong> Day 10 : </strong> Counting can be fun in classroom.',
    answers: [
            { nextId: 'day10link' },
    ],
  },
  day10link: {
    botPrompt: 'https://youtu.be/9bT2jilWRXw',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day10comment',
      },
    ],
  },
  day10comment: {
    botPrompt: '<strong>Let`s solve</strong> ',
    answers: [
            { nextId: "numbers"+shuffledNumbersnseve[0] },
    ],
  },
  
  
  
  
  
  //startnumbers
  
  
  ["numbers"+shuffledNumbersnseve[0]]: {
    botPrompt: 'How many fingers do you have on one hand?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","6"]),
    answers: [
      {
        answer: '3',
        nextId: 'innumberscorrect',
      },
      {
        answer: '4',
        nextId: 'innumberscorrect',
      },
      {
        answer: "5",
        nextId: 'numberscorrect',
      },
      {
        answer: "6",
        nextId: 'innumberscorrect',
      },
    ],
  },
  numberscorrect: {
    botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[1],
      },
    ],
  },
  innumberscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[1],
      },
    ],
  },
  
  ['numbers'+shuffledNumbersnseve[1]]: {
    botPrompt: 'Which number comes after 4?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['1', '2', "3","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq2',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq2',
      },
      {
        answer: "3",
        nextId: 'innumberscorrectq2',
      },
      {
        answer: "5",
        nextId: 'numberscorrectq2',
      },
    ],
  },
  
  numberscorrectq2: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[2],
      },
    ],
  },
  innumberscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[2],
      },
    ],
  },
  
  //3
  ['numbers'+shuffledNumbersnseve[2]]: {
    botPrompt: 'Which number comes before 7?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['5', '6', "7","8"]),
    answers: [
      {
        answer: '5',
        nextId: 'innumberscorrectq3',
      },
      {
        answer: '6',
        nextId: 'numberscorrectq3',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq3',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq3',
      },
    ],
  },
  
  numberscorrectq3: {
    botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[3],
      },
    ],
  },
  innumberscorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[3],
      },
    ],
  },
  
  //4
  ['numbers'+shuffledNumbersnseve[3]]: {
  botPrompt: 'What number comes between 3 and 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "4","6"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq4',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq4',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq4',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq4',
      },
    ],
  },
  
  numberscorrectq4: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[4],
    },
  ],
  },
  innumberscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[4],
    },
  ],
  },
  
  //5
  ['numbers'+shuffledNumbersnseve[4]]: {
  botPrompt: 'How many legs does a cat have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq5',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq5',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq5',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq5',
      },
    ],
  },
  
  numberscorrectq5: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[5],
    },
  ],
  },
  innumberscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[5],
    },
  ],
  },
  
  //6
  ['numbers'+shuffledNumbersnseve[5]]: {
  botPrompt: 'Which is greater, 2 or 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq6',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq6',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq6',
      },
      {
        answer: "5",
        nextId: 'numberscorrectq6',
      },
    ],
  },
  
  numberscorrectq6: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[6],
    },
  ],
  },
  innumberscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[6],
    },
  ],
  },
  
  //7
  ['numbers'+shuffledNumbersnseve[6]]: {
  botPrompt: 'Which number is the smallest?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","11"]),
    answers: [
      {
        answer: '8',
        nextId: 'numberscorrectq7',
      },
      {
        answer: '9',
        nextId: 'innumberscorrectq7',
      },
      {
        answer: "10",
        nextId: 'innumberscorrectq7',
      },
      {
        answer: "11",
        nextId: 'innumberscorrectq7',
      },
    ],
  },
  
  numberscorrectq7: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[7],
    },
  ],
  },
  innumberscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[7],
    },
  ],
  },
  
  
  //8
  ['numbers'+shuffledNumbersnseve[7]]: {
  botPrompt: 'Which number is the largest?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
    answers: [
      {
        answer: '6',
        nextId: 'innumberscorrectq8',
      },
      {
        answer: '7',
        nextId: 'innumberscorrectq8',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq8',
      },
      {
        answer: "9",
        nextId: 'numberscorrectq8',
      },
    ],
  },
  
  numberscorrectq8: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[8],
    },
  ],
  },
  innumberscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[8],
    },
  ],
  },
  
  //9
  ['numbers'+shuffledNumbersnseve[8]]: {
  botPrompt: 'What number comes after 9?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['10', '11', "12","13"]),
    answers: [
      {
        answer: '10',
        nextId: 'numberscorrectq9',
      },
      {
        answer: '11',
        nextId: 'innumberscorrectq9',
      },
      {
        answer: "12",
        nextId: 'innumberscorrectq9',
      },
      {
        answer: "13",
        nextId: 'innumberscorrectq9',
      },
    ],
  },
  
  numberscorrectq9: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[9],
    },
  ],
  },
  innumberscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[9],
    },
  ],
  },
  
  
  //10
  ['numbers'+shuffledNumbersnseve[9]]: {
  botPrompt: 'What number comes before 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq10',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq10',
      },
      {
        answer: "3",
        nextId: 'numberscorrectq10',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq10',
      },
    ],
  
  },
  
  numberscorrectq10: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[10],
    },
  ],
  },
  innumberscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[10],
    },
  ],
  },
  
  //11
  ['numbers'+shuffledNumbersnseve[10]]: {
  botPrompt: 'How many eyes does a person have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq11',
      },
      {
        answer: '2',
        nextId: 'numberscorrectq11',
      },
      {
        answer: "3",
        nextId: 'innumberscorrectq11',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq11',
      },
    ],
  
  },
  
  numberscorrectq11: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[11],
    },
  ],
  },
  innumberscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[11],
    },
  ],
  },
  
  //12
  ['numbers'+shuffledNumbersnseve[11]]: {
  botPrompt: 'Which number is in between 2 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq12',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq12',
      },
      {
        answer: "3",
        nextId: 'numberscorrectq12',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq12',
      },
    ],
  
  },
  
  numberscorrectq12: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[12],
    },
  ],
  },
  innumberscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[12],
    },
  ],
  },
  
  //13
  ['numbers'+shuffledNumbersnseve[12]]: {
  botPrompt: 'Which number is in between 6 and 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'innumberscorrectq13',
      },
      {
        answer: '5',
        nextId: 'innumberscorrectq13',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq13',
      },
      {
        answer: "7",
        nextId: 'numberscorrectq13',
      },
    ],
  },
  
  numberscorrectq13: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[13],
    },
  ],
  },
  innumberscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[13],
    },
  ],
  },
  
  //14
  ['numbers'+shuffledNumbersnseve[13]]: {
  botPrompt: 'Which number comes after 15?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['16', '17', "18","19"]),
    answers: [
      {
        answer: '16',
        nextId: 'innumberscorrectq14',
      },
      {
        answer: '17',
        nextId: 'innumberscorrectq14',
      },
      {
        answer: "18",
        nextId: 'numberscorrectq14',
      },
      {
        answer: "19",
        nextId: 'innumberscorrectq14',
      },
    ],
  },
  
  numberscorrectq14: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[14],
    },
  ],
  },
  innumberscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[14],
    },
  ],
  },
  
  
  //15
  ['numbers'+shuffledNumbersnseve[14]]: {
  botPrompt: 'Which number comes before 11?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","12"]),
    answers: [
      {
        answer: '8',
        nextId: 'innumberscorrectq15',
      },
      {
        answer: '9',
        nextId: 'innumberscorrectq15',
      },
      {
        answer: "10",
        nextId: 'numberscorrectq15',
      },
      {
        answer: "12",
        nextId: 'innumberscorrectq15',
      },
    ],
  },
  
  numberscorrectq15: {
  botPrompt: 'Hurray! <strong>10</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[15],
    },
  ],
  },
  innumberscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[15],
    },
  ],
  },
  
  //16
  ['numbers'+shuffledNumbersnseve[15]]: {
    botPrompt: 'How many wheels does a car have?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'innumberscorrectq16',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq16',
      },
      {
        answer: "3",
        nextId: 'innumberscorrectq16',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq16',
      },
    ],
  },
  numberscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[16],
      },
    ],
  },
  innumberscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[16],
      },
    ],
  },
  
  //17
  ['numbers'+shuffledNumbersnseve[16]]: {
  botPrompt: 'How many days are in a week?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '5', "6","7"]),
    answers: [
      {
        answer: '4',
        nextId: 'innumberscorrectq17',
      },
      {
        answer: '5',
        nextId: 'innumberscorrectq17',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq17',
      },
      {
        answer: "7",
        nextId: 'numberscorrectq17',
      },
    ],
  },
  numberscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>7</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[17],
    },
  ],
  },
  innumberscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[17],
    },
  ],
  },
  
  //18
  ['numbers'+shuffledNumbersnseve[17]]: {
  botPrompt: 'Which number is greater, 9 or 6?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "8","94"]),
  answers: [
    {
      answer: '6',
      nextId: 'innumberscorrectq18',
    },
    {
      answer: '7',
      nextId: 'innumberscorrectq18',
    },
    {
      answer: "8",
      nextId: 'innumberscorrectq18',
    },
    {
      answer: "9",
      nextId: 'numberscorrectq18',
    },
  ],
  },
  numberscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>9</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[18],
    },
  ],
  },
  innumberscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[18],
    },
  ],
  },
  
  //19
  ['numbers'+shuffledNumbersnseve[18]]: {
  botPrompt: 'Which number is smaller, 2 or 5?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'numberscorrectq19',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq19',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq19',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq19',
    },
  ],
  },
  numberscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>2</strong> Answers! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[19],
    },
  ],
  },
  innumberscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[19],
    },
  ],
  },
  
  //20
  ['numbers'+shuffledNumbersnseve[19]]: {
  botPrompt: 'What number comes between 7 and 9?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '6', "7","8"]),
  answers: [
    {
      answer: '5',
      nextId: 'innumberscorrectq20',
    },
    {
      answer: '6',
      nextId: 'innumberscorrectq20',
    },
    {
      answer: "7",
      nextId: 'innumberscorrectq20',
    },
    {
      answer: "8",
      nextId: 'numberscorrectq20',
    },
  ],
  },
  numberscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>8</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[20],
    },
  ],
  },
  innumberscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[20],
    },
  ],
  },
  
  //21
  ["numbers"+shuffledNumbersnseve[20]]: {
    botPrompt: 'What number comes after 20?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['21', '22', "23","24"]),
  answers: [
    {
      answer: '21',
      nextId: 'numberscorrectq21',
    },
    {
      answer: '22',
      nextId: 'innumberscorrectq21',
    },
    {
      answer: "23",
      nextId: 'innumberscorrectq21',
    },
    {
      answer: "24",
      nextId: 'innumberscorrectq21',
    },
  ],
  },
  numberscorrectq21: {
    botPrompt: 'Hurray <strong>21</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[21],
      },
    ],
  },
  innumberscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[21],
      },
    ],
  },
  
  //22
  ['numbers'+shuffledNumbersnseve[21]]: {
    botPrompt: 'What number comes before 6?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq22',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq22',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq22',
    },
    {
      answer: "5",
      nextId: 'numberscorrectq22',
    },
  ],
  },
  
  numberscorrectq22: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[22],
      },
    ],
  },
  innumberscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[22],
      },
    ],
  },
  
  //23
  ['numbers'+shuffledNumbersnseve[22]]: {
  botPrompt: "How many sides does a square have?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq23',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq23',
    },
    {
      answer: "4",
      nextId: 'numberscorrectq23',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq23',
    },
  ],
  },
  
  numberscorrectq23: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[23],
    },
  ],
  },
  innumberscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[23],
    },
  ],
  },
  
  //24
  ['numbers'+shuffledNumbersnseve[23]]: {
  botPrompt: 'Which number comes after 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'innumberscorrectq24',
    },
    {
      answer: '7',
      nextId: 'innumberscorrectq24',
    },
    {
      answer: "8",
      nextId: 'innumberscorrectq24',
    },
    {
      answer: "9",
      nextId: 'numberscorrectq24',
    },
  ],
  },
  
  numberscorrectq24: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[24],
    },
  ],
  },
  innumberscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[24],
    },
  ],
  },
  
  //25
  ['numbers'+shuffledNumbersnseve[24]]: {
  botPrompt: 'Which number comes before 13?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['10', '11', "12","13"]),
  answers: [
    {
      answer: '10',
      nextId: 'innumberscorrectq25',
    },
    {
      answer: '11',
      nextId: 'innumberscorrectq25',
    },
    {
      answer: "12",
      nextId: 'numberscorrectq25',
    },
    {
      answer: "13",
      nextId: 'innumberscorrectq25',
    },
  ],
  },
  
  numberscorrectq25: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[25],
    },
  ],
  },
  innumberscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[25],
    },
  ],
  },
  
  //26
  ['numbers'+shuffledNumbersnseve[25]]: {
  botPrompt: 'How many sides does a triangle have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq26',
    },
    {
      answer: '3',
      nextId: 'numberscorrectq26',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq26',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq26',
    },
  ],
  },
  
  numberscorrectq26: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[26],
    },
  ],
  },
  innumberscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[26],
    },
  ],
  },
  
  //27
  ['numbers'+shuffledNumbersnseve[26]]: {
  botPrompt: 'What number comes between 17 and 19?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['14', '15', "16","18"]),
    answers: [
      {
        answer: '14',
        nextId: 'innumberscorrectq27',
      },
      {
        answer: '15',
        nextId: 'innumberscorrectq27',
      },
      {
        answer: "16",
        nextId: 'innumberscorrectq27',
      },
      {
        answer: "18",
        nextId: 'numberscorrectq27',
      },
    ],
  },
  
  numberscorrectq27: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[27],
    },
  ],
  },
  innumberscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[27],
    },
  ],
  },
  
  
  //28
  ['numbers'+shuffledNumbersnseve[27]]: {
  botPrompt: 'What number comes before 20?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['16', '17', "18","19"]),
  answers: [
    {
      answer: '16',
      nextId: 'innumberscorrectq28',
    },
    {
      answer: '17',
      nextId: 'innumberscorrectq28',
    },
    {
      answer: "18",
      nextId: 'innumberscorrectq28',
    },
    {
      answer: "19",
      nextId: 'numberscorrectq28',
    },
  ],
  },
  
  numberscorrectq28: {
  botPrompt: 'Hurray! <strong>19</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[28],
    },
  ],
  },
  innumberscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[28],
    },
  ],
  },
  
  //29
  ['numbers'+shuffledNumbersnseve[28]]: {
  botPrompt: 'How many legs does a spider have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '6', "8","10"]),
    answers: [
      {
        answer: '4',
        nextId: 'innumberscorrectq29',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq29',
      },
      {
        answer: "8",
        nextId: 'numberscorrectq29',
      },
      {
        answer: "10",
        nextId: 'innumberscorrectq29',
      },
    ],
  },
  
  numberscorrectq29: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[29],
    },
  ],
  },
  innumberscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[29],
    },
  ],
  },
  
  
  //30
  ['numbers'+shuffledNumbersnseve[29]]: {
  botPrompt: 'Which number is greater, 3 or 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "6","7"]),
  answers: [
    {
      answer: '3',
      nextId: 'innumberscorrectq30',
    },
    {
      answer: '4',
      nextId: 'innumberscorrectq30',
    },
    {
      answer: "6",
      nextId: 'innumberscorrectq30',
    },
    {
      answer: "7",
      nextId: 'numberscorrectq30',
    },
  ],
  },
  
  numberscorrectq30: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[30],
    },
  ],
  },
  innumberscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[30],
    },
  ],
  },
  
  //31
  ['numbers'+shuffledNumbersnseve[30]]: {
  botPrompt: 'Which number is smaller, 1 or 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '2', "4","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'numberscorrectq31',
      },
      {
        answer: '2',
        nextId: 'innumberscorrectq31',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq31',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq31',
      },
    ],
  },
  
  numberscorrectq31: {
  botPrompt: 'Hurray! <strong>1</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[31],
    },
  ],
  },
  innumberscorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[31],
    },
  ],
  },
  
  //32
  ['numbers'+shuffledNumbersnseve[31]]: {
  botPrompt: 'What number comes between 11 and 13?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","12"]),
  answers: [
    {
      answer: '8',
      nextId: 'innumberscorrectq32',
    },
    {
      answer: '9',
      nextId: 'innumberscorrectq32',
    },
    {
      answer: "10",
      nextId: 'innumberscorrectq32',
    },
    {
      answer: "12",
      nextId: 'numberscorrectq32',
    },
  ],
  },
  
  numberscorrectq32: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[32],
    },
  ],
  },
  innumberscorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[32],
    },
  ],
  },
  
  //33
  ['numbers'+shuffledNumbersnseve[32]]: {
  botPrompt: 'What number comes after 25?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['26', '27', "28","29"]),
  answers: [
    {
      answer: '26',
      nextId: 'numberscorrectq33',
    },
    {
      answer: '27',
      nextId: 'innumberscorrectq33',
    },
    {
      answer: "28",
      nextId: 'innumberscorrectq33',
    },
    {
      answer: "29",
      nextId: 'innumberscorrectq33',
    },
  ],
  },
  
  numberscorrectq33: {
  botPrompt: 'Hurray! <strong>26</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[33],
    },
  ],
  },
  innumberscorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[33],
    },
  ],
  },
  
  //34
  ['numbers'+shuffledNumbersnseve[33]]: {
  botPrompt: 'What number comes before 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "5","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'numberscorrectq34',
      },
      {
        answer: '4',
        nextId: 'innumberscorrectq34',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq34',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq34',
      },
    ],
  },
  
  numberscorrectq34: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[34],
    },
  ],
  },
  innumberscorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[34],
    },
  ],
  },
  
  
  //35
  ['numbers'+shuffledNumbersnseve[34]]: {
  botPrompt: 'How many sides does a circle have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['0', '1', "2","3"]),
  answers: [
    {
      answer: '0',
      nextId: 'numberscorrectq35',
    },
    {
      answer: '1',
      nextId: 'innumberscorrectq35',
    },
    {
      answer: "2",
      nextId: 'innumberscorrectq35',
    },
    {
      answer: "3",
      nextId: 'innumberscorrectq35',
    },
  ],
  },
  
  numberscorrectq35: {
  botPrompt: 'Hurray! <strong>0</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[35],
    },
  ],
  },
  innumberscorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"0"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[35],
    },
  ],
  },
  
  //36
  ['numbers'+shuffledNumbersnseve[35]]: {
    botPrompt: 'Which number is in between 14 and 16?',
    type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['11', '12', "13","15"]),
  answers: [
    {
      answer: '11',
      nextId: 'innumberscorrectq36',
    },
    {
      answer: '12',
      nextId: 'innumberscorrectq36',
    },
    {
      answer: "13",
      nextId: 'innumberscorrectq36',
    },
    {
      answer: "15",
      nextId: 'numberscorrectq36',
    },
  ],
  },
  numberscorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>15</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[36],
      },
    ],
  },
  innumberscorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[36],
      },
    ],
  },
  
  //37
  ['numbers'+shuffledNumbersnseve[36]]: {
  botPrompt: 'Which number is in between 18 and 20?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '15', "16","19"]),
  answers: [
    {
      answer: '14',
      nextId: 'innumberscorrectq37',
    },
    {
      answer: '15',
      nextId: 'innumberscorrectq37',
    },
    {
      answer: "16",
      nextId: 'innumberscorrectq37',
    },
    {
      answer: "19",
      nextId: 'numberscorrectq37',
    },
  ],
  },
  numberscorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>19</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[37],
    },
  ],
  },
  innumberscorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[37],
    },
  ],
  },
  
  //38
  ['numbers'+shuffledNumbersnseve[37]]: {
  botPrompt: 'How many legs does a dog have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq38',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq38',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq38',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq38',
      },
    ],
  },
  numberscorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[38],
    },
  ],
  },
  innumberscorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[38],
    },
  ],
  },
  
  //39
  ['numbers'+shuffledNumbersnseve[38]]: {
  botPrompt: 'Which number is greater, 2 or 9?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '6', "8","9"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq310',
    },
    {
      answer: '6',
      nextId: 'innumberscorrectq39',
    },
    {
      answer: "8",
      nextId: 'innumberscorrectq39',
    },
    {
      answer: "9",
      nextId: 'numberscorrectq39',
    },
  ],
  },
  numberscorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>9</strong> Answers! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[39],
    },
  ],
  },
  innumberscorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[39],
    },
  ],
  },
  
  //40
  ['numbers'+shuffledNumbersnseve[39]]: {
  botPrompt: 'Which number is smaller, 4 or 10?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '6', "8","10"]),
    answers: [
      {
        answer: '4',
        nextId: 'numberscorrectq40',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq40',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq40',
      },
      {
        answer: "10",
        nextId: 'innumberscorrectq40',
      },
    ],
  },
  numberscorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[40],
    },
  ],
  },
  innumberscorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[40],
    },
  ],
  },
  
  //41
  ["numbers"+shuffledNumbersnseve[40]]: {
    botPrompt: 'What number comes between 21 and 23?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['17', '18', "19","22"]),
    answers: [
      {
        answer: '17',
        nextId: 'innumberscorrectq41',
      },
      {
        answer: '18',
        nextId: 'innumberscorrectq41',
      },
      {
        answer: "19",
        nextId: 'innumberscorrectq41',
      },
      {
        answer: "22",
        nextId: 'numberscorrectq41',
      },
    ],
  },
  numberscorrectq41: {
    botPrompt: 'Hurray <strong>22</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[41],
      },
    ],
  },
  innumberscorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[41],
      },
    ],
  },
  
  //42
  
  ['numbers'+shuffledNumbersnseve[41]]: {
    botPrompt: 'What number comes after 30?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['31', '32', "33","34"]),
    answers: [
      {
        answer: '31',
        nextId: 'numberscorrectq42',
      },
      {
        answer: '32',
        nextId: 'innumberscorrectq42',
      },
      {
        answer: "33",
        nextId: 'innumberscorrectq42',
      },
      {
        answer: "34",
        nextId: 'innumberscorrectq42',
      },
    ],
  },
  
  numberscorrectq42: {
    botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[42],
      },
    ],
  },
  innumberscorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[42],
      },
    ],
  },
  
  //43
  ['numbers'+shuffledNumbersnseve[42]]: {
  botPrompt: "What number comes before 12?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['5', '6', "7","11"]),
    answers: [
      {
        answer: '5',
        nextId: 'innumberscorrectq43',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq43',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq43',
      },
      {
        answer: "11",
        nextId: 'numberscorrectq43',
      },
    ],
  },
  
  numberscorrectq43: {
  botPrompt: 'Hurray! <strong>11</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[43],
    },
  ],
  },
  innumberscorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[43],
    },
  ],
  },
  
  //44
  ['numbers'+shuffledNumbersnseve[43]]: {
  botPrompt: 'What number comes after 35?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['36', '37', "38","39"]),
    answers: [
      {
        answer: '36',
        nextId: 'innumberscorrectq44',
      },
      {
        answer: '37',
        nextId: 'innumberscorrectq44',
      },
      {
        answer: "38",
        nextId: 'numberscorrectq44',
      },
      {
        answer: "39",
        nextId: 'innumberscorrectq44',
      },
    ],
  },
  
  numberscorrectq44: {
  botPrompt: 'Hurray! <strong>36</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[44],
    },
  ],
  },
  innumberscorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"36"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[44],
    },
  ],
  },
  
  //45
  ['numbers'+shuffledNumbersnseve[44]]: {
  botPrompt: 'What number comes before 50?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['44', '45', "46","49"]),
    answers: [
      {
        answer: '44',
        nextId: 'innumberscorrectq45',
      },
      {
        answer: '45',
        nextId: 'innumberscorrectq45',
      },
      {
        answer: "46",
        nextId: 'innumberscorrectq45',
      },
      {
        answer: "49",
        nextId: 'numberscorrectq45',
      },
    ],
  },
  
  numberscorrectq45: {
  botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[45],
    },
  ],
  },
  innumberscorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[45],
    },
  ],
  },
  
  //46
  ['numbers'+shuffledNumbersnseve[45]]: {
  botPrompt: 'How many sides does a square have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
    answers: [
      {
        answer: '2',
        nextId: 'innumberscorrectq46',
      },
      {
        answer: '3',
        nextId: 'innumberscorrectq46',
      },
      {
        answer: "4",
        nextId: 'numberscorrectq46',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq46',
      },
    ],
  },
  
  numberscorrectq46: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[46],
    },
  ],
  },
  innumberscorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[46],
    },
  ],
  },
  
  //47
  ['numbers'+shuffledNumbersnseve[46]]: {
  botPrompt: 'Which number is greater, 15 or 22?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['12', '15', "18","22"]),
    answers: [
      {
        answer: '12',
        nextId: 'innumberscorrectq47',
      },
      {
        answer: '15',
        nextId: 'innumberscorrectq47',
      },
      {
        answer: "18",
        nextId: 'innumberscorrectq47',
      },
      {
        answer: "22",
        nextId: 'numberscorrectq47',
      },
    ],
  },
  
  numberscorrectq47: {
  botPrompt: 'Hurray! <strong>22</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[47],
    },
  ],
  },
  innumberscorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[47],
    },
  ],
  },
  
  
  //48
  ['numbers'+shuffledNumbersnseve[47]]: {
  botPrompt: 'Which number is smaller, 9 or 13?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '10', "12","13"]),
    answers: [
      {
        answer: '9',
        nextId: 'numberscorrectq48',
      },
      {
        answer: '10',
        nextId: 'innumberscorrectq48',
      },
      {
        answer: "12",
        nextId: 'innumberscorrectq48',
      },
      {
        answer: "13",
        nextId: 'innumberscorrectq48',
      },
    ],
  },
  
  numberscorrectq48: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[48],
    },
  ],
  },
  innumberscorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[48],
    },
  ],
  },
  
  //49
  ['numbers'+shuffledNumbersnseve[48]]: {
  botPrompt: 'What number comes between 29 and 31?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '29', "30","32"]),
    answers: [
      {
        answer: '28',
        nextId: 'innumberscorrectq49',
      },
      {
        answer: '29',
        nextId: 'innumberscorrectq49',
      },
      {
        answer: "30",
        nextId: 'numberscorrectq49',
      },
      {
        answer: "32",
        nextId: 'innumberscorrectq49',
      },
    ],
  },
  
  numberscorrectq49: {
  botPrompt: 'Hurray! <strong>30</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[49],
    },
  ],
  },
  innumberscorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[49],
    },
  ],
  },
  
  
  //50
  ['numbers'+shuffledNumbersnseve[49]]: {
  botPrompt: 'What number comes after 60?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['61', '62', "63","64"]),
    answers: [
      {
        answer: '61',
        nextId: 'numberscorrectq50',
      },
      {
        answer: '62',
        nextId: 'innumberscorrectq50',
      },
      {
        answer: "63",
        nextId: 'numberscorrectq50',
      },
      {
        answer: "64",
        nextId: 'innumberscorrectq50',
      },
    ],
  },
  
  numberscorrectq50: {
  botPrompt: 'Hurray! <strong>61</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[50],
    },
  ],
  },
  innumberscorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"61"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[50],
    },
  ],
  },
  
  //51
  ['numbers'+shuffledNumbersnseve[50]]: {
  botPrompt: 'What number comes before 100?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['95', '96', "97","99"]),
    answers: [
      {
        answer: '95',
        nextId: 'innumberscorrectq51',
      },
      {
        answer: '96',
        nextId: 'innumberscorrectq51',
      },
      {
        answer: "97",
        nextId: 'innumberscorrectq51',
      },
      {
        answer: "99",
        nextId: 'numberscorrectq51',
      },
    ],
  },
  
  numberscorrectq51: {
  botPrompt: 'Hurray! <strong>99</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[51],
    },
  ],
  },
  innumberscorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"99"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[51],
    },
  ],
  },
  
  //52
  ['numbers'+shuffledNumbersnseve[51]]: {
  botPrompt: 'How many legs does a bird have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '4', "6","8"]),
    answers: [
      {
        answer: '2',
        nextId: 'numberscorrectq52',
      },
      {
        answer: '4',
        nextId: 'innumberscorrectq52',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq52',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq52',
      },
    ],
  },
  
  numberscorrectq52: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[52],
    },
  ],
  },
  innumberscorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[52],
    },
  ],
  },
  
  //53
  ['numbers'+shuffledNumbersnseve[52]]: {
  botPrompt: 'Which number is greater, 28 or 32?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['24', '28', "30","32"]),
    answers: [
      {
        answer: '24',
        nextId: 'innumberscorrectq53',
      },
      {
        answer: '28',
        nextId: 'innumberscorrectq53',
      },
      {
        answer: "30",
        nextId: 'innumberscorrectq53',
      },
      {
        answer: "32",
        nextId: 'numberscorrectq53',
      },
    ],
  },
  
  numberscorrectq53: {
  botPrompt: 'Hurray! <strong>32</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[53],
    },
  ],
  },
  innumberscorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"32"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[53],
    },
  ],
  },
  
  //54
  ['numbers'+shuffledNumbersnseve[53]]: {
  botPrompt: 'Which number is smaller, 17 or 20?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['17', '18', "19","20"]),
    answers: [
      {
        answer: '17',
        nextId: 'numberscorrectq54',
      },
      {
        answer: '18',
        nextId: 'innumberscorrectq54',
      },
      {
        answer: "19",
        nextId: 'innumberscorrectq54',
      },
      {
        answer: "20",
        nextId: 'innumberscorrectq54',
      },
    ],
  },
  
  numberscorrectq54: {
  botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[54],
    },
  ],
  },
  innumberscorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[54],
    },
  ],
  },
  
  
  //55
  ['numbers'+shuffledNumbersnseve[54]]: {
  botPrompt: 'What number comes between 43 and 45?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['42', '43', "44","46"]),
    answers: [
      {
        answer: '42',
        nextId: 'innumberscorrectq55',
      },
      {
        answer: '43',
        nextId: 'innumberscorrectq55',
      },
      {
        answer: "44",
        nextId: 'numberscorrectq55',
      },
      {
        answer: "46",
        nextId: 'innumberscorrectq55',
      },
    ],
  },
  
  numberscorrectq55: {
  botPrompt: 'Hurray! <strong>44</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[55],
    },
  ],
  },
  innumberscorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[55],
    },
  ],
  },
  
  //56
  ['numbers'+shuffledNumbersnseve[55]]: {
    botPrompt: 'What number comes after 75?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['76', '77', "78","79"]),
    answers: [
      {
        answer: '76',
        nextId: 'numberscorrectq56',
      },
      {
        answer: '77',
        nextId: 'innumberscorrectq56',
      },
      {
        answer: "78",
        nextId: 'innumberscorrectq56',
      },
      {
        answer: "79",
        nextId: 'innumberscorrectq56',
      },
    ],
  },
  numberscorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>76</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[56],
      },
    ],
  },
  innumberscorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[56],
      },
    ],
  },
  
  //57
  ['numbers'+shuffledNumbersnseve[56]]: {
  botPrompt: 'What number comes before 90?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['85', '86', "89","90"]),
    answers: [
      {
        answer: '85',
        nextId: 'innumberscorrectq57',
      },
      {
        answer: '86',
        nextId: 'innumberscorrectq57',
      },
      {
        answer: "89",
        nextId: 'numberscorrectq57',
      },
      {
        answer: "90",
        nextId: 'innumberscorrectq57',
      },
    ],
  },
  numberscorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>89</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[57],
    },
  ],
  },
  innumberscorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"89"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[57],
    },
  ],
  },
  
  //58
  ['numbers'+shuffledNumbersnseve[57]]: {
  botPrompt: 'How many sides does a rectangle have?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq58',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq58',
    },
    {
      answer: "4",
      nextId: 'numberscorrectq58',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq58',
    },
  ],
  },
  numberscorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[58],
    },
  ],
  },
  innumberscorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[58],
    },
  ],
  },
  
  //59
  ['numbers'+shuffledNumbersnseve[58]]: {
  botPrompt: 'What is the missing number in the sequence: 2, 4, __, 8, 10?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "9","11"]),
    answers: [
      {
        answer: '6',
        nextId: 'numberscorrectq57',
      },
      {
        answer: '7',
        nextId: 'innumberscorrectq57',
      },
      {
        answer: "9",
        nextId: 'innumberscorrectq57',
      },
      {
        answer: "11",
        nextId: 'innumberscorrectq57',
      },
    ],
  },
  numberscorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> Answers! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[59],
    },
  ],
  },
  innumberscorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[59],
    },
  ],
  },
  
  //60
  ['numbers'+shuffledNumbersnseve[59]]: {
  botPrompt: 'What number comes after the square of 4?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['15', '16', "17","18"]),
  answers: [
    {
      answer: '15',
      nextId: 'numberscorrectq60',
    },
    {
      answer: '16',
      nextId: 'innumberscorrectq60',
    },
    {
      answer: "17",
      nextId: 'numberscorrectq60',
    },
    {
      answer: "18",
      nextId: 'innumberscorrectq60',
    },
  ],
  },
  numberscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>17</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[60],
    },
  ],
  },
  innumberscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[60],
    },
  ],
  },
  
  //61
  ["numbers"+shuffledNumbersnseve[60]]: {
    botPrompt: 'What number comes before the cube of 3?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['25', '26', "27","28"]),
    answers: [
      {
        answer: '25',
        nextId: 'innumberscorrectq61',
      },
      {
        answer: '26',
        nextId: 'numberscorrectq61',
      },
      {
        answer: "27",
        nextId: 'innumberscorrectq61',
      },
      {
        answer: "28",
        nextId: 'innumberscorrectq61',
      },
    ],
  },
  numberscorrectq61: {
    botPrompt: 'Hurray <strong>26</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[61],
      },
    ],
  },
  innumberscorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[61],
      },
    ],
  },
  
  //62
  ['numbers'+shuffledNumbersnseve[61]]: {
    botPrompt: 'What number comes between 7 and square of 3?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['7', '6', "8","5"]),
    answers: [
      {
        answer: '7',
        nextId: 'innumberscorrectq62',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq62',
      },
      {
        answer: "8",
        nextId: 'numberscorrectq62',
      },
      {
        answer: "5",
        nextId: 'innumberscorrectq62',
      },
    ],
  },
  
  numberscorrectq62: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[62],
      },
    ],
  },
  innumberscorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[62],
      },
    ],
  },
  
  //63
  ['numbers'+shuffledNumbersnseve[62]]: {
  botPrompt: "What number comes after the product of 3 and 5?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '15', "16","17"]),
    answers: [
      {
        answer: '14',
        nextId: 'innumberscorrectq63',
      },
      {
        answer: '15',
        nextId: 'innumberscorrectq63',
      },
      {
        answer: "16",
        nextId: 'numberscorrectq63',
      },
      {
        answer: "17",
        nextId: 'innumberscorrectq63',
      },
    ],
  },
  
  numberscorrectq63: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[63],
    },
  ],
  },
  innumberscorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[63],
    },
  ],
  },
  
  //64
  ['numbers'+shuffledNumbersnseve[63]]: {
  botPrompt: 'What number comes before the quotient of 10 divided by 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '4', "5","6"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq64',
    },
    {
      answer: '4',
      nextId: 'numberscorrectq64',
    },
    {
      answer: "5",
      nextId: 'innumberscorrectq64',
    },
    {
      answer: "6",
      nextId: 'innumberscorrectq64',
    },
  ],
  },
  
  numberscorrectq64: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[64],
    },
  ],
  },
  innumberscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[64],
    },
  ],
  },
  
  //65
  ['numbers'+shuffledNumbersnseve[64]]: {
  botPrompt: 'Which number is smaller, the sum of 6 and 4 or the product of 3 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Sum of 6 and 4', 'Product of 3 and 4', "They are equal","Cannot be determined"]),
    answers: [
      {
        answer: 'Sum of 6 and 4',
        nextId: 'numberscorrectq65',
      },
      {
        answer: 'Product of 3 and 4',
        nextId: 'innumberscorrectq65',
      },
      {
        answer: "They are equal",
        nextId: 'innumberscorrectq65',
      },
      {
        answer: "Cannot be determined",
        nextId: 'innumberscorrectq65',
      },
    ],
  },
  
  numberscorrectq65: {
  botPrompt: 'Hurray! <strong>Sum of 6 and 4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[65],
    },
  ],
  },
  innumberscorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sum of 6 and 4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[65],
    },
  ],
  },
  
  //66
  ['numbers'+shuffledNumbersnseve[65]]: {
  botPrompt: 'What number comes between 89 and 91?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['92', '90', "92","88"]),
  answers: [
    {
      answer: '92',
      nextId: 'innumberscorrectq66',
    },
    {
      answer: '90',
      nextId: 'numberscorrectq66',
    },
    {
      answer: "92",
      nextId: 'numberscorrectq66',
    },
    {
      answer: "88",
      nextId: 'innumberscorrectq66',
    },
  ],
  },
  
  numberscorrectq66: {
  botPrompt: 'Hurray! <strong>90</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[66],
    },
  ],
  },
  innumberscorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"90"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[66],
    },
  ],
  },
  
  //67
  ['numbers'+shuffledNumbersnseve[66]]: {
  botPrompt: 'What number comes before the difference of 9 and 4?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['4', '5', "6","7"]),
  answers: [
    {
      answer: '4',
      nextId: 'numberscorrectq67',
    },
    {
      answer: '5',
      nextId: 'innumberscorrectq67',
    },
    {
      answer: "6",
      nextId: 'innumberscorrectq67',
    },
    {
      answer: "7",
      nextId: 'innumberscorrectq67',
    },
  ],
  },
  
  numberscorrectq67: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[67],
    },
  ],
  },
  innumberscorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[67],
    },
  ],
  },
  
  
  //68
  ['numbers'+shuffledNumbersnseve[67]]: {
  botPrompt: 'Which number is greater, the sum of 8 and 3 or the product of 2 and 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Sum of 8 and 3', 'Product of 2 and 7', "They are equal","Cannot be determined"]),
    answers: [
      {
        answer: 'Sum of 8 and 3',
        nextId: 'numberscorrectq68',
      },
      {
        answer: 'Product of 2 and 7',
        nextId: 'innumberscorrectq68',
      },
      {
        answer: "They are equal",
        nextId: 'innumberscorrectq68',
      },
      {
        answer: "Cannot be determined",
        nextId: 'innumberscorrectq68',
      },
    ],
  },
  
  numberscorrectq68: {
  botPrompt: 'Hurray! <strong>Sum of 8 and 3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[68],
    },
  ],
  },
  innumberscorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sum of 8 and 3"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[68],
    },
  ],
  },
  
  //69
  ['numbers'+shuffledNumbersnseve[68]]: {
  botPrompt: 'What number comes after the quotient of 21 divided by 3?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "8","9"]),
  answers: [
    {
      answer: '6',
      nextId: 'innumberscorrectq69',
    },
    {
      answer: '7',
      nextId: 'innumberscorrectq69',
    },
    {
      answer: "8",
      nextId: 'numberscorrectq69',
    },
    {
      answer: "9",
      nextId: 'innumberscorrectq69',
    },
  ],
  },
  
  numberscorrectq69: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[69],
    },
  ],
  },
  innumberscorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[69],
    },
  ],
  },
  
  
  //70
  ['numbers'+shuffledNumbersnseve[69]]: {
  botPrompt: 'What number comes before the sum of 15 and 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['20', '21', "22","23"]),
  answers: [
    {
      answer: '20',
      nextId: 'innumberscorrectq70',
    },
    {
      answer: '21',
      nextId: 'numberscorrectq70',
    },
    {
      answer: "22",
      nextId: 'innumberscorrectq70',
    },
    {
      answer: "23",
      nextId: 'innumberscorrectq70',
    },
  ],
  },
  
  numberscorrectq70: {
  botPrompt: 'Hurray! <strong>21</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[70],
    },
  ],
  },
  innumberscorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[70],
    },
  ],
  },
  
  //71
  ['numbers'+shuffledNumbersnseve[70]]: {
  botPrompt: 'What number comes between sqaure of 1 and 3?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '0', "4","6"]),
    answers: [
      {
        answer: '2',
        nextId: 'numberscorrectq71',
      },
      {
        answer: '0',
        nextId: 'innumberscorrectq71',
      },
      {
        answer: "4",
        nextId: 'innumberscorrectq71',
      },
      {
        answer: "6",
        nextId: 'innumberscorrectq71',
      },
    ],
  },
  
  numberscorrectq71: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[71],
    },
  ],
  },
  innumberscorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[71],
    },
  ],
  },
  
  //72
  ['numbers'+shuffledNumbersnseve[71]]: {
  botPrompt: 'What number comes after the difference of 6 and 2?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'innumberscorrectq72',
    },
    {
      answer: '3',
      nextId: 'innumberscorrectq72',
    },
    {
      answer: "4",
      nextId: 'innumberscorrectq72',
    },
    {
      answer: "5",
      nextId: 'numberscorrectq72',
    },
  ],
  },
  
  numberscorrectq72: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[72],
    },
  ],
  },
  innumberscorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[72],
    },
  ],
  },
  
  //73
  ['numbers'+shuffledNumbersnseve[72]]: {
  botPrompt: 'What number comes before the product of 5 and 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '29', "30","31"]),
    answers: [
      {
        answer: '28',
        nextId: 'innumberscorrectq73',
      },
      {
        answer: '29',
        nextId: 'numberscorrectq73',
      },
      {
        answer: "30",
        nextId: 'innumberscorrectq73',
      },
      {
        answer: "31",
        nextId: 'innumberscorrectq73',
      },
    ],
  },
  
  numberscorrectq73: {
  botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[73],
    },
  ],
  },
  innumberscorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[73],
    },
  ],
  },
  
  //74
  ['numbers'+shuffledNumbersnseve[73]]: {
  botPrompt: 'What comes after 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '9', "10","11"]),
  answers: [
    {
      answer: '8',
      nextId: 'numberscorrectq74',
    },
    {
      answer: '9',
      nextId: 'innumberscorrectq74',
    },
    {
      answer: "10",
      nextId: 'innumberscorrectq74',
    },
    {
      answer: "11",
      nextId: 'innumberscorrectq74',
    },
  ],
  },
  
  numberscorrectq74: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[74],
    },
  ],
  },
  innumberscorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[74],
    },
  ],
  },
  
  
  //75
  ['numbers'+shuffledNumbersnseve[74]]: {
  botPrompt: 'Which number comes after twelve?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['13', '14', "15","16"]),
    answers: [
      {
        answer: '13',
        nextId: 'numberscorrectq75',
      },
      {
        answer: '14',
        nextId: 'innumberscorrectq75',
      },
      {
        answer: "15",
        nextId: 'innumberscorrectq75',
      },
      {
        answer: "16",
        nextId: 'innumberscorrectq75',
      },
    ],
  },
  
  numberscorrectq75: {
  botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[75],
    },
  ],
  },
  innumberscorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[75],
    },
  ],
  },
  
  //76
  ['numbers'+shuffledNumbersnseve[75]]: {
    botPrompt: 'Which number comes after twelve?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['13', '14', "15","16"]),
    answers: [
      {
        answer: '13',
        nextId: 'numberscorrectq76',
      },
      {
        answer: '14',
        nextId: 'innumberscorrectq76',
      },
      {
        answer: "15",
        nextId: 'innumberscorrectq76',
      },
      {
        answer: "16",
        nextId: 'innumberscorrectq76',
      },
    ],
  },
  numberscorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>13</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[76],
      },
    ],
  },
  innumberscorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[76],
      },
    ],
  },
  
  //77
  ['numbers'+shuffledNumbersnseve[76]]: {
  botPrompt: 'What comes before 5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '6', "7","8"]),
    answers: [
      {
        answer: '4',
        nextId: 'numberscorrectq77',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq77',
      },
      {
        answer: "7",
        nextId: 'innumberscorrectq77',
      },
      {
        answer: "8",
        nextId: 'innumberscorrectq77',
      },
    ],
  },
  numberscorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[77],
    },
  ],
  },
  innumberscorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'numbers'+shuffledNumbersnseve[77],
    },
  ],
  },
  
  
  
  //78
  ['numbers'+shuffledNumbersnseve[77]]: {
    botPrompt: 'Which number comes between 6 and 8? ',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['5', '7', "9","10"]),
      answers: [
        {
          answer: '5',
          nextId: 'innumberscorrectq78',
        },
        {
          answer: '7',
          nextId: 'numberscorrectq78',
        },
        {
          answer: "9",
          nextId: 'innumberscorrectq78',
        },
        {
          answer: "10",
          nextId: 'innumberscorrectq78',
        },
      ],
    },
    
    numberscorrectq78: {
    botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[78],
      },
    ],
    },
    innumberscorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[78],
      },
    ],
    },
    
    //79
    ['numbers'+shuffledNumbersnseve[78]]: {
    botPrompt: 'What is the next number in the pattern: 10, 9, 8, ____?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '6', "5","4"]),
      answers: [
        {
          answer: '7',
          nextId: 'numberscorrectq79',
        },
        {
          answer: '6',
          nextId: 'innumberscorrectq79',
        },
        {
          answer: "5",
          nextId: 'innumberscorrectq79',
        },
        {
          answer: "4",
          nextId: 'innumberscorrectq79',
        },
      ],
    },
    
    numberscorrectq79: {
    botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[79],
      },
    ],
    },
    innumberscorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[79],
      },
    ],
    },
    
    
    //80
    ['numbers'+shuffledNumbersnseve[79]]: {
    botPrompt: 'How many fingers do you have on one hand?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['4', '5', "6","7"]),
      answers: [
        {
          answer: '4',
          nextId: 'innumberscorrectq80',
        },
        {
          answer: '5',
          nextId: 'numberscorrectq80',
        },
        {
          answer: "6",
          nextId: 'innumberscorrectq80',
        },
        {
          answer: "7",
          nextId: 'innumberscorrectq80',
        },
      ],
    },
    
    numberscorrectq80: {
    botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[80],
      },
    ],
    },
    innumberscorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[80],
      },
    ],
    },
    
    //81
    ['numbers'+shuffledNumbersnseve[80]]: {
    botPrompt: 'Which number comes after 20?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['21', '22', "23","24"]),
      answers: [
        {
          answer: '21',
          nextId: 'numberscorrectq51',
        },
        {
          answer: '22',
          nextId: 'innumberscorrectq51',
        },
        {
          answer: "23",
          nextId: 'innumberscorrectq51',
        },
        {
          answer: "24",
          nextId: 'innumberscorrectq51',
        },
      ],
    },
    
    numberscorrectq51: {
    botPrompt: 'Hurray! <strong>21</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[51],
      },
    ],
    },
    innumberscorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[51],
      },
    ],
    },
    
    //82
    ['numbers'+shuffledNumbersnseve[81]]: {
    botPrompt: 'What comes after 15?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['16', '17', "18","19"]),
      answers: [
        {
          answer: '16',
          nextId: 'numberscorrectq82',
        },
        {
          answer: '17',
          nextId: 'innumberscorrectq82',
        },
        {
          answer: "18",
          nextId: 'innumberscorrectq82',
        },
        {
          answer: "19",
          nextId: 'innumberscorrectq82',
        },
      ],
    },
    
    numberscorrectq82: {
    botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[82],
      },
    ],
    },
    innumberscorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[82],
      },
    ],
    },
    
    //83
    ['numbers'+shuffledNumbersnseve[82]]: {
    botPrompt: 'What is the number that comes between 12 and 14?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['11', '13', "15","16"]),
      answers: [
        {
          answer: '11',
          nextId: 'innumberscorrectq83',
        },
        {
          answer: '13',
          nextId: 'numberscorrectq83',
        },
        {
          answer: "15",
          nextId: 'innumberscorrectq83',
        },
        {
          answer: "16",
          nextId: 'innumberscorrectq83',
        },
      ],
    },
  
    numberscorrectq83: {
    botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[83],
      },
    ],
    },
    innumberscorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[83],
      },
    ],
    },
    
    //84
    ['numbers'+shuffledNumbersnseve[83]]: {
    botPrompt: 'What is the missing number in the pattern: 3, 6, ___, 12?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['9', '10', "11","13"]),
      answers: [
        {
          answer: '9',
          nextId: 'numberscorrectq84',
        },
        {
          answer: '10',
          nextId: 'innumberscorrectq84',
        },
        {
          answer: "11",
          nextId: 'innumberscorrectq84',
        },
        {
          answer: "13",
          nextId: 'innumberscorrectq84',
        },
      ],
    },
    
    numberscorrectq84: {
    botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[84],
      },
    ],
    },
    innumberscorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[84],
      },
    ],
    },
    
    
    //85
    ['numbers'+shuffledNumbersnseve[84]]: {
    botPrompt: 'Which number comes before 9?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['7', '8', "10","11"]),
      answers: [
        {
          answer: '7',
          nextId: 'innumberscorrectq85',
        },
        {
          answer: '8',
          nextId: 'numberscorrectq85',
        },
        {
          answer: "10",
          nextId: 'innumberscorrectq85',
        },
        {
          answer: "11",
          nextId: 'innumberscorrectq85',
        },
      ],
    },
    
    numberscorrectq85: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[85],
      },
    ],
    },
    innumberscorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[85],
      },
    ],
    },
    
    //86
    ['numbers'+shuffledNumbersnseve[85]]: {
      botPrompt: 'How many legs does a cat have??',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['2', '3', "4","5"]),
      answers: [
        {
          answer: '2',
          nextId: 'innumberscorrectq86',
        },
        {
          answer: '3',
          nextId: 'innumberscorrectq86',
        },
        {
          answer: "4",
          nextId: 'numberscorrectq86',
        },
        {
          answer: "5",
          nextId: 'innumberscorrectq86',
        },
      ],
    },
    numberscorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>4</strong> 😎',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[86],
        },
      ],
    },
    innumberscorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[86],
        },
      ],
    },
  
    //87
    ['numbers'+shuffledNumbersnseve[86]]: {
    botPrompt: 'What comes after 12?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['13', '14', "15","16"]),
      answers: [
        {
          answer: '13',
          nextId: 'numberscorrectq87',
        },
        {
          answer: '14',
          nextId: 'innumberscorrectq87',
        },
        {
          answer: "15",
          nextId: 'innumberscorrectq87',
        },
        {
          answer: "16",
          nextId: 'innumberscorrectq87',
        },
      ],
    },
    numberscorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>13</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[87],
      },
    ],
    },
    innumberscorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[87],
      },
    ],
    },
    
    //88
    ['numbers'+shuffledNumbersnseve[87]]: {
    botPrompt: 'Which number comes after nineteen?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['18', '20', "21","22"]),
    answers: [
      {
        answer: '18',
        nextId: 'innumberscorrectq88',
      },
      {
        answer: '20',
        nextId: 'numberscorrectq88',
      },
      {
        answer: "21",
        nextId: 'innumberscorrectq88',
      },
      {
        answer: "22",
        nextId: 'innumberscorrectq88',
      },
    ],
    },
    numberscorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>20</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[88],
      },
    ],
    },
    innumberscorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[88],
      },
    ],
    },
    
    //89
    ['numbers'+shuffledNumbersnseve[88]]: {
    botPrompt: 'What is the number that comes between 15 and 17?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['14', '16', "18","20"]),
      answers: [
        {
          answer: '14',
          nextId: 'innumberscorrectq87',
        },
        {
          answer: '16',
          nextId: 'numberscorrectq87',
        },
        {
          answer: "18",
          nextId: 'innumberscorrectq87',
        },
        {
          answer: "20",
          nextId: 'innumberscorrectq87',
        },
      ],
    },
    numberscorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>16</strong> Answers! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[89],
      },
    ],
    },
    innumberscorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[89],
      },
    ],
    },
    
    //90
    ['numbers'+shuffledNumbersnseve[89]]: {
    botPrompt: 'Which number comes before 25?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['23', '24', "25","26"]),
    answers: [
      {
        answer: '23',
        nextId: 'innumberscorrectq90',
      },
      {
        answer: '24',
        nextId: 'numberscorrectq90',
      },
      {
        answer: "25",
        nextId: 'innumberscorrectq90',
      },
      {
        answer: "26",
        nextId: 'innumberscorrectq90',
      },
    ],
    },
    numberscorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>24</strong> 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[90],
      },
    ],
    },
    innumberscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[90],
      },
    ],
    },
    
    //91
    ["numbers"+shuffledNumbersnseve[90]]: {
      botPrompt: 'What is the number that comes between 10 and 12?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['8', '9', "11","13"]),
      answers: [
        {
          answer: '8',
          nextId: 'innumberscorrectq91',
        },
        {
          answer: '9',
          nextId: 'innumberscorrectq91',
        },
        {
          answer: "11",
          nextId: 'numberscorrectq91',
        },
        {
          answer: "13",
          nextId: 'innumberscorrectq91',
        },
      ],
    },
    numberscorrectq91: {
      botPrompt: 'Hurray <strong>11</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[91],
        },
      ],
    },
    innumberscorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[91],
        },
      ],
    },
    
    //92
    ['numbers'+shuffledNumbersnseve[91]]: {
      botPrompt: 'Which number comes before 50?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['47', '48', "49","51"]),
      answers: [
        {
          answer: '47',
          nextId: 'innumberscorrectq92',
        },
        {
          answer: '48',
          nextId: 'innumberscorrectq92',
        },
        {
          answer: "49",
          nextId: 'numberscorrectq92',
        },
        {
          answer: "51",
          nextId: 'innumberscorrectq92',
        },
      ],
    },
    
    numberscorrectq92: {
      botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[92],
        },
      ],
    },
    innumberscorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
      answers: [
        {
          nextId: 'numbers'+shuffledNumbersnseve[92],
        },
      ],
    },
    
    //93
    ['numbers'+shuffledNumbersnseve[92]]: {
    botPrompt: "What comes after 28?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['26', '27', "29","30"]),
      answers: [
        {
          answer: '26',
          nextId: 'innumberscorrectq93',
        },
        {
          answer: '27',
          nextId: 'innumberscorrectq93',
        },
        {
          answer: "29",
          nextId: 'numberscorrectq93',
        },
        {
          answer: "30",
          nextId: 'innumberscorrectq93',
        },
      ],
    },
    
    numberscorrectq93: {
    botPrompt: 'Hurray! <strong>29</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[93],
      },
    ],
    },
    innumberscorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[93],
      },
    ],
    },
  
    //94
    ['numbers'+shuffledNumbersnseve[93]]: {
    botPrompt: 'Which number comes after 7?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['5', '6', "8","9"]),
    answers: [
      {
        answer: '5',
        nextId: 'innumberscorrectq94',
      },
      {
        answer: '6',
        nextId: 'innumberscorrectq94',
      },
      {
        answer: "8",
        nextId: 'numberscorrectq94',
      },
      {
        answer: "9",
        nextId: 'innumberscorrectq94',
      },
    ],
    },
    
    numberscorrectq94: {
    botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[94],
      },
    ],
    },
    innumberscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[94],
      },
    ],
    },
    
    //95
    ['numbers'+shuffledNumbersnseve[94]]: {
    botPrompt: 'What is the number that comes between 23 and 25?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['21', '22', "24","26"]),
      answers: [
        {
          answer: '21',
          nextId: 'innumberscorrectq95',
        },
        {
          answer: '22',
          nextId: 'innumberscorrectq95',
        },
        {
          answer: "24",
          nextId: 'numberscorrectq95',
        },
        {
          answer: "26",
          nextId: 'innumberscorrectq95',
        },
      ],
    },
    
    numberscorrectq95: {
    botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[95],
      },
    ],
    },
    innumberscorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[95],
      },
    ],
    },
    
    //96
    ['numbers'+shuffledNumbersnseve[95]]: {
    botPrompt: 'Which number comes before 30?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['28', '29', "30","31"]),
    answers: [
      {
        answer: '28',
        nextId: 'innumberscorrectq96',
      },
      {
        answer: '29',
        nextId: 'numberscorrectq96',
      },
      {
        answer: "30",
        nextId: 'innumberscorrectq96',
      },
      {
        answer: "31",
        nextId: 'innumberscorrectq96',
      },
    ],
    },
    
    numberscorrectq96: {
    botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[96],
      },
    ],
    },
    innumberscorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
    answers: [
      {
        nextId: 'numbers'+shuffledNumbersnseve[96],
      },
    ],
    },
  
    //97
    ['numbers'+shuffledNumbersnseve[96]]: {
    botPrompt: 'What comes after 19?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['20', '21', "22","23"]),
    answers: [
      {
        answer: '20',
        nextId: 'numberscorrectq97',
      },
      {
        answer: '21',
        nextId: 'innumberscorrectq97',
      },
      {
        answer: "22",
        nextId: 'innumberscorrectq97',
      },
      {
        answer: "23",
        nextId: 'innumberscorrectq97',
      },
    ],
    },
  
    numberscorrectq97: {
    botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishToContinue10'
      },
    ],
    },
    innumberscorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
    answers: [
      {
        nextId: 'wishToContinue10'
      }
    ],
    },
  
  
  //endnumbersletter
  
  
  
  wishToContinue10: {
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
          sumToBags: [{ name: 'd', points: 10 }],
  
        },
    ],
  },
  
  
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
              { nextId: 'vvowels_prompt6' },
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
        nextId: 'correctq19',
      },
      {
        answer: "O",
        nextId: 'correctq19',
      },
      {
        answer: "U",
        nextId: 'incorrectq19',
      },
    ],
  },
  correctq19: {
    botPrompt: 'You Have Selected Correct Anwser 🎉! <strong>O</strong>  or <strong>I</strong> are the Correct Answers! 😎',
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
        nextId: 'correctq30',
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
        nextId: 'correctq31',
      },
      {
        answer: "U",
        nextId: 'incorrectq31',
      },
    ],
  },
  correctq31: {
    botPrompt: 'You Have Selected Correct Anwser 🎉! B<strong>A</strong>T or B<strong>O</strong>T😎',
    answers: [
      {
        nextId: 'vowels_question'+shuffledNumbers[31],
      },
    ],
  },
  incorrectq31: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"A or O"</strong>',
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
            { nextId: 'day19link' },
    ],
  },
  
  day19link: {
    botPrompt: 'https://youtu.be/V0q4NikrJCM',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day192comment',
      },
    ],
  },
  day192comment: {
    botPrompt: 'Let`s look into the pages of the book',
    answers: [
            { nextId: 'day191link' },
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
          nextId: 'day20',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
        },
    ],
  },
  
  //day20
  day20: {
    botPrompt: '<strong> Day 20: </strong> Use of is/Are ',
    answers: [
            { nextId: 'day20comment' },
    ],
  },
  
  day20comment: {
    botPrompt: 'Pages of the book',
    answers: [
            { nextId: "isAre"+shuffledNumbersseventyseven[0] },
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
      nextId: 'wishtocontinue20',
    },
  ],
  },
  inisArecorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"is"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue20',
    },
  ],
  },
  
  
  
  
  //endisAreletter
  wishtocontinue20: {
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
  
  
  //day21
  day21: {
    botPrompt: '<strong> Day 21: </strong> These, Those ',
    answers: [
            { nextId: 'day21newcomment' },
    ],
  },
  day21newcomment: {
    botPrompt: 'These and Those point towards more than one object which is near or far from us.',
    answers: [
            { nextId: 'day21newlink' },
    ],
  },
  day21newlink: {
    botPrompt: 'https://youtu.be/Nj8VNqvLHvo',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day212newcomment',
      },
    ],
  },
  day212newcomment: {
    botPrompt: 'Let`s look into the pages of the book',
    answers: [
            { nextId: 'day212newlink' },
    ],
  },
  
  day212newlink: {
    botPrompt: 'https://drive.google.com/file/d/13Ke6FuVWHHPAHoEhh3zob9onVHfTcFe8/view?usp=sharing',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'day213newcomment',
      },
    ],
  },
  day213newcomment: {
    botPrompt: 'Let`s solve',
    answers: [
            { nextId: "theseThose"+shuffleArrayten[0] },
    ],
  },
  
  
  //theseThose
  
  
  ["theseThose"+shuffleArrayten[0]]: {
    botPrompt: 'Which word would you use to talk about objects that are not near you? ',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Those', 'These', "This","There"]),
    answers: [
      {
        answer: 'Those',
        nextId: 'theseThosecorrect',
      },
      {
        answer: 'These',
        nextId: 'intheseThosecorrect',
      },
      {
        answer: "This",
        nextId: 'intheseThosecorrect',
      },
      {
        answer: "There",
        nextId: 'intheseThosecorrect',
      },
    ],
  },
  theseThosecorrect: {
    botPrompt: 'Hurray <strong>Those</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'theseThose'+shuffleArrayten[1],
      },
    ],
  },
  intheseThosecorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
    answers: [
      {
        nextId: 'theseThose'+shuffleArrayten[1],
      },
    ],
  },
  
  ['theseThose'+shuffleArrayten[1]]: {
    botPrompt: 'What word would you use to talk about objects that are specific and close to us?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['These', 'Those', "That","Here"]),
    answers: [
      {
        answer: 'These',
        nextId: 'theseThosecorrectq2',
      },
      {
        answer: 'Those',
        nextId: 'intheseThosecorrectq2',
      },
      {
        answer: "That",
        nextId: 'intheseThosecorrectq2',
      },
      {
        answer: "Here",
        nextId: 'intheseThosecorrectq2',
      },
    ],
  },
  
  theseThosecorrectq2: {
    botPrompt: 'Hurray! <strong>These</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'theseThose'+shuffleArrayten[2],
      },
    ],
  },
  intheseThosecorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"These"</strong>',
    answers: [
      {
        nextId: 'theseThose'+shuffleArrayten[2],
      },
    ],
  },
  
  //3
  ['theseThose'+shuffleArrayten[2]]: {
  botPrompt: "What word would you use to talk about objects that are far from us and not specific?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Those', 'These', "This","There"]),
  answers: [
    {
      answer: 'Those',
      nextId: 'theseThosecorrectq3',
    },
    {
      answer: 'These',
      nextId: 'intheseThosecorrectq3',
    },
    {
      answer: "This",
      nextId: 'intheseThosecorrectq3',
    },
    {
      answer: "There",
      nextId: 'intheseThosecorrectq3',
    },
  ],
  },
  
  theseThosecorrectq3: {
  botPrompt: 'Hurray! <strong>Those</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[3],
    },
  ],
  },
  intheseThosecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[3],
    },
  ],
  },
  
  //4
  ['theseThose'+shuffleArrayten[3]]: {
  botPrompt: 'Which word describes objects that are near the speaker?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['These', 'That', "Those","There"]),
  answers: [
    {
      answer: 'These',
      nextId: 'intheseThosecorrectq4',
    },
    {
      answer: 'That',
      nextId: 'theseThosecorrectq4',
    },
    {
      answer: "Those",
      nextId: 'intheseThosecorrectq4',
    },
    {
      answer: "There",
      nextId: 'intheseThosecorrectq4',
    },
  ],
  },
  
  theseThosecorrectq4: {
  botPrompt: 'Hurray! <strong>That</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[4],
    },
  ],
  },
  intheseThosecorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"That"</strong>',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[4],
    },
  ],
  },
  
  //5
  ['theseThose'+shuffleArrayten[4]]: {
  botPrompt: 'What word would you use to talk about objects that are in the distance? ',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Those', 'These', "This","There"]),
  answers: [
    {
      answer: 'Those',
      nextId: 'theseThosecorrectq5',
    },
    {
      answer: 'These',
      nextId: 'intheseThosecorrectq5',
    },
    {
      answer: "This",
      nextId: 'intheseThosecorrectq5',
    },
    {
      answer: "There",
      nextId: 'intheseThosecorrectq5',
    },
  ],
  },
  
  theseThosecorrectq5: {
  botPrompt: 'Hurray! <strong>Those</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[5],
    },
  ],
  },
  intheseThosecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[5],
    },
  ],
  },
  
  //6
  ['theseThose'+shuffleArrayten[5]]: {
  botPrompt: 'Look around the classroom. Which word would you use to talk about objects that are far from you?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Those', 'These', "This","There"]),
  answers: [
    {
      answer: 'Those',
      nextId: 'theseThosecorrectq6',
    },
    {
      answer: 'These',
      nextId: 'intheseThosecorrectq6',
    },
    {
      answer: "This",
      nextId: 'intheseThosecorrectq6',
    },
    {
      answer: "There",
      nextId: 'intheseThosecorrectq6',
    },
  ],
  },
  
  theseThosecorrectq6: {
  botPrompt: 'Hurray! <strong>Those</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[6],
    },
  ],
  },
  intheseThosecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[6],
    },
  ],
  },
  
  //7
  ['theseThose'+shuffleArrayten[6]]: {
  botPrompt: ' Which word would you use to talk about objects that are not nearby?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Those', 'These', "This","There"]),
  answers: [
    {
      answer: 'Those',
      nextId: 'theseThosecorrectq7',
    },
    {
      answer: 'These',
      nextId: 'intheseThosecorrectq7',
    },
    {
      answer: "This",
      nextId: 'intheseThosecorrectq7',
    },
    {
      answer: "There",
      nextId: 'intheseThosecorrectq7',
    },
  ],
  },
  
  theseThosecorrectq7: {
  botPrompt: 'Hurray! <strong>Those</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[7],
    },
  ],
  },
  intheseThosecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Those"</strong>',
  answers: [
    {
      nextId: 'theseThose'+shuffleArrayten[7],
    },
  ],
  },
  
  
  //8
  ['theseThose'+shuffleArrayten[7]]: {
  botPrompt: 'Look around the classroom. Which word would you use to talk about objects that are near you?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['These', 'Those', "That","There"]),
  answers: [
    {
      answer: 'These',
      nextId: 'theseThosecorrectq8',
    },
    {
      answer: 'Those',
      nextId: 'intheseThosecorrectq8',
    },
    {
      answer: "That",
      nextId: 'intheseThosecorrectq8',
    },
    {
      answer: "There",
      nextId: 'intheseThosecorrectq8',
    },
  ],
  },
  
  theseThosecorrectq8: {
  botPrompt: 'Hurray! <strong>These</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishtocontinue21',
    },
  ],
  },
  intheseThosecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"These"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue21',
    },
  ],
  },
  
  
  //endtheseThoseletter
  
  
  
  wishtocontinue21: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day22',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
        },
    ],
  },
  
  
  //day22
  day22: {
    botPrompt: '<strong> Day 22 : </strong> Simon says',
    answers: [
            { nextId: 'day22newcomment' },
    ],
  },
  day22newcomment: {
    botPrompt: 'Simon says It is a joyful game which can be played to grab the attention of the children , make children follow instructions and learn action words simultaneously.',
    answers: [
            { nextId: 'daynew221' },
    ],
  },
  
  daynew221: {
    botPrompt: 'https://youtu.be/Yzx9zAAG1AY',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'wishtocontinue22',
      },
    ],
  },
  
  wishtocontinue22: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day23',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
        },
    ],
  },
  
  //day23
  day23: {
    botPrompt: '<strong> Day 23 : </strong> Five Magic Words',
    answers: [
            { nextId: 'day23newcomment' },
    ],
  },
  day23newcomment: {
    botPrompt: 'Good manners begin with the magic words "please", "thank you", "welcome",”Excuse me and "I`m sorry".',
    answers: [
            { nextId: 'day231newcomment' },
    ],
  },
  day231newcomment: {
    botPrompt: 'Let`s build a simple Teaching Learning Material to remind students of the Five Magic words.',
    answers: [
            { nextId: 'day232newcomment' },
    ],
  },
  day232newcomment: {
    botPrompt: 'https://youtu.be/VY1nYwdtFJU',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'wishtocontinue23',
      },
    ],
  },
  
  
  
  wishtocontinue23: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day24',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
        },
    ],
  },
  
  
  //day24
  
  day24: {
    botPrompt: '<strong> Day 24: </strong> One More-One Less',
    answers: [
            { nextId: 'day24newcomment' },
    ],
  },
  day24newcomment: {
    botPrompt: 'One more and one less teaches a child first steps of addition and substaction.',
    answers: [
            { nextId: 'day241newcomment' },
    ],
  },
  day241newcomment: {
    botPrompt: 'One More Than/One Less Than',
    answers: [
            { nextId: 'day242newcomment' },
    ],
  },
  day242newcomment: {
    botPrompt: 'https://youtu.be/DG6Z_Wtr4sA',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day243newcomment',
      },
    ],
  },
  day243newcomment: {
    botPrompt: 'One More Than/One Less Than',
    answers: [
            { nextId: 'day244newcomment' },
    ],
  },
  day244newcomment: {
    botPrompt: 'https://drive.google.com/file/d/1j1Y5l93tdhedlVv13mbEp5F-63kptgLR/view?usp=share_link',
    type: RTypes.LINK,
    answers: [
      {
        nextId: "moreLess"+shuffleArraynseve[0],
      },
    ],
  },
  
  
  //moreLess
  
  
  ["moreLess"+shuffleArraynseve[0]]: {
    botPrompt: ' What is 1 more than 2?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['3', '4', "5","6"]),
    answers: [
      {
        answer: '3',
        nextId: 'moreLesscorrect',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrect',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrect',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrect',
      },
    ],
  },
  moreLesscorrect: {
    botPrompt: 'Hurray <strong>3</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[1],
      },
    ],
  },
  inmoreLesscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[1],
      },
    ],
  },
  
  ['moreLess'+shuffleArraynseve[1]]: {
    botPrompt: 'What is the number that is 1 more than 11?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['11', '12', "13","10"]),
    answers: [
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq2',
      },
      {
        answer: '12',
        nextId: 'moreLesscorrectq2',
      },
      {
        answer: "13",
        nextId: 'inmoreLesscorrectq2',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq2',
      },
    ],
  },
  
  moreLesscorrectq2: {
    botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[2],
      },
    ],
  },
  inmoreLesscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[2],
      },
    ],
  },
  
  //3
  ['moreLess'+shuffleArraynseve[2]]: {
  botPrompt: "What is the number that is 1 more than 13?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '10', "12","11"]),
    answers: [
      {
        answer: '14',
        nextId: 'moreLesscorrectq3',
      },
      {
        answer: '10',
        nextId: 'inmoreLesscorrectq3',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq3',
      },
      {
        answer: "11",
        nextId: 'inmoreLesscorrectq3',
      },
    ],
  },
  
  moreLesscorrectq3: {
  botPrompt: 'Hurray! <strong>14</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[3],
    },
  ],
  },
  inmoreLesscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[3],
    },
  ],
  },
  
  //4
  ['moreLess'+shuffleArraynseve[3]]: {
  botPrompt: ' What is 1 more than 3?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "2","6"]),
    answers: [
      {
        answer: '4',
        nextId: 'moreLesscorrectq4',
      },
      {
        answer: '5',
        nextId: 'inmoreLesscorrectq4',
      },
      {
        answer: "2",
        nextId: 'inmoreLesscorrectq4',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq4',
      },
    ],
  },
  
  moreLesscorrectq4: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[4],
    },
  ],
  },
  inmoreLesscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[4],
    },
  ],
  },
  
  //5
  ['moreLess'+shuffleArraynseve[4]]: {
  botPrompt: 'What is the number that is 1 more than 15?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '13', "16","12"]),
    answers: [
      {
        answer: '14',
        nextId: 'inmoreLesscorrectq5',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq5',
      },
      {
        answer: "16",
        nextId: 'moreLesscorrectq5',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq5',
      },
    ],
  },
  
  moreLesscorrectq5: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[5],
    },
  ],
  },
  inmoreLesscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[5],
    },
  ],
  },
  
  //6
  ['moreLess'+shuffleArraynseve[5]]: {
  botPrompt: 'What is 1 more than 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '2', "6","5"]),
    answers: [
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq6',
      },
      {
        answer: '2',
        nextId: 'inmoreLesscorrectq6',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq6',
      },
      {
        answer: "5",
        nextId: 'moreLesscorrectq6',
      },
    ],
  },
  
  moreLesscorrectq6: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[6],
    },
  ],
  },
  inmoreLesscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[6],
    },
  ],
  },
  
  //7
  ['moreLess'+shuffleArraynseve[6]]: {
  botPrompt: 'What is 1 more than 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "5","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq7',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq7',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrectq7',
      },
      {
        answer: "7",
        nextId: 'moreLesscorrectq7',
      },
    ],
  },
  
  moreLesscorrectq7: {
  botPrompt: 'Hurray! <strong>7</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[7],
    },
  ],
  },
  inmoreLesscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[7],
    },
  ],
  },
  
  
  //8
  ['moreLess'+shuffleArraynseve[7]]: {
  botPrompt: 'What is 1 more than  5?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['3', '4', "6","7"]),
    answers: [
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq8',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq8',
      },
      {
        answer: "6",
        nextId: 'moreLesscorrectq8',
      },
      {
        answer: "7",
        nextId: 'inmoreLesscorrectq8',
      },
    ],
  },
  
  moreLesscorrectq8: {
  botPrompt: 'Hurray! <strong>6</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[8],
    },
  ],
  },
  inmoreLesscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[8],
    },
  ],
  },
  
  //9
  ['moreLess'+shuffleArraynseve[8]]: {
  botPrompt: 'What is the number that is 1 more than 14?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['15', '13', "16","17"]),
    answers: [
      {
        answer: '15',
        nextId: 'moreLesscorrectq9',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq9',
      },
      {
        answer: "16",
        nextId: 'inmoreLesscorrectq9',
      },
      {
        answer: "17",
        nextId: 'inmoreLesscorrectq9',
      },
    ],
  },
  
  moreLesscorrectq9: {
  botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[9],
    },
  ],
  },
  inmoreLesscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[9],
    },
  ],
  },
  
  
  //10
  ['moreLess'+shuffleArraynseve[9]]: {
  botPrompt: 'What is the number that is 1 more than 12?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '11', "13","10"]),
    answers: [
      {
        answer: '14',
        nextId: 'inmoreLesscorrectq10',
      },
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq10',
      },
      {
        answer: "13",
        nextId: 'moreLesscorrectq10',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq10',
      },
    ],
  
  },
  
  moreLesscorrectq10: {
  botPrompt: 'Hurray! <strong>13</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[10],
    },
  ],
  },
  inmoreLesscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[10],
    },
  ],
  },
  
  //11
  ['moreLess'+shuffleArraynseve[10]]: {
  botPrompt: 'What is the number that is 1 more than 16?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['14', '16', "7","17"]),
    answers: [
      {
        answer: '14',
        nextId: 'inmoreLesscorrectq11',
      },
      {
        answer: '16',
        nextId: 'inmoreLesscorrectq11',
      },
      {
        answer: "7",
        nextId: 'inmoreLesscorrectq11',
      },
      {
        answer: "17",
        nextId: 'moreLesscorrectq11',
      },
    ],
  },
  
  moreLesscorrectq11: {
  botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[11],
    },
  ],
  },
  inmoreLesscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[11],
    },
  ],
  },
  
  //12
  ['moreLess'+shuffleArraynseve[11]]: {
  botPrompt: 'What is 1 more than 7?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '8', "7","6"]),
    answers: [
      {
        answer: '9',
        nextId: 'inmoreLesscorrectq12',
      },
      {
        answer: '8',
        nextId: 'moreLesscorrectq12',
      },
      {
        answer: "7",
        nextId: 'inmoreLesscorrectq12',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq12',
      },
    ],
  },
  
  moreLesscorrectq12: {
  botPrompt: 'Hurray! <strong>8</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[12],
    },
  ],
  },
  inmoreLesscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[12],
    },
  ],
  },
  
  //13
  ['moreLess'+shuffleArraynseve[12]]: {
  botPrompt: 'What is the number that is 1 more than 17?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['8', '18', "19","9"]),
    answers: [
      {
        answer: '8',
        nextId: 'inmoreLesscorrectq13',
      },
      {
        answer: '18',
        nextId: 'moreLesscorrectq13',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq13',
      },
      {
        answer: "9",
        nextId: 'inmoreLesscorrectq13',
      },
    ],
  },
  
  moreLesscorrectq13: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[13],
    },
  ],
  },
  inmoreLesscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[13],
    },
  ],
  },
  
  //14
  ['moreLess'+shuffleArraynseve[13]]: {
  botPrompt: 'What is 1 more than 8?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['18', '8', "16","19"]),
    answers: [
      {
        answer: '18',
        nextId: 'moreLesscorrectq14',
      },
      {
        answer: '8',
        nextId: 'inmoreLesscorrectq14',
      },
      {
        answer: "16",
        nextId: 'inmoreLesscorrectq14',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq14',
      },
    ],
  },
  
  moreLesscorrectq14: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[14],
    },
  ],
  },
  inmoreLesscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[14],
    },
  ],
  },
  
  
  //15
  ['moreLess'+shuffleArraynseve[14]]: {
  botPrompt: 'What is 1 more than 18?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '8', "10","19"]),
    answers: [
      {
        answer: '9',
        nextId: 'moreLesscorrectq15',
      },
      {
        answer: '8',
        nextId: 'inmoreLesscorrectq15',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq15',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq15',
      },
    ],
  },
  
  moreLesscorrectq15: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[15],
    },
  ],
  },
  inmoreLesscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[15],
    },
  ],
  },
  
  //16
  ['moreLess'+shuffleArraynseve[15]]: {
    botPrompt: 'What is 1 more than 9?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['11', '10', "12","19"]),
    answers: [
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq16',
      },
      {
        answer: '10',
        nextId: 'moreLesscorrectq16',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq16',
      },
      {
        answer: "19",
        nextId: 'inmoreLesscorrectq16',
      },
    ],
  },
  moreLesscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>10</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[16],
      },
    ],
  },
  inmoreLesscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[16],
      },
    ],
  },
  
  //17
  ['moreLess'+shuffleArraynseve[16]]: {
  botPrompt: 'What is 1 more than 19?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['20', '21', "18","22"]),
    answers: [
      {
        answer: '20',
        nextId: 'moreLesscorrectq17',
      },
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq17',
      },
      {
        answer: "18",
        nextId: 'inmoreLesscorrectq17',
      },
      {
        answer: "22",
        nextId: 'inmoreLesscorrectq17',
      },
    ],
  },
  moreLesscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>20</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[17],
    },
  ],
  },
  inmoreLesscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[17],
    },
  ],
  },
  
  //18
  ['moreLess'+shuffleArraynseve[17]]: {
  botPrompt: 'What is 1 more than 20?.   ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['23', '21', "22","19"]),
  answers: [
    {
      answer: '23',
      nextId: 'moreLesscorrectq18',
    },
    {
      answer: '21',
      nextId: 'inmoreLesscorrectq18',
    },
    {
      answer: "22",
      nextId: 'inmoreLesscorrectq18',
    },
    {
      answer: "19",
      nextId: 'inmoreLesscorrectq18',
    },
  ],
  },
  moreLesscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>21</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[18],
    },
  ],
  },
  inmoreLesscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[18],
    },
  ],
  },
  
  //19
  ['moreLess'+shuffleArraynseve[18]]: {
  botPrompt: 'What is the number that is 1 more than 10?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['16', '13', "12","11"]),
  answers: [
    {
      answer: '16',
      nextId: 'inmoreLesscorrectq19',
    },
    {
      answer: '13',
      nextId: 'inmoreLesscorrectq19',
    },
    {
      answer: "12",
      nextId: 'inmoreLesscorrectq19',
    },
    {
      answer: "11",
      nextId: 'moreLesscorrectq19',
    },
  ],
  },
  moreLesscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>11</strong> Answers! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[19],
    },
  ],
  },
  inmoreLesscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[19],
    },
  ],
  },
  
  //20
  ['moreLess'+shuffleArraynseve[19]]: {
  botPrompt: 'What is 1 more than 21?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['25', '27', "22","20"]),
  answers: [
    {
      answer: '25',
      nextId: 'inmoreLesscorrectq20',
    },
    {
      answer: '27',
      nextId: 'inmoreLesscorrectq20',
    },
    {
      answer: "22",
      nextId: 'moreLesscorrectq20',
    },
    {
      answer: "20",
      nextId: 'inmoreLesscorrectq20',
    },
  ],
  },
  moreLesscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>22</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[20],
    },
  ],
  },
  inmoreLesscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[20],
    },
  ],
  },
  
  //21
  ["moreLess"+shuffleArraynseve[20]]: {
    botPrompt: 'What is 1 more than 22?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['23', '21', "20","19"]),
  answers: [
    {
      answer: '23',
      nextId: 'moreLesscorrectq21',
    },
    {
      answer: '21',
      nextId: 'inmoreLesscorrectq21',
    },
    {
      answer: "20",
      nextId: 'inmoreLesscorrectq21',
    },
    {
      answer: "19",
      nextId: 'inmoreLesscorrectq21',
    },
  ],
  },
  moreLesscorrectq21: {
    botPrompt: 'Hurray <strong>23</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[21],
      },
    ],
  },
  inmoreLesscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[21],
      },
    ],
  },
  
  //22
  ['moreLess'+shuffleArraynseve[21]]: {
    botPrompt: 'What is 1 more than 23?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['22', '24', "21","27"]),
  answers: [
    {
      answer: '22',
      nextId: 'inmoreLesscorrectq22',
    },
    {
      answer: '24',
      nextId: 'moreLesscorrectq22',
    },
    {
      answer: "21",
      nextId: 'inmoreLesscorrectq22',
    },
    {
      answer: "27",
      nextId: 'inmoreLesscorrectq22',
    },
  ],
  },
  
  moreLesscorrectq22: {
    botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[22],
      },
    ],
  },
  inmoreLesscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[22],
      },
    ],
  },
  
  //23
  ['moreLess'+shuffleArraynseve[22]]: {
  botPrompt: "What is 1 more than 25?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['24', '23', "26","27"]),
  answers: [
    {
      answer: '24',
      nextId: 'moreLesscorrectq23',
    },
    {
      answer: '23',
      nextId: 'inmoreLesscorrectq23',
    },
    {
      answer: "26",
      nextId: 'inmoreLesscorrectq23',
    },
    {
      answer: "27",
      nextId: 'inmoreLesscorrectq23',
    },
  ],
  },
  
  moreLesscorrectq23: {
  botPrompt: 'Hurray! <strong>26</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[23],
    },
  ],
  },
  inmoreLesscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"26"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[23],
    },
  ],
  },
  
  //24
  ['moreLess'+shuffleArraynseve[23]]: {
  botPrompt: 'What is 1 more than 30?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['29', '31', "13","32`"]),
  answers: [
    {
      answer: '29',
      nextId: 'inmoreLesscorrectq24',
    },
    {
      answer: '31',
      nextId: 'moreLesscorrectq24',
    },
    {
      answer: "13",
      nextId: 'inmoreLesscorrectq24',
    },
    {
      answer: "32",
      nextId: 'inmoreLesscorrectq24',
    },
  ],
  },
  
  moreLesscorrectq24: {
  botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[24],
    },
  ],
  },
  inmoreLesscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[24],
    },
  ],
  },
  
  //25
  ['moreLess'+shuffleArraynseve[24]]: {
  botPrompt: 'What is 1 more than 26?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '27', "26","25"]),
  answers: [
    {
      answer: '28',
      nextId: 'inmoreLesscorrectq25',
    },
    {
      answer: '27',
      nextId: 'moreLesscorrectq25',
    },
    {
      answer: "26",
      nextId: 'inmoreLesscorrectq25',
    },
    {
      answer: "25",
      nextId: 'inmoreLesscorrectq25',
    },
  ],
  },
  
  moreLesscorrectq25: {
  botPrompt: 'Hurray! <strong>27</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[25],
    },
  ],
  },
  inmoreLesscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[25],
    },
  ],
  },
  
  //26
  ['moreLess'+shuffleArraynseve[25]]: {
  botPrompt: 'What is 1 more than 29?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['30', '28', "23","31"]),
  answers: [
    {
      answer: '30',
      nextId: 'moreLesscorrectq26',
    },
    {
      answer: '28',
      nextId: 'inmoreLesscorrectq26',
    },
    {
      answer: "23",
      nextId: 'inmoreLesscorrectq26',
    },
    {
      answer: "31",
      nextId: 'inmoreLesscorrectq26',
    },
  ],
  },
  
  moreLesscorrectq26: {
  botPrompt: 'Hurray! <strong>30</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[26],
    },
  ],
  },
  inmoreLesscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[26],
    },
  ],
  },
  
  //27
  ['moreLess'+shuffleArraynseve[26]]: {
  botPrompt: 'What is the number that is 1 more than 35?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['34', '36', "33","23"]),
    answers: [
      {
        answer: '34',
        nextId: 'inmoreLesscorrectq27',
      },
      {
        answer: '36',
        nextId: 'moreLesscorrectq27',
      },
      {
        answer: "33",
        nextId: 'inmoreLesscorrectq27',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq27',
      },
    ],
  },
  
  moreLesscorrectq27: {
  botPrompt: 'Hurray! <strong>36</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[27],
    },
  ],
  },
  inmoreLesscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"36"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[27],
    },
  ],
  },
  
  
  //28
  ['moreLess'+shuffleArraynseve[27]]: {
  botPrompt: 'What is the number that is 1 more than 34?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['33', '32', "31","35"]),
  answers: [
    {
      answer: '33',
      nextId: 'inmoreLesscorrectq28',
    },
    {
      answer: '32',
      nextId: 'inmoreLesscorrectq28',
    },
    {
      answer: "31",
      nextId: 'inmoreLesscorrectq28',
    },
    {
      answer: "35",
      nextId: 'moreLesscorrectq28',
    },
  ],
  },
  
  moreLesscorrectq28: {
  botPrompt: 'Hurray! <strong>35</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[28],
    },
  ],
  },
  inmoreLesscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[28],
    },
  ],
  },
  
  //29
  ['moreLess'+shuffleArraynseve[28]]: {
  botPrompt: 'What is the number that is 1 more than 33?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['32', '34', "31","36"]),
    answers: [
      {
        answer: '32',
        nextId: 'inmoreLesscorrectq29',
      },
      {
        answer: '34',
        nextId: 'moreLesscorrectq29',
      },
      {
        answer: "31",
        nextId: 'inmoreLesscorrectq29',
      },
      {
        answer: "36",
        nextId: 'inmoreLesscorrectq29',
      },
    ],
  },
  
  moreLesscorrectq29: {
  botPrompt: 'Hurray! <strong>34</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[29],
    },
  ],
  },
  inmoreLesscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[29],
    },
  ],
  },
  
  
  //30
  ['moreLess'+shuffleArraynseve[29]]: {
  botPrompt: 'What is the number that is 1 more than 32?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['33', '36', "31","23"]),
  answers: [
    {
      answer: '33',
      nextId: 'moreLesscorrectq30',
    },
    {
      answer: '36',
      nextId: 'inmoreLesscorrectq30',
    },
    {
      answer: "31",
      nextId: 'inmoreLesscorrectq30',
    },
    {
      answer: "23",
      nextId: 'inmoreLesscorrectq30',
    },
  ],
  },
  
  moreLesscorrectq30: {
  botPrompt: 'Hurray! <strong>33</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[30],
    },
  ],
  },
  inmoreLesscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"33"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[30],
    },
  ],
  },
  
  //31
  ['moreLess'+shuffleArraynseve[30]]: {
  botPrompt: 'What is 1 more than 1?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['0', '2', "3","4"]),
    answers: [
      {
        answer: '0',
        nextId: 'inmoreLesscorrectq31',
      },
      {
        answer: '2',
        nextId: 'moreLesscorrectq31',
      },
      {
        answer: "3",
        nextId: 'inmoreLesscorrectq31',
      },
      {
        answer: "4",
        nextId: 'inmoreLesscorrectq31',
      },
    ],
  },
  
  moreLesscorrectq31: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[31],
    },
  ],
  },
  inmoreLesscorrectq31: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[31],
    },
  ],
  },
  
  //32
  ['moreLess'+shuffleArraynseve[31]]: {
  botPrompt: 'What is the number that is 1 more than 36?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['38', '39', "37","35"]),
  answers: [
    {
      answer: '38',
      nextId: 'inmoreLesscorrectq32',
    },
    {
      answer: '39',
      nextId: 'inmoreLesscorrectq32',
    },
    {
      answer: "37",
      nextId: 'moreLesscorrectq32',
    },
    {
      answer: "35",
      nextId: 'inmoreLesscorrectq32',
    },
  ],
  },
  
  moreLesscorrectq32: {
  botPrompt: 'Hurray! <strong>37</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[32],
    },
  ],
  },
  inmoreLesscorrectq32: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[32],
    },
  ],
  },
  
  //33
  ['moreLess'+shuffleArraynseve[32]]: {
  botPrompt: 'What is 1 more than 49?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['50', '48', "47","44"]),
  answers: [
    {
      answer: '50',
      nextId: 'moreLesscorrectq33',
    },
    {
      answer: '48',
      nextId: 'inmoreLesscorrectq33',
    },
    {
      answer: "47",
      nextId: 'inmoreLesscorrectq33',
    },
    {
      answer: "44",
      nextId: 'inmoreLesscorrectq33',
    },
  ],
  },
  
  moreLesscorrectq33: {
  botPrompt: 'Hurray! <strong>50</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[33],
    },
  ],
  },
  inmoreLesscorrectq33: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"50"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[33],
    },
  ],
  },
  
  //34
  ['moreLess'+shuffleArraynseve[33]]: {
  botPrompt: 'What is 1 more than 47?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '48', "46","45"]),
    answers: [
      {
        answer: '49',
        nextId: 'inmoreLesscorrectq34',
      },
      {
        answer: '48',
        nextId: 'moreLesscorrectq34',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq34',
      },
      {
        answer: "45",
        nextId: 'inmoreLesscorrectq34',
      },
    ],
  },
  
  moreLesscorrectq34: {
  botPrompt: 'Hurray! <strong>48</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[34],
    },
  ],
  },
  inmoreLesscorrectq34: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"48"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[34],
    },
  ],
  },
  
  
  //35
  ['moreLess'+shuffleArraynseve[34]]: {
  botPrompt: 'What is the number that is 1 more than 40?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['39', '41', "42","44"]),
  answers: [
    {
      answer: '39',
      nextId: 'inmoreLesscorrectq35',
    },
    {
      answer: '41',
      nextId: 'moreLesscorrectq35',
    },
    {
      answer: "42",
      nextId: 'inmoreLesscorrectq35',
    },
    {
      answer: "44",
      nextId: 'inmoreLesscorrectq35',
    },
  ],
  },
  
  moreLesscorrectq35: {
  botPrompt: 'Hurray! <strong>41</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[35],
    },
  ],
  },
  inmoreLesscorrectq35: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[35],
    },
  ],
  },
  
  //36
  ['moreLess'+shuffleArraynseve[35]]: {
    botPrompt: 'What is the number that is 1 more than 43?',
    type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['44', '46', "45","48"]),
  answers: [
    {
      answer: '44',
      nextId: 'moreLesscorrectq36',
    },
    {
      answer: '46',
      nextId: 'inmoreLesscorrectq36',
    },
    {
      answer: "45",
      nextId: 'inmoreLesscorrectq36',
    },
    {
      answer: "48",
      nextId: 'inmoreLesscorrectq36',
    },
  ],
  },
  moreLesscorrectq36: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>44</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[36],
      },
    ],
  },
  inmoreLesscorrectq36: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[36],
      },
    ],
  },
  
  //37
  ['moreLess'+shuffleArraynseve[36]]: {
  botPrompt: 'What is the number that is 1 more than 46?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '42', "47","45"]),
  answers: [
    {
      answer: '49',
      nextId: 'inmoreLesscorrectq37',
    },
    {
      answer: '42',
      nextId: 'inmoreLesscorrectq37',
    },
    {
      answer: "47",
      nextId: 'moreLesscorrectq37',
    },
    {
      answer: "45",
      nextId: 'inmoreLesscorrectq37',
    },
  ],
  },
  moreLesscorrectq37: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>47</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[37],
    },
  ],
  },
  inmoreLesscorrectq37: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[37],
    },
  ],
  },
  
  //38
  ['moreLess'+shuffleArraynseve[37]]: {
  botPrompt: 'What is 1 more than 48?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['49', '47', "46","50"]),
    answers: [
      {
        answer: '49',
        nextId: 'moreLesscorrectq38',
      },
      {
        answer: '47',
        nextId: 'inmoreLesscorrectq38',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq38',
      },
      {
        answer: "50",
        nextId: 'inmoreLesscorrectq38',
      },
    ],
  },
  moreLesscorrectq38: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>49</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[38],
    },
  ],
  },
  inmoreLesscorrectq38: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[38],
    },
  ],
  },
  
  //39
  ['moreLess'+shuffleArraynseve[38]]: {
  botPrompt: 'What is 1 more than 41?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['43', '46', "42","44"]),
  answers: [
    {
      answer: '43',
      nextId: 'inmoreLesscorrectq39',
    },
    {
      answer: '46',
      nextId: 'inmoreLesscorrectq39',
    },
    {
      answer: "42",
      nextId: 'moreLesscorrectq39',
    },
    {
      answer: "44",
      nextId: 'inmoreLesscorrectq39',
    },
  ],
  },
  moreLesscorrectq39: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>42</strong> Answers! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[39],
    },
  ],
  },
  inmoreLesscorrectq39: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[39],
    },
  ],
  },
  
  //40
  ['moreLess'+shuffleArraynseve[39]]: {
  botPrompt: 'What is the number that is 1 more than 38?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['37', '39', "40","32"]),
    answers: [
      {
        answer: '37',
        nextId: 'inmoreLesscorrectq40',
      },
      {
        answer: '39',
        nextId: 'moreLesscorrectq40',
      },
      {
        answer: "40",
        nextId: 'inmoreLesscorrectq40',
      },
      {
        answer: "32",
        nextId: 'inmoreLesscorrectq40',
      },
    ],
  },
  moreLesscorrectq40: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>39</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[40],
    },
  ],
  },
  inmoreLesscorrectq40: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[40],
    },
  ],
  },
  
  //41
  ["moreLess"+shuffleArraynseve[40]]: {
    botPrompt: 'What is the number that is 1 more than 44?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['48', '47', "45","43"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq41',
      },
      {
        answer: '47',
        nextId: 'inmoreLesscorrectq41',
      },
      {
        answer: "45",
        nextId: 'moreLesscorrectq41',
      },
      {
        answer: "43",
        nextId: 'inmoreLesscorrectq41',
      },
    ],
  },
  moreLesscorrectq41: {
    botPrompt: 'Hurray <strong>45</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[41],
      },
    ],
  },
  inmoreLesscorrectq41: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[41],
      },
    ],
  },
  
  //42
  
  ['moreLess'+shuffleArraynseve[41]]: {
    botPrompt: 'What is the number that is 1 more than 45?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['44', '41', "46","42"]),
    answers: [
      {
        answer: '44',
        nextId: 'inmoreLesscorrectq42',
      },
      {
        answer: '41',
        nextId: 'inmoreLesscorrectq42',
      },
      {
        answer: "46",
        nextId: 'moreLesscorrectq42',
      },
      {
        answer: "42",
        nextId: 'inmoreLesscorrectq42',
      },
    ],
  },
  
  moreLesscorrectq42: {
    botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[42],
      },
    ],
  },
  inmoreLesscorrectq42: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[42],
      },
    ],
  },
  
  //43
  ['moreLess'+shuffleArraynseve[42]]: {
  botPrompt: "What is the number that is 1 more than 37?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['36', '33', "39","38"]),
    answers: [
      {
        answer: '36',
        nextId: 'inmoreLesscorrectq43',
      },
      {
        answer: '33',
        nextId: 'inmoreLesscorrectq43',
      },
      {
        answer: "39",
        nextId: 'inmoreLesscorrectq43',
      },
      {
        answer: "38",
        nextId: 'moreLesscorrectq43',
      },
    ],
  },
  
  moreLesscorrectq43: {
  botPrompt: 'Hurray! <strong>38</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[43],
    },
  ],
  },
  inmoreLesscorrectq43: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[43],
    },
  ],
  },
  
  //44
  ['moreLess'+shuffleArraynseve[43]]: {
  botPrompt: 'What is 1 more than 24?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['26', '27', "25","23"]),
    answers: [
      {
        answer: '26',
        nextId: 'inmoreLesscorrectq44',
      },
      {
        answer: '27',
        nextId: 'inmoreLesscorrectq44',
      },
      {
        answer: "25",
        nextId: 'moreLesscorrectq44',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq44',
      },
    ],
  },
  
  moreLesscorrectq44: {
  botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[44],
    },
  ],
  },
  inmoreLesscorrectq44: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[44],
    },
  ],
  },
  
  //45
  ['moreLess'+shuffleArraynseve[44]]: {
  botPrompt: 'What is 1 more than 27?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['28', '25', "26","24"]),
    answers: [
      {
        answer: '28',
        nextId: 'moreLesscorrectq45',
      },
      {
        answer: '25',
        nextId: 'inmoreLesscorrectq45',
      },
      {
        answer: "26",
        nextId: 'inmoreLesscorrectq45',
      },
      {
        answer: "24",
        nextId: 'inmoreLesscorrectq45',
      },
    ],
  },
  
  moreLesscorrectq45: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[45],
    },
  ],
  },
  inmoreLesscorrectq45: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[45],
    },
  ],
  },
  
  //46
  ['moreLess'+shuffleArraynseve[45]]: {
  botPrompt: 'What is 1 more than 28?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['24', '29', "27","28"]),
    answers: [
      {
        answer: '24',
        nextId: 'inmoreLesscorrectq46',
      },
      {
        answer: '29',
        nextId: 'inmoreLesscorrectq46',
      },
      {
        answer: "27",
        nextId: 'inmoreLesscorrectq46',
      },
      {
        answer: "28",
        nextId: 'moreLesscorrectq46',
      },
    ],
  },
  
  moreLesscorrectq46: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[46],
    },
  ],
  },
  inmoreLesscorrectq46: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[46],
    },
  ],
  },
  
  //47
  ['moreLess'+shuffleArraynseve[46]]: {
  botPrompt: 'What is 1 more than 38?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['39', '37', "33","36"]),
    answers: [
      {
        answer: '39',
        nextId: 'moreLesscorrectq47',
      },
      {
        answer: '37',
        nextId: 'inmoreLesscorrectq47',
      },
      {
        answer: "33",
        nextId: 'inmoreLesscorrectq47',
      },
      {
        answer: "36",
        nextId: 'inmoreLesscorrectq47',
      },
    ],
  },
  
  moreLesscorrectq47: {
  botPrompt: 'Hurray! <strong>39</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[47],
    },
  ],
  },
  inmoreLesscorrectq47: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[47],
    },
  ],
  },
  
  
  //48
  ['moreLess'+shuffleArraynseve[47]]: {
  botPrompt: 'What is the number that is 1 more than 39?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['35', '40', "42","38"]),
    answers: [
      {
        answer: '35',
        nextId: 'inmoreLesscorrectq48',
      },
      {
        answer: '40',
        nextId: 'moreLesscorrectq48',
      },
      {
        answer: "42",
        nextId: 'inmoreLesscorrectq48',
      },
      {
        answer: "38",
        nextId: 'inmoreLesscorrectq48',
      },
    ],
  },
  
  moreLesscorrectq48: {
  botPrompt: 'Hurray! <strong>40</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[48],
    },
  ],
  },
  inmoreLesscorrectq48: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[48],
    },
  ],
  },
  
  //49
  ['moreLess'+shuffleArraynseve[48]]: {
  botPrompt: 'What is the number that is 1 more than 42?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['43', '45', "44","41"]),
    answers: [
      {
        answer: '43',
        nextId: 'moreLesscorrectq49',
      },
      {
        answer: '45',
        nextId: 'inmoreLesscorrectq49',
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq49',
      },
      {
        answer: "41",
        nextId: 'inmoreLesscorrectq49',
      },
    ],
  },
  
  moreLesscorrectq49: {
  botPrompt: 'Hurray! <strong>43</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[49],
    },
  ],
  },
  inmoreLesscorrectq49: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[49],
    },
  ],
  },
  
  
  //50
  ['moreLess'+shuffleArraynseve[49]]: {
  botPrompt: 'What is 1 less than 4?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['2', '3', "5","1"]),
    answers: [
      {
        answer: '2',
        nextId: 'inmoreLesscorrectq50',
      },
      {
        answer: '3',
        nextId: 'moreLesscorrectq50',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrectq50',
      },
      {
        answer: "1",
        nextId: 'inmoreLesscorrectq50',
      },
    ],
  },
  
  moreLesscorrectq50: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[50],
    },
  ],
  },
  inmoreLesscorrectq50: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[50],
    },
  ],
  },
  
  //51
  ['moreLess'+shuffleArraynseve[50]]: {
  botPrompt: 'What number is 1 less than 2?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['1', '3', "4","5"]),
    answers: [
      {
        answer: '1',
        nextId: 'moreLesscorrectq51',
      },
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq51',
      },
      {
        answer: "4",
        nextId: 'inmoreLesscorrectq51',
      },
      {
        answer: "5",
        nextId: 'inmoreLesscorrectq51',
      },
    ],
  },
  
  moreLesscorrectq51: {
  botPrompt: 'Hurray! <strong>1</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[51],
    },
  ],
  },
  inmoreLesscorrectq51: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[51],
    },
  ],
  },
  
  //52
  ['moreLess'+shuffleArraynseve[51]]: {
  botPrompt: 'What is 1 less than 5?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['1', '2', "3","4"]),
    answers: [
      {
        answer: '1',
        nextId: 'inmoreLesscorrectq52',
      },
      {
        answer: '2',
        nextId: 'inmoreLesscorrectq52',
      },
      {
        answer: "3",
        nextId: 'inmoreLesscorrectq52',
      },
      {
        answer: "4",
        nextId: 'moreLesscorrectq52',
      },
    ],
  },
  
  moreLesscorrectq52: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[52],
    },
  ],
  },
  inmoreLesscorrectq52: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[52],
    },
  ],
  },
  
  //53
  ['moreLess'+shuffleArraynseve[52]]: {
  botPrompt: 'What is 1 less than 3?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '3', "2","6"]),
    answers: [
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq53',
      },
      {
        answer: '3',
        nextId: 'inmoreLesscorrectq53',
      },
      {
        answer: "2",
        nextId: 'moreLesscorrectq53',
      },
      {
        answer: "6",
        nextId: 'inmoreLesscorrectq53',
      },
    ],
  },
  
  moreLesscorrectq53: {
  botPrompt: 'Hurray! <strong>2</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[53],
    },
  ],
  },
  inmoreLesscorrectq53: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[53],
    },
  ],
  },
  
  //54
  ['moreLess'+shuffleArraynseve[53]]: {
  botPrompt: 'What is 1 less than 6?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '1', "3","5"]),
    answers: [
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq54',
      },
      {
        answer: '1',
        nextId: 'inmoreLesscorrectq54',
      },
      {
        answer: "3",
        nextId: 'inmoreLesscorrectq54',
      },
      {
        answer: "5",
        nextId: 'moreLesscorrectq54',
      },
    ],
  },
  
  moreLesscorrectq54: {
  botPrompt: 'Hurray! <strong>5</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[54],
    },
  ],
  },
  inmoreLesscorrectq54: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[54],
    },
  ],
  },
  
  
  //55
  ['moreLess'+shuffleArraynseve[54]]: {
  botPrompt: 'What number is 1 less than 10?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['9', '11', "10","8"]),
    answers: [
      {
        answer: '9',
        nextId: 'moreLesscorrectq55',
      },
      {
        answer: '11',
        nextId: 'inmoreLesscorrectq55',
      },
      {
        answer: "10",
        nextId: 'inmoreLesscorrectq55',
      },
      {
        answer: "8",
        nextId: 'inmoreLesscorrectq55',
      },
    ],
  },
  
  moreLesscorrectq55: {
  botPrompt: 'Hurray! <strong>9</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[55],
    },
  ],
  },
  inmoreLesscorrectq55: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[55],
    },
  ],
  },
  
  //56
  ['moreLess'+shuffleArraynseve[55]]: {
    botPrompt: 'What number is 1 less than 8?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['6', '4', "7","2"]),
    answers: [
      {
        answer: '6',
        nextId: 'inmoreLesscorrectq56',
      },
      {
        answer: '4',
        nextId: 'inmoreLesscorrectq56',
      },
      {
        answer: "7",
        nextId: 'moreLesscorrectq56',
      },
      {
        answer: "2",
        nextId: 'inmoreLesscorrectq56',
      },
    ],
  },
  moreLesscorrectq56: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>7</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[56],
      },
    ],
  },
  inmoreLesscorrectq56: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[56],
      },
    ],
  },
  
  //57
  ['moreLess'+shuffleArraynseve[56]]: {
  botPrompt: 'What number is 1 less than 7?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['5', '6', "8","4"]),
    answers: [
      {
        answer: '5',
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: '6',
        nextId: 'moreLesscorrectq57',
      },
      {
        answer: "8",
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: "4",
        nextId: 'inmoreLesscorrectq57',
      },
    ],
  },
  moreLesscorrectq57: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>6</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[57],
    },
  ],
  },
  inmoreLesscorrectq57: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"6"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[57],
    },
  ],
  },
  
  //58
  ['moreLess'+shuffleArraynseve[57]]: {
  botPrompt: 'What is 1 less than 9?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['6', '7', "10","8"]),
  answers: [
    {
      answer: '6',
      nextId: 'inmoreLesscorrectq58',
    },
    {
      answer: '7',
      nextId: 'inmoreLesscorrectq58',
    },
    {
      answer: "10",
      nextId: 'inmoreLesscorrectq58',
    },
    {
      answer: "8",
      nextId: 'moreLesscorrectq58',
    },
  ],
  },
  moreLesscorrectq58: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>8</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[58],
    },
  ],
  },
  inmoreLesscorrectq58: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[58],
    },
  ],
  },
  
  //59
  ['moreLess'+shuffleArraynseve[58]]: {
  botPrompt: 'What is 1 less than 12?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['12', '13', "11","9"]),
    answers: [
      {
        answer: '12',
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq57',
      },
      {
        answer: "11",
        nextId: 'moreLesscorrectq57',
      },
      {
        answer: "9",
        nextId: 'inmoreLesscorrectq57',
      },
    ],
  },
  moreLesscorrectq59: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>11</strong> Answers! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[59],
    },
  ],
  },
  inmoreLesscorrectq59: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[59],
    },
  ],
  },
  
  //60
  ['moreLess'+shuffleArraynseve[59]]: {
  botPrompt: 'What number is 1 less than 11?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['11', '13', "14","12"]),
  answers: [
    {
      answer: '11',
      nextId: 'inmoreLesscorrectq60',
    },
    {
      answer: '13',
      nextId: 'inmoreLesscorrectq60',
    },
    {
      answer: "14",
      nextId: 'inmoreLesscorrectq60',
    },
    {
      answer: "12",
      nextId: 'moreLesscorrectq60',
    },
  ],
  },
  moreLesscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>12</strong> 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[60],
    },
  ],
  },
  inmoreLesscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[60],
    },
  ],
  },
  
  //61
  ["moreLess"+shuffleArraynseve[60]]: {
    botPrompt: 'What number is 1 less than 15?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['14', '13', "12","11"]),
    answers: [
      {
        answer: '14',
        nextId: 'moreLesscorrectq61',
      },
      {
        answer: '13',
        nextId: 'inmoreLesscorrectq61',
      },
      {
        answer: "12",
        nextId: 'inmoreLesscorrectq61',
      },
      {
        answer: "11",
        nextId: 'inmoreLesscorrectq61',
      },
    ],
  },
  moreLesscorrectq61: {
    botPrompt: 'Hurray <strong>14</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[61],
      },
    ],
  },
  inmoreLesscorrectq61: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"14"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[61],
      },
    ],
  },
  
  //62
  ['moreLess'+shuffleArraynseve[61]]: {
    botPrompt: 'What is 1 less than 22?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['21', '23', "24","25"]),
    answers: [
      {
        answer: '21',
        nextId: 'moreLesscorrectq62',
      },
      {
        answer: '23',
        nextId: 'inmoreLesscorrectq62',
      },
      {
        answer: "24",
        nextId: 'inmoreLesscorrectq62',
      },
      {
        answer: "25",
        nextId: 'inmoreLesscorrectq62',
      },
    ],
  },
  
  moreLesscorrectq62: {
    botPrompt: 'Hurray! <strong>21</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[62],
      },
    ],
  },
  inmoreLesscorrectq62: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"21"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[62],
      },
    ],
  },
  
  //63
  ['moreLess'+shuffleArraynseve[62]]: {
  botPrompt: "What is 1 less than 14?",
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['16', '15', "13","11"]),
    answers: [
      {
        answer: '16',
        nextId: 'inmoreLesscorrectq63',
      },
      {
        answer: '15',
        nextId: 'inmoreLesscorrectq63',
      },
      {
        answer: "13",
        nextId: 'moreLesscorrectq63',
      },
      {
        answer: "11",
        nextId: 'inmoreLesscorrectq63',
      },
    ],
  },
  
  moreLesscorrectq63: {
  botPrompt: 'Hurray! <strong>13</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[63],
    },
  ],
  },
  inmoreLesscorrectq63: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"13"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[63],
    },
  ],
  },
  
  //64
  ['moreLess'+shuffleArraynseve[63]]: {
  botPrompt: 'What is 1 less than 18?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['16', '17', "19","15"]),
  answers: [
    {
      answer: '16',
      nextId: 'inmoreLesscorrectq64',
    },
    {
      answer: '17',
      nextId: 'moreLesscorrectq64',
    },
    {
      answer: "19",
      nextId: 'inmoreLesscorrectq64',
    },
    {
      answer: "15",
      nextId: 'inmoreLesscorrectq64',
    },
  ],
  },
  
  moreLesscorrectq64: {
  botPrompt: 'Hurray! <strong>17</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[64],
    },
  ],
  },
  inmoreLesscorrectq2: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"17"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[64],
    },
  ],
  },
  
  //65
  ['moreLess'+shuffleArraynseve[64]]: {
  botPrompt: 'What number is 1 less than 20?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['18', '21', "23","19"]),
    answers: [
      {
        answer: '18',
        nextId: 'inmoreLesscorrectq65',
      },
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq65',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq65',
      },
      {
        answer: "19",
        nextId: 'moreLesscorrectq65',
      },
    ],
  },
  
  moreLesscorrectq65: {
  botPrompt: 'Hurray! <strong>19</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[65],
    },
  ],
  },
  inmoreLesscorrectq65: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"19"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[65],
    },
  ],
  },
  
  //66
  ['moreLess'+shuffleArraynseve[65]]: {
  botPrompt: 'What number is 1 less than 16?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['15', '14', "13","12"]),
  answers: [
    {
      answer: '15',
      nextId: 'moreLesscorrectq66',
    },
    {
      answer: '14',
      nextId: 'inmoreLesscorrectq66',
    },
    {
      answer: "13",
      nextId: 'inmoreLesscorrectq66',
    },
    {
      answer: "12",
      nextId: 'inmoreLesscorrectq66',
    },
  ],
  },
  
  moreLesscorrectq66: {
  botPrompt: 'Hurray! <strong>15</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[66],
    },
  ],
  },
  inmoreLesscorrectq66: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[66],
    },
  ],
  },
  
  //67
  ['moreLess'+shuffleArraynseve[66]]: {
  botPrompt: 'What number is 1 less than 17?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['15', '18', "14","16"]),
  answers: [
    {
      answer: '15',
      nextId: 'inmoreLesscorrectq67',
    },
    {
      answer: '18',
      nextId: 'inmoreLesscorrectq67',
    },
    {
      answer: "14",
      nextId: 'inmoreLesscorrectq67',
    },
    {
      answer: "16",
      nextId: 'moreLesscorrectq67',
    },
  ],
  },
  
  moreLesscorrectq67: {
  botPrompt: 'Hurray! <strong>16</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[67],
    },
  ],
  },
  inmoreLesscorrectq67: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"16"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[67],
    },
  ],
  },
  
  
  //68
  ['moreLess'+shuffleArraynseve[67]]: {
  botPrompt: 'What number is 1 less than 25?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['21', '21', "23","24"]),
    answers: [
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq68',
      },
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq68',
      },
      {
        answer: "23",
        nextId: 'inmoreLesscorrectq68',
      },
      {
        answer: "24",
        nextId: 'moreLesscorrectq68',
      },
    ],
  },
  
  moreLesscorrectq68: {
  botPrompt: 'Hurray! <strong>24</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[68],
    },
  ],
  },
  inmoreLesscorrectq68: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"24"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[68],
    },
  ],
  },
  
  //69
  ['moreLess'+shuffleArraynseve[68]]: {
  botPrompt: 'What number is 1 less than 13?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['12', '13', "14","11"]),
  answers: [
    {
      answer: '12',
      nextId: 'moreLesscorrectq69',
    },
    {
      answer: '13',
      nextId: 'inmoreLesscorrectq69',
    },
    {
      answer: "14",
      nextId: 'inmoreLesscorrectq69',
    },
    {
      answer: "11",
      nextId: 'inmoreLesscorrectq69',
    },
  ],
  },
  
  moreLesscorrectq69: {
  botPrompt: 'Hurray! <strong>12</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[69],
    },
  ],
  },
  inmoreLesscorrectq69: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[69],
    },
  ],
  },
  
  
  //70
  ['moreLess'+shuffleArraynseve[69]]: {
  botPrompt: 'What number is 1 less than 23?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['21', '24', "22","25"]),
  answers: [
    {
      answer: '21',
      nextId: 'inmoreLesscorrectq70',
    },
    {
      answer: '24',
      nextId: 'inmoreLesscorrectq70',
    },
    {
      answer: "22",
      nextId: 'moreLesscorrectq70',
    },
    {
      answer: "25",
      nextId: 'inmoreLesscorrectq70',
    },
  ],
  },
  
  moreLesscorrectq70: {
  botPrompt: 'Hurray! <strong>22</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[70],
    },
  ],
  },
  inmoreLesscorrectq70: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"22"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[70],
    },
  ],
  },
  
  //71
  ['moreLess'+shuffleArraynseve[70]]: {
  botPrompt: 'What is 1 less than 19?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['21', '18', "20","17"]),
    answers: [
      {
        answer: '21',
        nextId: 'inmoreLesscorrectq71',
      },
      {
        answer: '18',
        nextId: 'moreLesscorrectq71',
      },
      {
        answer: "20",
        nextId: 'inmoreLesscorrectq71',
      },
      {
        answer: "17",
        nextId: 'inmoreLesscorrectq71',
      },
    ],
  },
  
  moreLesscorrectq71: {
  botPrompt: 'Hurray! <strong>18</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[71],
    },
  ],
  },
  inmoreLesscorrectq71: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[71],
    },
  ],
  },
  
  //72
  ['moreLess'+shuffleArraynseve[71]]: {
  botPrompt: 'What is 1 less than 28?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['25', '26', "29","27"]),
  answers: [
    {
      answer: '25',
      nextId: 'inmoreLesscorrectq72',
    },
    {
      answer: '26',
      nextId: 'inmoreLesscorrectq72',
    },
    {
      answer: "29",
      nextId: 'inmoreLesscorrectq72',
    },
    {
      answer: "27",
      nextId: 'moreLesscorrectq72',
    },
  ],
  },
  
  moreLesscorrectq72: {
  botPrompt: 'Hurray! <strong>27</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[72],
    },
  ],
  },
  inmoreLesscorrectq72: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[72],
    },
  ],
  },
  
  //73
  ['moreLess'+shuffleArraynseve[72]]: {
  botPrompt: 'What is 1 less than 26?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['27', '29', "25","28"]),
    answers: [
      {
        answer: '27',
        nextId: 'inmoreLesscorrectq73',
      },
      {
        answer: '29',
        nextId: 'inmoreLesscorrectq73',
      },
      {
        answer: "25",
        nextId: 'moreLesscorrectq73',
      },
      {
        answer: "28",
        nextId: 'inmoreLesscorrectq73',
      },
    ],
  },
  
  moreLesscorrectq73: {
  botPrompt: 'Hurray! <strong>25</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[73],
    },
  ],
  },
  inmoreLesscorrectq73: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"25"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[73],
    },
  ],
  },
  
  //74
  ['moreLess'+shuffleArraynseve[73]]: {
  botPrompt: 'What is 1 less than 29?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['30', '28', "27","29"]),
  answers: [
    {
      answer: '30',
      nextId: 'inmoreLesscorrectq74',
    },
    {
      answer: '28',
      nextId: 'moreLesscorrectq74',
    },
    {
      answer: "27",
      nextId: 'inmoreLesscorrectq74',
    },
    {
      answer: "29",
      nextId: 'inmoreLesscorrectq74',
    },
  ],
  },
  
  moreLesscorrectq74: {
  botPrompt: 'Hurray! <strong>28</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[74],
    },
  ],
  },
  inmoreLesscorrectq74: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[74],
    },
  ],
  },
  
  
  //75
  ['moreLess'+shuffleArraynseve[74]]: {
  botPrompt: 'What is 1 less than 21?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['22', '23', "24","20"]),
    answers: [
      {
        answer: '22',
        nextId: 'inmoreLesscorrectq75',
      },
      {
        answer: '23',
        nextId: 'inmoreLesscorrectq75',
      },
      {
        answer: "24",
        nextId: 'inmoreLesscorrectq75',
      },
      {
        answer: "20",
        nextId: 'moreLesscorrectq75',
      },
    ],
  },
  
  moreLesscorrectq75: {
  botPrompt: 'Hurray! <strong>20</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[75],
    },
  ],
  },
  inmoreLesscorrectq75: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
  answers: [
    {
      nextId: 'moreLess'+shuffleArraynseve[75],
    },
  ],
  },
  
  //76
  ['moreLess'+shuffleArraynseve[75]]: {
    botPrompt: 'What is 1 less than 27?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['26', '27', "28","29"]),
    answers: [
      {
        answer: '26',
        nextId: 'inmoreLesscorrectq76',
      },
      {
        answer: '27',
        nextId: 'inmoreLesscorrectq76',
      },
      {
        answer: "28",
        nextId: 'moreLesscorrectq76',
      },
      {
        answer: "29",
        nextId: 'inmoreLesscorrectq76',
      },
    ],
  },
  moreLesscorrectq76: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>28</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[76],
      },
    ],
  },
  inmoreLesscorrectq76: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"28"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[76],
      },
    ],
  },
  
  //77
  ['moreLess'+shuffleArraynseve[76]]: {
  botPrompt: 'What number is 1 less than 24?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['23', '31', "22","33"]),
    answers: [
      {
        answer: '23',
        nextId: 'moreLesscorrectq77',
      },
      {
        answer: '31',
        nextId: 'inmoreLesscorrectq77',
      },
      {
        answer: "22",
        nextId: 'inmoreLesscorrectq77',
      },
      {
        answer: "33",
        nextId: 'inmoreLesscorrectq77',
      },
    ],
  },
  moreLesscorrectq77: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>23</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  inmoreLesscorrectq77: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue17',
    },
  ],
  },
  
  
  
  //78
  ['moreLess'+shuffleArraynseve[77]]: {
    botPrompt: 'What number is 1 less than 30? ',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['29', '28', "27","26"]),
      answers: [
        {
          answer: '29',
          nextId: 'moreLesscorrectq78',
        },
        {
          answer: '28',
          nextId: 'inmoreLesscorrectq78',
        },
        {
          answer: "27",
          nextId: 'inmoreLesscorrectq78',
        },
        {
          answer: "26",
          nextId: 'inmoreLesscorrectq78',
        },
      ],
    },
    
    moreLesscorrectq78: {
    botPrompt: 'Hurray! <strong>29</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[78],
      },
    ],
    },
    inmoreLesscorrectq78: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[78],
      },
    ],
    },
    
    //79
    ['moreLess'+shuffleArraynseve[78]]: {
    botPrompt: 'What number is 1 less than 37?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['35', '36', "34","33"]),
      answers: [
        {
          answer: '35',
          nextId: 'inmoreLesscorrectq79',
        },
        {
          answer: '36',
          nextId: 'moreLesscorrectq79',
        },
        {
          answer: "34",
          nextId: 'inmoreLesscorrectq79',
        },
        {
          answer: "33",
          nextId: 'inmoreLesscorrectq79',
        },
      ],
    },
    
    moreLesscorrectq79: {
    botPrompt: 'Hurray! <strong>36</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[79],
      },
    ],
    },
    inmoreLesscorrectq79: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"36"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[79],
      },
    ],
    },
    
    
    //80
    ['moreLess'+shuffleArraynseve[79]]: {
    botPrompt: ' What number is 1 less than 39?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['36', '37', "38","35"]),
      answers: [
        {
          answer: '36',
          nextId: 'inmoreLesscorrectq80',
        },
        {
          answer: '37',
          nextId: 'inmoreLesscorrectq80',
        },
        {
          answer: "38",
          nextId: 'moreLesscorrectq80',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq80',
        },
      ],
    },
    
    moreLesscorrectq80: {
    botPrompt: 'Hurray! <strong>38</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[80],
      },
    ],
    },
    inmoreLesscorrectq80: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[80],
      },
    ],
    },
    
    //81
    ['moreLess'+shuffleArraynseve[80]]: {
    botPrompt: 'What number is 1 less than 31?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['32', '33', "34","30"]),
      answers: [
        {
          answer: '32',
          nextId: 'inmoreLesscorrectq51',
        },
        {
          answer: '33',
          nextId: 'inmoreLesscorrectq51',
        },
        {
          answer: "34",
          nextId: 'inmoreLesscorrectq51',
        },
        {
          answer: "30",
          nextId: 'moreLesscorrectq51',
        },
      ],
    },
    
    moreLesscorrectq51: {
    botPrompt: 'Hurray! <strong>30</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[51],
      },
    ],
    },
    inmoreLesscorrectq51: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"30"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[51],
      },
    ],
    },
    
    //82
    ['moreLess'+shuffleArraynseve[81]]: {
    botPrompt: 'What number is 1 less than 32?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['33', '35', "31","34"]),
      answers: [
        {
          answer: '33',
          nextId: 'inmoreLesscorrectq82',
        },
        {
          answer: '35',
          nextId: 'inmoreLesscorrectq82',
        },
        {
          answer: "31",
          nextId: 'moreLesscorrectq82',
        },
        {
          answer: "34",
          nextId: 'inmoreLesscorrectq82',
        },
      ],
    },
    
    moreLesscorrectq82: {
    botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[82],
      },
    ],
    },
    inmoreLesscorrectq82: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[82],
      },
    ],
    },
    
    //83
    ['moreLess'+shuffleArraynseve[82]]: {
    botPrompt: 'What is 1 less than 34?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['31', '34', "35","36"]),
      answers: [
        {
          answer: '31',
          nextId: 'moreLesscorrectq83',
        },
        {
          answer: '34',
          nextId: 'inmoreLesscorrectq83',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq83',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq83',
        },
      ],
    },
  
    moreLesscorrectq83: {
    botPrompt: 'Hurray! <strong>31</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[83],
      },
    ],
    },
    inmoreLesscorrectq83: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"31"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[83],
      },
    ],
    },
    
    //84
    ['moreLess'+shuffleArraynseve[83]]: {
    botPrompt: 'What is 1 less than 33?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['32', '33', "35","36"]),
      answers: [
        {
          answer: '32',
          nextId: 'inmoreLesscorrectq84',
        },
        {
          answer: '33',
          nextId: 'moreLesscorrectq84',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq84',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq84',
        },
      ],
    },
    
    moreLesscorrectq84: {
    botPrompt: 'Hurray! <strong>33</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[84],
      },
    ],
    },
    inmoreLesscorrectq84: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"33"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[84],
      },
    ],
    },
    
    
    //85
    ['moreLess'+shuffleArraynseve[84]]: {
    botPrompt: 'What is 1 less than 35?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['34', '35', "36","37"]),
      answers: [
        {
          answer: '34',
          nextId: 'moreLesscorrectq85',
        },
        {
          answer: '35',
          nextId: 'inmoreLesscorrectq85',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq85',
        },
        {
          answer: "37",
          nextId: 'inmoreLesscorrectq85',
        },
      ],
    },
    
    moreLesscorrectq85: {
    botPrompt: 'Hurray! <strong>34</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[85],
      },
    ],
    },
    inmoreLesscorrectq85: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[85],
      },
    ],
    },
    
    //86
    ['moreLess'+shuffleArraynseve[85]]: {
      botPrompt: 'What is 1 less than 38?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['37', '38', "39","40"]),
      answers: [
        {
          answer: '37',
          nextId: 'moreLesscorrectq86',
        },
        {
          answer: '38',
          nextId: 'inmoreLesscorrectq86',
        },
        {
          answer: "39",
          nextId: 'inmoreLesscorrectq86',
        },
        {
          answer: "40",
          nextId: 'inmoreLesscorrectq86',
        },
      ],
    },
    moreLesscorrectq86: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>37</strong> 😎',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[86],
        },
      ],
    },
    inmoreLesscorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[86],
        },
      ],
    },
  
    //87
    ['moreLess'+shuffleArraynseve[86]]: {
    botPrompt: 'What is 1 less than 36?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['33', '34', "35","36"]),
      answers: [
        {
          answer: '33',
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: '34',
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: "35",
          nextId: 'moreLesscorrectq87',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq87',
        },
      ],
    },
    moreLesscorrectq87: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>35</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[87],
      },
    ],
    },
    inmoreLesscorrectq87: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[87],
      },
    ],
    },
    
    //88
    ['moreLess'+shuffleArraynseve[87]]: {
    botPrompt: 'What number is 1 less than 44?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['48', '47', "49","43"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq88',
      },
      {
        answer: '47',
        nextId: 'inmoreLesscorrectq88',
      },
      {
        answer: "here",
        nextId: 'inmoreLesscorrectq88',
      },
      {
        answer: "43",
        nextId: 'moreLesscorrectq88',
      },
    ],
    },
    moreLesscorrectq88: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>43</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[88],
      },
    ],
    },
    inmoreLesscorrectq88: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[88],
      },
    ],
    },
    
    //89
    ['moreLess'+shuffleArraynseve[88]]: {
    botPrompt: 'What number is 1 less than 40?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['39', '37', "36","35"]),
      answers: [
        {
          answer: '39',
          nextId: 'moreLesscorrectq87',
        },
        {
          answer: '37',
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: "36",
          nextId: 'inmoreLesscorrectq87',
        },
        {
          answer: "35",
          nextId: 'inmoreLesscorrectq87',
        },
      ],
    },
    moreLesscorrectq89: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>39</strong> Answers! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[89],
      },
    ],
    },
    inmoreLesscorrectq89: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"39"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[89],
      },
    ],
    },
    
    //90
    ['moreLess'+shuffleArraynseve[89]]: {
    botPrompt: 'What number is 1 less than 41?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['40', '42', "43","44"]),
    answers: [
      {
        answer: '40',
        nextId: 'moreLesscorrectq90',
      },
      {
        answer: '42',
        nextId: 'inmoreLesscorrectq90',
      },
      {
        answer: "43",
        nextId: 'inmoreLesscorrectq90',
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq90',
      },
    ],
    },
    moreLesscorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>40</strong> 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[90],
      },
    ],
    },
    inmoreLesscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[90],
      },
    ],
    },
    
    //91
    ["moreLess"+shuffleArraynseve[90]]: {
      botPrompt: 'What number is 1 less than 42?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['41', '44', "43","45"]),
      answers: [
        {
          answer: '41',
          nextId: 'moreLesscorrectq91',
        },
        {
          answer: '44',
          nextId: 'inmoreLesscorrectq91',
        },
        {
          answer: "43",
          nextId: 'inmoreLesscorrectq91',
        },
        {
          answer: "45",
          nextId: 'inmoreLesscorrectq91',
        },
      ],
    },
    moreLesscorrectq91: {
      botPrompt: 'Hurray <strong>41</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[91],
        },
      ],
    },
    inmoreLesscorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[91],
        },
      ],
    },
    
    //92
    ['moreLess'+shuffleArraynseve[91]]: {
      botPrompt: 'What number is 1 less than 49?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['45', '46', "47","48"]),
      answers: [
        {
          answer: '45',
          nextId: 'inmoreLesscorrectq92',
        },
        {
          answer: '46',
          nextId: 'inmoreLesscorrectq92',
        },
        {
          answer: "47",
          nextId: 'inmoreLesscorrectq92',
        },
        {
          answer: "48",
          nextId: 'moreLesscorrectq92',
        },
      ],
    },
    
    moreLesscorrectq92: {
      botPrompt: 'Hurray! <strong>48</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[92],
        },
      ],
    },
    inmoreLesscorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"48"</strong>',
      answers: [
        {
          nextId: 'moreLess'+shuffleArraynseve[92],
        },
      ],
    },
    
    //93
    ['moreLess'+shuffleArraynseve[92]]: {
    botPrompt: "What is 1 less than 45?",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['41', '42', "43","44"]),
      answers: [
        {
          answer: '41',
          nextId: 'inmoreLesscorrectq93',
        },
        {
          answer: '42',
          nextId: 'inmoreLesscorrectq93',
        },
        {
          answer: "43",
          nextId: 'inmoreLesscorrectq93',
        },
        {
          answer: "44",
          nextId: 'moreLesscorrectq93',
        },
      ],
    },
    
    moreLesscorrectq93: {
    botPrompt: 'Hurray! <strong>44</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[93],
      },
    ],
    },
    inmoreLesscorrectq93: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"44"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[93],
      },
    ],
    },
  
    //94
    ['moreLess'+shuffleArraynseve[93]]: {
    botPrompt: 'What is 1 less than 43?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['45', '44', "46","42"]),
    answers: [
      {
        answer: '45',
        nextId: 'inmoreLesscorrectq94',
      },
      {
        answer: '44',
        nextId: 'inmoreLesscorrectq94',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq94',
      },
      {
        answer: "42",
        nextId: 'moreLesscorrectq94',
      },
    ],
    },
    
    moreLesscorrectq94: {
    botPrompt: 'Hurray! <strong>42</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[94],
      },
    ],
    },
    inmoreLesscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[94],
      },
    ],
    },
    
    //95
    ['moreLess'+shuffleArraynseve[94]]: {
    botPrompt: 'What is 1 less than 46?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['45', '44', "43","42"]),
      answers: [
        {
          answer: '45',
          nextId: 'moreLesscorrectq95',
        },
        {
          answer: '44',
          nextId: 'inmoreLesscorrectq95',
        },
        {
          answer: "43",
          nextId: 'inmoreLesscorrectq95',
        },
        {
          answer: "42",
          nextId: 'inmoreLesscorrectq95',
        },
      ],
    },
    
    moreLesscorrectq95: {
    botPrompt: 'Hurray! <strong>45</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[95],
      },
    ],
    },
    inmoreLesscorrectq95: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"45"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[95],
      },
    ],
    },
    
    //96
    ['moreLess'+shuffleArraynseve[95]]: {
    botPrompt: 'What is 1 less than 50?',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['48', '49', "47","46"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq96',
      },
      {
        answer: '49',
        nextId: 'moreLesscorrectq96',
      },
      {
        answer: "47",
        nextId: 'inmoreLesscorrectq96',
      },
      {
        answer: "46",
        nextId: 'inmoreLesscorrectq96',
      },
    ],
    },
    
    moreLesscorrectq96: {
    botPrompt: 'Hurray! <strong>49</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[96],
      },
    ],
    },
    inmoreLesscorrectq96: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"49"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[96],
      },
    ],
    },
  
    //97
    ['moreLess'+shuffleArraynseve[96]]: {
    botPrompt: ' What number is 1 less than 47?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['48', '49', "46","44"]),
    answers: [
      {
        answer: '48',
        nextId: 'inmoreLesscorrectq97',
      },
      {
        answer: '49',
        nextId: 'inmoreLesscorrectq97',
      },
      {
        answer: "46",
        nextId: 'moreLesscorrectq97',
      },
      {
        answer: "44",
        nextId: 'inmoreLesscorrectq97',
      },
    ],
    },
    
    moreLesscorrectq97: {
    botPrompt: 'Hurray! <strong>46</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[97],
      },
    ],
    },
    inmoreLesscorrectq97: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"46"</strong>',
    answers: [
      {
        nextId: 'moreLess'+shuffleArraynseve[97],
      },
    ],
    },
    
    
    //98
    ['moreLess'+shuffleArraynseve[97]]: {
    botPrompt: 'What number is 1 less than 48?',
    type: RTypes.TRANSFORMED_TEXT,
    
  
    input: selectField(['44', '34', "45","47"]),
      answers: [
        {
          answer: '44',
          nextId: 'inmoreLesscorrectq98',
        },
        {
          answer: '34',
          nextId: 'inmoreLesscorrectq98',
        },
        {
          answer: "45",
          nextId: 'inmoreLesscorrectq98',
        },
        {
          answer: "47",
          nextId: 'moreLesscorrectq98',
        },
      ],
    },
    
    moreLesscorrectq98: {
    botPrompt: 'Hurray! <strong>47</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocontinue24',
      },
    ],
    },
    inmoreLesscorrectq98: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"47"</strong>',
    answers: [
      {
        nextId: 'wishtocontinue24',
      },
    ],
    },
    
  
  
  //endmoreLessletter
  wishtocontinue24: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day25',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
        },
    ],
  },
  
  
  //day25
  
  
  day25: {
    botPrompt: '<strong> Day 25 : </strong> Capital letters, full stops, and question marks play a crucial role in kindergarten education by helping young learners understand sentence structure and punctuation rules.',
    answers: [
            { nextId: 'day25link' },
    ],
  },
  
  day25link: {
    botPrompt: 'https://youtu.be/WFc5kESr4AI',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day252comment',
      },
    ],
  },
  day252comment: {
    botPrompt: 'Let’s look into the pages of the book',
    answers: [
            { nextId: 'day252link' },
    ],
  },
  day252link: {
    botPrompt: 'https://drive.google.com/file/d/1vZFs9aRgL-fmnPrG_XfmNk9Z1xUg-Goz/view?usp=sharing',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'day253link',
      },
    ],
  },
  day253link: {
    botPrompt: 'https://drive.google.com/file/d/1iXpfIffsy556QVrDvtDN1Gg8wC3Iy9oX/view?usp=sharing',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[0]  ,
      },
    ],
  },
  
  
  //capitalLetterFullStop
  ["capitalLetterFullStop"+shuffledNumbers[0]]: {
      botPrompt: 'i have a red bicycle',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['I have a red bicycle.', 'i have a red bicycle', "I Have a red bicycle","i have a red bicycle."]),
      answers: [
        {
          answer: 'I have a red bicycle.',
          nextId: 'capitalLetterFullStopcorrect',
        },
        {
          answer: 'i have a red bicycle',
          nextId: 'incapitalLetterFullStopcorrect',
        },
        {
          answer: "I Have a red bicycle",
          nextId: 'incapitalLetterFullStopcorrect',
        },
        {
          answer: "i have a red bicycle.",
          nextId: 'incapitalLetterFullStopcorrect',
        },
      ],
    },
    capitalLetterFullStopcorrect: {
      botPrompt: 'Hurray <strong>I have a red bicycle.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[1],
        },
      ],
    },
    incapitalLetterFullStopcorrect: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I have a red bicycle."</strong>',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[1],
        },
      ],
    },
    
    ['capitalLetterFullStop'+shuffledNumbers[1]]: {
      botPrompt: 'they went to the zoo',
      type: RTypes.TRANSFORMED_TEXT,
  
      input: selectField(['They went to the zoo.', 'They went To the zoo.', "they went to the zoo.","they went to the zoo"]),
      answers: [
        {
          answer: 'They went to the zoo.',
          nextId: 'capitalLetterFullStopcorrectq2',
        },
        {
          answer: 'They went To the zoo.',
          nextId: 'incapitalLetterFullStopcorrectq2',
        },
        {
          answer: "they went to the zoo.",
          nextId: 'incapitalLetterFullStopcorrectq2',
        },
        {
          answer: "they went to the zoo",
          nextId: 'incapitalLetterFullStopcorrectq2',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq2: {
      botPrompt: 'Hurray! <strong>They went to the zoo.</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[2],
        },
      ],
    },
    incapitalLetterFullStopcorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They went to the zoo."</strong>',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[2],
        },
      ],
    },
    
    //3
    ['capitalLetterFullStop'+shuffledNumbers[2]]: {
    botPrompt: "my sister likes to read books",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['My sister likes to read books.?', 'my sister Likes to read books.', "My sister likes to read Books.","my sister likes to read books."]),
      answers: [
        {
          answer: 'My sister likes to read books.?',
          nextId: 'incapitalLetterFullStopcorrectq3',
        },
        {
          answer: 'my sister Likes to read books.',
          nextId: 'incapitalLetterFullStopcorrectq3',
        },
        {
          answer: "My sister likes to read Books.",
          nextId: 'capitalLetterFullStopcorrectq3',
        },
        {
          answer: "my sister likes to read books.",
          nextId: 'incapitalLetterFullStopcorrectq3',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq3: {
    botPrompt: 'Hurray! <strong>My sister likes to read Books.</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[3],
      },
    ],
    },
    incapitalLetterFullStopcorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My sister likes to read Books."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[3],
      },
    ],
    },
    
    //4
    ['capitalLetterFullStop'+shuffledNumbers[3]]: {
    botPrompt: 'we live in a small town',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['We live in a small town...', 'we live in a small town', "We live in a small town.","we live in a small town."]),
      answers: [
        {
          answer: 'We live in a small town...',
          nextId: 'incapitalLetterFullStopcorrectq4',
        },
        {
          answer: 'we live in a small town',
          nextId: 'incapitalLetterFullStopcorrectq4',
        },
        {
          answer: "We live in a small town.",
          nextId: 'capitalLetterFullStopcorrectq4',
        },
        {
          answer: "we live in a small town.",
          nextId: 'incapitalLetterFullStopcorrectq4',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq4: {
    botPrompt: 'Hurray! <strong>We live in a small town.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[4],
      },
    ],
    },
    incapitalLetterFullStopcorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We live in a small town."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[4],
      },
    ],
    },
    
    //5
    ['capitalLetterFullStop'+shuffledNumbers[4]]: {
    botPrompt: 'she has two cats and a dog',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['She has two cats and a Dog.', 'she has two cats and a dog', "She Has two cats and a dog.","She has two cats and a dog."]),
      answers: [
        {
          answer: 'She has two cats and a Dog.',
          nextId: 'incapitalLetterFullStopcorrectq5',
        },
        {
          answer: 'she has two cats and a dog',
          nextId: 'incapitalLetterFullStopcorrectq5',
        },
        {
          answer: "She Has two cats and a dog.",
          nextId: 'incapitalLetterFullStopcorrectq5',
        },
        {
          answer: "She has two cats and a dog.",
          nextId: 'capitalLetterFullStopcorrectq5',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq5: {
    botPrompt: 'Hurray! <strong>She has two cats and a dog.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[5],
      },
    ],
    },
    incapitalLetterFullStopcorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She has two cats and a dog."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[5],
      },
    ],
    },
    
    //6
    ['capitalLetterFullStop'+shuffledNumbers[5]]: {
    botPrompt: 'i want to go to the beach',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['I want to go to the beach.', 'i want to go to the beach', "I Want to go to the beach","i want to go to the beach."]),
      answers: [
        {
          answer: 'I want to go to the beach.',
          nextId: 'capitalLetterFullStopcorrectq6',
        },
        {
          answer: 'i want to go to the beach',
          nextId: 'incapitalLetterFullStopcorrectq6',
        },
        {
          answer: "I Want to go to the beach",
          nextId: 'incapitalLetterFullStopcorrectq6',
        },
        {
          answer: "i want to go to the beach.",
          nextId: 'incapitalLetterFullStopcorrectq6',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq6: {
    botPrompt: 'Hurray! <strong>I want to go to the beach.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[6],
      },
    ],
    },
    incapitalLetterFullStopcorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I want to go to the beach."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[6],
      },
    ],
    },
    
    //7
    ['capitalLetterFullStop'+shuffledNumbers[6]]: {
    botPrompt: 'they have a picnic in the park',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['They have a Picnic in the park.', 'They have a picnic in the park.', "they have a picnic in the park","they have a picnic in the park"]),
      answers: [
        {
          answer: 'They have a Picnic in the park.',
          nextId: 'incapitalLetterFullStopcorrectq7',
        },
        {
          answer: 'They have a picnic in the park.',
          nextId: 'capitalLetterFullStopcorrectq7',
        },
        {
          answer: "they have a picnic in the park",
          nextId: 'incapitalLetterFullStopcorrectq7',
        },
        {
          answer: "they have a picnic in the park",
          nextId: 'incapitalLetterFullStopcorrectq7',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq7: {
    botPrompt: 'Hurray! <strong>They have a picnic in the park.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[7],
      },
    ],
    },
    incapitalLetterFullStopcorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They have a picnic in the park."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[7],
      },
    ],
    },
    
    
    //8
    ['capitalLetterFullStop'+shuffledNumbers[7]]: {
    botPrompt: 'i eat an apple every day',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['I eat an apple every day?', 'i eat an apple every day', "I eat an apple every day.","i eat an apple every day."]),
      answers: [
        {
          answer: 'I eat an apple every day?',
          nextId: 'incapitalLetterFullStopcorrectq8',
        },
        {
          answer: 'i eat an apple every day',
          nextId: 'incapitalLetterFullStopcorrectq8',
        },
        {
          answer: "I eat an apple every day.",
          nextId: 'capitalLetterFullStopcorrectq8',
        },
        {
          answer: "i eat an apple every day.",
          nextId: 'incapitalLetterFullStopcorrectq8',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq8: {
    botPrompt: 'Hurray! <strong>I eat an apple every day.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[8],
      },
    ],
    },
    incapitalLetterFullStopcorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I eat an apple every day."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[8],
      },
    ],
    },
    
    //9
    ['capitalLetterFullStop'+shuffledNumbers[8]]: {
    botPrompt: 'we go swimming in the pool',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['We go swimming in the pool...', 'we go swimming in the pool', "We Go swimming in the pool","We go swimming in the pool."]),
      answers: [
        {
          answer: 'We go swimming in the pool...',
          nextId: 'incapitalLetterFullStopcorrectq9',
        },
        {
          answer: 'we go swimming in the pool',
          nextId: 'incapitalLetterFullStopcorrectq9',
        },
        {
          answer: "We Go swimming in the pool",
          nextId: 'incapitalLetterFullStopcorrectq9',
        },
        {
          answer: "We go swimming in the pool.",
          nextId: 'capitalLetterFullStopcorrectq9',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq9: {
    botPrompt: 'Hurray! <strong>We go swimming in the pool.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[9],
      },
    ],
    },
    incapitalLetterFullStopcorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"We go swimming in the pool."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[9],
      },
    ],
    },
    
    
    //10
    ['capitalLetterFullStop'+shuffledNumbers[9]]: {
    botPrompt: 'she has a big smile on her face',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['She has a big smile on her face?', 'She has a big smile on her face.', "She Has a big smile on her face","she has a big smile on her face."]),
      answers: [
        {
          answer: 'She has a big smile on her face?',
          nextId: 'incapitalLetterFullStopcorrectq10',
        },
        {
          answer: 'She has a big smile on her face.',
          nextId: 'capitalLetterFullStopcorrectq10',
        },
        {
          answer: "She Has a big smile on her face",
          nextId: 'incapitalLetterFullStopcorrectq10',
        },
        {
          answer: "she has a big smile on her face.",
          nextId: 'incapitalLetterFullStopcorrectq10',
        },
      ],
    
    },
    
    capitalLetterFullStopcorrectq10: {
    botPrompt: 'Hurray! <strong>She has a big smile on her face.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[10],
      },
    ],
    },
    incapitalLetterFullStopcorrectq10: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"She has a big smile on her face."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[10],
      },
    ],
    },
    
    //11
    ['capitalLetterFullStop'+shuffledNumbers[10]]: {
    botPrompt: 'i see a bird in the tree',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['I see a bird in the Tree.', 'i see a bird in the tree', "I See a bird in the tree","I see a bird in the tree."]),
      answers: [
        {
          answer: 'I see a bird in the Tree.',
          nextId: 'incapitalLetterFullStopcorrectq11',
        },
        {
          answer: 'i see a bird in the tree',
          nextId: 'incapitalLetterFullStopcorrectq11',
        },
        {
          answer: "I See a bird in the tree",
          nextId: 'incapitalLetterFullStopcorrectq11',
        },
        {
          answer: "I see a bird in the tree.",
          nextId: 'capitalLetterFullStopcorrectq11',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq11: {
    botPrompt: 'Hurray! <strong>I see a bird in the tree.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[11],
      },
    ],
    },
    incapitalLetterFullStopcorrectq11: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I see a bird in the tree."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[11],
      },
    ],
    },
    
    //12
    ['capitalLetterFullStop'+shuffledNumbers[11]]: {
    botPrompt: 'they enjoy playing games',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['They enjoy playing games..', 'They enjoy playing games.', "they enjoy playing games","they enjoy playing games?"]),
      answers: [
        {
          answer: 'They enjoy playing games..',
          nextId: 'incapitalLetterFullStopcorrectq12',
        },
        {
          answer: 'They enjoy playing games.',
          nextId: 'capitalLetterFullStopcorrectq12',
        },
        {
          answer: "they enjoy playing games",
          nextId: 'incapitalLetterFullStopcorrectq12',
        },
        {
          answer: "they enjoy playing games?",
          nextId: 'incapitalLetterFullStopcorrectq12',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq12: {
    botPrompt: 'Hurray! <strong>They enjoy playing games.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[12],
      },
    ],
    },
    incapitalLetterFullStopcorrectq12: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"They enjoy playing games."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[12],
      },
    ],
    },
    
    //13
    ['capitalLetterFullStop'+shuffledNumbers[12]]: {
    botPrompt: 'my mom makes tasty food.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['my mom makes tasty food.', 'my mom makes tasty food..', "My mom makes tasty food.","My mom makes tasty Food."]),
      answers: [
        {
          answer: 'my mom makes tasty food.',
          nextId: 'incapitalLetterFullStopcorrectq13',
        },
        {
          answer: 'my mom makes tasty food..',
          nextId: 'incapitalLetterFullStopcorrectq13',
        },
        {
          answer: "My mom makes tasty food.",
          nextId: 'capitalLetterFullStopcorrectq13',
        },
        {
          answer: "My mom makes tasty Food.",
          nextId: 'incapitalLetterFullStopcorrectq13',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq13: {
    botPrompt: 'Hurray! <strong>My mom makes tasty food.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[13],
      },
    ],
    },
    incapitalLetterFullStopcorrectq13: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My mom makes tasty food."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[13],
      },
    ],
    },
    
    //14
    ['capitalLetterFullStop'+shuffledNumbers[13]]: {
    botPrompt: 'the cat is sleeping on the mat',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['the cat is sleeping on the Mat.', 'The cat is sleeping on the mat', "the cat is sleeping on the mat","The cat is sleeping on the mat."]),
      answers: [
        {
          answer: 'the cat is sleeping on the Mat.',
          nextId: 'incapitalLetterFullStopcorrectq14',
        },
        {
          answer: 'The cat is sleeping on the mat',
          nextId: 'incapitalLetterFullStopcorrectq14',
        },
        {
          answer: "the cat is sleeping on the mat",
          nextId: 'incapitalLetterFullStopcorrectq14',
        },
        {
          answer: "The cat is sleeping on the mat.",
          nextId: 'capitalLetterFullStopcorrectq14',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq14: {
    botPrompt: 'Hurray! <strong>The cat is sleeping on the mat.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[14],
      },
    ],
    },
    incapitalLetterFullStopcorrectq14: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"The cat is sleeping on the mat."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[14],
      },
    ],
    },
    
    
    //15
    ['capitalLetterFullStop'+shuffledNumbers[14]]: {
    botPrompt: 'this is  a bird',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['this is  a bird', 'this is  a bird?', "This is  a bird.","this is  a bird."]),
      answers: [
        {
          answer: 'this is  a bird',
          nextId: 'incapitalLetterFullStopcorrectq15',
        },
        {
          answer: 'this is  a bird?',
          nextId: 'incapitalLetterFullStopcorrectq15',
        },
        {
          answer: "This is a bird.",
          nextId: 'capitalLetterFullStopcorrectq15',
        },
        {
          answer: "this is  a bird.",
          nextId: 'incapitalLetterFullStopcorrectq15',
        },
      ],
    },
    
    capitalLetterFullStopcorrectq15: {
    botPrompt: 'Hurray! <strong>This is a bird.</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[15],
      },
    ],
    },
    incapitalLetterFullStopcorrectq15: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"This is a bird."</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[15],
      },
    ],
    },
    
    //16
    ['capitalLetterFullStop'+shuffledNumbers[15]]: {
      botPrompt: 'i have a cat',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Correct', 'Incorrect']),
      answers: [
        {
          answer: 'Correct',
          nextId: 'incapitalLetterFullStopcorrectq16',
        },
        {
          answer: 'Incorrect',
          nextId: 'capitalLetterFullStopcorrectq16',
        },
  
      ],
    },
    capitalLetterFullStopcorrectq16: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> 😎',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[16],
        },
      ],
    },
    incapitalLetterFullStopcorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[16],
        },
      ],
    },
    
    //17
    ['capitalLetterFullStop'+shuffledNumbers[16]]: {
    botPrompt: 'my favorite color is blue',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'inCorrect']),
      answers: [
        {
          answer: 'Correct',
          nextId: 'incapitalLetterFullStopcorrectq17',
        },
        {
          answer: 'inCorrect',
          nextId: 'capitalLetterFullStopcorrectq17',
        },
  
      ],
    },
    capitalLetterFullStopcorrectq17: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>inCorrect</strong> 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[17],
      },
    ],
    },
    incapitalLetterFullStopcorrectq17: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"inCorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[17],
      },
    ],
    },
    
    //18
    ['capitalLetterFullStop'+shuffledNumbers[17]]: {
    botPrompt: 'she likes to play soccer in the park   ',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq18',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq18',
      },
  
    ],
    },
    capitalLetterFullStopcorrectq18: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[18],
      },
    ],
    },
    incapitalLetterFullStopcorrectq18: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[18],
      },
    ],
    },
    
    //19
    ['capitalLetterFullStop'+shuffledNumbers[18]]: {
    botPrompt: 'the dog barks loudly at night',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq19',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq19',
      },
  
    ],
    },
    capitalLetterFullStopcorrectq19: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> Answers! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[19],
      },
    ],
    },
    incapitalLetterFullStopcorrectq19: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[19],
      },
    ],
    },
    
    //20
    ['capitalLetterFullStop'+shuffledNumbers[19]]: {
    botPrompt: 'they go to school every day',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq20',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq20',
      },
  
    ],
    },
    capitalLetterFullStopcorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Incorrect</strong> 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[20],
      },
    ],
    },
    incapitalLetterFullStopcorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[20],
      },
    ],
    },
    
    //21
    ["capitalLetterFullStop"+shuffledNumbers[20]]: {
      botPrompt: "my brother's name is Alex",
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq21',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq21',
      },
  
    ],
    },
    capitalLetterFullStopcorrectq21: {
      botPrompt: 'Hurray <strong>Incorrect</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[21],
        },
      ],
    },
    incapitalLetterFullStopcorrectq21: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[21],
        },
      ],
    },
    
    //22
    ['capitalLetterFullStop'+shuffledNumbers[21]]: {
      botPrompt: 'we had a picnic at the beach last weekend',
      type: RTypes.TRANSFORMED_TEXT,
    
      input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq22',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq22',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq22: {
      botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[22],
        },
      ],
    },
    incapitalLetterFullStopcorrectq22: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
      answers: [
        {
          nextId: 'capitalLetterFullStop'+shuffledNumbers[22],
        },
      ],
    },
    
    //23
    ['capitalLetterFullStop'+shuffledNumbers[22]]: {
    botPrompt: "the sun is shining brightly in the sky",
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq23',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq23',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq23: {
    botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[23],
      },
    ],
    },
    incapitalLetterFullStopcorrectq23: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[23],
      },
    ],
    },
    
    //24
    ['capitalLetterFullStop'+shuffledNumbers[23]]: {
    botPrompt: 'my mom makes delicious pancakes for breakfast',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq24',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq24',
      },
  
    ],
    },
  
    capitalLetterFullStopcorrectq24: {
    botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[24],
      },
    ],
    },
    incapitalLetterFullStopcorrectq24: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[24],
      },
    ],
    },
    
    //25
    ['capitalLetterFullStop'+shuffledNumbers[24]]: {
    botPrompt: 'they are going on a trip to the zoo',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'incapitalLetterFullStopcorrectq25',
      },
      {
        answer: 'Incorrect',
        nextId: 'capitalLetterFullStopcorrectq25',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq25: {
    botPrompt: 'Hurray! <strong>Incorrect</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[25],
      },
    ],
    },
    incapitalLetterFullStopcorrectq25: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Incorrect"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[25],
      },
    ],
    },
    
    //26
    ['capitalLetterFullStop'+shuffledNumbers[25]]: {
    botPrompt: 'The sun is shining brightly in the sky.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq26',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq26',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq26: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[26],
      },
    ],
    },
    incapitalLetterFullStopcorrectq26: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[26],
      },
    ],
    },
    
    //27
    ['capitalLetterFullStop'+shuffledNumbers[26]]: {
    botPrompt: 'My favorite color is blue.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
      answers: [
        {
          answer: 'Correct',
          nextId: 'capitalLetterFullStopcorrectq27',
        },
        {
          answer: 'Incorrect',
          nextId: 'incapitalLetterFullStopcorrectq27',
        },
  
      ],
    },
    
    capitalLetterFullStopcorrectq27: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[27],
      },
    ],
    },
    incapitalLetterFullStopcorrectq27: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[27],
      },
    ],
    },
    
    
    //28
    ['capitalLetterFullStop'+shuffledNumbers[27]]: {
    botPrompt: 'She likes to play soccer in the park.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq28',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq28',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq28: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[28],
      },
    ],
    },
    incapitalLetterFullStopcorrectq28: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[28],
      },
    ],
    },
    
    //29
    ['capitalLetterFullStop'+shuffledNumbers[28]]: {
    botPrompt: 'We had a picnic at the beach last weekend.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Correct', 'Incorrect']),
      answers: [
        {
          answer: 'Correct',
          nextId: 'capitalLetterFullStopcorrectq29',
        },
        {
          answer: 'Incorrect',
          nextId: 'incapitalLetterFullStopcorrectq29',
        },
  
      ],
    },
    
    capitalLetterFullStopcorrectq29: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[29],
      },
    ],
    },
    incapitalLetterFullStopcorrectq29: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[29],
      },
    ],
    },
    
  
    //30
    ['capitalLetterFullStop'+shuffledNumbers[29]]: {
    botPrompt: "My brother's name is Alex.",
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq30',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq30',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq30: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[30],
      },
    ],
    },
    incapitalLetterFullStopcorrectq30: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[30],
      },
    ],
    },
    
    //31
    ['capitalLetterFullStop'+shuffledNumbers[30]]: {
    botPrompt: 'They go to school every day.',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Correct', 'Incorrect']),
      answers: [
        {
          answer: 'Correct',
          nextId: 'capitalLetterFullStopcorrectq31',
        },
        {
          answer: 'Incorrect',
          nextId: 'incapitalLetterFullStopcorrectq31',
        },
  
      ],
    },
    
    capitalLetterFullStopcorrectq31: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[31],
      },
    ],
    },
    incapitalLetterFullStopcorrectq31: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[31],
      },
    ],
    },
    
    //32
    ['capitalLetterFullStop'+shuffledNumbers[31]]: {
    botPrompt: 'I have a pet dog named Max.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq32',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq32',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq32: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[32],
      },
    ],
    },
    incapitalLetterFullStopcorrectq32: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[32],
      },
    ],
    },
    
    //33
    ['capitalLetterFullStop'+shuffledNumbers[32]]: {
    botPrompt: 'The cat is sleeping on the couch.',
    type: RTypes.TRANSFORMED_TEXT,
    
    
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq33',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq33',
      },
  
    ],
    },
    
    capitalLetterFullStopcorrectq33: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[33],
      },
    ],
    },
    incapitalLetterFullStopcorrectq33: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[33],
      },
    ],
    },
    
    //34
    ['capitalLetterFullStop'+shuffledNumbers[33]]: {
    botPrompt: 'We are going on a trip to the zoo.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Correct', 'Incorrect']),
      answers: [
        {
          answer: 'Correct',
          nextId: 'capitalLetterFullStopcorrectq34',
        },
        {
          answer: 'Incorrect',
          nextId: 'incapitalLetterFullStopcorrectq34',
        },
  
      ],
    },
    
    capitalLetterFullStopcorrectq34: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[34],
      },
    ],
    },
    incapitalLetterFullStopcorrectq34: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'capitalLetterFullStop'+shuffledNumbers[34],
      },
    ],
    },
    
    
    //35
    ['capitalLetterFullStop'+shuffledNumbers[34]]: {
    botPrompt: 'The book on the shelf is very interesting.',
    type: RTypes.TRANSFORMED_TEXT,
    
    
    input: selectField(['Correct', 'Incorrect']),
    answers: [
      {
        answer: 'Correct',
        nextId: 'capitalLetterFullStopcorrectq35',
      },
      {
        answer: 'Incorrect',
        nextId: 'incapitalLetterFullStopcorrectq35',
      },
    ],
    },
    
    capitalLetterFullStopcorrectq35: {
    botPrompt: 'Hurray! <strong>Correct</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocontinue25',
      },
    ],
    },
    incapitalLetterFullStopcorrectq35: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Correct"</strong>',
    answers: [
      {
        nextId: 'wishtocontinue25',
      },
    ],
    },
    
  
    
  
    //endcapitalLetterFullStopletter
  
    wishtocontinue25: {
      botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
      input: selectField(['Yes!', 'No!']),
      answers: [
          {
            answer: 'Yes!',
            nextId: 'day26',
          },
          {
            answer: 'No!',
            nextId: 'endConv',
          },
      ],
    },
    
  
  
    day26: {
      botPrompt: '<strong> Day 26 : </strong> Learning opposites help in adding to a childs vocabulary and understanding how the world around functions.',
      answers: [
              { nextId: 'day26link' },
      ],
    },
    
    day26link: {
      botPrompt: 'https://www.youtube.com/watch?v=wpSUK7FnSVA&list=PLhVY3NLECmvXWnTL_xjBImY2ZbKD2XOyp&index=6&pp=iAQB',
      type: RTypes.LINK,
      answers: [
        {
          nextId: 'day262comment',
        },
      ],
    },
    day262comment: {
      botPrompt: 'Opposite Song',
      answers: [
              { nextId: 'day262link' },
      ],
    },
    day262link: {
      botPrompt: 'https://youtube.com/shorts/ywooSL_Kr1Q',
      type: RTypes.LINK,
      answers: [
        {
          nextId: 'day263link',
        },
      ],
    },
    day263link: {
      botPrompt: 'https://youtu.be/cwRddLXUnr8',
      type: RTypes.LINK,
      answers: [
        {
          nextId: 'day263comment',
        },
      ],
    },
    day263comment: {
      botPrompt: 'Let’s look into the pages of the book',
      answers: [
              { nextId: 'day263link' },
      ],
    },
    day263link: {
      botPrompt: 'https://drive.google.com/file/d/1MdSOrmqghLRHbhcES9M1liAEfaPC2Yqz/view?usp=sharing',
      type: RTypes.LINK,
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[0] ,
        },
      ],
    },
    
    //opposites
    
    
    ["opposites"+shuffleArraytwofive[0]]: {
        botPrompt: 'Opposite of "big"',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Small', 'Tall', "Fat","Thin"]),
        answers: [
          {
            answer: 'Small',
            nextId: 'oppositescorrect',
          },
          {
            answer: 'Tall',
            nextId: 'inoppositescorrect',
          },
          {
            answer: "Fat",
            nextId: 'inoppositescorrect',
          },
          {
            answer: "Thin",
            nextId: 'inoppositescorrect',
          },
        ],
      },
      oppositescorrect: {
        botPrompt: 'Hurray <strong>Small</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[1],
          },
        ],
      },
      inoppositescorrect: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Small"</strong>',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[1],
          },
        ],
      },
      
      ['opposites'+shuffleArraytwofive[1]]: {
        botPrompt: 'Opposite of "happy"',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['brave', 'Funny', "sad","Angry"]),
        answers: [
          {
            answer: 'brave',
            nextId: 'inoppositescorrectq2',
          },
          {
            answer: 'Funny',
            nextId: 'inoppositescorrectq2',
          },
          {
            answer: "sad",
            nextId: 'oppositescorrectq2',
          },
          {
            answer: "Angry",
            nextId: 'inoppositescorrectq2',
          },
        ],
      },
      
      oppositescorrectq2: {
        botPrompt: 'Hurray! <strong>sad</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[2],
          },
        ],
      },
      inoppositescorrectq2: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sad"</strong>',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[2],
          },
        ],
      },
      
      //3
      ['opposites'+shuffleArraytwofive[2]]: {
      botPrompt: 'Opposite of "hot"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Fast', 'cold', "Loud","Bright"]),
        answers: [
          {
            answer: 'Fast',
            nextId: 'inoppositescorrectq3',
          },
          {
            answer: 'cold',
            nextId: 'oppositescorrectq3',
          },
          {
            answer: "Loud",
            nextId: 'inoppositescorrectq3',
          },
          {
            answer: "Bright",
            nextId: 'inoppositescorrectq3',
          },
        ],
      },
      
      oppositescorrectq3: {
      botPrompt: 'Hurray! <strong>cold</strong> is the correct answer ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[3],
        },
      ],
      },
      inoppositescorrectq3: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"cold"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[3],
        },
      ],
      },
      
      //4
      ['opposites'+shuffleArraytwofive[3]]: {
      botPrompt: 'Opposite of "up"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Down', 'Left', "Right","Front"]),
        answers: [
          {
            answer: 'Down',
            nextId: 'oppositescorrectq4',
          },
          {
            answer: 'Left',
            nextId: 'inoppositescorrectq4',
          },
          {
            answer: "Right",
            nextId: 'inoppositescorrectq4',
          },
          {
            answer: "Front",
            nextId: 'inoppositescorrectq4',
          },
        ],
      },
      
      oppositescorrectq4: {
      botPrompt: 'Hurray! <strong>Down</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[4],
        },
      ],
      },
      inoppositescorrectq4: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Down"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[4],
        },
      ],
      },
      
      //5
      ['opposites'+shuffleArraytwofive[4]]: {
      botPrompt: 'Opposite of "day"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Night', 'Sun', "Moon","Star"]),
        answers: [
          {
            answer: 'Night',
            nextId: 'oppositescorrectq5',
          },
          {
            answer: 'Sun',
            nextId: 'inoppositescorrectq5',
          },
          {
            answer: "Moon",
            nextId: 'inoppositescorrectq5',
          },
          {
            answer: "Star",
            nextId: 'inoppositescorrectq5',
          },
        ],
      },
      
      oppositescorrectq5: {
      botPrompt: 'Hurray! <strong>Night</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[5],
        },
      ],
      },
      inoppositescorrectq5: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Night"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[5],
        },
      ],
      },
      
      //6
      ['opposites'+shuffleArraytwofive[5]]: {
      botPrompt: 'Opposite of "slow"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Deep', 'High', "fast","Wide"]),
        answers: [
          {
            answer: 'Deep',
            nextId: 'inoppositescorrectqfast',
          },
          {
            answer: 'High',
            nextId: 'inoppositescorrectq6',
          },
          {
            answer: "fast",
            nextId: 'oppositescorrectq6',
          },
          {
            answer: "Wide",
            nextId: 'inoppositescorrectq6',
          },
        ],
      },
      
      oppositescorrectq6: {
      botPrompt: 'Hurray! <strong>fast</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[6],
        },
      ],
      },
      inoppositescorrectq6: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"fast"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[6],
        },
      ],
      },
      
      //7
      ['opposites'+shuffleArraytwofive[6]]: {
      botPrompt: 'Opposite of "near"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['big', 'far', "Loud","Soft"]),
        answers: [
          {
            answer: 'big',
            nextId: 'inoppositescorrectq7',
          },
          {
            answer: 'far',
            nextId: 'oppositescorrectq7',
          },
          {
            answer: "Loud",
            nextId: 'inoppositescorrectq7',
          },
          {
            answer: "Soft",
            nextId: 'inoppositescorrectq7',
          },
        ],
      },
      
      oppositescorrectq7: {
      botPrompt: 'Hurray! <strong>far</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[7],
        },
      ],
      },
      inoppositescorrectq7: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"far"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[7],
        },
      ],
      },
      
      
      //8
      ['opposites'+shuffleArraytwofive[7]]: {
      botPrompt: 'Opposite of "close"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Open', 'Close', "Clear","Full"]),
        answers: [
          {
            answer: 'Open',
            nextId: 'oppositescorrectq8',
          },
          {
            answer: 'Close',
            nextId: 'inoppositescorrectq8',
          },
          {
            answer: "Clear",
            nextId: 'inoppositescorrectq8',
          },
          {
            answer: "Full",
            nextId: 'inoppositescorrectq8',
          },
        ],
      },
      
      oppositescorrectq8: {
      botPrompt: 'Hurray! <strong>Open</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[8],
        },
      ],
      },
      inoppositescorrectq8: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Open"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[8],
        },
      ],
      },
      
      //9
      ['opposites'+shuffleArraytwofive[8]]: {
      botPrompt: 'Opposite of "empty"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Sad', 'Warm', "Full","Dry"]),
        answers: [
          {
            answer: 'Sad',
            nextId: 'inoppositescorrectq9',
          },
          {
            answer: 'Warm',
            nextId: 'inoppositescorrectq9',
          },
          {
            answer: "Full",
            nextId: 'oppositescorrectq9',
          },
          {
            answer: "Dry",
            nextId: 'inoppositescorrectq9',
          },
        ],
      },
      
      oppositescorrectq9: {
      botPrompt: 'Hurray! <strong>Full</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[9],
        },
      ],
      },
      inoppositescorrectq9: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Full"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[9],
        },
      ],
      },
      
      
      //10
      ['opposites'+shuffleArraytwofive[9]]: {
      botPrompt: 'Opposite of "clean"',
      type: RTypes.TRANSFORMED_TEXT,
    
      input: selectField(['Dirty', 'Funny', "Brave","Angry"]),
        answers: [
          {
            answer: 'Dirty',
            nextId: 'oppositescorrectqAngry',
          },
          {
            answer: 'Funny',
            nextId: 'inoppositescorrectq10',
          },
          {
            answer: "Brave",
            nextId: 'inoppositescorrectq10',
          },
          {
            answer: "10",
            nextId: 'inoppositescorrectq10',
          },
        ],
      
      },
      
      oppositescorrectq10: {
      botPrompt: 'Hurray! <strong>Dirty</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[10],
        },
      ],
      },
      inoppositescorrectq10: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dirty"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[10],
        },
      ],
      },
      
      //11
      ['opposites'+shuffleArraytwofive[10]]: {
      botPrompt: 'Opposite of "cold"',
      type: RTypes.TRANSFORMED_TEXT,
    
      input: selectField(['Hot', 'Slow', "Quiet","Dark"]),
        answers: [
          {
            answer: 'Hot',
            nextId: 'inoppositescorrectq11',
          },
          {
            answer: 'Slow',
            nextId: 'inoppositescorrectq11',
          },
          {
            answer: "Quiet",
            nextId: 'oppositescorrectq11',
          },
          {
            answer: "Dark",
            nextId: 'inoppositescorrectq11',
          },
        ],
      },
      
      oppositescorrectq11: {
      botPrompt: 'Hurray! <strong>Quiet</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[11],
        },
      ],
      },
      inoppositescorrectq11: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Quiet"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[11],
        },
      ],
      },
      
      //12
      ['opposites'+shuffleArraytwofive[11]]: {
      botPrompt: 'Opposite of "wet"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Soft', 'Small', "Loud","Dry"]),
        answers: [
          {
            answer: 'Soft',
            nextId: 'inoppositescorrectq12',
          },
          {
            answer: 'Small',
            nextId: 'inoppositescorrectq12',
          },
          {
            answer: "Loud",
            nextId: 'inoppositescorrectq12',
          },
          {
            answer: "Dry",
            nextId: 'oppositescorrectq12',
          },
        ],
      },
      
      oppositescorrectq12: {
      botPrompt: 'Hurray! <strong>Dry</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[12],
        },
      ],
      },
      inoppositescorrectq12: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dry"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[12],
        },
      ],
      },
      
      //13
      ['opposites'+shuffleArraytwofive[12]]: {
      botPrompt: 'Opposite of "fast"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Slow', 'Tall', "Fat","Thin"]),
        answers: [
          {
            answer: 'Slow',
            nextId: 'oppositescorrectq13',
          },
          {
            answer: 'Tall',
            nextId: 'inoppositescorrectq13',
          },
          {
            answer: "Fat",
            nextId: 'inoppositescorrectq13',
          },
          {
            answer: "Thin",
            nextId: 'inoppositescorrectq13',
          },
        ],
      },
      
      oppositescorrectq13: {
      botPrompt: 'Hurray! <strong>Slow</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[13],
        },
      ],
      },
      inoppositescorrectq13: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Slow"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[13],
        },
      ],
      },
      
      //14
      ['opposites'+shuffleArraytwofive[13]]: {
      botPrompt: 'Opposite of "light"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Dark', 'Heavy', "Short","Empty"]),
        answers: [
          {
            answer: 'Dark',
            nextId: 'oppositescorrectq14',
          },
          {
            answer: 'Heavy',
            nextId: 'inoppositescorrectq14',
          },
          {
            answer: "Short",
            nextId: 'inoppositescorrectq14',
          },
          {
            answer: "Empty",
            nextId: 'inoppositescorrectq14',
          },
        ],
      },
      
      oppositescorrectq14: {
      botPrompt: 'Hurray! <strong>Dark</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[14],
        },
      ],
      },
      inoppositescorrectq14: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dark"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[14],
        },
      ],
      },
      
      
      //15
      ['opposites'+shuffleArraytwofive[14]]: {
      botPrompt: 'Opposite of "in"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Down', 'Up', "Out","Front"]),
        answers: [
          {
            answer: 'Down',
            nextId: 'inoppositescorrectq15',
          },
          {
            answer: 'Up',
            nextId: 'inoppositescorrectq15',
          },
          {
            answer: "Out",
            nextId: 'oppositescorrectq15',
          },
          {
            answer: "Front",
            nextId: 'inoppositescorrectq15',
          },
        ],
      },
    
      oppositescorrectq15: {
      botPrompt: 'Hurray! <strong>Out</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[15],
        },
      ],
      },
      inoppositescorrectq15: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Out"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[15],
        },
      ],
      },
      
      //16
      ['opposites'+shuffleArraytwofive[15]]: {
        botPrompt: 'Opposite of "new"',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Old', 'Fast', "Bright","Empty"]),
        answers: [
          {
            answer: 'Old',
            nextId: 'oppositescorrectq16',
          },
          {
            answer: 'Fast',
            nextId: 'inoppositescorrectq16',
          },
          {
            answer: "Bright",
            nextId: 'inoppositescorrectq16',
          },
          {
            answer: "Empty",
            nextId: 'inoppositescorrectq16',
          },
        ],
      },
      oppositescorrectq16: {
        botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Old</strong> 😎',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[16],
          },
        ],
      },
      inoppositescorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Old"</strong>',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[16],
          },
        ],
      },
      
      //17
      ['opposites'+shuffleArraytwofive[16]]: {
      botPrompt: 'Opposite of "happy"',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Sad', 'Funny', "Brave","Angry"]),
        answers: [
          {
            answer: 'Sad',
            nextId: 'oppositescorrectq17',
          },
          {
            answer: 'Funny',
            nextId: 'inoppositescorrectq17',
          },
          {
            answer: "Brave",
            nextId: 'inoppositescorrectq17',
          },
          {
            answer: "Angry",
            nextId: 'inoppositescorrectq17',
          },
        ],
      },
      oppositescorrectq17: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Sad</strong> 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[17],
        },
      ],
      },
      inoppositescorrectq17: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sad"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[17],
        },
      ],
      },
      
      //18
      ['opposites'+shuffleArraytwofive[17]]: {
      botPrompt: 'Opposite of "quiet".   ',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Far', 'Soft', "Loud","Near"]),
      answers: [
        {
          answer: 'Far',
          nextId: 'inoppositescorrectq18',
        },
        {
          answer: 'Soft',
          nextId: 'inoppositescorrectq18',
        },
        {
          answer: "Loud",
          nextId: 'oppositescorrectq18',
        },
        {
          answer: "Near",
          nextId: 'inoppositescorrectq18',
        },
      ],
      },
      oppositescorrectq18: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Loud</strong> 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[18],
        },
      ],
      },
      inoppositescorrectq18: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Loud"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[18],
        },
      ],
      },
      
      //19
      ['opposites'+shuffleArraytwofive[18]]: {
      botPrompt: 'Opposite of "thick"',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Heavy', 'Fast', "Thin","Tall"]),
      answers: [
        {
          answer: 'Heavy',
          nextId: 'inoppositescorrectq19',
        },
        {
          answer: 'Fast',
          nextId: 'inoppositescorrectq19',
        },
        {
          answer: "Thin",
          nextId: 'oppositescorrectq19',
        },
        {
          answer: "Tall",
          nextId: 'inoppositescorrectq19',
        },
      ],
      },
      oppositescorrectq19: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Thin</strong> Answers! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[19],
        },
      ],
      },
      inoppositescorrectq19: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Thin"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[19],
        },
      ],
      },
      
      //20
      ['opposites'+shuffleArraytwofive[19]]: {
      botPrompt: 'Opposite of "long"',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Short', 'Young', "Soft","Full"]),
      answers: [
        {
          answer: 'Short',
          nextId: 'oppositescorrectq20',
        },
        {
          answer: 'Young',
          nextId: 'inoppositescorrectq20',
        },
        {
          answer: "Soft",
          nextId: 'inoppositescorrectq20',
        },
        {
          answer: "Full",
          nextId: 'inoppositescorrectq20',
        },
      ],
      },
      oppositescorrectq20: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Short</strong> 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[20],
        },
      ],
      },
      inoppositescorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Short"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[20],
        },
      ],
      },
      
      //21
      ["opposites"+shuffleArraytwofive[20]]: {
        botPrompt: 'Short',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['Short', 'Young', "Soft","Full"]),
      answers: [
        {
          answer: 'Short',
          nextId: 'inoppositescorrectq21',
        },
        {
          answer: 'Young',
          nextId: 'inoppositescorrectq21',
        },
        {
          answer: "Soft",
          nextId: 'oppositescorrectq21',
        },
        {
          answer: "Full",
          nextId: 'inoppositescorrectq21',
        },
      ],
      },
      oppositescorrectq21: {
        botPrompt: 'Hurray <strong>Soft</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[21],
          },
        ],
      },
      inoppositescorrectq21: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Soft"</strong>',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[21],
          },
        ],
      },
      
      //22
      ['opposites'+shuffleArraytwofive[21]]: {
        botPrompt: 'Opposite of "old"',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['Fast', 'young', "Loud","Bright"]),
      answers: [
        {
          answer: 'Fast',
          nextId: 'inoppositescorrectq22',
        },
        {
          answer: 'young',
          nextId: 'oppositescorrectq22',
        },
        {
          answer: "Loud",
          nextId: 'inoppositescorrectq22',
        },
        {
          answer: "Bright",
          nextId: 'inoppositescorrectq22',
        },
      ],
      },
      
      oppositescorrectq22: {
        botPrompt: 'Hurray! <strong>young</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[22],
          },
        ],
      },
      inoppositescorrectq22: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"young"</strong>',
        answers: [
          {
            nextId: 'opposites'+shuffleArraytwofive[22],
          },
        ],
      },
      
      //23
      ['opposites'+shuffleArraytwofive[22]]: {
      botPrompt: 'Opposite of "boy"',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Short', 'Young', "girl","Full"]),
      answers: [
        {
          answer: 'Short',
          nextId: 'inoppositescorrectq23',
        },
        {
          answer: 'Young',
          nextId: 'inoppositescorrectq23',
        },
        {
          answer: "girl",
          nextId: 'oppositescorrectq23',
        },
        {
          answer: "Full",
          nextId: 'inoppositescorrectq23',
        },
      ],
      },
      
      oppositescorrectq23: {
      botPrompt: 'Hurray! <strong>girl</strong> is the correct answer ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[23],
        },
      ],
      },
      inoppositescorrectq23: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"girl"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[23],
        },
      ],
      },
      
      //24
      ['opposites'+shuffleArraytwofive[23]]: {
      botPrompt: 'Opposite of "awake"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['Asleep', 'Young', "Soft","salt"]),
      answers: [
        {
          answer: 'Asleep',
          nextId: 'oppositescorrectq24',
        },
        {
          answer: 'Young',
          nextId: 'inoppositescorrectq24',
        },
        {
          answer: "Soft",
          nextId: 'inoppositescorrectq24',
        },
        {
          answer: "salt",
          nextId: 'inoppositescorrectq24',
        },
      ],
      },
      
      oppositescorrectq24: {
      botPrompt: 'Hurray! <strong>Asleep</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[24],
        },
      ],
      },
      inoppositescorrectq24: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Asleep"</strong>',
      answers: [
        {
          nextId: 'opposites'+shuffleArraytwofive[24],
        },
      ],
      },
      
      //25
      ['opposites'+shuffleArraytwofive[24]]: {
      botPrompt: 'Opposite of "sour"',
      type: RTypes.TRANSFORMED_TEXT,
      
      input: selectField(['hot ', 'cold', "sweet","Bright"]),
      answers: [
        {
          answer: 'hot ',
          nextId: 'inoppositescorrectq25',
        },
        {
          answer: 'cold',
          nextId: 'inoppositescorrectq25',
        },
        {
          answer: "sweet",
          nextId: 'oppositescorrectq25',
        },
        {
          answer: "Bright",
          nextId: 'inoppositescorrectq25',
        },
      ],
      },
    
      oppositescorrectq25: {
      botPrompt: 'Hurray! <strong>sweet</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocontinue26',
        },
      ],
      },
      inoppositescorrectq25: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"sweet"</strong>',
      answers: [
        {
          nextId: 'wishtocontinue26',
        },
      ],
      },
      
    
      //endoppositesletter
  
  
      wishtocontinue26: {
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
  
  //shufflequestion
  
  
  //lotopposites
  
  
  ["opposites"+shuffleArraylot[0]]: {
    botPrompt: 'Opposite of "big"',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Small', 'Tall', "Fat","Thin"]),
    answers: [
      {
        answer: 'Small',
        nextId: 'oppositescorrect',
      },
      {
        answer: 'Tall',
        nextId: 'inoppositescorrect',
      },
      {
        answer: "Fat",
        nextId: 'inoppositescorrect',
      },
      {
        answer: "Thin",
        nextId: 'inoppositescorrect',
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
      },
      {
        answer: 'Funny',
        nextId: 'inoppositescorrectq2',
      },
      {
        answer: "sad",
        nextId: 'oppositescorrectq2',
      },
      {
        answer: "Angry",
        nextId: 'inoppositescorrectq2',
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
      },
      {
        answer: 'cold',
        nextId: 'oppositescorrectq3',
      },
      {
        answer: "Loud",
        nextId: 'inoppositescorrectq3',
      },
      {
        answer: "Bright",
        nextId: 'inoppositescorrectq3',
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
      },
      {
        answer: 'Left',
        nextId: 'inoppositescorrectq4',
      },
      {
        answer: "Right",
        nextId: 'inoppositescorrectq4',
      },
      {
        answer: "Front",
        nextId: 'inoppositescorrectq4',
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
      },
      {
        answer: 'Sun',
        nextId: 'inoppositescorrectq5',
      },
      {
        answer: "Moon",
        nextId: 'inoppositescorrectq5',
      },
      {
        answer: "Star",
        nextId: 'inoppositescorrectq5',
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
      },
      {
        answer: 'High',
        nextId: 'inoppositescorrectq6',
      },
      {
        answer: "fast",
        nextId: 'oppositescorrectq6',
      },
      {
        answer: "Wide",
        nextId: 'inoppositescorrectq6',
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
      },
      {
        answer: 'far',
        nextId: 'oppositescorrectq7',
      },
      {
        answer: "Loud",
        nextId: 'inoppositescorrectq7',
      },
      {
        answer: "Soft",
        nextId: 'inoppositescorrectq7',
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
      },
      {
        answer: 'Close',
        nextId: 'inoppositescorrectq8',
      },
      {
        answer: "Clear",
        nextId: 'inoppositescorrectq8',
      },
      {
        answer: "Full",
        nextId: 'inoppositescorrectq8',
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
      },
      {
        answer: 'Warm',
        nextId: 'inoppositescorrectq9',
      },
      {
        answer: "Full",
        nextId: 'oppositescorrectq9',
      },
      {
        answer: "Dry",
        nextId: 'inoppositescorrectq9',
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
      },
      {
        answer: 'Funny',
        nextId: 'inoppositescorrectq10',
      },
      {
        answer: "Brave",
        nextId: 'inoppositescorrectq10',
      },
      {
        answer: "10",
        nextId: 'inoppositescorrectq10',
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
      },
      {
        answer: 'Slow',
        nextId: 'inoppositescorrectq11',
      },
      {
        answer: "Quiet",
        nextId: 'oppositescorrectq11',
      },
      {
        answer: "Dark",
        nextId: 'inoppositescorrectq11',
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
      },
      {
        answer: 'Small',
        nextId: 'inoppositescorrectq12',
      },
      {
        answer: "Loud",
        nextId: 'inoppositescorrectq12',
      },
      {
        answer: "Dry",
        nextId: 'oppositescorrectq12',
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
      },
      {
        answer: 'Tall',
        nextId: 'inoppositescorrectq13',
      },
      {
        answer: "Fat",
        nextId: 'inoppositescorrectq13',
      },
      {
        answer: "Thin",
        nextId: 'inoppositescorrectq13',
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
      },
      {
        answer: 'Heavy',
        nextId: 'inoppositescorrectq14',
      },
      {
        answer: "Short",
        nextId: 'inoppositescorrectq14',
      },
      {
        answer: "Empty",
        nextId: 'inoppositescorrectq14',
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
      },
      {
        answer: 'Up',
        nextId: 'inoppositescorrectq15',
      },
      {
        answer: "Out",
        nextId: 'oppositescorrectq15',
      },
      {
        answer: "Front",
        nextId: 'inoppositescorrectq15',
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
      },
      {
        answer: 'Fast',
        nextId: 'inoppositescorrectq16',
      },
      {
        answer: "Bright",
        nextId: 'inoppositescorrectq16',
      },
      {
        answer: "Empty",
        nextId: 'inoppositescorrectq16',
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
      },
      {
        answer: 'Funny',
        nextId: 'inoppositescorrectq17',
      },
      {
        answer: "Brave",
        nextId: 'inoppositescorrectq17',
      },
      {
        answer: "Angry",
        nextId: 'inoppositescorrectq17',
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
    },
    {
      answer: 'Soft',
      nextId: 'inoppositescorrectq18',
    },
    {
      answer: "Loud",
      nextId: 'oppositescorrectq18',
    },
    {
      answer: "Near",
      nextId: 'inoppositescorrectq18',
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
    },
    {
      answer: 'Fast',
      nextId: 'inoppositescorrectq19',
    },
    {
      answer: "Thin",
      nextId: 'oppositescorrectq19',
    },
    {
      answer: "Tall",
      nextId: 'inoppositescorrectq19',
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
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq20',
    },
    {
      answer: "Soft",
      nextId: 'inoppositescorrectq20',
    },
    {
      answer: "Full",
      nextId: 'inoppositescorrectq20',
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
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq21',
    },
    {
      answer: "Soft",
      nextId: 'oppositescorrectq21',
    },
    {
      answer: "Full",
      nextId: 'inoppositescorrectq21',
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
    },
    {
      answer: 'young',
      nextId: 'oppositescorrectq22',
    },
    {
      answer: "Loud",
      nextId: 'inoppositescorrectq22',
    },
    {
      answer: "Bright",
      nextId: 'inoppositescorrectq22',
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
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq23',
    },
    {
      answer: "girl",
      nextId: 'oppositescorrectq23',
    },
    {
      answer: "Full",
      nextId: 'inoppositescorrectq23',
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
    },
    {
      answer: 'Young',
      nextId: 'inoppositescorrectq24',
    },
    {
      answer: "Soft",
      nextId: 'inoppositescorrectq24',
    },
    {
      answer: "salt",
      nextId: 'inoppositescorrectq24',
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
    },
    {
      answer: 'cold',
      nextId: 'inoppositescorrectq25',
    },
    {
      answer: "sweet",
      nextId: 'oppositescorrectq25',
    },
    {
      answer: "Bright",
      nextId: 'inoppositescorrectq25',
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
    },
    {
      answer: 'Red',
      nextId: 'colourscorrect',
    },
    {
      answer: "Green",
      nextId: 'incolourscorrect',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrect',
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
    },
    {
      answer: 'Yellow',
      nextId: 'colourscorrectq2',
    },
    {
      answer: "Purple",
      nextId: 'incolourscorrectq2',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq2',
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
    },
    {
      answer: 'Brown',
      nextId: 'incolourscorrectq3',
    },
    {
      answer: "White",
      nextId: 'incolourscorrectq3',
    },
    {
      answer: "Yellow",
      nextId: 'colourscorrectq3',
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
    },
    {
      answer: 'Black',
      nextId: 'incolourscorrectq4',
    },
    {
      answer: "Red",
      nextId: 'incolourscorrectq4',
    },
    {
      answer: "White",
      nextId: 'colourscorrectq4',
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
    },
    {
      answer: 'Purple',
      nextId: 'colourscorrectq5',
    },
    {
      answer: "Red",
      nextId: 'incolourscorrectq5',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq5',
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
    },
    {
      answer: 'Green',
      nextId: 'incolourscorrectq6',
    },
    {
      answer: "Purple",
      nextId: 'incolourscorrectq6',
    },
    {
      answer: "Red",
      nextId: 'colourscorrectq6',
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
    },
    {
      answer: 'Red',
      nextId: 'colourscorrectq7',
    },
    {
      answer: "Orange",
      nextId: 'colourscorrectq7',
    },
    {
      answer: "Pink",
      nextId: 'colourscorrectq7',
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
    },
    {
      answer: 'Orange',
      nextId: 'colourscorrectq8',
    },
    {
      answer: "Purple",
      nextId: 'incolourscorrectq8',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq8',
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
    },
    {
      answer: 'Black',
      nextId: 'colourscorrectq9',
    },
    {
      answer: "White",
      nextId: 'incolourscorrectq9',
    },
    {
      answer: "Green",
      nextId: 'incolourscorrectq9',
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
    },
    {
      answer: 'Orange',
      nextId: 'incolourscorrectq10',
    },
    {
      answer: "Green",
      nextId: 'incolourscorrectq10',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq10',
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
    },
    {
      answer: 'Orange',
      nextId: 'incolourscorrectq11',
    },
    {
      answer: "Purple",
      nextId: 'incolourscorrectq11',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq11',
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
    },
    {
      answer: 'Orange',
      nextId: 'incolourscorrectq12',
    },
    {
      answer: "Red",
      nextId: 'incolourscorrectq12',
    },
    {
      answer: "Yellow",
      nextId: 'colourscorrectq12',
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
    },
    {
      answer: 'Red',
      nextId: 'incolourscorrectq13',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq13',
    },
    {
      answer: "Pink",
      nextId: 'colourscorrectq13',
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
    },
    {
      answer: 'Green',
      nextId: 'colourscorrectq14',
    },
    {
      answer: "Purple",
      nextId: 'incolourscorrectq14',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq14',
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
    },
    {
      answer: 'Red',
      nextId: 'colourscorrectq15',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq15',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq15',
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
    },
    {
      answer: 'Red',
      nextId: 'incolourscorrectq16',
    },
    {
      answer: "Green",
      nextId: 'incolourscorrectq16',
    },
    {
      answer: "Pink",
      nextId: 'incolourscorrectq16',
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
    },
    {
      answer: 'Green',
      nextId: 'colourscorrectq17',
    },
    {
      answer: "Red",
      nextId: 'incolourscorrectq17',
    },
    {
      answer: "Yellow",
      nextId: 'incolourscorrectq17',
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
  },
  {
    answer: 'White',
    nextId: 'colourscorrectq18',
  },
  {
    answer: "Purple",
    nextId: 'incolourscorrectq18',
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq18',
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
  },
  {
    answer: 'Red',
    nextId: 'colourscorrectq19',
  },
  {
    answer: "Orange",
    nextId: 'colourscorrectq19',
  },
  {
    answer: "Yellow",
    nextId: 'colourscorrectq19',
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
  },
  {
    answer: 'Red',
    nextId: 'incolourscorrectq20',
  },
  {
    answer: "Green",
    nextId: 'incolourscorrectq20',
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq20',
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
  },
  {
    answer: 'Red',
    nextId: 'incolourscorrectq21',
  },
  {
    answer: "Yellow",
    nextId: 'incolourscorrectq21',
  },
  {
    answer: "White",
    nextId: 'colourscorrectq21',
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
  },
  {
    answer: 'Green',
    nextId: 'incolourscorrectq22',
  },
  {
    answer: "Purple",
    nextId: 'colourscorrectq22',
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq22',
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
  },
  {
    answer: 'Blue',
    nextId: 'incolourscorrectq23',
  },
  {
    answer: "Orange",
    nextId: 'colourscorrectq23',
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq23',
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
  },
  {
    answer: 'Green',
    nextId: 'colourscorrectq24',
  },
  {
    answer: "Orange",
    nextId: 'incolourscorrectq24',
  },
  {
    answer: "Pink",
    nextId: 'incolourscorrectq24',
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
  },
  {
    answer: 'Green',
    nextId: 'incolourscorrectq25',
  },
  {
    answer: "Brown",
    nextId: 'incolourscorrectq25',
  },
  {
    answer: "Yellow",
    nextId: 'colourscorrectq25',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrect',
    },
    {
      answer: "Ball",
      nextId: 'inrhymingWordscorrect',
    },
    {
      answer: "Sun",
      nextId: 'inrhymingWordscorrect',
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
    },
    {
      answer: 'Chair',
      nextId: 'inrhymingWordscorrectq2',
    },
    {
      answer: "Tree",
      nextId: 'inrhymingWordscorrectq2',
    },
    {
      answer: "Car",
      nextId: 'inrhymingWordscorrectq2',
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
    },
    {
      answer: 'Cup',
      nextId: 'inrhymingWordscorrectq3',
    },
    {
      answer: "Hat",
      nextId: 'inrhymingWordscorrectq3',
    },
    {
      answer: "Car",
      nextId: 'inrhymingWordscorrectq3',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq4',
    },
    {
      answer: "Cup",
      nextId: 'inrhymingWordscorrectq4',
    },
    {
      answer: "Sun",
      nextId: 'inrhymingWordscorrectq4',
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
    },
    {
      answer: 'Chair',
      nextId: 'rhymingWordscorrectq5',
    },
    {
      answer: "Ball",
      nextId: 'inrhymingWordscorrectq5',
    },
    {
      answer: "Car",
      nextId: 'inrhymingWordscorrectq5',
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
    },
    {
      answer: 'cup',
      nextId: 'inrhymingWordscorrectq6',
    },
    {
      answer: "red",
      nextId: 'rhymingWordscorrectq6',
    },
    {
      answer: "ball",
      nextId: 'inrhymingWordscorrectq6',
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
    },
    {
      answer: 'Door',
      nextId: 'rhymingWordscorrectq7',
    },
    {
      answer: "Ball",
      nextId: 'inrhymingWordscorrectq7',
    },
    {
      answer: "Chair",
      nextId: 'inrhymingWordscorrectq7',
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
    },
    {
      answer: 'Cup',
      nextId: 'inrhymingWordscorrectq8',
    },
    {
      answer: "Hat",
      nextId: 'inrhymingWordscorrectq8',
    },
    {
      answer: "Bed",
      nextId: 'inrhymingWordscorrectq8',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq9',
    },
    {
      answer: "Ball",
      nextId: 'inrhymingWordscorrectq9',
    },
    {
      answer: "Sun",
      nextId: 'inrhymingWordscorrectq9',
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
    },
    {
      answer: 'Chair',
      nextId: 'inrhymingWordscorrectq10',
    },
    {
      answer: "Tree",
      nextId: 'inrhymingWordscorrectq10',
    },
    {
      answer: "Car",
      nextId: 'inrhymingWordscorrectq10',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq11',
    },
    {
      answer: "Bat",
      nextId: 'inrhymingWordscorrectq11',
    },
    {
      answer: "Sun",
      nextId: 'inrhymingWordscorrectq11',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq12',
    },
    {
      answer: "Job",
      nextId: 'rhymingWordscorrectq12',
    },
    {
      answer: "Bat",
      nextId: 'inrhymingWordscorrectq12',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq13',
    },
    {
      answer: "Bin",
      nextId: 'inrhymingWordscorrectq13',
    },
    {
      answer: "Run",
      nextId: 'inrhymingWordscorrectq13',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq14',
    },
    {
      answer: "Bat",
      nextId: 'inrhymingWordscorrectq14',
    },
    {
      answer: "Sun",
      nextId: 'inrhymingWordscorrectq14',
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
    },
    {
      answer: 'Jog',
      nextId: 'inrhymingWordscorrectq15',
    },
    {
      answer: "Mug",
      nextId: 'rhymingWordscorrectq15',
    },
    {
      answer: "Hat",
      nextId: 'inrhymingWordscorrectq15',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq16',
    },
    {
      answer: 'Pin',
      nextId: 'inrhymingWordscorrectq16',
    },
    {
      answer: 'Sun',
      nextId: 'inrhymingWordscorrectq16',
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
    },
    {
      answer: 'Dog',
      nextId: 'inrhymingWordscorrectq17',
    },
    {
      answer: 'Pin',
      nextId: 'inrhymingWordscorrectq17',
    },
    {
      answer: 'Sun',
      nextId: 'inrhymingWordscorrectq17',
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
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq18',
  },
  {
    answer: 'Log',
    nextId: 'inrhymingWordscorrectq18',
  },
  {
    answer: 'Jet',
    nextId: 'inrhymingWordscorrectq18',
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
    nextId: 'inrhymingWordscorrectq19',
  },
  {
    answer: 'Dog',
    nextId: 'rhymingWordscorrectq19',
  },
  {
    answer: 'Log',
    nextId: 'rhymingWordscorrectq19',
  },
  {
    answer: 'Jet',
    nextId: 'rhymingWordscorrectq19',
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
  },
  {
    answer: 'Dog',
    nextId: 'inrhymingWordscorrectq20',
  },
  {
    answer: 'Bin',
    nextId: 'inrhymingWordscorrectq20',
  },
  {
    answer: 'Sun',
    nextId: 'inrhymingWordscorrectq20',
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
  },
  {
    answer: 'Bed',
    nextId: 'rhymingWordscorrectq21',
  },
  {
    answer: 'Hat',
    nextId: 'rhymingWordscorrectq21',
  },
  {
    answer: 'Sun',
    nextId: 'rhymingWordscorrectq21',
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
  },
  {
    answer: 'Fed',
    nextId: 'inrhymingWordscorrectq22',
  },
  {
    answer: 'Lit',
    nextId: 'rhymingWordscorrectq22',
  },
  {
    answer: 'Wed',
    nextId: 'inrhymingWordscorrectq22',
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
  },
  {
    answer: 'Hit',
    nextId: 'inrhymingWordscorrectq23',
  },
  {
    answer: 'Lit',
    nextId: 'inrhymingWordscorrectq23',
  },
  {
    answer: 'Kite',
    nextId: 'rhymingWordscorrectq23',
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
  },
  {
    answer: 'Hot',
    nextId: 'inrhymingWordscorrectq24',
  },
  {
    answer: 'Hat',
    nextId: 'rhymingWordscorrectq24',
  },
  {
    answer: 'Lot',
    nextId: 'inrhymingWordscorrectq24',
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
  },
  {
    answer: 'Sun',
    nextId: 'inrhymingWordscorrectq25',
  },
  {
    answer: 'Bun',
    nextId: 'inrhymingWordscorrectq25',
  },
  {
    answer: 'Fit',
    nextId: 'rhymingWordscorrectq25',
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
  },
  {
    answer: 'Set',
    nextId: 'inrhymingWordscorrectq26',
  },
  {
    answer: 'Log',
    nextId: 'rhymingWordscorrectq26',
  },
  {
    answer: 'Bet',
    nextId: 'inrhymingWordscorrectq26',
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
    },
    {
      answer: 'Nut',
      nextId: 'inrhymingWordscorrectq27',
    },
    {
      answer: 'Mad',
      nextId: 'rhymingWordscorrectq27',
    },
    {
      answer: 'But',
      nextId: 'inrhymingWordscorrectq27',
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
  },
  {
    answer: 'Dog',
    nextId: 'rhymingWordscorrectq28',
  },
  {
    answer: 'Ken',
    nextId: 'inrhymingWordscorrectq28',
  },
  {
    answer: 'Den',
    nextId: 'inrhymingWordscorrectq28',
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
    },
    {
      answer: 'Cut',
      nextId: 'inrhymingWordscorrectq29',
    },
    {
      answer: 'Sun',
      nextId: 'rhymingWordscorrectq29',
    },
    {
      answer: 'Gut',
      nextId: 'inrhymingWordscorrectq29',
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
  },
  {
    answer: 'Mug',
    nextId: 'inrhymingWordscorrectq30',
  },
  {
    answer: 'Hat',
    nextId: 'rhymingWordscorrectq30',
  },
  {
    answer: 'Jug',
    nextId: 'inrhymingWordscorrectq30',
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
  
  
  
  
  };
  
  
  
  
  
  
  export default questions;

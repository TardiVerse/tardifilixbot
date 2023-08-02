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
  const randomizedQuestion = () => {
    const questionKeys = Object.keys(questions);
    const randomIndex = Math.floor(Math.random() * questionKeys.length);
    const randomQuestionKey = questionKeys[randomIndex];
    return questions[randomQuestionKey];
  };
  
  // Example usage:
  const randomQuestion = randomizedQuestion();
  console.log("myrand",randomQuestion);
  
  
  export default questions;
  
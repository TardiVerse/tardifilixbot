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

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regular expression for negative email filtering
const emailPatternNegative = /(?![a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\w+/i;

// Regular expression for positive mobile number validation (10 digits)
const mobileNumberPattern = /^\b\d{10}\b/;

// Regular expression for negative mobile number filtering
const mobileNumberPatternNegative = /(?!\b\d{10}\b)\w+/;


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
const numberslot = Array.from({ length: 10 }, (_, i) => i + 1);

// Shuffle the array
const shuffleArraylot = shuffleNumberArraylot(numberslot);


console.log(shuffleArraylot);



const min = 1;
const max = 9;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);






const questions = {

  start: {
    botPrompt: 'Hello, I am <strong>TardiPopS</strong> From the planet of joyful learning! Here to help you to eradicate learning lapses from every corners!',
    answers: [
      {
        nextId: 'tardiidcollection',
      },
    ],
  },


  tardiidcollection: {
    botPrompt: 'Do you have TardiPops ID ?',
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
  greetings_notAEmail: {
	  botPrompt: 'Hello! You have entererd <strong>Invalid Email</strong> 😅',
	  answers: [
	    {
	      nextId: 'emailcollection',
	    },
	  ],
  },
  greetings_notAMobileNumber: {
	  botPrompt: 'Hello! You have entererd <strong>Invalid MobileNumber</strong> 😅',
	  answers: [
	    {
	      nextId: 'mobilecollection',
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
    botPrompt: 'Please enter<strong> your Student ID! </strong>?',
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
          answer: emailPattern,  
          catchMail:true,
          nextId: 'mobilecollection',
        },
        {
          answer: emailPatternNegative,
          nextId: 'greetings_notAEmail',
        },
      ],
  },
  mobilecollection: {
    botPrompt: 'Please enter<strong> your Mobile Number </strong> without country code?',
    input: textField(),
    answers: [
      {
        answer: mobileNumberPattern,  
        catchPhone:true,
        nextId: "fln"+randomNumber,
      },
      {
        answer: mobileNumberPatternNegative,
        nextId: 'greetings_notAMobileNumber',
      },
    ],
},



//question

  ["fln"+shuffleArraylot[1]]: {
    botPrompt: "What is the output of the following C code? int main() { int a[] = {1, 2, 3, 4, 5}; int *p = a; ++*p; p += 2; printf(\"%d\", *p); return 0; }",
    type: "RTypes.TRANSFORMED_TEXT",
    input: selectField(['1', '2', '3', '4']),
    answers: [
      {
        answer: "3",
        nextid: "flncorrectq1",
        sumToBags: [{"name": "ac", "points": 1}]
      },
      {
        answer: "1",
        nextid: "inflncorrectq1",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "2",
        nextid: "inflncorrectq1",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "4",
        nextid: "inflncorrectq1",
        sumToBags: [{"name": "ai", "points": 1}]
      }
    ]
  },
  flncorrectq1: {
    botPrompt: "Hurray! <strong>3</strong> is the correct answer! 😎",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[2],
      }
    ]
  },
  inflncorrectq1: {
    botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>\"3\"</strong>",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[2],
      }
    ]
  },

  ["fln"+shuffleArraylot[2]]: {
    botPrompt: "What is the issue with the following C function? char* getString() { char str[] = 'hello world'; return str; }",
    type: "RTypes.TRANSFORMED_TEXT",
    input: selectField(['It returns a string literal.', 'It returns a local variable address.', 'Theres no issue with this function.', 'The string is not null-terminated.']),
    answers: [
      {
        answer: "It returns a local variable address.",
        nextid: "flncorrectq2",
        sumToBags: [{"name": "ac", "points": 1}]
      },
      {
        answer: "It returns a string literal.",
        nextid: "inflncorrectq2",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "Theres no issue with this function.",
        nextid: "inflncorrectq2",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "The string is not null-terminated.",
        nextid: "inflncorrectq2",
        sumToBags: [{"name": "ai", "points": 1}]
      }
    ]
  },
  flncorrectq2: {
    botPrompt: "Hurray! <strong>It returns a local variable's address.</strong> is the correct answer! 😎",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[3],
      }
    ]
  },
  inflncorrectq2: {
    botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'It returns a local variable's address.'</strong>",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[3],
      }
    ]
  },


  ["fln"+shuffleArraylot[3]]: {
    botPrompt: "In C, if you pass an array as an argument to a function, what actually gets passed?",
    type: "RTypes.TRANSFORMED_TEXT",
    input: selectField(['The first element of the array.', 'The base address of the array.', 'The entire array.', 'The size of the array.']),
    answers: [
      {
        answer: "The base address of the array.",
        nextid: "flncorrectq3",
        sumToBags: [{"name": "ac", "points": 1}]
      },
      {
        answer: "The first element of the array.",
        nextid: "inflncorrectq3",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "The entire array.",
        nextid: "inflncorrectq3",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "The size of the array.",
        nextid: "inflncorrectq3",
        sumToBags: [{"name": "ai", "points": 1}]
      }
    ]
  },
  flncorrectq3: {
    botPrompt: "Hurray! <strong>The base address of the array.</strong> is the correct answer! 😎",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[4],
      }
    ]
  },
  inflncorrectq3: {
    botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'The base address of the array.'</strong>",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[4],
      }
    ]
  },

//4

["fln"+shuffleArraylot[4]]: {
    botPrompt: "What will be the value of 'var' after executing the following code? int var = 10; int *ptr = &var; *ptr = *ptr + 5;",
    type: "RTypes.TRANSFORMED_TEXT",
    input: selectField(['5', '10', '15', '20']),
    answers: [
      {
        answer: "15",
        nextId: "flncorrectq4",
        sumToBags: [{"name": "ac", "points": 1}]
      },
      {
        answer: "5",
        nextId: "inflncorrectq4",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "10",
        nextId: "inflncorrectq4",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "20",
        nextId: "inflncorrectq4",
        sumToBags: [{"name": "ai", "points": 1}]
      }
    ]
  },
  flncorrectq4: {
    botPrompt: "Hurray! <strong>15</strong> is the correct answer! 😎",
    answers: [
      {
        nextId: "fln"+shuffleArraylot[5],
      }
    ]
  },
  inflncorrectq4: {
    botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'15'</strong>",
    answers: [
      {
        nextId: "fln"+shuffleArraylot[5],
      }
    ]
  },


//5

  ["fln"+shuffleArraylot[5]]: {
    botPrompt: "What does the 'restrict' keyword in C indicate?",
    type: "RTypes.TRANSFORMED_TEXT",
    input: selectField(['The variable can only be accessed in the block its declared in.', 'The pointer is the sole initial means of accessing the object it points to.', 'The variable is restricted from being modified.', 'The pointer cannot be dereferenced.']),
    answers: [
      {
        answer: "The pointer is the sole initial means of accessing the object it points to.",
        nextId: "flncorrectq5",
        sumToBags: [{"name": "ac", "points": 1}]
      },
      {
        answer: "The variable can only be accessed in the block its declared in.",
        nextId: "inflncorrectq5",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "The variable is restricted from being modified.",
        nextId: "inflncorrectq5",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "The pointer cannot be dereferenced.",
        nextId: "inflncorrectq5",
        sumToBags: [{"name": "ai", "points": 1}]
      }
    ]
  },
  flncorrectq5: {
    botPrompt: "Hurray! <strong>The pointer is the sole initial means of accessing the object it points to.</strong> is the correct answer! 😎",
    answers: [
      {
        nextId:  "fln"+shuffleArraylot[6],
      }
    ]
  },
  inflncorrectq5: {
    botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'The pointer is the sole initial means of accessing the object it points to.'</strong>",
    answers: [
      {
        nextId:  "fln"+shuffleArraylot[6],
      }
    ]
  },

  //6

  ["fln"+shuffleArraylot[6]]: {
      botPrompt: "What is the output of the following Python code? def func(x = []): x.append(x); return x; print(func())",
      type: "RTypes.TRANSFORMED_TEXT",
      input: selectField(["[]", "[...]", "[[]]", "[[...]]"]),
      answers: [
        {
          answer: "[...]",
          nextId: "flncorrectq6",
          sumToBags: [{"name": "ac", "points": 1}]
        },
        {
          answer: "[]",
          nextId: "inflncorrectq6",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "[[]]",
          nextId: "inflncorrectq6",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "[[...]]",
          nextId: "inflncorrectq6",
          sumToBags: [{"name": "ai", "points": 1}]
        }
      ]
    },
    flncorrectq6: {
      botPrompt: "Hurray! <strong>[...]</strong> is the correct answer! 😎",
      answers: [
        {
          nextId:  "fln"+shuffleArraylot[7],
        }
      ]
    },
    inflncorrectq6: {
      botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'[...]'</strong>",
      answers: [
        {
          nextId:  "fln"+shuffleArraylot[7],
        }
      ]
    },
  

  //7
  ["fln"+shuffleArraylot[7]]: {
      botPrompt: "In Python, what is the difference between 'is' and '=='?",
      type: "RTypes.TRANSFORMED_TEXT",
      input: selectField(['No difference, both are used for equality check.', 'is checks for identity, == checks for equality.', 'is checks for type, == checks for value.', 'is is used for numeric types, == is used for all types.']),
      answers: [
        {
          answer: "is checks for identity, == checks for equality.",
          nextId: "flncorrectq7",
          sumToBags: [{"name": "ac", "points": 1}]
        },
        {
          answer: "No difference, both are used for equality check.",
          nextId: "inflncorrectq7",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "is checks for type, == checks for value.",
          nextId: "inflncorrectq7",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "is is used for numeric types, == is used for all types.",
          nextId: "inflncorrectq7",
          sumToBags: [{"name": "ai", "points": 1}]
        }
      ]
    },
    flncorrectq7: {
      botPrompt: "Hurray! <strong>is checks for identity, == checks for equality.</strong> is the correct answer! 😎",
      answers: [
        {
          nextId: "fln"+shuffleArraylot[8],
        }
      ]
    },
    inflncorrectq7: {
      botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'is checks for identity, == checks for equality.'</strong>",
      answers: [
        {
          nextId: "fln"+shuffleArraylot[8],
        }
      ]
    },

  //8
  
  ["fln"+shuffleArraylot[8]]: {
      botPrompt: "Which of the following is a correct way to create a generator in Python?",
      type: "RTypes.TRANSFORMED_TEXT",
      input: selectField(['Using ()', 'Using {}', 'Using []', 'Using <>']),
      answers: [
        {
          answer: "Using ()",
          nextId: "flncorrectq8",
          sumToBags: [{"name": "ac", "points": 1}]
        },
        {
          answer: "Using {}",
          nextId: "inflncorrectq8",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "Using []",
          nextId: "inflncorrectq8",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "Using <>",
          nextId: "inflncorrectq8",
          sumToBags: [{"name": "ai", "points": 1}]
        }
      ]
    },
    flncorrectq8: {
      botPrompt: "Hurray! <strong>Using ()</strong> is the correct answer! 😎",
      answers: [
        {
          nextId: "fln"+shuffleArraylot[9],
        }
      ]
    },
    inflncorrectq8: {
      botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'Using ()'</strong>",
      answers: [
        {
          nextId: "fln"+shuffleArraylot[9],
        }
      ]
    },

    //9


      ["fln"+shuffleArraylot[9]]:{
        botPrompt: "What is the output of the following code? x = 'abcd'; for i in range(len(x)): x = 'a'; print(x, end='')",
      type: "RTypes.TRANSFORMED_TEXT",
      input: selectField(['abcd', 'aaaa', 'a', 'dcba']),
      answers: [
        {
          answer: "aaaa",
          nextId: "flncorrectq9",
          sumToBags: [{"name": "ac", "points": 1}]
        },
        {
          answer: "abcd",
          nextId: "inflncorrectq9",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "a",
          nextId: "inflncorrectq9",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "dcba",
          nextId: "inflncorrectq9",
          sumToBags: [{"name": "ai", "points": 1}]
        }
      ]
    },
    flncorrectq9: {
      botPrompt: "Hurray! <strong>aaaa</strong> is the correct answer! 😎",
      answers: [
        {
          nextId: "fln"+shuffleArraylot[10],
        }
      ]
    },
    inflncorrectq9: {
      botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'aaaa'</strong>",
      answers: [
        {
          nextId: "fln"+shuffleArraylot[10],
        }
      ]
    },
    
  //10

  
    ["fln"+shuffleArraylot[10]]: {
      botPrompt: "What is the use of the 'global' keyword in Python?",
      type: "RTypes.TRANSFORMED_TEXT",
      input: selectField(['To create a global variable.', 'To modify a global variable inside a function.', 'To check if a variable is global.', 'To import a global variable from another module.']),
      answers: [
        {
          answer: "To modify a global variable inside a function.",
          nextId: "flncorrectq10",
          sumToBags: [{"name": "ac", "points": 1}]
        },
        {
          answer: "To create a global variable.",
          nextId: "inflncorrectq10",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "To check if a variable is global.",
          nextId: "inflncorrectq10",
          sumToBags: [{"name": "ai", "points": 1}]
        },
        {
          answer: "To import a global variable from another module.",
          nextId: "inflncorrectq10",
          sumToBags: [{"name": "ai", "points": 1}]
        }
      ]
    },
    flncorrectq10: {
      botPrompt: "Hurray! <strong>To modify a global variable inside a function.</strong> is the correct answer! 😎",
      answers: [
        {
          nextId: 'endConversation',
        }
      ]
    },
    inflncorrectq10: {
      botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'To modify a global variable inside a function.'</strong>",
      answers: [
        {
          nextId: 'endConversation',
        }
      ]
    },
  
  

endConversation: {
  botPrompt: 'Thank you Will Meet you tomorrow ',
  input: endOfConversation(),
  answers: [
    {
      nextId: 'endConversation',
    },
  ],
},

//shuffletwoend


}
console.log("hey sartak this is what you want",questions)
export default questions;
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



const min = 0;
const max = 29;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);






const questions = {

  start: {
    botPrompt: 'Hello, I am <strong>TardiPopS</strong> From the planet of joyful learning! Here to help you to eradicate learning lapses from every corners!',
    answers: [
      {
        nextId: 'yourName',
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
        nextId: 'department',
      },
      {
        answer: mobileNumberPatternNegative,
        nextId: 'greetings_notAMobileNumber',
      },
    ],
},

department: {
   botPrompt: 'Please enter<strong> you department',
   input: selectField(['B.Tech(IT)','Be.Cse', "Be.AI"]),
   answers: [
    {
      answer: 'B.Tech(IT)',
      nextId: "fln"+randomNumber,
    },
    {
      answer: 'Be.Cse',
      nextId: "fln"+randomNumber,
    }, 
    {  
      answer: "Be.AI",
      nextId: "fln"+randomNumber,
    }
   ]
},


//question

  ["fln"+shuffleArraylot[1]]: {
    botPrompt: "What is the output of the following C code? int main() { int a[] = {1, 2, 3, 4, 5}; int *p = a; ++*p; p += 2; printf(\"%d\", *p); return 0; }",
    type: RTypes.TRANSFORMED_TEXT,
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
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['It returns a string literal.', 'It returns a local variable address.', 'Theres no issue with this function.', 'The string is not null-terminated.']),
    answers: [
      {
        answer: 'It returns a local variable address.',
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
    type: RTypes.TRANSFORMED_TEXT,
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
    type: RTypes.TRANSFORMED_TEXT,
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
    type: RTypes.TRANSFORMED_TEXT,
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
      type: RTypes.TRANSFORMED_TEXT,
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
      type: RTypes.TRANSFORMED_TEXT,
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
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Using ()', 'Using {}', "Using []", "Using <>"]),
      answers: [
        {
          answer: 'Using ()',
          nextId: "flncorrectq8",
          sumToBags: [{"name": "ac", "points": 1}]
        },
        {
          answer: 'Using {}',
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
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['abcd','aaaa','a','dcba']),
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
      type: RTypes.TRANSFORMED_TEXT,
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
          nextId: "fln"+shuffleArraylot[11],
        }
      ]
    },
    inflncorrectq10: {
      botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'To modify a global variable inside a function.'</strong>",
      answers: [
        {
          nextId: "fln"+shuffleArraylot[11],
        }
      ]
    },
    
    //11


    ["fln"+shuffleArraylot[11]]:{
      botPrompt: "What is the worst-case time complexity of inserting an element in a hash table?",
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['O(1)','O(log n)','O(n)','O(n log n)']),
    answers: [
      {
        answer: "O(1)",
        nextId: "flncorrectq11",
        sumToBags: [{"name": "ac", "points": 1}]
      },
      {
        answer: "O(log n)",
        nextId: "inflncorrectq11",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "O(n)",
        nextId: "inflncorrectq11",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: "O(n log n)",
        nextId: "inflncorrectq11",
        sumToBags: [{"name": "ai", "points": 1}]
      }
    ]
  },
  flncorrectq11: {
    botPrompt: "Hurray! <strong>O(1)</strong> is the correct answer! 😎",
    answers: [
      {
        nextId: "fln"+shuffleArraylot[12],
      }
    ]
  },
  inflncorrectq11: {
    botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'O(1)'</strong>",
    answers: [
      {
        nextId: "fln"+shuffleArraylot[12],
      }
    ]
  },
  

  //12
  ["fln"+shuffleArraylot[12]]: {
    botPrompt: "In a binary max heap, where is the second-largest element likely to be found?",
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Root of the heap.','Last element of the heap.','One of the children of the root.','Anywhere in the heap.']),
    answers: [
      {
        answer: 'Root of the heap.',
        nextid: "inflncorrectq12",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: 'Last element of the heap.',
        nextid: "inflncorrectq12",
        sumToBags: [{"name": "ai", "points": 1}]
      },
      {
        answer: 'One of the children of the root.',
        nextid: "flncorrectq12",
        sumToBags: [{"name": "ac", "points": 1}]
      },
      {
        answer: 'Anywhere in the heap.',
        nextid: "inflncorrectq12",
        sumToBags: [{"name": "ai", "points": 1}]
      }
    ]
  },
  flncorrectq12: {
    botPrompt: "Hurray! <strong>One of the children of the root.</strong> is the correct answer! 😎",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[13],
      }
    ]
  },
  inflncorrectq12: {
    botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>One of the children of the root.</strong>",
    answers: [
      {
        nextid: "fln"+shuffleArraylot[13],
      }
    ]
  },

  //13

  ["fln"+shuffleArraylot[13]]:{
    botPrompt: "Which of the following is not a limitation of an array in Data Structure?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Fixed size.','Consumes more memory for a small number of elements.',"Insertion and deletion are expensive operations.","Inability to store multiple data types."]),
  answers: [
    {
      answer: 'Fixed size.',
      nextId: "flncorrectq13",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'Consumes more memory for a small number of elements.',
      nextId: "inflncorrectq13",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Insertion and deletion are expensive operations.",
      nextId: "inflncorrectq13",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Inability to store multiple data types.",
      nextId: "inflncorrectq13",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq13: {
  botPrompt: "Hurray! <strong>Fixed size.</strong> is the correct answer! 😎",
  answers: [
    {
      nextId: "fln"+shuffleArraylot[14],
    }
  ]
},
inflncorrectq13: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>'Fixed size.'</strong>",
  answers: [
    {
      nextId: "fln"+shuffleArraylot[14],
    }
  ]
},

//14
["fln"+shuffleArraylot[14]]: {
  botPrompt: "What is the time complexity of accessing an element in a linked list?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['O(1)','O(log n)',"O(n)","O(n log n)"]),
  answers: [
    {
      answer: 'O(1)',
      nextid: "inflncorrectq14",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'O(log n)',
      nextid: "inflncorrectq14",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "O(n)",
      nextid: "flncorrectq14",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: "O(n log n)",
      nextid: "inflncorrectq14",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq14: {
  botPrompt: "Hurray! <strong>O(n)</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[15],
    }
  ]
},
inflncorrectq14: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>O(n)</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[15],
    }
  ]
},

//15

["fln"+shuffleArraylot[15]]: {
  botPrompt: "Which of the following is not a type of Linked List?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Circular Linked List','Doubly Linked List','Array Linked List','Single Linked List']),
  answers: [
    {
      answer: 'Circular Linked List',
      nextid: "inflncorrectq15",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Doubly Linked List',
      nextid: "inflncorrectq15",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Array Linked List',
      nextid: "flncorrectq15",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'Single Linked List',
      nextid: "inflncorrectq15",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq15: {
  botPrompt: "Hurray! <strong>Array Linked List</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[16],
    }
  ]
},
inflncorrectq15: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Array Linked List</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[16],
    }
  ]
},

//16

["fln"+shuffleArraylot[16]]: {
  botPrompt: "What is the best case time complexity of QuickSort?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['O(1)','O(log n)','O(n log n)','O(n^2)']),
  answers: [
    {
      answer: 'O(1)',
      nextid: "inflncorrectq16",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'O(log n)',
      nextid: "inflncorrectq16",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'O(n log n)',
      nextid: "flncorrectq16",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'O(n^2)',
      nextid: "inflncorrectq16",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq16: {
  botPrompt: "Hurray! <strong>O(n log n)</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[17],
    }
  ]
},
inflncorrectq16: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>O(n log n)</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[17],
    }
  ]
},

//17
["fln"+shuffleArraylot[17]]: {
  botPrompt: "What is the space complexity of an iterative Depth-First Search (DFS) algorithm on a graph?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['O(1)', , "O(n)", 'O(log n)', "O(n log n)"]),
  answers: [
    {
      answer: 'O(1)',
      nextid: "inflncorrectq17",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "O(n)",
      nextid: "flncorrectq17",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'O(log n)',
      nextid: "inflncorrectq17",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "O(n log n)",
      nextid: "inflncorrectq17",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq17: {
  botPrompt: "Hurray! <strong>O(n)</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[18],
    }
  ]
},
inflncorrectq17: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>O(n)</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[18],
    }
  ]
},

//18
["fln"+shuffleArraylot[18]]: {
  botPrompt: "In Dijkstra's algorithm, what data structure is typically used to achieve the lowest time complexity?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Array', 'Stack', "Queue", "Priority Queue"]),
  answers: [
    {
      answer: 'Array',
      nextid: "inflncorrectq18",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Stack',
      nextid: "inflncorrectq18",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Queue",
      nextid: "inflncorrectq18",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "Priority Queue",
      nextid: "flncorrectq18",
      sumToBags: [{"name": "ac", "points": 1}]
    }
  ]
},
flncorrectq18: {
  botPrompt: "Hurray! <strong>Priority Queue</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[19],
    }
  ]
},
inflncorrectq18: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Priority Queue</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[19],
    }
  ]
},

//19
["fln"+shuffleArraylot[19]]: {
  botPrompt: "Which algorithm is not a divide and conquer algorithm?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Merge Sort', 'Quick Sort', "Binary Search", "Linear Search"]),
  answers: [
    {
      answer: 'Merge Sort',
      nextid: "inflncorrectq19",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Quick Sort',
      nextid: "inflncorrectq19",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Binary Search",
      nextid: "inflncorrectq19",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "Linear Search",
      nextid: "flncorrectq19",
      sumToBags: [{"name": "ac", "points": 1}]
    }
  ]
},
flncorrectq19: {
  botPrompt: "Hurray! <strong>Linear Search</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[20],
    }
  ]
},
inflncorrectq19: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Linear Search</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[20],
    }
  ]
},

//20

["fln"+shuffleArraylot[20]]: {
  botPrompt: "Which of the following is a fundamental problem in the study of distributed algorithms?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Finding the median of a data set', 'Calculating the factorial of a number', "Sorting a list of integers", "The Byzantine Generals Problem"]),
  answers: [
    {
      answer: 'Finding the median of a data set',
      nextid: "inflncorrectq20",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Calculating the factorial of a number',
      nextid: "inflncorrectq20",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Sorting a list of integers",
      nextid: "inflncorrectq20",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "The Byzantine Generals Problem",
      nextid: "flncorrectq20",
      sumToBags: [{"name": "ac", "points": 1}]
    }
  ]
},
flncorrectq20: {
  botPrompt: "Hurray! <strong>The Byzantine Generals Problem</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[21],
    }
  ]
},
inflncorrectq20: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>The Byzantine Generals Problem</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[21],
    }
  ]
},


//21
["fln"+shuffleArraylot[21]]: {
  botPrompt: "What is the worst-case time complexity of the Binary Search algorithm?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['O(1)', , "O(log n)", 'O(n)', "O(n log n)"]),
  answers: [
    {
      answer: 'O(1)',
      nextid: "inflncorrectq21",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "O(log n)",
      nextid: "flncorrectq21",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'O(n)',
      nextid: "inflncorrectq21",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "O(n log n)",
      nextid: "inflncorrectq21",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq21: {
  botPrompt: "Hurray! <strong>O(log n)</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[22],
    }
  ]
},
inflncorrectq21: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>O(log n)</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[22],
    }
  ]
},


//22
["fln"+shuffleArraylot[22]]: {
  botPrompt: "Which of the following sorting algorithms is not stable?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Bubble Sort', 'Merge Sort', "Insertion Sort", "Quick Sort"]),
  answers: [
    {
      answer: 'Bubble Sort',
      nextid: "inflncorrectq22",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Merge Sort',
      nextid: "inflncorrectq22",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Insertion Sort",
      nextid: "inflncorrectq22",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "Quick Sort",
      nextid: "flncorrectq22",
      sumToBags: [{"name": "ac", "points": 1}]
    }
  ]
},
flncorrectq22: {
  botPrompt: "Hurray! <strong>Quick Sort</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[23],
    }
  ]
},
inflncorrectq22: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Quick Sort</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[23],
    }
  ]
},


//23
["fln"+shuffleArraylot[23]]: {
  botPrompt: "In the context of graph algorithms, what is the primary purpose of a 'Spanning Tree'?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['To find the shortest path between two nodes.', 'To cover all nodes with the minimum number of edges.', "To detect cycles within the graph.", "To find the maximum flow in a network."]),
  answers: [
    {
      answer: 'To find the shortest path between two nodes.',
      nextid: "inflncorrectq23",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'To cover all nodes with the minimum number of edges.',
      nextid: "flncorrectq23",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: "To detect cycles within the graph.",
      nextid: "inflncorrectq23",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "To find the maximum flow in a network.",
      nextid: "inflncorrectq23",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq23: {
  botPrompt: "Hurray! <strong>To cover all nodes with the minimum number of edges.</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[24],
    }
  ]
},
inflncorrectq23: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>To cover all nodes with the minimum number of edges.</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[24],
    }
  ]
},

//24

["fln"+shuffleArraylot[24]]: {
  botPrompt: "In graph theory, which algorithm is used to find the shortest path in a graph with negative weight edges?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(["selectField(['Dijkstra\\'s Algorithm" , "Bellman-Ford Algorithm", 'Floyd-Warshall Algorithm', "A* Search Algorithm"]),
  answers: [
    {
      answer: "selectField(['Dijkstra\\'s Algorithm",
      nextid: "inflncorrectq24",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Bellman-Ford Algorithm",
      nextid: "flncorrectq24",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'Floyd-Warshall Algorithm',
      nextid: "inflncorrectq24",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "A* Search Algorithm",
      nextid: "inflncorrectq24",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq24: {
  botPrompt: "Hurray! <strong>Bellman-Ford Algorithm</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[25],
    }
  ]
},
inflncorrectq24: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Bellman-Ford Algorithm</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[25],
    }
  ]
},

//25

["fln"+shuffleArraylot[25]]: {
  botPrompt: "What is the average-case time complexity of a Heap Sort algorithm?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(["O(1)", "O(log n)", 'O(n)', "O(n log n)"]),
  answers: [
    {
      answer: "O(1)",
      nextid: "inflncorrectq25",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "O(log n)",
      nextid: "inflncorrectq25",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'O(n)',
      nextid: "inflncorrectq25",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "O(n log n)",
      nextid: "flncorrectq25",
      sumToBags: [{"name": "ac", "points": 1}]
    }
  ]
},
flncorrectq25: {
  botPrompt: "Hurray! <strong>O(n log n)</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[26],
    }
  ]
},
inflncorrectq25: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>O(n log n)</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[26],
    }
  ]
},

//26
["fln"+shuffleArraylot[26]]: {
  botPrompt: "Which data structure is used for implementing LRU (Least Recently Used) Cache?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Queue', 'Stack', "Linked List", "Hash Table",]),
  answers: [
    {
      answer: 'Queue',
      nextid: "inflncorrectq26",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Stack',
      nextid: "inflncorrectq26",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Linked List",
      nextid: "flncorrectq26",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    
    {
      answer: "Hash Table",
      nextid: "inflncorrectq26",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq26: {
  botPrompt: "Hurray! <strong>Linked List</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[27],
    }
  ]
},
inflncorrectq26: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Linked List</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[27],
    }
  ]
},

//27

["fln"+shuffleArraylot[27]]: {
  botPrompt: "In the field of computer vision, which algorithm is typically used for edge detection in images?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['K-Means Clustering', 'Canny Edge Detector', "A* Search Algorithm", "Kruskals Algorithm"]),
  answers: [
    {
      answer: "K-Means Clustering",
      nextid: "inflncorrectq27",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Canny Edge Detector",
      nextid: "flncorrectq27",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'A* Search Algorithm',
      nextid: "inflncorrectq27",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "Kruskals Algorithm",
      nextid: "flncorrectq27",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq27: {
  botPrompt: "Hurray! <strong>Canny Edge Detector</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[28],
    }
  ]
},
inflncorrectq27: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Canny Edge Detector</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[28],
    }
  ]
},


//28
["fln"+shuffleArraylot[28]]: {
  botPrompt: "Which algorithm is most commonly used for balancing load across different servers in a distributed system?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Round Robin', 'Depth-First Search', "Kruskas Algorithm", "Dijkstras Algorithm"]),
  answers: [
    {
      answer: 'Round Robin',
      nextid: "flncorrectq28",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: 'Depth-First Search',
      nextid: "inflncorrectq28",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: "Kruskas Algorithm",
      nextid: "inflncorrectq28",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "Dijkstras Algorithm",
      nextid: "inflncorrectq28",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq28: {
  botPrompt: "Hurray! <strong>Round Robin</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[29],
    }
  ]
},
inflncorrectq28: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Round Robin</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[29],
    }
  ]
},

//29
["fln"+shuffleArraylot[29]]: {
  botPrompt: "What is the time complexity of the Fast Fourier Transform (FFT) algorithm?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['O(n)', 'O(n log n)', "O(log n)", "O(n^2)"]),
  answers: [
    {
      answer: 'O(n)',
      nextid: "inflncorrectq29",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'O(n log n)',
      nextid: "flncorrectq29",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: "O(log n)",
      nextid: "inflncorrectq29",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "O(n^2)",
      nextid: "inflncorrectq29",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq29: {
  botPrompt: "Hurray! <strong>O(n log n)</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[30],
    }
  ]
},
inflncorrectq29: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>O(n log n)</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[30],
    }
  ]
},


//30

["fln"+shuffleArraylot[30]]: {
  botPrompt: "In the context of algorithm analysis, what does the term 'Amortized Time Complexity' refer to?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Time complexity of the worst-case operation.', 'Average time per operation over a worst-case sequence of operations.', "Maximum time taken by an operation in the best-case scenario. List", "Time complexity for an algorithm to complete in a real-time system.",]),
  answers: [
    {
      answer: 'Time complexity of the worst-case operation.',
      nextid: "inflncorrectq30",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    {
      answer: 'Average time per operation over a worst-case sequence of operations.',
      nextid: "flncorrectq30",
      sumToBags: [{"name": "ac", "points": 1}]
    },
    {
      answer: "Maximum time taken by an operation in the best-case scenario.",
      nextid: "inflncorrectq30",
      sumToBags: [{"name": "ai", "points": 1}]
    },
    
    {
      answer: "Time complexity for an algorithm to complete in a real-time system.",
      nextid: "inflncorrectq30",
      sumToBags: [{"name": "ai", "points": 1}]
    }
  ]
},
flncorrectq30: {
  botPrompt: "Hurray! <strong>Average time per operation over a worst-case sequence of operations.</strong> is the correct answer! 😎",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[31],
    }
  ]
},
inflncorrectq30: {
  botPrompt: "You have selected the wrong Answer... 🤔 the <strong>right</strong> answer is <strong>Average time per operation over a worst-case sequence of operations.</strong>",
  answers: [
    {
      nextid: "fln"+shuffleArraylot[31],
    }
  ]
},



//shuffletwoend


}
console.log("hey sartak this is what you want",questions)
export default questions;
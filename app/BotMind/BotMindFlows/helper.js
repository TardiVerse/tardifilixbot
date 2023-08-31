
      day31: {
        botPrompt: '<strong> Day 30 : </strong> Monster box addition in kindergarten is a playful and engaging way to introduce children to basic math concepts',
        answers: [
                { nextId: 'day31linknew' },
        ],
      },
      
      day31linknew: {
        botPrompt: 'https://youtu.be/8r9-bUm96kY',
        type: RTypes.LINK,
        answers: [
          {
            nextId: 'day31numberLine',
          },
        ],
      },
    
      day31numberLine: {
        botPrompt: 'Number Line Addition',
        answers: [
                { nextId: 'day31link2' },
        ],
      },
    
      day31link2: {
        botPrompt: 'https://youtu.be/GHJ1RDLY9L8',
        type: RTypes.LINK,
        answers: [
          {
            nextId: 'day31numberLine2',
          },
        ],
      },
    
      day31numberLine2: {
        botPrompt: 'Lock and Key addition',
       
        answers: [
          {
            nextId: 'day31numberLine3',
          },
        ],
      },
    
      day31numberLine3: {
        botPrompt: 'https://youtu.be/kGDAtLGB4BU',
        type: RTypes.LINK,
        answers: [
          {
            nextId: 'day31numberLine4',
          },
        ],
      },
    
      day31numberLine4: {
        botPrompt: 'Let’s look into the pages of the book',
        answers: [
          {
            nextId: 'day31numberLine5',
          },
        ],
      },
    
      day31numberLine5: {
        botPrompt: 'https://drive.google.com/file/d/1klGC9i-SP4yGzcrH_NTyybudLx3iDWvk/view?usp=share_link',
        type: RTypes.LINK,
        answers: [
          {
            nextId: "addition"+shuffledNumbersto[0],
          },
        ],
      },
    
    //NEXT QUESTIONS
    
    //1
    
      ["addition"+shuffledNumbersto[0]]: {
        botPrompt: 'What is the sum of 2 and 3?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['3', '4', "5","6"]),
        answers: [
          {
            answer: '3',
            nextId: 'inadditioncorrect',
          },
          {
            answer: '4',
            nextId: 'inadditioncorrect',
          },
          {
            answer: "5",
            nextId: 'additioncorrect',
          },
          {
            answer: "6",
            nextId: 'inadditioncorrect',
          },
        ],
      },
      additioncorrect: {
        botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[1],
          },
        ],
      },
      inadditioncorrect: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[1],
          },
        ],
      },
    
      
    //2
    
    ["addition"+shuffledNumbersto[1]]: {
        botPrompt: 'What is the sum of 12 and 17?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['28', '29', "30","31"]),
        answers: [
          {
            answer: '28',
            nextId: 'inadditioncorrectq2',
          },
          {
            answer: '29',
            nextId: 'additioncorrectq2',
          },
          {
            answer: "30",
            nextId: 'inadditioncorrectq2',
          },
          {
            answer: "31",
            nextId: 'inadditioncorrectq2',
          },
        ],
      },
      additioncorrectq2: {
        botPrompt: 'Hurray <strong>29</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[2],
          },
        ],
      },
      inadditioncorrectq2: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"29"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[2],
          },
        ],
      },
    
    
      //3
    
    ["addition"+shuffledNumbersto[2]]: {
        botPrompt: 'What is the sum of 365 and 284?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['629', '649', "659","669"]),
        answers: [
          {
            answer: '629',
            nextId: 'additioncorrectq3',
          },
          {
            answer: '649',
            nextId: 'inadditioncorrectq3',
          },
          {
            answer: "659",
            nextId: 'inadditioncorrectq3',
          },
          {
            answer: "669",
            nextId: 'inadditioncorrectq3',
          },
        ],
      },
      additioncorrectq3: {
        botPrompt: 'Hurray <strong>629</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[3],
          },
        ],
      },
      inadditioncorrectq3: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"629"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[3],
          },
        ],
      },
    
    
    //4
    
    ["addition"+shuffledNumbersto[3]]: {
        botPrompt: 'What is the sum of 25 and 16?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['30', '41', "51","61"]),
        answers: [
          {
            answer: '30',
            nextId: 'inadditioncorrectq4',
          },
          {
            answer: '41',
            nextId: 'additioncorrectq4',
          },
          {
            answer: "51",
            nextId: 'inadditioncorrectq4',
          },
          {
            answer: "61",
            nextId: 'inadditioncorrectq4',
          },
        ],
      },
      additioncorrectq4: {
        botPrompt: 'Hurray <strong>41</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[4],
          },
        ],
      },
      inadditioncorrectq4: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"41"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[4],
          },
        ],
      },
    
      //5
      
    ["addition"+shuffledNumbersto[4]]: {
        botPrompt: 'What is the sum of 435 and 278?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['703', '713', "723","733"]),
        answers: [
          {
            answer: '703',
            nextId: 'inadditioncorrectq5',
          },
          {
            answer: '713',
            nextId: 'additioncorrectq5',
          },
          {
            answer: "723",
            nextId: 'inadditioncorrectq5',
          },
          {
            answer: "733",
            nextId: 'inadditioncorrectq5',
          },
        ],
      },
      additioncorrectq5: {
        botPrompt: 'Hurray <strong>713</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[5],
          },
        ],
      },
      inadditioncorrectq5: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"713"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[5],
          },
        ],
      },
    
      //6
      
    ["addition"+shuffledNumbersto[5]]: {
        botPrompt: 'If Mary has 5 candies and her friend gives her 3 more, how many candies does Mary have?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['6', '7', "8","9"]),
        answers: [
          {
            answer: '6',
            nextId: 'inadditioncorrectq6',
          },
          {
            answer: '7',
            nextId: 'inadditioncorrectq6',
          },
          {
            answer: "8",
            nextId: 'inadditioncorrectq6',
          },
          {
            answer: "9",
            nextId: 'additioncorrectq6',
          },
        ],
      },
      additioncorrectq6: {
        botPrompt: 'Hurray <strong>9</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[6],
          },
        ],
      },
      inadditioncorrectq6: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"9"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[6],
          },
        ],
      },
    
      //7
      
    ["addition"+shuffledNumbersto[6]]: {
        botPrompt: 'If there are 4 apples on the table and 3 more apples are added, how many apples are there now?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['5', '6', "7","8"]),
        answers: [
          {
            answer: '5',
            nextId: 'inadditioncorrectq7',
          },
          {
            answer: '6',
            nextId: 'inadditioncorrectq7',
          },
          {
            answer: "7",
            nextId: 'additioncorrectq7',
          },
          {
            answer: "8",
            nextId: 'inadditioncorrectq7',
          },
        ],
      },
      additioncorrectq7: {
        botPrompt: 'Hurray <strong>7</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[7],
          },
        ],
      },
      inadditioncorrectq7: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[7],
          },
        ],
      },
    
    
      //8
      
    ["addition"+shuffledNumbersto[7]]: {
        botPrompt: 'If John has 2 red balls and 3 blue balls, how many balls does he have in total?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['3', '4', "5","6"]),
        answers: [
          {
            answer: '3',
            nextId: 'inadditioncorrectq8',
          },
          {
            answer: '4',
            nextId: 'inadditioncorrectq8',
          },
          {
            answer: "5",
            nextId: 'additioncorrectq8',
          },
          {
            answer: "6",
            nextId: 'inadditioncorrectq8',
          },
        ],
      },
      additioncorrectq8: {
        botPrompt: 'Hurray <strong>5</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[8],
          },
        ],
      },
      inadditioncorrectq8: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"5"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[8],
          },
        ],
      },
    
    
      //9
      
    ["addition"+shuffledNumbersto[8]]: {
        botPrompt: 'If there are 7 birds on the tree and 2 more birds come to join them, how many birds are on the tree now?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['7', '8', "9","10"]),
        answers: [
          {
            answer: '7',
            nextId: 'inadditioncorrectq9',
          },
          {
            answer: '8',
            nextId: 'inadditioncorrectq9',
          },
          {
            answer: "9",
            nextId: 'inadditioncorrectq9',
          },
          {
            answer: "10",
            nextId: 'additioncorrectq9',
          },
        ],
      },
      additioncorrectq9: {
        botPrompt: 'Hurray <strong>10</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[9],
          },
        ],
      },
      inadditioncorrectq9: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[9],
          },
        ],
      },
    
    
      //10
      
    ["addition"+shuffledNumbersto[9]]: {
        botPrompt: 'If there are 11 pencils in a box and 8 more pencils are added, how many pencils are there now?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['17', '18', "19","20"]),
        answers: [
          {
            answer: '17',
            nextId: 'inadditioncorrectq10',
          },
          {
            answer: '18',
            nextId: 'additioncorrectq10',
          },
          {
            answer: "19",
            nextId: 'inadditioncorrectq10',
          },
          {
            answer: "20",
            nextId: 'inadditioncorrectq10',
          },
        ],
      },
      additioncorrectq10: {
        botPrompt: 'Hurray <strong>18</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[10],
          },
        ],
      },
      inadditioncorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"18"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[10],
          },
        ],
      },
    
    
      //11
      
    ["addition"+shuffledNumbersto[10]]: {
        botPrompt: 'If there are 23 books on a shelf and 14 more books are added, how many books are there now?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['34', '35', "36","37"]),
        answers: [
          {
            answer: '34',
            nextId: 'additioncorrectq11',
          },
          {
            answer: '35',
            nextId: 'inadditioncorrectq11',
          },
          {
            answer: "36",
            nextId: 'inadditioncorrectq11',
          },
          {
            answer: "37",
            nextId: 'inadditioncorrectq11',
          },
        ],
      },
      additioncorrectq11: {
        botPrompt: 'Hurray <strong>34</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[11],
          },
        ],
      },
      inadditioncorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"34"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[11],
          },
        ],
      },
    
    
      //12
      
    ["addition"+shuffledNumbersto[11]]: {
        botPrompt: 'If there are 31 students in a class and 12 more students come in, how many students are in the class now?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['42', '43', "44","45"]),
        answers: [
          {
            answer: '42',
            nextId: 'additioncorrectq12',
          },
          {
            answer: '43',
            nextId: 'inadditioncorrectq12',
          },
          {
            answer: "44",
            nextId: 'inadditioncorrectq12',
          },
          {
            answer: "45",
            nextId: 'inadditioncorrectq12',
          },
        ],
      },
      additioncorrectq12: {
        botPrompt: 'Hurray <strong>42</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[12],
          },
        ],
      },
      inadditioncorrectq12: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"42"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[12],
          },
        ],
      },
    
    
      //13
      
    ["addition"+shuffledNumbersto[12]]: {
        botPrompt: 'If there are 15 birds on one tree and 20 birds on another tree, how many birds are there in total?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['35', '40', "45","50"]),
        answers: [
          {
            answer: '35',
            nextId: 'inadditioncorrectq13',
          },
          {
            answer: '40',
            nextId: 'additioncorrectq13',
          },
          {
            answer: "45",
            nextId: 'inadditioncorrectq13',
          },
          {
            answer: "50",
            nextId: 'inadditioncorrectq13',
          },
        ],
      },
      additioncorrectq13: {
        botPrompt: 'Hurray <strong>40</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[13],
          },
        ],
      },
      inadditioncorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[13],
          },
        ],
      },
    
      //14
      
    ["addition"+shuffledNumbersto[13]]: {
        botPrompt: 'If Mary has 9 stickers and her friend gives her 5 more, but she gave away 3, how many stickers does Mary have now?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['10', '11', "12","13"]),
        answers: [
          {
            answer: '10',
            nextId: 'inadditioncorrectq14',
          },
          {
            answer: '11',
            nextId: 'inadditioncorrectq14',
          },
          {
            answer: "12",
            nextId: 'additioncorrectq14',
          },
          {
            answer: "13",
            nextId: 'inadditioncorrectq14',
          },
        ],
      },
      additioncorrectq14: {
        botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[14],
          },
        ],
      },
      inadditioncorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[14],
          },
        ],
      },
    
    
      //15
      
    ["addition"+shuffledNumbersto[14]]: {
        botPrompt: 'What is the sum of 32 and 46?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['67', '78', "88","98"]),
        answers: [
          {
            answer: '67',
            nextId: 'additioncorrectq15',
          },
          {
            answer: '78',
            nextId: 'inadditioncorrectq15',
          },
          {
            answer: "88",
            nextId: 'inadditioncorrectq15',
          },
          {
            answer: "98",
            nextId: 'inadditioncorrectq15',
          },
        ],
      },
      additioncorrectq15: {
        botPrompt: 'Hurray <strong>67</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[15],
          },
        ],
      },
      inadditioncorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"67"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[15],
          },
        ],
      },
    
    
       //16
    
    ["addition"+shuffledNumbersto[15]]: {
        botPrompt: 'What is the sum of 54 and 23?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['77', '76', "67","56"]),
        answers: [
          {
            answer: '77',
            nextId: 'additioncorrectq16',
          },
          {
            answer: '76',
            nextId: 'inadditioncorrectq16',
          },
          {
            answer: "67",
            nextId: 'inadditioncorrectq16',
          },
          {
            answer: "56",
            nextId: 'inadditioncorrectq16',
          },
        ],
      },
      additioncorrectq16: {
        botPrompt: 'Hurray <strong>77</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[16],
          },
        ],
      },
      inadditioncorrectq16: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"77"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[16],
          },
        ],
      },
    
       //17
    
    ["addition"+shuffledNumbersto[16]]: {
        botPrompt: 'What is the sum of 85 and 16?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['100', '101', "110","111"]),
        answers: [
          {
            answer: '100',
            nextId: 'inadditioncorrectq17',
          },
          {
            answer: '101',
            nextId: 'additioncorrectq17',
          },
          {
            answer: "110",
            nextId: 'inadditioncorrectq17',
          },
          {
            answer: "111",
            nextId: 'inadditioncorrectq17',
          },
        ],
      },
      additioncorrectq17: {
        botPrompt: 'Hurray <strong>101</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[17],
          },
        ],
      },
      inadditioncorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"101"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[17],
          },
        ],
      },
    
      //18
    
    ["addition"+shuffledNumbersto[17]]: {
        botPrompt: 'What is the sum of 47 and 28?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['64', '75', "81","94"]),
        answers: [
          {
            answer: '64',
            nextId: 'additioncorrectq18',
          },
          {
            answer: '75',
            nextId: 'inadditioncorrectq18',
          },
          {
            answer: "81",
            nextId: 'inadditioncorrectq18',
          },
          {
            answer: "94",
            nextId: 'inadditioncorrectq18',
          },
        ],
      },
      additioncorrectq18: {
        botPrompt: 'Hurray <strong>64</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[18],
          },
        ],
      },
      inadditioncorrectq18: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"64"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[18],
          },
        ],
      },
    
    
      //19
    
    ["addition"+shuffledNumbersto[18]]: {
        botPrompt: 'What is the sum of 18 and 29?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['36', '37', "47","48"]),
        answers: [
          {
            answer: '36',
            nextId: 'inadditioncorrectq19',
          },
          {
            answer: '37',
            nextId: 'additioncorrectq19',
          },
          {
            answer: "47",
            nextId: 'inadditioncorrectq19',
          },
          {
            answer: "48",
            nextId: 'inadditioncorrectq19',
          },
        ],
      },
      additioncorrectq19: {
        botPrompt: 'Hurray <strong>37</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[19],
          },
        ],
      },
      inadditioncorrectq19: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
        answers: [
          {
            nextId: 'addition'+shuffledNumbersto[19],
          },
        ],
      },
    
    
      //20
      
    ["addition"+shuffledNumbersto[19]]: {
      botPrompt: 'What is the sum of 63 and 24?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['87', '96', "107","116"]),
      answers: [
        {
          answer: '87',
          nextId: 'inadditioncorrectq20',
        },
        {
          answer: '96',
          nextId: 'additioncorrectq20',
        },
        {
          answer: "107",
          nextId: 'inadditioncorrectq20',
        },
        {
          answer: "116",
          nextId: 'inadditioncorrectq20',
        },
      ],
    },
    additioncorrectq20: {
      botPrompt: 'Hurray <strong>96</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[20],
        },
      ],
    },
    inadditioncorrectq20: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"96"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[20],
        },
      ],
    },
    
    //21
    
    ["addition"+shuffledNumbersto[20]]: {
      botPrompt: 'What is the sum of 26 and 37?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['53', '54', "64","65"]),
      answers: [
        {
          answer: '53',
          nextId: 'additioncorrectq21',
        },
        {
          answer: '54',
          nextId: 'inadditioncorrectq21',
        },
        {
          answer: "64",
          nextId: 'inadditioncorrectq21',
        },
        {
          answer: "65",
          nextId: 'inadditioncorrectq21',
        },
      ],
    },
    additioncorrectq21: {
      botPrompt: 'Hurray <strong>53</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[21],
        },
      ],
    },
    inadditioncorrectq21: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"53"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[21],
        },
      ],
    },
    
    //22
    
    ["addition"+shuffledNumbersto[21]]: {
      botPrompt: 'What is the sum of 81 and 17?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['98', '99', "100","101"]),
      answers: [
        {
          answer: '98',
          nextId: 'additioncorrectq22',
        },
        {
          answer: '99',
          nextId: 'inadditioncorrectq22',
        },
        {
          answer: "100",
          nextId: 'inadditioncorrectq22',
        },
        {
          answer: "101",
          nextId: 'inadditioncorrectq22',
        },
      ],
    },
    additioncorrectq22: {
      botPrompt: 'Hurray <strong>98</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[22],
        },
      ],
    },
    inadditioncorrectq22: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"98"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[22],
        },
      ],
    },
    
    
    //23
    
    ["addition"+shuffledNumbersto[22]]: {
      botPrompt: 'What is the sum of 14 and 25?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['37', '38', "39","40"]),
      answers: [
        {
          answer: '37',
          nextId: 'inadditioncorrectq23',
        },
        {
          answer: '38',
          nextId: 'additioncorrectq23',
        },
        {
          answer: "39",
          nextId: 'inadditioncorrectq23',
        },
        {
          answer: "40",
          nextId: 'inadditioncorrectq23',
        },
      ],
    },
    additioncorrectq23: {
      botPrompt: 'Hurray <strong>38</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[23],
        },
      ],
    },
    inadditioncorrectq23: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"38"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[23],
        },
      ],
    },
    
    
    //24
    
    ["addition"+shuffledNumbersto[23]]: {
      botPrompt: 'What is the sum of 63 and 12?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['74', '75', "85","86"]),
      answers: [
        {
          answer: '74',
          nextId: 'inadditioncorrectq24',
        },
        {
          answer: '75',
          nextId: 'additioncorrectq24',
        },
        {
          answer: "85",
          nextId: 'inadditioncorrectq24',
        },
        {
          answer: "86",
          nextId: 'inadditioncorrectq24',
        },
      ],
    },
    additioncorrectq24: {
      botPrompt: 'Hurray <strong>75</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[24],
        },
      ],
    },
    inadditioncorrectq24: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"75"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[24],
        },
      ],
    },
    
    //25
    
    ["addition"+shuffledNumbersto[24]]: {
      botPrompt: 'What is the sum of 57 and 29?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['76', '86', "97","106"]),
      answers: [
        {
          answer: '76',
          nextId: 'additioncorrectq25',
        },
        {
          answer: '86',
          nextId: 'inadditioncorrectq25',
        },
        {
          answer: "97",
          nextId: 'inadditioncorrectq25',
        },
        {
          answer: "106",
          nextId: 'inadditioncorrectq25',
        },
      ],
    },
    additioncorrectq25: {
      botPrompt: 'Hurray <strong>76</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[25],
        },
      ],
    },
    inadditioncorrectq25: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[25],
        },
      ],
    },
    
    
    //26
    
    ["addition"+shuffledNumbersto[25]]: {
      botPrompt: 'What is the sum of 39 and 48?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['76', '77', "86","87"]),
      answers: [
        {
          answer: '76',
          nextId: 'inadditioncorrectq26',
        },
        {
          answer: '77',
          nextId: 'inadditioncorrectq26',
        },
        {
          answer: "86",
          nextId: 'additioncorrectq26',
        },
        {
          answer: "87",
          nextId: 'inadditioncorrectq26',
        },
      ],
    },
    additioncorrectq26: {
      botPrompt: 'Hurray <strong>86</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[26],
        },
      ],
    },
    inadditioncorrectq26: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"86"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[26],
        },
      ],
    },
    
    
    //27
    
    ["addition"+shuffledNumbersto[26]]: {
      botPrompt: 'What is the sum of 22 and 33?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['44', '55', "66","77"]),
      answers: [
        {
          answer: '44',
          nextId: 'inadditioncorrectq27',
        },
        {
          answer: '55',
          nextId: 'additioncorrectq27',
        },
        {
          answer: "66",
          nextId: 'inadditioncorrectq27',
        },
        {
          answer: "77",
          nextId: 'inadditioncorrectq27',
        },
      ],
    },
    additioncorrectq27: {
      botPrompt: 'Hurray <strong>55</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[27],
        },
      ],
    },
    inadditioncorrectq27: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"55"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[27],
        },
      ],
    },
    
    
    //28
    
    ["addition"+shuffledNumbersto[27]]: {
      botPrompt: 'What is the sum of 234 and 156?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['370', '380', "390","400"]),
      answers: [
        {
          answer: '370',
          nextId: 'inadditioncorrectq28',
        },
        {
          answer: '380',
          nextId: 'inadditioncorrectq28',
        },
        {
          answer: "390",
          nextId: 'additioncorrectq28',
        },
        {
          answer: "400",
          nextId: 'inadditioncorrectq28',
        },
      ],
    },
    additioncorrectq28: {
      botPrompt: 'Hurray <strong>390</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[28],
        },
      ],
    },
    inadditioncorrectq28: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"390"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[28],
        },
      ],
    },
    
    
    //29
    
    ["addition"+shuffledNumbersto[28]]: {
      botPrompt: 'What is the sum of 568 and 277?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['835', '845', "855","865"]),
      answers: [
        {
          answer: '835',
          nextId: 'additioncorrectq29',
        },
        {
          answer: '845',
          nextId: 'inadditioncorrectq29',
        },
        {
          answer: "855",
          nextId: 'inadditioncorrectq29',
        },
        {
          answer: "865",
          nextId: 'inadditioncorrectq29',
        },
      ],
    },
    additioncorrectq29: {
      botPrompt: 'Hurray <strong>835</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[29],
        },
      ],
    },
    inadditioncorrectq29: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"835"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[29],
        },
      ],
    },
    
    
    
    //30
    
    ["addition"+shuffledNumbersto[29]]: {
      botPrompt: 'What is the sum of 122 and 56?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['168', '178', "188","198"]),
      answers: [
        {
          answer: '168',
          nextId: 'additioncorrectq30',
        },
        {
          answer: '178',
          nextId: 'inadditioncorrectq30',
        },
        {
          answer: "188",
          nextId: 'inadditioncorrectq30',
        },
        {
          answer: "198",
          nextId: 'inadditioncorrectq30',
        },
      ],
    },
    additioncorrectq30: {
      botPrompt: 'Hurray <strong>168</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[30],
        },
      ],
    },
    inadditioncorrectq30: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"168"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[30],
        },
      ],
    },
    
    
    
    //31
    
    ["addition"+shuffledNumbersto[30]]: {
      botPrompt: 'What is the sum of 49 and 78?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['127', '126', "137","136"]),
      answers: [
        {
          answer: '127',
          nextId: 'inadditioncorrectq31',
        },
        {
          answer: '126',
          nextId: '31additioncorrectq31',
        },
        {
          answer: "137",
          nextId: 'inadditioncorrectq31',
        },
        {
          answer: "136",
          nextId: 'additioncorrectq31',
        },
      ],
    },
    additioncorrectq31: {
      botPrompt: 'Hurray <strong>136</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[31],
        },
      ],
    },
    inadditioncorrectq31: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"136"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[31],
        },
      ],
    },
    
    
    //32
    
    ["addition"+shuffledNumbersto[31]]: {
      botPrompt: 'What is the sum of 83 and 49?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['131', '132', "142","152"]),
      answers: [
        {
          answer: '131',
          nextId: 'inadditioncorrectq32',
        },
        {
          answer: '132',
          nextId: 'additioncorrectq32',
        },
        {
          answer: "142",
          nextId: 'inadditioncorrectq32',
        },
        {
          answer: "152",
          nextId: 'inadditioncorrectq32',
        },
      ],
    },
    additioncorrectq32: {
      botPrompt: 'Hurray <strong>132</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[32],
        },
      ],
    },
    inadditioncorrectq32: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"132"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[32],
        },
      ],
    },
    
    
    //33
    
    ["addition"+shuffledNumbersto[32]]: {
      botPrompt: 'What is the sum of 326 and 489?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['804', '805', "825","815"]),
      answers: [
        {
          answer: '804',
          nextId: 'inadditioncorrectq33',
        },
        {
          answer: '805',
          nextId: 'inadditioncorrectq33',
        },
        {
          answer: "825",
          nextId: 'inadditioncorrectq33',
        },
        {
          answer: "815",
          nextId: 'additioncorrectq33',
        },
      ],
    },
    additioncorrectq33: {
      botPrompt: 'Hurray <strong>815</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[33],
        },
      ],
    },
    inadditioncorrectq33: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"815"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[33],
        },
      ],
    },
    
    
    //34

    ["addition"+shuffledNumbersto[33]]: {
      botPrompt: 'What is the sum of 472 and 587?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['955', '965', "975","985"]),
      answers: [
        {
          answer: '955',
          nextId: 'additioncorrectq34',
        },
        {
          answer: '965',
          nextId: 'inadditioncorrectq34',
        },
        {
          answer: "975",
          nextId: 'inadditioncorrectq34',
        },
        {
          answer: "985",
          nextId: 'inadditioncorrectq34',
        },
      ],
    },
    additioncorrectq34: {
      botPrompt: 'Hurray <strong>955</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[34],
        },
      ],
    },
    inadditioncorrectq034: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"955"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[34],
        },
      ],
    },
    
    
    //35
    
    ["addition"+shuffledNumbersto[34]]: {
      botPrompt: 'What is the sum of 169 and 294?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['443', '453', "463","473"]),
      answers: [
        {
          answer: '443',
          nextId: 'inadditioncorrectq35',
        },
        {
          answer: '453',
          nextId: 'inadditioncorrectq35',
        },
        {
          answer: "463",
          nextId: 'additioncorrectq35',
        },
        {
          answer: "473",
          nextId: 'inadditioncorrectq35',
        },
      ],
    },
    additioncorrectq35: {
      botPrompt: 'Hurray <strong>463</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[35],
        },
      ],
    },
    inadditioncorrectq35: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"463"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[35],
        },
      ],
    },
    
    
    //36
    
    ["addition"+shuffledNumbersto[35]]: {
      botPrompt: 'What is the sum of 321 and 456?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['777', '767', "765","787"]),
      answers: [
        {
          answer: '777',
          nextId: 'inadditioncorrectq36',
        },
        {
          answer: '767',
          nextId: 'inadditioncorrectq36',
        },
        {
          answer: "765",
          nextId: 'inadditioncorrectq36',
        },
        {
          answer: "787",
          nextId: 'additioncorrectq36',
        },
      ],
    },
    additioncorrectq36: {
      botPrompt: 'Hurray <strong>787</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[36],
        },
      ],
    },
    inadditioncorrectq36: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"787"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[36],
        },
      ],
    },
    
    
    //37
    
    ["addition"+shuffledNumbersto[36]]: {
      botPrompt: 'What is the sum of 354 and 467?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['811', '821', "831","841"]),
      answers: [
        {
          answer: '811',
          nextId: 'inadditioncorrectq37',
        },
        {
          answer: '821',
          nextId: 'additioncorrectq37',
        },
        {
          answer: "831",
          nextId: 'inadditioncorrectq37',
        },
        {
          answer: "841",
          nextId: 'inadditioncorrectq37',
        },
      ],
    },
    additioncorrectq37: {
      botPrompt: 'Hurray <strong>821</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[37],
        },
      ],
    },
    inadditioncorrectq37: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"821"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[37],
        },
      ],
    },
    
    //38
    
    ["addition"+shuffledNumbersto[37]]: {
      botPrompt: 'What is the sum of 159 and 276?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['426', '436', "446","456"]),
      answers: [
        {
          answer: '426',
          nextId: 'inadditioncorrectq38',
        },
        {
          answer: '436',
          nextId: 'additioncorrectq38',
        },
        {
          answer: "446",
          nextId: 'inadditioncorrectq38',
        },
        {
          answer: "456",
          nextId: 'inadditioncorrectq38',
        },
      ],
    },
    additioncorrectq38: {
      botPrompt: 'Hurray <strong>436</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[38],
        },
      ],
    },
    inadditioncorrectq38: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"436"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[38],
        },
      ],
    },
    
    
    //39
    
    ["addition"+shuffledNumbersto[38]]: {
      botPrompt: 'What is the sum of 789 and 123?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['901', '902', "912","922"]),
      answers: [
        {
          answer: '901',
          nextId: 'inadditioncorrectq39',
        },
        {
          answer: '902',
          nextId: 'inadditioncorrectq39',
        },
        {
          answer: "912",
          nextId: 'additioncorrectq39',
        },
        {
          answer: "922",
          nextId: 'inadditioncorrectq39',
        },
      ],
    },
    additioncorrectq39: {
      botPrompt: 'Hurray <strong>912</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[39],
        },
      ],
    },
    inadditioncorrectq39: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"912"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[39],
        },
      ],
    },
    
    
    //40
    
    ["addition"+shuffledNumbersto[39]]: {
      botPrompt: 'What is the sum of 68 and 36?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['102', '103', "104","105"]),
      answers: [
        {
          answer: '102',
          nextId: 'inadditioncorrectq40',
        },
        {
          answer: '103',
          nextId: 'additioncorrectq40',
        },
        {
          answer: "104",
          nextId: 'inadditioncorrectq40',
        },
        {
          answer: "105",
          nextId: 'inadditioncorrectq40',
        },
      ],
    },
    additioncorrectq40: {
      botPrompt: 'Hurray <strong>103</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[40],
        },
      ],
    },
    inadditioncorrectq40: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"103"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[40],
        },
      ],
    },
    
    
    //41
    
    ["addition"+shuffledNumbersto[40]]: {
      botPrompt: 'What is the sum of 63 and 28?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['81', '82', "91","92"]),
      answers: [
        {
          answer: '81',
          nextId: 'inadditioncorrectq41',
        },
        {
          answer: '82',
          nextId: 'additioncorrectq41',
        },
        {
          answer: "91",
          nextId: 'inadditioncorrectq41',
        },
        {
          answer: "92",
          nextId: 'inadditioncorrectq41',
        },
      ],
    },
    additioncorrectq41: {
      botPrompt: 'Hurray <strong>82</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[41],
        },
      ],
    },
    inadditioncorrectq41: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"82"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[41],
        },
      ],
    },
    
    
    //42
    
    ["addition"+shuffledNumbersto[41]]: {
      botPrompt: 'What is the sum of 47 and 39?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['76', '86', "96","107"]),
      answers: [
        {
          answer: '76',
          nextId: 'additioncorrectq42',
        },
        {
          answer: '86',
          nextId: 'inadditioncorrectq42',
        },
        {
          answer: "96",
          nextId: 'inadditioncorrectq42',
        },
        {
          answer: "107",
          nextId: 'inadditioncorrectq42',
        },
      ],
    },
    additioncorrectq42: {
      botPrompt: 'Hurray <strong>76</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[42],
        },
      ],
    },
    inadditioncorrectq42: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"76"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[42],
        },
      ],
    },
    
    
    //43
    
    
    ["addition"+shuffledNumbersto[42]]: {
      botPrompt: 'Alice has 4 apples, and her friend gave her 3 more apples. How many apples does Alice have in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['6', '7', "8","9"]),
      answers: [
        {
          answer: '6',
          nextId: 'inadditioncorrectq43',
        },
        {
          answer: '7',
          nextId: 'additioncorrectq43',
        },
        {
          answer: "8",
          nextId: 'inadditioncorrectq43',
        },
        {
          answer: "9",
          nextId: 'inadditioncorrectq43',
        },
      ],
    },
    additioncorrectq43: {
      botPrompt: 'Hurray <strong>7</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[43],
        },
      ],
    },
    inadditioncorrectq43: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"7"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[43],
        },
      ],
    },
    
    
    //44
    
    ["addition"+shuffledNumbersto[43]]: {
      botPrompt: 'Tim has 7 toy cars, and his brother gave him 4 more toy cars. How many toy cars does Tim have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['10', '11', "12","13"]),
      answers: [
        {
          answer: '10',
          nextId: 'inadditioncorrectq44',
        },
        {
          answer: '11',
          nextId: 'inadditioncorrectq44',
        },
        {
          answer: "12",
          nextId: 'additioncorrectq44',
        },
        {
          answer: "13",
          nextId: 'inadditioncorrectq44',
        },
      ],
    },
    additioncorrectq44: {
      botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[44],
        },
      ],
    },
    inadditioncorrectq44: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[44],
        },
      ],
    },
    
    
    //45
    
    ["addition"+shuffledNumbersto[44]]: {
      botPrompt: 'If John has 9 candies and he eats 3 candies, how many candies does he have left?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['3', '4', "5","6"]),
      answers: [
        {
          answer: '3',
          nextId: 'inadditioncorrectq45',
        },
        {
          answer: '4',
          nextId: 'inadditioncorrectq45',
        },
        {
          answer: "5",
          nextId: 'inadditioncorrectq45',
        },
        {
          answer: "6",
          nextId: 'additioncorrectq45',
        },
      ],
    },
    additioncorrectq45: {
      botPrompt: 'Hurray <strong>6</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[45],
        },
      ],
    },
    inadditioncorrectq45: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"00"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[45],
        },
      ],
    },
    
    
    //46
    
    ["addition"+shuffledNumbersto[45]]: {
      botPrompt: 'If a bee has 5 flowers and it collects 3 more flowers, how many flowers does the bee have in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['7', '8', "9","10"]),
      answers: [
        {
          answer: '7',
          nextId: 'inadditioncorrectq46',
        },
        {
          answer: '8',
          nextId: 'additioncorrectq46',
        },
        {
          answer: "9",
          nextId: 'inadditioncorrectq46',
        },
        {
          answer: "10",
          nextId: 'inadditioncorrectq46',
        },
      ],
    },
    additioncorrectq46: {
      botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[46],
        },
      ],
    },
    inadditioncorrectq46: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[46],
        },
      ],
    },
    
    
    //47
    
    ["addition"+shuffledNumbersto[46]]: {
      botPrompt: 'There are 6 birds on a tree. If 2 more birds join them, how many birds are there in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['7', '8', "9","10"]),
      answers: [
        {
          answer: '7',
          nextId: 'inadditioncorrectq47',
        },
        {
          answer: '8',
          nextId: 'additioncorrectq47',
        },
        {
          answer: "9",
          nextId: 'inadditioncorrectq47',
        },
        {
          answer: "10",
          nextId: 'inadditioncorrectq47',
        },
      ],
    },
    additioncorrectq47: {
      botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[47],
        },
      ],
    },
    inadditioncorrectq47: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[47],
        },
      ],
    },
    
    
    //48
    
    ["addition"+shuffledNumbersto[47]]: {
      botPrompt: 'There are 8 ducks in a pond. 4 more ducks come and join them. How many ducks are there now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['10', '11', "12","13"]),
      answers: [
        {
          answer: '10',
          nextId: 'inadditioncorrectq48',
        },
        {
          answer: '11',
          nextId: 'inadditioncorrectq48',
        },
        {
          answer: "12",
          nextId: 'additioncorrectq48',
        },
        {
          answer: "13",
          nextId: 'inadditioncorrectq48',
        },
      ],
    },
    additioncorrectq48: {
      botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[48],
        },
      ],
    },
    inadditioncorrectq48: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[48],
        },
      ],
    },
    
    
    //49
    
    ["addition"+shuffledNumbersto[48]]: {
      botPrompt: 'If Sally has 12 crayons, and she gives 3 to her friend, how many crayons does Sally have left?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['7', '8', "9","10"]),
      answers: [
        {
          answer: '7',
          nextId: 'additioncorrectq49',
        },
        {
          answer: '8',
          nextId: 'inadditioncorrectq49',
        },
        {
          answer: "9",
          nextId: 'inadditioncorrectq49',
        },
        {
          answer: "10",
          nextId: 'inadditioncorrectq49',
        },
      ],
    },
    additioncorrectq49: {
      botPrompt: 'Hurray <strong>7</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[49],
        },
      ],
    },
    inadditioncorrectq49: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>7"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[49],
        },
      ],
    },
    
    
    //50
    
    ["addition"+shuffledNumbersto[49]]: {
      botPrompt: 'There are 5 children playing in a park. If 2 more children come to join them, how many children are there in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['6', '7', "8","9"]),
      answers: [
        {
          answer: '6',
          nextId: 'inadditioncorrectq50',
        },
        {
          answer: '7',
          nextId: 'inadditioncorrectq50',
        },
        {
          answer: "8",
          nextId: 'additioncorrectq50',
        },
        {
          answer: "9",
          nextId: 'inadditioncorrectq50',
        },
      ],
    },
    additioncorrectq50: {
      botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[50],
        },
      ],
    },
    inadditioncorrectq50: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[50],
        },
      ],
    },
    
    
    //51
    
    ["addition"+shuffledNumbersto[50]]: {
      botPrompt: 'There are 8 puppies and 5 kittens playing in a park. How many animals are playing in the park in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['10', '12', "13","14"]),
      answers: [
        {
          answer: '10',
          nextId: 'inadditioncorrectq51',
        },
        {
          answer: '12',
          nextId: 'additioncorrectq51',
        },
        {
          answer: "13",
          nextId: 'inadditioncorrectq51',
        },
        {
          answer: "14",
          nextId: 'inadditioncorrectq51',
        },
      ],
    },
    additioncorrectq51: {
      botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[51],
        },
      ],
    },
    inadditioncorrectq51: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[51],
        },
      ],
    },
    
    
    //52
    
    ["addition"+shuffledNumbersto[51]]: {
      botPrompt: 'Sarah has 14 stickers, and her friend gives her 8 more stickers. How many stickers does Sarah have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['20', '21', "22","23"]),
      answers: [
        {
          answer: '20',
          nextId: 'inadditioncorrectq52',
        },
        {
          answer: '21',
          nextId: 'inadditioncorrectq52',
        },
        {
          answer: "22",
          nextId: 'inadditioncorrectq52',
        },
        {
          answer: "23",
          nextId: 'additioncorrectq52',
        },
      ],
    },
    additioncorrectq52: {
      botPrompt: 'Hurray <strong>23</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[52],
        },
      ],
    },
    inadditioncorrectq52: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"23"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[52],
        },
      ],
    },
    
    
    //53
    
    ["addition"+shuffledNumbersto[52]]: {
      botPrompt: 'If a store has 27 pencils and a customer buys 14 of them, how many pencils are left in the store?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['10', '11', "12","13"]),
      answers: [
        {
          answer: '10',
          nextId: 'inadditioncorrectq53',
        },
        {
          answer: '11',
          nextId: 'inadditioncorrectq53',
        },
        {
          answer: "12",
          nextId: 'additioncorrectq53',
        },
        {
          answer: "13",
          nextId: 'inadditioncorrectq53',
        },
      ],
    },
    additioncorrectq53: {
      botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[53],
        },
      ],
    },
    inadditioncorrectq53: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[53],
        },
      ],
    },
    
    
    
    //54
    
    ["addition"+shuffledNumbersto[53]]: {
      botPrompt: 'John has 834 marbles and his brother gave him 476 more marbles. How many marbles does John have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['1210', '1304', "1310","1312"]),
      answers: [
        {
          answer: '1210',
          nextId: 'inadditioncorrectq54',
        },
        {
          answer: '1304',
          nextId: 'inadditioncorrectq54',
        },
        {
          answer: "1310",
          nextId: 'additioncorrectq54',
        },
        {
          answer: "1312",
          nextId: 'inadditioncorrectq54',
        },
      ],
    },
    additioncorrectq54: {
      botPrompt: 'Hurray <strong>1310</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[54],
        },
      ],
    },
    inadditioncorrectq54: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1310"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[54],
        },
      ],
    },
    
    
    //55
    
    ["addition"+shuffledNumbersto[54]]: {
      botPrompt: 'If a store sold 183 video games on Monday and 237 on Tuesday, how many video games were sold in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['400', '413', "420","421"]),
      answers: [
        {
          answer: '400',
          nextId: 'inadditioncorrectq55',
        },
        {
          answer: '413',
          nextId: 'inadditioncorrectq55',
        },
        {
          answer: "420",
          nextId: 'additioncorrectq55',
        },
        {
          answer: "421",
          nextId: 'inadditioncorrectq55',
        },
      ],
    },
    additioncorrectq55: {
      botPrompt: 'Hurray <strong>420</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[55],
        },
      ],
    },
    inadditioncorrectq55: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"420"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[55],
        },
      ],
    },
    
    
    //56
    
    ["addition"+shuffledNumbersto[55]]: {
      botPrompt: 'Lisa collected 345 shells at the beach and her sister collected 296 shells. How many shells did they collect in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['641', '651', "635","640"]),
      answers: [
        {
          answer: '641',
          nextId: 'additioncorrectq56',
        },
        {
          answer: '651',
          nextId: 'inadditioncorrectq56',
        },
        {
          answer: "635",
          nextId: 'inadditioncorrectq56',
        },
        {
          answer: "640",
          nextId: 'inadditioncorrectq56',
        },
      ],
    },
    additioncorrectq56: {
      botPrompt: 'Hurray <strong>641</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[56],
        },
      ],
    },
    inadditioncorrectq56: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"641"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[56],
        },
      ],
    },
    
    
    //57
    
    ["addition"+shuffledNumbersto[56]]: {
      botPrompt: 'A bag has 256 marbles and another bag has 187 marbles. If they are combined, how many marbles are there?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['432', '433', "442","443"]),
      answers: [
        {
          answer: '432',
          nextId: 'inadditioncorrectq57',
        },
        {
          answer: '433',
          nextId: 'inadditioncorrectq57',
        },
        {
          answer: "442",
          nextId: 'inadditioncorrectq57',
        },
        {
          answer: "443",
          nextId: 'additioncorrectq57',
        },
      ],
    },
    additioncorrectq57: {
      botPrompt: 'Hurray <strong>443</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[57],
        },
      ],
    },
    inadditioncorrectq57: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"443"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[57],
        },
      ],
    },
    
    
    
    //58
    
    ["addition"+shuffledNumbersto[57]]: {
      botPrompt: 'Mary bought 35 stickers on Monday, 46 stickers on Tuesday, and 27 stickers on Wednesday. How many stickers did she buy in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['106', '107', "108","108"]),
      answers: [
        {
          answer: '106',
          nextId: 'inadditioncorrectq58',
        },
        {
          answer: '107',
          nextId: 'inadditioncorrectq58',
        },
        {
          answer: "108",
          nextId: 'additioncorrectq58',
        },
        {
          answer: "109",
          nextId: 'inadditioncorrectq58',
        },
      ],
    },
    additioncorrectq58: {
      botPrompt: 'Hurray <strong>108</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[58],
        },
      ],
    },
    inadditioncorrectq58: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"108"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[58],
        },
      ],
    },
    
    
    //59
    
    ["addition"+shuffledNumbersto[58]]: {
      botPrompt: 'In a toy store, there are 183 dolls and 257 toy cars. How many toys are there in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['420', '440', "450","460"]),
      answers: [
        {
          answer: '420',
          nextId: 'inadditioncorrectq59',
        },
        {
          answer: '440',
          nextId: 'additioncorrectq59',
        },
        {
          answer: "450",
          nextId: 'inadditioncorrectq59',
        },
        {
          answer: "460",
          nextId: 'inadditioncorrectq59',
        },
      ],
    },
    additioncorrectq59: {
      botPrompt: 'Hurray <strong>440</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[59],
        },
      ],
    },
    inadditioncorrectq59: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"440"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[59],
        },
      ],
    },
    
    
    //60
    
    ["addition"+shuffledNumbersto[59]]: {
      botPrompt: 'Jennifer has 8 dolls and her friend gave her 4 more dolls. How many dolls does Jennifer have in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['10', '11', "12","13"]),
      answers: [
        {
          answer: '10',
          nextId: 'inadditioncorrectq60',
        },
        {
          answer: '11',
          nextId: 'inadditioncorrectq60',
        },
        {
          answer: "12",
          nextId: 'additioncorrectq60',
        },
        {
          answer: "13",
          nextId: 'inadditioncorrectq60',
        },
      ],
    },
    additioncorrectq60: {
      botPrompt: 'Hurray <strong>12</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[60],
        },
      ],
    },
    inadditioncorrectq60: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"12"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[60],
        },
      ],
    },
    
    
    //61
    
    ["addition"+shuffledNumbersto[60]]: {
      botPrompt: 'A classroom has 28 girls and 24 boys. How many children are in the classroom in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['49', '52', "53","56"]),
      answers: [
        {
          answer: '49',
          nextId: 'inadditioncorrectq61',
        },
        {
          answer: '52',
          nextId: 'additioncorrectq61',
        },
        {
          answer: "53",
          nextId: 'inadditioncorrectq61',
        },
        {
          answer: "56",
          nextId: 'inadditioncorrectq61',
        },
      ],
    },
    additioncorrectq61: {
      botPrompt: 'Hurray <strong>52</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[61],
        },
      ],
    },
    inadditioncorrectq61: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"52"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[61],
        },
      ],
    },
    
    
    //62
    
    ["addition"+shuffledNumbersto[61]]: {
      botPrompt: 'In a bakery, 256 cupcakes were sold on Monday and 365 cupcakes were sold on Tuesday. How many cupcakes were sold in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['621', '611', "610","622"]),
      answers: [
        {
          answer: '621',
          nextId: 'additioncorrectq62',
        },
        {
          answer: '611',
          nextId: 'inadditioncorrectq62',
        },
        {
          answer: "610",
          nextId: 'inadditioncorrectq62',
        },
        {
          answer: "622",
          nextId: 'inadditioncorrectq62',
        },
      ],
    },
    additioncorrectq62: {
      botPrompt: 'Hurray <strong>621</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[62],
        },
      ],
    },
    inadditioncorrectq62: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"621"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[62],
        },
      ],
    },
    
    
    //63
    
    ["addition"+shuffledNumbersto[62]]: {
      botPrompt: 'At a fruit stall, 324 apples were sold on Monday and 187 apples were sold on Tuesday. How many apples are left at the stall if they had 1000 apples initially?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['456', '478', "485","425"]),
      answers: [
        {
          answer: '456',
          nextId: 'inadditioncorrectq63',
        },
        {
          answer: '478',
          nextId: 'additioncorrectq63',
        },
        {
          answer: "485",
          nextId: 'inadditioncorrectq63',
        },
        {
          answer: "425",
          nextId: 'inadditioncorrectq63',
        },
      ],
    },
    additioncorrectq63: {
      botPrompt: 'Hurray <strong>478</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[63],
        },
      ],
    },
    inadditioncorrectq63: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"478"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[63],
        },
      ],
    },
    
    
    //64
    
    ["addition"+shuffledNumbersto[63]]: {
      botPrompt: 'Jack has 17 toy cars and his friend gave him 23 more. How many toy cars does Jack have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['36', '37', "40","41"]),
      answers: [
        {
          answer: '36',
          nextId: 'inadditioncorrectq64',
        },
        {
          answer: '37',
          nextId: 'inadditioncorrectq64',
        },
        {
          answer: "40",
          nextId: 'additioncorrectq64',
        },
        {
          answer: "41",
          nextId: 'inadditioncorrectq64',
        },
      ],
    },
    additioncorrectq64: {
      botPrompt: 'Hurray <strong>40</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[64],
        },
      ],
    },
    inadditioncorrectq64: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"40"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[64],
        },
      ],
    },
    
    
    
    //65
    
    ["addition"+shuffledNumbersto[64]]: {
      botPrompt: 'A school has 685 students and another school has 786 students. How many students are there in both schools combined?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['1,450', '1,371', "1,561","1,471"]),
      answers: [
        {
          answer: '1,450',
          nextId: 'inadditioncorrectq65',
        },
        {
          answer: '1,371',
          nextId: 'inadditioncorrectq65',
        },
        {
          answer: "1,561",
          nextId: 'inadditioncorrectq65',
        },
        {
          answer: "1,471",
          nextId: 'additioncorrectq65',
        },
      ],
    },
    additioncorrectq65: {
      botPrompt: 'Hurray <strong>1,471</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[65],
        },
      ],
    },
    inadditioncorrectq65: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1,471"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[65],
        },
      ],
    },
    
    
    
    //66
    
    ["addition"+shuffledNumbersto[65]]: {
      botPrompt: 'A bakery made 216 cakes in the morning and 364 cakes in the afternoon. How many cakes did the bakery make in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['558', '570', "580","590"]),
      answers: [
        {
          answer: '558',
          nextId: 'inadditioncorrectq66',
        },
        {
          answer: '570',
          nextId: 'inadditioncorrectq66',
        },
        {
          answer: "580",
          nextId: 'additioncorrectq66',
        },
        {
          answer: "590",
          nextId: 'inadditioncorrectq66',
        },
      ],
    },
    additioncorrectq66: {
      botPrompt: 'Hurray <strong>580</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[66],
        },
      ],
    },
    inadditioncorrectq66: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"580"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[66],
        },
      ],
    },
    
    
    
    //67
    
    ["addition"+shuffledNumbersto[66]]: {
      botPrompt: 'Tom has 15 stickers and he bought 38 more. How many stickers does Tom have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['48', '51', "53","57"]),
      answers: [
        {
          answer: '48',
          nextId: 'inadditioncorrectq67',
        },
        {
          answer: '51',
          nextId: 'inadditioncorrectq67',
        },
        {
          answer: "53",
          nextId: 'inadditioncorrectq67',
        },
        {
          answer: "57",
          nextId: 'additioncorrectq67',
        },
      ],
    },
    additioncorrectq67: {
      botPrompt: 'Hurray <strong>57</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[67],
        },
      ],
    },
    inadditioncorrectq67: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"57"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[67],
        },
      ],
    },
    
    
    
    //68
    
    ["addition"+shuffledNumbersto[67]]: {
      botPrompt: 'A factory produces 548 toys in a day and 246 toys in a night shift. How many toys are produced in 2 days and 2 night shifts?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['2,296', '2,364', "2,690","2,884"]),
      answers: [
        {
          answer: '2,296',
          nextId: 'additioncorrectq68',
        },
        {
          answer: '2,364',
          nextId: 'inadditioncorrectq68',
        },
        {
          answer: "2,690",
          nextId: 'inadditioncorrectq68',
        },
        {
          answer: "2,884",
          nextId: 'inadditioncorrectq68',
        },
      ],
    },
    additioncorrectq68: {
      botPrompt: 'Hurray <strong>2,296</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[68],
        },
      ],
    },
    inadditioncorrectq68: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"2,296"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[68],
        },
      ],
    },
    
    
    
    //69
    
    ["addition"+shuffledNumbersto[68]]: {
      botPrompt: 'Emma has 673 crayons and she gave 187 crayons to her friends. How many crayons does Emma have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['496', '486', "487","488"]),
      answers: [
        {
          answer: '496',
          nextId: 'additioncorrectq69',
        },
        {
          answer: '486',
          nextId: 'inadditioncorrectq69',
        },
        {
          answer: "487",
          nextId: 'inadditioncorrectq69',
        },
        {
          answer: "488",
          nextId: 'inadditioncorrectq69',
        },
      ],
    },
    additioncorrectq69: {
      botPrompt: 'Hurray <strong>496</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[69],
        },
      ],
    },
    inadditioncorrectq69: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"496"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[69],
        },
      ],
    },
    
    
    
    //70
    
    ["addition"+shuffledNumbersto[69]]: {
      botPrompt: 'John earned $356 in a week and $512 in the following week. How much money did John earn in 2 weeks?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['$868', '$872', "$846","$858"]),
      answers: [
        {
          answer: '$868',
          nextId: 'inadditioncorrectq70',
        },
        {
          answer: '$872',
          nextId: 'additioncorrectq70',
        },
        {
          answer: "$846",
          nextId: 'inadditioncorrectq70',
        },
        {
          answer: "$858",
          nextId: 'inadditioncorrectq70',
        },
      ],
    },
    additioncorrectq70: {
      botPrompt: 'Hurray <strong>$872</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[70],
        },
      ],
    },
    inadditioncorrectq70: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"$872"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[70],
        },
      ],
    },
    
    
    
    //71
    
    ["addition"+shuffledNumbersto[70]]: {
      botPrompt: 'A garden has 135 yellow flowers and 273 red flowers. How many more red flowers are there than yellow flowers?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['135', '145', "137","138"]),
      answers: [
        {
          answer: '135',
          nextId: 'inadditioncorrectq71',
        },
        {
          answer: '145',
          nextId: 'inadditioncorrectq71',
        },
        {
          answer: "137",
          nextId: 'inadditioncorrectq71',
        },
        {
          answer: "138",
          nextId: 'additioncorrectq71',
        },
      ],
    },
    additioncorrectq71: {
      botPrompt: 'Hurray <strong>138</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[71],
        },
      ],
    },
    inadditioncorrectq71: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"138"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[71],
        },
      ],
    },
    
    
    
    //72
    
    ["addition"+shuffledNumbersto[71]]: {
      botPrompt: 'A store has 250 notebooks and 175 pens. How many more notebooks does the store have than pens?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['75', '80', "85","90"]),
      answers: [
        {
          answer: '75',
          nextId: 'additioncorrectq72',
        },
        {
          answer: '80',
          nextId: 'inadditioncorrectq72',
        },
        {
          answer: "85",
          nextId: 'inadditioncorrectq72',
        },
        {
          answer: "90",
          nextId: 'inadditioncorrectq72',
        },
      ],
    },
    additioncorrectq72: {
      botPrompt: 'Hurray <strong>75</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[72],
        },
      ],
    },
    inadditioncorrectq72: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"75"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[72],
        },
      ],
    },
    
    
    
    //73
    
    ["addition"+shuffledNumbersto[72]]: {
      botPrompt: 'A pizza parlor made 765 pizzas on Monday and 983 pizzas on Tuesday. How many pizzas did the parlor make in those two days?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['1,617', '1,728', "1,048","1,748"]),
      answers: [
        {
          answer: '1,617',
          nextId: 'inadditioncorrectq73',
        },
        {
          answer: '1,728',
          nextId: 'additioncorrectq73',
        },
        {
          answer: "1,048",
          nextId: 'inadditioncorrectq73',
        },
        {
          answer: "1,748",
          nextId: 'inadditioncorrectq73',
        },
      ],
    },
    additioncorrectq73: {
      botPrompt: 'Hurray <strong>1,728</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[73],
        },
      ],
    },
    inadditioncorrectq73: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1,728"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[73],
        },
      ],
    },
    
    
    
    
    //74
    
    ["addition"+shuffledNumbersto[73]]: {
      botPrompt: 'What is the sum of 276 and 398?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['563', '664', "674","764"]),
      answers: [
        {
          answer: '563',
          nextId: 'inadditioncorrectq74',
        },
        {
          answer: '664',
          nextId: 'inadditioncorrectq74',
        },
        {
          answer: "674",
          nextId: 'additioncorrectq74',
        },
        {
          answer: "764",
          nextId: 'inadditioncorrectq74',
        },
      ],
    },
    additioncorrectq74: {
      botPrompt: 'Hurray <strong>674</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[74],
        },
      ],
    },
    inadditioncorrectq74: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"674"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[74],
        },
      ],
    },
    
    
    
    //75
    
    ["addition"+shuffledNumbersto[74]]: {
      botPrompt: 'If Peter has 42 marbles and he gets 57 more, how many does he have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['89', '99', "100","109"]),
      answers: [
        {
          answer: '89',
          nextId: 'inadditioncorrectq75',
        },
        {
          answer: '99',
          nextId: 'inadditioncorrectq75',
        },
        {
          answer: "100",
          nextId: 'inadditioncorrectq75',
        },
        {
          answer: "109",
          nextId: 'additioncorrectq75',
        },
      ],
    },
    additioncorrectq75: {
      botPrompt: 'Hurray <strong>109</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[75],
        },
      ],
    },
    inadditioncorrectq00: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"109"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[75],
        },
      ],
    },
    
    
    
    //76
    
    ["addition"+shuffledNumbersto[75]]: {
      botPrompt: 'What is the value of x in the equation: 120 + x = 319?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['169', '189', "199","209"]),
      answers: [
        {
          answer: '169',
          nextId: 'additioncorrectq76',
        },
        {
          answer: '189',
          nextId: 'inadditioncorrectq76',
        },
        {
          answer: "199",
          nextId: 'inadditioncorrectq76',
        },
        {
          answer: "209",
          nextId: 'inadditioncorrectq76',
        },
      ],
    },
    additioncorrectq76: {
      botPrompt: 'Hurray <strong>169</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[76],
        },
      ],
    },
    inadditioncorrectq76: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"169"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[76],
        },
      ],
    },
    
    
    //77
    
    ["addition"+shuffledNumbersto[76]]: {
      botPrompt: 'Samantha has 568 crayons and her brother gives her 239 more, how many does she have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['797', '805', "807","837"]),
      answers: [
        {
          answer: '797',
          nextId: 'additioncorrectq77',
        },
        {
          answer: '805',
          nextId: 'inadditioncorrectq77',
        },
        {
          answer: "807",
          nextId: 'inadditioncorrectq77',
        },
        {
          answer: "837",
          nextId: 'inadditioncorrectq77',
        },
      ],
    },
    additioncorrectq77: {
      botPrompt: 'Hurray <strong>797</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[77],
        },
      ],
    },
    inadditioncorrectq77: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"797"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[77],
        },
      ],
    },
    
    
    //78
    
    ["addition"+shuffledNumbersto[77]]: {
      botPrompt: 'If you add 99 and 102, what is the sum?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['196', '200', "201","204"]),
      answers: [
        {
          answer: '196',
          nextId: 'inadditioncorrectq78',
        },
        {
          answer: '200',
          nextId: 'inadditioncorrectq78',
        },
        {
          answer: "201",
          nextId: 'additioncorrectq78',
        },
        {
          answer: "204",
          nextId: 'inadditioncorrectq78',
        },
      ],
    },
    additioncorrectq78: {
      botPrompt: 'Hurray <strong>201</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[78],
        },
      ],
    },
    inadditioncorrectq78: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"201"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[78],
        },
      ],
    },
    
    
    //79
    
    ["addition"+shuffledNumbersto[78]]: {
      botPrompt: 'What is the sum of 721 and 475?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['1169', '1196', "1197","1246"]),
      answers: [
        {
          answer: '1169',
          nextId: 'inadditioncorrectq79',
        },
        {
          answer: '1196',
          nextId: 'additioncorrectq79',
        },
        {
          answer: "1197",
          nextId: 'inadditioncorrectq79',
        },
        {
          answer: "1246",
          nextId: 'inadditioncorrectq79',
        },
      ],
    },
    additioncorrectq79: {
      botPrompt: 'Hurray <strong>1196</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[79],
        },
      ],
    },
    inadditioncorrectq79: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1196"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[79],
        },
      ],
    },
    
    
    //80
    
    ["addition"+shuffledNumbersto[79]]: {
      botPrompt: 'If Maria has 157 stickers and her friend gives her 68 more, how many does she have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['215', '222', "225","229"]),
      answers: [
        {
          answer: '215',
          nextId: 'inadditioncorrectq80',
        },
        {
          answer: '222',
          nextId: 'additioncorrectq80',
        },
        {
          answer: "225",
          nextId: 'inadditioncorrectq80',
        },
        {
          answer: "229",
          nextId: 'inadditioncorrectq80',
        },
      ],
    },
    additioncorrectq80: {
      botPrompt: 'Hurray <strong>222</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[80],
        },
      ],
    },
    inadditioncorrectq80: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"222"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[80],
        },
      ],
    },
    
    
    //81
    
    ["addition"+shuffledNumbersto[80]]: {
      botPrompt: 'What is the sum of 333, 444 and 555?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['1233', '1332', "1443","1542"]),
      answers: [
        {
          answer: '1233',
          nextId: 'inadditioncorrectq81',
        },
        {
          answer: '1332',
          nextId: 'inadditioncorrectq81',
        },
        {
          answer: "1443",
          nextId: 'additioncorrectq81',
        },
        {
          answer: "1542",
          nextId: 'inadditioncorrectq81',
        },
      ],
    },
    additioncorrectq81: {
      botPrompt: 'Hurray <strong>1443</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[81],
        },
      ],
    },
    inadditioncorrectq81: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1443"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[81],
        },
      ],
    },
    
    
    //82
    
    ["addition"+shuffledNumbersto[81]]: {
      botPrompt: 'There are 482 students in a school and 214 more join. What is the total number of students now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['646', '686', "696","726"]),
      answers: [
        {
          answer: '646',
          nextId: 'additioncorrectq82',
        },
        {
          answer: '686',
          nextId: 'inadditioncorrectq82',
        },
        {
          answer: "696",
          nextId: 'inadditioncorrectq82',
        },
        {
          answer: "726",
          nextId: 'inadditioncorrectq82',
        },
      ],
    },
    additioncorrectq82: {
      botPrompt: 'Hurray <strong>646</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[82],
        },
      ],
    },
    inadditioncorrectq82: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"646"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[82],
        },
      ],
    },
    
    
    //83
    
    ["addition"+shuffledNumbersto[82]]: {
      botPrompt: 'What is the sum of 72 and 85?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['136', '147', "157","165"]),
      answers: [
        {
          answer: '136',
          nextId: 'inadditioncorrectq83',
        },
        {
          answer: '147',
          nextId: 'additioncorrectq83',
        },
        {
          answer: "157",
          nextId: 'inadditioncorrectq83',
        },
        {
          answer: "165",
          nextId: 'inadditioncorrectq83',
        },
      ],
    },
    additioncorrectq83: {
      botPrompt: 'Hurray <strong>147</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[83],
        },
      ],
    },
    inadditioncorrectq83: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"147"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[83],
        },
      ],
    },
    
    
    //84
    
    ["addition"+shuffledNumbersto[83]]: {
      botPrompt: 'What is 2+1?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['1', '2', "3","4"]),
      answers: [
        {
          answer: '1',
          nextId: 'inadditioncorrectq84',
        },
        {
          answer: '2',
          nextId: 'inadditioncorrectq84',
        },
        {
          answer: "3",
          nextId: 'additioncorrectq84',
        },
        {
          answer: "4",
          nextId: 'inadditioncorrectq84',
        },
      ],
    },
    additioncorrectq84: {
      botPrompt: 'Hurray <strong>3</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[84],
        },
      ],
    },
    inadditioncorrectq84: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[84],
        },
      ],
    },
    
    
    //85
    
    ["addition"+shuffledNumbersto[84]]: {
      botPrompt: 'What is 7+3?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['8', '9', "10","11"]),
      answers: [
        {
          answer: '8',
          nextId: 'inadditioncorrectq85',
        },
        {
          answer: '9',
          nextId: 'inadditioncorrectq85',
        },
        {
          answer: "10",
          nextId: 'additioncorrectq85',
        },
        {
          answer: "11",
          nextId: 'inadditioncorrectq85',
        },
      ],
    },
    additioncorrectq85: {
      botPrompt: 'Hurray <strong>10</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[85],
        },
      ],
    },
    inadditioncorrectq85: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[85],
        },
      ],
    },
    
    
    //86
    
    ["addition"+shuffledNumbersto[85]]: {
      botPrompt: 'What is 10+5?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['12', '13', "14","15"]),
      answers: [
        {
          answer: '12',
          nextId: 'inadditioncorrectq86',
        },
        {
          answer: '13',
          nextId: 'additioncorrectq86',
        },
        {
          answer: "14",
          nextId: 'inadditioncorrectq86',
        },
        {
          answer: "15",
          nextId: 'inadditioncorrectq86',
        },
      ],
    },
    additioncorrectq86: {
      botPrompt: 'Hurray <strong>15</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[86],
        },
      ],
    },
    inadditioncorrectq86: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[86],
        },
      ],
    },
    
    
    //87
    
    ["addition"+shuffledNumbersto[86]]: {
      botPrompt: 'What is 12+23?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['24', '35', "36","44"]),
      answers: [
        {
          answer: '24',
          nextId: 'inadditioncorrectq87',
        },
        {
          answer: '35',
          nextId: 'additioncorrectq87',
        },
        {
          answer: "36",
          nextId: 'inadditioncorrectq87',
        },
        {
          answer: "44",
          nextId: 'inadditioncorrectq87',
        },
      ],
    },
    additioncorrectq87: {
      botPrompt: 'Hurray <strong>35</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[87],
        },
      ],
    },
    inadditioncorrectq87: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"35"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[87],
        },
      ],
    },
    
    
    //88
    
    ["addition"+shuffledNumbersto[87]]: {
      botPrompt: 'What is 45+34?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['70', '78', "79","89"]),
      answers: [
        {
          answer: '70',
          nextId: 'inadditioncorrectq88',
        },
        {
          answer: '78',
          nextId: 'inadditioncorrectq88',
        },
        {
          answer: "79",
          nextId: 'additioncorrectq88',
        },
        {
          answer: "89",
          nextId: 'inadditioncorrectq88',
        },
      ],
    },
    additioncorrectq88: {
      botPrompt: 'Hurray <strong>79</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[88],
        },
      ],
    },
    inadditioncorrectq88: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"79"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[88],
        },
      ],
    },
    
    
    //89
    
    ["addition"+shuffledNumbersto[88]]: {
      botPrompt: 'What is 321+123?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['424', '444', "4444","4445"]),
      answers: [
        {
          answer: '424',
          nextId: 'inadditioncorrectq89',
        },
        {
          answer: '444',
          nextId: 'additioncorrectq89',
        },
        {
          answer: "4444",
          nextId: 'inadditioncorrectq89',
        },
        {
          answer: "4445",
          nextId: 'inadditioncorrectq89',
        },
      ],
    },
    additioncorrectq89: {
      botPrompt: 'Hurray <strong>444</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[89],
        },
      ],
    },
    inadditioncorrectq89: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"444"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[89],
        },
      ],
    },
    
    
    //90
    
    ["addition"+shuffledNumbersto[89]]: {
      botPrompt: 'What is 24+19?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['32', '33', "42","43"]),
      answers: [
        {
          answer: '32',
          nextId: 'inadditioncorrectq90',
        },
        {
          answer: '33',
          nextId: 'inadditioncorrectq90',
        },
        {
          answer: "42",
          nextId: 'inadditioncorrectq90',
        },
        {
          answer: "43",
          nextId: 'additioncorrectq90',
        },
      ],
    },
    additioncorrectq90: {
      botPrompt: 'Hurray <strong>43</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[90],
        },
      ],
    },
    inadditioncorrectq90: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"43"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[90],
        },
      ],
    },
    
    
    //91
    
    ["addition"+shuffledNumbersto[90]]: {
      botPrompt: 'What is 58+37?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['95', '103', "108","125"]),
      answers: [
        {
          answer: '95',
          nextId: 'additioncorrectq91',
        },
        {
          answer: '103',
          nextId: 'inadditioncorrectq91',
        },
        {
          answer: "108",
          nextId: 'inadditioncorrectq91',
        },
        {
          answer: "125",
          nextId: 'inadditioncorrectq91',
        },
      ],
    },
    additioncorrectq91: {
      botPrompt: 'Hurray <strong>95</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[91],
        },
      ],
    },
    inadditioncorrectq91: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"95"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[91],
        },
      ],
    },
    
    
    //92
    
    ["addition"+shuffledNumbersto[91]]: {
      botPrompt: 'What is 173+78?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['241', '251', "261","271"]),
      answers: [
        {
          answer: '241',
          nextId: 'inadditioncorrectq92',
        },
        {
          answer: '251',
          nextId: 'additioncorrectq92',
        },
        {
          answer: "261",
          nextId: 'inadditioncorrectq92',
        },
        {
          answer: "271",
          nextId: 'inadditioncorrectq92',
        },
      ],
    },
    additioncorrectq92: {
      botPrompt: 'Hurray <strong>251</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[92],
        },
      ],
    },
    inadditioncorrectq92: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"251"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[92],
        },
      ],
    },
    
    
    //93
    
    ["addition"+shuffledNumbersto[92]]: {
      botPrompt: 'What is 432+123?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['545', '555', "566","577"]),
      answers: [
        {
          answer: '545',
          nextId: 'inadditioncorrectq93',
        },
        {
          answer: '555',
          nextId: 'additioncorrectq93',
        },
        {
          answer: "566",
          nextId: 'inadditioncorrectq93',
        },
        {
          answer: "577",
          nextId: 'inadditioncorrectq93',
        },
      ],
    },
    additioncorrectq93: {
      botPrompt: 'Hurray <strong>555</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[93],
        },
      ],
    },
    inadditioncorrectq93: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"555"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[93],
        },
      ],
    },
    
    
    //94
    
    ["addition"+shuffledNumbersto[93]]: {
      botPrompt: 'What is the sum of 9 and 11?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['19', '20', "21","22"]),
      answers: [
        {
          answer: '19',
          nextId: 'inadditioncorrectq94',
        },
        {
          answer: '20',
          nextId: 'additioncorrectq94',
        },
        {
          answer: "21",
          nextId: 'inadditioncorrectq94',
        },
        {
          answer: "22",
          nextId: 'inadditioncorrectq94',
        },
      ],
    },
    additioncorrectq94: {
      botPrompt: 'Hurray <strong>20</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[94],
        },
      ],
    },
    inadditioncorrectq94: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"20"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[94],
        },
      ],
    },
    
    
    //95
    
    ["addition"+shuffledNumbersto[94]]: {
      botPrompt: 'The teacher gave 15 pencils to the first graders and 12 to the second graders. How many pencils did the teacher give out in all?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['15', '12', "27","30"]),
      answers: [
        {
          answer: '15',
          nextId: 'inadditioncorrectq95',
        },
        {
          answer: '12',
          nextId: 'inadditioncorrectq95',
        },
        {
          answer: "27",
          nextId: 'additioncorrectq95',
        },
        {
          answer: "30",
          nextId: 'inadditioncorrectq95',
        },
      ],
    },
    additioncorrectq95: {
      botPrompt: 'Hurray <strong>27</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[95],
        },
      ],
    },
    inadditioncorrectq95: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"27"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[95],
        },
      ],
    },
    
    
    //96
    
    ["addition"+shuffledNumbersto[95]]: {
      botPrompt: 'Jack has 7 toy cars and his brother has 4. How many toy cars do they have altogether?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['9', '10', "11","12"]),
      answers: [
        {
          answer: '9',
          nextId: 'inadditioncorrectq96',
        },
        {
          answer: '10',
          nextId: 'inadditioncorrectq96',
        },
        {
          answer: "11",
          nextId: 'additioncorrectq96',
        },
        {
          answer: "12",
          nextId: 'inadditioncorrectq96',
        },
      ],
    },
    additioncorrectq96: {
      botPrompt: 'Hurray <strong>11</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[96],
        },
      ],
    },
    inadditioncorrectq96: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"11"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[96],
        },
      ],
    },
    
    
    //97
    
    ["addition"+shuffledNumbersto[96]]: {
      botPrompt: 'There are 6 birds in a tree and 4 more birds fly to the tree. How many birds are there now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['8', '9', "10","11"]),
      answers: [
        {
          answer: '8',
          nextId: 'inadditioncorrectq97',
        },
        {
          answer: '9',
          nextId: 'inadditioncorrectq97',
        },
        {
          answer: "10",
          nextId: 'additioncorrectq97',
        },
        {
          answer: "11",
          nextId: 'inadditioncorrectq97',
        },
      ],
    },
    additioncorrectq97: {
      botPrompt: 'Hurray <strong>10</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[97],
        },
      ],
    },
    inadditioncorrectq97: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"10"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[97],
        },
      ],
    },
    
    
    //98
    
    ["addition"+shuffledNumbersto[97]]: {
      botPrompt: 'John has 23 marbles and he finds 14 more on the playground. How many marbles does John have now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['37', '34', "33","31"]),
      answers: [
        {
          answer: '37',
          nextId: 'additioncorrectq98',
        },
        {
          answer: '34',
          nextId: 'inadditioncorrectq98',
        },
        {
          answer: "33",
          nextId: 'inadditioncorrectq98',
        },
        {
          answer: "31",
          nextId: 'inadditioncorrectq98',
        },
      ],
    },
    additioncorrectq98: {
      botPrompt: 'Hurray <strong>37</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[98],
        },
      ],
    },
    inadditioncorrectq98: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"37"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[98],
        },
      ],
    },
    
    
    //99
    
    ["addition"+shuffledNumbersto[98]]: {
      botPrompt: 'If 256 + 789 = 1,045, what is the sum of 256 + 798?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['1,065', '1,034', "1,044","1,054"]),
      answers: [
        {
          answer: '1,065',
          nextId: 'inadditioncorrectq99',
        },
        {
          answer: '1,034',
          nextId: 'additioncorrectq99',
        },
        {
          answer: "1,044",
          nextId: 'inadditioncorrectq99',
        },
        {
          answer: "1,054",
          nextId: 'inadditioncorrectq99',
        },
      ],
    },
    additioncorrectq99: {
      botPrompt: 'Hurray <strong>000</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[99],
        },
      ],
    },
    inadditioncorrectq99: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"000"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[99],
        },
      ],
    },
    
    
    //100
    
    ["addition"+shuffledNumbersto[99]]: {
      botPrompt: 'In a candy store, there are 123 bags of candy and 214 more bags of candy arrive. What is the total number of bags of candy in the store now?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['337', '327', "347","317"]),
      answers: [
        {
          answer: '337',
          nextId: 'additioncorrectq100',
        },
        {
          answer: '327',
          nextId: 'inadditioncorrectq100',
        },
        {
          answer: "347",
          nextId: 'inadditioncorrectq100',
        },
        {
          answer: "317",
          nextId: 'inadditioncorrectq100',
        },
      ],
    },
    additioncorrectq100: {
      botPrompt: 'Hurray <strong>337</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[100],
        },
      ],
    },
    inadditioncorrectq100: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"337"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[100],
        },
      ],
    },
    
    
    //101
    
    ["addition"+shuffledNumbersto[100]]: {
      botPrompt: 'If 435 + 182 = 617, what is the value of 1 in this equation?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['5', '1', "7","2"]),
      answers: [
        {
          answer: '5',
          nextId: 'inadditioncorrectq101',
        },
        {
          answer: '1',
          nextId: 'additioncorrectq101',
        },
        {
          answer: "7",
          nextId: 'inadditioncorrectq101',
        },
        {
          answer: "2",
          nextId: 'inadditioncorrectq101',
        },
      ],
    },
    additioncorrectq101: {
      botPrompt: 'Hurray <strong>1</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[101],
        },
      ],
    },
    inadditioncorrectq101: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"1"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[101],
        },
      ],
    },
    
    
    //102
    
    ["addition"+shuffledNumbersto[101]]: {
      botPrompt: 'The sum of two numbers is 875. One number is 214, what is the other number?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['661', '662', "451","649"]),
      answers: [
        {
          answer: '661',
          nextId: 'additioncorrectq102',
        },
        {
          answer: '662',
          nextId: 'inadditioncorrectq102',
        },
        {
          answer: "451",
          nextId: 'inadditioncorrectq102',
        },
        {
          answer: "649",
          nextId: 'inadditioncorrectq102',
        },
      ],
    },
    additioncorrectq102: {
      botPrompt: 'Hurray <strong>661</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[102],
        },
      ],
    },
    inadditioncorrectq102: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"661"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[102],
        },
      ],
    },
    
    
    //103
    
    ["addition"+shuffledNumbersto[102]]: {
      botPrompt: 'question',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['2,019', '2,321', "2,319","1,997"]),
      answers: [
        {
          answer: '2,019',
          nextId: 'additioncorrectq103',
        },
        {
          answer: '2,321',
          nextId: 'inadditioncorrectq103',
        },
        {
          answer: "2,319",
          nextId: 'inadditioncorrectq103',
        },
        {
          answer: "1997",
          nextId: 'inadditioncorrectq103',
        },
      ],
    },
    additioncorrectq103: {
      botPrompt: 'Hurray <strong>2,019</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[103],
        },
      ],
    },
    inadditioncorrectq103: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"000"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[103],
        },
      ],
    },
    
    
    //104
    
    ["addition"+shuffledNumbersto[103]]: {
      botPrompt: 'The sum of two numbers is 4,569. If one number is 3,875, what is the other number?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['694', '697', "690","684"]),
      answers: [
        {
          answer: '694',
          nextId: 'inadditioncorrectq104',
        },
        {
          answer: '697',
          nextId: 'additioncorrectq104',
        },
        {
          answer: "690",
          nextId: 'inadditioncorrectq104',
        },
        {
          answer: "684",
          nextId: 'inadditioncorrectq104',
        },
      ],
    },
    additioncorrectq104: {
      botPrompt: 'Hurray <strong>694</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[104],
        },
      ],
    },
    inadditioncorrectq104: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"694"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[104],
        },
      ],
    },
    
    
    //105
    
    ["addition"+shuffledNumbersto[104]]: {
      botPrompt: 'In a garage sale, 156 books were sold in the morning and 287 books were sold in the afternoon. How many books were sold in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['443', '436', "443","469"]),
      answers: [
        {
          answer: '443',
          nextId: 'inadditioncorrectq105',
        },
        {
          answer: '436',
          nextId: 'inadditioncorrectq105',
        },
        {
          answer: "443",
          nextId: 'additioncorrectq105',
        },
        {
          answer: "469",
          nextId: 'inadditioncorrectq105',
        },
      ],
    },
    additioncorrectq105: {
      botPrompt: 'Hurray <strong>443</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[105],
        },
      ],
    },
    inadditioncorrectq105: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"443"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[105],
        },
      ],
    },
    
    
    //106
    
    ["addition"+shuffledNumbersto[105]]: {
      botPrompt: 'The total weight of five boxes is 47.5 kilograms. If the weight of one box is 8.5 kilograms, what is the total weight of two boxes?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['13', '14', "15","17"]),
      answers: [
        {
          answer: '13',
          nextId: 'inadditioncorrectq106',
        },
        {
          answer: '14',
          nextId: 'inadditioncorrectq106',
        },
        {
          answer: "15",
          nextId: 'additioncorrectq106',
        },
        {
          answer: "17",
          nextId: 'inadditioncorrectq106',
        },
      ],
    },
    additioncorrectq106: {
      botPrompt: 'Hurray <strong>15</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[106],
        },
      ],
    },
    inadditioncorrectq106: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"15"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[106],
        },
      ],
    },
    
    
    //107
    
    ["addition"+shuffledNumbersto[106]]: {
      botPrompt: 'If 378 + 517 = 895, what is the value of 8 in this equation?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['5', '3', "9","8"]),
      answers: [
        {
          answer: '5',
          nextId: 'inadditioncorrectq107',
        },
        {
          answer: '3',
          nextId: 'inadditioncorrectq107',
        },
        {
          answer: "9",
          nextId: 'inadditioncorrectq107',
        },
        {
          answer: "8",
          nextId: 'additioncorrectq107',
        },
      ],
    },
    additioncorrectq107: {
      botPrompt: 'Hurray <strong>8</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[107],
        },
      ],
    },
    inadditioncorrectq107: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"8"</strong>',
      answers: [
        {
          nextId: 'addition'+shuffledNumbersto[107],
        },
      ],
    },
    
    
    //108
    
    ["addition"+shuffledNumbersto[107]]: {
      botPrompt: 'In a garden, there are 246 red roses and 321 yellow roses. How many roses are there in total?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['567', '568', "577","557"]),
      answers: [
        {
          answer: '567',
          nextId: 'additioncorrectq108',
        },
        {
          answer: '568',
          nextId: 'inadditioncorrectq108',
        },
        {
          answer: "577",
          nextId: 'inadditioncorrectq108',
        },
        {
          answer: "557",
          nextId: 'inadditioncorrectq108',
        },
      ],
    },
    additioncorrectq108: {
      botPrompt: 'Hurray <strong>567</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'wishtocontinue31',
        },
      ],
    },
    inadditioncorrectq108: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"567"</strong>',
      answers: [
        {
          nextId: 'wishtocontinue31',
        },
      ],
    },

    wishtocontinue31: {
      botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
      input: selectField(['Yes!', 'No!']),
      answers: [
          {
            answer: 'Yes!',
            nextId: 'day32',
          },
          {
            answer: 'No!',
            nextId: 'endConv',
          },
      ],
    },
//day32

      day32: {
        botPrompt: '<strong> Day 32 : </strong> Classroom demo',
        answers: [
                { nextId: 'day32link' },
        ],
    sumToBags: [{ name: 'd', points: 32 }],

      },
      day32comment: {
        botPrompt: 'Let’s look into the pages of the book',
        answers: [
                { nextId: 'day32link' },
        ],
      },
      day32link: {
        botPrompt: 'https://drive.google.com/file/d/1ZyZF2MzFs6QUxCtOCrt6Dn6_ZCYXeSYu/view?usp=sharing',
        type: RTypes.LINK,
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[0],
          },
        ],
      },
      
      
      //useOfAnd
      
      
      ["useOfAnd"+shuffledNumbersto[0]]: {
          botPrompt: 'Which word means "in addition to"?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['But', 'And', "Or","Not"]),
          answers: [
            {
              answer: 'But',
              nextId: 'inuseOfAndcorrect',
            },
            {
              answer: 'And',
              nextId: 'useOfAndcorrect',
            },
            {
              answer: "Or",
              nextId: 'inuseOfAndcorrect',
            },
            {
              answer: "Not",
              nextId: 'inuseOfAndcorrect',
            },
          ],
        },
        useOfAndcorrect: {
          botPrompt: 'Hurray <strong>And</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'useOfAnd'+shuffledNumbersto[1],
            },
          ],
        },
        inuseOfAndcorrect: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
          answers: [
            {
              nextId: 'useOfAnd'+shuffledNumbersto[1],
            },
          ],
        },
      
        ['useOfAnd'+shuffledNumbersto[1]]: {
          botPrompt: 'Which word is used to join two things together?',
          type: RTypes.TRANSFORMED_TEXT,
      
          input: selectField(['But', 'And', "Or","Not"]),
          answers: [
            {
              answer: 'But',
              nextId: 'inuseOfAndcorrectq2',
            },
            {
              answer: 'And',
              nextId: 'useOfAndcorrectq2',
            },
            {
              answer: "Or",
              nextId: 'inuseOfAndcorrectq2',
            },
            {
              answer: "Not",
              nextId: 'inuseOfAndcorrectq2',
            },
          ],
        },
      
        useOfAndcorrectq2: {
          botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'useOfAnd'+shuffledNumbersto[2],
            },
          ],
        },
        inuseOfAndcorrectq2: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
          answers: [
            {
              nextId: 'useOfAnd'+shuffledNumbersto[2],
            },
          ],
        },
        
        //3
        ['useOfAnd'+shuffledNumbersto[2]]: {
        botPrompt: 'Which word connects ideas or actions?',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq3',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq3',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq3',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq3',
          },
        ],
        },
      
        useOfAndcorrectq3: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[3],
          },
        ],
        },
        inuseOfAndcorrectq3: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[3],
          },
        ],
        },
      
        //4
        ['useOfAnd'+shuffledNumbersto[3]]: {
        botPrompt: 'Which word is used to express similarity or continuation?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq4',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq4',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq4',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq4',
          },
        ],
        },
      
        useOfAndcorrectq4: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[4],
          },
        ],
        },
        inuseOfAndcorrectq4: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[4],
          },
        ],
        },
      
        //5
        ['useOfAnd'+shuffledNumbersto[4]]: {
        botPrompt: 'Which word is used to indicate a combination of things?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq5',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq5',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq5',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq5',
          },
        ],
        },
      
        useOfAndcorrectq5: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[5],
          },
        ],
        },
        inuseOfAndcorrectq5: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[5],
          },
        ],
        },
      
        //6
        ['useOfAnd'+shuffledNumbersto[5]]: {
        botPrompt: 'Ram is eating an apple ____ Shyam is eating an orange.',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq6',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq6',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq6',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq6',
          },
        ],
        },
      
        useOfAndcorrectq6: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[6],
          },
        ],
        },
        inuseOfAndcorrectq6: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[6],
          },
        ],
        },
        
        //7
        ['useOfAnd'+shuffledNumbersto[6]]: {
        botPrompt: 'Tina is reading a book ____ Timmy is drawing a picture.',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq7',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq7',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq7',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq7',
          },
        ],
        },
      
        useOfAndcorrectq7: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[7],
          },
        ],
        },
        inuseOfAndcorrectq7: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[7],
          },
        ],
        },
        
      
        //8
        ['useOfAnd'+shuffledNumbersto[7]]: {
        botPrompt: 'Which word can be used to express "rain" and "sun"?',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['rain and sun', 'rain or sun', "rain not sun","rain but sun"]),
        answers: [
          {
            answer: 'rain and sun',
            nextId: 'inuseOfAndcorrectq8',
          },
          {
            answer: 'rain or sun',
            nextId: 'useOfAndcorrectq8',
          },
          {
            answer: "rain not sun",
            nextId: 'inuseOfAndcorrectq8',
          },
          {
            answer: "rain but sun",
            nextId: 'inuseOfAndcorrectq8',
          },
        ],
        },
        
        useOfAndcorrectq8: {
        botPrompt: 'Hurray! <strong>rain and sun</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[8],
          },
        ],
        },
        inuseOfAndcorrectq8: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"rain and sun"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[8],
          },
        ],
        },
      
        //9
        ['useOfAnd'+shuffledNumbersto[8]]: {
        botPrompt: 'Which word is used to indicate a join action or condition?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq9',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq9',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq9',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq9',
          },
        ],
        },
      
        useOfAndcorrectq9: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[9],
          },
        ],
        },
        inuseOfAndcorrectq9: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[9],
          },
        ],
        },
        
      
        //10
        ['useOfAnd'+shuffledNumbersto[9]]: {
        botPrompt: 'Which word is used to combine two phrases or clauses?',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq10',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq10',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq10',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq10',
          },
        ],
        
        },
      
        useOfAndcorrectq10: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[10],
          },
        ],
        },
        inuseOfAndcorrectq10: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[10],
          },
        ],
        },
      
        //11
        ['useOfAnd'+shuffledNumbersto[10]]: {
        botPrompt: 'Which word is used to express addition or inclusion?',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq11',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq11',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq11',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq11',
          },
        ],
        },
      
        useOfAndcorrectq11: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[11],
          },
        ],
        },
        inuseOfAndcorrectq11: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[11],
          },
        ],
        },
        
        //12
        ['useOfAnd'+shuffledNumbersto[11]]: {
        botPrompt: 'Which word is used to show a connection between two ideas?',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq12',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq12',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq12',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq12',
          },
        ],
        },
      
        useOfAndcorrectq12: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[12],
          },
        ],
        },
        inuseOfAndcorrectq12: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[12],
          },
        ],
        },
        
        //13
        ['useOfAnd'+shuffledNumbersto[12]]: {
        botPrompt: 'Which word connects "book" and "pen"?',
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['book and pen', 'book or pen', "book not pen","book but pen"]),
          answers: [
            {
              answer: 'book and pen',
              nextId: 'useOfAndcorrectq13',
            },
            {
              answer: 'book or pen',
              nextId: 'inuseOfAndcorrectq13',
            },
            {
              answer: "book not pen",
              nextId: 'inuseOfAndcorrectq13',
            },
            {
              answer: "book but pen",
              nextId: 'inuseOfAndcorrectq13',
            },
          ],
        },
        
        useOfAndcorrectq13: {
        botPrompt: 'Hurray! <strong>book and pen</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[13],
          },
        ],
        },
        inuseOfAndcorrectq13: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"book and pen"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[13],
          },
        ],
        },
        
        //14
        ['useOfAnd'+shuffledNumbersto[13]]: {
        botPrompt: 'Which word is used to join words in a list?',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq14',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq14',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq14',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq14',
          },
        ],
        },
        
        useOfAndcorrectq14: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[14],
          },
        ],
        },
        inuseOfAndcorrectq14: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[14],
          },
        ],
        },
        
        
        //15
        ['useOfAnd'+shuffledNumbersto[14]]: {
        botPrompt: 'The flowers are blooming ____ the birds are singing.',
        type: RTypes.TRANSFORMED_TEXT,
        
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq15',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq15',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq15',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq15',
          },
        ],
        },
      
        useOfAndcorrectq15: {
        botPrompt: 'Hurray! <strong>And</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[15],
          },
        ],
        },
        inuseOfAndcorrectq15: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'useOfAnd'+shuffledNumbersto[15],
          },
        ],
        },
      
        //16
        ['useOfAnd'+shuffledNumbersto[15]]: {
          botPrompt: 'Which word can be used to join "flower" "butterfly"?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['flower and butterfly', 'flower or butterfly', "flower not butterfly","flower but butterfly"]),
          answers: [
            {
              answer: 'flower and butterfly',
              nextId: 'useOfAndcorrectq16',
            },
            {
              answer: 'flower or butterfly',
              nextId: 'inuseOfAndcorrectq16',
            },
            {
              answer: "flower not butterfly",
              nextId: 'inuseOfAndcorrectq16',
            },
            {
              answer: "flower but butterfly",
              nextId: 'inuseOfAndcorrectq16',
            },
          ],
        },
        useOfAndcorrectq16: {
          botPrompt: 'You Have Selected correct Anwser 🎉! <strong>flower and butterfly</strong> 😎',
          answers: [
            {
              nextId: 'useOfAnd'+shuffledNumbersto[16],
            },
          ],
        },
        inuseOfAndcorrectq16: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"flower and butterfly"</strong>',
          answers: [
            {
              nextId: 'useOfAnd'+shuffledNumbersto[16],
            },
          ],
        },
        
        //17
        ['useOfAnd'+shuffledNumbersto[16]]: {
        botPrompt: 'Which word is used to introduce additional information?',
        type: RTypes.TRANSFORMED_TEXT,
        input: selectField(['But', 'And', "Or","Not"]),
        answers: [
          {
            answer: 'But',
            nextId: 'inuseOfAndcorrectq17',
          },
          {
            answer: 'And',
            nextId: 'useOfAndcorrectq17',
          },
          {
            answer: "Or",
            nextId: 'inuseOfAndcorrectq17',
          },
          {
            answer: "Not",
            nextId: 'inuseOfAndcorrectq17',
          },
        ],
        },
        useOfAndcorrectq17: {
        botPrompt: 'You Have Selected correct Anwser 🎉! <strong>And</strong> 😎',
        answers: [
          {
            nextId: 'wishtocontinue32',
          },
        ],
        },
        inuseOfAndcorrectq17: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"And"</strong>',
        answers: [
          {
            nextId: 'wishtocontinue32',
          },
        ],
        },
      
      
      
        //enduseOfAndletter

        
        wishtocontinue32: {
        botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
        input: selectField(['Yes!', 'No!']),
        answers: [
            {
              answer: 'Yes!',
              nextId: 'day33',
            },
            {
              answer: 'No!',
              nextId: 'endConv',
            },
        ],
      },


        
        day33: {
          botPrompt: '<strong> Day 33 : </strong> Pair words play a vital role in kindergarten education as they introduce young learners to the concept of word associations and language patterns',
          answers: [
                  { nextId: 'day33link' },
          ],
          sumToBags: [{ name: 'd', points: 33 }],
        },
        day33link: {
          botPrompt: 'https://youtu.be/bP4itjpVdJ4',
          type: RTypes.LINK,
          answers: [
                  { nextId: 'day331comment' },
          ],
        },
        day331comment: {
          botPrompt: 'TLM Video',
          answers: [
                  { nextId: 'day331link' },
          ],
        },
        day331link: {
          botPrompt: 'https://youtu.be/tK6LSH86y98',
          type: RTypes.LINK,
          answers: [
                  { nextId: 'day332comment' },
          ],
        },
        day332comment: {
          botPrompt: 'Let’s look into the pages of the book',
          answers: [
                  { nextId: 'day332link' },
          ],
        },
        day332link: {
          botPrompt: 'https://drive.google.com/file/d/16ScrFP2MmYucRIbciy8E47drUhBF6k1Y/view?usp=sharing',
          type: RTypes.LINK,
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[0],
            },
          ],
        },
        
        //pairWords
        
        
        ["pairWords"+shuffledNumbersto[0]]: {
            botPrompt: 'Which word is the pair for "needle"?',
            type: RTypes.TRANSFORMED_TEXT,
            input: selectField(['Rat', 'Hat', "thread","Sun"]),
            answers: [
              {
                answer: 'Rat',
                nextId: 'inpairWordscorrect',
              },
              {
                answer: 'Hat',
                nextId: 'inpairWordscorrect',
              },
              {
                answer: "thread",
                nextId: 'pairWordscorrect',
              },
              {
                answer: "Sun",
                nextId: 'inpairWordscorrect',
              },
            ],
          },
          pairWordscorrect: {
            botPrompt: 'Hurray <strong>thread</strong> is the correct answer  ! 😎',
            answers: [
              {
                nextId: 'pairWords'+shuffledNumbersto[1],
              },
            ],
          },
          inpairWordscorrect: {
            botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"thread"</strong>',
            answers: [
              {
                nextId: 'pairWords'+shuffledNumbersto[1],
              },
            ],
          },
        
          ['pairWords'+shuffledNumbersto[1]]: {
            botPrompt: 'Which word is the pair for "ear"?',
            type: RTypes.TRANSFORMED_TEXT,
        
            input: selectField(['Hearing', 'eyes', "Mouth","Foot"]),
            answers: [
              {
                answer: 'Hearing',
                nextId: 'inpairWordscorrectq2',
              },
              {
                answer: 'eyes',
                nextId: 'pairWordscorrectq2',
              },
              {
                answer: "Mouth",
                nextId: 'inpairWordscorrectq2',
              },
              {
                answer: "Foot",
                nextId: 'inpairWordscorrectq2',
              },
            ],
          },
        
          pairWordscorrectq2: {
            botPrompt: 'Hurray! <strong>eyes</strong> is the correct answer  ! 😎',
            answers: [
              {
                nextId: 'pairWords'+shuffledNumbersto[2],
              },
            ],
          },
          inpairWordscorrectq2: {
            botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"eyes"</strong>',
            answers: [
              {
                nextId: 'pairWords'+shuffledNumbersto[2],
              },
            ],
          },
          
          //3
          ['pairWords'+shuffledNumbersto[2]]: {
          botPrompt: 'Which word is the pair for "cat"?',
          type: RTypes.TRANSFORMED_TEXT,
        
          input: selectField(['Dog', 'Hat', "Rat","Sun"]),
          answers: [
            {
              answer: 'Dog',
              nextId: 'pairWordscorrectq3',
            },
            {
              answer: 'Hat',
              nextId: 'inpairWordscorrectq3',
            },
            {
              answer: "Rat",
              nextId: 'inpairWordscorrectq3',
            },
            {
              answer: "Sun",
              nextId: 'inpairWordscorrectq3',
            },
          ],
          },
        
          pairWordscorrectq3: {
          botPrompt: 'Hurray! <strong>Dog</strong> is the correct answer ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[3],
            },
          ],
          },
          inpairWordscorrectq3: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dog"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[3],
            },
          ],
          },
        
          //4
          ['pairWords'+shuffledNumbersto[3]]: {
          botPrompt: 'Which word is the pair for "knife"?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Spoon', 'Fork', "Plate","Glass"]),
          answers: [
            {
              answer: 'Spoon',
              nextId: 'inpairWordscorrectq4',
            },
            {
              answer: 'Fork',
              nextId: 'pairWordscorrectq4',
            },
            {
              answer: "Plate",
              nextId: 'inpairWordscorrectq4',
            },
            {
              answer: "Glass",
              nextId: 'inpairWordscorrectq4',
            },
          ],
          },
        
          pairWordscorrectq4: {
          botPrompt: 'Hurray! <strong>Fork</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[4],
            },
          ],
          },
          inpairWordscorrectq4: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fork"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[4],
            },
          ],
          },
        
          //5
          ['pairWords'+shuffledNumbersto[4]]: {
          botPrompt: 'Which word is the pair for "rice"?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Glass', 'Cup', "Plate","Bowl"]),
          answers: [
            {
              answer: 'Glass',
              nextId: 'inpairWordscorrectq5',
            },
            {
              answer: 'Cup',
              nextId: 'inpairWordscorrectq5',
            },
            {
              answer: "Plate",
              nextId: 'pairWordscorrectq5',
            },
            {
              answer: "Bowl",
              nextId: 'inpairWordscorrectq5',
            },
          ],
          },
        
          pairWordscorrectq5: {
          botPrompt: 'Hurray! <strong>Plate</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[5],
            },
          ],
          },
          inpairWordscorrectq5: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Plate"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[5],
            },
          ],
          },
        
          //6
          ['pairWords'+shuffledNumbersto[5]]: {
          botPrompt: 'Which word is the pair for "shoes"?',
          type: RTypes.TRANSFORMED_TEXT,
        
          input: selectField(['Hat', 'Gloves', "Scarf","Socks"]),
          answers: [
            {
              answer: 'Hat',
              nextId: 'inpairWordscorrectq6',
            },
            {
              answer: 'Gloves',
              nextId: 'inpairWordscorrectq6',
            },
            {
              answer: "Scarf",
              nextId: 'inpairWordscorrectq6',
            },
            {
              answer: "Socks",
              nextId: 'pairWordscorrectq6',
            },
          ],
          },
        
          pairWordscorrectq6: {
          botPrompt: 'Hurray! <strong>Socks</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[6],
            },
          ],
          },
          inpairWordscorrectq6: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Socks"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[6],
            },
          ],
          },
          
          //7
          ['pairWords'+shuffledNumbersto[6]]: {
          botPrompt: 'Which word is the pair for "cup"?',
          type: RTypes.TRANSFORMED_TEXT,
          input: selectField(['Glass', 'Plate', "Bowl","Saucer"]),
          answers: [
            {
              answer: 'Glass',
              nextId: 'inpairWordscorrectq7',
            },
            {
              answer: 'Plate',
              nextId: 'inpairWordscorrectq7',
            },
            {
              answer: "Bowl",
              nextId: 'inpairWordscorrectq7',
            },
            {
              answer: "Saucer",
              nextId: 'pairWordscorrectq7',
            },
          ],
          },
        
          pairWordscorrectq7: {
          botPrompt: 'Hurray! <strong>Saucer</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[7],
            },
          ],
          },
          inpairWordscorrectq7: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Saucer"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[7],
            },
          ],
          },
          
        
          //8
          ['pairWords'+shuffledNumbersto[7]]: {
          botPrompt: 'Which word is the pair for "salt"?',
          type: RTypes.TRANSFORMED_TEXT,
        
          input: selectField(['Pepper', 'Sugar', "Floor","Butter"]),
          answers: [
            {
              answer: 'Pepper',
              nextId: 'inpairWordscorrectq8',
            },
            {
              answer: 'Sugar',
              nextId: 'pairWordscorrectq8',
            },
            {
              answer: "Floor",
              nextId: 'inpairWordscorrectq8',
            },
            {
              answer: "Butter",
              nextId: 'inpairWordscorrectq8',
            },
          ],
          },
          
          pairWordscorrectq8: {
          botPrompt: 'Hurray! <strong>Sugar</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[8],
            },
          ],
          },
          inpairWordscorrectq8: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sugar"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[8],
            },
          ],
          },
        
          //9
          ['pairWords'+shuffledNumbersto[8]]: {
          botPrompt: 'Which word is the pair for "milk"?',
          type: RTypes.TRANSFORMED_TEXT,
          
          input: selectField(['Water', 'Juice', "Bread","Soda"]),
          answers: [
            {
              answer: 'Water',
              nextId: 'pairWordscorrectq9',
            },
            {
              answer: 'Juice',
              nextId: 'inpairWordscorrectq9',
            },
            {
              answer: "Bread",
              nextId: 'inpairWordscorrectq9',
            },
            {
              answer: "Soda",
              nextId: 'inpairWordscorrectq9',
            },
          ],
          },
        
          pairWordscorrectq9: {
          botPrompt: 'Hurray! <strong>Water</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[9],
            },
          ],
          },
          inpairWordscorrectq9: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Water"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[9],
            },
          ],
          },
          
        
          //10
          ['pairWords'+shuffledNumbersto[9]]: {
          botPrompt: 'Which word is the pair for "ice"?',
          type: RTypes.TRANSFORMED_TEXT,
        
          input: selectField(['Fire', 'Sour', "Sun","Rain"]),
          answers: [
            {
              answer: 'Fire',
              nextId: 'pairWordscorrectq10',
            },
            {
              answer: 'Sour',
              nextId: 'inpairWordscorrectq10',
            },
            {
              answer: "Sun",
              nextId: 'inpairWordscorrectq10',
            },
            {
              answer: "Rain",
              nextId: 'inpairWordscorrectq10',
            },
          ],
          
          },
        
          pairWordscorrectq10: {
          botPrompt: 'Hurray! <strong>Fire</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[10],
            },
          ],
          },
          inpairWordscorrectq10: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fire"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[10],
            },
          ],
          },
        
          //11
          ['pairWords'+shuffledNumbersto[10]]: {
          botPrompt: 'Which word is the pair for "hands"?',
          type: RTypes.TRANSFORMED_TEXT,
        
          input: selectField(['Feet', 'Fingers', "Ears","Nose"]),
          answers: [
            {
              answer: 'Feet',
              nextId: 'inpairWordscorrectq11',
            },
            {
              answer: 'Fingers',
              nextId: 'pairWordscorrectq11',
            },
            {
              answer: "Ears",
              nextId: 'inpairWordscorrectq11',
            },
            {
              answer: "Nose",
              nextId: 'inpairWordscorrectq11',
            },
          ],
          },
        
          pairWordscorrectq11: {
          botPrompt: 'Hurray! <strong>Fingers</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[11],
            },
          ],
          },
          inpairWordscorrectq11: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fingers"</strong>',
          answers: [
            {
              nextId: 'pairWords'+shuffledNumbersto[11],
            },
          ],
          },
          
          //12
          ['pairWords'+shuffledNumbersto[11]]: {
          botPrompt: 'Which word is the pair for "pots"?',
          type: RTypes.TRANSFORMED_TEXT,
        
          input: selectField(['Pans', 'Cups', "Plates","Utensils"]),
          answers: [
            {
              answer: 'Pans',
              nextId: 'pairWordscorrectq12',
            },
            {
              answer: 'Cups',
              nextId: 'inpairWordscorrectq12',
            },
            {
              answer: "Plates",
              nextId: 'inpairWordscorrectq12',
            },
            {
              answer: "Utensils",
              nextId: 'inpairWordscorrectq12',
            },
          ],
          },
        
          pairWordscorrectq12: {
          botPrompt: 'Hurray! <strong>Pans</strong> is the correct answer  ! 😎',
          answers: [
            {
              nextId: 'wishtocontinue33',
            },
          ],
          },
          inpairWordscorrectq12: {
          botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pans"</strong>',
          answers: [
            {
              nextId: 'wishtocontinue33',
            },
          ],
          },
        
          //endPairWords
          
wishtocontinue33: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day34',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},

//day34
day34: {
  botPrompt: '<strong> Day 34 : </strong> Morning Meeting activity',
  answers: [
          { nextId: 'day34comment' },
  ],
  sumToBags: [{ name: 'd', points: 34 }],

},
day34comment: {
  botPrompt: 'Topics of morning meeting',
  answers: [
          { nextId: 'wishtocontinue34' },
  ],
},

wishtocontinue34: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day36',
      },
      {
        answer: 'No!',
        nextId: 'endConv',

      },
  ],
},

day36: {
  botPrompt: '<strong> Day 36 : </strong> Combining words is crucial in kindergarten as it lays the foundation for language development, enabling children to express ideas and interact effectively.',
  answers: [
          { nextId: 'day36link' },
  ],
},
day36link: {

  botPrompt: 'https://youtu.be/Wh5lyHhbZws',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day361comment' },
  ],
},
day361comment: {
  botPrompt: 'TLM Video',
  answers: [
          { nextId: 'day361link' },
  ],
},
day361link: {
  botPrompt: 'https://youtu.be/82rUPIxSVgs',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day362comment' },
  ],
},
day362comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day362link' },
  ],
},
day362link: {
  botPrompt: 'https://drive.google.com/file/d/11N-63h5FAD2gYJwbOdqiEZTZSmqV4iBC/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[0],
    },
  ],
},


//combinedWords


["combinedWords"+shuffledNumbersto[0]]: {
    botPrompt: 'Which picture represents the word "rainbow"?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Blue', 'Red', "Green","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrect',
      },
      {
        answer: 'Red',
        nextId: 'combinedWordscorrect',
      },
      {
        answer: "Green",
        nextId: 'incombinedWordscorrect',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrect',
      },
    ],
  },
  combinedWordscorrect: {
    botPrompt: 'Hurray <strong>Red</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[1],
      },
    ],
  },
  incombinedWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Red"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['combinedWords'+shuffledNumbersto[1]]: {
    botPrompt: 'Which word is a combination of "cup" and "cake"?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['CakeTree', 'Cupcake', "Sunbutter","Honeydog"]),
    answers: [
      {
        answer: 'CakeTree',
        nextId: 'incombinedWordscorrectq2',
      },
      {
        answer: 'Cupcake',
        nextId: 'combinedWordscorrectq2',
      },
      {
        answer: "Sunbutter",
        nextId: 'incombinedWordscorrectq2',
      },
      {
        answer: "Honeydog",
        nextId: 'incombinedWordscorrectq2',
      },
    ],
  },
  
  combinedWordscorrectq2: {
    botPrompt: 'Hurray! <strong>Cupcake</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[2],
      },
    ],
  },
  incombinedWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cupcake"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['combinedWords'+shuffledNumbersto[2]]: {
  botPrompt: 'Which picture represents the word "snowman"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Green', 'Brown', "White","Yellow"]),
    answers: [
      {
        answer: 'Green',
        nextId: 'incombinedWordscorrectq3',
      },
      {
        answer: 'Brown',
        nextId: 'incombinedWordscorrectq3',
      },
      {
        answer: "White",
        nextId: 'incombinedWordscorrectq3',
      },
      {
        answer: "Yellow",
        nextId: 'combinedWordscorrectq3',
      },
    ],
  },
  
  combinedWordscorrectq3: {
  botPrompt: 'Hurray! <strong>Yellow</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[3],
    },
  ],
  },
  incombinedWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Yellow"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['combinedWords'+shuffledNumbersto[3]]: {
  botPrompt: 'Which word is a combination of "honey" and "bee"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Honeybee', 'Dogstar', "Butterdog","Blackcup"]),
    answers: [
      {
        answer: 'Honeybee',
        nextId: 'combinedWordscorrectq4',
      },
      {
        answer: 'Dogstar',
        nextId: 'incombinedWordscorrectq4',
      },
      {
        answer: "Butterdog",
        nextId: 'incombinedWordscorrectq4',
      },
      {
        answer: "Blackcup",
        nextId: 'incombinedWordscorrectq4',
      },
    ],
  },
  
  combinedWordscorrectq4: {
  botPrompt: 'Hurray! <strong>Honeybee</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[4],
    },
  ],
  },
  incombinedWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Honeybee"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['combinedWords'+shuffledNumbersto[4]]: {
  botPrompt: 'Which picture represents a sunflower?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Purple', "Red","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrectq5',
      },
      {
        answer: 'Purple',
        nextId: 'combinedWordscorrectq5',
      },
      {
        answer: "Red",
        nextId: 'incombinedWordscorrectq5',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrectq5',
      },
    ],
  },
  
  combinedWordscorrectq5: {
  botPrompt: 'Hurray! <strong>Purple</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[5],
    },
  ],
  },
  incombinedWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Purple"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['combinedWords'+shuffledNumbersto[5]]: {
  botPrompt: 'Which word is a combination of "tree" and "house"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Treehouse', 'Sunrain', "Butterdog","Blackcup"]),
    answers: [
      {
        answer: 'Treehouse',
        nextId: 'combinedWordscorrectq6',
      },
      {
        answer: 'Sunrain',
        nextId: 'incombinedWordscorrectq6',
      },
      {
        answer: "Butterdog",
        nextId: 'incombinedWordscorrectq6',
      },
      {
        answer: "Blackcup",
        nextId: 'incombinedWordscorrectq6',
      },
    ],
  },
  
  combinedWordscorrectq6: {
  botPrompt: 'Hurray! <strong>Treehouse</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[6],
    },
  ],
  },
  incombinedWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>Right</strong> answer is <strong>"Treehouse"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[6],
    },
  ],
  },

  //7
  ['combinedWords'+shuffledNumbersto[6]]: {
  botPrompt: 'Which picture represents a  butterfly?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Red', "Orange","Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrectq7',
      },
      {
        answer: 'Red',
        nextId: 'combinedWordscorrectq7',
      },
      {
        answer: "Orange",
        nextId: 'combinedWordscorrectq7',
      },
      {
        answer: "Pink",
        nextId: 'combinedWordscorrectq7',
      },
    ],
  },
  
  combinedWordscorrectq7: {
  botPrompt: 'Hurray! <strong>Orange or Red or Pink</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[7],
    },
  ],
  },
  incombinedWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange or Red or Pink"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['combinedWords'+shuffledNumbersto[7]]: {
  botPrompt: 'Which word is a combination of "rain" and "coat"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Rainboar', 'Honeydog', "treestar","raincoat"]),
    answers: [
      {
        answer: 'Rainboar',
        nextId: 'incombinedWordscorrectq8',
      },
      {
        answer: 'Honeydog',
        nextId: 'incombinedWordscorrectq8',
      },
      {
        answer: "treestar",
        nextId: 'incombinedWordscorrectq8',
      },
      {
        answer: "raincoat",
        nextId: 'combinedWordscorrectq8',
      },
    ],
  },
  
  combinedWordscorrectq8: {
  botPrompt: 'Hurray! <strong>raincoat</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[8],
    },
  ],
  },
  incombinedWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"raincoat"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['combinedWords'+shuffledNumbersto[8]]: {
  botPrompt: 'Which word is a combination of "black" and "board"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Dogtree', 'Blackboard', "Sunrain","Buttercup"]),
    answers: [
      {
        answer: 'Dogtree',
        nextId: 'incombinedWordscorrectq9',
      },
      {
        answer: 'Blackboard',
        nextId: 'combinedWordscorrectq9',
      },
      {
        answer: "Sunrain",
        nextId: 'incombinedWordscorrectq9',
      },
      {
        answer: "Buttercup",
        nextId: 'incombinedWordscorrectq9',
      },
    ],
  },
  
  combinedWordscorrectq9: {
  botPrompt: 'Hurray! <strong>Blackboard</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[9],
    },
  ],
  },
  incombinedWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Blackboard"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['combinedWords'+shuffledNumbersto[9]]: {
  botPrompt: 'Which picture represents a  sunshine?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Blue', 'Orange', "Green","Yellow"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'combinedWordscorrectq10',
      },
      {
        answer: 'Orange',
        nextId: 'incombinedWordscorrectq10',
      },
      {
        answer: "Green",
        nextId: 'incombinedWordscorrectq10',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrectq10',
      },
    ],
  
  },
  
  combinedWordscorrectq10: {
  botPrompt: 'Hurray! <strong>Orange</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[10],
    },
  ],
  },
  incombinedWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Orange"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['combinedWords'+shuffledNumbersto[10]]: {
  botPrompt: 'Which picture represents a  starfish?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['White', 'Orange', "Purple","Pink"]),
    answers: [
      {
        answer: 'White',
        nextId: 'combinedWordscorrectq11',
      },
      {
        answer: 'Orange',
        nextId: 'incombinedWordscorrectq11',
      },
      {
        answer: "Purple",
        nextId: 'incombinedWordscorrectq11',
      },
      {
        answer: "Pink",
        nextId: 'incombinedWordscorrectq11',
      },
    ],
  },
  
  combinedWordscorrectq11: {
  botPrompt: 'Hurray! <strong>White</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[11],
    },
  ],
  },
  incombinedWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"White"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['combinedWords'+shuffledNumbersto[11]]: {
  botPrompt: 'Which word is a combination of "dog" and "house"?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Honeyrain', 'Buttercup', "Doghouse","Blackstar"]),
    answers: [
      {
        answer: 'Honeyrain',
        nextId: 'incombinedWordscorrectq12',
      },
      {
        answer: 'Buttercup',
        nextId: 'incombinedWordscorrectq12',
      },
      {
        answer: "Doghouse",
        nextId: 'combinedWordscorrectq12',
      },
      {
        answer: "Blackstar",
        nextId: 'incombinedWordscorrectq12',
      },
    ],
  },
  
  combinedWordscorrectq12: {
  botPrompt: 'Hurray! <strong>Doghouse</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[12],
    },
  ],
  },
  incombinedWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Doghouse"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['combinedWords'+shuffledNumbersto[12]]: {
  botPrompt: 'Which picture represents a  grasshopper?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Blue', 'Red', "Yellow"," Pink"]),
    answers: [
      {
        answer: 'Blue',
        nextId: 'incombinedWordscorrectq13',
      },
      {
        answer: 'Red',
        nextId: 'incombinedWordscorrectq13',
      },
      {
        answer: "Yellow",
        nextId: 'incombinedWordscorrectq13',
      },
      {
        answer: "Pink",
        nextId: 'combinedWordscorrectq13',
      },
    ],
  },
  
  combinedWordscorrectq13: {
  botPrompt: 'Hurray! <strong>Pink</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[13],
    },
  ],
  },
  incombinedWordscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pink"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['combinedWords'+shuffledNumbersto[13]]: {
  botPrompt: 'Moon can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Light', 'Beam', "Tree","Star"]),
    answers: [
      {
        answer: 'Light',
        nextId: 'combinedWordscorrectq14',
      },
      {
        answer: 'Beam',
        nextId: 'incombinedWordscorrectq14',
      },
      {
        answer: "Tree",
        nextId: 'incombinedWordscorrectq14',
      },
      {
        answer: "Star",
        nextId: 'incombinedWordscorrectq14',
      },
    ],
  },
  
  combinedWordscorrectq14: {
  botPrompt: 'Hurray! <strong>Light</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[14],
    },
  ],
  },
  incombinedWordscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Light"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['combinedWords'+shuffledNumbersto[14]]: {
  botPrompt: 'Jelly can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Honey', 'Fish', "Tree","Star"]),
    answers: [
      {
        answer: 'Honey',
        nextId: 'incombinedWordscorrectq15',
      },
      {
        answer: 'Fish',
        nextId: 'combinedWordscorrectq15',
      },
      {
        answer: "Tree",
        nextId: 'incombinedWordscorrectq15',
      },
      {
        answer: "Star",
        nextId: 'incombinedWordscorrectq15',
      },
    ],
  },

  combinedWordscorrectq15: {
  botPrompt: 'Hurray! <strong>Fish</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[15],
    },
  ],
  },
  incombinedWordscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fish"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['combinedWords'+shuffledNumbersto[15]]: {
    botPrompt: 'Apple can be combined with which word to make  new word?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Black', 'Tree', "Rain","Pie"]),
    answers: [
      {
        answer: 'Black',
        nextId: 'incombinedWordscorrectq16',
      },
      {
        answer: 'Tree',
        nextId: 'incombinedWordscorrectq16',
      },
      {
        answer: "Rain",
        nextId: 'incombinedWordscorrectq16',
      },
      {
        answer: "Pie",
        nextId: 'combinedWordscorrectq16',
      },
    ],
  },
  combinedWordscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Pie</strong> 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[16],
      },
    ],
  },
  incombinedWordscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pie"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['combinedWords'+shuffledNumbersto[16]]: {
  botPrompt: 'Dragon can be combined with which word to make  a  new word?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Castle', 'ButterFly', "Fly","Self"]),
    answers: [
      {
        answer: 'Castle',
        nextId: 'incombinedWordscorrectq17',
      },
      {
        answer: 'ButterFly',
        nextId: 'incombinedWordscorrectq17',
      },
      {
        answer: "Fly",
        nextId: 'combinedWordscorrectq17',
      },
      {
        answer: "Self",
        nextId: 'incombinedWordscorrectq17',
      },
    ],
  },
  combinedWordscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Fly</strong> 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[17],
    },
  ],
  },
  incombinedWordscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fly"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['combinedWords'+shuffledNumbersto[17]]: {
  botPrompt: 'Tree can be combined with which word to make a new word? ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['House', 'Tree', "Bug","Ball"]),
  answers: [
    {
      answer: 'House',
      nextId: 'combinedWordscorrectq18',
    },
    {
      answer: 'Tree',
      nextId: 'incombinedWordscorrectq18',
    },
    {
      answer: "Bug",
      nextId: 'incombinedWordscorrectq18',
    },
    {
      answer: "Ball",
      nextId: 'incombinedWordscorrectq18',
    },
  ],
  },
  combinedWordscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>House</strong> 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[18],
    },
  ],
  },
  incombinedWordscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"House"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['combinedWords'+shuffledNumbersto[18]]: {
  botPrompt: 'Water can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Truck', 'JellyFish', "Case","Melon"]),
  answers: [
    {
      answer: 'Truck',
      nextId: 'combinedWordscorrectq19',
    },
    {
      answer: 'JellyFish',
      nextId: 'combinedWordscorrectq19',
    },
    {
      answer: "Case",
      nextId: 'combinedWordscorrectq19',
    },
    {
      answer: "Melon",
      nextId: 'combinedWordscorrectq19',
    },
  ],
  },
  combinedWordscorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Melon</strong> Answers! 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[19],
    },
  ],
  },
  incombinedWordscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Melon"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['combinedWords'+shuffledNumbersto[19]]: {
  botPrompt: 'Snow can be combined with which word to make a new word?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Truck', 'Man', "Case","Melon"]),
  answers: [
    {
      answer: 'Truck',
      nextId: 'incombinedWordscorrectq20',
    },
    {
      answer: 'Man',
      nextId: 'combinedWordscorrectq20',
    },
    {
      answer: "Case",
      nextId: 'incombinedWordscorrectq20',
    },
    {
      answer: "Melon",
      nextId: 'incombinedWordscorrectq20',
    },
  ],
  },
  combinedWordscorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Man</strong> 😎',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[20],
    },
  ],
  },
  incombinedWordscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Man"</strong>',
  answers: [
    {
      nextId: 'combinedWords'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["combinedWords"+shuffledNumbersto[20]]: {
    botPrompt: 'Lady can be combined with which word to make a new word?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Bird', 'Rain', "Dog","Bug"]),
  answers: [
    {
      answer: 'Bird',
      nextId: 'incombinedWordscorrectq21',
    },
    {
      answer: 'Rain',
      nextId: 'incombinedWordscorrectq21',
    },
    {
      answer: "Dog",
      nextId: 'incombinedWordscorrectq21',
    },
    {
      answer: "Bug",
      nextId: 'combinedWordscorrectq21',
    },
  ],
  },
  combinedWordscorrectq21: {
    botPrompt: 'Hurray <strong>Bug</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[21],
      },
    ],
  },
  incombinedWordscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bug"</strong>',
    answers: [
      {
        nextId: 'combinedWords'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['combinedWords'+shuffledNumbersto[21]]: {
    botPrompt: 'Grass can be combined with which word to make a new word?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Truck', 'Water', "Case","Hopper"]),
  answers: [
    {
      answer: 'Truck',
      nextId: 'incombinedWordscorrectq22',
    },
    {
      answer: 'Water',
      nextId: 'incombinedWordscorrectq22',
    },
    {
      answer: "Case",
      nextId: 'incombinedWordscorrectq22',
    },
    {
      answer: "Hopper",
      nextId: 'combinedWordscorrectq22',
    },
  ],
  },
  
  combinedWordscorrectq22: {
    botPrompt: 'Hurray! <strong>Hopper</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishtocontinue36',
      },
    ],
  },
  incombinedWordscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hopper"</strong>',
    answers: [
      {
        nextId: 'wishtocontinue36',
      },
    ],
  },
  
  //endcombinedWordsletter

  wishtocontinue36: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day37',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
  
        },
    ],
  },

//day37
day37: {
  botPrompt: '<strong> Day 37 : </strong> Understanding the purpose',
  answers: [
          { nextId: 'day37comment' },
  ],
  sumToBags: [{ name: 'd', points: 37 }],

},
day37comment: {
  botPrompt: 'TLM making',
  answers: [
          { nextId: 'day37comment1' },
  ],
},
day37comment1: {
  botPrompt: 'Using it in class',
  answers: [
          { nextId: 'wishtocontinue37' },
  ],
},

wishtocontinue37: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day38',
      },
      {
        answer: 'No!',
        nextId: 'endConv',

      },
  ],
},

day38: {
  botPrompt: '<strong> Day 38 : </strong> Understanding concepts like "above," "below," "beside," and "in front" lays the foundation for effective communication and reading abilities., enabling children to express ideas and interact effectively.',
  answers: [
          { nextId: 'day38link' },
  ],
},
day38link: {

  botPrompt: 'https://youtu.be/d70QvTi1Y2E,https://youtu.be/FG2aEUX2RXk',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day382comment' },
  ],
},

day382comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day382link' },
  ],
},
day382link: {
  botPrompt: 'https://drive.google.com/file/d/1e0RvqhSnTorOMiUZeDM9hTL-CBzER5V4/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[0],
    },
  ],
},


//positionWords


["positionWords"+shuffledNumbersto[0]]: {
    botPrompt: '1. The cat is ____ the table.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'positionWordscorrect',
      },
      {
        answer: 'In',
        nextId: 'inpositionWordscorrect',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrect',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrect',
      },
    ],
  },
  positionWordscorrect: {
    botPrompt: 'Hurray <strong>On</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[1],
      },
    ],
  },
  inpositionWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['positionWords'+shuffledNumbersto[1]]: {
    botPrompt: '2. The toy is ____ the box.',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'inpositionWordscorrectq2',
      },
      {
        answer: 'In',
        nextId: 'positionWordscorrectq2',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrectq2',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrectq2',
      },
    ],
  },

  positionWordscorrectq2: {
    botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[2],
      },
    ],
  },
  inpositionWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[2],
      },
    ],
  },

  //3
  ['positionWords'+shuffledNumbersto[2]]: {
  botPrompt: '3. The flower vase  is ____ the table.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'positionWordscorrectq3',
      },
      {
        answer: 'In',
        nextId: 'inpositionWordscorrectq3',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrectq3',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrectq3',
      },
    ],
  },
  
  positionWordscorrectq3: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[3],
    },
  ],
  },
  inpositionWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[3],
    },
  ],
  },

  //4
  ['positionWords'+shuffledNumbersto[3]]: {
  botPrompt: '4. The boy is ____ the table.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'inpositionWordscorrectq4',
      },
      {
        answer: 'In',
        nextId: 'inpositionWordscorrectq4',
      },
      {
        answer: "Under",
        nextId: 'positionWordscorrectq4',
      },
      {
        answer: "Behind",
        nextId: 'inpositionWordscorrectq4',
      },
    ],
  },

  positionWordscorrectq4: {
  botPrompt: 'Hurray! <strong>Under</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[4],
    },
  ],
  },
  inpositionWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Under"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['positionWords'+shuffledNumbersto[4]]: {
  botPrompt: '5. The cup is ____ the table.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'positionWordscorrectq5',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq5',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq5',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq5',
    },
  ],
  },
  
  positionWordscorrectq5: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[5],
    },
  ],
  },
  inpositionWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['positionWords'+shuffledNumbersto[5]]: {
  botPrompt: '6. The car is ____ the garage.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq6',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq6',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq6',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq6',
    },
  ],
  },

  positionWordscorrectq6: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[6],
    },
  ],
  },
  inpositionWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>Right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[6],
    },
  ],
  },

  //7
  ['positionWords'+shuffledNumbersto[6]]: {
  botPrompt: '7. The pencils are ____ the bag.',
  type: RTypes.TRANSFORMED_TEXT,


  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq7',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq7',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq7',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq7',
    },
  ],
  },
  
  positionWordscorrectq7: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[7],
    },
  ],
  },
  inpositionWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['positionWords'+shuffledNumbersto[7]]: {
  botPrompt: '8. The teddy bear is ____ the bed.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'positionWordscorrectq8',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq8',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq8',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq8',
    },
  ],
  },
  
  positionWordscorrectq8: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[8],
    },
  ],
  },
  inpositionWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['positionWords'+shuffledNumbersto[8]]: {
  botPrompt: '9. The teacher is sitting _____ the girls',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq9',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq9',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq9',
    },
    {
      answer: "Between",
      nextId: 'positionWordscorrectq9',
    },
  ],
  },
  
  positionWordscorrectq9: {
  botPrompt: 'Hurray! <strong>Between</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[9],
    },
  ],
  },
  inpositionWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Between"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['positionWords'+shuffledNumbersto[9]]: {
  botPrompt: '10. The spoon is ____ the bowl.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq10',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq10',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq10',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq10',
    },
  ],
  
  },
  
  positionWordscorrectq10: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[10],
    },
  ],
  },
  inpositionWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['positionWords'+shuffledNumbersto[10]]: {
  botPrompt: '11. The dog is ____ the house.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "infront of","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq11',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq11',
    },
    {
      answer: "infront of",
      nextId: 'positionWordscorrectq11',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq11',
    },
  ],
  },
  
  positionWordscorrectq11: {
  botPrompt: 'Hurray! <strong>infront of</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[11],
    },
  ],
  },
  inpositionWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"infront of"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['positionWords'+shuffledNumbersto[11]]: {
  botPrompt: '12. The girl is _____ the bed.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'positionWordscorrectq12',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq12',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq12',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq12',
    },
  ],
  },
  
  positionWordscorrectq12: {
  botPrompt: 'Hurray! <strong>On</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[12],
    },
  ],
  },
  inpositionWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"On"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['positionWords'+shuffledNumbersto[12]]: {
  botPrompt: '13. The flower is ____ the vase.',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq13',
    },
    {
      answer: 'In',
      nextId: 'positionWordscorrectq13',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq13',
    },
    {
      answer: "Between",
      nextId: 'inpositionWordscorrectq13',
    },
  ],
  },
  
  positionWordscorrectq13: {
  botPrompt: 'Hurray! <strong>In</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[13],
    },
  ],
  },
  inpositionWordscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"In"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['positionWords'+shuffledNumbersto[13]]: {
  botPrompt: '14. The plate is in _____ the fork and spoon.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['On', 'In', "Under","Between"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq14',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq14',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq14',
    },
    {
      answer: "Between",
      nextId: 'positionWordscorrectq14',
    },
  ],
  },
  
  positionWordscorrectq14: {
  botPrompt: 'Hurray! <strong>Between</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[14],
    },
  ],
  },
  inpositionWordscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Between"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['positionWords'+shuffledNumbersto[14]]: {
  botPrompt: '15. The dog is ____ the chair.',
  type: RTypes.TRANSFORMED_TEXT,
  

  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq15',
    },
    {
      answer: 'In',
      nextId: 'inpositionWordscorrectq15',
    },
    {
      answer: "Under",
      nextId: 'positionWordscorrectq15',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq15',
    },
  ],
  },

  positionWordscorrectq15: {
  botPrompt: 'Hurray! <strong>Under</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[15],
    },
  ],
  },
  inpositionWordscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Under"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['positionWords'+shuffledNumbersto[15]]: {
    botPrompt: '16. The car is  ____ the tree',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['On', 'In', "Under","Behind"]),
    answers: [
      {
        answer: 'On',
        nextId: 'inpositionWordscorrectq16',
      },
      {
        answer: 'Between',
        nextId: 'inpositionWordscorrectq16',
      },
      {
        answer: "Under",
        nextId: 'inpositionWordscorrectq16',
      },
      {
        answer: "Behind",
        nextId: 'positionWordscorrectq16',
      },
    ],
  },
  positionWordscorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Behind</strong> 😎',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[16],
      },
    ],
  },
  inpositionWordscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Behind"</strong>',
    answers: [
      {
        nextId: 'positionWords'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['positionWords'+shuffledNumbersto[16]]: {
  botPrompt: '17. The boy is _____ the father and mother.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","Behind"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: 'Between',
      nextId: 'positionWordscorrectq17',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: "Behind",
      nextId: 'inpositionWordscorrectq17',
    },
  ],
  },
  positionWordscorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Between</strong> 😎',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[17],
    },
  ],
  },
  inpositionWordscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Between"</strong>',
  answers: [
    {
      nextId: 'positionWords'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['positionWords'+shuffledNumbersto[17]]: {
  botPrompt: '18.The boy is _______ of the car.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['On', 'In', "Under","inside"]),
  answers: [
    {
      answer: 'On',
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: 'Between',
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: "Under",
      nextId: 'inpositionWordscorrectq17',
    },
    {
      answer: "inside",
      nextId: 'positionWordscorrectq17',
    },
  ],
  },
  positionWordscorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>inside</strong> 😎',
  answers: [
    {
      nextId: 'wishtocontinue38'
    },
  ],
  },
  inpositionWordscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"inside"</strong>',
  answers: [
    {
      nextId: 'wishtocontinue38'
    },
  ],
  },

  
  //endpositionWordsletter

  wishtocontinue38: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day40',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
  
        },
    ],
  },
  
  //day40
day40: {
  botPrompt: '<strong> Day 40 : </strong> The "Hello Game" in kindergarten fosters social skills and helps children build friendships by encouraging interaction and positive communication from an early age.',
  answers: [
          { nextId: 'day40comment' },
  ],
  sumToBags: [{ name: 'd', points: 40 }],

},

day40link: {
  botPrompt: 'https://youtu.be/-7h-H2344cE',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue40',
    },
  ],
},

wishtocontinue40: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day41',
      },
      {
        answer: 'No!',
        nextId: 'endConv',

      },
  ],
},

day41: {
  botPrompt: '<strong> Day 41 : </strong> Through rhyming activities, children develop sound recognition and expand their vocabulary',
  answers: [
          { nextId: 'day41link' },
  ],
},
day41link: {

  botPrompt: 'https://youtu.be/FgBlTNWH3To',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day412comment' },
  ],
},

day412comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day412link' },
  ],
},
day412link: {
  botPrompt: 'https://drive.google.com/file/d/1e0RvqhSnTorOMiUZeDM9hTL-CBzER5V4/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[0],
    },
  ],
},

//rhymingWords


["rhymingWords"+shuffledNumbersto[0]]: {
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
        nextId: 'rhymingWords'+shuffledNumbersto[1],
      },
    ],
  },
  inrhymingWordscorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['rhymingWords'+shuffledNumbersto[1]]: {
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
        nextId: 'rhymingWords'+shuffledNumbersto[2],
      },
    ],
  },
  inrhymingWordscorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Look"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['rhymingWords'+shuffledNumbersto[2]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[3],
    },
  ],
  },
  inrhymingWordscorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Run"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['rhymingWords'+shuffledNumbersto[3]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[4],
    },
  ],
  },
  inrhymingWordscorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cat"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['rhymingWords'+shuffledNumbersto[4]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[5],
    },
  ],
  },
  inrhymingWordscorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chair"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['rhymingWords'+shuffledNumbersto[5]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[6],
    },
  ],
  },
  inrhymingWordscorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"red"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['rhymingWords'+shuffledNumbersto[6]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[7],
    },
  ],
  },
  inrhymingWordscorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Chair"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['rhymingWords'+shuffledNumbersto[7]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[8],
    },
  ],
  },
  inrhymingWordscorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fun"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['rhymingWords'+shuffledNumbersto[8]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[9],
    },
  ],
  },
  inrhymingWordscorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Rat"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['rhymingWords'+shuffledNumbersto[9]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[10],
    },
  ],
  },
  inrhymingWordscorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Cook"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['rhymingWords'+shuffledNumbersto[10]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[11],
    },
  ],
  },
  inrhymingWordscorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Net"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['rhymingWords'+shuffledNumbersto[11]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[12],
    },
  ],
  },
  inrhymingWordscorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Job"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['rhymingWords'+shuffledNumbersto[12]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[13],
    },
  ],
  },
  inrhymingWordscorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hut"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['rhymingWords'+shuffledNumbersto[13]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[14],
    },
  ],
  },
  inrhymingWordscorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dip"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['rhymingWords'+shuffledNumbersto[14]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[15],
    },
  ],
  },
  inrhymingWordscorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Mug"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['rhymingWords'+shuffledNumbersto[15]]: {
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
        nextId: 'rhymingWords'+shuffledNumbersto[16],
      },
    ],
  },
  inrhymingWordscorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Pad"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['rhymingWords'+shuffledNumbersto[16]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[17],
    },
  ],
  },
  inrhymingWordscorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hen"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['rhymingWords'+shuffledNumbersto[17]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[18],
    },
  ],
  },
  inrhymingWordscorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Jog"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['rhymingWords'+shuffledNumbersto[18]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[19],
    },
  ],
  },
  inrhymingWordscorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hut"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['rhymingWords'+shuffledNumbersto[19]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[20],
    },
  ],
  },
  inrhymingWordscorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hen"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["rhymingWords"+shuffledNumbersto[20]]: {
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
        nextId: 'rhymingWords'+shuffledNumbersto[21],
      },
    ],
  },
  inrhymingWordscorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Bed"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['rhymingWords'+shuffledNumbersto[21]]: {
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
        nextId: 'rhymingWords'+shuffledNumbersto[22],
      },
    ],
  },
  inrhymingWordscorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Lit"</strong>',
    answers: [
      {
        nextId: 'rhymingWords'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['rhymingWords'+shuffledNumbersto[22]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[23],
    },
  ],
  },
  inrhymingWordscorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Kite"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['rhymingWords'+shuffledNumbersto[23]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[24],
    },
  ],
  },
  inrhymingWordscorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[24],
    },
  ],
  },
  
  //25
  ['rhymingWords'+shuffledNumbersto[24]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[25],
    },
  ],
  },
  inrhymingWordscorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Fit"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['rhymingWords'+shuffledNumbersto[25]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[26],
    },
  ],
  },
  inrhymingWordscorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Log"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['rhymingWords'+shuffledNumbersto[26]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[27],
    },
  ],
  },
  inrhymingWordscorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Mad"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[27],
    },
  ],
  },
  
  
  //28
  ['rhymingWords'+shuffledNumbersto[27]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[28],
    },
  ],
  },
  inrhymingWordscorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Dog"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['rhymingWords'+shuffledNumbersto[28]]: {
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
      nextId: 'rhymingWords'+shuffledNumbersto[29],
    },
  ],
  },
  inrhymingWordscorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Sun"</strong>',
  answers: [
    {
      nextId: 'rhymingWords'+shuffledNumbersto[29],
    },
  ],
  },
  

  //30
  ['rhymingWords'+shuffledNumbersto[29]]: {
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
      nextId: 'wishToContinue41',
    },
  ],
  },
  inrhymingWordscorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Hat"</strong>',
  answers: [
    {
      nextId: 'wishToContinue41',
    },
  ],
  },

  //endrhymingWordsletter

  wishToContinue41: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day42',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
  
        },
    ],
  },

  //day42
day42: {
  botPrompt: '<strong> Day 42 : </strong> Wheels on the bus : Song Video',
  answers: [
          { nextId: 'day42comment' },
  ],
  sumToBags: [{ name: 'd', points: 42 }],

},
day42comment: {
  botPrompt: 'Practice',
  answers: [
          { nextId: 'wishtocontinue42' },
  ],
},

wishtocontinue42: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day44',
      },
      {
        answer: 'No!',
        nextId: 'endConv',

      },
  ],
},

//day44

day44: {
  botPrompt: 'https://youtu.be/7CpiCbBsh5A',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'wishtocontinue44',
    },
  ],
  sumToBags: [{ name: 'd', points: 44 }],

},



wishtocontinue44: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day45',
      },
      {
        answer: 'No!',
        nextId: 'endConv',
      },
  ],
},

day45: {
  botPrompt: '<strong> Day 45 : </strong> Division is essential in kindergarten as it helps children develop their basic math skills by understanding sharing and equal distribution',
  answers: [
          { nextId: 'day452comment' },
  ],
},

day452comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day451link' },
  ],
},
day451link: {

  botPrompt: 'https://drive.google.com/file/d/1m3PAK02sWCi7IEPF8fPiGHVFo6frm_8G/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day452link' },
  ],
},
day452link: {

  botPrompt: 'https://drive.google.com/file/d/1pHs1-6e0iESjWr1GDbOVcVwrrasFovej/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day454link' },
  ],
},
day454link: {
  botPrompt: 'https://drive.google.com/file/d/1U1x8FyRcRDggFyLa_glAjblejOVpbGh8/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'division'+shuffledNumbersto[0],
    },
  ],
},
//myHeShe


["myHeShe"+shuffledNumbersto[0]]: {
    botPrompt: '_______ going to the park to play.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
      {
        answer: 'I aam',
        nextId: 'inmyHeShecorrect',
      },
      {
        answer: 'am',
        nextId: 'inmyHeShecorrect',
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrect',
      },
      {
        answer: "I am",
        nextId: 'myHeShecorrect',
      },
    ],
  },
  myHeShecorrect: {
    botPrompt: 'Hurray <strong>I am</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[1],
      },
    ],
  },
  inmyHeShecorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['myHeShe'+shuffledNumbersto[1]]: {
    botPrompt: '_______ drawing a picture.?',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
      {
        answer: 'I aam',
        nextId: 'inmyHeShecorrectq2',
      },
      {
        answer: 'am',
        nextId: 'inmyHeShecorrectq2',
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq2',
      },
      {
        answer: "I am",
        nextId: 'myHeShecorrectq2',
      },
    ],
  },
  
  myHeShecorrectq2: {
    botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[2],
      },
    ],
  },
  inmyHeShecorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['myHeShe'+shuffledNumbersto[2]]: {
  botPrompt: "_______ wearing a blue shirt today.",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
        {
            answer: 'I aam',
            nextId: 'inmyHeShecorrectq3',
          },
          {
            answer: 'am',
            nextId: 'inmyHeShecorrectq3',
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq3',
          },
          {
            answer: "I am",
            nextId: 'myHeShecorrectq3',
          },
        ],
  },
  
  myHeShecorrectq3: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[3],
    },
  ],
  },
  inmyHeShecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['myHeShe'+shuffledNumbersto[3]]: {
  botPrompt: '_______ playing with my friends.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I aam', 'am', "I amm","I am"]),
  answers: [
    {
        answer: 'I aam',
        nextId: 'myHeShecorrectq4',
      },
      {
        answer: 'am',
        nextId: 'inmyHeShecorrectq4',
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq4',
      },
      {
        answer: "I am",
        nextId: 'inmyHeShecorrectq4',
      },
    ],
  },
  
  myHeShecorrectq4: {
  botPrompt: 'Hurray! <strong>I aam</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[4],
    },
  ],
  },
  inmyHeShecorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I aam"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['myHeShe'+shuffledNumbersto[4]]: {
  botPrompt: '_______ eating an apple for snack.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I aam', 'am', "I amm","I am"]),
    answers: [
        {
            answer: 'I aam',
            nextId: 'myHeShecorrectq5',
          },
          {
            answer: 'am',
            nextId: 'inmyHeShecorrectq5',
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq5',
          },
          {
            answer: "I am",
            nextId: 'inmyHeShecorrectq5',
          },
    ],
  },
  
  myHeShecorrectq5: {
  botPrompt: 'Hurray! <strong>I aam</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[5],
    },
  ],
  },
  inmyHeShecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I aam"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['myHeShe'+shuffledNumbersto[5]]: {
  botPrompt: '_______ favourite colour is blue.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', 'Me', "I","My"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'inmyHeShecorrectq6',
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq6',
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq6',
      },
      {
        answer: "My",
        nextId: 'myHeShecorrectq6',
      },
    ],
  },
  
  myHeShecorrectq6: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[6],
    },
  ],
  },
  inmyHeShecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['myHeShe'+shuffledNumbersto[6]]: {
  botPrompt: '_______ teacher is kind and helpful.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', 'Me', "I","My"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'inmyHeShecorrectq7',
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq7',
      },
      {
        answer: "I",
        nextId: 'myHeShecorrectq7',
      },
      {
        answer: "My",
        nextId: 'inmyHeShecorrectq7',
      },
    ],
  },
  
  myHeShecorrectq7: {
  botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[7],
    },
  ],
  },
  inmyHeShecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['myHeShe'+shuffledNumbersto[7]]: {
  botPrompt: '_______ birthday is in September.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['I am', 'Me', "I","My"]),
    answers: [
        {
            answer: 'I am',
            nextId: 'inmyHeShecorrectq7',
          },
          {
            answer: 'Me',
            nextId: 'inmyHeShecorrectq7',
          },
          {
            answer: "I",
            nextId: 'inmyHeShecorrectq7',
          },
          {
            answer: "My",
            nextId: 'myHeShecorrectq7',
          },
    ],
  },
  
  myHeShecorrectq8: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[8],
    },
  ],
  },
  inmyHeShecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['myHeShe'+shuffledNumbersto[8]]: {
  botPrompt: '_______ pet is a cute cat.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['My', 'Me', "I","Mine"]),
    answers: [
      {
        answer: 'My',
        nextId: 'myHeShecorrectq9',
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq9',
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq9',
      },
      {
        answer: "Mine",
        nextId: 'inmyHeShecorrectq9',
      },
    ],
  },
  
  myHeShecorrectq9: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[9],
    },
  ],
  },
  inmyHeShecorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['myHeShe'+shuffledNumbersto[9]]: {
  botPrompt: '_______ mom makes delicious cookies.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['My', 'Me', "I","Mine"]),
    answers: [
      {
        answer: 'My',
        nextId: 'myHeShecorrectq10',
      },
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq10',
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq10',
      },
      {
        answer: "Mine",
        nextId: 'inmyHeShecorrectq10',
      },
    ],
  
  },
  
  myHeShecorrectq10: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[10],
    },
  ],
  },
  inmyHeShecorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['myHeShe'+shuffledNumbersto[10]]: {
  botPrompt: 'Look at _______ colourful artwork.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['I aam', 'My', "I amm","I am"]),
    answers: [
      {
        answer: 'I aam',
        nextId: 'inmyHeShecorrectq11',
      },
      {
        answer: 'My',
        nextId: 'myHeShecorrectq11',
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq11',
      },
      {
        answer: "I am",
        nextId: 'inmyHeShecorrectq11',
      },
    ],
  },
  
  myHeShecorrectq11: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[11],
    },
  ],
  },
  inmyHeShecorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['myHeShe'+shuffledNumbersto[11]]: {
  botPrompt: '_______ going to visit my grandma.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'myHeShecorrectq12',
      },
      {
        answer: "I'mm",
        nextId: 'inmyHeShecorrectq12',
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq12',
      },
      {
        answer: "I aam",
        nextId: 'inmyHeShecorrectq12',
      },
    ],
  },
  
  myHeShecorrectq12: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[12],
    },
  ],
  },
  inmyHeShecorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['myHeShe'+shuffledNumbersto[12]]: {
  botPrompt: '_______ helping my mom in the kitchen.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
      {
        answer: 'I am',
        nextId: 'myHeShecorrectq13',
      },
      {
        answer: "I'mm",
        nextId: 'inmyHeShecorrectq13',
      },
      {
        answer: "I amm",
        nextId: 'inmyHeShecorrectq13',
      },
      {
        answer: "I aam",
        nextId: 'inmyHeShecorrectq13',
      },
    ],
  },
  
  myHeShecorrectq13: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[13],
    },
  ],
  },
  inmyHeShecorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['myHeShe'+shuffledNumbersto[13]]: {
  botPrompt: '_______ wearing a hat on my head.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
        {
            answer: 'I am',
            nextId: 'myHeShecorrectq14',
          },
          {
            answer: "I'mm",
            nextId: 'inmyHeShecorrectq14',
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq14',
          },
          {
            answer: "I aam",
            nextId: 'inmyHeShecorrectq14',
          },
    ],
  },
  
  myHeShecorrectq14: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[14],
    },
  ],
  },
  inmyHeShecorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['myHeShe'+shuffledNumbersto[14]]: {
  botPrompt: '_______ playing with my favourite toy.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['I am', "I'mm", "I amm","I aam"]),
    answers: [
        {
            answer: 'I am',
            nextId: 'myHeShecorrectq15',
          },
          {
            answer: "I'mm",
            nextId: 'inmyHeShecorrectq15',
          },
          {
            answer: "I amm",
            nextId: 'inmyHeShecorrectq15',
          },
          {
            answer: "I aam",
            nextId: 'inmyHeShecorrectq15',
          },
    ],
  },
  
  myHeShecorrectq15: {
  botPrompt: 'Hurray! <strong>I am</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[15],
    },
  ],
  },
  inmyHeShecorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I am"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['myHeShe'+shuffledNumbersto[15]]: {
    botPrompt: 'Look at _______ cute teddy bear.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Myy', "Me", "My","Mine"]),
    answers: [
        {
            answer: 'Myy',
            nextId: 'inmyHeShecorrectq16',
          },
          {
            answer: "Me",
            nextId: 'inmyHeShecorrectq16',
          },
          {
            answer: "My",
            nextId: 'myHeShecorrectq16',
          },
          {
            answer: "Mine",
            nextId: 'inmyHeShecorrectq16',
          },

    ],
  },
  myHeShecorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[16],
      },
    ],
  },
  inmyHeShecorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['myHeShe'+shuffledNumbersto[16]]: {
  botPrompt: '_______ grandparents live in the town.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Myy', "Me", "I","Mine"]),
    answers: [
        {
            answer: 'Myy',
            nextId: 'myHeShecorrectq16',
          },
          {
            answer: "Me",
            nextId: 'inmyHeShecorrectq16',
          },
          {
            answer: "I",
            nextId: 'inmyHeShecorrectq16',
          },
          {
            answer: "Mine",
            nextId: 'inmyHeShecorrectq16',
          },

    ],
  },
  myHeShecorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Myy</strong> 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[17],
    },
  ],
  },
  inmyHeShecorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Myy"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['myHeShe'+shuffledNumbersto[17]]: {
  botPrompt: '_______ backpack has a picture of a dinosaur.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['My', "Me", "I","Mine"]),
  answers: [
    {
        answer: 'My',
        nextId: 'myHeShecorrectq16',
      },
      {
        answer: "Me",
        nextId: 'inmyHeShecorrectq16',
      },
      {
        answer: "I",
        nextId: 'inmyHeShecorrectq16',
      },
      {
        answer: "Mine",
        nextId: 'inmyHeShecorrectq16',
      },

  ],
  },
  myHeShecorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[18],
    },
  ],
  },
  inmyHeShecorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['myHeShe'+shuffledNumbersto[18]]: {
  botPrompt: '_______ room is tidy and organized.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Me', 'My', "I","Mine"]),
  answers: [
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq19',
    },
    {
      answer: 'My',
      nextId: 'myHeShecorrectq19',
    },
    {
      answer: 'I',
      nextId: 'myHeShecorrectq19',
    },
    {
      answer: 'Mine',
      nextId: 'myHeShecorrectq19',
    },

  ],
  },
  myHeShecorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> Answers! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[19],
    },
  ],
  },
  inmyHeShecorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['myHeShe'+shuffledNumbersto[19]]: {
  botPrompt: '_______ favourite book is about animals.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Me', 'My', "I","Mine"]),
  answers: [
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq20',
    },
    {
      answer: 'My',
      nextId: 'myHeShecorrectq20',
    },
    {
      answer: 'I',
      nextId: 'myHeShecorrectq20',
    },
    {
      answer: 'Mine',
      nextId: 'myHeShecorrectq20',
    },

  ],
  },
  myHeShecorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>My</strong> 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[20],
    },
  ],
  },
  inmyHeShecorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[20],
    },
  ],
  },
  
  //21
  ["myHeShe"+shuffledNumbersto[20]]: {
    botPrompt: "Look at _______ beautiful drawing.",
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Me', 'My', "I","Mine"]),
    answers: [
      {
        answer: 'Me',
        nextId: 'inmyHeShecorrectq21',
      },
      {
        answer: 'My',
        nextId: 'myHeShecorrectq21',
      },
      {
        answer: 'I',
        nextId: 'myHeShecorrectq21',
      },
      {
        answer: 'Mine',
        nextId: 'myHeShecorrectq21',
      },
  
    ],
  },
  myHeShecorrectq21: {
    botPrompt: 'Hurray <strong>My</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[21],
      },
    ],
  },
  inmyHeShecorrectq21: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[21],
      },
    ],
  },
  
  //22
  ['myHeShe'+shuffledNumbersto[21]]: {
    botPrompt: 'What is a pronoun used to refer to objects or animals?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq22',
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq22',
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq22',
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq22',
    },

  ],
  },
  
  myHeShecorrectq22: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[22],
      },
    ],
  },
  inmyHeShecorrectq22: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[22],
      },
    ],
  },
  
  //23
  ['myHeShe'+shuffledNumbersto[22]]: {
  botPrompt: "Which word can be used to talk about a toy or a book?",
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq23',
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq23',
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq23',
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq23',
    },

  ],
  },
  
  myHeShecorrectq23: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[23],
    },
  ],
  },
  inmyHeShecorrectq23: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[23],
    },
  ],
  },
  
  //24
  ['myHeShe'+shuffledNumbersto[23]]: {
  botPrompt: 'Complete the sentence: ___ is a red ball.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq24',
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq24',
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq24',
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq24',
    },

  ],
  },

  myHeShecorrectq24: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[24],
    },
  ],
  },
  inmyHeShecorrectq24: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[24],
    },
  ],
  },

  //25
  ['myHeShe'+shuffledNumbersto[24]]: {
  botPrompt: 'Complete the sentence: ___ is a cute puppy.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq24',
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq24',
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq24',
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq24',
    },

  ],
  },
  
  myHeShecorrectq25: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[25],
    },
  ],
  },
  inmyHeShecorrectq25: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[25],
    },
  ],
  },
  
  //26
  ['myHeShe'+shuffledNumbersto[25]]: {
  botPrompt: 'Complete the sentence: ___ is raining outside.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['He', 'She', "It","They"]),
  answers: [
    {
      answer: 'He',
      nextId: 'inmyHeShecorrectq24',
    },
    {
      answer: 'She',
      nextId: 'inmyHeShecorrectq24',
    },
    {
      answer: 'It',
      nextId: 'myHeShecorrectq24',
    },
    {
      answer: 'They',
      nextId: 'inmyHeShecorrectq24',
    },

  ],
  },
  
  myHeShecorrectq26: {
  botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[26],
    },
  ],
  },
  inmyHeShecorrectq26: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[26],
    },
  ],
  },
  
  //27
  ['myHeShe'+shuffledNumbersto[26]]: {
  botPrompt: '_______ room has a big window.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Me', 'I', "My","A"]),
    answers: [
      {
        answer: 'Me',
        nextId: 'myHeShecorrectq27',
      },
      {
        answer: 'My',
        nextId: 'inmyHeShecorrectq27',
      },
      {
        answer: 'I',
        nextId: 'myHeShecorrectq27',
      },
      {
        answer: 'A',
        nextId: 'inmyHeShecorrectq27',
      },

    ],
  },
  
  myHeShecorrectq27: {
  botPrompt: 'Hurray! <strong>I</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[27],
    },
  ],
  },
  inmyHeShecorrectq27: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"I"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[27],
    },
  ],
  },

  
  //28
  ['myHeShe'+shuffledNumbersto[27]]: {
  botPrompt: '_______ best friend name is Neha',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['My', 'Me', "I","Mine"]),
  answers: [
    {
      answer: 'My',
      nextId: 'myHeShecorrectq28',
    },
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq28',
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq28',
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq28',
    },
  ],
  },

  myHeShecorrectq28: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[28],
    },
  ],
  },
  inmyHeShecorrectq28: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[28],
    },
  ],
  },
  
  //29
  ['myHeShe'+shuffledNumbersto[28]]: {
  botPrompt: '_______ dog is friendly.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['My', 'Me', "I","Mine"]),
  answers: [
    {
      answer: 'My',
      nextId: 'myHeShecorrectq29',
    },
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq29',
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq29',
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq29',
    },
  ],
  },

  myHeShecorrectq29: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[29],
    },
  ],
  },
  inmyHeShecorrectq29: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[29],
    },
  ],
  },


  //30
  ['myHeShe'+shuffledNumbersto[29]]: {
  botPrompt: "Look at _______ colorful drawing.",
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['My', 'Me', "I","Mine"]),
  answers: [
    {
      answer: 'My',
      nextId: 'myHeShecorrectq30',
    },
    {
      answer: 'Me',
      nextId: 'inmyHeShecorrectq30',
    },
    {
      answer: 'I',
      nextId: 'inmyHeShecorrectq30',
    },
    {
      answer: 'Mine',
      nextId: 'inmyHeShecorrectq30',
    },
  ],
  },

  myHeShecorrectq30: {
  botPrompt: 'Hurray! <strong>My</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[30],
    },
  ],
  },
  inmyHeShecorrectq30: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"My"</strong>',
  answers: [
    {
      nextId: 'myHeShe'+shuffledNumbersto[30],
    },
  ],
  },

    //31
    ['myHeShe'+shuffledNumbersto[30]]: {
        botPrompt: "Which word can be used to refer to a sun or a cloud?",
        type: RTypes.TRANSFORMED_TEXT,
      
        input: selectField(['He', 'She', "It","They"]),
        answers: [
          {
            answer: 'He',
            nextId: 'inmyHeShecorrectq31',
          },
          {
            answer: 'She',
            nextId: 'inmyHeShecorrectq31',
          },
          {
            answer: 'It',
            nextId: 'myHeShecorrectq31',
          },
          {
            answer: 'They',
            nextId: 'inmyHeShecorrectq31',
          },
        ],
        },
      
        myHeShecorrectq31: {
        botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
        answers: [
          {
            nextId: 'myHeShe'+shuffledNumbersto[31],
          },
        ],
        },
        inmyHeShecorrectq31: {
        botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
        answers: [
          {
            nextId: 'myHeShe'+shuffledNumbersto[31],
          },
        ],
        },

          //32
  ['myHeShe'+shuffledNumbersto[31]]: {
    botPrompt: "Which word can be used to refer to a book or a pencil?",
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq32',
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq32',
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq32',
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq32',
      },
    ],
    },
  
    myHeShecorrectq32: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[32],
      },
    ],
    },
    inmyHeShecorrectq32: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[32],
      },
    ],
    },

      //33
  ['myHeShe'+shuffledNumbersto[32]]: {
    botPrompt: "Which word can be used to refer to a flower or a tree?",
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq33',
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq33',
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq33',
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq33',
      },
    ],
    },
  
    myHeShecorrectq33: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[33],
      },
    ],
    },
    inmyHeShecorrectq33: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[33],
      },
    ],
    },

      //34
  ['myHeShe'+shuffledNumbersto[33]]: {
    botPrompt: "Which word can be used to refer to a cat or a dog?",
    type: RTypes.TRANSFORMED_TEXT,


    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq33',
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq33',
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq33',
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq33',
      },
    ],
    },
  
    myHeShecorrectq34: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[34],
      },
    ],
    },
    inmyHeShecorrectq34: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'myHeShe'+shuffledNumbersto[34],
      },
    ],
    },

      //35
  ['myHeShe'+shuffledNumbersto[34]]: {
    botPrompt: "Which word can be used to refer to a chair or a table?",
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['He', 'She', "It","They"]),
    answers: [
      {
        answer: 'He',
        nextId: 'inmyHeShecorrectq33',
      },
      {
        answer: 'She',
        nextId: 'inmyHeShecorrectq33',
      },
      {
        answer: 'It',
        nextId: 'myHeShecorrectq33',
      },
      {
        answer: 'They',
        nextId: 'inmyHeShecorrectq33',
      },
    ],
    },
  
    myHeShecorrectq35: {
    botPrompt: 'Hurray! <strong>It</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'wishToContinue45'
      },
    ],
    },
    inmyHeShecorrectq35: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"It"</strong>',
    answers: [
      {
        nextId: 'wishToContinue45'
      },
    ],
    },

  //endmyHeSheletter


  wishToContinue45: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day46',
      },
      {
        answer: 'No!',
        nextId: 'endConv',

      },
  ],
},


//day46
day46: {
  botPrompt: '<strong> Day 46 : </strong> Activity',
  answers: [
          { nextId: 'day46comment' },
  ],
  sumToBags: [{ name: 'd', points: 46 }],

},
day46comment: {
  botPrompt: 'Pages from the book',
  answers: [
          { nextId: 'wishtocontinue46' },
  ],
},

wishtocontinue46: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day47',
      },
      {
        answer: 'No!',
        nextId: 'endConv',

      },
  ],
},

day47: {
  botPrompt: '<strong> Day 47 : </strong> "there" and "their" is essential in kindergarten as it helps children express location and possession accurately in their early writing and communication.',
  answers: [
          { nextId: 'day471comment' },
  ],
},

day471comment: {
  botPrompt: 'TLM Video',
  answers: [
          { nextId: 'day472comment' },
  ],
},

day472comment: {
  botPrompt: 'Let’s look into the pages of the book',
  answers: [
          { nextId: 'day472link' },
  ],
},
day472link: {
  botPrompt: 'https://drive.google.com/file/d/1Y9KGC1PRO_g5CmDkydkAWYQeH2X7Xq3k/view?usp=sharing',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[0],
    },
  ],
},
//thierThere


["thierThere"+shuffledNumbersto[0]]: {
    botPrompt: '________ toys are on the shelf.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Their', 'There', "They're","Them"]),
    answers: [
      {
        answer: 'Their',
        nextId: 'thierTherecorrect',
      },
      {
        answer: 'There',
        nextId: 'inthierTherecorrect',
      },
      {
        answer: "They're",
        nextId: 'inthierTherecorrect',
      },
      {
        answer: "Them",
        nextId: 'inthierTherecorrect',
      },
    ],
  },
  thierTherecorrect: {
    botPrompt: 'Hurray <strong>Their</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[1],
      },
    ],
  },
  inthierTherecorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[1],
      },
    ],
  },
  
  ['thierThere'+shuffledNumbersto[1]]: {
    botPrompt: 'We saw a bird flying ________.',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Their', 'There', "They're","Them"]),
    answers: [
      {
        answer: 'Their',
        nextId: 'inthierTherecorrectq2',
      },
      {
        answer: 'There',
        nextId: 'thierTherecorrectq2',
      },
      {
        answer: "They're",
        nextId: 'inthierTherecorrectq2',
      },
      {
        answer: "Them",
        nextId: 'inthierTherecorrectq2',
      },
    ],
  },
  
  thierTherecorrectq2: {
    botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[2],
      },
    ],
  },
  inthierTherecorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['thierThere'+shuffledNumbersto[2]]: {
  botPrompt: 'My friends are sitting ________.',
  type: RTypes.TRANSFORMED_TEXT,
  

 
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq3',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq3',
    },
    {
      answer: "They're",
      nextId: 'thierTherecorrectq3',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq3',
    },
  ],
  },
  
  thierTherecorrectq3: {
  botPrompt: 'Hurray! <strong>"Theyre"</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[3],
    },
  ],
  },
  inthierTherecorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Theyre"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[3],
    },
  ],
  },
  
  //4
  ['thierThere'+shuffledNumbersto[3]]: {
  botPrompt: 'The children played ________ in the park.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq4',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq4',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq4',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq4',
    },
  ],
  },
  
  thierTherecorrectq4: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[4],
    },
  ],
  },
  inthierTherecorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['thierThere'+shuffledNumbersto[4]]: {
  botPrompt: '________ is a cat sitting on the wall.',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq5',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq5',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq5',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq5',
    },
  ],
  },
  
  thierTherecorrectq5: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[5],
    },
  ],
  },
  inthierTherecorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['thierThere'+shuffledNumbersto[5]]: {
  botPrompt: '________ are many flowers in the garden.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq6',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq6',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq6',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq6',
    },
  ],
  },
  
  thierTherecorrectq6: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[6],
    },
  ],
  },
  inthierTherecorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['thierThere'+shuffledNumbersto[6]]: {
  botPrompt: 'Look, ________ is a rainbow in the sky.',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq7',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq7',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq7',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq7',
    },
  ],
  },
  
  thierTherecorrectq7: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[7],
    },
  ],
  },
  inthierTherecorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['thierThere'+shuffledNumbersto[7]]: {
  botPrompt: 'The children went to ________ favourite park.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq8',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq8',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq8',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq8',
    },
  ],
  },
  
  thierTherecorrectq8: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[8],
    },
  ],
  },
  inthierTherecorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['thierThere'+shuffledNumbersto[8]]: {
  botPrompt: '________ is a dog chasing a ball.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq9',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq9',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq9',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq9',
    },
  ],
  },
  
  thierTherecorrectq9: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[9],
    },
  ],
  },
  inthierTherecorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['thierThere'+shuffledNumbersto[9]]: {
  botPrompt: 'The toys belong to ________ friends.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq10',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq10',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq10',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq10',
    },
  ],
  
  },
  
  thierTherecorrectq10: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[10],
    },
  ],
  },
  inthierTherecorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[10],
    },
  ],
  },
  
  //11
  ['thierThere'+shuffledNumbersto[10]]: {
  botPrompt: 'The children are playing with ________ toys.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq11',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq11',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq11',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq11',
    },
  ],
  },
  
  thierTherecorrectq11: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[11],
    },
  ],
  },
  inthierTherecorrectq11: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[11],
    },
  ],
  },
  
  //12
  ['thierThere'+shuffledNumbersto[11]]: {
  botPrompt: 'Look at ________ cute little kittens!',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq12',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq12',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq12',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq12',
    },
  ],
  },
  
  thierTherecorrectq12: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[12],
    },
  ],
  },
  inthierTherecorrectq12: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[12],
    },
  ],
  },
  
  //13
  ['thierThere'+shuffledNumbersto[12]]: {
  botPrompt: '________ are some birds in the tree.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq13',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq13',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq13',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq13',
    },
  ],
  },
  
  thierTherecorrectq13: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[13],
    },
  ],
  },
  inthierTherecorrectq13: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[13],
    },
  ],
  },
  
  //14
  ['thierThere'+shuffledNumbersto[13]]: {
  botPrompt: 'The kids went to ________ friends house.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq14',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq14',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq14',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq14',
    },
  ],
  },
  
  thierTherecorrectq14: {
  botPrompt: 'Hurray! <strong>Their</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[14],
    },
  ],
  },
  inthierTherecorrectq14: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[14],
    },
  ],
  },
  
  
  //15
  ['thierThere'+shuffledNumbersto[14]]: {
  botPrompt: '________ are cookies on the table.',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq15',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq15',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq15',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq15',
    },
  ],
  },

  thierTherecorrectq15: {
  botPrompt: 'Hurray! <strong>There</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[15],
    },
  ],
  },
  inthierTherecorrectq15: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[15],
    },
  ],
  },
  
  //16
  ['thierThere'+shuffledNumbersto[15]]: {
    botPrompt: 'The children saw ________ favourite movie.',
    type: RTypes.TRANSFORMED_TEXT,

    input: selectField(['Their', 'There', "They're","Them"]),
    answers: [
      {
        answer: 'Their',
        nextId: 'thierTherecorrectq16',
      },
      {
        answer: 'There',
        nextId: 'inthierTherecorrectq16',
      },
      {
        answer: "They're",
        nextId: 'inthierTherecorrectq16',
      },
      {
        answer: "Them",
        nextId: 'inthierTherecorrectq16',
      },
    ],
  },
  thierTherecorrectq16: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Their</strong> 😎',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[16],
      },
    ],
  },
  inthierTherecorrectq16: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
    answers: [
      {
        nextId: 'thierThere'+shuffledNumbersto[16],
      },
    ],
  },
  
  //17
  ['thierThere'+shuffledNumbersto[16]]: {
  botPrompt: '________ is a squirrel climbing the tree.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq17',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq17',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq17',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq17',
    },
  ],
  },
  thierTherecorrectq17: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>There</strong> 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[17],
    },
  ],
  },
  inthierTherecorrectq17: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[17],
    },
  ],
  },
  
  //18
  ['thierThere'+shuffledNumbersto[17]]: {
  botPrompt: 'The students brought ________ lunchboxes to school.  ',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq18',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq18',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq18',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq18',
    },
  ],
  },
  thierTherecorrectq18: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Their</strong> 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[18],
    },
  ],
  },
  inthierTherecorrectq18: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[18],
    },
  ],
  },
  
  //19
  ['thierThere'+shuffledNumbersto[18]]: {
  botPrompt: '________ are some flowers in the vase.',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'inthierTherecorrectq19',
    },
    {
      answer: 'There',
      nextId: 'thierTherecorrectq19',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq19',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq19',
    },
  ],
  },
  thierTherecorrectq19: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>There</strong> Answers! 😎',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[19],
    },
  ],
  },
  inthierTherecorrectq19: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"There"</strong>',
  answers: [
    {
      nextId: 'thierThere'+shuffledNumbersto[19],
    },
  ],
  },
  
  //20
  ['thierThere'+shuffledNumbersto[19]]: {
  botPrompt: 'The children played with ________ new toys.',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Their', 'There', "They're","Them"]),
  answers: [
    {
      answer: 'Their',
      nextId: 'thierTherecorrectq20',
    },
    {
      answer: 'There',
      nextId: 'inthierTherecorrectq20',
    },
    {
      answer: "They're",
      nextId: 'inthierTherecorrectq20',
    },
    {
      answer: "Them",
      nextId: 'inthierTherecorrectq20',
    },
  ],
  },
  thierTherecorrectq20: {
  botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Their</strong> 😎',
  answers: [
    {
      nextId: 'wishToContinue47'
    },
  ],
  },
  inthierTherecorrectq20: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Their"</strong>',
  answers: [
    {
      nextId: 'wishToContinue47'
    },
  ],
  },
  

  //endthierThereletter

  wishToContinue47: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day48',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
  
        },
    ],
  },


  day48: {
    botPrompt: '<strong> Day 48 : </strong> Classroom demo',
    answers: [
            { nextId: 'day482comment' },
    ],
  },
  
  
  
  day482comment: {
    botPrompt: 'Let’s look into the pages of the book',
    answers: [
            { nextId: 'day482link' },
    ],
  },
  day482link: {
    botPrompt: 'https://drive.google.com/file/d/1dVuNlxtFrb2dWif0Xh1mLU3nLuyD4JNJ/view?usp=sharing',
    type: RTypes.LINK,
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[0],
      },
    ],
  },
  //whWords
  
  
  ["whWords"+shuffledNumbersto[0]]: {
      botPrompt: '___ is used to ask questions about people?',
      type: RTypes.TRANSFORMED_TEXT,
      input: selectField(['Who', 'Where', "What","When"]),
      answers: [
        {
          answer: 'Who',
          nextId: 'whWordscorrect',
        },
        {
          answer: 'Where',
          nextId: 'inwhWordscorrect',
        },
        {
          answer: "What",
          nextId: 'inwhWordscorrect',
        },
        {
          answer: "When",
          nextId: 'inwhWordscorrect',
        },
      ],
    },
    whWordscorrect: {
      botPrompt: 'Hurray <strong>Who</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'whWords'+shuffledNumbersto[1],
        },
      ],
    },
    inwhWordscorrect: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who"</strong>',
      answers: [
        {
          nextId: 'whWords'+shuffledNumbersto[1],
        },
      ],
    },
    
    ['whWords'+shuffledNumbersto[1]]: {
      botPrompt: '____ is used to ask questions about things?',
      type: RTypes.TRANSFORMED_TEXT,
  
      input: selectField(['Who', 'What', "Where","When"]),
      answers: [
        {
          answer: 'Who',
          nextId: 'inwhWordscorrectq2',
        },
        {
          answer: 'What',
          nextId: 'whWordscorrectq2',
        },
        {
          answer: "Where",
          nextId: 'inwhWordscorrectq2',
        },
        {
          answer: "When",
          nextId: 'inwhWordscorrectq2',
        },
      ],
    },
  
    whWordscorrectq2: {
      botPrompt: 'Hurray! <strong>What</strong> is the correct answer  ! 😎',
      answers: [
        {
          nextId: 'whWords'+shuffledNumbersto[2],
        },
      ],
    },
    inwhWordscorrectq2: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What"</strong>',
      answers: [
        {
          nextId: 'whWords'+shuffledNumbersto[2],
        },
      ],
    },
    
    //3
    ['whWords'+shuffledNumbersto[2]]: {
    botPrompt: '_____is used to ask questions about locations?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Who', 'What', "Where","When"]),
    answers: [
      {
        answer: 'Who',
        nextId: 'inwhWordscorrectq3',
      },
      {
        answer: 'What',
        nextId: 'inwhWordscorrectq3',
      },
      {
        answer: "Where",
        nextId: 'whWordscorrectq3',
      },
      {
        answer: "When",
        nextId: 'inwhWordscorrectq3',
      },
    ],
    },
    
    whWordscorrectq3: {
    botPrompt: 'Hurray! <strong>"Where"</strong> is the correct answer ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[3],
      },
    ],
    },
    inwhWordscorrectq3: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[3],
      },
    ],
    },
  
    //4
    ['whWords'+shuffledNumbersto[3]]: {
    botPrompt: '____ is used to ask questions about time?',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Who', 'What', "Where","When"]),
    answers: [
      {
        answer: 'Who',
        nextId: 'inwhWordscorrectq4',
      },
      {
        answer: 'What',
        nextId: 'inwhWordscorrectq4',
      },
      {
        answer: "Where",
        nextId: 'inwhWordscorrectq4',
      },
      {
        answer: "When",
        nextId: 'whWordscorrectq4',
      },
    ],
    },
    
    whWordscorrectq4: {
    botPrompt: 'Hurray! <strong>When</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[4],
      },
    ],
    },
    inwhWordscorrectq4: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"When"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[4],
      },
    ],
    },
    
    //5
    ['whWords'+shuffledNumbersto[4]]: {
    botPrompt: '______ is used to ask questions about reasons?',
    type: RTypes.TRANSFORMED_TEXT,
    
    
    input: selectField(['Their', 'There', "They're","When"]),
    answers: [
      {
        answer: 'Their',
        nextId: 'inwhWordscorrectq5',
      },
      {
        answer: 'There',
        nextId: 'inwhWordscorrectq5',
      },
      {
        answer: "They're",
        nextId: 'inwhWordscorrectq5',
      },
      {
        answer: "When",
        nextId: 'whWordscorrectq5',
      },
    ],
    },
    
    whWordscorrectq5: {
    botPrompt: 'Hurray! <strong>When</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[5],
      },
    ],
    },
    inwhWordscorrectq5: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"When"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[5],
      },
    ],
    },
    
    //6
    ['whWords'+shuffledNumbersto[5]]: {
    botPrompt: 'The cat is sleeping.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Who is sleeping?', 'What is sleeping?', "Where is the cat?","How is the cat?"]),
    answers: [
      {
        answer: 'Who is sleeping?',
        nextId: 'whWordscorrectq6',
      },
      {
        answer: 'What is sleeping?',
        nextId: 'inwhWordscorrectq6',
      },
      {
        answer: "Where is the cat?",
        nextId: 'inwhWordscorrectq6',
      },
      {
        answer: "How is the cat?",
        nextId: 'inwhWordscorrectq6',
      },
    ],
    },
    
    whWordscorrectq6: {
    botPrompt: 'Hurray! <strong>Who is sleeping?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[6],
      },
    ],
    },
    inwhWordscorrectq6: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who is sleeping?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[6],
      },
    ],
    },
    
    //7
    ['whWords'+shuffledNumbersto[6]]: {
    botPrompt: 'I ate an apple.',
    type: RTypes.TRANSFORMED_TEXT,
    
    
    input: selectField(['Who ate an apple?', 'What did I eat?', "Where is the apple?","When did I eat?"]),
    answers: [
      {
        answer: 'Who ate an apple?',
        nextId: 'whWordscorrectq7',
      },
      {
        answer: 'What did I eat?',
        nextId: 'inwhWordscorrectq7',
      },
      {
        answer: "Where is the apple?",
        nextId: 'inwhWordscorrectq7',
      },
      {
        answer: "When did I eat?",
        nextId: 'inwhWordscorrectq7',
      },
    ],
    },
    
    whWordscorrectq7: {
    botPrompt: 'Hurray! <strong>Who ate an apple?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[7],
      },
    ],
    },
    inwhWordscorrectq7: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who ate an apple?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[7],
      },
    ],
    },
    
    
    //8
    ['whWords'+shuffledNumbersto[7]]: {
    botPrompt: 'The book is on the table.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['What is the book?', 'Where is the book?', "Who placed the book?","Why is the book there?"]),
    answers: [
      {
        answer: 'What is the book?',
        nextId: 'inwhWordscorrectq8',
      },
      {
        answer: 'Where is the book?',
        nextId: 'whWordscorrectq8',
      },
      {
        answer: "They're",
        nextId: 'inwhWordscorrectq8',
      },
      {
        answer: "Why is the book there?",
        nextId: 'inwhWordscorrectq8',
      },
    ],
    },
    
    whWordscorrectq8: {
    botPrompt: 'Hurray! <strong>Where is the book?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[8],
      },
    ],
    },
    inwhWordscorrectq8: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where is the book?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[8],
      },
    ],
    },
    
    //9
    ['whWords'+shuffledNumbersto[8]]: {
    botPrompt: 'We went to the park.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['When did we go?', 'Where did we go?', "What did we do at the park?","Why did we go?"]),
    answers: [
      {
        answer: 'When did we go?',
        nextId: 'inwhWordscorrectq9',
      },
      {
        answer: 'Where did we go?',
        nextId: 'whWordscorrectq9',
      },
      {
        answer: "What did we do at the park?",
        nextId: 'inwhWordscorrectq9',
      },
      {
        answer: "Why did we go?",
        nextId: 'inwhWordscorrectq9',
      },
    ],
    },
    
    whWordscorrectq9: {
    botPrompt: 'Hurray! <strong>Where did we go?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[9],
      },
    ],
    },
    inwhWordscorrectq9: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where did we go?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[9],
      },
    ],
    },
    
    
    //10
    ['whWords'+shuffledNumbersto[9]]: {
    botPrompt: 'It is raining outside.',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['What is happening?', 'When is raining?', "Where is it raining?","Who is raining?"]),
    answers: [
      {
        answer: 'What is happening?',
        nextId: 'inwhWordscorrectq10',
      },
      {
        answer: 'When is raining?',
        nextId: 'inwhWordscorrectq10',
      },
      {
        answer: "Where is it raining?",
        nextId: 'whWordscorrectq10',
      },
      {
        answer: "Who is raining?",
        nextId: 'inwhWordscorrectq10',
      },
    ],
    
    },
    
    whWordscorrectq10: {
    botPrompt: 'Hurray! <strong>Where is it raining?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[10],
      },
    ],
    },
    inwhWordscorrectq10: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where is it raining?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[10],
      },
    ],
    },
    
    //11
    ['whWords'+shuffledNumbersto[10]]: {
    botPrompt: 'The dog is barking.',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['Who is barking?', 'What is barking?', "Where is the dog?","How is the dog?"]),
    answers: [
      {
        answer: 'Who is barking?',
        nextId: 'whWordscorrectq11',
      },
      {
        answer: 'What is barking?',
        nextId: 'inwhWordscorrectq11',
      },
      {
        answer: "Where is the dog?",
        nextId: 'inwhWordscorrectq11',
      },
      {
        answer: "How is the dog?",
        nextId: 'inwhWordscorrectq11',
      },
    ],
    },
    
    whWordscorrectq11: {
    botPrompt: 'Hurray! <strong>Who is barking?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[11],
      },
    ],
    },
    inwhWordscorrectq11: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Who is barking?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[11],
      },
    ],
    },
    
    //12
    ['whWords'+shuffledNumbersto[11]]: {
    botPrompt: 'She is playing with a ball.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Who is playing?', 'What is she playing with?', "Where is the ball?","When did she start playing?"]),
    answers: [
      {
        answer: 'Who is playing?',
        nextId: 'inwhWordscorrectq12',
      },
      {
        answer: 'What is she playing with?',
        nextId: 'whWordscorrectq12',
      },
      {
        answer: "Where is the ball?",
        nextId: 'inwhWordscorrectq12',
      },
      {
        answer: "When did she start playing?",
        nextId: 'inwhWordscorrectq12',
      },
    ],
    },
    
    whWordscorrectq12: {
    botPrompt: 'Hurray! <strong>What is she playing with?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[12],
      },
    ],
    },
    inwhWordscorrectq12: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is she playing with?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[12],
      },
    ],
    },
    
    //13
    ['whWords'+shuffledNumbersto[12]]: {
    botPrompt: 'The car is red in color.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['What color is the car?', 'Why is the car red?', "Where is the car?","Who painted the car?"]),
    answers: [
      {
        answer: 'What color is the car?',
        nextId: 'whWordscorrectq13',
      },
      {
        answer: 'Why is the car red?',
        nextId: 'inwhWordscorrectq13',
      },
      {
        answer: "Where is the car?",
        nextId: 'inwhWordscorrectq13',
      },
      {
        answer: "Who painted the car?",
        nextId: 'inwhWordscorrectq13',
      },
    ],
    },
    
    whWordscorrectq13: {
    botPrompt: 'Hurray! <strong>What color is the car?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[13],
      },
    ],
    },
    inwhWordscorrectq13: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What color is the car?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[13],
      },
    ],
    },
    
    //14
    ['whWords'+shuffledNumbersto[13]]: {
    botPrompt: 'We are singing a song.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['Who is singing?', 'What are we doing?', "Where are we singing?","When did we start singing?"]),
    answers: [
      {
        answer: 'Who is singing?',
        nextId: 'inwhWordscorrectq14',
      },
      {
        answer: 'What are we doing?',
        nextId: 'whWordscorrectq14',
      },
      {
        answer: "Where are we singing?",
        nextId: 'inwhWordscorrectq14',
      },
      {
        answer: "When did we start singing?",
        nextId: 'inwhWordscorrectq14',
      },
    ],
    },
    
    whWordscorrectq14: {
    botPrompt: 'Hurray! <strong>What are we doing?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[14],
      },
    ],
    },
    inwhWordscorrectq14: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What are we doing?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[14],
      },
    ],
    },
    
    
    //15
    ['whWords'+shuffledNumbersto[14]]: {
    botPrompt: 'The sun is shining brightly.',
    type: RTypes.TRANSFORMED_TEXT,
    
    input: selectField(['What is shining?', 'Why is the sun shining?', "Where is the sun?","Where is the sun?"]),
    answers: [
      {
        answer: 'What is shining?',
        nextId: 'whWordscorrectq15',
      },
      {
        answer: 'Why is the sun shining?',
        nextId: 'inwhWordscorrectq15',
      },
      {
        answer: "Where is the sun?",
        nextId: 'inwhWordscorrectq15',
      },
      {
        answer: "Where is the sun?",
        nextId: 'inwhWordscorrectq15',
      },
    ],
    },
  
    whWordscorrectq15: {
    botPrompt: 'Hurray! <strong>What is shining?</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[15],
      },
    ],
    },
    inwhWordscorrectq15: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is shining?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[15],
      },
    ],
    },
    
    //16
    ['whWords'+shuffledNumbersto[15]]: {
      botPrompt: 'They are taking lunch.',
      type: RTypes.TRANSFORMED_TEXT,
  
      input: selectField(['Who is taking?', 'What are they taking?', "Where are they taking?","When did they start taking?"]),
      answers: [
        {
          answer: 'Who is taking?',
          nextId: 'inwhWordscorrectq16',
        },
        {
          answer: 'What are they taking?',
          nextId: 'whWordscorrectq16',
        },
        {
          answer: "Where are they taking?",
          nextId: 'inwhWordscorrectq16',
        },
        {
          answer: "When did they start taking?",
          nextId: 'inwhWordscorrectq16',
        },
      ],
    },
    whWordscorrectq16: {
      botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What are they taking?</strong> 😎',
      answers: [
        {
          nextId: 'whWords'+shuffledNumbersto[16],
        },
      ],
    },
    inwhWordscorrectq16: {
      botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What are they taking?"</strong>',
      answers: [
        {
          nextId: 'whWords'+shuffledNumbersto[16],
        },
      ],
    },
    
    //17
    ['whWords'+shuffledNumbersto[16]]: {
    botPrompt: 'The bird is flying in the sky.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Who is flying?', 'What is flying?', "Where is the bird?","How is the bird flying?"]),
    answers: [
      {
        answer: 'Who is flying?',
        nextId: 'inwhWordscorrectq17',
      },
      {
        answer: 'What is flying?',
        nextId: 'whWordscorrectq17',
      },
      {
        answer: "Where is the bird?",
        nextId: 'inwhWordscorrectq17',
      },
      {
        answer: "How is the bird flying?",
        nextId: 'inwhWordscorrectq17',
      },
    ],
    },
    whWordscorrectq17: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What is flying?</strong> 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[17],
      },
    ],
    },
    inwhWordscorrectq17: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is flying?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[17],
      },
    ],
    },
    
    //18
    ['whWords'+shuffledNumbersto[17]]: {
    botPrompt: 'I saw a butterfly in the garden. ',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Where I saw a butterfly?', 'What did I see in the garden?', "Where did I see the butterfly?","When did I see the butterfly?"]),
    answers: [
      {
        answer: 'Where I saw a butterfly?',
        nextId: 'inwhWordscorrectq18',
      },
      {
        answer: 'What did I see in the garden?',
        nextId: 'whWordscorrectq18',
      },
      {
        answer: "Where did I see the butterfly?",
        nextId: 'inwhWordscorrectq18',
      },
      {
        answer: "When did I see the butterfly?",
        nextId: 'inwhWordscorrectq18',
      },
    ],
    },
    whWordscorrectq18: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What did I see in the garden?</strong> 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[18],
      },
    ],
    },
    inwhWordscorrectq18: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What did I see in the garden?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[18],
      },
    ],
    },
    
    //19
    ['whWords'+shuffledNumbersto[18]]: {
    botPrompt: 'The train is moving on the tracks.',
    type: RTypes.TRANSFORMED_TEXT,
  
    input: selectField(['How is the train?', 'Why is the train moving?', "Where is the train moving?","Who is moving the train?"]),
    answers: [
      {
        answer: 'How is the train?',
        nextId: 'inwhWordscorrectq19',
      },
      {
        answer: 'Why is the train moving?',
        nextId: 'inwhWordscorrectq19',
      },
      {
        answer: "Where is the train moving?",
        nextId: 'whWordscorrectq19',
      },
      {
        answer: "Who is moving the train?",
        nextId: 'inwhWordscorrectq19',
      },
    ],
    },
    whWordscorrectq19: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>Where is the train moving?</strong> Answers! 😎',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[19],
      },
    ],
    },
    inwhWordscorrectq19: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Where is the train moving?"</strong>',
    answers: [
      {
        nextId: 'whWords'+shuffledNumbersto[19],
      },
    ],
    },
    
    //20
    ['whWords'+shuffledNumbersto[19]]: {
    botPrompt: 'She is wearing a blue dress.',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Who is the dress?', 'What is she wearing?', "Where is the dress?","When did she wear the dress?"]),
    answers: [
      {
        answer: 'Who is the dress?',
        nextId: 'inwhWordscorrectq20',
      },
      {
        answer: 'What is she wearing?',
        nextId: 'whWordscorrectq20',
      },
      {
        answer: "Where is the dress?",
        nextId: 'inwhWordscorrectq20',
      },
      {
        answer: "When did she wear the dress?",
        nextId: 'inwhWordscorrectq20',
      },
    ],
    },
    whWordscorrectq20: {
    botPrompt: 'You Have Selected correct Anwser 🎉! <strong>What is she wearing?</strong> 😎',
    answers: [
      {
        nextId: 'wishToContinue48'
      },
    ],
    },
    inwhWordscorrectq20: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"What is she wearing?"</strong>',
    answers: [
      {
        nextId: 'wishToContinue48'
      },
    ],
    },
    
   
    //endwhWordsletter


    wishToContinue48: {
  botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
  input: selectField(['Yes!', 'No!']),
  answers: [
      {
        answer: 'Yes!',
        nextId: 'day49',
      },
      {
        answer: 'No!',
        nextId: 'endConv',

      },
  ],
},

day49: {
  botPrompt: '<strong> Day 49 : </strong> Shapes play a crucial role in kindergarten as they lay the foundation for understanding the world around us',
  answers: [
          { nextId: 'day49link' },
  ],
},
day49link: {

  botPrompt: 'https://youtu.be/WzyELzv_CRQ',
  type: RTypes.LINK,
  answers: [
          { nextId: 'day49comment' },
  ],
},

day49comment: {
  botPrompt: 'Along with exercising children learn essential English vocabulary and action words which they will soon use in sentences.',
  answers: [
          { nextId: 'day49comment1' },
  ],
},
day49comment1: {
  botPrompt: 'https://drive.google.com/file/d/1q1KG4qtxXnB1oxP7bat-aqAa4q64HR-D/view?usp=share_link',
  type: RTypes.LINK,
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[0],
    },
  ],
},

//shapes


["shapes"+shuffledNumbersto[0]]: {
    botPrompt: 'Which shape has three sides?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'inshapescorrect',
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrect',
      },
      {
        answer: "Square",
        nextId: 'inshapescorrect',
      },
      {
        answer: "Triangle",
        nextId: 'shapescorrect',
      },
    ],
  },
  shapescorrect: {
    botPrompt: 'Hurray <strong>Triangle</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[1],
      },
    ],
  },
  inshapescorrect: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Triangle"</strong>',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[1],
      },
    ],
  },
  
  //2
  ['shapes'+shuffledNumbersto[1]]: {
    botPrompt: 'Which shape has four sides of equal length?',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'inshapescorrectq2',
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrectq2',
      },
      {
        answer: "Square",
        nextId: 'shapescorrectq2',
      },
      {
        answer: "Triangle",
        nextId: 'inshapescorrectq2',
      },
    ],
  },

  shapescorrectq2: {
    botPrompt: 'Hurray! <strong>Square</strong> is the correct answer  ! 😎',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[2],
      },
    ],
  },
  inshapescorrectq2: {
    botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Square"</strong>',
    answers: [
      {
        nextId: 'shapes'+shuffledNumbersto[2],
      },
    ],
  },
  
  //3
  ['shapes'+shuffledNumbersto[2]]: {
  botPrompt: 'Which shape is round with no lines?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
    answers: [
      {
        answer: 'Circle',
        nextId: 'shapescorrectq3',
      },
      {
        answer: 'Rectangle',
        nextId: 'inshapescorrectq3',
      },
      {
        answer: "Square",
        nextId: 'inshapescorrectq3',
      },
      {
        answer: "Triangle",
        nextId: 'inshapescorrectq3',
      },
    ],
  },

  shapescorrectq3: {
  botPrompt: 'Hurray! <strong>"Circle"</strong> is the correct answer ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[3],
    },
  ],
  },
  inshapescorrectq3: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[3],
    },
  ],
  },

  //4
  ['shapes'+shuffledNumbersto[3]]: {
  botPrompt: 'How many sides does a rectangle have? ',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['1', '2', "3","4"]),
  answers: [
    {
      answer: '1',
      nextId: 'inshapescorrectq4',
    },
    {
      answer: '2',
      nextId: 'inshapescorrectq4',
    },
    {
      answer: "3",
      nextId: 'inshapescorrectq4',
    },
    {
      answer: "4",
      nextId: 'shapescorrectq4',
    },
  ],
  },
  
  shapescorrectq4: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[4],
    },
  ],
  },
  inshapescorrectq4: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[4],
    },
  ],
  },
  
  //5
  ['shapes'+shuffledNumbersto[4]]: {
  botPrompt: 'How many corners does a triangle have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  
  input: selectField(['2', '3', "4","5"]),
  answers: [
    {
      answer: '2',
      nextId: 'inshapescorrectq5',
    },
    {
      answer: '3',
      nextId: 'shapescorrectq5',
    },
    {
      answer: "4",
      nextId: 'inshapescorrectq5',
    },
    {
      answer: "5",
      nextId: 'inshapescorrectq5',
    },
  ],
  },
  
  shapescorrectq5: {
  botPrompt: 'Hurray! <strong>3</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[5],
    },
  ],
  },
  inshapescorrectq5: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"3"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[5],
    },
  ],
  },
  
  //6
  ['shapes'+shuffledNumbersto[5]]: {
  botPrompt: 'Which shape has 3 sides?',
  type: RTypes.TRANSFORMED_TEXT,
  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq6',
    },
    {
      answer: "Triangle",
      nextId: 'shapescorrectq6',
    },
  ],
  },
  
  shapescorrectq6: {
  botPrompt: 'Hurray! <strong>Triangle</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[6],
    },
  ],
  },
  inshapescorrectq6: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Triangle"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[6],
    },
  ],
  },
  
  //7
  ['shapes'+shuffledNumbersto[6]]: {
  botPrompt: 'Which shape has straight sides and four corners?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'inshapescorrectq7',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq7',
    },
    {
      answer: "Square",
      nextId: 'shapescorrectq7',
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq7',
    },
  ],
  },

  shapescorrectq7: {
  botPrompt: 'Hurray! <strong>Square</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[7],
    },
  ],
  },
  inshapescorrectq7: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Square"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[7],
    },
  ],
  },
  
  
  //8
  ['shapes'+shuffledNumbersto[7]]: {
  botPrompt: 'Which shape has no sides or corners?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'shapescorrectq8',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq8',
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq8',
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq8',
    },
  ],
  },
  
  shapescorrectq8: {
  botPrompt: 'Hurray! <strong>Circle</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[8],
    },
  ],
  },
  inshapescorrectq8: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[8],
    },
  ],
  },
  
  //9
  ['shapes'+shuffledNumbersto[8]]: {
  botPrompt: 'How many corners does a square have?',
  type: RTypes.TRANSFORMED_TEXT,
  
  input: selectField(['4', '5', "6","7"]),
  answers: [
    {
      answer: '4',
      nextId: 'shapescorrectq9',
    },
    {
      answer: '5',
      nextId: 'inshapescorrectq9',
    },
    {
      answer: "6",
      nextId: 'inshapescorrectq9',
    },
    {
      answer: "7",
      nextId: 'inshapescorrectq9',
    },
  ],
  },
  
  shapescorrectq9: {
  botPrompt: 'Hurray! <strong>4</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[9],
    },
  ],
  },
  inshapescorrectq9: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"4"</strong>',
  answers: [
    {
      nextId: 'shapes'+shuffledNumbersto[9],
    },
  ],
  },
  
  
  //10
  ['shapes'+shuffledNumbersto[9]]: {
  botPrompt: 'What is the shape of a laddoo?',
  type: RTypes.TRANSFORMED_TEXT,

  input: selectField(['Circle', 'Rectangle', "Square","Triangle"]),
  answers: [
    {
      answer: 'Circle',
      nextId: 'shapescorrectq10',
    },
    {
      answer: 'Rectangle',
      nextId: 'inshapescorrectq10',
    },
    {
      answer: "Square",
      nextId: 'inshapescorrectq10',
    },
    {
      answer: "Triangle",
      nextId: 'inshapescorrectq10',
    },
  ],
  
  },
  
  shapescorrectq10: {
  botPrompt: 'Hurray! <strong>Circle</strong> is the correct answer  ! 😎',
  answers: [
    {
      nextId: 'wishToContinue49'
    },
  ],
  },
  inshapescorrectq10: {
  botPrompt: 'You have selected wrong Answer... 🤔 the <strong>right</strong> answer is <strong>"Circle"</strong>',
  answers: [
    {
      nextId: 'wishToContinue49'
    },
  ],
  },

  //endshapesletter
  wishToContinue49: {
    botPrompt: 'Your todays module is completed Do you wish to continue for next DAY Task ? ',
    input: selectField(['Yes!', 'No!']),
    answers: [
        {
          answer: 'Yes!',
          nextId: 'day50',
        },
        {
          answer: 'No!',
          nextId: 'endConv',
  
        },
    ],
  },
//day50
day50: {
  botPrompt: '<strong> Day 50 : </strong> Activity',
  answers: [
          { nextId: 'day50comment' },
  ],
  sumToBags: [{ name: 'd', points: 50 }],

},
day50comment: {
  botPrompt: 'Pages from the book ',
  answers: [
          { nextId: 'wishtocontinue50' },
  ],
},

wishtocontinue50: {
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

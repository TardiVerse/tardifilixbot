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
          nextId: 'intro1',
        },
      ],
    },
    intro1: {
        botPrompt: 'This course was designed by the <strong>EFA</strong> Curriculum Team  aimed at eradicating learning lapse in children.',
        answers: [
          {
            nextId: 'intro2',
          },
        ],
      },
      intro2: {
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
        input: selectField(['Yes! I Have ID', "No. I Don't Have ID", "Contact Filix School Now"]),
        answers: [
          {
            answer: 'Yes! I Have ID',
            nextId: 'idcollection',
          },
          {
            answer: "No. I Don't Have ID",
            nextId: 'hmkay',
          },
          {
            answer: "Contact Filix School Now",
            nextId: 'hmm',
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
            nextId: 'asYouCanSee',
          },
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
      asYouCanSee: {
        botPrompt: 'Hi,<strong>@varTFID</strong>, We would like to know more about you ?',
        type: RTypes.TRANSFORMED_TEXT,
        varTFID: 'userTFID',
        answers: [
                { nextId: 'emailcollection' },
        ],
      },
  
  };
  
  
  export default questions;
  
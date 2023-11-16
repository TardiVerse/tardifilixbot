/*
 *
 * BotContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectBotContainer from './selectors';
import { initConversation, estimateRecommendation, activateBot } from './actions';
import BotComponent from '../../components/BotComponent/';

export class BotContainer extends React.Component { // eslint-disable-line react/prefer-dataless-function
 
 
  constructor(props) {
    super(props);
    this.state = {
      botnameonfly: 'Tardipops Assessment',
      pathname: window.location.pathname,
      signupnotdone:true,
      dbid:"",
      stateconvlength:0,
      id: Date.now(),
    };
  }
  componentDidMount() {
    this.handleInitConversation();
  }

  componentDidUpdate(prevProps, prevState) {
    const dbid = localStorage.getItem('dbid');
    if (this.props.botContainer.displayRecommendation) {
      this.handleEstimateRecommendation(this.props.botContainer.bags);
    }
    if(this.props.botContainer.userPhone && this.state.signupnotdone )
    {

    this.signup();
      
        }
  


if(dbid !== null)
{

     if (this.props.botContainer.conversation.length !== prevProps.botContainer.conversation.length) {
      
      this.saveChatList();

     }
  
}

}



  handleActivateBot() {
    this.props.activateBot();
  }
  handleEstimateRecommendation(bags) {
    this.props.estimateRecommendation(bags);
  }
  handleInitConversation() {
    this.props.initConversation();
  }

//signup

 
signup = () => {


fetch(
    // `https://devapitardifilix-6bf804c0e6f9.herokuapp.com/chatbot/save/TF2601/hjgbjhg`,
    `https://api.filibot.org/auth/signUp`,
    {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        teaid:this.props.botContainer.companyName,
        name: this.props.botContainer.userName,
        sessId: this.state.id,
        mobile_no: this.props.botContainer.userPhone,
        email_id: this.props.botContainer.userEmail,
      }),
    }
  )
    .then((response) => response.json())
    .then((res) => {
      if (res.status === true) {
        this.setState({ signupnotdone: false,dbid:res.id });
        localStorage.setItem('dbid', res.id);
        console.log(res.status);
      } else {
        console.log('Failed');
      }
    });


};




//savechat






saveChatList = () => {
    const dbid = localStorage.getItem('dbid');
    let daycount=this.props.botContainer.bags.d;
    fetch(
      // `https://devapitardifilix-6bf804c0e6f9.herokuapp.com/chatbot/save/TF2601/hjgbjhg`,
      `https://api.filibot.org/chatbot/save/TF2601/${dbid}`,
      {
        method: 'POST',

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.props.botContainer.userName,
        teaid:this.props.botContainer.companyName,
          chatData: this.props.botContainer.conversation,
          sessId: this.state.id,
          number: this.props.botContainer.userPhone,
          email: this.props.botContainer.userEmail,
          abags:this.props.botContainer.bags
        }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.message === 'Sucess') {
          const dayadd= parseInt(daycount)+1;
          localStorage.setItem('dayc', "day"+dayadd);

          console.log('Success');
        } else {
          console.log('Failed');
        }
      });
  };
  render() {
    const data = this.props.botContainer;
    return (
      <div>
        <Helmet
          title="Tardipops Assessment"
          meta={[
            { name: 'description', content: 'Description of BotContainer' },
          ]}
        />
        <BotComponent
          name="Tardipops"
          conversation={data.conversation}
          active={data.active}
          expanded={data.expanded}
          activateBot={this.handleActivateBot.bind(this)}
          userName={data.userName}
          TFID={data.TFID}
          companyName={data.companyName}
          botThinking={data.botThinking}
        />

      </div>

    );

  }
}

BotContainer.propTypes = {
  botContainer: PropTypes.object.isRequired,
  activateBot: PropTypes.func.isRequired,
  estimateRecommendation: PropTypes.func.isRequired,
  initConversation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => createStructuredSelector({
  botContainer: makeSelectBotContainer(state),
});

function mapDispatchToProps(dispatch) {
  return {
    activateBot: () => dispatch(activateBot()),
    estimateRecommendation: (bags) => dispatch(estimateRecommendation(bags)),
    initConversation: () => dispatch(initConversation()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BotContainer);

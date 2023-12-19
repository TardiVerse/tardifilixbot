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
      botnameonfly: 'filibot Assessment',
      pathname: window.location.pathname,
      signupdone:false,
      dbid:"",
      stateconvlength:0,
      apiDataFetched: false,
      id: Date.now(),
    };
  }
  componentDidMount() {
    this.handleInitConversation();
    const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  if (token) {
    console.log('Token:', token);
    localStorage.setItem('ftoken', token);

    // You can then use this token as needed, for example, setting it in state or using it in a fetch request.
  }
  }

componentDidUpdate(prevProps, prevState) {
  const dbid = localStorage.getItem('dbid');
  const ftok = localStorage.getItem('ftoken');

  if (!this.state.signupdone && ftok && !this.state.apiDataFetched) {
    this.fetchMyApiData();
    this.setState({ apiDataFetched: true }); // Set the flag to true after calling the method
  }

  if (dbid !== null && this.props.botContainer.conversation.length !== prevState.conversation.length) {
    this.saveChatList();
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



  fetchMyApiData = async () => {
    const ftoken = localStorage.getItem('ftoken');
    if (!ftoken) {
      console.log('No ftoken found');
      return;
    }
  
    try {
      const response = await fetch('https://auth.filibot.in/api/validate-token?token=' + ftoken, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'no-cors'
      });
  
      const res = await response.json();
      if (res.status === true) {
        this.signup(res.user);
      } else {
        console.log('Failed to validate token');
      }
    } catch (error) {
      console.error('Error in fetchMyApiData:', error);
    }
  }


 
signup = (resUser) => {
 
        
        fetch(
        `https://api.filibot.org/auth/signUp`,
        {
          method: 'POST',
    
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tfid:resUser.userId,
            teaid:resUser._id,
            name: resUser.firstName +" " +res.user.lastName,
            sessId: resUser._id,
            mobile_no: resUser.mobileNumber,
            email_id: resUser.emailId,
            //here i need to put fetchmydata 
            
          }),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          if (res.status === true) {
            this.setState({ signupdone: true,dbid:res.id });
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
          title="FiliBot Assessment"
          meta={[
            { name: 'description', content: 'Description of BotContainer' },
          ]}
        />
        <BotComponent
          name="FiliBot"
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

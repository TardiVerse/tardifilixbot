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
      botnameonfly: 'fillibot',
      pathname: window.location.pathname,
      id: Date.now(),
    };
  }
  componentDidMount() {
    this.handleInitConversation();
  }

  componentDidUpdate() {
    if (this.props.botContainer.displayRecommendation) {
      this.handleEstimateRecommendation(this.props.botContainer.bags);
    }
    
    this.saveChatList();
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
saveChatList = () => {
    const urlsplit = this.state.pathname.split('/').slice(-1)[0];
    fetch(
      `https://opticalchatbot.thetopfluencer.com/api/v1/chatbot/save/${urlsplit}`,
      {
        method: 'POST',

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.props.botContainer.userName,
          chatData: this.props.botContainer.conversation,
          sessId: this.state.id,
          number: this.props.botContainer.userPhone,
          glassKind: this.props.botContainer.userGlassKind,
          glassType: this.props.botContainer.userGlassType,
          rimType: this.props.botContainer.userRimType,
          userGender: this.props.botContainer.userGender,
        }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.message === 'Sucess') {
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
          title="FiliBot"
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

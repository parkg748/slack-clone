import React from 'react';
import { Link } from 'react-router-dom';

class DirectMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clicked: false
        };
        this._onMouseDown = this._onMouseDown.bind(this);
    }

    _onMouseDown() {
      this.setState({ clicked: true });
    }

    render() {
        const { toggleMenu } = this.props;
        const { clicked } = this.state;

        return (
          <div className='contents-container'>
            <div style={{ backgroundColor: `${clicked ? '#008952' : ''}`, color: `${clicked ? 'white' : ''}` }} onMouseDown={() => this._onMouseDown()} onClick={() => toggleMenu('direct-messages')} className='contents-container-close-btn'>
              <i className="close-btn-icon fas fa-times"></i>
              <span>esc</span>
            </div>
            <div className='direct-messages'>
              <div className='browse-channels'>
                <h1>Direct Messages</h1>
              </div>
              <div className='start-conversation-container'>
                <input type='text' placeholder='Find or start a conversation' />
                <button>Go</button>
              </div>
              <div className='recent-conversations'>Recent conversations</div>
              <div className='channel-list-container'>
                <div className='unified-member'>
                  <img />
                  <div className='member-display-name'>
                    <span>parkg748</span>
                    <div className='member-display-name-online'></div>
                  </div>
                  <i className="unified-member-arrow fas fa-level-down-alt"></i>
                </div>
                <div className='unified-member'>
                  <img />
                  <div className='member-display-name'>
                    <span>slackbot</span>
                    <i className="unified-member-heart fas fa-heart"></i>
                    <p>slackbot</p>
                  </div>
                  <i className="unified-member-arrow fas fa-level-down-alt"></i>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default DirectMessages;

import React from 'react';
import firebase from '../firebase';
import { setUser, clearUser, setCurrentChannel } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesRef: firebase.database().ref('messages'),
      message: '',
      loading: false,
      channel: this.props.channel,
      user: this.props.user,
      messages: [],
      messagesLoading: true
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const { channel, user } = this.props;
    if (channel && user) {
      this.addListeners(channel.id);
    }
  }

  addListeners(channelId) {
    this.addMessageListener(channelId);
  }

  addMessageListener(channelId) {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on('child_added', snap => {
      loadedMessages.push(snap.val());
      this.setState({ messages: loadedMessages, messagesLoading: false });
    });
  }

  createMessage() {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.props.user.uid,
        name: this.props.user.displayName,
        avatar: this.props.user.photoURL
      },
      content: this.state.message
    };
    return message;
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  sendMessage(e) {
    const { message, messagesRef } = this.state;
    var code = e.keyCode || e.which;
    if (message && code === 13) {
      this.setState({ loading: true });
      messagesRef.child(this.props.channel.id).push().set(this.createMessage()).then(() => {
        this.setState({ loading: false, message: '' });
      }).catch(err => {
        this.setState({ loading: false });
      });
    }
  }

    render() {
      const { messagesRef, message } = this.state;
      debugger;
        return (
          <div className='channel-right-bottom'>
            <div className='virtual-list-sticky-container'>
              <div className='virtual-list-item'>
                <hr></hr>
                <div className='virtual-list-item-day'>Yesterday</div>
              </div>
              <div className='message-container'>
                <div className='message-avatar'>
                  <img />
                </div>
                <div className='message-content'>
                  <div className='message-content-header'>
                    <span>parkg748</span>
                    <a>8:10 PM</a>
                  </div>
                  <div className='message-body'>joined #testing.</div>
                </div>
              </div>
            </div>
            <div className='channel-footer'>
              <div className='msg-add-input'>+</div>
              <div className='msg-input'>
                <input onKeyPress={this.sendMessage} onChange={this.update('message')} type='text' placeholder='Message #testing' value={message}/>
                <div className='msg-input-emoji'>
                  <i className="msg-input-at fas fa-at"></i>
                  <i className="msg-input-smile far fa-smile"></i>
                  <div className='msg-input-smile-color'>
                    <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjkuOTM3NSIgeTE9IjYxMy4zMTI1IiB4Mj0iLTI5LjkzNzUiIHkyPSI2NDMuMzEyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxNiAwIDAgLTE2IDczNSAxMDMwOSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZCNTMzIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGMzMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNpcmNsZSBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0MCIvPgo8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzAiIHN0eWxlPSJmaWxsOiNDQzdCMjk7IiBkPSJNMjU2LDBDMTE0LjYwOCwwLDAsMTE0LjYwOCwwLDI1NnMxMTQuNjA4LDI1NS45ODQsMjU2LDI1NiAgYzE0MS4zOTIsMCwyNTUuOTg0LTExNC42MDgsMjU2LTI1NkM1MTEuOTg0LDExNC42MDgsMzk3LjM5MiwwLDI1NiwweiBNNDE0LjM4NCw0MTQuMzg0Yy00MC41NzYsNDAuNTYtOTYuNDgsNjUuNi0xNTguMzg0LDY1LjYxNiAgYy02MS45MDQtMC4wMTYtMTE3LjgwOC0yNS4wNTYtMTU4LjQtNjUuNjE2QzU3LjA0LDM3My44MDgsMzIsMzE3LjkwNCwzMiwyNTZTNTcuMDQsMTM4LjE5Miw5Ny42LDk3LjYgIEMxMzguMTkyLDU3LjA0LDE5NC4wOTYsMzIsMjU2LDMyczExNy44MDgsMjUuMDQsMTU4LjM4NCw2NS42YzQwLjU2LDQwLjU5Miw2NS42LDk2LjQ5Niw2NS42MTYsMTU4LjQgIEM0NzkuOTg0LDMxNy45MDQsNDU0Ljk0NCwzNzMuODA4LDQxNC4zODQsNDE0LjM4NHoiLz4KPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8xIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTExMy42MTYsMjcyYzguMDgsNzEuODA4LDY4LjQ0OCwxMjgsMTQyLjM4NCwxMjhzMTM0LjMwNC01Ni4xOTIsMTQyLjM4NC0xMjggIEgxMTMuNjE2eiIvPgo8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzIiIHN0eWxlPSJmaWxsOiM4MDU1NDA7IiBkPSJNOTcuNzEyLDI3My43OTJDMTA2LjY3MiwzNTMuNTIsMTczLjcyOCw0MTUuOTY4LDI1Niw0MTYgIGM4Mi4yNzItMC4wMzIsMTQ5LjMyOC02Mi40OCwxNTguMjg4LTE0Mi4yMDhMNDE2LjI3MiwyNTZIOTUuNzEyTDk3LjcxMiwyNzMuNzkyeiBNMzc4LjgsMjg4Yy0xNC4yNzIsNTUuMDU2LTYzLjQ4OCw5Ni4wMzItMTIyLjgsOTYgIGMtNTkuMzEyLDAuMDMyLTEwOC41MjgtNDAuOTQ0LTEyMi44LTk2SDM3OC44eiIvPgo8Zz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzgwNTU0MDsiIGN4PSIxNjAiIGN5PSIxNjAiIHI9IjMyIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM4MDU1NDA7IiBjeD0iMzUyIiBjeT0iMTYwIiByPSIzMiIvPgo8L2c+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTI5LjkzNzUiIHkxPSI2MTMuMzEyNSIgeDI9Ii0yOS45Mzc1IiB5Mj0iNjQzLjMxMjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTYgMCAwIC0xNiA3MzUgMTAzMDkpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQjUzMyIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRjMzIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8yXyk7IiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNDAiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjkuOTM4IiB5MT0iNjM0LjMxMjUiIHgyPSItMjkuOTM4IiB5Mj0iNjQyLjMxMjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTYgMCAwIC0xNiA3MzUgMTAzMDkpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZBRkJGQjtzdG9wLW9wYWNpdHk6MCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkFGQkZCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfM18pOyIgZD0iTTI1NiwzMmMtNjEuOTA0LDAtMTE3LjgwOCwyNy4zOTItMTU4LjQsNjcuOTUyQzgwLjgxNiwxMTYuNzM2LDY2Ljg5NiwxNDQsNTYuMDk2LDE2MGgzOTkuNzkyICBjLTEwLjgtMTYtMjQuNzItNDMuMjQ4LTQxLjUwNC02MC4wNDhDMzczLjgwOCw1OS4zOTIsMzE3LjkwNCwzMiwyNTYsMzJ6Ii8+CjxnPgoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8wXzFfIiBzdHlsZT0iZmlsbDojQ0M3QjI5OyIgZD0iTTI1NiwwQzExNC42MDgsMCwwLDExNC42MDgsMCwyNTZzMTE0LjYwOCwyNTUuOTg0LDI1NiwyNTYgICBjMTQxLjM5MiwwLDI1NS45ODQtMTE0LjYwOCwyNTYtMjU2QzUxMS45ODQsMTE0LjYwOCwzOTcuMzkyLDAsMjU2LDB6IE00MTQuMzg0LDQxNC4zODRjLTQwLjU3Niw0MC41Ni05Ni40OCw2NS42LTE1OC4zODQsNjUuNjE2ICAgYy02MS45MDQtMC4wMTYtMTE3LjgwOC0yNS4wNTYtMTU4LjQtNjUuNjE2QzU3LjA0LDM3My44MDgsMzIsMzE3LjkwNCwzMiwyNTZTNTcuMDQsMTM4LjE5Miw5Ny42LDk3LjYgICBDMTM4LjE5Miw1Ny4wNCwxOTQuMDk2LDMyLDI1NiwzMnMxMTcuODA4LDI1LjA0LDE1OC4zODQsNjUuNmM0MC41Niw0MC41OTIsNjUuNiw5Ni40OTYsNjUuNjE2LDE1OC40ICAgQzQ3OS45ODQsMzE3LjkwNCw0NTQuOTQ0LDM3My44MDgsNDE0LjM4NCw0MTQuMzg0eiIvPgo8L2c+CjxnPgoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8xXzFfIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTExMy42MTYsMjcyYzguMDgsNzEuODA4LDY4LjQ0OCwxMjgsMTQyLjM4NCwxMjggICBzMTM0LjMwNC01Ni4xOTIsMTQyLjM4NC0xMjhIMTEzLjYxNnoiLz4KPC9nPgo8Zz4KCTxwYXRoIGlkPSJTVkdDbGVhbmVySWRfMl8xXyIgc3R5bGU9ImZpbGw6IzgwNTU0MDsiIGQ9Ik05Ny43MTIsMjczLjc5MkMxMDYuNjcyLDM1My41MiwxNzMuNzI4LDQxNS45NjgsMjU2LDQxNiAgIGM4Mi4yNzItMC4wMzIsMTQ5LjMyOC02Mi40OCwxNTguMjg4LTE0Mi4yMDhMNDE2LjI3MiwyNTZIOTUuNzEyTDk3LjcxMiwyNzMuNzkyeiBNMzc4LjgsMjg4ICAgYy0xNC4yNzIsNTUuMDU2LTYzLjQ4OCw5Ni4wMzItMTIyLjgsOTZjLTU5LjMxMiwwLjAzMi0xMDguNTI4LTQwLjk0NC0xMjIuOC05NkgzNzguOHoiLz4KPC9nPgo8Zz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzgwNTU0MDsiIGN4PSIxNjAiIGN5PSIxNjAiIHI9IjMyIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM4MDU1NDA7IiBjeD0iMzUyIiBjeT0iMTYwIiByPSIzMiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.currentUser,
        channel: state.channel.currentChannel
    }
}

export default withRouter(connect(mapStateToProps, { setUser, clearUser, setCurrentChannel })(Messages));

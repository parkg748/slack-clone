import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';
import './App.css';
import CreateChannelName from './CreateChannelName';

class CreateTeamName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: this.props.email,
        name: '',
        channelValid: false,
        channelsRef: firebase.database().ref('channels')
    };
  }

  update(field) {
    return (e) => {
        this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
      e.preventDefault();
      if (this.isFormValid(this.state)) {
        this.addChannel();
      }
  }

  addChannel() {
    const { email, channelsRef, name } = this.state;
    const key = channelsRef.push().key;
    const newChannel = {
        id: key,
        name,
        createdBy: {
            name: this.props.email
        }
    }
    channelsRef.child(key).update(newChannel);
    this.setState({ channelValid: true });
  }

  isFormValid = ({ name }) => name;


  render() {
    const { name, email, channelValid } = this.state;
    if (channelValid) {
        return <CreateChannelName name={name} email={email}/>;
    }
    return (
      <div className='team-name'>
        <div className='get-started-header'>
            <img src={require('../app/assets/images/download.png')}/>
            <span onClick={() => this.props.history.push('/')}>devchat</span>
        </div>
        <div className='team-name-body'>
            <div className='teamname-left-sidebar'>
                <div className='teamname-left-sidebar-body'>
                    <h1>What’s the name of your company or team?</h1>
                    <input onChange={this.update('name')} type='text' placeholder='Ex. Acme or Acme Marketing' value={name}/>
                    <button onClick={(e) => this.handleSubmit(e)}>Next</button>
                </div>
            </div>
            <div className='teamname-right-sidebar'>
                <div className='teamname-template'>
                    <div className='teamname-template-left'>
                        <div className='teamname-template-left-first-line'></div>
                        <div className='teamname-template-left-second-line'></div>
                        <span className='teamname-template-first-hash'>#</span><div className='teamname-template-left-third-line'></div>
                        <span className='teamname-template-second-hash'>#</span><div className='teamname-template-left-fourth-line'></div>
                        <span className='teamname-template-third-hash'>#</span><div className='teamname-template-left-fifth-line'></div>
                        <div className='teamname-template-left-sixth-line'></div>
                        <div className='bullet-first'></div><div className='teamname-template-left-seventh-line'></div>
                        <div className='bullet-second'></div><div className='teamname-template-left-eighth-line'></div>
                        <div className='bullet-third'></div><div className='teamname-template-left-ninth-line'></div>
                    </div>
                    <div className='teamname-template-right'>
                        <div className='teamname-template-right-first-line'></div>
                        <div className='teamname-template-right-second-line'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CreateTeamName;

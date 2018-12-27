import React, { Component } from 'react';
import '../App.css';
import CreateChannelName from './CreateChannelName';

class CreateTeamName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: this.props.email,
        name: '',
        channelValid: false,
        button: '#e8e8e8',
        font: 'rgba(44,45,48,.75)'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
        this.setState({ [field]: e.target.value, button: '#008952', font: 'white' });
    }
  }

  handleSubmit(e) {
      e.preventDefault();
      if (this.isFormValid(this.state)) {
        this.setState({ channelValid: true });
      }
  }

  isFormValid = ({ name }) => name;


  render() {
    const { name, email, channelValid, button, font } = this.state;
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
                    <button style={{ color: `${font}`, backgroundColor: `${button}` }} onClick={(e) => this.handleSubmit(e)}>Next</button>
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

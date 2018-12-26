import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import CreateTeamName from './CreateTeamName';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        emailValid: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
      return (e) => {
          this.setState({ [field]: e.target.value });
      }
  }

  handleSubmit(e) {
      const { email, emailValid } = this.state;
      e.preventDefault();
      if (email != '') {
        this.setState({ emailValid: true });
      }
  }

  render() {
    const { email, emailValid } = this.state;
    if (emailValid) return <CreateTeamName email={email} />;
    return (
        <div className='create-workspace'>
        <div className='create-left-sidebar'>
            <div className='create-left-header'>
                <img src={require('../app/assets/images/download.png')}/>
                <span onClick={() => this.props.history.push('/')}>devchat</span>
            </div>
            <div className='create-left-sidebar-body'>
                <h1>Create a new workspace</h1>
                <p>Your <strong>email address</strong></p>
                <input onChange={this.update('email')} type='email' placeholder='you@example.com' value={email}/>
            </div>
            <div className='create-left-sidebar-submit'>
                <button onClick={(e) => this.handleSubmit(e)}>Next <i className="create-continue-arrow fas fa-arrow-right"></i></button>
            </div>
        </div>
        <div className='create-right-sidebar'>
            <div className='create-right-sidebar-header'>
                <span>Looking to join an existing workspace?</span>
                <button onClick={() => this.props.history.push('/get-started')}>Find your workspace.</button>
            </div>
            <div className='create-right-sidebar-image'></div>
        </div>
      </div>
    );
  }
}

export default Create;

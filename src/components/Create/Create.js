import React, { Component } from 'react';
import '../App.css';
import CreateTeamName from './CreateTeamName';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        emailValid: false,
        button: 'white',
        border: '1px solid #919193',
        errorInvalid: false,
        errorFillIn: false,
        nextButton: '#e8e8e8',
        nextFont: 'rgba(44,45,48,.75)',
        nextWidth: 130,
        loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInputStyle = this.changeInputStyle.bind(this);
  }

  update(field) {
      const { email } = this.state;
      return (e) => {
          this.setState({ [field]: e.target.value, button: 'white', border: '1px solid #919193', errorFillIn: false, errorInvalid: false });
          if (email.includes('@')) {
              this.setState({ nextButton: '#008952', nextFont: 'white' });
          }
      }
  }

  handleSubmit(e) {
      const { email } = this.state;
      e.preventDefault();
      if (email != '' && email.includes('@')) {
        this.setState({ loading: true, nextWidth: 160, nextButton: '#e8e8e8', nextFont: 'rgba(44,45,48,.75)', emailValid: true });
      } else if (email != '' && !email.includes('@')) {
        this.setState({ button: '#fff1e1', border: '1px solid #ffa940', errorInvalid: true, errorFillIn: false });
      } else if (email === '') {
        this.setState({ button: '#fff1e1', border: '1px solid #ffa940', errorFillIn: true, errorInvalid: false });
      }
  }

  changeInputStyle() {
      if (this.state.errorInvalid) {
          this.setState({ border: 'none' });
      }
  }

  render() {
    const { email, emailValid, button, border, errorInvalid, errorFillIn, nextButton, nextFont, loading, nextWidth } = this.state;
    if (emailValid) return <CreateTeamName email={email} />;
    return (
        <div className='create-workspace'>
        <div className='create-left-sidebar'>
            <div className='create-left-header'>
                <img src={require('../../app/assets/images/download.png')}/>
                <span onClick={() => this.props.history.push('/')}>devchat</span>
            </div>
            <div className='create-left-sidebar-body'>
                <h1>Create a new workspace</h1>
                <p>Your <strong>email address</strong></p>
                <input onClick={() => this.changeInputStyle()} style={{ backgroundColor: `${button}`, border: `${border}` }} onChange={this.update('email')} type='email' placeholder='you@example.com' value={email}/>
                {errorInvalid ? <p className='orange-text'>Sorry, but that email is invalid.</p> : ''}
                {errorFillIn ? <p className='orange-text'>Please fill in your email.</p> : ''}
            </div>
            <div className='create-left-sidebar-submit'>
                <button style={{ width: `${nextWidth}px`, color: `${nextFont}`, backgroundColor: `${nextButton}` }} onClick={(e) => this.handleSubmit(e)}>
                    Next 
                    <i className="create-continue-arrow fas fa-arrow-right"></i>
                    {loading ? <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : ''}
                </button>
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

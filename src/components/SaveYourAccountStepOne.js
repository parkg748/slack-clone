import React from 'react';
import { Link } from 'react-router-dom';
import SaveYourAccountStepTwo from './SaveYourAccountStepTwo';

class SaveYourAccountStepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: false,
          name: '',
          stepTwo: false,
          passwordError: false,
          password: '',
          background: '#e8e8e8',
          color: 'rgba(44,45,48,.75)'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    update(field) {
      return (e) => {
        if (field === 'name') {
          if (this.isNameValid(e.target.value) && this.isPasswordValid(this.state.password)) {
            this.setState({ [field]: e.target.value, error: false, background: '#008952', color: 'white' });
          } else {
            this.setState({ [field]: e.target.value, error: false, background: '#e8e8e8', color: 'rgba(44,45,48,.75)' });
          }
        } else if (field === 'password') {
          if (this.isNameValid(this.state.name) && this.isPasswordValid(e.target.value)) {
            this.setState({ [field]: e.target.value, passwordError: false, background: '#008952', color: 'white' });
          } else {
            this.setState({ [field]: e.target.value, passwordError: false, background: '#e8e8e8', color: 'rgba(44,45,48,.75)' });
          }
        }
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.isNameValid(this.state.name) && this.isPasswordValid(this.state.password)) {
        this.setState({ error: false, passwordError: false, stepTwo: true });
      } else if (this.isNameValid(this.state.name)) {
        this.setState({ error: false, passwordError: true });
      } else if (this.isPasswordValid(this.state.password)) {
        this.setState({ error: true, passwordError: false });
      } else {
        this.setState({ error: true, passwordError: true });
      }
    }

    goBack() {
      this.setState({ stepTwo: false });
    }

    isNameValid(name) {
      return name.length > 0;
    }

    isPasswordValid(password) {
      return /^\w+$/.test(password) && password.length > 5;
    }

    render() {
        const { toggleMenu } = this.props;
        const { error, name, passwordError, password, background, color, stepTwo } = this.state;
        if (stepTwo) return <SaveYourAccountStepTwo toggleMenu={toggleMenu} goBack={() => this.goBack()}/>;

        return (
          <div className='modal-overlay'>
            <div className='modal-content'>
              <div>
                <div className='onboarding-dialog-header'>
                  <h3>Set your name and password</h3>
                  <i onClick={() => toggleMenu('save-account')} className="onboarding-dialog-header-times fas fa-times"></i>
                </div>
                <img src={require('../app/assets/images/step_01@2x.png')}/>
                <div className='onboarding-step-fields'>
                  <div className='onboarding-step-fields-container'>
                  <p>Your full name</p>
                  {error ? <div>
                      <input className='red-border' onChange={this.update('name')} type='text' value={name}/>
                      <div className='error-onboarding'>
                          <i className="red-border-icon fas fa-exclamation-triangle"></i>
                          <span>Unfortunately, you can’t leave this blank.</span>
                      </div>
                  </div> : <input type='text' onChange={this.update('name')}/>}
                  <div className='full-name-disclaimer'>Your name will be displayed with messages you send.</div>
                </div>
                <div className='onboarding-step-fields-container'>
                  <p>Your password</p>
                  {passwordError ? <div>
                      <input className='red-border' onChange={this.update('password')} type='password' value={password}/>
                      <div className='error-onboarding'>
                          <i className="red-border-icon fas fa-exclamation-triangle"></i>
                          <span>Your password must be at least 6 characters long.</span>
                      </div>
                  </div> : <input onChange={this.update('password')} type='password' minLength="8"/>}
                  <div className='full-name-disclaimer'>Passwords must be at least 6 characters long, and can’t be things like password, 123456, or abcdef.</div>
                </div>
                <div className='onboarding-step-fields-container'>
                  <input type='checkbox' />
                  <span>It’s okay to send me email with devchat tips, news, and offers.</span>
                </div>
              </div>
              </div>
              <div className='dialog-footer'>
                <span>Step 1 of 3</span>
                <button style={{ backgroundColor: `${background}`, color: `${color}` }} onClick={(e) => this.handleSubmit(e)}>Next</button>
              </div>
            </div>
          </div>
        );
    }
}

export default SaveYourAccountStepOne;

import React from 'react';
import { Link } from 'react-router-dom';

class SaveYourAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: false,
          name: '',
          nameValid: false,
          passwordError: false,
          password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
      return (e) => {
        if (field === 'name') {
          this.setState({ [field]: e.target.value, error: false });
        } else if (field === 'password') {
          this.setState({ [field]: e.target.value, passwordError: false });
        }
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.isNameValid(this.state.name)) {
          this.setState({ nameValid: true });
      } else {
          this.setState({ error: true });
      }
      if (this.isPasswordValid(this.state.password)) {
        this.setState({ passwordError: true });
      } else {
        this.setState({ passwordError: false });
      }
    }

    isNameValid(name) {
      return name.length > 0;
    }

    isPasswordValid(password) {
      if (/^\w+$/.test(password) && password.length > 5) {
        return true;
      } else {
        return false;
      }
    }

    render() {
        const { toggleMenu } = this.props;
        const { error, name, passwordError, password } = this.state;

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
                  </div> : <input type='password' minLength="8"/>}
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
                <button onClick={(e) => this.handleSubmit(e)}>Next</button>
              </div>
            </div>
          </div>
        );
    }
}

export default SaveYourAccount;

import React from 'react';
import { Link } from 'react-router-dom';

class SaveYourAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { toggleMenu } = this.props;
        const {  } = this.state;

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
                  <input type='text'/>
                  <div className='full-name-disclaimer'>Your name will be displayed with messages you send.</div>
                </div>
                <div className='onboarding-step-fields-container'>
                  <p>Your password</p>
                  <input type='password' minlength="8"/>
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
                <button>Next</button>
              </div>
            </div>
          </div>
        );
    }
}

export default SaveYourAccount;

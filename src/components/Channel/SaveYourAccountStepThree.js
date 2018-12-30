import React from 'react';
import { Link } from 'react-router-dom';
import SaveYourAccountFinalStep from './SaveYourAccountFinalStep';

class SaveYourAccountStepThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          finalStep: false,
          error: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
      return (e) => {
        if (this.isFormValid(e.target.value)) {
          this.setState({ error: false, [field]: e.target.value });
        } else {
          this.setState({ error: true, [field]: e.target.value });
        }
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.isFormValid(this.state.email)) {
        this.setState({ finalStep: true, error: false });
      } else {
        this.setState({ error: true });
      }
    }

    isFormValid(email) {
      return email.includes('@');
    }

    render() {
        const { toggleMenu, goBack } = this.props;
        const { email, finalStep, error } = this.state;

        if (finalStep) return <SaveYourAccountFinalStep toggleMenu={toggleMenu} />;

        return (
          <div className='modal-overlay'>
            <div className='modal-content'>
              <div>
                <div className='onboarding-dialog-header'>
                  <h3>Add people to your Slack workspace</h3>
                  <i onClick={() => toggleMenu('save-account')} className="onboarding-dialog-header-times fas fa-times"></i>
                </div>
                <img src={require('../../app/assets/images/step_03@2x.png')}/>
                <div className='onboarding-step-fields'>
                  <div className='onboarding-step-fields-container'>
                  <p>Email addresses</p>
                  {error ? <div className='invalid-email'>
                    <textarea className='red-border' value={email} onChange={this.update('email')}></textarea>
                    <div className='error-onboarding'>
                        <i className="red-border-icon fas fa-exclamation-triangle"></i>
                        <span>It looks like that email address isn’t valid. Try again?</span>
                    </div>
                    </div> : <textarea value={email} onChange={this.update('email')}></textarea>}
                  {error ? '' : <div className='full-name-disclaimer'>We’ll send invitations to join hellofewhif on devchat. New members will be added to <strong>#testing</strong>, plus your starter channels, <strong>#general</strong> and <strong>#random</strong>.</div>}
                </div>
                <div className='step-three-fields-container'>
                  <input type='checkbox' />
                  <span>Let other people sign up with their verified <strong>@newschool.edu</strong> email address.</span>
                </div>
              </div>
              </div>
              <div className='dialog-footer'>
                <span>Step 3 of 3</span>
                <div className='step-two-footer'>
                  <button className='go-back' onClick={goBack}>Back</button>
                  <button onClick={(e) => this.handleSubmit(e)} className='go-forward' style={{ backgroundColor: `#008952`, color: `white`, cursor: `pointer` }}>Finish</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default SaveYourAccountStepThree;

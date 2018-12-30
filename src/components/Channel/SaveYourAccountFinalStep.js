import React from 'react';
import { Link } from 'react-router-dom';

class SaveYourAccountFinalStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.toggleMenu;
    }

    render() {
        const { toggleMenu } = this.props;

        return (
          <div className='modal-overlay'>
            <div className='modal-content'>
              <div>
                <div className='onboarding-dialog-header'>
                  <h3></h3>
                  <i onClick={() => toggleMenu('save-account')} className="onboarding-dialog-header-times fas fa-times"></i>
                </div>
                <div className='final-step'>
                  <img src={require('../app/assets/images/step_04@2x.png')}/>
                </div>
                <div className='onboarding-step-fields'>
                  <h2>Your devchat workspace is all set</h2>
                  <span>We’ve added a few basic channels for your team — go ahead and poke around! Or <strong>try sending yourself a direct message</strong> to test things out.</span>
                </div>
              </div>
              <div className='final-step-footer'>
                <div className='step-two-footer'>
                  <button onClick={() => toggleMenu('save-account')} className='go-forward' style={{ backgroundColor: `#008952`, color: `white`, cursor: `pointer` }}>Explore Slack</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default SaveYourAccountFinalStep;

import React from 'react';
import { Link } from 'react-router-dom';

class SaveYourAccountStepThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          url: '',
          cursor: 'initial',
          stepThree: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    update(field) {
      return (e) => {
        if ((field === 'name' || field === 'url') && this.isFormValid(e.target.value, this.state.url)) {
          this.setState({ [field]: e.target.value, cursor: 'pointer' });
        } else {
          this.setState({ [field]: e.target.value, cursor: 'initial' });
        }
      }
    }

    goBack() {
      this.setState({ stepThree: false });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.isFormValid(this.state.name, this.state.url)) {
        this.setState({ stepThree: true });
      }
    }

    isFormValid(name, url) {
      return /^\w+$/.test(url) && name;
    }

    render() {
        const { toggleMenu, goBack } = this.props;
        const { name, url, cursor, stepThree } = this.state;

        if (stepThree) return <SaveYourAccountStepThree goBack={() => this.goBack()}/>

        return (
          <div className='modal-overlay'>
            <div className='modal-content'>
              <div>
                <div className='onboarding-dialog-header'>
                  <h3>Review your team's details</h3>
                  <i onClick={() => toggleMenu('save-account')} className="onboarding-dialog-header-times fas fa-times"></i>
                </div>
                <img src={require('../app/assets/images/step_02@2x.png')}/>
                <div className='onboarding-step-fields'>
                  <div className='onboarding-step-fields-container'>
                  <p>devchat workspace name</p>
                  <input type='text' onChange={this.update('name')} type='text' value={name}/>
                  <div className='full-name-disclaimer'>Most teams use the name of their company or organization.</div>
                </div>
                <div className='onboarding-step-fields-container'>
                  <p>devchat URL</p>
                  <input onChange={this.update('url')} type='text' value={`${url} devchatcom`}/>
                  <div className='full-name-disclaimer'>You’ll use this URL to sign in to Slack. Letters, numbers, and hyphens only.</div>
                </div>
              </div>
              </div>
              <div className='dialog-footer'>
                <span>Step 2 of 3</span>
                <div className='step-two-footer'>
                  <button className='go-back' onClick={goBack}>Back</button>
                  {cursor === 'initial' ? <button className='go-forward' style={{ backgroundColor: `#e8e8e8`, color: `rgba(44,45,48,.75)`, cursor: `initial` }}>Next</button> :
                  <button onClick={(e) => this.handleSubmit(e)} className='go-forward' style={{ backgroundColor: `#008952`, color: `white`, cursor: `pointer` }}>Next</button>}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default SaveYourAccountStepThree;

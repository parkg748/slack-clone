import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class CreateConfirmEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
          <div className='get-started-header'>
            <img src={require('../app/assets/images/download.png')}/>
            <span>devchat</span>
          </div>
          <div className='get-started-body'>
            <div className='create-confirm-email-body'>
                <div className='get-started-body-inner-inner'>
                    <div className='create-confirm-email'>
                        <div className='create-confirm-email-inner'>
                            <h1>Check your email!</h1>
                            <p>We've sent a 6-digit confirmation code to <strong>parkg748@newschool.edu</strong>. It will expire shortly, so enter it soon.</p>
                            <div className='create-confirm-email-inner-input'>
                                <div className='create-confirm-email-inner-input-left'>
                                    <input className='left-left' type='text' maxLength={1}/>
                                    <input className='left-middle' type='text' maxLength={1}/>
                                    <input className='left-right' type='text' maxLength={1}/>
                                </div>
                                <div className='create-confirm-email-inner-input-divider'>-</div>
                                <div className='create-confirm-email-inner-input-right'>
                                    <input className='left-left' type='text' maxLength={1}/>
                                    <input className='left-middle' type='text' maxLength={1}/>
                                    <input className='left-right' type='text' maxLength={1}/>
                                </div>
                            </div>
                            <div className='create-confirm-email-inner-input-image'></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default CreateConfirmEmail;

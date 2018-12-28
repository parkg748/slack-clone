import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class GetStartedFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checkemail: false
    };
  }

  renderCheckEmail() {
      this.setState({ checkemail: true });
  }

  render() {
    const { checkemail } = this.state;

    return (
      <div>
          {checkemail ? (
        <div>
            <div className='get-started-header'>
                <img src={require('../../app/assets/images/download.png')}/>
                <span onClick={() => this.props.history.push('/')}>devchat</span>
            </div>
            <div className='get-started-body'>
                <div className='get-started-body-inner'>
                    <div className='get-started-body-inner-inner'>
                        <div className='get-started-body-inner-inner-inner'>
                            <div className='get-started-find-body-inner-inner-inner'>
                                <h1>Check your email!</h1>
                                <p>We've emailed a special link to <strong>parkg748@newschool.edu</strong>. Click the link to confirm your address and get started.</p>
                                <p>Wrong email? Please <Link to='/'>re-enter your address</Link>.</p>
                                <div className='get-started-find-email-inner-inner-image'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          ) : (
        <div>
            <div className='get-started-header'>
                <img src={require('../../app/assets/images/download.png')}/>
                <span onClick={() => this.props.history.push('/')}>devchat</span>
            </div>
            <div className='get-started-body'>
                <div className='get-started-body-inner'>
                    <div className='get-started-body-inner-inner'>
                        <div className='get-started-body-inner-inner-inner'>
                            <div className='get-started-find-body-inner-inner-inner'>
                                <h1>Find your devchat workspace</h1>
                                <p>We’ll send you an email to confirm your address and find existing workspaces you’ve joined or can join.</p>
                                <div className='get-started-create-body-inner-inner-input'>
                                    <input type='email' placeholder='name@example.com'/>
                                    <button onClick={() => this.renderCheckEmail()}>Confirm</button>
                                </div>
                                <div className='get-started-find-body-inner-inner-image'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
      </div>
    );
  }
}

export default GetStartedFind;

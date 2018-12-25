import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div className='signin-header'>
            <div className='signin'>
                <img src={require('../app/assets/images/download.png')} />
                <div className='logo-name'>devchat</div>
                <div className='signin-right-header'>
                    <ul>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Support</li>
                        <li>Create a new workspace</li>
                        <li>Find your workspace</li>
                        <button>Sign In</button>
                    </ul>
                </div>
            </div>
        </div>
        <div className='signin-body'>
            <div className='signin-body-inner'>
                <div className='signin-body-inner-inner'>
                    <h1>Sign in to your workspace</h1>
                    <div className='signin-body-inner-input'>
                        <p>Enter your workspace’s <strong>devchat URL.</strong></p>
                        <div className='signin-body-inner-inner-input'>
                            <input type='text' placeholder='your-workspace-url'/>
                            <span>.devchat.com</span>
                        </div>
                        <button>Continue <i className="continue-arrow fas fa-arrow-right"></i></button>
                        <p className='find-workspace'>Don’t know your workspace URL? <Link to='/'>Find your workspace</Link></p>
                    </div>
                </div>
                <p>Need to get your group started on devchat? <Link to='/'>Create a new workspace</Link></p>
            </div>
        </div>
      </div>
    );
  }
}

export default Signin;

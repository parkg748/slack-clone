import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';
import './App.css';

class SigninTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        url: '',
        errors: false,
        button: '#008952',
        emailBorder: '1px solid #919193',
        passwordBorder: '1px solid #919193',
        emailBackgroundColor: 'white',
        passwordBackgroundColor: 'white',
        font: 'white',
        loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isFormValid = ({ email, password }) => email && password;

  handleSubmit(e) {
    e.preventDefault();
    if (this.isFormValid(this.state)) {
        this.setState({ errors: true, loading: true, button: '#e8e8e8', font: 'rgba(44,45,48,.75)' });
        firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signedInUser => {
                    console.log(signedInUser);
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ errors: false, loading: false, button: '#008952', font: 'white' });
                });
    } else {
        if (this.state.email === '') {
            this.setState({ loading: false, emailBorder: '1px solid #d72b3f', emailBackgroundColor: '#fbeaec' });
        } else {
            this.setState({ loading: false, passwordBorder: '1px solid #d72b3f', passwordBackgroundColor: '#fbeaec' });
        }
    }
}

  update(field) {
      return (e) => {
          this.setState({[field]: e.target.value});
      }
  }

  render() {
    const { email, password, url, button, font, loading, errors, emailBorder, emailBackgroundColor, passwordBorder, passwordBackgroundColor } = this.state;

    return (
      <div>
        <div className='signin-header'>
            <div className='signin'>
                <img src={require('../app/assets/images/download.png')} />
                <div className='logo-name' onClick={() => this.props.history.push('/')}>devchat</div>
                <div className='signin-right-header'>
                    <ul>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Support</li>
                        <li onClick={() => this.props.history.push('/create')}>Create a new workspace</li>
                        <li onClick={() => this.props.history.push('/get-started')}>Find your workspace</li>
                        <button onClick={() => this.props.history.push('/signin')}>Sign In</button>
                    </ul>
                </div>
            </div>
        </div>
        <div className='signin-body'>
            <div className='next-signin-body-inner'>
                {errors ? (<div className='next-signin-body-error'>
                    <div className='next-signin-body-error-inner'>
                        <i className="fas fa-exclamation-triangle"></i>
                        <span> Sorry, you entered an incorrect email address or password.</span>
                    </div>
                </div>) : ''}
                <div className='next-signin-body-inner-inner'>
                    <h1>Sign in to JumpStart</h1>
                    <p>aa-jumpstart.slack.com</p>
                    <div className='next-signin-body-inner-inner-inner'>
                        <p>Enter your <strong className='margin-right'>email address</strong> and <strong>password</strong>.</p>
                        <input style={{ border: `${emailBorder}`, backgroundColor: `${emailBackgroundColor}` }} onChange={this.update('email')} type='email' value={email} placeholder='you@example.com'/>
                        <input style={{ border: `${passwordBorder}`, backgroundColor: `${passwordBackgroundColor}` }} onChange={this.update('password')} type='password' value={password} placeholder='password'/>
                        <button style={{ backgroundColor: `${button}`, color: `${font}` }} onClick={(e) => this.handleSubmit(e)}>Sign in
                            {loading ? <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : ''}
                        </button>
                        <div className='next-signin-remember-me'>
                            <input type='checkbox' />
                            <span>Remember me</span>
                        </div>
                        <div className='next-signin-forgot-password'>
                            <Link to='/'>Forgot password? </Link> · <Link to='/'> Forgot which email you used?</Link>
                        </div>
                    </div>
                </div>
                <p className='next-signin-body-inner-disclaimer'>
                    <span><strong>Don't have an account on this workspace yet?</strong></span>
                    <span>Contact the workspace administrator for an invitation</span>
                </p>
                <p className='next-signin-body-inner-disclaimer'>Trying to create a workspace? <Link to='/'>Create a new workspace</Link></p>
            </div>
        </div>
        <div className='signin-footer'>
            <div className='signin-footer-inner'>
                <div className='signin-footer-inner-column-left'>
                    <ul>
                        <div className='using-devchat'>USING DEVCHAT</div>
                        <li>Product</li>
                        <li>Enterprise</li>
                        <li>Pricing</li>
                        <li>Support</li>
                        <li>devchat Guides</li>
                        <li>App Directory</li>
                        <li>API</li>
                    </ul>
                </div>
                <div className='signin-footer-inner-column-middle'>
                    <ul>
                        <div className='devchat'>DEVCHAT <i className="fas fa-heart"></i></div>
                        <li>Jobs</li>
                        <li>Customers</li>
                        <li>Developers</li>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>devchat Shop</li>
                    </ul>
                </div>
                <div className='signin-footer-inner-column-middle'>
                    <ul>
                        <div className='legal'>LEGAL</div>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms of Service</li>
                        <li>Policies</li>
                    </ul>
                </div>
                <div className='signin-footer-inner-column-middle'>
                    <ul>
                        <div className='handy-links'>HANDY LINKS</div>
                        <li>Download desktop app</li>
                        <li>Download mobile app</li>
                        <li>Brand Guidelines</li>
                        <li>devchat at Work</li>
                        <li>Status</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='signin-footer-bottom'>
            <div className='signin-footer-bottom-inner'>
                <i className="fab fa-slack"></i>
                <ul>
                    <li className='contact-us'>Contact Us</li>
                    <li><i className="signin-footer-twitter fab fa-twitter"></i></li>
                    <li><i className="signin-footer-youtube fab fa-youtube"></i></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default SigninTemp;

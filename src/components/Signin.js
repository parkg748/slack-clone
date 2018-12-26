import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        url: '',
        button: '#008952',
        font: 'white',
        errors: false,
        loading: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // need function to check if url exist in database
    this.setState({ loading: true, button: '#e8e8e8', font: 'rgba(44,45,48,.75)' });
  }

  update(field) {
      return (e) => {
          this.setState({[field]: e.target.value});
      }
  }

  render() {
    const { url, button, font, loading, errors } = this.state;

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
            <div className='signin-body-inner'>
                {errors ? (<div className='next-signin-body-error'>
                    <div className='next-signin-body-error-inner'>
                        <i className="fas fa-exclamation-triangle"></i>
                        <span><strong>We couldn’t find your workspace.</strong> If you can’t remember your workspace’s address, we can <Link to='/'>send you a reminder</Link>.</span>
                    </div>
                </div>) : ''}
                <div className='signin-body-inner-inner'>
                    <h1>Sign in to your workspace</h1>
                    <div className='signin-body-inner-input'>
                        <p>Enter your workspace’s <strong>devchat URL.</strong></p>
                        <div className='signin-body-inner-inner-input'>
                            <input onChange={this.update('url')} type='text' placeholder='your-workspace-url' value={url}/>
                            <span>.devchat.com</span>
                        </div>
                        <button style={{ backgroundColor: `${button}`, color: `${font}` }} onClick={(e) => this.handleSubmit(e)}>
                            Continue 
                            <i className="continue-arrow fas fa-arrow-right"></i>
                            {loading ? <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : ''}
                        </button>
                        <p className='find-workspace'>Don’t know your workspace URL? <Link to='/get-started'>Find your workspace</Link></p>
                    </div>
                </div>
                <p>Need to get your group started on devchat? <Link to='/create'>Create a new workspace</Link></p>
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

export default Signin;

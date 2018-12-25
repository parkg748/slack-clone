import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class GetStartedCreate extends React.Component {
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
            <span onClick={() => this.props.history.push('/')}>devchat</span>
          </div>
          <div className='get-started-body'>
            <div className='get-started-body-inner'>
                <div className='get-started-body-inner-inner'>
                    <div className='get-started-body-inner-inner-inner'>
                        <div className='get-started-create-body-inner-inner-inner'>
                            <h1>Create a new workspace</h1>
                            <p>To make a workspace from scratch, please confirm your email address.</p>
                            <div className='get-started-create-body-inner-inner-input'>
                                <input type='email' placeholder='name@example.com'/>
                                <button>Confirm</button>
                            </div>
                            <div className='get-started-create-body-inner-inner-image'></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default GetStartedCreate;

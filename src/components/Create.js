import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className='create-workspace'>
        <div className='create-left-sidebar'>
            <div className='create-left-header'>
                <img src={require('../app/assets/images/download.png')}/>
                <span>devchat</span>
            </div>
            <div className='create-left-sidebar-body'>
                <h1>Create a new workspace</h1>
                <p>Your <strong>email address</strong></p>
                <input type='email' placeholder='you@example.com'/>
            </div>
            <div className='create-left-sidebar-submit'>
                <button>Next <i className="create-continue-arrow fas fa-arrow-right"></i></button>
            </div>
        </div>
        <div className='create-right-sidebar'>
            <div className='create-right-sidebar-header'>
                <span>Looking to join an existing workspace?</span>
                <button>Find your workspace.</button>
            </div>
            <div className='create-right-sidebar-image'></div>
        </div>
      </div>
    );
  }
}

export default Create;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class CreateTeamName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className='team-name'>
        <div className='get-started-header'>
            <img src={require('../app/assets/images/download.png')}/>
            <span>devchat</span>
        </div>
        <div className='team-name-body'>
            <div className='teamname-left-sidebar'>
                <div className='teamname-left-sidebar-body'>
                    <h1>What’s the name of your company or team?</h1>
                    <input type='text' placeholder='Ex. Acme or Acme Marketing'/>
                    <button>Next</button>
                </div>
            </div>
            <div className='teamname-right-sidebar'>
                <div className='teamname-template'>
                    <div className='teamname-template-left'>
                        <div className='teamname-template-left-first-line'></div>
                        <div className='teamname-template-left-second-line'></div>
                        <span className='teamname-template-first-hash'>#</span><div className='teamname-template-left-third-line'></div>
                        <span className='teamname-template-second-hash'>#</span><div className='teamname-template-left-fourth-line'></div>
                        <span className='teamname-template-third-hash'>#</span><div className='teamname-template-left-fifth-line'></div>
                        <div className='teamname-template-left-sixth-line'></div>
                        <div className='bullet-first'></div><div className='teamname-template-left-seventh-line'></div>
                        <div className='bullet-second'></div><div className='teamname-template-left-eighth-line'></div>
                        <div className='bullet-third'></div><div className='teamname-template-left-ninth-line'></div>
                    </div>
                    <div className='teamname-template-right'>
                        <div className='teamname-template-right-first-line'></div>
                        <div className='teamname-template-right-second-line'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CreateTeamName;

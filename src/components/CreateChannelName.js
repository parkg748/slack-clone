import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class CreateChannelName extends React.Component {
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
                    <h1>What’s a project your team is working on?</h1>
                    <input type='text' placeholder='Ex. Q4 Budget, Website Update...'/>
                    <button>Next</button>
                </div>
            </div>
            <div className='teamname-right-sidebar'>
                <div className='teamname-template'>
                    <div className='channelname-template-left'>
                        <div className='channelname-template-left-first-line'>Grace</div>
                        <div className='channelname-template-left-second-line'></div>
                        <span className='channelname-template-first-hash'>#</span><div className='channelname-template-left-third-line'></div>
                        <span className='channelname-template-second-hash'>#</span><div className='channelname-template-left-fourth-line'></div>
                        <span className='channelname-template-third-hash'>#</span><div className='channelname-template-left-fifth-line'></div>
                        <div className='channelname-template-left-sixth-line'></div>
                        <div className='channelname-bullet-first'></div><div className='channelname-template-left-seventh-line'></div>
                        <div className='channelname-bullet-second'></div><div className='channelname-template-left-eighth-line'></div>
                        <div className='channelname-bullet-third'></div><div className='channelname-template-left-ninth-line'></div>
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

export default CreateChannelName;

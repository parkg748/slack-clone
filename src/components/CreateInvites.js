import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class CreateInvites extends React.Component {
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
            <span onClick={() => this.props.history.push('/')}>devchat</span>
        </div>
        <div className='team-name-body'>
            <div className='teamname-left-sidebar'>
                <div className='invites-left-sidebar-body'>
                    <h1>Who else is working on this project?</h1>
                    <input type='text' placeholder='name@example.com'/>
                    <input type='text' placeholder='name@example.com'/>
                    <input type='text' placeholder='name@example.com'/>
                    <div className='invites-add-another'>
                        <i className="fas fa-plus-circle"></i>
                        <span>Add another</span>
                    </div>
                    <div className='invites-submit'>
                        <button>Add Teammates</button>
                        <div className='invites-skipfornow'>Or, <Link to='/'>skip for now</Link></div>
                    </div>
                    
                </div>
            </div>
            <div className='teamname-right-sidebar'>
                <div className='teamname-template'>
                    <div className='channelname-template-left'>
                        <div className='channelname-template-left-first-line'>Grace</div>
                        <div className='invites-template-left-second-line'>Channels</div>
                        <span className='invites-template-first-hash'>#</span><div className='invites-template-left-third-line'>grace</div>
                        <div className='invites-green-bar'></div>
                        <span className='channelname-template-second-hash'>#</span><div className='channelname-template-left-fourth-line'></div>
                        <span className='channelname-template-third-hash'>#</span><div className='channelname-template-left-fifth-line'></div>
                        <div className='channelname-template-left-sixth-line'></div>
                        <div className='channelname-bullet-first'></div><div className='channelname-template-left-seventh-line'></div>
                        <div className='channelname-bullet-second'></div><div className='channelname-template-left-eighth-line'></div>
                        <div className='channelname-bullet-third'></div><div className='channelname-template-left-ninth-line'></div>
                    </div>
                    <div className='teamname-template-right'>
                        <div className='invites-template-right-first-line'>#websites</div>
                        <div className='teamname-template-right-second-line'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CreateInvites;
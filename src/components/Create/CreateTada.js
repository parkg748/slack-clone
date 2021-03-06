import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentChannel } from '../../actions/index';
import '../App.css';

class CreateTada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.name,
        channelDetail: this.props.channelDetail,
        invites: this.props.invites,
        channelsRef: this.props.channelsRef
    };
  }

  changeChannel(channel) {
    this.props.setCurrentChannel(channel);
  }

  render() {
    const { name, channelDetail, invites, channelsRef } = this.state;
    let invitesBox = [];
    let topBullet = 191;
    let topSpan = 183;
    if (invites.length > 0) {
        invitesBox.push(<div className='invites-template-left-sixth-line'>Teammates</div>);
        for (let i = 0; i < this.props.invites.length; i++) {
            let fontSize = 10;
            let invitesLength = invites[i].length;
            if (invitesLength > 17) {
                fontSize -= Math.floor((invitesLength - 17) / 2);
            }
            invitesBox.push(<div>
                <div style={{ top: `${topBullet}px` }} className='invites-bullet-first'></div>
                <div style={{ top: `${topSpan}px`, fontSize: `${fontSize}px` }} className='invites-template-left-seventh-line'>{invites[i]}</div>
            </div>);
            topBullet += 16;
            topSpan += 16;
        }
    } else {
        invitesBox.push(<div>
            <div className='channelname-template-left-sixth-line'></div>
            <div className='channelname-bullet-first'></div><div className='channelname-template-left-seventh-line'></div>
            <div className='channelname-bullet-second'></div><div className='channelname-template-left-eighth-line'></div>
            <div className='channelname-bullet-third'></div><div className='channelname-template-left-ninth-line'></div>
        </div>);
    }
    return (
      <div className='team-name'>
        <div className='get-started-header'>
            <img src={require('../../app/assets/images/download.png')}/>
            <span onClick={() => this.props.history.push('/')}>devchat</span>
        </div>
        <div className='team-name-body'>
            <div className='teamname-left-sidebar'>
                <div className='tada-left-sidebar-body'>
                    <h1>Tada! Meet your team’s first channel: #{channelDetail}</h1>
                    <p>A channel brings together every part of your project – the people, conversations, ideas, updates, and files – so your team can move forward and get more done.</p>
                    <button onClick={() => this.changeChannel(channelsRef)}>See Your Channel in devchat</button>
                    <p className='tada-left-sidebar-disclaimer'>By continuing, you're agreeing to our <Link to='/'>Customer Terms of Service</Link>, <Link to='/'>Privacy Policy</Link>, and <Link to='/'>Cookie Policy</Link>.</p>
                </div>
            </div>
            <div className='teamname-right-sidebar'>
                <div className='teamname-template'>
                    <div className='channelname-template-left'>
                        <div className='channelname-template-left-first-line'>{name}</div>
                        <div className='invites-template-left-second-line'>Channels</div>
                        <span className='invites-template-first-hash'>#</span><div className='invites-template-left-third-line'>{channelDetail}</div>
                        <div className='invites-green-bar'></div>
                        <span className='channelname-template-second-hash'>#</span><div className='channelname-template-left-fourth-line'></div>
                        <span className='channelname-template-third-hash'>#</span><div className='channelname-template-left-fifth-line'></div>
                        {invitesBox}
                    </div>
                    <div className='teamname-template-right'>
                        <div className='invites-template-right-first-line'>#{channelDetail}</div>
                        <div className='teamname-template-right-second-line'></div>
                        <img src='https://i.imgur.com/vBLWL8Q.png'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setCurrentChannel })(CreateTada);

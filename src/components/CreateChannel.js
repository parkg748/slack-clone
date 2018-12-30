import React from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';

class CreateChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          channelsRef: firebase.database().ref('channels'),
          email: this.props.email,
          purpose: '',
          invites: '',
          clicked: false,
          privateMode: false,
          left: 75,
          nameError: false,
          nameBorder: '1px solid #919193'
        };
        this._onMouseDown = this._onMouseDown.bind(this);
        this.privatePublic = this.privatePublic.bind(this);
    }

    _onMouseDown() {
      this.setState({ clicked: true });
    }

    privatePublic() {
      if (type === 'public') {
        this.setState({ privateMode: true, left: 2 });
      } else if (type === 'private') {
        this.setState({ privateMode: false, left: 75 });
      }
    }

    update(field) {
      return (e) => {
        if (e.target.value === '' && field === 'name') {
          this.setState({ [field]: e.target.value, nameError: true, nameBorder: '1px solid #f26130' });
        } else {
          this.setState({ [field]: e.target.value, nameError: false, nameBorder: '1px solid #919193' });
        }
      }
    }

    addChannel() {
      const { name, channelsRef, purpose, email, privateMode } = this.state;
      const key = channelsRef.push().key;
      const newChannel = {
          id: key,
          name,
          purpose,
          invites,
          privacy: privateMode,
          createdBy: {
              name: email
          }
      }
      channelsRef.child(key).update(newChannel);
    }

    render() {
        const { toggleMenu } = this.props;
        const { clicked, name, purpose, privateMode, left, nameError, nameBorder } = this.state;

        return (
          <div className='contents-container'>
            <div style={{ backgroundColor: `${clicked ? '#008952' : ''}`, color: `${clicked ? 'white' : ''}` }} onMouseDown={() => this._onMouseDown()} onClick={() => toggleMenu('create-channel')} className='contents-container-close-btn'>
              <i className="close-btn-icon fas fa-times"></i>
              <span>esc</span>
            </div>
            <div className='create-channel-contents'>
              <div className='channel-modal-header'>
                <h1>Create a channel</h1>
              </div>
              <p>Channels are where your members communicate. They’re best when organized around a topic — #leads, for example.</p>
              <div className='private-toggle-container'>
                <div className='toggle-checked'>
                  {privateMode ? <button className='private-button' onClick={() => this.privatePublic('private')}>Private<div style={{ left: `${left}%` }} className='toggled-checked-circle'></div></button> : <button className='public-button' onClick={() => this.privatePublic('public')}>Public<div style={{ left: `${left}%` }} className='toggled-checked-circle'></div></button>}
                  {privateMode ? <div className='toggle-secondary-label'>This channel can only be joined or viewed by invite.</div> : <div className='toggle-secondary-label'>Anyone in your workspace can view and join this channel.</div>}
                </div>
              </div>
              <div className='invites-submit'>
                <label><strong>Name</strong>{nameError ? <span>Don't forget to name your channel.</span> : ''}</label>
                <input style={{ border: `${nameBorder}` }} onChange={this.update('name')} type='text' placeholder='e.g. leads' value={name}/>
                {privateMode ? <i className="fas fa-lock"></i> : <i className="fas fa-hashtag"></i>}
                <span>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</span>
              </div>
              <div className='medium-bottom-margin'>
                <label><strong>Purpose</strong>(optional)</label>
                <input onChange={this.update('purpose')} type='text' value={purpose} />
                <span>What’s this channel about?</span>
              </div>
              <div className='send-invites-to'>
                <label><strong>Send invites to:</strong> (optional)</label>
                <input className='send-invites-to' type='text' placeholder='Search by name'/>
                <span>Select up to 1000 people to add to this channel.</span>
              </div>
              <div className='save-channel'>
                <button onClick={() => toggleMenu('create-channel')} className='save-channel-cancel'>Cancel</button>
                <button className='save-channel-create'>Create Channel</button>
              </div>
            </div>
          </div>
        );
    }
}

export default CreateChannel;

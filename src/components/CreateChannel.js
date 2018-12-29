import React from 'react';
import { Link } from 'react-router-dom';

class CreateChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { toggleMenu, left, privateMode } = this.props;

        return (
          <div className='contents-container'>
            <div onClick={() => toggleMenu('create-channel')} className='contents-container-close-btn'>
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
                  {privateMode ? <button className='private-button' onClick={() => toggleMenu('private')}>Private<div style={{ left: `${left}%` }} className='toggled-checked-circle'></div></button> : <button className='public-button' onClick={() => toggleMenu('public')}>Public<div style={{ left: `${left}%` }} className='toggled-checked-circle'></div></button>}
                  {privateMode ? <div className='toggle-secondary-label'>This channel can only be joined or viewed by invite.</div> : <div className='toggle-secondary-label'>Anyone in your workspace can view and join this channel.</div>}
                </div>
              </div>
              <div className='invites-submit'>
                <label><strong>Name</strong></label>
                <input type='text' placeholder='e.g. leads'/>
                <i className="fas fa-lock"></i>
                <span>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</span>
              </div>
              <div className='medium-bottom-margin'>
                <label><strong>Purpose</strong>(optional)</label>
                <input type='text' />
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

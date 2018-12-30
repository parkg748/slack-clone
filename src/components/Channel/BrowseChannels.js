import React from 'react';
import { Link } from 'react-router-dom';

class BrowseChannels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clicked: false
        };
        this._onMouseDown = this._onMouseDown.bind(this);
    }

    _onMouseDown() {
      this.setState({ clicked: true });
    }

    render() {
        const { showChannel, sortChannel, toggleMenu, setSelection, show, sort } = this.props;
        const { clicked } = this.state;

        return (
          <div className='contents-container'>
            <div className='channel-browser-footer'>
              <i className="fas fa-info-circle"></i>
              <span>About channels...</span>
            </div>
            <div style={{ backgroundColor: `${clicked ? '#008952' : ''}`, color: `${clicked ? 'white' : ''}` }} onMouseDown={() => this._onMouseDown()} onClick={() => toggleMenu('browse-channel')} className='contents-container-close-btn'>
              <i className="close-btn-icon fas fa-times"></i>
              <span>esc</span>
            </div>
            <div className='contents'>
              <div className='browse-channels'>
                <h1>Browse channels</h1>
                <button>Create Channel</button>
              </div>
              <input type='text' placeholder='Search channels'/>
              <i className="search-channels fas fa-search"></i>
              <div className='channel-browser-filter'>
                <div onClick={() => toggleMenu('show')} className='show-which-channels-container-show'>
                  {show ? <div>
                    <input type='text' placeholder='Choose an option...'/>
                    <div className='all-channels-list-container'>
                      <ul>
                        <li onClick={() => setSelection('All Channels', 'show')} style={{ color: `${showChannel === `All Channels` ? `#0576b9` : `#2c2d30`}` }}>All Channels</li>
                        <li onClick={() => setSelection('Private Channels', 'show')} style={{ color: `${showChannel === `Private Channels` ? `#0576b9` : `#2c2d30`}`}}>Private Channels</li>
                        <li onClick={() => setSelection('Archived Channels', 'show')} style={{ color: `${showChannel === `Archived Channels` ? `#0576b9` : `#2c2d30`}`}}>Archived Channels</li>
                      </ul>
                    </div>
                  </div> : <div><strong>Show:</strong> {showChannel}</div>}

                </div>
                <i className="show-all-channels-arrow-show fas fa-angle-down"></i>
                <div onClick={() => toggleMenu('sort')} className='show-which-channels-container-sort'>
                  {sort ? <div>
                    <input type='text' placeholder='Choose an option...'/>
                    <div className='all-channels-list-container'>
                      <ul>
                        <li onClick={() => setSelection('Channel Name', 'sort')} style={{ color: `${sortChannel === `Channel Name` ? `#0576b9` : `#2c2d30`}` }}>Channel Name</li>
                        <li onClick={() => setSelection('Name of Creator', 'sort')} style={{ color: `${sortChannel === `Name of Creator` ? `#0576b9` : `#2c2d30`}`}}>Name of Creator</li>
                        <li onClick={() => setSelection('Creation Date (newest first)', 'sort')} style={{ color: `${sortChannel === `Creation Date (newest first)` ? `#0576b9` : `#2c2d30`}`}}>Creation Date (newest first)</li>
                        <li onClick={() => setSelection('Members (most to fewest)', 'sort')} style={{ color: `${sortChannel === `Members (most to fewest)` ? `#0576b9` : `#2c2d30`}`}}>Members (most to fewest)</li>
                        <li onClick={() => setSelection('Members (fewest to most)', 'sort')} style={{ color: `${sortChannel === `Members (fewest to most)` ? `#0576b9` : `#2c2d30`}`}}>Members (fewest to most)</li>
                      </ul>
                    </div>
                  </div> : <div><strong>Sort:</strong> {sortChannel}</div>}
                </div>
                <i className="show-all-channels-arrow-sort fas fa-angle-down"></i>
              </div>
              <div className='channel-list-container'>
                <div className='channel-browser-divider'>Channels you belong to</div>
                <div className='channel-browser-row'>
                  <div className='channel-browser-header'># general</div>
                  <div className='channel-browser-purpose'>This channel is for workspace-wide communication and announcements. All members are in this channel.</div>
                  <div className='channel-browser-created-info'>Created by <strong>parkg748</strong> on December 27th, 2018</div>
                  <i className="fas fa-level-down-alt"></i>
                </div>
                <div className='channel-browser-row'>
                  <div className='channel-browser-header'># random</div>
                  <div className='channel-browser-purpose'>A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.</div>
                  <div className='channel-browser-created-info'>Created by <strong>parkg748</strong> on December 27th, 2018</div>
                  <i className="fas fa-level-down-alt"></i>
                </div>
                <div className='channel-browser-row'>
                  <div className='channel-browser-header'># testing</div>
                  <div className='channel-browser-created-info'>Created by <strong>parkg748</strong> on December 27th, 2018</div>
                  <i className="fas fa-level-down-alt"></i>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BrowseChannels;

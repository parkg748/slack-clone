import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemScroller from './MenuItemScroller';
import NotificationModal from './NotificationModal';
import BrowseChannels from './BrowseChannels';
import CreateChannel from './CreateChannel';
import DirectMessages from './DirectMessages';
import BrowseApp from './BrowseApp';
import SaveYourAccountStepOne from './SaveYourAccountStepOne';
import firebase from '../firebase';
import { setCurrentChannel } from '../../actions/index';
import { connect } from 'react-redux';
import Messages from '../Messages/Messages';

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            font: '#a09a9f',
            edit: 'none',
            search: '#717274',
            menu: false,
            notification: false,
            show: false,
            sort: false,
            showChannel: 'All Channels',
            sortChannel: 'Channel Name',
            browseChannel: false,
            privateMode: false,
            left: 75,
            createChannel: false,
            currentChannel: 'general',
            directMessages: false,
            browseApp: false,
            saveYourAccount: false,
            channels: [],
            channelsRef: firebase.database().ref('channels'),
            firstLoad: true,
            activeChannel: ''
        };
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.setSelection = this.setSelection.bind(this);
        this.setActiveChannel = this.setActiveChannel.bind(this);
    }

    componentDidMount() {
      this.addListeners();
    }

    componentWillUnmount() {
      this.removeListeners();
    }

    addListeners() {
      let loadedChannels = [];
      this.state.channelsRef.on('child_added', snap => {
        loadedChannels.push(snap.val());
        this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
      });
    }

    removeListeners() {
      this.state.channelsRef.off();
    }

    setFirstChannel() {
      const firstChannel = this.state.channels[0];
      if (this.state.firstLoad && this.state.channels.length > 0) {
        this.props.setCurrentChannel(firstChannel);
      }
      this.setState({ firstLoad: false });
    }

    changeChannel(channel) {
        this.setActiveChannel(channel);
        this.props.setCurrentChannel(channel);
      };

    setActiveChannel(channel) {
      this.setState({ activeChannel: channel.id });
    };

    displayChannels = channels =>
    channels.length > 0 &&
    channels.map(channel => (
      <div onClick={() => { this.setSelection(`${channel.name}`, 'currentChannel'); this.changeChannel(channel)}} style={{ backgroundColor: `${this.state.currentChannel === `${channel.name}` && `${this.state.activeChannel}` === `${channel.id}` ? `#4C9689` : `transparent`}`, color: `${this.state.currentChannel === `${channel.name}` && `${this.state.activeChannel}` === `${channel.id}` ? `white` : `rgb(202,196,201)`}`  }} className='row-col-channels'># {channel.name}</div>

    ));

    toggleMenu(type) {
      if (type === 'menu') {
        this.setState({ [type]: !this.state.menu });
      } else if (type === 'notification') {
        this.setState({ [type]: !this.state.notification });
      } else if (type === 'show') {
        this.setState({ [type]: true });
      } else if (type === 'sort') {
        this.setState({ [type]: true });
      } else if (type === 'browse-channel') {
        this.setState({ browseChannel: !this.state.browseChannel });
      } else if (type === 'create-channel') {
        this.setState({ createChannel: !this.state.createChannel });
      } else if (type === 'direct-messages') {
        this.setState({ directMessages: !this.state.directMessages });
      } else if (type === 'browse-app') {
        this.setState({ browseApp: !this.state.browseApp });
      } else if (type === 'save-account') {
        this.setState({ saveYourAccount: !this.state.saveYourAccount });
      }
    }

    setSelection(type, selection) {
      if (selection === 'show') {
        this.setState({ show: false, showChannel: type });
      } else if (selection === 'sort') {
        this.setState({ sort: false, sortChannel: type });
      } else if (selection === 'currentChannel') {
        this.setState({ [selection]: type });
      }
    }

    _onMouseEnter(type) {
        if (type === 'font') {
            this.setState({ [type]: 'white' });
        } else if (type === 'edit') {
            this.setState({ [type]: 'flex' });
        } else if (type === 'search') {
            this.setState({ [type]: '#0576b9' });
        }
    }

    _onMouseLeave(type) {
        if (type === 'font') {
            this.setState({ [type]: '#a09a9f' });
        } else if (type === 'edit') {
            this.setState({ [type]: 'none' });
        } else if (type === 'search') {
            this.setState({ [type]: '#717274' });
        }
    }

    render() {
        const { font, edit, search, menu, notification, show, sort, showChannel, sortChannel, browseChannel, privateMode, left, createChannel, currentChannel, directMessages, browseApp, saveYourAccount, channelsRef, channels } = this.state;
        return (
            <div className='channel'>
              {browseChannel ? <BrowseChannels showChannel={showChannel} sortChannel={sortChannel} toggleMenu={this.toggleMenu} setSelection={this.setSelection} sort={sort} show={show}/> : ''}
              {createChannel ? <CreateChannel toggleMenu={this.toggleMenu} channelsRef={channelsRef}/> : ''}
              {directMessages ? <DirectMessages toggleMenu={this.toggleMenu}/> : ''}
              {browseApp ? <BrowseApp toggleMenu={this.toggleMenu}/> : ''}
              {saveYourAccount ? <SaveYourAccountStepOne toggleMenu={this.toggleMenu}/> : ''}
              <div className='channel-left-sidebar'>
                <div onMouseEnter={() => this._onMouseEnter('font')} onMouseLeave={() => this._onMouseLeave('font')} className='channel-left-header'>
                  <div className='channel-left-header-teamname'>
                    {menu ? <MenuItemScroller /> : ''}
                    {notification ? <NotificationModal /> : ''}
                    <div>
                      <span>Testing</span>
                      <i style={{ color: `${font}` }} onClick={() => this.toggleMenu('menu')} className="channel-left-header-caret fas fa-angle-down"></i>
                    </div>
                    <i onClick={() => this.toggleMenu('notification')} className="far fa-bell"></i>
                    <div className='channel-left-notifications'><i className="fas fa-caret-up"></i>Notifications</div>
                  </div>
                  <div className='team-menu-user'>
                    <div className='team-menu-user-online'></div>
                    <span style={{ color: `${font}` }}>parkg748</span>
                  </div>
                </div>
                <div className='col-channels'>
                  <div className='divider'></div>
                  <div className='row-col-channels-title'>
                    <span onClick={() => this.toggleMenu('browse-channel')} className='row-col-channels-title-name'>Channels</span>
                    <div className='browse-all-channels'><i className="fas fa-caret-down"></i>Browse all channels</div>
                    <div className='channels-fa-plus-circle'><i onClick={() => this.toggleMenu('create-channel')} className="fas fa-plus-circle"></i></div>
                    <div className='create-a-channel'><i className="fas fa-caret-down"></i>Create a channel</div>
                  </div>
                  <div onClick={() => this.setSelection('general', 'currentChannel')} style={{ backgroundColor: `${currentChannel === `general` ? `#4C9689` : `transparent`}`, color: `${currentChannel === `general` ? `white` : `rgb(202,196,201)`}` }} className='row-col-channels'># general</div>
                  <div onClick={() => this.setSelection('random', 'currentChannel')} style={{ backgroundColor: `${currentChannel === `random` ? `#4C9689` : `transparent`}`, color: `${currentChannel === `random` ? `white` : `rgb(202,196,201)`}`  }} className='row-col-channels'># random</div>
                  {this.displayChannels(channels)}
                  <div className='divider-2'></div>
                  <div className='row-col-channels-title'>
                    <span onClick={() => this.toggleMenu('direct-messages')} className='row-col-channels-direct-messages'>Direct Messages</span>
                    <div className='open-direct-message-1'><i className="fas fa-caret-down"></i>Open a direct message</div>
                    <div onClick={() => this.toggleMenu('direct-messages')} className='direct-fa-plus-circle'><i className="fas fa-plus-circle"></i></div>
                    <div className='open-direct-message-2'><i className="fas fa-caret-down"></i>Open a direct message</div>
                  </div>
                  <div onClick={() => this.setSelection('slackbot', 'currentChannel')} style={{ backgroundColor: `${currentChannel === `slackbot` ? `#4C9689` : `transparent`}`, color: `${currentChannel === `slackbot` ? `white` : `rgb(202,196,201)`}` }} className='row-col-channels'><i className="fas fa-heart"></i>slackbot</div>
                  <div onClick={() => this.setSelection('parkg748', 'currentChannel')} style={{ backgroundColor: `${currentChannel === `parkg748` ? `#4C9689` : `transparent`}`, color: `${currentChannel === `parkg748` ? `white` : `rgb(202,196,201)`}` }} className='row-col-channels'>
                    <div className='team-menu-user-online'></div>
                    <span>parkg748</span>
                    <p style={{ color: `${currentChannel === `parkg748` ? `white` : `rgb(160, 154, 159)`}` }}>(you)</p>
                  </div>
                  <div className='divider-3'></div>
                  <div className='row-col-channels-title'>
                    <span onClick={() => this.toggleMenu('browse-app')} className='row-col-channels-apps'>Apps</span>
                    <div className='browse-apps-1'><i className="fas fa-caret-down"></i>Browse Apps</div>
                    <div onClick={() => this.toggleMenu('browse-app')} className='browse-fa-plus-circle'><i className="fas fa-plus-circle"></i></div>
                    <div className='browse-apps-2'><i className="fas fa-caret-down"></i>Browse Apps</div>
                  </div>
                </div>
              </div>
              <div className='channel-right-sidebar'>
                <div className='channel-right-top'>
                  <div className='channel-header'>
                    <div className='messages-header'>
                      <div className='channel-name-container'>#testing</div>
                      <div className='channel-header-info'>
                        <div className='fa-star-container'><i className="far fa-star"></i></div>
                        <div className='star-this-channel'><i className="fas fa-caret-up"></i>Star this channel</div>
                        |
                        <div className='fa-user-container'>
                          <i className="far fa-user"></i>1
                        </div>
                        <div className='view-member-list'><i className="fas fa-caret-up"></i>View member list</div>
                        |
                        <div className='fa-thumbtack-container'>
                          <i className="fas fa-thumbtack"></i>0
                        </div>
                        <div className='view-pinned-items'><i className="fas fa-caret-up"></i>View pinned items</div>
                        |
                        <div onMouseEnter={() => this._onMouseEnter('edit')} onMouseLeave={() => this._onMouseLeave('edit')} className='fa-pencil-alt-container-edit'>
                          <div className='fa-pencil-alt-container'>
                            <i className="fas fa-pencil-alt"></i>
                            Add a topic
                          </div>
                          <div style={{ display: `${edit}`}} className='add-topic-edit'>Edit</div>
                        </div>
                      </div>
                    </div>
                    <div className='channel-title-info'>
                      <i className="fas fa-phone"></i>
                      <div className='phone-offline'><i className="fas fa-caret-up"></i>Only paid workspaces can start calls from channels.</div>
                      <i className="fas fa-info-circle"></i>
                      <div className='show-channel-details'><i className="fas fa-caret-up"></i>Show Channel Details</div>
                      <i className="fas fa-cog"></i>
                      <div className='channel-settings'><i className="fas fa-caret-up"></i>Channel Settings</div>
                    </div>
                    <div className='flex-header'>
                      <input onMouseEnter={() => this._onMouseEnter('search')} onMouseLeave={() => this._onMouseLeave('search')} style={{ color: `${search}` }} type='text' placeholder='Search'/>
                      <i style={{ color: `${search}` }} className="icon-search-wrapper fas fa-search"></i>
                      <div className='channel-header-icon'>
                        <i className="fas fa-at"></i>
                        <div className='show-activity'><i className="fas fa-caret-up"></i>Show Activity</div>
                        <i className="flex-header-star far fa-star"></i>
                        <div className='show-starred-items'><i className="fas fa-caret-up"></i>Show Starred Items</div>
                        <i className="fas fa-ellipsis-v"></i>
                        <div className='more-items'><i className="fas fa-caret-up"></i>More Items</div>
                      </div>
                    </div>
                  </div>
                  <div className='message-pane-banner'>
                    <img src={require('../../app/assets/images/second_setup@2x.png')}/>
                  </div>
                  <div className='message-pane-banner-body'>
                    <h1>Save your account and start collaborating</h1>
                    <p>To see what teamwork is like in devchat, take a moment to save your account and invite some teammates to join your workspace.</p>
                    <button onClick={() => this.toggleMenu('save-account')}>Save Your Account</button>
                  </div>
                </div>
                <Messages channelsRef={channelsRef}/>
              </div>
            </div>
        );
    }
}

export default connect(null, { setCurrentChannel })(Channels);

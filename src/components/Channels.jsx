import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemScroller from './MenuItemScroller';
import NotificationModal from './NotificationModal';
import BrowseChannels from './BrowseChannels';
import CreateChannel from './CreateChannel';
import DirectMessages from './DirectMessages';

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
            directMessages: false
        };
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.setSelection = this.setSelection.bind(this);
    }

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
      } else if (type === 'public') {
        this.setState({ privateMode: true, left: 2 });
      } else if (type === 'private') {
        this.setState({ privateMode: false, left: 75 });
      } else if (type === 'create-channel') {
        this.setState({ createChannel: !this.state.createChannel });
      } else if (type === 'direct-messages') {
        this.setState({ directMessages: !this.state.directMessages });
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
        const { font, edit, search, menu, notification, show, sort, showChannel, sortChannel, browseChannel, privateMode, left, createChannel, currentChannel, directMessages } = this.state;

        return (
            <div className='channel'>
              {browseChannel ? <BrowseChannels showChannel={showChannel} sortChannel={sortChannel} toggleMenu={this.toggleMenu} setSelection={this.setSelection} sort={sort} show={show}/> : ''}
              {createChannel ? <CreateChannel toggleMenu={this.toggleMenu} left={left} privateMode={privateMode}/> : ''}
              {directMessages ? <DirectMessages toggleMenu={this.toggleMenu}/> : ''}
              <div className='contents-container'>
                <div className='channel-browser-footer'>
                  <i className="fas fa-cog"></i>
                  <span>Manage apps...</span>
                </div>
                <div onClick={() => this.toggleMenu('browse-channel')} className='contents-container-close-btn'>
                  <i className="close-btn-icon fas fa-times"></i>
                  <span>esc</span>
                </div>
                <div className='contents'>
                  <div className='apps-browser-filter-container'>
                    <div className='apps-browser-filter-channels'>
                      <h1>Browse Apps</h1>
                      <button>View App Directory</button>
                    </div>
                    <input type='text' placeholder='Search by name or category (e.g. productivity, sales)'/>
                    <i className="apps-browser-filter-search fas fa-search"></i>
                  </div>

                  <div className='channel-list-container'>
                    <div className='app-browser-category-section'>
                      <div className='app-browser-app'>
                        <img src={require('../app/assets/images/tutorial@2x.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>What are apps?</strong>
                          <span>A quick look at how apps in Slack can streamline your work</span>
                          </div>
                          <button>Start</button>
                        </div>
                      </div>
                    </div>
                    <div className='app-browser-category'>
                      <div className='recent-conversations'>Add apps to your workspace</div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/service_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Giphy</strong>
                          <span>An online library of animated GIFs</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/232381175025_31793c43d684e5a7c75a_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Google Drive</strong>
                          <span>Get notifications about Google Drive files within devchat</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/44042585718_0e6a837d5b63fd1cfc07_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Trello</strong>
                          <span>Collaborate on Trello projects without leaving devchat.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/dropbox_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Dropbox</strong>
                          <span>Cloud file storage and syncing</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/twitter_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Twitter</strong>
                          <span>Bring tweets into devchat.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/17670668547_3b5cda05986fc6c0d978_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Simple Poll</strong>
                          <span>Create native and simple polls in devchat.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/service_72 (1).png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Google Calendar</strong>
                          <span>A shared calendar for your team.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/hangouts_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Google+ Hangouts</strong>
                          <span>Bring your conversations to life with free video calls.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/130976277813_a8ab564623726e14ea32_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Workast</strong>
                          <span>To-dos, task and project manager for devchat teams</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/101273840518_6a9119a0601c8509247c_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>IFTTT</strong>
                          <span>Automated connections between web services.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/200850512066_2d5e268a3b71c87f969c_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Zapier</strong>
                          <span>Easy automation for busy people</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/rss_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>RSS</strong>
                          <span>Automatically syndicated site content.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/41532123248_86c89d7c608b75bbd782_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Polly</strong>
                          <span>Polls and surveys in devchat 📊</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/service_72 (2).png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Microsoft OneDrive</strong>
                          <span>Quick access to your files from all your devices</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/288981919427_f45f04edd92902a96859_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>GitHub</strong>
                          <span>Get updates from the world’s leading development platform on devchat</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/493753869479_4b703f4119efe3d7d0ff_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Jira Cloud</strong>
                          <span>Easily connect Jira Cloud projects to your devchat channels</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/16747233735_cd6d563053f8079cd36f_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Gif Keyboard</strong>
                          <span>Choose and share the perfect GIF. Caption your favorites.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/service_72 (3).png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Box</strong>
                          <span>Securely store, share, and manage all your files</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/32656022455_3f51bd50630a4ea2a08b_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Kyber</strong>
                          <span>All-in-one task & project management, standup meetings, polls, surveys, todo lists and calendars inside devchat</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/service_72 (4).png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Hubot</strong>
                          <span>GitHub's scriptable chat bot.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/334235045829_1d1db85d6877560365df_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Bitbucket Cloud</strong>
                          <span>Get updates about your Bitbucket repositories and take action in devchat</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/361581500802_805517e7bd209d4189d4_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Teamline</strong>
                          <span>🚩 The simple project management tool for devchat</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/159746031889_77753ab40a2fa603bd53_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>InVision App</strong>
                          <span>Streamline your design workflow by bringing the feedback process right into devchat.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/245295805989_06e77af1bfb8e3c81d4d_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Zoom</strong>
                          <span>Easily start a Zoom video meeting directly from devchat.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/service_72 (5).png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Salesforce</strong>
                          <span>Search and view information from Salesforce in devchat.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/144221668546_9c44dbfe73488d4b8d5e_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Meekan Scheduling</strong>
                          <span>Schedule meetings, find a room, get reminders, manage calendars</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/384053245894_495b0d8bc7454e59a3c8_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Cisco Webex Meetings</strong>
                          <span>Start or join Webex video meetings from devchat.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/474008204773_946a31a43846271803a5_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>StandupIy</strong>
                          <span>Standup-Bot #1: Surveys & Text-Voice-Video Scrum Meetings</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/275879732834_2e4075f294f71c6bc9d0_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Eventbot Calendar</strong>
                          <span>Shared team calendar for devchat 📅</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/458684668640_b6e0feb5a3be66d465f4_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Geekbot</strong>
                          <span>Asynchronous standup meetings, Retrospectives & Culture surveys</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/300655353986_53957f8929256e832140_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Disco</strong>
                          <span>Disco makes it easy to celebrate your company culture and values</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/238810648614_7050c90574e7f953aa42_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Donut</strong>
                          <span>Meet coworkers for coffee + onboard new hires effortlessly.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/416861742148_9a4f2f5b0d2c7259bee8_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Slack Foundry</strong>
                          <span>A training app for Slack.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/service_72 (6).png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>BlueJeans</strong>
                          <span>Cloud-based video meetings for any device.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/49671169684_cbdc45293ab75ea06413_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>PagerDuty</strong>
                          <span>PagerDuty is your fastest path to incident resolution</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/297532298896_b38db12dd15a4aebf3d1_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Troops</strong>
                          <span>Update Salesforce, Create Alerts, Use Your Salesforce Reports in devchat 🚀  📈</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/341591994389_f9b34fbf501c8b52203d_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Asana</strong>
                          <span>Move work forward.</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                      <div className='app-browser-category-header'>
                        <img src={require('../app/assets/images/403895177205_5bba247da24a9129c161_72.png')}/>
                        <div className='app-browser-app-container'>
                          <div className='app-browser-app-info'>
                          <strong>Zendesk</strong>
                          <span>View, create, and take action on support tickets from any devchat channel</span>
                          </div>
                          <button>Install</button>
                        </div>
                      </div>
                    </div>
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
              {/*<div className='channel-left-sidebar'>
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
                      <div onClick={() => this.setSelection('hello', 'currentChannel')} style={{ backgroundColor: `${currentChannel === `hello` ? `#4C9689` : `transparent`}`, color: `${currentChannel === `hello` ? `white` : `rgb(202,196,201)`}`  }} className='row-col-channels'># hello</div>
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
                          <span className='row-col-channels-apps'>Apps</span>
                          <div className='browse-apps-1'><i className="fas fa-caret-down"></i>Browse Apps</div>
                          <div className='browse-fa-plus-circle'><i className="fas fa-plus-circle"></i></div>
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
                    <img src={require('../app/assets/images/second_setup@2x.png')}/>
                  </div>
                  <div className='message-pane-banner-body'>
                      <h1>Save your account and start collaborating</h1>
                      <p>To see what teamwork is like in devchat, take a moment to save your account and invite some teammates to join your workspace.</p>
                      <button>Save Your Account</button>
                  </div>
                </div>
                <div className='channel-right-bottom'>
                  <div className='virtual-list-sticky-container'>
                    <div className='virtual-list-item'>
                      <hr></hr>
                      <div className='virtual-list-item-day'>Yesterday</div>
                    </div>
                    <div className='message-container'>
                      <div className='message-avatar'>
                        <img />
                      </div>
                      <div className='message-content'>
                        <div className='message-content-header'>
                          <span>parkg748</span>
                          <a>8:10 PM</a>
                        </div>
                        <div className='message-body'>joined #testing.</div>
                      </div>
                    </div>
                  </div>
                  <div className='channel-footer'>
                    <div className='msg-add-input'>+</div>
                    <div className='msg-input'>
                      <input type='text' placeholder='Message #testing'/>
                      <div className='msg-input-emoji'>
                        <i className="msg-input-at fas fa-at"></i>
                        <i className="msg-input-smile far fa-smile"></i>
                        <div className='msg-input-smile-color'>
                          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjkuOTM3NSIgeTE9IjYxMy4zMTI1IiB4Mj0iLTI5LjkzNzUiIHkyPSI2NDMuMzEyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxNiAwIDAgLTE2IDczNSAxMDMwOSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZCNTMzIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGMzMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNpcmNsZSBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0MCIvPgo8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzAiIHN0eWxlPSJmaWxsOiNDQzdCMjk7IiBkPSJNMjU2LDBDMTE0LjYwOCwwLDAsMTE0LjYwOCwwLDI1NnMxMTQuNjA4LDI1NS45ODQsMjU2LDI1NiAgYzE0MS4zOTIsMCwyNTUuOTg0LTExNC42MDgsMjU2LTI1NkM1MTEuOTg0LDExNC42MDgsMzk3LjM5MiwwLDI1NiwweiBNNDE0LjM4NCw0MTQuMzg0Yy00MC41NzYsNDAuNTYtOTYuNDgsNjUuNi0xNTguMzg0LDY1LjYxNiAgYy02MS45MDQtMC4wMTYtMTE3LjgwOC0yNS4wNTYtMTU4LjQtNjUuNjE2QzU3LjA0LDM3My44MDgsMzIsMzE3LjkwNCwzMiwyNTZTNTcuMDQsMTM4LjE5Miw5Ny42LDk3LjYgIEMxMzguMTkyLDU3LjA0LDE5NC4wOTYsMzIsMjU2LDMyczExNy44MDgsMjUuMDQsMTU4LjM4NCw2NS42YzQwLjU2LDQwLjU5Miw2NS42LDk2LjQ5Niw2NS42MTYsMTU4LjQgIEM0NzkuOTg0LDMxNy45MDQsNDU0Ljk0NCwzNzMuODA4LDQxNC4zODQsNDE0LjM4NHoiLz4KPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8xIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTExMy42MTYsMjcyYzguMDgsNzEuODA4LDY4LjQ0OCwxMjgsMTQyLjM4NCwxMjhzMTM0LjMwNC01Ni4xOTIsMTQyLjM4NC0xMjggIEgxMTMuNjE2eiIvPgo8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzIiIHN0eWxlPSJmaWxsOiM4MDU1NDA7IiBkPSJNOTcuNzEyLDI3My43OTJDMTA2LjY3MiwzNTMuNTIsMTczLjcyOCw0MTUuOTY4LDI1Niw0MTYgIGM4Mi4yNzItMC4wMzIsMTQ5LjMyOC02Mi40OCwxNTguMjg4LTE0Mi4yMDhMNDE2LjI3MiwyNTZIOTUuNzEyTDk3LjcxMiwyNzMuNzkyeiBNMzc4LjgsMjg4Yy0xNC4yNzIsNTUuMDU2LTYzLjQ4OCw5Ni4wMzItMTIyLjgsOTYgIGMtNTkuMzEyLDAuMDMyLTEwOC41MjgtNDAuOTQ0LTEyMi44LTk2SDM3OC44eiIvPgo8Zz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzgwNTU0MDsiIGN4PSIxNjAiIGN5PSIxNjAiIHI9IjMyIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM4MDU1NDA7IiBjeD0iMzUyIiBjeT0iMTYwIiByPSIzMiIvPgo8L2c+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTI5LjkzNzUiIHkxPSI2MTMuMzEyNSIgeDI9Ii0yOS45Mzc1IiB5Mj0iNjQzLjMxMjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTYgMCAwIC0xNiA3MzUgMTAzMDkpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQjUzMyIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRjMzIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8yXyk7IiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNDAiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjkuOTM4IiB5MT0iNjM0LjMxMjUiIHgyPSItMjkuOTM4IiB5Mj0iNjQyLjMxMjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTYgMCAwIC0xNiA3MzUgMTAzMDkpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZBRkJGQjtzdG9wLW9wYWNpdHk6MCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkFGQkZCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfM18pOyIgZD0iTTI1NiwzMmMtNjEuOTA0LDAtMTE3LjgwOCwyNy4zOTItMTU4LjQsNjcuOTUyQzgwLjgxNiwxMTYuNzM2LDY2Ljg5NiwxNDQsNTYuMDk2LDE2MGgzOTkuNzkyICBjLTEwLjgtMTYtMjQuNzItNDMuMjQ4LTQxLjUwNC02MC4wNDhDMzczLjgwOCw1OS4zOTIsMzE3LjkwNCwzMiwyNTYsMzJ6Ii8+CjxnPgoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8wXzFfIiBzdHlsZT0iZmlsbDojQ0M3QjI5OyIgZD0iTTI1NiwwQzExNC42MDgsMCwwLDExNC42MDgsMCwyNTZzMTE0LjYwOCwyNTUuOTg0LDI1NiwyNTYgICBjMTQxLjM5MiwwLDI1NS45ODQtMTE0LjYwOCwyNTYtMjU2QzUxMS45ODQsMTE0LjYwOCwzOTcuMzkyLDAsMjU2LDB6IE00MTQuMzg0LDQxNC4zODRjLTQwLjU3Niw0MC41Ni05Ni40OCw2NS42LTE1OC4zODQsNjUuNjE2ICAgYy02MS45MDQtMC4wMTYtMTE3LjgwOC0yNS4wNTYtMTU4LjQtNjUuNjE2QzU3LjA0LDM3My44MDgsMzIsMzE3LjkwNCwzMiwyNTZTNTcuMDQsMTM4LjE5Miw5Ny42LDk3LjYgICBDMTM4LjE5Miw1Ny4wNCwxOTQuMDk2LDMyLDI1NiwzMnMxMTcuODA4LDI1LjA0LDE1OC4zODQsNjUuNmM0MC41Niw0MC41OTIsNjUuNiw5Ni40OTYsNjUuNjE2LDE1OC40ICAgQzQ3OS45ODQsMzE3LjkwNCw0NTQuOTQ0LDM3My44MDgsNDE0LjM4NCw0MTQuMzg0eiIvPgo8L2c+CjxnPgoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8xXzFfIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTExMy42MTYsMjcyYzguMDgsNzEuODA4LDY4LjQ0OCwxMjgsMTQyLjM4NCwxMjggICBzMTM0LjMwNC01Ni4xOTIsMTQyLjM4NC0xMjhIMTEzLjYxNnoiLz4KPC9nPgo8Zz4KCTxwYXRoIGlkPSJTVkdDbGVhbmVySWRfMl8xXyIgc3R5bGU9ImZpbGw6IzgwNTU0MDsiIGQ9Ik05Ny43MTIsMjczLjc5MkMxMDYuNjcyLDM1My41MiwxNzMuNzI4LDQxNS45NjgsMjU2LDQxNiAgIGM4Mi4yNzItMC4wMzIsMTQ5LjMyOC02Mi40OCwxNTguMjg4LTE0Mi4yMDhMNDE2LjI3MiwyNTZIOTUuNzEyTDk3LjcxMiwyNzMuNzkyeiBNMzc4LjgsMjg4ICAgYy0xNC4yNzIsNTUuMDU2LTYzLjQ4OCw5Ni4wMzItMTIyLjgsOTZjLTU5LjMxMiwwLjAzMi0xMDguNTI4LTQwLjk0NC0xMjIuOC05NkgzNzguOHoiLz4KPC9nPgo8Zz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzgwNTU0MDsiIGN4PSIxNjAiIGN5PSIxNjAiIHI9IjMyIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM4MDU1NDA7IiBjeD0iMzUyIiBjeT0iMTYwIiByPSIzMiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
        );
    }
}

export default Channels;

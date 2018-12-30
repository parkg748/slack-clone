import React from 'react';
import { Link } from 'react-router-dom';

class BrowseApp extends React.Component {
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
        const { toggleMenu } = this.props;
        const { clicked } = this.state;

        return (
          <div className='contents-container'>
            <div className='channel-browser-footer'>
              <i className="fas fa-cog"></i>
              <span>Manage apps...</span>
            </div>
            <div style={{ backgroundColor: `${clicked ? '#008952' : ''}`, color: `${clicked ? 'white' : ''}` }} onMouseDown={() => this._onMouseDown()} onClick={() => toggleMenu('browse-app')} className='contents-container-close-btn'>
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
                    <img src={require('../../app/assets/images/tutorial@2x.png')}/>
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
                    <img src={require('../../app/assets/images/service_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Giphy</strong>
                      <span>An online library of animated GIFs</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/232381175025_31793c43d684e5a7c75a_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Google Drive</strong>
                      <span>Get notifications about Google Drive files within devchat</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/44042585718_0e6a837d5b63fd1cfc07_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Trello</strong>
                      <span>Collaborate on Trello projects without leaving devchat.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/dropbox_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Dropbox</strong>
                      <span>Cloud file storage and syncing</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/twitter_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Twitter</strong>
                      <span>Bring tweets into devchat.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/17670668547_3b5cda05986fc6c0d978_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Simple Poll</strong>
                      <span>Create native and simple polls in devchat.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/service_72 (1).png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Google Calendar</strong>
                      <span>A shared calendar for your team.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/hangouts_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Google+ Hangouts</strong>
                      <span>Bring your conversations to life with free video calls.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/130976277813_a8ab564623726e14ea32_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Workast</strong>
                      <span>To-dos, task and project manager for devchat teams</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/101273840518_6a9119a0601c8509247c_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>IFTTT</strong>
                      <span>Automated connections between web services.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/200850512066_2d5e268a3b71c87f969c_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Zapier</strong>
                      <span>Easy automation for busy people</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/rss_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>RSS</strong>
                      <span>Automatically syndicated site content.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/41532123248_86c89d7c608b75bbd782_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Polly</strong>
                      <span>Polls and surveys in devchat 📊</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/service_72 (2).png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Microsoft OneDrive</strong>
                      <span>Quick access to your files from all your devices</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/288981919427_f45f04edd92902a96859_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>GitHub</strong>
                      <span>Get updates from the world’s leading development platform on devchat</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/493753869479_4b703f4119efe3d7d0ff_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Jira Cloud</strong>
                      <span>Easily connect Jira Cloud projects to your devchat channels</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/16747233735_cd6d563053f8079cd36f_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Gif Keyboard</strong>
                      <span>Choose and share the perfect GIF. Caption your favorites.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/service_72 (3).png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Box</strong>
                      <span>Securely store, share, and manage all your files</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/32656022455_3f51bd50630a4ea2a08b_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Kyber</strong>
                      <span>All-in-one task & project management, standup meetings, polls, surveys, todo lists and calendars inside devchat</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/service_72 (4).png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Hubot</strong>
                      <span>GitHub's scriptable chat bot.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/334235045829_1d1db85d6877560365df_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Bitbucket Cloud</strong>
                      <span>Get updates about your Bitbucket repositories and take action in devchat</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/361581500802_805517e7bd209d4189d4_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Teamline</strong>
                      <span>🚩 The simple project management tool for devchat</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/159746031889_77753ab40a2fa603bd53_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>InVision App</strong>
                      <span>Streamline your design workflow by bringing the feedback process right into devchat.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/245295805989_06e77af1bfb8e3c81d4d_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Zoom</strong>
                      <span>Easily start a Zoom video meeting directly from devchat.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/service_72 (5).png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Salesforce</strong>
                      <span>Search and view information from Salesforce in devchat.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/144221668546_9c44dbfe73488d4b8d5e_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Meekan Scheduling</strong>
                      <span>Schedule meetings, find a room, get reminders, manage calendars</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/384053245894_495b0d8bc7454e59a3c8_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Cisco Webex Meetings</strong>
                      <span>Start or join Webex video meetings from devchat.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/474008204773_946a31a43846271803a5_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>StandupIy</strong>
                      <span>Standup-Bot #1: Surveys & Text-Voice-Video Scrum Meetings</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/275879732834_2e4075f294f71c6bc9d0_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Eventbot Calendar</strong>
                      <span>Shared team calendar for devchat 📅</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/458684668640_b6e0feb5a3be66d465f4_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Geekbot</strong>
                      <span>Asynchronous standup meetings, Retrospectives & Culture surveys</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/300655353986_53957f8929256e832140_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Disco</strong>
                      <span>Disco makes it easy to celebrate your company culture and values</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/238810648614_7050c90574e7f953aa42_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Donut</strong>
                      <span>Meet coworkers for coffee + onboard new hires effortlessly.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/416861742148_9a4f2f5b0d2c7259bee8_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Slack Foundry</strong>
                      <span>A training app for Slack.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/service_72 (6).png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>BlueJeans</strong>
                      <span>Cloud-based video meetings for any device.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/49671169684_cbdc45293ab75ea06413_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>PagerDuty</strong>
                      <span>PagerDuty is your fastest path to incident resolution</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/297532298896_b38db12dd15a4aebf3d1_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Troops</strong>
                      <span>Update Salesforce, Create Alerts, Use Your Salesforce Reports in devchat 🚀  📈</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/341591994389_f9b34fbf501c8b52203d_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Asana</strong>
                      <span>Move work forward.</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                  <div className='app-browser-category-header'>
                    <img src={require('../../app/assets/images/403895177205_5bba247da24a9129c161_72.png')}/>
                    <div className='app-browser-app-container'>
                      <div className='app-browser-app-info'>
                      <strong>Zendesk</strong>
                      <span>View, create, and take action on support tickets from any devchat channel</span>
                      </div>
                      <button>Install</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BrowseApp;

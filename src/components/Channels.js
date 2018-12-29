import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemScroller from './MenuItemScroller';
import NotificationModal from './NotificationModal';
import BrowseChannels from './BrowseChannels';

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
            browseChannel: false
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
      }
    }

    setSelection(type, selection) {
      if (selection === 'show') {
        this.setState({ show: false, showChannel: type });
      } else if (selection === 'sort') {
        this.setState({ sort: false, sortChannel: type });
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
        const { font, edit, search, menu, notification, show, sort, showChannel, sortChannel, browseChannel } = this.state;

        return (
            <div className='channel'>
              {browseChannel ? <BrowseChannels showChannel={showChannel} sortChannel={sortChannel} toggleMenu={this.toggleMenu} setSelection={this.setSelection} sort={sort} show={show}/> : ''}
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
                          <div className='channels-fa-plus-circle'><i className="fas fa-plus-circle"></i></div>
                          <div className='create-a-channel'><i className="fas fa-caret-down"></i>Create a channel</div>
                      </div>
                      <div className='row-col-channels'># general</div>
                      <div className='row-col-channels'># hello</div>
                      <div className='row-col-channels'># random</div>
                      <div className='divider-2'></div>
                      <div className='row-col-channels-title'>
                          <span className='row-col-channels-direct-messages'>Direct Messages</span>
                          <div className='open-direct-message-1'><i className="fas fa-caret-down"></i>Open a direct message</div>
                          <div className='direct-fa-plus-circle'><i className="fas fa-plus-circle"></i></div>
                          <div className='open-direct-message-2'><i className="fas fa-caret-down"></i>Open a direct message</div>
                      </div>
                      <div className='row-col-channels'><i className="fas fa-heart"></i>slackbot</div>
                      <div className='row-col-channels'>
                          <div className='team-menu-user-online'></div>
                          <span>parkg748</span>
                          <p>(you)</p>
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
              </div>
            </div>
        );
    }
}

export default Channels;

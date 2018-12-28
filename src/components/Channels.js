import React from 'react';

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            font: '#a09a9f',
            edit: 'none',
            search: '#717274'
        };
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
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
        const { font, edit, search } = this.state;

        return (
            <div className='channel'>
                <div className='channel-left-sidebar'>
                    <div onMouseEnter={() => this._onMouseEnter('font')} onMouseLeave={() => this._onMouseLeave('font')} className='channel-left-header'>
                        <div className='channel-left-header-teamname'>
                            <div>
                                <span>Testing</span>
                                <i style={{ color: `${font}` }} className="channel-left-header-caret fas fa-angle-down"></i>
                            </div>
                            <i className="far fa-bell"></i>
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
                            <span className='row-col-channels-title-name'>Channels</span>
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
                </div>
            </div>
        );
    }
}

export default Channels;
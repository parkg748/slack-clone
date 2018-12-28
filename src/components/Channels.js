import React from 'react';

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            font: '#a09a9f',
        };
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
    }

    _onMouseEnter(type) {
        if (type === 'font') {
            this.setState({ [type]: 'white' });
        } 
    }

    _onMouseLeave(type) {
        if (type === 'font') {
            this.setState({ [type]: '#a09a9f' });
        }
    }

    render() {
        const { font} = this.state;

        return (
            <div>
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
                        <div className='browse-all-channels'><i className="fas fa-caret-down"></i>Browse all channels</div>
                        <div className='row-col-channels-title'>
                            <span className='row-col-channels-title-name'>Channels</span>
                            <div className='create-a-channel'><i className="fas fa-caret-down"></i>Create a channel</div>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <div className='row-col-channels'># general</div>
                        <div className='row-col-channels'># hello</div>
                        <div className='row-col-channels'># random</div>
                        <div className='divider-2'></div>
                        <div className='open-direct-message-1'><i className="fas fa-caret-down"></i>Open a direct message</div>
                        <div className='row-col-channels-title'>
                            <span className='row-col-channels-title-name'>Direct Messages</span>
                            <div className='open-direct-message-2'><i className="fas fa-caret-down"></i>Open a direct message</div>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <div className='row-col-channels'>slackbot</div>
                        <div className='row-col-channels'>parkg748</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Channels;
import React from 'react';
import { Link } from 'react-router-dom';

class MenuItemScroller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {


        return (
          <div className='menu-items-scroller'>
            <div className='devchat-menu-section'>
              <h2>
                <img />
                <span>parkg748</span>
              </h2>
              <ul>
                <li>Set a status…</li>
                <li>Profile & account</li>
                <li>Preferences</li>
                <li>Set yourself to<strong>away</strong></li>
                <li>Help & feedback</li>
              </ul>
            </div>
            <div className='devchat-menu-section'>
              <h2>
                <img />
                <div className='devchat-menu-section-container'>
                  <span>hello</span>
                  <p>hello-hnf8589.slack.com</p>
                </div>
              </h2>
              <div className='menu-list'>
                Your workspace is currently on devchat's
                <strong>free</strong>
                plan.
                <Link to='/'>See paid plans</Link>
              </div>
            </div>
            <div className='devchat-menu-section'>
              <ul>
                <li className='administration-container'><div className='administration'>Administration</div><i className="administration-arrow fas fa-angle-right"></i></li>
                <li>Invite people</li>
                <li>Analytics</li>
                <li>Customize devchat</li>
                <li>Sign out of <strong>hello</strong></li>
              </ul>
            </div>
            <div className='devchat-menu-section'>
              <ul>
                <li>Sign in to another workspace…</li>
              </ul>
            </div>
            <div className='devchat-menu-section'>
              <ul>
                <li className='open-devchat-app'>
                  <img />
                  <div className='open-devchat-app-content'>
                    <span>Open the Slack App</span>
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
    }
}

export default MenuItemScroller;

import React from 'react';
import { Link } from 'react-router-dom';

class NotificationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {


        return (
          <div className='notification-modal'>
            <div className='notification-menu-items'>
              <div className='pause-notifications'>Pause notifications</div>
              <ul>
                <li>30 minutes</li>
                <li>1 hour</li>
                <li>2 hours</li>
                <li>4 hours</li>
                <li>Until tomorrow</li>
                <li>Until next week</li>
                <li>
                  <span>Custom...</span>
                  <div className='custom-new'>NEW</div>
                </li>
              </ul>
              <hr></hr>
              <ul>
                <li>Do Not Disturb schedule...</li>
              </ul>
              <hr></hr>
              <ul>
                <li>Settings for <strong># testing</strong>...</li>
                <li>Your notification preferences...</li>
              </ul>
            </div>
          </div>
        );
    }
}

export default NotificationModal;

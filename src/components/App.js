import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  update(field) {
    return (e) => {
      if (field === 'input') {
        this.setState({ input: 'purple-border' });
      }
    }
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        <div className='header'>
          <div className='logo'>
            <img src={require('../app/assets/images/download.png')} />
            <div className='logo-name'>devchat</div>
            <div className='right-header'>
              <ul>
                <li>Why devchat?</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>
              </ul>
              <ul>
                <li>Sign In</li>
                <button>GET STARTED</button>
              </ul>
            </div>
          </div>
        </div>
        <div className='first-section'>
          <div className='first-section-inner'>
            <img src={require('../app/assets/images/illo-teamwork.png')}/>
            <div className='first-section-right'>
              <h1>Where Work Happens</h1>
              <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, devchat has you covered.</p>
              <div className='first-section-input'>
                <input className={`${input}`} onClick={() => this.update('input')} type='email' placeholder='Email address'/>
                <button>GET STARTED</button>
              </div>
              <p className='sign-in-disclaimer'>Already using devchat? <Link to='/'>Sign in.</Link></p>
            </div>
          </div>
        </div>
        <div className='second-section'>
          <div className='second-section-inner'>
            <h2>The hub for your team and your work</h2>
            <p>devchat is a place where your team comes together to collaborate, important information can be found by the right people, and your tools pipe in information when and where you need it.</p>
          </div>
          <div className='second-section-inner-bottom'>
            <div className='second-section-column-wrapper'>
              <div className='second-section-column'>
                <img className='convos' src={require('../app/assets/images/organized-convos@2x.png')}/>
                <p>Channels</p>
                <p className='second-section-column-content'>Communication in devchat happens in channels, organized by project, topic, team, or whatever makes sense for you.</p>
              </div>
              <div className='second-section-column'>
                <img className='binoculars' src={require('../app/assets/images/search-binoculars@2x.png')}/>
                <p>Search</p>
                <p className='second-section-column-content'>Conversations in devchat are searchable by everyone, so you can tap into company knowledge and find information when you need it.</p>
              </div>
              <div className='second-section-column'>
                <img className='gears' src={require('../app/assets/images/apps-gears@2x.png')}/>
                <p>Integrations</p>
                <p className='second-section-column-content'>devchat works with the tools and services you already use every day. Pipe in information or take action without leaving devchat.</p>
              </div>
              <div className='second-section-column'>
                <img className='lock' src={require('../app/assets/images/security-lock@2x.png')}/>
                <p>Security</p>
                <p className='second-section-column-content'>We take security seriously at devchat. We offer measures like 2FA and SSO to ensure the safety of your data and protect your organization.</p>
              </div>
            </div>
            <div className='second-section-learn-more'>Learn more about devchat features</div>
          </div>
        </div>
        <div className='third-section'>
          <div className='third-section-inner'>
            <h2>Built for every team</h2>
            <p>No matter your job title or department, Slack can help your team work together and get things done.</p>
          </div>
          <div className='third-section-inner-bottom'></div>
        </div>
      </div>
    );
  }
}
// (
//   <Grid columns='equal' className='app' style={{ background: '#eee' }}>
//     <ColorPanel />
//     <SidePanel />
//     <Grid.Column style={{ marginLeft: 320 }}>
//       <Messages /> 
//     </Grid.Column>
//     <Grid.Column width={4}>
//       <MetaPanel />
//     </Grid.Column>
//   </Grid>
// )

export default App;

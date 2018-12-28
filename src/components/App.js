import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      header: 'header-outer'
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY >= 427) {
      this.setState({ header: 'header-outer-fixed' });
    } else {
      this.setState({ header: 'header-outer' });
    }
  }

  update(field) {
    return (e) => {
      if (field === 'input') {
        this.setState({ input: 'purple-border' });
      }
    }
  }

  render() {
    const { input, header } = this.state;
    
    return (
      <div onScroll={this.handleScroll}>
        <div className={`${header}`}>
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
                  <li className='right-header-sign-in'><Link to='/signin'>Sign In</Link></li>
                  <button>GET STARTED</button>
                </ul>
              </div>
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
              <p className='sign-in-disclaimer'>Already using devchat? <Link to='/signin'>Sign in.</Link></p>
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
          <div className='third-section-inner-bottom'>
            <div className='third-section-inner-bottom-inner'>
              <div className='third-section-grid-box'>Sales <i className="arrow-1 fas fa-arrow-right"></i></div>
              <div className='third-section-grid-box'>Marketing <i className="arrow-2 fas fa-arrow-right"></i></div>
              <div className='third-section-grid-box'>Customer support <i className="arrow-3 fas fa-arrow-right"></i></div>
              <div className='third-section-grid-box'>Engineering <i className="arrow-4 fas fa-arrow-right"></i></div>
              <div className='third-section-grid-box'>IT <i className="arrow-5 fas fa-arrow-right"></i></div>
              <div className='third-section-grid-box'>HR <i className="arrow-6 fas fa-arrow-right"></i></div>
            </div>
          </div>
        </div>
        <div className='fourth-section'>
          <div className='fourth-section-inner'>
            <div className='fourth-section-inner-inner'>
              <h2>You're in good company</h2>
              <p>Millions of people around the world have already made devchat the place where their work happens.</p>
            </div>
            <div className='fourth-section-inner-bottom'>
              <div className='fourth-section-column'>
                <div className='fourth-section-column-header'>
                  <span>LVMH/Benefit Cosmetics</span>
                  <h3>Beautifying the world with a wink and smile (and devchat).</h3>
                </div>
                <img src={require('../app/assets/images/card_benefit.jpg')}/>
                <div className='fourth-section-read-story'>
                  <span>READ STORY</span>
                  <i className="fas fa-align-left"></i>
                </div>
              </div>
              <div className='fourth-section-column'>
                <div className='fourth-section-column-header'>
                  <span>Away</span>
                  <h3>Bringing the ideal suitcase to market with devchat.</h3>
                </div>
                <img src={require('../app/assets/images/card_away.jpg')}/>
                <div className='fourth-section-read-story'>
                  <span>READ STORY</span>
                  <i className="fas fa-align-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fifth-section'>
          <div className='fifth-section-header'>What’s new at devchat</div>
          <div className='fifth-section-inner'>
            <div className='fifth-section-inner-inner'>
              <div className='fifth-section-column'>
                <div>
                  <img src={require('../app/assets/images/blog-ICYMI-slack.jpg')}/>
                  <div className='fifth-section-column-content'>
                    <span>Blog</span>
                    <h3>In Case You Missed It: More control and convenience in devchat</h3>
                  </div>
                </div>
                <div className='fifth-section-read-story'>
                  <span>READ STORY</span>
                  <i className="fifth-section-read-story-arrow fas fa-arrow-right"></i>
                </div>
              </div>
              <div className='fifth-section-column'>
                <div>
                  <img src={require('../app/assets/images/ebook-sales-teams-slack.jpg')}/>
                  <div className='fifth-section-column-content'>
                    <span>eBook</span>
                    <h3>Getting Started with devchat for Sales teams</h3>
                  </div>
                </div>
                <div className='fifth-section-read-story'>
                  <span>GET EBOOK</span>
                  <i className="fifth-section-read-story-arrow fas fa-arrow-right"></i>
                </div>
              </div>
              <div className='fifth-section-column'>
                <div>
                  <img src={require('../app/assets/images/ebook-getting-started-with-marketing-slack.jpg')}/>
                  <div className='fifth-section-column-content'>
                    <span>eBook</span>
                    <h3>Getting Started with Slack for Marketing teams</h3>
                  </div>
                </div>
                <div className='fifth-section-read-story'>
                  <span>GET EBOOK</span>
                  <i className="fifth-section-read-story-arrow fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sixth-section'>
          <div className='sixth-section-inner'>
            <h3>Try devchat with your team for free</h3>
            <button>GET STARTED</button>
          </div>
        </div>
        <div className='footer'>
          <div className='footer-inner'>
            <img src={require('../app/assets/images/download.png')}/>
            <div className='footer-inner-right'>
              <div className='footer-inner-right-column'>
                <p>COMPANY</p>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Press</li>
                  <li>Brand Guidelines</li>
                </ul>
              </div>
              <div className='footer-inner-right-column'>
                <p>PRODUCT</p>
                <ul>
                  <li>Why devchat?</li>
                  <li>Enterprise</li>
                  <li>Customer Stories</li>
                  <li>Pricing</li>
                  <li>Security</li>
                  <li>devchat Demo</li>
                </ul>
              </div>
              <div className='footer-inner-right-column'>
                <p>RESOURCES</p>
                <ul>
                  <li>Download</li>
                  <li>Help Center</li>
                  <li>Guides</li>
                  <li>Partners</li>
                  <li>Events</li>
                  <li>App Directory</li>
                  <li>API</li>
                  <li>Gartner Report</li>
                  <li>eBooks</li>
                </ul>
              </div>
              <div className='footer-inner-right-column'>
                <p>EXTRAS</p>
                <ul>
                  <li>devchat Shop</li>
                  <li>devchat at Work</li>
                  <li>devchat Funds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-inner'>
            <ul>
              <li>Status</li>
              <li>Privacy & Terms</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>
                <select value='English'>
                  <option value='English'>English (US)</option>
                </select>
                <i className="fas fa-angle-down"></i>
              </li>
              <li className='margin-left'><i className="fab fa-twitter"></i></li>
              <li className='margin-left'><i className="fab fa-facebook"></i></li>
              <li className='margin-left'><i className="fab fa-youtube"></i></li>
              <li className='margin-left'><i className="fab fa-linkedin"></i></li>
            </ul>
          </div>
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

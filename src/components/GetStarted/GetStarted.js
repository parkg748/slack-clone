import React, { Component } from 'react';
import '../App.css';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
          <div className='get-started-header'>
            <img src={require('../app/assets/images/download.png')}/>
            <span onClick={() => this.props.history.push('/')}>devchat</span>
          </div>
          <div className='get-started-body'>
            <div className='get-started-body-inner'>
                <div className='get-started-body-inner-inner'>
                    <div className='get-started-body-inner-inner-inner'>
                        <div className='get-started-body-inner-inner-inner-inner'>
                            <h1>Start with a workspace</h1>
                            <p>In devchat, everything happens in a workspace. Like a virtual office building, a workspace is where your team can gather in devchat to communicate and get work done.</p>
                            <button onClick={() => this.props.history.push('/get-started/find')}>
                                <div className='find-your-devchat-workplace-icon'><i className="fas fa-search"></i></div>
                                <span>
                                    <strong>Find your devchat workspace</strong>
                                    <span>Join or sign in to existing workspaces.</span>
                                </span>
                                <i className="fas fa-angle-right"></i>
                            </button>
                            <button onClick={() => this.props.history.push('/get-started/create')} className='get-started-create-workspace'>
                                <div className='create-new-workplace-icon'><i className="fas fa-plus"></i></div>
                                <span>
                                    <strong>Create a new workspace</strong>
                                    <span>Get your company or organization on devchat.</span>
                                </span>
                                <i className="fas fa-angle-right"></i>
                            </button>
                        </div>
                        <div className='get-started-body-inner-bottom'></div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default GetStarted;

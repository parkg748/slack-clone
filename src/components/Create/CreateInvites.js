import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase';
import CreateTada from './CreateTada';

class CreateInvites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.name,
        email: this.props.email,
        channelDetail: this.props.channelDetail,
        channelsRef: firebase.database().ref('channels'),
        invites: [],
        close: ['none', 'none', 'none'],
        errors: [false, false, false],
        check: [false, false, false],
        idx: 3,
        invitesValid: false,
        button: '#e8e8e8',
        font: 'rgba(44,45,48,.75)',
        skip: false
    };
    this.addChannel = this.addChannel.bind(this);
    this.displayCloseButton = this.displayCloseButton.bind(this);
    this.hideCloseButton = this.hideCloseButton.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.addMoreInput = this.addMoreInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, type) {
    e.preventDefault();
    if (this.isFormValid(this.state)) {
        console.log('here')
        this.addChannel();
        this.setState({ button: '#008952', font: 'white' });
    }
    if (type === 'skip') {
        this.setState({ [type]: true });
    }
  }

  isFormValid = ({ invites }) => invites.every(el => el.includes('@'));

  addChannel() {
    const { email, channelDetail, channelsRef, name, invites } = this.state;
    const key = channelsRef.push().key;
    const newChannel = {
        id: key,
        name,
        detail: channelDetail,
        invites,
        createdBy: {
            name: email
        }
    }
    channelsRef.child(key).update(newChannel);
    this.setState({ invitesValid: true });
  }

//   saveUser(createdUser) {
//     return this.state.usersRef.child(createdUser.user.uid).set({
//         name: createdUser.user.displayName,
//         avatar: createdUser.user.photoURL
//     });
// }

  addInvitee(field, idx) {
    return (e) => {
        let temp = this.state.invites;
        temp[idx] = e.target.value;
        let errors = this.state.errors;
        let check = this.state.check;
        this.setState({ [field]: temp });
        if (this.state.email === e.target.value) {
            errors[idx] = true;
            check[idx] = false;
        } else {
            errors[idx] = false;
            e.target.value.includes('@') ? check[idx] = true : check[idx] = false;
        }
        if (this.isFormValid(this.state)) {
            this.setState({ button: '#008952', font: 'white', errors, check });
        } else {
            this.setState({ button: '#e8e8e8', font: 'rgba(44,45,48,.75)', errors, check });
        }
    }
}

displayCloseButton(idx) {
    let close = this.state.close;
    close[idx] = '';
    this.setState({ close });
}

  hideCloseButton(idx) {
    let close = this.state.close;
    close[idx] = 'none';
    this.setState({ close });
  }

  addMoreInput() {
    let close = this.state.close;
    close.push('none');
    this.setState({ idx: this.state.idx + 1 });
  }

  deleteInput(idx) {
    let invites = this.state.invites;
    invites = [...invites.slice(0, idx), ...invites.slice(idx + 1)];
    let close = this.state.close;
    close = [...close.slice(0, idx), ...close.slice(idx + 1)];
    let errors = this.state.errors;
    errors = [...errors.slice(0, idx), ...errors.slice(idx + 1)];
    this.setState({ idx: this.state.idx - 1, invites, close, errors });
  }

  render() {
    const { name, email, channelDetail, invites, close, idx, invitesValid, errors, check, button, font, skip, channelsRef } = this.state;

    let inputBox = [];
    let j = 105;
    for (let i = 0; i < idx; i++) {
        inputBox.push(<div className='invites-box-error' onMouseEnter={(e) => this.displayCloseButton(i)} onMouseLeave={(e) => this.hideCloseButton(i)}>
            {errors[i] ? <div>
                <input className='red-border' onChange={this.addInvitee('invites', i)} type='email' placeholder='name@example.com' value={invites[i]}/>
                <p>
                    <i className="red-border-icon fas fa-exclamation-triangle"></i>
                    <span>Oops! That looks like an invalid email address!</span>
                </p>
            </div> : <div className='invites-box' onMouseEnter={(e) => this.displayCloseButton(i)} onMouseLeave={(e) => this.hideCloseButton(i)}>
                <input onChange={this.addInvitee('invites', i)} type='email' placeholder='name@example.com' value={invites[i]}/>
                {check[i] ? <i className="fas fa-check"></i> : ''}
                </div>}
            <i onClick={() => this.deleteInput(i)} style={{ display: `${close[i]}`, top: `${j}px` }} className='fas fa-times'></i>
        </div>);
        errors[i] ? j += 106 : j += 60;
    }

    if (invitesValid) {
        return skip ? <CreateTada channelsRef={channelsRef} name={name} email={email} channelDetail={channelDetail} invites={[]}/> : <CreateTada channelsRef={channelsRef} name={name} email={email} channelDetail={channelDetail} invites={invites}/>;
    }
    return (
      <div className='team-name'>
        <div className='get-started-header'>
            <img src={require('../../app/assets/images/download.png')}/>
            <span onClick={() => this.props.history.push('/')}>devchat</span>
        </div>
        <div className='team-name-body'>
            <div className='teamname-left-sidebar'>
                <div className='invites-left-sidebar-body'>
                    <h1>Who else is working on this project?</h1>
                    {inputBox}
                    <div className='invites-add-another'>
                        <i className="fas fa-plus-circle"></i>
                        <span onClick={() => this.addMoreInput()}>Add another</span>
                    </div>
                    <div className='invites-submit'>
                        <button onClick={(e) => this.handleSubmit(e, 'add')} style={{ color: `${font}`, backgroundColor: `${button}` }}>Add Teammates</button>
                        <div className='invites-skipfornow'>Or, <a onClick={(e) => this.handleSubmit(e, 'skip')}>skip for now</a></div>
                    </div>

                </div>
            </div>
            <div className='teamname-right-sidebar'>
                <div className='teamname-template'>
                    <div className='channelname-template-left'>
                        <div className='channelname-template-left-first-line'>{name}</div>
                        <div className='invites-template-left-second-line'>Channels</div>
                        <span className='invites-template-first-hash'>#</span><div className='invites-template-left-third-line'>{channelDetail}</div>
                        <div className='invites-green-bar'></div>
                        <span className='channelname-template-second-hash'>#</span><div className='channelname-template-left-fourth-line'></div>
                        <span className='channelname-template-third-hash'>#</span><div className='channelname-template-left-fifth-line'></div>
                        <div className='channelname-template-left-sixth-line'></div>
                        <div className='channelname-bullet-first'></div><div className='channelname-template-left-seventh-line'></div>
                        <div className='channelname-bullet-second'></div><div className='channelname-template-left-eighth-line'></div>
                        <div className='channelname-bullet-third'></div><div className='channelname-template-left-ninth-line'></div>
                    </div>
                    <div className='teamname-template-right'>
                        <div className='invites-template-right-first-line'>#{channelDetail}</div>
                        <div className='teamname-template-right-second-line'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CreateInvites;

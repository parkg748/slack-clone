import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import firebase from './components/firebase';
import 'semantic-ui-css/semantic.min.css'
import { setUser, clearUser, setCurrentChannel } from './actions/index';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import Spinner from './Spinner';
import Signin from './components/Signin';
import Create from './components/Create/Create';
import GetStarted from './components/GetStarted/GetStarted';
import GetStartedCreate from './components/GetStarted/GetStartedCreate';
import CreateConfirmEmail from './components/CreateConfirmEmail';
import GetStartedFind from './components/GetStarted/GetStartedFind';
import SigninTemp from './components/SigninTemp';
import Channels from './components/Channels';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.setUser(user);
            } else {
                this.props.clearUser();
            }
        });
        window.getState = store.getState;
        window.dispatch = store.dispatch;
    }

    render() {
        return this.props.isLoading ? <Spinner /> : (
            <Switch>
                <Route path='/channel' component={Channels}/>
                <Route path='/create/confirmemail' component={CreateConfirmEmail}/>
                <Route path='/create' component={Create}/>
                <Route path='/get-started/create' component={GetStartedCreate}/>
                <Route path='/get-started/find' component={GetStartedFind}/>
                <Route path='/get-started' component={GetStarted}/>
                <Route path='/signin/temp' component={SigninTemp}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/' component={App}/>
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.currentUser,
        channel: state.channel.currentChannel
    }
}

const RootWithAuth = withRouter(connect(mapStateToProps, { setUser, clearUser, setCurrentChannel })(Root));

ReactDOM.render(<Provider store={store}>
    <Router>
        <RootWithAuth />
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();

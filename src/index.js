import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import firebase from './components/firebase';
import 'semantic-ui-css/semantic.min.css'
import { setUser, clearUser } from './actions/index';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import Spinner from './Spinner';
import Signin from './components/Signin';
import Create from './components/Create';
import GetStarted from './components/GetStarted';

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
    }

    render() {
        return this.props.isLoading ? <Spinner /> : (
            <Switch>
                <Route path='/create' component={Create}/>
                <Route path='/get-started' component={GetStarted}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/' component={App}/>
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(connect(mapStateToProps, { setUser, clearUser })(Root));

ReactDOM.render(<Provider store={store}>
    <Router>
        <RootWithAuth />
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();

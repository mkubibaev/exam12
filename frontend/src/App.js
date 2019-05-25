import React, {Component, Fragment} from 'react';
import {NotificationContainer} from "react-notifications";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Container} from "reactstrap";

import {logoutUser} from "./store/actions/usersActions";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Photos from "./containers/Photos/Photos";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import NewPhoto from "./containers/NewPhoto/NewPhoto";

class App extends Component {

    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    <Toolbar
                        user={this.props.user}
                        logout={this.props.logoutUser}
                    />
                </header>
                <Container className="py-4">
                    <Switch>
                        <Route path="/" exact component={Photos}/>
                        <Route path="/users/:user" component={Photos}/>
                        <Route path="/photos/new" component={NewPhoto}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

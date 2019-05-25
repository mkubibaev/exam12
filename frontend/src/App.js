import React, {Component, Fragment} from 'react';
import {NotificationContainer} from "react-notifications";
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";

import Toolbar from "./components/UI/Toolbar/Toolbar";
import Photos from "./Photos/Photos";

class App extends Component {

    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    <Toolbar/>
                </header>
                <Container className="py-4">
                    <Switch>
                        <Route path="/" exact component={Photos}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

export default App;

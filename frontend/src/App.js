import React, {Component, Fragment} from 'react';
import {NotificationContainer} from "react-notifications";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    toolbar
                </header>
                <Container className="py-5">
                    <Switch>
                        {/*<Route path="/" exact component={}/>*/}
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

export default App;

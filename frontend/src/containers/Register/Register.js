import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Alert, Button, Form, FormGroup} from "reactstrap";

import {registerUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/Form/FormElement";


class Register extends Component {
    state = {
        displayName: '',
        username: '',
        password: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.registerUser({...this.state});
    };

    getFieldHasError = fieldName => {
        return (
            this.props.error &&
            this.props.error.errors &&
            this.props.error.errors[fieldName] &&
            this.props.error.errors[fieldName].message
        );
    };

    render() {
        return (
            <Fragment>
                <h3 className="my-3 text-center">Sign up</h3>
                <div className="box user-form p-4">
                    {this.props.error && this.props.error.global && (
                        <Alert color="danger">
                            {this.props.error.global}
                        </Alert>
                    )}
                    <Form onSubmit={this.submitFormHandler}>
                        <FormElement
                            propertyName="displayName"
                            type="text"
                            value={this.state.fullname}
                            onChange={this.inputChangeHandler}
                            error={this.getFieldHasError('displayName')}
                            placeholder="Your full name"
                            autoComplete="new-displayName"
                        />

                        <FormElement
                            propertyName="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            error={this.getFieldHasError('username')}
                            placeholder="Enter new username"
                            autoComplete="new-username"
                        />

                        <FormElement
                            propertyName="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                            error={this.getFieldHasError('password')}
                            placeholder="Enter new password"
                            autoComplete="new-password"
                        />

                        <FormGroup className="mb-0 mt-4">
                            <Button type="submit" color="info" className="w-100">Register</Button>
                        </FormGroup>
                    </Form>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, {Component} from 'react';
import {Button, Form} from "reactstrap";
import FormElement from "../UI/Form/FormElement";

class PhotoForm extends Component {
    state = {
        title: '',
        image: null,
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    getFieldHasError = fieldName => {
        return (
            this.props.error &&
            this.props.error.errors &&
            this.props.error.errors[fieldName] &&
            this.props.error.errors[fieldName].message
        );
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            if (this.state[key]) {
                formData.append(key, this.state[key]);
            }
        });

        this.props.addPhoto(formData);
    };

    render() {
        return (
            <div className="box p-3">
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="title"
                        title="Photo title:"
                        type="text"
                        value={this.state.title}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldHasError('title')}
                    />

                    <FormElement
                        propertyName="image"
                        title="Image:"
                        type="file"
                        onChange={this.fileChangeHandler}
                        error={this.getFieldHasError('image')}
                    />

                    <Button type="submit" color="info">Save</Button>

                </Form>
            </div>
        );
    }
}

export default PhotoForm;

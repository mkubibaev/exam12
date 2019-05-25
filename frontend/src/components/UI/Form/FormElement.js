import React, {Fragment} from 'react';
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";

const FormElement = props => {
    return (
        <FormGroup>
            {props.title && <Label for={props.propertyName}>{props.title}</Label>}
            <Input
                type={props.type}
                id={props.propertyName}
                name={props.propertyName}
                value={props.value}
                invalid={!!props.error}
                onChange={props.onChange}
                required={props.required}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
            >
                {props.selectOptions
                    ?   <Fragment>
                        <option value="">Please select category...</option>
                        {props.selectOptions.map(option => (
                            <option key={option._id} value={option._id}>{option.title}</option>
                        ))}
                    </Fragment>
                    :   null
                }
            </Input>
            {props.error && (
                <FormFeedback>
                    {props.error}
                </FormFeedback>
            )}
        </FormGroup>
    );
};

export default FormElement;

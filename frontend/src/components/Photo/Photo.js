import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import {apiURL} from "../../constants";

const Photo = props => {
    return (
        <Col xs="12" sm="6" md="4">
            <Card className="mb-3">
                <CardImg top width="100%" src={`${apiURL}/uploads/${props.image}`} alt={props.title}/>
                <CardBody>
                    <h4>
                        <CardTitle
                            tag={RouterNavLink}
                            to={`/items/${props.id}`}
                        >
                            {props.title}
                        </CardTitle>
                    </h4>
                    <CardText>
                        <span className="mr-1">by</span>
                        <RouterNavLink to={`/users/${props.user._id}`}>
                            {props.user.displayName}
                        </RouterNavLink>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Photo;

import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import {apiURL} from "../../constants";

const Photo = props => {
    const user = props.user;
    const author = props.author;

    return (
        <Col xs="12" sm="6" md="4">
            <Card className="mb-3">
                <CardImg
                    top width="100%"
                    src={`${apiURL}/uploads/${props.image}`}
                    alt={props.title}
                    onClick={props.showPhoto}
                />
                <CardBody>
                    <CardTitle>
                        <h4 onClick={props.showPhoto}>{props.title}</h4>
                    </CardTitle>

                    {props.userPage
                        ? user._id === author._id
                            ? <Button color="danger" onClick={props.deletePhoto}>Delete</Button>
                            : null

                        : <CardText>
                            <span className="mr-1">by</span>
                            <RouterNavLink to={`/users/${author._id}`}>
                                {author.displayName}
                            </RouterNavLink>
                        </CardText>
                    }

                </CardBody>


            </Card>
        </Col>
    );
};

export default Photo;

import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Modal, ModalBody, ModalFooter, Row} from "reactstrap";

import {apiURL} from "../constants";
import {fetchPhotos} from "../store/actions/photosActions";
import Loader from "../components/UI/Loader/Loader";
import Photo from "../components/Photo/Photo";

class Photos extends Component {
    state = {
        modal: false,
        selectedPhoto: {}
    };

    componentDidMount() {
        this.props.fetchPhotos(this.props.match.params.user);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.user !== prevProps.match.params.user) {
            this.props.fetchPhotos(this.props.match.params.user);
        }
    };

    toggleModal = selectedPhoto => {
        this.setState({
            modal: !this.state.modal,
            selectedPhoto
        });
    };

    render() {
        let title = 'All photos';

        if (this.props.photos.length && this.props.match.params.user) {
            title = `Photos by ${this.props.photos[0].user.displayName}`
        }

        return (
            <Fragment>
                <h3 className="mb-3">{title}</h3>

                {this.props.loading && <Loader/>}

                <Row>
                    {this.props.photos.map(photo => {
                        let user = photo.user;

                        if (this.props.match.params.user) {
                            user = null;
                        }

                        return (
                            <Photo
                                key={photo._id}
                                title={photo.title}
                                image={photo.image}
                                user={user}
                                toggleModal={() => this.toggleModal(photo)}
                            />
                        )
                    })}
                </Row>
                <Modal isOpen={this.state.modal} size="lg">
                    <ModalBody>
                        <img width="100%" src={`${apiURL}/uploads/${this.state.selectedPhoto.image}`} alt=""/>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <h5 className="m-0">{this.state.selectedPhoto.title}</h5>
                        <Button color="secondary" size="sm" onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    photos: state.photos.photos,
    error: state.photos.error,
    loading: state.photos.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPhotos: user => dispatch(fetchPhotos(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

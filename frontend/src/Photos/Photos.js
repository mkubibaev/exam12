import React, {Component} from 'react';
import {connect} from "react-redux";
import {Row} from "reactstrap";

import {fetchPhotos} from "../store/actions/photosActions";
import Loader from "../components/UI/Loader/Loader";
import Photo from "../components/Photo/Photo";

class Photos extends Component {
    componentDidMount() {
        this.props.fetchPhotos(this.props.user);
    }

    render() {
        return (
            <Row>
                {this.props.loading && <Loader/>}

                {this.props.photos.map(photo => (
                    <Photo
                        key={photo._id}
                        title={photo.title}
                        image={photo.image}
                        user={photo.user}
                    />
                ))}
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    photos: state.photos.photos,
    error: state.photos.error,
    loading: state.photos.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPhotos: user => dispatch(fetchPhotos(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {addPhoto} from "../../store/actions/photosActions";
import PhotoForm from "../../components/PhotoForm/PhotoForm";

class NewPhoto extends Component {
    render() {
        return (
            <Fragment>
                <h3 className="mb-3">Add new photo</h3>
                <PhotoForm
                    addPhoto={this.props.addPhoto}
                    error={this.props.error}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.photos.error
});

const mapDispatchToProps = dispatch => ({
    addPhoto: photoData => dispatch(addPhoto(photoData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPhoto);

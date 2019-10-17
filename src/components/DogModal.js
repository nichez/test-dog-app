import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import Spinner from './Spinner/Spinner';
import * as actions from '../store/actions/index';
import './Dog.css';


class DogModal extends Component {
    componentDidMount() {
        this.props.onFetchRandomImageByBreed(this.props.breed);
    }

    render() {
        let image = <Spinner />;

        if (!this.props.loadingModal && this.props.randomImgUrl) {
            image = <img className="card-img-top" src={this.props.randomImgUrl} alt="" />;
        }

        return (
            <Modal show={this.props.show} onHide={this.props.onHide} size="md" animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">{this.props.breed}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {image}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        randomImgUrl: state.randomImgUrl,
        loadingModal: state.loadingModal,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRandomImageByBreed: (breed) => dispatch(actions.fetchRandomImageByBreed(breed))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogModal);
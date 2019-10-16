import React, { Component } from 'react';
import { connect } from 'react-redux';

import DogCard from '../components/DogCard';
import Spinner from '../components/Spinner/Spinner';
import * as actions from '../store/actions/index';

const dogs = [];

class Dashboard extends Component {
    componentDidMount() {
        this.props.onFetchBreeds();
    }

    render() {
        if (this.props.dogsUrl) {
            this.props.dogsUrl.map(dogUrl =>
                dogs.push(<DogCard breed={this.props.breed} url={dogUrl.message} key={dogUrl.message} />)
            );
        }

        return (
            <React.Fragment>
                <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Dog Breeds</h1>

                <hr className="mt-2 mb-5" />

                <div className="row text-center text-lg-left">
                    {!this.props.loading && this.props.dogsUrl ? dogs : <Spinner />}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        breeds: state.breeds,
        breed: state.breed,
        dogsUrl: state.dogsUrl,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchBreeds: () => dispatch(actions.fetchBreeds())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
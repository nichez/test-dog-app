import axios from 'axios';

import * as actionTypes from './actionTypes';

// const dogsUrl = [];

// Fetch all breeds
export const fetchBreedsStart = () => {
    return {
        type: actionTypes.FETCH_BREEDS_START
    };
};

export const fetchBreedsSuccess = (breeds) => {
    return {
        type: actionTypes.FETCH_BREEDS_SUCCESS,
        breeds: breeds
    };
};

export const fetchBreedsFail = (error) => {
    return {
        type: actionTypes.FETCH_BREEDS_FAIL,
        error: error
    };
};

export const fetchBreeds = () => {
    return dispatch => {
        dispatch(fetchBreedsStart());
        const url = 'https://dog.ceo/api/breeds/list/all';

        axios.get(url)
            .then(response => {
                const fetchedBreeds = [];
                for (let key in response.data.message) {
                    fetchedBreeds.push({
                        ...response.data[key],
                        name: key
                    });
                }
                dispatch(fetchBreedsSuccess(fetchedBreeds));
                return fetchedBreeds;
            })
            .then(response => {
                for (let key in response) {
                    dispatch(fetchByBreed(response[key].name));
                }
            })
            .catch(error => {
                dispatch(fetchBreedsFail(error));
            });
    };
};

// Fetch by breed
export const fetchByBreedStart = () => {
    return {
        type: actionTypes.FETCH_BY_BREED_START
    };
};

export const fetchByBreedSuccess = (breed, dogsUrl) => {
    return {
        type: actionTypes.FETCH_BY_BREED_SUCCESS,
        breed: breed,
        dogsUrl: dogsUrl
    };
};

export const fetchByBreedFail = (error) => {
    return {
        type: actionTypes.FETCH_BY_BREED_FAIL,
        error: error
    };
};

export const fetchByBreed = (breed) => {
    let dogsUrl = [];
    return dispatch => {
        dispatch(fetchByBreedStart());
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;

        axios.get(url)
            .then(response => {
                dogsUrl.push({
                    ...response.data
                });
                dispatch(fetchByBreedSuccess(breed, dogsUrl));
            })
            .catch(error => {
                dispatch(fetchByBreedFail(error));
            });
    };
};

// Fetch random image by breed
export const fetchRandomImageByBreedStart = () => {
    return {
        type: actionTypes.FETCH_RANDOM_DOG_BY_BREED_START
    };
};

export const fetchRandomImageByBreedSuccess = (url) => {
    return {
        type: actionTypes.FETCH_RANDOM_DOG_BY_BREED_SUCCESS,
        randomImgUrl: url
    };
};

export const fetchRandomImageByBreedFail = (error) => {
    return {
        type: actionTypes.FETCH_RANDOM_DOG_BY_BREED_FAIL,
        error: error
    };
};

export const fetchRandomImageByBreed = (breed) => {
    return dispatch => {
        dispatch(fetchRandomImageByBreedStart());
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;

        axios.get(url)
            .then(response => {
                let url = response.data.message;
                dispatch(fetchRandomImageByBreedSuccess(url));
            })
            .catch(error => {
                dispatch(fetchRandomImageByBreedFail(error));
            });
    };
};
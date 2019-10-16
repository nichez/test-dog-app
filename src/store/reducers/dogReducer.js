import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    breeds: null,
    breed: null,
    dogsUrl: null,
    randomImgUrl: null,
    loading: false,
    loadingModal: false,
    error: null
};

// Fetch all breeds
const fetchBreedsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const fetchBreedsSuccess = (state, action) => {
    return updateObject(state, {
        breeds: action.breeds,
        error: null,
        loading: false
    });
};

const fetchBreedsFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
};

// Fetch by breed
const fetchByBreedStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const fetchByBreedSuccess = (state, action) => {
    return updateObject(state, {
        breed: action.breed,
        dogsUrl: action.dogsUrl,
        error: null,
        loading: false
    });
};

const fetchByBreedFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
};

// Fetch random image by breed
const fetchRandomImageByBreedStart = (state, action) => {
    return updateObject(state, { error: null, loadingModal: true });
};

const fetchRandomImageByBreedSuccess = (state, action) => {
    return updateObject(state, {
        randomImgUrl: action.randomImgUrl,
        error: null,
        loadingModal: false
    });
};

const fetchRandomImageByBreedFail = (state, action) => {
    return updateObject(state, { loadingModal: false, error: action.error });
};

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BREEDS_START: return fetchBreedsStart(state, action);
        case actionTypes.FETCH_BREEDS_SUCCESS: return fetchBreedsSuccess(state, action);
        case actionTypes.FETCH_BREEDS_FAIL: return fetchBreedsFail(state, action);
        case actionTypes.FETCH_BY_BREED_START: return fetchByBreedStart(state, action);
        case actionTypes.FETCH_BY_BREED_SUCCESS: return fetchByBreedSuccess(state, action);
        case actionTypes.FETCH_BY_BREED_FAIL: return fetchByBreedFail(state, action);
        case actionTypes.FETCH_RANDOM_DOG_BY_BREED_START: return fetchRandomImageByBreedStart(state, action);
        case actionTypes.FETCH_RANDOM_DOG_BY_BREED_SUCCESS: return fetchRandomImageByBreedSuccess(state, action);
        case actionTypes.FETCH_RANDOM_DOG_BY_BREED_FAIL: return fetchRandomImageByBreedFail(state, action);
        default: return state;
    }
}

export default dogReducer;
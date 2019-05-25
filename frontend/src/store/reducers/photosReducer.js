import {
    ADD_DATA_FAILURE,
    ADD_DATA_REQUEST, ADD_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_PHOTOS_SUCCESS, GET_AUTHOR_SUCCESS, RESET_AUTHOR
} from "../actions/actionTypes";

const initialState = {
    photos: [],
    author: '',
    loading: true,
    error: null
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {...state, loading: true};

        case FETCH_DATA_FAILURE:
            return {...state, loading: false, error: action.error};

        case FETCH_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.photos};

        case GET_AUTHOR_SUCCESS:
            return {...state, author: action.author};

        case RESET_AUTHOR:
            return {...state, author: ''};

        case ADD_DATA_REQUEST:
            return {...state, loading: true};

        case ADD_DATA_FAILURE:
            return {...state, loading: false, error: action.error};

        case ADD_DATA_SUCCESS:
            return {...state, error: null};

        default:
            return state
    }
};

export default photosReducer;

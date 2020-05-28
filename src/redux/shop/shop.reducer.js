import {shopTypes} from './shop.types';
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case shopTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case shopTypes.FETCH_COLLECTIONS_SUCCESS: {
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        }   
        case shopTypes.FETCH_COLLECTIONS_FAILURE: 
            return {
                ...state,
                isFetching: false,
            }
        default: return state
    }
}

export default collectionReducer;
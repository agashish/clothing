import {shopTypes} from './shop.types';
import {firestore, convertCollectionsToMap} from './../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
    type: shopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fecthCollectionsFailure = (errorMessage) => ({
    type: shopTypes.FECTH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

// EVERY FUNCTIONS ARE, IS AN ACTION CREATOR WHICH RETURNS A FUNCTION THATS GET OWN DISPATCHER LIKE AS mapDispatchToProps
export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionStart())

        // #### API CALL
        collectionRef.get().then(snapshot => {
            const tranformedCollection = convertCollectionsToMap(snapshot);      
            dispatch(fetchCollectionsSuccess(tranformedCollection));
        }).catch(err => {
            dispatch(fecthCollectionsFailure(err.message))
        })
    }
}
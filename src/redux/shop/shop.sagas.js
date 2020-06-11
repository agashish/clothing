import {take, takeEvery, call, put, delay, takeLatest} from 'redux-saga/effects';
import {shopTypes} from './shop.types';
import {firestore, convertCollectionsToMap} from './../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fecthCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const transformedCollection = yield call(convertCollectionsToMap, snapshot)
        yield put(fetchCollectionsSuccess(transformedCollection))
    } catch(error) {
        yield put(fecthCollectionsFailure(error))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        shopTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )    
}

export function* onIncrement() {
    yield console.log('I am on oncremented')
    // yield delay(5000)
    yield put({
        type: 'SHOP_INCREMENT_SAGA'
    })
}

// // Run only once
// export function* incrementSaga() {   
//     yield take('INCREMENT')
//     yield put({
//         type: 'SHOP_INCREMENT_SAGA'
//     })
//     console.log('Invoked')
// }

// Run Everytime
export function* incrementSaga() {   
    yield takeEvery('INCREMENT', onIncrement)    
    console.log('Invoked')
}

// // Run Only Latest
// export function* incrementSaga() {   
//     yield takeLatest('INCREMENT', onIncrement)    
//     console.log('Invoked')
// }
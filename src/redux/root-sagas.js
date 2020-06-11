import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart, incrementSaga} from './shop/shop.sagas';
import {userSagas} from './user/user.sagas.js';
import {cartSagas} from './cart/cart.sagas';

export default function* rootSagas() {
    yield all([
        call(fetchCollectionsStart),
        call(incrementSaga),
        call(userSagas),
        call(cartSagas)
    ])
}
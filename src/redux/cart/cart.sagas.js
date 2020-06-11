import {takeLatest, put, all, call} from 'redux-saga/effects';
import {clearCart} from './cart.actions';
import {userTypes} from './../user/user.types';

export function* clearCartSignOut() {
    yield put(clearCart())
}

export function* onCartClear() {
    yield takeLatest(
        userTypes.SIGN_OUT_SUCCESS,
        clearCartSignOut
    )
}

export function* cartSagas() {
    yield all([
        call(onCartClear)
    ])
}
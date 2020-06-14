import {takeLatest, put, all, call} from 'redux-saga/effects';
import {userTypes} from './user.types';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser, signOutFirebase} from './../../firebase/firebase.utils';
import {
    signInSuccess, 
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.action';

export function* signInWithMultipleLoginProvider(user, additionalData) {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get()  
    yield put(signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
    }))
}

export function* signUpWithFirebase(user, displayName) {
    const userRef = yield call(createUserProfileDocument, user, {displayName})
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
    }))
}

export function* signUpWithDetails({payload: {user, displayName}}) {
    yield console.log(user, displayName)
    yield call(signInWithMultipleLoginProvider, user, {displayName})
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield call(signInWithMultipleLoginProvider, user);
    } catch(error) {
        yield put(signInFailure(error))
    }
} 

export function* onGoogleSignInStart() {
    yield takeLatest(
        userTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    )
}

export function* emailSignInWithGoogle({payload: {email, password}}) {    
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield call(signInWithMultipleLoginProvider, user);
    }catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(
        userTypes.EMAIL_SIGN_IN_START,
        emailSignInWithGoogle
    )
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(signInWithMultipleLoginProvider, userAuth)
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(
        userTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* signOutEverywhere() {
    try {
        yield call(signOutFirebase);                    
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* onUserSignOut() {
    yield takeLatest(
        userTypes.SIGN_OUT_START,
        signOutEverywhere
    )
}

export function* signUpNow({payload: {email, password, displayName}}) {    
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess(user, displayName))
        // yield call(signUpWithFirebase, user, displayName)
    } catch(error) {
        yield put(signUpFailure(error))
    }
}
export function* onSignUpStart() {
    yield takeLatest(
        userTypes.SIGN_UP_START,
        signUpNow
    )
}

export function* onSignUpSuccessNow() {
    yield takeLatest(
        userTypes.SIGN_UP_SUCCESS,
        signUpWithDetails
    )
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onSignUpStart),
        call(onSignUpSuccessNow)
    ])
}
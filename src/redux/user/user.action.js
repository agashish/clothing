import {userTypes} from './user.types';

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user) => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: userTypes.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = emailAndPassword => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const signOutUser = () => ({
    type: userTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userTypes.SIGN_OUT_FAILURE,
    payload: error
})

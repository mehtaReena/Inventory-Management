import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./action-types"
import app from "../store/firebaseConfig";

export const loginSucess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginError = () => ({
    type: LOGIN_ERROR,
    error: 'email or password is invalid'
});

export const logoutSucess = () => ({
    type: LOGOUT_SUCCESS
});

export const logoutError = (error) => ({
    type: LOGOUT_ERROR,
    error: error
});

export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

export const signupErr = (error) => ({
    type: SIGNUP_ERROR,
    error: error
});

export const signUp = (email, password) => {
    return async function(dispatch) {
        try{
            await app.auth().createUserWithEmailAndPassword(email, password);
            dispatch(signupSuccess());
        }catch(error) {
            dispatch(signupErr(error.message));
        }
    }
}

export const signIn = (email, password) => {
    return async function(dispatch) {
        try {
            const userCredential = await app.auth().signInWithEmailAndPassword(email, password);
            dispatch(loginSucess(userCredential.user.email));
        }
        catch(error) {
            dispatch(loginError());
            console.log(error.message);
        }
    }
}

export const signOut = () => {
    return async function(dispatch) {
        try {
            await app.auth().signOut();
            dispatch(logoutSucess());
        }
        catch(err) {
            dispatch(logoutError(err));
        }
    }
}
import { LOGIN_ERROR, LOGIN_SUCCESS,LOGIN_IN_PROGRESS, LOGOUT_ERROR, LOGOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR  } from "../actions/action-types"
// import app from "../store/firebaseConfig";
// import Firebase from '../config/Firebase'
 import Firebase from "../store/firebaseConfig"
// const database=Firebase.firestore()

export const loginSucess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginprogress = () => ({
    type: LOGIN_IN_PROGRESS,
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
            await Firebase.auth().createUserWithEmailAndPassword(email, password);
            dispatch(signupSuccess());
        }catch(error) {
            dispatch(signupErr(error.message));
        }
    }
}

export const signIn = (email, password) => {
    console.log(" Inside in Sign")
    return async function(dispatch) {
        try {
            dispatch(loginprogress());
            const userCredential = await Firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("userCredential  "  , userCredential)
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
            await Firebase.auth().signOut();
            dispatch(logoutSucess());
        }
        catch(err) {
            dispatch(logoutError(err));
        }
    }
}
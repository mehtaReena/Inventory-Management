import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS, SET_CURRENT_USER, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../actions/actionTypes";

const initialState = {
    currentUser: null,
    signinError: null,
    signoutError: null,
    signupError: null,
    validate: false,
    confirm: false
}

export function userReducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, signinError: null, validate: true, currentUser: action.payload};
        case LOGIN_ERROR:
            return {...state, signinError: action.error};
        case SET_CURRENT_USER:
            return {...state, currentUser: action.payload};
        case LOGOUT_SUCCESS:
            return {...state, signoutError: null, validate: false};
        case LOGOUT_ERROR:
            return {...state, signoutError: action.error};
        case SIGNUP_SUCCESS:
            return {...state, signupError: null, confirm: true};
        case SIGNUP_ERROR:
            return {...state, signupError: action.error, confirm: false};
        default:
            return state;
    }
}
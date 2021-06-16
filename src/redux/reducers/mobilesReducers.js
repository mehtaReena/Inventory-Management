import { FETCH_MOBILES_SUCCESS, FETCH_MOBILES_INPROGRESS, FETCH_MOBILES_ERROR} from '../actions/actionTypes';

let initialState = {
    loading: false,
    error: null,
    mobiles: [],

};

export default function mobileReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOBILES_INPROGRESS:
            return { ...state, loading: true };
        case FETCH_MOBILES_SUCCESS:
            return { ...state, mobiles: action.payload, loading: false , error:null};
        case FETCH_MOBILES_ERROR:
            return { ...state, error: action.error };

            default:
                return state;
    }
}

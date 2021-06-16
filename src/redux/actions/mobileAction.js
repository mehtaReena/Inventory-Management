import * as  actions from './actionTypes'
import app from "../store/firebaseConfig";

export const fetchMobileInprogress = () => ({
    type: actions.FETCH_MOBILES_INPROGRESS,
});

export const fetchMobileSuccess = (data) => ({
    type:actions.FETCH_MOBILES_SUCCESS,
    payload: data
});

export const fetchMobilerror = (error) => ({
    type:actions.FETCH_MOBILES_ERROR,
    error: error
});



export const fetchMobiles = () => {
    console.log(" fetchMobiles")
    return async function(dispatch) {
        try {
            dispatch(fetchMobileInprogress());
            let getRequest = await app.collection('mobiles').get();
            let data = [];
            getRequest.docs.forEach((doc) =>
                data.push(doc.data()));
            if(data) {
                   console.log("data " , data)
                dispatch(fetchMobileSuccess(data));
            }
        }catch(err) {
            console.error(err.message);
            dispatch(fetchMobilerror());
        }
    }

}


export const addMobile = (mobileDetails) => {
    return async function(dispatch) {
        console.log("mobileDetails  ", mobileDetails)

        try {
            app.collection("trips").add(

                mobileDetails)
        } catch (error) {
            console.error(error);
        }

    }
}
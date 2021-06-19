import * as  actions from './action-types'
// import app from "../store/firebaseConfig";
// import {database} from "../store/firebaseConfig"
import Firebase from "../store/firebaseConfig"

const database=Firebase.firestore()

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



export const fetchMobiles = (category) => {
    console.log(" fetchMobiles" , category)
    return async function(dispatch) {
        try {
            dispatch(fetchMobileInprogress());
            let getRequest = await database.collection(category).get();
            let data = [];
            // console.log(" fetchMobiles" , getRequest)
            getRequest.docs.forEach((doc) =>
                data.push({...doc.data(),id:doc.id}));
            if(data) {
                   console.log("data " ,data)
                dispatch(fetchMobileSuccess(data));
            }
        }catch(err) {
            console.error(err.message);
            dispatch(fetchMobilerror());
        }
    }

}


export const addMobile = (mobileDetails , category) => {
    return async function(dispatch) {
        console.log("mobileDetails  ", mobileDetails , category)
        try {
            database.collection(category).add(

                mobileDetails)
        } catch (error) {
            console.error(error);
        }

    }
}


export const deleteFromDB = (category , id) => {
    return async function(dispatch) {
        console.log("ProductDetails  delete  ", category , id)
        try {
            database.collection(category).doc(id).delete()


        } catch (error) {
            console.error(error);
        }

    }
}

export const updateProduct = (category, qty ,id) => {
    return async function(dispatch) {
        console.log("updateProduct  ", category , qty)
        try {
            database.collection(category).doc(id).update(
               {quantity:qty}
               )
        } catch (error) {
            console.error(error);
        }

    }
}
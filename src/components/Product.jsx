import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchMobiles } from '../redux/actions/mobileAction';
import MobileCard from './ProductCard'
import Navbar from './Navbar'

function Mobiles(props) {
    let history= useHistory();
   let dispatch =useDispatch()
   let mobileState= useSelector(state=>state.mobileState)
   console.log("mobileState    " , mobileState)
    useEffect(() => {
        // Update the document title using the browser API
      console.log("use...")
      dispatch(fetchMobiles())

      },[]);





    const clickHandler=()=>{
        history.push("/addMobile");
    }


    return (
        <div>
           <Navbar/>
            <div className="mobile-container">
                {mobileState.loading ? (
                    <h3>Loading . . .</h3>
                ) : (
                    <>
                        {mobileState.mobiles.map((item) =>
                            <MobileCard
                                name={item.name}
                                url={item.image}
                                price={item.price}
                            />

                        )}
                    </>

                )}
            </div>


        </div>
    );
}

export default Mobiles;
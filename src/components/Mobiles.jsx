import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchMobiles } from '../redux/actions/mobileAction';
import MobileCard from './MobileCard'

function Mobiles(props) {
    let dispatch = useDispatch();
    const { mobiles, loading,error } = useSelector((state) => state.mobiles);
    console.log(" mobile ", mobiles)
    const history = useHistory();


    useEffect(() => {
        console.log("Inside Use Effect")
        dispatch(fetchMobiles())
        // eslint-disable-next-line
    }, []);

    const clickHandler=()=>{
        history.push("/addMobile");
    }


    return (
        <div>

            <div className="row">
                {loading ? (
                    <h3>Loading . . .</h3>
                ) : (
                    <>
                        {mobiles.map((item) =>
                            <MobileCard
                                name={item.name}
                            />

                        )}
                    </>

                )}
            </div>
            <button onClick={clickHandler}> Add mobile</button>

        </div>
    );
}

export default Mobiles;
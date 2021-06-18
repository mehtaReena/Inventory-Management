

import { useHistory } from "react-router";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMobiles } from '../redux/actions/mobileAction';
import ProductCard from './ProductCard'


function App() {
    const {validate} = useSelector(state => state.userState);

    const history = useHistory();
    let dispatch =useDispatch()

   let mobileState= useSelector(state=>state.mobileState)
   console.log("mobileState    " , mobileState)

    const clickHandler = () => {
        console.log( validate)
        if(validate) {
           history.push('/mobiles')

        }
    }

    const getData=(category) =>{
        dispatch(fetchMobiles(category))
    }

    return (
        <>

            <div className="container">
                  <Navbar/>
                  <div className="display">
                      <div className ="sidebar">

                          <div><button  value="mobiles" onClick={(e) => getData(e.target.value)} >Mobiles</button></div>
                          <div><button value ="laptops" onClick={(e) => getData(e.target.value)} >Laptops</button></div>
                          <div><button  value ="appliances" onClick={(e) => getData(e.target.value)} >Appliances</button></div>

                      </div>
                      <div className="detail-container">
                      <button className= "add" onClick={clickHandler}> Add Product</button>

                {mobileState.loading ? (
                    <h3>Loading . . .</h3>
                ) : (
                    <div className="details">
                        {mobileState.mobiles.map((item) =>
                            <ProductCard
                                name={item.name}
                                url={item.image}
                                price={item.price}
                            />

                        )}
                    </div>

                )}
            </div>
                      </div>
                  </div>


        </>
    );
}

export default App;

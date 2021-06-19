import { useHistory } from "react-router";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMobiles } from '../redux/actions/mobileAction';
import ProductCard from './ProductCard'
import { useEffect, useState } from "react";


function Products() {
    const {validate} = useSelector(state => state.userState);
    let [category, setCategory]=useState('mobiles');

    const history = useHistory();
    let dispatch =useDispatch()

   let mobileState= useSelector(state=>state.mobileState)
   console.log("mobileState    " , mobileState)

    const clickHandler = () => {
        console.log( validate)
        if(validate) {
           history.push('/addProduct')

        }
    }

    const getData=(category) =>{
        setCategory(category);
        dispatch(fetchMobiles(category))
    }
    useEffect(()=>{

        dispatch(fetchMobiles(category))
    // eslint-disable-next-line
    },[])

    return (
        <>

            <div className="container">
                  <Navbar/>
                  <div className="display">
                      <div className ="sidebar">

                          <div className="sidebar-category"><button  className="categoryIcon"  value="mobiles" onClick={(e) => getData(e.target.value)} >  📱 Mobiles</button></div>
                          <div className="sidebar-category"><button  className="categoryIcon" value="laptops" onClick={(e) => getData(e.target.value)} >  💻 Laptops</button></div>
                          <div className="sidebar-category"><button   className="categoryIcon"value ="appliances" onClick={(e) => getData(e.target.value)} >   📸  Appliances</button></div>

                      </div>
                      <div className="detail-container">
                      <button className= "add" onClick={clickHandler}> Add Product</button>

                {mobileState.loading ? (
                    <h3>Loading . . .</h3>
                ) : (
                    <div className="details">
                        {mobileState.mobiles.map((item) =>
                               <ProductCard
                                id={item.id}
                                name={item.name}
                                url={item.image}
                                price={item.price}
                                category={category}
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

export default Products;

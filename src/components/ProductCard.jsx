import React from 'react';
import '../styles.css'
import { useDispatch } from 'react-redux';
import { deleteFromDB } from '../redux/actions/mobileAction';
import { useHistory } from "react-router";
function ProductCard(props) {
    let dispatch= useDispatch();
    const history = useHistory();
    const deleteProduct=(id)=>{
         dispatch(deleteFromDB(props.category  , id))
         history.push("/products");
    }
    console.log( props.url)
    return (
        <div className='card'>
            <div className="image-div">
            <img src = {props.url} alt =''/>
            </div>
            <div className="cardInfo">
            <p>{props.name}</p>
            <p>{props.price}</p>
            <div>
                <button className= "deleteBtn" onClick={(e)=>deleteProduct(e.target.value)} value= {props.id}> Delete</button>
            </div>
            </div>



    </div>
    );

}

export default ProductCard;
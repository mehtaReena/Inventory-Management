import React from 'react';
import '../styles.css'
import { useDispatch } from 'react-redux';
import { deleteFromDB ,updateProduct } from '../redux/actions/mobileAction';
import { useHistory } from "react-router";
function ProductCard(props) {
    let dispatch= useDispatch();
    const history = useHistory();
    const deleteProduct=(id)=>{
         dispatch(deleteFromDB(props.category  , id))
         history.push("/products");
    }

    const addClickHandler= ()=>{
        dispatch(updateProduct(props.category  , props.qty+1 , props.id))
        history.push("/products");

    }

    const removeClickHandler= ()=>{
        dispatch(updateProduct(props.category  , props.qty-1 , props.id))
        history.push("/products");

    }
    console.log( props.url)
    return (
        <div className='card'>
            <div className="image-div">
            <img src = {props.url} alt =''/>
            </div>
            <div className="cardInfo">
            <p> <b>Product Name :</b> {props.name}</p>
            <p> <b>Price  :</b>{props.price}</p>
            <div className="quantity">

            <button className='add-product' onClick={addClickHandler} value={props.id}>+</button>
            <span className='amount' >  Quantity:{props.qty}</span>
                        <button className='remove-product' onClick={removeClickHandler}  value={props.id}>-</button>
                        </div>
            <div>

                <button className= "deleteBtn" onClick={(e)=>deleteProduct(e.target.value)} value= {props.id}> Delete</button>
            </div>
            </div>



    </div>
    );

}

export default ProductCard;
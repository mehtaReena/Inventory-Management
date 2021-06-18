import React from 'react';
import '../styles.css'

function ProductCard(props) {
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
                <button> Delete</button>
            </div>
            </div>



    </div>
    );

}

export default ProductCard;
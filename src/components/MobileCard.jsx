import React from 'react';

function MobileCard(props) {
    console.log( props.url)
    return (
        <div className='card'>
            <div className="image-div">
            <img src = {props.url} alt =''/>
            </div>
            <div>
            <p>{props.name}</p>
            <p>{props.price}</p>

            </div>
            <div>
                <button> Delete</button>
            </div>


    </div>
    );

}

export default MobileCard;
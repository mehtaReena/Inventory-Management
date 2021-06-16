import React, { useRef } from 'react';
import '../styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { addMobile } from '../redux/actions/mobileAction'

function AddMobile(props) {
    const inputRef = useRef({});
    let dispatch = useDispatch();


    const clickhandler = () => {
        const mobileDetails = {
            name: inputRef.current["name"].value,
            description: inputRef.current["description"].value,
            price: inputRef.current["price"].value
        };
        dispatch(addMobile(mobileDetails))


    }
    return (
        <div className='form-container'>

            <div className='mobileForm'>
                <h2> Add new Mobile </h2>
                <label >Name</label>
                <input type="text" name="name"
                    ref={(el) => (inputRef.current["name"] = el)} />

                <label >Description :</label>
                <textarea type="text" name="name"
                    ref={(el) => (inputRef.current["description"] = el)}
                    rows="3" cols="40" />

                <label >Price</label>
                <input type="text" name="price"
                    ref={(el) => (inputRef.current["price"] = el)} />

                    <label >image</label>
                <input type="text" name="image"
                    ref={(el) => (inputRef.current["image"] = el)} />
                <div>
                    <button className="button" onClick={clickhandler}> save </button>
                </div>


            </div>


        </div>
    );
}

export default AddMobile;
import React, { useRef } from 'react';
import '../styles.css'
import { useDispatch } from 'react-redux';
import { addMobile } from '../redux/actions/mobileAction'
import { useHistory } from "react-router";

function AddProduct(props) {
    const inputRef = useRef({});
    let dispatch = useDispatch();
   let  history= useHistory();



    const clickhandler = () => {
        const productDetails = {
            name: inputRef.current["name"].value,
            description: inputRef.current["description"].value,
            price: inputRef.current["price"].value,
            image :inputRef.current["image"].value
        };

        console.log("ADD product .." , productDetails)
         dispatch(addMobile(productDetails , inputRef.current["category"].value,));
         history.push('/products')


    }
    return (
        <div className='form-container'>

            <div className='mobileForm'>
                <h2 > Add new product </h2>
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
                <select className="category" name="category" ref={(el) => (inputRef.current["category"] = el)}>
                    <option value="mobiles">Mobiles</option>
                    <option value="laptops">Laptops</option>
                    <option value="appliances">Appliances</option>

                </select>


                <div>
                    <button className="button" onClick={clickhandler}> ➕ save </button>
                </div>


            </div>


        </div>
    );
}

export default AddProduct;
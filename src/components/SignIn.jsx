import React from 'react';
import { Link } from  "react-router-dom";

function SignIn(props) {
    return (
        <div>
            <div className='Container'>
               <div><Link to={'/laptops'} className='link'> laptops</Link>   </div>
               <div><Link to={'/mobiles'} className='link'> Mobiles </Link></div>
               <div><Link to={'/appliances'} className='link'> Appliances </Link></div>
           </div>

        </div>
    );
}

export default SignIn;

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/actions/userAction";
import Menus from "./Menus";
import { Link } from  "react-router-dom";

function Navbar() {
    const history = useHistory();
    const dispatch = useDispatch();

    const singIn = () => {
        history.push("/signin");
    }

    const signOut = () => {
        dispatch(signOut());
        history.push("/");
    }

    const {validate} = useSelector(state => state.userState);

    return(
        <div className='nav-bar'>
            <div className='user'>
            <Link to={`/`} className='link'> <h3>Hi </h3></Link>
            </div>

           <div className='nav-menu'>
               <div><Link to={'/laptops'} className='link'> laptops</Link>   </div>
               <div><Link to={'/mobiles'} className='link'> Mobiles </Link></div>
               <div><Link to={'/appliances'} className='link'> Appliances </Link></div>
           </div>
        </div>
    )
}


export default Navbar;
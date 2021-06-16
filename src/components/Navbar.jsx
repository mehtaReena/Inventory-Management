
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/actions/userAction";


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

    return (
        <nav>


                <button onClick={signOut}>signOut</button>

                <p onClick={singIn}>SignIn</p>
                  </nav>
    );
}


export default Navbar;
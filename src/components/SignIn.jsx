
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";

import { signIn } from "../redux/actions/userAction";


function SignIn() {
    const email = useRef();
    const password = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userState);
    const { signInError } = userState;
    console.log("   validated : ", userState);


    const clickhandler = () => {

        dispatch(signIn(email.current.value, password.current.value));

    };

    if (userState.validate) {
        console.log("   validated : ", userState.validate);
        history.push("/products/mobiles");

    }





    return (
        <>

            <div className="signin">
                <h3> Login </h3>
                <input
                    type="email"
                    name="email"
                    ref={email}
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    ref={password}
                    placeholder="password"
                />

                <button className="signInBtn" onClick={clickhandler}> ๐โโ๏ธ SignIn</button>
                {signInError ? <p>{signInError}</p> : null}
                <Link to="/signup">  ๐โโ๏ธCreate an account</Link>
            </div>
        </>
    );
}

export default SignIn;
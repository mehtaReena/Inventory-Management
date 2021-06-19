
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp, signupErr } from "../redux/actions/userAction";
import "../styles.css"
function SignUp() {
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const repassword = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const {signupError, confirm} = useSelector(state => state.userState);

    const clickhandler = () => {
        if(password.current.value !== repassword.current.value) {
            dispatch(signupErr('Password mismatch'));
            return;
        };

        dispatch(signUp(email.current.value, password.current.value ,name.current.value));
    }

    if(confirm) history.push("/");

    return (
        <div className="sign-up">
            <h4>Create account.</h4>
            <div className="SignUp-from">
            <input
                    type="text"
                    name="name"
                    ref={name}
                    placeholder="name"
                />
            <input type="email" ref={email} placeholder="email" />
            <div>
             <input type="password" ref={password} placeholder="password" />
            <input type="password" ref={repassword} placeholder="re-enter password" />
            </div>

            </div>
            <div>            <button className="sign-upbtn"onClick={clickhandler}>Sign-up</button></div>

            {signupError ? <p>{signupError}</p> : null}
        </div>
    )
}

export default SignUp;

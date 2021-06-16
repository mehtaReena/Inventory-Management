
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Navbar from "./Navbar";


function App() {
    const {validate} = useSelector(state => state.userState);
    const history = useHistory();

    const clickhandler = () => {
        if(validate) {

        }
    }

    return (
        <>

            <div className="container">
            {/* <Navbar /> */}
                <div className="center">

                    <div  onClick={clickhandler}>&#10140;</div>
                    <p className={validate ? '' : 'not-validated'}>Signed in...</p>
                </div>
            </div>
        </>
    );
}

export default App;


import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Navbar from "./Navbar";


function App() {
    const {validate} = useSelector(state => state.userState);
    const history = useHistory();

    const clickhandler = () => {
        console.log( validate)
        if(validate) {
           history.push('/mobiles')

        }
    }

    return (
        <>

            <div className="container">
                  <Navbar/>
                <div className="center">
                    <button  onClick={clickhandler}>&#10140; mobiles</button>
                    <p className={validate ? '' : 'not-validated'}>Signed in...</p>
                </div>
            </div>
        </>
    );
}

export default App;

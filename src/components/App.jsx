import { useHistory } from "react-router";
import Navbar from "./Navbar";


function App() {
    let history = useHistory();
    const clickHandler = () => {
        history.push("/signin");
    }


    return (
        <>

            <div className="container">
                <Navbar />
                <h1>Welcome to store</h1>
                <div className="homePage">
                    <div>
                        <button className="button homebtn" onClick={clickHandler}> login here</button>
                    </div>

                </div>
            </div>


        </>
    );
}

export default App;

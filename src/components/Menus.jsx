
import { NavLink } from "react-router-dom";

function Menus({ signOut }) {
    return (
        <div className="container">



            <ul id="menu">
                <NavLink to="/" activeStyle={{ textDecoration: "underline" }}>
                    Home
                </NavLink>
                <NavLink
                    to="/laptop"
                    activeStyle={{ textDecoration: "underline" }}
                >

                </NavLink>
                <NavLink
                    to="/moblie"
                    activeStyle={{ textDecoration: "underline" }}
                >
                    My Trips
                </NavLink>
                <NavLink
                    to=""
                    activeStyle={{ textDecoration: "underline" }}
                    onClick={signOut}
                >
                    SignOut
                </NavLink>
            </ul>
        </div>
    );
}

export default Menus;

import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import Appliances from "./components/Appliances";
import AddMobile from "./components/AddMobile";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/laptops" component={Laptops} />
                <Route exact path="/mobiles" component={Mobiles} />
                <Route exact path="/appliances" component={Appliances} />
                <Route exact path="/addMobile" component={AddMobile} />

            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);

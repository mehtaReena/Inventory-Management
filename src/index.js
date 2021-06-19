import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import AddProduct from "./components/AddProduct";
import Products from "./components/Products";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/addProduct" component={AddProduct} />
                <Route path='/products' component={Products} />

            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);

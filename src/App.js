import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import ProductContainer from "./views/products/ProductContainer";
import BurgerBuilder from "./containers/BurgerBulder/BurgerBuilder";
import Admin from "./views/admin/Admin";
import Review from "./views/review/review";
import UserContainer from "./views/users/UserContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/users">
              <UserContainer />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/products">
              <ProductContainer />
            </Route>

            <Route path="/review">
              <Review />
            </Route>

            <Route path="/burgerbuilder">
              <BurgerBuilder />
            </Route>

            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

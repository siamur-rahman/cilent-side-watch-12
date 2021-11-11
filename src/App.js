import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

}

  from "react-router-dom";
import AuthProvider from "./Components/contexts/AuthProvider";
import About from "./Components/pages/About/About";

import MyOrders from "./Components/pages/MyOrders/MyOrders";
import Error from "./Components/pages/Error/Error";
import Home from "./Components/pages/Home/Home";
import Login from "./Components/pages/Login/Login";
import PrivateRoute from "./Components/pages/PrivateRoute/PrivateRoute";
import Register from "./Components/pages/ReGister/Register";
import ServicesDetails from "./Components/pages/ServiceDetails/ServicesDetails";
import AddNewServices from "./Components/pages/AddNewServices/AddNewServices";

import AllServices from "./Components/pages/AllServices/AllServices";

import Payments from "./Components/pages/Payments/Payments";
import DashBoard from "./Components/pages/DashBoard/DashBoard/DashBoard/DashBoard";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/service">
            <AllServices></AllServices>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <PrivateRoute exact path="/home/:id">
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Payments></Payments>
          </PrivateRoute>
          <PrivateRoute path="/addNewService">
            <AddNewServices></AddNewServices>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router >
    </AuthProvider >
  );
}

export default App;

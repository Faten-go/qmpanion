import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { current } from "../JS/Actions/User";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(current);
    }, [])
  
    const isAuth = localStorage.getItem("token");
  
    if (isAuth) {
        return <Route component={Component} {...rest} />;
    }

  return <Redirect to="/login" />;

};

export default PrivateRoute;

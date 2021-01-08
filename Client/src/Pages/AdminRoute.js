import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { current } from "../JS/Actions/User";

const AdminRoute = ({ component: Component, ...rest }) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
      dispatch(current);
    }, [])
  
    const isAuth = localStorage.getItem("token");
  
    if (isAuth){
        if (user.role === "Admin") {
            return <Route component={Component} {...rest} />;
        }
        return <Redirect to="/" />;
    }

    return <Redirect to="/login" />;

};

export default AdminRoute;

import './App.css';
import React, { useEffect, useState } from 'react'
import Auth from './Pages/Auth/Auth'
import AuditDashboard from './Pages/AuditDashboard/AuditDashboard';
import AnomalieDashbord from './Pages/AnomalieDashboard/AnomalieDashbord';
import ActionCorrectiveDashbord from './Pages/ActionCorrectiveDashboard/ActionCorrectiveDashbord';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './Pages/HomeDashboard/Dashboard'
import User from './Pages/User/User';
import PrivateRoute from './Pages/PrivateRoute';
import { useDispatch } from "react-redux";
import { current } from "./JS/Actions/User";
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminRoute from './Pages/AdminRoute';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current);
  }, []);

  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/login" component={ Auth }/>
        
        <PrivateRoute exact path="/" component={ Dashboard }/>
        <PrivateRoute exact path="/audits" component={ AuditDashboard }/>
        <PrivateRoute exact path="/my-account" component= { User }/>
        <PrivateRoute exact path="/anomalies" component={ AnomalieDashbord }/>
        <PrivateRoute exact path="/actions-correctives" component={ ActionCorrectiveDashbord }/>
        <AdminRoute exact path="/Admin" component={ AdminDashboard }/>
      </Switch>
    </div>
  );
}

export default App;

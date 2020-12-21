import './App.css';
import React from 'react'
import Auth from './Pages/Auth/Auth'
import AuditDashboard from './Pages/AuditDashboard/AuditDashboard';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './Pages/HomeDashboard/Dashboard'



function App() {
  return (
    <div className="App">
    
      <Switch>
      <Route exact path="/" component={ Dashboard }/>
      <Route  path="/login" component={ Auth }/>
      <Route  path="/audits" component={ AuditDashboard }/>
      </Switch>
    </div>
  );
}

export default App;

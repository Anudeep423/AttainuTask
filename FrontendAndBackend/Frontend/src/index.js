import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';
import Login from "./Login"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Route , Switch , Link, BrowserRouter} from "react-router-dom"
import Dashboard from "./Dashboard"

ReactDOM.render(
 <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Register} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

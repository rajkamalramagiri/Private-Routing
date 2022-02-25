import React from 'react'
import { Redirect } from 'react-router-dom';
import {  Route, Link } from "react-router-dom";

function ProtectedRoute({component:Component,loggedIn,path, ...rest}) {
  if(loggedIn)
  return (
    <Route path={path} {...rest} component={Component}/>
  )
  else
  return(
  <Redirect  to='/'/>)
}

export default ProtectedRoute
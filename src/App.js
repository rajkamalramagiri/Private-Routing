import { Switch, Route, Link ,Redirect} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import {useState} from 'react'
import ProtectedRoute from "./ProtectedRoute";
import Error from "./Error";

function App() {
  const [loggedIn, setLoggedIn]=useState(false)
  return (
    <div>React Routing{" "}
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link>

      <Switch>
        <Route exact path="/" component={Home } />
        <Route path="/about" component={About} />
        <ProtectedRoute loggedIn={loggedIn} path="/profile" component={Profile} />
        <Redirect exact from="*" to="/" />
        {/* <Route path='*'  component={Error}/> */}
      </Switch>

    </div>
  );
}

export default App;

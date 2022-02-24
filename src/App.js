import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <div>React Routing{" "}
      <Link to="/">Home</Link> |{" "}

      <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;

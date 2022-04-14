import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./components/pages/HomePage";
import User from "./components/users/User";
import GithubState from "./context/github/githubState";

function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/user/:login" element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;

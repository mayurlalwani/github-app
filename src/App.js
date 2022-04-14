import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";
import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/Alert";
import HomePage from "./components/pages/HomePage";
import User from "./components/users/User";

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github" />
            <div className="container">
              <Alert />
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/user/:login" element={<User />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;

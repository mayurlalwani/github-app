import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./components/pages/HomePage";
import Repo from "./components/users/Repo";
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
              <Route exact path="/repo/:id" element={<Repo />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;

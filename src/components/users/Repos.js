import React, { useContext } from "react";
import { PulseLoader } from "react-spinners";
import GithubContext from "../../context/github/githubContext";
import RepoItem from "./RepoItem";

const Repos = () => {
  const githubContext = useContext(GithubContext);

  const { loading, repos } = githubContext;
  if (loading) {
    return (
      <div className={!loading ? "hide-loader" : "show-loader"}>
        <PulseLoader />
      </div>
    );
  } else {
    return (
      <>
        <div className="user-cards">
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </>
    );
  }
};

export default Repos;

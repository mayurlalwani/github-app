import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import GithubContext from "../../context/github/githubContext";
import BarChart from "./chart/BarChart";
import "./user.css";

const Repo = () => {
  const githubContext = useContext(GithubContext);
  const { loading, user, repos } = githubContext;

  const location = useLocation();
  const repoId = location.pathname.split("/")[2];

  const repoDetails = repos.filter((repo) => repo.id === parseInt(repoId));

  const { company, login } = user;

  const {
    full_name,
    owner,
    description,
    homepage,
    html_url,
    forks,
    open_issues,
    watchers,
    size,
  } = repoDetails[0];

  if (loading) {
    return (
      <div className={!loading ? "hide-loader" : "show-loader"}>
        <PulseLoader />
      </div>
    );
  }
  return (
    <div className="user-main-container">
      <Link to="/" className="btn btn-light">
        <Button variant="contained" sx={{ fontWeight: "bold", marginTop: 2 }}>
          Back to Search
        </Button>
      </Link>

      <div className="user-card-container">
        <div className="left-section">
          <img
            src={owner.avatar_url}
            className="round-img"
            style={{ width: 150, borderRadius: "50%" }}
            alt=""
          />
          <h1>Created By </h1>
          {owner && owner.login}
        </div>

        <div className="right-section">
          {full_name && (
            <>
              <h3>Repository name</h3>
              <p> {full_name} </p>
            </>
          )}

          {description && (
            <>
              <h3>Description</h3>
              <p> {description} </p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            View Code in Github
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username:</strong> {login}
                </>
              )}
            </li>

            <li>
              {company && (
                <>
                  <strong>Company:</strong> {company}
                </>
              )}
            </li>

            <li>
              {homepage && (
                <>
                  <strong>Website:</strong> {homepage}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      <BarChart
        forks={forks}
        openIssues={open_issues}
        watchers={watchers}
        size={size}
      />
    </div>
  );
};

export default Repo;

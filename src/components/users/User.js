import { Button, Card } from "@mui/material";
import React, { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import BarChart from "./chart/BarChart";
import "./user.css";
import { PulseLoader } from "react-spinners";

const User = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  const location = useLocation();
  const userName = location.pathname.split("/")[2];

  useEffect(() => {
    getUser(userName);
    getUserRepos(userName);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return (
      <div className={!loading ? "hide-loader" : "show-loader"}>
        <PulseLoader />
      </div>
    );
  }
  return (
    <>
      <Link to="/" className="btn btn-light" style={{ width: "15%" }}>
        <Button variant="text">Back to Search</Button>
      </Link>
      <div className="user-card-container">
        <div className="left-section">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: 150, borderRadius: "50%" }}
            alt=""
          />
          <h1>{name}</h1>
        </div>

        <div className="right-section">
          {bio && (
            <>
              <h3>Bio</h3>
              <p> {bio} </p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
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
              {blog && (
                <>
                  <strong>Website:</strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="user-card-container repo">
        <h4>Last 5 Repositories</h4>
        {repos.map((repo) => (
          <div className="repo-card">
            <Card
              sx={{
                width: "100%",
                margin: 1,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3>
                <a href={repo.html_url}> {repo.name} </a>
              </h3>
            </Card>
          </div>
        ))}
      </div>
      <BarChart
        followers={followers}
        following={following}
        publicRepos={public_repos}
        publicGists={public_gists}
      />
    </>
  );
};

export default User;

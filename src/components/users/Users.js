import React, { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { getAllUsers } = githubContext;

  useEffect(() => {
    getAllUsers();
  }, []);

  const { loading, users } = githubContext;
  if (loading) {
    return (
      <div className={!loading ? "hide-loader" : "show-loader"}>
        <PulseLoader />
      </div>
    );
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;

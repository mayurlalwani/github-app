import React, { useContext, useEffect } from "react";
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
    return "Loading...";
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

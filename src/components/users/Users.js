import React, { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { getAllUsers } = githubContext;

  useEffect(() => {
    getAllUsers();
    //eslint-disable-next-line
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
      <>
        <div className="user-cards">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  }
};

export default Users;

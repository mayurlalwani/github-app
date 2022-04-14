import React from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const HomePage = ({ match }) => {
  return (
    <>
      <Search />
      <Users />
    </>
  );
};

export default HomePage;

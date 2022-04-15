import React from "react";
import Repos from "../users/Repos";
import SearchUsers from "../users/Search";

const HomePage = () => {
  return (
    <>
      <SearchUsers />
      <Repos />
    </>
  );
};

export default HomePage;

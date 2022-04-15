import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "@mui/material";

const RepoItem = ({ key, repo }) => {
  return (
    <Card
      sx={{
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={repo.owner.avatar_url}
        className="round-img"
        alt="avatar"
        style={{ width: "60px" }}
      />
      <h3>{repo.full_name}</h3>
      <div>
        <Link to={`/repo/${repo.id}`}>
          <Button variant="text">View More</Button>
        </Link>
      </div>
    </Card>
  );
};

export default RepoItem;

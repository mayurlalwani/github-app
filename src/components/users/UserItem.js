import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "@mui/material";

const UserItem = (props) => {
  const { avatar_url, login } = props.user;
  return (
    <Card sx={{ minWidth: 300 }}>
      <img
        src={avatar_url}
        className="round-img"
        alt="avatar"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`}>
          <Button variant="text">View More</Button>
        </Link>
      </div>
    </Card>
  );
};

export default UserItem;

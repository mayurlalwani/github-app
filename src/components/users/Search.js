import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

const SearchUsers = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log("no text entered");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <form
      className="form"
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search Users..."
        variant="outlined"
        value={text}
        onChange={handleChange}
        style={{ margin: 10 }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
          width: 200,
        }}
      >
        <Button variant="contained" onClick={onSubmit}>
          Search
        </Button>

        {githubContext.users.length > 0 && (
          <>
            <Button variant="secondary" onClick={githubContext.clearUsers}>
              Clear
            </Button>
          </>
        )}
      </Box>
    </form>
  );
};

export default SearchUsers;

import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import Alert from "@mui/material/Alert";

const SearchUsers = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState();
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
    setAlert(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(true);
    } else {
      setAlert(false);
      githubContext.searchRepos(text);
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
        }}
      >
        <Button
          variant="contained"
          onClick={onSubmit}
          sx={{ fontWeight: "bolder" }}
        >
          Search
        </Button>
        {/* {githubContext.users.length > 0 && (
          <>
            <Button
              variant="secondary"
              // onClick={githubContext.clearUsers}
              onClick={handleClear}
            >
              Clear
            </Button>
          </>
        )} */}
      </Box>
      {alert && <Alert severity="error">Enter text to search!!</Alert>}
    </form>
  );
};

export default SearchUsers;

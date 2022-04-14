import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import GithubContext from "../../context/github/githubContext";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

const exampleReducer = (state, action) => {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
};

const SearchUsers = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState();

  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
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

import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      alertContext.setAlert(null);
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-row align-items-center" style={{ margin: "10px" }}>
          <div className="col-auto">
            <input
              type="text"
              name="text"
              placeholder="Search Users..."
              value={text}
              onChange={onChange}
            />
          </div>
          <div className="col-auto">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark btn-sm"
            />
          </div>
          {githubContext.users.length > 0 && (
            <div className="col-auto">
              <button
                className="btn btn-light btn-sm"
                onClick={githubContext.clearUsers}
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;

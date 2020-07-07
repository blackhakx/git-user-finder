import React from "react";
import ReposItem from "./ReposItem";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/GithubContext";
import { useContext } from "react";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return (
    <div>
      <h3>Repos</h3>
      {repos.map((repo) => (
        <ReposItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;

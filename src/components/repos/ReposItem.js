import React from "react";
import PropTypes from "prop-types";

const ReposItem = ({ repo }) => {
  return (
    <div className="card" style={cardStyle}>
      <h5>
        <a href={repo.html_url} style={{ color: "#000000" }}>
          {repo.name}
        </a>
      </h5>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

const cardStyle = {
  textAlign: "left",
  margin: "10px",
  padding: "10px",
};

export default ReposItem;

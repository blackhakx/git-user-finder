import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar justify-content-between navbar-dark bg-dark">
      <div className="navbar-brand">
        <Link className="nav-link" to="/" style={{ color: "white" }}>
          <i className={icon} />
          {title}
        </Link>
      </div>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/" style={{ color: "white" }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{ color: "white" }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/GithubContext";
import { useContext } from "react";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUserRepos, getUser, loading, user, repos } = githubContext;

  //useEffect is componentDidMount
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To search
      </Link>

      <div className="card" style={{ margin: "10px" }}>
        <div className="row">
          <div className="col" style={{ margin: "10px" }}>
            <img
              src={avatar_url}
              alt="User avatar"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <h3>({login})</h3>
            {
              <p>
                Location: {""}
                {location ? location : "Unavailable"}
              </p>
            }
            <p>
              Hireable:{" "}
              {hireable ? (
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
              )}
            </p>
          </div>
          <div className="col" style={{ margin: "10px" }}>
            <ul
              className="list0group list-group-flush"
              style={{ listStyle: "none", paddingLeft: 0 }}
            >
              <li>
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <h4>Blog</h4>
                    <p>{blog}</p>
                  </Fragment>
                )}
              </li>
              <li>
                <strong>Followers:</strong> {followers}
              </li>
              <li>
                <strong>Following:</strong> {following}
              </li>
              <li>
                <strong>Public Repos:</strong> {public_repos}
              </li>
              <li>
                <strong>Public Gists:</strong> {public_gists}
              </li>
            </ul>

            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;

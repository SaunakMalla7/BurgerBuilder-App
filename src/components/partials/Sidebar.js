import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [pathName] = useState(props.history.location.pathname);

  const [userData, setUserData] = useState([]);

  return (
    <>
      {typeof userData != "undefined" && userData.includes("view_product") && (
        <ul className="list-group">
          <li
            className={
              pathName === "/users"
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <Link to="/users">Users</Link>
          </li>
          <li
            className={
              pathName === "/products"
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <Link to="/products">Products</Link>
          </li>
        </ul>
      )}
      {typeof userData === "undefined" || !userData.includes("")}
    </>
  );
};

export default withRouter(Sidebar);

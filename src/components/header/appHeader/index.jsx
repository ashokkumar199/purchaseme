import React, { memo } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Menu from "../../../assets/images/menu.png";
import Search from "../../../assets/images/search.png";
import { PUBLIC_ROUTE } from "../../../utils/route";

function Header() {
  return (
    <header className="mainHeaderContainer">
      <nav className="navigationContainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Team</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="mobileContainer">
        <img src={Menu} className="icon" />
        <Link to={PUBLIC_ROUTE.searchPage}>
          <img src={Search} className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default memo(Header);

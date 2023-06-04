import React from "react";
import Search from "../../../assets/images/search.png";
import "./index.scss";

const HEADER_TEXT = "Search your item";

function HeaderSearchBar({ onChange }) {
  return (
    <div className="SearchBarCard">
      <div className="CardInner">
        <label>{HEADER_TEXT}</label>
        <div className="container">
          <div className="Icon">
            <img src={Search} className="icon" />
          </div>
          <div className="InputContainer">
            <input placeholder="Mobile..." onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearchBar;

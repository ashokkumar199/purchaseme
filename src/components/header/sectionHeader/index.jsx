import React, { memo } from "react";
import HeaderText from "../../text/headerText";
import "./index.scss";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTE } from "../../../utils/route";

const SEE_ALL = "See All";

function SectionHeader({ title, showSeeAll, onClickSeeAll }) {
  return (
    <div className="sectionHeaderContainer">
      <HeaderText title={title} />
      {showSeeAll && (
        <Link to={PUBLIC_ROUTE.searchPage}>
          <button onClick={onClickSeeAll}>
            <span className="seeAllText">{SEE_ALL}</span>
          </button>
        </Link>
      )}
    </div>
  );
}

export default memo(SectionHeader);

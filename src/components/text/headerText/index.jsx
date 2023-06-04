import React, { memo } from "react";
import "./index.scss";
function HeaderText(props) {
  const { title = "", className = "" } = props;
  return (
    <span {...props} className={`headerText ${className}`}>
      {title}
    </span>
  );
}

export default memo(HeaderText);

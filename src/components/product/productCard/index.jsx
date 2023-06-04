import React, { memo } from "react";
import "./index.scss";

function ProductCard({ loading, data }) {
  const { image, title, description } = data;
  return (
    <div className="productCardContainer">
      {!loading ? (
        <div className={`card`}>
          <div className="image">
            <img src={image} />
          </div>
          <div className="content">
            <div className="titleText numberOfLineOne">
              <span>{title}</span>
            </div>
            <div className="numberOfLineThree">
              <p>{description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="card is-loading">
          <div className="image"></div>
          <div className="content">
            <div className="titleText"></div>
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(ProductCard);

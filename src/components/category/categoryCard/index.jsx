import React, { memo } from "react";
import "./index.scss";

function CategoryCard({ onClick, data, active }) {
  const { image, category } = data;

  const labelCheck = (value) => {
    switch (value) {
      case `men's clothing`:
        return "Men";
        break;
      case "jewelery":
        return "jewel";
        break;
      case "electronics":
        return "Elec";
        break;
      case "women's clothing":
        return "Women";
        break;
      default:
        return value;
    }
  };
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "selectedCategoryCardContainer" : ""
      } categoryCardContainer`}
    >
      <div
        className={`${active ? "selectedImageContainer" : ""} imageContainer`}
      >
        <img src={image} />
      </div>
      <p>{labelCheck(category)}</p>
    </div>
  );
}

export default memo(CategoryCard);

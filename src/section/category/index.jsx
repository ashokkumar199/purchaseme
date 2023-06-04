import React, { memo, useCallback, useMemo } from "react";
import "./index.scss";
import SectionHeader from "../../components/header/sectionHeader";
import CategoryCard from "../../components/category/categoryCard";
import AllImage from "../../assets/images/all_black.png";
import AllImageWhite from "../../assets/images/all_white.png";

const CATEGORY = "Category";

function CategoryContainer({ data, loading, onClick, selected }) {
  const categoryList = useMemo(() => {
    const uniqueIds = [];
    if (data?.length > 0) {
      const unique = data.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.category);
        if (!isDuplicate) {
          uniqueIds.push(element.category);
          return true;
        }

        return false;
      });
      return unique;
    }
    return [];
  }, [data]);

  const all = {
    image: selected === "All" ? AllImageWhite : AllImage,
    category: "All",
  };
  return (
    <section className="categoryContainer">
      <SectionHeader title={CATEGORY} />
      <div className="categoryListContainer">
        <CategoryCard
          data={all}
          onClick={() => onClick("All")}
          loading={loading}
          active={selected === "All"}
        />
        {categoryList &&
          categoryList?.map((item, index) => {
            return (
              item?.category !== "" && (
                <CategoryCard
                  onClick={() => onClick(item?.category)}
                  key={index}
                  data={item}
                  loading={loading}
                  active={selected === item?.category}
                />
              )
            );
          })}
      </div>
    </section>
  );
}

export default memo(CategoryContainer);

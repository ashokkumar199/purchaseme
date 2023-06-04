import React, { memo, useCallback } from "react";
import SectionHeader from "../../components/header/sectionHeader";
import ProductCard from "../../components/product/productCard";
import "./index.scss";

const MOST_POPULAR = "Most Popular";

function ProductContainer({ data, loading }) {
  const seeAllProduct = useCallback(() => {}, []);

  return (
    <section className="mostPopularContainer">
      <SectionHeader
        title={MOST_POPULAR}
        showSeeAll
        onClickSeeAll={seeAllProduct}
      />
      <div className="productMainContainer">
        {data &&
          data?.map((item, index) => {
            return <ProductCard key={index} data={item} loading={loading} />;
          })}
      </div>
    </section>
  );
}

export default memo(ProductContainer);

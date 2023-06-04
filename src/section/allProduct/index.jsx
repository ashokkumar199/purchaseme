import React, { memo, useCallback } from "react";
import SectionHeader from "../../components/header/sectionHeader";
import ProductCard from "../../components/product/productCard";
import "./index.scss";

const RESULTS = "Result";

function AllProductContainer({ data, loading }) {
  return (
    <section className="allProductContainer">
      <SectionHeader title={RESULTS} />
      <div className="productMainContainer">
        {data &&
          data?.map((item, index) => {
            return <ProductCard key={index} data={item} loading={loading} />;
          })}
      </div>
    </section>
  );
}

export default memo(AllProductContainer);

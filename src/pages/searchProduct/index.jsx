import React, { useCallback, useEffect, useMemo, useState } from "react";
import AppLayout from "../../layout/appLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchProduct } from "../../service/products/allProducts";
import AllProductContainer from "../../section/allProduct";
import CategoryContainer from "../../section/category";
import HeaderSearchBar from "../../components/searchBar/headerSearchBar";

function SearchProduct() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const callAPI = () => {
    fetchProduct().then((res) => {
      setProductData(res ?? []);
      setLoading(false);
    });
  };

  useEffect(() => {
    let placeHolder = [];
    for (let i = 0; i <= 20; i++) {
      placeHolder.push({
        category: "",
        description: "",
        id: 1,
        image: "",
        price: 0,
        rating: { rate: 0, count: 0 },
      });
    }
    setProductData(placeHolder);
    callAPI();
    return () => {};
  }, []);

  const onClickCategory = useCallback((value) => {
    setSelectedCategory(value);
  }, []);

  const onSearch = useCallback((value) => {
    setSearchValue(value?.target?.value ?? "");
  }, []);

  const filteredData = useMemo(() => {
    let result = [];
    if (selectedCategory === "All") {
      result = productData;
    } else {
      const filter = productData.filter(
        (item) => item.category === selectedCategory
      );
      result = filter;
    }
    const searchResult = result.filter((item) =>
      item?.title?.toLowerCase?.().includes?.(searchValue?.toLowerCase?.())
    );
    return loading ? productData : searchResult;
  }, [productData, selectedCategory, searchValue]);
  console.log("productData", productData);
  console.log("filteredData", filteredData);
  return (
    <AppLayout showHeader={false} showFooter={true}>
      <HeaderSearchBar onChange={onSearch} />
      <CategoryContainer
        selected={selectedCategory}
        onClick={onClickCategory}
        data={productData}
      />
      <AllProductContainer loading={loading} data={filteredData} />
    </AppLayout>
  );
}

export default SearchProduct;

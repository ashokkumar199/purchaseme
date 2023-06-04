import React, { useCallback, useEffect, useState } from "react";
import AppLayout from "../../layout/appLayout";
import Banner from "../../assets/images/banner1.jpg";
import CustomCarousel from "../../components/carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchProduct } from "../../service/products/allProducts";
import ProductContainer from "../../section/products";
import CategoryContainer from "../../section/category";

const CAROUSEL_DATA = [
  {
    image: Banner,
  },
  {
    image: Banner,
  },
  {
    image: Banner,
  },
];

function HomePage() {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const callAPI = () => {
    fetchProduct().then((res) => {
      setProductData(res ?? []);
      setFilteredData(res ?? []);
      setLoading(false);
    });
  };

  useEffect(() => {
    let placeHolder = [];
    for (let i = 0; i <= 5; i++) {
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
    setFilteredData(placeHolder);
    callAPI();
    return () => {};
  }, []);

  const onClickCategory = useCallback(
    (value) => {
      setSelectedCategory(value);
      if (value === "All") {
        setFilteredData(() => productData);
      } else {
        setFilteredData(() => {
          const res = productData.filter((item) => item.category === value);
          return res;
        });
      }
    },
    [filteredData]
  );

  return (
    <AppLayout showHeader={true} showFooter={true}>
      <CustomCarousel data={CAROUSEL_DATA} />
      <CategoryContainer
        selected={selectedCategory}
        onClick={onClickCategory}
        data={productData}
      />
      <ProductContainer loading={loading} data={filteredData} />
    </AppLayout>
  );
}

export default HomePage;

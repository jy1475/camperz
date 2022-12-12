import React, { useState, useEffect } from "react";
import { getProductList } from "../../lib/apis/productApis";
import ProductItem from "../../component/product/ProductItem";
import styled from "styled-components";

export default React.memo(function ProductList() {
  const [productList, setProductList] = useState([]);

  const loadproductList = async () => {
    await getProductList().then((res) => {
      console.log(res);
      setProductList([...res.data.product]);
    });
  };

  useEffect(() => {
    loadproductList();
  }, []);

  return (
    <>
      <StyledProductList>
        {productList &&
          productList.map((item) => (
            <ProductItem key={item.id} {...item} load={loadproductList} />
          ))}
      </StyledProductList>
    </>
  );
});

const StyledProductList = styled.ul`
  display: flex;

  overflow-x: scroll;
  padding: 0;
`;
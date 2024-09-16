import { React, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";

const ShoppingMain = () => {
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "/v1/search/shop.json";
    const ClientID = "5tvIZreWtKfjKqWP5Lfe";
    const ClientSecret = "Cux7rbskse";

    await axios
      .get(URL, {
        params: {
          query: "목걸이",
          display: 24,
        },
        headers: {
          "X-Naver-Client-Id": ClientID,
          "X-Naver-Client-Secret": ClientSecret,
        },
      })
      .then((res) => {
        setData(res.data.items);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    shoppingData();
  }, []);

  return (
    <Container>
      {data &&
        data.map((item) => (
          <ShoppingList key={item.productId}>
            <ProductItem product={item} />
          </ShoppingList>
        ))}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 45px;
`;
export const ShoppingList = styled.div``;

export default ShoppingMain;

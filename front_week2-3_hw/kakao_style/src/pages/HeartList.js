import React from "react";
import useProductStore from "../store/store";
import { Container, ShoppingList } from "./ShoppingMain";
import ProductItem from "../components/ProductItem";

const HeartList = () => {
  const products = useProductStore((state) => state.products);
  return (
    <Container>
      {products &&
        products.map((item) => (
          <ShoppingList key={item.productId}>
            <ProductItem product={item} />
          </ShoppingList>
        ))}
    </Container>
  );
};

export default HeartList;

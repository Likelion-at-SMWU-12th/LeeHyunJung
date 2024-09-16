import { useState, useEffect } from "react";
import useProductStore from "../store/store";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const products = useProductStore((state) => state.products);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const addProduct = useProductStore((state) => state.addProduct);

  const isProductInCart = products.some(
    (p) => p.productId === product.productId
  );
  const [heart, setHeart] = useState(isProductInCart);

  useEffect(() => {
    setHeart(isProductInCart);
  }, [products, isProductInCart]);

  const handleHeartClick = () => {
    if (heart) {
      removeProduct(product.productId);
    } else {
      addProduct(
        product.productId,
        product.title,
        product.lprice,
        product.image,
        product.link
      );
    }

    setHeart(!heart);
  };

  return (
    <Container>
      <NecklaceImg
        src={product.image}
        alt="product_img"
        onClick={() => window.open(product.link)}
      />
      <Title dangerouslySetInnerHTML={{ __html: product.title }} />
      <Price>{product.lprice}원</Price>
      {heart ? (
        <Heart src="/images/heart.png" alt="heart" onClick={handleHeartClick} />
      ) : (
        <Heart
          src="/images/empty_heart.png"
          alt="heart"
          onClick={handleHeartClick}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 200px;
  position: relative;
`;

const NecklaceImg = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 12px;
  margin-top: 2px;
`;

const Price = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

const Heart = styled.img`
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export default ProductItem;

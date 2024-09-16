import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ShoppingMain from "./pages/ShoppingMain";
import HeartList from "./pages/HeartList";
import useProductStore from "./store/store";

function App() {
  const navigate = useNavigate();
  const products = useProductStore((state) => state.products);
  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}>Pick your Necklace!</Title>
      <CartBtn onClick={() => navigate("/heartlist")}>내가 찜한 리스트</CartBtn>
      <Heart
        onClick={() => navigate("/heartlist")}
        src="/images/heart.png"
        alt="heart"
      />
      <HeartNum onClick={() => navigate("/heartlist")}>
        {products.length}
      </HeartNum>
      <Routes>
        <Route path="/" element={<ShoppingMain />} />
        <Route path="/heartlist" element={<HeartList />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 50px;
  position: relative;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: bolder;
  color: rgb(243, 222, 104);
  cursor: pointer;
`;

const CartBtn = styled.button`
  position: absolute;
  background: none;
  border: none;
  font-size: 15px;
  top: 32px;
  right: 140px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const Heart = styled.img`
  position: absolute;
  width: 30px;
  top: 29px;
  right: 110px;
  cursor: pointer;
`;

const HeartNum = styled.span`
  position: absolute;
  font-size: 13px;
  top: 30px;
  right: 90px;
  padding: 5px;
  border-radius: 30px;
  background-color: rgba(227, 227, 227, 0.8);
  cursor: pointer;
`;

export default App;

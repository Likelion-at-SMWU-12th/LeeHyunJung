import React from "react";
import styled from "styled-components";
import England from "./image/england.jpg";
import France from "./image/France.jpg";
import Japan from "./image/Japan.png";

const Container = styled.div`
  display: flex;
`;

const Countryphoto = styled.button`
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-repeat: no-repeat;
  border: outset;
  border-width: px;
  width: 200px;
  height: 200px;
  margin: auto;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 0px;
  margin-bottom: 10px;
  display: flex;
  position: relative;

  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:hover .country-name {
    opacity: 1;
  }
`;

const CountryName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 20px;
  opacity: 0;
`;

const Title = styled.div`
  background-color: rgb(153, 174, 194);
  font-size: 30px;
  color: White;
`;

const Travel = () => {
  return (
    <div>
      <Title>HyeonJeong's Last Travel</Title>
      <Container>
        <Countryphoto path={England}>
          <CountryName className="country-name">England</CountryName>
        </Countryphoto>
        <Countryphoto path={France}>
          <CountryName className="country-name">France</CountryName>
        </Countryphoto>
        <Countryphoto path={Japan}>
          <CountryName className="country-name">Japan</CountryName>
        </Countryphoto>
      </Container>
    </div>
  );
};

export default Travel;
export { Container };
export { Countryphoto };
export { CountryName };
export { Title };

import React, { useState } from "react";
import styled from "styled-components";
import Travel from "./Travel";
import Plan from "./Plan";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
`;

const MainTitle = styled.div`
  font-size: 100px;
  color: rgb(153, 174, 194);
  text-align: center;
  margin-bottom: 60px;
`;

const TravelButton = styled.button`
  color: white;
  background: rgb(87, 142, 193);
  padding: 15px;
  border-color: rgb(87, 142, 193);
  border-width: 1px;
  border-style: solid;
  border-radius: 15rem;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgb(42, 107, 167);
  }
`;

const Main = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      {selectedComponent === null ? (
        <Wrapper>
          <MainTitle>HyeonJeong's Travel</MainTitle>
          <Container>
            <TravelButton onClick={() => handleClick("Travel")}>
              Last-Travel
            </TravelButton>
            <TravelButton onClick={() => handleClick("Plan")}>
              Travel-Plan
            </TravelButton>
          </Container>
        </Wrapper>
      ) : selectedComponent === "Travel" ? (
        <Travel />
      ) : (
        <Plan />
      )}
    </div>
  );
};

export default Main;

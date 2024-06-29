import React from "react";
import { Container, CountryName } from "./Travel";
import { Countryphoto } from "./Travel";
import { Title } from "./Travel";
import Taiwan from "./image/Taiwan.jpeg";

const Plan = () => {
  return (
    <div>
      <Title>HyeonJeong's Travel Plan</Title>
      <Container>
        <Countryphoto path={Taiwan}>
          <CountryName className="country-name">Taiwan</CountryName>
        </Countryphoto>
      </Container>
    </div>
  );
};

export default Plan;

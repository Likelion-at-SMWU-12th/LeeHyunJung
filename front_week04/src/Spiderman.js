import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  text-align: center;
  algin-items: center;
  list-style: none;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  width: 500px;
  margin: auto;
`;

const SpiderButton = styled.button`
  margin: 10px;
  ${(props) =>
    props.selected &&
    css`
      background-color: Black;
      color: white;
    `}
`;

const SpiderButtonbox = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`;

const Spiderman = () => {
  const [spidermen, setMovies] = useState([]);
  const [selectedButton, setSelectedButton] = useState("first");

  useEffect(() => {
    axios
      .get("http://localhost:8000/spidermen")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <Title>Our Spiderman 🕷️🕸️</Title>
      <SpiderButtonbox>
        <SpiderButton
          selected={selectedButton === "first"}
          onClick={() => handleButtonClick("first")}
        >
          1️⃣ Spiderman
        </SpiderButton>
        <SpiderButton
          selected={selectedButton === "second"}
          onClick={() => handleButtonClick("second")}
        >
          2️⃣ Spiderman
        </SpiderButton>
        <SpiderButton
          selected={selectedButton === "third"}
          onClick={() => handleButtonClick("third")}
        >
          3️⃣ Spiderman
        </SpiderButton>
      </SpiderButtonbox>
      <ul>
        {spidermen.map((spiderman) => (
          <Container key={spiderman.id}>
            <li>
              <h2>{spiderman.title}</h2>
              <p>{spiderman.movie}</p>
              <p>{spiderman.actor}</p>
            </li>
          </Container>
        ))}
      </ul>
    </div>
  );
};

export default Spiderman;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import PickSpiderman from "./PickSpiderman";

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  text-align: center;
  list-style: none;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  width: 500px;
  height: 720px;
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

  const ViewSpiderman = () => {
    if (selectedButton === "first") {
      return spidermen.filter((spiderman) => spiderman.id === 1);
    } else if (selectedButton === "second") {
      return spidermen.filter((spiderman) => spiderman.id === 2);
    } else if (selectedButton === "third") {
      return spidermen.filter((spiderman) => spiderman.id === 3);
    }
    return spidermen;
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
        {ViewSpiderman().map((spiderman) => (
          <Container key={spiderman.id}>
            <li>
              <h1>{spiderman.title}</h1>
              <p>{spiderman.movie}</p>
              <img src={spiderman.image} alt={spiderman.actor} />
              <h2>{spiderman.actor}</h2>
              <PickSpiderman />
            </li>
          </Container>
        ))}
      </ul>
    </div>
  );
};

export default Spiderman;

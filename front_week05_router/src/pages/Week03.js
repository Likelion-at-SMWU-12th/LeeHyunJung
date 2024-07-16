import React from "react";
import { Seminar } from "./Week01";
import { Title } from "./Week01";
import { Learn } from "./Week01";

const Week03 = () => {
  return (
    <Seminar>
      <Title>🦁 3rd Seminar 🦁</Title>
      <Learn>
        <h2>What we learn</h2>
        <p>React.js</p>
        <p>개발 환경 세팅</p>
        <p>리액트 프로젝트 생성</p>
        <p>styled-components</p>
      </Learn>
      <Learn>
        <h2>My Homework</h2>
        <img src="/images/week03_img.png" alt="week03"></img>
      </Learn>
    </Seminar>
  );
};

export default Week03;

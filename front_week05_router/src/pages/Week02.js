import React from "react";
import { Seminar } from "./Week01";
import { Title } from "./Week01";
import { Learn } from "./Week01";

const Week02 = () => {
  return (
    <Seminar>
      <Title>🦁 2nd Seminar 🦁</Title>
      <Learn>
        <h2>What we learn</h2>
        <p>시계 띄우기</p>
        <p>To-Do List</p>
        <p>타이핑 효과</p>
      </Learn>
      <Learn>
        <h2>My Homework</h2>
        <img src="/images/week02_img.png" alt="week02"></img>
      </Learn>
    </Seminar>
  );
};

export default Week02;

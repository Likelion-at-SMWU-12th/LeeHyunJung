import React from "react";
import { Seminar } from "./Week01";
import { Title } from "./Week01";
import { Learn } from "./Week01";

const Week05 = () => {
  return (
    <Seminar>
      <Title>🦁 5th Seminar 🦁</Title>
      <Learn>
        <h2>What we learn</h2>
        <p>Virtual-Dom</p>
        <p>useRef</p>
        <p>useCallback</p>
        <p>React.memo</p>
        <p>React-Router-Dom</p>
      </Learn>
      <Learn>
        <h2>My Homework</h2>
      </Learn>
    </Seminar>
  );
};

export default Week05;

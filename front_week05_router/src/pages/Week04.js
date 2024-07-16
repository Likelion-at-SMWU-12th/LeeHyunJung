import React from "react";
import styled from "styled-components";
import { Seminar } from "./Week01";
import { Title } from "./Week01";
import { Learn } from "./Week01";

const Video = styled.video`
  width: 100%;
  height: auto;
`;
const Week04 = () => {
  return (
    <Seminar>
      <Title>🦁 4th Seminar 🦁</Title>
      <Learn>
        <h2>What we learn</h2>
        <p>리액트 기본 설정</p>
        <p>props & state</p>
        <p>useEffect</p>
        <p>React Hooks</p>
        <p>API 호출 실습</p>
      </Learn>
      <Learn>
        <h2>My Homework</h2>
        <Video controls>
          <source src="/videos/week04_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </Learn>
    </Seminar>
  );
};

export default Week04;
